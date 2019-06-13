import GameConfig from "../Config/GameConfig";

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
    //--------普通数据
    /**今日粮食产量 */
    public grainAdd : number = 1000;
    /**今日粮食消耗 */
    public grainMinus : number =1000;
    /**粮食库存 */
    public grainStock:number=100;

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
    public common : number = 92;
    /**科学家 SSS*/
    public scientist : number = 3;
    /**明星 SS*/
    public star : number = 3;
    /**土匪 -S */
    public bandit : number = 1;
    /**盗贼 -A */
    public robber : number = 1;
    
    //--------城门
    /**门是否打开*/
    public isDoorOpen : boolean=true;
    /**人口进入量 */
    public enterPeople : number = 100;
    /**人口流出量 */
    public outerPeople : number = 100;
    /**筛查能力 启动特殊门的时候  筛查能力生效*/
    public preparation : number = 0.5;
    /**特殊门 筛查 1-防止进入   2-邀请进入*/
    // public keepSelect : Array<number> = [];
    //------------------------------------------
    /**普通人中 医生的占比*/
    public percentDoctor : number = 0.02;
    /**普通人种 警察占比 */
    public percentPolic : number = 0.04;
    /**普通人种 商人的占比 */
    public percentShoper : number = 0.1;
    /**游手好闲 */
    public percentNothing : number = 0.14;
    /**农民 */
    public farmer : number = 0.7;
    /**流动比例 */
    public percent:number=1;

    //---------------峰值
    /**国家幸福度峰值 */
    public popularSupportMax : number = 100;
    /**国家科技峰值 */
    public technologyMax : number = 100;
    /**国家声望峰值 */
    public prestigeMax : number = 100;
    

    constructor(){

    }

    onEnable(){

    }

    /**
     * 获取人口流量 :
     * return 进入 / 出去
     */
    public get_PeopleMove() : number
    {
        return this.enterPeople/this.outerPeople;
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
    /**五大主值结算 */
    public cal_MainData(type:string,count:number):void
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
}