import People from "../People";
import Tool from "../../Tool/Tool";

export default class Scientist extends People{

    constructor(view,type:string,isOut){
        super(view,type,isOut);
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
    }
}