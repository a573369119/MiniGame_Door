import People from "../People";
import Tool from "../../Tool/Tool";
import CountryData from "../../Core/DataManager";

export default class Scientist extends People{

    constructor(view,type:string,isOut){
        super(view,type,isOut);
    }


    /**产生科技的方式,先给予时间 */
    public createTechnologyTime():void
    {
        //给予随机时间(1-3)分钟
        let time=Math.random()*2+1;
        //time秒之后进行产生科技值
        Laya.timer.frameOnce(time*60*60,this,this.createTechnology);
    }

    /**产生科技值 */
    private createTechnology():void
    {
        CountryData.ins_.technology+=0.5;
        //给予随机时间(1-3)分钟
        let time=Math.random()*2+1;
        //time秒之后进行产生科技值
        Laya.timer.frameOnce(time*60*60,this,this.createTechnology);
    }
    /**墙内逻辑 */
    protected people_PosInner() : void
    {
        // this.setTraget(this.view.getChildByName("house").getChildByName("palace") as Laya.Sprite);
        this.towedToMove();
    }

    /**重写specialdo */
    protected specialDo() : void
    {
        this.setTraget(this.view.getChildByName("house").getChildByName("technology") as Laya.Sprite);    
        this.createTechnologyTime();        
    }
}