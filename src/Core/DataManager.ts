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
    public technology : number = 50;
    /**国家声望 */
    public prestige : number = 50;

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
    /**粮食消耗量 (人均消耗量) */
    public grainPerCost : number = 1;
    

    //变动率
    /**粮食产量 (人均产量)*/
    public grainPerAdd : number = 1;
    /**粮食库存 */
    public grainStock:number=0;
    /**军费减少率 */
    public armyPercent:number=0.2;
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
    /**0-医生 1-警察 2-商人 -3游手好闲 -4农民*/
    public arr_personPercentName : Array<string> = ["percentDoctor","percentPolic","percentShoper","percentNothing","percentFarmer"];
    /**普通人中 医生的占比*/
    public percentDoctor : number = 0.02;
    /**普通人种 警察占比 */
    public percentPolic : number = 0.03;
    /**普通人种 商人的占比 */
    public percentShoper : number = 0.15;
    /**游手好闲 */
    public percentNothing : number = 0.1;
    /**农民 */
    public percentFarmer : number = 0.7;

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
    /**已生成的人种  0 普通   1科学家  2明星 3土匪 4盗贼*/
    public alreadyCreate : Array<number> = [0,0,0,0,0];

    //--------城门
    /**门是否打开*/
    public isDoorOpen : boolean=true;
    /**筛查能力 启动特殊门的时候  筛查能力生效*/
    public preparation : number = 0.5;
    /**特殊门 筛查 1-防止进入   2-邀请进入*/
    // public keepSelect : Array<number> = [];


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
        this.arr_LeftArea.push(view.parent.getChildByName("sp_wall"));
        this.arr_RightArea.push(view.parent.getChildByName("sp_wall"));
    }

    /**生成人的随机移动速度 */
    public getMoveSpeed() : number
    {
        return GameConfig.TEST_POINT_SPEED*(Math.random()+0.5);
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
    /**财政结算*/
    public cal_Money() : void
    {
        this.prestige_ArmyCost();
        this.steadyCost();
        this.getTax();
        this.technology_GDP();
    }

    /**粮食 影响结算*/
    public influence_Grain() : void
    {
        let grainCost=this.population_GrainCost();
        let grainAdd=this.population_GrainAdd();
    }

    /**幸福度 影响结算 */
    public influence_PopularSupport() : void
    {
        this.support_Percent();
        this.support_PeopleType();
        this.support_OutPeopleMax();
    }


    //-------------------------------公式
    /**稳定支出 */
    private steadyCost():void
    {
        this.money-=this.armyCost*(1-this.armyPercent)+this.governCost+this.technologyCost;
    }

    /**粮食消耗 人口数*每人消耗量*/
    private population_GrainCost():number
    {
        return this.population*this.grainPerCost;
    }

    /**粮食生产 人口数*每人实际产量*/
    private population_GrainAdd():number
    {
        //科技度转换 科技度0-100 生产变化率0-2 公式暂定y=x*0.02-1,50为分界限
        let change=this.technology*0.02-1;
        this.grainPerAdd=(1+change)*this.grainPerAdd;
        let pro=this.grainPerAdd*this.population;
        return pro;
    }

    /**幸福度影响人口流动率 */
    private support_Percent():void
    {
        //幸福影响人口流动率的波动范围 -0.2~0.2 公式暂定y=x*0.004-0.2,50为分界限
        let change=this.popularSupport*0.004-0.2;
        this.percent=(1+change)*this.percent;   
    }

    /**幸福度影响人种几率 均从普通人几率中进行替换*/
    private support_PeopleType()
    {
        //科学家波动范围 0.01-0.05 公式暂定y=x*0.0004+0.01,50为分界限
        OutCountryData.ins_.scientist=this.popularSupport*0.0004+0.01;
        //明星波动范围 0.005-0.025 公式暂定y=x*0.0002+0.005,50为分界限
        OutCountryData.ins_.star=this.popularSupport*0.0002+0.005;
        //盗贼波动范围 0.06-0.14 公式暂定y=x*0.0008+0.06,50为分界限
        OutCountryData.ins_.robber=this.popularSupport*0.0008+0.06;
        //土匪波动范围 0.02-0.1 公式暂定y=x*0.0008+0.02,50为分界限
        OutCountryData.ins_.bandit=this.popularSupport*0.0008+0.02;
        //普通人波动范围
        OutCountryData.ins_.common=1-(OutCountryData.ins_.scientist+OutCountryData.ins_.star+OutCountryData.ins_.robber+OutCountryData.ins_.bandit);
    }

    /**幸福度影响墙外人口 墙外最大容纳数200-600*/
    private support_OutPeopleMax():void
    {
        //墙外增长率波动范围 0.2-0.6 公式暂定y=x*0.004+0.2,50为分界限
        let change=this.popularSupport*0.004+0.2;
        OutCountryData.ins_.maxCount=1000*change;
    }

    /**科技影响GDP */
    private technology_GDP():void
    {
        //GDP波动范围 -0.5~0.5 公式暂定y=x*0.05,50为分界限
        let change=this.technology*0.01-0.5;
        //实际GDP
        let currGDP=this.GDP*(change+1);
        this.money-=currGDP*this.population;
    }
    /**威望影响军费 */
    private prestige_ArmyCost():void
    {
        //军费减少率波动范围 0.0-0.4 公式暂定y=x*0.004,50为分界限
        this.armyPercent=this.prestige*0.004;
    }

    /**税收 */
    public getTax():void
    {
        this.money+=this.tax;
    }

    /**粮食结算 */
    /*public cal_Grain():void
    {
        //如果还有粮食库存
        if(CountryData.ins_.grainAdd>=CountryData.ins_.grainMinus)
        {
            //如果生产量大于大于消耗率的某个倍率，先让其自动转化为财政，之后修改为手动转化
            if(CountryData.ins_.grainAdd/CountryData.ins_.grainMinus>=GameConfig.GRAIN_EXCHANGEMONEY_PERCENT)
            {
                //超出倍率的部分
                let exchange=CountryData.ins_.grainAdd-CountryData.ins_.grainMinus*GameConfig.GRAIN_EXCHANGEMONEY_PERCENT;
                //换钱
                this.exchangeMoney(exchange);
                //剩余的加入库存
                CountryData.ins_.grainStock+=(CountryData.ins_.grainAdd-exchange-CountryData.ins_.grainMinus);
            }
            else
            {
                //加入库存
                CountryData.ins_.grainStock+=(CountryData.ins_.grainAdd-CountryData.ins_.grainMinus);
            }
        }
        else
        {
            //如果库存加上生产的粮食不足以抵够消耗的粮食
            if((CountryData.ins_.grainStock+CountryData.ins_.grainAdd)<CountryData.ins_.grainMinus)
            {
                //点击选择是否购买粮食，如果不购买则导致人口减少和幸福度降低
                
            }
            else
            {
                //减少库存
                CountryData.ins_.grainStock-=CountryData.ins_.grainMinus-CountryData.ins_.grainAdd;
            }
        }
    }*/

    
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
    
    /**通知人口出城 @type ： 进成ture  出城 false*/
    public peopleGoOut(type) : void
    {
        let arr ;
        if(type) arr = this.arr_outPeople;
            else arr = this.arr_inPeople;
        let random = Math.random();
        let index = Math.floor(arr.length*random);
        if(index>0)
        {
            if(!arr[index].isGo)
            {
                arr[index].peopleGo(type);
                return;
            } 
            this.peopleGoOut(type);
            return;
        }
        console.log("随机出错");
        return;
    }
    
    /**出城门相关操作 */
    public goOut(type) : void
    {
        this._outerPeople++;//实际人数加一
        this.population--;//总人口 --
        if(this[type]) this[type]--;
    }
}

/**外城 */
export class OutCountryData{
    public static ins_ : OutCountryData = new OutCountryData();
    /**************主数据********************/
    /**最大外城容纳数量 */
    public maxCount : number=400;
    /**当前外城人口数 */
    public outCount:number=0;
    /**人滞留时间 */
    public limitTime:number=50;
    //------------------------------------------
    /**普通人*/
    public common : number = 0.795;
    /**科学家 SSS*/
    public scientist : number = 0.03;
    /**明星 SS*/
    public star : number = 0.015;
    /**土匪 -S */
    public bandit : number = 0.06;
    /**盗贼 -A */
    public robber : number = 0.1;
    /**变量名 */
    public arr_People : Array<string> = ["common","scientist","star","bandit","robber"];
    
    /**获取区间数组 0,0.795,0.825,0.84,0.9,1*/
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