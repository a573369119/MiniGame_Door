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
        /**************主数据********************/
        /**国家财政 */
        this.gold = 10000;
        /**国家幸福度 */
        this.popularSupport = 90;
        /**国家人口 */
        this.population = 100;
        /**国家科技 */
        this.technology = 90;
        /**国家声望 */
        this.prestige = 90;
        /***************副数据*****************/
        //--------普通数据
        /**粮食产量 */
        this.grainYield = 1000;
        /**粮食消耗 */
        this.grainConsumption = 1000;
        //--------事件数据
        /**瘟疫  0 1 2 3 4 5 0-是没发生*/
        this.pest = 0;
        /**地震  0 1 2 3 4 5 0-是没发生 */
        this.naturalDisaster = 0;
        /**战乱  0 1 2 3 4 5 0-是没发生*/
        this.war = 0;
        //--------职业人数
        this.arr_People = ["common", "scientist", "star", "bandit", "robber"];
        /**普通人 A  普通人中会产生医生 警察 等正常职业*/
        this.common = 92;
        /**科学家 SSS*/
        this.scientist = 3;
        /**明星 SS*/
        this.star = 3;
        /**土匪 -S */
        this.bandit = 1;
        /**盗贼 -A */
        this.robber = 1;
        //--------城门
        /**门是否打开*/
        this.isDoorOpen = true;
        /**人口进入量 */
        this.enterPeople = 100;
        /**人口流出量 */
        this.outerPeople = 100;
        /**筛查能力 启动特殊门的时候  筛查能力生效*/
        this.preparation = 0.5;
        /**特殊门 筛查 1-防止进入   2-邀请进入*/
        // public keepSelect : Array<number> = [];
        //------------------------------------------
        /**普通人中 医生的占比*/
        this.percentDoctor = 0.2;
        /**普通人种 警察占比 */
        this.percentPolic = 0.1;
        /**普通人种 商人的占比 */
        this.percentShoper = 0.6;
        /**游手好闲 */
        this.percentNothing = 0.1;
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
            return this[type] / (this.population);
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
        //------------------------------------------墙内
        /**已生成的人种  0 普通   1科学家  2明星 3土匪 4盗贼*/
        this.alreadyCreate = [0, 0, 0, 0, 0];
        /**生成间隔计时器 */
        this.countTime = 0;
        /**生产时间间隔 */
        this.countTime_ = 500;
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
    /*********************************创建墙内人 */
    PeopleManager.prototype.createPeople_Inner = function () {
        var randomString;
        var arrPercent = []; //生产比例
        var arr_People = DataManager_1.default.ins_.arr_People;
        var number = 0;
        arrPercent.push(number);
        for (var i = 0; i < arr_People.length; i++) {
            number += DataManager_1.default.ins_.get_ProfessionPercent(arr_People[i]);
            arrPercent.push(number);
        }
        console.log(arrPercent);
        Laya.timer.loop(1, this, this.getRandom, [arrPercent]);
    };
    /**生产人 */
    PeopleManager.prototype.create_Inner = function (randomString) {
        if (randomString == "none")
            return;
        var people;
        //生产人种
        switch (randomString) { /**已生成的人种  0 普通   1科学家  2明星 3土匪 4盗贼*/
            case GameConfig_1.default.COMMON_MAN:
                people = new Common_1.default(this.view, randomString, false);
                this.alreadyCreate[0]++;
                break;
            case GameConfig_1.default.ROBBER_MAN: //盗贼
                people = new Common_1.default(this.view, randomString, false);
                this.alreadyCreate[4]++;
                break;
            case GameConfig_1.default.BANDIT_MAN: //土匪
                people = new Common_1.default(this.view, randomString, false);
                this.alreadyCreate[3]++;
                break;
            case GameConfig_1.default.STAR_MAN: //明星
                people = new Common_1.default(this.view, randomString, false);
                this.alreadyCreate[2]++;
                break;
            case GameConfig_1.default.SCIENTIST_MAN: //科学家
                people = new Common_1.default(this.view, randomString, false);
                this.alreadyCreate[1]++;
                break;
        }
        if (people === undefined || people === null) {
            console.log("没有生成人种！种类:" + randomString);
            return;
        }
        this.createPos(people);
    };
    /**生产位置 */
    PeopleManager.prototype.createPos = function (people) {
        var houseNode = this.view.getChildByName('house');
        var percent = houseNode._children.length / 100;
        var house;
        for (var i = 0; i < houseNode._children.length; i++) {
            var number = Math.floor(Math.random() * percent * 100);
            house = houseNode.getChildByName("house_" + number);
            if (house !== undefined && house !== null) {
                people.setPos(house.x, house.y);
                return;
            }
        }
    };
    /**获取随机人种 */
    PeopleManager.prototype.getRandom = function (arrPercent) {
        if (this.countTime <= this.countTime_) {
            this.countTime++;
            return;
        }
        this.countTime_ = Math.random() * 3 * 100;
        console.log("生成间隔:" + Math.floor(this.countTime / 100) + "s");
        this.countTime = 0;
        var number = Math.random();
        var person = "";
        var index = undefined;
        for (var i = 0; i < arrPercent.length; i++) {
            if (arrPercent[i] <= number && number < arrPercent[i + 1]) {
                person = DataManager_1.default.ins_.arr_People[i];
                index = i;
                break;
            }
        }
        // console.log(person);
        //判断人是否还能生成
        if (index === undefined) {
            console.log("概率计算出错");
            return;
        }
        if (this.alreadyCreate[index] == DataManager_1.default.ins_[person]) {
            if (this.getAlreadCreate() == DataManager_1.default.ins_.population)
                return;
            person = this.getRandom(arrPercent);
        }
        this.create_Inner(person); //生产人种   
    };
    /*获取已生成人口的数量*/
    PeopleManager.prototype.getAlreadCreate = function () {
        var number = 0;
        for (var i = 0; i < this.alreadyCreate.length; i++) {
            number += this.alreadyCreate[i];
        }
        return number;
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
        this.toward = { x: 0, y: 0 };
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
            Laya.timer.loop(16, this, this.people_PosInner);
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
    /******************************墙外人行动逻辑*******************************************/
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
    /********************************************************墙内人行动逻辑*****************************************/
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
        this.peopleManager.createPeople_Inner(); //内人口生成
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXIyLjAvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vbi50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyLnRzIiwic3JjL1NjcmlwdC9DZW50ZXIudHMiLCJzcmMvU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHMiLCJzcmMvU2NyaXB0L09wZW5HYW1lLnRzIiwic3JjL1NjcmlwdC9PcGVuU3RvcnkudHMiLCJzcmMvdWkvbGF5YU1heFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1ZBO0lBQUE7SUEwQkEsQ0FBQztJQXpCRyxjQUFjO0lBQ0EscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MsbUJBQVEsR0FBWSxNQUFNLENBQUM7SUFDekMsY0FBYztJQUNBLHdCQUFhLEdBQVksV0FBVyxDQUFDO0lBR25ELHNDQUFzQztJQUN0QyxRQUFRO0lBQ00sbUJBQVEsR0FBWSxDQUFDLENBQUM7SUFDcEMsUUFBUTtJQUNNLGVBQUksR0FBWSxDQUFDLENBQUM7SUFDaEMsUUFBUTtJQUNNLGVBQUksR0FBVyxDQUFDLENBQUM7SUFDL0IsUUFBUTtJQUNNLHFCQUFVLEdBQVcsQ0FBQyxDQUFDO0lBQ3JDLGFBQWE7SUFDQyxzQkFBVyxHQUFXLENBQUMsQ0FBQztJQUN0QyxRQUFRO0lBQ00saUJBQU0sR0FBVyxDQUFDLENBQUM7SUFDckMsaUJBQUM7Q0ExQkQsQUEwQkMsSUFBQTtrQkExQm9CLFVBQVU7Ozs7QUNBL0I7O0dBRUc7QUFDSDtJQW1FSTtRQWpFQSx1Q0FBdUM7UUFDdkMsVUFBVTtRQUNILFNBQUksR0FBWSxLQUFLLENBQUM7UUFDN0IsV0FBVztRQUNKLG1CQUFjLEdBQVksRUFBRSxDQUFDO1FBQ3BDLFVBQVU7UUFDSCxlQUFVLEdBQVUsR0FBRyxDQUFDO1FBQy9CLFVBQVU7UUFDSCxlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ2hDLFVBQVU7UUFDSCxhQUFRLEdBQVksRUFBRSxDQUFDO1FBRTlCLHFDQUFxQztRQUNyQyxjQUFjO1FBQ2QsVUFBVTtRQUNILGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDbEMsVUFBVTtRQUNILHFCQUFnQixHQUFXLElBQUksQ0FBQztRQUV2QyxjQUFjO1FBQ2QsMkJBQTJCO1FBQ3BCLFNBQUksR0FBWSxDQUFDLENBQUM7UUFDekIsNEJBQTRCO1FBQ3JCLG9CQUFlLEdBQVksQ0FBQyxDQUFDO1FBQ3BDLDJCQUEyQjtRQUNwQixRQUFHLEdBQVksQ0FBQyxDQUFDO1FBRXhCLGNBQWM7UUFDUCxlQUFVLEdBQW1CLENBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BGLDhCQUE4QjtRQUN2QixXQUFNLEdBQVksRUFBRSxDQUFDO1FBQzVCLFlBQVk7UUFDTCxjQUFTLEdBQVksQ0FBQyxDQUFDO1FBQzlCLFVBQVU7UUFDSCxTQUFJLEdBQVksQ0FBQyxDQUFDO1FBQ3pCLFdBQVc7UUFDSixXQUFNLEdBQVksQ0FBQyxDQUFDO1FBQzNCLFdBQVc7UUFDSixXQUFNLEdBQVksQ0FBQyxDQUFDO1FBRTNCLFlBQVk7UUFDWixVQUFVO1FBQ0gsZUFBVSxHQUFXLElBQUksQ0FBQztRQUNqQyxXQUFXO1FBQ0osZ0JBQVcsR0FBWSxHQUFHLENBQUM7UUFDbEMsV0FBVztRQUNKLGdCQUFXLEdBQVksR0FBRyxDQUFDO1FBQ2xDLDBCQUEwQjtRQUNuQixnQkFBVyxHQUFZLEdBQUcsQ0FBQztRQUNsQywyQkFBMkI7UUFDM0IsMENBQTBDO1FBQzFDLDRDQUE0QztRQUM1QyxlQUFlO1FBQ1Isa0JBQWEsR0FBWSxHQUFHLENBQUM7UUFDcEMsZUFBZTtRQUNSLGlCQUFZLEdBQVksR0FBRyxDQUFDO1FBQ25DLGdCQUFnQjtRQUNULGtCQUFhLEdBQVksR0FBRyxDQUFDO1FBQ3BDLFVBQVU7UUFDSCxtQkFBYyxHQUFZLEdBQUcsQ0FBQztRQUdyQyxVQUFVO1FBQ0gsWUFBTyxHQUFRLENBQUMsQ0FBQztJQUl4QixDQUFDO0lBRUQsOEJBQVEsR0FBUjtJQUVBLENBQUM7SUFFRDs7O09BR0c7SUFDSSxvQ0FBYyxHQUFyQjtRQUVJLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7O09BR0c7SUFDSSwyQ0FBcUIsR0FBNUIsVUFBNkIsSUFBVztRQUVwQyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQTNGYSxnQkFBSSxHQUFpQixJQUFJLFdBQVcsRUFBRSxDQUFDO0lBa0d6RCxrQkFBQztDQW5HRCxBQW1HQyxJQUFBO2tCQW5Hb0IsV0FBVztBQXFHaEMsUUFBUTtBQUNSO0lBQUE7UUFFSSx1Q0FBdUM7UUFDdkMsY0FBYztRQUNQLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDNUIsYUFBYTtRQUNOLGFBQVEsR0FBUSxDQUFDLENBQUM7UUFDekIsV0FBVztRQUNKLGNBQVMsR0FBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQVJpQixtQkFBSSxHQUFvQixJQUFJLGNBQWMsRUFBRSxDQUFDO0lBUS9ELHFCQUFDO0NBVEQsQUFTQyxJQUFBO0FBVFksd0NBQWM7Ozs7QUN6RzNCLDZDQUFxQztBQUVyQzs7R0FFRztBQUNIO0lBQXVDLDZCQUF5QjtJQUc1RCxRQUFRO0lBQ1Isa0NBQWtDO0lBRWxDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBRkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDMUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7O0lBQ3pCLENBQUM7SUFFRCxTQUFTO0lBQ0YsMkJBQU8sR0FBZCxVQUFlLElBQVc7UUFFdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFNUQsQ0FBQztJQUVELFFBQVE7SUFDQSw2QkFBUyxHQUFqQjtRQUVJLFFBQU8sSUFBSSxDQUFDLElBQUksRUFDaEI7U0FFQztJQUNMLENBQUM7SUFFRCxTQUFTO0lBQ0QsK0JBQVcsR0FBbkI7SUFHQSxDQUFDO0lBRUQsVUFBVTtJQUNGLDhCQUFVLEdBQWxCO0lBR0EsQ0FBQztJQUVELFFBQVE7SUFDRCwrQkFBVyxHQUFsQjtRQUVJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsRUFBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVPLDZCQUFTLEdBQWpCO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0EzREEsQUEyREMsQ0EzRHNDLGNBQUUsQ0FBQyxNQUFNLENBQUMsZUFBZSxHQTJEL0Q7Ozs7O0FDL0RELG1EQUE4QztBQUM5Qyw2Q0FBNEQ7QUFDNUQsdURBQWdEO0FBQ2hELHVEQUFnRDtBQUNoRDs7R0FFRztBQUNIO0lBY0ksdUJBQVksSUFBSTtRQVBoQiw4Q0FBOEM7UUFDOUMscUNBQXFDO1FBQzdCLGtCQUFhLEdBQW1CLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELGFBQWE7UUFDTCxjQUFTLEdBQVksQ0FBQyxDQUFDO1FBQy9CLFlBQVk7UUFDSixlQUFVLEdBQVksR0FBRyxDQUFDO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFlBQVk7SUFDTCx5Q0FBaUIsR0FBeEI7UUFFSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFNBQVM7SUFDRixvQ0FBWSxHQUFuQjtRQUVJLElBQUksTUFBTSxDQUFDO1FBQ1gsZUFBZTtRQUNmLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLEtBQUs7UUFDTCxJQUFHLE1BQU0sSUFBRSxDQUFDLElBQUUsTUFBTSxHQUFDLEVBQUUsRUFDdkI7WUFDSSxNQUFNLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsSUFBRyxDQUFDLE1BQU0sRUFDVjtnQkFDSSxNQUFNLEdBQUUsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsb0JBQVUsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUQ7U0FDSjtRQUNELElBQUk7YUFDQyxJQUFHLE1BQU0sSUFBRSxFQUFFLElBQUUsTUFBTSxHQUFDLEVBQUUsRUFDN0I7WUFDSSxNQUFNLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsSUFBRyxDQUFDLE1BQU0sRUFDVjtnQkFDSSxNQUFNLEdBQUUsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsb0JBQVUsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUQ7U0FDSjtRQUNELElBQUk7YUFDQyxJQUFHLE1BQU0sSUFBRSxFQUFFLElBQUUsTUFBTSxHQUFDLEVBQUUsRUFDN0I7WUFDSSxNQUFNLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsSUFBRyxDQUFDLE1BQU0sRUFDVjtnQkFDSSxNQUFNLEdBQUUsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsb0JBQVUsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUQ7U0FDSjtRQUNELEtBQUs7YUFDQSxJQUFHLE1BQU0sSUFBRSxFQUFFLElBQUUsTUFBTSxHQUFDLEVBQUUsRUFDN0I7WUFDSSxNQUFNLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkMsSUFBRyxDQUFDLE1BQU0sRUFDVjtnQkFDSSxNQUFNLEdBQUUsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsb0JBQVUsQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0Q7U0FDSjtRQUNELElBQUk7YUFFSjtZQUNJLE1BQU0sR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxJQUFHLENBQUMsTUFBTSxFQUNWO2dCQUNJLE1BQU0sR0FBRSxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxvQkFBVSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQzthQUMxRDtTQUNKO1FBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsQ0FBQztRQUN6QixJQUFHLDRCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyw0QkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxFQUM5RDtZQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELDRCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxZQUFZO0lBQ0wsOEJBQU0sR0FBYjtRQUVJLElBQUksT0FBTyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLFFBQU8sT0FBTyxFQUNkO1lBQ0ksS0FBSyxDQUFDO2dCQUNGLE1BQU07Z0JBQ04sSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsR0FBRyxDQUFDO2dCQUN6QixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE1BQU07Z0JBQ04sSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsSUFBSSxDQUFDO2dCQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztnQkFDVCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE1BQU07Z0JBQ04sSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUM7Z0JBQ1osSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsR0FBRyxDQUFDO2dCQUN6QixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsa0VBQWtFO0lBRzNELG9DQUFZLEdBQW5CLFVBQW9CLE1BQU0sRUFBQyxJQUFXO1FBRWxDLFFBQVE7UUFDUixJQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxDQUFDLEVBQzdCO1lBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVELDBDQUEwQztJQUNuQywwQ0FBa0IsR0FBekI7UUFFRyxJQUFJLFlBQVksQ0FBRTtRQUNsQixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBQzFCLElBQUksVUFBVSxHQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUNyQztZQUNLLE1BQU0sSUFBSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxTQUFTO0lBQ0Qsb0NBQVksR0FBcEIsVUFBcUIsWUFBWTtRQUU3QixJQUFHLFlBQVksSUFBSSxNQUFNO1lBQUUsT0FBTztRQUNsQyxJQUFJLE1BQU0sQ0FBQztRQUNYLE1BQU07UUFDTixRQUFPLFlBQVksRUFDbkIsRUFBSyxxQ0FBcUM7WUFDdEMsS0FBSyxvQkFBVSxDQUFDLFVBQVU7Z0JBQ3RCLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsTUFBTTtZQUNWLEtBQUssb0JBQVUsQ0FBQyxVQUFVLEVBQUMsSUFBSTtnQkFDM0IsTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN4QixNQUFNO1lBQ1YsS0FBSyxvQkFBVSxDQUFDLFVBQVUsRUFBQyxJQUFJO2dCQUMzQixNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLE1BQU07WUFDVixLQUFLLG9CQUFVLENBQUMsUUFBUSxFQUFDLElBQUk7Z0JBQ3pCLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsTUFBTTtZQUNWLEtBQUssb0JBQVUsQ0FBQyxhQUFhLEVBQUMsS0FBSztnQkFDL0IsTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN4QixNQUFNO1NBQ2I7UUFDRCxJQUFHLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBQUEsT0FBTztTQUFDO1FBQzlGLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVU7SUFDRixpQ0FBUyxHQUFqQixVQUFrQixNQUFNO1FBRXBCLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxJQUFvQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxHQUFHLENBQUM7UUFDN0MsSUFBSSxLQUFLLENBQUU7UUFDWCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQzdDO1lBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsT0FBTyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25ELEtBQUssR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxJQUFHLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFDeEM7Z0JBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsT0FBTzthQUNWO1NBQ0o7SUFDTCxDQUFDO0lBRUQsWUFBWTtJQUNKLGlDQUFTLEdBQWpCLFVBQWtCLFVBQVU7UUFFeEIsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQ3BDO1lBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBQyxHQUFHLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRW5CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUNwQztZQUNJLElBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsRUFDdEQ7Z0JBQ0ksTUFBTSxHQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDVixNQUFNO2FBQ1Q7U0FDSjtRQUNELHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gsSUFBRyxLQUFLLEtBQUssU0FBUyxFQUFDO1lBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUFBLE9BQU87U0FBQztRQUN0RCxJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQ3hEO1lBQ0ksSUFBRyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVTtnQkFBRSxPQUFPO1lBQ2pFLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLFNBQVM7SUFDdEMsQ0FBQztJQUVELGNBQWM7SUFDUCx1Q0FBZSxHQUF0QjtRQUVJLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDM0M7WUFDSSxNQUFNLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNqQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxvQkFBQztBQUFELENBblBBLEFBbVBDLElBQUE7Ozs7O0FDelBEOztHQUVHO0FBQ0g7SUFNSSxVQUFVO0lBQ1YsbUJBQVksRUFBYztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR0wsZ0JBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTs7Ozs7QUNqQkQ7Ozs7OztHQU1HO0FBQ0g7SUFHSTtJQUVBLENBQUM7SUFRTCx3QkFBQztBQUFELENBYkEsQUFhQyxJQUFBOzs7OztBQ3BCRCxnR0FBZ0c7QUFDaEcsOENBQXdDO0FBQ3hDLDhDQUF3QztBQUN4QywwREFBb0Q7QUFDcEQsZ0RBQTBDO0FBQzFDLDBDQUFvQztBQUNwQzs7RUFFRTtBQUNGO0lBYUk7SUFBYyxDQUFDO0lBQ1IsZUFBSSxHQUFYO1FBQ0ksSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDN0MsR0FBRyxDQUFDLG1CQUFtQixFQUFDLG1CQUFTLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsb0JBQW9CLEVBQUMsa0JBQVEsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQywrQkFBK0IsRUFBQyxtQkFBUyxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLHFCQUFxQixFQUFDLG1CQUFTLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsa0JBQWtCLEVBQUMsZ0JBQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFwQk0sZ0JBQUssR0FBUSxJQUFJLENBQUM7SUFDbEIsaUJBQU0sR0FBUSxHQUFHLENBQUM7SUFDbEIsb0JBQVMsR0FBUSxhQUFhLENBQUM7SUFDL0IscUJBQVUsR0FBUSxNQUFNLENBQUM7SUFDekIsaUJBQU0sR0FBUSxLQUFLLENBQUM7SUFDcEIsaUJBQU0sR0FBUSxNQUFNLENBQUM7SUFDckIscUJBQVUsR0FBSyxpQkFBaUIsQ0FBQztJQUNqQyxvQkFBUyxHQUFRLEVBQUUsQ0FBQztJQUNwQixnQkFBSyxHQUFTLEtBQUssQ0FBQztJQUNwQixlQUFJLEdBQVMsS0FBSyxDQUFDO0lBQ25CLHVCQUFZLEdBQVMsS0FBSyxDQUFDO0lBQzNCLDRCQUFpQixHQUFTLElBQUksQ0FBQztJQVUxQyxpQkFBQztDQXRCRCxBQXNCQyxJQUFBO2tCQXRCb0IsVUFBVTtBQXVCL0IsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDOzs7O0FDaENsQiwyQ0FBc0M7QUFDdEM7SUFDQztRQUNDLGdCQUFnQjtRQUNoQixJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsS0FBSyxFQUFFLG9CQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxLQUFLLEVBQUUsb0JBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLG9CQUFVLENBQUMsU0FBUyxDQUFDO1FBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLG9CQUFVLENBQUMsVUFBVSxDQUFDO1FBQzlDLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLG9CQUFVLENBQUMsaUJBQWlCLENBQUM7UUFFMUQsb0RBQW9EO1FBQ3BELElBQUksb0JBQVUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTTtZQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzlGLElBQUksb0JBQVUsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0YsSUFBSSxvQkFBVSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFN0IsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNySSxDQUFDO0lBRUQsOEJBQWUsR0FBZjtRQUNDLCtDQUErQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNDLFlBQVk7UUFDWixvQkFBVSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDRixXQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQUNELE9BQU87QUFDUCxJQUFJLElBQUksRUFBRSxDQUFDOzs7O0FDakNYLG1EQUFrRTtBQUVsRTs7O0dBR0c7QUFDSDtJQWdCSSxnQkFBWSxJQUFJLEVBQUMsSUFBVyxFQUFDLEtBQUs7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsU0FBUztJQUNELHFCQUFJLEdBQVosVUFBYSxJQUFJO1FBRWIsSUFBSTtRQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFVBQVU7SUFDSCw4QkFBYSxHQUFwQjtRQUVJLE9BQU87UUFDUCxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQ2I7WUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsNEJBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlFO2FBRUQ7WUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakQ7SUFDTCxDQUFDO0lBRUQsU0FBUztJQUNELDZCQUFZLEdBQXBCLFVBQXFCLElBQUk7UUFFcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsY0FBYztJQUNOLHlCQUFRLEdBQWhCLFVBQWlCLElBQUk7UUFFakIsSUFBSSxNQUFNLEdBQUcsTUFBTSxHQUFDLElBQUksR0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQ1g7WUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsWUFBWTtJQUNMLHVCQUFNLEdBQWIsVUFBYyxDQUFRLEVBQUMsQ0FBUTtRQUUzQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrRkFBa0Y7SUFDMUUsOEJBQWEsR0FBckI7UUFFSSxvQkFBb0I7UUFDcEIsSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBRSxHQUFHLEVBQ2pCO1lBQ0ksSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7YUFDSSxJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFFLElBQUksRUFDdkI7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzNCO2FBRUQ7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7U0FDL0I7UUFDRCw4QkFBOEI7UUFDOUIsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU07UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsVUFBVTtJQUNGLDZCQUFZLEdBQXBCO1FBRUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtQkFBbUI7SUFDWCwrQkFBYyxHQUF0QjtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsYUFBYTtRQUNiLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0JBQXNCO0lBQ2QsMEJBQVMsR0FBakI7UUFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFFLElBQUksRUFDbEI7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDNUI7YUFFRDtZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsWUFBWTtJQUNaLDBHQUEwRztJQUNsRyxnQ0FBZSxHQUF2QjtJQUdBLENBQUM7SUFHRCxVQUFVO0lBQ0YsK0JBQWMsR0FBdEI7UUFFSSxNQUFNO1FBQ04sSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxJQUFJLElBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQzdDO1lBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsNEJBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEM7UUFFRCxPQUFPO1FBQ1AsSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBRSxHQUFHLEVBQ2pCO1lBQ0ksU0FBUztZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDaEM7UUFFRCxRQUFRO1FBQ1IsSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxHQUFHLElBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxHQUFHLEVBQzlEO1lBQ0ksUUFBUTtZQUNSLElBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUM5QjtnQkFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLFFBQVE7Z0JBQ1IsNEJBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQy9CLFFBQVE7Z0JBQ1IscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDakM7U0FFSjtJQUNMLENBQUM7SUFFRCxTQUFTO0lBQ0QsOEJBQWEsR0FBckI7UUFFSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQXhMQSxBQXdMQyxJQUFBOzs7OztBQy9MRCxvQ0FBK0I7QUFFL0I7SUFBb0MsMEJBQU07SUFFdEMsZ0JBQVksSUFBSSxFQUFDLElBQVcsRUFBQyxLQUFLO2VBQzlCLGtCQUFNLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FMQSxBQUtDLENBTG1DLGdCQUFNLEdBS3pDOzs7OztBQ1BELG9DQUErQjtBQUUvQjtJQUFvQywwQkFBTTtJQUV0QyxnQkFBWSxJQUFJLEVBQUMsSUFBVyxFQUFDLEtBQUs7ZUFDOUIsa0JBQU0sSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMbUMsZ0JBQU0sR0FLekM7Ozs7O0FDUEQ7SUFBb0MsMEJBQVc7SUFFM0M7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0ksSUFBSSxXQUFXLEdBQUcsR0FBRyxHQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLE1BQU07UUFDakYsMkNBQTJDO1FBQzNDLElBQUcsV0FBVyxHQUFHLEdBQUc7WUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQWdCLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUMxRixJQUFJLENBQUMsS0FBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUUsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FaQSxBQVlDLENBWm1DLElBQUksQ0FBQyxNQUFNLEdBWTlDOzs7OztBQ1pELGtFQUE2RDtBQUM3RCxnREFBd0M7QUFFeEMsa0RBQTZDO0FBQzdDLDBEQUFxRDtBQUNyRCxzREFBaUQ7QUFDakQsa0RBQTZDO0FBQzdDLHNEQUFpRDtBQUVqRDs7R0FFRztBQUNIO0lBQXVDLDZCQUFjO0lBb0JqRDtlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQSxTQUFTO1FBQzdCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLFNBQVM7UUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUEsTUFBTTtRQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQSxRQUFRO0lBQzdCLENBQUM7SUFFRCxXQUFXO0lBQ0gsZ0NBQVksR0FBcEI7UUFFSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSwyQkFBaUIsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx1QkFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsVUFBVTtJQUNGLDRCQUFRLEdBQWhCO1FBRUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUQsWUFBWTtRQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsUUFBUTtRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsb0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9FLFFBQVE7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2RSxRQUFRO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkUsU0FBUztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsb0JBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ25GLFNBQVM7UUFDVCwyRkFBMkY7UUFDM0YsUUFBUTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsb0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxVQUFVO0lBQ0YsaUNBQWEsR0FBckI7UUFFSSxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQSxNQUFNO1FBQ2xGLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDJDQUEyQztJQUUzQyxVQUFVO0lBQ0YsMkJBQU8sR0FBZjtRQUVJLElBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUM5QixFQUFDLElBQUk7WUFDRCxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjthQUVELEVBQUMsSUFBSTtZQUNELHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQUVELFFBQVE7SUFDQSw2QkFBUyxHQUFqQjtJQUdBLENBQUM7SUFFRCxRQUFRO0lBQ0EsNEJBQVEsR0FBaEI7SUFHQSxDQUFDO0lBRUQsUUFBUTtJQUNBLDZCQUFTLEdBQWpCO1FBRUksSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUN4QixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNsQjtZQUNHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFELDZEQUE2RDtZQUN6RCxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzlGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDeEMsQ0FBQztJQUVELFVBQVU7SUFDRiw2QkFBUyxHQUFqQjtRQUVJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxVQUFVO0lBQ0YsMkJBQU8sR0FBZjtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBR0QsZUFBZTtJQUNQLCtCQUFXLEdBQW5CLFVBQW9CLElBQUk7UUFFcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDRDQUE0QztJQUM1QyxZQUFZO0lBQ0osNkJBQVMsR0FBakI7UUFFSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUEsVUFBVTtRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQSxPQUFPO0lBQ25ELENBQUM7SUFFTCxnQkFBQztBQUFELENBbkpBLEFBbUpDLENBbkpzQyxjQUFFLENBQUMsV0FBVyxHQW1KcEQ7Ozs7O0FDL0pEO0lBQXNDLDRCQUFXO0lBQzdDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtJQUdBLENBQUM7SUFHRCwwQkFBTyxHQUFQO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsZUFBQztBQUFELENBZkEsQUFlQyxDQWZxQyxJQUFJLENBQUMsTUFBTSxHQWVoRDs7Ozs7QUNmRDtJQUF1Qyw2QkFBVztJQUM5QztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELDRCQUFRLEdBQVI7SUFHQSxDQUFDO0lBR0QsMkJBQU8sR0FBUDtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FmQSxBQWVDLENBZnNDLElBQUksQ0FBQyxNQUFNLEdBZWpEOzs7OztBQ1pELElBQU8sS0FBSyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDeEIsSUFBYyxFQUFFLENBWWY7QUFaRCxXQUFjLEVBQUU7SUFBQyxJQUFBLE1BQU0sQ0FZdEI7SUFaZ0IsV0FBQSxNQUFNO1FBQ25CO1lBQXFDLG1DQUFLO1lBS3RDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2Qix3Q0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUNMLHNCQUFDO1FBQUQsQ0FWQSxBQVVDLENBVm9DLEtBQUssR0FVekM7UUFWWSxzQkFBZSxrQkFVM0IsQ0FBQTtJQUNMLENBQUMsRUFaZ0IsTUFBTSxHQUFOLFNBQU0sS0FBTixTQUFNLFFBWXRCO0FBQUQsQ0FBQyxFQVphLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQVlmO0FBQ0QsV0FBYyxFQUFFO0lBQ1o7UUFBaUMsK0JBQUs7UUFpRGxDO21CQUFlLGlCQUFPO1FBQUEsQ0FBQztRQUN2QixvQ0FBYyxHQUFkO1lBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQXREQSxBQXNEQyxDQXREZ0MsS0FBSyxHQXNEckM7SUF0RFksY0FBVyxjQXNEdkIsQ0FBQTtBQUNMLENBQUMsRUF4RGEsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBd0RmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWcge1xuICAgIC8qKuS6uuenjSAtIOaZrumAmuS6uiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQ09NTU9OX01BTiA6IHN0cmluZyA9IFwiY29tbW9uXCI7XG4gICAgLyoq5Lq656eNIC0g5bCP5YG3ICovXG4gICAgcHVibGljIHN0YXRpYyBST0JCRVJfTUFOIDogc3RyaW5nID0gXCJyb2JiZXJcIjtcbiAgICAvKirkurrnp40gLSDlnJ/ljKogKi9cbiAgICBwdWJsaWMgc3RhdGljIEJBTkRJVF9NQU4gOiBzdHJpbmcgPSBcImJhbmRpdFwiO1xuICAgIC8qKuS6uuenjSAtIOaYjuaYnyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU1RBUl9NQU4gOiBzdHJpbmcgPSBcInN0YXJcIjtcbiAgICAvKirkurrnp40gLSDnp5HlrablrrYgKi9cbiAgICBwdWJsaWMgc3RhdGljIFNDSUVOVElTVF9NQU4gOiBzdHJpbmcgPSBcInNjaWVudGlzdFwiO1xuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lu7rnrZFcbiAgICAvKirljLvpmaIgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhPU1BJVEFMIDogbnVtYmVyID0gMTtcbiAgICAvKirlhpvpmJ8gKi9cbiAgICBwdWJsaWMgc3RhdGljIEFSTVkgOiBudW1iZXIgPSAyO1xuICAgIC8qKuWGnOWcuiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgRkFSTTogbnVtYmVyID0gMztcbiAgICAvKirnp5HmioAgKi9cbiAgICBwdWJsaWMgc3RhdGljIFRFQ0hOT0xPR1k6IG51bWJlciA9IDQ7XG4gICAgLyoq5LqL5Lu25oi/IOaWsOmXu+aIvyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRfSE9VU0U6IG51bWJlciA9IDU7XG4gICAgLyoq55qH5a6rICovXG4gICAgcHVibGljIHN0YXRpYyBQQUxBQ0U6IG51bWJlciA9IDY7XG59IiwiLyoqXG4gKiDmlbDmja7kuK3lv4Mg5omA5pyJ55qE5pWw5o2uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlEYXRhe1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zXyA6IENvdW50cnlEYXRhID0gbmV3IENvdW50cnlEYXRhKCk7XG4gICAgLyoqKioqKioqKioqKioq5Li75pWw5o2uKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoq5Zu95a626LSi5pS/ICovXG4gICAgcHVibGljIGdvbGQgOiBudW1iZXIgPSAxMDAwMDtcbiAgICAvKirlm73lrrblubjnpo/luqYgKi9cbiAgICBwdWJsaWMgcG9wdWxhclN1cHBvcnQgOiBudW1iZXIgPSA5MDtcbiAgICAvKirlm73lrrbkurrlj6MgKi9cbiAgICBwdWJsaWMgcG9wdWxhdGlvbiA6IG51bWJlcj0xMDA7XG4gICAgLyoq5Zu95a6256eR5oqAICovXG4gICAgcHVibGljIHRlY2hub2xvZ3kgOiBudW1iZXIgPSA5MDtcbiAgICAvKirlm73lrrblo7DmnJsgKi9cbiAgICBwdWJsaWMgcHJlc3RpZ2UgOiBudW1iZXIgPSA5MDtcblxuICAgIC8qKioqKioqKioqKioqKirlia/mlbDmja4qKioqKioqKioqKioqKioqKi9cbiAgICAvLy0tLS0tLS0t5pmu6YCa5pWw5o2uXG4gICAgLyoq57Ku6aOf5Lqn6YePICovXG4gICAgcHVibGljIGdyYWluWWllbGQgOiBudW1iZXIgPSAxMDAwO1xuICAgIC8qKueyrumjn+a2iOiAlyAqL1xuICAgIHB1YmxpYyBncmFpbkNvbnN1bXB0aW9uIDogbnVtYmVyID0xMDAwO1xuXG4gICAgLy8tLS0tLS0tLeS6i+S7tuaVsOaNrlxuICAgIC8qKueYn+eWqyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8qL1xuICAgIHB1YmxpYyBwZXN0IDogbnVtYmVyID0gMDtcbiAgICAvKirlnLDpnIcgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfICovXG4gICAgcHVibGljIG5hdHVyYWxEaXNhc3RlciA6IG51bWJlciA9IDA7XG4gICAgLyoq5oiY5LmxICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyovXG4gICAgcHVibGljIHdhciA6IG51bWJlciA9IDA7XG5cbiAgICAvLy0tLS0tLS0t6IGM5Lia5Lq65pWwXG4gICAgcHVibGljIGFycl9QZW9wbGUgOiBBcnJheTxzdHJpbmc+ID0gW1wiY29tbW9uXCIsXCJzY2llbnRpc3RcIixcInN0YXJcIixcImJhbmRpdFwiLFwicm9iYmVyXCJdO1xuICAgIC8qKuaZrumAmuS6uiBBICDmma7pgJrkurrkuK3kvJrkuqfnlJ/ljLvnlJ8g6K2m5a+fIOetieato+W4uOiBjOS4miovXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDkyO1xuICAgIC8qKuenkeWtpuWutiBTU1MqL1xuICAgIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAzO1xuICAgIC8qKuaYjuaYnyBTUyovXG4gICAgcHVibGljIHN0YXIgOiBudW1iZXIgPSAzO1xuICAgIC8qKuWcn+WMqiAtUyAqL1xuICAgIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAxO1xuICAgIC8qKuebl+i0vCAtQSAqL1xuICAgIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAxO1xuICAgIFxuICAgIC8vLS0tLS0tLS3ln47pl6hcbiAgICAvKirpl6jmmK/lkKbmiZPlvIAqL1xuICAgIHB1YmxpYyBpc0Rvb3JPcGVuIDogYm9vbGVhbj10cnVlO1xuICAgIC8qKuS6uuWPo+i/m+WFpemHjyAqL1xuICAgIHB1YmxpYyBlbnRlclBlb3BsZSA6IG51bWJlciA9IDEwMDtcbiAgICAvKirkurrlj6PmtYHlh7rph48gKi9cbiAgICBwdWJsaWMgb3V0ZXJQZW9wbGUgOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq562b5p+l6IO95YqbIOWQr+WKqOeJueauiumXqOeahOaXtuWAmSAg562b5p+l6IO95Yqb55Sf5pWIKi9cbiAgICBwdWJsaWMgcHJlcGFyYXRpb24gOiBudW1iZXIgPSAwLjU7XG4gICAgLyoq54m55q6K6ZeoIOetm+afpSAxLemYsuatoui/m+WFpSAgIDIt6YKA6K+36L+b5YWlKi9cbiAgICAvLyBwdWJsaWMga2VlcFNlbGVjdCA6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKuaZrumAmuS6uuS4rSDljLvnlJ/nmoTljaDmr5QqL1xuICAgIHB1YmxpYyBwZXJjZW50RG9jdG9yIDogbnVtYmVyID0gMC4yO1xuICAgIC8qKuaZrumAmuS6uuenjSDorablr5/ljaDmr5QgKi9cbiAgICBwdWJsaWMgcGVyY2VudFBvbGljIDogbnVtYmVyID0gMC4xO1xuICAgIC8qKuaZrumAmuS6uuenjSDllYbkurrnmoTljaDmr5QgKi9cbiAgICBwdWJsaWMgcGVyY2VudFNob3BlciA6IG51bWJlciA9IDAuNjtcbiAgICAvKirmuLjmiYvlpb3pl7IgKi9cbiAgICBwdWJsaWMgcGVyY2VudE5vdGhpbmcgOiBudW1iZXIgPSAwLjE7XG5cblxuICAgIC8qKua1geWKqOavlOS+iyAqL1xuICAgIHB1YmxpYyBwZXJjZW50Om51bWJlcj0xO1xuXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cblxuICAgIG9uRW5hYmxlKCl7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bkurrlj6PmtYHph48gOlxuICAgICAqIHJldHVybiDov5vlhaUgLyDlh7rljrtcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0X1Blb3BsZU1vdmUoKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50ZXJQZW9wbGUvdGhpcy5vdXRlclBlb3BsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bkurrnp43mr5TkvotcbiAgICAgKiBAcGFyYW0gdHlwZSDkurrnp41cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0X1Byb2Zlc3Npb25QZXJjZW50KHR5cGU6c3RyaW5nKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgaWYodGhpc1t0eXBlXSA9PT0gdW5kZWZpbmVkKSBjb25zb2xlLmxvZyhcIuS4jeWtmOWcqOivpeS6uuenjVwiKTtcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpc1t0eXBlXS8odGhpcy5wb3B1bGF0aW9uKTtcbiAgICB9XG5cbiAgICAvKirmlbDmja7nu5PnrpcgIOe7vOWQiOiuoeeul+aJgOacieeahOaVsOWAvCovXG4gICAgLy8gcHJpdmF0ZSBcblxuXG5cbn1cblxuLyoq5aSW5Z+OICovXG5leHBvcnQgY2xhc3MgT3V0Q291bnRyeURhdGF7XG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogT3V0Q291bnRyeURhdGEgPSBuZXcgT3V0Q291bnRyeURhdGEoKTtcbiAgICAvKioqKioqKioqKioqKirkuLvmlbDmja4qKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKirmnIDlpKflpJbln47lrrnnurPmlbDph48gKi9cbiAgICBwdWJsaWMgbWF4Q291bnQgOiBudW1iZXI9NTA7XG4gICAgLyoq5b2T5YmN5aSW5Z+O5Lq65Y+j5pWwICovXG4gICAgcHVibGljIG91dENvdW50Om51bWJlcj0wO1xuICAgIC8qKuS6uua7nueVmeaXtumXtCAqL1xuICAgIHB1YmxpYyBsaW1pdFRpbWU6bnVtYmVyPTUwO1xufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xuXG4vKipcbiAqIOa2iOaBr+ahhiDpgJrnlKhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXNnRGlhbG9nIGV4dGVuZHMgdWkuRGlhbG9nLkN1cnJlbnREaWFsb2dVSXtcbiAgICAvKirnsbvlnosgKi9cbiAgICBwcml2YXRlIHR5cGUgOiBudW1iZXIgO1xuICAgIC8qKue8k+WKqCAqL1xuICAgIC8vIHByaXZhdGUgc2hvd1R3ZWVuIDogTGF5YS5Ud2VlbjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKuWIneWni+WMliAqL1xuICAgIHB1YmxpYyBzaG93TXNnKHR5cGU6bnVtYmVyKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlRGlhbG9nKTsgICAgICAgIFxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNoYW5nZUltZygpO1xuICAgICAgICB0aGlzLmNoYW5nZVRpdGxlKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlV29yZCgpOyBcbiAgICAgICAgdGhpcy5tc2dCb2R5LnggPSAoOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCktMTE2MykvMjsgICAgICAgXG4gICAgICAgIHRoaXMubXNnQm9keS55ID0gLTU1NzsgICAgICAgXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5tc2dCb2R5LHt5OjB9LDIwMCxMYXlhLkVhc2UuYmFja091dCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuaNouWbviAqL1xuICAgIHByaXZhdGUgY2hhbmdlSW1nKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBzd2l0Y2godGhpcy50eXBlKVxuICAgICAgICB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuaNouagh+mimCAqL1xuICAgIHByaXZhdGUgY2hhbmdlVGl0bGUoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuaWh+Wtl+i9veWFpSAqL1xuICAgIHByaXZhdGUgY2hhbmdlV29yZCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5YWz6ZetICovXG4gICAgcHVibGljIGNsb3NlRGlhbG9nKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vZmYoTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuY2xvc2VEaWFsb2cpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLm1zZ0JvZHkse3k6LTU1N30sMjAwLExheWEuRWFzZS5iYWNrT3V0LExheWEuSGFuZGxlci5jcmVhdGUodGhpcyx0aGlzLmNsb3NlT3ZlcikpOyAgICAgICAgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbG9zZU92ZXIoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlOyAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1BlcmZlYi9QZW9wbGVcIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IENvdW50cnlEYXRhLCB7IE91dENvdW50cnlEYXRhIH0gZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBDb21tb24gZnJvbVwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vblwiXG5pbXBvcnQgUm9iYmVyIGZyb21cIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9Sb2JiZXJcIlxuLyoqXG4gKiDkurog566h55CGXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZU1hbmFnZXIge1xuICAgIC8qKuinhuWbviovXG4gICAgcHJpdmF0ZSB2aWV3OmFueTsgXG4gICAgLyoq5qiq5Z2Q5qCHICovXG4gICAgcHJpdmF0ZSBYOm51bWJlcjtcbiAgICAvKirnurXlnZDmoIcgKi9cbiAgICBwcml2YXRlIFk6bnVtYmVyO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5aKZ5YaFXG4gICAgLyoq5bey55Sf5oiQ55qE5Lq656eNICAwIOaZrumAmiAgIDHnp5HlrablrrYgIDLmmI7mmJ8gM+Wcn+WMqiA055uX6LS8Ki9cbiAgICBwcml2YXRlIGFscmVhZHlDcmVhdGUgOiBBcnJheTxudW1iZXI+ID0gWzAsMCwwLDAsMF07XG4gICAgLyoq55Sf5oiQ6Ze06ZqU6K6h5pe25ZmoICovXG4gICAgcHJpdmF0ZSBjb3VudFRpbWUgOiBudW1iZXIgPSAwO1xuICAgIC8qKueUn+S6p+aXtumXtOmXtOmalCAqL1xuICAgIHByaXZhdGUgY291bnRUaW1lXyA6IG51bWJlciA9IDUwMDtcbiAgICBjb25zdHJ1Y3Rvcih2aWV3KVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3PXZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5byA5ZCv55Sf5oiQ5bel5Y6CXG4gICAgICog55Sf5oiQ5Lq6IFxuICAgICAqIOeUn+aIkOS6uueahOS9jee9rlxuICAgICAqIOeUn+S6p+S6uueahHR5cGUg77yaIOWfjumHjOS6ui/ln47lpJbkurog6YC76L6R5YiG5byAXG4gICAgICovXG4gICAgLyoq5byA5ZCv55Sf5oiQ5bel5Y6CICovXG4gICAgcHVibGljIG9wZW5QZW9wbGVGYWN0b3J5KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmNyZWF0ZVBlb3BsZSgpO1xuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uiAqL1xuICAgIHB1YmxpYyBjcmVhdGVQZW9wbGUoKTp2b2lkXG4gICAge1xuICAgICAgICBsZXQgcGVvcGxlO1xuICAgICAgICAvKirnlJ/miJDkuI3lkIzkurrnp43nmoTlh6DnjocgKi9cbiAgICAgICAgbGV0IHJhbmRvbT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKTtcbiAgICAgICAgLy/mma7pgJrkurpcbiAgICAgICAgaWYocmFuZG9tPj0wJiZyYW5kb208ODApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJjb21tb25cIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IENvbW1vbih0aGlzLnZpZXcsR2FtZUNvbmZpZy5DT01NT05fTUFOLHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5bCP5YG3XG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj04MCYmcmFuZG9tPDkwKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwicm9iYmVyXCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuUk9CQkVSX01BTix0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+Wcn+WMqlxuICAgICAgICBlbHNlIGlmKHJhbmRvbT49OTAmJnJhbmRvbTw5NilcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcImJhbmRpdFwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgUm9iYmVyKHRoaXMudmlldyxHYW1lQ29uZmlnLkJBTkRJVF9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/np5HlrablrrZcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PTk2JiZyYW5kb208OTkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJzY2llbnRpc3RcIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFJvYmJlcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOLHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5piO5pifXG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInN0YXJcIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFJvYmJlcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5TVEFSX01BTix0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwZW9wbGUudmlzaWJsZT10cnVlO1xuICAgICAgICB0aGlzLmdldFBvcygpO1xuICAgICAgICBwZW9wbGUuc2V0UG9zKHRoaXMuWCx0aGlzLlkpO1xuICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpO1xuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjM7XG4gICAgICAgIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQ8T3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xuICAgICAgICB9XG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQrKztcbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurrnmoTkvY3nva4gKi9cbiAgICBwdWJsaWMgZ2V0UG9zKCk6YW55XG4gICAge1xuICAgICAgICBsZXQgdHlwZU51bT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMyk7XG4gICAgICAgIHN3aXRjaCh0eXBlTnVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy/lnKhB6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPTA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8v5ZyoQui+ueeVjFxuICAgICAgICAgICAgICAgIHRoaXMuWD1NYXRoLnJhbmRvbSgpKjIwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgLy/lnKhD6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPTIwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirnlYzpmZDmo4DmtYsgKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBcbiAgICBcbiAgICBwdWJsaWMgY2hlY2tQZXJjZW50KHBlb3BsZSx0eXBlOnN0cmluZyk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/mtYHliqjmr5Tkvovmo4DmtYtcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5wZXJjZW50PDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5Yib5bu65aKZ5YaF5Lq6ICovXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZV9Jbm5lcigpIDogdm9pZFxuICAgIHtcbiAgICAgICBsZXQgcmFuZG9tU3RyaW5nIDtcbiAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXG4gICAgICAgbGV0IGFycl9QZW9wbGUgPSBDb3VudHJ5RGF0YS5pbnNfLmFycl9QZW9wbGU7XG4gICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgZm9yKGxldCBpID0gMDtpPGFycl9QZW9wbGUubGVuZ3RoO2krKylcbiAgICAgICB7XG4gICAgICAgICAgICBudW1iZXIgKz0gQ291bnRyeURhdGEuaW5zXy5nZXRfUHJvZmVzc2lvblBlcmNlbnQoYXJyX1Blb3BsZVtpXSk7XG4gICAgICAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICB9XG4gICAgICAgY29uc29sZS5sb2coYXJyUGVyY2VudCk7XG4gICAgICAgTGF5YS50aW1lci5sb29wKDEsdGhpcyx0aGlzLmdldFJhbmRvbSxbYXJyUGVyY2VudF0pO1xuICAgIH1cblxuICAgIC8qKueUn+S6p+S6uiAqL1xuICAgIHByaXZhdGUgY3JlYXRlX0lubmVyKHJhbmRvbVN0cmluZykgOiB2b2lkXG4gICAge1xuICAgICAgICBpZihyYW5kb21TdHJpbmcgPT0gXCJub25lXCIpIHJldHVybjtcbiAgICAgICAgbGV0IHBlb3BsZTtcbiAgICAgICAgLy/nlJ/kuqfkurrnp41cbiAgICAgICAgc3dpdGNoKHJhbmRvbVN0cmluZylcbiAgICAgICAgeyAgICAvKirlt7LnlJ/miJDnmoTkurrnp40gIDAg5pmu6YCaICAgMeenkeWtpuWutiAgMuaYjuaYnyAz5Zyf5YyqIDTnm5fotLwqL1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkNPTU1PTl9NQU46ICAgICBcbiAgICAgICAgICAgICAgICBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxyZWFkeUNyZWF0ZVswXSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlJPQkJFUl9NQU46Ly/nm5fotLxcbiAgICAgICAgICAgICAgICBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxyZWFkeUNyZWF0ZVs0XSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkJBTkRJVF9NQU46Ly/lnJ/ljKpcbiAgICAgICAgICAgICAgICBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxyZWFkeUNyZWF0ZVszXSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNUQVJfTUFOOi8v5piO5pifXG4gICAgICAgICAgICAgICAgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFscmVhZHlDcmVhdGVbMl0rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOOi8v56eR5a2m5a62XG4gICAgICAgICAgICAgICAgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFscmVhZHlDcmVhdGVbMV0rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZihwZW9wbGUgPT09IHVuZGVmaW5lZCB8fCBwZW9wbGUgPT09IG51bGwpIHtjb25zb2xlLmxvZyhcIuayoeacieeUn+aIkOS6uuenje+8geenjeexuzpcIiArIHJhbmRvbVN0cmluZyk7cmV0dXJuO31cbiAgICAgICAgdGhpcy5jcmVhdGVQb3MocGVvcGxlKTsgXG4gICAgfVxuXG4gICAgLyoq55Sf5Lqn5L2N572uICovXG4gICAgcHJpdmF0ZSBjcmVhdGVQb3MocGVvcGxlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBob3VzZU5vZGUgPSAodGhpcy52aWV3IGFzIExheWEuU3ByaXRlKS5nZXRDaGlsZEJ5TmFtZSgnaG91c2UnKTtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBob3VzZU5vZGUuX2NoaWxkcmVuLmxlbmd0aC8xMDA7XG4gICAgICAgIGxldCBob3VzZSA7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8IGhvdXNlTm9kZS5fY2hpbGRyZW4ubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwZXJjZW50KjEwMCk7XG4gICAgICAgICAgICBob3VzZSA9IGhvdXNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvdXNlX1wiK251bWJlcik7XG4gICAgICAgICAgICBpZihob3VzZSAhPT0gdW5kZWZpbmVkICYmIGhvdXNlICE9PSBudWxsKSAgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlLnNldFBvcyhob3VzZS54LGhvdXNlLnkpOyAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirojrflj5bpmo/mnLrkurrnp40gKi9cbiAgICBwcml2YXRlIGdldFJhbmRvbShhcnJQZXJjZW50KSA6IHN0cmluZ1xuICAgIHtcbiAgICAgICAgaWYodGhpcy5jb3VudFRpbWUgPD0gdGhpcy5jb3VudFRpbWVfKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvdW50VGltZSsrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRUaW1lXyA9IE1hdGgucmFuZG9tKCkqMyoxMDA7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi55Sf5oiQ6Ze06ZqUOlwiICsgTWF0aC5mbG9vcih0aGlzLmNvdW50VGltZS8xMDApICsgXCJzXCIpO1xuICAgICAgICB0aGlzLmNvdW50VGltZSA9IDA7XG5cbiAgICAgICAgbGV0IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGxldCBwZXJzb24gPSBcIlwiO1xuICAgICAgICBsZXQgaW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyUGVyY2VudC5sZW5ndGggO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoYXJyUGVyY2VudFtpXSA8PSBudW1iZXIgJiYgbnVtYmVyIDwgYXJyUGVyY2VudFtpKzFdKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlcnNvbiA9IENvdW50cnlEYXRhLmluc18uYXJyX1Blb3BsZVtpXTtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBlcnNvbik7XG4gICAgICAgIC8v5Yik5pat5Lq65piv5ZCm6L+Y6IO955Sf5oiQXG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpe2NvbnNvbGUubG9nKFwi5qaC546H6K6h566X5Ye66ZSZXCIpO3JldHVybjt9XG4gICAgICAgIGlmKHRoaXMuYWxyZWFkeUNyZWF0ZVtpbmRleF0gPT0gQ291bnRyeURhdGEuaW5zX1twZXJzb25dKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLmdldEFscmVhZENyZWF0ZSgpID09IENvdW50cnlEYXRhLmluc18ucG9wdWxhdGlvbikgcmV0dXJuO1xuICAgICAgICAgICAgcGVyc29uID0gdGhpcy5nZXRSYW5kb20oYXJyUGVyY2VudCk7ICAgICBcbiAgICAgICAgfVxuICAgICAgIHRoaXMuY3JlYXRlX0lubmVyKHBlcnNvbik7Ly/nlJ/kuqfkurrnp40gICBcbiAgICB9XG5cbiAgICAvKuiOt+WPluW3sueUn+aIkOS6uuWPo+eahOaVsOmHjyovXG4gICAgcHVibGljIGdldEFscmVhZENyZWF0ZSgpIDogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmFscmVhZHlDcmVhdGUubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyICs9dGhpcy5hbHJlYWR5Q3JlYXRlW2ldXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICB9XG59IiwiaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XG5cbi8qKlxuICogVUnnrqHnkIblmahcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2Vye1xuICAgIC8qKuaVsOaNrueuoeeQhuWZqCAqL1xuICAgIC8vIHB1YmxpYyBzdGF0aWMgZGF0YU1hbmFnZXIgOiBEYXRhTWFuYWdlcjtcbiAgICAvKipVSSBzcHJpdGUgKi9cbiAgICBwcml2YXRlIFVpU3ByaXRlIDogTGF5YS5TcHJpdGU7XG5cbiAgICAvKirovb3lhaXmlbDmja4gKi9cbiAgICBjb25zdHJ1Y3Rvcih1aTpMYXlhLlNwcml0ZSl7XG4gICAgICAgIHRoaXMuVWlTcHJpdGUgPSB1aTtcbiAgICB9XG4gICAgXG4gICAgXG59IiwiLyoqXG4gKiDkuovku7blj5HnlJ/nrqHnkIblmahcbiAqIFxuICogXG4gKiDnlJ/miJDkuovku7bjgIFcbiAqIOW9seWTjeS6uuWPo+a1geWKqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZEV2ZW50TWFuYWdlciB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICAvKirkuovku7bpooTmiqXliLAgKi9cbiAgICBcblxuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xuXG4gICAgXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBNc2dEaWFsb2cgZnJvbSBcIi4vQ29yZS9Nc2dEaWFsb2dcIlxuaW1wb3J0IE9wZW5HYW1lIGZyb20gXCIuL1NjcmlwdC9PcGVuR2FtZVwiXG5pbXBvcnQgR2FtZVdvcmxkIGZyb20gXCIuL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkXCJcbmltcG9ydCBPcGVuU3RvcnkgZnJvbSBcIi4vU2NyaXB0L09wZW5TdG9yeVwiXG5pbXBvcnQgQ2VudGVyIGZyb20gXCIuL1NjcmlwdC9DZW50ZXJcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9MTQ0MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTkwMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWRoZWlnaHRcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cIlN0YXJ0R2FtZS5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcbiAgICAgICAgcmVnKFwiQ29yZS9Nc2dEaWFsb2cudHNcIixNc2dEaWFsb2cpO1xuICAgICAgICByZWcoXCJTY3JpcHQvT3BlbkdhbWUudHNcIixPcGVuR2FtZSk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzXCIsR2FtZVdvcmxkKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5TdG9yeS50c1wiLE9wZW5TdG9yeSk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9DZW50ZXIudHNcIixDZW50ZXIpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcbmNsYXNzIE1haW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcblxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWU7XG5cblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XG5cdH1cblxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xuXHR9XG5cblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cblx0XHRHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XG5cdH1cbn1cbi8v5r+A5rS75ZCv5Yqo57G7XG5uZXcgTWFpbigpO1xuIiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgQ291bnRyeURhdGEsIHsgT3V0Q291bnRyeURhdGEgfSBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuXG4vKipcbiAqIFxuICog5Lq656eN54i257G7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZSB7XG4gICAgLyoq5Zy65pmvKi9cbiAgICBwcml2YXRlIHZpZXcgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirnsr7ngbUgKi9cbiAgICBwdWJsaWMgc3AgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirmqKrlnZDmoIfnp7vliqjpgJ/luqYgKi9cbiAgICBwcml2YXRlIGRpclg6bnVtYmVyO1xuICAgIC8qKue6teWdkOagh+enu+WKqOmAn+W6piAqL1xuICAgIHByaXZhdGUgZGlyWTpudW1iZXI7XG4gICAgLyoq5aKZ5YaF5Lq66L+Y5piv5aKZ5aSW5Lq6ICovXG4gICAgcHVibGljIGlzT3V0IDogYm9vbGVhbjtcbiAgICAvKirkurrlsZ7mgKcgKi9cbiAgICBwdWJsaWMgdHlwZTpzdHJpbmc7XG4gICAgLyoq5Lq655qE5pyd5ZCRICovXG4gICAgcHVibGljIHRvd2FyZCA6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmlzT3V0ID0gaXNPdXQ7XG4gICAgICAgIHRoaXMudHlwZT10eXBlO1xuICAgICAgICB0aGlzLmluaXQodHlwZSk7XG4gICAgICAgIHRoaXMudG93YXJkID0ge3g6MCx5OjB9O1xuICAgIH1cblxuICAgIC8qKuWIneWni+WMliAqL1xuICAgIHByaXZhdGUgaW5pdCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v5Yib5bu6XG4gICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKHR5cGUpO1xuICAgIH1cblxuICAgIC8qKuW8gOWni+ihjOWKqCAqL1xuICAgIHB1YmxpYyBvcGVuQmVoYXZpb3VyKCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/ov5DooYzkuobpgLvovpFcbiAgICAgICAgaWYodGhpcy5pc091dCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGVvcGxlX1Bvc091dCgpO1xuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMuY2hlY2tMaW1pdF9PdXQpO1xuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoT3V0Q291bnRyeURhdGEuaW5zXy5saW1pdFRpbWUqNjAsdGhpcyx0aGlzLmxpbWl0VGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBlb3BsZV9Qb3NJbm5lcigpO1xuICAgICAgICAgICAgTGF5YS50aW1lci5sb29wKDE2LHRoaXMsdGhpcy5wZW9wbGVfUG9zSW5uZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq55Sf5oiQ5Lq6ICovXG4gICAgcHJpdmF0ZSBjcmVhdGVQZW9wbGUodHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICAgdGhpcy5jcmVhdGVTcCh0eXBlKTtcbiAgICB9XG5cbiAgICAvKirliJvlu7pTcHJpdGUgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNwKHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGltZ1VybCA9IFwibWFwL1wiK3R5cGUrXCIucG5nXCI7XG4gICAgICAgIGlmKCF0aGlzLnNwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNwID0gbmV3IExheWEuU3ByaXRlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5zcCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcC5sb2FkSW1hZ2UoaW1nVXJsKTtcbiAgICAgICAgdGhpcy5zcC5waXZvdCh0aGlzLnNwLndpZHRoLzIsdGhpcy5zcC5oZWlnaHQvMik7ICAgICAgICBcbiAgICB9XG5cbiAgICAvKirorr7nva7liJ3lp4vkvY3nva4gKi9cbiAgICBwdWJsaWMgc2V0UG9zKHg6bnVtYmVyLHk6bnVtYmVyKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNwLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwLnggPSB4O1xuICAgICAgICB0aGlzLnNwLnkgPSB5O1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKirlopnlpJbkurrooYzliqjpgLvovpEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHByaXZhdGUgcGVvcGxlX1Bvc091dCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy/nu5nkuojpmo/mnLrmlrnlkJHvvIzmlrnlkJHnlKgoLTF+MSnooajnpLpcbiAgICAgICAgaWYodGhpcy5zcC54PD05MDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnNwLng+PTExMDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCkqMi0xO1xuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCkqMi0xO1xuICAgICAgICB9XG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze077yM5Zyo5q2k5pe26Ze05YaF56e75YqoLOmaj+acuuaXtumXtOWcqCgyLDgp5Lit6YCJ5oupXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNisyO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jbG9zZU1vdmVUaW1lcik7XG4gICAgICAgIC8v5byA5ZCv56e75YqoXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgfVxuICAgIFxuICAgIC8qKuWNleS9jeW4p+enu+WKqCovXG4gICAgcHJpdmF0ZSBtb3ZlRGlzdGFuY2UoKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNwLngrPXRoaXMuZGlyWDtcbiAgICAgICAgdGhpcy5zcC55Kz10aGlzLmRpclk7XG4gICAgfVxuXG4gICAgLyoq5YWz6Zet56e75Yqo5a6a5pe25Zmo77yM5byA5ZCv5Y6f5Zyw5LyR5oGvKi9cbiAgICBwcml2YXRlIGNsb3NlTW92ZVRpbWVyKCk6dm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcbiAgICAgICAgLy/kvJHmga/ml7bpl7Tnu5PmnZ/lkI7nu6fnu63np7vliqhcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo2KzI7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLnBlb3BsZV9Qb3NPdXQpO1xuICAgIH1cbiAgICBcbiAgICAvKirmu57nlZnml7bpl7TvvIzoi6XotoXov4fml7bpl7TvvIzlsLHnprvlvIDlpJbln44gKi9cbiAgICBwcml2YXRlIGxpbWl0VGltZSgpOnZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XG4gICAgICAgIGlmKHRoaXMuc3AueDw9MTAwMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kaXJYPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLmRpclk9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMuY2hlY2tMaW1pdF9PdXQpO1xuICAgIH1cblxuICAgIC8qKuWimeWGheS6uuihjOWKqOmAu+i+kSovXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5aKZ5YaF5Lq66KGM5Yqo6YC76L6RKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHJpdmF0ZSBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG4gICAgXG5cbiAgICAvKirnorDmkp7mo4DmtYsgKi9cbiAgICBwcml2YXRlIGNoZWNrTGltaXRfT3V0KCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/ovrnnlYzmo4DmtYtcbiAgICAgICAgaWYodGhpcy5zcC54PC01fHx0aGlzLnNwLng+MjAwNXx8dGhpcy5zcC55PC01KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUoKTtcbiAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKHRoaXMudHlwZSx0aGlzKTtcbiAgICAgICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5oqk5Z+O5rKz5qOA5rWLXG4gICAgICAgIGlmKHRoaXMuc3AueT49MzkwKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+mHjeaWsOe7meS4gOS4quS9jeenu1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5Z+O6Zeo5Yy65Z+f5qOA5rWLXG4gICAgICAgIGlmKHRoaXMuc3AueD45MzImJnRoaXMuc3AueDwxMDY4JiZ0aGlzLnNwLnk+MzUwJiZ0aGlzLnNwLnk8MzkwKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+WfjumXqOaYr+WQpuaJk+W8gFxuICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdG9yeVBlb3BsZSgpO1xuICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKHRoaXMudHlwZSx0aGlzKTtcbiAgICAgICAgICAgICAgICAvL+WfjuWkluS6uuWPoy0xXG4gICAgICAgICAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudC0tO1xuICAgICAgICAgICAgICAgIC8v5Zu95a625Lq65Y+jKzFcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5Lq65raI5aSxICovXG4gICAgcHJpdmF0ZSBkZXN0b3J5UGVvcGxlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNwLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiBleHRlbmRzIFBlb3BsZXtcblxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xuICAgIH1cbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvYmJlciBleHRlbmRzIFBlb3BsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VudGVyIGV4dGVuZHMgTGF5YS5TY3JpcHR7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIGxldCBzY3JlZW5XaWR0aCA9IDkwMC8oTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodC9MYXlhLkJyb3dzZXIuY2xpZW50V2lkdGgpOy8v5bGP5bmV6auY5bqmXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiArIHRoaXMuc2NyZWVuV2lkdGgpO1xuICAgICAgICBpZihzY3JlZW5XaWR0aCA8IDgwMCkgKHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lTmFtZVwiKSBhcyBMYXlhLkxhYmVsKS5mb250U2l6ZSA9IDEyNTtcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5TcHJpdGUpLnggPSAoc2NyZWVuV2lkdGgtIDY2NykvMjsgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IFdvcmxkRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1dvcmxkRXZlbnRNYW5hZ2VyXCI7XG5pbXBvcnQgeyB1aSB9IGZyb20gXCIuLi8uLi91aS9sYXlhTWF4VUlcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9VSU1hbmFnZXJcIjtcbmltcG9ydCBQZW9wbGVNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1Blb3BsZU1hbmFnZXJcIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi8uLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi4vLi4vQ29yZS9Nc2dEaWFsb2dcIjtcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuXG4vKipcbiAqIOS4lueVjOeuoeeQhuWZqOiEmuacrFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV29ybGQgZXh0ZW5kcyB1aS5HYW1lV29ybGRVSXtcbiAgICAvKipEYXRhTWFuYWdlciAg5Y2V5L6LICovXG4gICAgLyoq5LqL5Lu25Y+R55Sf5ZmoICovXG4gICAgcHJpdmF0ZSB3b3JsZEV2ZW50TWFuYWdlciA6IFdvcmxkRXZlbnRNYW5hZ2VyO1xuICAgIC8qKuS6uuexu+euoeeQhuWZqCovXG4gICAgcHJpdmF0ZSBwZW9wbGVNYW5hZ2VyIDogUGVvcGxlTWFuYWdlcjtcbiAgICAvKipVSeeuoeeQhuWZqCAqL1xuICAgIHByaXZhdGUgdWlNYW5hZ2VyIDogVUlNYW5hZ2VyO1xuICAgIC8qKua2iOaBr+mAmueUqOahhiAqL1xuICAgIHByaXZhdGUgbXNnRGlhbG9nIDogTXNnRGlhbG9nO1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoq5bGP5bmV5a695bqmICovXG4gICAgcHJpdmF0ZSBzY3JlZW5XaWR0aCA6IG51bWJlcjtcbiAgICAvKirpvKDmoIfmmK/lkKbmjInkuIsgKi9cbiAgICBwcml2YXRlIGlzRG93biA6IGJvb2xlYW47XG4gICAgLyoq6byg5qCH54K56K6w5b2VICovXG4gICAgcHJpdmF0ZSBtb3VzZVBvcyA6IGFueTtcblxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmdhbWVEYXRhSW5pdCgpOy8v5ri45oiP5Y+Y6YeP5Yid5aeL5YyWXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTsvL+e7meahpea3u+WKoOS6i+S7tiBcbiAgICAgICAgdGhpcy5zY3JlZW5TZXR0aW5nKCk7Ly/lsY/luZXlsYXkuK1cbiAgICAgICAgdGhpcy5nYW1lU3RhcnQoKTsvL+a4uOaIj+a1geeoi+W8gOWni1xuICAgIH1cblxuICAgIC8qKuaVsOaNruWIneWni+WMliAqL1xuICAgIHByaXZhdGUgZ2FtZURhdGFJbml0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLndvcmxkRXZlbnRNYW5hZ2VyID0gbmV3IFdvcmxkRXZlbnRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMucGVvcGxlTWFuYWdlciA9IG5ldyBQZW9wbGVNYW5hZ2VyKHRoaXMuc3Bfc2NlbmUpO1xuICAgICAgICB0aGlzLnVpTWFuYWdlciA9IG5ldyBVSU1hbmFnZXIodGhpcy5zcF9VSSk7XG4gICAgICAgIHRoaXMubXNnRGlhbG9nID0gbmV3IE1zZ0RpYWxvZygpOyAgICAgIFxuICAgICAgICB0aGlzLm1vdXNlUG9zID0ge307XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoq5re75Yqg5LqL5Lu2ICovXG4gICAgcHJpdmF0ZSBhZGRFdmVudCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sdGhpcyx0aGlzLm1vdXNlRG93bik7XG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9VUCx0aGlzLHRoaXMubW91c2VVcCk7XG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9NT1ZFLHRoaXMsdGhpcy5tb3VzZU1vdmUpO1xuICAgICAgICAvL+e7memXqOW4rueCueeCueWHu+S6iyAgIFxuICAgICAgICB0aGlzLnNwX2Rvb3Iub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuZG9vckN0cik7XG4gICAgICAgIC8v5Yy76aaG5LqL5Lu257uR5a6aXG4gICAgICAgIHRoaXMuaG9zcGl0YWwub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuSE9TUElUQUxdKTtcbiAgICAgICAgLy/lhpvpmJ/kuovku7bnu5HlrppcbiAgICAgICAgdGhpcy5hcm15Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkFSTVldKTtcbiAgICAgICAgLy/nsq7ku5Pkuovku7bnu5HlrppcbiAgICAgICAgdGhpcy5mYXJtLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkZBUk1dKTsgICAgICAgIFxuICAgICAgICAvL+enkeaKgOmmhuS6i+S7tue7keWumlxuICAgICAgICB0aGlzLnRlY2hub2xvZ3kub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuVEVDSE5PTE9HWV0pOyAgICAgICAgXG4gICAgICAgIC8v5paw6Ze754K55LqL5Lu257uR5a6aXG4gICAgICAgIC8vdGhpcy5ldmVudEhvdXNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkVWRU5UX0hPVVNFXSk7ICAgICBcbiAgICAgICAgLy/mlrDpl7vnmoflrqvnu5HlrppcbiAgICAgICAgdGhpcy5wYWxhY2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuUEFMQUNFXSk7ICAgICAgICAgICBcbiAgICB9XG5cbiAgICAvKirlsY/luZUg5bGA5LitKi9cbiAgICBwcml2YXRlIHNjcmVlblNldHRpbmcoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIgKyB0aGlzLnNjcmVlbldpZHRoKTtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS54ID0gLSgyMDAwLXRoaXMuc2NyZWVuV2lkdGgpLzI7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v5LqL5Lu25Zue6LCDXG5cbiAgICAvKirpl6jnmoTlvIDlhbMgKi9cbiAgICBwcml2YXRlIGRvb3JDdHIoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbilcbiAgICAgICAgey8v5byA6ZeoXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZG9vckNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7Ly/lhbPpl6hcbiAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRvb3JPcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirlhbPpl6ggKi9cbiAgICBwcml2YXRlIGRvb3JDbG9zZSgpIDogdm9pZFxuICAgIHtcblxuICAgIH1cblxuICAgIC8qKuW8gOmXqCAqL1xuICAgIHByaXZhdGUgZG9vck9wZW4oKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG5cbiAgICAvKirnp7vliqggKi9cbiAgICBwcml2YXRlIG1vdXNlTW92ZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoIXRoaXMuaXNEb3duKSByZXR1cm47XG4gICAgICAgIGlmKHRoaXMubW91c2VQb3MueClcbiAgICAgICAge1xuICAgICAgICAgICB0aGlzLnNwX3NjZW5lLnggKz0gTGF5YS5zdGFnZS5tb3VzZVggLSB0aGlzLm1vdXNlUG9zLng7IFxuICAgICAgICAvLyAgICB0aGlzLnNwX3NjZW5lLnkgKz0gTGF5YS5zdGFnZS5tb3VzZVkgLSB0aGlzLm1vdXNlUG9zLng7XG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPiAwKSAgdGhpcy5zcF9zY2VuZS54ID0gMDtcbiAgICAgICAgICAgIGlmKHRoaXMuc3Bfc2NlbmUueCA8IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKSkgdGhpcy5zcF9zY2VuZS54ID0gIC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSBMYXlhLnN0YWdlLm1vdXNlWDtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy55ID0gTGF5YS5zdGFnZS5tb3VzZVk7XG4gICAgfVxuXG4gICAgLyoq5ouW5Yqo5oyJ5LiLICovXG4gICAgcHJpdmF0ZSBtb3VzZURvd24oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKirmi5bliqjmiqzotbcgKi9cbiAgICBwcml2YXRlIG1vdXNlVXAoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7IFxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IHVuZGVmaW5lZDsgICAgICAgXG4gICAgfVxuXG5cbiAgICAvKirngrnlh7sg6I635Y+W5bu6562R5L+h5oGvICovXG4gICAgcHJpdmF0ZSBvbkhvdXNlSW5mbyh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubXNnRGlhbG9nLnNob3dNc2codHlwZSk7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8v5ri45oiP5rWB56iL5byA5aeLLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvKirmuLjmiI/mtYHnqIvlvIDlp4sgKi9cbiAgICBwcml2YXRlIGdhbWVTdGFydCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLmNyZWF0ZVBlb3BsZSgpOy8v5Lq65Y+j55Sf5oiQ6YC76L6R6L+Q6KGMXG4gICAgICAgIHRoaXMucGVvcGxlTWFuYWdlci5jcmVhdGVQZW9wbGVfSW5uZXIoKTsvL+WGheS6uuWPo+eUn+aIkFxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5HYW1lIGV4dGVuZHMgTGF5YS5TY3JpcHR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIDogdm9pZFxuICAgIHtcblxuICAgIH1cbiAgICBcblxuICAgIG9uQ2xpY2soKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEuU2NlbmUub3BlbihcIkdhbWVXb3JsZC5zY2VuZVwiKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlblN0b3J5IGV4dGVuZHMgTGF5YS5TY3JpcHR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIDogdm9pZFxuICAgIHtcblxuICAgIH1cbiAgICBcblxuICAgIG9uQ2xpY2soKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEuU2NlbmUub3BlbihcIkdhbWVTdG9yeS5zY2VuZVwiKTtcbiAgICB9XG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xuaW1wb3J0IFNjZW5lPUxheWEuU2NlbmU7XG5leHBvcnQgbW9kdWxlIHVpLkRpYWxvZyB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ3VycmVudERpYWxvZ1VJIGV4dGVuZHMgU2NlbmUge1xyXG5cdFx0cHVibGljIG1zZ0JvZHk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9QZXJzb246TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9Nc2c6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkRpYWxvZy9DdXJyZW50RGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgbW9kdWxlIHVpIHtcclxuICAgIGV4cG9ydCBjbGFzcyBHYW1lV29ybGRVSSBleHRlbmRzIFNjZW5lIHtcclxuXHRcdHB1YmxpYyBzcF9zY2VuZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfZ3JvdW5kOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9yaXZlcjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3Bfd2FsbDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfZG9vcjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEwOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHBhbGFjZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG9zcGl0YWw6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE2OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGVjaG5vbG9neTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBmYXJtOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGFybXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX1VJOkxheWEuU3ByaXRlO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiR2FtZVdvcmxkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyIl19
