export default class OpenGame extends Laya.Script{
    constructor(){
        super();
    }

    onEnable() : void
    {

    }
    

    onClick() : void
    {
        console.log(this);
        Laya.Scene.open("GameWorld.scene");
    }
}