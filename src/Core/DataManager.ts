/**
 * 数据中心 所有的数据
 */
export default class CountryData{
    public static ins_ : CountryData = new CountryData();
    /**************主数据********************/
    /**国家财政 */
    public gold : number;
    /**国家幸福度 */
    public popularSupport : number;
    /**国家人口 */
    public population : number;
    /**国家科技 */
    public technology : number;
    /**国家声望 */
    public prestige : number;

    /***************副数据*****************/
    //--------普通数据
    /**粮食产量 */
    public grainYield : number;
    /**粮食消耗 */
    public grainConsumption : number;

    //--------事件数据
    /**瘟疫  0 1 2 3 4 5 0-是没发生*/
    public pest : number;
    /**地震  0 1 2 3 4 5 0-是没发生 */
    public naturalDisaster : number;
    /**战乱  0 1 2 3 4 5 0-是没发生*/
    public war : number;

    //--------职业人数
    /**普通人 A  普通人中会产生医生 警察 等正常职业*/
    public commonMan : number;
    /**科学家 SSS*/
    public scientist : number;
    /**明星 SS*/
    public star : number;
    /**土匪 -S */
    public bandit : number;
    /**盗贼 -A */
    public robber : number;
    
    //--------城门
    /**门是否打开*/
    public isDoorOpen : boolean;
    /**人口进入量 */
    public enterPeople : number;
    /**人口流出量 */
    public outerPeople : number;
    /**筛查能力 启动特殊门的时候  筛查能力生效*/
    public preparation : number;
    /**特殊门 筛查 1-防止进入   2-邀请进入*/
    // public keepSelect : Array<number> = [];
    /**流动比例 */
    public percent:number=1;

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
        else return this[type]/(this.commonMan + this.scientist + this.star + this.bandit + this.robber);
    }

    /**数据结算  综合计算所有的数值*/
    // private 



}

/**外城 */
export class OutCountryData{
    public static ins_ : OutCountryData = new OutCountryData();
    /**************主数据********************/
    /**最大外城容纳数量 */
    public maxCount : number=10;
    /**当前外城人口数 */
    public outCount:number=0;
}