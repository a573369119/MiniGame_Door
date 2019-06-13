export default class Tool{
    //获取三角函数值
    public static rotationDeal(fx:number,fy:number,sx:number,sy:number,getString) : number
    {
        /**斜边 */
        let c : number = Math.sqrt(Math.pow(fx - sx,2) + Math.pow(fy - sy,2));
        /**临边 */
        let a : number = sx - fx;
        /**对边 */
        let b : number = sy - fy;
        
        if(getString == "sin")
        {
            //console.log("#sin ==" + (b/c));
            return (b/c);
        }
        else if(getString == "cos")
        {
            //console.log("#cos ==" + (a/c));
            return (a/c);
        }
        else
        {
            //console.log("#tan ==" + (b/a));//对边 比 临边 
            return (b/a);
        }
    }

    /**碰撞检测 dicNum ：预设距离 object1和object2传入sprite,是按照每个sprite的锚点在中心位置来计算的  */
    public static collisionCheck(object1,object2) : boolean
    {
        if(Math.abs(object1.x - object2.x)< object1.width/2 + object2.width/2&&
           Math.abs(object1.y - object2.y) < object1.height/2 + object2.height/2){
               console.log("true");
            return true;
        }
        else{
            console.log("false");
            
            return false;
        }                
    }
    public static rotateRopePoint_2(x,y,X,Y):number
    {
            let cos=Tool.rotationDeal(x,y,X,Y,"cos");
            let sin=Tool.rotationDeal(x,y,X,Y,"sin");
            let rotation;
            if(cos>=0&&sin>0){
                rotation= 180/Math.PI*Math.acos(cos)-90;
            }else if(cos<0&&sin>=0){
                rotation=180/Math.PI*Math.acos(cos)-90;
            }else if(cos<=0&&sin<0){
                rotation=90-180/Math.PI*Math.acos(cos);               
            }else if(cos>0&&sin<=0){
                rotation= 90-180/Math.PI*Math.acos(cos);
            }
            return rotation;
    }

    /**获取角度 
     * 移动点在前
    */
    public static getRotation(x1,y1,x2,y2) : number
    {
        let cos=Tool.rotationDeal(x1,y1,x2,y2,"cos");
        let sin=Tool.rotationDeal(x1,y1,x2,y2,"sin");
        let rotation;
        if(cos >=0 && sin>0){
            rotation = 90 + 180/Math.PI*Math.acos(cos);
        }
        if(cos <0 && sin>=0){
            rotation = -180/Math.PI*Math.acos(cos);
        }
        if(cos >0 && sin<=0)
        {
            rotation = -180/Math.PI*Math.acos(cos);
        }
        if(cos <=0 && sin<0)
        {
            rotation = 180-180/Math.PI*Math.acos(cos);
        }
        return rotation;
    }


    /**
     * rotation = 45 角度
     * 求 cos 还是 sin
     */
    public static rotationSet(rotation,typeString)  : number
    {
        let r ;
        let value;
        if(rotation < 0)
        {
            rotation += 360*(Math.abs(Math.floor(rotation/360)+2));            
        }
        if(Math.floor(rotation/360)>0)
        {
            rotation -= 360*Math.floor(rotation/360);
        }
        r = (rotation)/180*Math.PI;        
        if(typeString == "cos")
        {
            value = Math.abs(Math.cos(r));
            if((rotation > 0 && rotation <= 90) || (rotation>270 && rotation<=360))  value = -value;
            // console.log("cos::" + value);
        }
        else
        {         
            value = Math.abs(Math.sin(r));
            if((rotation>180 && rotation <= 270) || (rotation>270 && rotation<=360)) value = -value;
            // console.log("sin::" + value);
        }
        return value        
    }
    /**
     * 距离计算
     * 2 对象
     * first
     * second
     */
    public static countDic_Object(f:any,s:any) : number
    {
        return Math.sqrt(Math.pow(f.x - s.x,2) + Math.pow(f.y - s.y,2));
    }

    /**
     * 方块检测 
     * 
     * 方块对象 sp
     * 检测的点 对象
     * */
    public static blockTest(sp,point) : boolean
    {
        let pointLeft : any ={x:sp.x - sp.width/2,y:sp.y-sp.height/2};
        let pointRight : any ={x:sp.x + sp.width/2,y:sp.y+sp.height/2};
        let s_pointLeft = point.x > pointLeft.x && point.y>pointLeft.y;
        let s_pointRight = point.x < pointRight.x && point.y<pointRight.y;
        if(s_pointLeft && s_pointRight) return true;
        return  false;
    }
}