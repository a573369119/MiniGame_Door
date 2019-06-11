import DataManager from "./DataManager";

/**
 * UI管理器
 */
export default class UIManager{
    /**数据管理器 */
    // public static dataManager : DataManager;
    /**UI sprite */
    private UiSprite : Laya.Sprite;

    /**载入数据 */
    constructor(ui:Laya.Sprite){
        this.UiSprite = ui;
    }
    
    
}