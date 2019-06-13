import People from "../People";
import Tool from "../../Tool/Tool";
import CountryData from "../../Core/DataManager";
import GameConfig from "../../Config/GameConfig";

export default class Common extends People{

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
        //获取占比数组
        let arr_percent = Tool.getPercentArea(CountryData.ins_.arr_personPercentName);
        let random = Math.random();
        let index;
        for(let i=0;i<arr_percent.length;i++)
        {
            if(!arr_percent[i+1]) break;
            if(arr_percent[i] < random && random <= arr_percent[i+1])
            {
                index = i;
            }
        }
        if(index === undefined) {console.log("概率计算出错");return;}
        let houseNode = this.view.getChildByName("house");
        let targetNode : Laya.Sprite = this.getTargePos(houseNode);
        for(let i=0;true;i++)
        {
            targetNode = this.getTargePos(houseNode);
            if(targetNode !== this.bornNode) break;
        }
        switch(index)
        {    /**0-医生 1-警察 2-商人 -3游手好闲 -4农民*/
            case 0:
                this.setTraget(this.view.getChildByName("house").getChildByName("hospital") as Laya.Sprite);
                break;
            case 1:
                this.setTraget(targetNode);         
                break;
            case 2:
                this.peopleOut();
                break;
            case 3:
                this.setTraget(targetNode);
                break;
            case 4:
                this.setTraget(this.view.getChildByName("house").getChildByName("farm") as Laya.Sprite);            
                break;
        }
    }
}