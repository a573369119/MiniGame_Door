import { ui } from "../ui/layaMaxUI";

/**
 * 消息框 通用
 */
export default class MsgDialog extends ui.Dialog.CurrentDialogUI{
    /**类型 */
    private type : number ;
    /**缓动 */
    // private showTween : Laya.Tween;

    constructor(){
        super();
        Laya.stage.addChild(this);
        this.visible = false;
    }

    /**初始化 */
    public showMsg(type:number) : void
    {
        this.btn_close.on(Laya.Event.CLICK,this,this.closeDialog);        
        this.visible = true;
        this.type = type;
        this.changeImg();
        this.changeTitle();
        this.changeWord(); 
        this.msgBody.x = (900/(Laya.Browser.clientHeight/Laya.Browser.clientWidth)-1163)/2;       
        this.msgBody.y = -557;       
        Laya.Tween.to(this.msgBody,{y:0},200,Laya.Ease.backOut);
        
    }

    /**换图 */
    private changeImg() : void
    {
        switch(this.type)
        {

        }
    }

    /**换标题 */
    private changeTitle() : void
    {
        
    }

    /**文字载入 */
    private changeWord() : void
    {
        
    }

    /**关闭 */
    public closeDialog() : void
    {
        this.btn_close.off(Laya.Event.CLICK,this,this.closeDialog);                
        Laya.Tween.to(this.msgBody,{y:-557},200,Laya.Ease.backOut,Laya.Handler.create(this,this.closeOver));        
    }

    private closeOver() : void
    {
        this.visible = false;        
    }
}