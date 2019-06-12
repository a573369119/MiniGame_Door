var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    /**人种 - 普通人 */
    GameConfig.COMMON_MAN = "common";
    /**人种 - 小偷 */
    GameConfig.ROBBER_MAN = "robber";
    /**人种 - 土匪 */
    GameConfig.BANDIT_MAN = "bandit";
    /**人种 - 明星 */
    GameConfig.STAR_MAN = "star";
    /**人种 - 科学家 */
    GameConfig.SCIENTIST_MAN = "scientist";
    //----------------------------------建筑
    /**医院 */
    GameConfig.HOSPITAL = 1;
    /**军队 */
    GameConfig.ARMY = 2;
    /**农场 */
    GameConfig.FARM = 3;
    /**科技 */
    GameConfig.TECHNOLOGY = 4;
    /**事件房 新闻房 */
    GameConfig.EVENT_HOUSE = 5;
    /**皇宫 */
    GameConfig.PALACE = 6;
    return GameConfig;
}());
exports.default = GameConfig;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数据中心 所有的数据
 */
var CountryData = /** @class */ (function () {
    function CountryData() {
        /**国家人口 */
        this.population = 100;
        //--------城门
        /**门是否打开*/
        this.isDoorOpen = true;
        /**特殊门 筛查 1-防止进入   2-邀请进入*/
        // public keepSelect : Array<number> = [];
        /**流动比例 */
        this.percent = 1;
    }
    CountryData.prototype.onEnable = function () {
    };
    /**
     * 获取人口流量 :
     * return 进入 / 出去
     */
    CountryData.prototype.get_PeopleMove = function () {
        return this.enterPeople / this.outerPeople;
    };
    /**
     * 获取人种比例
     * @param type 人种
     */
    CountryData.prototype.get_ProfessionPercent = function (type) {
        if (this[type] === undefined)
            console.log("不存在该人种");
        else
            return this[type] / (this.commonMan + this.scientist + this.star + this.bandit + this.robber);
    };
    CountryData.ins_ = new CountryData();
    return CountryData;
}());
exports.default = CountryData;
/**外城 */
var OutCountryData = /** @class */ (function () {
    function OutCountryData() {
        /**************主数据********************/
        /**最大外城容纳数量 */
        this.maxCount = 50;
        /**当前外城人口数 */
        this.outCount = 0;
        /**人滞留时间 */
        this.limitTime = 50;
    }
    OutCountryData.ins_ = new OutCountryData();
    return OutCountryData;
}());
exports.OutCountryData = OutCountryData;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("../ui/layaMaxUI");
/**
 * 消息框 通用
 */
var MsgDialog = /** @class */ (function (_super) {
    __extends(MsgDialog, _super);
    /**缓动 */
    // private showTween : Laya.Tween;
    function MsgDialog() {
        var _this = _super.call(this) || this;
        Laya.stage.addChild(_this);
        _this.visible = false;
        return _this;
    }
    /**初始化 */
    MsgDialog.prototype.showMsg = function (type) {
        this.btn_close.on(Laya.Event.CLICK, this, this.closeDialog);
        this.visible = true;
        this.type = type;
        this.changeImg();
        this.changeTitle();
        this.changeWord();
        this.msgBody.x = (900 / (Laya.Browser.clientHeight / Laya.Browser.clientWidth) - 1163) / 2;
        this.msgBody.y = -557;
        Laya.Tween.to(this.msgBody, { y: 0 }, 200, Laya.Ease.backOut);
    };
    /**换图 */
    MsgDialog.prototype.changeImg = function () {
        switch (this.type) {
        }
    };
    /**换标题 */
    MsgDialog.prototype.changeTitle = function () {
    };
    /**文字载入 */
    MsgDialog.prototype.changeWord = function () {
    };
    /**关闭 */
    MsgDialog.prototype.closeDialog = function () {
        this.btn_close.off(Laya.Event.CLICK, this, this.closeDialog);
        Laya.Tween.to(this.msgBody, { y: -557 }, 200, Laya.Ease.backOut, Laya.Handler.create(this, this.closeOver));
    };
    MsgDialog.prototype.closeOver = function () {
        this.visible = false;
    };
    return MsgDialog;
}(layaMaxUI_1.ui.Dialog.CurrentDialogUI));
exports.default = MsgDialog;
},{"../ui/layaMaxUI":16}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("../Config/GameConfig");
var DataManager_1 = require("./DataManager");
var Common_1 = require("../Perfeb/diff_People/Common");
var Robber_1 = require("../Perfeb/diff_People/Robber");
/**
 * 人 管理
 */
var PeopleManager = /** @class */ (function () {
    function PeopleManager(view) {
        this.view = view;
    }
    /**
     * 开启生成工厂
     * 生成人
     * 生成人的位置
     * 生产人的type ： 城里人/城外人 逻辑分开
     */
    /**开启生成工厂 */
    PeopleManager.prototype.openPeopleFactory = function () {
        this.createPeople();
    };
    /**生成人 */
    PeopleManager.prototype.createPeople = function () {
        var people;
        /**生成不同人种的几率 */
        var random = Math.floor(Math.random() * 100);
        //普通人
        if (random >= 0 && random < 80) {
            people = Laya.Pool.getItem("common");
            if (!people) {
                people = new Common_1.default(this.view, GameConfig_1.default.COMMON_MAN, true);
            }
        }
        //小偷
        else if (random >= 80 && random < 90) {
            people = Laya.Pool.getItem("robber");
            if (!people) {
                people = new Robber_1.default(this.view, GameConfig_1.default.ROBBER_MAN, true);
            }
        }
        //土匪
        else if (random >= 90 && random < 96) {
            people = Laya.Pool.getItem("bandit");
            if (!people) {
                people = new Robber_1.default(this.view, GameConfig_1.default.BANDIT_MAN, true);
            }
        }
        //科学家
        else if (random >= 96 && random < 99) {
            people = Laya.Pool.getItem("scientist");
            if (!people) {
                people = new Robber_1.default(this.view, GameConfig_1.default.SCIENTIST_MAN, true);
            }
        }
        //明星
        else {
            people = Laya.Pool.getItem("star");
            if (!people) {
                people = new Robber_1.default(this.view, GameConfig_1.default.STAR_MAN, true);
            }
        }
        people.visible = true;
        this.getPos();
        people.setPos(this.X, this.Y);
        people.openBehaviour();
        var time = Math.random() * 3;
        if (DataManager_1.OutCountryData.ins_.outCount < DataManager_1.OutCountryData.ins_.maxCount - 1) {
            Laya.timer.frameOnce(time * 60, this, this.createPeople);
        }
        DataManager_1.OutCountryData.ins_.outCount++;
        console.log(DataManager_1.OutCountryData.ins_.outCount);
    };
    /**生成人的位置 */
    PeopleManager.prototype.getPos = function () {
        var typeNum = Math.floor(Math.random() * 3);
        switch (typeNum) {
            case 0:
                //在A边界
                this.X = 0;
                this.Y = Math.random() * 390;
                break;
            case 1:
                //在B边界
                this.X = Math.random() * 2000;
                this.Y = 0;
                break;
            case 2:
                //在C边界
                this.X = 2000;
                this.Y = Math.random() * 390;
                break;
        }
    };
    /*************************************界限检测 **********************/
    PeopleManager.prototype.checkPercent = function (people, type) {
        //流动比例检测
        if (DataManager_1.default.ins_.percent < 1) {
            this.createPeople();
        }
    };
    return PeopleManager;
}());
exports.default = PeopleManager;
},{"../Config/GameConfig":1,"../Perfeb/diff_People/Common":10,"../Perfeb/diff_People/Robber":11,"./DataManager":2}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * UI管理器
 */
var UIManager = /** @class */ (function () {
    /**载入数据 */
    function UIManager(ui) {
        this.UiSprite = ui;
    }
    return UIManager;
}());
exports.default = UIManager;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 事件发生管理器
 *
 *
 * 生成事件、
 * 影响人口流动
 */
var WorldEventManager = /** @class */ (function () {
    function WorldEventManager() {
    }
    return WorldEventManager;
}());
exports.default = WorldEventManager;
},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var MsgDialog_1 = require("./Core/MsgDialog");
var OpenGame_1 = require("./Script/OpenGame");
var GameWorld_1 = require("./Script/GameWorld/GameWorld");
var OpenStory_1 = require("./Script/OpenStory");
var Center_1 = require("./Script/Center");
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
        reg("Core/MsgDialog.ts", MsgDialog_1.default);
        reg("Script/OpenGame.ts", OpenGame_1.default);
        reg("Script/GameWorld/GameWorld.ts", GameWorld_1.default);
        reg("Script/OpenStory.ts", OpenStory_1.default);
        reg("Script/Center.ts", Center_1.default);
    };
    GameConfig.width = 1440;
    GameConfig.height = 900;
    GameConfig.scaleMode = "fixedheight";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "StartGame.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();
},{"./Core/MsgDialog":3,"./Script/Center":12,"./Script/GameWorld/GameWorld":13,"./Script/OpenGame":14,"./Script/OpenStory":15}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var Main = /** @class */ (function () {
    function Main() {
        //根据IDE设置初始化引擎		
        if (window["Laya3D"])
            Laya3D.init(GameConfig_1.default.width, GameConfig_1.default.height);
        else
            Laya.init(GameConfig_1.default.width, GameConfig_1.default.height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = GameConfig_1.default.scaleMode;
        Laya.stage.screenMode = GameConfig_1.default.screenMode;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (GameConfig_1.default.debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (GameConfig_1.default.physicsDebug && Laya["PhysicsDebugDraw"])
            Laya["PhysicsDebugDraw"].enable();
        if (GameConfig_1.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError = true;
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    Main.prototype.onVersionLoaded = function () {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    };
    Main.prototype.onConfigLoaded = function () {
        //加载IDE指定的场景
        GameConfig_1.default.startScene && Laya.Scene.open(GameConfig_1.default.startScene);
    };
    return Main;
}());
//激活启动类
new Main();
},{"./GameConfig":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("../Core/DataManager");
/**
 *
 * 人种父类
 */
var People = /** @class */ (function () {
    function People(view, type, isOut) {
        this.view = view;
        this.isOut = isOut;
        this.type = type;
        this.init(type);
    }
    /**初始化 */
    People.prototype.init = function (type) {
        //创建
        this.createPeople(type);
    };
    /**开始行动 */
    People.prototype.openBehaviour = function () {
        //运行了逻辑
        if (this.isOut) {
            this.people_PosOut();
            Laya.timer.frameLoop(1, this, this.checkLimit_Out);
            Laya.timer.frameOnce(DataManager_1.OutCountryData.ins_.limitTime * 60, this, this.limitTime);
        }
        else {
            this.people_PosInner();
        }
    };
    /**生成人 */
    People.prototype.createPeople = function (type) {
        this.createSp(type);
    };
    /**创建Sprite */
    People.prototype.createSp = function (type) {
        var imgUrl = "map/" + type + ".png";
        if (!this.sp) {
            this.sp = new Laya.Sprite();
            this.view.addChild(this.sp);
        }
        this.sp.loadImage(imgUrl);
        this.sp.pivot(this.sp.width / 2, this.sp.height / 2);
    };
    /**设置初始位置 */
    People.prototype.setPos = function (x, y) {
        this.sp.visible = true;
        this.sp.x = x;
        this.sp.y = y;
    };
    /**墙外人行动逻辑*/
    People.prototype.people_PosOut = function () {
        //给予随机方向，方向用(-1~1)表示
        if (this.sp.x <= 900) {
            this.dirX = Math.random();
            this.dirY = Math.random();
        }
        else if (this.sp.x >= 1100) {
            this.dirX = -Math.random();
            this.dirY = Math.random();
        }
        else {
            this.dirX = Math.random() * 2 - 1;
            this.dirY = Math.random() * 2 - 1;
        }
        //给予随机时间，在此时间内移动,随机时间在(2,8)中选择
        var time = Math.random() * 6 + 2;
        Laya.timer.frameOnce(time * 60, this, this.closeMoveTimer);
        //开启移动
        Laya.timer.frameLoop(1, this, this.moveDistance);
    };
    /**单位帧移动*/
    People.prototype.moveDistance = function () {
        this.sp.x += this.dirX;
        this.sp.y += this.dirY;
    };
    /**关闭移动定时器，开启原地休息*/
    People.prototype.closeMoveTimer = function () {
        Laya.timer.clear(this, this.moveDistance);
        //休息时间结束后继续移动
        var time = Math.random() * 6 + 2;
        Laya.timer.frameOnce(time * 60, this, this.people_PosOut);
    };
    /**滞留时间，若超过时间，就离开外城 */
    People.prototype.limitTime = function () {
        Laya.timer.clearAll(this);
        if (this.sp.x <= 1000) {
            this.dirX = -Math.random();
            this.dirY = -Math.random();
        }
        else {
            this.dirX = Math.random();
            this.dirY = -Math.random();
        }
        Laya.timer.frameLoop(1, this, this.moveDistance);
        Laya.timer.frameLoop(1, this, this.checkLimit_Out);
    };
    /**墙内人行动逻辑*/
    People.prototype.people_PosInner = function () {
    };
    /**碰撞检测 */
    People.prototype.checkLimit_Out = function () {
        //边界检测
        if (this.sp.x < -5 || this.sp.x > 2005 || this.sp.y < -5) {
            this.destoryPeople();
            Laya.Pool.recover(this.type, this);
            DataManager_1.OutCountryData.ins_.outCount--;
        }
        //护城河检测
        if (this.sp.y >= 390) {
            //重新给一个位移
            //给予随机方向，方向用(-1~1)表示
            //this.dirX=Math.random()*2-1;
            this.dirY = -Math.random();
        }
        //城门区域检测
        if (this.sp.x > 932 && this.sp.x < 1068 && this.sp.y > 350 && this.sp.y < 390) {
            //城门是否打开
            if (DataManager_1.default.ins_.isDoorOpen) {
                this.destoryPeople();
                Laya.Pool.recover(this.type, this);
                //城外人口-1
                DataManager_1.OutCountryData.ins_.outCount--;
                //国家人口+1
                DataManager_1.default.ins_.population++;
            }
        }
    };
    /**人消失 */
    People.prototype.destoryPeople = function () {
        this.sp.visible = false;
        Laya.timer.clearAll(this);
    };
    return People;
}());
exports.default = People;
},{"../Core/DataManager":2}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("../People");
var Common = /** @class */ (function (_super) {
    __extends(Common, _super);
    function Common(view, type, isOut) {
        return _super.call(this, view, type, isOut) || this;
    }
    return Common;
}(People_1.default));
exports.default = Common;
},{"../People":9}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("../People");
var Robber = /** @class */ (function (_super) {
    __extends(Robber, _super);
    function Robber(view, type, isOut) {
        return _super.call(this, view, type, isOut) || this;
    }
    return Robber;
}(People_1.default));
exports.default = Robber;
},{"../People":9}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Center = /** @class */ (function (_super) {
    __extends(Center, _super);
    function Center() {
        return _super.call(this) || this;
    }
    Center.prototype.onEnable = function () {
        var screenWidth = 900 / (Laya.Browser.clientHeight / Laya.Browser.clientWidth); //屏幕高度
        // console.log("width" + this.screenWidth);
        if (screenWidth < 800)
            this.owner.getChildByName("gameName").fontSize = 125;
        this.owner.x = (screenWidth - 667) / 2;
    };
    return Center;
}(Laya.Script));
exports.default = Center;
},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorldEventManager_1 = require("../../Core/WorldEventManager");
var layaMaxUI_1 = require("../../ui/layaMaxUI");
var UIManager_1 = require("../../Core/UIManager");
var PeopleManager_1 = require("../../Core/PeopleManager");
var GameConfig_1 = require("../../Config/GameConfig");
var MsgDialog_1 = require("../../Core/MsgDialog");
var DataManager_1 = require("../../Core/DataManager");
/**
 * 世界管理器脚本
 */
var GameWorld = /** @class */ (function (_super) {
    __extends(GameWorld, _super);
    function GameWorld() {
        return _super.call(this) || this;
    }
    GameWorld.prototype.onEnable = function () {
        this.gameDataInit(); //游戏变量初始化
        this.addEvent(); //给桥添加事件 
        this.screenSetting(); //屏幕居中
        this.gameStart(); //游戏流程开始
    };
    /**数据初始化 */
    GameWorld.prototype.gameDataInit = function () {
        this.worldEventManager = new WorldEventManager_1.default();
        this.peopleManager = new PeopleManager_1.default(this.sp_scene);
        this.uiManager = new UIManager_1.default(this.sp_UI);
        this.msgDialog = new MsgDialog_1.default();
        this.mousePos = {};
        this.isDown = false;
    };
    /**添加事件 */
    GameWorld.prototype.addEvent = function () {
        this.sp_scene.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        this.sp_scene.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        this.sp_scene.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        //给门帮点点击事   
        this.sp_door.on(Laya.Event.CLICK, this, this.doorCtr);
        //医馆事件绑定
        this.hospital.on(Laya.Event.CLICK, this, this.onHouseInfo, [GameConfig_1.default.HOSPITAL]);
        //军队事件绑定
        this.army.on(Laya.Event.CLICK, this, this.onHouseInfo, [GameConfig_1.default.ARMY]);
        //粮仓事件绑定
        this.farm.on(Laya.Event.CLICK, this, this.onHouseInfo, [GameConfig_1.default.FARM]);
        //科技馆事件绑定
        this.technology.on(Laya.Event.CLICK, this, this.onHouseInfo, [GameConfig_1.default.TECHNOLOGY]);
        //新闻点事件绑定
        //this.eventHouse.on(Laya.Event.CLICK,this,this.onHouseInfo,[GameConfig.EVENT_HOUSE]);     
        //新闻皇宫绑定
        this.palace.on(Laya.Event.CLICK, this, this.onHouseInfo, [GameConfig_1.default.PALACE]);
    };
    /**屏幕 局中*/
    GameWorld.prototype.screenSetting = function () {
        this.screenWidth = 900 / (Laya.Browser.clientHeight / Laya.Browser.clientWidth); //屏幕高度
        // console.log("width" + this.screenWidth);
        this.sp_scene.x = -(2000 - this.screenWidth) / 2;
    };
    ///////////////////////////////////////事件回调
    /**门的开关 */
    GameWorld.prototype.doorCtr = function () {
        if (DataManager_1.default.ins_.isDoorOpen) { //开门
            DataManager_1.default.ins_.isDoorOpen = false;
            this.doorClose();
        }
        else { //关门
            DataManager_1.default.ins_.isDoorOpen = true;
            this.doorOpen();
        }
    };
    /**关门 */
    GameWorld.prototype.doorClose = function () {
    };
    /**开门 */
    GameWorld.prototype.doorOpen = function () {
    };
    /**移动 */
    GameWorld.prototype.mouseMove = function () {
        if (!this.isDown)
            return;
        if (this.mousePos.x) {
            this.sp_scene.x += Laya.stage.mouseX - this.mousePos.x;
            //    this.sp_scene.y += Laya.stage.mouseY - this.mousePos.x;
            if (this.sp_scene.x > 0)
                this.sp_scene.x = 0;
            if (this.sp_scene.x < -(2000 - this.screenWidth))
                this.sp_scene.x = -(2000 - this.screenWidth);
        }
        this.mousePos.x = Laya.stage.mouseX;
        this.mousePos.y = Laya.stage.mouseY;
    };
    /**拖动按下 */
    GameWorld.prototype.mouseDown = function () {
        this.isDown = true;
    };
    /**拖动抬起 */
    GameWorld.prototype.mouseUp = function () {
        Laya.timer.clear(this, this.mouseMove);
        this.isDown = false;
        this.mousePos.x = undefined;
        this.mousePos.y = undefined;
    };
    /**点击 获取建筑信息 */
    GameWorld.prototype.onHouseInfo = function (type) {
        this.msgDialog.showMsg(type);
    };
    ////////////游戏流程开始//////////////////////////
    /**游戏流程开始 */
    GameWorld.prototype.gameStart = function () {
        this.peopleManager.createPeople(); //人口生成逻辑运行
    };
    return GameWorld;
}(layaMaxUI_1.ui.GameWorldUI));
exports.default = GameWorld;
},{"../../Config/GameConfig":1,"../../Core/DataManager":2,"../../Core/MsgDialog":3,"../../Core/PeopleManager":4,"../../Core/UIManager":5,"../../Core/WorldEventManager":6,"../../ui/layaMaxUI":16}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpenGame = /** @class */ (function (_super) {
    __extends(OpenGame, _super);
    function OpenGame() {
        return _super.call(this) || this;
    }
    OpenGame.prototype.onEnable = function () {
    };
    OpenGame.prototype.onClick = function () {
        Laya.Scene.open("GameWorld.scene");
    };
    return OpenGame;
}(Laya.Script));
exports.default = OpenGame;
},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpenStory = /** @class */ (function (_super) {
    __extends(OpenStory, _super);
    function OpenStory() {
        return _super.call(this) || this;
    }
    OpenStory.prototype.onEnable = function () {
    };
    OpenStory.prototype.onClick = function () {
        Laya.Scene.open("GameStory.scene");
    };
    return OpenStory;
}(Laya.Script));
exports.default = OpenStory;
},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scene = Laya.Scene;
var ui;
(function (ui) {
    var Dialog;
    (function (Dialog) {
        var CurrentDialogUI = /** @class */ (function (_super) {
            __extends(CurrentDialogUI, _super);
            function CurrentDialogUI() {
                return _super.call(this) || this;
            }
            CurrentDialogUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadScene("Dialog/CurrentDialog");
            };
            return CurrentDialogUI;
        }(Scene));
        Dialog.CurrentDialogUI = CurrentDialogUI;
    })(Dialog = ui.Dialog || (ui.Dialog = {}));
})(ui = exports.ui || (exports.ui = {}));
(function (ui) {
    var GameWorldUI = /** @class */ (function (_super) {
        __extends(GameWorldUI, _super);
        function GameWorldUI() {
            return _super.call(this) || this;
        }
        GameWorldUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.loadScene("GameWorld");
        };
        return GameWorldUI;
    }(Scene));
    ui.GameWorldUI = GameWorldUI;
})(ui = exports.ui || (exports.ui = {}));
},{}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXIyLjAvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vbi50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyLnRzIiwic3JjL1NjcmlwdC9DZW50ZXIudHMiLCJzcmMvU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHMiLCJzcmMvU2NyaXB0L09wZW5HYW1lLnRzIiwic3JjL1NjcmlwdC9PcGVuU3RvcnkudHMiLCJzcmMvdWkvbGF5YU1heFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1ZBO0lBQUE7SUEwQkEsQ0FBQztJQXpCRyxjQUFjO0lBQ0EscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MsbUJBQVEsR0FBWSxNQUFNLENBQUM7SUFDekMsY0FBYztJQUNBLHdCQUFhLEdBQVksV0FBVyxDQUFDO0lBR25ELHNDQUFzQztJQUN0QyxRQUFRO0lBQ00sbUJBQVEsR0FBWSxDQUFDLENBQUM7SUFDcEMsUUFBUTtJQUNNLGVBQUksR0FBWSxDQUFDLENBQUM7SUFDaEMsUUFBUTtJQUNN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Q0FBQyxDQUFDO1lBQzNDLENBQUM7WUFDTCxzQkFBQztRQUFELENBVkEsQUFVQyxDQVZvQyxLQUFLLEdBVXpDO1FBVlksc0JBQWUsa0JBVTNCLENBQUE7SUFDTCxDQUFDLEVBWmdCLE1BQU0sR0FBTixTQUFNLEtBQU4sU0FBTSxRQVl0QjtBQUFELENBQUMsRUFaYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFZZjtBQUNELFdBQWMsRUFBRTtJQUNaO1FBQWlDLCtCQUFLO1FBaURsQzttQkFBZSxpQkFBTztRQUFBLENBQUM7UUFDdkIsb0NBQWMsR0FBZDtZQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0F0REEsQUFzREMsQ0F0RGdDLEtBQUssR0FzRHJDO0lBdERZLGNBQVcsY0FzRHZCLENBQUE7QUFDTCxDQUFDLEVBeERhLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQXdEZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcbiAgICAvKirkurrnp40gLSDmma7pgJrkurogKi9cbiAgICBwdWJsaWMgc3RhdGljIENPTU1PTl9NQU4gOiBzdHJpbmcgPSBcImNvbW1vblwiO1xuICAgIC8qKuS6uuenjSAtIOWwj+WBtyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUk9CQkVSX01BTiA6IHN0cmluZyA9IFwicm9iYmVyXCI7XG4gICAgLyoq5Lq656eNIC0g5Zyf5YyqICovXG4gICAgcHVibGljIHN0YXRpYyBCQU5ESVRfTUFOIDogc3RyaW5nID0gXCJiYW5kaXRcIjtcbiAgICAvKirkurrnp40gLSDmmI7mmJ8gKi9cbiAgICBwdWJsaWMgc3RhdGljIFNUQVJfTUFOIDogc3RyaW5nID0gXCJzdGFyXCI7XG4gICAgLyoq5Lq656eNIC0g56eR5a2m5a62ICovXG4gICAgcHVibGljIHN0YXRpYyBTQ0lFTlRJU1RfTUFOIDogc3RyaW5nID0gXCJzY2llbnRpc3RcIjtcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5bu6562RXG4gICAgLyoq5Yy76ZmiICovXG4gICAgcHVibGljIHN0YXRpYyBIT1NQSVRBTCA6IG51bWJlciA9IDE7XG4gICAgLyoq5Yab6ZifICovXG4gICAgcHVibGljIHN0YXRpYyBBUk1ZIDogbnVtYmVyID0gMjtcbiAgICAvKirlhpzlnLogKi9cbiAgICBwdWJsaWMgc3RhdGljIEZBUk06IG51bWJlciA9IDM7XG4gICAgLyoq56eR5oqAICovXG4gICAgcHVibGljIHN0YXRpYyBURUNITk9MT0dZOiBudW1iZXIgPSA0O1xuICAgIC8qKuS6i+S7tuaIvyDmlrDpl7vmiL8gKi9cbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UX0hPVVNFOiBudW1iZXIgPSA1O1xuICAgIC8qKueah+WuqyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUEFMQUNFOiBudW1iZXIgPSA2O1xufSIsIi8qKlxuICog5pWw5o2u5Lit5b+DIOaJgOacieeahOaVsOaNrlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudHJ5RGF0YXtcbiAgICBwdWJsaWMgc3RhdGljIGluc18gOiBDb3VudHJ5RGF0YSA9IG5ldyBDb3VudHJ5RGF0YSgpO1xuICAgIC8qKioqKioqKioqKioqKuS4u+aVsOaNrioqKioqKioqKioqKioqKioqKioqL1xuICAgIC8qKuWbveWutui0ouaUvyAqL1xuICAgIHB1YmxpYyBnb2xkIDogbnVtYmVyO1xuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xuICAgIHB1YmxpYyBwb3B1bGFyU3VwcG9ydCA6IG51bWJlcjtcbiAgICAvKirlm73lrrbkurrlj6MgKi9cbiAgICBwdWJsaWMgcG9wdWxhdGlvbiA6IG51bWJlcj0xMDA7XG4gICAgLyoq5Zu95a6256eR5oqAICovXG4gICAgcHVibGljIHRlY2hub2xvZ3kgOiBudW1iZXI7XG4gICAgLyoq5Zu95a625aOw5pybICovXG4gICAgcHVibGljIHByZXN0aWdlIDogbnVtYmVyO1xuXG4gICAgLyoqKioqKioqKioqKioqKuWJr+aVsOaNrioqKioqKioqKioqKioqKioqL1xuICAgIC8vLS0tLS0tLS3mma7pgJrmlbDmja5cbiAgICAvKirnsq7po5/kuqfph48gKi9cbiAgICBwdWJsaWMgZ3JhaW5ZaWVsZCA6IG51bWJlcjtcbiAgICAvKirnsq7po5/mtojogJcgKi9cbiAgICBwdWJsaWMgZ3JhaW5Db25zdW1wdGlvbiA6IG51bWJlcjtcblxuICAgIC8vLS0tLS0tLS3kuovku7bmlbDmja5cbiAgICAvKirnmJ/nlqsgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfKi9cbiAgICBwdWJsaWMgcGVzdCA6IG51bWJlcjtcbiAgICAvKirlnLDpnIcgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfICovXG4gICAgcHVibGljIG5hdHVyYWxEaXNhc3RlciA6IG51bWJlcjtcbiAgICAvKirmiJjkubEgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfKi9cbiAgICBwdWJsaWMgd2FyIDogbnVtYmVyO1xuXG4gICAgLy8tLS0tLS0tLeiBjOS4muS6uuaVsFxuICAgIC8qKuaZrumAmuS6uiBBICDmma7pgJrkurrkuK3kvJrkuqfnlJ/ljLvnlJ8g6K2m5a+fIOetieato+W4uOiBjOS4miovXG4gICAgcHVibGljIGNvbW1vbk1hbiA6IG51bWJlcjtcbiAgICAvKirnp5HlrablrrYgU1NTKi9cbiAgICBwdWJsaWMgc2NpZW50aXN0IDogbnVtYmVyO1xuICAgIC8qKuaYjuaYnyBTUyovXG4gICAgcHVibGljIHN0YXIgOiBudW1iZXI7XG4gICAgLyoq5Zyf5YyqIC1TICovXG4gICAgcHVibGljIGJhbmRpdCA6IG51bWJlcjtcbiAgICAvKirnm5fotLwgLUEgKi9cbiAgICBwdWJsaWMgcm9iYmVyIDogbnVtYmVyO1xuICAgIFxuICAgIC8vLS0tLS0tLS3ln47pl6hcbiAgICAvKirpl6jmmK/lkKbmiZPlvIAqL1xuICAgIHB1YmxpYyBpc0Rvb3JPcGVuIDogYm9vbGVhbj10cnVlO1xuICAgIC8qKuS6uuWPo+i/m+WFpemHjyAqL1xuICAgIHB1YmxpYyBlbnRlclBlb3BsZSA6IG51bWJlcjtcbiAgICAvKirkurrlj6PmtYHlh7rph48gKi9cbiAgICBwdWJsaWMgb3V0ZXJQZW9wbGUgOiBudW1iZXI7XG4gICAgLyoq562b5p+l6IO95YqbIOWQr+WKqOeJueauiumXqOeahOaXtuWAmSAg562b5p+l6IO95Yqb55Sf5pWIKi9cbiAgICBwdWJsaWMgcHJlcGFyYXRpb24gOiBudW1iZXI7XG4gICAgLyoq54m55q6K6ZeoIOetm+afpSAxLemYsuatoui/m+WFpSAgIDIt6YKA6K+36L+b5YWlKi9cbiAgICAvLyBwdWJsaWMga2VlcFNlbGVjdCA6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICAvKirmtYHliqjmr5TkvosgKi9cbiAgICBwdWJsaWMgcGVyY2VudDpudW1iZXI9MTtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpe1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5Lq65Y+j5rWB6YePIDpcbiAgICAgKiByZXR1cm4g6L+b5YWlIC8g5Ye65Y67XG4gICAgICovXG4gICAgcHVibGljIGdldF9QZW9wbGVNb3ZlKCkgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudGVyUGVvcGxlL3RoaXMub3V0ZXJQZW9wbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5Lq656eN5q+U5L6LXG4gICAgICogQHBhcmFtIHR5cGUg5Lq656eNXG4gICAgICovXG4gICAgcHVibGljIGdldF9Qcm9mZXNzaW9uUGVyY2VudCh0eXBlOnN0cmluZykgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGlmKHRoaXNbdHlwZV0gPT09IHVuZGVmaW5lZCkgY29uc29sZS5sb2coXCLkuI3lrZjlnKjor6Xkurrnp41cIik7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXNbdHlwZV0vKHRoaXMuY29tbW9uTWFuICsgdGhpcy5zY2llbnRpc3QgKyB0aGlzLnN0YXIgKyB0aGlzLmJhbmRpdCArIHRoaXMucm9iYmVyKTtcbiAgICB9XG5cbiAgICAvKirmlbDmja7nu5PnrpcgIOe7vOWQiOiuoeeul+aJgOacieeahOaVsOWAvCovXG4gICAgLy8gcHJpdmF0ZSBcblxuXG5cbn1cblxuLyoq5aSW5Z+OICovXG5leHBvcnQgY2xhc3MgT3V0Q291bnRyeURhdGF7XG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogT3V0Q291bnRyeURhdGEgPSBuZXcgT3V0Q291bnRyeURhdGEoKTtcbiAgICAvKioqKioqKioqKioqKirkuLvmlbDmja4qKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKirmnIDlpKflpJbln47lrrnnurPmlbDph48gKi9cbiAgICBwdWJsaWMgbWF4Q291bnQgOiBudW1iZXI9NTA7XG4gICAgLyoq5b2T5YmN5aSW5Z+O5Lq65Y+j5pWwICovXG4gICAgcHVibGljIG91dENvdW50Om51bWJlcj0wO1xuICAgIC8qKuS6uua7nueVmeaXtumXtCAqL1xuICAgIHB1YmxpYyBsaW1pdFRpbWU6bnVtYmVyPTUwO1xufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xuXG4vKipcbiAqIOa2iOaBr+ahhiDpgJrnlKhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXNnRGlhbG9nIGV4dGVuZHMgdWkuRGlhbG9nLkN1cnJlbnREaWFsb2dVSXtcbiAgICAvKirnsbvlnosgKi9cbiAgICBwcml2YXRlIHR5cGUgOiBudW1iZXIgO1xuICAgIC8qKue8k+WKqCAqL1xuICAgIC8vIHByaXZhdGUgc2hvd1R3ZWVuIDogTGF5YS5Ud2VlbjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKuWIneWni+WMliAqL1xuICAgIHB1YmxpYyBzaG93TXNnKHR5cGU6bnVtYmVyKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlRGlhbG9nKTsgICAgICAgIFxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNoYW5nZUltZygpO1xuICAgICAgICB0aGlzLmNoYW5nZVRpdGxlKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlV29yZCgpOyBcbiAgICAgICAgdGhpcy5tc2dCb2R5LnggPSAoOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCktMTE2MykvMjsgICAgICAgXG4gICAgICAgIHRoaXMubXNnQm9keS55ID0gLTU1NzsgICAgICAgXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5tc2dCb2R5LHt5OjB9LDIwMCxMYXlhLkVhc2UuYmFja091dCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuaNouWbviAqL1xuICAgIHByaXZhdGUgY2hhbmdlSW1nKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBzd2l0Y2godGhpcy50eXBlKVxuICAgICAgICB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuaNouagh+mimCAqL1xuICAgIHByaXZhdGUgY2hhbmdlVGl0bGUoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuaWh+Wtl+i9veWFpSAqL1xuICAgIHByaXZhdGUgY2hhbmdlV29yZCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5YWz6ZetICovXG4gICAgcHVibGljIGNsb3NlRGlhbG9nKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vZmYoTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuY2xvc2VEaWFsb2cpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLm1zZ0JvZHkse3k6LTU1N30sMjAwLExheWEuRWFzZS5iYWNrT3V0LExheWEuSGFuZGxlci5jcmVhdGUodGhpcyx0aGlzLmNsb3NlT3ZlcikpOyAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbG9zZU92ZXIoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlOyAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1BlcmZlYi9QZW9wbGVcIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IENvdW50cnlEYXRhLCB7IE91dENvdW50cnlEYXRhIH0gZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBDb21tb24gZnJvbVwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vblwiXG5pbXBvcnQgUm9iYmVyIGZyb21cIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9Sb2JiZXJcIlxuLyoqXG4gKiDkurog566h55CGXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZU1hbmFnZXIge1xuICAgIC8qKuinhuWbviovXG4gICAgcHJpdmF0ZSB2aWV3OmFueTsgXG4gICAgLyoq5qiq5Z2Q5qCHICovXG4gICAgcHJpdmF0ZSBYOm51bWJlcjtcbiAgICAvKirnurXlnZDmoIcgKi9cbiAgICBwcml2YXRlIFk6bnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHZpZXcpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXc9dmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvIDlkK/nlJ/miJDlt6XljoJcbiAgICAgKiDnlJ/miJDkurogXG4gICAgICog55Sf5oiQ5Lq655qE5L2N572uXG4gICAgICog55Sf5Lqn5Lq655qEdHlwZSDvvJog5Z+O6YeM5Lq6L+WfjuWkluS6uiDpgLvovpHliIblvIBcbiAgICAgKi9cbiAgICAvKirlvIDlkK/nlJ/miJDlt6XljoIgKi9cbiAgICBwdWJsaWMgb3BlblBlb3BsZUZhY3RvcnkoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKCk7XG4gICAgfVxuXG4gICAgLyoq55Sf5oiQ5Lq6ICovXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZSgpOnZvaWRcbiAgICB7XG4gICAgICAgIGxldCBwZW9wbGU7XG4gICAgICAgIC8qKueUn+aIkOS4jeWQjOS6uuenjeeahOWHoOeOhyAqL1xuICAgICAgICBsZXQgcmFuZG9tPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDApO1xuICAgICAgICAvL+aZrumAmuS6ulxuICAgICAgICBpZihyYW5kb20+PTAmJnJhbmRvbTw4MClcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcImNvbW1vblwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgQ29tbW9uKHRoaXMudmlldyxHYW1lQ29uZmlnLkNPTU1PTl9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/lsI/lgbdcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PTgwJiZyYW5kb208OTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJyb2JiZXJcIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFJvYmJlcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5ST0JCRVJfTUFOLHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5Zyf5YyqXG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj05MCYmcmFuZG9tPDk2KVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwiYmFuZGl0XCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuQkFORElUX01BTix0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+enkeWtpuWutlxuICAgICAgICBlbHNlIGlmKHJhbmRvbT49OTYmJnJhbmRvbTw5OSlcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInNjaWVudGlzdFwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgUm9iYmVyKHRoaXMudmlldyxHYW1lQ29uZmlnLlNDSUVOVElTVF9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/mmI7mmJ9cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwic3RhclwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgUm9iYmVyKHRoaXMudmlldyxHYW1lQ29uZmlnLlNUQVJfTUFOLHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBlb3BsZS52aXNpYmxlPXRydWU7XG4gICAgICAgIHRoaXMuZ2V0UG9zKCk7XG4gICAgICAgIHBlb3BsZS5zZXRQb3ModGhpcy5YLHRoaXMuWSk7XG4gICAgICAgIHBlb3BsZS5vcGVuQmVoYXZpb3VyKCk7XG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMztcbiAgICAgICAgaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNyZWF0ZVBlb3BsZSk7XG4gICAgICAgIH1cbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudCsrO1xuICAgICAgICBjb25zb2xlLmxvZyhPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50KVxuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uueahOS9jee9riAqL1xuICAgIHB1YmxpYyBnZXRQb3MoKTphbnlcbiAgICB7XG4gICAgICAgIGxldCB0eXBlTnVtPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozKTtcbiAgICAgICAgc3dpdGNoKHR5cGVOdW0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAvL+WcqEHovrnnlYxcbiAgICAgICAgICAgICAgICB0aGlzLlg9MDtcbiAgICAgICAgICAgICAgICB0aGlzLlk9TWF0aC5yYW5kb20oKSozOTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy/lnKhC6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPU1hdGgucmFuZG9tKCkqMjAwMDtcbiAgICAgICAgICAgICAgICB0aGlzLlk9MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAvL+WcqEPovrnnlYxcbiAgICAgICAgICAgICAgICB0aGlzLlg9MjAwMDtcbiAgICAgICAgICAgICAgICB0aGlzLlk9TWF0aC5yYW5kb20oKSozOTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKueVjOmZkOajgOa1iyAqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIFxuICAgIFxuICAgIHB1YmxpYyBjaGVja1BlcmNlbnQocGVvcGxlLHR5cGU6c3RyaW5nKTp2b2lkXG4gICAge1xuICAgICAgICAvL+a1geWKqOavlOS+i+ajgOa1i1xuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLnBlcmNlbnQ8MSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcblxuLyoqXG4gKiBVSeeuoeeQhuWZqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXJ7XG4gICAgLyoq5pWw5o2u566h55CG5ZmoICovXG4gICAgLy8gcHVibGljIHN0YXRpYyBkYXRhTWFuYWdlciA6IERhdGFNYW5hZ2VyO1xuICAgIC8qKlVJIHNwcml0ZSAqL1xuICAgIHByaXZhdGUgVWlTcHJpdGUgOiBMYXlhLlNwcml0ZTtcblxuICAgIC8qKui9veWFpeaVsOaNriAqL1xuICAgIGNvbnN0cnVjdG9yKHVpOkxheWEuU3ByaXRlKXtcbiAgICAgICAgdGhpcy5VaVNwcml0ZSA9IHVpO1xuICAgIH1cbiAgICBcbiAgICBcbn0iLCIvKipcbiAqIOS6i+S7tuWPkeeUn+euoeeQhuWZqFxuICogXG4gKiBcbiAqIOeUn+aIkOS6i+S7tuOAgVxuICog5b2x5ZON5Lq65Y+j5rWB5YqoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmxkRXZlbnRNYW5hZ2VyIHtcblxuXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cblxuICAgIC8qKuS6i+S7tumihOaKpeWIsCAqL1xuICAgIFxuXG4gICAgLyoq5LqL5Lu25Y+R55Sf5ZmoICovXG5cbiAgICBcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi9Db3JlL01zZ0RpYWxvZ1wiXG5pbXBvcnQgT3BlbkdhbWUgZnJvbSBcIi4vU2NyaXB0L09wZW5HYW1lXCJcbmltcG9ydCBHYW1lV29ybGQgZnJvbSBcIi4vU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGRcIlxuaW1wb3J0IE9wZW5TdG9yeSBmcm9tIFwiLi9TY3JpcHQvT3BlblN0b3J5XCJcbmltcG9ydCBDZW50ZXIgZnJvbSBcIi4vU2NyaXB0L0NlbnRlclwiXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xNDQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9OTAwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZGhlaWdodFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiU3RhcnRHYW1lLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJDb3JlL01zZ0RpYWxvZy50c1wiLE1zZ0RpYWxvZyk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9PcGVuR2FtZS50c1wiLE9wZW5HYW1lKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHNcIixHYW1lV29ybGQpO1xuICAgICAgICByZWcoXCJTY3JpcHQvT3BlblN0b3J5LnRzXCIsT3BlblN0b3J5KTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L0NlbnRlci50c1wiLENlbnRlcik7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xuY2xhc3MgTWFpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxuXHRcdGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xuXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcblxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcblx0fVxuXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XG5cdH1cblxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xuXHRcdEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcblx0fVxufVxuLy/mv4DmtLvlkK/liqjnsbtcbm5ldyBNYWluKCk7XG4iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcbmltcG9ydCBDb3VudHJ5RGF0YSwgeyBPdXRDb3VudHJ5RGF0YSB9IGZyb20gXCIuLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XG5cbi8qKlxuICogXG4gKiDkurrnp43niLbnsbtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlIHtcbiAgICAvKirlnLrmma8qL1xuICAgIHByaXZhdGUgdmlldyA6IExheWEuU3ByaXRlO1xuICAgIC8qKueyvueBtSAqL1xuICAgIHB1YmxpYyBzcCA6IExheWEuU3ByaXRlO1xuICAgIC8qKuaoquWdkOagh+enu+WKqOmAn+W6piAqL1xuICAgIHByaXZhdGUgZGlyWDpudW1iZXI7XG4gICAgLyoq57q15Z2Q5qCH56e75Yqo6YCf5bqmICovXG4gICAgcHJpdmF0ZSBkaXJZOm51bWJlcjtcbiAgICAvKirlopnlhoXkurrov5jmmK/lopnlpJbkurogKi9cbiAgICBwdWJsaWMgaXNPdXQgOiBib29sZWFuO1xuICAgIC8qKuS6uuWxnuaApyAqL1xuICAgIHB1YmxpYyB0eXBlOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmlzT3V0ID0gaXNPdXQ7XG4gICAgICAgIHRoaXMudHlwZT10eXBlO1xuICAgICAgICB0aGlzLmluaXQodHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5Yid5aeL5YyWICovXG4gICAgcHJpdmF0ZSBpbml0KHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy/liJvlu7pcbiAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUodHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5byA5aeL6KGM5YqoICovXG4gICAgcHVibGljIG9wZW5CZWhhdmlvdXIoKTp2b2lkXG4gICAge1xuICAgICAgICAvL+i/kOihjOS6humAu+i+kVxuICAgICAgICBpZih0aGlzLmlzT3V0KSBcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zT3V0KCk7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZShPdXRDb3VudHJ5RGF0YS5pbnNfLmxpbWl0VGltZSo2MCx0aGlzLHRoaXMubGltaXRUaW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGVvcGxlX1Bvc0lubmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurogKi9cbiAgICBwcml2YXRlIGNyZWF0ZVBlb3BsZSh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgICB0aGlzLmNyZWF0ZVNwKHR5cGUpO1xuICAgIH1cblxuICAgIC8qKuWIm+W7ulNwcml0ZSAqL1xuICAgIHByaXZhdGUgY3JlYXRlU3AodHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgaW1nVXJsID0gXCJtYXAvXCIrdHlwZStcIi5wbmdcIjtcbiAgICAgICAgaWYoIXRoaXMuc3ApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3AgPSBuZXcgTGF5YS5TcHJpdGUoKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnNwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwLmxvYWRJbWFnZShpbWdVcmwpO1xuICAgICAgICB0aGlzLnNwLnBpdm90KHRoaXMuc3Aud2lkdGgvMix0aGlzLnNwLmhlaWdodC8yKTsgICAgICAgIFxuICAgIH1cblxuICAgIC8qKuiuvue9ruWIneWni+S9jee9riAqL1xuICAgIHB1YmxpYyBzZXRQb3MoeDpudW1iZXIseTpudW1iZXIpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3AueCA9IHg7XG4gICAgICAgIHRoaXMuc3AueSA9IHk7XG4gICAgfVxuXG4gICAgLyoq5aKZ5aSW5Lq66KGM5Yqo6YC76L6RKi9cbiAgICBwcml2YXRlIHBlb3BsZV9Qb3NPdXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pa55ZCR77yM5pa55ZCR55SoKC0xfjEp6KGo56S6XG4gICAgICAgIGlmKHRoaXMuc3AueDw9OTAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5zcC54Pj0xMTAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgICAgfVxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtO+8jOWcqOatpOaXtumXtOWGheenu+WKqCzpmo/mnLrml7bpl7TlnKgoMiw4KeS4remAieaLqVxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjYrMjtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMuY2xvc2VNb3ZlVGltZXIpO1xuICAgICAgICAvL+W8gOWQr+enu+WKqFxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xuICAgIH1cbiAgICBcbiAgICAvKirljZXkvY3luKfnp7vliqgqL1xuICAgIHByaXZhdGUgbW92ZURpc3RhbmNlKCk6dm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcC54Kz10aGlzLmRpclg7XG4gICAgICAgIHRoaXMuc3AueSs9dGhpcy5kaXJZO1xuICAgIH1cblxuICAgIC8qKuWFs+mXreenu+WKqOWumuaXtuWZqO+8jOW8gOWQr+WOn+WcsOS8keaBryovXG4gICAgcHJpdmF0ZSBjbG9zZU1vdmVUaW1lcigpOnZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIC8v5LyR5oGv5pe26Ze057uT5p2f5ZCO57un57ut56e75YqoXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNisyO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5wZW9wbGVfUG9zT3V0KTtcbiAgICB9XG4gICAgXG4gICAgLyoq5rue55WZ5pe26Ze077yM6Iul6LaF6L+H5pe26Ze077yM5bCx56a75byA5aSW5Z+OICovXG4gICAgcHJpdmF0ZSBsaW1pdFRpbWUoKTp2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICBpZih0aGlzLnNwLng8PTEwMDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcbiAgICB9XG5cbiAgICAvKirlopnlhoXkurrooYzliqjpgLvovpEqL1xuICAgIHByaXZhdGUgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXG4gICAge1xuXG4gICAgfVxuICAgIFxuXG4gICAgLyoq56Kw5pKe5qOA5rWLICovXG4gICAgcHJpdmF0ZSBjaGVja0xpbWl0X091dCgpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v6L6555WM5qOA5rWLXG4gICAgICAgIGlmKHRoaXMuc3AueDwtNXx8dGhpcy5zcC54PjIwMDV8fHRoaXMuc3AueTwtNSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7XG4gICAgICAgICAgICBMYXlhLlBvb2wucmVjb3Zlcih0aGlzLnR5cGUsdGhpcyk7XG4gICAgICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50LS07XG4gICAgICAgIH1cblxuICAgICAgICAvL+aKpOWfjuays+ajgOa1i1xuICAgICAgICBpZih0aGlzLnNwLnk+PTM5MClcbiAgICAgICAge1xuICAgICAgICAgICAgLy/ph43mlrDnu5nkuIDkuKrkvY3np7tcbiAgICAgICAgICAgICAgICAvL+e7meS6iOmaj+acuuaWueWQke+8jOaWueWQkeeUqCgtMX4xKeihqOekulxuICAgICAgICAgICAgICAgIC8vdGhpcy5kaXJYPU1hdGgucmFuZG9tKCkqMi0xO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5Z+O6Zeo5Yy65Z+f5qOA5rWLXG4gICAgICAgIGlmKHRoaXMuc3AueD45MzImJnRoaXMuc3AueDwxMDY4JiZ0aGlzLnNwLnk+MzUwJiZ0aGlzLnNwLnk8MzkwKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+WfjumXqOaYr+WQpuaJk+W8gFxuICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdG9yeVBlb3BsZSgpO1xuICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKHRoaXMudHlwZSx0aGlzKTtcbiAgICAgICAgICAgICAgICAvL+WfjuWkluS6uuWPoy0xXG4gICAgICAgICAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudC0tO1xuICAgICAgICAgICAgICAgIC8v5Zu95a625Lq65Y+jKzFcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKuS6uua2iOWksSAqL1xuICAgIHByaXZhdGUgZGVzdG9yeVBlb3BsZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XG4gICAgfVxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24gZXh0ZW5kcyBQZW9wbGV7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2JiZXIgZXh0ZW5kcyBQZW9wbGV7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbnRlciBleHRlbmRzIExheWEuU2NyaXB0e1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIgKyB0aGlzLnNjcmVlbldpZHRoKTtcbiAgICAgICAgaWYoc2NyZWVuV2lkdGggPCA4MDApICh0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lKFwiZ2FtZU5hbWVcIikgYXMgTGF5YS5MYWJlbCkuZm9udFNpemUgPSAxMjU7XG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuU3ByaXRlKS54ID0gKHNjcmVlbldpZHRoLSA2NjcpLzI7ICAgICAgXG4gICAgfVxufSIsImltcG9ydCBXb3JsZEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9Xb3JsZEV2ZW50TWFuYWdlclwiO1xuaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vLi4vdWkvbGF5YU1heFVJXCI7XG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvVUlNYW5hZ2VyXCI7XG5pbXBvcnQgUGVvcGxlTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9QZW9wbGVNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcbmltcG9ydCBNc2dEaWFsb2cgZnJvbSBcIi4uLy4uL0NvcmUvTXNnRGlhbG9nXCI7XG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcblxuLyoqXG4gKiDkuJbnlYznrqHnkIblmajohJrmnKxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdvcmxkIGV4dGVuZHMgdWkuR2FtZVdvcmxkVUl7XG4gICAgLyoqRGF0YU1hbmFnZXIgIOWNleS+iyAqL1xuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xuICAgIHByaXZhdGUgd29ybGRFdmVudE1hbmFnZXIgOiBXb3JsZEV2ZW50TWFuYWdlcjtcbiAgICAvKirkurrnsbvnrqHnkIblmagqL1xuICAgIHByaXZhdGUgcGVvcGxlTWFuYWdlciA6IFBlb3BsZU1hbmFnZXI7XG4gICAgLyoqVUnnrqHnkIblmaggKi9cbiAgICBwcml2YXRlIHVpTWFuYWdlciA6IFVJTWFuYWdlcjtcbiAgICAvKirmtojmga/pgJrnlKjmoYYgKi9cbiAgICBwcml2YXRlIG1zZ0RpYWxvZyA6IE1zZ0RpYWxvZztcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKuWxj+W5leWuveW6piAqL1xuICAgIHByaXZhdGUgc2NyZWVuV2lkdGggOiBudW1iZXI7XG4gICAgLyoq6byg5qCH5piv5ZCm5oyJ5LiLICovXG4gICAgcHJpdmF0ZSBpc0Rvd24gOiBib29sZWFuO1xuICAgIC8qKum8oOagh+eCueiusOW9lSAqL1xuICAgIHByaXZhdGUgbW91c2VQb3MgOiBhbnk7XG5cblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5nYW1lRGF0YUluaXQoKTsvL+a4uOaIj+WPmOmHj+WIneWni+WMllxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7Ly/nu5nmoaXmt7vliqDkuovku7YgXG4gICAgICAgIHRoaXMuc2NyZWVuU2V0dGluZygpOy8v5bGP5bmV5bGF5LitXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0KCk7Ly/muLjmiI/mtYHnqIvlvIDlp4tcbiAgICB9XG5cbiAgICAvKirmlbDmja7liJ3lp4vljJYgKi9cbiAgICBwcml2YXRlIGdhbWVEYXRhSW5pdCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy53b3JsZEV2ZW50TWFuYWdlciA9IG5ldyBXb3JsZEV2ZW50TWFuYWdlcigpO1xuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIgPSBuZXcgUGVvcGxlTWFuYWdlcih0aGlzLnNwX3NjZW5lKTtcbiAgICAgICAgdGhpcy51aU1hbmFnZXIgPSBuZXcgVUlNYW5hZ2VyKHRoaXMuc3BfVUkpO1xuICAgICAgICB0aGlzLm1zZ0RpYWxvZyA9IG5ldyBNc2dEaWFsb2coKTsgICAgICBcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IHt9O1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKua3u+WKoOS6i+S7tiAqL1xuICAgIHByaXZhdGUgYWRkRXZlbnQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLHRoaXMsdGhpcy5tb3VzZURvd24pO1xuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfVVAsdGhpcyx0aGlzLm1vdXNlVXApO1xuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfTU9WRSx0aGlzLHRoaXMubW91c2VNb3ZlKTtcbiAgICAgICAgLy/nu5npl6jluK7ngrnngrnlh7vkuosgICBcbiAgICAgICAgdGhpcy5zcF9kb29yLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmRvb3JDdHIpO1xuICAgICAgICAvL+WMu+mmhuS6i+S7tue7keWumlxuICAgICAgICB0aGlzLmhvc3BpdGFsLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkhPU1BJVEFMXSk7XG4gICAgICAgIC8v5Yab6Zif5LqL5Lu257uR5a6aXG4gICAgICAgIHRoaXMuYXJteS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5BUk1ZXSk7XG4gICAgICAgIC8v57Ku5LuT5LqL5Lu257uR5a6aXG4gICAgICAgIHRoaXMuZmFybS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5GQVJNXSk7ICAgICAgICBcbiAgICAgICAgLy/np5HmioDppobkuovku7bnu5HlrppcbiAgICAgICAgdGhpcy50ZWNobm9sb2d5Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLlRFQ0hOT0xPR1ldKTsgICAgICAgIFxuICAgICAgICAvL+aWsOmXu+eCueS6i+S7tue7keWumlxuICAgICAgICAvL3RoaXMuZXZlbnRIb3VzZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5FVkVOVF9IT1VTRV0pOyAgICAgXG4gICAgICAgIC8v5paw6Ze755qH5a6r57uR5a6aXG4gICAgICAgIHRoaXMucGFsYWNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLlBBTEFDRV0pOyAgICAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5bGP5bmVIOWxgOS4rSovXG4gICAgcHJpdmF0ZSBzY3JlZW5TZXR0aW5nKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aWR0aFwiICsgdGhpcy5zY3JlZW5XaWR0aCk7XG4gICAgICAgIHRoaXMuc3Bfc2NlbmUueCA9IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKS8yO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+S6i+S7tuWbnuiwg1xuXG4gICAgLyoq6Zeo55qE5byA5YWzICovXG4gICAgcHJpdmF0ZSBkb29yQ3RyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4pXG4gICAgICAgIHsvL+W8gOmXqFxuICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRvb3JDbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgey8v5YWz6ZeoXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kb29yT3BlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5YWz6ZeoICovXG4gICAgcHJpdmF0ZSBkb29yQ2xvc2UoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG5cbiAgICAvKirlvIDpl6ggKi9cbiAgICBwcml2YXRlIGRvb3JPcGVuKCkgOiB2b2lkXG4gICAge1xuXG4gICAgfVxuXG4gICAgLyoq56e75YqoICovXG4gICAgcHJpdmF0ZSBtb3VzZU1vdmUoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKCF0aGlzLmlzRG93bikgcmV0dXJuO1xuICAgICAgICBpZih0aGlzLm1vdXNlUG9zLngpXG4gICAgICAgIHtcbiAgICAgICAgICAgdGhpcy5zcF9zY2VuZS54ICs9IExheWEuc3RhZ2UubW91c2VYIC0gdGhpcy5tb3VzZVBvcy54OyBcbiAgICAgICAgLy8gICAgdGhpcy5zcF9zY2VuZS55ICs9IExheWEuc3RhZ2UubW91c2VZIC0gdGhpcy5tb3VzZVBvcy54O1xuICAgICAgICAgICAgaWYodGhpcy5zcF9zY2VuZS54ID4gMCkgIHRoaXMuc3Bfc2NlbmUueCA9IDA7XG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPCAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCkpIHRoaXMuc3Bfc2NlbmUueCA9ICAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3VzZVBvcy54ID0gTGF5YS5zdGFnZS5tb3VzZVg7XG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IExheWEuc3RhZ2UubW91c2VZO1xuICAgIH1cblxuICAgIC8qKuaLluWKqOaMieS4iyAqL1xuICAgIHByaXZhdGUgbW91c2VEb3duKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoq5ouW5Yqo5oqs6LW3ICovXG4gICAgcHJpdmF0ZSBtb3VzZVVwKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5tb3VzZVBvcy54ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1vdXNlUG9zLnkgPSB1bmRlZmluZWQ7ICAgICAgIFxuICAgIH1cblxuXG4gICAgLyoq54K55Ye7IOiOt+WPluW7uuetkeS/oeaBryAqL1xuICAgIHByaXZhdGUgb25Ib3VzZUluZm8odHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLm1zZ0RpYWxvZy5zaG93TXNnKHR5cGUpO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vL+a4uOaIj+a1geeoi+W8gOWniy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLyoq5ri45oiP5rWB56iL5byA5aeLICovXG4gICAgcHJpdmF0ZSBnYW1lU3RhcnQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMucGVvcGxlTWFuYWdlci5jcmVhdGVQZW9wbGUoKTsvL+S6uuWPo+eUn+aIkOmAu+i+kei/kOihjFxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5HYW1lIGV4dGVuZHMgTGF5YS5TY3JpcHR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIDogdm9pZFxuICAgIHtcblxuICAgIH1cbiAgICBcblxuICAgIG9uQ2xpY2soKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEuU2NlbmUub3BlbihcIkdhbWVXb3JsZC5zY2VuZVwiKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlblN0b3J5IGV4dGVuZHMgTGF5YS5TY3JpcHR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIDogdm9pZFxuICAgIHtcblxuICAgIH1cbiAgICBcblxuICAgIG9uQ2xpY2soKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEuU2NlbmUub3BlbihcIkdhbWVTdG9yeS5zY2VuZVwiKTtcbiAgICB9XG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xuaW1wb3J0IFNjZW5lPUxheWEuU2NlbmU7XG5leHBvcnQgbW9kdWxlIHVpLkRpYWxvZyB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ3VycmVudERpYWxvZ1VJIGV4dGVuZHMgU2NlbmUge1xyXG5cdFx0cHVibGljIG1zZ0JvZHk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9QZXJzb246TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9Nc2c6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkRpYWxvZy9DdXJyZW50RGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgbW9kdWxlIHVpIHtcclxuICAgIGV4cG9ydCBjbGFzcyBHYW1lV29ybGRVSSBleHRlbmRzIFNjZW5lIHtcclxuXHRcdHB1YmxpYyBzcF9zY2VuZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfZ3JvdW5kOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9yaXZlcjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3Bfd2FsbDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfZG9vcjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEwOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHBhbGFjZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG9zcGl0YWw6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE2OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGVjaG5vbG9neTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBmYXJtOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGFybXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX1VJOkxheWEuU3ByaXRlO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiR2FtZVdvcmxkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyIl19
