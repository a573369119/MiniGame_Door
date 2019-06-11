import WorldEventManager from "../../Core/WorldEventManager";
import { ui } from "../../ui/layaMaxUI";
import DataManager from "../../Core/DataManager";
import UIManager from "../../Core/UIManager";
import PeopleManager from "../../Core/PeopleManager";

/**
 * 世界管理器脚本
 */
export default class GameWorld extends ui.GameWorldUI{
    /**DataManager  单例 */
    /**事件发生器 */
    private worldEventManager : WorldEventManager;
    /**人类管理器*/
    private peopleManager : PeopleManager;
    /**UI管理器 */
    private uiManager : UIManager;

    //-------------------------------
    /**门是否打开 */
    private isOpen : boolean;
    /**屏幕宽度 */
    private screenWidth : number;


    constructor(){
        super();
    }

    onEnable(): void
    {
        this.gameDataInit();//游戏变量初始化
        this.addEvent();//给桥添加事件 
        this.screenSetting();//屏幕居中
        this.gameStart();//游戏流程开始
    }

    /**数据初始化 */
    private gameDataInit() : void
    {
        this.worldEventManager = new WorldEventManager();
        this.peopleManager = new PeopleManager();
        this.uiManager = new UIManager(this.sp_UI);
    }

    /**添加事件 */
    private addEvent() : void
    {
        //给门帮点点击事   
        this.sp_door.on(Laya.Event.CLICK,this,this.doorCtr);
    }

    /**屏幕 局中*/
    private screenSetting() : void
    {
        this.screenWidth = 900/(Laya.Browser.clientHeight/Laya.Browser.clientWidth);//屏幕高度
        console.log("width" + this.screenWidth);
    }

    /**门的开关 */
    private doorCtr() : void
    {
        if(this.isOpen)
        {//开门
            this.isOpen = false;
            this.doorClose();
        }
        else
        {//关门
            this.isOpen = true;
            this.doorOpen();
        }
    }

    /**关门 */
    private doorClose() : void
    {

    }

    /**开门 */
    private doorOpen() : void
    {

    }

    ////////////游戏流程开始//////////////////////////
    /**游戏流程开始 */
    private gameStart() : void
    {
        this.peopleManager.createPeople();//人口生成逻辑运行
    }

}