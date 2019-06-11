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

    constructor(view,type:number){
        this.view = view;
        this.init(type);
    }

    /**初始化 */
    private init(type) : void
    {
        //创建
        this.createPeople(type);
        //运行了逻辑
        Laya.timer.loop(16,this,this.peopleUpdate);   
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
            this.sp.loadImage(imgUrl);
            this.sp.pivot(this.sp.width/2,this.sp.height/2);        
            this.view.addChild(this.sp);
        }

    }

    /**设置位置 */
    public setPos(x:number,y:number):void
    {
        this.sp.x = x;
        this.sp.y = y;
    }

    /**人行动逻辑 *需要重写*/
    private peopleUpdate() : void
    {

    }

    /**人消失 */
    private destoryPeople() : void
    {
        Laya.timer.clear(this,this.peopleUpdate);
    }
}