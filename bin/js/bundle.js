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
    //-------------------------------公式
    /**稳定支出 */
    CountryData.prototype.money_SteadyCost = function () {
        this.money -= this.armyCost * (1 - this.armyPercent) + this.governCost + this.technologyCost;
    };
    /**粮食消耗 */
    CountryData.prototype.population_GrainCost = function () {
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
                DataManager_1.default.ins_.arr_outPeople.push(people);
            }
        }
        //小偷
        else if (random >= 80 && random < 90) {
            people = Laya.Pool.getItem("robber");
            if (!people) {
                people = new Robber_1.default(this.view, GameConfig_1.default.ROBBER_MAN, true);
                DataManager_1.default.ins_.arr_outPeople.push(people);
            }
        }
        //土匪
        else if (random >= 90 && random < 96) {
            people = Laya.Pool.getItem("bandit");
            if (!people) {
                people = new Robber_1.default(this.view, GameConfig_1.default.BANDIT_MAN, true);
                DataManager_1.default.ins_.arr_outPeople.push(people);
            }
        }
        //科学家
        else if (random >= 96 && random < 99) {
            people = Laya.Pool.getItem("scientist");
            if (!people) {
                people = new Robber_1.default(this.view, GameConfig_1.default.SCIENTIST_MAN, true);
                DataManager_1.default.ins_.arr_outPeople.push(people);
            }
        }
        //明星
        else {
            people = Laya.Pool.getItem("star");
            if (!people) {
                people = new Robber_1.default(this.view, GameConfig_1.default.STAR_MAN, true);
                DataManager_1.default.ins_.arr_outPeople.push(people);
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
            if (DataManager_1.OutCountryData.ins_.outCount < DataManager_1.OutCountryData.ins_.maxCount - 1) {
                var time = Math.random() * 3;
                Laya.timer.frameOnce(time * 60, this, this.createPeople);
            }
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
                if (DataManager_1.OutCountryData.ins_.outCount < DataManager_1.OutCountryData.ins_.maxCount - 1) {
                    var time = Math.random() * 3;
                    Laya.timer.frameOnce(time * 60, this, this.createPeople);
                }
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
            //进城方法
            this.outPeople_ToDoor();
        }
        else {
            //出城方法
            this.peopleOut();
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
        Laya.Pool.recover(this.type, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXIyLjAvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvQnV5RGlhbG9nLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vbi50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyLnRzIiwic3JjL1NjcmlwdC9DZW50ZXIudHMiLCJzcmMvU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHMiLCJzcmMvU2NyaXB0L09wZW5HYW1lLnRzIiwic3JjL1NjcmlwdC9PcGVuU3RvcnkudHMiLCJzcmMvVG9vbC9Ub29sLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQTtJQUFBO0lBMkRBLENBQUM7SUExREcsY0FBYztJQUNBLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLG1CQUFRLEdBQVksTUFBTSxDQUFDO0lBQ3pDLGNBQWM7SUFDQSx3QkFBYSxHQUFZLFdBQVcsQ0FBQztJQUduRCxzQ0FBc0M7SUFDdEMsUUFBUTtJQUNNLG1CQUFRLEdBQVksQ0FBQyxDQUFDO0lBQ3BDLFFB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b0JBQVUsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0M7U0FDSjtRQUNELElBQUk7YUFDQyxJQUFHLE1BQU0sSUFBRSxFQUFFLElBQUUsTUFBTSxHQUFDLEVBQUUsRUFDN0I7WUFDSSxNQUFNLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsSUFBRyxDQUFDLE1BQU0sRUFDVjtnQkFDSSxNQUFNLEdBQUUsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsb0JBQVUsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0M7U0FDSjtRQUNELElBQUk7YUFDQyxJQUFHLE1BQU0sSUFBRSxFQUFFLElBQUUsTUFBTSxHQUFDLEVBQUUsRUFDN0I7WUFDSSxNQUFNLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsSUFBRyxDQUFDLE1BQU0sRUFDVjtnQkFDSSxNQUFNLEdBQUUsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsb0JBQVUsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0M7U0FDSjtRQUNELEtBQUs7YUFDQSxJQUFHLE1BQU0sSUFBRSxFQUFFLElBQUUsTUFBTSxHQUFDLEVBQUUsRUFDN0I7WUFDSSxNQUFNLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkMsSUFBRyxDQUFDLE1BQU0sRUFDVjtnQkFDSSxNQUFNLEdBQUUsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsb0JBQVUsQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVELHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0M7U0FDSjtRQUNELElBQUk7YUFFSjtZQUNJLE1BQU0sR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxJQUFHLENBQUMsTUFBTSxFQUNWO2dCQUNJLE1BQU0sR0FBRSxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxvQkFBVSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkQscUJBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvQztTQUNKO1FBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUM7UUFDcEIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsQ0FBQztRQUN6QixJQUFHLDRCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyw0QkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxFQUM5RDtZQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtRQUNELDRCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxZQUFZO0lBQ0wsOEJBQU0sR0FBYjtRQUVJLElBQUksT0FBTyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLFFBQU8sT0FBTyxFQUNkO1lBQ0ksS0FBSyxDQUFDO2dCQUNGLE1BQU07Z0JBQ04sSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsR0FBRyxDQUFDO2dCQUN6QixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE1BQU07Z0JBQ04sSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsSUFBSSxDQUFDO2dCQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztnQkFDVCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE1BQU07Z0JBQ04sSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUM7Z0JBQ1osSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsR0FBRyxDQUFDO2dCQUN6QixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsa0VBQWtFO0lBRzNELG9DQUFZLEdBQW5CLFVBQW9CLE1BQU0sRUFBQyxJQUFXO1FBRWxDLFFBQVE7UUFDUixJQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxDQUFDLEVBQzdCO1lBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVELDBDQUEwQztJQUNuQywwQ0FBa0IsR0FBekI7UUFFRyxJQUFJLFlBQVksQ0FBRTtRQUNsQixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBQzFCLElBQUksVUFBVSxHQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM3QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsR0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUNyQztZQUNLLE1BQU0sSUFBSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxTQUFTO0lBQ0Qsb0NBQVksR0FBcEIsVUFBcUIsWUFBWTtRQUU3QixJQUFHLFlBQVksSUFBSSxNQUFNO1lBQUUsT0FBTztRQUNsQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3QyxJQUFJLFdBQVcsR0FBRyxxQkFBVyxDQUFDLElBQUksQ0FBQztRQUNuQyxNQUFNO1FBQ04sUUFBTyxZQUFZLEVBQ25CLEVBQUsscUNBQXFDO1lBQ3RDLEtBQUssb0JBQVUsQ0FBQyxVQUFVO2dCQUN0QixJQUFHLENBQUMsTUFBTTtvQkFBRSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5RCxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLE1BQU07WUFDVixLQUFLLG9CQUFVLENBQUMsVUFBVSxFQUFDLElBQUk7Z0JBQzNCLElBQUcsQ0FBQyxNQUFNO29CQUFFLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlELFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssb0JBQVUsQ0FBQyxVQUFVLEVBQUMsSUFBSTtnQkFDM0IsSUFBRyxDQUFDLE1BQU07b0JBQUUsTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxvQkFBVSxDQUFDLFFBQVEsRUFBQyxJQUFJO2dCQUN6QixJQUFHLENBQUMsTUFBTTtvQkFBRSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5RCxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLE1BQU07WUFDVixLQUFLLG9CQUFVLENBQUMsYUFBYSxFQUFDLEtBQUs7Z0JBQy9CLElBQUcsQ0FBQyxNQUFNO29CQUFFLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlELFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsTUFBTTtTQUNiO1FBQ0QsSUFBRyxDQUFDLE1BQU0sRUFBRTtZQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUU7WUFBQSxPQUFPO1NBQUM7UUFDNUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIscUJBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLFFBQVE7UUFDbkQsSUFBRyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQztZQUFBLE9BQU87U0FBQztRQUM5RixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFFM0IsQ0FBQztJQUVELFVBQVU7SUFDRixpQ0FBUyxHQUFqQixVQUFrQixNQUFNO1FBRXBCLElBQUksU0FBUyxHQUFJLElBQUksQ0FBQyxJQUFvQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRSxJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxHQUFHLENBQUM7UUFDN0MsSUFBSSxLQUFLLENBQUU7UUFDWCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQzdDO1lBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsT0FBTyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25ELEtBQUssR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRCxJQUFHLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFDeEM7Z0JBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JDLHdCQUF3QjtnQkFDeEIsT0FBTzthQUNWO1NBQ0o7SUFDTCxDQUFDO0lBRUQsWUFBWTtJQUNKLGlDQUFTLEdBQWpCLFVBQWtCLFVBQVU7UUFFeEIsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQ3BDO1lBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLG9CQUFVLENBQUMsa0JBQWtCLEdBQUMsR0FBRyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUVuQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN0QixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDcEM7WUFDSSxJQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7Z0JBQUUsTUFBTTtZQUMzQixJQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQ3REO2dCQUNJLE1BQU0sR0FBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ1YsTUFBTTthQUNUO1NBQ0o7UUFDRCxJQUFHLENBQUMsTUFBTSxFQUFFO1lBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUFBLE9BQU87U0FBQztRQUM1Qyx1QkFBdUI7UUFDdkIsV0FBVztRQUNYLElBQUcsS0FBSyxLQUFLLFNBQVMsRUFBQztZQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFBQSxPQUFPO1NBQUM7UUFDdEQsSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQ3BFO1lBQ0ksSUFBRyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVTtnQkFBRSxPQUFPO1lBQ2pFLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLFNBQVM7SUFDdEMsQ0FBQztJQUVELGNBQWM7SUFDUCx1Q0FBZSxHQUF0QjtRQUVJLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUN2RDtZQUNJLE1BQU0sSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDN0M7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQWxRQSxBQWtRQyxJQUFBOzs7OztBQ3hRRDs7R0FFRztBQUNIO0lBTUksVUFBVTtJQUNWLG1CQUFZLEVBQWM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdMLGdCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7Ozs7O0FDakJEOzs7Ozs7R0FNRztBQUNIO0lBR0k7SUFFQSxDQUFDO0lBUUwsd0JBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTs7Ozs7QUNwQkQsZ0dBQWdHO0FBQ2hHLDhDQUF3QztBQUN4Qyw4Q0FBd0M7QUFDeEMsOENBQXdDO0FBQ3hDLDBEQUFvRDtBQUNwRCxnREFBMEM7QUFDMUMsMENBQW9DO0FBQ3BDOztFQUVFO0FBQ0Y7SUFhSTtJQUFjLENBQUM7SUFDUixlQUFJLEdBQVg7UUFDSSxJQUFJLEdBQUcsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUM3QyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsbUJBQVMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxtQkFBUyxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLG9CQUFvQixFQUFDLGtCQUFRLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsK0JBQStCLEVBQUMsbUJBQVMsQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxxQkFBcUIsRUFBQyxtQkFBUyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLGtCQUFrQixFQUFDLGdCQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBckJNLGdCQUFLLEdBQVEsSUFBSSxDQUFDO0lBQ2xCLGlCQUFNLEdBQVEsR0FBRyxDQUFDO0lBQ2xCLG9CQUFTLEdBQVEsYUFBYSxDQUFDO0lBQy9CLHFCQUFVLEdBQVEsTUFBTSxDQUFDO0lBQ3pCLGlCQUFNLEdBQVEsS0FBSyxDQUFDO0lBQ3BCLGlCQUFNLEdBQVEsTUFBTSxDQUFDO0lBQ3JCLHFCQUFVLEdBQUssaUJBQWlCLENBQUM7SUFDakMsb0JBQVMsR0FBUSxFQUFFLENBQUM7SUFDcEIsZ0JBQUssR0FBUyxLQUFLLENBQUM7SUFDcEIsZUFBSSxHQUFTLEtBQUssQ0FBQztJQUNuQix1QkFBWSxHQUFTLEtBQUssQ0FBQztJQUMzQiw0QkFBaUIsR0FBUyxJQUFJLENBQUM7SUFXMUMsaUJBQUM7Q0F2QkQsQUF1QkMsSUFBQTtrQkF2Qm9CLFVBQVU7QUF3Qi9CLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztBQ2xDbEIsMkNBQXNDO0FBQ3RDO0lBQ0M7UUFDQyxnQkFBZ0I7UUFDaEIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEtBQUssRUFBRSxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsS0FBSyxFQUFFLG9CQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxvQkFBVSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxvQkFBVSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxvQkFBVSxDQUFDLGlCQUFpQixDQUFDO1FBRTFELG9EQUFvRDtRQUNwRCxJQUFJLG9CQUFVLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU07WUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5RixJQUFJLG9CQUFVLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNGLElBQUksb0JBQVUsQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBRTdCLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDckksQ0FBQztJQUVELDhCQUFlLEdBQWY7UUFDQywrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELDZCQUFjLEdBQWQ7UUFDQyxZQUFZO1FBQ1osb0JBQVUsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0YsV0FBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUFDRCxPQUFPO0FBQ1AsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7OztBQ2xDWCxtREFBOEM7QUFDOUMsbURBQWtFO0FBQ2xFLHFDQUFnQztBQUNoQyxtREFBOEM7QUFFOUM7OztHQUdHO0FBQ0g7SUFnQ0ksZ0JBQVksSUFBSSxFQUFDLElBQVcsRUFBQyxLQUFLO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsU0FBUztJQUNELHFCQUFJLEdBQVosVUFBYSxJQUFJO1FBRWIsT0FBTztRQUNQLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJO1FBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVztJQUNILDRCQUFXLEdBQW5CO1FBRUksSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1YsQ0FBQyxFQUFDLElBQUk7WUFDTixDQUFDLEVBQUMsQ0FBQztZQUNILEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxTQUFTO1lBQ25DLGNBQWMsRUFBQyxTQUFTO1lBQ3hCLGNBQWMsRUFBRyxDQUFDO1NBQ3JCLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFFcEIsQ0FBQztJQUVELFVBQVU7SUFDSCw4QkFBYSxHQUFwQjtRQUVJLE9BQU87UUFDUCxJQUFHLElBQUksQ0FBQyxLQUFLLEVBQ2I7WUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsNEJBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlFO2FBRUQ7WUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakQ7SUFDTCxDQUFDO0lBRUQsU0FBUztJQUNELDZCQUFZLEdBQXBCLFVBQXFCLElBQUk7UUFFcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsY0FBYztJQUNOLHlCQUFRLEdBQWhCLFVBQWlCLElBQUk7UUFFakIsSUFBSSxNQUFNLEdBQUcsTUFBTSxHQUFDLElBQUksR0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQ1g7WUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELFlBQVk7SUFDTCx1QkFBTSxHQUFiLFVBQWMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFjO1FBRTVCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsa0ZBQWtGO0lBQzFFLDhCQUFhLEdBQXJCO1FBRUksb0JBQW9CO1FBQ3BCLElBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUUsR0FBRyxFQUNqQjtZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzNCO2FBQ0ksSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBRSxJQUFJLEVBQ3ZCO1lBQ0ksSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMzQjthQUVEO1lBQ0ksSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsOEJBQThCO1FBQzlCLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2RCxNQUFNO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELFVBQVU7SUFDRiw2QkFBWSxHQUFwQjtRQUVJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsbUJBQW1CO0lBQ1gsK0JBQWMsR0FBdEI7UUFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLGFBQWE7UUFDYixJQUFJLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHNCQUFzQjtJQUNkLDBCQUFTLEdBQWpCO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBRSxJQUFJLEVBQ2xCO1lBQ0ksSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzVCO2FBRUQ7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUlELFVBQVU7SUFDRiwrQkFBYyxHQUF0QjtRQUVJLE1BQU07UUFDTixJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLElBQUksSUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsRUFDN0M7WUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsNEJBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0IsSUFBRyw0QkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsNEJBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsRUFDOUQ7Z0JBQ0ksSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3hEO1NBQ0o7UUFFRCxPQUFPO1FBQ1AsSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBRSxHQUFHLEVBQ2pCO1lBQ0ksU0FBUztZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDaEM7UUFFRCxRQUFRO1FBQ1IsSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxHQUFHLElBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxHQUFHLEVBQzlEO1lBQ0ksUUFBUTtZQUNSLElBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUM5QjtnQkFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLFFBQVE7Z0JBQ1IsNEJBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQy9CLFFBQVE7Z0JBQ1IscUJBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFVLENBQUMsZUFBZSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxJQUFHLDRCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyw0QkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxFQUM5RDtvQkFDSSxJQUFJLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3hEO2FBQ0o7U0FFSjtJQUNMLENBQUM7SUFFRCxZQUFZO0lBQ1osMEdBQTBHO0lBQ2hHLGdDQUFlLEdBQXpCO1FBR0ksc0JBQXNCO0lBQzFCLENBQUM7SUFFTSwwQkFBUyxHQUFoQixVQUFpQixNQUFrQjtRQUUvQiw0QkFBNEI7UUFDNUIsSUFBSTtRQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLDRCQUE0QjtRQUM1Qiw0QkFBNEI7SUFDaEMsQ0FBQztJQUVELGlCQUFpQjtJQUNQLDRCQUFXLEdBQXJCO1FBRUksSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLGNBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUNsSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQSxVQUFVO0lBQ2xDLENBQUM7SUFFRCxrQkFBa0I7SUFDVix3QkFBTyxHQUFmO1FBRUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsY0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxjQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3hDLElBQUcsY0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN4QyxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFDckM7Z0JBQ0kscUJBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQztZQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUU7WUFBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FBQztRQUNoRixpQ0FBaUM7SUFDckMsQ0FBQztJQUVELFNBQVM7SUFDQyw2QkFBWSxHQUF0QjtRQUVJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFBLGdCQUFnQjtRQUNwQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQSxvQkFBb0I7SUFDMUMsQ0FBQztJQUVELFlBQVk7SUFDRiwyQkFBVSxHQUFwQjtRQUVJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBLGlCQUFpQjtRQUNoRCxJQUFHLEtBQUssR0FBRyxDQUFDLEVBQ1osRUFBQyxVQUFVO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLElBQUk7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxVQUFVO0lBQ0YseUJBQVEsR0FBaEIsVUFBaUIsS0FBSztRQUVsQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLCtDQUErQztJQUNuRCxDQUFDO0lBRUQsVUFBVTtJQUNBLCtCQUFjLEdBQXhCO1FBRUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBRyxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsRUFBRTtZQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQUEsT0FBTztTQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxJQUFJLG9CQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3ZELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLElBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQUMsT0FBTztTQUFDO1FBQ3RELElBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQUMsT0FBTztTQUFDO1FBQ3RELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsb0JBQW9CO0lBQ1osMkJBQVUsR0FBbEI7UUFFSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUMzRCxJQUFHLEVBQUUsR0FBRyxDQUFDO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO2FBQzVCLElBQUksRUFBRSxHQUFHLENBQUM7WUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELHVDQUF1QztJQUM3Qiw0QkFBVyxHQUFyQjtRQUVJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxJQUFJLEdBQXVCLHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5RCxJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEdBQUc7WUFBRSxJQUFJLEdBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3ZELEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUM3QjtZQUNJLElBQUcsY0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQUM7WUFDdEQsSUFBRyxjQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUM7Z0JBQUMsT0FBTyxDQUFDLENBQUM7YUFBQyxDQUFBLHVCQUF1QjtZQUNyRSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQ3pDLEVBQUMsT0FBTztnQkFDSixJQUFHLGNBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUM7b0JBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQztpQkFBQztnQkFDaEUsSUFBRyxjQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzVDLEVBQUMsUUFBUTtvQkFDTCxHQUFHLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFBLFdBQVc7b0JBQ3JCLE9BQU8sR0FBRyxDQUFDO2lCQUNkO2FBQ0o7U0FDSjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELGVBQWU7SUFDTCw2QkFBWSxHQUF0QixVQUF1QixZQUFhO1FBRWhDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUEsUUFBUTtRQUM1QyxJQUFHLFlBQVk7WUFBRSxRQUFRLEdBQUcsWUFBWSxDQUFDOztZQUNwQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQSxnQkFBZ0I7UUFDM0MsSUFBRyxRQUFRLEtBQUssU0FBUyxFQUN6QixFQUFDLFlBQVk7WUFDVCxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUEsQ0FBQSxjQUFjO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUNuQztRQUVELFNBQVM7UUFDVCxJQUFJLEdBQUcsR0FBWSxjQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxJQUFJLEdBQUcsR0FBWSxjQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUVwRCxxRUFBcUU7UUFDckUsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLG9CQUFVLENBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFFLEVBQUMsTUFBTTtTQUNwRDtZQUNJLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxvQkFBVSxDQUFDLGNBQWMsR0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsb0JBQVUsQ0FBQyxjQUFjLEdBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsK0JBQStCO0lBQ25DLENBQUM7SUFFRCxnQkFBZ0I7SUFDTiwrQkFBYyxHQUF4QjtRQUVJLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsY0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakgsQ0FBQztJQUVELHFCQUFxQjtJQUNYLDBCQUFTLEdBQW5CO0lBR0EsQ0FBQztJQUNMLG1GQUFtRjtJQUMvRTs7O01BR0U7SUFDSyx5QkFBUSxHQUFmLFVBQWdCLElBQUk7UUFFWixJQUFHLElBQUksRUFBRTtZQUNMLE1BQU07WUFDTixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQjthQUFJO1lBQ0QsTUFBTTtZQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtJQUNULENBQUM7SUFFRCxZQUFZO0lBQ0osaUNBQWdCLEdBQXhCO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxJQUFJLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksSUFBSSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLEdBQUMsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsWUFBWTtJQUNKLGlDQUFnQixHQUF4QjtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEdBQUcsR0FBQyxHQUFHLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVGLFVBQVU7SUFDQSwwQkFBUyxHQUFuQjtRQUVLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFnQixDQUFDLENBQUMsQ0FBQSxRQUFRO0lBQ2hGLENBQUM7SUFFRCxtQkFBbUI7SUFDVCwyQkFBVSxHQUFwQjtRQUVLLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBZ0IsQ0FBQztRQUNsRSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLFVBQVUsR0FBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0JBQXNCO0lBQ1osNEJBQVcsR0FBckIsVUFBc0IsU0FBUztRQUUxQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFFLFNBQXlCLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxJQUFJLFVBQXVCLENBQUM7UUFDNUIsd0NBQXdDO1FBQ3hDLG1DQUFtQztRQUNuQyxJQUFHLEtBQUssSUFBSSxDQUFDLEVBQ2I7WUFDSSxVQUFVLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsSUFBRyxVQUFVLEVBQ2I7Z0JBQ0ksT0FBTyxVQUFVLENBQUM7YUFDckI7WUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLCtCQUErQjtJQUNwQyxDQUFDO0lBRUEsU0FBUztJQUNDLDhCQUFhLEdBQXZCO1FBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixFQUFFO1FBQ0YsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxnQkFBZ0I7SUFDTiw2QkFBWSxHQUF0QjtRQUVJLE9BQU87UUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVDLFFBQU8sSUFBSSxDQUFDLElBQUksRUFDaEI7WUFDSSxLQUFLLG9CQUFVLENBQUMsVUFBVTtnQkFDdEIsSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQztvQkFDdEMscUJBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BDLE9BQU87WUFDWCxLQUFLLG9CQUFVLENBQUMsVUFBVTtnQkFDdEIsSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQztvQkFDdEMscUJBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BDLE9BQU87WUFDWCxLQUFLLG9CQUFVLENBQUMsVUFBVTtnQkFDdEIsSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQztvQkFDdEMscUJBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BDLE9BQU87WUFDWCxLQUFLLG9CQUFVLENBQUMsYUFBYTtnQkFDekIsSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQztvQkFDdEMscUJBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BDLE9BQU87WUFDWCxLQUFLLG9CQUFVLENBQUMsUUFBUTtnQkFDcEIsSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQztvQkFDdEMscUJBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BDLE9BQU87U0FDZDtRQUNELCtDQUErQztJQUVuRCxDQUFDO0lBQ0wsYUFBQztBQUFELENBamZBLEFBaWZDLElBQUE7Ozs7O0FDMWZELG9DQUErQjtBQUMvQix3Q0FBbUM7QUFDbkMsc0RBQWlEO0FBR2pEO0lBQW9DLDBCQUFNO0lBRXRDLGdCQUFZLElBQUksRUFBQyxJQUFXLEVBQUMsS0FBSztlQUM5QixrQkFBTSxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVTtJQUNBLGdDQUFlLEdBQXpCO1FBRUksNkZBQTZGO1FBQzdGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsaUJBQWlCO0lBQ1AsMEJBQVMsR0FBbkI7UUFFSSxRQUFRO1FBQ1IsSUFBSSxXQUFXLEdBQUcsY0FBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBVyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzlFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLEtBQUssQ0FBQztRQUNWLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxXQUFXLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUNwQztZQUNJLElBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztnQkFBRSxNQUFNO1lBQzVCLElBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxNQUFNLElBQUksV0FBVyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsRUFDeEQ7Z0JBQ0ksS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNiO1NBQ0o7UUFDRCxJQUFHLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQUEsT0FBTztTQUFDO1FBQ3ZELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksVUFBVSxHQUFpQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUUsRUFDcEI7WUFDSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6QyxJQUFHLFVBQVUsS0FBSyxJQUFJLENBQUMsUUFBUTtnQkFBRSxNQUFNO1NBQzFDO1FBQ0QsUUFBTyxLQUFLLEVBQ1osRUFBSywrQkFBK0I7WUFDaEMsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBZ0IsQ0FBQyxDQUFDO2dCQUM1RixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzNCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzNCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFnQixDQUFDLENBQUM7Z0JBQ3hGLE1BQU07U0FDYjtJQUNMLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0F2REEsQUF1REMsQ0F2RG1DLGdCQUFNLEdBdUR6Qzs7Ozs7QUM1REQsb0NBQStCO0FBRS9CO0lBQW9DLDBCQUFNO0lBS3RDLGdCQUFZLElBQUksRUFBQyxJQUFXLEVBQUMsS0FBSztlQUM5QixrQkFBTSxJQUFJLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsbUJBQW1CO0lBQ1osNkJBQVksR0FBbkI7UUFFSSxvQkFBb0I7UUFDcEIsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYTtRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsT0FBTztJQUNBLHlCQUFRLEdBQWY7UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxRQUFRO0lBRVIsUUFBUTtJQUNULFVBQVU7SUFDQSxnQ0FBZSxHQUF6QjtRQUVJLDZGQUE2RjtRQUM3RixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGlCQUFpQjtJQUNQLDBCQUFTLEdBQW5CO1FBRUksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsSUFBSSxVQUFVLEdBQWlCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBRSxFQUNwQjtZQUNJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDLElBQUcsVUFBVSxLQUFLLElBQUksQ0FBQyxRQUFRO2dCQUFFLE1BQU07U0FDMUM7UUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDSixhQUFDO0FBQUQsQ0E5Q0EsQUE4Q0MsQ0E5Q21DLGdCQUFNLEdBOEN6Qzs7Ozs7QUNoREQ7SUFBb0MsMEJBQVc7SUFFM0M7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0ksSUFBSSxXQUFXLEdBQUcsR0FBRyxHQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLE1BQU07UUFDakYsMkNBQTJDO1FBQzNDLElBQUcsV0FBVyxHQUFHLEdBQUc7WUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQWdCLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUMxRixJQUFJLENBQUMsS0FBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUUsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FaQSxBQVlDLENBWm1DLElBQUksQ0FBQyxNQUFNLEdBWTlDOzs7OztBQ1pELGtFQUE2RDtBQUM3RCxnREFBd0M7QUFDeEMsc0RBQWlEO0FBQ2pELGtEQUE2QztBQUM3QywwREFBcUQ7QUFDckQsc0RBQWlEO0FBQ2pELGtEQUE2QztBQUM3QyxzREFBaUQ7QUFDakQsa0RBQTZDO0FBRzdDOztHQUVHO0FBQ0g7SUFBdUMsNkJBQWM7SUE0QmpEO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUVJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFBLFNBQVM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUEsU0FBUztRQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBQzNCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBLFFBQVE7UUFDekIscUJBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELFdBQVc7SUFDSCxnQ0FBWSxHQUFwQjtRQUVJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLDJCQUFpQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLHVCQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxtQkFBUyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVU7SUFDRiw0QkFBUSxHQUFoQjtRQUVJLG1EQUFtRDtRQUNuRCxzQkFBc0I7UUFDdEIsS0FBSztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVELFlBQVk7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELFFBQVE7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLG9CQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMvRSxRQUFRO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkUsUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLFNBQVM7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLG9CQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNuRixTQUFTO1FBQ1QsMkZBQTJGO1FBQzNGLFFBQVE7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLG9CQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsVUFBVTtJQUNGLGlDQUFhLEdBQXJCO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUEsTUFBTTtRQUNsRiwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCwyQ0FBMkM7SUFFM0MsVUFBVTtJQUNGLDJCQUFPLEdBQWY7UUFFSSxJQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDOUIsRUFBQyxJQUFJO1lBQ0QscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7YUFFRCxFQUFDLElBQUk7WUFDRCxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCxRQUFRO0lBQ0EsNkJBQVMsR0FBakI7SUFHQSxDQUFDO0lBRUQsUUFBUTtJQUNBLDRCQUFRLEdBQWhCO0lBR0EsQ0FBQztJQUVELFFBQVE7SUFDQSw2QkFBUyxHQUFqQjtRQUVJLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDeEIsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDbEI7WUFDRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMxRCw2REFBNkQ7WUFDekQsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBSSxDQUFDLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxVQUFVO0lBQ0YsNkJBQVMsR0FBakI7UUFFSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQsVUFBVTtJQUNGLDJCQUFPLEdBQWY7UUFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUdELGVBQWU7SUFDUCwrQkFBVyxHQUFuQixVQUFvQixJQUFJO1FBRXBCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxZQUFZO0lBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXFCRztJQUVILDRDQUE0QztJQUM1QyxZQUFZO0lBQ0wsZ0NBQVksR0FBbkI7SUFHQSxDQUFDO0lBRUQsWUFBWTtJQUNMLGtDQUFjLEdBQXJCO0lBR0EsQ0FBQztJQUVELFVBQVU7SUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FtQ0c7SUFFSCxVQUFVO0lBQ0gsaUNBQWEsR0FBcEIsVUFBcUIsS0FBWTtJQUdqQyxDQUFDO0lBRUQsVUFBVTtJQUNILGlDQUFhLEdBQXBCLFVBQXFCLEtBQVk7SUFHakMsQ0FBQztJQUVELDJCQUEyQjtJQUMzQixXQUFXO0lBQ0osK0JBQVcsR0FBbEI7SUFHQSxDQUFDO0lBQ0QsNENBQTRDO0lBQzVDLFlBQVk7SUFDSiw2QkFBUyxHQUFqQjtRQUVJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQSxVQUFVO1FBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFBLE9BQU87SUFDbkQsQ0FBQztJQUdELHFEQUFxRDtJQUNyRDs7O1VBR007SUFDRSxnQ0FBWSxHQUFwQjtRQUVJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksV0FBVyxHQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDO1FBQ25DLElBQUksRUFBRSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBRyxLQUFLO1FBQ3JDLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQSxPQUFPO1FBQ2hELElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQSxPQUFPO1FBQ2hELElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQSxRQUFRO1FBQzlDLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQSxPQUFPO1FBQzdDLElBQUksUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFBLGVBQWU7UUFDL0QsSUFBRyxXQUFXLEdBQUcsTUFBTSxFQUN2QjtZQUNJLElBQUk7WUFDSixJQUFHLElBQUksQ0FBQyxjQUFjLElBQUksUUFBUSxHQUFDLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxFQUN6RDtnQkFDSSxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQzthQUMzQjtTQUNKO1FBQ0QsSUFBRyxVQUFVLEdBQUcsTUFBTSxFQUN0QjtZQUNJLGNBQWM7WUFDZCxJQUFHLElBQUksQ0FBQyxhQUFhLElBQUksUUFBUSxHQUFDLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztnQkFDeEQsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztRQUVELElBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLEVBQzNCO1lBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDeEIsV0FBVyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQSxPQUFPO1lBQ3BDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUEsT0FBTztZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixLQUFJLElBQUksQ0FBQyxHQUFFLENBQUMsRUFBQyxDQUFDLEdBQUMsV0FBVyxHQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxNQUFNO2FBQzVDO2dCQUNJLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7WUFDRCxLQUFJLElBQUksQ0FBQyxHQUFFLENBQUMsRUFBQyxDQUFDLEdBQUMsVUFBVSxHQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxNQUFNO2FBQzNDO2dCQUNJLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakM7U0FDSjtJQUNMLENBQUM7SUFFTCxnQkFBQztBQUFELENBcFRBLEFBb1RDLENBcFRzQyxjQUFFLENBQUMsV0FBVyxHQW9UcEQ7Ozs7O0FDbFVEO0lBQXNDLDRCQUFXO0lBQzdDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtJQUdBLENBQUM7SUFHRCwwQkFBTyxHQUFQO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsZUFBQztBQUFELENBZkEsQUFlQyxDQWZxQyxJQUFJLENBQUMsTUFBTSxHQWVoRDs7Ozs7QUNmRDtJQUF1Qyw2QkFBVztJQUM5QztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELDRCQUFRLEdBQVI7SUFHQSxDQUFDO0lBR0QsMkJBQU8sR0FBUDtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FmQSxBQWVDLENBZnNDLElBQUksQ0FBQyxNQUFNLEdBZWpEOzs7OztBQ2ZELG1EQUE4QztBQUU5QztJQUFBO0lBcUtBLENBQUM7SUFwS0csU0FBUztJQUNLLGlCQUFZLEdBQTFCLFVBQTJCLEVBQVMsRUFBQyxFQUFTLEVBQUMsRUFBUyxFQUFDLEVBQVMsRUFBQyxTQUFTO1FBRXhFLFFBQVE7UUFDUixJQUFJLENBQUMsR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxRQUFRO1FBQ1IsSUFBSSxDQUFDLEdBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN6QixRQUFRO1FBQ1IsSUFBSSxDQUFDLEdBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUV6QixJQUFHLFNBQVMsSUFBSSxLQUFLLEVBQ3JCO1lBQ0ksaUNBQWlDO1lBQ2pDLE9BQU8sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7YUFDSSxJQUFHLFNBQVMsSUFBSSxLQUFLLEVBQzFCO1lBQ0ksaUNBQWlDO1lBQ2pDLE9BQU8sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEI7YUFFRDtZQUNJLDJDQUEyQztZQUMzQyxPQUFPLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVELHdFQUF3RTtJQUMxRCxtQkFBYyxHQUE1QixVQUE2QixPQUFPLEVBQUMsT0FBTztRQUV4QyxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUUsT0FBTyxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUM7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixPQUFPLElBQUksQ0FBQztTQUNmO2FBQ0c7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXJCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUdhLHNCQUFpQixHQUEvQixVQUFnQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBRS9CLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksUUFBUSxDQUFDO1FBQ2IsSUFBRyxHQUFHLElBQUUsQ0FBQyxJQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUM7WUFDYixRQUFRLEdBQUUsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUM7U0FDM0M7YUFBSyxJQUFHLEdBQUcsR0FBQyxDQUFDLElBQUUsR0FBRyxJQUFFLENBQUMsRUFBQztZQUNuQixRQUFRLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBQyxFQUFFLENBQUM7U0FDMUM7YUFBSyxJQUFHLEdBQUcsSUFBRSxDQUFDLElBQUUsR0FBRyxHQUFDLENBQUMsRUFBQztZQUNuQixRQUFRLEdBQUMsRUFBRSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUM7YUFBSyxJQUFHLEdBQUcsR0FBQyxDQUFDLElBQUUsR0FBRyxJQUFFLENBQUMsRUFBQztZQUNuQixRQUFRLEdBQUUsRUFBRSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFHLENBQUMsR0FBRyxDQUFDO1lBQUUsUUFBUSxJQUFJLEdBQUcsQ0FBQztRQUMxQixPQUFPLFFBQVEsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O01BRUU7SUFDWSxnQkFBVyxHQUF6QixVQUEwQixFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFO1FBRWpDLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksUUFBUSxDQUFDO1FBQ2IsSUFBRyxHQUFHLElBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBQyxDQUFDLEVBQUM7WUFDaEIsUUFBUSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsSUFBRyxHQUFHLEdBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBRSxDQUFDLEVBQUM7WUFDaEIsUUFBUSxHQUFHLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUcsR0FBRyxHQUFFLENBQUMsSUFBSSxHQUFHLElBQUUsQ0FBQyxFQUNuQjtZQUNJLFFBQVEsR0FBRyxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUM7UUFDRCxJQUFHLEdBQUcsSUFBRyxDQUFDLElBQUksR0FBRyxHQUFDLENBQUMsRUFDbkI7WUFDSSxRQUFRLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBR0Q7OztPQUdHO0lBQ1csZ0JBQVcsR0FBekIsVUFBMEIsUUFBUSxFQUFDLFVBQVU7UUFFekMsSUFBSSxDQUFDLENBQUU7UUFDUCxJQUFJLEtBQUssQ0FBQztRQUNWLElBQUcsUUFBUSxHQUFHLENBQUMsRUFDZjtZQUNJLFFBQVEsSUFBSSxHQUFHLEdBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsRUFDN0I7WUFDSSxRQUFRLElBQUksR0FBRyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBRyxVQUFVLElBQUksS0FBSyxFQUN0QjtZQUNJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsR0FBRyxJQUFJLFFBQVEsSUFBRSxHQUFHLENBQUM7Z0JBQUcsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3hGLGdDQUFnQztTQUNuQzthQUVEO1lBQ0ksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUcsQ0FBQyxRQUFRLEdBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxHQUFHLElBQUksUUFBUSxJQUFFLEdBQUcsQ0FBQztnQkFBRSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDeEYsZ0NBQWdDO1NBQ25DO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUNEOzs7OztPQUtHO0lBQ1csb0JBQWUsR0FBN0IsVUFBOEIsQ0FBSyxFQUFDLENBQUs7UUFFckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVEOzs7OztTQUtLO0lBQ1MsY0FBUyxHQUF2QixVQUF3QixFQUFFLEVBQUMsS0FBSztRQUU1QixJQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQy9CLElBQUksU0FBUyxHQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUMsQ0FBQztRQUM5RCxJQUFJLFVBQVUsR0FBUSxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLENBQUM7UUFDL0QsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUcsV0FBVyxJQUFJLFlBQVk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUM1QyxPQUFRLEtBQUssQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDWSxtQkFBYyxHQUE1QixVQUE2QixHQUFHO1FBRTVCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFBLE1BQU07UUFDMUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDOUI7WUFDSSxNQUFNLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FyS0EsQUFxS0MsSUFBQTs7Ozs7QUNyS0QsSUFBTyxNQUFNLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMxQixJQUFPLEtBQUssR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3hCLElBQWMsRUFBRSxDQThFZjtBQTlFRCxXQUFjLEVBQUU7SUFDWjtRQUEyQix5QkFBTTtRQU83QjttQkFBZSxpQkFBTztRQUFBLENBQUM7UUFDdkIsOEJBQWMsR0FBZDtZQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQVpBLEFBWUMsQ0FaMEIsTUFBTSxHQVloQztJQVpZLFFBQUssUUFZakIsQ0FBQTtJQUNEO1FBQWlDLCtCQUFLO1FBMERsQzttQkFBZSxpQkFBTztRQUFBLENBQUM7UUFDdkIsb0NBQWMsR0FBZDtZQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0EvREEsQUErREMsQ0EvRGdDLEtBQUssR0ErRHJDO0lBL0RZLGNBQVcsY0ErRHZCLENBQUE7QUFDTCxDQUFDLEVBOUVhLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQThFZjtBQUNELFdBQWMsRUFBRTtJQUFDLElBQUEsR0FBRyxDQVluQjtJQVpnQixXQUFBLEdBQUc7UUFDaEI7WUFBcUMsbUNBQUs7WUFLdEM7dUJBQWUsaUJBQU87WUFBQSxDQUFDO1lBQ3ZCLHdDQUFjLEdBQWQ7Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN4QyxDQUFDO1lBQ0wsc0JBQUM7UUFBRCxDQVZBLEFBVUMsQ0FWb0MsS0FBSyxHQVV6QztRQVZZLG1CQUFlLGtCQVUzQixDQUFBO0lBQ0wsQ0FBQyxFQVpnQixHQUFHLEdBQUgsTUFBRyxLQUFILE1BQUcsUUFZbkI7QUFBRCxDQUFDLEVBWmEsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBWWYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZyB7XG4gICAgLyoq5Lq656eNIC0g5pmu6YCa5Lq6ICovXG4gICAgcHVibGljIHN0YXRpYyBDT01NT05fTUFOIDogc3RyaW5nID0gXCJjb21tb25cIjtcbiAgICAvKirkurrnp40gLSDlsI/lgbcgKi9cbiAgICBwdWJsaWMgc3RhdGljIFJPQkJFUl9NQU4gOiBzdHJpbmcgPSBcInJvYmJlclwiO1xuICAgIC8qKuS6uuenjSAtIOWcn+WMqiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQkFORElUX01BTiA6IHN0cmluZyA9IFwiYmFuZGl0XCI7XG4gICAgLyoq5Lq656eNIC0g5piO5pifICovXG4gICAgcHVibGljIHN0YXRpYyBTVEFSX01BTiA6IHN0cmluZyA9IFwic3RhclwiO1xuICAgIC8qKuS6uuenjSAtIOenkeWtpuWutiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU0NJRU5USVNUX01BTiA6IHN0cmluZyA9IFwic2NpZW50aXN0XCI7XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeW7uuetkVxuICAgIC8qKuWMu+mZoiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSE9TUElUQUwgOiBudW1iZXIgPSAxO1xuICAgIC8qKuWGm+mYnyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQVJNWSA6IG51bWJlciA9IDI7XG4gICAgLyoq5Yac5Zy6ICovXG4gICAgcHVibGljIHN0YXRpYyBGQVJNOiBudW1iZXIgPSAzO1xuICAgIC8qKuenkeaKgCAqL1xuICAgIHB1YmxpYyBzdGF0aWMgVEVDSE5PTE9HWTogbnVtYmVyID0gNDtcbiAgICAvKirkuovku7bmiL8g5paw6Ze75oi/ICovXG4gICAgcHVibGljIHN0YXRpYyBFVkVOVF9IT1VTRTogbnVtYmVyID0gNTtcbiAgICAvKirnmoflrqsgKi9cbiAgICBwdWJsaWMgc3RhdGljIFBBTEFDRTogbnVtYmVyID0gNjtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mo4DmtYvngrnnmoTpl7Tot51cbiAgICAvKirmo4DmtYvngrnpl7Tot50gKi9cbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfRElDIDogbnVtYmVyID0gNTtcbiAgICAvKirpgJ/luqYgKi9cbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfU1BFRUQgOiBudW1iZXIgPSAwLjQ7XG4gICAgLyoq5peL6L2s6KeS5bqm5YGP56e7ICovXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX1JPIDogbnVtYmVyID0gMTA7XG4gICAgLyoq5Lq657G755Sf5Lqn6Ze06ZqUUyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUEVSU09OX0NSRUFURV9USU1FIDogbnVtYmVyID0gMTtcbiAgICAvKirnm5HmtYvngrnmlbDph48qL1xuICAgIHB1YmxpYyBzdGF0aWMgVEVTVF9QT0lOVF9DT1VOVCA6IG51bWJlciA9IDY7XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeS4u+WAvFxuICAgIC8qKuWbveWutui0ouaUvyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9NT05FWSA6IHN0cmluZyA9IFwibW9uZXlcIjtcbiAgICAvKirlm73lrrbkurrlj6MgKi9cbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUE9QVUxBVElPTiA6IHN0cmluZz1cInBvcHVsYXRpb25cIjtcbiAgICAvKirlm73lrrblubjnpo/luqYgKi9cbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUE9QVUxBUlNVUFBPUlQgOiBzdHJpbmcgPSBcInBvcHVsYXJTdXBwb3J0XCI7XG4gICAgLyoq5Zu95a6256eR5oqAICovXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX1RFQ0hOT0xPR1kgOiBzdHJpbmcgPSBcInRlY2hub2xvZ3lcIjtcbiAgICAvKirlm73lrrblqIHmnJsgKi9cbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUFJFU1RJR0UgOiBzdHJpbmcgPSBcInByZXN0aWdlXCI7XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWFtuS7llxuICAgIC8qKuS4gOWkqeaXtumXtC/liIbpkp8gKi9cbiAgICBwdWJsaWMgc3RhdGljIE9ORV9EQVk6bnVtYmVyPTEwKjYwO1xuICAgIC8qKueyrumjn+eUn+S6p+eOh+aNoumSseS4tOeVjOWAvCAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UPTEuNTtcbiAgICAvKirpkrHmjaLnsq7po5/msYfnjocgKi9cbiAgICBwdWJsaWMgc3RhdGljIE1PTkVZVE9HUkFJTj0yO1xufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xyXG4vKipcclxuICog6LSt5Lmw5qGGIOmAmueUqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV5RGlhbG9nIGV4dGVuZHMgdWkuQnV5VUl7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndpZHRoPTgwMDtcclxuICAgICAgICB0aGlzLmhlaWdodD00MDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTp2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKuazqOWGjOS6i+S7tiAqL1xyXG4gICAgcHJpdmF0ZSBhZGRFdmVudHMoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idG5fYnV5Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmJ1eUNsaWNrKTtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZUNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirngrnlh7votK3kubAgKi9cclxuICAgIHByaXZhdGUgYnV5Q2xpY2soKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGN1cnJcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC8qKueCueWHu+WFs+mXrSAqL1xyXG4gICAgcHJpdmF0ZSBjbG9zZUNsaWNrKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0gXHJcbn0iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcbmltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1BlcmZlYi9QZW9wbGVcIjtcblxuLyoqXG4gKiDmlbDmja7kuK3lv4Mg5omA5pyJ55qE5pWw5o2uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlEYXRhe1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zXyA6IENvdW50cnlEYXRhID0gbmV3IENvdW50cnlEYXRhKCk7XG4gICAgLyoqKioqKioqKioqKioq5Li75pWw5o2uKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoq5Zu95a626LSi5pS/ICovXG4gICAgcHVibGljIG1vbmV5IDogbnVtYmVyID0gMTAwMDA7XG4gICAgLyoq5Zu95a625Lq65Y+jICovXG4gICAgcHVibGljIHBvcHVsYXRpb24gOiBudW1iZXI9MTAwO1xuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xuICAgIHB1YmxpYyBwb3B1bGFyU3VwcG9ydCA6IG51bWJlciA9IDUwO1xuICAgIC8qKuWbveWutuenkeaKgCAqL1xuICAgIHB1YmxpYyB0ZWNobm9sb2d5IDogbnVtYmVyID0gMTA7XG4gICAgLyoq5Zu95a625aOw5pybICovXG4gICAgcHVibGljIHByZXN0aWdlIDogbnVtYmVyID0gOTA7XG5cbiAgICAvKioqKioqKioqKioqKioq5Ymv5pWw5o2uKioqKioqKioqKioqKioqKiovXG4gICAgLy8tLS0tLS0tLeS4u+aVsOaNruW9seWTjVxuICAgIC8v5Zu65a6a5pSv5Ye6XG4gICAgLyoq5Yab6LS5ICovXG4gICAgcHVibGljIGFybXlDb3N0IDogbnVtYmVyID0gMTAwO1xuICAgIC8qKuaUv+W6nOi0ueeUqCAqL1xuICAgIHB1YmxpYyBnb3Zlcm5Db3N0IDogbnVtYmVyID0gMTAwO1xuICAgIC8qKuenkeaKgOi0ueeUqCAqL1xuICAgIHB1YmxpYyB0ZWNobm9sb2d5Q29zdCA6IG51bWJlciA9IDEwMDtcbiAgICAvKirnqI7mlLbnjocgKi9cbiAgICBwdWJsaWMgdGF4IDogbnVtYmVyID0gMC4wNTtcblxuICAgIC8v5Y+Y5Yqo546HXG4gICAgLyoq57Ku6aOf5raI6ICX6YePICjkurrlnYfmtojogJfph48pICovXG4gICAgcHVibGljIGdyYWluQ29zdCA6IG51bWJlciA9IDE7XG4gICAgLyoq57Ku6aOf5Lqn6YePICjkurrlnYfkuqfph48pKi9cbiAgICBwdWJsaWMgZ3JhaW5BZGQgOiBudW1iZXIgPSAxO1xuICAgIC8qKueyrumjn+W6k+WtmCAqL1xuICAgIHB1YmxpYyBncmFpblN0b2NrOm51bWJlcj0wO1xuICAgIC8qKuWGm+i0ueWHj+WwkeeOhyAqL1xuICAgIHB1YmxpYyBhcm15UGVyY2VudDpudW1iZXI9MC4xO1xuICAgIC8qKkdEUCDmjKPpkrHog73lipvvvIzmr4/kurrmr4/lpKnog73kuqflpJrlsJHpkrEgKi9cbiAgICBwdWJsaWMgR0RQIDogbnVtYmVyID0gMTA7XG5cblxuICAgIC8qKui/m+WfjuaVsCDnm67moIflgLwybWluKi9cbiAgICBwdWJsaWMgZW50ZXJQZW9wbGUgOiBudW1iZXIgPSA1MDtcbiAgICAvKirlh7rln47mlbAg55uu5qCH5YC8Mm1pbiovXG4gICAgcHVibGljIGV4aXRQZW9wbGUgOiBudW1iZXIgPSA1MDtcbiAgICAvKirkurrlj6Pmr5TkvovmlbAg6L+b5Z+O5pWwL+WHuuWfjuaVsCAybWluKi9cbiAgICBwdWJsaWMgcGVyY2VudCA6IG51bWJlciA9IDE7XG4gICAgLyoq5Z+O5aSW5Lq65Y+j5pWw57uEKi9cbiAgICBwdWJsaWMgYXJyX291dFBlb3BsZSA6IEFycmF5PFBlb3BsZT47XG4gICAgLyoq5Z+O5YaF5Lq65Y+j5pWw57uEICovXG4gICAgcHVibGljIGFycl9pblBlb3BsZSA6IEFycmF5PFBlb3BsZT47XG4gICAgLyoq5Ye65Z+O5Lq65Y+jIOWunumZheWAvC8ybWluICovXG4gICAgcHVibGljIF9vdXRlclBlb3BsZSA6IG51bWJlcjtcbiAgICAvKirov5vpl6jkurrlj6Mg5a6e6ZmF5YC8LzJtaW4gKi9cbiAgICBwdWJsaWMgX2lubmVyUGVvcGxlIDogbnVtYmVyO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pmu6YCa5Lq65Y+j5Y2g5q+UXG4gICAgLyoqMC3ljLvnlJ8gMS3orablr58gMi3llYbkurogLTPmuLjmiYvlpb3pl7IgLTTlhpzmsJEqL1xuICAgIHB1YmxpYyBhcnJfcGVyc29uUGVyY2VudE5hbWUgOiBBcnJheTxzdHJpbmc+ID0gW1wicGVyY2VudERvY3RvclwiLFwicGVyY2VudFBvbGljXCIsXCJwZXJjZW50U2hvcGVyXCIsXCJwZXJjZW50Tm90aGluZ1wiLFwicGVyY2VudEZhcm1lclwiXTtcbiAgICAvKirmma7pgJrkurrkuK0g5Yy755Sf55qE5Y2g5q+UKi9cbiAgICBwdWJsaWMgcGVyY2VudERvY3RvciA6IG51bWJlciA9IDAuMDI7XG4gICAgLyoq5pmu6YCa5Lq656eNIOitpuWvn+WNoOavlCAqL1xuICAgIHB1YmxpYyBwZXJjZW50UG9saWMgOiBudW1iZXIgPSAwLjAzO1xuICAgIC8qKuaZrumAmuS6uuenjSDllYbkurrnmoTljaDmr5QgKi9cbiAgICBwdWJsaWMgcGVyY2VudFNob3BlciA6IG51bWJlciA9IDAuMTU7XG4gICAgLyoq5ri45omL5aW96ZeyICovXG4gICAgcHVibGljIHBlcmNlbnROb3RoaW5nIDogbnVtYmVyID0gMC4xO1xuICAgIC8qKuWGnOawkSAqL1xuICAgIHB1YmxpYyBwZXJjZW50RmFybWVyIDogbnVtYmVyID0gMC43O1xuXG4gICAgLy8tLS0tLS0tLeW9seWTjSDjgJDkuLvmlbDmja7jgJEtLS0tLS0tLS0tLS0tLS0tXG4gICAgXG5cblxuXG5cblxuXG4gICAgLy8tLS0tLS0tLeS6i+S7tuaVsOaNrlxuICAgIC8qKueYn+eWqyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8qL1xuICAgIHB1YmxpYyBwZXN0IDogbnVtYmVyID0gMDtcbiAgICAvKirlnLDpnIcgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfICovXG4gICAgcHVibGljIG5hdHVyYWxEaXNhc3RlciA6IG51bWJlciA9IDA7XG4gICAgLyoq5oiY5LmxICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyovXG4gICAgcHVibGljIHdhciA6IG51bWJlciA9IDA7XG5cbiAgICAvLy0tLS0tLS0t6IGM5Lia5Lq65pWwXG4gICAgcHVibGljIGFycl9QZW9wbGUgOiBBcnJheTxzdHJpbmc+ID0gW1wiY29tbW9uXCIsXCJzY2llbnRpc3RcIixcInN0YXJcIixcImJhbmRpdFwiLFwicm9iYmVyXCJdO1xuICAgIC8qKuaZrumAmuS6uiBBICDmma7pgJrkurrkuK3kvJrkuqfnlJ/ljLvnlJ8g6K2m5a+fIOetieato+W4uOiBjOS4miovXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDk1O1xuICAgIC8qKuenkeWtpuWutiBTU1MqL1xuICAgIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAxO1xuICAgIC8qKuaYjuaYnyBTUyovXG4gICAgcHVibGljIHN0YXIgOiBudW1iZXIgPSAyO1xuICAgIC8qKuWcn+WMqiAtUyAqL1xuICAgIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAxO1xuICAgIC8qKuebl+i0vCAtQSAqL1xuICAgIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAxO1xuICAgICAgICAvLyAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xuICAgICAgICAvLyBwdWJsaWMgY29tbW9uIDogbnVtYmVyID0gMTtcbiAgICAgICAgLy8gLyoq56eR5a2m5a62IFNTUyovXG4gICAgICAgIC8vIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAwO1xuICAgICAgICAvLyAvKirmmI7mmJ8gU1MqL1xuICAgICAgICAvLyBwdWJsaWMgc3RhciA6IG51bWJlciA9IDA7XG4gICAgICAgIC8vIC8qKuWcn+WMqiAtUyAqL1xuICAgICAgICAvLyBwdWJsaWMgYmFuZGl0IDogbnVtYmVyID0gMDtcbiAgICAgICAgLy8gLyoq55uX6LS8IC1BICovXG4gICAgICAgIC8vIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAwO1xuICAgIC8qKuW3sueUn+aIkOeahOS6uuenjSAgMCDmma7pgJogICAx56eR5a2m5a62ICAy5piO5pifIDPlnJ/ljKogNOebl+i0vCovXG4gICAgcHVibGljIGFscmVhZHlDcmVhdGUgOiBBcnJheTxudW1iZXI+ID0gWzAsMCwwLDAsMF07XG5cbiAgICAvLy0tLS0tLS0t5Z+O6ZeoXG4gICAgLyoq6Zeo5piv5ZCm5omT5byAKi9cbiAgICBwdWJsaWMgaXNEb29yT3BlbiA6IGJvb2xlYW49dHJ1ZTtcbiAgICAvKirnrZvmn6Xog73lipsg5ZCv5Yqo54m55q6K6Zeo55qE5pe25YCZICDnrZvmn6Xog73lipvnlJ/mlYgqL1xuICAgIHB1YmxpYyBwcmVwYXJhdGlvbiA6IG51bWJlciA9IDAuNTtcbiAgICAvKirnibnmrorpl6gg562b5p+lIDEt6Ziy5q2i6L+b5YWlICAgMi3pgoDor7fov5vlhaUqL1xuICAgIC8vIHB1YmxpYyBrZWVwU2VsZWN0IDogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3ljLrln59cbiAgICAvKirlopnlhoXljLrln5/liJLliIYgKi9cbiAgICBwdWJsaWMgYXJyX0xlZnRBcmVhIDogQXJyYXk8YW55PjtcbiAgICBwdWJsaWMgYXJyX1JpZ2h0QXJlYSA6IEFycmF5PGFueT47XG4gICAgXG4gICAgLy8tLS0tLS0tLS0tLS0tLS3ls7DlgLxcbiAgICAvKirlm73lrrblubjnpo/luqbls7DlgLwgKi9cbiAgICBwdWJsaWMgcG9wdWxhclN1cHBvcnRNYXggOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq5Zu95a6256eR5oqA5bOw5YC8ICovXG4gICAgcHVibGljIHRlY2hub2xvZ3lNYXggOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq5Zu95a625aOw5pyb5bOw5YC8ICovXG4gICAgcHVibGljIHByZXN0aWdlTWF4IDogbnVtYmVyID0gMTAwO1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgICAgICB0aGlzLmFycl9pblBlb3BsZSA9IG5ldyBBcnJheTxQZW9wbGU+KCk7XG4gICAgICAgIHRoaXMuYXJyX291dFBlb3BsZSA9IG5ldyBBcnJheTxQZW9wbGU+KCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq6I635Y+W5Yy65Z+fICovXG4gICAgcHVibGljIHNldEFyZWEodmlldyA6IExheWEuTm9kZSkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSB2aWV3Ll9jaGlsZHJlbjtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxjaGlsZHJlbi5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihjaGlsZHJlbltpXS5uYW1lID09IFwicGFsYWNlXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2goY2hpbGRyZW5baV0pOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoY2hpbGRyZW5baV0ueDw5ODEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXJyX0xlZnRBcmVhLnB1c2godmlldy5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJzcF93YWxsXCIpKTtcbiAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2godmlldy5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJzcF93YWxsXCIpKTtcbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurrnmoTpmo/mnLrnp7vliqjpgJ/luqYgKi9cbiAgICBwdWJsaWMgZ2V0TW92ZVNwZWVkKCkgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiBHYW1lQ29uZmlnLlRFU1RfUE9JTlRfU1BFRUQqKE1hdGgucmFuZG9tKCkrMC41KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bkurrlj6PmtYHph48gOlxuICAgICAqIHJldHVybiDov5vlhaUgLyDlh7rljrtcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0X1Blb3BsZU1vdmUoKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyY2VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bkurrnp43mr5TkvotcbiAgICAgKiBAcGFyYW0gdHlwZSDkurrnp41cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0X1Byb2Zlc3Npb25QZXJjZW50KHR5cGU6c3RyaW5nKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgaWYodGhpc1t0eXBlXSA9PT0gdW5kZWZpbmVkKSBjb25zb2xlLmxvZyhcIuS4jeWtmOWcqOivpeS6uuenjVwiKTtcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpc1t0eXBlXS8odGhpcy5wb3B1bGF0aW9uKTtcbiAgICB9XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLee7k+eul1xuICAgIC8qKuiuvue9ruS6lOWkp+S4u+WAvOe7k+eulyAqL1xuICAgIHB1YmxpYyBzZXRfTWFpbkRhdGEodHlwZTpzdHJpbmcsY291bnQ6bnVtYmVyKTp2b2lkXG4gICAge1xuICAgICAgICBzd2l0Y2godHlwZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBcIm1vbmV5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5tb25leSs9Y291bnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicG9wdWxhdGlvblwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbis9Y291bnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicG9wdWxhclN1cHBvcnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXJTdXBwb3J0Kz1jb3VudDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZWNobm9sb2d5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZWNobm9sb2d5Kz1jb3VudDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcmVzdGlnZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMucHJlc3RpZ2UrPWNvdW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsX01haW5EYXRhKHR5cGUsY291bnQpO1xuICAgIH1cblxuICAgIFxuICAgIHB1YmxpYyBjYWxfTWFpbkRhdGEodHlwZTpzdHJpbmcsY291bnQ6bnVtYmVyKTp2b2lkXG4gICAge1xuICAgICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuTUFJTl9NT05FWTpcbiAgICAgICAgICAgIC8vL1RPIERPXG4gICAgICAgIH1cbiAgICAgICAgLy/otKLmlL8g5b2x5ZON57uT566XXG4gICAgICAgIHRoaXMubW9uZXlJbmZsdWVuY2UoKTtcbiAgICAgICAgLy/kurrlj6Mg5b2x5ZON57uT566XXG4gICAgICAgIHRoaXMucG9wdWxhclN1cHBvcnRJbmZsdWVuY2UoKTtcbiAgICAgICAgLy/lubjnpo/luqYg5b2x5ZON57uT566XXG4gICAgICAgIHRoaXMucG9wdWxhclN1cHBvcnRJbmZsdWVuY2UoKTtcbiAgICAgICAgLy/np5HmioAg5b2x5ZON57uT566XXG4gICAgICAgIHRoaXMudGVjaG5vbG9neUluZmx1ZW5jZSgpO1xuICAgICAgICAvL+WogeacmyDlvbHlk43nu5PnrpdcbiAgICAgICAgdGhpcy5wcmVzdGlnZUluZmx1ZW5jZSgpO1xuICAgIH0gICAgXG5cbiAgICAvKirotKLmlL/nu5Pnrpcg6LSi5pS/5b2x5ZONKi9cbiAgICBwcml2YXRlIG1vbmV5SW5mbHVlbmNlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBcbiAgICAvKirlubjnpo/luqYg5b2x5ZON57uT566XKi9cbiAgICBwcml2YXRlIHBvcHVsYXJTdXBwb3J0SW5mbHVlbmNlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirkurrlj6Mg5b2x5ZON57uT566XKi9cbiAgICBwcml2YXRlIHBvcHVsYXRpb25JbmZsdWVuY2UoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuenkeaKgCDlvbHlk43nu5PnrpcqL1xuICAgIHByaXZhdGUgdGVjaG5vbG9neUluZmx1ZW5jZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5aiB5pybIOW9seWTjee7k+eulyovXG4gICAgcHJpdmF0ZSBwcmVzdGlnZUluZmx1ZW5jZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5YWs5byPXG4gICAgLyoq56iz5a6a5pSv5Ye6ICovXG4gICAgcHJpdmF0ZSBtb25leV9TdGVhZHlDb3N0KCk6dm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5tb25leS09dGhpcy5hcm15Q29zdCooMS10aGlzLmFybXlQZXJjZW50KSt0aGlzLmdvdmVybkNvc3QrdGhpcy50ZWNobm9sb2d5Q29zdDtcbiAgICB9XG5cbiAgICAvKirnsq7po5/mtojogJcgKi9cbiAgICBwcml2YXRlIHBvcHVsYXRpb25fR3JhaW5Db3N0KCk6dm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICAvKirmlLnlj5gg6L+b44CB5Ye6IOebruagh+S6uuaVsCBAaXNvdXQ65piv5ZCm5piv5Ye65Z+OICBAY291bnTvvJrmlLnlj5jnm67moIflgLwqL1xuICAgIHB1YmxpYyBzZXRJbk91dFRhcmdldChpc091dCxjb3VudCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZihpc091dCkgdGhpcy5leGl0UGVvcGxlICs9IGNvdW50O1xuICAgICAgICBlbHNlIHRoaXMuZW50ZXJQZW9wbGUgKz0gY291bnQ7XG4gICAgfVxuXG4gICAgLyoq5pS55Y+YIOi/m+OAgeWHuiDnm67moIfkurrmlbAgQGlzb3V0OuaYr+WQpuaYr+WHuuWfjiAgQGNvdW5077ya5pS55Y+Y5a6e6ZmF5YC8Ki9cbiAgICBwdWJsaWMgc2V0SW5PdXRUcnV0aChpc091dCxjb3VudCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZihpc091dCkgdGhpcy5fb3V0ZXJQZW9wbGUgKz0gY291bnQ7XG4gICAgICAgIGVsc2UgdGhpcy5faW5uZXJQZW9wbGUgKz0gY291bnQ7XG4gICAgfVxuICAgIFxuICAgIC8qKumAmuefpeS6uuWPo+WHuuWfjiBAdHlwZSDvvJog6L+b5oiQdHVyZSAg5Ye65Z+OIGZhbHNlKi9cbiAgICBwdWJsaWMgcGVvcGxlR29PdXQodHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgYXJyIDtcbiAgICAgICAgaWYodHlwZSkgYXJyID0gdGhpcy5hcnJfb3V0UGVvcGxlO1xuICAgICAgICAgICAgZWxzZSBhcnIgPSB0aGlzLmFycl9pblBlb3BsZTtcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoYXJyLmxlbmd0aCpyYW5kb20pO1xuICAgICAgICBpZihpbmRleD4wKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZighYXJyW2luZGV4XS5pc0dvKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFycltpbmRleF0ucGVvcGxlR28odHlwZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHRoaXMucGVvcGxlR29PdXQodHlwZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCLpmo/mnLrlh7rplJlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLyoq5Ye65Z+O6Zeo55u45YWz5pON5L2cICovXG4gICAgcHVibGljIGdvT3V0KHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5fb3V0ZXJQZW9wbGUrKzsvL+WunumZheS6uuaVsOWKoOS4gFxuICAgICAgICB0aGlzLnBvcHVsYXRpb24tLTsvL+aAu+S6uuWPoyAtLVxuICAgICAgICBpZih0aGlzW3R5cGVdKSB0aGlzW3R5cGVdLS07XG4gICAgfVxufVxuXG4vKirlpJbln44gKi9cbmV4cG9ydCBjbGFzcyBPdXRDb3VudHJ5RGF0YXtcbiAgICBwdWJsaWMgc3RhdGljIGluc18gOiBPdXRDb3VudHJ5RGF0YSA9IG5ldyBPdXRDb3VudHJ5RGF0YSgpO1xuICAgIC8qKioqKioqKioqKioqKuS4u+aVsOaNrioqKioqKioqKioqKioqKioqKioqL1xuICAgIC8qKuacgOWkp+WkluWfjuWuuee6s+aVsOmHjyAqL1xuICAgIHB1YmxpYyBtYXhDb3VudCA6IG51bWJlcj01MDtcbiAgICAvKirlvZPliY3lpJbln47kurrlj6PmlbAgKi9cbiAgICBwdWJsaWMgb3V0Q291bnQ6bnVtYmVyPTA7XG4gICAgLyoq5Lq65rue55WZ5pe26Ze0ICovXG4gICAgcHVibGljIGxpbWl0VGltZTpudW1iZXI9NTA7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKirmma7pgJrkuroqL1xuICAgIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSAwLjg7XG4gICAgLyoq56eR5a2m5a62IFNTUyovXG4gICAgcHVibGljIHNjaWVudGlzdCA6IG51bWJlciA9IDAuMDM7XG4gICAgLyoq5piO5pifIFNTKi9cbiAgICBwdWJsaWMgc3RhciA6IG51bWJlciA9IDAuMDE7XG4gICAgLyoq5Zyf5YyqIC1TICovXG4gICAgcHVibGljIGJhbmRpdCA6IG51bWJlciA9IDAuMDY7XG4gICAgLyoq55uX6LS8IC1BICovXG4gICAgcHVibGljIHJvYmJlciA6IG51bWJlciA9IDAuMTtcbiAgICAvKirlj5jph4/lkI0gKi9cbiAgICBwdWJsaWMgYXJyX1Blb3BsZSA6IEFycmF5PHN0cmluZz4gPSBbXCJjb21tb25cIixcInNjaWVudGlzdFwiLFwic3RhclwiLFwiYmFuZGl0XCIsXCJyb2JiZXJcIl07XG4gICAgXG4gICAgLyoq6I635Y+W5Yy66Ze05pWw57uEIDAsMC44LDAuODMsMC44NCwwLjksMSovXG4gICAgcHVibGljIGdldFBlcmNlbnRBcmVhKCk6QXJyYXk8bnVtYmVyPlxuICAgIHtcbiAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXG4gICAgICAgbGV0IGFycl9QZW9wbGUgPSB0aGlzLmFycl9QZW9wbGU7XG4gICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgZm9yKGxldCBpID0gMDtpPGFycl9QZW9wbGUubGVuZ3RoO2krKylcbiAgICAgICB7XG4gICAgICAgICAgICBudW1iZXIgKz0gdGhpc1thcnJfUGVvcGxlW2ldXTtcbiAgICAgICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xuICAgICAgIH1cbiAgICAgICByZXR1cm4gYXJyUGVyY2VudDtcbiAgICB9XG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XG5cbi8qKlxuICog5raI5oGv5qGGIOmAmueUqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNc2dEaWFsb2cgZXh0ZW5kcyB1aS5EaWEuQ3VycmVudERpYWxvZ1VJe1xuICAgIC8qKuexu+WeiyAqL1xuICAgIHByaXZhdGUgdHlwZSA6IG51bWJlciA7XG4gICAgLyoq57yT5YqoICovXG4gICAgLy8gcHJpdmF0ZSBzaG93VHdlZW4gOiBMYXlhLlR3ZWVuO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoq5Yid5aeL5YyWICovXG4gICAgcHVibGljIHNob3dNc2codHlwZTpudW1iZXIpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5idG5fY2xvc2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuY2xvc2VEaWFsb2cpOyAgICAgICAgXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2hhbmdlSW1nKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlVGl0bGUoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VXb3JkKCk7IFxuICAgICAgICB0aGlzLm1zZ0JvZHkueCA9ICg5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKS0xMTYzKS8yOyAgICAgICBcbiAgICAgICAgdGhpcy5tc2dCb2R5LnkgPSAtNTU3OyAgICAgICBcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLm1zZ0JvZHkse3k6MH0sMjAwLExheWEuRWFzZS5iYWNrT3V0KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5o2i5Zu+ICovXG4gICAgcHJpdmF0ZSBjaGFuZ2VJbWcoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5o2i5qCH6aKYICovXG4gICAgcHJpdmF0ZSBjaGFuZ2VUaXRsZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5paH5a2X6L295YWlICovXG4gICAgcHJpdmF0ZSBjaGFuZ2VXb3JkKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirlhbPpl60gKi9cbiAgICBwdWJsaWMgY2xvc2VEaWFsb2coKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9mZihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZURpYWxvZyk7ICAgICAgICAgICAgICAgIFxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eTotNTU3fSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQsTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLHRoaXMuY2xvc2VPdmVyKSk7ICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3NlT3ZlcigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7ICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVyZmViL1Blb3BsZVwiO1xuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgQ291bnRyeURhdGEsIHsgT3V0Q291bnRyeURhdGEgfSBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IENvbW1vbiBmcm9tXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvQ29tbW9uXCJcbmltcG9ydCBSb2JiZXIgZnJvbVwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL1JvYmJlclwiXG4vKipcbiAqIOS6uiDnrqHnkIZcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlTWFuYWdlciB7XG4gICAgLyoq6KeG5Zu+Ki9cbiAgICBwcml2YXRlIHZpZXc6YW55OyBcbiAgICAvKirmqKrlnZDmoIcgKi9cbiAgICBwcml2YXRlIFg6bnVtYmVyO1xuICAgIC8qKue6teWdkOaghyAqL1xuICAgIHByaXZhdGUgWTpudW1iZXI7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lopnlhoVcbiAgICAvKirnlJ/miJDpl7TpmpTorqHml7blmaggKi9cbiAgICBwcml2YXRlIGNvdW50VGltZSA6IG51bWJlciA9IDA7XG4gICAgLyoq55Sf5Lqn5pe26Ze06Ze06ZqUICovXG4gICAgcHJpdmF0ZSBjb3VudFRpbWVfIDogbnVtYmVyID0gNTAwO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgY29uc3RydWN0b3IodmlldylcbiAgICB7XG4gICAgICAgIHRoaXMudmlldz12aWV3O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW8gOWQr+eUn+aIkOW3peWOglxuICAgICAqIOeUn+aIkOS6uiBcbiAgICAgKiDnlJ/miJDkurrnmoTkvY3nva5cbiAgICAgKiDnlJ/kuqfkurrnmoR0eXBlIO+8miDln47ph4zkurov5Z+O5aSW5Lq6IOmAu+i+keWIhuW8gFxuICAgICAqL1xuICAgIC8qKuW8gOWQr+eUn+aIkOW3peWOgiAqL1xuICAgIHB1YmxpYyBvcGVuUGVvcGxlRmFjdG9yeSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUoKTtcbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurogKi9cbiAgICBwdWJsaWMgY3JlYXRlUGVvcGxlKCk6dm9pZFxuICAgIHtcbiAgICAgICAgbGV0IHBlb3BsZTtcbiAgICAgICAgLyoq55Sf5oiQ5LiN5ZCM5Lq656eN55qE5Yeg546HICovXG4gICAgICAgIGxldCByYW5kb209TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMCk7XG4gICAgICAgIC8v5pmu6YCa5Lq6XG4gICAgICAgIGlmKHJhbmRvbT49MCYmcmFuZG9tPDgwKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwiY29tbW9uXCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBDb21tb24odGhpcy52aWV3LEdhbWVDb25maWcuQ09NTU9OX01BTix0cnVlKTtcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5bCP5YG3XG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj04MCYmcmFuZG9tPDkwKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwicm9iYmVyXCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuUk9CQkVSX01BTix0cnVlKTtcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5Zyf5YyqXG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj05MCYmcmFuZG9tPDk2KVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwiYmFuZGl0XCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuQkFORElUX01BTix0cnVlKTtcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v56eR5a2m5a62XG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj05NiYmcmFuZG9tPDk5KVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwic2NpZW50aXN0XCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuU0NJRU5USVNUX01BTix0cnVlKTtcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5piO5pifXG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInN0YXJcIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFJvYmJlcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5TVEFSX01BTix0cnVlKTtcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBlb3BsZS52aXNpYmxlPXRydWU7XG4gICAgICAgIHBlb3BsZS5pc091dCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0UG9zKCk7XG4gICAgICAgIHBlb3BsZS5zZXRQb3ModGhpcy5YLHRoaXMuWSk7XG4gICAgICAgIHBlb3BsZS5vcGVuQmVoYXZpb3VyKCk7XG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMztcbiAgICAgICAgaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNyZWF0ZVBlb3BsZSk7XG4gICAgICAgIH1cbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudCsrO1xuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uueahOS9jee9riAqL1xuICAgIHB1YmxpYyBnZXRQb3MoKTphbnlcbiAgICB7XG4gICAgICAgIGxldCB0eXBlTnVtPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozKTtcbiAgICAgICAgc3dpdGNoKHR5cGVOdW0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAvL+WcqEHovrnnlYxcbiAgICAgICAgICAgICAgICB0aGlzLlg9MDtcbiAgICAgICAgICAgICAgICB0aGlzLlk9TWF0aC5yYW5kb20oKSozOTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy/lnKhC6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPU1hdGgucmFuZG9tKCkqMjAwMDtcbiAgICAgICAgICAgICAgICB0aGlzLlk9MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAvL+WcqEPovrnnlYxcbiAgICAgICAgICAgICAgICB0aGlzLlg9MjAwMDtcbiAgICAgICAgICAgICAgICB0aGlzLlk9TWF0aC5yYW5kb20oKSozOTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKueVjOmZkOajgOa1iyAqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIFxuICAgIFxuICAgIHB1YmxpYyBjaGVja1BlcmNlbnQocGVvcGxlLHR5cGU6c3RyaW5nKTp2b2lkXG4gICAge1xuICAgICAgICAvL+a1geWKqOavlOS+i+ajgOa1i1xuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLnBlcmNlbnQ8MSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirliJvlu7rlopnlhoXkurogKi9cbiAgICBwdWJsaWMgY3JlYXRlUGVvcGxlX0lubmVyKCkgOiB2b2lkXG4gICAge1xuICAgICAgIGxldCByYW5kb21TdHJpbmcgO1xuICAgICAgIGxldCBhcnJQZXJjZW50ID0gW107Ly/nlJ/kuqfmr5TkvotcbiAgICAgICBsZXQgYXJyX1Blb3BsZSA9IENvdW50cnlEYXRhLmluc18uYXJyX1Blb3BsZTtcbiAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyX1Blb3BsZS5sZW5ndGg7aSsrKVxuICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlciArPSBDb3VudHJ5RGF0YS5pbnNfLmdldF9Qcm9mZXNzaW9uUGVyY2VudChhcnJfUGVvcGxlW2ldKTtcbiAgICAgICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xuICAgICAgIH1cbiAgICAgICBjb25zb2xlLmxvZyhhcnJQZXJjZW50KTtcbiAgICAgICBMYXlhLnRpbWVyLmxvb3AoMSx0aGlzLHRoaXMuZ2V0UmFuZG9tLFthcnJQZXJjZW50XSk7XG4gICAgfVxuXG4gICAgLyoq55Sf5Lqn5Lq6ICovXG4gICAgcHJpdmF0ZSBjcmVhdGVfSW5uZXIocmFuZG9tU3RyaW5nKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKHJhbmRvbVN0cmluZyA9PSBcIm5vbmVcIikgcmV0dXJuO1xuICAgICAgICBsZXQgcGVvcGxlID0gTGF5YS5Qb29sLmdldEl0ZW0ocmFuZG9tU3RyaW5nKTsgIFxuICAgICAgICBsZXQgY291bnRyeURhdGEgPSBDb3VudHJ5RGF0YS5pbnNfO1xuICAgICAgICAvL+eUn+S6p+S6uuenjVxuICAgICAgICBzd2l0Y2gocmFuZG9tU3RyaW5nKVxuICAgICAgICB7ICAgIC8qKuW3sueUn+aIkOeahOS6uuenjSAgMCDmma7pgJogICAx56eR5a2m5a62ICAy5piO5pifIDPlnJ/ljKogNOebl+i0vCovXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuQ09NTU9OX01BTjogICBcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbMF0rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5ST0JCRVJfTUFOOi8v55uX6LS8XG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzRdKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuQkFORElUX01BTjovL+Wcn+WMqlxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVszXSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNUQVJfTUFOOi8v5piO5pifXG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzJdKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuU0NJRU5USVNUX01BTjovL+enkeWtpuWutlxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVsxXSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmKCFwZW9wbGUpIHtjb25zb2xlLmxvZyhcIuaWsOW7uuS6uuWksei0pe+8gVwiKSA7cmV0dXJuO31cbiAgICAgICAgcGVvcGxlLmlzT3V0ID0gZmFsc2U7XG4gICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX2luUGVvcGxlLnB1c2gocGVvcGxlKTsvL+WKoOWFpee7tOaKpOaVsOe7hFxuICAgICAgICBpZihwZW9wbGUgPT09IHVuZGVmaW5lZCB8fCBwZW9wbGUgPT09IG51bGwpIHtjb25zb2xlLmxvZyhcIuayoeacieeUn+aIkOS6uuenje+8geenjeexuzpcIiArIHJhbmRvbVN0cmluZyk7cmV0dXJuO31cbiAgICAgICAgdGhpcy5jcmVhdGVQb3MocGVvcGxlKTtcbiAgICAgICAgcGVvcGxlLnNwZWNpYWxEbygpO1xuICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirnlJ/kuqfkvY3nva4gKi9cbiAgICBwcml2YXRlIGNyZWF0ZVBvcyhwZW9wbGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGhvdXNlTm9kZSA9ICh0aGlzLnZpZXcgYXMgTGF5YS5TcHJpdGUpLmdldENoaWxkQnlOYW1lKCdob3VzZScpO1xuICAgICAgICBsZXQgcGVyY2VudCA9IGhvdXNlTm9kZS5fY2hpbGRyZW4ubGVuZ3RoLzEwMDtcbiAgICAgICAgbGV0IGhvdXNlIDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTwgaG91c2VOb2RlLl9jaGlsZHJlbi5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnBlcmNlbnQqMTAwKTtcbiAgICAgICAgICAgIGhvdXNlID0gaG91c2VOb2RlLmdldENoaWxkQnlOYW1lKFwiaG91c2VfXCIrbnVtYmVyKTtcbiAgICAgICAgICAgIGlmKGhvdXNlICE9PSB1bmRlZmluZWQgJiYgaG91c2UgIT09IG51bGwpICBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUuc2V0UG9zKGhvdXNlLngsaG91c2UueSxob3VzZSk7ICAgXG4gICAgICAgICAgICAgICAgLy8gcGVvcGxlLnBlb3BsZUludG8oKTsgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq6I635Y+W6ZqP5py65Lq656eNICovXG4gICAgcHJpdmF0ZSBnZXRSYW5kb20oYXJyUGVyY2VudCkgOiBzdHJpbmdcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuY291bnRUaW1lIDw9IHRoaXMuY291bnRUaW1lXylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb3VudFRpbWUrKztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvdW50VGltZV8gPSBNYXRoLnJhbmRvbSgpKkdhbWVDb25maWcuUEVSU09OX0NSRUFURV9USU1FKjEwMDtcbiAgICAgICAgY29uc29sZS5sb2coXCLnlJ/miJDpl7TpmpQ6XCIgKyBNYXRoLmZsb29yKHRoaXMuY291bnRUaW1lLzEwMCkgKyBcInNcIik7XG4gICAgICAgIHRoaXMuY291bnRUaW1lID0gMDtcblxuICAgICAgICBsZXQgbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgbGV0IHBlcnNvbiA9IFwiXCI7XG4gICAgICAgIGxldCBpbmRleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhcnJQZXJjZW50Lmxlbmd0aCA7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZighYXJyUGVyY2VudFtpKzFdKSBicmVhaztcbiAgICAgICAgICAgIGlmKGFyclBlcmNlbnRbaV0gPD0gbnVtYmVyICYmIG51bWJlciA8IGFyclBlcmNlbnRbaSsxXSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZXJzb24gPSBDb3VudHJ5RGF0YS5pbnNfLmFycl9QZW9wbGVbaV07XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpOyBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZighcGVyc29uKSB7Y29uc29sZS5sb2coXCLkurrnp43pmo/mnLrlpLHotKXvvIFcIik7cmV0dXJuO31cbiAgICAgICAgLy8gY29uc29sZS5sb2cocGVyc29uKTtcbiAgICAgICAgLy/liKTmlq3kurrmmK/lkKbov5jog73nlJ/miJBcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCl7Y29uc29sZS5sb2coXCLmpoLnjoforqHnrpflh7rplJlcIik7cmV0dXJuO31cbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlW2luZGV4XSA9PSBDb3VudHJ5RGF0YS5pbnNfW3BlcnNvbl0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0QWxyZWFkQ3JlYXRlKCkgPT0gQ291bnRyeURhdGEuaW5zXy5wb3B1bGF0aW9uKSByZXR1cm47XG4gICAgICAgICAgICBwZXJzb24gPSB0aGlzLmdldFJhbmRvbShhcnJQZXJjZW50KTsgICAgIFxuICAgICAgICB9XG4gICAgICAgdGhpcy5jcmVhdGVfSW5uZXIocGVyc29uKTsvL+eUn+S6p+S6uuenjSAgIFxuICAgIH1cblxuICAgIC8q6I635Y+W5bey55Sf5oiQ5Lq65Y+j55qE5pWw6YePKi9cbiAgICBwdWJsaWMgZ2V0QWxyZWFkQ3JlYXRlKCkgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xuICAgICAgICBmb3IobGV0IGk9MDtpPENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZS5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXIgKz1Db3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbaV1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH1cbn0iLCJpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcblxuLyoqXG4gKiBVSeeuoeeQhuWZqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXJ7XG4gICAgLyoq5pWw5o2u566h55CG5ZmoICovXG4gICAgLy8gcHVibGljIHN0YXRpYyBkYXRhTWFuYWdlciA6IERhdGFNYW5hZ2VyO1xuICAgIC8qKlVJIHNwcml0ZSAqL1xuICAgIHByaXZhdGUgVWlTcHJpdGUgOiBMYXlhLlNwcml0ZTtcblxuICAgIC8qKui9veWFpeaVsOaNriAqL1xuICAgIGNvbnN0cnVjdG9yKHVpOkxheWEuU3ByaXRlKXtcbiAgICAgICAgdGhpcy5VaVNwcml0ZSA9IHVpO1xuICAgIH1cbiAgICBcbiAgICBcbn0iLCIvKipcbiAqIOS6i+S7tuWPkeeUn+euoeeQhuWZqFxuICogXG4gKiBcbiAqIOeUn+aIkOS6i+S7tuOAgVxuICog5b2x5ZON5Lq65Y+j5rWB5YqoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmxkRXZlbnRNYW5hZ2VyIHtcblxuXG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cblxuICAgIC8qKuS6i+S7tumihOaKpeWIsCAqL1xuICAgIFxuXG4gICAgLyoq5LqL5Lu25Y+R55Sf5ZmoICovXG5cbiAgICBcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IEJ1eURpYWxvZyBmcm9tIFwiLi9Db3JlL0J1eURpYWxvZ1wiXG5pbXBvcnQgTXNnRGlhbG9nIGZyb20gXCIuL0NvcmUvTXNnRGlhbG9nXCJcbmltcG9ydCBPcGVuR2FtZSBmcm9tIFwiLi9TY3JpcHQvT3BlbkdhbWVcIlxuaW1wb3J0IEdhbWVXb3JsZCBmcm9tIFwiLi9TY3JpcHQvR2FtZVdvcmxkL0dhbWVXb3JsZFwiXG5pbXBvcnQgT3BlblN0b3J5IGZyb20gXCIuL1NjcmlwdC9PcGVuU3RvcnlcIlxuaW1wb3J0IENlbnRlciBmcm9tIFwiLi9TY3JpcHQvQ2VudGVyXCJcclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTE0NDA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj05MDA7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cImZpeGVkaGVpZ2h0XCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cInRvcFwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJsZWZ0XCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJTdGFydEdhbWUuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcIkNvcmUvQnV5RGlhbG9nLnRzXCIsQnV5RGlhbG9nKTtcbiAgICAgICAgcmVnKFwiQ29yZS9Nc2dEaWFsb2cudHNcIixNc2dEaWFsb2cpO1xuICAgICAgICByZWcoXCJTY3JpcHQvT3BlbkdhbWUudHNcIixPcGVuR2FtZSk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzXCIsR2FtZVdvcmxkKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5TdG9yeS50c1wiLE9wZW5TdG9yeSk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9DZW50ZXIudHNcIixDZW50ZXIpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcbmNsYXNzIE1haW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcblxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWU7XG5cblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XG5cdH1cblxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xuXHR9XG5cblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cblx0XHRHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XG5cdH1cbn1cbi8v5r+A5rS75ZCv5Yqo57G7XG5uZXcgTWFpbigpO1xuIiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgQ291bnRyeURhdGEsIHsgT3V0Q291bnRyeURhdGEgfSBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IFRvb2wgZnJvbSBcIi4uL1Rvb2wvVG9vbFwiO1xuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XG5cbi8qKlxuICogXG4gKiDkurrnp43niLbnsbtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlIHtcbiAgICAvKirlnLrmma8qL1xuICAgIHByb3RlY3RlZCB2aWV3IDogTGF5YS5TcHJpdGU7XG4gICAgLyoq57K+54G1ICovXG4gICAgcHVibGljIHNwIDogTGF5YS5TcHJpdGU7XG4gICAgLyoq5qiq5Z2Q5qCH56e75Yqo6YCf5bqmICovXG4gICAgcHJpdmF0ZSBkaXJYOm51bWJlcjtcbiAgICAvKirnurXlnZDmoIfnp7vliqjpgJ/luqYgKi9cbiAgICBwcml2YXRlIGRpclk6bnVtYmVyO1xuICAgIFxuICAgIC8qKioqKioqKioqKioqKioqKioq5aKZ5YaFICoqKioqKioqKioqKi9cbiAgICAvKirlopnlhoXkurrov5jmmK/lopnlpJbkurogKi9cbiAgICBwdWJsaWMgaXNPdXQgOiBib29sZWFuO1xuICAgIC8qKuS6uuWxnuaApyAqL1xuICAgIHB1YmxpYyB0eXBlOnN0cmluZztcbiAgICAvKirkurrnmoTmnJ3lkJEgKi9cbiAgICBwdWJsaWMgdG93YXJkIDogYW55O1xuICAgIC8qKumdouWJjeeahDXkuKrmo4DmtYvngrkgKi9cbiAgICBwdWJsaWMgdG93YXJkUG9zIDogQXJyYXk8YW55PjtcbiAgICAvKirkurrnmoTnp7vliqjnm67moIfngrkgKi9cbiAgICBwdWJsaWMgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlO1xuICAgIC8qKuWHuueUn+eCuSAqL1xuICAgIHB1YmxpYyBib3JuTm9kZSA6IExheWEuU3ByaXRlO1xuICAgIC8qKuaYr+WQpuiiq+WPrOWUpCAqL1xuICAgIHB1YmxpYyBpc0dvIDogbnVtYmVyO1xuICAgIC8qKumAkuW9kuWBnOatouWPmOmHjyAqL1xuICAgIHByaXZhdGUgc3RvcERpIDogbnVtYmVyO1xuICAgIC8qKuWPguiAg+mAn+W6piAqL1xuICAgIHByaXZhdGUgc3BlZWQgOiBudW1iZXI7XG5cblxuXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuaXNPdXQgPSBpc091dDtcbiAgICAgICAgdGhpcy50eXBlPXR5cGU7XG4gICAgICAgIHRoaXMuaW5pdCh0eXBlKTtcbiAgICB9XG5cbiAgICAvKirliJ3lp4vljJYgKi9cbiAgICBwcml2YXRlIGluaXQodHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+aVsOaNruWIneWni+WMllxuICAgICAgICB0aGlzLnNldERhdGFJbml0KCk7XG4gICAgICAgIC8v5Yib5bu6XG4gICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKHR5cGUpO1xuICAgIH1cblxuICAgIC8qKuaVsOaNruWIneWni+WMliAqL1xuICAgIHByaXZhdGUgc2V0RGF0YUluaXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBDb3VudHJ5RGF0YS5pbnNfLmdldE1vdmVTcGVlZCgpO1xuICAgICAgICB0aGlzLnRvd2FyZCA9IHtcbiAgICAgICAgICAgIHg6MTAwMCxcbiAgICAgICAgICAgIHk6MCxcbiAgICAgICAgICAgIHNwZWVkOnRoaXMuc3BlZWQscm90YXRpb246dW5kZWZpbmVkLFxuICAgICAgICAgICAgdGFyZ2V0Um90YXRpb246dW5kZWZpbmVkLFxuICAgICAgICAgICAgcm90YXRpb25DaGFuZ2UgOiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudG93YXJkUG9zID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuc3RvcERpID0gMDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5byA5aeL6KGM5YqoICovXG4gICAgcHVibGljIG9wZW5CZWhhdmlvdXIoKTp2b2lkXG4gICAge1xuICAgICAgICAvL+i/kOihjOS6humAu+i+kVxuICAgICAgICBpZih0aGlzLmlzT3V0KSBcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zT3V0KCk7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZShPdXRDb3VudHJ5RGF0YS5pbnNfLmxpbWl0VGltZSo2MCx0aGlzLHRoaXMubGltaXRUaW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGVvcGxlX1Bvc0lubmVyKCk7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmxvb3AoMTYsdGhpcyx0aGlzLnBlb3BsZV9Qb3NJbm5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurogKi9cbiAgICBwcml2YXRlIGNyZWF0ZVBlb3BsZSh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgICB0aGlzLmNyZWF0ZVNwKHR5cGUpO1xuICAgIH1cblxuICAgIC8qKuWIm+W7ulNwcml0ZSAqL1xuICAgIHByaXZhdGUgY3JlYXRlU3AodHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgaW1nVXJsID0gXCJtYXAvXCIrdHlwZStcIi5wbmdcIjtcbiAgICAgICAgaWYoIXRoaXMuc3ApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3AgPSBuZXcgTGF5YS5TcHJpdGUoKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnNwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwLmxvYWRJbWFnZShpbWdVcmwpO1xuICAgICAgICB0aGlzLnNwLnNpemUoMTIsMTIpO1xuICAgICAgICB0aGlzLnNwLnBpdm90KHRoaXMuc3Aud2lkdGgvMix0aGlzLnNwLmhlaWdodC8yKTsgICAgICAgIFxuICAgIH1cblxuICAgIC8qKuiuvue9ruWIneWni+S9jee9riAqL1xuICAgIHB1YmxpYyBzZXRQb3MoeCx5LHNwOkxheWEuU3ByaXRlKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNwLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwLnggPSB4O1xuICAgICAgICB0aGlzLnNwLnkgPSB5O1xuICAgICAgICB0aGlzLmJvcm5Ob2RlID0gc3A7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWimeWkluS6uuihjOWKqOmAu+i+kSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHJpdmF0ZSBwZW9wbGVfUG9zT3V0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+e7meS6iOmaj+acuuaWueWQke+8jOaWueWQkeeUqCgtMX4xKeihqOekulxuICAgICAgICBpZih0aGlzLnNwLng8PTkwMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuc3AueD49MTEwMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kaXJYPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKSoyLTE7XG4gICAgICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKSoyLTE7XG4gICAgICAgIH1cbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7TvvIzlnKjmraTml7bpl7TlhoXnp7vliqgs6ZqP5py65pe26Ze05ZyoKDIsOCnkuK3pgInmi6lcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo2KzI7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNsb3NlTW92ZVRpbWVyKTtcbiAgICAgICAgLy/lvIDlkK/np7vliqhcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcbiAgICB9XG4gICAgXG4gICAgLyoq5Y2V5L2N5bin56e75YqoKi9cbiAgICBwcml2YXRlIG1vdmVEaXN0YW5jZSgpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3AueCs9dGhpcy5kaXJYO1xuICAgICAgICB0aGlzLnNwLnkrPXRoaXMuZGlyWTtcbiAgICB9XG5cbiAgICAvKirlhbPpl63np7vliqjlrprml7blmajvvIzlvIDlkK/ljp/lnLDkvJHmga8qL1xuICAgIHByaXZhdGUgY2xvc2VNb3ZlVGltZXIoKTp2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xuICAgICAgICAvL+S8keaBr+aXtumXtOe7k+adn+WQjue7p+e7reenu+WKqFxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjYrMjtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMucGVvcGxlX1Bvc091dCk7XG4gICAgfVxuICAgIFxuICAgIC8qKua7nueVmeaXtumXtO+8jOiLpei2hei/h+aXtumXtO+8jOWwseemu+W8gOWkluWfjiAqL1xuICAgIHByaXZhdGUgbGltaXRUaW1lKCk6dm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcbiAgICAgICAgaWYodGhpcy5zcC54PD0xMDAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLmRpclk9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XG4gICAgfVxuXG4gICAgXG5cbiAgICAvKirnorDmkp7mo4DmtYsgKi9cbiAgICBwcml2YXRlIGNoZWNrTGltaXRfT3V0KCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/ovrnnlYzmo4DmtYtcbiAgICAgICAgaWYodGhpcy5zcC54PC01fHx0aGlzLnNwLng+MjAwNXx8dGhpcy5zcC55PC01KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUoKTtcbiAgICAgICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQtLTtcbiAgICAgICAgICAgIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQ8T3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMztcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy/miqTln47msrPmo4DmtYtcbiAgICAgICAgaWYodGhpcy5zcC55Pj0zOTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6YeN5paw57uZ5LiA5Liq5L2N56e7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/ln47pl6jljLrln5/mo4DmtYtcbiAgICAgICAgaWYodGhpcy5zcC54PjkzMiYmdGhpcy5zcC54PDEwNjgmJnRoaXMuc3AueT4zNTAmJnRoaXMuc3AueTwzOTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5Z+O6Zeo5piv5ZCm5omT5byAXG4gICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7XG4gICAgICAgICAgICAgICAgLy/ln47lpJbkurrlj6MtMVxuICAgICAgICAgICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQtLTtcbiAgICAgICAgICAgICAgICAvL+WbveWutuS6uuWPoysxXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5jYWxfTWFpbkRhdGEoR2FtZUNvbmZpZy5NQUlOX1BPUFVMQVRJT04sMSk7XG4gICAgICAgICAgICAgICAgaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjM7XG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNyZWF0ZVBlb3BsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirlopnlhoXkurrooYzliqjpgLvovpEqL1xuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWimeWGheS6uuihjOWKqOmAu+i+kSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHByb3RlY3RlZCBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcbiAgICB7XG5cbiAgICAgICAgLy8gdGhpcy50b3dlZFRvTW92ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRUcmFnZXQodGFyZ2V0OkxheWEuU3ByaXRlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIHRoaXMudGFyZ2V0Tm9kZSA9IHRhcmdldDtcbiAgICAgICAgLy/mtYvor5VcbiAgICAgICAgdGhpcy50YXJnZXROb2RlID0gdGFyZ2V0O1xuICAgICAgICAvLyB0aGlzLnRvd2FyZC54ID0gdGFyZ2V0Lng7XG4gICAgICAgIC8vIHRoaXMudG93YXJkLnkgPSB0YXJnZXQueTtcbiAgICB9XG5cbiAgICAvKip0b3dlcmTovazljJbmiJDkvY3np7sgKi9cbiAgICBwcm90ZWN0ZWQgdG93ZWRUb01vdmUoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKCF0aGlzLnRvd2FyZC5yb3RhdGlvbikgdGhpcy50b3dhcmQucm90YXRpb24gPSBUb29sLnJvdGF0ZVJvcGVQb2ludF8yKHRoaXMuc3AueCx0aGlzLnNwLnksdGhpcy50YXJnZXROb2RlLngsdGhpcy50YXJnZXROb2RlLnkpOztcbiAgICAgICAgdGhpcy5wZW9wbGVUb3dlcmQoKTsvL+iuqeebruagh+acneWQkeiuoeeul+aVsFxuICAgIH1cblxuICAgIC8qKuacneWQkSAgdG93ZXJk56e75YqoICovXG4gICAgcHJpdmF0ZSBwb3NNb3ZlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNwLnggKz0gdGhpcy50b3dhcmQuc3BlZWQqVG9vbC5yb3RhdGlvblNldCh0aGlzLnRvd2FyZC5yb3RhdGlvbixcInNpblwiKTtcbiAgICAgICAgdGhpcy5zcC55ICs9IHRoaXMudG93YXJkLnNwZWVkKlRvb2wucm90YXRpb25TZXQodGhpcy50b3dhcmQucm90YXRpb24sXCJjb3NcIik7XG4gICAgICAgIHRoaXMuc3Aucm90YXRpb24gPSB0aGlzLnRvd2FyZC5yb3RhdGlvbjtcbiAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QodGhpcy50YXJnZXROb2RlLHRoaXMuc3ApKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhcmdldE5vZGUubmFtZSA9PT0gXCJzcF9kb29yXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5nb091dCh0aGlzLnR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zcC54IDwgMCB8fCB0aGlzLnNwLnkgPiA5MDAgfHwgdGhpcy5zcC54ID4gMjAwMCkge3RoaXMuZGVzdG9yeVBlb3BsZSgpO31cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zcC5yb3RhdGlvbik7XG4gICAgfVxuICAgIFxuICAgIC8qKuS6uumdouWQkSAqL1xuICAgIHByb3RlY3RlZCBwZW9wbGVUb3dlcmQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKCk7Ly/ojrflvpfkupTkuKrngrnvvIzmoLnmja7nm67moIflnZDmoIforqHnrpdcbiAgICAgICAgdGhpcy50ZXN0VG93ZXJkKCk7Ly/mo4DmtYvmmK/lkKbnrKblkIjopoHmsYIg5LiN56ym5ZCIICsgLSA1XG4gICAgfVxuXG4gICAgLyoq5qOA5rWL6KGM6LWw5pa55ZCRICovXG4gICAgcHJvdGVjdGVkIHRlc3RUb3dlcmQoKSA6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGxldCBwb3dlciA9IHRoaXMudGVzdENvbGlkZXIoKTsvLyAtMSAwIDEgMiAzIDQgNVxuICAgICAgICBpZihwb3dlciA+IDApXG4gICAgICAgIHsvL+aSnuWIsOS6humcgOimgei9rOaWueWQkVxuICAgICAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2UgPSAwO1xuICAgICAgICAgICAgdGhpcy5zcGVlZEN0cihwb3dlcik7XG4gICAgICAgICAgICB0aGlzLmp1ZGdlTGVmdFJpZ2h0KCk7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucG9zTW92ZSgpOy8v56e75YqoXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maW5kVGFyZ2V0KCk7XG4gICAgICAgIHRoaXMudG93YXJkLnNwZWVkID0gdGhpcy5zcGVlZDsgICAgICBcbiAgICAgICAgdGhpcy5wb3NNb3ZlKCk7Ly/np7vliqggIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKirpgJ/luqbmjqfliLYgKi9cbiAgICBwcml2YXRlIHNwZWVkQ3RyKHBvd2VyKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudG93YXJkLnNwZWVkID0gdGhpcy5zcGVlZCooKHBvd2VyKzEpLyh0aGlzLnRvd2FyZFBvcy5sZW5ndGgrMikpOyBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzcGVlZCA6OlwiICsgdGhpcy50b3dhcmQuc3BlZWQpO1xuICAgIH1cblxuICAgIC8qKuWIpOaWreaWueWQkSAqL1xuICAgIHByb3RlY3RlZCBqdWRnZUxlZnRSaWdodCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zdG9wRGkrKztcbiAgICAgICAgaWYodGhpcy5zdG9wRGk+MzYpIHt0aGlzLnN0b3BEaSA9IDA7cmV0dXJuO31cbiAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2UgKz0gR2FtZUNvbmZpZy5URVNUX1BPSU5UX1JPO1xuICAgICAgICBsZXQgcm8xID0gdGhpcy50b3dhcmQucm90YXRpb24gLSB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZTtcbiAgICAgICAgbGV0IHJvMiA9IHRoaXMudG93YXJkLnJvdGF0aW9uICsgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2U7XG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKHJvMSk7XG4gICAgICAgIGxldCBudW1SbzEgPSB0aGlzLnRlc3RDb2xpZGVyKCk7XG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKHJvMik7XG4gICAgICAgIGxldCBudW1SbzIgPSB0aGlzLnRlc3RDb2xpZGVyKCk7XG4gICAgICAgIGlmKG51bVJvMSA9PSAtMSkge3RoaXMudG93YXJkLnJvdGF0aW9uID0gcm8xOyByZXR1cm47fVxuICAgICAgICBpZihudW1SbzIgPT0gLTEpIHt0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvMjsgcmV0dXJuO31cbiAgICAgICAgdGhpcy5qdWRnZUxlZnRSaWdodCgpO1xuICAgIH1cblxuICAgIC8qKmZpbmRUYXJnZXTlr7vmib7nm67moIcgKi9cbiAgICBwcml2YXRlIGZpbmRUYXJnZXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBDYSA9IHRoaXMudG93YXJkLnJvdGF0aW9uIC0gdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb247XG4gICAgICAgIGlmKENhID4gMCkgdGhpcy50b3dhcmQucm90YXRpb24gLT0gNTtcbiAgICAgICAgICAgIGVsc2UgaWYoIENhIDwgMCApIHRoaXMudG93YXJkLnJvdGF0aW9uICs9NTtcbiAgICAgICAgaWYoIE1hdGguYWJzKENhKSA8IDUpIHRoaXMudG93YXJkLnJvdGF0aW9uICs9IENhO1xuICAgIH0gICBcblxuICAgIC8qKuajgOa1i+aYr+WQpueisOaSniDmkp7liLDkuobov5Tlm550dXJlIC0x5Y+v5Lul6LWwIDDku6XkuIrooajnpLrnorDmkp7liLDlk6rkuKrngrkqL1xuICAgIHByb3RlY3RlZCB0ZXN0Q29saWRlcigpIDogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgbnVtID0gLTE7XG4gICAgICAgIGxldCBhcmVhIDogQXJyYXk8TGF5YS5TcHJpdGU+PSBEYXRhTWFuYWdlci5pbnNfLmFycl9SaWdodEFyZWE7XG4gICAgICAgIGlmKHRoaXMuc3AueDw5ODEpIGFyZWEgPSBEYXRhTWFuYWdlci5pbnNfLmFycl9MZWZ0QXJlYTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhcmVhLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMuYm9ybk5vZGUsdGhpcy5zcCkpIHtyZXR1cm4gLTE7fVxuICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QoYXJlYVtpXSx0aGlzLnNwKSl7cmV0dXJuIDA7fS8v5aaC5p6c5bey57uP5pKe5LiK5LqG44CCICAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBoID0gMDtoPHRoaXMudG93YXJkUG9zLmxlbmd0aDtoKyspXG4gICAgICAgICAgICB7Ly/kupTkuKrngrnmo4DmtYtcbiAgICAgICAgICAgICAgICBpZihUb29sLmJsb2NrVGVzdCh0aGlzLnRhcmdldE5vZGUsdGhpcy50b3dhcmRQb3NbaF0pKXtyZXR1cm4tMTt9XG4gICAgICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QoYXJlYVtpXSx0aGlzLnRvd2FyZFBvc1toXSkpXG4gICAgICAgICAgICAgICAgey8v56a75Lq65pyA6L+R55qE54K5XG4gICAgICAgICAgICAgICAgICAgIG51bSA9IGgrMTsvLzHvvIwy77yMM++8jDTvvIw1XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW07XG4gICAgfVxuXG4gICAgLyoq5Lq66Z2i5ZCR55qE5LqU5Liq5qOA5rWL54K5ICovXG4gICAgcHJvdGVjdGVkIGdldFRvd2VyZFBvcyhyb3RhdGlvblRlc3Q/KSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCByb3RhdGlvbiA9IHRoaXMudG93YXJkLnJvdGF0aW9uOy8v5L2/55So5b2T5YmN6Z2i5ZCRXG4gICAgICAgIGlmKHJvdGF0aW9uVGVzdCkgcm90YXRpb24gPSByb3RhdGlvblRlc3Q7XG4gICAgICAgIGVsc2UgdGhpcy5rZWVwVG93ZXJkRGF0YSgpOy8v5L+d5a2YIOeOsOWcqOS4uuatouWIsOebruagh+eCueeahOinkuW6plxuICAgICAgICBpZihyb3RhdGlvbiA9PT0gdW5kZWZpbmVkKSBcbiAgICAgICAgey8v5aaC5p6c6KeS5bqm5pivdW5kZWZcbiAgICAgICAgICAgIHJvdGF0aW9uID0gdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb24vL+ebruagh+inkuW6pu+8jOWIneWni+inkuW6piAgIFxuICAgICAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5L2N56e76ZyA6KaB55qE5Y+Y6YePXG4gICAgICAgIGxldCBjb3MgOiBudW1iZXIgPSBUb29sLnJvdGF0aW9uU2V0KHJvdGF0aW9uLFwiY29zXCIpO1xuICAgICAgICBsZXQgc2luIDogbnVtYmVyID0gVG9vbC5yb3RhdGlvblNldChyb3RhdGlvbixcInNpblwiKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLXg6OlwiICsgdGhpcy5zcC54ICsgXCJ5OjpcIiArIHRoaXMuc3AueSk7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8R2FtZUNvbmZpZy5URVNUX1BPSU5UX0NPVU5UO2krKykvL+iusOW9leS6lOS4qlxuICAgICAgICB7IFxuICAgICAgICAgICAgaWYoIXRoaXMudG93YXJkUG9zW2ldKSB0aGlzLnRvd2FyZFBvc1tpXSA9IHt9OyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRvd2FyZFBvc1tpXS54ID0gdGhpcy5zcC54ICsgR2FtZUNvbmZpZy5URVNUX1BPSU5UX0RJQypzaW4qKGkrMSk7XG4gICAgICAgICAgICB0aGlzLnRvd2FyZFBvc1tpXS55ID0gdGhpcy5zcC55ICsgR2FtZUNvbmZpZy5URVNUX1BPSU5UX0RJQypjb3MqKGkrMSk7IFxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG93YXJkUG9zKTtcbiAgICB9XG5cbiAgICAvKirkv53lrZggdG93ZXLkv6Hmga8gKi9cbiAgICBwcm90ZWN0ZWQga2VlcFRvd2VyZERhdGEoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v5a2Y5YKo546w5Zyo54K55Yiw55uu5qCH6KeS5bqmXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICB0aGlzLnRvd2FyZC50YXJnZXRSb3RhdGlvbiA9IFRvb2wucm90YXRlUm9wZVBvaW50XzIodGhpcy5zcC54LHRoaXMuc3AueSx0aGlzLnRhcmdldE5vZGUueCx0aGlzLnRhcmdldE5vZGUueSk7XG4gICAgfVxuXG4gICAgLyoq5Zyo6L+Q6KGM56e75Yqo6YC76L6R5LmL5YmNIOeahOeJueauiuaTjeS9nCAqL1xuICAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLyoqKlxuICAgICAqIOi/m+eoiyAvIOWHuuWfjumAu+i+kSBcbiAgICAgKiBAdHlwZSB0cnVl6L+b5Z+OICBmYWxzZeWHuuWfjlxuICAgICovXG4gICAgcHVibGljIHBlb3BsZUdvKHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgICAgIGlmKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAvL+i/m+WfjuaWueazlVxuICAgICAgICAgICAgICAgIHRoaXMub3V0UGVvcGxlX1RvRG9vcigpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy/lh7rln47mlrnms5VcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZU91dCgpO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuWfjuWkluW8uuWItui/m+mXqCAqL1xuICAgIHByaXZhdGUgb3V0UGVvcGxlX1RvRG9vcigpOnZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XG4gICAgICAgIGxldCBkaXJYPTEwMDAtdGhpcy5zcC54O1xuICAgICAgICBsZXQgZGlyWT00MTAtdGhpcy5zcC55O1xuICAgICAgICBsZXQgZGlzPU1hdGguc3FydChNYXRoLnBvdygxMDAwLXRoaXMuc3AueCwyKStNYXRoLnBvdyg0MTAtdGhpcy5zcC55LDIpKTtcbiAgICAgICAgdGhpcy5kaXJYPWRpclgvZGlzO1xuICAgICAgICB0aGlzLmRpclk9ZGlyWS9kaXM7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcbiAgICB9XG5cbiAgICAvKirpl6jlvLrliLblh7rln47lpJYgKi9cbiAgICBwcml2YXRlIGRvb3JQZW9wbGVfVG9PdXQoKTp2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICBsZXQgeD1NYXRoLnJhbmRvbSgpKjEzNis5MzI7XG4gICAgICAgIGxldCB5PTM1MDtcbiAgICAgICAgdGhpcy5zZXRQb3MoeCx5LHRoaXMuc3ApO1xuICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKSoyLTE7XG4gICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKSowLjctMC4yO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XG4gICAgfVxuXG4gICAvKirlh7rln47pgLvovpEgKi9cbiAgIHByb3RlY3RlZCBwZW9wbGVPdXQoKSA6IHZvaWRcbiAgIHtcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwic3BfZG9vclwiKSBhcyBMYXlhLlNwcml0ZSk7Ly/orr7nva7nm67moIfmmK/pl6hcbiAgIH1cblxuICAgLyoq6L+b5Z+O5pa55rOVIOS7juato+mXqOWIsOafkOS4gOS4quS9j+WuhSovXG4gICBwcm90ZWN0ZWQgcGVvcGxlSW50bygpIDogdm9pZFxuICAge1xuICAgICAgICBsZXQgYm9ybk5vZGUgPSB0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJzcF9kb29yXCIpIGFzIExheWEuU3ByaXRlO1xuICAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XG4gICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XG4gICAgICAgIHRoaXMuc2V0UG9zKGJvcm5Ob2RlLngsYm9ybk5vZGUueSArIDQwLGJvcm5Ob2RlKTtcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XG4gICB9XG5cbiAgIC8qKuS7jmhvdXNl5Lit6I635Y+WIOS4gOS4qumaj+acuueahOeCuSAqL1xuICAgcHJvdGVjdGVkIGdldFRhcmdlUG9zKGhvdXNlTm9kZSkgOiBMYXlhLlNwcml0ZVxuICAge1xuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcigoKGhvdXNlTm9kZSBhcyBMYXlhLlNwcml0ZSkuX2NoaWxkcmVuLmxlbmd0aC0xKSpyYW5kb20pO1xuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6TGF5YS5TcHJpdGU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIC0tLS0tLS0tLSBnZXRUYXJnZXQgXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluZGV4IDo6XCIgKyBpbmRleCk7XG4gICAgICAgIGlmKGluZGV4ID49IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRhcmdldE5vZGUgPSBob3VzZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZV9cIitpbmRleCk7XG4gICAgICAgICAgICBpZih0YXJnZXROb2RlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIumaj+acuuaVsOWPlumUmVwiKTtcbiAgICAgICAgLy8gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xuICAgfVxuXG4gICAgLyoq5Lq65raI5aSxICovXG4gICAgcHJvdGVjdGVkIGRlc3RvcnlQZW9wbGUoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEuUG9vbC5yZWNvdmVyKHRoaXMudHlwZSx0aGlzKTsgICAgICAgIFxuICAgICAgICB0aGlzLnNwLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIodGhpcy50eXBlLHRoaXMpO1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICAvL1xuICAgICAgICBpZighdGhpcy5pc091dCkgdGhpcy5kZXN0b3J5SW5uZXIoKTtcbiAgICB9XG5cbiAgICAvKirlopnlhoXkurrliKDpmaQg54m55q6K5aSE55CGICovXG4gICAgcHJvdGVjdGVkIGRlc3RvcnlJbm5lcigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy/orqHml7blmajmuIXmpZpcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLHRoaXMucGVvcGxlX1Bvc0lubmVyKTtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkNPTU1PTl9NQU46XG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzBdPjApXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzBdLS07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkJBTkRJVF9NQU46XG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzNdPjApXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzNdLS07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlJPQkJFUl9NQU46XG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzRdPjApXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzRdLS07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNDSUVOVElTVF9NQU46XG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzFdPjApXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzFdLS07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNUQVJfTUFOOlxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVsyXT4wKVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVsyXS0tO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGUpO1xuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XG5pbXBvcnQgVG9vbCBmcm9tIFwiLi4vLi4vVG9vbC9Ub29sXCI7XG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi8uLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24gZXh0ZW5kcyBQZW9wbGV7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTsgICAgICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5aKZ5YaF6YC76L6RICovXG4gICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xuICAgICAgICB0aGlzLnRvd2VkVG9Nb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXG4gICAgcHJvdGVjdGVkIHNwZWNpYWxEbygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy/ojrflj5bljaDmr5TmlbDnu4RcbiAgICAgICAgbGV0IGFycl9wZXJjZW50ID0gVG9vbC5nZXRQZXJjZW50QXJlYShDb3VudHJ5RGF0YS5pbnNfLmFycl9wZXJzb25QZXJjZW50TmFtZSk7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyX3BlcmNlbnQubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIWFycl9wZXJjZW50W2krMV0pIGJyZWFrO1xuICAgICAgICAgICAgaWYoYXJyX3BlcmNlbnRbaV0gPCByYW5kb20gJiYgcmFuZG9tIDw9IGFycl9wZXJjZW50W2krMV0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpIHtjb25zb2xlLmxvZyhcIuamgueOh+iuoeeul+WHuumUmVwiKTtyZXR1cm47fVxuICAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XG4gICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XG4gICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xuICAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoKGluZGV4KVxuICAgICAgICB7ICAgIC8qKjAt5Yy755SfIDEt6K2m5a+fIDIt5ZWG5Lq6IC0z5ri45omL5aW96ZeyIC005Yac5rCRKi9cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcImhvc3BpdGFsXCIpIGFzIExheWEuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTsgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZU91dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwiZmFybVwiKSBhcyBMYXlhLlNwcml0ZSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2JiZXIgZXh0ZW5kcyBQZW9wbGV7XHJcbiAgICAvKirotKLmlL/kvKTlrrMgKi9cclxuICAgIHB1YmxpYyBtb25leTpudW1iZXI7XHJcbiAgICAvKirlubjnpo/luqYgKi9cclxuICAgIHB1YmxpYyBwb3B1bGFyU3VwcG9ydDpudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWBt+WPlui0ouaUv+eahOaWueW8jyzlhYjnu5nkuojml7bpl7QgKi9cclxuICAgIHB1YmxpYyBjdXRNb25leVRpbWUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7Tov5vooYzlgbfnm5coMTAtMjAp56eSXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSoxMCsxMDtcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzlgbfnm5dcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5DdXRNb25leSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ml7bpl7TlkI7lgbflj5ZcclxuICAgIHB1YmxpYyBDdXRNb25leSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1vbmV5PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZmN5L2OICovXHJcblxyXG4gICAgLyoq5aKZ5YaFICovXHJcbiAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgfVxyXG5cclxuICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XHJcbiAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbnRlciBleHRlbmRzIExheWEuU2NyaXB0e1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIgKyB0aGlzLnNjcmVlbldpZHRoKTtcbiAgICAgICAgaWYoc2NyZWVuV2lkdGggPCA4MDApICh0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lKFwiZ2FtZU5hbWVcIikgYXMgTGF5YS5MYWJlbCkuZm9udFNpemUgPSAxMjU7XG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuU3ByaXRlKS54ID0gKHNjcmVlbldpZHRoLSA2NjcpLzI7ICAgICAgXG4gICAgfVxufSIsImltcG9ydCBXb3JsZEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9Xb3JsZEV2ZW50TWFuYWdlclwiO1xuaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vLi4vdWkvbGF5YU1heFVJXCI7XG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvVUlNYW5hZ2VyXCI7XG5pbXBvcnQgUGVvcGxlTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9QZW9wbGVNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcbmltcG9ydCBNc2dEaWFsb2cgZnJvbSBcIi4uLy4uL0NvcmUvTXNnRGlhbG9nXCI7XG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBCdXlEaWFsb2cgZnJvbSBcIi4uLy4uL0NvcmUvQnV5RGlhbG9nXCI7XG5pbXBvcnQgUGVvcGxlIGZyb20gXCIuLi8uLi9QZXJmZWIvUGVvcGxlXCI7XG5cbi8qKlxuICog5LiW55WM566h55CG5Zmo6ISa5pysXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXb3JsZCBleHRlbmRzIHVpLkdhbWVXb3JsZFVJe1xuICAgIC8qKkRhdGFNYW5hZ2VyICDljZXkvosgKi9cbiAgICAvKirkuovku7blj5HnlJ/lmaggKi9cbiAgICBwcml2YXRlIHdvcmxkRXZlbnRNYW5hZ2VyIDogV29ybGRFdmVudE1hbmFnZXI7XG4gICAgLyoq5Lq657G7566h55CG5ZmoKi9cbiAgICBwcml2YXRlIHBlb3BsZU1hbmFnZXIgOiBQZW9wbGVNYW5hZ2VyO1xuICAgIC8qKlVJ566h55CG5ZmoICovXG4gICAgcHJpdmF0ZSB1aU1hbmFnZXIgOiBVSU1hbmFnZXI7XG4gICAgLyoq5raI5oGv6YCa55So5qGGICovXG4gICAgcHJpdmF0ZSBtc2dEaWFsb2cgOiBNc2dEaWFsb2c7XG4gICAgLyoq6LSt5Lmw5qGGICovXG4gICAgcHJpdmF0ZSBidXlEaWFsb2c6QnV5RGlhbG9nO1xuICAgIFxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKuWxj+W5leWuveW6piAqL1xuICAgIHByaXZhdGUgc2NyZWVuV2lkdGggOiBudW1iZXI7XG4gICAgLyoq6byg5qCH5piv5ZCm5oyJ5LiLICovXG4gICAgcHJpdmF0ZSBpc0Rvd24gOiBib29sZWFuO1xuICAgIC8qKum8oOagh+eCueiusOW9lSAqL1xuICAgIHByaXZhdGUgbW91c2VQb3MgOiBhbnk7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKjJtaW7orqHml7YgKi9cbiAgICBwcml2YXRlIHRpbWVyQ291bnQgOiBudW1iZXI7XG4gICAgLyoq5Ye66Ze06ZqU6K6h5pe2ICovXG4gICAgcHJpdmF0ZSB0aW1lckNvdW50X291dCA6IG51bWJlcjtcbiAgICAvKirov5sgKi9cbiAgICBwcml2YXRlIHRpbWVyQ291bnRfaW4gOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZ2FtZURhdGFJbml0KCk7Ly/muLjmiI/lj5jph4/liJ3lp4vljJZcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpOy8v57uZ5qGl5re75Yqg5LqL5Lu2IFxuICAgICAgICB0aGlzLnNjcmVlblNldHRpbmcoKTsvL+Wxj+W5leWxheS4rVxuICAgICAgICB0aGlzLmdhbWVTdGFydCgpOy8v5ri45oiP5rWB56iL5byA5aeLXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc18uc2V0QXJlYSh0aGlzLnNwX3NjZW5lLmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikpO1xuICAgIH1cblxuICAgIC8qKuaVsOaNruWIneWni+WMliAqL1xuICAgIHByaXZhdGUgZ2FtZURhdGFJbml0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLndvcmxkRXZlbnRNYW5hZ2VyID0gbmV3IFdvcmxkRXZlbnRNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMucGVvcGxlTWFuYWdlciA9IG5ldyBQZW9wbGVNYW5hZ2VyKHRoaXMuc3Bfc2NlbmUpO1xuICAgICAgICB0aGlzLnVpTWFuYWdlciA9IG5ldyBVSU1hbmFnZXIodGhpcy5zcF9VSSk7XG4gICAgICAgIHRoaXMubXNnRGlhbG9nID0gbmV3IE1zZ0RpYWxvZygpOyAgICAgIFxuICAgICAgICB0aGlzLmJ1eURpYWxvZz1uZXcgQnV5RGlhbG9nKCk7XG4gICAgICAgIHRoaXMubW91c2VQb3MgPSB7fTtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lckNvdW50ID0gMDtcbiAgICAgICAgdGhpcy50aW1lckNvdW50X291dCA9IDA7XG4gICAgICAgIHRoaXMudGltZXJDb3VudF9pbiA9IDA7XG4gICAgfVxuXG4gICAgLyoq5re75Yqg5LqL5Lu2ICovXG4gICAgcHJpdmF0ZSBhZGRFdmVudCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gdGhpcy5zdGFnZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsZnVuY3Rpb24oZSl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sdGhpcyx0aGlzLm1vdXNlRG93bik7XG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9VUCx0aGlzLHRoaXMubW91c2VVcCk7XG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9NT1ZFLHRoaXMsdGhpcy5tb3VzZU1vdmUpO1xuICAgICAgICAvL+e7memXqOW4rueCueeCueWHu+S6iyAgIFxuICAgICAgICB0aGlzLnNwX2Rvb3Iub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuZG9vckN0cik7XG4gICAgICAgIC8v5Yy76aaG5LqL5Lu257uR5a6aXG4gICAgICAgIHRoaXMuaG9zcGl0YWwub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuSE9TUElUQUxdKTtcbiAgICAgICAgLy/lhpvpmJ/kuovku7bnu5HlrppcbiAgICAgICAgdGhpcy5hcm15Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkFSTVldKTtcbiAgICAgICAgLy/nsq7ku5Pkuovku7bnu5HlrppcbiAgICAgICAgdGhpcy5mYXJtLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkZBUk1dKTsgICAgICAgIFxuICAgICAgICAvL+enkeaKgOmmhuS6i+S7tue7keWumlxuICAgICAgICB0aGlzLnRlY2hub2xvZ3kub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuVEVDSE5PTE9HWV0pOyAgICAgICAgXG4gICAgICAgIC8v5paw6Ze754K55LqL5Lu257uR5a6aXG4gICAgICAgIC8vdGhpcy5ldmVudEhvdXNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkVWRU5UX0hPVVNFXSk7ICAgICBcbiAgICAgICAgLy/mlrDpl7vnmoflrqvnu5HlrppcbiAgICAgICAgdGhpcy5wYWxhY2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuUEFMQUNFXSk7XG4gICAgfVxuXG4gICAgLyoq5bGP5bmVIOWxgOS4rSovXG4gICAgcHJpdmF0ZSBzY3JlZW5TZXR0aW5nKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aWR0aFwiICsgdGhpcy5zY3JlZW5XaWR0aCk7XG4gICAgICAgIHRoaXMuc3Bfc2NlbmUueCA9IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKS8yO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+S6i+S7tuWbnuiwg1xuXG4gICAgLyoq6Zeo55qE5byA5YWzICovXG4gICAgcHJpdmF0ZSBkb29yQ3RyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4pXG4gICAgICAgIHsvL+W8gOmXqFxuICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRvb3JDbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgey8v5YWz6ZeoXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kb29yT3BlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5YWz6ZeoICovXG4gICAgcHJpdmF0ZSBkb29yQ2xvc2UoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG5cbiAgICAvKirlvIDpl6ggKi9cbiAgICBwcml2YXRlIGRvb3JPcGVuKCkgOiB2b2lkXG4gICAge1xuXG4gICAgfVxuXG4gICAgLyoq56e75YqoICovXG4gICAgcHJpdmF0ZSBtb3VzZU1vdmUoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKCF0aGlzLmlzRG93bikgcmV0dXJuO1xuICAgICAgICBpZih0aGlzLm1vdXNlUG9zLngpXG4gICAgICAgIHtcbiAgICAgICAgICAgdGhpcy5zcF9zY2VuZS54ICs9IExheWEuc3RhZ2UubW91c2VYIC0gdGhpcy5tb3VzZVBvcy54OyBcbiAgICAgICAgLy8gICAgdGhpcy5zcF9zY2VuZS55ICs9IExheWEuc3RhZ2UubW91c2VZIC0gdGhpcy5tb3VzZVBvcy54O1xuICAgICAgICAgICAgaWYodGhpcy5zcF9zY2VuZS54ID4gMCkgIHRoaXMuc3Bfc2NlbmUueCA9IDA7XG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPCAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCkpIHRoaXMuc3Bfc2NlbmUueCA9ICAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3VzZVBvcy54ID0gTGF5YS5zdGFnZS5tb3VzZVg7XG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IExheWEuc3RhZ2UubW91c2VZO1xuICAgIH1cblxuICAgIC8qKuaLluWKqOaMieS4iyAqL1xuICAgIHByaXZhdGUgbW91c2VEb3duKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoq5ouW5Yqo5oqs6LW3ICovXG4gICAgcHJpdmF0ZSBtb3VzZVVwKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5tb3VzZVBvcy54ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1vdXNlUG9zLnkgPSB1bmRlZmluZWQ7ICAgICAgIFxuICAgIH1cblxuXG4gICAgLyoq54K55Ye7IOiOt+WPluW7uuetkeS/oeaBryAqL1xuICAgIHByaXZhdGUgb25Ib3VzZUluZm8odHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLm1zZ0RpYWxvZy5zaG93TXNnKHR5cGUpO1xuICAgIH1cblxuICAgIC8qKueCueWHu+i0reS5sOaMiemSriAqL1xuICAgIC8qcHJpdmF0ZSBidXlEaWFsb2dfQ2xpY2sodHlwZTpzdHJpbmcpOnZvaWRcbiAgICB7XG4gICAgICAgIHN3aXRjaCh0eXBlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuTUFJTl9QT1BVTEFUSU9OOlxuICAgICAgICAgICAgICAgIHRoaXMuYnV5RGlhbG9nLmJ1eV9uYW1lLnRleHQ9XCLkurrlj6NcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5NQUlOX1BPUFVMQVJTVVBQT1JUOlxuICAgICAgICAgICAgICAgIHRoaXMuYnV5RGlhbG9nLmJ1eV9uYW1lLnRleHQ9XCLlubjnpo/luqZcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5NQUlOX01PTkVZOlxuICAgICAgICAgICAgICAgIHRoaXMuYnV5RGlhbG9nLmJ1eV9uYW1lLnRleHQ9XCLotKLmlL9cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5NQUlOX1RFQ0hOT0xPR1k6XG4gICAgICAgICAgICAgICAgdGhpcy5idXlEaWFsb2cuYnV5X25hbWUudGV4dD1cIuenkeaKgFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLk1BSU5fUFJFU1RJR0U6XG4gICAgICAgICAgICAgICAgdGhpcy5idXlEaWFsb2cuYnV5X25hbWUudGV4dD1cIuWogeacm1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnV5RGlhbG9nLnBvcHVwKCk7XG4gICAgfSovXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeyrumjny0tLS0tLS0tLS0tLS1cbiAgICAvKirnsq7po5/kuqflh7rlhazlvI8gKi9cbiAgICBwdWJsaWMgY2FsX0dyYWluQWRkKCk6dm9pZFxuICAgIHtcblxuICAgIH1cblxuICAgIC8qKueyrumjn+a2iOiAl+WFrOW8jyAqL1xuICAgIHB1YmxpYyBjYWxfR3JhaW5NaW51cygpOnZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKueyrumjn+e7k+eulyAqL1xuICAgIC8qcHVibGljIGNhbF9HcmFpbigpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v5aaC5p6c6L+Y5pyJ57Ku6aOf5bqT5a2YXG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQ+PUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cylcbiAgICAgICAge1xuICAgICAgICAgICAgLy/lpoLmnpznlJ/kuqfph4/lpKfkuo7lpKfkuo7mtojogJfnjofnmoTmn5DkuKrlgI3njofvvIzlhYjorqnlhbboh6rliqjovazljJbkuLrotKLmlL/vvIzkuYvlkI7kv67mlLnkuLrmiYvliqjovazljJZcbiAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQvQ291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzPj1HYW1lQ29uZmlnLkdSQUlOX0VYQ0hBTkdFTU9ORVlfUEVSQ0VOVClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+i2heWHuuWAjeeOh+eahOmDqOWIhlxuICAgICAgICAgICAgICAgIGxldCBleGNoYW5nZT1Db3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkLUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cypHYW1lQ29uZmlnLkdSQUlOX0VYQ0hBTkdFTU9ORVlfUEVSQ0VOVDtcbiAgICAgICAgICAgICAgICAvL+aNoumSsVxuICAgICAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VNb25leShleGNoYW5nZSk7XG4gICAgICAgICAgICAgICAgLy/liankvZnnmoTliqDlhaXlupPlrZhcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srPShDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkLWV4Y2hhbmdlLUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy/liqDlhaXlupPlrZhcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srPShDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkLUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+WmguaenOW6k+WtmOWKoOS4iueUn+S6p+eahOeyrumjn+S4jei2s+S7peaKteWkn+a2iOiAl+eahOeyrumjn1xuICAgICAgICAgICAgaWYoKENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jaytDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkKTxDb3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy/ngrnlh7vpgInmi6nmmK/lkKbotK3kubDnsq7po5/vvIzlpoLmnpzkuI3otK3kubDliJnlr7zoh7Tkurrlj6Plh4/lsJHlkozlubjnpo/luqbpmY3kvY5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+WHj+WwkeW6k+WtmFxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jay09Q291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzLUNvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9Ki9cblxuICAgIC8qKueyrumjn+aNoumSsSAqL1xuICAgIHB1YmxpYyBleGNoYW5nZU1vbmV5KGdyYWluOm51bWJlcik6dm9pZFxuICAgIHtcblxuICAgIH1cblxuICAgIC8qKumSseaNoueyrumjnyAqL1xuICAgIHB1YmxpYyBleGNoYW5nZUdyYWluKG1vbmV5Om51bWJlcik6dm9pZFxuICAgIHtcblxuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeogOaciemXqFxuICAgIC8qKui0reS5sOeogOaciemXqCAqL1xuICAgIHB1YmxpYyBidXlSYXJlRG9vcigpOnZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cbiAgICAvLy8vLy8vLy8vLy/muLjmiI/mtYHnqIvlvIDlp4svLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8qKua4uOaIj+a1geeoi+W8gOWniyAqL1xuICAgIHByaXZhdGUgZ2FtZVN0YXJ0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIuY3JlYXRlUGVvcGxlKCk7Ly/kurrlj6PnlJ/miJDpgLvovpHov5DooYxcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLmNyZWF0ZVBlb3BsZV9Jbm5lcigpOy8v5YaF5Lq65Y+j55Sf5oiQXG4gICAgfVxuXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v5Lq65Y+j5rWB5Yqo6YCa55+l5ZmoXG4gICAgLyoqXG4gICAgICog5rWB5Yqo5q+U5L6L77yMIOmAmuefpeWZqFxuICAgICAqIFxuICAgICAqICAqL1xuICAgIHByaXZhdGUgY3VycmVudFJhdGlvKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnRpbWVyQ291bnQrKztcbiAgICAgICAgdGhpcy50aW1lckNvdW50X291dCsrO1xuICAgICAgICB0aGlzLnRpbWVyQ291bnRfaW4rKztcbiAgICAgICAgbGV0IGNvdW50cnlEYXRhID0gQ291bnRyeURhdGEuaW5zXztcbiAgICAgICAgbGV0IEJJID0gY291bnRyeURhdGEucGVyY2VudDsgICAvL+i/my/lh7pcbiAgICAgICAgbGV0IG91dGVyVGFyZ2V0ID0gY291bnRyeURhdGEuZXhpdFBlb3BsZTsvL+WHuumXqOebruagh+aVsFxuICAgICAgICBsZXQgaW5uZXJUYWdldCA9IGNvdW50cnlEYXRhLmVudGVyUGVvcGxlOy8v6L+b6Zeo55uu5qCH5pWwXG4gICAgICAgIGxldCBfb3V0ZXIgPSBjb3VudHJ5RGF0YS5fb3V0ZXJQZW9wbGU7Ly/lh7rln47lj6Plrp7pmYXlgLxcbiAgICAgICAgbGV0IF9pbm5lciA9IGNvdW50cnlEYXRhLl9pbm5lclBlb3BsZTsvL+WFpeWfjuWunumZheWAvFxuICAgICAgICBsZXQgbGFzdFRpbWUgPSAxMjAwMDAgLSB0aGlzLnRpbWVyQ291bnQgLSA1MDAwMDsvL+iOt+WPluWJqeS9meaXtumXtO+8jOWkmumihOaUrzEw56eSXG4gICAgICAgIGlmKG91dGVyVGFyZ2V0ID4gX291dGVyKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+mAmuefpVxuICAgICAgICAgICAgaWYodGhpcy50aW1lckNvdW50X291dCA+PSBsYXN0VGltZS8ob3V0ZXJUYXJnZXQgLSBfb3V0ZXIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihpbm5lclRhZ2V0ID4gX2lubmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+mAmuefpSAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMudGltZXJDb3VudF9pbiA+PSBsYXN0VGltZS8ob3V0ZXJUYXJnZXQgLSBfaW5uZXIpKSAgXG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMudGltZXJDb3VudCA+IDEyMDAwMClcbiAgICAgICAgeyAgIFxuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50X2luID0gMDtcbiAgICAgICAgICAgIHRoaXMudGltZXJDb3VudF9vdXQgPSAwO1xuICAgICAgICAgICAgY291bnRyeURhdGEuX291dGVyUGVvcGxlID0gMDsvL+WunumZheWAvOW9kumbtlxuICAgICAgICAgICAgY291bnRyeURhdGEuX2lubmVyUGVvcGxlID0gMDsvL+WunumZheWAvOW9kumbtlxuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50ID0gMDtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9MDtpPG91dGVyVGFyZ2V0LV9vdXRlcjtpKyspLy/pgJrnn6Xlh7rln45cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dChmYWxzZSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8aW5uZXJUYWdldC1faW5uZXI7aSsrKS8v6YCa55+l6L+b56iLXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEucGVvcGxlR29PdXQodHJ1ZSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbkdhbWUgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkgOiB2b2lkXG4gICAge1xuXG4gICAgfVxuICAgIFxuXG4gICAgb25DbGljaygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS5TY2VuZS5vcGVuKFwiR2FtZVdvcmxkLnNjZW5lXCIpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuU3RvcnkgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkgOiB2b2lkXG4gICAge1xuXG4gICAgfVxuICAgIFxuXG4gICAgb25DbGljaygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS5TY2VuZS5vcGVuKFwiR2FtZVN0b3J5LnNjZW5lXCIpO1xuICAgIH1cbn0iLCJpbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHtcbiAgICAvL+iOt+WPluS4ieinkuWHveaVsOWAvFxuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRpb25EZWFsKGZ4Om51bWJlcixmeTpudW1iZXIsc3g6bnVtYmVyLHN5Om51bWJlcixnZXRTdHJpbmcpIDogbnVtYmVyXG4gICAge1xuICAgICAgICAvKirmlpzovrkgKi9cbiAgICAgICAgbGV0IGMgOiBudW1iZXIgPSBNYXRoLnNxcnQoTWF0aC5wb3coZnggLSBzeCwyKSArIE1hdGgucG93KGZ5IC0gc3ksMikpO1xuICAgICAgICAvKirkuLTovrkgKi9cbiAgICAgICAgbGV0IGEgOiBudW1iZXIgPSBzeCAtIGZ4O1xuICAgICAgICAvKirlr7novrkgKi9cbiAgICAgICAgbGV0IGIgOiBudW1iZXIgPSBzeSAtIGZ5O1xuICAgICAgICBcbiAgICAgICAgaWYoZ2V0U3RyaW5nID09IFwic2luXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIjc2luID09XCIgKyAoYi9jKSk7XG4gICAgICAgICAgICByZXR1cm4gKGIvYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihnZXRTdHJpbmcgPT0gXCJjb3NcIilcbiAgICAgICAge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiNjb3MgPT1cIiArIChhL2MpKTtcbiAgICAgICAgICAgIHJldHVybiAoYS9jKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIjdGFuID09XCIgKyAoYi9hKSk7Ly/lr7novrkg5q+UIOS4tOi+uSBcbiAgICAgICAgICAgIHJldHVybiAoYi9hKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKueisOaSnuajgOa1iyBkaWNOdW0g77ya6aKE6K6+6Led56a7IG9iamVjdDHlkoxvYmplY3Qy5Lyg5YWlc3ByaXRlLOaYr+aMieeFp+avj+S4qnNwcml0ZeeahOmUmueCueWcqOS4reW/g+S9jee9ruadpeiuoeeul+eahCAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbGxpc2lvbkNoZWNrKG9iamVjdDEsb2JqZWN0MikgOiBib29sZWFuXG4gICAge1xuICAgICAgICBpZihNYXRoLmFicyhvYmplY3QxLnggLSBvYmplY3QyLngpPCBvYmplY3QxLndpZHRoLzIgKyBvYmplY3QyLndpZHRoLzImJlxuICAgICAgICAgICBNYXRoLmFicyhvYmplY3QxLnkgLSBvYmplY3QyLnkpIDwgb2JqZWN0MS5oZWlnaHQvMiArIG9iamVjdDIuaGVpZ2h0LzIpe1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0ZVJvcGVQb2ludF8yKHgseSxYLFkpOm51bWJlclxuICAgIHtcbiAgICAgICAgICAgIGxldCBjb3M9VG9vbC5yb3RhdGlvbkRlYWwoeCx5LFgsWSxcImNvc1wiKTtcbiAgICAgICAgICAgIGxldCBzaW49VG9vbC5yb3RhdGlvbkRlYWwoeCx5LFgsWSxcInNpblwiKTtcbiAgICAgICAgICAgIGxldCByb3RhdGlvbjtcbiAgICAgICAgICAgIGlmKGNvcz49MCYmc2luPjApe1xuICAgICAgICAgICAgICAgIHJvdGF0aW9uPSAxODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKS05MDtcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvczwwJiZzaW4+PTApe1xuICAgICAgICAgICAgICAgIHJvdGF0aW9uPTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpLTkwO1xuICAgICAgICAgICAgfWVsc2UgaWYoY29zPD0wJiZzaW48MCl7XG4gICAgICAgICAgICAgICAgcm90YXRpb249OTAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZSBpZihjb3M+MCYmc2luPD0wKXtcbiAgICAgICAgICAgICAgICByb3RhdGlvbj0gOTAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih5IDwgWSkgcm90YXRpb24gKz0gMTgwO1xuICAgICAgICAgICAgcmV0dXJuIHJvdGF0aW9uO1xuICAgIH1cblxuICAgIC8qKuiOt+WPluinkuW6piBcbiAgICAgKiDnp7vliqjngrnlnKjliY1cbiAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Um90YXRpb24oeDEseTEseDIseTIpIDogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgY29zPVRvb2wucm90YXRpb25EZWFsKHgxLHkxLHgyLHkyLFwiY29zXCIpO1xuICAgICAgICBsZXQgc2luPVRvb2wucm90YXRpb25EZWFsKHgxLHkxLHgyLHkyLFwic2luXCIpO1xuICAgICAgICBsZXQgcm90YXRpb247XG4gICAgICAgIGlmKGNvcyA+PTAgJiYgc2luPjApe1xuICAgICAgICAgICAgcm90YXRpb24gPSA5MCArIDE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNvcyA8MCAmJiBzaW4+PTApe1xuICAgICAgICAgICAgcm90YXRpb24gPSAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29zID4wICYmIHNpbjw9MClcbiAgICAgICAge1xuICAgICAgICAgICAgcm90YXRpb24gPSAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29zIDw9MCAmJiBzaW48MClcbiAgICAgICAge1xuICAgICAgICAgICAgcm90YXRpb24gPSAxODAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdGF0aW9uO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogcm90YXRpb24gPSA0NSDop5LluqZcbiAgICAgKiDmsYIgY29zIOi/mOaYryBzaW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uU2V0KHJvdGF0aW9uLHR5cGVTdHJpbmcpICA6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IHIgO1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmKHJvdGF0aW9uIDwgMClcbiAgICAgICAge1xuICAgICAgICAgICAgcm90YXRpb24gKz0gMzYwKihNYXRoLmFicyhNYXRoLmZsb29yKHJvdGF0aW9uLzM2MCkrMikpOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmKE1hdGguZmxvb3Iocm90YXRpb24vMzYwKT4wKVxuICAgICAgICB7XG4gICAgICAgICAgICByb3RhdGlvbiAtPSAzNjAqTWF0aC5mbG9vcihyb3RhdGlvbi8zNjApO1xuICAgICAgICB9XG4gICAgICAgIHIgPSAocm90YXRpb24pLzE4MCpNYXRoLlBJOyAgICAgICAgXG4gICAgICAgIGlmKHR5cGVTdHJpbmcgPT0gXCJjb3NcIilcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmFicyhNYXRoLmNvcyhyKSk7XG4gICAgICAgICAgICBpZigocm90YXRpb24gPiAwICYmIHJvdGF0aW9uIDw9IDkwKSB8fCAocm90YXRpb24+MjcwICYmIHJvdGF0aW9uPD0zNjApKSAgdmFsdWUgPSAtdmFsdWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvczo6XCIgKyB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7ICAgICAgICAgXG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKE1hdGguc2luKHIpKTtcbiAgICAgICAgICAgIGlmKChyb3RhdGlvbj4xODAgJiYgcm90YXRpb24gPD0gMjcwKSB8fCAocm90YXRpb24+MjcwICYmIHJvdGF0aW9uPD0zNjApKSB2YWx1ZSA9IC12YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2luOjpcIiArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUgICAgICAgIFxuICAgIH1cbiAgICAvKipcbiAgICAgKiDot53nprvorqHnrpdcbiAgICAgKiAyIOWvueixoVxuICAgICAqIGZpcnN0XG4gICAgICogc2Vjb25kXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjb3VudERpY19PYmplY3QoZjphbnksczphbnkpIDogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGYueCAtIHMueCwyKSArIE1hdGgucG93KGYueSAtIHMueSwyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pa55Z2X5qOA5rWLIFxuICAgICAqIFxuICAgICAqIOaWueWdl+WvueixoSBzcFxuICAgICAqIOajgOa1i+eahOeCuSDlr7nosaFcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYmxvY2tUZXN0KHNwLHBvaW50KSA6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmKCFzcCB8fCAhcG9pbnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHBvaW50TGVmdCA6IGFueSA9e3g6c3AueCAtIHNwLndpZHRoLzIseTpzcC55LXNwLmhlaWdodC8yfTtcbiAgICAgICAgbGV0IHBvaW50UmlnaHQgOiBhbnkgPXt4OnNwLnggKyBzcC53aWR0aC8yLHk6c3AueStzcC5oZWlnaHQvMn07XG4gICAgICAgIGxldCBzX3BvaW50TGVmdCA9IHBvaW50LnggPiBwb2ludExlZnQueCAmJiBwb2ludC55PnBvaW50TGVmdC55O1xuICAgICAgICBsZXQgc19wb2ludFJpZ2h0ID0gcG9pbnQueCA8IHBvaW50UmlnaHQueCAmJiBwb2ludC55PHBvaW50UmlnaHQueTtcbiAgICAgICAgaWYoc19wb2ludExlZnQgJiYgc19wb2ludFJpZ2h0KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHYW1lRGF0YSAtIENvdW50cnlEYXRhXG4gICAgICog5Y2g5q+UIOaVsOe7hFxuICAgICrojrflj5bljLrpl7TmlbDnu4QgMCwwLjgsMC44MywwLjg0LDAuOSwxXG4gICAgICogQGFyciDlsZ7mgKflkI3lrZdcbiAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGVyY2VudEFyZWEoYXJyKTpBcnJheTxudW1iZXI+XG4gICAge1xuICAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xuICAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDtpPGFyci5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXIgKz0gQ291bnRyeURhdGEuaW5zX1thcnJbaV1dO1xuICAgICAgICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyclBlcmNlbnQ7XG4gICAgfVxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xuaW1wb3J0IERpYWxvZz1MYXlhLkRpYWxvZztcbmltcG9ydCBTY2VuZT1MYXlhLlNjZW5lO1xuZXhwb3J0IG1vZHVsZSB1aSB7XHJcbiAgICBleHBvcnQgY2xhc3MgQnV5VUkgZXh0ZW5kcyBEaWFsb2cge1xyXG5cdFx0cHVibGljIGJnOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBidG5fYnV5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBidXlfbmFtZTpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgYnV5X2lucHV0OkxheWEuVGV4dElucHV0O1xuXHRcdHB1YmxpYyBidG5fY2xvc2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ1eV9wcmljZTpsYXlhLmRpc3BsYXkuVGV4dDtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkJ1eVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgR2FtZVdvcmxkVUkgZXh0ZW5kcyBTY2VuZSB7XHJcblx0XHRwdWJsaWMgc3Bfc2NlbmU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2dyb3VuZDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3Bfcml2ZXI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX3dhbGw6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2Rvb3I6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV80OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV81OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV82OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV84OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV85OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBldmVudEhvdXNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHBhbGFjZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG9zcGl0YWw6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIwOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZWNobm9sb2d5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8wOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI2OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGZhcm06TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMwOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM2OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYXJteTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfVUk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGltZ19wb3B1bGF0aW9uOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3BvcHVsYXRpb246bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ19wb3B1bGFyU3VwcG9ydDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9wb3B1bGFyU3VwcG9ydDpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX21vbmV5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X21vbmV5OmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfdGVjaG5vbG9neTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF90ZWNobm9sb2d5OmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfcHJlc3RpZ2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfcHJlc3RpZ2U6bGF5YS5kaXNwbGF5LlRleHQ7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJHYW1lV29ybGRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBtb2R1bGUgdWkuRGlhIHtcclxuICAgIGV4cG9ydCBjbGFzcyBDdXJyZW50RGlhbG9nVUkgZXh0ZW5kcyBTY2VuZSB7XHJcblx0XHRwdWJsaWMgbXNnQm9keTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3ByaXRlX1BlcnNvbjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3ByaXRlX01zZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnRuX2Nsb3NlOkxheWEuU3ByaXRlO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiRGlhL0N1cnJlbnREaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHIiXX0=
