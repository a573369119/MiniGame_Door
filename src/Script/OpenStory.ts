export default class OpenStory extends Laya.Script{
    constructor(){
        super();
    }

    onEnable() : void
    {

    }
    

    onClick() : void
    {
        console.log(this);
        Laya.Scene.open("GameStory.scene");
    }
}