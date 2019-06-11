export default class OpenStory extends Laya.Script{
    constructor(){
        super();
    }

    onEnable() : void
    {

    }
    

    onClick() : void
    {
        Laya.Scene.open("GameStory.scene");
    }
}