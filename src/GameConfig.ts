/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import OpenGame from "./Script/OpenGame"
import GameManager from "./Script/GameWorld/GameManager"
import OpenStory from "./Script/OpenStory"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=1440;
    static height:number=900;
    static scaleMode:string="fixedheight";
    static screenMode:string="none";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="StartGame.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("Script/OpenGame.ts",OpenGame);
        reg("Script/GameWorld/GameManager.ts",GameManager);
        reg("Script/OpenStory.ts",OpenStory);
    }
}
GameConfig.init();