export default class OpenGame extends Laya.Script{
    constructor(){
        super();
    }

    onEnable() : void
    {

    }
    

    onClick() : void
    {
        Laya.Scene.open("GameWorld.scene");
    }
}