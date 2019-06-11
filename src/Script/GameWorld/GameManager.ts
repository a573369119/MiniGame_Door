import CountryData from "../../Core/CountryData";
import WorldEventManager from "../../Core/WorldEventManager";
import PeopleMaanger from "../../Core/PeopleManager";

/**
 * 世界管理器脚本
 */
export default class GameManager extends Laya.Script{
    /**城池数据 */
    private countryData : CountryData;
    /**事件发生器 */
    private worldEventManager : WorldEventManager;
    /**人类管理器*/
    private PeopleManager : PeopleMaanger;

    constructor(){
        super();
    }

    onEnable(): void
    {
        this.gameDataInit();
    }

    /**数据初始化 */
    private gameDataInit() : void
    {
        this.countryData = new CountryData();
        this.worldEventManager = new WorldEventManager();
        this.PeopleManager = new PeopleMaanger;
    }
    

}