import People from "../Perfeb/People";
import GameConfig from "../Config/GameConfig";
import CountryData, { OutCountryData } from "./DataManager";
import Common from"../Perfeb/diff_People/Common"
import Robber from"../Perfeb/diff_People/Robber"
/**
 * 人 管理
 */
export default class PeopleManager {
    /**视图*/
    private view:any; 
    /**横坐标 */
    private X:number;
    /**纵坐标 */
    private Y:number;
    constructor(view)
    {
        this.view=view;
    }

    /**
     * 开启生成工厂
     * 生成人 
     * 生成人的位置
     * 生产人的type ： 城里人/城外人 逻辑分开
     */
    /**开启生成工厂 */
    public openPeopleFactory() : void
    {
        this.createPeople();
    }

    /**生成人 */
    public createPeople():void
    {
        let people;
        /**生成不同人种的几率 */
        let random=Math.floor(Math.random()*100);
        //普通人
        if(random>=0&&random<85)
        {
            people =Laya.Pool.getItem("common");
            if(!people)
            {
                people =new Common(this.view,GameConfig.COMMON_MAN,true);
            }
        }
        //小偷
        else if(random>=85&&random<100)
        {
            people =Laya.Pool.getItem("robber");
            if(!people)
            {
                people =new Robber(this.view,GameConfig.ROBBER_MAN,true);
            }
        }
        people.visible=true;
        this.getPos();
        //people.setPos(this.X,this.Y);
        people.setPos(900,300);
        people.openBehaviour();
        let time=Math.random()*3;
        if(OutCountryData.ins_.outCount<OutCountryData.ins_.maxCount-1)
        {
            Laya.timer.frameOnce(time*60,this,this.createPeople);
        }
        OutCountryData.ins_.outCount++;
        console.log(OutCountryData.ins_.outCount)
    }

    /**生成人的位置 */
    public getPos():any
    {
        let typeNum=Math.floor(Math.random()*3);
        switch(typeNum)
        {
            case 0:
                //在A边界
                this.X=0;
                this.Y=Math.random()*390;
                break;
            case 1:
                //在B边界
                this.X=Math.random()*2000;
                this.Y=0;
                break;
            case 2:
                //在C边界
                this.X=2000;
                this.Y=Math.random()*390;
                break;
        }
    }

    /*************************************界限检测 **********************/
    
    
    private checkPercent(people,type:string):void
    {
        //流动比例检测
        if(CountryData.ins_.percent<1)
        {
            this.createPeople();
        }
    }
}