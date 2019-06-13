import GameConfig from "../Config/GameConfig";
import People from "../Perfeb/People";

/**
 * 数据中心 所有的数据
 */
export default class CountryData{
    public static ins_ : CountryData = new CountryData();
    /**************主数据********************/
    /**国家财政 */
    public money : number = 10000;
    /**国家人口 */
    public population : number=100;
    /**国家幸福度 */
    public popularSupport : number = 50;
    /**国家科技 */
    public technology : number = 10;
    /**国家声望 */
    public prestige : number = 90;

    /***************副数据*****************/
    //--------主数据影响
    //固定支出
    /**军费 */
    public armyCost : number = 100;
    /**政府费用 */
    public governCost : number = 100;
    /**科技费用 */
    public technologyCost : number = 100;
    /**税收率 */
    public tax : number = 0.05;

    //变动率
    /**粮食消耗量 (人均消耗量) */
    public grainCost : number = 1;
    /**粮食产量 (人均产量)*/
    public grainAdd : number = 1;
    /**粮食库存 */
    public grainStock:number=0;
    /**军费减少率 */
    public armyPercent:number=0.1;
    /**GDP 挣钱能力，每人每天能产多少钱 */
    public GDP : number = 10;


    /**进城数 目标值2min*/
    public enterPeople : number = 50;
    /**出城数 目标值2min*/
    public exitPeople : number = 50;
    /**人口比例数 进城数/出城数 2min*/
    public percent : number = 1;
    /**城外人口数组*/
    public arr_outPeople : Array<People>;
    /**城内人口数组 */
    public arr_inPeople : Array<People>;
    /**出城人口 实际值/2min */
    public _outerPeople : number;
    /**进门人口 实际值/2min */
    public _innerPeople : number;
    //------------------------------------------普通人口占比
    /**普通人中 医生的占比*/
    public percentDoctor : number = 0.02;
    /**普通人种 警察占比 */
    public percentPolic : number = 0.04;
    /**普通人种 商人的占比 */
    public percentShoper : number = 0.1;
    /**游手好闲 */
    public percentNothing : number = 0.1;
    /**农民 */
    public farmer : number = 0.7;

    //--------影响 【主数据】----------------
    






    //--------事件数据
    /**瘟疫  0 1 2 3 4 5 0-是没发生*/
    public pest : number = 0;
    /**地震  0 1 2 3 4 5 0-是没发生 */
    public naturalDisaster : number = 0;
    /**战乱  0 1 2 3 4 5 0-是没发生*/
    public war : number = 0;

    //--------职业人数
    public arr_People : Array<string> = ["common","scientist","star","bandit","robber"];
    /**普通人 A  普通人中会产生医生 警察 等正常职业*/
    public common : number = 95;
    /**科学家 SSS*/
    public scientist : number = 1;
    /**明星 SS*/
    public star : number = 2;
    /**土匪 -S */
    public bandit : number = 1;
    /**盗贼 -A */
    public robber : number = 1;
        // /**普通人 A  普通人中会产生医生 警察 等正常职业*/
        // public common : number = 1;
        // /**科学家 SSS*/
        // public scientist : number = 0;
        // /**明星 SS*/
        // public star : number = 0;
        // /**土匪 -S */
        // public bandit : number = 0;
        // /**盗贼 -A */
        // public robber : number = 0;
    //--------城门
    /**门是否打开*/
    public isDoorOpen : boolean=true;
    /**筛查能力 启动特殊门的时候  筛查能力生效*/
    public preparation : number = 0.5;
    /**特殊门 筛查 1-防止进入   2-邀请进入*/
    // public keepSelect : Array<number> = [];

    

    //-----------------------------------------目标点
    /**目标点 医院 */
    public posHospital : any = {x: 389,y:541}; 
    /**目标点 农场 */
    public posFarm : any = {x: 132,y:709}; 
    /**目标点 新闻房*/
    public posEventHouse : any = {x: 591.5,y:729}; 
    /**皇宫 */
    public posPalace : any = {x: 981,y:817}; 
    /**科技 */
    public posTechnology : any = {x: 1466,y:621}; 
    /**军队 */
    public posArmy : any = {x: 1874,y:707}; 

    //----------------------------------------区域
    /**墙内区域划分 */
    public arr_LeftArea : Array<any>;
    public arr_RightArea : Array<any>;
    
    //---------------峰值
    /**国家幸福度峰值 */
    public popularSupportMax : number = 100;
    /**国家科技峰值 */
    public technologyMax : number = 100;
    /**国家声望峰值 */
    public prestigeMax : number = 100;
    

    constructor(){
        this.arr_LeftArea = new Array<any>();
        this.arr_RightArea = new Array<any>();
        this.arr_inPeople = new Array<People>();
        this.arr_outPeople = new Array<People>();
    }

    onEnable(){
        
    }

    /**获取区域 */
    public setArea(view : Laya.Node) : void
    {
        let children = view._children;
        for(let i=0;i<children.length;i++)
        {
            if(children[i].name == "palace")
            {
                this.arr_LeftArea.push(children[i]);
                this.arr_RightArea.push(children[i]);                
            }
            else if(children[i].x<981)
            {
                this.arr_LeftArea.push(children[i]);
            }
            else
            {
                this.arr_RightArea.push(children[i]);
            }
        }
    }

    /**
     * 获取人口流量 :
     * return 进入 / 出去
     */
    public get_PeopleMove() : number
    {
        return this.percent;
    }

    /**
     * 获取人种比例
     * @param type 人种
     */
    public get_ProfessionPercent(type:string) : number
    {
        if(this[type] === undefined) console.log("不存在该人种");
        else return this[type]/(this.population);
    }


    //----------------------------------------结算
    /**设置五大主值结算 */
    public set_MainData(type:string,count:number):void
    {
        switch(type)
        {
            case "money":
                this.money+=count;
                break;
            case "population":
                this.population+=count;
                break;
            case "popularSupport":
                this.popularSupport+=count;
                break;
            case "technology":
                this.technology+=count;
                break;
            case "prestige":
                this.prestige+=count;
                break;
        }
        this.cal_MainData(type,count);
    }

    
    public cal_MainData(type:string,count:number):void
    {
        switch(type){
            case GameConfig.MAIN_MONEY:
            ///TO DO
        }
        //财政 影响结算
        this.moneyInfluence();
        //人口 影响结算
        this.popularSupportInfluence();
        //幸福度 影响结算
        this.popularSupportInfluence();
        //科技 影响结算
        this.technologyInfluence();
        //威望 影响结算
        this.prestigeInfluence();
    }    

    /**财政结算 财政影响*/
    private moneyInfluence() : void
    {
        
    }

    
    /**幸福度 影响结算*/
    private popularSupportInfluence() : void
    {
        
    }

    /**人口 影响结算*/
    private populationInfluence() : void
    {
        
    }

    /**科技 影响结算*/
    private technologyInfluence() : void
    {
        
    }

    /**威望 影响结算*/
    private prestigeInfluence() : void
    {
        
    }

    /**改变 进、出 目标人数 @isout:是否是出城  @count：改变目标值*/
    public setInOutTarget(isOut,count) : void
    {
        if(isOut) this.exitPeople += count;
        else this.enterPeople += count;
    }

    /**改变 进、出 目标人数 @isout:是否是出城  @count：改变实际值*/
    public setInOutTruth(isOut,count) : void
    {
        if(isOut) this._outerPeople += count;
        else this._innerPeople += count;
    }
    
    
}

/**外城 */
export class OutCountryData{
    public static ins_ : OutCountryData = new OutCountryData();
    /**************主数据********************/
    /**最大外城容纳数量 */
    public maxCount : number=50;
    /**当前外城人口数 */
    public outCount:number=0;
    /**人滞留时间 */
    public limitTime:number=50;
    //------------------------------------------
    /**普通人*/
    public common : number = 0.8;
    /**科学家 SSS*/
    public scientist : number = 0.03;
    /**明星 SS*/
    public star : number = 0.01;
    /**土匪 -S */
    public bandit : number = 0.06;
    /**盗贼 -A */
    public robber : number = 0.1;
    /**变量名 */
    public arr_People : Array<string> = ["common","scientist","star","bandit","robber"];
    
    /**获取区间数组 0,0.8,0.83,0.84,0.9,1*/
    public getPercentArea():Array<number>
    {
       let arrPercent = [];//生产比例
       let arr_People = this.arr_People;
       let number = 0;
       arrPercent.push(number);
       for(let i = 0;i<arr_People.length;i++)
       {
            number += this[arr_People[i]];
            arrPercent.push(number);
       }
       return arrPercent;
    }
}