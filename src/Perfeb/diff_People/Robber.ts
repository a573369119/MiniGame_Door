import People from "../People";
import CountryData from "../../Core/DataManager";

export default class Robber extends People{
    constructor(view,type:string,isOut){
        super(view,type,isOut);
    }

    /**偷取财政的方式,先给予时间 */
    public cutMoneyTime():void
    {
        //给予随机时间进行偷盗(3-6)分钟
        let time=Math.random()*3+3;
        //time秒之后进行偷盗
        Laya.timer.frameOnce(time*60*60,this,this.CutMoney);
    }

    //时间后偷取
    private CutMoney():void
    {
        let random=Math.random();
        if(random<0.5)
        {
            //偷盗成功
            CountryData.ins_.money-=Math.floor(Math.random()*10);
            this.lowSupport();
        }
        //给予随机时间进行偷盗(3-6)分钟
        let time=Math.random()*3+3;
        //time秒之后进行偷盗
        Laya.timer.frameOnce(time*60*60,this,this.CutMoney);
    }

    /**降低幸福度 */
    private lowSupport():void
    {
        CountryData.ins_.popularSupport-=0.05;
    }
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
        this.cutMoneyTime();
   }
}