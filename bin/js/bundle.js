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
        /**国家声望 */
        this.PRESTIGE = "prestige";
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
    //----------------------------------检测点的间距
    /**检测点间距 */
    GameConfig.TEST_POINT_DIC = 5;
    /**速度 */
    GameConfig.TEST_POINT_SPEED = 0.8;
    /**旋转角度偏移 */
    GameConfig.TEST_POINT_RO = 10;
    /**人类生产间隔S */
    GameConfig.PERSON_CREATE_TIME = 1;
    /**监测点数量*/
    GameConfig.TEST_POINT_COUNT = 6;
    //----------------------------------主值
    /**国家财政 */
    GameConfig.MAIN_MONEY = "money";
    /**国家人口 */
    GameConfig.MAIN_POPULATION = "population";
    /**国家幸福度 */
    GameConfig.MAIN_POPULARSUPPORT = "popularSupport";
    /**国家科技 */
    GameConfig.MAIN_TECHNOLOGY = "technology";
    //----------------------------------其他
    /**一天时间/分钟 */
    GameConfig.ONE_DAY = 10 * 60;
    /**粮食生产率换钱临界值 */
    GameConfig.GRAIN_EXCHANGEMONEY_PERCENT = 1.5;
    /**钱换粮食汇率 */
    GameConfig.MONEYTOGRAIN = 2;
    return GameConfig;
}());
exports.default = GameConfig;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("../ui/layaMaxUI");
/**
 * 购买框 通用
 */
var BuyDialog = /** @class */ (function (_super) {
    __extends(BuyDialog, _super);
    function BuyDialog() {
        var _this = _super.call(this) || this;
        _this.width = 800;
        _this.height = 400;
        return _this;
    }
    BuyDialog.prototype.onEnable = function () {
    };
    /**注册事件 */
    BuyDialog.prototype.addEvents = function () {
        this.btn_buy.on(Laya.Event.CLICK, this, this.buyClick);
        this.btn_close.on(Laya.Event.CLICK, this, this.closeClick);
    };
    /**点击购买 */
    BuyDialog.prototype.buyClick = function () {
        var curr;
    };
    /**点击关闭 */
    BuyDialog.prototype.closeClick = function () {
        this.close();
    };
    return BuyDialog;
}(layaMaxUI_1.ui.BuyUI));
exports.default = BuyDialog;
},{"../ui/layaMaxUI":18}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数据中心 所有的数据
 */
var CountryData = /** @class */ (function () {
    function CountryData() {
        /**************主数据********************/
        /**国家财政 */
        this.money = 10000;
        /**国家人口 */
        this.population = 100;
        /**国家幸福度 */
        this.popularSupport = 50;
        /**国家科技 */
        this.technology = 10;
        /**国家声望 */
        this.prestige = 90;
        /***************副数据*****************/
        //--------普通数据
        /**今日粮食产量 */
        this.grainAdd = 1000;
        /**今日粮食消耗 */
        this.grainMinus = 1000;
        /**粮食库存 */
        this.grainStock = 100;
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
        this.common = 95;
        /**科学家 SSS*/
        this.scientist = 1;
        /**明星 SS*/
        this.star = 2;
        /**土匪 -S */
        this.bandit = 1;
        /**盗贼 -A */
        this.robber = 1;
        // /**普通人 A  普通人中会产生医生 警察 等正常职业*/
        // public common : number = 1;
        // /**科学家 SSS*/
        // public scientist : number = 0;
        // /**明星 SS*/
        // public star : number = 0;
        // /**土匪 -S */
        // public bandit : number = 0;
        // /**盗贼 -A */
        // public robber : number = 0;
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
        this.percentDoctor = 0.02;
        /**普通人种 警察占比 */
        this.percentPolic = 0.04;
        /**普通人种 商人的占比 */
        this.percentShoper = 0.1;
        /**游手好闲 */
        this.percentNothing = 0.1;
        /**农民 */
        this.farmer = 0.7;
        /**流动比例 */
        this.percent = 1;
        //-----------------------------------------目标点
        /**目标点 医院 */
        this.posHospital = { x: 389, y: 541 };
        /**目标点 农场 */
        this.posFarm = { x: 132, y: 709 };
        /**目标点 新闻房*/
        this.posEventHouse = { x: 591.5, y: 729 };
        /**皇宫 */
        this.posPalace = { x: 981, y: 817 };
        /**科技 */
        this.posTechnology = { x: 1466, y: 621 };
        /**军队 */
        this.posArmy = { x: 1874, y: 707 };
        //---------------峰值
        /**国家幸福度峰值 */
        this.popularSupportMax = 100;
        /**国家科技峰值 */
        this.technologyMax = 100;
        /**国家声望峰值 */
        this.prestigeMax = 100;
        this.arr_LeftArea = new Array();
        this.arr_RightArea = new Array();
    }
    CountryData.prototype.onEnable = function () {
    };
    /**获取区域 */
    CountryData.prototype.setArea = function (view) {
        var children = view._children;
        for (var i = 0; i < children.length; i++) {
            if (children[i].name == "palace") {
                this.arr_LeftArea.push(children[i]);
                this.arr_RightArea.push(children[i]);
            }
            else if (children[i].x < 981) {
                this.arr_LeftArea.push(children[i]);
            }
            else {
                this.arr_RightArea.push(children[i]);
            }
        }
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
    //----------------------------------------结算
    /**五大主值结算 */
    CountryData.prototype.cal_MainData = function (type, count) {
        switch (type) {
            case "money":
                this.money += count;
                break;
            case "population":
                this.population += count;
                break;
            case "popularSupport":
                this.popularSupport += count;
                break;
            case "technology":
                this.technology += count;
                break;
            case "prestige":
                this.prestige += count;
                break;
        }
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
},{}],4:[function(require,module,exports){
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
}(layaMaxUI_1.ui.Dia.CurrentDialogUI));
exports.default = MsgDialog;
},{"../ui/layaMaxUI":18}],5:[function(require,module,exports){
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
                people.setPos(house.x, house.y, house);
                people.openBehaviour();
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
        this.countTime_ = Math.random() * GameConfig_1.default.PERSON_CREATE_TIME * 100;
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
},{"../Config/GameConfig":1,"../Perfeb/diff_People/Common":11,"../Perfeb/diff_People/Robber":12,"./DataManager":3}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var BuyDialog_1 = require("./Core/BuyDialog");
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
        reg("Core/BuyDialog.ts", BuyDialog_1.default);
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
},{"./Core/BuyDialog":2,"./Core/MsgDialog":4,"./Script/Center":13,"./Script/GameWorld/GameWorld":14,"./Script/OpenGame":15,"./Script/OpenStory":16}],9:[function(require,module,exports){
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
},{"./GameConfig":8}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("../Config/GameConfig");
var DataManager_1 = require("../Core/DataManager");
var Tool_1 = require("../Tool/Tool");
var DataManager_2 = require("../Core/DataManager");
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
        //数据初始化
        this.setDataInit();
        //创建
        this.createPeople(type);
    };
    /**数据初始化 */
    People.prototype.setDataInit = function () {
        this.toward = {
            x: 1000,
            y: 0,
            speed: GameConfig_1.default.TEST_POINT_SPEED, rotation: undefined,
            targetRotation: undefined,
            rotationChange: 0
        };
        this.towardPos = new Array();
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
        this.sp.size(12, 12);
        this.sp.pivot(this.sp.width / 2, this.sp.height / 2);
    };
    /**设置初始位置 */
    People.prototype.setPos = function (x, y, sp) {
        this.sp.visible = true;
        this.sp.x = x;
        this.sp.y = y;
        this.bornNode = sp;
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
                DataManager_1.default.ins_.cal_MainData(GameConfig_1.default.MAIN_POPULATION, 1);
            }
        }
    };
    /**墙内人行动逻辑*/
    /********************************************************墙内人行动逻辑*****************************************/
    People.prototype.people_PosInner = function () {
        // this.towedToMove();
    };
    People.prototype.setTraget = function (target) {
        // this.targetNode = target;
        //测试
        this.targetNode = this.view.getChildByName("palace");
        this.toward.x = target.x;
        this.toward.y = target.y;
    };
    /**towerd转化成位移 */
    People.prototype.towedToMove = function () {
        if (!this.toward.rotation)
            this.toward.rotation = Tool_1.default.rotateRopePoint_2(this.sp.x, this.sp.y, 200, 600);
        ;
        this.peopleTowerd(); //让目标朝向计算数
    };
    /**朝向  towerd移动 */
    People.prototype.posMove = function () {
        this.sp.x += this.toward.speed * Tool_1.default.rotationSet(this.toward.rotation, "sin");
        this.sp.y += this.toward.speed * Tool_1.default.rotationSet(this.toward.rotation, "cos");
        this.sp.rotation = this.toward.rotation;
        // console.log(this.sp.rotation);
    };
    /**人面向 */
    People.prototype.peopleTowerd = function () {
        this.getTowerdPos(); //获得五个点，根据目标坐标计算
        this.testTowerd(); //检测是否符合要求 不符合 + - 5
    };
    /**检测行走方向 */
    People.prototype.testTowerd = function () {
        var power = this.testColider(); // -1 0 1 2 3 4 5
        if (power > 0) { //撞到了需要转方向
            this.toward.rotationChange = 0;
            this.speedCtr(power);
            this.judgeLeftRight();
            this.posMove(); //移动
            return false;
        }
        this.findTarget();
        this.toward.speed = GameConfig_1.default.TEST_POINT_SPEED;
        this.posMove(); //移动  
        return true;
    };
    /**速度控制 */
    People.prototype.speedCtr = function (power) {
        this.toward.speed = GameConfig_1.default.TEST_POINT_SPEED * ((power + 1) / (this.towardPos.length + 2));
        // console.log("speed ::" + this.toward.speed);
    };
    /**判断方向 */
    People.prototype.judgeLeftRight = function () {
        this.toward.rotationChange += GameConfig_1.default.TEST_POINT_RO;
        var ro1 = this.toward.rotation - this.toward.rotationChange;
        var ro2 = this.toward.rotation + this.toward.rotationChange;
        this.getTowerdPos(ro1);
        var numRo1 = this.testColider();
        this.getTowerdPos(ro2);
        var numRo2 = this.testColider();
        if (numRo1 == -1) {
            this.toward.rotation = ro1;
            return;
        }
        if (numRo2 == -1) {
            this.toward.rotation = ro2;
            return;
        }
        this.judgeLeftRight();
    };
    /**findTarget寻找目标 */
    People.prototype.findTarget = function () {
        var Ca = this.toward.rotation - this.toward.targetRotation;
        if (Ca > 0)
            this.toward.rotation -= 5;
        else if (Ca < 0)
            this.toward.rotation += 5;
        if (Math.abs(Ca) < 5)
            this.toward.rotation += Ca;
    };
    /**检测是否碰撞 撞到了返回ture -1可以走 0以上表示碰撞到哪个点*/
    People.prototype.testColider = function () {
        var num = -1;
        var area = DataManager_2.default.ins_.arr_RightArea;
        if (this.sp.x < 981)
            area = DataManager_2.default.ins_.arr_LeftArea;
        for (var i = 0; i < area.length; i++) {
            if (Tool_1.default.blockTest(this.bornNode, this.sp)) {
                return -1;
            }
            if (Tool_1.default.blockTest(area[i], this.sp)) {
                return 0;
            } //如果已经撞上了。             
            for (var h = 0; h < this.towardPos.length; h++) { //五个点检测
                if (Tool_1.default.blockTest(area[i], this.towardPos[h])) { //离人最近的点
                    num = h + 1; //1，2，3，4，5
                    return num;
                }
            }
        }
        return num;
    };
    /**人面向的五个检测点 */
    People.prototype.getTowerdPos = function (rotationTest) {
        var rotation = this.toward.rotation; //使用当前面向
        if (rotationTest)
            rotation = rotationTest;
        else
            this.keepTowerdData(); //保存 现在为止到目标点的角度
        if (rotation === undefined) { //如果角度是undef
            rotation = this.toward.targetRotation; //目标角度，初始角度   
            this.toward.rotation = rotation;
        }
        //位移需要的变量
        var cos = Tool_1.default.rotationSet(rotation, "cos");
        var sin = Tool_1.default.rotationSet(rotation, "sin");
        // console.log("---------------x::" + this.sp.x + "y::" + this.sp.y);
        for (var i = 0; i < GameConfig_1.default.TEST_POINT_COUNT; i++) //记录五个
         {
            if (!this.towardPos[i])
                this.towardPos[i] = {};
            this.towardPos[i].x = this.sp.x + GameConfig_1.default.TEST_POINT_DIC * sin * (i + 1);
            this.towardPos[i].y = this.sp.y + GameConfig_1.default.TEST_POINT_DIC * cos * (i + 1);
        }
        // console.log(this.towardPos);
    };
    /**保存 tower信息 */
    People.prototype.keepTowerdData = function () {
        //存储现在点到目标角度
        var pX = this.sp.x;
        var pY = this.sp.y;
        // let tX = this.targetNode.x;
        // let tY = this.targetNode.y;
        var tX = 200;
        var tY = 600;
        this.toward.targetRotation = Tool_1.default.rotateRopePoint_2(pX, pY, tX, tY);
    };
    /**人消失 */
    People.prototype.destoryPeople = function () {
        this.sp.visible = false;
        Laya.timer.clearAll(this);
    };
    return People;
}());
exports.default = People;
},{"../Config/GameConfig":1,"../Core/DataManager":3,"../Tool/Tool":17}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("../People");
var Common = /** @class */ (function (_super) {
    __extends(Common, _super);
    function Common(view, type, isOut) {
        return _super.call(this, view, type, isOut) || this;
    }
    /**墙内逻辑 */
    Common.prototype.people_PosInner = function () {
        this.towedToMove();
    };
    return Common;
}(People_1.default));
exports.default = Common;
},{"../People":10}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("../People");
var Robber = /** @class */ (function (_super) {
    __extends(Robber, _super);
    function Robber(view, type, isOut) {
        return _super.call(this, view, type, isOut) || this;
    }
    /**偷取财政的方式,先给予时间 */
    Robber.prototype.cutMoneyTime = function () {
        //给予随机时间进行偷盗(10-20)秒
        var time = Math.random() * 10 + 10;
        //time秒之后进行偷盗
        Laya.timer.frameOnce(time * 60, this, this.CutMoney);
    };
    //时间后偷取
    Robber.prototype.CutMoney = function () {
        this.money = Math.floor(Math.random() * 10);
    };
    return Robber;
}(People_1.default));
exports.default = Robber;
},{"../People":10}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorldEventManager_1 = require("../../Core/WorldEventManager");
var layaMaxUI_1 = require("../../ui/layaMaxUI");
var DataManager_1 = require("../../Core/DataManager");
var UIManager_1 = require("../../Core/UIManager");
var PeopleManager_1 = require("../../Core/PeopleManager");
var GameConfig_1 = require("../../Config/GameConfig");
var MsgDialog_1 = require("../../Core/MsgDialog");
var DataManager_2 = require("../../Core/DataManager");
var BuyDialog_1 = require("../../Core/BuyDialog");
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
        DataManager_1.default.ins_.setArea(this.sp_scene.getChildByName("house"));
    };
    /**数据初始化 */
    GameWorld.prototype.gameDataInit = function () {
        this.worldEventManager = new WorldEventManager_1.default();
        this.peopleManager = new PeopleManager_1.default(this.sp_scene);
        this.uiManager = new UIManager_1.default(this.sp_UI);
        this.msgDialog = new MsgDialog_1.default();
        this.buyDialog = new BuyDialog_1.default();
        this.mousePos = {};
        this.isDown = false;
    };
    /**添加事件 */
    GameWorld.prototype.addEvent = function () {
        // this.stage.on(Laya.Event.CLICK,this,function(e){
        //     console.log(e);
        // })
        this.sp_scene.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        this.sp_scene.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        this.sp_scene.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        //给门帮点点击事   
        this.sp_door.on(Laya.Event.CLICK, this, this.doorCtr);
        //购买按钮事件绑定
        this.btn_buy.on(Laya.Event.CLICK, this, this.buyDialog_Click);
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
        if (DataManager_2.default.ins_.isDoorOpen) { //开门
            DataManager_2.default.ins_.isDoorOpen = false;
            this.doorClose();
        }
        else { //关门
            DataManager_2.default.ins_.isDoorOpen = true;
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
    /**点击购买按钮 */
    GameWorld.prototype.buyDialog_Click = function () {
        console.log("Ze");
        this.buyDialog.popup();
    };
    //---------------------------粮食-------------
    /**粮食产出公式 */
    GameWorld.prototype.cal_GrainAdd = function () {
    };
    /**粮食消耗公式 */
    GameWorld.prototype.cal_GrainMinus = function () {
    };
    /**粮食结算 */
    GameWorld.prototype.cal_Grain = function () {
        //如果还有粮食库存
        if (DataManager_2.default.ins_.grainAdd >= DataManager_2.default.ins_.grainMinus) {
            //如果生产量大于大于消耗率的某个倍率，先让其自动转化为财政，之后修改为手动转化
            if (DataManager_2.default.ins_.grainAdd / DataManager_2.default.ins_.grainMinus >= GameConfig_1.default.GRAIN_EXCHANGEMONEY_PERCENT) {
                //超出倍率的部分
                var exchange = DataManager_2.default.ins_.grainAdd - DataManager_2.default.ins_.grainMinus * GameConfig_1.default.GRAIN_EXCHANGEMONEY_PERCENT;
                //换钱
                this.exchangeMoney(exchange);
                //剩余的加入库存
                DataManager_2.default.ins_.grainStock += (DataManager_2.default.ins_.grainAdd - exchange - DataManager_2.default.ins_.grainMinus);
            }
            else {
                //加入库存
                DataManager_2.default.ins_.grainStock += (DataManager_2.default.ins_.grainAdd - DataManager_2.default.ins_.grainMinus);
            }
        }
        else {
            //如果库存加上生产的粮食不足以抵够消耗的粮食
            if ((DataManager_2.default.ins_.grainStock + DataManager_2.default.ins_.grainAdd) < DataManager_2.default.ins_.grainMinus) {
                //点击选择是否购买粮食，如果不购买则导致人口减少和幸福度降低
            }
            else {
                //减少库存
                DataManager_2.default.ins_.grainStock -= DataManager_2.default.ins_.grainMinus - DataManager_2.default.ins_.grainAdd;
            }
        }
    };
    /**粮食换钱 */
    GameWorld.prototype.exchangeMoney = function (grain) {
    };
    /**钱换粮食 */
    GameWorld.prototype.exchangeGrain = function (money) {
    };
    //----------------------稀有门
    /**购买稀有门 */
    GameWorld.prototype.buyRareDoor = function () {
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
},{"../../Config/GameConfig":1,"../../Core/BuyDialog":2,"../../Core/DataManager":3,"../../Core/MsgDialog":4,"../../Core/PeopleManager":5,"../../Core/UIManager":6,"../../Core/WorldEventManager":7,"../../ui/layaMaxUI":18}],15:[function(require,module,exports){
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
},{}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tool = /** @class */ (function () {
    function Tool() {
    }
    //获取三角函数值
    Tool.rotationDeal = function (fx, fy, sx, sy, getString) {
        /**斜边 */
        var c = Math.sqrt(Math.pow(fx - sx, 2) + Math.pow(fy - sy, 2));
        /**临边 */
        var a = sx - fx;
        /**对边 */
        var b = sy - fy;
        if (getString == "sin") {
            //console.log("#sin ==" + (b/c));
            return (b / c);
        }
        else if (getString == "cos") {
            //console.log("#cos ==" + (a/c));
            return (a / c);
        }
        else {
            //console.log("#tan ==" + (b/a));//对边 比 临边 
            return (b / a);
        }
    };
    /**碰撞检测 dicNum ：预设距离 object1和object2传入sprite,是按照每个sprite的锚点在中心位置来计算的  */
    Tool.collisionCheck = function (object1, object2) {
        if (Math.abs(object1.x - object2.x) < object1.width / 2 + object2.width / 2 &&
            Math.abs(object1.y - object2.y) < object1.height / 2 + object2.height / 2) {
            console.log("true");
            return true;
        }
        else {
            console.log("false");
            return false;
        }
    };
    Tool.rotateRopePoint_2 = function (x, y, X, Y) {
        var cos = Tool.rotationDeal(x, y, X, Y, "cos");
        var sin = Tool.rotationDeal(x, y, X, Y, "sin");
        var rotation;
        if (cos >= 0 && sin > 0) {
            rotation = 180 / Math.PI * Math.acos(cos) - 90;
        }
        else if (cos < 0 && sin >= 0) {
            rotation = 180 / Math.PI * Math.acos(cos) - 90;
        }
        else if (cos <= 0 && sin < 0) {
            rotation = 90 - 180 / Math.PI * Math.acos(cos);
        }
        else if (cos > 0 && sin <= 0) {
            rotation = 90 - 180 / Math.PI * Math.acos(cos);
        }
        if (y < Y)
            rotation += 180;
        return rotation;
    };
    /**获取角度
     * 移动点在前
    */
    Tool.getRotation = function (x1, y1, x2, y2) {
        var cos = Tool.rotationDeal(x1, y1, x2, y2, "cos");
        var sin = Tool.rotationDeal(x1, y1, x2, y2, "sin");
        var rotation;
        if (cos >= 0 && sin > 0) {
            rotation = 90 + 180 / Math.PI * Math.acos(cos);
        }
        if (cos < 0 && sin >= 0) {
            rotation = -180 / Math.PI * Math.acos(cos);
        }
        if (cos > 0 && sin <= 0) {
            rotation = -180 / Math.PI * Math.acos(cos);
        }
        if (cos <= 0 && sin < 0) {
            rotation = 180 - 180 / Math.PI * Math.acos(cos);
        }
        return rotation;
    };
    /**
     * rotation = 45 角度
     * 求 cos 还是 sin
     */
    Tool.rotationSet = function (rotation, typeString) {
        var r;
        var value;
        if (rotation < 0) {
            rotation += 360 * (Math.abs(Math.floor(rotation / 360) + 2));
        }
        if (Math.floor(rotation / 360) > 0) {
            rotation -= 360 * Math.floor(rotation / 360);
        }
        r = (rotation) / 180 * Math.PI;
        if (typeString == "cos") {
            value = Math.abs(Math.cos(r));
            if ((rotation > 0 && rotation <= 90) || (rotation > 270 && rotation <= 360))
                value = -value;
            // console.log("cos::" + value);
        }
        else {
            value = Math.abs(Math.sin(r));
            if ((rotation > 180 && rotation <= 270) || (rotation > 270 && rotation <= 360))
                value = -value;
            // console.log("sin::" + value);
        }
        return value;
    };
    /**
     * 距离计算
     * 2 对象
     * first
     * second
     */
    Tool.countDic_Object = function (f, s) {
        return Math.sqrt(Math.pow(f.x - s.x, 2) + Math.pow(f.y - s.y, 2));
    };
    /**
     * 方块检测
     *
     * 方块对象 sp
     * 检测的点 对象
     * */
    Tool.blockTest = function (sp, point) {
        var pointLeft = { x: sp.x - sp.width / 2, y: sp.y - sp.height / 2 };
        var pointRight = { x: sp.x + sp.width / 2, y: sp.y + sp.height / 2 };
        var s_pointLeft = point.x > pointLeft.x && point.y > pointLeft.y;
        var s_pointRight = point.x < pointRight.x && point.y < pointRight.y;
        if (s_pointLeft && s_pointRight)
            return true;
        return false;
    };
    return Tool;
}());
exports.default = Tool;
},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog = Laya.Dialog;
var Scene = Laya.Scene;
var ui;
(function (ui) {
    var BuyUI = /** @class */ (function (_super) {
        __extends(BuyUI, _super);
        function BuyUI() {
            return _super.call(this) || this;
        }
        BuyUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.loadScene("Buy");
        };
        return BuyUI;
    }(Dialog));
    ui.BuyUI = BuyUI;
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
(function (ui) {
    var Dia;
    (function (Dia) {
        var CurrentDialogUI = /** @class */ (function (_super) {
            __extends(CurrentDialogUI, _super);
            function CurrentDialogUI() {
                return _super.call(this) || this;
            }
            CurrentDialogUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadScene("Dia/CurrentDialog");
            };
            return CurrentDialogUI;
        }(Scene));
        Dia.CurrentDialogUI = CurrentDialogUI;
    })(Dia = ui.Dia || (ui.Dia = {}));
})(ui = exports.ui || (exports.ui = {}));
},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL+adgui0p+mTui9MYXlhQWlySURFX2JldGEvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvQnV5RGlhbG9nLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vbi50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyLnRzIiwic3JjL1NjcmlwdC9DZW50ZXIudHMiLCJzcmMvU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHMiLCJzcmMvU2NyaXB0L09wZW5HYW1lLnRzIiwic3JjL1NjcmlwdC9PcGVuU3RvcnkudHMiLCJzcmMvVG9vbC9Ub29sLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQTtJQUFBO1FBZ0RJLFVBQVU7UUFDSCxhQUFRLEdBQVksVUFBVSxDQUFDO0lBVTFDLENBQUM7SUExREcsY0FBYztJQUNBLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLG1CQUFRLEdBQVksTUFBTSxDQUFDO0lBQ3pDLGNBQWM7SUFDQSx3QkFBYSxHQUFZLFdBQVcsQ0FBQztJQUdu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c0JBQWlCLEdBQS9CLFVBQWdDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7UUFFL0IsSUFBSSxHQUFHLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxHQUFHLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxRQUFRLENBQUM7UUFDYixJQUFHLEdBQUcsSUFBRSxDQUFDLElBQUUsR0FBRyxHQUFDLENBQUMsRUFBQztZQUNiLFFBQVEsR0FBRSxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFDLEVBQUUsQ0FBQztTQUMzQzthQUFLLElBQUcsR0FBRyxHQUFDLENBQUMsSUFBRSxHQUFHLElBQUUsQ0FBQyxFQUFDO1lBQ25CLFFBQVEsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFDLEVBQUUsQ0FBQztTQUMxQzthQUFLLElBQUcsR0FBRyxJQUFFLENBQUMsSUFBRSxHQUFHLEdBQUMsQ0FBQyxFQUFDO1lBQ25CLFFBQVEsR0FBQyxFQUFFLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQzthQUFLLElBQUcsR0FBRyxHQUFDLENBQUMsSUFBRSxHQUFHLElBQUUsQ0FBQyxFQUFDO1lBQ25CLFFBQVEsR0FBRSxFQUFFLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUcsQ0FBQyxHQUFHLENBQUM7WUFBRSxRQUFRLElBQUksR0FBRyxD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QztZQUNMLHNCQUFDO1FBQUQsQ0FWQSxBQVVDLENBVm9DLEtBQUssR0FVekM7UUFWWSxtQkFBZSxrQkFVM0IsQ0FBQTtJQUNMLENBQUMsRUFaZ0IsR0FBRyxHQUFILE1BQUcsS0FBSCxNQUFHLFFBWW5CO0FBQUQsQ0FBQyxFQVphLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQVlmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWcge1xyXG4gICAgLyoq5Lq656eNIC0g5pmu6YCa5Lq6ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENPTU1PTl9NQU4gOiBzdHJpbmcgPSBcImNvbW1vblwiO1xyXG4gICAgLyoq5Lq656eNIC0g5bCP5YG3ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJPQkJFUl9NQU4gOiBzdHJpbmcgPSBcInJvYmJlclwiO1xyXG4gICAgLyoq5Lq656eNIC0g5Zyf5YyqICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEJBTkRJVF9NQU4gOiBzdHJpbmcgPSBcImJhbmRpdFwiO1xyXG4gICAgLyoq5Lq656eNIC0g5piO5pifICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUQVJfTUFOIDogc3RyaW5nID0gXCJzdGFyXCI7XHJcbiAgICAvKirkurrnp40gLSDnp5HlrablrrYgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU0NJRU5USVNUX01BTiA6IHN0cmluZyA9IFwic2NpZW50aXN0XCI7XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeW7uuetkVxyXG4gICAgLyoq5Yy76ZmiICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEhPU1BJVEFMIDogbnVtYmVyID0gMTtcclxuICAgIC8qKuWGm+mYnyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBBUk1ZIDogbnVtYmVyID0gMjtcclxuICAgIC8qKuWGnOWcuiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGQVJNOiBudW1iZXIgPSAzO1xyXG4gICAgLyoq56eR5oqAICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFQ0hOT0xPR1k6IG51bWJlciA9IDQ7XHJcbiAgICAvKirkuovku7bmiL8g5paw6Ze75oi/ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UX0hPVVNFOiBudW1iZXIgPSA1O1xyXG4gICAgLyoq55qH5a6rICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBBTEFDRTogbnVtYmVyID0gNjtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeajgOa1i+eCueeahOmXtOi3nVxyXG4gICAgLyoq5qOA5rWL54K56Ze06LedICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfRElDIDogbnVtYmVyID0gNTtcclxuICAgIC8qKumAn+W6piAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX1NQRUVEIDogbnVtYmVyID0gMC44O1xyXG4gICAgLyoq5peL6L2s6KeS5bqm5YGP56e7ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfUk8gOiBudW1iZXIgPSAxMDtcclxuICAgIC8qKuS6uuexu+eUn+S6p+mXtOmalFMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUEVSU09OX0NSRUFURV9USU1FIDogbnVtYmVyID0gMTtcclxuICAgIC8qKuebkea1i+eCueaVsOmHjyovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfQ09VTlQgOiBudW1iZXIgPSA2O1xyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3kuLvlgLxcclxuICAgIC8qKuWbveWutui0ouaUvyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX01PTkVZIDogc3RyaW5nID0gXCJtb25leVwiO1xyXG4gICAgLyoq5Zu95a625Lq65Y+jICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUE9QVUxBVElPTiA6IHN0cmluZz1cInBvcHVsYXRpb25cIjtcclxuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX1BPUFVMQVJTVVBQT1JUIDogc3RyaW5nID0gXCJwb3B1bGFyU3VwcG9ydFwiO1xyXG4gICAgLyoq5Zu95a6256eR5oqAICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fVEVDSE5PTE9HWSA6IHN0cmluZyA9IFwidGVjaG5vbG9neVwiO1xyXG4gICAgLyoq5Zu95a625aOw5pybICovXHJcbiAgICBwdWJsaWMgUFJFU1RJR0UgOiBzdHJpbmcgPSBcInByZXN0aWdlXCI7XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWFtuS7llxyXG4gICAgLyoq5LiA5aSp5pe26Ze0L+WIhumSnyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBPTkVfREFZOm51bWJlcj0xMCo2MDtcclxuICAgIC8qKueyrumjn+eUn+S6p+eOh+aNoumSseS4tOeVjOWAvCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHUkFJTl9FWENIQU5HRU1PTkVZX1BFUkNFTlQ9MS41O1xyXG4gICAgLyoq6ZKx5o2i57Ku6aOf5rGH546HICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1PTkVZVE9HUkFJTj0yO1xyXG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XHJcbi8qKlxyXG4gKiDotK3kubDmoYYg6YCa55SoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXlEaWFsb2cgZXh0ZW5kcyB1aS5CdXlVSXtcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMud2lkdGg9ODAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PTQwMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpOnZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5rOo5YaM5LqL5Lu2ICovXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50cygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0bl9idXkub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuYnV5Q2xpY2spO1xyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlQ2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueCueWHu+i0reS5sCAqL1xyXG4gICAgcHJpdmF0ZSBidXlDbGljaygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgY3VyclxyXG4gICAgfSBcclxuICAgIFxyXG4gICAgLyoq54K55Ye75YWz6ZetICovXHJcbiAgICBwcml2YXRlIGNsb3NlQ2xpY2soKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSBcclxufSIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNruS4reW/gyDmiYDmnInnmoTmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlEYXRhe1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogQ291bnRyeURhdGEgPSBuZXcgQ291bnRyeURhdGEoKTtcclxuICAgIC8qKioqKioqKioqKioqKuS4u+aVsOaNrioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoq5Zu95a626LSi5pS/ICovXHJcbiAgICBwdWJsaWMgbW9uZXkgOiBudW1iZXIgPSAxMDAwMDtcclxuICAgIC8qKuWbveWutuS6uuWPoyAqL1xyXG4gICAgcHVibGljIHBvcHVsYXRpb24gOiBudW1iZXI9MTAwO1xyXG4gICAgLyoq5Zu95a625bm456aP5bqmICovXHJcbiAgICBwdWJsaWMgcG9wdWxhclN1cHBvcnQgOiBudW1iZXIgPSA1MDtcclxuICAgIC8qKuWbveWutuenkeaKgCAqL1xyXG4gICAgcHVibGljIHRlY2hub2xvZ3kgOiBudW1iZXIgPSAxMDtcclxuICAgIC8qKuWbveWutuWjsOacmyAqL1xyXG4gICAgcHVibGljIHByZXN0aWdlIDogbnVtYmVyID0gOTA7XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKuWJr+aVsOaNrioqKioqKioqKioqKioqKioqL1xyXG4gICAgLy8tLS0tLS0tLeaZrumAmuaVsOaNrlxyXG4gICAgLyoq5LuK5pel57Ku6aOf5Lqn6YePICovXHJcbiAgICBwdWJsaWMgZ3JhaW5BZGQgOiBudW1iZXIgPSAxMDAwO1xyXG4gICAgLyoq5LuK5pel57Ku6aOf5raI6ICXICovXHJcbiAgICBwdWJsaWMgZ3JhaW5NaW51cyA6IG51bWJlciA9MTAwMDtcclxuICAgIC8qKueyrumjn+W6k+WtmCAqL1xyXG4gICAgcHVibGljIGdyYWluU3RvY2s6bnVtYmVyPTEwMDtcclxuXHJcbiAgICAvLy0tLS0tLS0t5LqL5Lu25pWw5o2uXHJcbiAgICAvKirnmJ/nlqsgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfKi9cclxuICAgIHB1YmxpYyBwZXN0IDogbnVtYmVyID0gMDtcclxuICAgIC8qKuWcsOmchyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8gKi9cclxuICAgIHB1YmxpYyBuYXR1cmFsRGlzYXN0ZXIgOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5oiY5LmxICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyovXHJcbiAgICBwdWJsaWMgd2FyIDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLy0tLS0tLS0t6IGM5Lia5Lq65pWwXHJcbiAgICBwdWJsaWMgYXJyX1Blb3BsZSA6IEFycmF5PHN0cmluZz4gPSBbXCJjb21tb25cIixcInNjaWVudGlzdFwiLFwic3RhclwiLFwiYmFuZGl0XCIsXCJyb2JiZXJcIl07XHJcbiAgICAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xyXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDk1O1xyXG4gICAgLyoq56eR5a2m5a62IFNTUyovXHJcbiAgICBwdWJsaWMgc2NpZW50aXN0IDogbnVtYmVyID0gMTtcclxuICAgIC8qKuaYjuaYnyBTUyovXHJcbiAgICBwdWJsaWMgc3RhciA6IG51bWJlciA9IDI7XHJcbiAgICAvKirlnJ/ljKogLVMgKi9cclxuICAgIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAxO1xyXG4gICAgLyoq55uX6LS8IC1BICovXHJcbiAgICBwdWJsaWMgcm9iYmVyIDogbnVtYmVyID0gMTtcclxuICAgICAgICAvLyAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSAxO1xyXG4gICAgICAgIC8vIC8qKuenkeWtpuWutiBTU1MqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuaYjuaYnyBTUyovXHJcbiAgICAgICAgLy8gcHVibGljIHN0YXIgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuWcn+WMqiAtUyAqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuebl+i0vCAtQSAqL1xyXG4gICAgICAgIC8vIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAwO1xyXG4gICAgLy8tLS0tLS0tLeWfjumXqFxyXG4gICAgLyoq6Zeo5piv5ZCm5omT5byAKi9cclxuICAgIHB1YmxpYyBpc0Rvb3JPcGVuIDogYm9vbGVhbj10cnVlO1xyXG4gICAgLyoq5Lq65Y+j6L+b5YWl6YePICovXHJcbiAgICBwdWJsaWMgZW50ZXJQZW9wbGUgOiBudW1iZXIgPSAxMDA7XHJcbiAgICAvKirkurrlj6PmtYHlh7rph48gKi9cclxuICAgIHB1YmxpYyBvdXRlclBlb3BsZSA6IG51bWJlciA9IDEwMDtcclxuICAgIC8qKuetm+afpeiDveWKmyDlkK/liqjnibnmrorpl6jnmoTml7blgJkgIOetm+afpeiDveWKm+eUn+aViCovXHJcbiAgICBwdWJsaWMgcHJlcGFyYXRpb24gOiBudW1iZXIgPSAwLjU7XHJcbiAgICAvKirnibnmrorpl6gg562b5p+lIDEt6Ziy5q2i6L+b5YWlICAgMi3pgoDor7fov5vlhaUqL1xyXG4gICAgLy8gcHVibGljIGtlZXBTZWxlY3QgOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLyoq5pmu6YCa5Lq65LitIOWMu+eUn+eahOWNoOavlCovXHJcbiAgICBwdWJsaWMgcGVyY2VudERvY3RvciA6IG51bWJlciA9IDAuMDI7XHJcbiAgICAvKirmma7pgJrkurrnp40g6K2m5a+f5Y2g5q+UICovXHJcbiAgICBwdWJsaWMgcGVyY2VudFBvbGljIDogbnVtYmVyID0gMC4wNDtcclxuICAgIC8qKuaZrumAmuS6uuenjSDllYbkurrnmoTljaDmr5QgKi9cclxuICAgIHB1YmxpYyBwZXJjZW50U2hvcGVyIDogbnVtYmVyID0gMC4xO1xyXG4gICAgLyoq5ri45omL5aW96ZeyICovXHJcbiAgICBwdWJsaWMgcGVyY2VudE5vdGhpbmcgOiBudW1iZXIgPSAwLjE7XHJcbiAgICAvKirlhpzmsJEgKi9cclxuICAgIHB1YmxpYyBmYXJtZXIgOiBudW1iZXIgPSAwLjc7XHJcbiAgICAvKirmtYHliqjmr5TkvosgKi9cclxuICAgIHB1YmxpYyBwZXJjZW50Om51bWJlcj0xO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3nm67moIfngrlcclxuICAgIC8qKuebruagh+eCuSDljLvpmaIgKi9cclxuICAgIHB1YmxpYyBwb3NIb3NwaXRhbCA6IGFueSA9IHt4OiAzODkseTo1NDF9OyBcclxuICAgIC8qKuebruagh+eCuSDlhpzlnLogKi9cclxuICAgIHB1YmxpYyBwb3NGYXJtIDogYW55ID0ge3g6IDEzMix5OjcwOX07IFxyXG4gICAgLyoq55uu5qCH54K5IOaWsOmXu+aIvyovXHJcbiAgICBwdWJsaWMgcG9zRXZlbnRIb3VzZSA6IGFueSA9IHt4OiA1OTEuNSx5OjcyOX07IFxyXG4gICAgLyoq55qH5a6rICovXHJcbiAgICBwdWJsaWMgcG9zUGFsYWNlIDogYW55ID0ge3g6IDk4MSx5OjgxN307IFxyXG4gICAgLyoq56eR5oqAICovXHJcbiAgICBwdWJsaWMgcG9zVGVjaG5vbG9neSA6IGFueSA9IHt4OiAxNDY2LHk6NjIxfTsgXHJcbiAgICAvKirlhpvpmJ8gKi9cclxuICAgIHB1YmxpYyBwb3NBcm15IDogYW55ID0ge3g6IDE4NzQseTo3MDd9OyBcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3ljLrln59cclxuICAgIC8qKuWimeWGheWMuuWfn+WIkuWIhiAqL1xyXG4gICAgcHVibGljIGFycl9MZWZ0QXJlYSA6IEFycmF5PGFueT47XHJcbiAgICBwdWJsaWMgYXJyX1JpZ2h0QXJlYSA6IEFycmF5PGFueT47XHJcbiAgICBcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0t5bOw5YC8XHJcbiAgICAvKirlm73lrrblubjnpo/luqbls7DlgLwgKi9cclxuICAgIHB1YmxpYyBwb3B1bGFyU3VwcG9ydE1heCA6IG51bWJlciA9IDEwMDtcclxuICAgIC8qKuWbveWutuenkeaKgOWzsOWAvCAqL1xyXG4gICAgcHVibGljIHRlY2hub2xvZ3lNYXggOiBudW1iZXIgPSAxMDA7XHJcbiAgICAvKirlm73lrrblo7DmnJvls7DlgLwgKi9cclxuICAgIHB1YmxpYyBwcmVzdGlnZU1heCA6IG51bWJlciA9IDEwMDtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgICAgIHRoaXMuYXJyX1JpZ2h0QXJlYSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5bljLrln58gKi9cclxuICAgIHB1YmxpYyBzZXRBcmVhKHZpZXcgOiBMYXlhLk5vZGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHZpZXcuX2NoaWxkcmVuO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8Y2hpbGRyZW4ubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLm5hbWUgPT0gXCJwYWxhY2VcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEucHVzaChjaGlsZHJlbltpXSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoY2hpbGRyZW5baV0ueDw5ODEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyX0xlZnRBcmVhLnB1c2goY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2goY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Lq65Y+j5rWB6YePIDpcclxuICAgICAqIHJldHVybiDov5vlhaUgLyDlh7rljrtcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldF9QZW9wbGVNb3ZlKCkgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbnRlclBlb3BsZS90aGlzLm91dGVyUGVvcGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Lq656eN5q+U5L6LXHJcbiAgICAgKiBAcGFyYW0gdHlwZSDkurrnp41cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldF9Qcm9mZXNzaW9uUGVyY2VudCh0eXBlOnN0cmluZykgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzW3R5cGVdID09PSB1bmRlZmluZWQpIGNvbnNvbGUubG9nKFwi5LiN5a2Y5Zyo6K+l5Lq656eNXCIpO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXNbdHlwZV0vKHRoaXMucG9wdWxhdGlvbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLee7k+eul1xyXG4gICAgLyoq5LqU5aSn5Li75YC857uT566XICovXHJcbiAgICBwdWJsaWMgY2FsX01haW5EYXRhKHR5cGU6c3RyaW5nLGNvdW50Om51bWJlcik6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCh0eXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBcIm1vbmV5XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbmV5Kz1jb3VudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicG9wdWxhdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uKz1jb3VudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicG9wdWxhclN1cHBvcnRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhclN1cHBvcnQrPWNvdW50O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0ZWNobm9sb2d5XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlY2hub2xvZ3krPWNvdW50O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcmVzdGlnZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzdGlnZSs9Y291bnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLyoq5aSW5Z+OICovXHJcbmV4cG9ydCBjbGFzcyBPdXRDb3VudHJ5RGF0YXtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zXyA6IE91dENvdW50cnlEYXRhID0gbmV3IE91dENvdW50cnlEYXRhKCk7XHJcbiAgICAvKioqKioqKioqKioqKirkuLvmlbDmja4qKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKuacgOWkp+WkluWfjuWuuee6s+aVsOmHjyAqL1xyXG4gICAgcHVibGljIG1heENvdW50IDogbnVtYmVyPTUwO1xyXG4gICAgLyoq5b2T5YmN5aSW5Z+O5Lq65Y+j5pWwICovXHJcbiAgICBwdWJsaWMgb3V0Q291bnQ6bnVtYmVyPTA7XHJcbiAgICAvKirkurrmu57nlZnml7bpl7QgKi9cclxuICAgIHB1YmxpYyBsaW1pdFRpbWU6bnVtYmVyPTUwO1xyXG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XHJcblxyXG4vKipcclxuICog5raI5oGv5qGGIOmAmueUqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXNnRGlhbG9nIGV4dGVuZHMgdWkuRGlhLkN1cnJlbnREaWFsb2dVSXtcclxuICAgIC8qKuexu+WeiyAqL1xyXG4gICAgcHJpdmF0ZSB0eXBlIDogbnVtYmVyIDtcclxuICAgIC8qKue8k+WKqCAqL1xyXG4gICAgLy8gcHJpdmF0ZSBzaG93VHdlZW4gOiBMYXlhLlR3ZWVuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIneWni+WMliAqL1xyXG4gICAgcHVibGljIHNob3dNc2codHlwZTpudW1iZXIpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlRGlhbG9nKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUltZygpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVGl0bGUoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVdvcmQoKTsgXHJcbiAgICAgICAgdGhpcy5tc2dCb2R5LnggPSAoOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCktMTE2MykvMjsgICAgICAgXHJcbiAgICAgICAgdGhpcy5tc2dCb2R5LnkgPSAtNTU3OyAgICAgICBcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eTowfSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaNouWbviAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VJbWcoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2godGhpcy50eXBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaNouagh+mimCAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VUaXRsZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaWh+Wtl+i9veWFpSAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VXb3JkKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YWz6ZetICovXHJcbiAgICBwdWJsaWMgY2xvc2VEaWFsb2coKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vZmYoTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuY2xvc2VEaWFsb2cpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eTotNTU3fSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQsTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLHRoaXMuY2xvc2VPdmVyKSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlT3ZlcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlOyAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZXJmZWIvUGVvcGxlXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEsIHsgT3V0Q291bnRyeURhdGEgfSBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29tbW9uIGZyb21cIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9Db21tb25cIlxyXG5pbXBvcnQgUm9iYmVyIGZyb21cIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9Sb2JiZXJcIlxyXG4vKipcclxuICog5Lq6IOeuoeeQhlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlTWFuYWdlciB7XHJcbiAgICAvKirop4blm74qL1xyXG4gICAgcHJpdmF0ZSB2aWV3OmFueTsgXHJcbiAgICAvKirmqKrlnZDmoIcgKi9cclxuICAgIHByaXZhdGUgWDpudW1iZXI7XHJcbiAgICAvKirnurXlnZDmoIcgKi9cclxuICAgIHByaXZhdGUgWTpudW1iZXI7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWimeWGhVxyXG4gICAgLyoq5bey55Sf5oiQ55qE5Lq656eNICAwIOaZrumAmiAgIDHnp5HlrablrrYgIDLmmI7mmJ8gM+Wcn+WMqiA055uX6LS8Ki9cclxuICAgIHByaXZhdGUgYWxyZWFkeUNyZWF0ZSA6IEFycmF5PG51bWJlcj4gPSBbMCwwLDAsMCwwXTtcclxuICAgIC8qKueUn+aIkOmXtOmalOiuoeaXtuWZqCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudFRpbWUgOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq55Sf5Lqn5pe26Ze06Ze06ZqUICovXHJcbiAgICBwcml2YXRlIGNvdW50VGltZV8gOiBudW1iZXIgPSA1MDA7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmlldz12aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5ZCv55Sf5oiQ5bel5Y6CXHJcbiAgICAgKiDnlJ/miJDkurogXHJcbiAgICAgKiDnlJ/miJDkurrnmoTkvY3nva5cclxuICAgICAqIOeUn+S6p+S6uueahHR5cGUg77yaIOWfjumHjOS6ui/ln47lpJbkurog6YC76L6R5YiG5byAXHJcbiAgICAgKi9cclxuICAgIC8qKuW8gOWQr+eUn+aIkOW3peWOgiAqL1xyXG4gICAgcHVibGljIG9wZW5QZW9wbGVGYWN0b3J5KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirnlJ/miJDkurogKi9cclxuICAgIHB1YmxpYyBjcmVhdGVQZW9wbGUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBlb3BsZTtcclxuICAgICAgICAvKirnlJ/miJDkuI3lkIzkurrnp43nmoTlh6DnjocgKi9cclxuICAgICAgICBsZXQgcmFuZG9tPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDApO1xyXG4gICAgICAgIC8v5pmu6YCa5Lq6XHJcbiAgICAgICAgaWYocmFuZG9tPj0wJiZyYW5kb208ODApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwiY29tbW9uXCIpO1xyXG4gICAgICAgICAgICBpZighcGVvcGxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBDb21tb24odGhpcy52aWV3LEdhbWVDb25maWcuQ09NTU9OX01BTix0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+Wwj+WBt1xyXG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj04MCYmcmFuZG9tPDkwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInJvYmJlclwiKTtcclxuICAgICAgICAgICAgaWYoIXBlb3BsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgUm9iYmVyKHRoaXMudmlldyxHYW1lQ29uZmlnLlJPQkJFUl9NQU4sdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lnJ/ljKpcclxuICAgICAgICBlbHNlIGlmKHJhbmRvbT49OTAmJnJhbmRvbTw5NilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJiYW5kaXRcIik7XHJcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFJvYmJlcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5CQU5ESVRfTUFOLHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v56eR5a2m5a62XHJcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PTk2JiZyYW5kb208OTkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwic2NpZW50aXN0XCIpO1xyXG4gICAgICAgICAgICBpZighcGVvcGxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuU0NJRU5USVNUX01BTix0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aYjuaYn1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJzdGFyXCIpO1xyXG4gICAgICAgICAgICBpZighcGVvcGxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuU1RBUl9NQU4sdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGVvcGxlLnZpc2libGU9dHJ1ZTtcclxuICAgICAgICB0aGlzLmdldFBvcygpO1xyXG4gICAgICAgIHBlb3BsZS5zZXRQb3ModGhpcy5YLHRoaXMuWSk7XHJcbiAgICAgICAgcGVvcGxlLm9wZW5CZWhhdmlvdXIoKTtcclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjM7XHJcbiAgICAgICAgaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq655qE5L2N572uICovXHJcbiAgICBwdWJsaWMgZ2V0UG9zKCk6YW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHR5cGVOdW09TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMpO1xyXG4gICAgICAgIHN3aXRjaCh0eXBlTnVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgLy/lnKhB6L6555WMXHJcbiAgICAgICAgICAgICAgICB0aGlzLlg9MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuWT1NYXRoLnJhbmRvbSgpKjM5MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAvL+WcqELovrnnlYxcclxuICAgICAgICAgICAgICAgIHRoaXMuWD1NYXRoLnJhbmRvbSgpKjIwMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlk9MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAvL+WcqEPovrnnlYxcclxuICAgICAgICAgICAgICAgIHRoaXMuWD0yMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq55WM6ZmQ5qOA5rWLICoqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBcclxuICAgIFxyXG4gICAgcHVibGljIGNoZWNrUGVyY2VudChwZW9wbGUsdHlwZTpzdHJpbmcpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+a1geWKqOavlOS+i+ajgOa1i1xyXG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18ucGVyY2VudDwxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWIm+W7uuWimeWGheS6uiAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZV9Jbm5lcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgbGV0IHJhbmRvbVN0cmluZyA7XHJcbiAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXHJcbiAgICAgICBsZXQgYXJyX1Blb3BsZSA9IENvdW50cnlEYXRhLmluc18uYXJyX1Blb3BsZTtcclxuICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XHJcbiAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyX1Blb3BsZS5sZW5ndGg7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgICBudW1iZXIgKz0gQ291bnRyeURhdGEuaW5zXy5nZXRfUHJvZmVzc2lvblBlcmNlbnQoYXJyX1Blb3BsZVtpXSk7XHJcbiAgICAgICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xyXG4gICAgICAgfVxyXG4gICAgICAgY29uc29sZS5sb2coYXJyUGVyY2VudCk7XHJcbiAgICAgICBMYXlhLnRpbWVyLmxvb3AoMSx0aGlzLHRoaXMuZ2V0UmFuZG9tLFthcnJQZXJjZW50XSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5Lqn5Lq6ICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZV9Jbm5lcihyYW5kb21TdHJpbmcpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKHJhbmRvbVN0cmluZyA9PSBcIm5vbmVcIikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBwZW9wbGU7XHJcbiAgICAgICAgLy/nlJ/kuqfkurrnp41cclxuICAgICAgICBzd2l0Y2gocmFuZG9tU3RyaW5nKVxyXG4gICAgICAgIHsgICAgLyoq5bey55Sf5oiQ55qE5Lq656eNICAwIOaZrumAmiAgIDHnp5HlrablrrYgIDLmmI7mmJ8gM+Wcn+WMqiA055uX6LS8Ki9cclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkNPTU1PTl9NQU46ICAgICBcclxuICAgICAgICAgICAgICAgIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFscmVhZHlDcmVhdGVbMF0rKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuUk9CQkVSX01BTjovL+ebl+i0vFxyXG4gICAgICAgICAgICAgICAgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxyZWFkeUNyZWF0ZVs0XSsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5CQU5ESVRfTUFOOi8v5Zyf5YyqXHJcbiAgICAgICAgICAgICAgICBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbHJlYWR5Q3JlYXRlWzNdKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNUQVJfTUFOOi8v5piO5pifXHJcbiAgICAgICAgICAgICAgICBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbHJlYWR5Q3JlYXRlWzJdKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNDSUVOVElTVF9NQU46Ly/np5HlrablrrZcclxuICAgICAgICAgICAgICAgIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFscmVhZHlDcmVhdGVbMV0rKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwZW9wbGUgPT09IHVuZGVmaW5lZCB8fCBwZW9wbGUgPT09IG51bGwpIHtjb25zb2xlLmxvZyhcIuayoeacieeUn+aIkOS6uuenje+8geenjeexuzpcIiArIHJhbmRvbVN0cmluZyk7cmV0dXJuO31cclxuICAgICAgICB0aGlzLmNyZWF0ZVBvcyhwZW9wbGUpOyBcclxuICAgIH1cclxuXHJcbiAgICAvKirnlJ/kuqfkvY3nva4gKi9cclxuICAgIHByaXZhdGUgY3JlYXRlUG9zKHBlb3BsZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGhvdXNlTm9kZSA9ICh0aGlzLnZpZXcgYXMgTGF5YS5TcHJpdGUpLmdldENoaWxkQnlOYW1lKCdob3VzZScpO1xyXG4gICAgICAgIGxldCBwZXJjZW50ID0gaG91c2VOb2RlLl9jaGlsZHJlbi5sZW5ndGgvMTAwO1xyXG4gICAgICAgIGxldCBob3VzZSA7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTwgaG91c2VOb2RlLl9jaGlsZHJlbi5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwZXJjZW50KjEwMCk7XHJcbiAgICAgICAgICAgIGhvdXNlID0gaG91c2VOb2RlLmdldENoaWxkQnlOYW1lKFwiaG91c2VfXCIrbnVtYmVyKTtcclxuICAgICAgICAgICAgaWYoaG91c2UgIT09IHVuZGVmaW5lZCAmJiBob3VzZSAhPT0gbnVsbCkgIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGUuc2V0UG9zKGhvdXNlLngsaG91c2UueSxob3VzZSk7ICAgXHJcbiAgICAgICAgICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPlumaj+acuuS6uuenjSAqL1xyXG4gICAgcHJpdmF0ZSBnZXRSYW5kb20oYXJyUGVyY2VudCkgOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmNvdW50VGltZSA8PSB0aGlzLmNvdW50VGltZV8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50VGltZSsrO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnRUaW1lXyA9IE1hdGgucmFuZG9tKCkqR2FtZUNvbmZpZy5QRVJTT05fQ1JFQVRFX1RJTUUqMTAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi55Sf5oiQ6Ze06ZqUOlwiICsgTWF0aC5mbG9vcih0aGlzLmNvdW50VGltZS8xMDApICsgXCJzXCIpO1xyXG4gICAgICAgIHRoaXMuY291bnRUaW1lID0gMDtcclxuXHJcbiAgICAgICAgbGV0IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgbGV0IHBlcnNvbiA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyUGVyY2VudC5sZW5ndGggO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGFyclBlcmNlbnRbaV0gPD0gbnVtYmVyICYmIG51bWJlciA8IGFyclBlcmNlbnRbaSsxXSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVyc29uID0gQ291bnRyeURhdGEuaW5zXy5hcnJfUGVvcGxlW2ldO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBlcnNvbik7XHJcbiAgICAgICAgLy/liKTmlq3kurrmmK/lkKbov5jog73nlJ/miJBcclxuICAgICAgICBpZihpbmRleCA9PT0gdW5kZWZpbmVkKXtjb25zb2xlLmxvZyhcIuamgueOh+iuoeeul+WHuumUmVwiKTtyZXR1cm47fVxyXG4gICAgICAgIGlmKHRoaXMuYWxyZWFkeUNyZWF0ZVtpbmRleF0gPT0gQ291bnRyeURhdGEuaW5zX1twZXJzb25dKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5nZXRBbHJlYWRDcmVhdGUoKSA9PSBDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXRpb24pIHJldHVybjtcclxuICAgICAgICAgICAgcGVyc29uID0gdGhpcy5nZXRSYW5kb20oYXJyUGVyY2VudCk7ICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICB0aGlzLmNyZWF0ZV9Jbm5lcihwZXJzb24pOy8v55Sf5Lqn5Lq656eNICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyrojrflj5blt7LnlJ/miJDkurrlj6PnmoTmlbDph48qL1xyXG4gICAgcHVibGljIGdldEFscmVhZENyZWF0ZSgpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmFscmVhZHlDcmVhdGUubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG51bWJlciArPXRoaXMuYWxyZWFkeUNyZWF0ZVtpXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtYmVyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XHJcblxyXG4vKipcclxuICogVUnnrqHnkIblmahcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTWFuYWdlcntcclxuICAgIC8qKuaVsOaNrueuoeeQhuWZqCAqL1xyXG4gICAgLy8gcHVibGljIHN0YXRpYyBkYXRhTWFuYWdlciA6IERhdGFNYW5hZ2VyO1xyXG4gICAgLyoqVUkgc3ByaXRlICovXHJcbiAgICBwcml2YXRlIFVpU3ByaXRlIDogTGF5YS5TcHJpdGU7XHJcblxyXG4gICAgLyoq6L295YWl5pWw5o2uICovXHJcbiAgICBjb25zdHJ1Y3Rvcih1aTpMYXlhLlNwcml0ZSl7XHJcbiAgICAgICAgdGhpcy5VaVNwcml0ZSA9IHVpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufSIsIi8qKlxyXG4gKiDkuovku7blj5HnlJ/nrqHnkIblmahcclxuICogXHJcbiAqIFxyXG4gKiDnlJ/miJDkuovku7bjgIFcclxuICog5b2x5ZON5Lq65Y+j5rWB5YqoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZEV2ZW50TWFuYWdlciB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKuS6i+S7tumihOaKpeWIsCAqL1xyXG4gICAgXHJcblxyXG4gICAgLyoq5LqL5Lu25Y+R55Sf5ZmoICovXHJcblxyXG4gICAgXHJcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IEJ1eURpYWxvZyBmcm9tIFwiLi9Db3JlL0J1eURpYWxvZ1wiXG5pbXBvcnQgTXNnRGlhbG9nIGZyb20gXCIuL0NvcmUvTXNnRGlhbG9nXCJcbmltcG9ydCBPcGVuR2FtZSBmcm9tIFwiLi9TY3JpcHQvT3BlbkdhbWVcIlxuaW1wb3J0IEdhbWVXb3JsZCBmcm9tIFwiLi9TY3JpcHQvR2FtZVdvcmxkL0dhbWVXb3JsZFwiXG5pbXBvcnQgT3BlblN0b3J5IGZyb20gXCIuL1NjcmlwdC9PcGVuU3RvcnlcIlxuaW1wb3J0IENlbnRlciBmcm9tIFwiLi9TY3JpcHQvQ2VudGVyXCJcclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTE0NDA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj05MDA7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cImZpeGVkaGVpZ2h0XCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cInRvcFwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJsZWZ0XCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJTdGFydEdhbWUuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcIkNvcmUvQnV5RGlhbG9nLnRzXCIsQnV5RGlhbG9nKTtcbiAgICAgICAgcmVnKFwiQ29yZS9Nc2dEaWFsb2cudHNcIixNc2dEaWFsb2cpO1xuICAgICAgICByZWcoXCJTY3JpcHQvT3BlbkdhbWUudHNcIixPcGVuR2FtZSk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzXCIsR2FtZVdvcmxkKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5TdG9yeS50c1wiLE9wZW5TdG9yeSk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9DZW50ZXIudHNcIixDZW50ZXIpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuY2xhc3MgTWFpbiB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcclxuXHRcdGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuXHRcdGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlO1xyXG5cclxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG5cclxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXHJcblx0XHRHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcblx0fVxyXG59XHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7XHJcbiIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEsIHsgT3V0Q291bnRyeURhdGEgfSBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgVG9vbCBmcm9tIFwiLi4vVG9vbC9Ub29sXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiDkurrnp43niLbnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZSB7XHJcbiAgICAvKirlnLrmma8qL1xyXG4gICAgcHJpdmF0ZSB2aWV3IDogTGF5YS5TcHJpdGU7XHJcbiAgICAvKirnsr7ngbUgKi9cclxuICAgIHB1YmxpYyBzcCA6IExheWEuU3ByaXRlO1xyXG4gICAgLyoq5qiq5Z2Q5qCH56e75Yqo6YCf5bqmICovXHJcbiAgICBwcml2YXRlIGRpclg6bnVtYmVyO1xyXG4gICAgLyoq57q15Z2Q5qCH56e75Yqo6YCf5bqmICovXHJcbiAgICBwcml2YXRlIGRpclk6bnVtYmVyO1xyXG4gICAgXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKuWimeWGhSAqKioqKioqKioqKiovXHJcbiAgICAvKirlopnlhoXkurrov5jmmK/lopnlpJbkurogKi9cclxuICAgIHB1YmxpYyBpc091dCA6IGJvb2xlYW47XHJcbiAgICAvKirkurrlsZ7mgKcgKi9cclxuICAgIHB1YmxpYyB0eXBlOnN0cmluZztcclxuICAgIC8qKuS6uueahOacneWQkSAqL1xyXG4gICAgcHVibGljIHRvd2FyZCA6IGFueTtcclxuICAgIC8qKumdouWJjeeahDXkuKrmo4DmtYvngrkgKi9cclxuICAgIHB1YmxpYyB0b3dhcmRQb3MgOiBBcnJheTxhbnk+O1xyXG4gICAgLyoq5Lq655qE56e75Yqo55uu5qCH54K5ICovXHJcbiAgICBwdWJsaWMgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlO1xyXG4gICAgLyoq5Ye655Sf54K5ICovXHJcbiAgICBwdWJsaWMgYm9ybk5vZGUgOiBMYXlhLlNwcml0ZTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xyXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XHJcbiAgICAgICAgdGhpcy5pc091dCA9IGlzT3V0O1xyXG4gICAgICAgIHRoaXMudHlwZT10eXBlO1xyXG4gICAgICAgIHRoaXMuaW5pdCh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirliJ3lp4vljJYgKi9cclxuICAgIHByaXZhdGUgaW5pdCh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+aVsOaNruWIneWni+WMllxyXG4gICAgICAgIHRoaXMuc2V0RGF0YUluaXQoKTtcclxuICAgICAgICAvL+WIm+W7ulxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaVsOaNruWIneWni+WMliAqL1xyXG4gICAgcHJpdmF0ZSBzZXREYXRhSW5pdCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudG93YXJkID0ge1xyXG4gICAgICAgICAgICB4OjEwMDAsXHJcbiAgICAgICAgICAgIHk6MCxcclxuICAgICAgICAgICAgc3BlZWQ6R2FtZUNvbmZpZy5URVNUX1BPSU5UX1NQRUVELHJvdGF0aW9uOnVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGFyZ2V0Um90YXRpb246dW5kZWZpbmVkLFxyXG4gICAgICAgICAgICByb3RhdGlvbkNoYW5nZSA6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG93YXJkUG9zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5byA5aeL6KGM5YqoICovXHJcbiAgICBwdWJsaWMgb3BlbkJlaGF2aW91cigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+i/kOihjOS6humAu+i+kVxyXG4gICAgICAgIGlmKHRoaXMuaXNPdXQpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zT3V0KCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoT3V0Q291bnRyeURhdGEuaW5zXy5saW1pdFRpbWUqNjAsdGhpcyx0aGlzLmxpbWl0VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGVvcGxlX1Bvc0lubmVyKCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIubG9vcCgxNix0aGlzLHRoaXMucGVvcGxlX1Bvc0lubmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq6ICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVBlb3BsZSh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAgdGhpcy5jcmVhdGVTcCh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirliJvlu7pTcHJpdGUgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlU3AodHlwZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGltZ1VybCA9IFwibWFwL1wiK3R5cGUrXCIucG5nXCI7XHJcbiAgICAgICAgaWYoIXRoaXMuc3ApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNwID0gbmV3IExheWEuU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnNwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcC5sb2FkSW1hZ2UoaW1nVXJsKTtcclxuICAgICAgICB0aGlzLnNwLnNpemUoMTIsMTIpO1xyXG4gICAgICAgIHRoaXMuc3AucGl2b3QodGhpcy5zcC53aWR0aC8yLHRoaXMuc3AuaGVpZ2h0LzIpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq6K6+572u5Yid5aeL5L2N572uICovXHJcbiAgICBwdWJsaWMgc2V0UG9zKHgseSxzcDpMYXlhLlNwcml0ZSk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcC54ID0geDtcclxuICAgICAgICB0aGlzLnNwLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYm9ybk5vZGUgPSBzcDtcclxuICAgIH1cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5aKZ5aSW5Lq66KGM5Yqo6YC76L6RKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHByaXZhdGUgcGVvcGxlX1Bvc091dCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pa55ZCR77yM5pa55ZCR55SoKC0xfjEp6KGo56S6XHJcbiAgICAgICAgaWYodGhpcy5zcC54PD05MDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5zcC54Pj0xMTAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJYPS1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCkqMi0xO1xyXG4gICAgICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKSoyLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze077yM5Zyo5q2k5pe26Ze05YaF56e75YqoLOmaj+acuuaXtumXtOWcqCgyLDgp5Lit6YCJ5oupXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo2KzI7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMuY2xvc2VNb3ZlVGltZXIpO1xyXG4gICAgICAgIC8v5byA5ZCv56e75YqoXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5Y2V5L2N5bin56e75YqoKi9cclxuICAgIHByaXZhdGUgbW92ZURpc3RhbmNlKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3AueCs9dGhpcy5kaXJYO1xyXG4gICAgICAgIHRoaXMuc3AueSs9dGhpcy5kaXJZO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWFs+mXreenu+WKqOWumuaXtuWZqO+8jOW8gOWQr+WOn+WcsOS8keaBryovXHJcbiAgICBwcml2YXRlIGNsb3NlTW92ZVRpbWVyKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XHJcbiAgICAgICAgLy/kvJHmga/ml7bpl7Tnu5PmnZ/lkI7nu6fnu63np7vliqhcclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjYrMjtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5wZW9wbGVfUG9zT3V0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5rue55WZ5pe26Ze077yM6Iul6LaF6L+H5pe26Ze077yM5bCx56a75byA5aSW5Z+OICovXHJcbiAgICBwcml2YXRlIGxpbWl0VGltZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIGlmKHRoaXMuc3AueDw9MTAwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWD0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirnorDmkp7mo4DmtYsgKi9cclxuICAgIHByaXZhdGUgY2hlY2tMaW1pdF9PdXQoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/ovrnnlYzmo4DmtYtcclxuICAgICAgICBpZih0aGlzLnNwLng8LTV8fHRoaXMuc3AueD4yMDA1fHx0aGlzLnNwLnk8LTUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUoKTtcclxuICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIodGhpcy50eXBlLHRoaXMpO1xyXG4gICAgICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50LS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+aKpOWfjuays+ajgOa1i1xyXG4gICAgICAgIGlmKHRoaXMuc3AueT49MzkwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/ph43mlrDnu5nkuIDkuKrkvY3np7tcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5Z+O6Zeo5Yy65Z+f5qOA5rWLXHJcbiAgICAgICAgaWYodGhpcy5zcC54PjkzMiYmdGhpcy5zcC54PDEwNjgmJnRoaXMuc3AueT4zNTAmJnRoaXMuc3AueTwzOTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+WfjumXqOaYr+WQpuaJk+W8gFxyXG4gICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdG9yeVBlb3BsZSgpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIodGhpcy50eXBlLHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgLy/ln47lpJbkurrlj6MtMVxyXG4gICAgICAgICAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgLy/lm73lrrbkurrlj6MrMVxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5jYWxfTWFpbkRhdGEoR2FtZUNvbmZpZy5NQUlOX1BPUFVMQVRJT04sMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWimeWGheS6uuihjOWKqOmAu+i+kSovXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirlopnlhoXkurrooYzliqjpgLvovpEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHByb3RlY3RlZCBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcclxuICAgIHtcclxuXHJcbiAgICAgICAgLy8gdGhpcy50b3dlZFRvTW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUcmFnZXQodGFyZ2V0OkxheWEuU3ByaXRlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXQ7XHJcbiAgICAgICAgLy/mtYvor5VcclxuICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSAodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnRvd2FyZC54ID0gdGFyZ2V0Lng7XHJcbiAgICAgICAgdGhpcy50b3dhcmQueSA9IHRhcmdldC55O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKnRvd2VyZOi9rOWMluaIkOS9jeenuyAqL1xyXG4gICAgcHJvdGVjdGVkIHRvd2VkVG9Nb3ZlKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMudG93YXJkLnJvdGF0aW9uKSB0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IFRvb2wucm90YXRlUm9wZVBvaW50XzIodGhpcy5zcC54LHRoaXMuc3AueSwyMDAsNjAwKTs7XHJcbiAgICAgICAgdGhpcy5wZW9wbGVUb3dlcmQoKTsvL+iuqeebruagh+acneWQkeiuoeeul+aVsFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuacneWQkSAgdG93ZXJk56e75YqoICovXHJcbiAgICBwcml2YXRlIHBvc01vdmUoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwLnggKz0gdGhpcy50b3dhcmQuc3BlZWQqVG9vbC5yb3RhdGlvblNldCh0aGlzLnRvd2FyZC5yb3RhdGlvbixcInNpblwiKTtcclxuICAgICAgICB0aGlzLnNwLnkgKz0gdGhpcy50b3dhcmQuc3BlZWQqVG9vbC5yb3RhdGlvblNldCh0aGlzLnRvd2FyZC5yb3RhdGlvbixcImNvc1wiKTtcclxuICAgICAgICB0aGlzLnNwLnJvdGF0aW9uID0gdGhpcy50b3dhcmQucm90YXRpb247XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zcC5yb3RhdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuS6uumdouWQkSAqL1xyXG4gICAgcHJvdGVjdGVkIHBlb3BsZVRvd2VyZCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKCk7Ly/ojrflvpfkupTkuKrngrnvvIzmoLnmja7nm67moIflnZDmoIforqHnrpdcclxuICAgICAgICB0aGlzLnRlc3RUb3dlcmQoKTsvL+ajgOa1i+aYr+WQpuespuWQiOimgeaxgiDkuI3nrKblkIggKyAtIDVcclxuICAgIH1cclxuXHJcbiAgICAvKirmo4DmtYvooYzotbDmlrnlkJEgKi9cclxuICAgIHByb3RlY3RlZCB0ZXN0VG93ZXJkKCkgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBvd2VyID0gdGhpcy50ZXN0Q29saWRlcigpOy8vIC0xIDAgMSAyIDMgNCA1XHJcbiAgICAgICAgaWYocG93ZXIgPiAwKVxyXG4gICAgICAgIHsvL+aSnuWIsOS6humcgOimgei9rOaWueWQkVxyXG4gICAgICAgICAgICB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDdHIocG93ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmp1ZGdlTGVmdFJpZ2h0KCk7ICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wb3NNb3ZlKCk7Ly/np7vliqhcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmRUYXJnZXQoKTtcclxuICAgICAgICB0aGlzLnRvd2FyZC5zcGVlZCA9IEdhbWVDb25maWcuVEVTVF9QT0lOVF9TUEVFRDsgICAgICBcclxuICAgICAgICB0aGlzLnBvc01vdmUoKTsvL+enu+WKqCAgXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6YCf5bqm5o6n5Yi2ICovXHJcbiAgICBwcml2YXRlIHNwZWVkQ3RyKHBvd2VyKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRvd2FyZC5zcGVlZCA9IEdhbWVDb25maWcuVEVTVF9QT0lOVF9TUEVFRCooKHBvd2VyKzEpLyh0aGlzLnRvd2FyZFBvcy5sZW5ndGgrMikpOyBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwZWVkIDo6XCIgKyB0aGlzLnRvd2FyZC5zcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pat5pa55ZCRICovXHJcbiAgICBwcm90ZWN0ZWQganVkZ2VMZWZ0UmlnaHQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZSArPSBHYW1lQ29uZmlnLlRFU1RfUE9JTlRfUk87XHJcbiAgICAgICAgbGV0IHJvMSA9IHRoaXMudG93YXJkLnJvdGF0aW9uIC0gdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2U7XHJcbiAgICAgICAgbGV0IHJvMiA9IHRoaXMudG93YXJkLnJvdGF0aW9uICsgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2U7XHJcbiAgICAgICAgdGhpcy5nZXRUb3dlcmRQb3Mocm8xKTtcclxuICAgICAgICBsZXQgbnVtUm8xID0gdGhpcy50ZXN0Q29saWRlcigpO1xyXG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKHJvMik7XHJcbiAgICAgICAgbGV0IG51bVJvMiA9IHRoaXMudGVzdENvbGlkZXIoKTtcclxuICAgICAgICBpZihudW1SbzEgPT0gLTEpIHt0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvMTsgcmV0dXJuO31cclxuICAgICAgICBpZihudW1SbzIgPT0gLTEpIHt0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvMjsgcmV0dXJuO31cclxuICAgICAgICB0aGlzLmp1ZGdlTGVmdFJpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqZmluZFRhcmdldOWvu+aJvuebruaghyAqL1xyXG4gICAgcHJpdmF0ZSBmaW5kVGFyZ2V0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IENhID0gdGhpcy50b3dhcmQucm90YXRpb24gLSB0aGlzLnRvd2FyZC50YXJnZXRSb3RhdGlvbjtcclxuICAgICAgICBpZihDYSA+IDApIHRoaXMudG93YXJkLnJvdGF0aW9uIC09IDU7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoIENhIDwgMCApIHRoaXMudG93YXJkLnJvdGF0aW9uICs9NTtcclxuICAgICAgICBpZiggTWF0aC5hYnMoQ2EpIDwgNSkgdGhpcy50b3dhcmQucm90YXRpb24gKz0gQ2E7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgLyoq5qOA5rWL5piv5ZCm56Kw5pKeIOaSnuWIsOS6hui/lOWbnnR1cmUgLTHlj6/ku6XotbAgMOS7peS4iuihqOekuueisOaSnuWIsOWTquS4queCuSovXHJcbiAgICBwcm90ZWN0ZWQgdGVzdENvbGlkZXIoKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBudW0gPSAtMTtcclxuICAgICAgICBsZXQgYXJlYSA6IEFycmF5PExheWEuU3ByaXRlPj0gRGF0YU1hbmFnZXIuaW5zXy5hcnJfUmlnaHRBcmVhO1xyXG4gICAgICAgIGlmKHRoaXMuc3AueDw5ODEpIGFyZWEgPSBEYXRhTWFuYWdlci5pbnNfLmFycl9MZWZ0QXJlYTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPGFyZWEubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMuYm9ybk5vZGUsdGhpcy5zcCkpIFxyXG4gICAgICAgICAgICAgICAge3JldHVybiAtMTt9XHJcbiAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KGFyZWFbaV0sdGhpcy5zcCkpe3JldHVybiAwO30vL+WmguaenOW3sue7j+aSnuS4iuS6huOAgiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBoID0gMDtoPHRoaXMudG93YXJkUG9zLmxlbmd0aDtoKyspXHJcbiAgICAgICAgICAgIHsvL+S6lOS4queCueajgOa1i1xyXG4gICAgICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QoYXJlYVtpXSx0aGlzLnRvd2FyZFBvc1toXSkpXHJcbiAgICAgICAgICAgICAgICB7Ly/nprvkurrmnIDov5HnmoTngrlcclxuICAgICAgICAgICAgICAgICAgICBudW0gPSBoKzE7Ly8x77yMMu+8jDPvvIw077yMNVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuXHJcbiAgICAvKirkurrpnaLlkJHnmoTkupTkuKrmo4DmtYvngrkgKi9cclxuICAgIHByb3RlY3RlZCBnZXRUb3dlcmRQb3Mocm90YXRpb25UZXN0PykgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gdGhpcy50b3dhcmQucm90YXRpb247Ly/kvb/nlKjlvZPliY3pnaLlkJFcclxuICAgICAgICBpZihyb3RhdGlvblRlc3QpIHJvdGF0aW9uID0gcm90YXRpb25UZXN0O1xyXG4gICAgICAgIGVsc2UgdGhpcy5rZWVwVG93ZXJkRGF0YSgpOy8v5L+d5a2YIOeOsOWcqOS4uuatouWIsOebruagh+eCueeahOinkuW6plxyXG4gICAgICAgIGlmKHJvdGF0aW9uID09PSB1bmRlZmluZWQpIFxyXG4gICAgICAgIHsvL+WmguaenOinkuW6puaYr3VuZGVmXHJcbiAgICAgICAgICAgIHJvdGF0aW9uID0gdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb24vL+ebruagh+inkuW6pu+8jOWIneWni+inkuW6piAgIFxyXG4gICAgICAgICAgICB0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvdGF0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/kvY3np7vpnIDopoHnmoTlj5jph49cclxuICAgICAgICBsZXQgY29zIDogbnVtYmVyID0gVG9vbC5yb3RhdGlvblNldChyb3RhdGlvbixcImNvc1wiKTtcclxuICAgICAgICBsZXQgc2luIDogbnVtYmVyID0gVG9vbC5yb3RhdGlvblNldChyb3RhdGlvbixcInNpblwiKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS14OjpcIiArIHRoaXMuc3AueCArIFwieTo6XCIgKyB0aGlzLnNwLnkpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8R2FtZUNvbmZpZy5URVNUX1BPSU5UX0NPVU5UO2krKykvL+iusOW9leS6lOS4qlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnRvd2FyZFBvc1tpXSkgdGhpcy50b3dhcmRQb3NbaV0gPSB7fTsgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnRvd2FyZFBvc1tpXS54ID0gdGhpcy5zcC54ICsgR2FtZUNvbmZpZy5URVNUX1BPSU5UX0RJQypzaW4qKGkrMSk7XHJcbiAgICAgICAgICAgIHRoaXMudG93YXJkUG9zW2ldLnkgPSB0aGlzLnNwLnkgKyBHYW1lQ29uZmlnLlRFU1RfUE9JTlRfRElDKmNvcyooaSsxKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG93YXJkUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirkv53lrZggdG93ZXLkv6Hmga8gKi9cclxuICAgIHByb3RlY3RlZCBrZWVwVG93ZXJkRGF0YSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v5a2Y5YKo546w5Zyo54K55Yiw55uu5qCH6KeS5bqmXHJcbiAgICAgICAgbGV0IHBYID0gdGhpcy5zcC54O1xyXG4gICAgICAgIGxldCBwWSA9IHRoaXMuc3AueTtcclxuICAgICAgICAvLyBsZXQgdFggPSB0aGlzLnRhcmdldE5vZGUueDtcclxuICAgICAgICAvLyBsZXQgdFkgPSB0aGlzLnRhcmdldE5vZGUueTtcclxuICAgICAgICBsZXQgdFggPSAyMDA7XHJcbiAgICAgICAgbGV0IHRZID0gNjAwO1xyXG4gICAgICAgIHRoaXMudG93YXJkLnRhcmdldFJvdGF0aW9uID0gVG9vbC5yb3RhdGVSb3BlUG9pbnRfMihwWCxwWSx0WCx0WSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Lq65raI5aSxICovXHJcbiAgICBwcm90ZWN0ZWQgZGVzdG9yeVBlb3BsZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiBleHRlbmRzIFBlb3BsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9iYmVyIGV4dGVuZHMgUGVvcGxle1xyXG4gICAgLyoq6LSi5pS/5Lyk5a6zICovXHJcbiAgICBwdWJsaWMgbW9uZXk6bnVtYmVyO1xyXG4gICAgLyoq5bm456aP5bqmICovXHJcbiAgICBwdWJsaWMgcG9wdWxhclN1cHBvcnQ6bnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlgbflj5botKLmlL/nmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3V0TW9uZXlUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze06L+b6KGM5YG355uXKDEwLTIwKeenklxyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMTArMTA7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5YG355uXXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMuQ3V0TW9uZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pe26Ze05ZCO5YG35Y+WXHJcbiAgICBwdWJsaWMgQ3V0TW9uZXkoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tb25leT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumZjeS9jiAqL1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VudGVyIGV4dGVuZHMgTGF5YS5TY3JpcHR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIgKyB0aGlzLnNjcmVlbldpZHRoKTtcclxuICAgICAgICBpZihzY3JlZW5XaWR0aCA8IDgwMCkgKHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lTmFtZVwiKSBhcyBMYXlhLkxhYmVsKS5mb250U2l6ZSA9IDEyNTtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLlNwcml0ZSkueCA9IChzY3JlZW5XaWR0aC0gNjY3KS8yOyAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdvcmxkRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1dvcmxkRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHVpIH0gZnJvbSBcIi4uLy4uL3VpL2xheWFNYXhVSVwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IFBlb3BsZU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvUGVvcGxlTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi4vLi4vQ29yZS9Nc2dEaWFsb2dcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBCdXlEaWFsb2cgZnJvbSBcIi4uLy4uL0NvcmUvQnV5RGlhbG9nXCI7XHJcblxyXG4vKipcclxuICog5LiW55WM566h55CG5Zmo6ISa5pysXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV29ybGQgZXh0ZW5kcyB1aS5HYW1lV29ybGRVSXtcclxuICAgIC8qKkRhdGFNYW5hZ2VyICDljZXkvosgKi9cclxuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xyXG4gICAgcHJpdmF0ZSB3b3JsZEV2ZW50TWFuYWdlciA6IFdvcmxkRXZlbnRNYW5hZ2VyO1xyXG4gICAgLyoq5Lq657G7566h55CG5ZmoKi9cclxuICAgIHByaXZhdGUgcGVvcGxlTWFuYWdlciA6IFBlb3BsZU1hbmFnZXI7XHJcbiAgICAvKipVSeeuoeeQhuWZqCAqL1xyXG4gICAgcHJpdmF0ZSB1aU1hbmFnZXIgOiBVSU1hbmFnZXI7XHJcbiAgICAvKirmtojmga/pgJrnlKjmoYYgKi9cclxuICAgIHByaXZhdGUgbXNnRGlhbG9nIDogTXNnRGlhbG9nO1xyXG4gICAgLyoq6LSt5Lmw5qGGICovXHJcbiAgICBwcml2YXRlIGJ1eURpYWxvZzpCdXlEaWFsb2c7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8qKuWxj+W5leWuveW6piAqL1xyXG4gICAgcHJpdmF0ZSBzY3JlZW5XaWR0aCA6IG51bWJlcjtcclxuICAgIC8qKum8oOagh+aYr+WQpuaMieS4iyAqL1xyXG4gICAgcHJpdmF0ZSBpc0Rvd24gOiBib29sZWFuO1xyXG4gICAgLyoq6byg5qCH54K56K6w5b2VICovXHJcbiAgICBwcml2YXRlIG1vdXNlUG9zIDogYW55O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2FtZURhdGFJbml0KCk7Ly/muLjmiI/lj5jph4/liJ3lp4vljJZcclxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7Ly/nu5nmoaXmt7vliqDkuovku7YgXHJcbiAgICAgICAgdGhpcy5zY3JlZW5TZXR0aW5nKCk7Ly/lsY/luZXlsYXkuK1cclxuICAgICAgICB0aGlzLmdhbWVTdGFydCgpOy8v5ri45oiP5rWB56iL5byA5aeLXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zXy5zZXRBcmVhKHRoaXMuc3Bfc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pWw5o2u5Yid5aeL5YyWICovXHJcbiAgICBwcml2YXRlIGdhbWVEYXRhSW5pdCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud29ybGRFdmVudE1hbmFnZXIgPSBuZXcgV29ybGRFdmVudE1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIgPSBuZXcgUGVvcGxlTWFuYWdlcih0aGlzLnNwX3NjZW5lKTtcclxuICAgICAgICB0aGlzLnVpTWFuYWdlciA9IG5ldyBVSU1hbmFnZXIodGhpcy5zcF9VSSk7XHJcbiAgICAgICAgdGhpcy5tc2dEaWFsb2cgPSBuZXcgTXNnRGlhbG9nKCk7ICAgICAgXHJcbiAgICAgICAgdGhpcy5idXlEaWFsb2c9bmV3IEJ1eURpYWxvZygpO1xyXG4gICAgICAgIHRoaXMubW91c2VQb3MgPSB7fTtcclxuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKua3u+WKoOS6i+S7tiAqL1xyXG4gICAgcHJpdmF0ZSBhZGRFdmVudCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhZ2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLHRoaXMsdGhpcy5tb3VzZURvd24pO1xyXG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9VUCx0aGlzLHRoaXMubW91c2VVcCk7XHJcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX01PVkUsdGhpcyx0aGlzLm1vdXNlTW92ZSk7XHJcbiAgICAgICAgLy/nu5npl6jluK7ngrnngrnlh7vkuosgICBcclxuICAgICAgICB0aGlzLnNwX2Rvb3Iub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuZG9vckN0cik7XHJcbiAgICAgICAgLy/otK3kubDmjInpkq7kuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLmJ0bl9idXkub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuYnV5RGlhbG9nX0NsaWNrKTtcclxuICAgICAgICAvL+WMu+mmhuS6i+S7tue7keWumlxyXG4gICAgICAgIHRoaXMuaG9zcGl0YWwub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuSE9TUElUQUxdKTtcclxuICAgICAgICAvL+WGm+mYn+S6i+S7tue7keWumlxyXG4gICAgICAgIHRoaXMuYXJteS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5BUk1ZXSk7XHJcbiAgICAgICAgLy/nsq7ku5Pkuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLmZhcm0ub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRkFSTV0pOyAgICAgICAgXHJcbiAgICAgICAgLy/np5HmioDppobkuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLnRlY2hub2xvZ3kub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuVEVDSE5PTE9HWV0pOyAgICAgICAgXHJcbiAgICAgICAgLy/mlrDpl7vngrnkuovku7bnu5HlrppcclxuICAgICAgICAvL3RoaXMuZXZlbnRIb3VzZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5FVkVOVF9IT1VTRV0pOyAgICAgXHJcbiAgICAgICAgLy/mlrDpl7vnmoflrqvnu5HlrppcclxuICAgICAgICB0aGlzLnBhbGFjZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5QQUxBQ0VdKTsgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWxj+W5lSDlsYDkuK0qL1xyXG4gICAgcHJpdmF0ZSBzY3JlZW5TZXR0aW5nKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IDkwMC8oTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodC9MYXlhLkJyb3dzZXIuY2xpZW50V2lkdGgpOy8v5bGP5bmV6auY5bqmXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aWR0aFwiICsgdGhpcy5zY3JlZW5XaWR0aCk7XHJcbiAgICAgICAgdGhpcy5zcF9zY2VuZS54ID0gLSgyMDAwLXRoaXMuc2NyZWVuV2lkdGgpLzI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v5LqL5Lu25Zue6LCDXHJcblxyXG4gICAgLyoq6Zeo55qE5byA5YWzICovXHJcbiAgICBwcml2YXRlIGRvb3JDdHIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4pXHJcbiAgICAgICAgey8v5byA6ZeoXHJcbiAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRvb3JDbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgey8v5YWz6ZeoXHJcbiAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZG9vck9wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YWz6ZeoICovXHJcbiAgICBwcml2YXRlIGRvb3JDbG9zZSgpIDogdm9pZFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKirlvIDpl6ggKi9cclxuICAgIHByaXZhdGUgZG9vck9wZW4oKSA6IHZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq56e75YqoICovXHJcbiAgICBwcml2YXRlIG1vdXNlTW92ZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzRG93bikgcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMubW91c2VQb3MueClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgdGhpcy5zcF9zY2VuZS54ICs9IExheWEuc3RhZ2UubW91c2VYIC0gdGhpcy5tb3VzZVBvcy54OyBcclxuICAgICAgICAvLyAgICB0aGlzLnNwX3NjZW5lLnkgKz0gTGF5YS5zdGFnZS5tb3VzZVkgLSB0aGlzLm1vdXNlUG9zLng7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3Bfc2NlbmUueCA+IDApICB0aGlzLnNwX3NjZW5lLnggPSAwO1xyXG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPCAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCkpIHRoaXMuc3Bfc2NlbmUueCA9ICAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW91c2VQb3MueCA9IExheWEuc3RhZ2UubW91c2VYO1xyXG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IExheWEuc3RhZ2UubW91c2VZO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaLluWKqOaMieS4iyAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZURvd24oKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5ouW5Yqo5oqs6LW3ICovXHJcbiAgICBwcml2YXRlIG1vdXNlVXAoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3VzZU1vdmUpO1xyXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7IFxyXG4gICAgICAgIHRoaXMubW91c2VQb3MueCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLnkgPSB1bmRlZmluZWQ7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirngrnlh7sg6I635Y+W5bu6562R5L+h5oGvICovXHJcbiAgICBwcml2YXRlIG9uSG91c2VJbmZvKHR5cGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubXNnRGlhbG9nLnNob3dNc2codHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq54K55Ye76LSt5Lmw5oyJ6ZKuICovXHJcbiAgICBwcml2YXRlIGJ1eURpYWxvZ19DbGljaygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlplXCIpXHJcbiAgICAgICAgdGhpcy5idXlEaWFsb2cucG9wdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeyrumjny0tLS0tLS0tLS0tLS1cclxuICAgIC8qKueyrumjn+S6p+WHuuWFrOW8jyAqL1xyXG4gICAgcHVibGljIGNhbF9HcmFpbkFkZCgpOnZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq57Ku6aOf5raI6ICX5YWs5byPICovXHJcbiAgICBwdWJsaWMgY2FsX0dyYWluTWludXMoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq57Ku6aOf57uT566XICovXHJcbiAgICBwdWJsaWMgY2FsX0dyYWluKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v5aaC5p6c6L+Y5pyJ57Ku6aOf5bqT5a2YXHJcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZD49Q291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/lpoLmnpznlJ/kuqfph4/lpKfkuo7lpKfkuo7mtojogJfnjofnmoTmn5DkuKrlgI3njofvvIzlhYjorqnlhbboh6rliqjovazljJbkuLrotKLmlL/vvIzkuYvlkI7kv67mlLnkuLrmiYvliqjovazljJZcclxuICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZC9Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXM+PUdhbWVDb25maWcuR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL+i2heWHuuWAjeeOh+eahOmDqOWIhlxyXG4gICAgICAgICAgICAgICAgbGV0IGV4Y2hhbmdlPUNvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQtQ291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKkdhbWVDb25maWcuR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UO1xyXG4gICAgICAgICAgICAgICAgLy/mjaLpkrFcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VNb25leShleGNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAvL+WJqeS9meeahOWKoOWFpeW6k+WtmFxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrKz0oQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZC1leGNoYW5nZS1Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy/liqDlhaXlupPlrZhcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jays9KENvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQtQ291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+WmguaenOW6k+WtmOWKoOS4iueUn+S6p+eahOeyrumjn+S4jei2s+S7peaKteWkn+a2iOiAl+eahOeyrumjn1xyXG4gICAgICAgICAgICBpZigoQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrK0NvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQpPENvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy/ngrnlh7vpgInmi6nmmK/lkKbotK3kubDnsq7po5/vvIzlpoLmnpzkuI3otK3kubDliJnlr7zoh7Tkurrlj6Plh4/lsJHlkozlubjnpo/luqbpmY3kvY5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy/lh4/lsJHlupPlrZhcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jay09Q291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzLUNvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq57Ku6aOf5o2i6ZKxICovXHJcbiAgICBwdWJsaWMgZXhjaGFuZ2VNb25leShncmFpbjpudW1iZXIpOnZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZKx5o2i57Ku6aOfICovXHJcbiAgICBwdWJsaWMgZXhjaGFuZ2VHcmFpbihtb25leTpudW1iZXIpOnZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0t56iA5pyJ6ZeoXHJcbiAgICAvKirotK3kubDnqIDmnInpl6ggKi9cclxuICAgIHB1YmxpYyBidXlSYXJlRG9vcigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8vLy8vLy8vLy8vL+a4uOaIj+a1geeoi+W8gOWniy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvKirmuLjmiI/mtYHnqIvlvIDlp4sgKi9cclxuICAgIHByaXZhdGUgZ2FtZVN0YXJ0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLmNyZWF0ZVBlb3BsZSgpOy8v5Lq65Y+j55Sf5oiQ6YC76L6R6L+Q6KGMXHJcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLmNyZWF0ZVBlb3BsZV9Jbm5lcigpOy8v5YaF5Lq65Y+j55Sf5oiQXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbkdhbWUgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIDogdm9pZFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIG9uQ2xpY2soKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lV29ybGQuc2NlbmVcIik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuU3RvcnkgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIDogdm9pZFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIG9uQ2xpY2soKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lU3Rvcnkuc2NlbmVcIik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb29se1xyXG4gICAgLy/ojrflj5bkuInop5Llh73mlbDlgLxcclxuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRpb25EZWFsKGZ4Om51bWJlcixmeTpudW1iZXIsc3g6bnVtYmVyLHN5Om51bWJlcixnZXRTdHJpbmcpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgLyoq5pac6L65ICovXHJcbiAgICAgICAgbGV0IGMgOiBudW1iZXIgPSBNYXRoLnNxcnQoTWF0aC5wb3coZnggLSBzeCwyKSArIE1hdGgucG93KGZ5IC0gc3ksMikpO1xyXG4gICAgICAgIC8qKuS4tOi+uSAqL1xyXG4gICAgICAgIGxldCBhIDogbnVtYmVyID0gc3ggLSBmeDtcclxuICAgICAgICAvKirlr7novrkgKi9cclxuICAgICAgICBsZXQgYiA6IG51bWJlciA9IHN5IC0gZnk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZ2V0U3RyaW5nID09IFwic2luXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiI3NpbiA9PVwiICsgKGIvYykpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGIvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZ2V0U3RyaW5nID09IFwiY29zXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiI2NvcyA9PVwiICsgKGEvYykpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGEvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIjdGFuID09XCIgKyAoYi9hKSk7Ly/lr7novrkg5q+UIOS4tOi+uSBcclxuICAgICAgICAgICAgcmV0dXJuIChiL2EpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirnorDmkp7mo4DmtYsgZGljTnVtIO+8mumihOiuvui3neemuyBvYmplY3Qx5ZKMb2JqZWN0MuS8oOWFpXNwcml0ZSzmmK/mjInnhafmr4/kuKpzcHJpdGXnmoTplJrngrnlnKjkuK3lv4PkvY3nva7mnaXorqHnrpfnmoQgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbGxpc2lvbkNoZWNrKG9iamVjdDEsb2JqZWN0MikgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYoTWF0aC5hYnMob2JqZWN0MS54IC0gb2JqZWN0Mi54KTwgb2JqZWN0MS53aWR0aC8yICsgb2JqZWN0Mi53aWR0aC8yJiZcclxuICAgICAgICAgICBNYXRoLmFicyhvYmplY3QxLnkgLSBvYmplY3QyLnkpIDwgb2JqZWN0MS5oZWlnaHQvMiArIG9iamVjdDIuaGVpZ2h0LzIpe1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0ZVJvcGVQb2ludF8yKHgseSxYLFkpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgICAgICBsZXQgY29zPVRvb2wucm90YXRpb25EZWFsKHgseSxYLFksXCJjb3NcIik7XHJcbiAgICAgICAgICAgIGxldCBzaW49VG9vbC5yb3RhdGlvbkRlYWwoeCx5LFgsWSxcInNpblwiKTtcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uO1xyXG4gICAgICAgICAgICBpZihjb3M+PTAmJnNpbj4wKXtcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uPSAxODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKS05MDtcclxuICAgICAgICAgICAgfWVsc2UgaWYoY29zPDAmJnNpbj49MCl7XHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbj0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKS05MDtcclxuICAgICAgICAgICAgfWVsc2UgaWYoY29zPD0wJiZzaW48MCl7XHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbj05MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2UgaWYoY29zPjAmJnNpbjw9MCl7XHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbj0gOTAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoeSA8IFkpIHJvdGF0aW9uICs9IDE4MDtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdGF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluinkuW6piBcclxuICAgICAqIOenu+WKqOeCueWcqOWJjVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Um90YXRpb24oeDEseTEseDIseTIpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvcz1Ub29sLnJvdGF0aW9uRGVhbCh4MSx5MSx4Mix5MixcImNvc1wiKTtcclxuICAgICAgICBsZXQgc2luPVRvb2wucm90YXRpb25EZWFsKHgxLHkxLHgyLHkyLFwic2luXCIpO1xyXG4gICAgICAgIGxldCByb3RhdGlvbjtcclxuICAgICAgICBpZihjb3MgPj0wICYmIHNpbj4wKXtcclxuICAgICAgICAgICAgcm90YXRpb24gPSA5MCArIDE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb3MgPDAgJiYgc2luPj0wKXtcclxuICAgICAgICAgICAgcm90YXRpb24gPSAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvcyA+MCAmJiBzaW48PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3RhdGlvbiA9IC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29zIDw9MCAmJiBzaW48MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uID0gMTgwLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm90YXRpb247XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcm90YXRpb24gPSA0NSDop5LluqZcclxuICAgICAqIOaxgiBjb3Mg6L+Y5pivIHNpblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uU2V0KHJvdGF0aW9uLHR5cGVTdHJpbmcpICA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCByIDtcclxuICAgICAgICBsZXQgdmFsdWU7XHJcbiAgICAgICAgaWYocm90YXRpb24gPCAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm90YXRpb24gKz0gMzYwKihNYXRoLmFicyhNYXRoLmZsb29yKHJvdGF0aW9uLzM2MCkrMikpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihNYXRoLmZsb29yKHJvdGF0aW9uLzM2MCk+MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uIC09IDM2MCpNYXRoLmZsb29yKHJvdGF0aW9uLzM2MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHIgPSAocm90YXRpb24pLzE4MCpNYXRoLlBJOyAgICAgICAgXHJcbiAgICAgICAgaWYodHlwZVN0cmluZyA9PSBcImNvc1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmFicyhNYXRoLmNvcyhyKSk7XHJcbiAgICAgICAgICAgIGlmKChyb3RhdGlvbiA+IDAgJiYgcm90YXRpb24gPD0gOTApIHx8IChyb3RhdGlvbj4yNzAgJiYgcm90YXRpb248PTM2MCkpICB2YWx1ZSA9IC12YWx1ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb3M6OlwiICsgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgeyAgICAgICAgIFxyXG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKE1hdGguc2luKHIpKTtcclxuICAgICAgICAgICAgaWYoKHJvdGF0aW9uPjE4MCAmJiByb3RhdGlvbiA8PSAyNzApIHx8IChyb3RhdGlvbj4yNzAgJiYgcm90YXRpb248PTM2MCkpIHZhbHVlID0gLXZhbHVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNpbjo6XCIgKyB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZSAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi3neemu+iuoeeul1xyXG4gICAgICogMiDlr7nosaFcclxuICAgICAqIGZpcnN0XHJcbiAgICAgKiBzZWNvbmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjb3VudERpY19PYmplY3QoZjphbnksczphbnkpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhmLnggLSBzLngsMikgKyBNYXRoLnBvdyhmLnkgLSBzLnksMikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pa55Z2X5qOA5rWLIFxyXG4gICAgICogXHJcbiAgICAgKiDmlrnlnZflr7nosaEgc3BcclxuICAgICAqIOajgOa1i+eahOeCuSDlr7nosaFcclxuICAgICAqICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJsb2NrVGVzdChzcCxwb2ludCkgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBvaW50TGVmdCA6IGFueSA9e3g6c3AueCAtIHNwLndpZHRoLzIseTpzcC55LXNwLmhlaWdodC8yfTtcclxuICAgICAgICBsZXQgcG9pbnRSaWdodCA6IGFueSA9e3g6c3AueCArIHNwLndpZHRoLzIseTpzcC55K3NwLmhlaWdodC8yfTtcclxuICAgICAgICBsZXQgc19wb2ludExlZnQgPSBwb2ludC54ID4gcG9pbnRMZWZ0LnggJiYgcG9pbnQueT5wb2ludExlZnQueTtcclxuICAgICAgICBsZXQgc19wb2ludFJpZ2h0ID0gcG9pbnQueCA8IHBvaW50UmlnaHQueCAmJiBwb2ludC55PHBvaW50UmlnaHQueTtcclxuICAgICAgICBpZihzX3BvaW50TGVmdCAmJiBzX3BvaW50UmlnaHQpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiAgZmFsc2U7XHJcbiAgICB9XHJcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cbmltcG9ydCBWaWV3PUxheWEuVmlldztcclxuaW1wb3J0IERpYWxvZz1MYXlhLkRpYWxvZztcclxuaW1wb3J0IFNjZW5lPUxheWEuU2NlbmU7XG5leHBvcnQgbW9kdWxlIHVpIHtcclxuICAgIGV4cG9ydCBjbGFzcyBCdXlVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgYmc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9idXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ1eV9uYW1lOmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBidXlfaW5wdXQ6TGF5YS5UZXh0SW5wdXQ7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkJ1eVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgR2FtZVdvcmxkVUkgZXh0ZW5kcyBTY2VuZSB7XHJcblx0XHRwdWJsaWMgc3Bfc2NlbmU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2dyb3VuZDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3Bfcml2ZXI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX3dhbGw6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2Rvb3I6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV80OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV81OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV82OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV84OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV85OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBldmVudEhvdXNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHBhbGFjZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG9zcGl0YWw6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIwOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZWNobm9sb2d5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8wOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI2OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGZhcm06TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMwOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM2OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYXJteTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfVUk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9idXk6TGF5YS5TcHJpdGU7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJHYW1lV29ybGRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBtb2R1bGUgdWkuRGlhIHtcclxuICAgIGV4cG9ydCBjbGFzcyBDdXJyZW50RGlhbG9nVUkgZXh0ZW5kcyBTY2VuZSB7XHJcblx0XHRwdWJsaWMgbXNnQm9keTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3ByaXRlX1BlcnNvbjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3ByaXRlX01zZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnRuX2Nsb3NlOkxheWEuU3ByaXRlO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiRGlhL0N1cnJlbnREaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHIiXX0=
