import WorldEventManager from "../../Core/WorldEventManager";
import { ui } from "../../ui/layaMaxUI";
import DataManager from "../../Core/DataManager";
import UIManager from "../../Core/UIManager";
import PeopleManager from "../../Core/PeopleManager";
import GameConfig from "../../Config/GameConfig";
import MsgDialog from "../../Core/MsgDialog";
import CountryData from "../../Core/DataManager";

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
    /**消息通用框 */
    private msgDialog : MsgDialog;

    //-------------------------------
    /**屏幕宽度 */
    private screenWidth : number;
    /**鼠标是否按下 */
    private isDown : boolean;
    /**鼠标点记录 */
    private mousePos : any;


    constructor(){
        super();
    }

    onEnable(): void
    {
        this.gameDataInit();//游戏变量初始化
        this.addEvent();//给桥添加事件 
        this.screenSetting();//屏幕居中
        this.gameStart();//游戏流程开始
        DataManager.ins_.setArea(this.sp_scene.getChildByName("house"));
    }

    /**数据初始化 */
    private gameDataInit() : void
    {
        this.worldEventManager = new WorldEventManager();
        this.peopleManager = new PeopleManager(this.sp_scene);
        this.uiManager = new UIManager(this.sp_UI);
        this.msgDialog = new MsgDialog();      
        this.mousePos = {};
        this.isDown = false;
    }

    /**添加事件 */
    private addEvent() : void
    {
        // this.stage.on(Laya.Event.CLICK,this,function(e){
        //     console.log(e);
        // })
        this.sp_scene.on(Laya.Event.MOUSE_DOWN,this,this.mouseDown);
        this.sp_scene.on(Laya.Event.MOUSE_UP,this,this.mouseUp);
        this.sp_scene.on(Laya.Event.MOUSE_MOVE,this,this.mouseMove);
        //给门帮点点击事   
        this.sp_door.on(Laya.Event.CLICK,this,this.doorCtr);
        //医馆事件绑定
        this.hospital.on(Laya.Event.CLICK,this,this.onHouseInfo,[GameConfig.HOSPITAL]);
        //军队事件绑定
        this.army.on(Laya.Event.CLICK,this,this.onHouseInfo,[GameConfig.ARMY]);
        //粮仓事件绑定
        this.farm.on(Laya.Event.CLICK,this,this.onHouseInfo,[GameConfig.FARM]);        
        //科技馆事件绑定
        this.technology.on(Laya.Event.CLICK,this,this.onHouseInfo,[GameConfig.TECHNOLOGY]);        
        //新闻点事件绑定
        //this.eventHouse.on(Laya.Event.CLICK,this,this.onHouseInfo,[GameConfig.EVENT_HOUSE]);     
        //新闻皇宫绑定
        this.palace.on(Laya.Event.CLICK,this,this.onHouseInfo,[GameConfig.PALACE]);           
    }

    /**屏幕 局中*/
    private screenSetting() : void
    {
        this.screenWidth = 900/(Laya.Browser.clientHeight/Laya.Browser.clientWidth);//屏幕高度
        // console.log("width" + this.screenWidth);
        this.sp_scene.x = -(2000-this.screenWidth)/2;
    }

    ///////////////////////////////////////事件回调

    /**门的开关 */
    private doorCtr() : void
    {
        if(CountryData.ins_.isDoorOpen)
        {//开门
            CountryData.ins_.isDoorOpen = false;
            this.doorClose();
        }
        else
        {//关门
            CountryData.ins_.isDoorOpen = true;
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

    /**移动 */
    private mouseMove() : void
    {
        if(!this.isDown) return;
        if(this.mousePos.x)
        {
           this.sp_scene.x += Laya.stage.mouseX - this.mousePos.x; 
        //    this.sp_scene.y += Laya.stage.mouseY - this.mousePos.x;
            if(this.sp_scene.x > 0)  this.sp_scene.x = 0;
            if(this.sp_scene.x < -(2000-this.screenWidth)) this.sp_scene.x =  -(2000-this.screenWidth);
        }
        this.mousePos.x = Laya.stage.mouseX;
        this.mousePos.y = Laya.stage.mouseY;
    }

    /**拖动按下 */
    private mouseDown() : void
    {
        this.isDown = true;
    }

    /**拖动抬起 */
    private mouseUp() : void
    {
        Laya.timer.clear(this,this.mouseMove);
        this.isDown = false; 
        this.mousePos.x = undefined;
        this.mousePos.y = undefined;       
    }


    /**点击 获取建筑信息 */
    private onHouseInfo(type) : void
    {
        this.msgDialog.showMsg(type);
    }

    ////////////游戏流程开始//////////////////////////
    /**游戏流程开始 */
    private gameStart() : void
    {
        this.peopleManager.createPeople();//人口生成逻辑运行
        this.peopleManager.createPeople_Inner();//内人口生成
    }

}