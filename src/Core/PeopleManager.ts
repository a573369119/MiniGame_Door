import People from "../Perfeb/People";
import GameConfig from "../Config/GameConfig";
import CountryData, { OutCountryData } from "./DataManager";
import Common from"../Perfeb/diff_People/Common"
import Robber from"../Perfeb/diff_People/Robber"
import Scientist from "../Perfeb/diff_People/Scientist";
import Star from "../Perfeb/diff_People/Star";
import Bandit from "../Perfeb/diff_People/Bandit";
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
    //------------------------------------------墙内
    /**生成间隔计时器 */
    private countTime : number = 0;
    /**生产时间间隔 */
    private countTime_ : number = 500;
    //---------------------------------------
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
        let array:Array<number>=OutCountryData.ins_.getPercentArea();
        let people;
        /**生成不同人种的几率 */
        let random=Math.random();
        //普通人
        if(random>=0&&random<array[1])
        {
            people =Laya.Pool.getItem("common");
            if(!people)
            {
                people =new Common(this.view,GameConfig.COMMON_MAN,true);
                CountryData.ins_.arr_outPeople.push(people);
            }
        }
        //科学家
        else if(random>=array[1]&&random<array[2])
        {
            people =Laya.Pool.getItem("scientist");
            if(!people)
            {
                people =new Scientist(this.view,GameConfig.SCIENTIST_MAN,true);
                CountryData.ins_.arr_outPeople.push(people);
            }
            people.createTechnologyTime();
        }
        //明星
        else if(random>=array[2]&&random<array[3])
        {
            people =Laya.Pool.getItem("star");
            if(!people)
            {
                people =new Star(this.view,GameConfig.STAR_MAN,true);
                CountryData.ins_.arr_outPeople.push(people);
            }
            people.createStarTime();
        }
        //盗贼
        else if(random>=array[3]&&random<array[4])
        {
            people =Laya.Pool.getItem("robber");
            if(!people)
            {
                people =new Robber(this.view,GameConfig.ROBBER_MAN,true);
                CountryData.ins_.arr_outPeople.push(people);
            }
            people.cutMoneyTime();
        }
        //土匪
        else
        {
            people =Laya.Pool.getItem("bandit");
            if(!people)
            {
                people =new Bandit(this.view,GameConfig.BANDIT_MAN,true);
                CountryData.ins_.arr_outPeople.push(people);
            }
            people.cutMoneyTime();
        }
        people.visible=true;
        people.isOut = true;
        this.getPos();
        people.setPos(this.X,this.Y);
        people.openBehaviour();
        let time=Math.random()*3;
        if(OutCountryData.ins_.outCount<OutCountryData.ins_.maxCount-1)
        {
            Laya.timer.frameOnce(time*60,this,this.createPeople);
        }
        OutCountryData.ins_.outCount++;
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
    
    
    public checkPercent(people,type:string):void
    {
        //流动比例检测
        if(CountryData.ins_.percent<1)
        {
            this.createPeople();
        }
    }

    /*********************************创建墙内人 */
    public createPeople_Inner() : void
    {
       let randomString ;
       let arrPercent = [];//生产比例
       let arr_People = CountryData.ins_.arr_People;
       let number = 0;
       arrPercent.push(number);
       for(let i = 0;i<arr_People.length;i++)
       {
            number += CountryData.ins_.get_ProfessionPercent(arr_People[i]);
            arrPercent.push(number);
       }
       console.log(arrPercent);
       Laya.timer.loop(1,this,this.getRandom,[arrPercent]);
    }

    /**生产人 */
    private create_Inner(randomString) : void
    {
        if(randomString == "none") return;
        let people = Laya.Pool.getItem(randomString);  
        let countryData = CountryData.ins_;
        //生产人种
        switch(randomString)
        {    /**已生成的人种  0 普通   1科学家  2明星 3土匪 4盗贼*/
            case GameConfig.COMMON_MAN:   
                if(!people) people = new Common(this.view,randomString,false);
                countryData.alreadyCreate[0]++;
                break;
            case GameConfig.ROBBER_MAN://盗贼
                if(!people) people = new Common(this.view,randomString,false);
                countryData.alreadyCreate[4]++;
                break;
            case GameConfig.BANDIT_MAN://土匪
                if(!people) people = new Common(this.view,randomString,false);
                countryData.alreadyCreate[3]++;
                break;
            case GameConfig.STAR_MAN://明星
                if(!people) people = new Common(this.view,randomString,false);
                countryData.alreadyCreate[2]++;
                break;
            case GameConfig.SCIENTIST_MAN://科学家
                if(!people) people = new Common(this.view,randomString,false);
                countryData.alreadyCreate[1]++;
                break;
        }
        if(!people) {console.log("新建人失败！") ;return;}
        people.isOut = false;
        CountryData.ins_.arr_inPeople.push(people);//加入维护数组
        if(people === undefined || people === null) {console.log("没有生成人种！种类:" + randomString);return;}
        this.createPos(people);
        people.specialDo();
        people.openBehaviour();
        
    }

    /**生产位置 */
    private createPos(people) : void
    {
        let houseNode = (this.view as Laya.Sprite).getChildByName('house');
        let percent = houseNode._children.length/100;
        let house ;
        for(let i=0;i< houseNode._children.length;i++)
        {
            let number = Math.floor(Math.random()*percent*100);
            house = houseNode.getChildByName("house_"+number);
            if(house !== undefined && house !== null)  
            {
                people.setPos(house.x,house.y,house);   
                // people.peopleInto(); 
                return;
            }
        }
    }

    /**获取随机人种 */
    private getRandom(arrPercent) : string
    {
        if(this.countTime <= this.countTime_)
        {
            this.countTime++;
            return;
        }
        this.countTime_ = Math.random()*GameConfig.PERSON_CREATE_TIME*100;
        console.log("生成间隔:" + Math.floor(this.countTime/100) + "s");
        this.countTime = 0;

        let number = Math.random();
        let person = "";
        let index = undefined;
        for(let i=0;i<arrPercent.length ;i++)
        {
            if(!arrPercent[i+1]) break;
            if(arrPercent[i] <= number && number < arrPercent[i+1])
            {
                person = CountryData.ins_.arr_People[i];
                index = i; 
                break;
            }
        }
        if(!person) {console.log("人种随机失败！");return;}
        // console.log(person);
        //判断人是否还能生成
        if(index === undefined){console.log("概率计算出错");return;}
        if(CountryData.ins_.alreadyCreate[index] == CountryData.ins_[person])
        {
            if(this.getAlreadCreate() == CountryData.ins_.population) return;
            person = this.getRandom(arrPercent);     
        }
       this.create_Inner(person);//生产人种   
    }

    /*获取已生成人口的数量*/
    public getAlreadCreate() : number
    {
        let number = 0;
        for(let i=0;i<CountryData.ins_.alreadyCreate.length;i++)
        {
            number +=CountryData.ins_.alreadyCreate[i]
        }
        return number;
    }
}