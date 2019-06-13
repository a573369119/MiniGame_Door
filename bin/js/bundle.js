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
    /**国家威望 */
    GameConfig.MAIN_PRESTIGE = "prestige";
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
var GameConfig_1 = require("../Config/GameConfig");
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
        //--------主数据影响
        //固定支出
        /**军费 */
        this.armyCost = 100;
        /**政府费用 */
        this.governCost = 100;
        /**科技费用 */
        this.technologyCost = 100;
        /**税收率 */
        this.tax = 0.05;
        //变动率
        /**粮食消耗量 (人均消耗量) */
        this.grainCost = 1;
        /**粮食产量 (人均产量)*/
        this.grainAdd = 1;
        /**粮食库存 */
        this.grainStock = 0;
        /**军费减少率 */
        this.armyPercent = 0.1;
        /**GDP 挣钱能力，每人每天能产多少钱 */
        this.GDP = 10;
        /**进城数 目标值2min*/
        this.enterPeople = 50;
        /**出城数 目标值2min*/
        this.exitPeople = 50;
        /**人口比例数 进城数/出城数 2min*/
        this.percent = 1;
        //------------------------------------------普通人口占比
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
        //--------影响 【主数据】----------------
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
        /**筛查能力 启动特殊门的时候  筛查能力生效*/
        this.preparation = 0.5;
        /**特殊门 筛查 1-防止进入   2-邀请进入*/
        // public keepSelect : Array<number> = [];
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
        this.arr_inPeople = new Array();
        this.arr_outPeople = new Array();
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
        return this.percent;
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
    /**设置五大主值结算 */
    CountryData.prototype.set_MainData = function (type, count) {
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
        this.cal_MainData(type, count);
    };
    CountryData.prototype.cal_MainData = function (type, count) {
        switch (type) {
            case GameConfig_1.default.MAIN_MONEY:
            ///TO DO
        }
        //财政 影响结算
        this.moneyInfluence();
        //人口 影响结算
        this.popularSupportInfluence();
        //幸福度 影响结算
        this.popularSupportInfluence();
        //科技 影响结算
        this.technologyInfluence();
        //威望 影响结算
        this.prestigeInfluence();
    };
    /**财政结算 财政影响*/
    CountryData.prototype.moneyInfluence = function () {
    };
    /**幸福度 影响结算*/
    CountryData.prototype.popularSupportInfluence = function () {
    };
    /**人口 影响结算*/
    CountryData.prototype.populationInfluence = function () {
    };
    /**科技 影响结算*/
    CountryData.prototype.technologyInfluence = function () {
    };
    /**威望 影响结算*/
    CountryData.prototype.prestigeInfluence = function () {
    };
    /**改变 进、出 目标人数 @isout:是否是出城  @count：改变目标值*/
    CountryData.prototype.setInOutTarget = function (isOut, count) {
        if (isOut)
            this.exitPeople += count;
        else
            this.enterPeople += count;
    };
    /**改变 进、出 目标人数 @isout:是否是出城  @count：改变实际值*/
    CountryData.prototype.setInOutTruth = function (isOut, count) {
        if (isOut)
            this._outerPeople += count;
        else
            this._innerPeople += count;
    };
    /**通知人口出城 @type ： 进成ture  出城 false*/
    CountryData.prototype.peopleGoOut = function (type) {
        var arr = this.arr_inPeople;
        if (type)
            arr = this.arr_outPeople;
        var random = Math.random();
        var index = Math.floor(arr.length * random);
        if (index > 0) {
            if (!arr[index].isGo) {
                arr[index].peopleGo(type);
            }
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
        //------------------------------------------
        /**普通人*/
        this.common = 0.8;
        /**科学家 SSS*/
        this.scientist = 0.03;
        /**明星 SS*/
        this.star = 0.01;
        /**土匪 -S */
        this.bandit = 0.06;
        /**盗贼 -A */
        this.robber = 0.1;
        /**变量名 */
        this.arr_People = ["common", "scientist", "star", "bandit", "robber"];
    }
    /**获取区间数组 0,0.8,0.83,0.84,0.9,1*/
    OutCountryData.prototype.getPercentArea = function () {
        var arrPercent = []; //生产比例
        var arr_People = this.arr_People;
        var number = 0;
        arrPercent.push(number);
        for (var i = 0; i < arr_People.length; i++) {
            number += this[arr_People[i]];
            arrPercent.push(number);
        }
        return arrPercent;
    };
    OutCountryData.ins_ = new OutCountryData();
    return OutCountryData;
}());
exports.OutCountryData = OutCountryData;
},{"../Config/GameConfig":1}],4:[function(require,module,exports){
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
    //---------------------------------------
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
        DataManager_1.default.ins_.arr_inPeople.push(people); //加入维护数组
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
            /*this.people_PosOut();
            Laya.timer.frameLoop(1,this,this.checkLimit_Out);
            Laya.timer.frameOnce(OutCountryData.ins_.limitTime*60,this,this.limitTime);*/
            this.doorPeople_ToOut();
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
    ///////////////////////////////////////////////////////////////////////////////////
    /***
     * 进程 / 出城逻辑
     * @type true进城  false出城
    */
    People.prototype.peopleGo = function (type) {
        if (type) {
            //进城方法
            this.outPeople_ToDoor();
        }
        else {
            //出城方法
        }
    };
    /**城外强制进门 */
    People.prototype.outPeople_ToDoor = function () {
        Laya.timer.clearAll(this);
        var dirX = 1000 - this.sp.x;
        var dirY = 410 - this.sp.y;
        var dis = Math.sqrt(Math.pow(1000 - this.sp.x, 2) + Math.pow(410 - this.sp.y, 2));
        this.dirX = dirX / dis;
        this.dirY = dirY / dis;
        Laya.timer.frameLoop(1, this, this.moveDistance);
        Laya.timer.frameLoop(1, this, this.checkLimit_Out);
    };
    /**门强制出城外 */
    People.prototype.doorPeople_ToOut = function () {
        Laya.timer.clearAll(this);
        var x = Math.random() * 136 + 932;
        var y = 350;
        this.setPos(x, y, this.sp);
        this.dirX = Math.random() * 2 - 1;
        this.dirY = -Math.random() * 0.7 - 0.2;
        Laya.timer.frameLoop(1, this, this.moveDistance);
        Laya.timer.frameLoop(1, this, this.checkLimit_Out);
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
        this.timerCount = 0;
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
    /*private buyDialog_Click(type:string):void
    {
        switch(type)
        {
            case GameConfig.MAIN_POPULATION:
                this.buyDialog.buy_name.text="人口";
                break;
            case GameConfig.MAIN_POPULARSUPPORT:
                this.buyDialog.buy_name.text="幸福度";
                break;
            case GameConfig.MAIN_MONEY:
                this.buyDialog.buy_name.text="财政";
                break;
            case GameConfig.MAIN_TECHNOLOGY:
                this.buyDialog.buy_name.text="科技";
                break;
            case GameConfig.MAIN_PRESTIGE:
                this.buyDialog.buy_name.text="威望";
                break;
        }
        this.buyDialog.popup();
    }*/
    //---------------------------粮食-------------
    /**粮食产出公式 */
    GameWorld.prototype.cal_GrainAdd = function () {
    };
    /**粮食消耗公式 */
    GameWorld.prototype.cal_GrainMinus = function () {
    };
    /**粮食结算 */
    /*public cal_Grain():void
    {
        //如果还有粮食库存
        if(CountryData.ins_.grainAdd>=CountryData.ins_.grainMinus)
        {
            //如果生产量大于大于消耗率的某个倍率，先让其自动转化为财政，之后修改为手动转化
            if(CountryData.ins_.grainAdd/CountryData.ins_.grainMinus>=GameConfig.GRAIN_EXCHANGEMONEY_PERCENT)
            {
                //超出倍率的部分
                let exchange=CountryData.ins_.grainAdd-CountryData.ins_.grainMinus*GameConfig.GRAIN_EXCHANGEMONEY_PERCENT;
                //换钱
                this.exchangeMoney(exchange);
                //剩余的加入库存
                CountryData.ins_.grainStock+=(CountryData.ins_.grainAdd-exchange-CountryData.ins_.grainMinus);
            }
            else
            {
                //加入库存
                CountryData.ins_.grainStock+=(CountryData.ins_.grainAdd-CountryData.ins_.grainMinus);
            }
        }
        else
        {
            //如果库存加上生产的粮食不足以抵够消耗的粮食
            if((CountryData.ins_.grainStock+CountryData.ins_.grainAdd)<CountryData.ins_.grainMinus)
            {
                //点击选择是否购买粮食，如果不购买则导致人口减少和幸福度降低
                
            }
            else
            {
                //减少库存
                CountryData.ins_.grainStock-=CountryData.ins_.grainMinus-CountryData.ins_.grainAdd;
            }
        }
    }*/
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
    //////////////////////////////////////////////人口流动通知器
    /**
     * 流动比例， 通知器
     *
     *  */
    GameWorld.prototype.currentRatio = function () {
        this.timerCount++;
        var countryData = DataManager_2.default.ins_;
        var BI = countryData.percent; //进/出
        var outerTarget = countryData.exitPeople; //出门目标数
        var innerTaget = countryData.enterPeople; //进门目标数
        var _outer = countryData._outerPeople; //出城口实际值
        var _inner = countryData._innerPeople; //入城实际值
        var lastTime = 120000 - this.timerCount - 50000; //获取剩余时间，多预支10秒
        if (outerTarget > _outer) {
            //通知
            countryData.peopleGoOut(false);
        }
        if (innerTaget > _inner) {
            //通知            
            countryData.peopleGoOut(true);
        }
        if (this.timerCount > 120000) {
            countryData._outerPeople = 0; //实际值归零
            countryData._innerPeople = 0; //实际值归零
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXIyLjAvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvQnV5RGlhbG9nLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vbi50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyLnRzIiwic3JjL1NjcmlwdC9DZW50ZXIudHMiLCJzcmMvU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHMiLCJzcmMvU2NyaXB0L09wZW5HYW1lLnRzIiwic3JjL1NjcmlwdC9PcGVuU3RvcnkudHMiLCJzcmMvVG9vbC9Ub29sLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQTtJQUFBO0lBMkRBLENBQUM7SUExREcsY0FBYztJQUNBLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLG1CQUFRLEdBQVksTUFBTSxDQUFDO0lBQ3pDLGNBQWM7SUFDQSx3QkFBYSxHQUFZLFdBQVcsQ0FBQztJQUduRCxzQ0FBc0M7SUFDdEMsUUFBUTtJQUNNLG1CQUFRLEdBQVksQ0FBQyxDQUFDO0lBQ3BDLFFBQVE7SUFDTSxlQUFJLEdBQVksQ0FBQyxDQUFDO0lBQ2hDLFFBQVE7SUFDTSxlQUFJLEdBQVcsQ0FBQyxDQUFDO0lBQy9CLFFBQVE7SUFDTSxxQkFBVSxHQUFXLENBQUMsQ0FBQztJQUNyQyxhQUFhO0lBQ0Msc0JBQVcsR0FBVyxDQUFDLENBQUM7SUFDdEMsUUFBUTtJQUNNLGlCQUFNLEdBQVcsQ0FBQyxDQUFDO0lBQ2pDLDBDQUEwQztJQUMxQyxXQUFXO0lBQ0cseUJBQWMsR0FBWSxDQUFDLENBQUM7SUFDMUMsUUFBUTtJQUNNLDJCQUFnQixHQUFZLEdBQUcsQ0FBQztJQUM5QyxZQUFZO0lBQ0Usd0JBQWEsR0FBWSxFQUFFLENBQUM7SUFDMUMsYUFBYTtJQUNDLDZCQUFrQixHQUFZLENBQUMsQ0FBQztJQUM5QyxVQUFVO0lBQ0ksMkJBQWdCLEdBQVksQ0FBQyxDQUFDO0lBRzVDLHNDQUFzQztJQUN0QyxVQUFVO0lBQ0kscUJBQVUsR0FBWSxPQUFPLENBQUM7SUFDNUMsVUFBVTtJQUNJLDBCQUFlLEdBQVUsWUFBWSxDQUFDO0lBQ3BELFdBQVc7SUFDRyw4QkFBbUIsR0FBWSxnQkFBZ0IsQ0FBQztJQUM5RCxVQUFVO0lBQ0ksMEJBQWUsR0FBWSxZQUFZLENBQUM7SUFDdEQsVUFBVTtJQUNJLHdCQUFhLEdBQVksVUFBVSxDQUFDO0lBR2xELHNDQUFzQztJQUN0QyxhQUFhO0lBQ0Msa0JBQU8sR0FBUSxFQUFFLEdBQUMsRUFBRSxDQUFDO0lBQ25DLGdCQUFnQjtJQUNGLHNDQUEyQixHQUFDLEdBQUcsQ0FBQztJQUM5QyxZQUFZO0lBQ0UsdUJBQVksR0FBQyxDQUFDLENBQUM7SUFDakMsaUJBQUM7Q0EzREQsQUEyREMsSUFBQTtrQkEzRG9CLFVBQVU7Ozs7QUNBL0IsNkNBQXFDO0FBQ3JDOztHQUVHO0FBQ0g7SUFBdUMsNkJBQVE7SUFDM0M7UUFBQSxZQUVJLGlCQUFPLFNBR1Y7UUFGRyxLQUFJLENBQUMsS0FBSyxHQUFDLEdBQUcsQ0FBQztRQUNmLEtBQUksQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDOztJQUNwQixDQUFDO0lBRUQsNEJBQVEsR0FBUjtJQUdBLENBQUM7SUFFRCxVQUFVO0lBQ0YsNkJBQVMsR0FBakI7UUFFSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFVBQVU7SUFDRiw0QkFBUSxHQUFoQjtRQUVJLElBQUksSUFBSSxDQUFBO0lBQ1osQ0FBQztJQUVELFVBQVU7SUFDRiw4QkFBVSxHQUFsQjtRQUVJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQS9CQSxBQStCQyxDQS9Cc0MsY0FBRSxDQUFDLEtBQUssR0ErQjlDOzs7OztBQ25DRCxtREFBOEM7QUFHOUM7O0dBRUc7QUFDSDtJQTZJSTtRQTNJQSx1Q0FBdUM7UUFDdkMsVUFBVTtRQUNILFVBQUssR0FBWSxLQUFLLENBQUM7UUFDOUIsVUFBVTtRQUNILGVBQVUsR0FBVSxHQUFHLENBQUM7UUFDL0IsV0FBVztRQUNKLG1CQUFjLEdBQVksRUFBRSxDQUFDO1FBQ3BDLFVBQVU7UUFDSCxlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ2hDLFVBQVU7UUFDSCxhQUFRLEdBQVksRUFBRSxDQUFDO1FBRTlCLHFDQUFxQztRQUNyQyxlQUFlO1FBQ2YsTUFBTTtRQUNOLFFBQVE7UUFDRCxhQUFRLEdBQVksR0FBRyxDQUFDO1FBQy9CLFVBQVU7UUFDSCxlQUFVLEdBQVksR0FBRyxDQUFDO1FBQ2pDLFVBQVU7UUFDSCxtQkFBYyxHQUFZLEdBQUcsQ0FBQztRQUNyQyxTQUFTO1FBQ0YsUUFBRyxHQUFZLElBQUksQ0FBQztRQUUzQixLQUFLO1FBQ0wsbUJBQW1CO1FBQ1osY0FBUyxHQUFZLENBQUMsQ0FBQztRQUM5QixnQkFBZ0I7UUFDVCxhQUFRLEdBQVksQ0FBQyxDQUFDO1FBQzdCLFVBQVU7UUFDSCxlQUFVLEdBQVEsQ0FBQyxDQUFDO1FBQzNCLFdBQVc7UUFDSixnQkFBVyxHQUFRLEdBQUcsQ0FBQztRQUM5Qix3QkFBd0I7UUFDakIsUUFBRyxHQUFZLEVBQUUsQ0FBQztRQUd6QixnQkFBZ0I7UUFDVCxnQkFBVyxHQUFZLEVBQUUsQ0FBQztRQUNqQyxnQkFBZ0I7UUFDVCxlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ2hDLHVCQUF1QjtRQUNoQixZQUFPLEdBQVksQ0FBQyxDQUFDO1FBUzVCLGtEQUFrRDtRQUNsRCxlQUFlO1FBQ1Isa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDckMsZUFBZTtRQUNSLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBQ3BDLGdCQUFnQjtRQUNULGtCQUFhLEdBQVksR0FBRyxDQUFDO1FBQ3BDLFVBQVU7UUFDSCxtQkFBYyxHQUFZLEdBQUcsQ0FBQztRQUNyQyxRQUFRO1FBQ0QsV0FBTSxHQUFZLEdBQUcsQ0FBQztRQUU3QixrQ0FBa0M7UUFRbEMsY0FBYztRQUNkLDJCQUEyQjtRQUNwQixTQUFJLEdBQVksQ0FBQyxDQUFDO1FBQ3pCLDRCQUE0QjtRQUNyQixvQkFBZSxHQUFZLENBQUMsQ0FBQztRQUNwQywyQkFBMkI7UUFDcEIsUUFBRyxHQUFZLENBQUMsQ0FBQztRQUV4QixjQUFjO1FBQ1AsZUFBVSxHQUFtQixDQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUNwRiw4QkFBOEI7UUFDdkIsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUM1QixZQUFZO1FBQ0wsY0FBUyxHQUFZLENBQUMsQ0FBQztRQUM5QixVQUFVO1FBQ0gsU0FBSSxHQUFZLENBQUMsQ0FBQztRQUN6QixXQUFXO1FBQ0osV0FBTSxHQUFZLENBQUMsQ0FBQztRQUMzQixXQUFXO1FBQ0osV0FBTSxHQUFZLENBQUMsQ0FBQztRQUN2QixpQ0FBaUM7UUFDakMsOEJBQThCO1FBQzlCLGVBQWU7UUFDZixpQ0FBaUM7UUFDakMsYUFBYTtRQUNiLDRCQUE0QjtRQUM1QixjQUFjO1FBQ2QsOEJBQThCO1FBQzlCLGNBQWM7UUFDZCw4QkFBOEI7UUFDbEMsWUFBWTtRQUNaLFVBQVU7UUFDSCxlQUFVLEdBQVcsSUFBSSxDQUFDO1FBQ2pDLDBCQUEwQjtRQUNuQixnQkFBVyxHQUFZLEdBQUcsQ0FBQztRQUNsQywyQkFBMkI7UUFDM0IsMENBQTBDO1FBSTFDLDhDQUE4QztRQUM5QyxZQUFZO1FBQ0wsZ0JBQVcsR0FBUyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDO1FBQzFDLFlBQVk7UUFDTCxZQUFPLEdBQVMsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQztRQUN0QyxZQUFZO1FBQ0wsa0JBQWEsR0FBUyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDO1FBQzlDLFFBQVE7UUFDRCxjQUFTLEdBQVMsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQztRQUN4QyxRQUFRO1FBQ0Qsa0JBQWEsR0FBUyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDO1FBQzdDLFFBQVE7UUFDRCxZQUFPLEdBQVMsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFDLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQztRQU92QyxtQkFBbUI7UUFDbkIsYUFBYTtRQUNOLHNCQUFpQixHQUFZLEdBQUcsQ0FBQztRQUN4QyxZQUFZO1FBQ0wsa0JBQWEsR0FBWSxHQUFHLENBQUM7UUFDcEMsWUFBWTtRQUNMLGdCQUFXLEdBQVksR0FBRyxDQUFDO1FBSTlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsOEJBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxVQUFVO0lBQ0gsNkJBQU8sR0FBZCxVQUFlLElBQWdCO1FBRTNCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDOUIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQ2pDO1lBQ0ksSUFBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFDL0I7Z0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO2lCQUNJLElBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxHQUFHLEVBQ3pCO2dCQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUVEO2dCQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksb0NBQWMsR0FBckI7UUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDJDQUFxQixHQUE1QixVQUE2QixJQUFXO1FBRXBDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUM5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBR0QsNENBQTRDO0lBQzVDLGNBQWM7SUFDUCxrQ0FBWSxHQUFuQixVQUFvQixJQUFXLEVBQUMsS0FBWTtRQUV4QyxRQUFPLElBQUksRUFDWDtZQUNJLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsS0FBSyxJQUFFLEtBQUssQ0FBQztnQkFDbEIsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFJLENBQUMsVUFBVSxJQUFFLEtBQUssQ0FBQztnQkFDdkIsTUFBTTtZQUNWLEtBQUssZ0JBQWdCO2dCQUNqQixJQUFJLENBQUMsY0FBYyxJQUFFLEtBQUssQ0FBQztnQkFDM0IsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFJLENBQUMsVUFBVSxJQUFFLEtBQUssQ0FBQztnQkFDdkIsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsUUFBUSxJQUFFLEtBQUssQ0FBQztnQkFDckIsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUdNLGtDQUFZLEdBQW5CLFVBQW9CLElBQVcsRUFBQyxLQUFZO1FBRXhDLFFBQU8sSUFBSSxFQUFDO1lBQ1IsS0FBSyxvQkFBVSxDQUFDLFVBQVUsQ0FBQztZQUMzQixRQUFRO1NBQ1g7UUFDRCxTQUFTO1FBQ1QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLFNBQVM7UUFDVCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixVQUFVO1FBQ1YsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsU0FBUztRQUNULElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLFNBQVM7UUFDVCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsY0FBYztJQUNOLG9DQUFjLEdBQXRCO0lBR0EsQ0FBQztJQUdELGFBQWE7SUFDTCw2Q0FBdUIsR0FBL0I7SUFHQSxDQUFDO0lBRUQsWUFBWTtJQUNKLHlDQUFtQixHQUEzQjtJQUdBLENBQUM7SUFFRCxZQUFZO0lBQ0oseUNBQW1CLEdBQTNCO0lBR0EsQ0FBQztJQUVELFlBQVk7SUFDSix1Q0FBaUIsR0FBekI7SUFHQSxDQUFDO0lBRUQsMkNBQTJDO0lBQ3BDLG9DQUFjLEdBQXJCLFVBQXNCLEtBQUssRUFBQyxLQUFLO1FBRTdCLElBQUcsS0FBSztZQUFFLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDOztZQUM5QixJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBRUQsMkNBQTJDO0lBQ3BDLG1DQUFhLEdBQXBCLFVBQXFCLEtBQUssRUFBQyxLQUFLO1FBRTVCLElBQUcsS0FBSztZQUFFLElBQUksQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDOztZQUNoQyxJQUFJLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0NBQW9DO0lBQzdCLGlDQUFXLEdBQWxCLFVBQW1CLElBQUk7UUFFbkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM1QixJQUFHLElBQUk7WUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUcsS0FBSyxHQUFDLENBQUMsRUFDVjtZQUNJLElBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUNuQjtnQkFDSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7SUFDTCxDQUFDO0lBeFNhLGdCQUFJLEdBQWlCLElBQUksV0FBVyxFQUFFLENBQUM7SUEwU3pELGtCQUFDO0NBM1NELEFBMlNDLElBQUE7a0JBM1NvQixXQUFXO0FBNlNoQyxRQUFRO0FBQ1I7SUFBQTtRQUVJLHVDQUF1QztRQUN2QyxjQUFjO1FBQ1AsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUM1QixhQUFhO1FBQ04sYUFBUSxHQUFRLENBQUMsQ0FBQztRQUN6QixXQUFXO1FBQ0osY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUMzQiw0Q0FBNEM7UUFDNUMsUUFBUTtRQUNELFdBQU0sR0FBWSxHQUFHLENBQUM7UUFDN0IsWUFBWTtRQUNMLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDakMsVUFBVTtRQUNILFNBQUksR0FBWSxJQUFJLENBQUM7UUFDNUIsV0FBVztRQUNKLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDOUIsV0FBVztRQUNKLFdBQU0sR0FBWSxHQUFHLENBQUM7UUFDN0IsU0FBUztRQUNGLGVBQVUsR0FBbUIsQ0FBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFnQnhGLENBQUM7SUFkRyxpQ0FBaUM7SUFDMUIsdUNBQWMsR0FBckI7UUFFRyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBQzFCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDakMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDckM7WUFDSyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNyQixDQUFDO0lBbkNhLG1CQUFJLEdBQW9CLElBQUksY0FBYyxFQUFFLENBQUM7SUFvQy9ELHFCQUFDO0NBckNELEFBcUNDLElBQUE7QUFyQ1ksd0NBQWM7Ozs7QUNwVDNCLDZDQUFxQztBQUVyQzs7R0FFRztBQUNIO0lBQXVDLDZCQUFzQjtJQUd6RCxRQUFRO0lBQ1Isa0NBQWtDO0lBRWxDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBRkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDMUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7O0lBQ3pCLENBQUM7SUFFRCxTQUFTO0lBQ0YsMkJBQU8sR0FBZCxVQUFlLElBQVc7UUFFdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFNUQsQ0FBQztJQUVELFFBQVE7SUFDQSw2QkFBUyxHQUFqQjtRQUVJLFFBQU8sSUFBSSxDQUFDLElBQUksRUFDaEI7U0FFQztJQUNMLENBQUM7SUFFRCxTQUFTO0lBQ0QsK0JBQVcsR0FBbkI7SUFHQSxDQUFDO0lBRUQsVUFBVTtJQUNGLDhCQUFVLEdBQWxCO0lBR0EsQ0FBQztJQUVELFFBQVE7SUFDRCwrQkFBVyxHQUFsQjtRQUVJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsRUFBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVPLDZCQUFTLEdBQWpCO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0EzREEsQUEyREMsQ0EzRHNDLGNBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxHQTJENUQ7Ozs7O0FDL0RELG1EQUE4QztBQUM5Qyw2Q0FBNEQ7QUFDNUQsdURBQWdEO0FBQ2hELHVEQUFnRDtBQUNoRDs7R0FFRztBQUNIO0lBY0kseUNBQXlDO0lBQ3pDLHVCQUFZLElBQUk7UUFSaEIsOENBQThDO1FBQzlDLHFDQUFxQztRQUM3QixrQkFBYSxHQUFtQixDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxhQUFhO1FBQ0wsY0FBUyxHQUFZLENBQUMsQ0FBQztRQUMvQixZQUFZO1FBQ0osZUFBVSxHQUFZLEdBQUcsQ0FBQztRQUk5QixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxZQUFZO0lBQ0wseUNBQWlCLEdBQXhCO1FBRUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxTQUFTO0lBQ0Ysb0NBQVksR0FBbkI7UUFFSSxJQUFJLE1BQU0sQ0FBQztRQUNYLGVBQWU7UUFDZixJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxLQUFLO1FBQ0wsSUFBRyxNQUFNLElBQUUsQ0FBQyxJQUFFLE1BQU0sR0FBQyxFQUFFLEVBQ3ZCO1lBQ0ksTUFBTSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUcsQ0FBQyxNQUFNLEVBQ1Y7Z0JBQ0ksTUFBTSxHQUFFLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLG9CQUFVLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVEO1NBQ0o7UUFDRCxJQUFJO2FBQ0MsSUFBRyxNQUFNLElBQUUsRUFBRSxJQUFFLE1BQU0sR0FBQyxFQUFFLEVBQzdCO1lBQ0ksTUFBTSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUcsQ0FBQyxNQUFNLEVBQ1Y7Z0JBQ0ksTUFBTSxHQUFFLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLG9CQUFVLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVEO1NBQ0o7UUFDRCxJQUFJO2FBQ0MsSUFBRyxNQUFNLElBQUUsRUFBRSxJQUFFLE1BQU0sR0FBQyxFQUFFLEVBQzdCO1lBQ0ksTUFBTSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUcsQ0FBQyxNQUFNLEVBQ1Y7Z0JBQ0ksTUFBTSxHQUFFLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLG9CQUFVLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVEO1NBQ0o7UUFDRCxLQUFLO2FBQ0EsSUFBRyxNQUFNLElBQUUsRUFBRSxJQUFFLE1BQU0sR0FBQyxFQUFFLEVBQzdCO1lBQ0ksTUFBTSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZDLElBQUcsQ0FBQyxNQUFNLEVBQ1Y7Z0JBQ0ksTUFBTSxHQUFFLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLG9CQUFVLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9EO1NBQ0o7UUFDRCxJQUFJO2FBRUo7WUFDSSxNQUFNLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsSUFBRyxDQUFDLE1BQU0sRUFDVjtnQkFDSSxNQUFNLEdBQUUsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsb0JBQVUsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUQ7U0FDSjtRQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLENBQUM7UUFDekIsSUFBRyw0QkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsNEJBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsRUFDOUQ7WUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEQ7UUFDRCw0QkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsWUFBWTtJQUNMLDhCQUFNLEdBQWI7UUFFSSxJQUFJLE9BQU8sR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxRQUFPLE9BQU8sRUFDZDtZQUNJLEtBQUssQ0FBQztnQkFDRixNQUFNO2dCQUNOLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEdBQUcsQ0FBQztnQkFDekIsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixNQUFNO2dCQUNOLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7Z0JBQ1QsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixNQUFNO2dCQUNOLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDO2dCQUNaLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEdBQUcsQ0FBQztnQkFDekIsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELGtFQUFrRTtJQUczRCxvQ0FBWSxHQUFuQixVQUFvQixNQUFNLEVBQUMsSUFBVztRQUVsQyxRQUFRO1FBQ1IsSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsQ0FBQyxFQUM3QjtZQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRCwwQ0FBMEM7SUFDbkMsMENBQWtCLEdBQXpCO1FBRUcsSUFBSSxZQUFZLENBQUU7UUFDbEIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUEsTUFBTTtRQUMxQixJQUFJLFVBQVUsR0FBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0MsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDckM7WUFDSyxNQUFNLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEUsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsU0FBUztJQUNELG9DQUFZLEdBQXBCLFVBQXFCLFlBQVk7UUFFN0IsSUFBRyxZQUFZLElBQUksTUFBTTtZQUFFLE9BQU87UUFDbEMsSUFBSSxNQUFNLENBQUM7UUFDWCxNQUFNO1FBQ04sUUFBTyxZQUFZLEVBQ25CLEVBQUsscUNBQXFDO1lBQ3RDLEtBQUssb0JBQVUsQ0FBQyxVQUFVO2dCQUN0QixNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLE1BQU07WUFDVixLQUFLLG9CQUFVLENBQUMsVUFBVSxFQUFDLElBQUk7Z0JBQzNCLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsTUFBTTtZQUNWLEtBQUssb0JBQVUsQ0FBQyxVQUFVLEVBQUMsSUFBSTtnQkFDM0IsTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN4QixNQUFNO1lBQ1YsS0FBSyxvQkFBVSxDQUFDLFFBQVEsRUFBQyxJQUFJO2dCQUN6QixNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLE1BQU07WUFDVixLQUFLLG9CQUFVLENBQUMsYUFBYSxFQUFDLEtBQUs7Z0JBQy9CLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsTUFBTTtTQUNiO1FBQ0QscUJBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLFFBQVE7UUFDbkQsSUFBRyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQztZQUFBLE9BQU87U0FBQztRQUM5RixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxVQUFVO0lBQ0YsaUNBQVMsR0FBakIsVUFBa0IsTUFBTTtRQUVwQixJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsSUFBb0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkUsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDO1FBQzdDLElBQUksS0FBSyxDQUFFO1FBQ1gsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUM3QztZQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRCxLQUFLLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsSUFBRyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQ3hDO2dCQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUE7Z0JBQ3RCLE9BQU87YUFDVjtTQUNKO0lBQ0wsQ0FBQztJQUVELFlBQVk7SUFDSixpQ0FBUyxHQUFqQixVQUFrQixVQUFVO1FBRXhCLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUNwQztZQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxvQkFBVSxDQUFDLGtCQUFrQixHQUFDLEdBQUcsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFbkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdEIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ3BDO1lBQ0ksSUFBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUN0RDtnQkFDSSxNQUFNLEdBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLE1BQU07YUFDVDtTQUNKO1FBQ0QsdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxJQUFHLEtBQUssS0FBSyxTQUFTLEVBQUM7WUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQUEsT0FBTztTQUFDO1FBQ3RELElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFDeEQ7WUFDSSxJQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVO2dCQUFFLE9BQU87WUFDakUsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdkM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsU0FBUztJQUN0QyxDQUFDO0lBRUQsY0FBYztJQUNQLHVDQUFlLEdBQXRCO1FBRUksSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUMzQztZQUNJLE1BQU0sSUFBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ2pDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0F0UEEsQUFzUEMsSUFBQTs7Ozs7QUM1UEQ7O0dBRUc7QUFDSDtJQU1JLFVBQVU7SUFDVixtQkFBWSxFQUFjO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTCxnQkFBQztBQUFELENBWkEsQUFZQyxJQUFBOzs7OztBQ2pCRDs7Ozs7O0dBTUc7QUFDSDtJQUdJO0lBRUEsQ0FBQztJQVFMLHdCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7Ozs7O0FDcEJELGdHQUFnRztBQUNoRyw4Q0FBd0M7QUFDeEMsOENBQXdDO0FBQ3hDLDhDQUF3QztBQUN4QywwREFBb0Q7QUFDcEQsZ0RBQTBDO0FBQzFDLDBDQUFvQztBQUNwQzs7RUFFRTtBQUNGO0lBYUk7SUFBYyxDQUFDO0lBQ1IsZUFBSSxHQUFYO1FBQ0ksSUFBSSxHQUFHLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDN0MsR0FBRyxDQUFDLG1CQUFtQixFQUFDLG1CQUFTLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsbUJBQVMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxvQkFBb0IsRUFBQyxrQkFBUSxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLCtCQUErQixFQUFDLG1CQUFTLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMscUJBQXFCLEVBQUMsbUJBQVMsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBQyxnQkFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQXJCTSxnQkFBSyxHQUFRLElBQUksQ0FBQztJQUNsQixpQkFBTSxHQUFRLEdBQUcsQ0FBQztJQUNsQixvQkFBUyxHQUFRLGFBQWEsQ0FBQztJQUMvQixxQkFBVSxHQUFRLE1BQU0sQ0FBQztJQUN6QixpQkFBTSxHQUFRLEtBQUssQ0FBQztJQUNwQixpQkFBTSxHQUFRLE1BQU0sQ0FBQztJQUNyQixxQkFBVSxHQUFLLGlCQUFpQixDQUFDO0lBQ2pDLG9CQUFTLEdBQVEsRUFBRSxDQUFDO0lBQ3BCLGdCQUFLLEdBQVMsS0FBSyxDQUFDO0lBQ3BCLGVBQUksR0FBUyxLQUFLLENBQUM7SUFDbkIsdUJBQVksR0FBUyxLQUFLLENBQUM7SUFDM0IsNEJBQWlCLEdBQVMsSUFBSSxDQUFDO0lBVzFDLGlCQUFDO0NBdkJELEFBdUJDLElBQUE7a0JBdkJvQixVQUFVO0FBd0IvQixVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7QUNsQ2xCLDJDQUFzQztBQUN0QztJQUNDO1FBQ0MsZ0JBQWdCO1FBQ2hCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxLQUFLLEVBQUUsb0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEtBQUssRUFBRSxvQkFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsb0JBQVUsQ0FBQyxTQUFTLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsb0JBQVUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsb0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQztRQUUxRCxvREFBb0Q7UUFDcEQsSUFBSSxvQkFBVSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDOUYsSUFBSSxvQkFBVSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzRixJQUFJLG9CQUFVLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU3QixnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JJLENBQUM7SUFFRCw4QkFBZSxHQUFmO1FBQ0MsK0NBQStDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCw2QkFBYyxHQUFkO1FBQ0MsWUFBWTtRQUNaLG9CQUFVLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNGLFdBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBQ0QsT0FBTztBQUNQLElBQUksSUFBSSxFQUFFLENBQUM7Ozs7QUNsQ1gsbURBQThDO0FBQzlDLG1EQUFrRTtBQUNsRSxxQ0FBZ0M7QUFDaEMsbURBQThDO0FBRTlDOzs7R0FHRztBQUNIO0lBNEJJLGdCQUFZLElBQUksRUFBQyxJQUFXLEVBQUMsS0FBSztRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELFNBQVM7SUFDRCxxQkFBSSxHQUFaLFVBQWEsSUFBSTtRQUViLE9BQU87UUFDUCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSTtRQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFdBQVc7SUFDSCw0QkFBVyxHQUFuQjtRQUVJLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDVixDQUFDLEVBQUMsSUFBSTtZQUNOLENBQUMsRUFBQyxDQUFDO1lBQ0gsS0FBSyxFQUFDLG9CQUFVLENBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLFNBQVM7WUFDcEQsY0FBYyxFQUFDLFNBQVM7WUFDeEIsY0FBYyxFQUFHLENBQUM7U0FDckIsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUVqQyxDQUFDO0lBRUQsVUFBVTtJQUNILDhCQUFhLEdBQXBCO1FBRUksT0FBTztRQUNQLElBQUcsSUFBSSxDQUFDLEtBQUssRUFDYjtZQUNJOzt5RkFFNkU7WUFDN0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0I7YUFFRDtZQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqRDtJQUNMLENBQUM7SUFFRCxTQUFTO0lBQ0QsNkJBQVksR0FBcEIsVUFBcUIsSUFBSTtRQUVwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxjQUFjO0lBQ04seUJBQVEsR0FBaEIsVUFBaUIsSUFBSTtRQUVqQixJQUFJLE1BQU0sR0FBRyxNQUFNLEdBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFDWDtZQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsWUFBWTtJQUNMLHVCQUFNLEdBQWIsVUFBYyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQWM7UUFFNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxrRkFBa0Y7SUFDMUUsOEJBQWEsR0FBckI7UUFFSSxvQkFBb0I7UUFDcEIsSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBRSxHQUFHLEVBQ2pCO1lBQ0ksSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7YUFDSSxJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFFLElBQUksRUFDdkI7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzNCO2FBRUQ7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7U0FDL0I7UUFDRCw4QkFBOEI7UUFDOUIsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU07UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsVUFBVTtJQUNGLDZCQUFZLEdBQXBCO1FBRUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtQkFBbUI7SUFDWCwrQkFBYyxHQUF0QjtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsYUFBYTtRQUNiLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0JBQXNCO0lBQ2QsMEJBQVMsR0FBakI7UUFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFFLElBQUksRUFDbEI7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDNUI7YUFFRDtZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBSUQsVUFBVTtJQUNGLCtCQUFjLEdBQXRCO1FBRUksTUFBTTtRQUNOLElBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUM3QztZQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLDRCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xDO1FBRUQsT0FBTztRQUNQLElBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUUsR0FBRyxFQUNqQjtZQUNJLFNBQVM7WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2hDO1FBRUQsUUFBUTtRQUNSLElBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsR0FBRyxJQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLElBQUksSUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxHQUFHLElBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsR0FBRyxFQUM5RDtZQUNJLFFBQVE7WUFDUixJQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDOUI7Z0JBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQyxRQUFRO2dCQUNSLDRCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMvQixRQUFRO2dCQUNSLHFCQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBVSxDQUFDLGVBQWUsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUMvRDtTQUVKO0lBQ0wsQ0FBQztJQUVELFlBQVk7SUFDWiwwR0FBMEc7SUFDaEcsZ0NBQWUsR0FBekI7UUFHSSxzQkFBc0I7SUFDMUIsQ0FBQztJQUVNLDBCQUFTLEdBQWhCLFVBQWlCLE1BQWtCO1FBRS9CLDRCQUE0QjtRQUM1QixJQUFJO1FBQ0osSUFBSSxDQUFDLFVBQVUsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQWlCLENBQUM7UUFDdEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQkFBaUI7SUFDUCw0QkFBVyxHQUFyQjtRQUVJLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxjQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUN0RyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQSxVQUFVO0lBQ2xDLENBQUM7SUFFRCxrQkFBa0I7SUFDVix3QkFBTyxHQUFmO1FBRUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsY0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxjQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3hDLGlDQUFpQztJQUNyQyxDQUFDO0lBRUQsU0FBUztJQUNDLDZCQUFZLEdBQXRCO1FBRUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUEsZ0JBQWdCO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBLG9CQUFvQjtJQUMxQyxDQUFDO0lBRUQsWUFBWTtJQUNGLDJCQUFVLEdBQXBCO1FBRUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUEsaUJBQWlCO1FBQ2hELElBQUcsS0FBSyxHQUFHLENBQUMsRUFDWixFQUFDLFVBQVU7WUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUEsSUFBSTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxvQkFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLE1BQU07UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELFVBQVU7SUFDRix5QkFBUSxHQUFoQixVQUFpQixLQUFLO1FBRWxCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLG9CQUFVLENBQUMsZ0JBQWdCLEdBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEYsK0NBQStDO0lBQ25ELENBQUM7SUFFRCxVQUFVO0lBQ0EsK0JBQWMsR0FBeEI7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxvQkFBVSxDQUFDLGFBQWEsQ0FBQztRQUN2RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM1RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFHLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRTtZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUFDLE9BQU87U0FBQztRQUN0RCxJQUFHLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRTtZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUFDLE9BQU87U0FBQztRQUN0RCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELG9CQUFvQjtJQUNaLDJCQUFVLEdBQWxCO1FBRUksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDM0QsSUFBRyxFQUFFLEdBQUcsQ0FBQztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQzthQUM1QixJQUFJLEVBQUUsR0FBRyxDQUFDO1lBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCx1Q0FBdUM7SUFDN0IsNEJBQVcsR0FBckI7UUFFSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNiLElBQUksSUFBSSxHQUF1QixxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUQsSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxHQUFHO1lBQUUsSUFBSSxHQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2RCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDN0I7WUFDSSxJQUFHLGNBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQ3BDO2dCQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFBQztZQUNoQixJQUFHLGNBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBQztnQkFBQyxPQUFPLENBQUMsQ0FBQzthQUFDLENBQUEsdUJBQXVCO1lBQ3JFLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDekMsRUFBQyxPQUFPO2dCQUNKLElBQUcsY0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM1QyxFQUFDLFFBQVE7b0JBQ0wsR0FBRyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQSxXQUFXO29CQUNyQixPQUFPLEdBQUcsQ0FBQztpQkFDZDthQUNKO1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxlQUFlO0lBQ0wsNkJBQVksR0FBdEIsVUFBdUIsWUFBYTtRQUVoQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBLFFBQVE7UUFDNUMsSUFBRyxZQUFZO1lBQUUsUUFBUSxHQUFHLFlBQVksQ0FBQzs7WUFDcEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUEsZ0JBQWdCO1FBQzNDLElBQUcsUUFBUSxLQUFLLFNBQVMsRUFDekIsRUFBQyxZQUFZO1lBQ1QsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFBLENBQUEsY0FBYztZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDbkM7UUFFRCxTQUFTO1FBQ1QsSUFBSSxHQUFHLEdBQVksY0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxHQUFHLEdBQVksY0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQscUVBQXFFO1FBQ3JFLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxvQkFBVSxDQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBRSxFQUFDLE1BQU07U0FDcEQ7WUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsb0JBQVUsQ0FBQyxjQUFjLEdBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLG9CQUFVLENBQUMsY0FBYyxHQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RTtRQUNELCtCQUErQjtJQUNuQyxDQUFDO0lBRUQsZ0JBQWdCO0lBQ04sK0JBQWMsR0FBeEI7UUFFSSxZQUFZO1FBQ1osSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkIsOEJBQThCO1FBQzlCLDhCQUE4QjtRQUM5QixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDYixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxjQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNMLG1GQUFtRjtJQUMvRTs7O01BR0U7SUFDSyx5QkFBUSxHQUFmLFVBQWdCLElBQUk7UUFFWixJQUFHLElBQUksRUFBRTtZQUNMLE1BQU07WUFDTixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQjthQUFJO1lBQ0QsTUFBTTtTQUNUO0lBQ1QsQ0FBQztJQUVELFlBQVk7SUFDSixpQ0FBZ0IsR0FBeEI7UUFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLElBQUksR0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksR0FBQyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxZQUFZO0lBQ0osaUNBQWdCLEdBQXhCO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUMsR0FBRyxDQUFDO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsU0FBUztJQUNDLDhCQUFhLEdBQXZCO1FBRUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0E5WUEsQUE4WUMsSUFBQTs7Ozs7QUN2WkQsb0NBQStCO0FBRS9CO0lBQW9DLDBCQUFNO0lBRXRDLGdCQUFZLElBQUksRUFBQyxJQUFXLEVBQUMsS0FBSztlQUM5QixrQkFBTSxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVTtJQUNBLGdDQUFlLEdBQXpCO1FBR0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FaQSxBQVlDLENBWm1DLGdCQUFNLEdBWXpDOzs7OztBQ2RELG9DQUErQjtBQUUvQjtJQUFvQywwQkFBTTtJQUt0QyxnQkFBWSxJQUFJLEVBQUMsSUFBVyxFQUFDLEtBQUs7ZUFDOUIsa0JBQU0sSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELG1CQUFtQjtJQUNaLDZCQUFZLEdBQW5CO1FBRUksb0JBQW9CO1FBQ3BCLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELE9BQU87SUFDQSx5QkFBUSxHQUFmO1FBRUksSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBR0wsYUFBQztBQUFELENBekJBLEFBeUJDLENBekJtQyxnQkFBTSxHQXlCekM7Ozs7O0FDM0JEO0lBQW9DLDBCQUFXO0lBRTNDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRUQseUJBQVEsR0FBUjtRQUNJLElBQUksV0FBVyxHQUFHLEdBQUcsR0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQSxNQUFNO1FBQ2pGLDJDQUEyQztRQUMzQyxJQUFHLFdBQVcsR0FBRyxHQUFHO1lBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFnQixDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDMUYsSUFBSSxDQUFDLEtBQXFCLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFFLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0wsYUFBQztBQUFELENBWkEsQUFZQyxDQVptQyxJQUFJLENBQUMsTUFBTSxHQVk5Qzs7Ozs7QUNaRCxrRUFBNkQ7QUFDN0QsZ0RBQXdDO0FBQ3hDLHNEQUFpRDtBQUNqRCxrREFBNkM7QUFDN0MsMERBQXFEO0FBQ3JELHNEQUFpRDtBQUNqRCxrREFBNkM7QUFDN0Msc0RBQWlEO0FBQ2pELGtEQUE2QztBQUc3Qzs7R0FFRztBQUNIO0lBQXVDLDZCQUFjO0lBdUJqRDtlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQSxTQUFTO1FBQzdCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLFNBQVM7UUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUEsTUFBTTtRQUMzQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQSxRQUFRO1FBQ3pCLHFCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxXQUFXO0lBQ0gsZ0NBQVksR0FBcEI7UUFFSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSwyQkFBaUIsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx1QkFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksbUJBQVMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxVQUFVO0lBQ0YsNEJBQVEsR0FBaEI7UUFFSSxtREFBbUQ7UUFDbkQsc0JBQXNCO1FBQ3RCLEtBQUs7UUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1RCxZQUFZO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxRQUFRO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0UsUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLFFBQVE7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2RSxTQUFTO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxvQkFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbkYsU0FBUztRQUNULDJGQUEyRjtRQUMzRixRQUFRO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELFVBQVU7SUFDRixpQ0FBYSxHQUFyQjtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLE1BQU07UUFDbEYsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsMkNBQTJDO0lBRTNDLFVBQVU7SUFDRiwyQkFBTyxHQUFmO1FBRUksSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQzlCLEVBQUMsSUFBSTtZQUNELHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BCO2FBRUQsRUFBQyxJQUFJO1lBQ0QscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUNBLDZCQUFTLEdBQWpCO0lBR0EsQ0FBQztJQUVELFFBQVE7SUFDQSw0QkFBUSxHQUFoQjtJQUdBLENBQUM7SUFFRCxRQUFRO0lBQ0EsNkJBQVMsR0FBakI7UUFFSSxJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3hCLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2xCO1lBQ0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUQsNkRBQTZEO1lBQ3pELElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUksQ0FBQyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUY7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUN4QyxDQUFDO0lBRUQsVUFBVTtJQUNGLDZCQUFTLEdBQWpCO1FBRUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELFVBQVU7SUFDRiwyQkFBTyxHQUFmO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxlQUFlO0lBQ1AsK0JBQVcsR0FBbkIsVUFBb0IsSUFBSTtRQUVwQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsWUFBWTtJQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FxQkc7SUFFSCw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNMLGdDQUFZLEdBQW5CO0lBR0EsQ0FBQztJQUVELFlBQVk7SUFDTCxrQ0FBYyxHQUFyQjtJQUdBLENBQUM7SUFFRCxVQUFVO0lBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbUNHO0lBRUgsVUFBVTtJQUNILGlDQUFhLEdBQXBCLFVBQXFCLEtBQVk7SUFHakMsQ0FBQztJQUVELFVBQVU7SUFDSCxpQ0FBYSxHQUFwQixVQUFxQixLQUFZO0lBR2pDLENBQUM7SUFFRCwyQkFBMkI7SUFDM0IsV0FBVztJQUNKLCtCQUFXLEdBQWxCO0lBR0EsQ0FBQztJQUNELDRDQUE0QztJQUM1QyxZQUFZO0lBQ0osNkJBQVMsR0FBakI7UUFFSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUEsVUFBVTtRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQSxPQUFPO0lBQ25ELENBQUM7SUFHRCxxREFBcUQ7SUFDckQ7OztVQUdNO0lBQ0UsZ0NBQVksR0FBcEI7UUFFSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxXQUFXLEdBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxFQUFFLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFHLEtBQUs7UUFDckMsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBLE9BQU87UUFDaEQsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFBLE9BQU87UUFDaEQsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBLFFBQVE7UUFDOUMsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBLE9BQU87UUFDN0MsSUFBSSxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUEsZUFBZTtRQUMvRCxJQUFHLFdBQVcsR0FBRyxNQUFNLEVBQ3ZCO1lBQ0ksSUFBSTtZQUNKLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7UUFDRCxJQUFHLFVBQVUsR0FBRyxNQUFNLEVBQ3RCO1lBQ0ksZ0JBQWdCO1lBQ2hCLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxFQUMzQjtZQUNJLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUEsT0FBTztZQUNwQyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFBLE9BQU87U0FDdkM7SUFDTCxDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQTNSQSxBQTJSQyxDQTNSc0MsY0FBRSxDQUFDLFdBQVcsR0EyUnBEOzs7OztBQ3pTRDtJQUFzQyw0QkFBVztJQUM3QztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELDJCQUFRLEdBQVI7SUFHQSxDQUFDO0lBR0QsMEJBQU8sR0FBUDtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQWZBLEFBZUMsQ0FmcUMsSUFBSSxDQUFDLE1BQU0sR0FlaEQ7Ozs7O0FDZkQ7SUFBdUMsNkJBQVc7SUFDOUM7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFRCw0QkFBUSxHQUFSO0lBR0EsQ0FBQztJQUdELDJCQUFPLEdBQVA7UUFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxnQkFBQztBQUFELENBZkEsQUFlQyxDQWZzQyxJQUFJLENBQUMsTUFBTSxHQWVqRDs7Ozs7QUNmRDtJQUFBO0lBaUpBLENBQUM7SUFoSkcsU0FBUztJQUNLLGlCQUFZLEdBQTFCLFVBQTJCLEVBQVMsRUFBQyxFQUFTLEVBQUMsRUFBUyxFQUFDLEVBQVMsRUFBQyxTQUFTO1FBRXhFLFFBQVE7UUFDUixJQUFJLENBQUMsR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxRQUFRO1FBQ1IsSUFBSSxDQUFDLEdBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN6QixRQUFRO1FBQ1IsSUFBSSxDQUFDLEdBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUV6QixJQUFHLFNBQVMsSUFBSSxLQUFLLEVBQ3JCO1lBQ0ksaUNBQWlDO1lBQ2pDLE9BQU8sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7YUFDSSxJQUFHLFNBQVMsSUFBSSxLQUFLLEVBQzFCO1lBQ0ksaUNBQWlDO1lBQ2pDLE9BQU8sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7YUFFRDtZQUNJLDJDQUEyQztZQUMzQyxPQUFPLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVELHdFQUF3RTtJQUMxRCxtQkFBYyxHQUE1QixVQUE2QixPQUFPLEVBQUMsT0FBTztRQUV4QyxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUUsT0FBTyxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUM7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixPQUFPLElBQUksQ0FBQztTQUNmO2FBQ0c7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXJCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUdhLHNCQUFpQixHQUEvQixVQUFnQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBRS9CLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksUUFBUSxDQUFDO1FBQ2IsSUFBRyxHQUFHLElBQUUsQ0FBQyxJQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUM7WUFDYixRQUFRLEdBQUUsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUM7U0FDM0M7YUFBSyxJQUFHLEdBQUcsR0FBQyxDQUFDLElBQUUsR0FBRyxJQUFFLENBQUMsRUFBQztZQUNuQixRQUFRLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUM7U0FDMUM7YUFBSyxJQUFHLEdBQUcsSUFBRSxDQUFDLElBQUUsR0FBRyxHQUFDLENBQUMsRUFBQztZQUNuQixRQUFRLEdBQUMsRUFBRSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUM7YUFBSyxJQUFHLEdBQUcsR0FBQyxDQUFDLElBQUUsR0FBRyxJQUFFLENBQUMsRUFBQztZQUNuQixRQUFRLEdBQUUsRUFBRSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFHLENBQUMsR0FBRyxDQUFDO1lBQUUsUUFBUSxJQUFJLEdBQUcsQ0FBQztRQUMxQixPQUFPLFFBQVEsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O01BRUU7SUFDWSxnQkFBVyxHQUF6QixVQUEwQixFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFO1FBRWpDLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdD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QUFkO1lBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0wsWUFBQztJQUFELENBWkEsQUFZQyxDQVowQixNQUFNLEdBWWhDO0lBWlksUUFBSyxRQVlqQixDQUFBO0lBQ0Q7UUFBaUMsK0JBQUs7UUEyRGxDO21CQUFlLGlCQUFPO1FBQUEsQ0FBQztRQUN2QixvQ0FBYyxHQUFkO1lBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQWhFQSxBQWdFQyxDQWhFZ0MsS0FBSyxHQWdFckM7SUFoRVksY0FBVyxjQWdFdkIsQ0FBQTtBQUNMLENBQUMsRUEvRWEsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBK0VmO0FBQ0QsV0FBYyxFQUFFO0lBQUMsSUFBQSxHQUFHLENBWW5CO0lBWmdCLFdBQUEsR0FBRztRQUNoQjtZQUFxQyxtQ0FBSztZQUt0Qzt1QkFBZSxpQkFBTztZQUFBLENBQUM7WUFDdkIsd0NBQWMsR0FBZDtnQkFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFDTCxzQkFBQztRQUFELENBVkEsQUFVQyxDQVZvQyxLQUFLLEdBVXpDO1FBVlksbUJBQWUsa0JBVTNCLENBQUE7SUFDTCxDQUFDLEVBWmdCLEdBQUcsR0FBSCxNQUFHLEtBQUgsTUFBRyxRQVluQjtBQUFELENBQUMsRUFaYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFZZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcbiAgICAvKirkurrnp40gLSDmma7pgJrkurogKi9cbiAgICBwdWJsaWMgc3RhdGljIENPTU1PTl9NQU4gOiBzdHJpbmcgPSBcImNvbW1vblwiO1xuICAgIC8qKuS6uuenjSAtIOWwj+WBtyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUk9CQkVSX01BTiA6IHN0cmluZyA9IFwicm9iYmVyXCI7XG4gICAgLyoq5Lq656eNIC0g5Zyf5YyqICovXG4gICAgcHVibGljIHN0YXRpYyBCQU5ESVRfTUFOIDogc3RyaW5nID0gXCJiYW5kaXRcIjtcbiAgICAvKirkurrnp40gLSDmmI7mmJ8gKi9cbiAgICBwdWJsaWMgc3RhdGljIFNUQVJfTUFOIDogc3RyaW5nID0gXCJzdGFyXCI7XG4gICAgLyoq5Lq656eNIC0g56eR5a2m5a62ICovXG4gICAgcHVibGljIHN0YXRpYyBTQ0lFTlRJU1RfTUFOIDogc3RyaW5nID0gXCJzY2llbnRpc3RcIjtcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5bu6562RXG4gICAgLyoq5Yy76ZmiICovXG4gICAgcHVibGljIHN0YXRpYyBIT1NQSVRBTCA6IG51bWJlciA9IDE7XG4gICAgLyoq5Yab6ZifICovXG4gICAgcHVibGljIHN0YXRpYyBBUk1ZIDogbnVtYmVyID0gMjtcbiAgICAvKirlhpzlnLogKi9cbiAgICBwdWJsaWMgc3RhdGljIEZBUk06IG51bWJlciA9IDM7XG4gICAgLyoq56eR5oqAICovXG4gICAgcHVibGljIHN0YXRpYyBURUNITk9MT0dZOiBudW1iZXIgPSA0O1xuICAgIC8qKuS6i+S7tuaIvyDmlrDpl7vmiL8gKi9cbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UX0hPVVNFOiBudW1iZXIgPSA1O1xuICAgIC8qKueah+WuqyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUEFMQUNFOiBudW1iZXIgPSA2O1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeajgOa1i+eCueeahOmXtOi3nVxuICAgIC8qKuajgOa1i+eCuemXtOi3nSAqL1xuICAgIHB1YmxpYyBzdGF0aWMgVEVTVF9QT0lOVF9ESUMgOiBudW1iZXIgPSA1O1xuICAgIC8qKumAn+W6piAqL1xuICAgIHB1YmxpYyBzdGF0aWMgVEVTVF9QT0lOVF9TUEVFRCA6IG51bWJlciA9IDAuODtcbiAgICAvKirml4vovazop5LluqblgY/np7sgKi9cbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfUk8gOiBudW1iZXIgPSAxMDtcbiAgICAvKirkurrnsbvnlJ/kuqfpl7TpmpRTICovXG4gICAgcHVibGljIHN0YXRpYyBQRVJTT05fQ1JFQVRFX1RJTUUgOiBudW1iZXIgPSAxO1xuICAgIC8qKuebkea1i+eCueaVsOmHjyovXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX0NPVU5UIDogbnVtYmVyID0gNjtcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Li75YC8XG4gICAgLyoq5Zu95a626LSi5pS/ICovXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX01PTkVZIDogc3RyaW5nID0gXCJtb25leVwiO1xuICAgIC8qKuWbveWutuS6uuWPoyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9QT1BVTEFUSU9OIDogc3RyaW5nPVwicG9wdWxhdGlvblwiO1xuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9QT1BVTEFSU1VQUE9SVCA6IHN0cmluZyA9IFwicG9wdWxhclN1cHBvcnRcIjtcbiAgICAvKirlm73lrrbnp5HmioAgKi9cbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fVEVDSE5PTE9HWSA6IHN0cmluZyA9IFwidGVjaG5vbG9neVwiO1xuICAgIC8qKuWbveWutuWogeacmyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9QUkVTVElHRSA6IHN0cmluZyA9IFwicHJlc3RpZ2VcIjtcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5YW25LuWXG4gICAgLyoq5LiA5aSp5pe26Ze0L+WIhumSnyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgT05FX0RBWTpudW1iZXI9MTAqNjA7XG4gICAgLyoq57Ku6aOf55Sf5Lqn546H5o2i6ZKx5Li055WM5YC8ICovXG4gICAgcHVibGljIHN0YXRpYyBHUkFJTl9FWENIQU5HRU1PTkVZX1BFUkNFTlQ9MS41O1xuICAgIC8qKumSseaNoueyrumjn+axh+eOhyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTU9ORVlUT0dSQUlOPTI7XG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XHJcbi8qKlxyXG4gKiDotK3kubDmoYYg6YCa55SoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXlEaWFsb2cgZXh0ZW5kcyB1aS5CdXlVSXtcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMud2lkdGg9ODAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PTQwMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpOnZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5rOo5YaM5LqL5Lu2ICovXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50cygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0bl9idXkub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuYnV5Q2xpY2spO1xyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlQ2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueCueWHu+i0reS5sCAqL1xyXG4gICAgcHJpdmF0ZSBidXlDbGljaygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgY3VyclxyXG4gICAgfSBcclxuICAgIFxyXG4gICAgLyoq54K55Ye75YWz6ZetICovXHJcbiAgICBwcml2YXRlIGNsb3NlQ2xpY2soKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSBcclxufSIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVyZmViL1Blb3BsZVwiO1xuXG4vKipcbiAqIOaVsOaNruS4reW/gyDmiYDmnInnmoTmlbDmja5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRyeURhdGF7XG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogQ291bnRyeURhdGEgPSBuZXcgQ291bnRyeURhdGEoKTtcbiAgICAvKioqKioqKioqKioqKirkuLvmlbDmja4qKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKirlm73lrrbotKLmlL8gKi9cbiAgICBwdWJsaWMgbW9uZXkgOiBudW1iZXIgPSAxMDAwMDtcbiAgICAvKirlm73lrrbkurrlj6MgKi9cbiAgICBwdWJsaWMgcG9wdWxhdGlvbiA6IG51bWJlcj0xMDA7XG4gICAgLyoq5Zu95a625bm456aP5bqmICovXG4gICAgcHVibGljIHBvcHVsYXJTdXBwb3J0IDogbnVtYmVyID0gNTA7XG4gICAgLyoq5Zu95a6256eR5oqAICovXG4gICAgcHVibGljIHRlY2hub2xvZ3kgOiBudW1iZXIgPSAxMDtcbiAgICAvKirlm73lrrblo7DmnJsgKi9cbiAgICBwdWJsaWMgcHJlc3RpZ2UgOiBudW1iZXIgPSA5MDtcblxuICAgIC8qKioqKioqKioqKioqKirlia/mlbDmja4qKioqKioqKioqKioqKioqKi9cbiAgICAvLy0tLS0tLS0t5Li75pWw5o2u5b2x5ZONXG4gICAgLy/lm7rlrprmlK/lh7pcbiAgICAvKirlhpvotLkgKi9cbiAgICBwdWJsaWMgYXJteUNvc3QgOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq5pS/5bqc6LS555SoICovXG4gICAgcHVibGljIGdvdmVybkNvc3QgOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq56eR5oqA6LS555SoICovXG4gICAgcHVibGljIHRlY2hub2xvZ3lDb3N0IDogbnVtYmVyID0gMTAwO1xuICAgIC8qKueojuaUtueOhyAqL1xuICAgIHB1YmxpYyB0YXggOiBudW1iZXIgPSAwLjA1O1xuXG4gICAgLy/lj5jliqjnjodcbiAgICAvKirnsq7po5/mtojogJfph48gKOS6uuWdh+a2iOiAl+mHjykgKi9cbiAgICBwdWJsaWMgZ3JhaW5Db3N0IDogbnVtYmVyID0gMTtcbiAgICAvKirnsq7po5/kuqfph48gKOS6uuWdh+S6p+mHjykqL1xuICAgIHB1YmxpYyBncmFpbkFkZCA6IG51bWJlciA9IDE7XG4gICAgLyoq57Ku6aOf5bqT5a2YICovXG4gICAgcHVibGljIGdyYWluU3RvY2s6bnVtYmVyPTA7XG4gICAgLyoq5Yab6LS55YeP5bCR546HICovXG4gICAgcHVibGljIGFybXlQZXJjZW50Om51bWJlcj0wLjE7XG4gICAgLyoqR0RQIOaMo+mSseiDveWKm++8jOavj+S6uuavj+WkqeiDveS6p+WkmuWwkemSsSAqL1xuICAgIHB1YmxpYyBHRFAgOiBudW1iZXIgPSAxMDtcblxuXG4gICAgLyoq6L+b5Z+O5pWwIOebruagh+WAvDJtaW4qL1xuICAgIHB1YmxpYyBlbnRlclBlb3BsZSA6IG51bWJlciA9IDUwO1xuICAgIC8qKuWHuuWfjuaVsCDnm67moIflgLwybWluKi9cbiAgICBwdWJsaWMgZXhpdFBlb3BsZSA6IG51bWJlciA9IDUwO1xuICAgIC8qKuS6uuWPo+avlOS+i+aVsCDov5vln47mlbAv5Ye65Z+O5pWwIDJtaW4qL1xuICAgIHB1YmxpYyBwZXJjZW50IDogbnVtYmVyID0gMTtcbiAgICAvKirln47lpJbkurrlj6PmlbDnu4QqL1xuICAgIHB1YmxpYyBhcnJfb3V0UGVvcGxlIDogQXJyYXk8UGVvcGxlPjtcbiAgICAvKirln47lhoXkurrlj6PmlbDnu4QgKi9cbiAgICBwdWJsaWMgYXJyX2luUGVvcGxlIDogQXJyYXk8UGVvcGxlPjtcbiAgICAvKirlh7rln47kurrlj6Mg5a6e6ZmF5YC8LzJtaW4gKi9cbiAgICBwdWJsaWMgX291dGVyUGVvcGxlIDogbnVtYmVyO1xuICAgIC8qKui/m+mXqOS6uuWPoyDlrp7pmYXlgLwvMm1pbiAqL1xuICAgIHB1YmxpYyBfaW5uZXJQZW9wbGUgOiBudW1iZXI7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mma7pgJrkurrlj6PljaDmr5RcbiAgICAvKirmma7pgJrkurrkuK0g5Yy755Sf55qE5Y2g5q+UKi9cbiAgICBwdWJsaWMgcGVyY2VudERvY3RvciA6IG51bWJlciA9IDAuMDI7XG4gICAgLyoq5pmu6YCa5Lq656eNIOitpuWvn+WNoOavlCAqL1xuICAgIHB1YmxpYyBwZXJjZW50UG9saWMgOiBudW1iZXIgPSAwLjA0O1xuICAgIC8qKuaZrumAmuS6uuenjSDllYbkurrnmoTljaDmr5QgKi9cbiAgICBwdWJsaWMgcGVyY2VudFNob3BlciA6IG51bWJlciA9IDAuMTtcbiAgICAvKirmuLjmiYvlpb3pl7IgKi9cbiAgICBwdWJsaWMgcGVyY2VudE5vdGhpbmcgOiBudW1iZXIgPSAwLjE7XG4gICAgLyoq5Yac5rCRICovXG4gICAgcHVibGljIGZhcm1lciA6IG51bWJlciA9IDAuNztcblxuICAgIC8vLS0tLS0tLS3lvbHlk40g44CQ5Li75pWw5o2u44CRLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuXG5cblxuXG5cblxuICAgIC8vLS0tLS0tLS3kuovku7bmlbDmja5cbiAgICAvKirnmJ/nlqsgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfKi9cbiAgICBwdWJsaWMgcGVzdCA6IG51bWJlciA9IDA7XG4gICAgLyoq5Zyw6ZyHICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyAqL1xuICAgIHB1YmxpYyBuYXR1cmFsRGlzYXN0ZXIgOiBudW1iZXIgPSAwO1xuICAgIC8qKuaImOS5sSAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8qL1xuICAgIHB1YmxpYyB3YXIgOiBudW1iZXIgPSAwO1xuXG4gICAgLy8tLS0tLS0tLeiBjOS4muS6uuaVsFxuICAgIHB1YmxpYyBhcnJfUGVvcGxlIDogQXJyYXk8c3RyaW5nPiA9IFtcImNvbW1vblwiLFwic2NpZW50aXN0XCIsXCJzdGFyXCIsXCJiYW5kaXRcIixcInJvYmJlclwiXTtcbiAgICAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xuICAgIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSA5NTtcbiAgICAvKirnp5HlrablrrYgU1NTKi9cbiAgICBwdWJsaWMgc2NpZW50aXN0IDogbnVtYmVyID0gMTtcbiAgICAvKirmmI7mmJ8gU1MqL1xuICAgIHB1YmxpYyBzdGFyIDogbnVtYmVyID0gMjtcbiAgICAvKirlnJ/ljKogLVMgKi9cbiAgICBwdWJsaWMgYmFuZGl0IDogbnVtYmVyID0gMTtcbiAgICAvKirnm5fotLwgLUEgKi9cbiAgICBwdWJsaWMgcm9iYmVyIDogbnVtYmVyID0gMTtcbiAgICAgICAgLy8gLyoq5pmu6YCa5Lq6IEEgIOaZrumAmuS6uuS4reS8muS6p+eUn+WMu+eUnyDorablr58g562J5q2j5bi46IGM5LiaKi9cbiAgICAgICAgLy8gcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDE7XG4gICAgICAgIC8vIC8qKuenkeWtpuWutiBTU1MqL1xuICAgICAgICAvLyBwdWJsaWMgc2NpZW50aXN0IDogbnVtYmVyID0gMDtcbiAgICAgICAgLy8gLyoq5piO5pifIFNTKi9cbiAgICAgICAgLy8gcHVibGljIHN0YXIgOiBudW1iZXIgPSAwO1xuICAgICAgICAvLyAvKirlnJ/ljKogLVMgKi9cbiAgICAgICAgLy8gcHVibGljIGJhbmRpdCA6IG51bWJlciA9IDA7XG4gICAgICAgIC8vIC8qKuebl+i0vCAtQSAqL1xuICAgICAgICAvLyBwdWJsaWMgcm9iYmVyIDogbnVtYmVyID0gMDtcbiAgICAvLy0tLS0tLS0t5Z+O6ZeoXG4gICAgLyoq6Zeo5piv5ZCm5omT5byAKi9cbiAgICBwdWJsaWMgaXNEb29yT3BlbiA6IGJvb2xlYW49dHJ1ZTtcbiAgICAvKirnrZvmn6Xog73lipsg5ZCv5Yqo54m55q6K6Zeo55qE5pe25YCZICDnrZvmn6Xog73lipvnlJ/mlYgqL1xuICAgIHB1YmxpYyBwcmVwYXJhdGlvbiA6IG51bWJlciA9IDAuNTtcbiAgICAvKirnibnmrorpl6gg562b5p+lIDEt6Ziy5q2i6L+b5YWlICAgMi3pgoDor7fov5vlhaUqL1xuICAgIC8vIHB1YmxpYyBrZWVwU2VsZWN0IDogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG4gICAgXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t55uu5qCH54K5XG4gICAgLyoq55uu5qCH54K5IOWMu+mZoiAqL1xuICAgIHB1YmxpYyBwb3NIb3NwaXRhbCA6IGFueSA9IHt4OiAzODkseTo1NDF9OyBcbiAgICAvKirnm67moIfngrkg5Yac5Zy6ICovXG4gICAgcHVibGljIHBvc0Zhcm0gOiBhbnkgPSB7eDogMTMyLHk6NzA5fTsgXG4gICAgLyoq55uu5qCH54K5IOaWsOmXu+aIvyovXG4gICAgcHVibGljIHBvc0V2ZW50SG91c2UgOiBhbnkgPSB7eDogNTkxLjUseTo3Mjl9OyBcbiAgICAvKirnmoflrqsgKi9cbiAgICBwdWJsaWMgcG9zUGFsYWNlIDogYW55ID0ge3g6IDk4MSx5OjgxN307IFxuICAgIC8qKuenkeaKgCAqL1xuICAgIHB1YmxpYyBwb3NUZWNobm9sb2d5IDogYW55ID0ge3g6IDE0NjYseTo2MjF9OyBcbiAgICAvKirlhpvpmJ8gKi9cbiAgICBwdWJsaWMgcG9zQXJteSA6IGFueSA9IHt4OiAxODc0LHk6NzA3fTsgXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3ljLrln59cbiAgICAvKirlopnlhoXljLrln5/liJLliIYgKi9cbiAgICBwdWJsaWMgYXJyX0xlZnRBcmVhIDogQXJyYXk8YW55PjtcbiAgICBwdWJsaWMgYXJyX1JpZ2h0QXJlYSA6IEFycmF5PGFueT47XG4gICAgXG4gICAgLy8tLS0tLS0tLS0tLS0tLS3ls7DlgLxcbiAgICAvKirlm73lrrblubjnpo/luqbls7DlgLwgKi9cbiAgICBwdWJsaWMgcG9wdWxhclN1cHBvcnRNYXggOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq5Zu95a6256eR5oqA5bOw5YC8ICovXG4gICAgcHVibGljIHRlY2hub2xvZ3lNYXggOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq5Zu95a625aOw5pyb5bOw5YC8ICovXG4gICAgcHVibGljIHByZXN0aWdlTWF4IDogbnVtYmVyID0gMTAwO1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgICAgICB0aGlzLmFycl9pblBlb3BsZSA9IG5ldyBBcnJheTxQZW9wbGU+KCk7XG4gICAgICAgIHRoaXMuYXJyX291dFBlb3BsZSA9IG5ldyBBcnJheTxQZW9wbGU+KCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq6I635Y+W5Yy65Z+fICovXG4gICAgcHVibGljIHNldEFyZWEodmlldyA6IExheWEuTm9kZSkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSB2aWV3Ll9jaGlsZHJlbjtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxjaGlsZHJlbi5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihjaGlsZHJlbltpXS5uYW1lID09IFwicGFsYWNlXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2goY2hpbGRyZW5baV0pOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoY2hpbGRyZW5baV0ueDw5ODEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5Lq65Y+j5rWB6YePIDpcbiAgICAgKiByZXR1cm4g6L+b5YWlIC8g5Ye65Y67XG4gICAgICovXG4gICAgcHVibGljIGdldF9QZW9wbGVNb3ZlKCkgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcmNlbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5Lq656eN5q+U5L6LXG4gICAgICogQHBhcmFtIHR5cGUg5Lq656eNXG4gICAgICovXG4gICAgcHVibGljIGdldF9Qcm9mZXNzaW9uUGVyY2VudCh0eXBlOnN0cmluZykgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGlmKHRoaXNbdHlwZV0gPT09IHVuZGVmaW5lZCkgY29uc29sZS5sb2coXCLkuI3lrZjlnKjor6Xkurrnp41cIik7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXNbdHlwZV0vKHRoaXMucG9wdWxhdGlvbik7XG4gICAgfVxuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3nu5PnrpdcbiAgICAvKirorr7nva7kupTlpKfkuLvlgLznu5PnrpcgKi9cbiAgICBwdWJsaWMgc2V0X01haW5EYXRhKHR5cGU6c3RyaW5nLGNvdW50Om51bWJlcik6dm9pZFxuICAgIHtcbiAgICAgICAgc3dpdGNoKHR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgXCJtb25leVwiOlxuICAgICAgICAgICAgICAgIHRoaXMubW9uZXkrPWNvdW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBvcHVsYXRpb25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRpb24rPWNvdW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBvcHVsYXJTdXBwb3J0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1bGFyU3VwcG9ydCs9Y291bnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGVjaG5vbG9neVwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGVjaG5vbG9neSs9Y291bnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicHJlc3RpZ2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnByZXN0aWdlKz1jb3VudDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbF9NYWluRGF0YSh0eXBlLGNvdW50KTtcbiAgICB9XG5cbiAgICBcbiAgICBwdWJsaWMgY2FsX01haW5EYXRhKHR5cGU6c3RyaW5nLGNvdW50Om51bWJlcik6dm9pZFxuICAgIHtcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLk1BSU5fTU9ORVk6XG4gICAgICAgICAgICAvLy9UTyBET1xuICAgICAgICB9XG4gICAgICAgIC8v6LSi5pS/IOW9seWTjee7k+eul1xuICAgICAgICB0aGlzLm1vbmV5SW5mbHVlbmNlKCk7XG4gICAgICAgIC8v5Lq65Y+jIOW9seWTjee7k+eul1xuICAgICAgICB0aGlzLnBvcHVsYXJTdXBwb3J0SW5mbHVlbmNlKCk7XG4gICAgICAgIC8v5bm456aP5bqmIOW9seWTjee7k+eul1xuICAgICAgICB0aGlzLnBvcHVsYXJTdXBwb3J0SW5mbHVlbmNlKCk7XG4gICAgICAgIC8v56eR5oqAIOW9seWTjee7k+eul1xuICAgICAgICB0aGlzLnRlY2hub2xvZ3lJbmZsdWVuY2UoKTtcbiAgICAgICAgLy/lqIHmnJsg5b2x5ZON57uT566XXG4gICAgICAgIHRoaXMucHJlc3RpZ2VJbmZsdWVuY2UoKTtcbiAgICB9ICAgIFxuXG4gICAgLyoq6LSi5pS/57uT566XIOi0ouaUv+W9seWTjSovXG4gICAgcHJpdmF0ZSBtb25leUluZmx1ZW5jZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgLyoq5bm456aP5bqmIOW9seWTjee7k+eulyovXG4gICAgcHJpdmF0ZSBwb3B1bGFyU3VwcG9ydEluZmx1ZW5jZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5Lq65Y+jIOW9seWTjee7k+eulyovXG4gICAgcHJpdmF0ZSBwb3B1bGF0aW9uSW5mbHVlbmNlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirnp5HmioAg5b2x5ZON57uT566XKi9cbiAgICBwcml2YXRlIHRlY2hub2xvZ3lJbmZsdWVuY2UoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuWogeacmyDlvbHlk43nu5PnrpcqL1xuICAgIHByaXZhdGUgcHJlc3RpZ2VJbmZsdWVuY2UoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuaUueWPmCDov5vjgIHlh7og55uu5qCH5Lq65pWwIEBpc291dDrmmK/lkKbmmK/lh7rln44gIEBjb3VudO+8muaUueWPmOebruagh+WAvCovXG4gICAgcHVibGljIHNldEluT3V0VGFyZ2V0KGlzT3V0LGNvdW50KSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKGlzT3V0KSB0aGlzLmV4aXRQZW9wbGUgKz0gY291bnQ7XG4gICAgICAgIGVsc2UgdGhpcy5lbnRlclBlb3BsZSArPSBjb3VudDtcbiAgICB9XG5cbiAgICAvKirmlLnlj5gg6L+b44CB5Ye6IOebruagh+S6uuaVsCBAaXNvdXQ65piv5ZCm5piv5Ye65Z+OICBAY291bnTvvJrmlLnlj5jlrp7pmYXlgLwqL1xuICAgIHB1YmxpYyBzZXRJbk91dFRydXRoKGlzT3V0LGNvdW50KSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKGlzT3V0KSB0aGlzLl9vdXRlclBlb3BsZSArPSBjb3VudDtcbiAgICAgICAgZWxzZSB0aGlzLl9pbm5lclBlb3BsZSArPSBjb3VudDtcbiAgICB9XG4gICAgXG4gICAgLyoq6YCa55+l5Lq65Y+j5Ye65Z+OIEB0eXBlIO+8miDov5vmiJB0dXJlICDlh7rln44gZmFsc2UqL1xuICAgIHB1YmxpYyBwZW9wbGVHb091dCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmFycl9pblBlb3BsZTtcbiAgICAgICAgaWYodHlwZSkgYXJyID0gdGhpcy5hcnJfb3V0UGVvcGxlO1xuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihhcnIubGVuZ3RoKnJhbmRvbSk7XG4gICAgICAgIGlmKGluZGV4PjApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCFhcnJbaW5kZXhdLmlzR28pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXJyW2luZGV4XS5wZW9wbGVHbyh0eXBlKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbi8qKuWkluWfjiAqL1xuZXhwb3J0IGNsYXNzIE91dENvdW50cnlEYXRhe1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zXyA6IE91dENvdW50cnlEYXRhID0gbmV3IE91dENvdW50cnlEYXRhKCk7XG4gICAgLyoqKioqKioqKioqKioq5Li75pWw5o2uKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoq5pyA5aSn5aSW5Z+O5a6557qz5pWw6YePICovXG4gICAgcHVibGljIG1heENvdW50IDogbnVtYmVyPTUwO1xuICAgIC8qKuW9k+WJjeWkluWfjuS6uuWPo+aVsCAqL1xuICAgIHB1YmxpYyBvdXRDb3VudDpudW1iZXI9MDtcbiAgICAvKirkurrmu57nlZnml7bpl7QgKi9cbiAgICBwdWJsaWMgbGltaXRUaW1lOm51bWJlcj01MDtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKuaZrumAmuS6uiovXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDAuODtcbiAgICAvKirnp5HlrablrrYgU1NTKi9cbiAgICBwdWJsaWMgc2NpZW50aXN0IDogbnVtYmVyID0gMC4wMztcbiAgICAvKirmmI7mmJ8gU1MqL1xuICAgIHB1YmxpYyBzdGFyIDogbnVtYmVyID0gMC4wMTtcbiAgICAvKirlnJ/ljKogLVMgKi9cbiAgICBwdWJsaWMgYmFuZGl0IDogbnVtYmVyID0gMC4wNjtcbiAgICAvKirnm5fotLwgLUEgKi9cbiAgICBwdWJsaWMgcm9iYmVyIDogbnVtYmVyID0gMC4xO1xuICAgIC8qKuWPmOmHj+WQjSAqL1xuICAgIHB1YmxpYyBhcnJfUGVvcGxlIDogQXJyYXk8c3RyaW5nPiA9IFtcImNvbW1vblwiLFwic2NpZW50aXN0XCIsXCJzdGFyXCIsXCJiYW5kaXRcIixcInJvYmJlclwiXTtcbiAgICBcbiAgICAvKirojrflj5bljLrpl7TmlbDnu4QgMCwwLjgsMC44MywwLjg0LDAuOSwxKi9cbiAgICBwdWJsaWMgZ2V0UGVyY2VudEFyZWEoKTpBcnJheTxudW1iZXI+XG4gICAge1xuICAgICAgIGxldCBhcnJQZXJjZW50ID0gW107Ly/nlJ/kuqfmr5TkvotcbiAgICAgICBsZXQgYXJyX1Blb3BsZSA9IHRoaXMuYXJyX1Blb3BsZTtcbiAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyX1Blb3BsZS5sZW5ndGg7aSsrKVxuICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlciArPSB0aGlzW2Fycl9QZW9wbGVbaV1dO1xuICAgICAgICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgfVxuICAgICAgIHJldHVybiBhcnJQZXJjZW50O1xuICAgIH1cbn0iLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuLi91aS9sYXlhTWF4VUlcIjtcblxuLyoqXG4gKiDmtojmga/moYYg6YCa55SoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1zZ0RpYWxvZyBleHRlbmRzIHVpLkRpYS5DdXJyZW50RGlhbG9nVUl7XG4gICAgLyoq57G75Z6LICovXG4gICAgcHJpdmF0ZSB0eXBlIDogbnVtYmVyIDtcbiAgICAvKirnvJPliqggKi9cbiAgICAvLyBwcml2YXRlIHNob3dUd2VlbiA6IExheWEuVHdlZW47XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKirliJ3lp4vljJYgKi9cbiAgICBwdWJsaWMgc2hvd01zZyh0eXBlOm51bWJlcikgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZURpYWxvZyk7ICAgICAgICBcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VJbWcoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUaXRsZSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVdvcmQoKTsgXG4gICAgICAgIHRoaXMubXNnQm9keS54ID0gKDkwMC8oTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodC9MYXlhLkJyb3dzZXIuY2xpZW50V2lkdGgpLTExNjMpLzI7ICAgICAgIFxuICAgICAgICB0aGlzLm1zZ0JvZHkueSA9IC01NTc7ICAgICAgIFxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eTowfSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirmjaLlm74gKi9cbiAgICBwcml2YXRlIGNoYW5nZUltZygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSlcbiAgICAgICAge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirmjaLmoIfpopggKi9cbiAgICBwcml2YXRlIGNoYW5nZVRpdGxlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirmloflrZfovb3lhaUgKi9cbiAgICBwcml2YXRlIGNoYW5nZVdvcmQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuWFs+mXrSAqL1xuICAgIHB1YmxpYyBjbG9zZURpYWxvZygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5idG5fY2xvc2Uub2ZmKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlRGlhbG9nKTsgICAgICAgICAgICAgICAgXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5tc2dCb2R5LHt5Oi01NTd9LDIwMCxMYXlhLkVhc2UuYmFja091dCxMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsdGhpcy5jbG9zZU92ZXIpKTsgICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgY2xvc2VPdmVyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTsgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZXJmZWIvUGVvcGxlXCI7XG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcbmltcG9ydCBDb3VudHJ5RGF0YSwgeyBPdXRDb3VudHJ5RGF0YSB9IGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgQ29tbW9uIGZyb21cIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9Db21tb25cIlxuaW1wb3J0IFJvYmJlciBmcm9tXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyXCJcbi8qKlxuICog5Lq6IOeuoeeQhlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVNYW5hZ2VyIHtcbiAgICAvKirop4blm74qL1xuICAgIHByaXZhdGUgdmlldzphbnk7IFxuICAgIC8qKuaoquWdkOaghyAqL1xuICAgIHByaXZhdGUgWDpudW1iZXI7XG4gICAgLyoq57q15Z2Q5qCHICovXG4gICAgcHJpdmF0ZSBZOm51bWJlcjtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWimeWGhVxuICAgIC8qKuW3sueUn+aIkOeahOS6uuenjSAgMCDmma7pgJogICAx56eR5a2m5a62ICAy5piO5pifIDPlnJ/ljKogNOebl+i0vCovXG4gICAgcHJpdmF0ZSBhbHJlYWR5Q3JlYXRlIDogQXJyYXk8bnVtYmVyPiA9IFswLDAsMCwwLDBdO1xuICAgIC8qKueUn+aIkOmXtOmalOiuoeaXtuWZqCAqL1xuICAgIHByaXZhdGUgY291bnRUaW1lIDogbnVtYmVyID0gMDtcbiAgICAvKirnlJ/kuqfml7bpl7Tpl7TpmpQgKi9cbiAgICBwcml2YXRlIGNvdW50VGltZV8gOiBudW1iZXIgPSA1MDA7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdHJ1Y3Rvcih2aWV3KVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3PXZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5byA5ZCv55Sf5oiQ5bel5Y6CXG4gICAgICog55Sf5oiQ5Lq6IFxuICAgICAqIOeUn+aIkOS6uueahOS9jee9rlxuICAgICAqIOeUn+S6p+S6uueahHR5cGUg77yaIOWfjumHjOS6ui/ln47lpJbkurog6YC76L6R5YiG5byAXG4gICAgICovXG4gICAgLyoq5byA5ZCv55Sf5oiQ5bel5Y6CICovXG4gICAgcHVibGljIG9wZW5QZW9wbGVGYWN0b3J5KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmNyZWF0ZVBlb3BsZSgpO1xuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uiAqL1xuICAgIHB1YmxpYyBjcmVhdGVQZW9wbGUoKTp2b2lkXG4gICAge1xuICAgICAgICBsZXQgcGVvcGxlO1xuICAgICAgICAvKirnlJ/miJDkuI3lkIzkurrnp43nmoTlh6DnjocgKi9cbiAgICAgICAgbGV0IHJhbmRvbT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKTtcbiAgICAgICAgLy/mma7pgJrkurpcbiAgICAgICAgaWYocmFuZG9tPj0wJiZyYW5kb208ODApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJjb21tb25cIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IENvbW1vbih0aGlzLnZpZXcsR2FtZUNvbmZpZy5DT01NT05fTUFOLHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5bCP5YG3XG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj04MCYmcmFuZG9tPDkwKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwicm9iYmVyXCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuUk9CQkVSX01BTix0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+Wcn+WMqlxuICAgICAgICBlbHNlIGlmKHJhbmRvbT49OTAmJnJhbmRvbTw5NilcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcImJhbmRpdFwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgUm9iYmVyKHRoaXMudmlldyxHYW1lQ29uZmlnLkJBTkRJVF9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/np5HlrablrrZcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PTk2JiZyYW5kb208OTkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJzY2llbnRpc3RcIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFJvYmJlcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOLHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5piO5pifXG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInN0YXJcIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFJvYmJlcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5TVEFSX01BTix0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwZW9wbGUudmlzaWJsZT10cnVlO1xuICAgICAgICB0aGlzLmdldFBvcygpO1xuICAgICAgICBwZW9wbGUuc2V0UG9zKHRoaXMuWCx0aGlzLlkpO1xuICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpO1xuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjM7XG4gICAgICAgIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQ8T3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xuICAgICAgICB9XG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQrKztcbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurrnmoTkvY3nva4gKi9cbiAgICBwdWJsaWMgZ2V0UG9zKCk6YW55XG4gICAge1xuICAgICAgICBsZXQgdHlwZU51bT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMyk7XG4gICAgICAgIHN3aXRjaCh0eXBlTnVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy/lnKhB6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPTA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8v5ZyoQui+ueeVjFxuICAgICAgICAgICAgICAgIHRoaXMuWD1NYXRoLnJhbmRvbSgpKjIwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgLy/lnKhD6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPTIwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirnlYzpmZDmo4DmtYsgKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBcbiAgICBcbiAgICBwdWJsaWMgY2hlY2tQZXJjZW50KHBlb3BsZSx0eXBlOnN0cmluZyk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/mtYHliqjmr5Tkvovmo4DmtYtcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5wZXJjZW50PDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5Yib5bu65aKZ5YaF5Lq6ICovXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZV9Jbm5lcigpIDogdm9pZFxuICAgIHtcbiAgICAgICBsZXQgcmFuZG9tU3RyaW5nIDtcbiAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXG4gICAgICAgbGV0IGFycl9QZW9wbGUgPSBDb3VudHJ5RGF0YS5pbnNfLmFycl9QZW9wbGU7XG4gICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgZm9yKGxldCBpID0gMDtpPGFycl9QZW9wbGUubGVuZ3RoO2krKylcbiAgICAgICB7XG4gICAgICAgICAgICBudW1iZXIgKz0gQ291bnRyeURhdGEuaW5zXy5nZXRfUHJvZmVzc2lvblBlcmNlbnQoYXJyX1Blb3BsZVtpXSk7XG4gICAgICAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICB9XG4gICAgICAgY29uc29sZS5sb2coYXJyUGVyY2VudCk7XG4gICAgICAgTGF5YS50aW1lci5sb29wKDEsdGhpcyx0aGlzLmdldFJhbmRvbSxbYXJyUGVyY2VudF0pO1xuICAgIH1cblxuICAgIC8qKueUn+S6p+S6uiAqL1xuICAgIHByaXZhdGUgY3JlYXRlX0lubmVyKHJhbmRvbVN0cmluZykgOiB2b2lkXG4gICAge1xuICAgICAgICBpZihyYW5kb21TdHJpbmcgPT0gXCJub25lXCIpIHJldHVybjtcbiAgICAgICAgbGV0IHBlb3BsZTtcbiAgICAgICAgLy/nlJ/kuqfkurrnp41cbiAgICAgICAgc3dpdGNoKHJhbmRvbVN0cmluZylcbiAgICAgICAgeyAgICAvKirlt7LnlJ/miJDnmoTkurrnp40gIDAg5pmu6YCaICAgMeenkeWtpuWutiAgMuaYjuaYnyAz5Zyf5YyqIDTnm5fotLwqL1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkNPTU1PTl9NQU46ICAgICBcbiAgICAgICAgICAgICAgICBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxyZWFkeUNyZWF0ZVswXSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlJPQkJFUl9NQU46Ly/nm5fotLxcbiAgICAgICAgICAgICAgICBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxyZWFkeUNyZWF0ZVs0XSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkJBTkRJVF9NQU46Ly/lnJ/ljKpcbiAgICAgICAgICAgICAgICBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxyZWFkeUNyZWF0ZVszXSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNUQVJfTUFOOi8v5piO5pifXG4gICAgICAgICAgICAgICAgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFscmVhZHlDcmVhdGVbMl0rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOOi8v56eR5a2m5a62XG4gICAgICAgICAgICAgICAgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFscmVhZHlDcmVhdGVbMV0rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9pblBlb3BsZS5wdXNoKHBlb3BsZSk7Ly/liqDlhaXnu7TmiqTmlbDnu4RcbiAgICAgICAgaWYocGVvcGxlID09PSB1bmRlZmluZWQgfHwgcGVvcGxlID09PSBudWxsKSB7Y29uc29sZS5sb2coXCLmsqHmnInnlJ/miJDkurrnp43vvIHnp43nsbs6XCIgKyByYW5kb21TdHJpbmcpO3JldHVybjt9XG4gICAgICAgIHRoaXMuY3JlYXRlUG9zKHBlb3BsZSk7IFxuICAgIH1cblxuICAgIC8qKueUn+S6p+S9jee9riAqL1xuICAgIHByaXZhdGUgY3JlYXRlUG9zKHBlb3BsZSkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgaG91c2VOb2RlID0gKHRoaXMudmlldyBhcyBMYXlhLlNwcml0ZSkuZ2V0Q2hpbGRCeU5hbWUoJ2hvdXNlJyk7XG4gICAgICAgIGxldCBwZXJjZW50ID0gaG91c2VOb2RlLl9jaGlsZHJlbi5sZW5ndGgvMTAwO1xuICAgICAgICBsZXQgaG91c2UgO1xuICAgICAgICBmb3IobGV0IGk9MDtpPCBob3VzZU5vZGUuX2NoaWxkcmVuLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcGVyY2VudCoxMDApO1xuICAgICAgICAgICAgaG91c2UgPSBob3VzZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZV9cIitudW1iZXIpO1xuICAgICAgICAgICAgaWYoaG91c2UgIT09IHVuZGVmaW5lZCAmJiBob3VzZSAhPT0gbnVsbCkgIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZS5zZXRQb3MoaG91c2UueCxob3VzZS55LGhvdXNlKTsgICBcbiAgICAgICAgICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuiOt+WPlumaj+acuuS6uuenjSAqL1xuICAgIHByaXZhdGUgZ2V0UmFuZG9tKGFyclBlcmNlbnQpIDogc3RyaW5nXG4gICAge1xuICAgICAgICBpZih0aGlzLmNvdW50VGltZSA8PSB0aGlzLmNvdW50VGltZV8pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRUaW1lKys7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudFRpbWVfID0gTWF0aC5yYW5kb20oKSpHYW1lQ29uZmlnLlBFUlNPTl9DUkVBVEVfVElNRSoxMDA7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi55Sf5oiQ6Ze06ZqUOlwiICsgTWF0aC5mbG9vcih0aGlzLmNvdW50VGltZS8xMDApICsgXCJzXCIpO1xuICAgICAgICB0aGlzLmNvdW50VGltZSA9IDA7XG5cbiAgICAgICAgbGV0IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGxldCBwZXJzb24gPSBcIlwiO1xuICAgICAgICBsZXQgaW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyUGVyY2VudC5sZW5ndGggO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoYXJyUGVyY2VudFtpXSA8PSBudW1iZXIgJiYgbnVtYmVyIDwgYXJyUGVyY2VudFtpKzFdKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlcnNvbiA9IENvdW50cnlEYXRhLmluc18uYXJyX1Blb3BsZVtpXTtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBlcnNvbik7XG4gICAgICAgIC8v5Yik5pat5Lq65piv5ZCm6L+Y6IO955Sf5oiQXG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpe2NvbnNvbGUubG9nKFwi5qaC546H6K6h566X5Ye66ZSZXCIpO3JldHVybjt9XG4gICAgICAgIGlmKHRoaXMuYWxyZWFkeUNyZWF0ZVtpbmRleF0gPT0gQ291bnRyeURhdGEuaW5zX1twZXJzb25dKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLmdldEFscmVhZENyZWF0ZSgpID09IENvdW50cnlEYXRhLmluc18ucG9wdWxhdGlvbikgcmV0dXJuO1xuICAgICAgICAgICAgcGVyc29uID0gdGhpcy5nZXRSYW5kb20oYXJyUGVyY2VudCk7ICAgICBcbiAgICAgICAgfVxuICAgICAgIHRoaXMuY3JlYXRlX0lubmVyKHBlcnNvbik7Ly/nlJ/kuqfkurrnp40gICBcbiAgICB9XG5cbiAgICAvKuiOt+WPluW3sueUn+aIkOS6uuWPo+eahOaVsOmHjyovXG4gICAgcHVibGljIGdldEFscmVhZENyZWF0ZSgpIDogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmFscmVhZHlDcmVhdGUubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyICs9dGhpcy5hbHJlYWR5Q3JlYXRlW2ldXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICB9XG59IiwiaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XG5cbi8qKlxuICogVUnnrqHnkIblmahcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2Vye1xuICAgIC8qKuaVsOaNrueuoeeQhuWZqCAqL1xuICAgIC8vIHB1YmxpYyBzdGF0aWMgZGF0YU1hbmFnZXIgOiBEYXRhTWFuYWdlcjtcbiAgICAvKipVSSBzcHJpdGUgKi9cbiAgICBwcml2YXRlIFVpU3ByaXRlIDogTGF5YS5TcHJpdGU7XG5cbiAgICAvKirovb3lhaXmlbDmja4gKi9cbiAgICBjb25zdHJ1Y3Rvcih1aTpMYXlhLlNwcml0ZSl7XG4gICAgICAgIHRoaXMuVWlTcHJpdGUgPSB1aTtcbiAgICB9XG4gICAgXG4gICAgXG59IiwiLyoqXG4gKiDkuovku7blj5HnlJ/nrqHnkIblmahcbiAqIFxuICogXG4gKiDnlJ/miJDkuovku7bjgIFcbiAqIOW9seWTjeS6uuWPo+a1geWKqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZEV2ZW50TWFuYWdlciB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICAvKirkuovku7bpooTmiqXliLAgKi9cbiAgICBcblxuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xuXG4gICAgXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBCdXlEaWFsb2cgZnJvbSBcIi4vQ29yZS9CdXlEaWFsb2dcIlxuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi9Db3JlL01zZ0RpYWxvZ1wiXG5pbXBvcnQgT3BlbkdhbWUgZnJvbSBcIi4vU2NyaXB0L09wZW5HYW1lXCJcbmltcG9ydCBHYW1lV29ybGQgZnJvbSBcIi4vU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGRcIlxuaW1wb3J0IE9wZW5TdG9yeSBmcm9tIFwiLi9TY3JpcHQvT3BlblN0b3J5XCJcbmltcG9ydCBDZW50ZXIgZnJvbSBcIi4vU2NyaXB0L0NlbnRlclwiXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xNDQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9OTAwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZGhlaWdodFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiU3RhcnRHYW1lLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJDb3JlL0J1eURpYWxvZy50c1wiLEJ1eURpYWxvZyk7XG4gICAgICAgIHJlZyhcIkNvcmUvTXNnRGlhbG9nLnRzXCIsTXNnRGlhbG9nKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5HYW1lLnRzXCIsT3BlbkdhbWUpO1xuICAgICAgICByZWcoXCJTY3JpcHQvR2FtZVdvcmxkL0dhbWVXb3JsZC50c1wiLEdhbWVXb3JsZCk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9PcGVuU3RvcnkudHNcIixPcGVuU3RvcnkpO1xuICAgICAgICByZWcoXCJTY3JpcHQvQ2VudGVyLnRzXCIsQ2VudGVyKTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XG5jbGFzcyBNYWluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xuXHRcdGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XG5cblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlO1xuXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xuXHR9XG5cblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcblx0fVxuXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXG5cdFx0R2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xuXHR9XG59XG4vL+a/gOa0u+WQr+WKqOexu1xubmV3IE1haW4oKTtcbiIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IENvdW50cnlEYXRhLCB7IE91dENvdW50cnlEYXRhIH0gZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBUb29sIGZyb20gXCIuLi9Ub29sL1Rvb2xcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuXG4vKipcbiAqIFxuICog5Lq656eN54i257G7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZSB7XG4gICAgLyoq5Zy65pmvKi9cbiAgICBwcml2YXRlIHZpZXcgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirnsr7ngbUgKi9cbiAgICBwdWJsaWMgc3AgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirmqKrlnZDmoIfnp7vliqjpgJ/luqYgKi9cbiAgICBwcml2YXRlIGRpclg6bnVtYmVyO1xuICAgIC8qKue6teWdkOagh+enu+WKqOmAn+W6piAqL1xuICAgIHByaXZhdGUgZGlyWTpudW1iZXI7XG4gICAgXG4gICAgLyoqKioqKioqKioqKioqKioqKirlopnlhoUgKioqKioqKioqKioqL1xuICAgIC8qKuWimeWGheS6uui/mOaYr+WimeWkluS6uiAqL1xuICAgIHB1YmxpYyBpc091dCA6IGJvb2xlYW47XG4gICAgLyoq5Lq65bGe5oCnICovXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xuICAgIC8qKuS6uueahOacneWQkSAqL1xuICAgIHB1YmxpYyB0b3dhcmQgOiBhbnk7XG4gICAgLyoq6Z2i5YmN55qENeS4quajgOa1i+eCuSAqL1xuICAgIHB1YmxpYyB0b3dhcmRQb3MgOiBBcnJheTxhbnk+O1xuICAgIC8qKuS6uueahOenu+WKqOebruagh+eCuSAqL1xuICAgIHB1YmxpYyB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGU7XG4gICAgLyoq5Ye655Sf54K5ICovXG4gICAgcHVibGljIGJvcm5Ob2RlIDogTGF5YS5TcHJpdGU7XG4gICAgLyoq5piv5ZCm6KKr5Y+s5ZSkICovXG4gICAgcHVibGljIGlzR28gOiBudW1iZXI7XG5cblxuXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuaXNPdXQgPSBpc091dDtcbiAgICAgICAgdGhpcy50eXBlPXR5cGU7XG4gICAgICAgIHRoaXMuaW5pdCh0eXBlKTtcbiAgICB9XG5cbiAgICAvKirliJ3lp4vljJYgKi9cbiAgICBwcml2YXRlIGluaXQodHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+aVsOaNruWIneWni+WMllxuICAgICAgICB0aGlzLnNldERhdGFJbml0KCk7XG4gICAgICAgIC8v5Yib5bu6XG4gICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKHR5cGUpO1xuICAgIH1cblxuICAgIC8qKuaVsOaNruWIneWni+WMliAqL1xuICAgIHByaXZhdGUgc2V0RGF0YUluaXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudG93YXJkID0ge1xuICAgICAgICAgICAgeDoxMDAwLFxuICAgICAgICAgICAgeTowLFxuICAgICAgICAgICAgc3BlZWQ6R2FtZUNvbmZpZy5URVNUX1BPSU5UX1NQRUVELHJvdGF0aW9uOnVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRhcmdldFJvdGF0aW9uOnVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJvdGF0aW9uQ2hhbmdlIDogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvd2FyZFBvcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirlvIDlp4vooYzliqggKi9cbiAgICBwdWJsaWMgb3BlbkJlaGF2aW91cigpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v6L+Q6KGM5LqG6YC76L6RXG4gICAgICAgIGlmKHRoaXMuaXNPdXQpIFxuICAgICAgICB7XG4gICAgICAgICAgICAvKnRoaXMucGVvcGxlX1Bvc091dCgpO1xuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMuY2hlY2tMaW1pdF9PdXQpO1xuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoT3V0Q291bnRyeURhdGEuaW5zXy5saW1pdFRpbWUqNjAsdGhpcyx0aGlzLmxpbWl0VGltZSk7Ki9cbiAgICAgICAgICAgIHRoaXMuZG9vclBlb3BsZV9Ub091dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zSW5uZXIoKTtcbiAgICAgICAgICAgIExheWEudGltZXIubG9vcCgxNix0aGlzLHRoaXMucGVvcGxlX1Bvc0lubmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uiAqL1xuICAgIHByaXZhdGUgY3JlYXRlUGVvcGxlKHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlU3AodHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5Yib5bu6U3ByaXRlICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTcCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBpbWdVcmwgPSBcIm1hcC9cIit0eXBlK1wiLnBuZ1wiO1xuICAgICAgICBpZighdGhpcy5zcClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zcCA9IG5ldyBMYXlhLlNwcml0ZSgpO1xuICAgICAgICAgICAgdGhpcy52aWV3LmFkZENoaWxkKHRoaXMuc3ApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3AubG9hZEltYWdlKGltZ1VybCk7XG4gICAgICAgIHRoaXMuc3Auc2l6ZSgxMiwxMik7XG4gICAgICAgIHRoaXMuc3AucGl2b3QodGhpcy5zcC53aWR0aC8yLHRoaXMuc3AuaGVpZ2h0LzIpOyAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq6K6+572u5Yid5aeL5L2N572uICovXG4gICAgcHVibGljIHNldFBvcyh4LHksc3A6TGF5YS5TcHJpdGUpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3AueCA9IHg7XG4gICAgICAgIHRoaXMuc3AueSA9IHk7XG4gICAgICAgIHRoaXMuYm9ybk5vZGUgPSBzcDtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5aKZ5aSW5Lq66KGM5Yqo6YC76L6RKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwcml2YXRlIHBlb3BsZV9Qb3NPdXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pa55ZCR77yM5pa55ZCR55SoKC0xfjEp6KGo56S6XG4gICAgICAgIGlmKHRoaXMuc3AueDw9OTAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5zcC54Pj0xMTAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgICAgfVxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtO+8jOWcqOatpOaXtumXtOWGheenu+WKqCzpmo/mnLrml7bpl7TlnKgoMiw4KeS4remAieaLqVxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjYrMjtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMuY2xvc2VNb3ZlVGltZXIpO1xuICAgICAgICAvL+W8gOWQr+enu+WKqFxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xuICAgIH1cbiAgICBcbiAgICAvKirljZXkvY3luKfnp7vliqgqL1xuICAgIHByaXZhdGUgbW92ZURpc3RhbmNlKCk6dm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcC54Kz10aGlzLmRpclg7XG4gICAgICAgIHRoaXMuc3AueSs9dGhpcy5kaXJZO1xuICAgIH1cblxuICAgIC8qKuWFs+mXreenu+WKqOWumuaXtuWZqO+8jOW8gOWQr+WOn+WcsOS8keaBryovXG4gICAgcHJpdmF0ZSBjbG9zZU1vdmVUaW1lcigpOnZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIC8v5LyR5oGv5pe26Ze057uT5p2f5ZCO57un57ut56e75YqoXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNisyO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5wZW9wbGVfUG9zT3V0KTtcbiAgICB9XG4gICAgXG4gICAgLyoq5rue55WZ5pe26Ze077yM6Iul6LaF6L+H5pe26Ze077yM5bCx56a75byA5aSW5Z+OICovXG4gICAgcHJpdmF0ZSBsaW1pdFRpbWUoKTp2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICBpZih0aGlzLnNwLng8PTEwMDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcbiAgICB9XG5cbiAgICBcblxuICAgIC8qKueisOaSnuajgOa1iyAqL1xuICAgIHByaXZhdGUgY2hlY2tMaW1pdF9PdXQoKTp2b2lkXG4gICAge1xuICAgICAgICAvL+i+ueeVjOajgOa1i1xuICAgICAgICBpZih0aGlzLnNwLng8LTV8fHRoaXMuc3AueD4yMDA1fHx0aGlzLnNwLnk8LTUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdG9yeVBlb3BsZSgpO1xuICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIodGhpcy50eXBlLHRoaXMpO1xuICAgICAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/miqTln47msrPmo4DmtYtcbiAgICAgICAgaWYodGhpcy5zcC55Pj0zOTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6YeN5paw57uZ5LiA5Liq5L2N56e7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/ln47pl6jljLrln5/mo4DmtYtcbiAgICAgICAgaWYodGhpcy5zcC54PjkzMiYmdGhpcy5zcC54PDEwNjgmJnRoaXMuc3AueT4zNTAmJnRoaXMuc3AueTwzOTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5Z+O6Zeo5piv5ZCm5omT5byAXG4gICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7XG4gICAgICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIodGhpcy50eXBlLHRoaXMpO1xuICAgICAgICAgICAgICAgIC8v5Z+O5aSW5Lq65Y+jLTFcbiAgICAgICAgICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50LS07XG4gICAgICAgICAgICAgICAgLy/lm73lrrbkurrlj6MrMVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uY2FsX01haW5EYXRhKEdhbWVDb25maWcuTUFJTl9QT1BVTEFUSU9OLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirlopnlhoXkurrooYzliqjpgLvovpEqL1xuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWimeWGheS6uuihjOWKqOmAu+i+kSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHByb3RlY3RlZCBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcbiAgICB7XG5cbiAgICAgICAgLy8gdGhpcy50b3dlZFRvTW92ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRUcmFnZXQodGFyZ2V0OkxheWEuU3ByaXRlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIHRoaXMudGFyZ2V0Tm9kZSA9IHRhcmdldDtcbiAgICAgICAgLy/mtYvor5VcbiAgICAgICAgdGhpcy50YXJnZXROb2RlID0gKHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcInBhbGFjZVwiKSBhcyBMYXlhLlNwcml0ZSk7XG4gICAgICAgIHRoaXMudG93YXJkLnggPSB0YXJnZXQueDtcbiAgICAgICAgdGhpcy50b3dhcmQueSA9IHRhcmdldC55O1xuICAgIH1cblxuICAgIC8qKnRvd2VyZOi9rOWMluaIkOS9jeenuyAqL1xuICAgIHByb3RlY3RlZCB0b3dlZFRvTW92ZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoIXRoaXMudG93YXJkLnJvdGF0aW9uKSB0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IFRvb2wucm90YXRlUm9wZVBvaW50XzIodGhpcy5zcC54LHRoaXMuc3AueSwyMDAsNjAwKTs7XG4gICAgICAgIHRoaXMucGVvcGxlVG93ZXJkKCk7Ly/orqnnm67moIfmnJ3lkJHorqHnrpfmlbBcbiAgICB9XG5cbiAgICAvKirmnJ3lkJEgIHRvd2VyZOenu+WKqCAqL1xuICAgIHByaXZhdGUgcG9zTW92ZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcC54ICs9IHRoaXMudG93YXJkLnNwZWVkKlRvb2wucm90YXRpb25TZXQodGhpcy50b3dhcmQucm90YXRpb24sXCJzaW5cIik7XG4gICAgICAgIHRoaXMuc3AueSArPSB0aGlzLnRvd2FyZC5zcGVlZCpUb29sLnJvdGF0aW9uU2V0KHRoaXMudG93YXJkLnJvdGF0aW9uLFwiY29zXCIpO1xuICAgICAgICB0aGlzLnNwLnJvdGF0aW9uID0gdGhpcy50b3dhcmQucm90YXRpb247XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3Aucm90YXRpb24pO1xuICAgIH1cbiAgICBcbiAgICAvKirkurrpnaLlkJEgKi9cbiAgICBwcm90ZWN0ZWQgcGVvcGxlVG93ZXJkKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmdldFRvd2VyZFBvcygpOy8v6I635b6X5LqU5Liq54K577yM5qC55o2u55uu5qCH5Z2Q5qCH6K6h566XXG4gICAgICAgIHRoaXMudGVzdFRvd2VyZCgpOy8v5qOA5rWL5piv5ZCm56ym5ZCI6KaB5rGCIOS4jeespuWQiCArIC0gNVxuICAgIH1cblxuICAgIC8qKuajgOa1i+ihjOi1sOaWueWQkSAqL1xuICAgIHByb3RlY3RlZCB0ZXN0VG93ZXJkKCkgOiBib29sZWFuXG4gICAge1xuICAgICAgICBsZXQgcG93ZXIgPSB0aGlzLnRlc3RDb2xpZGVyKCk7Ly8gLTEgMCAxIDIgMyA0IDVcbiAgICAgICAgaWYocG93ZXIgPiAwKVxuICAgICAgICB7Ly/mkp7liLDkuobpnIDopoHovazmlrnlkJFcbiAgICAgICAgICAgIHRoaXMudG93YXJkLnJvdGF0aW9uQ2hhbmdlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDdHIocG93ZXIpO1xuICAgICAgICAgICAgdGhpcy5qdWRnZUxlZnRSaWdodCgpOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnBvc01vdmUoKTsvL+enu+WKqFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmluZFRhcmdldCgpO1xuICAgICAgICB0aGlzLnRvd2FyZC5zcGVlZCA9IEdhbWVDb25maWcuVEVTVF9QT0lOVF9TUEVFRDsgICAgICBcbiAgICAgICAgdGhpcy5wb3NNb3ZlKCk7Ly/np7vliqggIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKirpgJ/luqbmjqfliLYgKi9cbiAgICBwcml2YXRlIHNwZWVkQ3RyKHBvd2VyKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudG93YXJkLnNwZWVkID0gR2FtZUNvbmZpZy5URVNUX1BPSU5UX1NQRUVEKigocG93ZXIrMSkvKHRoaXMudG93YXJkUG9zLmxlbmd0aCsyKSk7IFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwZWVkIDo6XCIgKyB0aGlzLnRvd2FyZC5zcGVlZCk7XG4gICAgfVxuXG4gICAgLyoq5Yik5pat5pa55ZCRICovXG4gICAgcHJvdGVjdGVkIGp1ZGdlTGVmdFJpZ2h0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZSArPSBHYW1lQ29uZmlnLlRFU1RfUE9JTlRfUk87XG4gICAgICAgIGxldCBybzEgPSB0aGlzLnRvd2FyZC5yb3RhdGlvbiAtIHRoaXMudG93YXJkLnJvdGF0aW9uQ2hhbmdlO1xuICAgICAgICBsZXQgcm8yID0gdGhpcy50b3dhcmQucm90YXRpb24gKyB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZTtcbiAgICAgICAgdGhpcy5nZXRUb3dlcmRQb3Mocm8xKTtcbiAgICAgICAgbGV0IG51bVJvMSA9IHRoaXMudGVzdENvbGlkZXIoKTtcbiAgICAgICAgdGhpcy5nZXRUb3dlcmRQb3Mocm8yKTtcbiAgICAgICAgbGV0IG51bVJvMiA9IHRoaXMudGVzdENvbGlkZXIoKTtcbiAgICAgICAgaWYobnVtUm8xID09IC0xKSB7dGhpcy50b3dhcmQucm90YXRpb24gPSBybzE7IHJldHVybjt9XG4gICAgICAgIGlmKG51bVJvMiA9PSAtMSkge3RoaXMudG93YXJkLnJvdGF0aW9uID0gcm8yOyByZXR1cm47fVxuICAgICAgICB0aGlzLmp1ZGdlTGVmdFJpZ2h0KCk7XG4gICAgfVxuXG4gICAgLyoqZmluZFRhcmdldOWvu+aJvuebruaghyAqL1xuICAgIHByaXZhdGUgZmluZFRhcmdldCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IENhID0gdGhpcy50b3dhcmQucm90YXRpb24gLSB0aGlzLnRvd2FyZC50YXJnZXRSb3RhdGlvbjtcbiAgICAgICAgaWYoQ2EgPiAwKSB0aGlzLnRvd2FyZC5yb3RhdGlvbiAtPSA1O1xuICAgICAgICAgICAgZWxzZSBpZiggQ2EgPCAwICkgdGhpcy50b3dhcmQucm90YXRpb24gKz01O1xuICAgICAgICBpZiggTWF0aC5hYnMoQ2EpIDwgNSkgdGhpcy50b3dhcmQucm90YXRpb24gKz0gQ2E7XG4gICAgfSAgIFxuXG4gICAgLyoq5qOA5rWL5piv5ZCm56Kw5pKeIOaSnuWIsOS6hui/lOWbnnR1cmUgLTHlj6/ku6XotbAgMOS7peS4iuihqOekuueisOaSnuWIsOWTquS4queCuSovXG4gICAgcHJvdGVjdGVkIHRlc3RDb2xpZGVyKCkgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCBudW0gPSAtMTtcbiAgICAgICAgbGV0IGFyZWEgOiBBcnJheTxMYXlhLlNwcml0ZT49IERhdGFNYW5hZ2VyLmluc18uYXJyX1JpZ2h0QXJlYTtcbiAgICAgICAgaWYodGhpcy5zcC54PDk4MSkgYXJlYSA9IERhdGFNYW5hZ2VyLmluc18uYXJyX0xlZnRBcmVhO1xuICAgICAgICBmb3IobGV0IGk9MDtpPGFyZWEubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QodGhpcy5ib3JuTm9kZSx0aGlzLnNwKSkgXG4gICAgICAgICAgICAgICAge3JldHVybiAtMTt9XG4gICAgICAgICAgICBpZihUb29sLmJsb2NrVGVzdChhcmVhW2ldLHRoaXMuc3ApKXtyZXR1cm4gMDt9Ly/lpoLmnpzlt7Lnu4/mkp7kuIrkuobjgIIgICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGggPSAwO2g8dGhpcy50b3dhcmRQb3MubGVuZ3RoO2grKylcbiAgICAgICAgICAgIHsvL+S6lOS4queCueajgOa1i1xuICAgICAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KGFyZWFbaV0sdGhpcy50b3dhcmRQb3NbaF0pKVxuICAgICAgICAgICAgICAgIHsvL+emu+S6uuacgOi/keeahOeCuVxuICAgICAgICAgICAgICAgICAgICBudW0gPSBoKzE7Ly8x77yMMu+8jDPvvIw077yMNVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtO1xuICAgIH1cblxuICAgIC8qKuS6uumdouWQkeeahOS6lOS4quajgOa1i+eCuSAqL1xuICAgIHByb3RlY3RlZCBnZXRUb3dlcmRQb3Mocm90YXRpb25UZXN0PykgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgcm90YXRpb24gPSB0aGlzLnRvd2FyZC5yb3RhdGlvbjsvL+S9v+eUqOW9k+WJjemdouWQkVxuICAgICAgICBpZihyb3RhdGlvblRlc3QpIHJvdGF0aW9uID0gcm90YXRpb25UZXN0O1xuICAgICAgICBlbHNlIHRoaXMua2VlcFRvd2VyZERhdGEoKTsvL+S/neWtmCDnjrDlnKjkuLrmraLliLDnm67moIfngrnnmoTop5LluqZcbiAgICAgICAgaWYocm90YXRpb24gPT09IHVuZGVmaW5lZCkgXG4gICAgICAgIHsvL+WmguaenOinkuW6puaYr3VuZGVmXG4gICAgICAgICAgICByb3RhdGlvbiA9IHRoaXMudG93YXJkLnRhcmdldFJvdGF0aW9uLy/nm67moIfop5LluqbvvIzliJ3lp4vop5LluqYgICBcbiAgICAgICAgICAgIHRoaXMudG93YXJkLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIH1cblxuICAgICAgICAvL+S9jeenu+mcgOimgeeahOWPmOmHj1xuICAgICAgICBsZXQgY29zIDogbnVtYmVyID0gVG9vbC5yb3RhdGlvblNldChyb3RhdGlvbixcImNvc1wiKTtcbiAgICAgICAgbGV0IHNpbiA6IG51bWJlciA9IFRvb2wucm90YXRpb25TZXQocm90YXRpb24sXCJzaW5cIik7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS14OjpcIiArIHRoaXMuc3AueCArIFwieTo6XCIgKyB0aGlzLnNwLnkpO1xuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVDb25maWcuVEVTVF9QT0lOVF9DT1VOVDtpKyspLy/orrDlvZXkupTkuKpcbiAgICAgICAgeyBcbiAgICAgICAgICAgIGlmKCF0aGlzLnRvd2FyZFBvc1tpXSkgdGhpcy50b3dhcmRQb3NbaV0gPSB7fTsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50b3dhcmRQb3NbaV0ueCA9IHRoaXMuc3AueCArIEdhbWVDb25maWcuVEVTVF9QT0lOVF9ESUMqc2luKihpKzEpO1xuICAgICAgICAgICAgdGhpcy50b3dhcmRQb3NbaV0ueSA9IHRoaXMuc3AueSArIEdhbWVDb25maWcuVEVTVF9QT0lOVF9ESUMqY29zKihpKzEpOyBcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRvd2FyZFBvcyk7XG4gICAgfVxuXG4gICAgLyoq5L+d5a2YIHRvd2Vy5L+h5oGvICovXG4gICAgcHJvdGVjdGVkIGtlZXBUb3dlcmREYXRhKCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+WtmOWCqOeOsOWcqOeCueWIsOebruagh+inkuW6plxuICAgICAgICBsZXQgcFggPSB0aGlzLnNwLng7XG4gICAgICAgIGxldCBwWSA9IHRoaXMuc3AueTtcbiAgICAgICAgLy8gbGV0IHRYID0gdGhpcy50YXJnZXROb2RlLng7XG4gICAgICAgIC8vIGxldCB0WSA9IHRoaXMudGFyZ2V0Tm9kZS55O1xuICAgICAgICBsZXQgdFggPSAyMDA7XG4gICAgICAgIGxldCB0WSA9IDYwMDtcbiAgICAgICAgdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb24gPSBUb29sLnJvdGF0ZVJvcGVQb2ludF8yKHBYLHBZLHRYLHRZKTtcbiAgICB9XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8qKipcbiAgICAgKiDov5vnqIsgLyDlh7rln47pgLvovpEgXG4gICAgICogQHR5cGUgdHJ1Zei/m+WfjiAgZmFsc2Xlh7rln45cbiAgICAqL1xuICAgIHB1YmxpYyBwZW9wbGVHbyh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgICAgICBpZih0eXBlKSB7XG4gICAgICAgICAgICAgICAgLy/ov5vln47mlrnms5VcbiAgICAgICAgICAgICAgICB0aGlzLm91dFBlb3BsZV9Ub0Rvb3IoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8v5Ye65Z+O5pa55rOVXG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5Z+O5aSW5by65Yi26L+b6ZeoICovXG4gICAgcHJpdmF0ZSBvdXRQZW9wbGVfVG9Eb29yKCk6dm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcbiAgICAgICAgbGV0IGRpclg9MTAwMC10aGlzLnNwLng7XG4gICAgICAgIGxldCBkaXJZPTQxMC10aGlzLnNwLnk7XG4gICAgICAgIGxldCBkaXM9TWF0aC5zcXJ0KE1hdGgucG93KDEwMDAtdGhpcy5zcC54LDIpK01hdGgucG93KDQxMC10aGlzLnNwLnksMikpO1xuICAgICAgICB0aGlzLmRpclg9ZGlyWC9kaXM7XG4gICAgICAgIHRoaXMuZGlyWT1kaXJZL2RpcztcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMuY2hlY2tMaW1pdF9PdXQpO1xuICAgIH1cblxuICAgIC8qKumXqOW8uuWItuWHuuWfjuWkliAqL1xuICAgIHByaXZhdGUgZG9vclBlb3BsZV9Ub091dCgpOnZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XG4gICAgICAgIGxldCB4PU1hdGgucmFuZG9tKCkqMTM2KzkzMjtcbiAgICAgICAgbGV0IHk9MzUwO1xuICAgICAgICB0aGlzLnNldFBvcyh4LHksdGhpcy5zcCk7XG4gICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpKjAuNy0wLjI7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcbiAgICB9XG4gICAgLyoq5Lq65raI5aSxICovXG4gICAgcHJvdGVjdGVkIGRlc3RvcnlQZW9wbGUoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xuICAgIH1cbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIGV4dGVuZHMgUGVvcGxle1xuXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XG4gICAgICAgIHN1cGVyKHZpZXcsdHlwZSxpc091dCk7XG4gICAgfVxuXG4gICAgLyoq5aKZ5YaF6YC76L6RICovXG4gICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2JiZXIgZXh0ZW5kcyBQZW9wbGV7XHJcbiAgICAvKirotKLmlL/kvKTlrrMgKi9cclxuICAgIHB1YmxpYyBtb25leTpudW1iZXI7XHJcbiAgICAvKirlubjnpo/luqYgKi9cclxuICAgIHB1YmxpYyBwb3B1bGFyU3VwcG9ydDpudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWBt+WPlui0ouaUv+eahOaWueW8jyzlhYjnu5nkuojml7bpl7QgKi9cclxuICAgIHB1YmxpYyBjdXRNb25leVRpbWUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7Tov5vooYzlgbfnm5coMTAtMjAp56eSXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSoxMCsxMDtcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzlgbfnm5dcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5DdXRNb25leSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ml7bpl7TlkI7lgbflj5ZcclxuICAgIHB1YmxpYyBDdXRNb25leSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1vbmV5PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZmN5L2OICovXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZW50ZXIgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aWR0aFwiICsgdGhpcy5zY3JlZW5XaWR0aCk7XG4gICAgICAgIGlmKHNjcmVlbldpZHRoIDwgODAwKSAodGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShcImdhbWVOYW1lXCIpIGFzIExheWEuTGFiZWwpLmZvbnRTaXplID0gMTI1O1xuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLlNwcml0ZSkueCA9IChzY3JlZW5XaWR0aC0gNjY3KS8yOyAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgV29ybGRFdmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvV29ybGRFdmVudE1hbmFnZXJcIjtcbmltcG9ydCB7IHVpIH0gZnJvbSBcIi4uLy4uL3VpL2xheWFNYXhVSVwiO1xuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1VJTWFuYWdlclwiO1xuaW1wb3J0IFBlb3BsZU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvUGVvcGxlTWFuYWdlclwiO1xuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uLy4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgTXNnRGlhbG9nIGZyb20gXCIuLi8uLi9Db3JlL01zZ0RpYWxvZ1wiO1xuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgQnV5RGlhbG9nIGZyb20gXCIuLi8uLi9Db3JlL0J1eURpYWxvZ1wiO1xuaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vLi4vUGVyZmViL1Blb3BsZVwiO1xuXG4vKipcbiAqIOS4lueVjOeuoeeQhuWZqOiEmuacrFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV29ybGQgZXh0ZW5kcyB1aS5HYW1lV29ybGRVSXtcbiAgICAvKipEYXRhTWFuYWdlciAg5Y2V5L6LICovXG4gICAgLyoq5LqL5Lu25Y+R55Sf5ZmoICovXG4gICAgcHJpdmF0ZSB3b3JsZEV2ZW50TWFuYWdlciA6IFdvcmxkRXZlbnRNYW5hZ2VyO1xuICAgIC8qKuS6uuexu+euoeeQhuWZqCovXG4gICAgcHJpdmF0ZSBwZW9wbGVNYW5hZ2VyIDogUGVvcGxlTWFuYWdlcjtcbiAgICAvKipVSeeuoeeQhuWZqCAqL1xuICAgIHByaXZhdGUgdWlNYW5hZ2VyIDogVUlNYW5hZ2VyO1xuICAgIC8qKua2iOaBr+mAmueUqOahhiAqL1xuICAgIHByaXZhdGUgbXNnRGlhbG9nIDogTXNnRGlhbG9nO1xuICAgIC8qKui0reS5sOahhiAqL1xuICAgIHByaXZhdGUgYnV5RGlhbG9nOkJ1eURpYWxvZztcbiAgICBcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKirlsY/luZXlrr3luqYgKi9cbiAgICBwcml2YXRlIHNjcmVlbldpZHRoIDogbnVtYmVyO1xuICAgIC8qKum8oOagh+aYr+WQpuaMieS4iyAqL1xuICAgIHByaXZhdGUgaXNEb3duIDogYm9vbGVhbjtcbiAgICAvKirpvKDmoIfngrnorrDlvZUgKi9cbiAgICBwcml2YXRlIG1vdXNlUG9zIDogYW55O1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwcml2YXRlIHRpbWVyQ291bnQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZ2FtZURhdGFJbml0KCk7Ly/muLjmiI/lj5jph4/liJ3lp4vljJZcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpOy8v57uZ5qGl5re75Yqg5LqL5Lu2IFxuICAgICAgICB0aGlzLnNjcmVlblNldHRpbmcoKTsvL+Wxj+W5leWxheS4rVxuICAgICAgICB0aGlzLmdhbWVTdGFydCgpOy8v5ri45oiP5rWB56iL5byA5aeLXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc18uc2V0QXJlYSh0aGlzLnNwX3NjZW5lLmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikpO1xuICAgIH1cblxuICAgIC8qKuaVsOaNruWIneWni+WMliAqL1xuICAgIHByaXZhdGUgZ2FtZURhdGFJbml0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLndvcmxkRXZlbnRNYW5hZ2VyID0gbmV3IFdvcmxkRXZlbnRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMucGVvcGxlTWFuYWdlciA9IG5ldyBQZW9wbGVNYW5hZ2VyKHRoaXMuc3Bfc2NlbmUpO1xuICAgICAgICB0aGlzLnVpTWFuYWdlciA9IG5ldyBVSU1hbmFnZXIodGhpcy5zcF9VSSk7XG4gICAgICAgIHRoaXMubXNnRGlhbG9nID0gbmV3IE1zZ0RpYWxvZygpOyAgICAgIFxuICAgICAgICB0aGlzLmJ1eURpYWxvZz1uZXcgQnV5RGlhbG9nKCk7XG4gICAgICAgIHRoaXMubW91c2VQb3MgPSB7fTtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lckNvdW50ID0gMDtcbiAgICB9XG5cbiAgICAvKirmt7vliqDkuovku7YgKi9cbiAgICBwcml2YXRlIGFkZEV2ZW50KCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvLyB0aGlzLnN0YWdlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyxmdW5jdGlvbihlKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAvLyB9KVxuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTix0aGlzLHRoaXMubW91c2VEb3duKTtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX1VQLHRoaXMsdGhpcy5tb3VzZVVwKTtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX01PVkUsdGhpcyx0aGlzLm1vdXNlTW92ZSk7XG4gICAgICAgIC8v57uZ6Zeo5biu54K554K55Ye75LqLICAgXG4gICAgICAgIHRoaXMuc3BfZG9vci5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5kb29yQ3RyKTtcbiAgICAgICAgLy/ljLvppobkuovku7bnu5HlrppcbiAgICAgICAgdGhpcy5ob3NwaXRhbC5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5IT1NQSVRBTF0pO1xuICAgICAgICAvL+WGm+mYn+S6i+S7tue7keWumlxuICAgICAgICB0aGlzLmFybXkub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuQVJNWV0pO1xuICAgICAgICAvL+eyruS7k+S6i+S7tue7keWumlxuICAgICAgICB0aGlzLmZhcm0ub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRkFSTV0pOyAgICAgICAgXG4gICAgICAgIC8v56eR5oqA6aaG5LqL5Lu257uR5a6aXG4gICAgICAgIHRoaXMudGVjaG5vbG9neS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5URUNITk9MT0dZXSk7ICAgICAgICBcbiAgICAgICAgLy/mlrDpl7vngrnkuovku7bnu5HlrppcbiAgICAgICAgLy90aGlzLmV2ZW50SG91c2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRVZFTlRfSE9VU0VdKTsgICAgIFxuICAgICAgICAvL+aWsOmXu+eah+Wuq+e7keWumlxuICAgICAgICB0aGlzLnBhbGFjZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5QQUxBQ0VdKTtcbiAgICB9XG5cbiAgICAvKirlsY/luZUg5bGA5LitKi9cbiAgICBwcml2YXRlIHNjcmVlblNldHRpbmcoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIgKyB0aGlzLnNjcmVlbldpZHRoKTtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS54ID0gLSgyMDAwLXRoaXMuc2NyZWVuV2lkdGgpLzI7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v5LqL5Lu25Zue6LCDXG5cbiAgICAvKirpl6jnmoTlvIDlhbMgKi9cbiAgICBwcml2YXRlIGRvb3JDdHIoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbilcbiAgICAgICAgey8v5byA6ZeoXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZG9vckNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7Ly/lhbPpl6hcbiAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRvb3JPcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirlhbPpl6ggKi9cbiAgICBwcml2YXRlIGRvb3JDbG9zZSgpIDogdm9pZFxuICAgIHtcblxuICAgIH1cblxuICAgIC8qKuW8gOmXqCAqL1xuICAgIHByaXZhdGUgZG9vck9wZW4oKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG5cbiAgICAvKirnp7vliqggKi9cbiAgICBwcml2YXRlIG1vdXNlTW92ZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoIXRoaXMuaXNEb3duKSByZXR1cm47XG4gICAgICAgIGlmKHRoaXMubW91c2VQb3MueClcbiAgICAgICAge1xuICAgICAgICAgICB0aGlzLnNwX3NjZW5lLnggKz0gTGF5YS5zdGFnZS5tb3VzZVggLSB0aGlzLm1vdXNlUG9zLng7IFxuICAgICAgICAvLyAgICB0aGlzLnNwX3NjZW5lLnkgKz0gTGF5YS5zdGFnZS5tb3VzZVkgLSB0aGlzLm1vdXNlUG9zLng7XG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPiAwKSAgdGhpcy5zcF9zY2VuZS54ID0gMDtcbiAgICAgICAgICAgIGlmKHRoaXMuc3Bfc2NlbmUueCA8IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKSkgdGhpcy5zcF9zY2VuZS54ID0gIC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSBMYXlhLnN0YWdlLm1vdXNlWDtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy55ID0gTGF5YS5zdGFnZS5tb3VzZVk7XG4gICAgfVxuXG4gICAgLyoq5ouW5Yqo5oyJ5LiLICovXG4gICAgcHJpdmF0ZSBtb3VzZURvd24oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKirmi5bliqjmiqzotbcgKi9cbiAgICBwcml2YXRlIG1vdXNlVXAoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7IFxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IHVuZGVmaW5lZDsgICAgICAgXG4gICAgfVxuXG5cbiAgICAvKirngrnlh7sg6I635Y+W5bu6562R5L+h5oGvICovXG4gICAgcHJpdmF0ZSBvbkhvdXNlSW5mbyh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubXNnRGlhbG9nLnNob3dNc2codHlwZSk7XG4gICAgfVxuXG4gICAgLyoq54K55Ye76LSt5Lmw5oyJ6ZKuICovXG4gICAgLypwcml2YXRlIGJ1eURpYWxvZ19DbGljayh0eXBlOnN0cmluZyk6dm9pZFxuICAgIHtcbiAgICAgICAgc3dpdGNoKHR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5NQUlOX1BPUFVMQVRJT046XG4gICAgICAgICAgICAgICAgdGhpcy5idXlEaWFsb2cuYnV5X25hbWUudGV4dD1cIuS6uuWPo1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLk1BSU5fUE9QVUxBUlNVUFBPUlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5idXlEaWFsb2cuYnV5X25hbWUudGV4dD1cIuW5uOemj+W6plwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLk1BSU5fTU9ORVk6XG4gICAgICAgICAgICAgICAgdGhpcy5idXlEaWFsb2cuYnV5X25hbWUudGV4dD1cIui0ouaUv1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLk1BSU5fVEVDSE5PTE9HWTpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1eURpYWxvZy5idXlfbmFtZS50ZXh0PVwi56eR5oqAXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuTUFJTl9QUkVTVElHRTpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1eURpYWxvZy5idXlfbmFtZS50ZXh0PVwi5aiB5pybXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idXlEaWFsb2cucG9wdXAoKTtcbiAgICB9Ki9cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t57Ku6aOfLS0tLS0tLS0tLS0tLVxuICAgIC8qKueyrumjn+S6p+WHuuWFrOW8jyAqL1xuICAgIHB1YmxpYyBjYWxfR3JhaW5BZGQoKTp2b2lkXG4gICAge1xuXG4gICAgfVxuXG4gICAgLyoq57Ku6aOf5raI6ICX5YWs5byPICovXG4gICAgcHVibGljIGNhbF9HcmFpbk1pbnVzKCk6dm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq57Ku6aOf57uT566XICovXG4gICAgLypwdWJsaWMgY2FsX0dyYWluKCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/lpoLmnpzov5jmnInnsq7po5/lupPlrZhcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZD49Q291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+WmguaenOeUn+S6p+mHj+Wkp+S6juWkp+S6jua2iOiAl+eOh+eahOafkOS4quWAjeeOh++8jOWFiOiuqeWFtuiHquWKqOi9rOWMluS4uui0ouaUv++8jOS5i+WQjuS/ruaUueS4uuaJi+WKqOi9rOWMllxuICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZC9Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXM+PUdhbWVDb25maWcuR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8v6LaF5Ye65YCN546H55qE6YOo5YiGXG4gICAgICAgICAgICAgICAgbGV0IGV4Y2hhbmdlPUNvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQtQ291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKkdhbWVDb25maWcuR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UO1xuICAgICAgICAgICAgICAgIC8v5o2i6ZKxXG4gICAgICAgICAgICAgICAgdGhpcy5leGNoYW5nZU1vbmV5KGV4Y2hhbmdlKTtcbiAgICAgICAgICAgICAgICAvL+WJqeS9meeahOWKoOWFpeW6k+WtmFxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jays9KENvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQtZXhjaGFuZ2UtQ291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+WKoOWFpeW6k+WtmFxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jays9KENvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQtQ291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5aaC5p6c5bqT5a2Y5Yqg5LiK55Sf5Lqn55qE57Ku6aOf5LiN6Laz5Lul5oq15aSf5raI6ICX55qE57Ku6aOfXG4gICAgICAgICAgICBpZigoQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrK0NvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQpPENvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+eCueWHu+mAieaLqeaYr+WQpui0reS5sOeyrumjn++8jOWmguaenOS4jei0reS5sOWImeWvvOiHtOS6uuWPo+WHj+WwkeWSjOW5uOemj+W6pumZjeS9jlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8v5YeP5bCR5bqT5a2YXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrLT1Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMtQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0qL1xuXG4gICAgLyoq57Ku6aOf5o2i6ZKxICovXG4gICAgcHVibGljIGV4Y2hhbmdlTW9uZXkoZ3JhaW46bnVtYmVyKTp2b2lkXG4gICAge1xuXG4gICAgfVxuXG4gICAgLyoq6ZKx5o2i57Ku6aOfICovXG4gICAgcHVibGljIGV4Y2hhbmdlR3JhaW4obW9uZXk6bnVtYmVyKTp2b2lkXG4gICAge1xuXG4gICAgfVxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0t56iA5pyJ6ZeoXG4gICAgLyoq6LSt5Lmw56iA5pyJ6ZeoICovXG4gICAgcHVibGljIGJ1eVJhcmVEb29yKCk6dm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuICAgIC8vLy8vLy8vLy8vL+a4uOaIj+a1geeoi+W8gOWniy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLyoq5ri45oiP5rWB56iL5byA5aeLICovXG4gICAgcHJpdmF0ZSBnYW1lU3RhcnQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMucGVvcGxlTWFuYWdlci5jcmVhdGVQZW9wbGUoKTsvL+S6uuWPo+eUn+aIkOmAu+i+kei/kOihjFxuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIuY3JlYXRlUGVvcGxlX0lubmVyKCk7Ly/lhoXkurrlj6PnlJ/miJBcbiAgICB9XG5cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/kurrlj6PmtYHliqjpgJrnn6XlmahcbiAgICAvKipcbiAgICAgKiDmtYHliqjmr5TkvovvvIwg6YCa55+l5ZmoXG4gICAgICogXG4gICAgICogICovXG4gICAgcHJpdmF0ZSBjdXJyZW50UmF0aW8oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudGltZXJDb3VudCsrO1xuICAgICAgICBsZXQgY291bnRyeURhdGEgPSBDb3VudHJ5RGF0YS5pbnNfO1xuICAgICAgICBsZXQgQkkgPSBjb3VudHJ5RGF0YS5wZXJjZW50OyAgIC8v6L+bL+WHulxuICAgICAgICBsZXQgb3V0ZXJUYXJnZXQgPSBjb3VudHJ5RGF0YS5leGl0UGVvcGxlOy8v5Ye66Zeo55uu5qCH5pWwXG4gICAgICAgIGxldCBpbm5lclRhZ2V0ID0gY291bnRyeURhdGEuZW50ZXJQZW9wbGU7Ly/ov5vpl6jnm67moIfmlbBcbiAgICAgICAgbGV0IF9vdXRlciA9IGNvdW50cnlEYXRhLl9vdXRlclBlb3BsZTsvL+WHuuWfjuWPo+WunumZheWAvFxuICAgICAgICBsZXQgX2lubmVyID0gY291bnRyeURhdGEuX2lubmVyUGVvcGxlOy8v5YWl5Z+O5a6e6ZmF5YC8XG4gICAgICAgIGxldCBsYXN0VGltZSA9IDEyMDAwMCAtIHRoaXMudGltZXJDb3VudCAtIDUwMDAwOy8v6I635Y+W5Ymp5L2Z5pe26Ze077yM5aSa6aKE5pSvMTDnp5JcbiAgICAgICAgaWYob3V0ZXJUYXJnZXQgPiBfb3V0ZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6YCa55+lXG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaW5uZXJUYWdldCA+IF9pbm5lcilcbiAgICAgICAge1xuICAgICAgICAgICAgLy/pgJrnn6UgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy50aW1lckNvdW50ID4gMTIwMDAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5fb3V0ZXJQZW9wbGUgPSAwOy8v5a6e6ZmF5YC85b2S6Zu2XG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5faW5uZXJQZW9wbGUgPSAwOy8v5a6e6ZmF5YC85b2S6Zu2XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuR2FtZSBleHRlbmRzIExheWEuU2NyaXB0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG4gICAgXG5cbiAgICBvbkNsaWNrKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lV29ybGQuc2NlbmVcIik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5TdG9yeSBleHRlbmRzIExheWEuU2NyaXB0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG4gICAgXG5cbiAgICBvbkNsaWNrKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lU3Rvcnkuc2NlbmVcIik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x7XG4gICAgLy/ojrflj5bkuInop5Llh73mlbDlgLxcbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uRGVhbChmeDpudW1iZXIsZnk6bnVtYmVyLHN4Om51bWJlcixzeTpudW1iZXIsZ2V0U3RyaW5nKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgLyoq5pac6L65ICovXG4gICAgICAgIGxldCBjIDogbnVtYmVyID0gTWF0aC5zcXJ0KE1hdGgucG93KGZ4IC0gc3gsMikgKyBNYXRoLnBvdyhmeSAtIHN5LDIpKTtcbiAgICAgICAgLyoq5Li06L65ICovXG4gICAgICAgIGxldCBhIDogbnVtYmVyID0gc3ggLSBmeDtcbiAgICAgICAgLyoq5a+56L65ICovXG4gICAgICAgIGxldCBiIDogbnVtYmVyID0gc3kgLSBmeTtcbiAgICAgICAgXG4gICAgICAgIGlmKGdldFN0cmluZyA9PSBcInNpblwiKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiI3NpbiA9PVwiICsgKGIvYykpO1xuICAgICAgICAgICAgcmV0dXJuIChiL2MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZ2V0U3RyaW5nID09IFwiY29zXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIjY29zID09XCIgKyAoYS9jKSk7XG4gICAgICAgICAgICByZXR1cm4gKGEvYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiI3RhbiA9PVwiICsgKGIvYSkpOy8v5a+56L65IOavlCDkuLTovrkgXG4gICAgICAgICAgICByZXR1cm4gKGIvYSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirnorDmkp7mo4DmtYsgZGljTnVtIO+8mumihOiuvui3neemuyBvYmplY3Qx5ZKMb2JqZWN0MuS8oOWFpXNwcml0ZSzmmK/mjInnhafmr4/kuKpzcHJpdGXnmoTplJrngrnlnKjkuK3lv4PkvY3nva7mnaXorqHnrpfnmoQgICovXG4gICAgcHVibGljIHN0YXRpYyBjb2xsaXNpb25DaGVjayhvYmplY3QxLG9iamVjdDIpIDogYm9vbGVhblxuICAgIHtcbiAgICAgICAgaWYoTWF0aC5hYnMob2JqZWN0MS54IC0gb2JqZWN0Mi54KTwgb2JqZWN0MS53aWR0aC8yICsgb2JqZWN0Mi53aWR0aC8yJiZcbiAgICAgICAgICAgTWF0aC5hYnMob2JqZWN0MS55IC0gb2JqZWN0Mi55KSA8IG9iamVjdDEuaGVpZ2h0LzIgKyBvYmplY3QyLmhlaWdodC8yKXtcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhbHNlXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgcHVibGljIHN0YXRpYyByb3RhdGVSb3BlUG9pbnRfMih4LHksWCxZKTpudW1iZXJcbiAgICB7XG4gICAgICAgICAgICBsZXQgY29zPVRvb2wucm90YXRpb25EZWFsKHgseSxYLFksXCJjb3NcIik7XG4gICAgICAgICAgICBsZXQgc2luPVRvb2wucm90YXRpb25EZWFsKHgseSxYLFksXCJzaW5cIik7XG4gICAgICAgICAgICBsZXQgcm90YXRpb247XG4gICAgICAgICAgICBpZihjb3M+PTAmJnNpbj4wKXtcbiAgICAgICAgICAgICAgICByb3RhdGlvbj0gMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyktOTA7XG4gICAgICAgICAgICB9ZWxzZSBpZihjb3M8MCYmc2luPj0wKXtcbiAgICAgICAgICAgICAgICByb3RhdGlvbj0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKS05MDtcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvczw9MCYmc2luPDApe1xuICAgICAgICAgICAgICAgIHJvdGF0aW9uPTkwLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpOyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfWVsc2UgaWYoY29zPjAmJnNpbjw9MCl7XG4gICAgICAgICAgICAgICAgcm90YXRpb249IDkwLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoeSA8IFkpIHJvdGF0aW9uICs9IDE4MDtcbiAgICAgICAgICAgIHJldHVybiByb3RhdGlvbjtcbiAgICB9XG5cbiAgICAvKirojrflj5bop5LluqYgXG4gICAgICog56e75Yqo54K55Zyo5YmNXG4gICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldFJvdGF0aW9uKHgxLHkxLHgyLHkyKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IGNvcz1Ub29sLnJvdGF0aW9uRGVhbCh4MSx5MSx4Mix5MixcImNvc1wiKTtcbiAgICAgICAgbGV0IHNpbj1Ub29sLnJvdGF0aW9uRGVhbCh4MSx5MSx4Mix5MixcInNpblwiKTtcbiAgICAgICAgbGV0IHJvdGF0aW9uO1xuICAgICAgICBpZihjb3MgPj0wICYmIHNpbj4wKXtcbiAgICAgICAgICAgIHJvdGF0aW9uID0gOTAgKyAxODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgfVxuICAgICAgICBpZihjb3MgPDAgJiYgc2luPj0wKXtcbiAgICAgICAgICAgIHJvdGF0aW9uID0gLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNvcyA+MCAmJiBzaW48PTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJvdGF0aW9uID0gLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNvcyA8PTAgJiYgc2luPDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJvdGF0aW9uID0gMTgwLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3RhdGlvbjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIHJvdGF0aW9uID0gNDUg6KeS5bqmXG4gICAgICog5rGCIGNvcyDov5jmmK8gc2luXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByb3RhdGlvblNldChyb3RhdGlvbix0eXBlU3RyaW5nKSAgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCByIDtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZihyb3RhdGlvbiA8IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJvdGF0aW9uICs9IDM2MCooTWF0aC5hYnMoTWF0aC5mbG9vcihyb3RhdGlvbi8zNjApKzIpKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZihNYXRoLmZsb29yKHJvdGF0aW9uLzM2MCk+MClcbiAgICAgICAge1xuICAgICAgICAgICAgcm90YXRpb24gLT0gMzYwKk1hdGguZmxvb3Iocm90YXRpb24vMzYwKTtcbiAgICAgICAgfVxuICAgICAgICByID0gKHJvdGF0aW9uKS8xODAqTWF0aC5QSTsgICAgICAgIFxuICAgICAgICBpZih0eXBlU3RyaW5nID09IFwiY29zXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5hYnMoTWF0aC5jb3MocikpO1xuICAgICAgICAgICAgaWYoKHJvdGF0aW9uID4gMCAmJiByb3RhdGlvbiA8PSA5MCkgfHwgKHJvdGF0aW9uPjI3MCAmJiByb3RhdGlvbjw9MzYwKSkgIHZhbHVlID0gLXZhbHVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb3M6OlwiICsgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgeyAgICAgICAgIFxuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmFicyhNYXRoLnNpbihyKSk7XG4gICAgICAgICAgICBpZigocm90YXRpb24+MTgwICYmIHJvdGF0aW9uIDw9IDI3MCkgfHwgKHJvdGF0aW9uPjI3MCAmJiByb3RhdGlvbjw9MzYwKSkgdmFsdWUgPSAtdmFsdWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNpbjo6XCIgKyB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlICAgICAgICBcbiAgICB9XG4gICAgLyoqXG4gICAgICog6Led56a76K6h566XXG4gICAgICogMiDlr7nosaFcbiAgICAgKiBmaXJzdFxuICAgICAqIHNlY29uZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY291bnREaWNfT2JqZWN0KGY6YW55LHM6YW55KSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhmLnggLSBzLngsMikgKyBNYXRoLnBvdyhmLnkgLSBzLnksMikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaWueWdl+ajgOa1iyBcbiAgICAgKiBcbiAgICAgKiDmlrnlnZflr7nosaEgc3BcbiAgICAgKiDmo4DmtYvnmoTngrkg5a+56LGhXG4gICAgICogKi9cbiAgICBwdWJsaWMgc3RhdGljIGJsb2NrVGVzdChzcCxwb2ludCkgOiBib29sZWFuXG4gICAge1xuICAgICAgICBsZXQgcG9pbnRMZWZ0IDogYW55ID17eDpzcC54IC0gc3Aud2lkdGgvMix5OnNwLnktc3AuaGVpZ2h0LzJ9O1xuICAgICAgICBsZXQgcG9pbnRSaWdodCA6IGFueSA9e3g6c3AueCArIHNwLndpZHRoLzIseTpzcC55K3NwLmhlaWdodC8yfTtcbiAgICAgICAgbGV0IHNfcG9pbnRMZWZ0ID0gcG9pbnQueCA+IHBvaW50TGVmdC54ICYmIHBvaW50Lnk+cG9pbnRMZWZ0Lnk7XG4gICAgICAgIGxldCBzX3BvaW50UmlnaHQgPSBwb2ludC54IDwgcG9pbnRSaWdodC54ICYmIHBvaW50Lnk8cG9pbnRSaWdodC55O1xuICAgICAgICBpZihzX3BvaW50TGVmdCAmJiBzX3BvaW50UmlnaHQpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gIGZhbHNlO1xuICAgIH1cbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cbmltcG9ydCBWaWV3PUxheWEuVmlldztcbmltcG9ydCBEaWFsb2c9TGF5YS5EaWFsb2c7XG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbmV4cG9ydCBtb2R1bGUgdWkge1xyXG4gICAgZXhwb3J0IGNsYXNzIEJ1eVVJIGV4dGVuZHMgRGlhbG9nIHtcclxuXHRcdHB1YmxpYyBiZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnRuX2J1eTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnV5X25hbWU6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGJ1eV9pbnB1dDpMYXlhLlRleHRJbnB1dDtcblx0XHRwdWJsaWMgYnRuX2Nsb3NlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBidXlfcHJpY2U6bGF5YS5kaXNwbGF5LlRleHQ7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJCdXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIEdhbWVXb3JsZFVJIGV4dGVuZHMgU2NlbmUge1xyXG5cdFx0cHVibGljIHNwX3NjZW5lOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9ncm91bmQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX3JpdmVyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF93YWxsOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9kb29yOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfOTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzExOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcGFsYWNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3NwaXRhbDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIwOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZWNobm9sb2d5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8wOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI2OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGZhcm06TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMwOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM2OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYXJteTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfVUk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGltZ19wb3B1bGF0aW9uOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3BvcHVsYXRpb246bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ19wb3B1bGFyU3VwcG9ydDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9wb3B1bGFyU3VwcG9ydDpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX21vbmV5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X21vbmV5OmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfdGVjaG5vbG9neTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF90ZWNobm9sb2d5OmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfcHJlc3RpZ2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfcHJlc3RpZ2U6bGF5YS5kaXNwbGF5LlRleHQ7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJHYW1lV29ybGRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBtb2R1bGUgdWkuRGlhIHtcclxuICAgIGV4cG9ydCBjbGFzcyBDdXJyZW50RGlhbG9nVUkgZXh0ZW5kcyBTY2VuZSB7XHJcblx0XHRwdWJsaWMgbXNnQm9keTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3ByaXRlX1BlcnNvbjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3ByaXRlX01zZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnRuX2Nsb3NlOkxheWEuU3ByaXRlO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiRGlhL0N1cnJlbnREaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHIiXX0=
