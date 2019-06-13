import People from "../People";

export default class Common extends People{

    constructor(view,type:string,isOut){
        super(view,type,isOut);
    }

    /**墙内逻辑 */
    protected people_PosInner() : void
    {
        
        this.towedToMove();
    }
}