import People from "../People";
import Tool from "../../Tool/Tool";
import CountryData from "../../Core/DataManager";

export default class Star extends People{

    constructor(view,type:string,isOut){
        super(view,type,isOut);
    }
    
    /**明星效应的方式,先给予时间 */
    public createStarTime():void
    {
        //给予随机时间(1-3)分钟
        let time=Math.random()*2+1;
        //time秒之后进行产生效应值
        Laya.timer.frameOnce(time*60*60,this,this.createStarValue);
    }

    /**产生效应值 效应值为幸福度*/
    private createStarValue():void
    {
        CountryData.ins_.popularSupport+=0.5;
        //给予随机时间(1-3)分钟
        let time=Math.random()*2+1;
        //time秒之后进行产生科技值
        Laya.timer.frameOnce(time*60*60,this,this.createStarValue);
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
       let houseNode = this.view.getChildByName("house");
       let targetNode : Laya.Sprite = this.getTargePos(houseNode);
       for(let i=0;true;i++)
       {
           targetNode = this.getTargePos(houseNode);
           if(targetNode !== this.bornNode) break;
       }
       this.setTraget(targetNode);
   }
}