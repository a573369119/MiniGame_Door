/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
export module ui {
    export class BuyUI extends Dialog {
		public bg:Laya.Sprite;
		public btn_buy:Laya.Sprite;
		public buy_name:laya.display.Text;
		public buy_input:Laya.TextInput;
		public btn_close:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Buy");
        }
    }
    export class GameWorldUI extends Scene {
		public sp_scene:Laya.Sprite;
		public sp_ground:Laya.Sprite;
		public sp_river:Laya.Sprite;
		public sp_wall:Laya.Sprite;
		public sp_door:Laya.Sprite;
		public house:Laya.Sprite;
		public house_1:Laya.Sprite;
		public house_2:Laya.Sprite;
		public house_3:Laya.Sprite;
		public house_4:Laya.Sprite;
		public house_5:Laya.Sprite;
		public house_6:Laya.Sprite;
		public house_8:Laya.Sprite;
		public house_9:Laya.Sprite;
		public house_10:Laya.Sprite;
		public house_11:Laya.Sprite;
		public house_12:Laya.Sprite;
		public house_13:Laya.Sprite;
		public house_14:Laya.Sprite;
		public house_15:Laya.Sprite;
		public palace:Laya.Sprite;
		public hospital:Laya.Sprite;
		public house_16:Laya.Sprite;
		public house_17:Laya.Sprite;
		public house_18:Laya.Sprite;
		public house_19:Laya.Sprite;
		public house_20:Laya.Sprite;
		public technology:Laya.Sprite;
		public house_0:Laya.Sprite;
		public house_21:Laya.Sprite;
		public house_22:Laya.Sprite;
		public house_23:Laya.Sprite;
		public house_24:Laya.Sprite;
		public house_25:Laya.Sprite;
		public house_26:Laya.Sprite;
		public house_27:Laya.Sprite;
		public house_28:Laya.Sprite;
		public farm:Laya.Sprite;
		public house_30:Laya.Sprite;
		public house_31:Laya.Sprite;
		public house_32:Laya.Sprite;
		public house_33:Laya.Sprite;
		public house_34:Laya.Sprite;
		public house_35:Laya.Sprite;
		public house_36:Laya.Sprite;
		public house_37:Laya.Sprite;
		public army:Laya.Sprite;
		public sp_UI:Laya.Sprite;
		public btn_buy:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameWorld");
        }
    }
}
export module ui.Dia {
    export class CurrentDialogUI extends Scene {
		public msgBody:Laya.Sprite;
		public sprite_Person:Laya.Sprite;
		public sprite_Msg:Laya.Sprite;
		public btn_close:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Dia/CurrentDialog");
        }
    }
}