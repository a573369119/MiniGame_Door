import { ui } from "../ui/layaMaxUI";
/**
 * 购买框 通用
 */
export default class BuyDialog extends ui.BuyUI{
    constructor()
    {
        super();
        this.width=800;
        this.height=400;
    }

    onEnable():void
    {

    }

    /**注册事件 */
    private addEvents():void
    {
        this.btn_buy.on(Laya.Event.CLICK,this,this.buyClick);
        this.btn_close.on(Laya.Event.CLICK,this,this.closeClick);
    }

    /**点击购买 */
    private buyClick():void
    {
        let curr
    } 
    
    /**点击关闭 */
    private closeClick():void
    {
        this.close();
    } 
}