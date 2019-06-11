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
        if (random >= 0 && random < 85) {
            people = Laya.Pool.getItem("common");
            if (!people) {
                people = new Common_1.default(this.view, GameConfig_1.default.COMMON_MAN, true);
            }
        }
        //小偷
        else if (random >= 85 && random < 100) {
            people = Laya.Pool.getItem("robber");
            if (!people) {
                people = new Robber_1.default(this.view, GameConfig_1.default.ROBBER_MAN, true);
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
    };
    /**人消失 */
    People.prototype.destoryPeople = function () {
        this.sp.visible = false;
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
        this.eventHouse.on(Laya.Event.CLICK, this, this.onHouseInfo, [GameConfig_1.default.EVENT_HOUSE]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL+adgui0p+mTui9MYXlhQWlySURFX2JldGEvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vbi50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyLnRzIiwic3JjL1NjcmlwdC9DZW50ZXIudHMiLCJzcmMvU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHMiLCJzcmMvU2NyaXB0L09wZW5HYW1lLnRzIiwic3JjL1NjcmlwdC9PcGVuU3RvcnkudHMiLCJzcmMvdWkvbGF5YU1heFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1ZBO0lBQUE7SUFxQkEsQ0FBQztJQXBCRyxjQUFjO0lBQ0EscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBSTdDLHNDQUFzQztJQUN0QyxRQUFRO0lBQ00sbUJBQVEsR0FBWSxDQUFDLENBQUM7SUFDcEMsUUFBUTtJQUNNLGVBQUksR0FBWSxDQUFDLENBQUM7SUFDaEMsUUFBUTtJQUNNLGVBQUksR0FBVyxDQUFDLENBQUM7SUFDL0IsUUFBUTtJQUNNLHFCQUFVLEdBQVcsQ0FBQyxDQUFDO0lBQ3JDLGFBQWE7SUFDQyxzQkFBVyxHQUFXLENBQUMsQ0FB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Q29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWcge1xyXG4gICAgLyoq5Lq656eNIC0g5pmu6YCa5Lq6ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENPTU1PTl9NQU4gOiBzdHJpbmcgPSBcImNvbW1vblwiO1xyXG4gICAgLyoq5Lq656eNIC0g5bCP5YG3ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJPQkJFUl9NQU4gOiBzdHJpbmcgPSBcInJvYmJlclwiO1xyXG5cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5bu6562RXHJcbiAgICAvKirljLvpmaIgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgSE9TUElUQUwgOiBudW1iZXIgPSAxO1xyXG4gICAgLyoq5Yab6ZifICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEFSTVkgOiBudW1iZXIgPSAyO1xyXG4gICAgLyoq5Yac5Zy6ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZBUk06IG51bWJlciA9IDM7XHJcbiAgICAvKirnp5HmioAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVEVDSE5PTE9HWTogbnVtYmVyID0gNDtcclxuICAgIC8qKuS6i+S7tuaIvyDmlrDpl7vmiL8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRfSE9VU0U6IG51bWJlciA9IDU7XHJcbiAgICAvKirnmoflrqsgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUEFMQUNFOiBudW1iZXIgPSA2O1xyXG59IiwiLyoqXHJcbiAqIOaVsOaNruS4reW/gyDmiYDmnInnmoTmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlEYXRhe1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogQ291bnRyeURhdGEgPSBuZXcgQ291bnRyeURhdGEoKTtcclxuICAgIC8qKioqKioqKioqKioqKuS4u+aVsOaNrioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoq5Zu95a626LSi5pS/ICovXHJcbiAgICBwdWJsaWMgZ29sZCA6IG51bWJlcjtcclxuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xyXG4gICAgcHVibGljIHBvcHVsYXJTdXBwb3J0IDogbnVtYmVyO1xyXG4gICAgLyoq5Zu95a625Lq65Y+jICovXHJcbiAgICBwdWJsaWMgcG9wdWxhdGlvbiA6IG51bWJlcjtcclxuICAgIC8qKuWbveWutuenkeaKgCAqL1xyXG4gICAgcHVibGljIHRlY2hub2xvZ3kgOiBudW1iZXI7XHJcbiAgICAvKirlm73lrrblo7DmnJsgKi9cclxuICAgIHB1YmxpYyBwcmVzdGlnZSA6IG51bWJlcjtcclxuXHJcbiAgICAvKioqKioqKioqKioqKioq5Ymv5pWw5o2uKioqKioqKioqKioqKioqKiovXHJcbiAgICAvLy0tLS0tLS0t5pmu6YCa5pWw5o2uXHJcbiAgICAvKirnsq7po5/kuqfph48gKi9cclxuICAgIHB1YmxpYyBncmFpbllpZWxkIDogbnVtYmVyO1xyXG4gICAgLyoq57Ku6aOf5raI6ICXICovXHJcbiAgICBwdWJsaWMgZ3JhaW5Db25zdW1wdGlvbiA6IG51bWJlcjtcclxuXHJcbiAgICAvLy0tLS0tLS0t5LqL5Lu25pWw5o2uXHJcbiAgICAvKirnmJ/nlqsgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfKi9cclxuICAgIHB1YmxpYyBwZXN0IDogbnVtYmVyO1xyXG4gICAgLyoq5Zyw6ZyHICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyAqL1xyXG4gICAgcHVibGljIG5hdHVyYWxEaXNhc3RlciA6IG51bWJlcjtcclxuICAgIC8qKuaImOS5sSAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8qL1xyXG4gICAgcHVibGljIHdhciA6IG51bWJlcjtcclxuXHJcbiAgICAvLy0tLS0tLS0t6IGM5Lia5Lq65pWwXHJcbiAgICAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xyXG4gICAgcHVibGljIGNvbW1vbk1hbiA6IG51bWJlcjtcclxuICAgIC8qKuenkeWtpuWutiBTU1MqL1xyXG4gICAgcHVibGljIHNjaWVudGlzdCA6IG51bWJlcjtcclxuICAgIC8qKuaYjuaYnyBTUyovXHJcbiAgICBwdWJsaWMgc3RhciA6IG51bWJlcjtcclxuICAgIC8qKuWcn+WMqiAtUyAqL1xyXG4gICAgcHVibGljIGJhbmRpdCA6IG51bWJlcjtcclxuICAgIC8qKuebl+i0vCAtQSAqL1xyXG4gICAgcHVibGljIHJvYmJlciA6IG51bWJlcjtcclxuICAgIFxyXG4gICAgLy8tLS0tLS0tLeWfjumXqFxyXG4gICAgLyoq6Zeo5piv5ZCm5omT5byAKi9cclxuICAgIHB1YmxpYyBpc0Rvb3JPcGVuIDogYm9vbGVhbjtcclxuICAgIC8qKuS6uuWPo+i/m+WFpemHjyAqL1xyXG4gICAgcHVibGljIGVudGVyUGVvcGxlIDogbnVtYmVyO1xyXG4gICAgLyoq5Lq65Y+j5rWB5Ye66YePICovXHJcbiAgICBwdWJsaWMgb3V0ZXJQZW9wbGUgOiBudW1iZXI7XHJcbiAgICAvKirnrZvmn6Xog73lipsg5ZCv5Yqo54m55q6K6Zeo55qE5pe25YCZICDnrZvmn6Xog73lipvnlJ/mlYgqL1xyXG4gICAgcHVibGljIHByZXBhcmF0aW9uIDogbnVtYmVyO1xyXG4gICAgLyoq54m55q6K6ZeoIOetm+afpSAxLemYsuatoui/m+WFpSAgIDIt6YKA6K+36L+b5YWlKi9cclxuICAgIC8vIHB1YmxpYyBrZWVwU2VsZWN0IDogQXJyYXk8bnVtYmVyPiA9IFtdO1xyXG4gICAgLyoq5rWB5Yqo5q+U5L6LICovXHJcbiAgICBwdWJsaWMgcGVyY2VudDpudW1iZXI9MTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6uuWPo+a1gemHjyA6XHJcbiAgICAgKiByZXR1cm4g6L+b5YWlIC8g5Ye65Y67XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRfUGVvcGxlTW92ZSgpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50ZXJQZW9wbGUvdGhpcy5vdXRlclBlb3BsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6uuenjeavlOS+i1xyXG4gICAgICogQHBhcmFtIHR5cGUg5Lq656eNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRfUHJvZmVzc2lvblBlcmNlbnQodHlwZTpzdHJpbmcpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpc1t0eXBlXSA9PT0gdW5kZWZpbmVkKSBjb25zb2xlLmxvZyhcIuS4jeWtmOWcqOivpeS6uuenjVwiKTtcclxuICAgICAgICBlbHNlIHJldHVybiB0aGlzW3R5cGVdLyh0aGlzLmNvbW1vbk1hbiArIHRoaXMuc2NpZW50aXN0ICsgdGhpcy5zdGFyICsgdGhpcy5iYW5kaXQgKyB0aGlzLnJvYmJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pWw5o2u57uT566XICDnu7zlkIjorqHnrpfmiYDmnInnmoTmlbDlgLwqL1xyXG4gICAgLy8gcHJpdmF0ZSBcclxuXHJcblxyXG5cclxufVxyXG5cclxuLyoq5aSW5Z+OICovXHJcbmV4cG9ydCBjbGFzcyBPdXRDb3VudHJ5RGF0YXtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zXyA6IE91dENvdW50cnlEYXRhID0gbmV3IE91dENvdW50cnlEYXRhKCk7XHJcbiAgICAvKioqKioqKioqKioqKirkuLvmlbDmja4qKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKuacgOWkp+WkluWfjuWuuee6s+aVsOmHjyAqL1xyXG4gICAgcHVibGljIG1heENvdW50IDogbnVtYmVyPTEwO1xyXG4gICAgLyoq5b2T5YmN5aSW5Z+O5Lq65Y+j5pWwICovXHJcbiAgICBwdWJsaWMgb3V0Q291bnQ6bnVtYmVyPTA7XHJcbn0iLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuLi91aS9sYXlhTWF4VUlcIjtcclxuXHJcbi8qKlxyXG4gKiDmtojmga/moYYg6YCa55SoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNc2dEaWFsb2cgZXh0ZW5kcyB1aS5EaWFsb2cuQ3VycmVudERpYWxvZ1VJe1xyXG4gICAgLyoq57G75Z6LICovXHJcbiAgICBwcml2YXRlIHR5cGUgOiBudW1iZXIgO1xyXG4gICAgLyoq57yT5YqoICovXHJcbiAgICAvLyBwcml2YXRlIHNob3dUd2VlbiA6IExheWEuVHdlZW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yid5aeL5YyWICovXHJcbiAgICBwdWJsaWMgc2hvd01zZyh0eXBlOm51bWJlcikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idG5fY2xvc2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuY2xvc2VEaWFsb2cpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlSW1nKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VUaXRsZSgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlV29yZCgpOyBcclxuICAgICAgICB0aGlzLm1zZ0JvZHkueCA9ICg5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKS0xMTYzKS8yOyAgICAgICBcclxuICAgICAgICB0aGlzLm1zZ0JvZHkueSA9IC01NTc7ICAgICAgIFxyXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5tc2dCb2R5LHt5OjB9LDIwMCxMYXlhLkVhc2UuYmFja091dCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5o2i5Zu+ICovXHJcbiAgICBwcml2YXRlIGNoYW5nZUltZygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5o2i5qCH6aKYICovXHJcbiAgICBwcml2YXRlIGNoYW5nZVRpdGxlKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5paH5a2X6L295YWlICovXHJcbiAgICBwcml2YXRlIGNoYW5nZVdvcmQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirlhbPpl60gKi9cclxuICAgIHB1YmxpYyBjbG9zZURpYWxvZygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9mZihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZURpYWxvZyk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5tc2dCb2R5LHt5Oi01NTd9LDIwMCxMYXlhLkVhc2UuYmFja091dCxMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsdGhpcy5jbG9zZU92ZXIpKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VPdmVyKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7ICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1BlcmZlYi9QZW9wbGVcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBDb3VudHJ5RGF0YSwgeyBPdXRDb3VudHJ5RGF0YSB9IGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBDb21tb24gZnJvbVwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vblwiXHJcbmltcG9ydCBSb2JiZXIgZnJvbVwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL1JvYmJlclwiXHJcbi8qKlxyXG4gKiDkurog566h55CGXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVNYW5hZ2VyIHtcclxuICAgIC8qKuinhuWbviovXHJcbiAgICBwcml2YXRlIHZpZXc6YW55OyBcclxuICAgIC8qKuaoquWdkOaghyAqL1xyXG4gICAgcHJpdmF0ZSBYOm51bWJlcjtcclxuICAgIC8qKue6teWdkOaghyAqL1xyXG4gICAgcHJpdmF0ZSBZOm51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52aWV3PXZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlkK/nlJ/miJDlt6XljoJcclxuICAgICAqIOeUn+aIkOS6uiBcclxuICAgICAqIOeUn+aIkOS6uueahOS9jee9rlxyXG4gICAgICog55Sf5Lqn5Lq655qEdHlwZSDvvJog5Z+O6YeM5Lq6L+WfjuWkluS6uiDpgLvovpHliIblvIBcclxuICAgICAqL1xyXG4gICAgLyoq5byA5ZCv55Sf5oiQ5bel5Y6CICovXHJcbiAgICBwdWJsaWMgb3BlblBlb3BsZUZhY3RvcnkoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVBlb3BsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueUn+aIkOS6uiAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcGVvcGxlO1xyXG4gICAgICAgIC8qKueUn+aIkOS4jeWQjOS6uuenjeeahOWHoOeOhyAqL1xyXG4gICAgICAgIGxldCByYW5kb209TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMCk7XHJcbiAgICAgICAgLy/mma7pgJrkurpcclxuICAgICAgICBpZihyYW5kb20+PTAmJnJhbmRvbTw4NSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJjb21tb25cIik7XHJcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IENvbW1vbih0aGlzLnZpZXcsR2FtZUNvbmZpZy5DT01NT05fTUFOLHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5bCP5YG3XHJcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PTg1JiZyYW5kb208MTAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInJvYmJlclwiKTtcclxuICAgICAgICAgICAgaWYoIXBlb3BsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgUm9iYmVyKHRoaXMudmlldyxHYW1lQ29uZmlnLlJPQkJFUl9NQU4sdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGVvcGxlLnZpc2libGU9dHJ1ZTtcclxuICAgICAgICB0aGlzLmdldFBvcygpO1xyXG4gICAgICAgIC8vcGVvcGxlLnNldFBvcyh0aGlzLlgsdGhpcy5ZKTtcclxuICAgICAgICBwZW9wbGUuc2V0UG9zKDkwMCwzMDApO1xyXG4gICAgICAgIHBlb3BsZS5vcGVuQmVoYXZpb3VyKCk7XHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSozO1xyXG4gICAgICAgIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQ8T3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMuY3JlYXRlUGVvcGxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudCsrO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQpXHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq655qE5L2N572uICovXHJcbiAgICBwdWJsaWMgZ2V0UG9zKCk6YW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHR5cGVOdW09TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMpO1xyXG4gICAgICAgIHN3aXRjaCh0eXBlTnVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgLy/lnKhB6L6555WMXHJcbiAgICAgICAgICAgICAgICB0aGlzLlg9MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuWT1NYXRoLnJhbmRvbSgpKjM5MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAvL+WcqELovrnnlYxcclxuICAgICAgICAgICAgICAgIHRoaXMuWD1NYXRoLnJhbmRvbSgpKjIwMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlk9MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAvL+WcqEPovrnnlYxcclxuICAgICAgICAgICAgICAgIHRoaXMuWD0yMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq55WM6ZmQ5qOA5rWLICoqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBcclxuICAgIFxyXG4gICAgcHVibGljIGNoZWNrUGVyY2VudChwZW9wbGUsdHlwZTpzdHJpbmcpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+a1geWKqOavlOS+i+ajgOa1i1xyXG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18ucGVyY2VudDwxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBVSeeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2Vye1xyXG4gICAgLyoq5pWw5o2u566h55CG5ZmoICovXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIGRhdGFNYW5hZ2VyIDogRGF0YU1hbmFnZXI7XHJcbiAgICAvKipVSSBzcHJpdGUgKi9cclxuICAgIHByaXZhdGUgVWlTcHJpdGUgOiBMYXlhLlNwcml0ZTtcclxuXHJcbiAgICAvKirovb3lhaXmlbDmja4gKi9cclxuICAgIGNvbnN0cnVjdG9yKHVpOkxheWEuU3ByaXRlKXtcclxuICAgICAgICB0aGlzLlVpU3ByaXRlID0gdWk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59IiwiLyoqXHJcbiAqIOS6i+S7tuWPkeeUn+euoeeQhuWZqFxyXG4gKiBcclxuICogXHJcbiAqIOeUn+aIkOS6i+S7tuOAgVxyXG4gKiDlvbHlk43kurrlj6PmtYHliqhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmxkRXZlbnRNYW5hZ2VyIHtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5LqL5Lu26aKE5oql5YiwICovXHJcbiAgICBcclxuXHJcbiAgICAvKirkuovku7blj5HnlJ/lmaggKi9cclxuXHJcbiAgICBcclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgTXNnRGlhbG9nIGZyb20gXCIuL0NvcmUvTXNnRGlhbG9nXCJcbmltcG9ydCBPcGVuR2FtZSBmcm9tIFwiLi9TY3JpcHQvT3BlbkdhbWVcIlxuaW1wb3J0IEdhbWVXb3JsZCBmcm9tIFwiLi9TY3JpcHQvR2FtZVdvcmxkL0dhbWVXb3JsZFwiXG5pbXBvcnQgT3BlblN0b3J5IGZyb20gXCIuL1NjcmlwdC9PcGVuU3RvcnlcIlxuaW1wb3J0IENlbnRlciBmcm9tIFwiLi9TY3JpcHQvQ2VudGVyXCJcclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTE0NDA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj05MDA7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cImZpeGVkaGVpZ2h0XCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cInRvcFwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJsZWZ0XCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJTdGFydEdhbWUuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcIkNvcmUvTXNnRGlhbG9nLnRzXCIsTXNnRGlhbG9nKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5HYW1lLnRzXCIsT3BlbkdhbWUpO1xuICAgICAgICByZWcoXCJTY3JpcHQvR2FtZVdvcmxkL0dhbWVXb3JsZC50c1wiLEdhbWVXb3JsZCk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9PcGVuU3RvcnkudHNcIixPcGVuU3RvcnkpO1xuICAgICAgICByZWcoXCJTY3JpcHQvQ2VudGVyLnRzXCIsQ2VudGVyKTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG5cdFx0R2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG4iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IHsgT3V0Q291bnRyeURhdGEgfSBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiDkurrnp43niLbnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZSB7XHJcbiAgICAvKirlnLrmma8qL1xyXG4gICAgcHJpdmF0ZSB2aWV3IDogTGF5YS5TcHJpdGU7XHJcbiAgICAvKirnsr7ngbUgKi9cclxuICAgIHB1YmxpYyBzcCA6IExheWEuU3ByaXRlO1xyXG4gICAgLyoq5qiq5Z2Q5qCH56e75Yqo6YCf5bqmICovXHJcbiAgICBwcml2YXRlIGRpclg6bnVtYmVyO1xyXG4gICAgLyoq57q15Z2Q5qCH56e75Yqo6YCf5bqmICovXHJcbiAgICBwcml2YXRlIGRpclk6bnVtYmVyO1xyXG4gICAgLyoq5aKZ5YaF5Lq66L+Y5piv5aKZ5aSW5Lq6ICovXHJcbiAgICBwdWJsaWMgaXNPdXQgOiBib29sZWFuO1xyXG4gICAgLyoq5Lq65bGe5oCnICovXHJcbiAgICBwdWJsaWMgdHlwZTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgICAgICB0aGlzLmlzT3V0ID0gaXNPdXQ7XHJcbiAgICAgICAgdGhpcy50eXBlPXR5cGU7XHJcbiAgICAgICAgdGhpcy5pbml0KHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIneWni+WMliAqL1xyXG4gICAgcHJpdmF0ZSBpbml0KHR5cGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v5Yib5bu6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5byA5aeL6KGM5YqoICovXHJcbiAgICBwdWJsaWMgb3BlbkJlaGF2aW91cigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+i/kOihjOS6humAu+i+kVxyXG4gICAgICAgIGlmKHRoaXMuaXNPdXQpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zT3V0KCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zSW5uZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq6ICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVBlb3BsZSh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAgdGhpcy5jcmVhdGVTcCh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirliJvlu7pTcHJpdGUgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlU3AodHlwZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGltZ1VybCA9IFwibWFwL1wiK3R5cGUrXCIucG5nXCI7XHJcbiAgICAgICAgaWYoIXRoaXMuc3ApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNwID0gbmV3IExheWEuU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnNwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcC5sb2FkSW1hZ2UoaW1nVXJsKTtcclxuICAgICAgICB0aGlzLnNwLnBpdm90KHRoaXMuc3Aud2lkdGgvMix0aGlzLnNwLmhlaWdodC8yKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiuvue9ruWIneWni+S9jee9riAqL1xyXG4gICAgcHVibGljIHNldFBvcyh4Om51bWJlcix5Om51bWJlcik6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcC54ID0geDtcclxuICAgICAgICB0aGlzLnNwLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWimeWkluS6uuihjOWKqOmAu+i+kSovXHJcbiAgICBwcml2YXRlIHBlb3BsZV9Qb3NPdXQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaWueWQke+8jOaWueWQkeeUqCgtMX4xKeihqOekulxyXG4gICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpKjItMTtcclxuICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKSoyLTE7XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7TvvIzlnKjmraTml7bpl7TlhoXnp7vliqgs6ZqP5py65pe26Ze05ZyoKDIsOCnkuK3pgInmi6lcclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjYrMjtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jbG9zZU1vdmVUaW1lcik7XHJcbiAgICAgICAgLy/lvIDlkK/np7vliqhcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirljZXkvY3luKfnp7vliqgqL1xyXG4gICAgcHJpdmF0ZSBtb3ZlRGlzdGFuY2UoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zcC54Kz10aGlzLmRpclg7XHJcbiAgICAgICAgdGhpcy5zcC55Kz10aGlzLmRpclk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YWz6Zet56e75Yqo5a6a5pe25Zmo77yM5byA5ZCv5Y6f5Zyw5LyR5oGvKi9cclxuICAgIHByaXZhdGUgY2xvc2VNb3ZlVGltZXIoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcclxuICAgICAgICAvL+S8keaBr+aXtumXtOe7k+adn+WQjue7p+e7reenu+WKqFxyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNisyO1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLnBlb3BsZV9Qb3NPdXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirlopnlhoXkurrooYzliqjpgLvovpEqL1xyXG4gICAgcHJpdmF0ZSBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvKirnorDmkp7mo4DmtYsgKi9cclxuICAgIHByaXZhdGUgY2hlY2tMaW1pdF9PdXQoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/ovrnnlYzmo4DmtYtcclxuICAgICAgICBpZih0aGlzLnNwLng8LTV8fHRoaXMuc3AueD4yMDA1fHx0aGlzLnNwLnk8LTUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMYXlhLlBvb2wucmVjb3Zlcih0aGlzLnR5cGUsdGhpcyk7XHJcbiAgICAgICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5oqk5Z+O5rKz5qOA5rWLXHJcbiAgICAgICAgaWYodGhpcy5zcC55Pj0zOTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+mHjeaWsOe7meS4gOS4quS9jeenu1xyXG4gICAgICAgICAgICAgICAgLy/nu5nkuojpmo/mnLrmlrnlkJHvvIzmlrnlkJHnlKgoLTF+MSnooajnpLpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpKjItMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKirkurrmtojlpLEgKi9cclxuICAgIHByaXZhdGUgZGVzdG9yeVBlb3BsZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24gZXh0ZW5kcyBQZW9wbGV7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9iYmVyIGV4dGVuZHMgUGVvcGxle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xyXG4gICAgICAgIHN1cGVyKHZpZXcsdHlwZSxpc091dCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZW50ZXIgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiArIHRoaXMuc2NyZWVuV2lkdGgpO1xyXG4gICAgICAgIGlmKHNjcmVlbldpZHRoIDwgODAwKSAodGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShcImdhbWVOYW1lXCIpIGFzIExheWEuTGFiZWwpLmZvbnRTaXplID0gMTI1O1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuU3ByaXRlKS54ID0gKHNjcmVlbldpZHRoLSA2NjcpLzI7ICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV29ybGRFdmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvV29ybGRFdmVudE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vLi4vdWkvbGF5YU1heFVJXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgUGVvcGxlTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9QZW9wbGVNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi8uLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgTXNnRGlhbG9nIGZyb20gXCIuLi8uLi9Db3JlL01zZ0RpYWxvZ1wiO1xyXG5cclxuLyoqXHJcbiAqIOS4lueVjOeuoeeQhuWZqOiEmuacrFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdvcmxkIGV4dGVuZHMgdWkuR2FtZVdvcmxkVUl7XHJcbiAgICAvKipEYXRhTWFuYWdlciAg5Y2V5L6LICovXHJcbiAgICAvKirkuovku7blj5HnlJ/lmaggKi9cclxuICAgIHByaXZhdGUgd29ybGRFdmVudE1hbmFnZXIgOiBXb3JsZEV2ZW50TWFuYWdlcjtcclxuICAgIC8qKuS6uuexu+euoeeQhuWZqCovXHJcbiAgICBwcml2YXRlIHBlb3BsZU1hbmFnZXIgOiBQZW9wbGVNYW5hZ2VyO1xyXG4gICAgLyoqVUnnrqHnkIblmaggKi9cclxuICAgIHByaXZhdGUgdWlNYW5hZ2VyIDogVUlNYW5hZ2VyO1xyXG4gICAgLyoq5raI5oGv6YCa55So5qGGICovXHJcbiAgICBwcml2YXRlIG1zZ0RpYWxvZyA6IE1zZ0RpYWxvZztcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8qKumXqOaYr+WQpuaJk+W8gCAqL1xyXG4gICAgcHJpdmF0ZSBpc09wZW4gOiBib29sZWFuO1xyXG4gICAgLyoq5bGP5bmV5a695bqmICovXHJcbiAgICBwcml2YXRlIHNjcmVlbldpZHRoIDogbnVtYmVyO1xyXG4gICAgLyoq6byg5qCH5piv5ZCm5oyJ5LiLICovXHJcbiAgICBwcml2YXRlIGlzRG93biA6IGJvb2xlYW47XHJcbiAgICAvKirpvKDmoIfngrnorrDlvZUgKi9cclxuICAgIHByaXZhdGUgbW91c2VQb3MgOiBhbnk7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nYW1lRGF0YUluaXQoKTsvL+a4uOaIj+WPmOmHj+WIneWni+WMllxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTsvL+e7meahpea3u+WKoOS6i+S7tiBcclxuICAgICAgICB0aGlzLnNjcmVlblNldHRpbmcoKTsvL+Wxj+W5leWxheS4rVxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0KCk7Ly/muLjmiI/mtYHnqIvlvIDlp4tcclxuICAgIH1cclxuXHJcbiAgICAvKirmlbDmja7liJ3lp4vljJYgKi9cclxuICAgIHByaXZhdGUgZ2FtZURhdGFJbml0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53b3JsZEV2ZW50TWFuYWdlciA9IG5ldyBXb3JsZEV2ZW50TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucGVvcGxlTWFuYWdlciA9IG5ldyBQZW9wbGVNYW5hZ2VyKHRoaXMuc3Bfc2NlbmUpO1xyXG4gICAgICAgIHRoaXMudWlNYW5hZ2VyID0gbmV3IFVJTWFuYWdlcih0aGlzLnNwX1VJKTtcclxuICAgICAgICB0aGlzLm1zZ0RpYWxvZyA9IG5ldyBNc2dEaWFsb2coKTsgICAgICBcclxuICAgICAgICB0aGlzLm1vdXNlUG9zID0ge307XHJcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmt7vliqDkuovku7YgKi9cclxuICAgIHByaXZhdGUgYWRkRXZlbnQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTix0aGlzLHRoaXMubW91c2VEb3duKTtcclxuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfVVAsdGhpcyx0aGlzLm1vdXNlVXApO1xyXG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9NT1ZFLHRoaXMsdGhpcy5tb3VzZU1vdmUpO1xyXG4gICAgICAgIC8v57uZ6Zeo5biu54K554K55Ye75LqLICAgXHJcbiAgICAgICAgdGhpcy5zcF9kb29yLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmRvb3JDdHIpO1xyXG4gICAgICAgIC8v5Yy76aaG5LqL5Lu257uR5a6aXHJcbiAgICAgICAgdGhpcy5ob3NwaXRhbC5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5IT1NQSVRBTF0pO1xyXG4gICAgICAgIC8v5Yab6Zif5LqL5Lu257uR5a6aXHJcbiAgICAgICAgdGhpcy5hcm15Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkFSTVldKTtcclxuICAgICAgICAvL+eyruS7k+S6i+S7tue7keWumlxyXG4gICAgICAgIHRoaXMuZmFybS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5GQVJNXSk7ICAgICAgICBcclxuICAgICAgICAvL+enkeaKgOmmhuS6i+S7tue7keWumlxyXG4gICAgICAgIHRoaXMudGVjaG5vbG9neS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5URUNITk9MT0dZXSk7ICAgICAgICBcclxuICAgICAgICAvL+aWsOmXu+eCueS6i+S7tue7keWumlxyXG4gICAgICAgIHRoaXMuZXZlbnRIb3VzZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5FVkVOVF9IT1VTRV0pOyAgICAgXHJcbiAgICAgICAgLy/mlrDpl7vnmoflrqvnu5HlrppcclxuICAgICAgICB0aGlzLnBhbGFjZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5QQUxBQ0VdKTsgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWxj+W5lSDlsYDkuK0qL1xyXG4gICAgcHJpdmF0ZSBzY3JlZW5TZXR0aW5nKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IDkwMC8oTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodC9MYXlhLkJyb3dzZXIuY2xpZW50V2lkdGgpOy8v5bGP5bmV6auY5bqmXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aWR0aFwiICsgdGhpcy5zY3JlZW5XaWR0aCk7XHJcbiAgICAgICAgdGhpcy5zcF9zY2VuZS54ID0gLSgyMDAwLXRoaXMuc2NyZWVuV2lkdGgpLzI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v5LqL5Lu25Zue6LCDXHJcblxyXG4gICAgLyoq6Zeo55qE5byA5YWzICovXHJcbiAgICBwcml2YXRlIGRvb3JDdHIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmlzT3BlbilcclxuICAgICAgICB7Ly/lvIDpl6hcclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kb29yQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHsvL+WFs+mXqFxyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZG9vck9wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YWz6ZeoICovXHJcbiAgICBwcml2YXRlIGRvb3JDbG9zZSgpIDogdm9pZFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKirlvIDpl6ggKi9cclxuICAgIHByaXZhdGUgZG9vck9wZW4oKSA6IHZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq56e75YqoICovXHJcbiAgICBwcml2YXRlIG1vdXNlTW92ZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzRG93bikgcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMubW91c2VQb3MueClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgdGhpcy5zcF9zY2VuZS54ICs9IExheWEuc3RhZ2UubW91c2VYIC0gdGhpcy5tb3VzZVBvcy54OyBcclxuICAgICAgICAvLyAgICB0aGlzLnNwX3NjZW5lLnkgKz0gTGF5YS5zdGFnZS5tb3VzZVkgLSB0aGlzLm1vdXNlUG9zLng7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3Bfc2NlbmUueCA+IDApICB0aGlzLnNwX3NjZW5lLnggPSAwO1xyXG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPCAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCkpIHRoaXMuc3Bfc2NlbmUueCA9ICAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW91c2VQb3MueCA9IExheWEuc3RhZ2UubW91c2VYO1xyXG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IExheWEuc3RhZ2UubW91c2VZO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaLluWKqOaMieS4iyAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZURvd24oKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5ouW5Yqo5oqs6LW3ICovXHJcbiAgICBwcml2YXRlIG1vdXNlVXAoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3VzZU1vdmUpO1xyXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7IFxyXG4gICAgICAgIHRoaXMubW91c2VQb3MueCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLnkgPSB1bmRlZmluZWQ7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirngrnlh7sg6I635Y+W5bu6562R5L+h5oGvICovXHJcbiAgICBwcml2YXRlIG9uSG91c2VJbmZvKHR5cGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubXNnRGlhbG9nLnNob3dNc2codHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8v5ri45oiP5rWB56iL5byA5aeLLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8qKua4uOaIj+a1geeoi+W8gOWniyAqL1xyXG4gICAgcHJpdmF0ZSBnYW1lU3RhcnQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIuY3JlYXRlUGVvcGxlKCk7Ly/kurrlj6PnlJ/miJDpgLvovpHov5DooYxcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuR2FtZSBleHRlbmRzIExheWEuU2NyaXB0e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkgOiB2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgb25DbGljaygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEuU2NlbmUub3BlbihcIkdhbWVXb3JsZC5zY2VuZVwiKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5TdG9yeSBleHRlbmRzIExheWEuU2NyaXB0e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkgOiB2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgb25DbGljaygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEuU2NlbmUub3BlbihcIkdhbWVTdG9yeS5zY2VuZVwiKTtcclxuICAgIH1cclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xyXG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xyXG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbmV4cG9ydCBtb2R1bGUgdWkuRGlhbG9nIHtcclxuICAgIGV4cG9ydCBjbGFzcyBDdXJyZW50RGlhbG9nVUkgZXh0ZW5kcyBTY2VuZSB7XHJcblx0XHRwdWJsaWMgbXNnQm9keTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3ByaXRlX1BlcnNvbjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3ByaXRlX01zZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnRuX2Nsb3NlOkxheWEuU3ByaXRlO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiRGlhbG9nL0N1cnJlbnREaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBtb2R1bGUgdWkge1xyXG4gICAgZXhwb3J0IGNsYXNzIEdhbWVXb3JsZFVJIGV4dGVuZHMgU2NlbmUge1xyXG5cdFx0cHVibGljIHNwX3NjZW5lOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9ncm91bmQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX3JpdmVyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF93YWxsOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9kb29yOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfOTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgZXZlbnRIb3VzZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBwYWxhY2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvc3BpdGFsOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGVjaG5vbG9neTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBmYXJtOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGFybXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX1VJOkxheWEuU3ByaXRlO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiR2FtZVdvcmxkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyIl19
