import People from "../People";

export default class Robber extends People{
    /**财政伤害 */
    public money:number;
    /**幸福度 */
    public popularSupport:number;
    constructor(view,type:string,isOut){
        super(view,type,isOut);
    }

    /**偷取财政的方式,先给予时间 */
    public cutMoneyTime():void
    {
        //给予随机时间进行偷盗(10-20)秒
        let time=Math.random()*10+10;
        //time秒之后进行偷盗
        Laya.timer.frameOnce(time*60,this,this.CutMoney);
    }

    //时间后偷取
    public CutMoney():void
    {
        this.money=Math.floor(Math.random()*10);
    }

    /**降低 */

    /**墙内 */
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