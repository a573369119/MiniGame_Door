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
    GameConfig.TEST_POINT_SPEED = 0.4;
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
        /**0-医生 1-警察 2-商人 -3游手好闲 -4农民*/
        this.arr_personPercentName = ["percentDoctor", "percentPolic", "percentShoper", "percentNothing", "percentFarmer"];
        /**普通人中 医生的占比*/
        this.percentDoctor = 0.02;
        /**普通人种 警察占比 */
        this.percentPolic = 0.03;
        /**普通人种 商人的占比 */
        this.percentShoper = 0.15;
        /**游手好闲 */
        this.percentNothing = 0.1;
        /**农民 */
        this.percentFarmer = 0.7;
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
        /**已生成的人种  0 普通   1科学家  2明星 3土匪 4盗贼*/
        this.alreadyCreate = [0, 0, 0, 0, 0];
        //--------城门
        /**门是否打开*/
        this.isDoorOpen = true;
        /**筛查能力 启动特殊门的时候  筛查能力生效*/
        this.preparation = 0.5;
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
        this.arr_LeftArea.push(view.parent.getChildByName("sp_wall"));
        this.arr_RightArea.push(view.parent.getChildByName("sp_wall"));
    };
    /**生成人的随机移动速度 */
    CountryData.prototype.getMoveSpeed = function () {
        return GameConfig_1.default.TEST_POINT_SPEED * (Math.random() + 0.5);
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
        var arr;
        if (type)
            arr = this.arr_outPeople;
        else
            arr = this.arr_inPeople;
        var random = Math.random();
        var index = Math.floor(arr.length * random);
        if (index > 0) {
            if (!arr[index].isGo) {
                arr[index].peopleGo(type);
                return;
            }
            this.peopleGoOut(type);
            return;
        }
        console.log("随机出错");
        return;
    };
    /**出城门相关操作 */
    CountryData.prototype.goOut = function (type) {
        this._outerPeople++; //实际人数加一
        this.population--; //总人口 --
        if (this[type])
            this[type]--;
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
        people.isOut = true;
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
        var people = Laya.Pool.getItem(randomString);
        var countryData = DataManager_1.default.ins_;
        //生产人种
        switch (randomString) { /**已生成的人种  0 普通   1科学家  2明星 3土匪 4盗贼*/
            case GameConfig_1.default.COMMON_MAN:
                if (!people)
                    people = new Common_1.default(this.view, randomString, false);
                countryData.alreadyCreate[0]++;
                break;
            case GameConfig_1.default.ROBBER_MAN: //盗贼
                if (!people)
                    people = new Common_1.default(this.view, randomString, false);
                countryData.alreadyCreate[4]++;
                break;
            case GameConfig_1.default.BANDIT_MAN: //土匪
                if (!people)
                    people = new Common_1.default(this.view, randomString, false);
                countryData.alreadyCreate[3]++;
                break;
            case GameConfig_1.default.STAR_MAN: //明星
                if (!people)
                    people = new Common_1.default(this.view, randomString, false);
                countryData.alreadyCreate[2]++;
                break;
            case GameConfig_1.default.SCIENTIST_MAN: //科学家
                if (!people)
                    people = new Common_1.default(this.view, randomString, false);
                countryData.alreadyCreate[1]++;
                break;
        }
        if (!people) {
            console.log("新建人失败！");
            return;
        }
        people.isOut = false;
        DataManager_1.default.ins_.arr_inPeople.push(people); //加入维护数组
        if (people === undefined || people === null) {
            console.log("没有生成人种！种类:" + randomString);
            return;
        }
        this.createPos(people);
        people.specialDo();
        people.openBehaviour();
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
                // people.peopleInto(); 
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
            if (!arrPercent[i + 1])
                break;
            if (arrPercent[i] <= number && number < arrPercent[i + 1]) {
                person = DataManager_1.default.ins_.arr_People[i];
                index = i;
                break;
            }
        }
        if (!person) {
            console.log("人种随机失败！");
            return;
        }
        // console.log(person);
        //判断人是否还能生成
        if (index === undefined) {
            console.log("概率计算出错");
            return;
        }
        if (DataManager_1.default.ins_.alreadyCreate[index] == DataManager_1.default.ins_[person]) {
            if (this.getAlreadCreate() == DataManager_1.default.ins_.population)
                return;
            person = this.getRandom(arrPercent);
        }
        this.create_Inner(person); //生产人种   
    };
    /*获取已生成人口的数量*/
    PeopleManager.prototype.getAlreadCreate = function () {
        var number = 0;
        for (var i = 0; i < DataManager_1.default.ins_.alreadyCreate.length; i++) {
            number += DataManager_1.default.ins_.alreadyCreate[i];
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
        this.speed = DataManager_1.default.ins_.getMoveSpeed();
        this.toward = {
            x: 1000,
            y: 0,
            speed: this.speed, rotation: undefined,
            targetRotation: undefined,
            rotationChange: 0
        };
        this.towardPos = new Array();
        this.stopDi = 0;
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
        this.targetNode = target;
        // this.toward.x = target.x;
        // this.toward.y = target.y;
    };
    /**towerd转化成位移 */
    People.prototype.towedToMove = function () {
        if (!this.toward.rotation)
            this.toward.rotation = Tool_1.default.rotateRopePoint_2(this.sp.x, this.sp.y, this.targetNode.x, this.targetNode.y);
        ;
        this.peopleTowerd(); //让目标朝向计算数
    };
    /**朝向  towerd移动 */
    People.prototype.posMove = function () {
        this.sp.x += this.toward.speed * Tool_1.default.rotationSet(this.toward.rotation, "sin");
        this.sp.y += this.toward.speed * Tool_1.default.rotationSet(this.toward.rotation, "cos");
        this.sp.rotation = this.toward.rotation;
        if (Tool_1.default.blockTest(this.targetNode, this.sp)) {
            if (this.targetNode.name === "sp_door") {
                DataManager_1.default.ins_.goOut(this.type);
            }
            this.destoryPeople();
        }
        if (this.sp.x < 0 || this.sp.y > 900 || this.sp.x > 2000) {
            this.destoryPeople();
        }
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
        this.toward.speed = this.speed;
        this.posMove(); //移动  
        return true;
    };
    /**速度控制 */
    People.prototype.speedCtr = function (power) {
        this.toward.speed = this.speed * ((power + 1) / (this.towardPos.length + 2));
        // console.log("speed ::" + this.toward.speed);
    };
    /**判断方向 */
    People.prototype.judgeLeftRight = function () {
        this.stopDi++;
        if (this.stopDi > 36) {
            this.stopDi = 0;
            return;
        }
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
                if (Tool_1.default.blockTest(this.targetNode, this.towardPos[h])) {
                    return -1;
                }
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
        // console.log(this);
        this.toward.targetRotation = Tool_1.default.rotateRopePoint_2(this.sp.x, this.sp.y, this.targetNode.x, this.targetNode.y);
    };
    /**在运行移动逻辑之前 的特殊操作 */
    People.prototype.specialDo = function () {
    };
    ///////////////////////////////////////////////////////////////////////////////////
    /***
     * 进程 / 出城逻辑
     * @type true进城  false出城
    */
    People.prototype.peopleGo = function (type) {
        if (type) {
            //进程方法
        }
        else {
            //出城方法
            this.peopleOut();
        }
    };
    /**出城逻辑 */
    People.prototype.peopleOut = function () {
        this.setTraget(this.view.getChildByName("sp_door")); //设置目标是门
    };
    /**进城方法 从正门到某一个住宅*/
    People.prototype.peopleInto = function () {
        var bornNode = this.view.getChildByName("sp_door");
        var houseNode = this.view.getChildByName("house");
        var targetNode = this.getTargePos(houseNode);
        this.setPos(bornNode.x, bornNode.y + 40, bornNode);
        this.setTraget(targetNode);
    };
    /**从house中获取 一个随机的点 */
    People.prototype.getTargePos = function (houseNode) {
        var random = Math.random();
        var index = Math.floor((houseNode._children.length - 1) * random);
        var targetNode;
        // console.log(" --------- getTarget ");
        // console.log("index ::" + index);
        if (index >= 0) {
            targetNode = houseNode.getChildByName("house_" + index);
            if (targetNode) {
                return targetNode;
            }
            return this.getTargePos(houseNode);
        }
        console.log("随机数取错");
        // this.getTargePos(houseNode);
    };
    /**人消失 */
    People.prototype.destoryPeople = function () {
        Laya.Pool.recover(this.type, this);
        this.sp.visible = false;
        Laya.timer.clearAll(this);
        //
        if (!this.isOut)
            this.destoryInner();
    };
    /**墙内人删除 特殊处理 */
    People.prototype.destoryInner = function () {
        //计时器清楚
        Laya.timer.clear(this, this.people_PosInner);
        switch (this.type) {
            case GameConfig_1.default.COMMON_MAN:
                if (DataManager_1.default.ins_.alreadyCreate[0] > 0)
                    DataManager_1.default.ins_.alreadyCreate[0]--;
                return;
            case GameConfig_1.default.BANDIT_MAN:
                if (DataManager_1.default.ins_.alreadyCreate[3] > 0)
                    DataManager_1.default.ins_.alreadyCreate[3]--;
                return;
            case GameConfig_1.default.ROBBER_MAN:
                if (DataManager_1.default.ins_.alreadyCreate[4] > 0)
                    DataManager_1.default.ins_.alreadyCreate[4]--;
                return;
            case GameConfig_1.default.SCIENTIST_MAN:
                if (DataManager_1.default.ins_.alreadyCreate[1] > 0)
                    DataManager_1.default.ins_.alreadyCreate[1]--;
                return;
            case GameConfig_1.default.STAR_MAN:
                if (DataManager_1.default.ins_.alreadyCreate[2] > 0)
                    DataManager_1.default.ins_.alreadyCreate[2]--;
                return;
        }
        // console.log(CountryData.ins_.alreadyCreate);
    };
    return People;
}());
exports.default = People;
},{"../Config/GameConfig":1,"../Core/DataManager":3,"../Tool/Tool":17}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("../People");
var Tool_1 = require("../../Tool/Tool");
var DataManager_1 = require("../../Core/DataManager");
var Common = /** @class */ (function (_super) {
    __extends(Common, _super);
    function Common(view, type, isOut) {
        return _super.call(this, view, type, isOut) || this;
    }
    /**墙内逻辑 */
    Common.prototype.people_PosInner = function () {
        // this.setTraget(this.view.getChildByName("house").getChildByName("palace") as Laya.Sprite);
        this.towedToMove();
    };
    /**重写specialdo */
    Common.prototype.specialDo = function () {
        //获取占比数组
        var arr_percent = Tool_1.default.getPercentArea(DataManager_1.default.ins_.arr_personPercentName);
        var random = Math.random();
        var index;
        for (var i = 0; i < arr_percent.length; i++) {
            if (!arr_percent[i + 1])
                break;
            if (arr_percent[i] < random && random <= arr_percent[i + 1]) {
                index = i;
            }
        }
        if (index === undefined) {
            console.log("概率计算出错");
            return;
        }
        var houseNode = this.view.getChildByName("house");
        var targetNode = this.getTargePos(houseNode);
        for (var i = 0; true; i++) {
            targetNode = this.getTargePos(houseNode);
            if (targetNode !== this.bornNode)
                break;
        }
        switch (index) { /**0-医生 1-警察 2-商人 -3游手好闲 -4农民*/
            case 0:
                this.setTraget(this.view.getChildByName("house").getChildByName("hospital"));
                break;
            case 1:
                this.setTraget(targetNode);
                break;
            case 2:
                this.peopleOut();
                break;
            case 3:
                this.setTraget(targetNode);
                break;
            case 4:
                this.setTraget(this.view.getChildByName("house").getChildByName("farm"));
                break;
        }
    };
    return Common;
}(People_1.default));
exports.default = Common;
},{"../../Core/DataManager":3,"../../Tool/Tool":17,"../People":10}],12:[function(require,module,exports){
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
    /**降低 */
    /**墙内 */
    /**墙内逻辑 */
    Robber.prototype.people_PosInner = function () {
        // this.setTraget(this.view.getChildByName("house").getChildByName("palace") as Laya.Sprite);
        this.towedToMove();
    };
    /**重写specialdo */
    Robber.prototype.specialDo = function () {
        var houseNode = this.view.getChildByName("house");
        var targetNode = this.getTargePos(houseNode);
        for (var i = 0; true; i++) {
            targetNode = this.getTargePos(houseNode);
            if (targetNode !== this.bornNode)
                break;
        }
        this.setTraget(targetNode);
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
        this.timerCount_out = 0;
        this.timerCount_in = 0;
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
        this.timerCount_out++;
        this.timerCount_in++;
        var countryData = DataManager_2.default.ins_;
        var BI = countryData.percent; //进/出
        var outerTarget = countryData.exitPeople; //出门目标数
        var innerTaget = countryData.enterPeople; //进门目标数
        var _outer = countryData._outerPeople; //出城口实际值
        var _inner = countryData._innerPeople; //入城实际值
        var lastTime = 120000 - this.timerCount - 50000; //获取剩余时间，多预支10秒
        if (outerTarget > _outer) {
            //通知
            if (this.timerCount_out >= lastTime / (outerTarget - _outer)) {
                countryData.peopleGoOut(false);
                this.timerCount_out = 0;
            }
        }
        if (innerTaget > _inner) {
            //通知          
            if (this.timerCount_in >= lastTime / (outerTarget - _inner))
                countryData.peopleGoOut(true);
        }
        if (this.timerCount > 120000) {
            this.timerCount_in = 0;
            this.timerCount_out = 0;
            countryData._outerPeople = 0; //实际值归零
            countryData._innerPeople = 0; //实际值归零
            this.timerCount = 0;
            for (var i = 0; i < outerTarget - _outer; i++) //通知出城
             {
                countryData.peopleGoOut(false);
            }
            for (var i = 0; i < innerTaget - _inner; i++) //通知进程
             {
                countryData.peopleGoOut(true);
            }
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
var DataManager_1 = require("../Core/DataManager");
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
        if (!sp || !point)
            return false;
        var pointLeft = { x: sp.x - sp.width / 2, y: sp.y - sp.height / 2 };
        var pointRight = { x: sp.x + sp.width / 2, y: sp.y + sp.height / 2 };
        var s_pointLeft = point.x > pointLeft.x && point.y > pointLeft.y;
        var s_pointRight = point.x < pointRight.x && point.y < pointRight.y;
        if (s_pointLeft && s_pointRight)
            return true;
        return false;
    };
    /**
     * GameData - CountryData
     * 占比 数组
    *获取区间数组 0,0.8,0.83,0.84,0.9,1
     * @arr 属性名字
    */
    Tool.getPercentArea = function (arr) {
        var arrPercent = []; //生产比例
        var number = 0;
        arrPercent.push(number);
        for (var i = 0; i < arr.length; i++) {
            number += DataManager_1.default.ins_[arr[i]];
            arrPercent.push(number);
        }
        return arrPercent;
    };
    return Tool;
}());
exports.default = Tool;
},{"../Core/DataManager":3}],18:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL+adgui0p+mTui9MYXlhQWlySURFX2JldGEvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvQnV5RGlhbG9nLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vbi50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyLnRzIiwic3JjL1NjcmlwdC9DZW50ZXIudHMiLCJzcmMvU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHMiLCJzcmMvU2NyaXB0L09wZW5HYW1lLnRzIiwic3JjL1NjcmlwdC9PcGVuU3RvcnkudHMiLCJzcmMvVG9vbC9Ub29sLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQTtJQUFBO0lBMkRBLENBQUM7SUExREcsY0FBYztJQUNBLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLG1CQUFRLEdBQVksTUFBTSxDQUFDO0lBQ3pDLGNBQWM7SUFDQSx3QkFBYSxHQUFZLFdBQVcsQ0FBQztJQUduRCxzQ0FBc0M7SUFDdEMsUUFBUTtJQUNNLG1CQUFRLEdBQVks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QUNMLENBQUM7SUFHYSxzQkFBaUIsR0FBL0IsVUFBZ0MsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUUvQixJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUcsR0FBRyxJQUFFLENBQUMsSUFBRSxHQUFHLEdBQUMsQ0FBQyxFQUFDO1lBQ2IsUUFBUSxHQUFFLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFDO1NBQzNDO2FBQUssSUFBRyxHQUFHLEdBQUMsQ0FBQyxJQUFFLEdBQUcsSUFBRSxDQUFDLEVBQUM7WUFDbkIsUUFBUSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFDO1NBQzFDO2FBQUssSUFBRyxHQUFHLElBQUUsQ0FBQyxJQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUM7WUFDbkIsUUFBUSxHQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO2FBQUssSUFBRyxHQUFHLEdBQUMsQ0FBQyxJQUFFLEdBQUcsSUFBRSxDQUFDLEVBQUM7WUFDbkIsUUFBUSxHQUFFLEVBQUUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBRyxDQUFDLEdBQUcsQ0FBQztZQUFFLFFB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RDtRQUFpQywrQkFBSztRQTBEbEM7bUJBQWUsaUJBQU87UUFBQSxDQUFDO1FBQ3ZCLG9DQUFjLEdBQWQ7WUFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDTCxrQkFBQztJQUFELENBL0RBLEFBK0RDLENBL0RnQyxLQUFLLEdBK0RyQztJQS9EWSxjQUFXLGNBK0R2QixDQUFBO0FBQ0wsQ0FBQyxFQTlFYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUE4RWY7QUFDRCxXQUFjLEVBQUU7SUFBQyxJQUFBLEdBQUcsQ0FZbkI7SUFaZ0IsV0FBQSxHQUFHO1FBQ2hCO1lBQXFDLG1DQUFLO1lBS3RDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2Qix3Q0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUNMLHNCQUFDO1FBQUQsQ0FWQSxBQVVDLENBVm9DLEtBQUssR0FVekM7UUFWWSxtQkFBZSxrQkFVM0IsQ0FBQTtJQUNMLENBQUMsRUFaZ0IsR0FBRyxHQUFILE1BQUcsS0FBSCxNQUFHLFFBWW5CO0FBQUQsQ0FBQyxFQVphLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQVlmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWcge1xyXG4gICAgLyoq5Lq656eNIC0g5pmu6YCa5Lq6ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENPTU1PTl9NQU4gOiBzdHJpbmcgPSBcImNvbW1vblwiO1xyXG4gICAgLyoq5Lq656eNIC0g5bCP5YG3ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJPQkJFUl9NQU4gOiBzdHJpbmcgPSBcInJvYmJlclwiO1xyXG4gICAgLyoq5Lq656eNIC0g5Zyf5YyqICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEJBTkRJVF9NQU4gOiBzdHJpbmcgPSBcImJhbmRpdFwiO1xyXG4gICAgLyoq5Lq656eNIC0g5piO5pifICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUQVJfTUFOIDogc3RyaW5nID0gXCJzdGFyXCI7XHJcbiAgICAvKirkurrnp40gLSDnp5HlrablrrYgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU0NJRU5USVNUX01BTiA6IHN0cmluZyA9IFwic2NpZW50aXN0XCI7XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeW7uuetkVxyXG4gICAgLyoq5Yy76ZmiICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEhPU1BJVEFMIDogbnVtYmVyID0gMTtcclxuICAgIC8qKuWGm+mYnyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBBUk1ZIDogbnVtYmVyID0gMjtcclxuICAgIC8qKuWGnOWcuiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGQVJNOiBudW1iZXIgPSAzO1xyXG4gICAgLyoq56eR5oqAICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFQ0hOT0xPR1k6IG51bWJlciA9IDQ7XHJcbiAgICAvKirkuovku7bmiL8g5paw6Ze75oi/ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UX0hPVVNFOiBudW1iZXIgPSA1O1xyXG4gICAgLyoq55qH5a6rICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBBTEFDRTogbnVtYmVyID0gNjtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeajgOa1i+eCueeahOmXtOi3nVxyXG4gICAgLyoq5qOA5rWL54K56Ze06LedICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfRElDIDogbnVtYmVyID0gNTtcclxuICAgIC8qKumAn+W6piAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX1NQRUVEIDogbnVtYmVyID0gMC40O1xyXG4gICAgLyoq5peL6L2s6KeS5bqm5YGP56e7ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfUk8gOiBudW1iZXIgPSAxMDtcclxuICAgIC8qKuS6uuexu+eUn+S6p+mXtOmalFMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUEVSU09OX0NSRUFURV9USU1FIDogbnVtYmVyID0gMTtcclxuICAgIC8qKuebkea1i+eCueaVsOmHjyovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfQ09VTlQgOiBudW1iZXIgPSA2O1xyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3kuLvlgLxcclxuICAgIC8qKuWbveWutui0ouaUvyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX01PTkVZIDogc3RyaW5nID0gXCJtb25leVwiO1xyXG4gICAgLyoq5Zu95a625Lq65Y+jICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUE9QVUxBVElPTiA6IHN0cmluZz1cInBvcHVsYXRpb25cIjtcclxuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX1BPUFVMQVJTVVBQT1JUIDogc3RyaW5nID0gXCJwb3B1bGFyU3VwcG9ydFwiO1xyXG4gICAgLyoq5Zu95a6256eR5oqAICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fVEVDSE5PTE9HWSA6IHN0cmluZyA9IFwidGVjaG5vbG9neVwiO1xyXG4gICAgLyoq5Zu95a625aiB5pybICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUFJFU1RJR0UgOiBzdHJpbmcgPSBcInByZXN0aWdlXCI7XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWFtuS7llxyXG4gICAgLyoq5LiA5aSp5pe26Ze0L+WIhumSnyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBPTkVfREFZOm51bWJlcj0xMCo2MDtcclxuICAgIC8qKueyrumjn+eUn+S6p+eOh+aNoumSseS4tOeVjOWAvCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHUkFJTl9FWENIQU5HRU1PTkVZX1BFUkNFTlQ9MS41O1xyXG4gICAgLyoq6ZKx5o2i57Ku6aOf5rGH546HICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1PTkVZVE9HUkFJTj0yO1xyXG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XHJcbi8qKlxyXG4gKiDotK3kubDmoYYg6YCa55SoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXlEaWFsb2cgZXh0ZW5kcyB1aS5CdXlVSXtcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMud2lkdGg9ODAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PTQwMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpOnZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5rOo5YaM5LqL5Lu2ICovXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50cygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0bl9idXkub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuYnV5Q2xpY2spO1xyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlQ2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueCueWHu+i0reS5sCAqL1xyXG4gICAgcHJpdmF0ZSBidXlDbGljaygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgY3VyclxyXG4gICAgfSBcclxuICAgIFxyXG4gICAgLyoq54K55Ye75YWz6ZetICovXHJcbiAgICBwcml2YXRlIGNsb3NlQ2xpY2soKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSBcclxufSIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZXJmZWIvUGVvcGxlXCI7XHJcblxyXG4vKipcclxuICog5pWw5o2u5Lit5b+DIOaJgOacieeahOaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRyeURhdGF7XHJcbiAgICBwdWJsaWMgc3RhdGljIGluc18gOiBDb3VudHJ5RGF0YSA9IG5ldyBDb3VudHJ5RGF0YSgpO1xyXG4gICAgLyoqKioqKioqKioqKioq5Li75pWw5o2uKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKirlm73lrrbotKLmlL8gKi9cclxuICAgIHB1YmxpYyBtb25leSA6IG51bWJlciA9IDEwMDAwO1xyXG4gICAgLyoq5Zu95a625Lq65Y+jICovXHJcbiAgICBwdWJsaWMgcG9wdWxhdGlvbiA6IG51bWJlcj0xMDA7XHJcbiAgICAvKirlm73lrrblubjnpo/luqYgKi9cclxuICAgIHB1YmxpYyBwb3B1bGFyU3VwcG9ydCA6IG51bWJlciA9IDUwO1xyXG4gICAgLyoq5Zu95a6256eR5oqAICovXHJcbiAgICBwdWJsaWMgdGVjaG5vbG9neSA6IG51bWJlciA9IDEwO1xyXG4gICAgLyoq5Zu95a625aOw5pybICovXHJcbiAgICBwdWJsaWMgcHJlc3RpZ2UgOiBudW1iZXIgPSA5MDtcclxuXHJcbiAgICAvKioqKioqKioqKioqKioq5Ymv5pWw5o2uKioqKioqKioqKioqKioqKiovXHJcbiAgICAvLy0tLS0tLS0t5Li75pWw5o2u5b2x5ZONXHJcbiAgICAvL+WbuuWumuaUr+WHulxyXG4gICAgLyoq5Yab6LS5ICovXHJcbiAgICBwdWJsaWMgYXJteUNvc3QgOiBudW1iZXIgPSAxMDA7XHJcbiAgICAvKirmlL/lupzotLnnlKggKi9cclxuICAgIHB1YmxpYyBnb3Zlcm5Db3N0IDogbnVtYmVyID0gMTAwO1xyXG4gICAgLyoq56eR5oqA6LS555SoICovXHJcbiAgICBwdWJsaWMgdGVjaG5vbG9neUNvc3QgOiBudW1iZXIgPSAxMDA7XHJcbiAgICAvKirnqI7mlLbnjocgKi9cclxuICAgIHB1YmxpYyB0YXggOiBudW1iZXIgPSAwLjA1O1xyXG5cclxuICAgIC8v5Y+Y5Yqo546HXHJcbiAgICAvKirnsq7po5/mtojogJfph48gKOS6uuWdh+a2iOiAl+mHjykgKi9cclxuICAgIHB1YmxpYyBncmFpbkNvc3QgOiBudW1iZXIgPSAxO1xyXG4gICAgLyoq57Ku6aOf5Lqn6YePICjkurrlnYfkuqfph48pKi9cclxuICAgIHB1YmxpYyBncmFpbkFkZCA6IG51bWJlciA9IDE7XHJcbiAgICAvKirnsq7po5/lupPlrZggKi9cclxuICAgIHB1YmxpYyBncmFpblN0b2NrOm51bWJlcj0wO1xyXG4gICAgLyoq5Yab6LS55YeP5bCR546HICovXHJcbiAgICBwdWJsaWMgYXJteVBlcmNlbnQ6bnVtYmVyPTAuMTtcclxuICAgIC8qKkdEUCDmjKPpkrHog73lipvvvIzmr4/kurrmr4/lpKnog73kuqflpJrlsJHpkrEgKi9cclxuICAgIHB1YmxpYyBHRFAgOiBudW1iZXIgPSAxMDtcclxuXHJcblxyXG4gICAgLyoq6L+b5Z+O5pWwIOebruagh+WAvDJtaW4qL1xyXG4gICAgcHVibGljIGVudGVyUGVvcGxlIDogbnVtYmVyID0gNTA7XHJcbiAgICAvKirlh7rln47mlbAg55uu5qCH5YC8Mm1pbiovXHJcbiAgICBwdWJsaWMgZXhpdFBlb3BsZSA6IG51bWJlciA9IDUwO1xyXG4gICAgLyoq5Lq65Y+j5q+U5L6L5pWwIOi/m+WfjuaVsC/lh7rln47mlbAgMm1pbiovXHJcbiAgICBwdWJsaWMgcGVyY2VudCA6IG51bWJlciA9IDE7XHJcbiAgICAvKirln47lpJbkurrlj6PmlbDnu4QqL1xyXG4gICAgcHVibGljIGFycl9vdXRQZW9wbGUgOiBBcnJheTxQZW9wbGU+O1xyXG4gICAgLyoq5Z+O5YaF5Lq65Y+j5pWw57uEICovXHJcbiAgICBwdWJsaWMgYXJyX2luUGVvcGxlIDogQXJyYXk8UGVvcGxlPjtcclxuICAgIC8qKuWHuuWfjuS6uuWPoyDlrp7pmYXlgLwvMm1pbiAqL1xyXG4gICAgcHVibGljIF9vdXRlclBlb3BsZSA6IG51bWJlcjtcclxuICAgIC8qKui/m+mXqOS6uuWPoyDlrp7pmYXlgLwvMm1pbiAqL1xyXG4gICAgcHVibGljIF9pbm5lclBlb3BsZSA6IG51bWJlcjtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pmu6YCa5Lq65Y+j5Y2g5q+UXHJcbiAgICAvKiowLeWMu+eUnyAxLeitpuWvnyAyLeWVhuS6uiAtM+a4uOaJi+WlvemXsiAtNOWGnOawkSovXHJcbiAgICBwdWJsaWMgYXJyX3BlcnNvblBlcmNlbnROYW1lIDogQXJyYXk8c3RyaW5nPiA9IFtcInBlcmNlbnREb2N0b3JcIixcInBlcmNlbnRQb2xpY1wiLFwicGVyY2VudFNob3BlclwiLFwicGVyY2VudE5vdGhpbmdcIixcInBlcmNlbnRGYXJtZXJcIl07XHJcbiAgICAvKirmma7pgJrkurrkuK0g5Yy755Sf55qE5Y2g5q+UKi9cclxuICAgIHB1YmxpYyBwZXJjZW50RG9jdG9yIDogbnVtYmVyID0gMC4wMjtcclxuICAgIC8qKuaZrumAmuS6uuenjSDorablr5/ljaDmr5QgKi9cclxuICAgIHB1YmxpYyBwZXJjZW50UG9saWMgOiBudW1iZXIgPSAwLjAzO1xyXG4gICAgLyoq5pmu6YCa5Lq656eNIOWVhuS6uueahOWNoOavlCAqL1xyXG4gICAgcHVibGljIHBlcmNlbnRTaG9wZXIgOiBudW1iZXIgPSAwLjE1O1xyXG4gICAgLyoq5ri45omL5aW96ZeyICovXHJcbiAgICBwdWJsaWMgcGVyY2VudE5vdGhpbmcgOiBudW1iZXIgPSAwLjE7XHJcbiAgICAvKirlhpzmsJEgKi9cclxuICAgIHB1YmxpYyBwZXJjZW50RmFybWVyIDogbnVtYmVyID0gMC43O1xyXG5cclxuICAgIC8vLS0tLS0tLS3lvbHlk40g44CQ5Li75pWw5o2u44CRLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0t5LqL5Lu25pWw5o2uXHJcbiAgICAvKirnmJ/nlqsgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfKi9cclxuICAgIHB1YmxpYyBwZXN0IDogbnVtYmVyID0gMDtcclxuICAgIC8qKuWcsOmchyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8gKi9cclxuICAgIHB1YmxpYyBuYXR1cmFsRGlzYXN0ZXIgOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5oiY5LmxICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyovXHJcbiAgICBwdWJsaWMgd2FyIDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLy0tLS0tLS0t6IGM5Lia5Lq65pWwXHJcbiAgICBwdWJsaWMgYXJyX1Blb3BsZSA6IEFycmF5PHN0cmluZz4gPSBbXCJjb21tb25cIixcInNjaWVudGlzdFwiLFwic3RhclwiLFwiYmFuZGl0XCIsXCJyb2JiZXJcIl07XHJcbiAgICAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xyXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDk1O1xyXG4gICAgLyoq56eR5a2m5a62IFNTUyovXHJcbiAgICBwdWJsaWMgc2NpZW50aXN0IDogbnVtYmVyID0gMTtcclxuICAgIC8qKuaYjuaYnyBTUyovXHJcbiAgICBwdWJsaWMgc3RhciA6IG51bWJlciA9IDI7XHJcbiAgICAvKirlnJ/ljKogLVMgKi9cclxuICAgIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAxO1xyXG4gICAgLyoq55uX6LS8IC1BICovXHJcbiAgICBwdWJsaWMgcm9iYmVyIDogbnVtYmVyID0gMTtcclxuICAgICAgICAvLyAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSAxO1xyXG4gICAgICAgIC8vIC8qKuenkeWtpuWutiBTU1MqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuaYjuaYnyBTUyovXHJcbiAgICAgICAgLy8gcHVibGljIHN0YXIgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuWcn+WMqiAtUyAqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuebl+i0vCAtQSAqL1xyXG4gICAgICAgIC8vIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5bey55Sf5oiQ55qE5Lq656eNICAwIOaZrumAmiAgIDHnp5HlrablrrYgIDLmmI7mmJ8gM+Wcn+WMqiA055uX6LS8Ki9cclxuICAgIHB1YmxpYyBhbHJlYWR5Q3JlYXRlIDogQXJyYXk8bnVtYmVyPiA9IFswLDAsMCwwLDBdO1xyXG5cclxuICAgIC8vLS0tLS0tLS3ln47pl6hcclxuICAgIC8qKumXqOaYr+WQpuaJk+W8gCovXHJcbiAgICBwdWJsaWMgaXNEb29yT3BlbiA6IGJvb2xlYW49dHJ1ZTtcclxuICAgIC8qKuetm+afpeiDveWKmyDlkK/liqjnibnmrorpl6jnmoTml7blgJkgIOetm+afpeiDveWKm+eUn+aViCovXHJcbiAgICBwdWJsaWMgcHJlcGFyYXRpb24gOiBudW1iZXIgPSAwLjU7XHJcbiAgICAvKirnibnmrorpl6gg562b5p+lIDEt6Ziy5q2i6L+b5YWlICAgMi3pgoDor7fov5vlhaUqL1xyXG4gICAgLy8gcHVibGljIGtlZXBTZWxlY3QgOiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWMuuWfn1xyXG4gICAgLyoq5aKZ5YaF5Yy65Z+f5YiS5YiGICovXHJcbiAgICBwdWJsaWMgYXJyX0xlZnRBcmVhIDogQXJyYXk8YW55PjtcclxuICAgIHB1YmxpYyBhcnJfUmlnaHRBcmVhIDogQXJyYXk8YW55PjtcclxuICAgIFxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS3ls7DlgLxcclxuICAgIC8qKuWbveWutuW5uOemj+W6puWzsOWAvCAqL1xyXG4gICAgcHVibGljIHBvcHVsYXJTdXBwb3J0TWF4IDogbnVtYmVyID0gMTAwO1xyXG4gICAgLyoq5Zu95a6256eR5oqA5bOw5YC8ICovXHJcbiAgICBwdWJsaWMgdGVjaG5vbG9neU1heCA6IG51bWJlciA9IDEwMDtcclxuICAgIC8qKuWbveWutuWjsOacm+WzsOWAvCAqL1xyXG4gICAgcHVibGljIHByZXN0aWdlTWF4IDogbnVtYmVyID0gMTAwO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgICAgICB0aGlzLmFycl9pblBlb3BsZSA9IG5ldyBBcnJheTxQZW9wbGU+KCk7XHJcbiAgICAgICAgdGhpcy5hcnJfb3V0UGVvcGxlID0gbmV3IEFycmF5PFBlb3BsZT4oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluWMuuWfnyAqL1xyXG4gICAgcHVibGljIHNldEFyZWEodmlldyA6IExheWEuTm9kZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdmlldy5fY2hpbGRyZW47XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxjaGlsZHJlbi5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0ubmFtZSA9PSBcInBhbGFjZVwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYS5wdXNoKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyX1JpZ2h0QXJlYS5wdXNoKGNoaWxkcmVuW2ldKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihjaGlsZHJlbltpXS54PDk4MSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEucHVzaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaCh2aWV3LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInNwX3dhbGxcIikpO1xyXG4gICAgICAgIHRoaXMuYXJyX1JpZ2h0QXJlYS5wdXNoKHZpZXcucGFyZW50LmdldENoaWxkQnlOYW1lKFwic3Bfd2FsbFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq655qE6ZqP5py656e75Yqo6YCf5bqmICovXHJcbiAgICBwdWJsaWMgZ2V0TW92ZVNwZWVkKCkgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gR2FtZUNvbmZpZy5URVNUX1BPSU5UX1NQRUVEKihNYXRoLnJhbmRvbSgpKzAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkurrlj6PmtYHph48gOlxyXG4gICAgICogcmV0dXJuIOi/m+WFpSAvIOWHuuWOu1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0X1Blb3BsZU1vdmUoKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlcmNlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkurrnp43mr5TkvotcclxuICAgICAqIEBwYXJhbSB0eXBlIOS6uuenjVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0X1Byb2Zlc3Npb25QZXJjZW50KHR5cGU6c3RyaW5nKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXNbdHlwZV0gPT09IHVuZGVmaW5lZCkgY29uc29sZS5sb2coXCLkuI3lrZjlnKjor6Xkurrnp41cIik7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpc1t0eXBlXS8odGhpcy5wb3B1bGF0aW9uKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t57uT566XXHJcbiAgICAvKirorr7nva7kupTlpKfkuLvlgLznu5PnrpcgKi9cclxuICAgIHB1YmxpYyBzZXRfTWFpbkRhdGEodHlwZTpzdHJpbmcsY291bnQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoKHR5cGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIFwibW9uZXlcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uZXkrPWNvdW50O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwb3B1bGF0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRpb24rPWNvdW50O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwb3B1bGFyU3VwcG9ydFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1bGFyU3VwcG9ydCs9Y291bnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRlY2hub2xvZ3lcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudGVjaG5vbG9neSs9Y291bnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInByZXN0aWdlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXN0aWdlKz1jb3VudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbF9NYWluRGF0YSh0eXBlLGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBjYWxfTWFpbkRhdGEodHlwZTpzdHJpbmcsY291bnQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuTUFJTl9NT05FWTpcclxuICAgICAgICAgICAgLy8vVE8gRE9cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/otKLmlL8g5b2x5ZON57uT566XXHJcbiAgICAgICAgdGhpcy5tb25leUluZmx1ZW5jZSgpO1xyXG4gICAgICAgIC8v5Lq65Y+jIOW9seWTjee7k+eul1xyXG4gICAgICAgIHRoaXMucG9wdWxhclN1cHBvcnRJbmZsdWVuY2UoKTtcclxuICAgICAgICAvL+W5uOemj+W6piDlvbHlk43nu5PnrpdcclxuICAgICAgICB0aGlzLnBvcHVsYXJTdXBwb3J0SW5mbHVlbmNlKCk7XHJcbiAgICAgICAgLy/np5HmioAg5b2x5ZON57uT566XXHJcbiAgICAgICAgdGhpcy50ZWNobm9sb2d5SW5mbHVlbmNlKCk7XHJcbiAgICAgICAgLy/lqIHmnJsg5b2x5ZON57uT566XXHJcbiAgICAgICAgdGhpcy5wcmVzdGlnZUluZmx1ZW5jZSgpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICAvKirotKLmlL/nu5Pnrpcg6LSi5pS/5b2x5ZONKi9cclxuICAgIHByaXZhdGUgbW9uZXlJbmZsdWVuY2UoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8qKuW5uOemj+W6piDlvbHlk43nu5PnrpcqL1xyXG4gICAgcHJpdmF0ZSBwb3B1bGFyU3VwcG9ydEluZmx1ZW5jZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuS6uuWPoyDlvbHlk43nu5PnrpcqL1xyXG4gICAgcHJpdmF0ZSBwb3B1bGF0aW9uSW5mbHVlbmNlKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq56eR5oqAIOW9seWTjee7k+eulyovXHJcbiAgICBwcml2YXRlIHRlY2hub2xvZ3lJbmZsdWVuY2UoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirlqIHmnJsg5b2x5ZON57uT566XKi9cclxuICAgIHByaXZhdGUgcHJlc3RpZ2VJbmZsdWVuY2UoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirmlLnlj5gg6L+b44CB5Ye6IOebruagh+S6uuaVsCBAaXNvdXQ65piv5ZCm5piv5Ye65Z+OICBAY291bnTvvJrmlLnlj5jnm67moIflgLwqL1xyXG4gICAgcHVibGljIHNldEluT3V0VGFyZ2V0KGlzT3V0LGNvdW50KSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZihpc091dCkgdGhpcy5leGl0UGVvcGxlICs9IGNvdW50O1xyXG4gICAgICAgIGVsc2UgdGhpcy5lbnRlclBlb3BsZSArPSBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKirmlLnlj5gg6L+b44CB5Ye6IOebruagh+S6uuaVsCBAaXNvdXQ65piv5ZCm5piv5Ye65Z+OICBAY291bnTvvJrmlLnlj5jlrp7pmYXlgLwqL1xyXG4gICAgcHVibGljIHNldEluT3V0VHJ1dGgoaXNPdXQsY291bnQpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKGlzT3V0KSB0aGlzLl9vdXRlclBlb3BsZSArPSBjb3VudDtcclxuICAgICAgICBlbHNlIHRoaXMuX2lubmVyUGVvcGxlICs9IGNvdW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirpgJrnn6Xkurrlj6Plh7rln44gQHR5cGUg77yaIOi/m+aIkHR1cmUgIOWHuuWfjiBmYWxzZSovXHJcbiAgICBwdWJsaWMgcGVvcGxlR29PdXQodHlwZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFyciA7XHJcbiAgICAgICAgaWYodHlwZSkgYXJyID0gdGhpcy5hcnJfb3V0UGVvcGxlO1xyXG4gICAgICAgICAgICBlbHNlIGFyciA9IHRoaXMuYXJyX2luUGVvcGxlO1xyXG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoYXJyLmxlbmd0aCpyYW5kb20pO1xyXG4gICAgICAgIGlmKGluZGV4PjApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZighYXJyW2luZGV4XS5pc0dvKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJbaW5kZXhdLnBlb3BsZUdvKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB0aGlzLnBlb3BsZUdvT3V0KHR5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6ZqP5py65Ye66ZSZXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5Ye65Z+O6Zeo55u45YWz5pON5L2cICovXHJcbiAgICBwdWJsaWMgZ29PdXQodHlwZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fb3V0ZXJQZW9wbGUrKzsvL+WunumZheS6uuaVsOWKoOS4gFxyXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbi0tOy8v5oC75Lq65Y+jIC0tXHJcbiAgICAgICAgaWYodGhpc1t0eXBlXSkgdGhpc1t0eXBlXS0tO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKirlpJbln44gKi9cclxuZXhwb3J0IGNsYXNzIE91dENvdW50cnlEYXRhe1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogT3V0Q291bnRyeURhdGEgPSBuZXcgT3V0Q291bnRyeURhdGEoKTtcclxuICAgIC8qKioqKioqKioqKioqKuS4u+aVsOaNrioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoq5pyA5aSn5aSW5Z+O5a6557qz5pWw6YePICovXHJcbiAgICBwdWJsaWMgbWF4Q291bnQgOiBudW1iZXI9NTA7XHJcbiAgICAvKirlvZPliY3lpJbln47kurrlj6PmlbAgKi9cclxuICAgIHB1YmxpYyBvdXRDb3VudDpudW1iZXI9MDtcclxuICAgIC8qKuS6uua7nueVmeaXtumXtCAqL1xyXG4gICAgcHVibGljIGxpbWl0VGltZTpudW1iZXI9NTA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLyoq5pmu6YCa5Lq6Ki9cclxuICAgIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSAwLjg7XHJcbiAgICAvKirnp5HlrablrrYgU1NTKi9cclxuICAgIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAwLjAzO1xyXG4gICAgLyoq5piO5pifIFNTKi9cclxuICAgIHB1YmxpYyBzdGFyIDogbnVtYmVyID0gMC4wMTtcclxuICAgIC8qKuWcn+WMqiAtUyAqL1xyXG4gICAgcHVibGljIGJhbmRpdCA6IG51bWJlciA9IDAuMDY7XHJcbiAgICAvKirnm5fotLwgLUEgKi9cclxuICAgIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAwLjE7XHJcbiAgICAvKirlj5jph4/lkI0gKi9cclxuICAgIHB1YmxpYyBhcnJfUGVvcGxlIDogQXJyYXk8c3RyaW5nPiA9IFtcImNvbW1vblwiLFwic2NpZW50aXN0XCIsXCJzdGFyXCIsXCJiYW5kaXRcIixcInJvYmJlclwiXTtcclxuICAgIFxyXG4gICAgLyoq6I635Y+W5Yy66Ze05pWw57uEIDAsMC44LDAuODMsMC44NCwwLjksMSovXHJcbiAgICBwdWJsaWMgZ2V0UGVyY2VudEFyZWEoKTpBcnJheTxudW1iZXI+XHJcbiAgICB7XHJcbiAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXHJcbiAgICAgICBsZXQgYXJyX1Blb3BsZSA9IHRoaXMuYXJyX1Blb3BsZTtcclxuICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XHJcbiAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyX1Blb3BsZS5sZW5ndGg7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgICBudW1iZXIgKz0gdGhpc1thcnJfUGVvcGxlW2ldXTtcclxuICAgICAgICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XHJcbiAgICAgICB9XHJcbiAgICAgICByZXR1cm4gYXJyUGVyY2VudDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xyXG5cclxuLyoqXHJcbiAqIOa2iOaBr+ahhiDpgJrnlKhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1zZ0RpYWxvZyBleHRlbmRzIHVpLkRpYS5DdXJyZW50RGlhbG9nVUl7XHJcbiAgICAvKirnsbvlnosgKi9cclxuICAgIHByaXZhdGUgdHlwZSA6IG51bWJlciA7XHJcbiAgICAvKirnvJPliqggKi9cclxuICAgIC8vIHByaXZhdGUgc2hvd1R3ZWVuIDogTGF5YS5Ud2VlbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirliJ3lp4vljJYgKi9cclxuICAgIHB1YmxpYyBzaG93TXNnKHR5cGU6bnVtYmVyKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZURpYWxvZyk7ICAgICAgICBcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJbWcoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVRpdGxlKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VXb3JkKCk7IFxyXG4gICAgICAgIHRoaXMubXNnQm9keS54ID0gKDkwMC8oTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodC9MYXlhLkJyb3dzZXIuY2xpZW50V2lkdGgpLTExNjMpLzI7ICAgICAgIFxyXG4gICAgICAgIHRoaXMubXNnQm9keS55ID0gLTU1NzsgICAgICAgXHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLm1zZ0JvZHkse3k6MH0sMjAwLExheWEuRWFzZS5iYWNrT3V0KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirmjaLlm74gKi9cclxuICAgIHByaXZhdGUgY2hhbmdlSW1nKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmjaLmoIfpopggKi9cclxuICAgIHByaXZhdGUgY2hhbmdlVGl0bGUoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirmloflrZfovb3lhaUgKi9cclxuICAgIHByaXZhdGUgY2hhbmdlV29yZCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWFs+mXrSAqL1xyXG4gICAgcHVibGljIGNsb3NlRGlhbG9nKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idG5fY2xvc2Uub2ZmKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlRGlhbG9nKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLm1zZ0JvZHkse3k6LTU1N30sMjAwLExheWEuRWFzZS5iYWNrT3V0LExheWEuSGFuZGxlci5jcmVhdGUodGhpcyx0aGlzLmNsb3NlT3ZlcikpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZU92ZXIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTsgICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVyZmViL1Blb3BsZVwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhLCB7IE91dENvdW50cnlEYXRhIH0gZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IENvbW1vbiBmcm9tXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvQ29tbW9uXCJcclxuaW1wb3J0IFJvYmJlciBmcm9tXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyXCJcclxuLyoqXHJcbiAqIOS6uiDnrqHnkIZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZU1hbmFnZXIge1xyXG4gICAgLyoq6KeG5Zu+Ki9cclxuICAgIHByaXZhdGUgdmlldzphbnk7IFxyXG4gICAgLyoq5qiq5Z2Q5qCHICovXHJcbiAgICBwcml2YXRlIFg6bnVtYmVyO1xyXG4gICAgLyoq57q15Z2Q5qCHICovXHJcbiAgICBwcml2YXRlIFk6bnVtYmVyO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lopnlhoVcclxuICAgIC8qKueUn+aIkOmXtOmalOiuoeaXtuWZqCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudFRpbWUgOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq55Sf5Lqn5pe26Ze06Ze06ZqUICovXHJcbiAgICBwcml2YXRlIGNvdW50VGltZV8gOiBudW1iZXIgPSA1MDA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3RydWN0b3IodmlldylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZpZXc9dmlldztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWQr+eUn+aIkOW3peWOglxyXG4gICAgICog55Sf5oiQ5Lq6IFxyXG4gICAgICog55Sf5oiQ5Lq655qE5L2N572uXHJcbiAgICAgKiDnlJ/kuqfkurrnmoR0eXBlIO+8miDln47ph4zkurov5Z+O5aSW5Lq6IOmAu+i+keWIhuW8gFxyXG4gICAgICovXHJcbiAgICAvKirlvIDlkK/nlJ/miJDlt6XljoIgKi9cclxuICAgIHB1YmxpYyBvcGVuUGVvcGxlRmFjdG9yeSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq6ICovXHJcbiAgICBwdWJsaWMgY3JlYXRlUGVvcGxlKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBwZW9wbGU7XHJcbiAgICAgICAgLyoq55Sf5oiQ5LiN5ZCM5Lq656eN55qE5Yeg546HICovXHJcbiAgICAgICAgbGV0IHJhbmRvbT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKTtcclxuICAgICAgICAvL+aZrumAmuS6ulxyXG4gICAgICAgIGlmKHJhbmRvbT49MCYmcmFuZG9tPDgwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcImNvbW1vblwiKTtcclxuICAgICAgICAgICAgaWYoIXBlb3BsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgQ29tbW9uKHRoaXMudmlldyxHYW1lQ29uZmlnLkNPTU1PTl9NQU4sdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lsI/lgbdcclxuICAgICAgICBlbHNlIGlmKHJhbmRvbT49ODAmJnJhbmRvbTw5MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJyb2JiZXJcIik7XHJcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFJvYmJlcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5ST0JCRVJfTUFOLHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Zyf5YyqXHJcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PTkwJiZyYW5kb208OTYpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwiYmFuZGl0XCIpO1xyXG4gICAgICAgICAgICBpZighcGVvcGxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuQkFORElUX01BTix0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+enkeWtpuWutlxyXG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj05NiYmcmFuZG9tPDk5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInNjaWVudGlzdFwiKTtcclxuICAgICAgICAgICAgaWYoIXBlb3BsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgUm9iYmVyKHRoaXMudmlldyxHYW1lQ29uZmlnLlNDSUVOVElTVF9NQU4sdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mmI7mmJ9cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwic3RhclwiKTtcclxuICAgICAgICAgICAgaWYoIXBlb3BsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgUm9iYmVyKHRoaXMudmlldyxHYW1lQ29uZmlnLlNUQVJfTUFOLHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBlb3BsZS52aXNpYmxlPXRydWU7XHJcbiAgICAgICAgcGVvcGxlLmlzT3V0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdldFBvcygpO1xyXG4gICAgICAgIHBlb3BsZS5zZXRQb3ModGhpcy5YLHRoaXMuWSk7XHJcbiAgICAgICAgcGVvcGxlLm9wZW5CZWhhdmlvdXIoKTtcclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjM7XHJcbiAgICAgICAgaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq655qE5L2N572uICovXHJcbiAgICBwdWJsaWMgZ2V0UG9zKCk6YW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHR5cGVOdW09TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMpO1xyXG4gICAgICAgIHN3aXRjaCh0eXBlTnVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgLy/lnKhB6L6555WMXHJcbiAgICAgICAgICAgICAgICB0aGlzLlg9MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuWT1NYXRoLnJhbmRvbSgpKjM5MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAvL+WcqELovrnnlYxcclxuICAgICAgICAgICAgICAgIHRoaXMuWD1NYXRoLnJhbmRvbSgpKjIwMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlk9MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAvL+WcqEPovrnnlYxcclxuICAgICAgICAgICAgICAgIHRoaXMuWD0yMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq55WM6ZmQ5qOA5rWLICoqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBcclxuICAgIFxyXG4gICAgcHVibGljIGNoZWNrUGVyY2VudChwZW9wbGUsdHlwZTpzdHJpbmcpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+a1geWKqOavlOS+i+ajgOa1i1xyXG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18ucGVyY2VudDwxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWIm+W7uuWimeWGheS6uiAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZV9Jbm5lcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgbGV0IHJhbmRvbVN0cmluZyA7XHJcbiAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXHJcbiAgICAgICBsZXQgYXJyX1Blb3BsZSA9IENvdW50cnlEYXRhLmluc18uYXJyX1Blb3BsZTtcclxuICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XHJcbiAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyX1Blb3BsZS5sZW5ndGg7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgICBudW1iZXIgKz0gQ291bnRyeURhdGEuaW5zXy5nZXRfUHJvZmVzc2lvblBlcmNlbnQoYXJyX1Blb3BsZVtpXSk7XHJcbiAgICAgICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xyXG4gICAgICAgfVxyXG4gICAgICAgY29uc29sZS5sb2coYXJyUGVyY2VudCk7XHJcbiAgICAgICBMYXlhLnRpbWVyLmxvb3AoMSx0aGlzLHRoaXMuZ2V0UmFuZG9tLFthcnJQZXJjZW50XSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5Lqn5Lq6ICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZV9Jbm5lcihyYW5kb21TdHJpbmcpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKHJhbmRvbVN0cmluZyA9PSBcIm5vbmVcIikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBwZW9wbGUgPSBMYXlhLlBvb2wuZ2V0SXRlbShyYW5kb21TdHJpbmcpOyAgXHJcbiAgICAgICAgbGV0IGNvdW50cnlEYXRhID0gQ291bnRyeURhdGEuaW5zXztcclxuICAgICAgICAvL+eUn+S6p+S6uuenjVxyXG4gICAgICAgIHN3aXRjaChyYW5kb21TdHJpbmcpXHJcbiAgICAgICAgeyAgICAvKirlt7LnlJ/miJDnmoTkurrnp40gIDAg5pmu6YCaICAgMeenkeWtpuWutiAgMuaYjuaYnyAz5Zyf5YyqIDTnm5fotLwqL1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuQ09NTU9OX01BTjogICBcclxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzBdKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlJPQkJFUl9NQU46Ly/nm5fotLxcclxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzRdKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkJBTkRJVF9NQU46Ly/lnJ/ljKpcclxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzNdKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNUQVJfTUFOOi8v5piO5pifXHJcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVsyXSsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOOi8v56eR5a2m5a62XHJcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVsxXSsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFwZW9wbGUpIHtjb25zb2xlLmxvZyhcIuaWsOW7uuS6uuWksei0pe+8gVwiKSA7cmV0dXJuO31cclxuICAgICAgICBwZW9wbGUuaXNPdXQgPSBmYWxzZTtcclxuICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9pblBlb3BsZS5wdXNoKHBlb3BsZSk7Ly/liqDlhaXnu7TmiqTmlbDnu4RcclxuICAgICAgICBpZihwZW9wbGUgPT09IHVuZGVmaW5lZCB8fCBwZW9wbGUgPT09IG51bGwpIHtjb25zb2xlLmxvZyhcIuayoeacieeUn+aIkOS6uuenje+8geenjeexuzpcIiArIHJhbmRvbVN0cmluZyk7cmV0dXJuO31cclxuICAgICAgICB0aGlzLmNyZWF0ZVBvcyhwZW9wbGUpO1xyXG4gICAgICAgIHBlb3BsZS5zcGVjaWFsRG8oKTtcclxuICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKueUn+S6p+S9jee9riAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVQb3MocGVvcGxlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaG91c2VOb2RlID0gKHRoaXMudmlldyBhcyBMYXlhLlNwcml0ZSkuZ2V0Q2hpbGRCeU5hbWUoJ2hvdXNlJyk7XHJcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBob3VzZU5vZGUuX2NoaWxkcmVuLmxlbmd0aC8xMDA7XHJcbiAgICAgICAgbGV0IGhvdXNlIDtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPCBob3VzZU5vZGUuX2NoaWxkcmVuLmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnBlcmNlbnQqMTAwKTtcclxuICAgICAgICAgICAgaG91c2UgPSBob3VzZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZV9cIitudW1iZXIpO1xyXG4gICAgICAgICAgICBpZihob3VzZSAhPT0gdW5kZWZpbmVkICYmIGhvdXNlICE9PSBudWxsKSAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZS5zZXRQb3MoaG91c2UueCxob3VzZS55LGhvdXNlKTsgICBcclxuICAgICAgICAgICAgICAgIC8vIHBlb3BsZS5wZW9wbGVJbnRvKCk7IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPlumaj+acuuS6uuenjSAqL1xyXG4gICAgcHJpdmF0ZSBnZXRSYW5kb20oYXJyUGVyY2VudCkgOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmNvdW50VGltZSA8PSB0aGlzLmNvdW50VGltZV8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50VGltZSsrO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnRUaW1lXyA9IE1hdGgucmFuZG9tKCkqR2FtZUNvbmZpZy5QRVJTT05fQ1JFQVRFX1RJTUUqMTAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi55Sf5oiQ6Ze06ZqUOlwiICsgTWF0aC5mbG9vcih0aGlzLmNvdW50VGltZS8xMDApICsgXCJzXCIpO1xyXG4gICAgICAgIHRoaXMuY291bnRUaW1lID0gMDtcclxuXHJcbiAgICAgICAgbGV0IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgbGV0IHBlcnNvbiA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyUGVyY2VudC5sZW5ndGggO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCFhcnJQZXJjZW50W2krMV0pIGJyZWFrO1xyXG4gICAgICAgICAgICBpZihhcnJQZXJjZW50W2ldIDw9IG51bWJlciAmJiBudW1iZXIgPCBhcnJQZXJjZW50W2krMV0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlcnNvbiA9IENvdW50cnlEYXRhLmluc18uYXJyX1Blb3BsZVtpXTtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighcGVyc29uKSB7Y29uc29sZS5sb2coXCLkurrnp43pmo/mnLrlpLHotKXvvIFcIik7cmV0dXJuO31cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwZXJzb24pO1xyXG4gICAgICAgIC8v5Yik5pat5Lq65piv5ZCm6L+Y6IO955Sf5oiQXHJcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCl7Y29uc29sZS5sb2coXCLmpoLnjoforqHnrpflh7rplJlcIik7cmV0dXJuO31cclxuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbaW5kZXhdID09IENvdW50cnlEYXRhLmluc19bcGVyc29uXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0QWxyZWFkQ3JlYXRlKCkgPT0gQ291bnRyeURhdGEuaW5zXy5wb3B1bGF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgICAgIHBlcnNvbiA9IHRoaXMuZ2V0UmFuZG9tKGFyclBlcmNlbnQpOyAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgdGhpcy5jcmVhdGVfSW5uZXIocGVyc29uKTsvL+eUn+S6p+S6uuenjSAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8q6I635Y+W5bey55Sf5oiQ5Lq65Y+j55qE5pWw6YePKi9cclxuICAgIHB1YmxpYyBnZXRBbHJlYWRDcmVhdGUoKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8Q291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlLmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBudW1iZXIgKz1Db3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbaV1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcclxuICAgIH1cclxufSIsImltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIFVJ566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXJ7XHJcbiAgICAvKirmlbDmja7nrqHnkIblmaggKi9cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgZGF0YU1hbmFnZXIgOiBEYXRhTWFuYWdlcjtcclxuICAgIC8qKlVJIHNwcml0ZSAqL1xyXG4gICAgcHJpdmF0ZSBVaVNwcml0ZSA6IExheWEuU3ByaXRlO1xyXG5cclxuICAgIC8qKui9veWFpeaVsOaNriAqL1xyXG4gICAgY29uc3RydWN0b3IodWk6TGF5YS5TcHJpdGUpe1xyXG4gICAgICAgIHRoaXMuVWlTcHJpdGUgPSB1aTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn0iLCIvKipcclxuICog5LqL5Lu25Y+R55Sf566h55CG5ZmoXHJcbiAqIFxyXG4gKiBcclxuICog55Sf5oiQ5LqL5Lu244CBXHJcbiAqIOW9seWTjeS6uuWPo+a1geWKqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ybGRFdmVudE1hbmFnZXIge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKirkuovku7bpooTmiqXliLAgKi9cclxuICAgIFxyXG5cclxuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xyXG5cclxuICAgIFxyXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBCdXlEaWFsb2cgZnJvbSBcIi4vQ29yZS9CdXlEaWFsb2dcIlxuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi9Db3JlL01zZ0RpYWxvZ1wiXG5pbXBvcnQgT3BlbkdhbWUgZnJvbSBcIi4vU2NyaXB0L09wZW5HYW1lXCJcbmltcG9ydCBHYW1lV29ybGQgZnJvbSBcIi4vU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGRcIlxuaW1wb3J0IE9wZW5TdG9yeSBmcm9tIFwiLi9TY3JpcHQvT3BlblN0b3J5XCJcbmltcG9ydCBDZW50ZXIgZnJvbSBcIi4vU2NyaXB0L0NlbnRlclwiXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xNDQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9OTAwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZGhlaWdodFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiU3RhcnRHYW1lLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJDb3JlL0J1eURpYWxvZy50c1wiLEJ1eURpYWxvZyk7XG4gICAgICAgIHJlZyhcIkNvcmUvTXNnRGlhbG9nLnRzXCIsTXNnRGlhbG9nKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5HYW1lLnRzXCIsT3BlbkdhbWUpO1xuICAgICAgICByZWcoXCJTY3JpcHQvR2FtZVdvcmxkL0dhbWVXb3JsZC50c1wiLEdhbWVXb3JsZCk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9PcGVuU3RvcnkudHNcIixPcGVuU3RvcnkpO1xuICAgICAgICByZWcoXCJTY3JpcHQvQ2VudGVyLnRzXCIsQ2VudGVyKTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG5cdFx0R2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG4iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhLCB7IE91dENvdW50cnlEYXRhIH0gZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFRvb2wgZnJvbSBcIi4uL1Rvb2wvVG9vbFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBcclxuICog5Lq656eN54i257G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGUge1xyXG4gICAgLyoq5Zy65pmvKi9cclxuICAgIHByb3RlY3RlZCB2aWV3IDogTGF5YS5TcHJpdGU7XHJcbiAgICAvKirnsr7ngbUgKi9cclxuICAgIHB1YmxpYyBzcCA6IExheWEuU3ByaXRlO1xyXG4gICAgLyoq5qiq5Z2Q5qCH56e75Yqo6YCf5bqmICovXHJcbiAgICBwcml2YXRlIGRpclg6bnVtYmVyO1xyXG4gICAgLyoq57q15Z2Q5qCH56e75Yqo6YCf5bqmICovXHJcbiAgICBwcml2YXRlIGRpclk6bnVtYmVyO1xyXG4gICAgXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKuWimeWGhSAqKioqKioqKioqKiovXHJcbiAgICAvKirlopnlhoXkurrov5jmmK/lopnlpJbkurogKi9cclxuICAgIHB1YmxpYyBpc091dCA6IGJvb2xlYW47XHJcbiAgICAvKirkurrlsZ7mgKcgKi9cclxuICAgIHB1YmxpYyB0eXBlOnN0cmluZztcclxuICAgIC8qKuS6uueahOacneWQkSAqL1xyXG4gICAgcHVibGljIHRvd2FyZCA6IGFueTtcclxuICAgIC8qKumdouWJjeeahDXkuKrmo4DmtYvngrkgKi9cclxuICAgIHB1YmxpYyB0b3dhcmRQb3MgOiBBcnJheTxhbnk+O1xyXG4gICAgLyoq5Lq655qE56e75Yqo55uu5qCH54K5ICovXHJcbiAgICBwdWJsaWMgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlO1xyXG4gICAgLyoq5Ye655Sf54K5ICovXHJcbiAgICBwdWJsaWMgYm9ybk5vZGUgOiBMYXlhLlNwcml0ZTtcclxuICAgIC8qKuaYr+WQpuiiq+WPrOWUpCAqL1xyXG4gICAgcHVibGljIGlzR28gOiBudW1iZXI7XHJcbiAgICAvKirpgJLlvZLlgZzmraLlj5jph48gKi9cclxuICAgIHByaXZhdGUgc3RvcERpIDogbnVtYmVyO1xyXG4gICAgLyoq5Y+C6ICD6YCf5bqmICovXHJcbiAgICBwcml2YXRlIHNwZWVkIDogbnVtYmVyO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgICAgICB0aGlzLmlzT3V0ID0gaXNPdXQ7XHJcbiAgICAgICAgdGhpcy50eXBlPXR5cGU7XHJcbiAgICAgICAgdGhpcy5pbml0KHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIneWni+WMliAqL1xyXG4gICAgcHJpdmF0ZSBpbml0KHR5cGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v5pWw5o2u5Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5zZXREYXRhSW5pdCgpO1xyXG4gICAgICAgIC8v5Yib5bu6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pWw5o2u5Yid5aeL5YyWICovXHJcbiAgICBwcml2YXRlIHNldERhdGFJbml0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IENvdW50cnlEYXRhLmluc18uZ2V0TW92ZVNwZWVkKCk7XHJcbiAgICAgICAgdGhpcy50b3dhcmQgPSB7XHJcbiAgICAgICAgICAgIHg6MTAwMCxcclxuICAgICAgICAgICAgeTowLFxyXG4gICAgICAgICAgICBzcGVlZDp0aGlzLnNwZWVkLHJvdGF0aW9uOnVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGFyZ2V0Um90YXRpb246dW5kZWZpbmVkLFxyXG4gICAgICAgICAgICByb3RhdGlvbkNoYW5nZSA6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG93YXJkUG9zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5zdG9wRGkgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuW8gOWni+ihjOWKqCAqL1xyXG4gICAgcHVibGljIG9wZW5CZWhhdmlvdXIoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/ov5DooYzkuobpgLvovpFcclxuICAgICAgICBpZih0aGlzLmlzT3V0KSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGVvcGxlX1Bvc091dCgpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKE91dENvdW50cnlEYXRhLmluc18ubGltaXRUaW1lKjYwLHRoaXMsdGhpcy5saW1pdFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnBlb3BsZV9Qb3NJbm5lcigpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmxvb3AoMTYsdGhpcyx0aGlzLnBlb3BsZV9Qb3NJbm5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKueUn+aIkOS6uiAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVQZW9wbGUodHlwZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgIHRoaXMuY3JlYXRlU3AodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yib5bu6U3ByaXRlICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVNwKHR5cGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbWdVcmwgPSBcIm1hcC9cIit0eXBlK1wiLnBuZ1wiO1xyXG4gICAgICAgIGlmKCF0aGlzLnNwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zcCA9IG5ldyBMYXlhLlNwcml0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5zcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3AubG9hZEltYWdlKGltZ1VybCk7XHJcbiAgICAgICAgdGhpcy5zcC5zaXplKDEyLDEyKTtcclxuICAgICAgICB0aGlzLnNwLnBpdm90KHRoaXMuc3Aud2lkdGgvMix0aGlzLnNwLmhlaWdodC8yKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiuvue9ruWIneWni+S9jee9riAqL1xyXG4gICAgcHVibGljIHNldFBvcyh4LHksc3A6TGF5YS5TcHJpdGUpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3AueCA9IHg7XHJcbiAgICAgICAgdGhpcy5zcC55ID0geTtcclxuICAgICAgICB0aGlzLmJvcm5Ob2RlID0gc3A7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWimeWkluS6uuihjOWKqOmAu+i+kSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBwcml2YXRlIHBlb3BsZV9Qb3NPdXQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaWueWQke+8jOaWueWQkeeUqCgtMX4xKeihqOekulxyXG4gICAgICAgIGlmKHRoaXMuc3AueDw9OTAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuc3AueD49MTEwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWD0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpKjItMTtcclxuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCkqMi0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtO+8jOWcqOatpOaXtumXtOWGheenu+WKqCzpmo/mnLrml7bpl7TlnKgoMiw4KeS4remAieaLqVxyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNisyO1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNsb3NlTW92ZVRpbWVyKTtcclxuICAgICAgICAvL+W8gOWQr+enu+WKqFxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuWNleS9jeW4p+enu+WKqCovXHJcbiAgICBwcml2YXRlIG1vdmVEaXN0YW5jZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwLngrPXRoaXMuZGlyWDtcclxuICAgICAgICB0aGlzLnNwLnkrPXRoaXMuZGlyWTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlhbPpl63np7vliqjlrprml7blmajvvIzlvIDlkK/ljp/lnLDkvJHmga8qL1xyXG4gICAgcHJpdmF0ZSBjbG9zZU1vdmVUaW1lcigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xyXG4gICAgICAgIC8v5LyR5oGv5pe26Ze057uT5p2f5ZCO57un57ut56e75YqoXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo2KzI7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMucGVvcGxlX1Bvc091dCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKua7nueVmeaXtumXtO+8jOiLpei2hei/h+aXtumXtO+8jOWwseemu+W8gOWkluWfjiAqL1xyXG4gICAgcHJpdmF0ZSBsaW1pdFRpbWUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBpZih0aGlzLnNwLng8PTEwMDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRpclg9LU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq56Kw5pKe5qOA5rWLICovXHJcbiAgICBwcml2YXRlIGNoZWNrTGltaXRfT3V0KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v6L6555WM5qOA5rWLXHJcbiAgICAgICAgaWYodGhpcy5zcC54PC01fHx0aGlzLnNwLng+MjAwNXx8dGhpcy5zcC55PC01KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7XHJcbiAgICAgICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5oqk5Z+O5rKz5qOA5rWLXHJcbiAgICAgICAgaWYodGhpcy5zcC55Pj0zOTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+mHjeaWsOe7meS4gOS4quS9jeenu1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ln47pl6jljLrln5/mo4DmtYtcclxuICAgICAgICBpZih0aGlzLnNwLng+OTMyJiZ0aGlzLnNwLng8MTA2OCYmdGhpcy5zcC55PjM1MCYmdGhpcy5zcC55PDM5MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5Z+O6Zeo5piv5ZCm5omT5byAXHJcbiAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7XHJcbiAgICAgICAgICAgICAgICAvL+WfjuWkluS6uuWPoy0xXHJcbiAgICAgICAgICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50LS07XHJcbiAgICAgICAgICAgICAgICAvL+WbveWutuS6uuWPoysxXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmNhbF9NYWluRGF0YShHYW1lQ29uZmlnLk1BSU5fUE9QVUxBVElPTiwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5aKZ5YaF5Lq66KGM5Yqo6YC76L6RKi9cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWimeWGheS6uuihjOWKqOmAu+i+kSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxyXG4gICAge1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRvd2VkVG9Nb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFRyYWdldCh0YXJnZXQ6TGF5YS5TcHJpdGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMudGFyZ2V0Tm9kZSA9IHRhcmdldDtcclxuICAgICAgICAvL+a1i+ivlVxyXG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IHRhcmdldDtcclxuICAgICAgICAvLyB0aGlzLnRvd2FyZC54ID0gdGFyZ2V0Lng7XHJcbiAgICAgICAgLy8gdGhpcy50b3dhcmQueSA9IHRhcmdldC55O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKnRvd2VyZOi9rOWMluaIkOS9jeenuyAqL1xyXG4gICAgcHJvdGVjdGVkIHRvd2VkVG9Nb3ZlKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMudG93YXJkLnJvdGF0aW9uKSB0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IFRvb2wucm90YXRlUm9wZVBvaW50XzIodGhpcy5zcC54LHRoaXMuc3AueSx0aGlzLnRhcmdldE5vZGUueCx0aGlzLnRhcmdldE5vZGUueSk7O1xyXG4gICAgICAgIHRoaXMucGVvcGxlVG93ZXJkKCk7Ly/orqnnm67moIfmnJ3lkJHorqHnrpfmlbBcclxuICAgIH1cclxuXHJcbiAgICAvKirmnJ3lkJEgIHRvd2VyZOenu+WKqCAqL1xyXG4gICAgcHJpdmF0ZSBwb3NNb3ZlKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zcC54ICs9IHRoaXMudG93YXJkLnNwZWVkKlRvb2wucm90YXRpb25TZXQodGhpcy50b3dhcmQucm90YXRpb24sXCJzaW5cIik7XHJcbiAgICAgICAgdGhpcy5zcC55ICs9IHRoaXMudG93YXJkLnNwZWVkKlRvb2wucm90YXRpb25TZXQodGhpcy50b3dhcmQucm90YXRpb24sXCJjb3NcIik7XHJcbiAgICAgICAgdGhpcy5zcC5yb3RhdGlvbiA9IHRoaXMudG93YXJkLnJvdGF0aW9uO1xyXG4gICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMudGFyZ2V0Tm9kZSx0aGlzLnNwKSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRhcmdldE5vZGUubmFtZSA9PT0gXCJzcF9kb29yXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ29PdXQodGhpcy50eXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5zcC54IDwgMCB8fCB0aGlzLnNwLnkgPiA5MDAgfHwgdGhpcy5zcC54ID4gMjAwMCkge3RoaXMuZGVzdG9yeVBlb3BsZSgpO31cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNwLnJvdGF0aW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5Lq66Z2i5ZCRICovXHJcbiAgICBwcm90ZWN0ZWQgcGVvcGxlVG93ZXJkKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nZXRUb3dlcmRQb3MoKTsvL+iOt+W+l+S6lOS4queCue+8jOagueaNruebruagh+WdkOagh+iuoeeul1xyXG4gICAgICAgIHRoaXMudGVzdFRvd2VyZCgpOy8v5qOA5rWL5piv5ZCm56ym5ZCI6KaB5rGCIOS4jeespuWQiCArIC0gNVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuajgOa1i+ihjOi1sOaWueWQkSAqL1xyXG4gICAgcHJvdGVjdGVkIHRlc3RUb3dlcmQoKSA6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgcG93ZXIgPSB0aGlzLnRlc3RDb2xpZGVyKCk7Ly8gLTEgMCAxIDIgMyA0IDVcclxuICAgICAgICBpZihwb3dlciA+IDApXHJcbiAgICAgICAgey8v5pKe5Yiw5LqG6ZyA6KaB6L2s5pa55ZCRXHJcbiAgICAgICAgICAgIHRoaXMudG93YXJkLnJvdGF0aW9uQ2hhbmdlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZEN0cihwb3dlcik7XHJcbiAgICAgICAgICAgIHRoaXMuanVkZ2VMZWZ0UmlnaHQoKTsgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBvc01vdmUoKTsvL+enu+WKqFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmluZFRhcmdldCgpO1xyXG4gICAgICAgIHRoaXMudG93YXJkLnNwZWVkID0gdGhpcy5zcGVlZDsgICAgICBcclxuICAgICAgICB0aGlzLnBvc01vdmUoKTsvL+enu+WKqCAgXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6YCf5bqm5o6n5Yi2ICovXHJcbiAgICBwcml2YXRlIHNwZWVkQ3RyKHBvd2VyKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRvd2FyZC5zcGVlZCA9IHRoaXMuc3BlZWQqKChwb3dlcisxKS8odGhpcy50b3dhcmRQb3MubGVuZ3RoKzIpKTsgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzcGVlZCA6OlwiICsgdGhpcy50b3dhcmQuc3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIpOaWreaWueWQkSAqL1xyXG4gICAgcHJvdGVjdGVkIGp1ZGdlTGVmdFJpZ2h0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdG9wRGkrKztcclxuICAgICAgICBpZih0aGlzLnN0b3BEaT4zNikge3RoaXMuc3RvcERpID0gMDtyZXR1cm47fVxyXG4gICAgICAgIHRoaXMudG93YXJkLnJvdGF0aW9uQ2hhbmdlICs9IEdhbWVDb25maWcuVEVTVF9QT0lOVF9STztcclxuICAgICAgICBsZXQgcm8xID0gdGhpcy50b3dhcmQucm90YXRpb24gLSB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZTtcclxuICAgICAgICBsZXQgcm8yID0gdGhpcy50b3dhcmQucm90YXRpb24gKyB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZTtcclxuICAgICAgICB0aGlzLmdldFRvd2VyZFBvcyhybzEpO1xyXG4gICAgICAgIGxldCBudW1SbzEgPSB0aGlzLnRlc3RDb2xpZGVyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRUb3dlcmRQb3Mocm8yKTtcclxuICAgICAgICBsZXQgbnVtUm8yID0gdGhpcy50ZXN0Q29saWRlcigpO1xyXG4gICAgICAgIGlmKG51bVJvMSA9PSAtMSkge3RoaXMudG93YXJkLnJvdGF0aW9uID0gcm8xOyByZXR1cm47fVxyXG4gICAgICAgIGlmKG51bVJvMiA9PSAtMSkge3RoaXMudG93YXJkLnJvdGF0aW9uID0gcm8yOyByZXR1cm47fVxyXG4gICAgICAgIHRoaXMuanVkZ2VMZWZ0UmlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipmaW5kVGFyZ2V05a+75om+55uu5qCHICovXHJcbiAgICBwcml2YXRlIGZpbmRUYXJnZXQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgQ2EgPSB0aGlzLnRvd2FyZC5yb3RhdGlvbiAtIHRoaXMudG93YXJkLnRhcmdldFJvdGF0aW9uO1xyXG4gICAgICAgIGlmKENhID4gMCkgdGhpcy50b3dhcmQucm90YXRpb24gLT0gNTtcclxuICAgICAgICAgICAgZWxzZSBpZiggQ2EgPCAwICkgdGhpcy50b3dhcmQucm90YXRpb24gKz01O1xyXG4gICAgICAgIGlmKCBNYXRoLmFicyhDYSkgPCA1KSB0aGlzLnRvd2FyZC5yb3RhdGlvbiArPSBDYTtcclxuICAgIH0gICBcclxuXHJcbiAgICAvKirmo4DmtYvmmK/lkKbnorDmkp4g5pKe5Yiw5LqG6L+U5ZuedHVyZSAtMeWPr+S7pei1sCAw5Lul5LiK6KGo56S656Kw5pKe5Yiw5ZOq5Liq54K5Ki9cclxuICAgIHByb3RlY3RlZCB0ZXN0Q29saWRlcigpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG51bSA9IC0xO1xyXG4gICAgICAgIGxldCBhcmVhIDogQXJyYXk8TGF5YS5TcHJpdGU+PSBEYXRhTWFuYWdlci5pbnNfLmFycl9SaWdodEFyZWE7XHJcbiAgICAgICAgaWYodGhpcy5zcC54PDk4MSkgYXJlYSA9IERhdGFNYW5hZ2VyLmluc18uYXJyX0xlZnRBcmVhO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJlYS5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QodGhpcy5ib3JuTm9kZSx0aGlzLnNwKSkge3JldHVybiAtMTt9XHJcbiAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KGFyZWFbaV0sdGhpcy5zcCkpe3JldHVybiAwO30vL+WmguaenOW3sue7j+aSnuS4iuS6huOAgiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yKGxldCBoID0gMDtoPHRoaXMudG93YXJkUG9zLmxlbmd0aDtoKyspXHJcbiAgICAgICAgICAgIHsvL+S6lOS4queCueajgOa1i1xyXG4gICAgICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QodGhpcy50YXJnZXROb2RlLHRoaXMudG93YXJkUG9zW2hdKSl7cmV0dXJuLTE7fVxyXG4gICAgICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QoYXJlYVtpXSx0aGlzLnRvd2FyZFBvc1toXSkpXHJcbiAgICAgICAgICAgICAgICB7Ly/nprvkurrmnIDov5HnmoTngrlcclxuICAgICAgICAgICAgICAgICAgICBudW0gPSBoKzE7Ly8x77yMMu+8jDPvvIw077yMNVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuXHJcbiAgICAvKirkurrpnaLlkJHnmoTkupTkuKrmo4DmtYvngrkgKi9cclxuICAgIHByb3RlY3RlZCBnZXRUb3dlcmRQb3Mocm90YXRpb25UZXN0PykgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gdGhpcy50b3dhcmQucm90YXRpb247Ly/kvb/nlKjlvZPliY3pnaLlkJFcclxuICAgICAgICBpZihyb3RhdGlvblRlc3QpIHJvdGF0aW9uID0gcm90YXRpb25UZXN0O1xyXG4gICAgICAgIGVsc2UgdGhpcy5rZWVwVG93ZXJkRGF0YSgpOy8v5L+d5a2YIOeOsOWcqOS4uuatouWIsOebruagh+eCueeahOinkuW6plxyXG4gICAgICAgIGlmKHJvdGF0aW9uID09PSB1bmRlZmluZWQpIFxyXG4gICAgICAgIHsvL+WmguaenOinkuW6puaYr3VuZGVmXHJcbiAgICAgICAgICAgIHJvdGF0aW9uID0gdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb24vL+ebruagh+inkuW6pu+8jOWIneWni+inkuW6piAgIFxyXG4gICAgICAgICAgICB0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvdGF0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/kvY3np7vpnIDopoHnmoTlj5jph49cclxuICAgICAgICBsZXQgY29zIDogbnVtYmVyID0gVG9vbC5yb3RhdGlvblNldChyb3RhdGlvbixcImNvc1wiKTtcclxuICAgICAgICBsZXQgc2luIDogbnVtYmVyID0gVG9vbC5yb3RhdGlvblNldChyb3RhdGlvbixcInNpblwiKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS14OjpcIiArIHRoaXMuc3AueCArIFwieTo6XCIgKyB0aGlzLnNwLnkpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8R2FtZUNvbmZpZy5URVNUX1BPSU5UX0NPVU5UO2krKykvL+iusOW9leS6lOS4qlxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnRvd2FyZFBvc1tpXSkgdGhpcy50b3dhcmRQb3NbaV0gPSB7fTsgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnRvd2FyZFBvc1tpXS54ID0gdGhpcy5zcC54ICsgR2FtZUNvbmZpZy5URVNUX1BPSU5UX0RJQypzaW4qKGkrMSk7XHJcbiAgICAgICAgICAgIHRoaXMudG93YXJkUG9zW2ldLnkgPSB0aGlzLnNwLnkgKyBHYW1lQ29uZmlnLlRFU1RfUE9JTlRfRElDKmNvcyooaSsxKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG93YXJkUG9zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirkv53lrZggdG93ZXLkv6Hmga8gKi9cclxuICAgIHByb3RlY3RlZCBrZWVwVG93ZXJkRGF0YSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v5a2Y5YKo546w5Zyo54K55Yiw55uu5qCH6KeS5bqmXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb24gPSBUb29sLnJvdGF0ZVJvcGVQb2ludF8yKHRoaXMuc3AueCx0aGlzLnNwLnksdGhpcy50YXJnZXROb2RlLngsdGhpcy50YXJnZXROb2RlLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWcqOi/kOihjOenu+WKqOmAu+i+keS5i+WJjSDnmoTnibnmrormk43kvZwgKi9cclxuICAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8qKipcclxuICAgICAqIOi/m+eoiyAvIOWHuuWfjumAu+i+kSBcclxuICAgICAqIEB0eXBlIHRydWXov5vln44gIGZhbHNl5Ye65Z+OXHJcbiAgICAqL1xyXG4gICBwdWJsaWMgcGVvcGxlR28odHlwZSkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgICBpZih0eXBlKSB7XHJcbiAgICAgICAgICAgIC8v6L+b56iL5pa55rOVXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8v5Ye65Z+O5pa55rOVXHJcbiAgICAgICAgICAgIHRoaXMucGVvcGxlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKirlh7rln47pgLvovpEgKi9cclxuICAgcHJvdGVjdGVkIHBlb3BsZU91dCgpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwic3BfZG9vclwiKSBhcyBMYXlhLlNwcml0ZSk7Ly/orr7nva7nm67moIfmmK/pl6hcclxuICAgfVxyXG5cclxuICAgLyoq6L+b5Z+O5pa55rOVIOS7juato+mXqOWIsOafkOS4gOS4quS9j+WuhSovXHJcbiAgIHByb3RlY3RlZCBwZW9wbGVJbnRvKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgICBsZXQgYm9ybk5vZGUgPSB0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJzcF9kb29yXCIpIGFzIExheWEuU3ByaXRlO1xyXG4gICAgICAgIGxldCBob3VzZU5vZGUgPSB0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKTtcclxuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgIHRoaXMuc2V0UG9zKGJvcm5Ob2RlLngsYm9ybk5vZGUueSArIDQwLGJvcm5Ob2RlKTtcclxuICAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTtcclxuICAgfVxyXG5cclxuICAgLyoq5LuOaG91c2XkuK3ojrflj5Yg5LiA5Liq6ZqP5py655qE54K5ICovXHJcbiAgIHByb3RlY3RlZCBnZXRUYXJnZVBvcyhob3VzZU5vZGUpIDogTGF5YS5TcHJpdGVcclxuICAge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoKChob3VzZU5vZGUgYXMgTGF5YS5TcHJpdGUpLl9jaGlsZHJlbi5sZW5ndGgtMSkqcmFuZG9tKTtcclxuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6TGF5YS5TcHJpdGU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIgLS0tLS0tLS0tIGdldFRhcmdldCBcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbmRleCA6OlwiICsgaW5kZXgpO1xyXG4gICAgICAgIGlmKGluZGV4ID49IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0YXJnZXROb2RlID0gaG91c2VOb2RlLmdldENoaWxkQnlOYW1lKFwiaG91c2VfXCIraW5kZXgpO1xyXG4gICAgICAgICAgICBpZih0YXJnZXROb2RlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIumaj+acuuaVsOWPlumUmVwiKTtcclxuICAgICAgICAvLyB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgIH1cclxuXHJcbiAgICAvKirkurrmtojlpLEgKi9cclxuICAgIHByb3RlY3RlZCBkZXN0b3J5UGVvcGxlKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIodGhpcy50eXBlLHRoaXMpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zcC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKCF0aGlzLmlzT3V0KSB0aGlzLmRlc3RvcnlJbm5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWimeWGheS6uuWIoOmZpCDnibnmrorlpITnkIYgKi9cclxuICAgIHByb3RlY3RlZCBkZXN0b3J5SW5uZXIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+iuoeaXtuWZqOa4healmlxyXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLnBlb3BsZV9Qb3NJbm5lcik7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5DT01NT05fTUFOOlxyXG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzBdPjApXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMF0tLTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkJBTkRJVF9NQU46XHJcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbM10+MClcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVszXS0tO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuUk9CQkVSX01BTjpcclxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVs0XT4wKVxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzRdLS07XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOOlxyXG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzFdPjApXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMV0tLTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNUQVJfTUFOOlxyXG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzJdPjApXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMl0tLTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlKTtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5pbXBvcnQgVG9vbCBmcm9tIFwiLi4vLi4vVG9vbC9Ub29sXCI7XHJcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiBleHRlbmRzIFBlb3BsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpOyAgICAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirlopnlhoXpgLvovpEgKi9cclxuICAgIHByb3RlY3RlZCBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcInBhbGFjZVwiKSBhcyBMYXlhLlNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy50b3dlZFRvTW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumHjeWGmXNwZWNpYWxkbyAqL1xyXG4gICAgcHJvdGVjdGVkIHNwZWNpYWxEbygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v6I635Y+W5Y2g5q+U5pWw57uEXHJcbiAgICAgICAgbGV0IGFycl9wZXJjZW50ID0gVG9vbC5nZXRQZXJjZW50QXJlYShDb3VudHJ5RGF0YS5pbnNfLmFycl9wZXJzb25QZXJjZW50TmFtZSk7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgbGV0IGluZGV4O1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyX3BlcmNlbnQubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCFhcnJfcGVyY2VudFtpKzFdKSBicmVhaztcclxuICAgICAgICAgICAgaWYoYXJyX3BlcmNlbnRbaV0gPCByYW5kb20gJiYgcmFuZG9tIDw9IGFycl9wZXJjZW50W2krMV0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpbmRleCA9PT0gdW5kZWZpbmVkKSB7Y29uc29sZS5sb2coXCLmpoLnjoforqHnrpflh7rplJlcIik7cmV0dXJuO31cclxuICAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XHJcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgICBmb3IobGV0IGk9MDt0cnVlO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgICAgIGlmKHRhcmdldE5vZGUgIT09IHRoaXMuYm9ybk5vZGUpIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2goaW5kZXgpXHJcbiAgICAgICAgeyAgICAvKiowLeWMu+eUnyAxLeitpuWvnyAyLeWVhuS6uiAtM+a4uOaJi+WlvemXsiAtNOWGnOawkSovXHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwiaG9zcGl0YWxcIikgYXMgTGF5YS5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpOyAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGVvcGxlT3V0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJmYXJtXCIpIGFzIExheWEuU3ByaXRlKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9iYmVyIGV4dGVuZHMgUGVvcGxle1xyXG4gICAgLyoq6LSi5pS/5Lyk5a6zICovXHJcbiAgICBwdWJsaWMgbW9uZXk6bnVtYmVyO1xyXG4gICAgLyoq5bm456aP5bqmICovXHJcbiAgICBwdWJsaWMgcG9wdWxhclN1cHBvcnQ6bnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlgbflj5botKLmlL/nmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3V0TW9uZXlUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze06L+b6KGM5YG355uXKDEwLTIwKeenklxyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMTArMTA7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5YG355uXXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMuQ3V0TW9uZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pe26Ze05ZCO5YG35Y+WXHJcbiAgICBwdWJsaWMgQ3V0TW9uZXkoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tb25leT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumZjeS9jiAqL1xyXG5cclxuICAgIC8qKuWimeWGhSAqL1xyXG4gICAvKirlopnlhoXpgLvovpEgKi9cclxuICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICAvLyB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcInBhbGFjZVwiKSBhcyBMYXlhLlNwcml0ZSk7XHJcbiAgICAgICB0aGlzLnRvd2VkVG9Nb3ZlKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKumHjeWGmXNwZWNpYWxkbyAqL1xyXG4gICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIGxldCBob3VzZU5vZGUgPSB0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKTtcclxuICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICBmb3IobGV0IGk9MDt0cnVlO2krKylcclxuICAgICAgIHtcclxuICAgICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgICAgIGlmKHRhcmdldE5vZGUgIT09IHRoaXMuYm9ybk5vZGUpIGJyZWFrO1xyXG4gICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xyXG4gICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZW50ZXIgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiArIHRoaXMuc2NyZWVuV2lkdGgpO1xyXG4gICAgICAgIGlmKHNjcmVlbldpZHRoIDwgODAwKSAodGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShcImdhbWVOYW1lXCIpIGFzIExheWEuTGFiZWwpLmZvbnRTaXplID0gMTI1O1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuU3ByaXRlKS54ID0gKHNjcmVlbldpZHRoLSA2NjcpLzI7ICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV29ybGRFdmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvV29ybGRFdmVudE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vLi4vdWkvbGF5YU1heFVJXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgUGVvcGxlTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9QZW9wbGVNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi8uLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgTXNnRGlhbG9nIGZyb20gXCIuLi8uLi9Db3JlL01zZ0RpYWxvZ1wiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEJ1eURpYWxvZyBmcm9tIFwiLi4vLi4vQ29yZS9CdXlEaWFsb2dcIjtcclxuaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vLi4vUGVyZmViL1Blb3BsZVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4lueVjOeuoeeQhuWZqOiEmuacrFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdvcmxkIGV4dGVuZHMgdWkuR2FtZVdvcmxkVUl7XHJcbiAgICAvKipEYXRhTWFuYWdlciAg5Y2V5L6LICovXHJcbiAgICAvKirkuovku7blj5HnlJ/lmaggKi9cclxuICAgIHByaXZhdGUgd29ybGRFdmVudE1hbmFnZXIgOiBXb3JsZEV2ZW50TWFuYWdlcjtcclxuICAgIC8qKuS6uuexu+euoeeQhuWZqCovXHJcbiAgICBwcml2YXRlIHBlb3BsZU1hbmFnZXIgOiBQZW9wbGVNYW5hZ2VyO1xyXG4gICAgLyoqVUnnrqHnkIblmaggKi9cclxuICAgIHByaXZhdGUgdWlNYW5hZ2VyIDogVUlNYW5hZ2VyO1xyXG4gICAgLyoq5raI5oGv6YCa55So5qGGICovXHJcbiAgICBwcml2YXRlIG1zZ0RpYWxvZyA6IE1zZ0RpYWxvZztcclxuICAgIC8qKui0reS5sOahhiAqL1xyXG4gICAgcHJpdmF0ZSBidXlEaWFsb2c6QnV5RGlhbG9nO1xyXG4gICAgXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8qKuWxj+W5leWuveW6piAqL1xyXG4gICAgcHJpdmF0ZSBzY3JlZW5XaWR0aCA6IG51bWJlcjtcclxuICAgIC8qKum8oOagh+aYr+WQpuaMieS4iyAqL1xyXG4gICAgcHJpdmF0ZSBpc0Rvd24gOiBib29sZWFuO1xyXG4gICAgLyoq6byg5qCH54K56K6w5b2VICovXHJcbiAgICBwcml2YXRlIG1vdXNlUG9zIDogYW55O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLyoqMm1pbuiuoeaXtiAqL1xyXG4gICAgcHJpdmF0ZSB0aW1lckNvdW50IDogbnVtYmVyO1xyXG4gICAgLyoq5Ye66Ze06ZqU6K6h5pe2ICovXHJcbiAgICBwcml2YXRlIHRpbWVyQ291bnRfb3V0IDogbnVtYmVyO1xyXG4gICAgLyoq6L+bICovXHJcbiAgICBwcml2YXRlIHRpbWVyQ291bnRfaW4gOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdhbWVEYXRhSW5pdCgpOy8v5ri45oiP5Y+Y6YeP5Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpOy8v57uZ5qGl5re75Yqg5LqL5Lu2IFxyXG4gICAgICAgIHRoaXMuc2NyZWVuU2V0dGluZygpOy8v5bGP5bmV5bGF5LitXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnQoKTsvL+a4uOaIj+a1geeoi+W8gOWni1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc18uc2V0QXJlYSh0aGlzLnNwX3NjZW5lLmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaVsOaNruWIneWni+WMliAqL1xyXG4gICAgcHJpdmF0ZSBnYW1lRGF0YUluaXQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLndvcmxkRXZlbnRNYW5hZ2VyID0gbmV3IFdvcmxkRXZlbnRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyID0gbmV3IFBlb3BsZU1hbmFnZXIodGhpcy5zcF9zY2VuZSk7XHJcbiAgICAgICAgdGhpcy51aU1hbmFnZXIgPSBuZXcgVUlNYW5hZ2VyKHRoaXMuc3BfVUkpO1xyXG4gICAgICAgIHRoaXMubXNnRGlhbG9nID0gbmV3IE1zZ0RpYWxvZygpOyAgICAgIFxyXG4gICAgICAgIHRoaXMuYnV5RGlhbG9nPW5ldyBCdXlEaWFsb2coKTtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zID0ge307XHJcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVyQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZXJDb3VudF9vdXQgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZXJDb3VudF9pbiA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5re75Yqg5LqL5Lu2ICovXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGFnZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sdGhpcyx0aGlzLm1vdXNlRG93bik7XHJcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX1VQLHRoaXMsdGhpcy5tb3VzZVVwKTtcclxuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfTU9WRSx0aGlzLHRoaXMubW91c2VNb3ZlKTtcclxuICAgICAgICAvL+e7memXqOW4rueCueeCueWHu+S6iyAgIFxyXG4gICAgICAgIHRoaXMuc3BfZG9vci5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5kb29yQ3RyKTtcclxuICAgICAgICAvL+WMu+mmhuS6i+S7tue7keWumlxyXG4gICAgICAgIHRoaXMuaG9zcGl0YWwub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuSE9TUElUQUxdKTtcclxuICAgICAgICAvL+WGm+mYn+S6i+S7tue7keWumlxyXG4gICAgICAgIHRoaXMuYXJteS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5BUk1ZXSk7XHJcbiAgICAgICAgLy/nsq7ku5Pkuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLmZhcm0ub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRkFSTV0pOyAgICAgICAgXHJcbiAgICAgICAgLy/np5HmioDppobkuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLnRlY2hub2xvZ3kub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuVEVDSE5PTE9HWV0pOyAgICAgICAgXHJcbiAgICAgICAgLy/mlrDpl7vngrnkuovku7bnu5HlrppcclxuICAgICAgICAvL3RoaXMuZXZlbnRIb3VzZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5FVkVOVF9IT1VTRV0pOyAgICAgXHJcbiAgICAgICAgLy/mlrDpl7vnmoflrqvnu5HlrppcclxuICAgICAgICB0aGlzLnBhbGFjZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5QQUxBQ0VdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlsY/luZUg5bGA5LitKi9cclxuICAgIHByaXZhdGUgc2NyZWVuU2V0dGluZygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiArIHRoaXMuc2NyZWVuV2lkdGgpO1xyXG4gICAgICAgIHRoaXMuc3Bfc2NlbmUueCA9IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKS8yO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+S6i+S7tuWbnuiwg1xyXG5cclxuICAgIC8qKumXqOeahOW8gOWFsyAqL1xyXG4gICAgcHJpdmF0ZSBkb29yQ3RyKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuKVxyXG4gICAgICAgIHsvL+W8gOmXqFxyXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kb29yQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHsvL+WFs+mXqFxyXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRvb3JPcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWFs+mXqCAqL1xyXG4gICAgcHJpdmF0ZSBkb29yQ2xvc2UoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirlvIDpl6ggKi9cclxuICAgIHByaXZhdGUgZG9vck9wZW4oKSA6IHZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq56e75YqoICovXHJcbiAgICBwcml2YXRlIG1vdXNlTW92ZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzRG93bikgcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMubW91c2VQb3MueClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgdGhpcy5zcF9zY2VuZS54ICs9IExheWEuc3RhZ2UubW91c2VYIC0gdGhpcy5tb3VzZVBvcy54OyBcclxuICAgICAgICAvLyAgICB0aGlzLnNwX3NjZW5lLnkgKz0gTGF5YS5zdGFnZS5tb3VzZVkgLSB0aGlzLm1vdXNlUG9zLng7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3Bfc2NlbmUueCA+IDApICB0aGlzLnNwX3NjZW5lLnggPSAwO1xyXG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPCAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCkpIHRoaXMuc3Bfc2NlbmUueCA9ICAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW91c2VQb3MueCA9IExheWEuc3RhZ2UubW91c2VYO1xyXG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IExheWEuc3RhZ2UubW91c2VZO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaLluWKqOaMieS4iyAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZURvd24oKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5ouW5Yqo5oqs6LW3ICovXHJcbiAgICBwcml2YXRlIG1vdXNlVXAoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3VzZU1vdmUpO1xyXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7IFxyXG4gICAgICAgIHRoaXMubW91c2VQb3MueCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLnkgPSB1bmRlZmluZWQ7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirngrnlh7sg6I635Y+W5bu6562R5L+h5oGvICovXHJcbiAgICBwcml2YXRlIG9uSG91c2VJbmZvKHR5cGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubXNnRGlhbG9nLnNob3dNc2codHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq54K55Ye76LSt5Lmw5oyJ6ZKuICovXHJcbiAgICAvKnByaXZhdGUgYnV5RGlhbG9nX0NsaWNrKHR5cGU6c3RyaW5nKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoKHR5cGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuTUFJTl9QT1BVTEFUSU9OOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlEaWFsb2cuYnV5X25hbWUudGV4dD1cIuS6uuWPo1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5NQUlOX1BPUFVMQVJTVVBQT1JUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlEaWFsb2cuYnV5X25hbWUudGV4dD1cIuW5uOemj+W6plwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5NQUlOX01PTkVZOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlEaWFsb2cuYnV5X25hbWUudGV4dD1cIui0ouaUv1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5NQUlOX1RFQ0hOT0xPR1k6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1eURpYWxvZy5idXlfbmFtZS50ZXh0PVwi56eR5oqAXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLk1BSU5fUFJFU1RJR0U6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1eURpYWxvZy5idXlfbmFtZS50ZXh0PVwi5aiB5pybXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5idXlEaWFsb2cucG9wdXAoKTtcclxuICAgIH0qL1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t57Ku6aOfLS0tLS0tLS0tLS0tLVxyXG4gICAgLyoq57Ku6aOf5Lqn5Ye65YWs5byPICovXHJcbiAgICBwdWJsaWMgY2FsX0dyYWluQWRkKCk6dm9pZFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKirnsq7po5/mtojogJflhazlvI8gKi9cclxuICAgIHB1YmxpYyBjYWxfR3JhaW5NaW51cygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirnsq7po5/nu5PnrpcgKi9cclxuICAgIC8qcHVibGljIGNhbF9HcmFpbigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+WmguaenOi/mOacieeyrumjn+W6k+WtmFxyXG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQ+PUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c55Sf5Lqn6YeP5aSn5LqO5aSn5LqO5raI6ICX546H55qE5p+Q5Liq5YCN546H77yM5YWI6K6p5YW26Ieq5Yqo6L2s5YyW5Li66LSi5pS/77yM5LmL5ZCO5L+u5pS55Li65omL5Yqo6L2s5YyWXHJcbiAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQvQ291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzPj1HYW1lQ29uZmlnLkdSQUlOX0VYQ0hBTkdFTU9ORVlfUEVSQ0VOVClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy/otoXlh7rlgI3njofnmoTpg6jliIZcclxuICAgICAgICAgICAgICAgIGxldCBleGNoYW5nZT1Db3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkLUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cypHYW1lQ29uZmlnLkdSQUlOX0VYQ0hBTkdFTU9ORVlfUEVSQ0VOVDtcclxuICAgICAgICAgICAgICAgIC8v5o2i6ZKxXHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4Y2hhbmdlTW9uZXkoZXhjaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgLy/liankvZnnmoTliqDlhaXlupPlrZhcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jays9KENvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQtZXhjaGFuZ2UtQ291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8v5Yqg5YWl5bqT5a2YXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srPShDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkLUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzlupPlrZjliqDkuIrnlJ/kuqfnmoTnsq7po5/kuI3otrPku6XmirXlpJ/mtojogJfnmoTnsq7po59cclxuICAgICAgICAgICAgaWYoKENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jaytDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkKTxDb3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8v54K55Ye76YCJ5oup5piv5ZCm6LSt5Lmw57Ku6aOf77yM5aaC5p6c5LiN6LSt5Lmw5YiZ5a+86Ie05Lq65Y+j5YeP5bCR5ZKM5bm456aP5bqm6ZmN5L2OXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8v5YeP5bCR5bqT5a2YXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2stPUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cy1Db3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSovXHJcblxyXG4gICAgLyoq57Ku6aOf5o2i6ZKxICovXHJcbiAgICBwdWJsaWMgZXhjaGFuZ2VNb25leShncmFpbjpudW1iZXIpOnZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZKx5o2i57Ku6aOfICovXHJcbiAgICBwdWJsaWMgZXhjaGFuZ2VHcmFpbihtb25leTpudW1iZXIpOnZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0t56iA5pyJ6ZeoXHJcbiAgICAvKirotK3kubDnqIDmnInpl6ggKi9cclxuICAgIHB1YmxpYyBidXlSYXJlRG9vcigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8vLy8vLy8vLy8vL+a4uOaIj+a1geeoi+W8gOWniy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvKirmuLjmiI/mtYHnqIvlvIDlp4sgKi9cclxuICAgIHByaXZhdGUgZ2FtZVN0YXJ0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLmNyZWF0ZVBlb3BsZSgpOy8v5Lq65Y+j55Sf5oiQ6YC76L6R6L+Q6KGMXHJcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLmNyZWF0ZVBlb3BsZV9Jbm5lcigpOy8v5YaF5Lq65Y+j55Sf5oiQXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/kurrlj6PmtYHliqjpgJrnn6XlmahcclxuICAgIC8qKlxyXG4gICAgICog5rWB5Yqo5q+U5L6L77yMIOmAmuefpeWZqFxyXG4gICAgICogXHJcbiAgICAgKiAgKi9cclxuICAgIHByaXZhdGUgY3VycmVudFJhdGlvKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50aW1lckNvdW50Kys7XHJcbiAgICAgICAgdGhpcy50aW1lckNvdW50X291dCsrO1xyXG4gICAgICAgIHRoaXMudGltZXJDb3VudF9pbisrO1xyXG4gICAgICAgIGxldCBjb3VudHJ5RGF0YSA9IENvdW50cnlEYXRhLmluc187XHJcbiAgICAgICAgbGV0IEJJID0gY291bnRyeURhdGEucGVyY2VudDsgICAvL+i/my/lh7pcclxuICAgICAgICBsZXQgb3V0ZXJUYXJnZXQgPSBjb3VudHJ5RGF0YS5leGl0UGVvcGxlOy8v5Ye66Zeo55uu5qCH5pWwXHJcbiAgICAgICAgbGV0IGlubmVyVGFnZXQgPSBjb3VudHJ5RGF0YS5lbnRlclBlb3BsZTsvL+i/m+mXqOebruagh+aVsFxyXG4gICAgICAgIGxldCBfb3V0ZXIgPSBjb3VudHJ5RGF0YS5fb3V0ZXJQZW9wbGU7Ly/lh7rln47lj6Plrp7pmYXlgLxcclxuICAgICAgICBsZXQgX2lubmVyID0gY291bnRyeURhdGEuX2lubmVyUGVvcGxlOy8v5YWl5Z+O5a6e6ZmF5YC8XHJcbiAgICAgICAgbGV0IGxhc3RUaW1lID0gMTIwMDAwIC0gdGhpcy50aW1lckNvdW50IC0gNTAwMDA7Ly/ojrflj5bliankvZnml7bpl7TvvIzlpJrpooTmlK8xMOenklxyXG4gICAgICAgIGlmKG91dGVyVGFyZ2V0ID4gX291dGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/pgJrnn6VcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lckNvdW50X291dCA+PSBsYXN0VGltZS8ob3V0ZXJUYXJnZXQgLSBfb3V0ZXIpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpbm5lclRhZ2V0ID4gX2lubmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/pgJrnn6UgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZXJDb3VudF9pbiA+PSBsYXN0VGltZS8ob3V0ZXJUYXJnZXQgLSBfaW5uZXIpKSAgXHJcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy50aW1lckNvdW50ID4gMTIwMDAwKVxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50X2luID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50X291dCA9IDA7XHJcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLl9vdXRlclBlb3BsZSA9IDA7Ly/lrp7pmYXlgLzlvZLpm7ZcclxuICAgICAgICAgICAgY291bnRyeURhdGEuX2lubmVyUGVvcGxlID0gMDsvL+WunumZheWAvOW9kumbtlxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7aTxvdXRlclRhcmdldC1fb3V0ZXI7aSsrKS8v6YCa55+l5Ye65Z+OXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KGZhbHNlKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8aW5uZXJUYWdldC1faW5uZXI7aSsrKS8v6YCa55+l6L+b56iLXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KHRydWUpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuR2FtZSBleHRlbmRzIExheWEuU2NyaXB0e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkgOiB2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgb25DbGljaygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEuU2NlbmUub3BlbihcIkdhbWVXb3JsZC5zY2VuZVwiKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5TdG9yeSBleHRlbmRzIExheWEuU2NyaXB0e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkgOiB2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgb25DbGljaygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEuU2NlbmUub3BlbihcIkdhbWVTdG9yeS5zY2VuZVwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHtcclxuICAgIC8v6I635Y+W5LiJ6KeS5Ye95pWw5YC8XHJcbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uRGVhbChmeDpudW1iZXIsZnk6bnVtYmVyLHN4Om51bWJlcixzeTpudW1iZXIsZ2V0U3RyaW5nKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIC8qKuaWnOi+uSAqL1xyXG4gICAgICAgIGxldCBjIDogbnVtYmVyID0gTWF0aC5zcXJ0KE1hdGgucG93KGZ4IC0gc3gsMikgKyBNYXRoLnBvdyhmeSAtIHN5LDIpKTtcclxuICAgICAgICAvKirkuLTovrkgKi9cclxuICAgICAgICBsZXQgYSA6IG51bWJlciA9IHN4IC0gZng7XHJcbiAgICAgICAgLyoq5a+56L65ICovXHJcbiAgICAgICAgbGV0IGIgOiBudW1iZXIgPSBzeSAtIGZ5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGdldFN0cmluZyA9PSBcInNpblwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiNzaW4gPT1cIiArIChiL2MpKTtcclxuICAgICAgICAgICAgcmV0dXJuIChiL2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGdldFN0cmluZyA9PSBcImNvc1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiNjb3MgPT1cIiArIChhL2MpKTtcclxuICAgICAgICAgICAgcmV0dXJuIChhL2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiI3RhbiA9PVwiICsgKGIvYSkpOy8v5a+56L65IOavlCDkuLTovrkgXHJcbiAgICAgICAgICAgIHJldHVybiAoYi9hKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq56Kw5pKe5qOA5rWLIGRpY051bSDvvJrpooTorr7ot53nprsgb2JqZWN0MeWSjG9iamVjdDLkvKDlhaVzcHJpdGUs5piv5oyJ54Wn5q+P5Liqc3ByaXRl55qE6ZSa54K55Zyo5Lit5b+D5L2N572u5p2l6K6h566X55qEICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjb2xsaXNpb25DaGVjayhvYmplY3QxLG9iamVjdDIpIDogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmKE1hdGguYWJzKG9iamVjdDEueCAtIG9iamVjdDIueCk8IG9iamVjdDEud2lkdGgvMiArIG9iamVjdDIud2lkdGgvMiYmXHJcbiAgICAgICAgICAgTWF0aC5hYnMob2JqZWN0MS55IC0gb2JqZWN0Mi55KSA8IG9iamVjdDEuaGVpZ2h0LzIgKyBvYmplY3QyLmhlaWdodC8yKXtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyByb3RhdGVSb3BlUG9pbnRfMih4LHksWCxZKTpudW1iZXJcclxuICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvcz1Ub29sLnJvdGF0aW9uRGVhbCh4LHksWCxZLFwiY29zXCIpO1xyXG4gICAgICAgICAgICBsZXQgc2luPVRvb2wucm90YXRpb25EZWFsKHgseSxYLFksXCJzaW5cIik7XHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvbjtcclxuICAgICAgICAgICAgaWYoY29zPj0wJiZzaW4+MCl7XHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbj0gMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyktOTA7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvczwwJiZzaW4+PTApe1xyXG4gICAgICAgICAgICAgICAgcm90YXRpb249MTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyktOTA7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvczw9MCYmc2luPDApe1xyXG4gICAgICAgICAgICAgICAgcm90YXRpb249OTAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvcz4wJiZzaW48PTApe1xyXG4gICAgICAgICAgICAgICAgcm90YXRpb249IDkwLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHkgPCBZKSByb3RhdGlvbiArPSAxODA7XHJcbiAgICAgICAgICAgIHJldHVybiByb3RhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5bop5LluqYgXHJcbiAgICAgKiDnp7vliqjngrnlnKjliY1cclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJvdGF0aW9uKHgxLHkxLHgyLHkyKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBjb3M9VG9vbC5yb3RhdGlvbkRlYWwoeDEseTEseDIseTIsXCJjb3NcIik7XHJcbiAgICAgICAgbGV0IHNpbj1Ub29sLnJvdGF0aW9uRGVhbCh4MSx5MSx4Mix5MixcInNpblwiKTtcclxuICAgICAgICBsZXQgcm90YXRpb247XHJcbiAgICAgICAgaWYoY29zID49MCAmJiBzaW4+MCl7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uID0gOTAgKyAxODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29zIDwwICYmIHNpbj49MCl7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uID0gLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb3MgPjAgJiYgc2luPD0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm90YXRpb24gPSAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvcyA8PTAgJiYgc2luPDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3RhdGlvbiA9IDE4MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdGF0aW9uO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJvdGF0aW9uID0gNDUg6KeS5bqmXHJcbiAgICAgKiDmsYIgY29zIOi/mOaYryBzaW5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByb3RhdGlvblNldChyb3RhdGlvbix0eXBlU3RyaW5nKSAgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgciA7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgIGlmKHJvdGF0aW9uIDwgMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uICs9IDM2MCooTWF0aC5hYnMoTWF0aC5mbG9vcihyb3RhdGlvbi8zNjApKzIpKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoTWF0aC5mbG9vcihyb3RhdGlvbi8zNjApPjApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3RhdGlvbiAtPSAzNjAqTWF0aC5mbG9vcihyb3RhdGlvbi8zNjApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByID0gKHJvdGF0aW9uKS8xODAqTWF0aC5QSTsgICAgICAgIFxyXG4gICAgICAgIGlmKHR5cGVTdHJpbmcgPT0gXCJjb3NcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5hYnMoTWF0aC5jb3MocikpO1xyXG4gICAgICAgICAgICBpZigocm90YXRpb24gPiAwICYmIHJvdGF0aW9uIDw9IDkwKSB8fCAocm90YXRpb24+MjcwICYmIHJvdGF0aW9uPD0zNjApKSAgdmFsdWUgPSAtdmFsdWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29zOjpcIiArIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHsgICAgICAgICBcclxuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmFicyhNYXRoLnNpbihyKSk7XHJcbiAgICAgICAgICAgIGlmKChyb3RhdGlvbj4xODAgJiYgcm90YXRpb24gPD0gMjcwKSB8fCAocm90YXRpb24+MjcwICYmIHJvdGF0aW9uPD0zNjApKSB2YWx1ZSA9IC12YWx1ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaW46OlwiICsgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWUgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDot53nprvorqHnrpdcclxuICAgICAqIDIg5a+56LGhXHJcbiAgICAgKiBmaXJzdFxyXG4gICAgICogc2Vjb25kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY291bnREaWNfT2JqZWN0KGY6YW55LHM6YW55KSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coZi54IC0gcy54LDIpICsgTWF0aC5wb3coZi55IC0gcy55LDIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaWueWdl+ajgOa1iyBcclxuICAgICAqIFxyXG4gICAgICog5pa55Z2X5a+56LGhIHNwXHJcbiAgICAgKiDmo4DmtYvnmoTngrkg5a+56LGhXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBibG9ja1Rlc3Qoc3AscG9pbnQpIDogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmKCFzcCB8fCAhcG9pbnQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgcG9pbnRMZWZ0IDogYW55ID17eDpzcC54IC0gc3Aud2lkdGgvMix5OnNwLnktc3AuaGVpZ2h0LzJ9O1xyXG4gICAgICAgIGxldCBwb2ludFJpZ2h0IDogYW55ID17eDpzcC54ICsgc3Aud2lkdGgvMix5OnNwLnkrc3AuaGVpZ2h0LzJ9O1xyXG4gICAgICAgIGxldCBzX3BvaW50TGVmdCA9IHBvaW50LnggPiBwb2ludExlZnQueCAmJiBwb2ludC55PnBvaW50TGVmdC55O1xyXG4gICAgICAgIGxldCBzX3BvaW50UmlnaHQgPSBwb2ludC54IDwgcG9pbnRSaWdodC54ICYmIHBvaW50Lnk8cG9pbnRSaWdodC55O1xyXG4gICAgICAgIGlmKHNfcG9pbnRMZWZ0ICYmIHNfcG9pbnRSaWdodCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuICBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdhbWVEYXRhIC0gQ291bnRyeURhdGFcclxuICAgICAqIOWNoOavlCDmlbDnu4RcclxuICAgICrojrflj5bljLrpl7TmlbDnu4QgMCwwLjgsMC44MywwLjg0LDAuOSwxXHJcbiAgICAgKiBAYXJyIOWxnuaAp+WQjeWtl1xyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGVyY2VudEFyZWEoYXJyKTpBcnJheTxudW1iZXI+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFyclBlcmNlbnQgPSBbXTsvL+eUn+S6p+avlOS+i1xyXG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxhcnIubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG51bWJlciArPSBDb3VudHJ5RGF0YS5pbnNfW2FycltpXV07XHJcbiAgICAgICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyUGVyY2VudDtcclxuICAgIH1cclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xyXG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xyXG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbmV4cG9ydCBtb2R1bGUgdWkge1xyXG4gICAgZXhwb3J0IGNsYXNzIEJ1eVVJIGV4dGVuZHMgRGlhbG9nIHtcclxuXHRcdHB1YmxpYyBiZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnRuX2J1eTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnV5X25hbWU6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGJ1eV9pbnB1dDpMYXlhLlRleHRJbnB1dDtcblx0XHRwdWJsaWMgYnRuX2Nsb3NlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBidXlfcHJpY2U6bGF5YS5kaXNwbGF5LlRleHQ7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJCdXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIEdhbWVXb3JsZFVJIGV4dGVuZHMgU2NlbmUge1xyXG5cdFx0cHVibGljIHNwX3NjZW5lOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9ncm91bmQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX3JpdmVyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF93YWxsOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9kb29yOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfOTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgZXZlbnRIb3VzZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBwYWxhY2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvc3BpdGFsOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGVjaG5vbG9neTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBmYXJtOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGFybXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX1VJOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBpbWdfcG9wdWxhdGlvbjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9wb3B1bGF0aW9uOmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfcG9wdWxhclN1cHBvcnQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfcG9wdWxhclN1cHBvcnQ6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ19tb25leTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9tb25leTpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX3RlY2hub2xvZ3k6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfdGVjaG5vbG9neTpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX3ByZXN0aWdlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3ByZXN0aWdlOmxheWEuZGlzcGxheS5UZXh0O1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiR2FtZVdvcmxkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgbW9kdWxlIHVpLkRpYSB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ3VycmVudERpYWxvZ1VJIGV4dGVuZHMgU2NlbmUge1xyXG5cdFx0cHVibGljIG1zZ0JvZHk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9QZXJzb246TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9Nc2c6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkRpYS9DdXJyZW50RGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyIl19
