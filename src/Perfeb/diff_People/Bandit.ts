import People from "../People";

export default class Bandit extends People{

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