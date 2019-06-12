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
        this.maxCount = 10;
        /**当前外城人口数 */
        this.outCount = 0;
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
        this.msgBody.x = -1200;
        Laya.Tween.to(this.msgBody, { x: (900 / (Laya.Browser.clientHeight / Laya.Browser.clientWidth) - 1163) / 2 }, 200, Laya.Ease.backOut);
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
        Laya.Tween.to(this.msgBody, { x: -1200 }, 200, Laya.Ease.backOut, Laya.Handler.create(this, this.closeOver));
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
        //people.setPos(this.X,this.Y);
        people.setPos(900, 300);
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
        this.dirX = Math.random() * 2 - 1;
        this.dirY = Math.random() * 2 - 1;
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
            this.dirX = Math.random() * 2 - 1;
            this.dirY = -Math.random();
        }
        //城门区域检测
        if (this.sp.x > 932 && this.sp.x < 1068 && this.sp.y > 350 && this.sp.y < 390) {
            this.destoryPeople();
            Laya.Pool.recover(this.type, this);
            DataManager_1.OutCountryData.ins_.outCount--;
            //国家人口+1
            DataManager_1.default.ins_.population++;
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
        if (this.isOpen) { //开门
            this.isOpen = false;
            this.doorClose();
        }
        else { //关门
            this.isOpen = true;
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
},{"../../Config/GameConfig":1,"../../Core/MsgDialog":3,"../../Core/PeopleManager":4,"../../Core/UIManager":5,"../../Core/WorldEventManager":6,"../../ui/layaMaxUI":16}],14:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXIyLjAvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vbi50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyLnRzIiwic3JjL1NjcmlwdC9DZW50ZXIudHMiLCJzcmMvU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHMiLCJzcmMvU2NyaXB0L09wZW5HYW1lLnRzIiwic3JjL1NjcmlwdC9PcGVuU3RvcnkudHMiLCJzcmMvdWkvbGF5YU1heFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1ZBO0lBQUE7SUEwQkEsQ0FBQztJQXpCRyxjQUFjO0lBQ0EscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MsbUJBQVEsR0FBWSxNQUFNLENBQUM7SUFDekMsY0FBYztJQUNBLHdCQUFhLEdBQVksV0FBVyxDQUFDO0lBR25ELHNDQUFzQztJQUN0QyxRQUFRO0lBQ00sbUJBQVEsR0FBWSxDQUFDLENBQUM7SUFDcEMsUUFBUTtJQUNNLGVBQUksR0FBWSxDQUFDLENBQUM7SUFDaEMsUUFBUTtJQUNNLGVBQUksR0FBVyxDQUFDLENBQUM7SUFDL0IsUUFBUTtJQUNNLHFCQUFVLEdBQVcsQ0FBQyxDQUFDO0lBQ3JDLGFBQWE7SUFDQyxzQkFBVyxHQUFXLENBQUMsQ0FBQztJQUN0QyxRQUFRO0lBQ00saUJBQU0sR0FBVyxDQUFDLENBQUM7SUFDckMsaUJBQUM7Q0ExQkQsQUEwQkMsSUFBQTtrQkExQm9CLFVBQVU7Ozs7QUNBL0I7O0dBRUc7QUFDSDtJQXVESTtRQWhEQSxVQUFVO1FBQ0gsZUFBVSxHQUFVLEdBQUcsQ0FBQztRQTBDL0IsMkJBQTJCO1FBQzNCLDBDQUEwQztRQUMxQyxVQUFVO1FBQ0gsWUFBTyxHQUFRLENBQUMsQ0FBQztJQUl4QixDQUFDO0lBRUQsOEJBQVEsR0FBUjtJQUVBLENBQUM7SUFFRDs7O09BR0c7SUFDSSxvQ0FBYyxHQUFyQjtRQUVJLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7O09BR0c7SUFDSSwyQ0FBcUIsR0FBNUIsVUFBNkIsSUFBVztRQUVwQyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBL0VhLGdCQUFJLEdBQWlCLElBQUksV0FBVyxFQUFFLENBQUM7SUFzRnpELGtCQUFDO0NBdkZELEFBdUZDLElBQUE7a0JBdkZvQixXQUFXO0FBeUZoQyxRQUFRO0FBQ1I7SUFBQTtRQUVJLHVDQUF1QztRQUN2QyxjQUFjO1FBQ1AsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUM1QixhQUFhO1FBQ04sYUFBUSxHQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBTmlCLG1CQUFJLEdBQW9CLElBQUksY0FBYyxFQUFFLENBQUM7SUFNL0QscUJBQUM7Q0FQRCxBQU9DLElBQUE7QUFQWSx3Q0FBYzs7OztBQzdGM0IsNkNBQXFDO0FBRXJDOztHQUVHO0FBQ0g7SUFBdUMsNkJBQXlCO0lBRzVELFFBQVE7SUFDUixrQ0FBa0M7SUFFbEM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFGRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUMxQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7SUFDekIsQ0FBQztJQUVELFNBQVM7SUFDRiwyQkFBTyxHQUFkLFVBQWUsSUFBVztRQUV0QixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLEdBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTVILENBQUM7SUFFRCxRQUFRO0lBQ0EsNkJBQVMsR0FBakI7UUFFSSxRQUFPLElBQUksQ0FBQyxJQUFJLEVBQ2hCO1NBRUM7SUFDTCxDQUFDO0lBRUQsU0FBUztJQUNELCtCQUFXLEdBQW5CO0lBR0EsQ0FBQztJQUVELFVBQVU7SUFDRiw4QkFBVSxHQUFsQjtJQUdBLENBQUM7SUFFRCxRQUFRO0lBQ0QsK0JBQVcsR0FBbEI7UUFFSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFTyw2QkFBUyxHQUFqQjtRQUVJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDTCxnQkFBQztBQUFELENBMURBLEFBMERDLENBMURzQyxjQUFFLENBQUMsTUFBTSxDQUFDLGVBQWUsR0EwRC9EOzs7OztBQzlERCxtREFBOEM7QUFDOUMsNkNBQTREO0FBQzVELHVEQUFnRDtBQUNoRCx1REFBZ0Q7QUFDaEQ7O0dBRUc7QUFDSDtJQU9JLHVCQUFZLElBQUk7UUFFWixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxZQUFZO0lBQ0wseUNBQWlCLEdBQXhCO1FBRUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxTQUFTO0lBQ0Ysb0NBQVksR0FBbkI7UUFFSSxJQUFJLE1BQU0sQ0FBQztRQUNYLGVBQWU7UUFDZixJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxLQUFLO1FBQ0wsSUFBRyxNQUFNLElBQUUsQ0FBQyxJQUFFLE1BQU0sR0FBQyxFQUFFLEVBQ3ZCO1lBQ0ksTUFBTSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUcsQ0FBQyxNQUFNLEVBQ1Y7Z0JBQ0ksTUFBTSxHQUFFLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLG9CQUFVLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVEO1NBQ0o7UUFDRCxJQUFJO2FBQ0MsSUFBRyxNQUFNLElBQUUsRUFBRSxJQUFFLE1BQU0sR0FBQyxFQUFFLEVBQzdCO1lBQ0ksTUFBTSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUcsQ0FBQyxNQUFNLEVBQ1Y7Z0JBQ0ksTUFBTSxHQUFFLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLG9CQUFVLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVEO1NBQ0o7UUFDRCxJQUFJO2FBQ0MsSUFBRyxNQUFNLElBQUUsRUFBRSxJQUFFLE1BQU0sR0FBQyxFQUFFLEVBQzdCO1lBQ0ksTUFBTSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUcsQ0FBQyxNQUFNLEVBQ1Y7Z0JBQ0ksTUFBTSxHQUFFLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLG9CQUFVLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVEO1NBQ0o7UUFDRCxLQUFLO2FBQ0EsSUFBRyxNQUFNLElBQUUsRUFBRSxJQUFFLE1BQU0sR0FBQyxFQUFFLEVBQzdCO1lBQ0ksTUFBTSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFD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LENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQXREQSxBQXNEQyxDQXREZ0MsS0FBSyxHQXNEckM7SUF0RFksY0FBVyxjQXNEdkIsQ0FBQTtBQUNMLENBQUMsRUF4RGEsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBd0RmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWcge1xuICAgIC8qKuS6uuenjSAtIOaZrumAmuS6uiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQ09NTU9OX01BTiA6IHN0cmluZyA9IFwiY29tbW9uXCI7XG4gICAgLyoq5Lq656eNIC0g5bCP5YG3ICovXG4gICAgcHVibGljIHN0YXRpYyBST0JCRVJfTUFOIDogc3RyaW5nID0gXCJyb2JiZXJcIjtcbiAgICAvKirkurrnp40gLSDlnJ/ljKogKi9cbiAgICBwdWJsaWMgc3RhdGljIEJBTkRJVF9NQU4gOiBzdHJpbmcgPSBcImJhbmRpdFwiO1xuICAgIC8qKuS6uuenjSAtIOaYjuaYnyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU1RBUl9NQU4gOiBzdHJpbmcgPSBcInN0YXJcIjtcbiAgICAvKirkurrnp40gLSDnp5HlrablrrYgKi9cbiAgICBwdWJsaWMgc3RhdGljIFNDSUVOVElTVF9NQU4gOiBzdHJpbmcgPSBcInNjaWVudGlzdFwiO1xuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lu7rnrZFcbiAgICAvKirljLvpmaIgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhPU1BJVEFMIDogbnVtYmVyID0gMTtcbiAgICAvKirlhpvpmJ8gKi9cbiAgICBwdWJsaWMgc3RhdGljIEFSTVkgOiBudW1iZXIgPSAyO1xuICAgIC8qKuWGnOWcuiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgRkFSTTogbnVtYmVyID0gMztcbiAgICAvKirnp5HmioAgKi9cbiAgICBwdWJsaWMgc3RhdGljIFRFQ0hOT0xPR1k6IG51bWJlciA9IDQ7XG4gICAgLyoq5LqL5Lu25oi/IOaWsOmXu+aIvyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRfSE9VU0U6IG51bWJlciA9IDU7XG4gICAgLyoq55qH5a6rICovXG4gICAgcHVibGljIHN0YXRpYyBQQUxBQ0U6IG51bWJlciA9IDY7XG59IiwiLyoqXG4gKiDmlbDmja7kuK3lv4Mg5omA5pyJ55qE5pWw5o2uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlEYXRhe1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zXyA6IENvdW50cnlEYXRhID0gbmV3IENvdW50cnlEYXRhKCk7XG4gICAgLyoqKioqKioqKioqKioq5Li75pWw5o2uKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoq5Zu95a626LSi5pS/ICovXG4gICAgcHVibGljIGdvbGQgOiBudW1iZXI7XG4gICAgLyoq5Zu95a625bm456aP5bqmICovXG4gICAgcHVibGljIHBvcHVsYXJTdXBwb3J0IDogbnVtYmVyO1xuICAgIC8qKuWbveWutuS6uuWPoyAqL1xuICAgIHB1YmxpYyBwb3B1bGF0aW9uIDogbnVtYmVyPTEwMDtcbiAgICAvKirlm73lrrbnp5HmioAgKi9cbiAgICBwdWJsaWMgdGVjaG5vbG9neSA6IG51bWJlcjtcbiAgICAvKirlm73lrrblo7DmnJsgKi9cbiAgICBwdWJsaWMgcHJlc3RpZ2UgOiBudW1iZXI7XG5cbiAgICAvKioqKioqKioqKioqKioq5Ymv5pWw5o2uKioqKioqKioqKioqKioqKiovXG4gICAgLy8tLS0tLS0tLeaZrumAmuaVsOaNrlxuICAgIC8qKueyrumjn+S6p+mHjyAqL1xuICAgIHB1YmxpYyBncmFpbllpZWxkIDogbnVtYmVyO1xuICAgIC8qKueyrumjn+a2iOiAlyAqL1xuICAgIHB1YmxpYyBncmFpbkNvbnN1bXB0aW9uIDogbnVtYmVyO1xuXG4gICAgLy8tLS0tLS0tLeS6i+S7tuaVsOaNrlxuICAgIC8qKueYn+eWqyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8qL1xuICAgIHB1YmxpYyBwZXN0IDogbnVtYmVyO1xuICAgIC8qKuWcsOmchyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8gKi9cbiAgICBwdWJsaWMgbmF0dXJhbERpc2FzdGVyIDogbnVtYmVyO1xuICAgIC8qKuaImOS5sSAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8qL1xuICAgIHB1YmxpYyB3YXIgOiBudW1iZXI7XG5cbiAgICAvLy0tLS0tLS0t6IGM5Lia5Lq65pWwXG4gICAgLyoq5pmu6YCa5Lq6IEEgIOaZrumAmuS6uuS4reS8muS6p+eUn+WMu+eUnyDorablr58g562J5q2j5bi46IGM5LiaKi9cbiAgICBwdWJsaWMgY29tbW9uTWFuIDogbnVtYmVyO1xuICAgIC8qKuenkeWtpuWutiBTU1MqL1xuICAgIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXI7XG4gICAgLyoq5piO5pifIFNTKi9cbiAgICBwdWJsaWMgc3RhciA6IG51bWJlcjtcbiAgICAvKirlnJ/ljKogLVMgKi9cbiAgICBwdWJsaWMgYmFuZGl0IDogbnVtYmVyO1xuICAgIC8qKuebl+i0vCAtQSAqL1xuICAgIHB1YmxpYyByb2JiZXIgOiBudW1iZXI7XG4gICAgXG4gICAgLy8tLS0tLS0tLeWfjumXqFxuICAgIC8qKumXqOaYr+WQpuaJk+W8gCovXG4gICAgcHVibGljIGlzRG9vck9wZW4gOiBib29sZWFuO1xuICAgIC8qKuS6uuWPo+i/m+WFpemHjyAqL1xuICAgIHB1YmxpYyBlbnRlclBlb3BsZSA6IG51bWJlcjtcbiAgICAvKirkurrlj6PmtYHlh7rph48gKi9cbiAgICBwdWJsaWMgb3V0ZXJQZW9wbGUgOiBudW1iZXI7XG4gICAgLyoq562b5p+l6IO95YqbIOWQr+WKqOeJueauiumXqOeahOaXtuWAmSAg562b5p+l6IO95Yqb55Sf5pWIKi9cbiAgICBwdWJsaWMgcHJlcGFyYXRpb24gOiBudW1iZXI7XG4gICAgLyoq54m55q6K6ZeoIOetm+afpSAxLemYsuatoui/m+WFpSAgIDIt6YKA6K+36L+b5YWlKi9cbiAgICAvLyBwdWJsaWMga2VlcFNlbGVjdCA6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICAvKirmtYHliqjmr5TkvosgKi9cbiAgICBwdWJsaWMgcGVyY2VudDpudW1iZXI9MTtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpe1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5Lq65Y+j5rWB6YePIDpcbiAgICAgKiByZXR1cm4g6L+b5YWlIC8g5Ye65Y67XG4gICAgICovXG4gICAgcHVibGljIGdldF9QZW9wbGVNb3ZlKCkgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudGVyUGVvcGxlL3RoaXMub3V0ZXJQZW9wbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5Lq656eN5q+U5L6LXG4gICAgICogQHBhcmFtIHR5cGUg5Lq656eNXG4gICAgICovXG4gICAgcHVibGljIGdldF9Qcm9mZXNzaW9uUGVyY2VudCh0eXBlOnN0cmluZykgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGlmKHRoaXNbdHlwZV0gPT09IHVuZGVmaW5lZCkgY29uc29sZS5sb2coXCLkuI3lrZjlnKjor6Xkurrnp41cIik7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXNbdHlwZV0vKHRoaXMuY29tbW9uTWFuICsgdGhpcy5zY2llbnRpc3QgKyB0aGlzLnN0YXIgKyB0aGlzLmJhbmRpdCArIHRoaXMucm9iYmVyKTtcbiAgICB9XG5cbiAgICAvKirmlbDmja7nu5PnrpcgIOe7vOWQiOiuoeeul+aJgOacieeahOaVsOWAvCovXG4gICAgLy8gcHJpdmF0ZSBcblxuXG5cbn1cblxuLyoq5aSW5Z+OICovXG5leHBvcnQgY2xhc3MgT3V0Q291bnRyeURhdGF7XG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogT3V0Q291bnRyeURhdGEgPSBuZXcgT3V0Q291bnRyeURhdGEoKTtcbiAgICAvKioqKioqKioqKioqKirkuLvmlbDmja4qKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKirmnIDlpKflpJbln47lrrnnurPmlbDph48gKi9cbiAgICBwdWJsaWMgbWF4Q291bnQgOiBudW1iZXI9MTA7XG4gICAgLyoq5b2T5YmN5aSW5Z+O5Lq65Y+j5pWwICovXG4gICAgcHVibGljIG91dENvdW50Om51bWJlcj0wO1xufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xuXG4vKipcbiAqIOa2iOaBr+ahhiDpgJrnlKhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXNnRGlhbG9nIGV4dGVuZHMgdWkuRGlhbG9nLkN1cnJlbnREaWFsb2dVSXtcbiAgICAvKirnsbvlnosgKi9cbiAgICBwcml2YXRlIHR5cGUgOiBudW1iZXIgO1xuICAgIC8qKue8k+WKqCAqL1xuICAgIC8vIHByaXZhdGUgc2hvd1R3ZWVuIDogTGF5YS5Ud2VlbjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKuWIneWni+WMliAqL1xuICAgIHB1YmxpYyBzaG93TXNnKHR5cGU6bnVtYmVyKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlRGlhbG9nKTsgICAgICAgIFxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNoYW5nZUltZygpO1xuICAgICAgICB0aGlzLmNoYW5nZVRpdGxlKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlV29yZCgpOyBcbiAgICAgICAgdGhpcy5tc2dCb2R5LnggPSAtMTIwMDsgICAgICAgXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5tc2dCb2R5LHt4Oig5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKS0xMTYzKS8yfSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirmjaLlm74gKi9cbiAgICBwcml2YXRlIGNoYW5nZUltZygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSlcbiAgICAgICAge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirmjaLmoIfpopggKi9cbiAgICBwcml2YXRlIGNoYW5nZVRpdGxlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirmloflrZfovb3lhaUgKi9cbiAgICBwcml2YXRlIGNoYW5nZVdvcmQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuWFs+mXrSAqL1xuICAgIHB1YmxpYyBjbG9zZURpYWxvZygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5idG5fY2xvc2Uub2ZmKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlRGlhbG9nKTsgICAgICAgICAgICAgICAgXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5tc2dCb2R5LHt4Oi0xMjAwfSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQsTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLHRoaXMuY2xvc2VPdmVyKSk7ICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3NlT3ZlcigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7ICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVyZmViL1Blb3BsZVwiO1xuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgQ291bnRyeURhdGEsIHsgT3V0Q291bnRyeURhdGEgfSBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IENvbW1vbiBmcm9tXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvQ29tbW9uXCJcbmltcG9ydCBSb2JiZXIgZnJvbVwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL1JvYmJlclwiXG4vKipcbiAqIOS6uiDnrqHnkIZcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlTWFuYWdlciB7XG4gICAgLyoq6KeG5Zu+Ki9cbiAgICBwcml2YXRlIHZpZXc6YW55OyBcbiAgICAvKirmqKrlnZDmoIcgKi9cbiAgICBwcml2YXRlIFg6bnVtYmVyO1xuICAgIC8qKue6teWdkOaghyAqL1xuICAgIHByaXZhdGUgWTpudW1iZXI7XG4gICAgY29uc3RydWN0b3IodmlldylcbiAgICB7XG4gICAgICAgIHRoaXMudmlldz12aWV3O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW8gOWQr+eUn+aIkOW3peWOglxuICAgICAqIOeUn+aIkOS6uiBcbiAgICAgKiDnlJ/miJDkurrnmoTkvY3nva5cbiAgICAgKiDnlJ/kuqfkurrnmoR0eXBlIO+8miDln47ph4zkurov5Z+O5aSW5Lq6IOmAu+i+keWIhuW8gFxuICAgICAqL1xuICAgIC8qKuW8gOWQr+eUn+aIkOW3peWOgiAqL1xuICAgIHB1YmxpYyBvcGVuUGVvcGxlRmFjdG9yeSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUoKTtcbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurogKi9cbiAgICBwdWJsaWMgY3JlYXRlUGVvcGxlKCk6dm9pZFxuICAgIHtcbiAgICAgICAgbGV0IHBlb3BsZTtcbiAgICAgICAgLyoq55Sf5oiQ5LiN5ZCM5Lq656eN55qE5Yeg546HICovXG4gICAgICAgIGxldCByYW5kb209TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMCk7XG4gICAgICAgIC8v5pmu6YCa5Lq6XG4gICAgICAgIGlmKHJhbmRvbT49MCYmcmFuZG9tPDgwKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwiY29tbW9uXCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBDb21tb24odGhpcy52aWV3LEdhbWVDb25maWcuQ09NTU9OX01BTix0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+Wwj+WBt1xuICAgICAgICBlbHNlIGlmKHJhbmRvbT49ODAmJnJhbmRvbTw5MClcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInJvYmJlclwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgUm9iYmVyKHRoaXMudmlldyxHYW1lQ29uZmlnLlJPQkJFUl9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/lnJ/ljKpcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PTkwJiZyYW5kb208OTYpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJiYW5kaXRcIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFJvYmJlcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5CQU5ESVRfTUFOLHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v56eR5a2m5a62XG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj05NiYmcmFuZG9tPDk5KVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwic2NpZW50aXN0XCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuU0NJRU5USVNUX01BTix0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+aYjuaYn1xuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJzdGFyXCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuU1RBUl9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGVvcGxlLnZpc2libGU9dHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRQb3MoKTtcbiAgICAgICAgLy9wZW9wbGUuc2V0UG9zKHRoaXMuWCx0aGlzLlkpO1xuICAgICAgICBwZW9wbGUuc2V0UG9zKDkwMCwzMDApO1xuICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpO1xuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjM7XG4gICAgICAgIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQ8T3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xuICAgICAgICB9XG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQrKztcbiAgICAgICAgY29uc29sZS5sb2coT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudClcbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurrnmoTkvY3nva4gKi9cbiAgICBwdWJsaWMgZ2V0UG9zKCk6YW55XG4gICAge1xuICAgICAgICBsZXQgdHlwZU51bT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMyk7XG4gICAgICAgIHN3aXRjaCh0eXBlTnVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy/lnKhB6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPTA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8v5ZyoQui+ueeVjFxuICAgICAgICAgICAgICAgIHRoaXMuWD1NYXRoLnJhbmRvbSgpKjIwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgLy/lnKhD6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPTIwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirnlYzpmZDmo4DmtYsgKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBcbiAgICBcbiAgICBwdWJsaWMgY2hlY2tQZXJjZW50KHBlb3BsZSx0eXBlOnN0cmluZyk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/mtYHliqjmr5Tkvovmo4DmtYtcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5wZXJjZW50PDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XG5cbi8qKlxuICogVUnnrqHnkIblmahcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2Vye1xuICAgIC8qKuaVsOaNrueuoeeQhuWZqCAqL1xuICAgIC8vIHB1YmxpYyBzdGF0aWMgZGF0YU1hbmFnZXIgOiBEYXRhTWFuYWdlcjtcbiAgICAvKipVSSBzcHJpdGUgKi9cbiAgICBwcml2YXRlIFVpU3ByaXRlIDogTGF5YS5TcHJpdGU7XG5cbiAgICAvKirovb3lhaXmlbDmja4gKi9cbiAgICBjb25zdHJ1Y3Rvcih1aTpMYXlhLlNwcml0ZSl7XG4gICAgICAgIHRoaXMuVWlTcHJpdGUgPSB1aTtcbiAgICB9XG4gICAgXG4gICAgXG59IiwiLyoqXG4gKiDkuovku7blj5HnlJ/nrqHnkIblmahcbiAqIFxuICogXG4gKiDnlJ/miJDkuovku7bjgIFcbiAqIOW9seWTjeS6uuWPo+a1geWKqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZEV2ZW50TWFuYWdlciB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICAvKirkuovku7bpooTmiqXliLAgKi9cbiAgICBcblxuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xuXG4gICAgXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBNc2dEaWFsb2cgZnJvbSBcIi4vQ29yZS9Nc2dEaWFsb2dcIlxuaW1wb3J0IE9wZW5HYW1lIGZyb20gXCIuL1NjcmlwdC9PcGVuR2FtZVwiXG5pbXBvcnQgR2FtZVdvcmxkIGZyb20gXCIuL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkXCJcbmltcG9ydCBPcGVuU3RvcnkgZnJvbSBcIi4vU2NyaXB0L09wZW5TdG9yeVwiXG5pbXBvcnQgQ2VudGVyIGZyb20gXCIuL1NjcmlwdC9DZW50ZXJcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9MTQ0MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTkwMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWRoZWlnaHRcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cIlN0YXJ0R2FtZS5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcbiAgICAgICAgcmVnKFwiQ29yZS9Nc2dEaWFsb2cudHNcIixNc2dEaWFsb2cpO1xuICAgICAgICByZWcoXCJTY3JpcHQvT3BlbkdhbWUudHNcIixPcGVuR2FtZSk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzXCIsR2FtZVdvcmxkKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5TdG9yeS50c1wiLE9wZW5TdG9yeSk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9DZW50ZXIudHNcIixDZW50ZXIpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcbmNsYXNzIE1haW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcblxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWU7XG5cblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XG5cdH1cblxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xuXHR9XG5cblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cblx0XHRHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XG5cdH1cbn1cbi8v5r+A5rS75ZCv5Yqo57G7XG5uZXcgTWFpbigpO1xuIiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgQ291bnRyeURhdGEsIHsgT3V0Q291bnRyeURhdGEgfSBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuXG4vKipcbiAqIFxuICog5Lq656eN54i257G7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZSB7XG4gICAgLyoq5Zy65pmvKi9cbiAgICBwcml2YXRlIHZpZXcgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirnsr7ngbUgKi9cbiAgICBwdWJsaWMgc3AgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirmqKrlnZDmoIfnp7vliqjpgJ/luqYgKi9cbiAgICBwcml2YXRlIGRpclg6bnVtYmVyO1xuICAgIC8qKue6teWdkOagh+enu+WKqOmAn+W6piAqL1xuICAgIHByaXZhdGUgZGlyWTpudW1iZXI7XG4gICAgLyoq5aKZ5YaF5Lq66L+Y5piv5aKZ5aSW5Lq6ICovXG4gICAgcHVibGljIGlzT3V0IDogYm9vbGVhbjtcbiAgICAvKirkurrlsZ7mgKcgKi9cbiAgICBwdWJsaWMgdHlwZTpzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5pc091dCA9IGlzT3V0O1xuICAgICAgICB0aGlzLnR5cGU9dHlwZTtcbiAgICAgICAgdGhpcy5pbml0KHR5cGUpO1xuICAgIH1cblxuICAgIC8qKuWIneWni+WMliAqL1xuICAgIHByaXZhdGUgaW5pdCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v5Yib5bu6XG4gICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKHR5cGUpO1xuICAgIH1cblxuICAgIC8qKuW8gOWni+ihjOWKqCAqL1xuICAgIHB1YmxpYyBvcGVuQmVoYXZpb3VyKCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/ov5DooYzkuobpgLvovpFcbiAgICAgICAgaWYodGhpcy5pc091dCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGVvcGxlX1Bvc091dCgpO1xuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMuY2hlY2tMaW1pdF9PdXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zSW5uZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uiAqL1xuICAgIHByaXZhdGUgY3JlYXRlUGVvcGxlKHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlU3AodHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5Yib5bu6U3ByaXRlICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTcCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBpbWdVcmwgPSBcIm1hcC9cIit0eXBlK1wiLnBuZ1wiO1xuICAgICAgICBpZighdGhpcy5zcClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zcCA9IG5ldyBMYXlhLlNwcml0ZSgpO1xuICAgICAgICAgICAgdGhpcy52aWV3LmFkZENoaWxkKHRoaXMuc3ApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3AubG9hZEltYWdlKGltZ1VybCk7XG4gICAgICAgIHRoaXMuc3AucGl2b3QodGhpcy5zcC53aWR0aC8yLHRoaXMuc3AuaGVpZ2h0LzIpOyAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq6K6+572u5Yid5aeL5L2N572uICovXG4gICAgcHVibGljIHNldFBvcyh4Om51bWJlcix5Om51bWJlcik6dm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcC54ID0geDtcbiAgICAgICAgdGhpcy5zcC55ID0geTtcbiAgICB9XG5cbiAgICAvKirlopnlpJbkurrooYzliqjpgLvovpEqL1xuICAgIHByaXZhdGUgcGVvcGxlX1Bvc091dCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy/nu5nkuojpmo/mnLrmlrnlkJHvvIzmlrnlkJHnlKgoLTF+MSnooajnpLpcbiAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCkqMi0xO1xuICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKSoyLTE7XG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze077yM5Zyo5q2k5pe26Ze05YaF56e75YqoLOmaj+acuuaXtumXtOWcqCgyLDgp5Lit6YCJ5oupXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNisyO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jbG9zZU1vdmVUaW1lcik7XG4gICAgICAgIC8v5byA5ZCv56e75YqoXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgfVxuICAgIFxuICAgIC8qKuWNleS9jeW4p+enu+WKqCovXG4gICAgcHJpdmF0ZSBtb3ZlRGlzdGFuY2UoKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNwLngrPXRoaXMuZGlyWDtcbiAgICAgICAgdGhpcy5zcC55Kz10aGlzLmRpclk7XG4gICAgfVxuXG4gICAgLyoq5YWz6Zet56e75Yqo5a6a5pe25Zmo77yM5byA5ZCv5Y6f5Zyw5LyR5oGvKi9cbiAgICBwcml2YXRlIGNsb3NlTW92ZVRpbWVyKCk6dm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcbiAgICAgICAgLy/kvJHmga/ml7bpl7Tnu5PmnZ/lkI7nu6fnu63np7vliqhcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo2KzI7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLnBlb3BsZV9Qb3NPdXQpO1xuICAgIH1cbiAgICBcbiAgICAvKirlopnlhoXkurrooYzliqjpgLvovpEqL1xuICAgIHByaXZhdGUgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXG4gICAge1xuXG4gICAgfVxuICAgIFxuXG4gICAgLyoq56Kw5pKe5qOA5rWLICovXG4gICAgcHJpdmF0ZSBjaGVja0xpbWl0X091dCgpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v6L6555WM5qOA5rWLXG4gICAgICAgIGlmKHRoaXMuc3AueDwtNXx8dGhpcy5zcC54PjIwMDV8fHRoaXMuc3AueTwtNSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7XG4gICAgICAgICAgICBMYXlhLlBvb2wucmVjb3Zlcih0aGlzLnR5cGUsdGhpcyk7XG4gICAgICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50LS07XG4gICAgICAgIH1cblxuICAgICAgICAvL+aKpOWfjuays+ajgOa1i1xuICAgICAgICBpZih0aGlzLnNwLnk+PTM5MClcbiAgICAgICAge1xuICAgICAgICAgICAgLy/ph43mlrDnu5nkuIDkuKrkvY3np7tcbiAgICAgICAgICAgICAgICAvL+e7meS6iOmaj+acuuaWueWQke+8jOaWueWQkeeUqCgtMX4xKeihqOekulxuICAgICAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpclk9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL+WfjumXqOWMuuWfn+ajgOa1i1xuICAgICAgICBpZih0aGlzLnNwLng+OTMyJiZ0aGlzLnNwLng8MTA2OCYmdGhpcy5zcC55PjM1MCYmdGhpcy5zcC55PDM5MClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7XG4gICAgICAgICAgICBMYXlhLlBvb2wucmVjb3Zlcih0aGlzLnR5cGUsdGhpcyk7XG4gICAgICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50LS07XG4gICAgICAgICAgICAvL+WbveWutuS6uuWPoysxXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXRpb24rKztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirkurrmtojlpLEgKi9cbiAgICBwcml2YXRlIGRlc3RvcnlQZW9wbGUoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xuICAgIH1cbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIGV4dGVuZHMgUGVvcGxle1xuXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XG4gICAgICAgIHN1cGVyKHZpZXcsdHlwZSxpc091dCk7XG4gICAgfVxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9iYmVyIGV4dGVuZHMgUGVvcGxle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xyXG4gICAgICAgIHN1cGVyKHZpZXcsdHlwZSxpc091dCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZW50ZXIgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aWR0aFwiICsgdGhpcy5zY3JlZW5XaWR0aCk7XG4gICAgICAgIGlmKHNjcmVlbldpZHRoIDwgODAwKSAodGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShcImdhbWVOYW1lXCIpIGFzIExheWEuTGFiZWwpLmZvbnRTaXplID0gMTI1O1xuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLlNwcml0ZSkueCA9IChzY3JlZW5XaWR0aC0gNjY3KS8yOyAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgV29ybGRFdmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvV29ybGRFdmVudE1hbmFnZXJcIjtcbmltcG9ydCB7IHVpIH0gZnJvbSBcIi4uLy4uL3VpL2xheWFNYXhVSVwiO1xuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1VJTWFuYWdlclwiO1xuaW1wb3J0IFBlb3BsZU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvUGVvcGxlTWFuYWdlclwiO1xuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uLy4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgTXNnRGlhbG9nIGZyb20gXCIuLi8uLi9Db3JlL01zZ0RpYWxvZ1wiO1xuXG4vKipcbiAqIOS4lueVjOeuoeeQhuWZqOiEmuacrFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV29ybGQgZXh0ZW5kcyB1aS5HYW1lV29ybGRVSXtcbiAgICAvKipEYXRhTWFuYWdlciAg5Y2V5L6LICovXG4gICAgLyoq5LqL5Lu25Y+R55Sf5ZmoICovXG4gICAgcHJpdmF0ZSB3b3JsZEV2ZW50TWFuYWdlciA6IFdvcmxkRXZlbnRNYW5hZ2VyO1xuICAgIC8qKuS6uuexu+euoeeQhuWZqCovXG4gICAgcHJpdmF0ZSBwZW9wbGVNYW5hZ2VyIDogUGVvcGxlTWFuYWdlcjtcbiAgICAvKipVSeeuoeeQhuWZqCAqL1xuICAgIHByaXZhdGUgdWlNYW5hZ2VyIDogVUlNYW5hZ2VyO1xuICAgIC8qKua2iOaBr+mAmueUqOahhiAqL1xuICAgIHByaXZhdGUgbXNnRGlhbG9nIDogTXNnRGlhbG9nO1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoq6Zeo5piv5ZCm5omT5byAICovXG4gICAgcHJpdmF0ZSBpc09wZW4gOiBib29sZWFuO1xuICAgIC8qKuWxj+W5leWuveW6piAqL1xuICAgIHByaXZhdGUgc2NyZWVuV2lkdGggOiBudW1iZXI7XG4gICAgLyoq6byg5qCH5piv5ZCm5oyJ5LiLICovXG4gICAgcHJpdmF0ZSBpc0Rvd24gOiBib29sZWFuO1xuICAgIC8qKum8oOagh+eCueiusOW9lSAqL1xuICAgIHByaXZhdGUgbW91c2VQb3MgOiBhbnk7XG5cblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5nYW1lRGF0YUluaXQoKTsvL+a4uOaIj+WPmOmHj+WIneWni+WMllxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7Ly/nu5nmoaXmt7vliqDkuovku7YgXG4gICAgICAgIHRoaXMuc2NyZWVuU2V0dGluZygpOy8v5bGP5bmV5bGF5LitXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0KCk7Ly/muLjmiI/mtYHnqIvlvIDlp4tcbiAgICB9XG5cbiAgICAvKirmlbDmja7liJ3lp4vljJYgKi9cbiAgICBwcml2YXRlIGdhbWVEYXRhSW5pdCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy53b3JsZEV2ZW50TWFuYWdlciA9IG5ldyBXb3JsZEV2ZW50TWFuYWdlcigpO1xuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIgPSBuZXcgUGVvcGxlTWFuYWdlcih0aGlzLnNwX3NjZW5lKTtcbiAgICAgICAgdGhpcy51aU1hbmFnZXIgPSBuZXcgVUlNYW5hZ2VyKHRoaXMuc3BfVUkpO1xuICAgICAgICB0aGlzLm1zZ0RpYWxvZyA9IG5ldyBNc2dEaWFsb2coKTsgICAgICBcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IHt9O1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKua3u+WKoOS6i+S7tiAqL1xuICAgIHByaXZhdGUgYWRkRXZlbnQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLHRoaXMsdGhpcy5tb3VzZURvd24pO1xuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfVVAsdGhpcyx0aGlzLm1vdXNlVXApO1xuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfTU9WRSx0aGlzLHRoaXMubW91c2VNb3ZlKTtcbiAgICAgICAgLy/nu5npl6jluK7ngrnngrnlh7vkuosgICBcbiAgICAgICAgdGhpcy5zcF9kb29yLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmRvb3JDdHIpO1xuICAgICAgICAvL+WMu+mmhuS6i+S7tue7keWumlxuICAgICAgICB0aGlzLmhvc3BpdGFsLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkhPU1BJVEFMXSk7XG4gICAgICAgIC8v5Yab6Zif5LqL5Lu257uR5a6aXG4gICAgICAgIHRoaXMuYXJteS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5BUk1ZXSk7XG4gICAgICAgIC8v57Ku5LuT5LqL5Lu257uR5a6aXG4gICAgICAgIHRoaXMuZmFybS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5GQVJNXSk7ICAgICAgICBcbiAgICAgICAgLy/np5HmioDppobkuovku7bnu5HlrppcbiAgICAgICAgdGhpcy50ZWNobm9sb2d5Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLlRFQ0hOT0xPR1ldKTsgICAgICAgIFxuICAgICAgICAvL+aWsOmXu+eCueS6i+S7tue7keWumlxuICAgICAgICAvL3RoaXMuZXZlbnRIb3VzZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5FVkVOVF9IT1VTRV0pOyAgICAgXG4gICAgICAgIC8v5paw6Ze755qH5a6r57uR5a6aXG4gICAgICAgIHRoaXMucGFsYWNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLlBBTEFDRV0pOyAgICAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5bGP5bmVIOWxgOS4rSovXG4gICAgcHJpdmF0ZSBzY3JlZW5TZXR0aW5nKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aWR0aFwiICsgdGhpcy5zY3JlZW5XaWR0aCk7XG4gICAgICAgIHRoaXMuc3Bfc2NlbmUueCA9IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKS8yO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+S6i+S7tuWbnuiwg1xuXG4gICAgLyoq6Zeo55qE5byA5YWzICovXG4gICAgcHJpdmF0ZSBkb29yQ3RyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZih0aGlzLmlzT3BlbilcbiAgICAgICAgey8v5byA6ZeoXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kb29yQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHsvL+WFs+mXqFxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kb29yT3BlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5YWz6ZeoICovXG4gICAgcHJpdmF0ZSBkb29yQ2xvc2UoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG5cbiAgICAvKirlvIDpl6ggKi9cbiAgICBwcml2YXRlIGRvb3JPcGVuKCkgOiB2b2lkXG4gICAge1xuXG4gICAgfVxuXG4gICAgLyoq56e75YqoICovXG4gICAgcHJpdmF0ZSBtb3VzZU1vdmUoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKCF0aGlzLmlzRG93bikgcmV0dXJuO1xuICAgICAgICBpZih0aGlzLm1vdXNlUG9zLngpXG4gICAgICAgIHtcbiAgICAgICAgICAgdGhpcy5zcF9zY2VuZS54ICs9IExheWEuc3RhZ2UubW91c2VYIC0gdGhpcy5tb3VzZVBvcy54OyBcbiAgICAgICAgLy8gICAgdGhpcy5zcF9zY2VuZS55ICs9IExheWEuc3RhZ2UubW91c2VZIC0gdGhpcy5tb3VzZVBvcy54O1xuICAgICAgICAgICAgaWYodGhpcy5zcF9zY2VuZS54ID4gMCkgIHRoaXMuc3Bfc2NlbmUueCA9IDA7XG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPCAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCkpIHRoaXMuc3Bfc2NlbmUueCA9ICAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3VzZVBvcy54ID0gTGF5YS5zdGFnZS5tb3VzZVg7XG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IExheWEuc3RhZ2UubW91c2VZO1xuICAgIH1cblxuICAgIC8qKuaLluWKqOaMieS4iyAqL1xuICAgIHByaXZhdGUgbW91c2VEb3duKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoq5ouW5Yqo5oqs6LW3ICovXG4gICAgcHJpdmF0ZSBtb3VzZVVwKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5tb3VzZVBvcy54ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1vdXNlUG9zLnkgPSB1bmRlZmluZWQ7ICAgICAgIFxuICAgIH1cblxuXG4gICAgLyoq54K55Ye7IOiOt+WPluW7uuetkeS/oeaBryAqL1xuICAgIHByaXZhdGUgb25Ib3VzZUluZm8odHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLm1zZ0RpYWxvZy5zaG93TXNnKHR5cGUpO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vL+a4uOaIj+a1geeoi+W8gOWniy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLyoq5ri45oiP5rWB56iL5byA5aeLICovXG4gICAgcHJpdmF0ZSBnYW1lU3RhcnQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMucGVvcGxlTWFuYWdlci5jcmVhdGVQZW9wbGUoKTsvL+S6uuWPo+eUn+aIkOmAu+i+kei/kOihjFxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5HYW1lIGV4dGVuZHMgTGF5YS5TY3JpcHR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIDogdm9pZFxuICAgIHtcblxuICAgIH1cbiAgICBcblxuICAgIG9uQ2xpY2soKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEuU2NlbmUub3BlbihcIkdhbWVXb3JsZC5zY2VuZVwiKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlblN0b3J5IGV4dGVuZHMgTGF5YS5TY3JpcHR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIDogdm9pZFxuICAgIHtcblxuICAgIH1cbiAgICBcblxuICAgIG9uQ2xpY2soKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEuU2NlbmUub3BlbihcIkdhbWVTdG9yeS5zY2VuZVwiKTtcbiAgICB9XG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xuaW1wb3J0IFNjZW5lPUxheWEuU2NlbmU7XG5leHBvcnQgbW9kdWxlIHVpLkRpYWxvZyB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ3VycmVudERpYWxvZ1VJIGV4dGVuZHMgU2NlbmUge1xyXG5cdFx0cHVibGljIG1zZ0JvZHk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9QZXJzb246TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9Nc2c6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkRpYWxvZy9DdXJyZW50RGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgbW9kdWxlIHVpIHtcclxuICAgIGV4cG9ydCBjbGFzcyBHYW1lV29ybGRVSSBleHRlbmRzIFNjZW5lIHtcclxuXHRcdHB1YmxpYyBzcF9zY2VuZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfZ3JvdW5kOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9yaXZlcjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3Bfd2FsbDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfZG9vcjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEwOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHBhbGFjZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG9zcGl0YWw6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE2OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGVjaG5vbG9neTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBmYXJtOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGFybXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX1VJOkxheWEuU3ByaXRlO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiR2FtZVdvcmxkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyIl19
