import GameConfig from "../Config/GameConfig";

/**
 * 
 * 人种父类
 */
export default class People {
    /**场景*/
    private view : Laya.Sprite;
    /**精灵 */
    public sp : Laya.Sprite;
    /**墙内人还是墙外人 */
    public isOut : boolean;

    constructor(view,type:number,isOut){
        this.view = view;
        this.isOut = isOut;
        this.init(type);
    }

    /**初始化 */
    private init(type) : void
    {
        //创建
        this.createPeople(type);
        //运行了逻辑
        if(this.isOut) Laya.timer.loop(16,this,this.peopleUpdate_Out);   
            else Laya.timer.loop(16,this,this.peopleUpdate_Inner);   
    }

    /**生成人 */
    private createPeople(type) : void
    {
         this.createSp(type);
    }

    /**创建Sprite */
    private createSp(type) : void
    {
        let imgUrl = "";
        switch(type)
        {
            case GameConfig.COMMON_MAN : imgUrl = "map/people.png";break;
        }
        if(!this.sp)
        {
            this.sp = new Laya.Sprite();
            this.view.addChild(this.sp);
        }
        this.sp.loadImage(imgUrl);
        this.sp.pivot(this.sp.width/2,this.sp.height/2);        
    }

    /**设置出事位置 */
    public setPos(x:number,y:number):void
    {
        this.sp.visible = true;
        this.sp.x = x;
        this.sp.y = y;
    }

    /**墙外人行动逻辑*/
    private peopleUpdate_Out() : void
    {

    }

    /**墙外人行动逻辑*/
    private peopleUpdate_Inner() : void
    {

    }
    
    /**人消失 */
    private destoryPeople() : void
    {
        this.sp.visible = false;
        Laya.timer.clear(this,this.peopleUpdate_Out);
        Laya.timer.clear(this,this.peopleUpdate_Inner);
    }
}