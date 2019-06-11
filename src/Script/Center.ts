export default class Center extends Laya.Script{

    constructor(){
        super();
    }

    onEnable(){
        let screenWidth = 900/(Laya.Browser.clientHeight/Laya.Browser.clientWidth);//屏幕高度
        // console.log("width" + this.screenWidth);
        if(screenWidth < 800) (this.owner.getChildByName("gameName") as Laya.Label).fontSize = 125;
        (this.owner as Laya.Sprite).x = (screenWidth- 667)/2;      
    }
}