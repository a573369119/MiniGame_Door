import GameConfig from "../Config/GameConfig";
import { OutCountryData } from "../Core/DataManager";

/**
 * 
 * 人种父类
 */
export default class People {
    /**场景*/
    private view : Laya.Sprite;
    /**精灵 */
    public sp : Laya.Sprite;
    /**横坐标移动速度 */
    private dirX:number;
    /**纵坐标移动速度 */
    private dirY:number;
    /**墙内人还是墙外人 */
    public isOut : boolean;
    /**人属性 */
    public type:string;

    constructor(view,type:string,isOut){
        this.view = view;
        this.isOut = isOut;
        this.type=type;
        this.init(type);
    }

    /**初始化 */
    private init(type) : void
    {
        //创建
        this.createPeople(type);
    }

    /**开始行动 */
    public openBehaviour():void
    {
        //运行了逻辑
        if(this.isOut) 
        {
            this.people_PosOut();
            Laya.timer.frameLoop(1,this,this.checkLimit_Out);
        }
        else
        {
            this.people_PosInner();
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
        this.sp.pivot(this.sp.width/2,this.sp.height/2);        
    }

    /**设置初始位置 */
    public setPos(x:number,y:number):void
    {
        this.sp.visible = true;
        this.sp.x = x;
        this.sp.y = y;
    }

    /**墙外人行动逻辑*/
    private people_PosOut() : void
    {
        //给予随机方向，方向用(-1~1)表示
        this.dirX=Math.random()*2-1;
        this.dirY=Math.random()*2-1;
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
    
    /**墙内人行动逻辑*/
    private people_PosInner() : void
    {

    }
    

    /**碰撞检测 */
    private checkLimit_Out():void
    {
        //边界检测
        if(this.sp.x<-5||this.sp.x>2005||this.sp.y<-5)
        {
            Laya.Pool.recover(this.type,this);
            OutCountryData.ins_.outCount--;
        }

        //护城河检测
        if(this.sp.y>=390)
        {
            //重新给一个位移
                //给予随机方向，方向用(-1~1)表示
                this.dirX=Math.random()*2-1;
                this.dirY=-Math.random();
        }
    }
    /**人消失 */
    private destoryPeople() : void
    {
        this.sp.visible = false;
        
    }
}