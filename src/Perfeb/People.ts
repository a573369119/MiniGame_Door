import GameConfig from "../Config/GameConfig";
import CountryData, { OutCountryData } from "../Core/DataManager";
import Tool from "../Tool/Tool";
import DataManager from "../Core/DataManager";
import PeopleManager from "../Core/PeopleManager";

/**
 * 
 * 人种父类
 */
export default class People {
    /**场景*/
    protected view : Laya.Sprite;
    /**精灵 */
    public sp : Laya.Sprite;
    /**横坐标移动速度 */
    private dirX:number;
    /**纵坐标移动速度 */
    private dirY:number;
    
    /*******************墙内 ************/
    /**墙内人还是墙外人 */
    public isOut : boolean;
    /**人属性 */
    public type:string;
    /**人的朝向 */
    public toward : any;
    /**面前的5个检测点 */
    public towardPos : Array<any>;
    /**人的移动目标点 */
    public targetNode : Laya.Sprite;
    /**出生点 */
    public bornNode : Laya.Sprite;
    /**是否被召唤 */
    public isGo : number;
    /**递归停止变量 */
    private stopDi : number;
    /**参考速度 */
    private speed : number;



    constructor(view,type:string,isOut){
        this.view = view;
        this.isOut = isOut;
        this.type=type;
        console.log(type);
        this.init(type);
    }

    /**初始化 */
    private init(type) : void
    {
        //数据初始化
        this.setDataInit();
        //创建
        this.createPeople(type);
    }

    /**数据初始化 */
    private setDataInit() : void
    {
        this.speed = CountryData.ins_.getMoveSpeed();
        this.toward = {
            x:1000,
            y:0,
            speed:this.speed,rotation:undefined,
            targetRotation:undefined,
            rotationChange : 0
        };
        this.towardPos = new Array();
        this.stopDi = 0;
        
    }

    /**开始行动 */
    public openBehaviour():void
    {
        //运行了逻辑
        if(this.isOut) 
        {
            this.people_PosOut();
            Laya.timer.frameLoop(1,this,this.checkLimit_Out);
            Laya.timer.frameOnce(OutCountryData.ins_.limitTime*60,this,this.limitTime);
        }
        else
        {
            this.people_PosInner();
            Laya.timer.loop(16,this,this.people_PosInner);
        }
    }

    /**生成人 */
    private createPeople(type) : void
    {
         this.createSp(type);
    }

    /**创建Sprite */
    private createSp(type) : void
    {
        let imgUrl = "map/"+type+".png";
        if(!this.sp)
        {
            this.sp = new Laya.Sprite();
            this.view.addChild(this.sp);
        }
        this.sp.loadImage(imgUrl);
        this.sp.size(12,12);
        this.sp.pivot(this.sp.width/2,this.sp.height/2);        
    }

    /**设置初始位置 */
    public setPos(x,y,sp:Laya.Sprite):void
    {
        this.sp.visible = true;
        this.sp.x = x;
        this.sp.y = y;
        this.bornNode = sp;
    }

    /******************************墙外人行动逻辑*******************************************/
    private people_PosOut() : void
    {
        //给予随机方向，方向用(-1~1)表示
        if(this.sp.x<=900)
        {
            this.dirX=Math.random();
            this.dirY=Math.random();
        }
        else if(this.sp.x>=1100)
        {
            this.dirX=-Math.random();
            this.dirY=Math.random();
        }
        else
        {
            this.dirX=Math.random()*2-1;
            this.dirY=Math.random()*2-1;
        }
        //给予随机时间，在此时间内移动,随机时间在(2,8)中选择
        let time=Math.random()*6+2;
        Laya.timer.frameOnce(time*60,this,this.closeMoveTimer);
        //开启移动
        Laya.timer.frameLoop(1,this,this.moveDistance);
    }
    
    /**单位帧移动*/
    private moveDistance():void
    {
        this.sp.x+=this.dirX;
        this.sp.y+=this.dirY;
    }

    /**关闭移动定时器，开启原地休息*/
    private closeMoveTimer():void
    {
        Laya.timer.clear(this,this.moveDistance);
        //休息时间结束后继续移动
        let time=Math.random()*6+2;
        Laya.timer.frameOnce(time*60,this,this.people_PosOut);
    }
    
    /**滞留时间，若超过时间，就离开外城 */
    private limitTime():void
    {
        Laya.timer.clearAll(this);
        if(this.sp.x<=1000)
        {
            this.dirX=-Math.random();
            this.dirY=-Math.random();
        }
        else
        {
            this.dirX=Math.random();
            this.dirY=-Math.random();
        }
        Laya.timer.frameLoop(1,this,this.moveDistance);
        Laya.timer.frameLoop(1,this,this.checkLimit_Out);
    }

    

    /**碰撞检测 */
    private checkLimit_Out():void
    {
        //边界检测
        if(this.sp.x<-5||this.sp.x>2005||this.sp.y<-5)
        {
            this.destoryPeople();
            OutCountryData.ins_.outCount--;
            if(OutCountryData.ins_.outCount<OutCountryData.ins_.maxCount-1)
            {
                let time=Math.random()*3;
                Laya.timer.frameOnce(time*60,this,this.createPeople);
            }
        }

        //护城河检测
        if(this.sp.y>=390)
        {
            //重新给一个位移
                this.dirY=-Math.random();
        }

        //城门区域检测
        if(this.sp.x>932&&this.sp.x<1068&&this.sp.y>350&&this.sp.y<390)
        {
            //城门是否打开
            if(CountryData.ins_.isDoorOpen)
            {
                this.destoryPeople(true);
                //城外人口-1
                OutCountryData.ins_.outCount--;
                //国家人口+1
                CountryData.ins_.population++;
                // if(OutCountryData.ins_.outCount<OutCountryData.ins_.maxCount-1)
                // {
                //     let time=Math.random()*3;
                //     Laya.timer.frameOnce(time*60,this,createPeople);
                // }
                this.peopleInto();
                // CountryData.ins_.cal_MainData(GameConfig.MAIN_POPULATION,1);
                // if(OutCountryData.ins_.outCount<OutCountryData.ins_.maxCount-1)
                // {
                //     let time=Math.random()*3;
                //     Laya.timer.frameOnce(time*60,this,this.createPeople);
                // }
            }
            
        }
    }

    /**墙内人行动逻辑*/
    /********************************************************墙内人行动逻辑*****************************************/
    protected people_PosInner() : void
    {

        // this.towedToMove();
    }

    public setTraget(target:Laya.Sprite) : void
    {
        // this.targetNode = target;
        //测试
        this.targetNode = target;
        // this.toward.x = target.x;
        // this.toward.y = target.y;
    }

    /**towerd转化成位移 */
    protected towedToMove() : void
    {
        if(!this.toward.rotation) this.toward.rotation = Tool.rotateRopePoint_2(this.sp.x,this.sp.y,this.targetNode.x,this.targetNode.y);;
        this.peopleTowerd();//让目标朝向计算数
    }

    /**朝向  towerd移动 */
    private posMove() : void
    {
        this.sp.x += this.toward.speed*Tool.rotationSet(this.toward.rotation,"sin");
        this.sp.y += this.toward.speed*Tool.rotationSet(this.toward.rotation,"cos");
        this.sp.rotation = this.toward.rotation;
        if(Tool.blockTest(this.targetNode,this.sp)) {
            if(this.targetNode.name === "sp_door")
            {
                CountryData.ins_.goOut(this.type);
                this.destoryPeople(true);            
                this.doorPeople_ToOut();            
            }
            else
            {
                this.destoryPeople();            
            }
        }
        if(this.sp.x < 0 || this.sp.y > 900 || this.sp.x > 2000) {this.destoryPeople();}
        // console.log(this.sp.rotation);
    }
    
    /**人面向 */
    protected peopleTowerd() : void
    {
        this.getTowerdPos();//获得五个点，根据目标坐标计算
        this.testTowerd();//检测是否符合要求 不符合 + - 5
    }

    /**检测行走方向 */
    protected testTowerd() : boolean
    {
        let power = this.testColider();// -1 0 1 2 3 4 5
        if(power > 0)
        {//撞到了需要转方向
            this.toward.rotationChange = 0;
            this.speedCtr(power);
            this.judgeLeftRight();        
            this.posMove();//移动
            return false;
        }
        this.findTarget();
        this.toward.speed = this.speed;      
        this.posMove();//移动  
        return true;
    }

    /**速度控制 */
    private speedCtr(power) : void
    {
        this.toward.speed = this.speed*((power+1)/(this.towardPos.length+2)); 
        // console.log("speed ::" + this.toward.speed);
    }

    /**判断方向 */
    protected judgeLeftRight() : void
    {
        this.stopDi++;
        if(this.stopDi>36) {this.stopDi = 0;return;}
        this.toward.rotationChange += GameConfig.TEST_POINT_RO;
        let ro1 = this.toward.rotation - this.toward.rotationChange;
        let ro2 = this.toward.rotation + this.toward.rotationChange;
        this.getTowerdPos(ro1);
        let numRo1 = this.testColider();
        this.getTowerdPos(ro2);
        let numRo2 = this.testColider();
        if(numRo1 == -1) {this.toward.rotation = ro1; return;}
        if(numRo2 == -1) {this.toward.rotation = ro2; return;}
        this.judgeLeftRight();
    }

    /**findTarget寻找目标 */
    private findTarget() : void
    {
        let Ca = this.toward.rotation - this.toward.targetRotation;
        if(Ca > 0) this.toward.rotation -= 5;
            else if( Ca < 0 ) this.toward.rotation +=5;
        if( Math.abs(Ca) < 5) this.toward.rotation += Ca;
    }   

    /**检测是否碰撞 撞到了返回ture -1可以走 0以上表示碰撞到哪个点*/
    protected testColider() : number
    {
        let num = -1;
        let area : Array<Laya.Sprite>= DataManager.ins_.arr_RightArea;
        if(this.sp.x<981) area = DataManager.ins_.arr_LeftArea;
        for(let i=0;i<area.length;i++)
        {
            if(Tool.blockTest(this.bornNode,this.sp)) {return -1;}
            if(Tool.blockTest(area[i],this.sp)){return 0;}//如果已经撞上了。             
            for(let h = 0;h<this.towardPos.length;h++)
            {//五个点检测
                if(Tool.blockTest(this.targetNode,this.towardPos[h])){return-1;}
                if(Tool.blockTest(area[i],this.towardPos[h]))
                {//离人最近的点
                    num = h+1;//1，2，3，4，5
                    return num;
                }
            }
        }
        return num;
    }

    /**人面向的五个检测点 */
    protected getTowerdPos(rotationTest?) : void
    {
        let rotation = this.toward.rotation;//使用当前面向
        if(rotationTest) rotation = rotationTest;
        else this.keepTowerdData();//保存 现在为止到目标点的角度
        if(rotation === undefined) 
        {//如果角度是undef
            rotation = this.toward.targetRotation//目标角度，初始角度   
            this.toward.rotation = rotation;
        }

        //位移需要的变量
        let cos : number = Tool.rotationSet(rotation,"cos");
        let sin : number = Tool.rotationSet(rotation,"sin");

        // console.log("---------------x::" + this.sp.x + "y::" + this.sp.y);
        for(let i=0;i<GameConfig.TEST_POINT_COUNT;i++)//记录五个
        { 
            if(!this.towardPos[i]) this.towardPos[i] = {};        
            this.towardPos[i].x = this.sp.x + GameConfig.TEST_POINT_DIC*sin*(i+1);
            this.towardPos[i].y = this.sp.y + GameConfig.TEST_POINT_DIC*cos*(i+1); 
        }
        // console.log(this.towardPos);
    }

    /**保存 tower信息 */
    protected keepTowerdData() : void
    {
        //存储现在点到目标角度
        // console.log(this);
        this.toward.targetRotation = Tool.rotateRopePoint_2(this.sp.x,this.sp.y,this.targetNode.x,this.targetNode.y);
    }

    /**在运行移动逻辑之前 的特殊操作 */
    protected specialDo() : void
    {
        
    }
///////////////////////////////////////////////////////////////////////////////////
    /***
     * 进程 / 出城逻辑 
     * @type true进城  false出城
    */
    public peopleGo(type) : void
    {
            if(type) {
                //进城方法
                this.outPeople_ToDoor();
            }else{
                //出城方法
                this.peopleOut();
            }
    }

    /**城外强制进门 */
    private outPeople_ToDoor():void
    {
        Laya.timer.clearAll(this);
        let dirX=1000-this.sp.x;
        let dirY=410-this.sp.y;
        let dis=Math.sqrt(Math.pow(1000-this.sp.x,2)+Math.pow(410-this.sp.y,2));
        this.dirX=dirX/dis;
        this.dirY=dirY/dis;
        Laya.timer.frameLoop(1,this,this.moveDistance);
        Laya.timer.frameLoop(1,this,this.checkLimit_Out);
    }

    /**门强制出城外 */
    private doorPeople_ToOut():void
    {
        this.isOut = true;
        Laya.timer.clearAll(this);
        let x=Math.random()*136+932;
        let y=350;
        this.setPos(x,y,this.sp);
        this.dirX=Math.random()*2-1;
        this.dirY=-Math.random()*0.7-0.2;
        // this.openBehaviour();
        Laya.timer.frameLoop(1,this,this.moveDistance);
        Laya.timer.frameLoop(1,this,this.checkLimit_Out);
    }

   /**出城逻辑 */
   protected peopleOut() : void
   {
        this.setTraget(this.view.getChildByName("sp_door") as Laya.Sprite);//设置目标是门
   }

   /**进城方法 从正门到某一个住宅*/
   protected peopleInto() : void
   {
        let bornNode = this.view.getChildByName("sp_door") as Laya.Sprite;
        this.isOut = false;
        let houseNode = this.view.getChildByName("house");
        let targetNode : Laya.Sprite = this.getTargePos(houseNode);
        this.setPos(bornNode.x,bornNode.y + 40,bornNode);
        this.setTraget(targetNode);
        this.openBehaviour();
   }

   /**从house中获取 一个随机的点 */
   protected getTargePos(houseNode) : Laya.Sprite
   {
        let random = Math.random();
        let index = Math.floor(((houseNode as Laya.Sprite)._children.length-1)*random);
        let targetNode :Laya.Sprite;
        // console.log(" --------- getTarget ");
        // console.log("index ::" + index);
        if(index >= 0)
        {
            targetNode = houseNode.getChildByName("house_"+index);
            if(targetNode)
            {
                return targetNode;
            }
            return this.getTargePos(houseNode);
        }
        console.log("随机数取错");
        // this.getTargePos(houseNode);
   }

    /**人消失 isrecover不回收吗 */
    protected destoryPeople(notRecover?) : void
    {   
        if(!notRecover) Laya.Pool.recover(this.type,this);
        this.sp.visible = false;
        Laya.timer.clearAll(this);
        //
        if(!this.isOut) this.destoryInner();
    }

    /**墙内人删除 特殊处理 */
    protected destoryInner() : void
    {
        //计时器清楚
        Laya.timer.clear(this,this.people_PosInner);
        switch(this.type)
        {
            case GameConfig.COMMON_MAN:
                if(CountryData.ins_.alreadyCreate[0]>0)
                CountryData.ins_.alreadyCreate[0]--;
                return;
            case GameConfig.BANDIT_MAN:
                if(CountryData.ins_.alreadyCreate[3]>0)
                CountryData.ins_.alreadyCreate[3]--;
                return;
            case GameConfig.ROBBER_MAN:
                if(CountryData.ins_.alreadyCreate[4]>0)
                CountryData.ins_.alreadyCreate[4]--;
                return;
            case GameConfig.SCIENTIST_MAN:
                if(CountryData.ins_.alreadyCreate[1]>0)
                CountryData.ins_.alreadyCreate[1]--;
                return;
            case GameConfig.STAR_MAN:
                if(CountryData.ins_.alreadyCreate[2]>0)
                CountryData.ins_.alreadyCreate[2]--;
                return;
        }
        // console.log(CountryData.ins_.alreadyCreate);
        
    }
}