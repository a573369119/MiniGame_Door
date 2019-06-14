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
        this.grainPerCost = 1;
        /**粮食产率 (人均产率)*/
        this.grainPerAdd = 0.8;
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
    CountryData.prototype.steadyCost = function () {
        this.money -= this.armyCost * (1 - this.armyPercent) + this.governCost + this.technologyCost;
    };
    /**粮食消耗 */
    CountryData.prototype.grainCost = function () {
        return this.population * this.grainPerCost;
    };
    /**粮食生产 */
    CountryData.prototype.population_GrainAdd = function () {
        return this.population;
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
    //---------------------------------------
    function PeopleManager(view) {
        //------------------------------------------墙内
        /**生成间隔计时器 */
        this.countTime = 0;
        /**生产时间间隔 */
        this.countTime_ = 500;
        //外城人口计时器
        this.countTime_out = 0;
        /**外城人口生产间隔 */
        this.countTime_out_ = 500;
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
        Laya.timer.loop(1, this, this.createPeople);
    };
    /**生成人 */
    PeopleManager.prototype.createPeople = function () {
        if (this.countTime_out <= this.countTime_out_) {
            this.countTime_out++;
            return;
        }
        this.countTime_out = 0;
        this.countTime_out_ = Math.random() * GameConfig_1.default.PERSON_CREATE_TIME * 100;
        if (DataManager_1.OutCountryData.ins_.outCount >= DataManager_1.OutCountryData.ins_.maxCount - 1)
            return;
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
        console.log(randomString);
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
        console.log("---------" + person);
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
        if (!person) {
            console.log("人种随机失败！");
            return;
        }
        this.create_Inner(person); //生产人种 
        return person;
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
        console.log(type);
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
                this.destoryPeople(true);
                //城外人口-1
                DataManager_1.OutCountryData.ins_.outCount--;
                //国家人口+1
                DataManager_1.default.ins_.cal_MainData(GameConfig_1.default.MAIN_POPULATION, 1);
                // if(OutCountryData.ins_.outCount<OutCountryData.ins_.maxCount-1)
                // {
                //     let time=Math.random()*3;
                //     Laya.timer.frameOnce(time*60,this,createPeople);
                // }
                this.peopleInto();
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
                this.destoryPeople(true);
                this.doorPeople_ToOut();
            }
            else {
                this.destoryPeople();
            }
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
        this.isOut = true;
        Laya.timer.clearAll(this);
        var x = Math.random() * 136 + 932;
        var y = 350;
        this.setPos(x, y, this.sp);
        this.dirX = Math.random() * 2 - 1;
        this.dirY = -Math.random() * 0.7 - 0.2;
        // this.openBehaviour();
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
        this.isOut = false;
        var houseNode = this.view.getChildByName("house");
        var targetNode = this.getTargePos(houseNode);
        this.setPos(bornNode.x, bornNode.y + 40, bornNode);
        this.setTraget(targetNode);
        this.openBehaviour();
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
    /**人消失 isrecover不回收吗 */
    People.prototype.destoryPeople = function (notRecover) {
        if (!notRecover)
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
        this.peopleManager.openPeopleFactory(); //人口生成逻辑运行
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL+adgui0p+mTui9MYXlhQWlySURFX2JldGEvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvQnV5RGlhbG9nLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vbi50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyLnRzIiwic3JjL1NjcmlwdC9DZW50ZXIudHMiLCJzcmMvU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHMiLCJzcmMvU2NyaXB0L09wZW5HYW1lLnRzIiwic3JjL1NjcmlwdC9PcGVuU3RvcnkudHMiLCJzcmMvVG9vbC9Ub29sLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQTtJQUFBO0lBMkRBLENBQUM7SUExREcsY0FBYztJQUNBLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLG1CQUFRLEdBQVksTUFBTSxDQUFDO0lBQ3pDLGNBQWM7SUFDQSx3QkFBYSxHQUFZLFdBQVcsQ0FBQztJQUduRCxzQ0FBc0M7SUFDdEMsUUFBUTtJQUNNLG1CQUFRLEdBQVks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ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcclxuICAgIC8qKuS6uuenjSAtIOaZrumAmuS6uiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDT01NT05fTUFOIDogc3RyaW5nID0gXCJjb21tb25cIjtcclxuICAgIC8qKuS6uuenjSAtIOWwj+WBtyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBST0JCRVJfTUFOIDogc3RyaW5nID0gXCJyb2JiZXJcIjtcclxuICAgIC8qKuS6uuenjSAtIOWcn+WMqiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBCQU5ESVRfTUFOIDogc3RyaW5nID0gXCJiYW5kaXRcIjtcclxuICAgIC8qKuS6uuenjSAtIOaYjuaYnyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTVEFSX01BTiA6IHN0cmluZyA9IFwic3RhclwiO1xyXG4gICAgLyoq5Lq656eNIC0g56eR5a2m5a62ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNDSUVOVElTVF9NQU4gOiBzdHJpbmcgPSBcInNjaWVudGlzdFwiO1xyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lu7rnrZFcclxuICAgIC8qKuWMu+mZoiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBIT1NQSVRBTCA6IG51bWJlciA9IDE7XHJcbiAgICAvKirlhpvpmJ8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQVJNWSA6IG51bWJlciA9IDI7XHJcbiAgICAvKirlhpzlnLogKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRkFSTTogbnVtYmVyID0gMztcclxuICAgIC8qKuenkeaKgCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBURUNITk9MT0dZOiBudW1iZXIgPSA0O1xyXG4gICAgLyoq5LqL5Lu25oi/IOaWsOmXu+aIvyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFVkVOVF9IT1VTRTogbnVtYmVyID0gNTtcclxuICAgIC8qKueah+WuqyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQQUxBQ0U6IG51bWJlciA9IDY7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mo4DmtYvngrnnmoTpl7Tot51cclxuICAgIC8qKuajgOa1i+eCuemXtOi3nSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX0RJQyA6IG51bWJlciA9IDU7XHJcbiAgICAvKirpgJ/luqYgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVEVTVF9QT0lOVF9TUEVFRCA6IG51bWJlciA9IDAuNDtcclxuICAgIC8qKuaXi+i9rOinkuW6puWBj+enuyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX1JPIDogbnVtYmVyID0gMTA7XHJcbiAgICAvKirkurrnsbvnlJ/kuqfpl7TpmpRTICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBFUlNPTl9DUkVBVEVfVElNRSA6IG51bWJlciA9IDE7XHJcbiAgICAvKirnm5HmtYvngrnmlbDph48qL1xyXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX0NPVU5UIDogbnVtYmVyID0gNjtcclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Li75YC8XHJcbiAgICAvKirlm73lrrbotKLmlL8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9NT05FWSA6IHN0cmluZyA9IFwibW9uZXlcIjtcclxuICAgIC8qKuWbveWutuS6uuWPoyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX1BPUFVMQVRJT04gOiBzdHJpbmc9XCJwb3B1bGF0aW9uXCI7XHJcbiAgICAvKirlm73lrrblubjnpo/luqYgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9QT1BVTEFSU1VQUE9SVCA6IHN0cmluZyA9IFwicG9wdWxhclN1cHBvcnRcIjtcclxuICAgIC8qKuWbveWutuenkeaKgCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX1RFQ0hOT0xPR1kgOiBzdHJpbmcgPSBcInRlY2hub2xvZ3lcIjtcclxuICAgIC8qKuWbveWutuWogeacmyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX1BSRVNUSUdFIDogc3RyaW5nID0gXCJwcmVzdGlnZVwiO1xyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lhbbku5ZcclxuICAgIC8qKuS4gOWkqeaXtumXtC/liIbpkp8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgT05FX0RBWTpudW1iZXI9MTAqNjA7XHJcbiAgICAvKirnsq7po5/nlJ/kuqfnjofmjaLpkrHkuLTnlYzlgLwgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UPTEuNTtcclxuICAgIC8qKumSseaNoueyrumjn+axh+eOhyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNT05FWVRPR1JBSU49MjtcclxufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xyXG4vKipcclxuICog6LSt5Lmw5qGGIOmAmueUqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV5RGlhbG9nIGV4dGVuZHMgdWkuQnV5VUl7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndpZHRoPTgwMDtcclxuICAgICAgICB0aGlzLmhlaWdodD00MDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTp2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKuazqOWGjOS6i+S7tiAqL1xyXG4gICAgcHJpdmF0ZSBhZGRFdmVudHMoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idG5fYnV5Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmJ1eUNsaWNrKTtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZUNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirngrnlh7votK3kubAgKi9cclxuICAgIHByaXZhdGUgYnV5Q2xpY2soKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGN1cnJcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC8qKueCueWHu+WFs+mXrSAqL1xyXG4gICAgcHJpdmF0ZSBjbG9zZUNsaWNrKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0gXHJcbn0iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVyZmViL1Blb3BsZVwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNruS4reW/gyDmiYDmnInnmoTmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlEYXRhe1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogQ291bnRyeURhdGEgPSBuZXcgQ291bnRyeURhdGEoKTtcclxuICAgIC8qKioqKioqKioqKioqKuS4u+aVsOaNrioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoq5Zu95a626LSi5pS/ICovXHJcbiAgICBwdWJsaWMgbW9uZXkgOiBudW1iZXIgPSAxMDAwMDtcclxuICAgIC8qKuWbveWutuS6uuWPoyAqL1xyXG4gICAgcHVibGljIHBvcHVsYXRpb24gOiBudW1iZXI9MTAwO1xyXG4gICAgLyoq5Zu95a625bm456aP5bqmICovXHJcbiAgICBwdWJsaWMgcG9wdWxhclN1cHBvcnQgOiBudW1iZXIgPSA1MDtcclxuICAgIC8qKuWbveWutuenkeaKgCAqL1xyXG4gICAgcHVibGljIHRlY2hub2xvZ3kgOiBudW1iZXIgPSAxMDtcclxuICAgIC8qKuWbveWutuWjsOacmyAqL1xyXG4gICAgcHVibGljIHByZXN0aWdlIDogbnVtYmVyID0gOTA7XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKuWJr+aVsOaNrioqKioqKioqKioqKioqKioqL1xyXG4gICAgLy8tLS0tLS0tLeS4u+aVsOaNruW9seWTjVxyXG4gICAgLy/lm7rlrprmlK/lh7pcclxuICAgIC8qKuWGm+i0uSAqL1xyXG4gICAgcHVibGljIGFybXlDb3N0IDogbnVtYmVyID0gMTAwO1xyXG4gICAgLyoq5pS/5bqc6LS555SoICovXHJcbiAgICBwdWJsaWMgZ292ZXJuQ29zdCA6IG51bWJlciA9IDEwMDtcclxuICAgIC8qKuenkeaKgOi0ueeUqCAqL1xyXG4gICAgcHVibGljIHRlY2hub2xvZ3lDb3N0IDogbnVtYmVyID0gMTAwO1xyXG4gICAgLyoq56iO5pS2546HICovXHJcbiAgICBwdWJsaWMgdGF4IDogbnVtYmVyID0gMC4wNTtcclxuXHJcbiAgICAvL+WPmOWKqOeOh1xyXG4gICAgLyoq57Ku6aOf5raI6ICX6YePICjkurrlnYfmtojogJfph48pICovXHJcbiAgICBwdWJsaWMgZ3JhaW5QZXJDb3N0IDogbnVtYmVyID0gMTtcclxuICAgIC8qKueyrumjn+S6p+eOhyAo5Lq65Z2H5Lqn546HKSovXHJcbiAgICBwdWJsaWMgZ3JhaW5QZXJBZGQgOiBudW1iZXIgPSAwLjg7XHJcbiAgICAvKirnsq7po5/lupPlrZggKi9cclxuICAgIHB1YmxpYyBncmFpblN0b2NrOm51bWJlcj0wO1xyXG4gICAgLyoq5Yab6LS55YeP5bCR546HICovXHJcbiAgICBwdWJsaWMgYXJteVBlcmNlbnQ6bnVtYmVyPTAuMTtcclxuICAgIC8qKkdEUCDmjKPpkrHog73lipvvvIzmr4/kurrmr4/lpKnog73kuqflpJrlsJHpkrEgKi9cclxuICAgIHB1YmxpYyBHRFAgOiBudW1iZXIgPSAxMDtcclxuXHJcblxyXG4gICAgLyoq6L+b5Z+O5pWwIOebruagh+WAvDJtaW4qL1xyXG4gICAgcHVibGljIGVudGVyUGVvcGxlIDogbnVtYmVyID0gNTA7XHJcbiAgICAvKirlh7rln47mlbAg55uu5qCH5YC8Mm1pbiovXHJcbiAgICBwdWJsaWMgZXhpdFBlb3BsZSA6IG51bWJlciA9IDUwO1xyXG4gICAgLyoq5Lq65Y+j5q+U5L6L5pWwIOi/m+WfjuaVsC/lh7rln47mlbAgMm1pbiovXHJcbiAgICBwdWJsaWMgcGVyY2VudCA6IG51bWJlciA9IDE7XHJcbiAgICAvKirln47lpJbkurrlj6PmlbDnu4QqL1xyXG4gICAgcHVibGljIGFycl9vdXRQZW9wbGUgOiBBcnJheTxQZW9wbGU+O1xyXG4gICAgLyoq5Z+O5YaF5Lq65Y+j5pWw57uEICovXHJcbiAgICBwdWJsaWMgYXJyX2luUGVvcGxlIDogQXJyYXk8UGVvcGxlPjtcclxuICAgIC8qKuWHuuWfjuS6uuWPoyDlrp7pmYXlgLwvMm1pbiAqL1xyXG4gICAgcHVibGljIF9vdXRlclBlb3BsZSA6IG51bWJlcjtcclxuICAgIC8qKui/m+mXqOS6uuWPoyDlrp7pmYXlgLwvMm1pbiAqL1xyXG4gICAgcHVibGljIF9pbm5lclBlb3BsZSA6IG51bWJlcjtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pmu6YCa5Lq65Y+j5Y2g5q+UXHJcbiAgICAvKiowLeWMu+eUnyAxLeitpuWvnyAyLeWVhuS6uiAtM+a4uOaJi+WlvemXsiAtNOWGnOawkSovXHJcbiAgICBwdWJsaWMgYXJyX3BlcnNvblBlcmNlbnROYW1lIDogQXJyYXk8c3RyaW5nPiA9IFtcInBlcmNlbnREb2N0b3JcIixcInBlcmNlbnRQb2xpY1wiLFwicGVyY2VudFNob3BlclwiLFwicGVyY2VudE5vdGhpbmdcIixcInBlcmNlbnRGYXJtZXJcIl07XHJcbiAgICAvKirmma7pgJrkurrkuK0g5Yy755Sf55qE5Y2g5q+UKi9cclxuICAgIHB1YmxpYyBwZXJjZW50RG9jdG9yIDogbnVtYmVyID0gMC4wMjtcclxuICAgIC8qKuaZrumAmuS6uuenjSDorablr5/ljaDmr5QgKi9cclxuICAgIHB1YmxpYyBwZXJjZW50UG9saWMgOiBudW1iZXIgPSAwLjAzO1xyXG4gICAgLyoq5pmu6YCa5Lq656eNIOWVhuS6uueahOWNoOavlCAqL1xyXG4gICAgcHVibGljIHBlcmNlbnRTaG9wZXIgOiBudW1iZXIgPSAwLjE1O1xyXG4gICAgLyoq5ri45omL5aW96ZeyICovXHJcbiAgICBwdWJsaWMgcGVyY2VudE5vdGhpbmcgOiBudW1iZXIgPSAwLjE7XHJcbiAgICAvKirlhpzmsJEgKi9cclxuICAgIHB1YmxpYyBwZXJjZW50RmFybWVyIDogbnVtYmVyID0gMC43O1xyXG5cclxuICAgIC8vLS0tLS0tLS3lvbHlk40g44CQ5Li75pWw5o2u44CRLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0t5LqL5Lu25pWw5o2uXHJcbiAgICAvKirnmJ/nlqsgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfKi9cclxuICAgIHB1YmxpYyBwZXN0IDogbnVtYmVyID0gMDtcclxuICAgIC8qKuWcsOmchyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8gKi9cclxuICAgIHB1YmxpYyBuYXR1cmFsRGlzYXN0ZXIgOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5oiY5LmxICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyovXHJcbiAgICBwdWJsaWMgd2FyIDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLy0tLS0tLS0t6IGM5Lia5Lq65pWwXHJcbiAgICBwdWJsaWMgYXJyX1Blb3BsZSA6IEFycmF5PHN0cmluZz4gPSBbXCJjb21tb25cIixcInNjaWVudGlzdFwiLFwic3RhclwiLFwiYmFuZGl0XCIsXCJyb2JiZXJcIl07XHJcbiAgICAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xyXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDk1O1xyXG4gICAgLyoq56eR5a2m5a62IFNTUyovXHJcbiAgICBwdWJsaWMgc2NpZW50aXN0IDogbnVtYmVyID0gMTtcclxuICAgIC8qKuaYjuaYnyBTUyovXHJcbiAgICBwdWJsaWMgc3RhciA6IG51bWJlciA9IDI7XHJcbiAgICAvKirlnJ/ljKogLVMgKi9cclxuICAgIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAxO1xyXG4gICAgLyoq55uX6LS8IC1BICovXHJcbiAgICBwdWJsaWMgcm9iYmVyIDogbnVtYmVyID0gMTtcclxuICAgICAgICAvLyAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSAxO1xyXG4gICAgICAgIC8vIC8qKuenkeWtpuWutiBTU1MqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuaYjuaYnyBTUyovXHJcbiAgICAgICAgLy8gcHVibGljIHN0YXIgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuWcn+WMqiAtUyAqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuebl+i0vCAtQSAqL1xyXG4gICAgICAgIC8vIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5bey55Sf5oiQ55qE5Lq656eNICAwIOaZrumAmiAgIDHnp5HlrablrrYgIDLmmI7mmJ8gM+Wcn+WMqiA055uX6LS8Ki9cclxuICAgIHB1YmxpYyBhbHJlYWR5Q3JlYXRlIDogQXJyYXk8bnVtYmVyPiA9IFswLDAsMCwwLDBdO1xyXG5cclxuICAgIC8vLS0tLS0tLS3ln47pl6hcclxuICAgIC8qKumXqOaYr+WQpuaJk+W8gCovXHJcbiAgICBwdWJsaWMgaXNEb29yT3BlbiA6IGJvb2xlYW49dHJ1ZTtcclxuICAgIC8qKuetm+afpeiDveWKmyDlkK/liqjnibnmrorpl6jnmoTml7blgJkgIOetm+afpeiDveWKm+eUn+aViCovXHJcbiAgICBwdWJsaWMgcHJlcGFyYXRpb24gOiBudW1iZXIgPSAwLjU7XHJcbiAgICAvKirnibnmrorpl6gg562b5p+lIDEt6Ziy5q2i6L+b5YWlICAgMi3pgoDor7fov5vlhaUqL1xyXG4gICAgLy8gcHVibGljIGtlZXBTZWxlY3QgOiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWMuuWfn1xyXG4gICAgLyoq5aKZ5YaF5Yy65Z+f5YiS5YiGICovXHJcbiAgICBwdWJsaWMgYXJyX0xlZnRBcmVhIDogQXJyYXk8YW55PjtcclxuICAgIHB1YmxpYyBhcnJfUmlnaHRBcmVhIDogQXJyYXk8YW55PjtcclxuICAgIFxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS3ls7DlgLxcclxuICAgIC8qKuWbveWutuW5uOemj+W6puWzsOWAvCAqL1xyXG4gICAgcHVibGljIHBvcHVsYXJTdXBwb3J0TWF4IDogbnVtYmVyID0gMTAwO1xyXG4gICAgLyoq5Zu95a6256eR5oqA5bOw5YC8ICovXHJcbiAgICBwdWJsaWMgdGVjaG5vbG9neU1heCA6IG51bWJlciA9IDEwMDtcclxuICAgIC8qKuWbveWutuWjsOacm+WzsOWAvCAqL1xyXG4gICAgcHVibGljIHByZXN0aWdlTWF4IDogbnVtYmVyID0gMTAwO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgICAgICB0aGlzLmFycl9pblBlb3BsZSA9IG5ldyBBcnJheTxQZW9wbGU+KCk7XHJcbiAgICAgICAgdGhpcy5hcnJfb3V0UGVvcGxlID0gbmV3IEFycmF5PFBlb3BsZT4oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluWMuuWfnyAqL1xyXG4gICAgcHVibGljIHNldEFyZWEodmlldyA6IExheWEuTm9kZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdmlldy5fY2hpbGRyZW47XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxjaGlsZHJlbi5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0ubmFtZSA9PSBcInBhbGFjZVwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYS5wdXNoKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyX1JpZ2h0QXJlYS5wdXNoKGNoaWxkcmVuW2ldKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihjaGlsZHJlbltpXS54PDk4MSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEucHVzaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaCh2aWV3LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInNwX3dhbGxcIikpO1xyXG4gICAgICAgIHRoaXMuYXJyX1JpZ2h0QXJlYS5wdXNoKHZpZXcucGFyZW50LmdldENoaWxkQnlOYW1lKFwic3Bfd2FsbFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq655qE6ZqP5py656e75Yqo6YCf5bqmICovXHJcbiAgICBwdWJsaWMgZ2V0TW92ZVNwZWVkKCkgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gR2FtZUNvbmZpZy5URVNUX1BPSU5UX1NQRUVEKihNYXRoLnJhbmRvbSgpKzAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkurrlj6PmtYHph48gOlxyXG4gICAgICogcmV0dXJuIOi/m+WFpSAvIOWHuuWOu1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0X1Blb3BsZU1vdmUoKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlcmNlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkurrnp43mr5TkvotcclxuICAgICAqIEBwYXJhbSB0eXBlIOS6uuenjVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0X1Byb2Zlc3Npb25QZXJjZW50KHR5cGU6c3RyaW5nKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXNbdHlwZV0gPT09IHVuZGVmaW5lZCkgY29uc29sZS5sb2coXCLkuI3lrZjlnKjor6Xkurrnp41cIik7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpc1t0eXBlXS8odGhpcy5wb3B1bGF0aW9uKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t57uT566XXHJcbiAgICAvKirorr7nva7kupTlpKfkuLvlgLznu5PnrpcgKi9cclxuICAgIHB1YmxpYyBzZXRfTWFpbkRhdGEodHlwZTpzdHJpbmcsY291bnQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoKHR5cGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIFwibW9uZXlcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uZXkrPWNvdW50O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwb3B1bGF0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRpb24rPWNvdW50O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwb3B1bGFyU3VwcG9ydFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1bGFyU3VwcG9ydCs9Y291bnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRlY2hub2xvZ3lcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudGVjaG5vbG9neSs9Y291bnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInByZXN0aWdlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXN0aWdlKz1jb3VudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbF9NYWluRGF0YSh0eXBlLGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBjYWxfTWFpbkRhdGEodHlwZTpzdHJpbmcsY291bnQ6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuTUFJTl9NT05FWTpcclxuICAgICAgICAgICAgLy8vVE8gRE9cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/otKLmlL8g5b2x5ZON57uT566XXHJcbiAgICAgICAgdGhpcy5tb25leUluZmx1ZW5jZSgpO1xyXG4gICAgICAgIC8v5Lq65Y+jIOW9seWTjee7k+eul1xyXG4gICAgICAgIHRoaXMucG9wdWxhclN1cHBvcnRJbmZsdWVuY2UoKTtcclxuICAgICAgICAvL+W5uOemj+W6piDlvbHlk43nu5PnrpdcclxuICAgICAgICB0aGlzLnBvcHVsYXJTdXBwb3J0SW5mbHVlbmNlKCk7XHJcbiAgICAgICAgLy/np5HmioAg5b2x5ZON57uT566XXHJcbiAgICAgICAgdGhpcy50ZWNobm9sb2d5SW5mbHVlbmNlKCk7XHJcbiAgICAgICAgLy/lqIHmnJsg5b2x5ZON57uT566XXHJcbiAgICAgICAgdGhpcy5wcmVzdGlnZUluZmx1ZW5jZSgpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICAvKirotKLmlL/nu5Pnrpcg6LSi5pS/5b2x5ZONKi9cclxuICAgIHByaXZhdGUgbW9uZXlJbmZsdWVuY2UoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8qKuW5uOemj+W6piDlvbHlk43nu5PnrpcqL1xyXG4gICAgcHJpdmF0ZSBwb3B1bGFyU3VwcG9ydEluZmx1ZW5jZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuS6uuWPoyDlvbHlk43nu5PnrpcqL1xyXG4gICAgcHJpdmF0ZSBwb3B1bGF0aW9uSW5mbHVlbmNlKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq56eR5oqAIOW9seWTjee7k+eulyovXHJcbiAgICBwcml2YXRlIHRlY2hub2xvZ3lJbmZsdWVuY2UoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirlqIHmnJsg5b2x5ZON57uT566XKi9cclxuICAgIHByaXZhdGUgcHJlc3RpZ2VJbmZsdWVuY2UoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lhazlvI9cclxuICAgIC8qKueos+WumuaUr+WHuiAqL1xyXG4gICAgcHJpdmF0ZSBzdGVhZHlDb3N0KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW9uZXktPXRoaXMuYXJteUNvc3QqKDEtdGhpcy5hcm15UGVyY2VudCkrdGhpcy5nb3Zlcm5Db3N0K3RoaXMudGVjaG5vbG9neUNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq57Ku6aOf5raI6ICXICovXHJcbiAgICBwcml2YXRlIGdyYWluQ29zdCgpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvcHVsYXRpb24qdGhpcy5ncmFpblBlckNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq57Ku6aOf55Sf5LqnICovXHJcbiAgICBwcml2YXRlIHBvcHVsYXRpb25fR3JhaW5BZGQoKTpudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3B1bGF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaUueWPmCDov5vjgIHlh7og55uu5qCH5Lq65pWwIEBpc291dDrmmK/lkKbmmK/lh7rln44gIEBjb3VudO+8muaUueWPmOebruagh+WAvCovXHJcbiAgICBwdWJsaWMgc2V0SW5PdXRUYXJnZXQoaXNPdXQsY291bnQpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKGlzT3V0KSB0aGlzLmV4aXRQZW9wbGUgKz0gY291bnQ7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVudGVyUGVvcGxlICs9IGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaUueWPmCDov5vjgIHlh7og55uu5qCH5Lq65pWwIEBpc291dDrmmK/lkKbmmK/lh7rln44gIEBjb3VudO+8muaUueWPmOWunumZheWAvCovXHJcbiAgICBwdWJsaWMgc2V0SW5PdXRUcnV0aChpc091dCxjb3VudCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXNPdXQpIHRoaXMuX291dGVyUGVvcGxlICs9IGNvdW50O1xyXG4gICAgICAgIGVsc2UgdGhpcy5faW5uZXJQZW9wbGUgKz0gY291bnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKumAmuefpeS6uuWPo+WHuuWfjiBAdHlwZSDvvJog6L+b5oiQdHVyZSAg5Ye65Z+OIGZhbHNlKi9cclxuICAgIHB1YmxpYyBwZW9wbGVHb091dCh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgYXJyIDtcclxuICAgICAgICBpZih0eXBlKSBhcnIgPSB0aGlzLmFycl9vdXRQZW9wbGU7XHJcbiAgICAgICAgICAgIGVsc2UgYXJyID0gdGhpcy5hcnJfaW5QZW9wbGU7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihhcnIubGVuZ3RoKnJhbmRvbSk7XHJcbiAgICAgICAgaWYoaW5kZXg+MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCFhcnJbaW5kZXhdLmlzR28pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycltpbmRleF0ucGVvcGxlR28odHlwZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHRoaXMucGVvcGxlR29PdXQodHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLpmo/mnLrlh7rplJlcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirlh7rln47pl6jnm7jlhbPmk43kvZwgKi9cclxuICAgIHB1YmxpYyBnb091dCh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9vdXRlclBlb3BsZSsrOy8v5a6e6ZmF5Lq65pWw5Yqg5LiAXHJcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uLS07Ly/mgLvkurrlj6MgLS1cclxuICAgICAgICBpZih0aGlzW3R5cGVdKSB0aGlzW3R5cGVdLS07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKuWkluWfjiAqL1xyXG5leHBvcnQgY2xhc3MgT3V0Q291bnRyeURhdGF7XHJcbiAgICBwdWJsaWMgc3RhdGljIGluc18gOiBPdXRDb3VudHJ5RGF0YSA9IG5ldyBPdXRDb3VudHJ5RGF0YSgpO1xyXG4gICAgLyoqKioqKioqKioqKioq5Li75pWw5o2uKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKirmnIDlpKflpJbln47lrrnnurPmlbDph48gKi9cclxuICAgIHB1YmxpYyBtYXhDb3VudCA6IG51bWJlcj01MDtcclxuICAgIC8qKuW9k+WJjeWkluWfjuS6uuWPo+aVsCAqL1xyXG4gICAgcHVibGljIG91dENvdW50Om51bWJlcj0wO1xyXG4gICAgLyoq5Lq65rue55WZ5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgbGltaXRUaW1lOm51bWJlcj01MDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvKirmma7pgJrkuroqL1xyXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDAuODtcclxuICAgIC8qKuenkeWtpuWutiBTU1MqL1xyXG4gICAgcHVibGljIHNjaWVudGlzdCA6IG51bWJlciA9IDAuMDM7XHJcbiAgICAvKirmmI7mmJ8gU1MqL1xyXG4gICAgcHVibGljIHN0YXIgOiBudW1iZXIgPSAwLjAxO1xyXG4gICAgLyoq5Zyf5YyqIC1TICovXHJcbiAgICBwdWJsaWMgYmFuZGl0IDogbnVtYmVyID0gMC4wNjtcclxuICAgIC8qKuebl+i0vCAtQSAqL1xyXG4gICAgcHVibGljIHJvYmJlciA6IG51bWJlciA9IDAuMTtcclxuICAgIC8qKuWPmOmHj+WQjSAqL1xyXG4gICAgcHVibGljIGFycl9QZW9wbGUgOiBBcnJheTxzdHJpbmc+ID0gW1wiY29tbW9uXCIsXCJzY2llbnRpc3RcIixcInN0YXJcIixcImJhbmRpdFwiLFwicm9iYmVyXCJdO1xyXG4gICAgXHJcbiAgICAvKirojrflj5bljLrpl7TmlbDnu4QgMCwwLjgsMC44MywwLjg0LDAuOSwxKi9cclxuICAgIHB1YmxpYyBnZXRQZXJjZW50QXJlYSgpOkFycmF5PG51bWJlcj5cclxuICAgIHtcclxuICAgICAgIGxldCBhcnJQZXJjZW50ID0gW107Ly/nlJ/kuqfmr5TkvotcclxuICAgICAgIGxldCBhcnJfUGVvcGxlID0gdGhpcy5hcnJfUGVvcGxlO1xyXG4gICAgICAgbGV0IG51bWJlciA9IDA7XHJcbiAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcclxuICAgICAgIGZvcihsZXQgaSA9IDA7aTxhcnJfUGVvcGxlLmxlbmd0aDtpKyspXHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgIG51bWJlciArPSB0aGlzW2Fycl9QZW9wbGVbaV1dO1xyXG4gICAgICAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcclxuICAgICAgIH1cclxuICAgICAgIHJldHVybiBhcnJQZXJjZW50O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XHJcblxyXG4vKipcclxuICog5raI5oGv5qGGIOmAmueUqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXNnRGlhbG9nIGV4dGVuZHMgdWkuRGlhLkN1cnJlbnREaWFsb2dVSXtcclxuICAgIC8qKuexu+WeiyAqL1xyXG4gICAgcHJpdmF0ZSB0eXBlIDogbnVtYmVyIDtcclxuICAgIC8qKue8k+WKqCAqL1xyXG4gICAgLy8gcHJpdmF0ZSBzaG93VHdlZW4gOiBMYXlhLlR3ZWVuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIneWni+WMliAqL1xyXG4gICAgcHVibGljIHNob3dNc2codHlwZTpudW1iZXIpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlRGlhbG9nKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUltZygpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVGl0bGUoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVdvcmQoKTsgXHJcbiAgICAgICAgdGhpcy5tc2dCb2R5LnggPSAoOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCktMTE2MykvMjsgICAgICAgXHJcbiAgICAgICAgdGhpcy5tc2dCb2R5LnkgPSAtNTU3OyAgICAgICBcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eTowfSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaNouWbviAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VJbWcoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2godGhpcy50eXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaNouagh+mimCAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VUaXRsZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaWh+Wtl+i9veWFpSAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VXb3JkKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YWz6ZetICovXHJcbiAgICBwdWJsaWMgY2xvc2VEaWFsb2coKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vZmYoTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuY2xvc2VEaWFsb2cpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eTotNTU3fSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQsTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLHRoaXMuY2xvc2VPdmVyKSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlT3ZlcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlOyAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZXJmZWIvUGVvcGxlXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEsIHsgT3V0Q291bnRyeURhdGEgfSBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29tbW9uIGZyb21cIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9Db21tb25cIlxyXG5pbXBvcnQgUm9iYmVyIGZyb21cIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9Sb2JiZXJcIlxyXG4vKipcclxuICog5Lq6IOeuoeeQhlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlTWFuYWdlciB7XHJcbiAgICAvKirop4blm74qL1xyXG4gICAgcHJpdmF0ZSB2aWV3OmFueTsgXHJcbiAgICAvKirmqKrlnZDmoIcgKi9cclxuICAgIHByaXZhdGUgWDpudW1iZXI7XHJcbiAgICAvKirnurXlnZDmoIcgKi9cclxuICAgIHByaXZhdGUgWTpudW1iZXI7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWimeWGhVxyXG4gICAgLyoq55Sf5oiQ6Ze06ZqU6K6h5pe25ZmoICovXHJcbiAgICBwcml2YXRlIGNvdW50VGltZSA6IG51bWJlciA9IDA7XHJcbiAgICAvKirnlJ/kuqfml7bpl7Tpl7TpmpQgKi9cclxuICAgIHByaXZhdGUgY291bnRUaW1lXyA6IG51bWJlciA9IDUwMDtcclxuICAgIC8v5aSW5Z+O5Lq65Y+j6K6h5pe25ZmoXHJcbiAgICBwcml2YXRlIGNvdW50VGltZV9vdXQgOiBudW1iZXIgPSAwOyAgICBcclxuICAgIC8qKuWkluWfjuS6uuWPo+eUn+S6p+mXtOmalCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudFRpbWVfb3V0XyA6IG51bWJlciA9IDUwMDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3RydWN0b3IodmlldylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZpZXc9dmlldztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWQr+eUn+aIkOW3peWOglxyXG4gICAgICog55Sf5oiQ5Lq6IFxyXG4gICAgICog55Sf5oiQ5Lq655qE5L2N572uXHJcbiAgICAgKiDnlJ/kuqfkurrnmoR0eXBlIO+8miDln47ph4zkurov5Z+O5aSW5Lq6IOmAu+i+keWIhuW8gFxyXG4gICAgICovXHJcbiAgICAvKirlvIDlkK/nlJ/miJDlt6XljoIgKi9cclxuICAgIHB1YmxpYyBvcGVuUGVvcGxlRmFjdG9yeSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEudGltZXIubG9vcCgxLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueUn+aIkOS6uiAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmNvdW50VGltZV9vdXQgPD0gdGhpcy5jb3VudFRpbWVfb3V0XylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRUaW1lX291dCsrO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnRUaW1lX291dCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb3VudFRpbWVfb3V0XyA9IE1hdGgucmFuZG9tKCkqR2FtZUNvbmZpZy5QRVJTT05fQ1JFQVRFX1RJTUUqMTAwO1xyXG4gICAgICAgIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQgPj0gT3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBlb3BsZTtcclxuICAgICAgICAvKirnlJ/miJDkuI3lkIzkurrnp43nmoTlh6DnjocgKi9cclxuICAgICAgICBsZXQgcmFuZG9tPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDApO1xyXG4gICAgICAgIC8v5pmu6YCa5Lq6XHJcbiAgICAgICAgaWYocmFuZG9tPj0wJiZyYW5kb208ODApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwiY29tbW9uXCIpO1xyXG4gICAgICAgICAgICBpZighcGVvcGxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBDb21tb24odGhpcy52aWV3LEdhbWVDb25maWcuQ09NTU9OX01BTix0cnVlKTtcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX291dFBlb3BsZS5wdXNoKHBlb3BsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lsI/lgbdcclxuICAgICAgICBlbHNlIGlmKHJhbmRvbT49ODAmJnJhbmRvbTw5MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJyb2JiZXJcIik7XHJcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFJvYmJlcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5ST0JCRVJfTUFOLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+Wcn+WMqlxyXG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj05MCYmcmFuZG9tPDk2KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcImJhbmRpdFwiKTtcclxuICAgICAgICAgICAgaWYoIXBlb3BsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgUm9iYmVyKHRoaXMudmlldyxHYW1lQ29uZmlnLkJBTkRJVF9NQU4sdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v56eR5a2m5a62XHJcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PTk2JiZyYW5kb208OTkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwic2NpZW50aXN0XCIpO1xyXG4gICAgICAgICAgICBpZighcGVvcGxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuU0NJRU5USVNUX01BTix0cnVlKTtcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX291dFBlb3BsZS5wdXNoKHBlb3BsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mmI7mmJ9cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwic3RhclwiKTtcclxuICAgICAgICAgICAgaWYoIXBlb3BsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgUm9iYmVyKHRoaXMudmlldyxHYW1lQ29uZmlnLlNUQVJfTUFOLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwZW9wbGUudmlzaWJsZT10cnVlO1xyXG4gICAgICAgIHBlb3BsZS5pc091dCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nZXRQb3MoKTtcclxuICAgICAgICBwZW9wbGUuc2V0UG9zKHRoaXMuWCx0aGlzLlkpO1xyXG4gICAgICAgIHBlb3BsZS5vcGVuQmVoYXZpb3VyKCk7XHJcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueUn+aIkOS6uueahOS9jee9riAqL1xyXG4gICAgcHVibGljIGdldFBvcygpOmFueVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0eXBlTnVtPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozKTtcclxuICAgICAgICBzd2l0Y2godHlwZU51bSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIC8v5ZyoQei+ueeVjFxyXG4gICAgICAgICAgICAgICAgdGhpcy5YPTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlk9TWF0aC5yYW5kb20oKSozOTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgLy/lnKhC6L6555WMXHJcbiAgICAgICAgICAgICAgICB0aGlzLlg9TWF0aC5yYW5kb20oKSoyMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ZPTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgLy/lnKhD6L6555WMXHJcbiAgICAgICAgICAgICAgICB0aGlzLlg9MjAwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuWT1NYXRoLnJhbmRvbSgpKjM5MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKueVjOmZkOajgOa1iyAqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgXHJcbiAgICBcclxuICAgIHB1YmxpYyBjaGVja1BlcmNlbnQocGVvcGxlLHR5cGU6c3RyaW5nKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/mtYHliqjmr5Tkvovmo4DmtYtcclxuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLnBlcmNlbnQ8MSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirliJvlu7rlopnlhoXkurogKi9cclxuICAgIHB1YmxpYyBjcmVhdGVQZW9wbGVfSW5uZXIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgIGxldCByYW5kb21TdHJpbmcgO1xyXG4gICAgICAgbGV0IGFyclBlcmNlbnQgPSBbXTsvL+eUn+S6p+avlOS+i1xyXG4gICAgICAgbGV0IGFycl9QZW9wbGUgPSBDb3VudHJ5RGF0YS5pbnNfLmFycl9QZW9wbGU7XHJcbiAgICAgICBsZXQgbnVtYmVyID0gMDtcclxuICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xyXG4gICAgICAgZm9yKGxldCBpID0gMDtpPGFycl9QZW9wbGUubGVuZ3RoO2krKylcclxuICAgICAgIHtcclxuICAgICAgICAgICAgbnVtYmVyICs9IENvdW50cnlEYXRhLmluc18uZ2V0X1Byb2Zlc3Npb25QZXJjZW50KGFycl9QZW9wbGVbaV0pO1xyXG4gICAgICAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcclxuICAgICAgIH1cclxuICAgICAgIGNvbnNvbGUubG9nKGFyclBlcmNlbnQpO1xyXG4gICAgICAgTGF5YS50aW1lci5sb29wKDEsdGhpcyx0aGlzLmdldFJhbmRvbSxbYXJyUGVyY2VudF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueUn+S6p+S6uiAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVfSW5uZXIocmFuZG9tU3RyaW5nKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZihyYW5kb21TdHJpbmcgPT0gXCJub25lXCIpIHJldHVybjtcclxuICAgICAgICBsZXQgcGVvcGxlID0gTGF5YS5Qb29sLmdldEl0ZW0ocmFuZG9tU3RyaW5nKTsgIFxyXG4gICAgICAgIGxldCBjb3VudHJ5RGF0YSA9IENvdW50cnlEYXRhLmluc187XHJcbiAgICAgICAgLy/nlJ/kuqfkurrnp41cclxuICAgICAgICBjb25zb2xlLmxvZyhyYW5kb21TdHJpbmcpO1xyXG4gICAgICAgIHN3aXRjaChyYW5kb21TdHJpbmcpXHJcbiAgICAgICAgeyAgICAvKirlt7LnlJ/miJDnmoTkurrnp40gIDAg5pmu6YCaICAgMeenkeWtpuWutiAgMuaYjuaYnyAz5Zyf5YyqIDTnm5fotLwqL1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuQ09NTU9OX01BTjogICBcclxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzBdKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlJPQkJFUl9NQU46Ly/nm5fotLxcclxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzRdKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkJBTkRJVF9NQU46Ly/lnJ/ljKpcclxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzNdKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNUQVJfTUFOOi8v5piO5pifXHJcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVsyXSsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOOi8v56eR5a2m5a62XHJcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVsxXSsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFwZW9wbGUpIHtjb25zb2xlLmxvZyhcIuaWsOW7uuS6uuWksei0pe+8gVwiKSA7cmV0dXJuO31cclxuICAgICAgICBwZW9wbGUuaXNPdXQgPSBmYWxzZTtcclxuICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9pblBlb3BsZS5wdXNoKHBlb3BsZSk7Ly/liqDlhaXnu7TmiqTmlbDnu4RcclxuICAgICAgICBpZihwZW9wbGUgPT09IHVuZGVmaW5lZCB8fCBwZW9wbGUgPT09IG51bGwpIHtjb25zb2xlLmxvZyhcIuayoeacieeUn+aIkOS6uuenje+8geenjeexuzpcIiArIHJhbmRvbVN0cmluZyk7cmV0dXJuO31cclxuICAgICAgICB0aGlzLmNyZWF0ZVBvcyhwZW9wbGUpO1xyXG4gICAgICAgIHBlb3BsZS5zcGVjaWFsRG8oKTtcclxuICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKueUn+S6p+S9jee9riAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVBvcyhwZW9wbGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBob3VzZU5vZGUgPSAodGhpcy52aWV3IGFzIExheWEuU3ByaXRlKS5nZXRDaGlsZEJ5TmFtZSgnaG91c2UnKTtcclxuICAgICAgICBsZXQgcGVyY2VudCA9IGhvdXNlTm9kZS5fY2hpbGRyZW4ubGVuZ3RoLzEwMDtcclxuICAgICAgICBsZXQgaG91c2UgO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8IGhvdXNlTm9kZS5fY2hpbGRyZW4ubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcGVyY2VudCoxMDApO1xyXG4gICAgICAgICAgICBob3VzZSA9IGhvdXNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvdXNlX1wiK251bWJlcik7XHJcbiAgICAgICAgICAgIGlmKGhvdXNlICE9PSB1bmRlZmluZWQgJiYgaG91c2UgIT09IG51bGwpICBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlLnNldFBvcyhob3VzZS54LGhvdXNlLnksaG91c2UpOyAgIFxyXG4gICAgICAgICAgICAgICAgLy8gcGVvcGxlLnBlb3BsZUludG8oKTsgXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W6ZqP5py65Lq656eNICovXHJcbiAgICBwcml2YXRlIGdldFJhbmRvbShhcnJQZXJjZW50KSA6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuY291bnRUaW1lIDw9IHRoaXMuY291bnRUaW1lXylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRUaW1lKys7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudFRpbWVfID0gTWF0aC5yYW5kb20oKSpHYW1lQ29uZmlnLlBFUlNPTl9DUkVBVEVfVElNRSoxMDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnlJ/miJDpl7TpmpQ6XCIgKyBNYXRoLmZsb29yKHRoaXMuY291bnRUaW1lLzEwMCkgKyBcInNcIik7XHJcbiAgICAgICAgdGhpcy5jb3VudFRpbWUgPSAwO1xyXG5cclxuICAgICAgICBsZXQgbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBsZXQgcGVyc29uID0gXCJcIjtcclxuICAgICAgICBsZXQgaW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhcnJQZXJjZW50Lmxlbmd0aCA7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIWFyclBlcmNlbnRbaSsxXSkgYnJlYWs7XHJcbiAgICAgICAgICAgIGlmKGFyclBlcmNlbnRbaV0gPD0gbnVtYmVyICYmIG51bWJlciA8IGFyclBlcmNlbnRbaSsxXSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVyc29uID0gQ291bnRyeURhdGEuaW5zXy5hcnJfUGVvcGxlW2ldO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFwZXJzb24pIHtjb25zb2xlLmxvZyhcIuS6uuenjemaj+acuuWksei0pe+8gVwiKTtyZXR1cm47fVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tXCIgKyBwZXJzb24pO1xyXG4gICAgICAgIC8v5Yik5pat5Lq65piv5ZCm6L+Y6IO955Sf5oiQXHJcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCl7Y29uc29sZS5sb2coXCLmpoLnjoforqHnrpflh7rplJlcIik7cmV0dXJuO31cclxuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbaW5kZXhdID09IENvdW50cnlEYXRhLmluc19bcGVyc29uXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0QWxyZWFkQ3JlYXRlKCkgPT0gQ291bnRyeURhdGEuaW5zXy5wb3B1bGF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgICAgIHBlcnNvbiA9IHRoaXMuZ2V0UmFuZG9tKGFyclBlcmNlbnQpOyAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFwZXJzb24pe2NvbnNvbGUubG9nKFwi5Lq656eN6ZqP5py65aSx6LSl77yBXCIpO3JldHVybjt9XHJcbiAgICAgICB0aGlzLmNyZWF0ZV9Jbm5lcihwZXJzb24pOy8v55Sf5Lqn5Lq656eNIFxyXG4gICAgICAgcmV0dXJuIHBlcnNvbjsgIFxyXG4gICAgfVxyXG5cclxuICAgIC8q6I635Y+W5bey55Sf5oiQ5Lq65Y+j55qE5pWw6YePKi9cclxuICAgIHB1YmxpYyBnZXRBbHJlYWRDcmVhdGUoKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8Q291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlLmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBudW1iZXIgKz1Db3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbaV1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcclxuICAgIH1cclxufSIsImltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIFVJ566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXJ7XHJcbiAgICAvKirmlbDmja7nrqHnkIblmaggKi9cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgZGF0YU1hbmFnZXIgOiBEYXRhTWFuYWdlcjtcclxuICAgIC8qKlVJIHNwcml0ZSAqL1xyXG4gICAgcHJpdmF0ZSBVaVNwcml0ZSA6IExheWEuU3ByaXRlO1xyXG5cclxuICAgIC8qKui9veWFpeaVsOaNriAqL1xyXG4gICAgY29uc3RydWN0b3IodWk6TGF5YS5TcHJpdGUpe1xyXG4gICAgICAgIHRoaXMuVWlTcHJpdGUgPSB1aTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn0iLCIvKipcclxuICog5LqL5Lu25Y+R55Sf566h55CG5ZmoXHJcbiAqIFxyXG4gKiBcclxuICog55Sf5oiQ5LqL5Lu244CBXHJcbiAqIOW9seWTjeS6uuWPo+a1geWKqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ybGRFdmVudE1hbmFnZXIge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKirkuovku7bpooTmiqXliLAgKi9cclxuICAgIFxyXG5cclxuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xyXG5cclxuICAgIFxyXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBCdXlEaWFsb2cgZnJvbSBcIi4vQ29yZS9CdXlEaWFsb2dcIlxuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi9Db3JlL01zZ0RpYWxvZ1wiXG5pbXBvcnQgT3BlbkdhbWUgZnJvbSBcIi4vU2NyaXB0L09wZW5HYW1lXCJcbmltcG9ydCBHYW1lV29ybGQgZnJvbSBcIi4vU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGRcIlxuaW1wb3J0IE9wZW5TdG9yeSBmcm9tIFwiLi9TY3JpcHQvT3BlblN0b3J5XCJcbmltcG9ydCBDZW50ZXIgZnJvbSBcIi4vU2NyaXB0L0NlbnRlclwiXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xNDQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9OTAwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZGhlaWdodFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiU3RhcnRHYW1lLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJDb3JlL0J1eURpYWxvZy50c1wiLEJ1eURpYWxvZyk7XG4gICAgICAgIHJlZyhcIkNvcmUvTXNnRGlhbG9nLnRzXCIsTXNnRGlhbG9nKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5HYW1lLnRzXCIsT3BlbkdhbWUpO1xuICAgICAgICByZWcoXCJTY3JpcHQvR2FtZVdvcmxkL0dhbWVXb3JsZC50c1wiLEdhbWVXb3JsZCk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9PcGVuU3RvcnkudHNcIixPcGVuU3RvcnkpO1xuICAgICAgICByZWcoXCJTY3JpcHQvQ2VudGVyLnRzXCIsQ2VudGVyKTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG5cdFx0R2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG4iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhLCB7IE91dENvdW50cnlEYXRhIH0gZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFRvb2wgZnJvbSBcIi4uL1Rvb2wvVG9vbFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFBlb3BsZU1hbmFnZXIgZnJvbSBcIi4uL0NvcmUvUGVvcGxlTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiDkurrnp43niLbnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZSB7XHJcbiAgICAvKirlnLrmma8qL1xyXG4gICAgcHJvdGVjdGVkIHZpZXcgOiBMYXlhLlNwcml0ZTtcclxuICAgIC8qKueyvueBtSAqL1xyXG4gICAgcHVibGljIHNwIDogTGF5YS5TcHJpdGU7XHJcbiAgICAvKirmqKrlnZDmoIfnp7vliqjpgJ/luqYgKi9cclxuICAgIHByaXZhdGUgZGlyWDpudW1iZXI7XHJcbiAgICAvKirnurXlnZDmoIfnp7vliqjpgJ/luqYgKi9cclxuICAgIHByaXZhdGUgZGlyWTpudW1iZXI7XHJcbiAgICBcclxuICAgIC8qKioqKioqKioqKioqKioqKioq5aKZ5YaFICoqKioqKioqKioqKi9cclxuICAgIC8qKuWimeWGheS6uui/mOaYr+WimeWkluS6uiAqL1xyXG4gICAgcHVibGljIGlzT3V0IDogYm9vbGVhbjtcclxuICAgIC8qKuS6uuWxnuaApyAqL1xyXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xyXG4gICAgLyoq5Lq655qE5pyd5ZCRICovXHJcbiAgICBwdWJsaWMgdG93YXJkIDogYW55O1xyXG4gICAgLyoq6Z2i5YmN55qENeS4quajgOa1i+eCuSAqL1xyXG4gICAgcHVibGljIHRvd2FyZFBvcyA6IEFycmF5PGFueT47XHJcbiAgICAvKirkurrnmoTnp7vliqjnm67moIfngrkgKi9cclxuICAgIHB1YmxpYyB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGU7XHJcbiAgICAvKirlh7rnlJ/ngrkgKi9cclxuICAgIHB1YmxpYyBib3JuTm9kZSA6IExheWEuU3ByaXRlO1xyXG4gICAgLyoq5piv5ZCm6KKr5Y+s5ZSkICovXHJcbiAgICBwdWJsaWMgaXNHbyA6IG51bWJlcjtcclxuICAgIC8qKumAkuW9kuWBnOatouWPmOmHjyAqL1xyXG4gICAgcHJpdmF0ZSBzdG9wRGkgOiBudW1iZXI7XHJcbiAgICAvKirlj4LogIPpgJ/luqYgKi9cclxuICAgIHByaXZhdGUgc3BlZWQgOiBudW1iZXI7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMuaXNPdXQgPSBpc091dDtcclxuICAgICAgICB0aGlzLnR5cGU9dHlwZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgICAgICB0aGlzLmluaXQodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yid5aeL5YyWICovXHJcbiAgICBwcml2YXRlIGluaXQodHlwZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/mlbDmja7liJ3lp4vljJZcclxuICAgICAgICB0aGlzLnNldERhdGFJbml0KCk7XHJcbiAgICAgICAgLy/liJvlu7pcclxuICAgICAgICB0aGlzLmNyZWF0ZVBlb3BsZSh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmlbDmja7liJ3lp4vljJYgKi9cclxuICAgIHByaXZhdGUgc2V0RGF0YUluaXQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gQ291bnRyeURhdGEuaW5zXy5nZXRNb3ZlU3BlZWQoKTtcclxuICAgICAgICB0aGlzLnRvd2FyZCA9IHtcclxuICAgICAgICAgICAgeDoxMDAwLFxyXG4gICAgICAgICAgICB5OjAsXHJcbiAgICAgICAgICAgIHNwZWVkOnRoaXMuc3BlZWQscm90YXRpb246dW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0YXJnZXRSb3RhdGlvbjp1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHJvdGF0aW9uQ2hhbmdlIDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50b3dhcmRQb3MgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnN0b3BEaSA9IDA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5byA5aeL6KGM5YqoICovXHJcbiAgICBwdWJsaWMgb3BlbkJlaGF2aW91cigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+i/kOihjOS6humAu+i+kVxyXG4gICAgICAgIGlmKHRoaXMuaXNPdXQpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zT3V0KCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoT3V0Q291bnRyeURhdGEuaW5zXy5saW1pdFRpbWUqNjAsdGhpcyx0aGlzLmxpbWl0VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGVvcGxlX1Bvc0lubmVyKCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIubG9vcCgxNix0aGlzLHRoaXMucGVvcGxlX1Bvc0lubmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq6ICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVBlb3BsZSh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAgdGhpcy5jcmVhdGVTcCh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirliJvlu7pTcHJpdGUgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlU3AodHlwZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGltZ1VybCA9IFwibWFwL1wiK3R5cGUrXCIucG5nXCI7XHJcbiAgICAgICAgaWYoIXRoaXMuc3ApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNwID0gbmV3IExheWEuU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnNwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcC5sb2FkSW1hZ2UoaW1nVXJsKTtcclxuICAgICAgICB0aGlzLnNwLnNpemUoMTIsMTIpO1xyXG4gICAgICAgIHRoaXMuc3AucGl2b3QodGhpcy5zcC53aWR0aC8yLHRoaXMuc3AuaGVpZ2h0LzIpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq6K6+572u5Yid5aeL5L2N572uICovXHJcbiAgICBwdWJsaWMgc2V0UG9zKHgseSxzcDpMYXlhLlNwcml0ZSk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcC54ID0geDtcclxuICAgICAgICB0aGlzLnNwLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYm9ybk5vZGUgPSBzcDtcclxuICAgIH1cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5aKZ5aSW5Lq66KGM5Yqo6YC76L6RKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHByaXZhdGUgcGVvcGxlX1Bvc091dCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pa55ZCR77yM5pa55ZCR55SoKC0xfjEp6KGo56S6XHJcbiAgICAgICAgaWYodGhpcy5zcC54PD05MDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5zcC54Pj0xMTAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJYPS1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCkqMi0xO1xyXG4gICAgICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKSoyLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze077yM5Zyo5q2k5pe26Ze05YaF56e75YqoLOmaj+acuuaXtumXtOWcqCgyLDgp5Lit6YCJ5oupXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo2KzI7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMuY2xvc2VNb3ZlVGltZXIpO1xyXG4gICAgICAgIC8v5byA5ZCv56e75YqoXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5Y2V5L2N5bin56e75YqoKi9cclxuICAgIHByaXZhdGUgbW92ZURpc3RhbmNlKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3AueCs9dGhpcy5kaXJYO1xyXG4gICAgICAgIHRoaXMuc3AueSs9dGhpcy5kaXJZO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWFs+mXreenu+WKqOWumuaXtuWZqO+8jOW8gOWQr+WOn+WcsOS8keaBryovXHJcbiAgICBwcml2YXRlIGNsb3NlTW92ZVRpbWVyKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XHJcbiAgICAgICAgLy/kvJHmga/ml7bpl7Tnu5PmnZ/lkI7nu6fnu63np7vliqhcclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjYrMjtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5wZW9wbGVfUG9zT3V0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5rue55WZ5pe26Ze077yM6Iul6LaF6L+H5pe26Ze077yM5bCx56a75byA5aSW5Z+OICovXHJcbiAgICBwcml2YXRlIGxpbWl0VGltZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIGlmKHRoaXMuc3AueDw9MTAwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWD0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAvKirnorDmkp7mo4DmtYsgKi9cclxuICAgIHByaXZhdGUgY2hlY2tMaW1pdF9PdXQoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/ovrnnlYzmo4DmtYtcclxuICAgICAgICBpZih0aGlzLnNwLng8LTV8fHRoaXMuc3AueD4yMDA1fHx0aGlzLnNwLnk8LTUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUoKTtcclxuICAgICAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudC0tO1xyXG4gICAgICAgICAgICBpZihPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50PE91dENvdW50cnlEYXRhLmluc18ubWF4Q291bnQtMSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSozO1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMuY3JlYXRlUGVvcGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/miqTln47msrPmo4DmtYtcclxuICAgICAgICBpZih0aGlzLnNwLnk+PTM5MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v6YeN5paw57uZ5LiA5Liq5L2N56e7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpclk9LU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WfjumXqOWMuuWfn+ajgOa1i1xyXG4gICAgICAgIGlmKHRoaXMuc3AueD45MzImJnRoaXMuc3AueDwxMDY4JiZ0aGlzLnNwLnk+MzUwJiZ0aGlzLnNwLnk8MzkwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/ln47pl6jmmK/lkKbmiZPlvIBcclxuICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvL+WfjuWkluS6uuWPoy0xXHJcbiAgICAgICAgICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50LS07XHJcbiAgICAgICAgICAgICAgICAvL+WbveWutuS6uuWPoysxXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmNhbF9NYWluRGF0YShHYW1lQ29uZmlnLk1BSU5fUE9QVUxBVElPTiwxKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQ8T3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKVxyXG4gICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMztcclxuICAgICAgICAgICAgICAgIC8vICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsY3JlYXRlUGVvcGxlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucGVvcGxlSW50bygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirlopnlhoXkurrooYzliqjpgLvovpEqL1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5aKZ5YaF5Lq66KGM5Yqo6YC76L6RKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgICAgIC8vIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VHJhZ2V0KHRhcmdldDpMYXlhLlNwcml0ZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy50YXJnZXROb2RlID0gdGFyZ2V0O1xyXG4gICAgICAgIC8v5rWL6K+VXHJcbiAgICAgICAgdGhpcy50YXJnZXROb2RlID0gdGFyZ2V0O1xyXG4gICAgICAgIC8vIHRoaXMudG93YXJkLnggPSB0YXJnZXQueDtcclxuICAgICAgICAvLyB0aGlzLnRvd2FyZC55ID0gdGFyZ2V0Lnk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqdG93ZXJk6L2s5YyW5oiQ5L2N56e7ICovXHJcbiAgICBwcm90ZWN0ZWQgdG93ZWRUb01vdmUoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy50b3dhcmQucm90YXRpb24pIHRoaXMudG93YXJkLnJvdGF0aW9uID0gVG9vbC5yb3RhdGVSb3BlUG9pbnRfMih0aGlzLnNwLngsdGhpcy5zcC55LHRoaXMudGFyZ2V0Tm9kZS54LHRoaXMudGFyZ2V0Tm9kZS55KTs7XHJcbiAgICAgICAgdGhpcy5wZW9wbGVUb3dlcmQoKTsvL+iuqeebruagh+acneWQkeiuoeeul+aVsFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuacneWQkSAgdG93ZXJk56e75YqoICovXHJcbiAgICBwcml2YXRlIHBvc01vdmUoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwLnggKz0gdGhpcy50b3dhcmQuc3BlZWQqVG9vbC5yb3RhdGlvblNldCh0aGlzLnRvd2FyZC5yb3RhdGlvbixcInNpblwiKTtcclxuICAgICAgICB0aGlzLnNwLnkgKz0gdGhpcy50b3dhcmQuc3BlZWQqVG9vbC5yb3RhdGlvblNldCh0aGlzLnRvd2FyZC5yb3RhdGlvbixcImNvc1wiKTtcclxuICAgICAgICB0aGlzLnNwLnJvdGF0aW9uID0gdGhpcy50b3dhcmQucm90YXRpb247XHJcbiAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QodGhpcy50YXJnZXROb2RlLHRoaXMuc3ApKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGFyZ2V0Tm9kZS5uYW1lID09PSBcInNwX2Rvb3JcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5nb091dCh0aGlzLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKHRydWUpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb29yUGVvcGxlX1RvT3V0KCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUoKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnNwLnggPCAwIHx8IHRoaXMuc3AueSA+IDkwMCB8fCB0aGlzLnNwLnggPiAyMDAwKSB7dGhpcy5kZXN0b3J5UGVvcGxlKCk7fVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3Aucm90YXRpb24pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirkurrpnaLlkJEgKi9cclxuICAgIHByb3RlY3RlZCBwZW9wbGVUb3dlcmQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdldFRvd2VyZFBvcygpOy8v6I635b6X5LqU5Liq54K577yM5qC55o2u55uu5qCH5Z2Q5qCH6K6h566XXHJcbiAgICAgICAgdGhpcy50ZXN0VG93ZXJkKCk7Ly/mo4DmtYvmmK/lkKbnrKblkIjopoHmsYIg5LiN56ym5ZCIICsgLSA1XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5qOA5rWL6KGM6LWw5pa55ZCRICovXHJcbiAgICBwcm90ZWN0ZWQgdGVzdFRvd2VyZCgpIDogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBwb3dlciA9IHRoaXMudGVzdENvbGlkZXIoKTsvLyAtMSAwIDEgMiAzIDQgNVxyXG4gICAgICAgIGlmKHBvd2VyID4gMClcclxuICAgICAgICB7Ly/mkp7liLDkuobpnIDopoHovazmlrnlkJFcclxuICAgICAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2UgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkQ3RyKHBvd2VyKTtcclxuICAgICAgICAgICAgdGhpcy5qdWRnZUxlZnRSaWdodCgpOyAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucG9zTW92ZSgpOy8v56e75YqoXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maW5kVGFyZ2V0KCk7XHJcbiAgICAgICAgdGhpcy50b3dhcmQuc3BlZWQgPSB0aGlzLnNwZWVkOyAgICAgIFxyXG4gICAgICAgIHRoaXMucG9zTW92ZSgpOy8v56e75YqoICBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpgJ/luqbmjqfliLYgKi9cclxuICAgIHByaXZhdGUgc3BlZWRDdHIocG93ZXIpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudG93YXJkLnNwZWVkID0gdGhpcy5zcGVlZCooKHBvd2VyKzEpLyh0aGlzLnRvd2FyZFBvcy5sZW5ndGgrMikpOyBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNwZWVkIDo6XCIgKyB0aGlzLnRvd2FyZC5zcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pat5pa55ZCRICovXHJcbiAgICBwcm90ZWN0ZWQganVkZ2VMZWZ0UmlnaHQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnN0b3BEaSsrO1xyXG4gICAgICAgIGlmKHRoaXMuc3RvcERpPjM2KSB7dGhpcy5zdG9wRGkgPSAwO3JldHVybjt9XHJcbiAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2UgKz0gR2FtZUNvbmZpZy5URVNUX1BPSU5UX1JPO1xyXG4gICAgICAgIGxldCBybzEgPSB0aGlzLnRvd2FyZC5yb3RhdGlvbiAtIHRoaXMudG93YXJkLnJvdGF0aW9uQ2hhbmdlO1xyXG4gICAgICAgIGxldCBybzIgPSB0aGlzLnRvd2FyZC5yb3RhdGlvbiArIHRoaXMudG93YXJkLnJvdGF0aW9uQ2hhbmdlO1xyXG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKHJvMSk7XHJcbiAgICAgICAgbGV0IG51bVJvMSA9IHRoaXMudGVzdENvbGlkZXIoKTtcclxuICAgICAgICB0aGlzLmdldFRvd2VyZFBvcyhybzIpO1xyXG4gICAgICAgIGxldCBudW1SbzIgPSB0aGlzLnRlc3RDb2xpZGVyKCk7XHJcbiAgICAgICAgaWYobnVtUm8xID09IC0xKSB7dGhpcy50b3dhcmQucm90YXRpb24gPSBybzE7IHJldHVybjt9XHJcbiAgICAgICAgaWYobnVtUm8yID09IC0xKSB7dGhpcy50b3dhcmQucm90YXRpb24gPSBybzI7IHJldHVybjt9XHJcbiAgICAgICAgdGhpcy5qdWRnZUxlZnRSaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKmZpbmRUYXJnZXTlr7vmib7nm67moIcgKi9cclxuICAgIHByaXZhdGUgZmluZFRhcmdldCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBDYSA9IHRoaXMudG93YXJkLnJvdGF0aW9uIC0gdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb247XHJcbiAgICAgICAgaWYoQ2EgPiAwKSB0aGlzLnRvd2FyZC5yb3RhdGlvbiAtPSA1O1xyXG4gICAgICAgICAgICBlbHNlIGlmKCBDYSA8IDAgKSB0aGlzLnRvd2FyZC5yb3RhdGlvbiArPTU7XHJcbiAgICAgICAgaWYoIE1hdGguYWJzKENhKSA8IDUpIHRoaXMudG93YXJkLnJvdGF0aW9uICs9IENhO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIC8qKuajgOa1i+aYr+WQpueisOaSniDmkp7liLDkuobov5Tlm550dXJlIC0x5Y+v5Lul6LWwIDDku6XkuIrooajnpLrnorDmkp7liLDlk6rkuKrngrkqL1xyXG4gICAgcHJvdGVjdGVkIHRlc3RDb2xpZGVyKCkgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgbnVtID0gLTE7XHJcbiAgICAgICAgbGV0IGFyZWEgOiBBcnJheTxMYXlhLlNwcml0ZT49IERhdGFNYW5hZ2VyLmluc18uYXJyX1JpZ2h0QXJlYTtcclxuICAgICAgICBpZih0aGlzLnNwLng8OTgxKSBhcmVhID0gRGF0YU1hbmFnZXIuaW5zXy5hcnJfTGVmdEFyZWE7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhcmVhLmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihUb29sLmJsb2NrVGVzdCh0aGlzLmJvcm5Ob2RlLHRoaXMuc3ApKSB7cmV0dXJuIC0xO31cclxuICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QoYXJlYVtpXSx0aGlzLnNwKSl7cmV0dXJuIDA7fS8v5aaC5p6c5bey57uP5pKe5LiK5LqG44CCICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGggPSAwO2g8dGhpcy50b3dhcmRQb3MubGVuZ3RoO2grKylcclxuICAgICAgICAgICAgey8v5LqU5Liq54K55qOA5rWLXHJcbiAgICAgICAgICAgICAgICBpZihUb29sLmJsb2NrVGVzdCh0aGlzLnRhcmdldE5vZGUsdGhpcy50b3dhcmRQb3NbaF0pKXtyZXR1cm4tMTt9XHJcbiAgICAgICAgICAgICAgICBpZihUb29sLmJsb2NrVGVzdChhcmVhW2ldLHRoaXMudG93YXJkUG9zW2hdKSlcclxuICAgICAgICAgICAgICAgIHsvL+emu+S6uuacgOi/keeahOeCuVxyXG4gICAgICAgICAgICAgICAgICAgIG51bSA9IGgrMTsvLzHvvIwy77yMM++8jDTvvIw1XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuS6uumdouWQkeeahOS6lOS4quajgOa1i+eCuSAqL1xyXG4gICAgcHJvdGVjdGVkIGdldFRvd2VyZFBvcyhyb3RhdGlvblRlc3Q/KSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcm90YXRpb24gPSB0aGlzLnRvd2FyZC5yb3RhdGlvbjsvL+S9v+eUqOW9k+WJjemdouWQkVxyXG4gICAgICAgIGlmKHJvdGF0aW9uVGVzdCkgcm90YXRpb24gPSByb3RhdGlvblRlc3Q7XHJcbiAgICAgICAgZWxzZSB0aGlzLmtlZXBUb3dlcmREYXRhKCk7Ly/kv53lrZgg546w5Zyo5Li65q2i5Yiw55uu5qCH54K555qE6KeS5bqmXHJcbiAgICAgICAgaWYocm90YXRpb24gPT09IHVuZGVmaW5lZCkgXHJcbiAgICAgICAgey8v5aaC5p6c6KeS5bqm5pivdW5kZWZcclxuICAgICAgICAgICAgcm90YXRpb24gPSB0aGlzLnRvd2FyZC50YXJnZXRSb3RhdGlvbi8v55uu5qCH6KeS5bqm77yM5Yid5aeL6KeS5bqmICAgXHJcbiAgICAgICAgICAgIHRoaXMudG93YXJkLnJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+S9jeenu+mcgOimgeeahOWPmOmHj1xyXG4gICAgICAgIGxldCBjb3MgOiBudW1iZXIgPSBUb29sLnJvdGF0aW9uU2V0KHJvdGF0aW9uLFwiY29zXCIpO1xyXG4gICAgICAgIGxldCBzaW4gOiBudW1iZXIgPSBUb29sLnJvdGF0aW9uU2V0KHJvdGF0aW9uLFwic2luXCIpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLXg6OlwiICsgdGhpcy5zcC54ICsgXCJ5OjpcIiArIHRoaXMuc3AueSk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxHYW1lQ29uZmlnLlRFU1RfUE9JTlRfQ09VTlQ7aSsrKS8v6K6w5b2V5LqU5LiqXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgaWYoIXRoaXMudG93YXJkUG9zW2ldKSB0aGlzLnRvd2FyZFBvc1tpXSA9IHt9OyAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudG93YXJkUG9zW2ldLnggPSB0aGlzLnNwLnggKyBHYW1lQ29uZmlnLlRFU1RfUE9JTlRfRElDKnNpbiooaSsxKTtcclxuICAgICAgICAgICAgdGhpcy50b3dhcmRQb3NbaV0ueSA9IHRoaXMuc3AueSArIEdhbWVDb25maWcuVEVTVF9QT0lOVF9ESUMqY29zKihpKzEpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50b3dhcmRQb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuS/neWtmCB0b3dlcuS/oeaBryAqL1xyXG4gICAgcHJvdGVjdGVkIGtlZXBUb3dlcmREYXRhKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/lrZjlgqjnjrDlnKjngrnliLDnm67moIfop5LluqZcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICB0aGlzLnRvd2FyZC50YXJnZXRSb3RhdGlvbiA9IFRvb2wucm90YXRlUm9wZVBvaW50XzIodGhpcy5zcC54LHRoaXMuc3AueSx0aGlzLnRhcmdldE5vZGUueCx0aGlzLnRhcmdldE5vZGUueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Zyo6L+Q6KGM56e75Yqo6YC76L6R5LmL5YmNIOeahOeJueauiuaTjeS9nCAqL1xyXG4gICAgcHJvdGVjdGVkIHNwZWNpYWxEbygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLyoqKlxyXG4gICAgICog6L+b56iLIC8g5Ye65Z+O6YC76L6RIFxyXG4gICAgICogQHR5cGUgdHJ1Zei/m+WfjiAgZmFsc2Xlh7rln45cclxuICAgICovXHJcbiAgICBwdWJsaWMgcGVvcGxlR28odHlwZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgICAgIGlmKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIC8v6L+b5Z+O5pa55rOVXHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dFBlb3BsZV9Ub0Rvb3IoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL+WHuuWfjuaWueazlVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW9wbGVPdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWfjuWkluW8uuWItui/m+mXqCAqL1xyXG4gICAgcHJpdmF0ZSBvdXRQZW9wbGVfVG9Eb29yKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgbGV0IGRpclg9MTAwMC10aGlzLnNwLng7XHJcbiAgICAgICAgbGV0IGRpclk9NDEwLXRoaXMuc3AueTtcclxuICAgICAgICBsZXQgZGlzPU1hdGguc3FydChNYXRoLnBvdygxMDAwLXRoaXMuc3AueCwyKStNYXRoLnBvdyg0MTAtdGhpcy5zcC55LDIpKTtcclxuICAgICAgICB0aGlzLmRpclg9ZGlyWC9kaXM7XHJcbiAgICAgICAgdGhpcy5kaXJZPWRpclkvZGlzO1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMuY2hlY2tMaW1pdF9PdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumXqOW8uuWItuWHuuWfjuWkliAqL1xyXG4gICAgcHJpdmF0ZSBkb29yUGVvcGxlX1RvT3V0KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNPdXQgPSB0cnVlO1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgbGV0IHg9TWF0aC5yYW5kb20oKSoxMzYrOTMyO1xyXG4gICAgICAgIGxldCB5PTM1MDtcclxuICAgICAgICB0aGlzLnNldFBvcyh4LHksdGhpcy5zcCk7XHJcbiAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCkqMi0xO1xyXG4gICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKSowLjctMC4yO1xyXG4gICAgICAgIC8vIHRoaXMub3BlbkJlaGF2aW91cigpO1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMuY2hlY2tMaW1pdF9PdXQpO1xyXG4gICAgfVxyXG5cclxuICAgLyoq5Ye65Z+O6YC76L6RICovXHJcbiAgIHByb3RlY3RlZCBwZW9wbGVPdXQoKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcInNwX2Rvb3JcIikgYXMgTGF5YS5TcHJpdGUpOy8v6K6+572u55uu5qCH5piv6ZeoXHJcbiAgIH1cclxuXHJcbiAgIC8qKui/m+WfjuaWueazlSDku47mraPpl6jliLDmn5DkuIDkuKrkvY/lroUqL1xyXG4gICBwcm90ZWN0ZWQgcGVvcGxlSW50bygpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICAgbGV0IGJvcm5Ob2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwic3BfZG9vclwiKSBhcyBMYXlhLlNwcml0ZTtcclxuICAgICAgICB0aGlzLmlzT3V0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgdGhpcy5zZXRQb3MoYm9ybk5vZGUueCxib3JuTm9kZS55ICsgNDAsYm9ybk5vZGUpO1xyXG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xyXG4gICAgICAgIHRoaXMub3BlbkJlaGF2aW91cigpO1xyXG4gICB9XHJcblxyXG4gICAvKirku45ob3VzZeS4reiOt+WPliDkuIDkuKrpmo/mnLrnmoTngrkgKi9cclxuICAgcHJvdGVjdGVkIGdldFRhcmdlUG9zKGhvdXNlTm9kZSkgOiBMYXlhLlNwcml0ZVxyXG4gICB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcigoKGhvdXNlTm9kZSBhcyBMYXlhLlNwcml0ZSkuX2NoaWxkcmVuLmxlbmd0aC0xKSpyYW5kb20pO1xyXG4gICAgICAgIGxldCB0YXJnZXROb2RlIDpMYXlhLlNwcml0ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiAtLS0tLS0tLS0gZ2V0VGFyZ2V0IFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluZGV4IDo6XCIgKyBpbmRleCk7XHJcbiAgICAgICAgaWYoaW5kZXggPj0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhcmdldE5vZGUgPSBob3VzZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZV9cIitpbmRleCk7XHJcbiAgICAgICAgICAgIGlmKHRhcmdldE5vZGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXROb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6ZqP5py65pWw5Y+W6ZSZXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgfVxyXG5cclxuICAgIC8qKuS6uua2iOWksSBpc3JlY292ZXLkuI3lm57mlLblkJcgKi9cclxuICAgIHByb3RlY3RlZCBkZXN0b3J5UGVvcGxlKG5vdFJlY292ZXI/KSA6IHZvaWRcclxuICAgIHsgICBcclxuICAgICAgICBpZighbm90UmVjb3ZlcikgTGF5YS5Qb29sLnJlY292ZXIodGhpcy50eXBlLHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZighdGhpcy5pc091dCkgdGhpcy5kZXN0b3J5SW5uZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlopnlhoXkurrliKDpmaQg54m55q6K5aSE55CGICovXHJcbiAgICBwcm90ZWN0ZWQgZGVzdG9yeUlubmVyKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/orqHml7blmajmuIXmpZpcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5wZW9wbGVfUG9zSW5uZXIpO1xyXG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuQ09NTU9OX01BTjpcclxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVswXT4wKVxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzBdLS07XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5CQU5ESVRfTUFOOlxyXG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzNdPjApXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbM10tLTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlJPQkJFUl9NQU46XHJcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbNF0+MClcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVs0XS0tO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuU0NJRU5USVNUX01BTjpcclxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVsxXT4wKVxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzFdLS07XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TVEFSX01BTjpcclxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVsyXT4wKVxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzJdLS07XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuaW1wb3J0IFRvb2wgZnJvbSBcIi4uLy4uL1Rvb2wvVG9vbFwiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uLy4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24gZXh0ZW5kcyBQZW9wbGV7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTsgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5aKZ5YaF6YC76L6RICovXHJcbiAgICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirph43lhplzcGVjaWFsZG8gKi9cclxuICAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+iOt+WPluWNoOavlOaVsOe7hFxyXG4gICAgICAgIGxldCBhcnJfcGVyY2VudCA9IFRvb2wuZ2V0UGVyY2VudEFyZWEoQ291bnRyeURhdGEuaW5zXy5hcnJfcGVyc29uUGVyY2VudE5hbWUpO1xyXG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGxldCBpbmRleDtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPGFycl9wZXJjZW50Lmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZighYXJyX3BlcmNlbnRbaSsxXSkgYnJlYWs7XHJcbiAgICAgICAgICAgIGlmKGFycl9wZXJjZW50W2ldIDwgcmFuZG9tICYmIHJhbmRvbSA8PSBhcnJfcGVyY2VudFtpKzFdKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCkge2NvbnNvbGUubG9nKFwi5qaC546H6K6h566X5Ye66ZSZXCIpO3JldHVybjt9XHJcbiAgICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7dHJ1ZTtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgICAgICBpZih0YXJnZXROb2RlICE9PSB0aGlzLmJvcm5Ob2RlKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoKGluZGV4KVxyXG4gICAgICAgIHsgICAgLyoqMC3ljLvnlJ8gMS3orablr58gMi3llYbkurogLTPmuLjmiYvlpb3pl7IgLTTlhpzmsJEqL1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcImhvc3BpdGFsXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTsgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwiZmFybVwiKSBhcyBMYXlhLlNwcml0ZSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvYmJlciBleHRlbmRzIFBlb3BsZXtcclxuICAgIC8qKui0ouaUv+S8pOWusyAqL1xyXG4gICAgcHVibGljIG1vbmV5Om51bWJlcjtcclxuICAgIC8qKuW5uOemj+W6piAqL1xyXG4gICAgcHVibGljIHBvcHVsYXJTdXBwb3J0Om51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xyXG4gICAgICAgIHN1cGVyKHZpZXcsdHlwZSxpc091dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YG35Y+W6LSi5pS/55qE5pa55byPLOWFiOe7meS6iOaXtumXtCAqL1xyXG4gICAgcHVibGljIGN1dE1vbmV5VGltZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtOi/m+ihjOWBt+eblygxMC0yMCnnp5JcclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjEwKzEwO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOWBt+ebl1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLkN1dE1vbmV5KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aXtumXtOWQjuWBt+WPllxyXG4gICAgcHVibGljIEN1dE1vbmV5KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW9uZXk9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpmY3kvY4gKi9cclxuXHJcbiAgICAvKirlopnlhoUgKi9cclxuICAgLyoq5aKZ5YaF6YC76L6RICovXHJcbiAgIHByb3RlY3RlZCBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xyXG4gICAgICAgdGhpcy50b3dlZFRvTW92ZSgpO1xyXG4gICB9XHJcblxyXG4gICAvKirph43lhplzcGVjaWFsZG8gKi9cclxuICAgcHJvdGVjdGVkIHNwZWNpYWxEbygpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XHJcbiAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgZm9yKGxldCBpPTA7dHJ1ZTtpKyspXHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgICAgICBpZih0YXJnZXROb2RlICE9PSB0aGlzLmJvcm5Ob2RlKSBicmVhaztcclxuICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTtcclxuICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VudGVyIGV4dGVuZHMgTGF5YS5TY3JpcHR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIgKyB0aGlzLnNjcmVlbldpZHRoKTtcclxuICAgICAgICBpZihzY3JlZW5XaWR0aCA8IDgwMCkgKHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lTmFtZVwiKSBhcyBMYXlhLkxhYmVsKS5mb250U2l6ZSA9IDEyNTtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLlNwcml0ZSkueCA9IChzY3JlZW5XaWR0aC0gNjY3KS8yOyAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdvcmxkRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1dvcmxkRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHVpIH0gZnJvbSBcIi4uLy4uL3VpL2xheWFNYXhVSVwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IFBlb3BsZU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvUGVvcGxlTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi4vLi4vQ29yZS9Nc2dEaWFsb2dcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBCdXlEaWFsb2cgZnJvbSBcIi4uLy4uL0NvcmUvQnV5RGlhbG9nXCI7XHJcbmltcG9ydCBQZW9wbGUgZnJvbSBcIi4uLy4uL1BlcmZlYi9QZW9wbGVcIjtcclxuXHJcbi8qKlxyXG4gKiDkuJbnlYznrqHnkIblmajohJrmnKxcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXb3JsZCBleHRlbmRzIHVpLkdhbWVXb3JsZFVJe1xyXG4gICAgLyoqRGF0YU1hbmFnZXIgIOWNleS+iyAqL1xyXG4gICAgLyoq5LqL5Lu25Y+R55Sf5ZmoICovXHJcbiAgICBwcml2YXRlIHdvcmxkRXZlbnRNYW5hZ2VyIDogV29ybGRFdmVudE1hbmFnZXI7XHJcbiAgICAvKirkurrnsbvnrqHnkIblmagqL1xyXG4gICAgcHJpdmF0ZSBwZW9wbGVNYW5hZ2VyIDogUGVvcGxlTWFuYWdlcjtcclxuICAgIC8qKlVJ566h55CG5ZmoICovXHJcbiAgICBwcml2YXRlIHVpTWFuYWdlciA6IFVJTWFuYWdlcjtcclxuICAgIC8qKua2iOaBr+mAmueUqOahhiAqL1xyXG4gICAgcHJpdmF0ZSBtc2dEaWFsb2cgOiBNc2dEaWFsb2c7XHJcbiAgICAvKirotK3kubDmoYYgKi9cclxuICAgIHByaXZhdGUgYnV5RGlhbG9nOkJ1eURpYWxvZztcclxuICAgIFxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvKirlsY/luZXlrr3luqYgKi9cclxuICAgIHByaXZhdGUgc2NyZWVuV2lkdGggOiBudW1iZXI7XHJcbiAgICAvKirpvKDmoIfmmK/lkKbmjInkuIsgKi9cclxuICAgIHByaXZhdGUgaXNEb3duIDogYm9vbGVhbjtcclxuICAgIC8qKum8oOagh+eCueiusOW9lSAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZVBvcyA6IGFueTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8qKjJtaW7orqHml7YgKi9cclxuICAgIHByaXZhdGUgdGltZXJDb3VudCA6IG51bWJlcjtcclxuICAgIC8qKuWHuumXtOmalOiuoeaXtiAqL1xyXG4gICAgcHJpdmF0ZSB0aW1lckNvdW50X291dCA6IG51bWJlcjtcclxuICAgIC8qKui/myAqL1xyXG4gICAgcHJpdmF0ZSB0aW1lckNvdW50X2luIDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nYW1lRGF0YUluaXQoKTsvL+a4uOaIj+WPmOmHj+WIneWni+WMllxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTsvL+e7meahpea3u+WKoOS6i+S7tiBcclxuICAgICAgICB0aGlzLnNjcmVlblNldHRpbmcoKTsvL+Wxj+W5leWxheS4rVxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0KCk7Ly/muLjmiI/mtYHnqIvlvIDlp4tcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnNfLnNldEFyZWEodGhpcy5zcF9zY2VuZS5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmlbDmja7liJ3lp4vljJYgKi9cclxuICAgIHByaXZhdGUgZ2FtZURhdGFJbml0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53b3JsZEV2ZW50TWFuYWdlciA9IG5ldyBXb3JsZEV2ZW50TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucGVvcGxlTWFuYWdlciA9IG5ldyBQZW9wbGVNYW5hZ2VyKHRoaXMuc3Bfc2NlbmUpO1xyXG4gICAgICAgIHRoaXMudWlNYW5hZ2VyID0gbmV3IFVJTWFuYWdlcih0aGlzLnNwX1VJKTtcclxuICAgICAgICB0aGlzLm1zZ0RpYWxvZyA9IG5ldyBNc2dEaWFsb2coKTsgICAgICBcclxuICAgICAgICB0aGlzLmJ1eURpYWxvZz1uZXcgQnV5RGlhbG9nKCk7XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lckNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0ID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVyQ291bnRfaW4gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKua3u+WKoOS6i+S7tiAqL1xyXG4gICAgcHJpdmF0ZSBhZGRFdmVudCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhZ2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLHRoaXMsdGhpcy5tb3VzZURvd24pO1xyXG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9VUCx0aGlzLHRoaXMubW91c2VVcCk7XHJcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX01PVkUsdGhpcyx0aGlzLm1vdXNlTW92ZSk7XHJcbiAgICAgICAgLy/nu5npl6jluK7ngrnngrnlh7vkuosgICBcclxuICAgICAgICB0aGlzLnNwX2Rvb3Iub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuZG9vckN0cik7XHJcbiAgICAgICAgLy/ljLvppobkuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLmhvc3BpdGFsLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkhPU1BJVEFMXSk7XHJcbiAgICAgICAgLy/lhpvpmJ/kuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLmFybXkub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuQVJNWV0pO1xyXG4gICAgICAgIC8v57Ku5LuT5LqL5Lu257uR5a6aXHJcbiAgICAgICAgdGhpcy5mYXJtLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkZBUk1dKTsgICAgICAgIFxyXG4gICAgICAgIC8v56eR5oqA6aaG5LqL5Lu257uR5a6aXHJcbiAgICAgICAgdGhpcy50ZWNobm9sb2d5Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLlRFQ0hOT0xPR1ldKTsgICAgICAgIFxyXG4gICAgICAgIC8v5paw6Ze754K55LqL5Lu257uR5a6aXHJcbiAgICAgICAgLy90aGlzLmV2ZW50SG91c2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRVZFTlRfSE9VU0VdKTsgICAgIFxyXG4gICAgICAgIC8v5paw6Ze755qH5a6r57uR5a6aXHJcbiAgICAgICAgdGhpcy5wYWxhY2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuUEFMQUNFXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5bGP5bmVIOWxgOS4rSovXHJcbiAgICBwcml2YXRlIHNjcmVlblNldHRpbmcoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIgKyB0aGlzLnNjcmVlbldpZHRoKTtcclxuICAgICAgICB0aGlzLnNwX3NjZW5lLnggPSAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCkvMjtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/kuovku7blm57osINcclxuXHJcbiAgICAvKirpl6jnmoTlvIDlhbMgKi9cclxuICAgIHByaXZhdGUgZG9vckN0cigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbilcclxuICAgICAgICB7Ly/lvIDpl6hcclxuICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZG9vckNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7Ly/lhbPpl6hcclxuICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kb29yT3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirlhbPpl6ggKi9cclxuICAgIHByaXZhdGUgZG9vckNsb3NlKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5byA6ZeoICovXHJcbiAgICBwcml2YXRlIGRvb3JPcGVuKCkgOiB2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKuenu+WKqCAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZU1vdmUoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy5pc0Rvd24pIHJldHVybjtcclxuICAgICAgICBpZih0aGlzLm1vdXNlUG9zLngpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIHRoaXMuc3Bfc2NlbmUueCArPSBMYXlhLnN0YWdlLm1vdXNlWCAtIHRoaXMubW91c2VQb3MueDsgXHJcbiAgICAgICAgLy8gICAgdGhpcy5zcF9zY2VuZS55ICs9IExheWEuc3RhZ2UubW91c2VZIC0gdGhpcy5tb3VzZVBvcy54O1xyXG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPiAwKSAgdGhpcy5zcF9zY2VuZS54ID0gMDtcclxuICAgICAgICAgICAgaWYodGhpcy5zcF9zY2VuZS54IDwgLSgyMDAwLXRoaXMuc2NyZWVuV2lkdGgpKSB0aGlzLnNwX3NjZW5lLnggPSAgLSgyMDAwLXRoaXMuc2NyZWVuV2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSBMYXlhLnN0YWdlLm1vdXNlWDtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLnkgPSBMYXlhLnN0YWdlLm1vdXNlWTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmi5bliqjmjInkuIsgKi9cclxuICAgIHByaXZhdGUgbW91c2VEb3duKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaLluWKqOaKrOi1tyAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZVVwKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLHRoaXMubW91c2VNb3ZlKTtcclxuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlOyBcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcy55ID0gdW5kZWZpbmVkOyAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoq54K55Ye7IOiOt+WPluW7uuetkeS/oeaBryAqL1xyXG4gICAgcHJpdmF0ZSBvbkhvdXNlSW5mbyh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1zZ0RpYWxvZy5zaG93TXNnKHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueCueWHu+i0reS5sOaMiemSriAqL1xyXG4gICAgLypwcml2YXRlIGJ1eURpYWxvZ19DbGljayh0eXBlOnN0cmluZyk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHN3aXRjaCh0eXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLk1BSU5fUE9QVUxBVElPTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5RGlhbG9nLmJ1eV9uYW1lLnRleHQ9XCLkurrlj6NcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuTUFJTl9QT1BVTEFSU1VQUE9SVDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5RGlhbG9nLmJ1eV9uYW1lLnRleHQ9XCLlubjnpo/luqZcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuTUFJTl9NT05FWTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5RGlhbG9nLmJ1eV9uYW1lLnRleHQ9XCLotKLmlL9cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuTUFJTl9URUNITk9MT0dZOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlEaWFsb2cuYnV5X25hbWUudGV4dD1cIuenkeaKgFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5NQUlOX1BSRVNUSUdFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlEaWFsb2cuYnV5X25hbWUudGV4dD1cIuWogeacm1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnV5RGlhbG9nLnBvcHVwKCk7XHJcbiAgICB9Ki9cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeyrumjny0tLS0tLS0tLS0tLS1cclxuICAgIC8qKueyrumjn+S6p+WHuuWFrOW8jyAqL1xyXG4gICAgcHVibGljIGNhbF9HcmFpbkFkZCgpOnZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq57Ku6aOf5raI6ICX5YWs5byPICovXHJcbiAgICBwdWJsaWMgY2FsX0dyYWluTWludXMoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq57Ku6aOf57uT566XICovXHJcbiAgICAvKnB1YmxpYyBjYWxfR3JhaW4oKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/lpoLmnpzov5jmnInnsq7po5/lupPlrZhcclxuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkPj1Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+WmguaenOeUn+S6p+mHj+Wkp+S6juWkp+S6jua2iOiAl+eOh+eahOafkOS4quWAjeeOh++8jOWFiOiuqeWFtuiHquWKqOi9rOWMluS4uui0ouaUv++8jOS5i+WQjuS/ruaUueS4uuaJi+WKqOi9rOWMllxyXG4gICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkL0NvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cz49R2FtZUNvbmZpZy5HUkFJTl9FWENIQU5HRU1PTkVZX1BFUkNFTlQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8v6LaF5Ye65YCN546H55qE6YOo5YiGXHJcbiAgICAgICAgICAgICAgICBsZXQgZXhjaGFuZ2U9Q291bnRyeURhdGEuaW5zXy5ncmFpbkFkZC1Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMqR2FtZUNvbmZpZy5HUkFJTl9FWENIQU5HRU1PTkVZX1BFUkNFTlQ7XHJcbiAgICAgICAgICAgICAgICAvL+aNoumSsVxyXG4gICAgICAgICAgICAgICAgdGhpcy5leGNoYW5nZU1vbmV5KGV4Y2hhbmdlKTtcclxuICAgICAgICAgICAgICAgIC8v5Ymp5L2Z55qE5Yqg5YWl5bqT5a2YXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srPShDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkLWV4Y2hhbmdlLUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOWFpeW6k+WtmFxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrKz0oQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZC1Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5bqT5a2Y5Yqg5LiK55Sf5Lqn55qE57Ku6aOf5LiN6Laz5Lul5oq15aSf5raI6ICX55qE57Ku6aOfXHJcbiAgICAgICAgICAgIGlmKChDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZCk8Q291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL+eCueWHu+mAieaLqeaYr+WQpui0reS5sOeyrumjn++8jOWmguaenOS4jei0reS5sOWImeWvvOiHtOS6uuWPo+WHj+WwkeWSjOW5uOemj+W6pumZjeS9jlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL+WHj+WwkeW6k+WtmFxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrLT1Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMtQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0qL1xyXG5cclxuICAgIC8qKueyrumjn+aNoumSsSAqL1xyXG4gICAgcHVibGljIGV4Y2hhbmdlTW9uZXkoZ3JhaW46bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKumSseaNoueyrumjnyAqL1xyXG4gICAgcHVibGljIGV4Y2hhbmdlR3JhaW4obW9uZXk6bnVtYmVyKTp2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeogOaciemXqFxyXG4gICAgLyoq6LSt5Lmw56iA5pyJ6ZeoICovXHJcbiAgICBwdWJsaWMgYnV5UmFyZURvb3IoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvLy8vLy8vLy8vLy/muLjmiI/mtYHnqIvlvIDlp4svLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLyoq5ri45oiP5rWB56iL5byA5aeLICovXHJcbiAgICBwcml2YXRlIGdhbWVTdGFydCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucGVvcGxlTWFuYWdlci5vcGVuUGVvcGxlRmFjdG9yeSgpOy8v5Lq65Y+j55Sf5oiQ6YC76L6R6L+Q6KGMXHJcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLmNyZWF0ZVBlb3BsZV9Jbm5lcigpOy8v5YaF5Lq65Y+j55Sf5oiQXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/kurrlj6PmtYHliqjpgJrnn6XlmahcclxuICAgIC8qKlxyXG4gICAgICog5rWB5Yqo5q+U5L6L77yMIOmAmuefpeWZqFxyXG4gICAgICogXHJcbiAgICAgKiAgKi9cclxuICAgIHByaXZhdGUgY3VycmVudFJhdGlvKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50aW1lckNvdW50Kys7XHJcbiAgICAgICAgdGhpcy50aW1lckNvdW50X291dCsrO1xyXG4gICAgICAgIHRoaXMudGltZXJDb3VudF9pbisrO1xyXG4gICAgICAgIGxldCBjb3VudHJ5RGF0YSA9IENvdW50cnlEYXRhLmluc187XHJcbiAgICAgICAgbGV0IEJJID0gY291bnRyeURhdGEucGVyY2VudDsgICAvL+i/my/lh7pcclxuICAgICAgICBsZXQgb3V0ZXJUYXJnZXQgPSBjb3VudHJ5RGF0YS5leGl0UGVvcGxlOy8v5Ye66Zeo55uu5qCH5pWwXHJcbiAgICAgICAgbGV0IGlubmVyVGFnZXQgPSBjb3VudHJ5RGF0YS5lbnRlclBlb3BsZTsvL+i/m+mXqOebruagh+aVsFxyXG4gICAgICAgIGxldCBfb3V0ZXIgPSBjb3VudHJ5RGF0YS5fb3V0ZXJQZW9wbGU7Ly/lh7rln47lj6Plrp7pmYXlgLxcclxuICAgICAgICBsZXQgX2lubmVyID0gY291bnRyeURhdGEuX2lubmVyUGVvcGxlOy8v5YWl5Z+O5a6e6ZmF5YC8XHJcbiAgICAgICAgbGV0IGxhc3RUaW1lID0gMTIwMDAwIC0gdGhpcy50aW1lckNvdW50IC0gNTAwMDA7Ly/ojrflj5bliankvZnml7bpl7TvvIzlpJrpooTmlK8xMOenklxyXG4gICAgICAgIGlmKG91dGVyVGFyZ2V0ID4gX291dGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/pgJrnn6VcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lckNvdW50X291dCA+PSBsYXN0VGltZS8ob3V0ZXJUYXJnZXQgLSBfb3V0ZXIpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpbm5lclRhZ2V0ID4gX2lubmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/pgJrnn6UgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZXJDb3VudF9pbiA+PSBsYXN0VGltZS8ob3V0ZXJUYXJnZXQgLSBfaW5uZXIpKSAgXHJcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy50aW1lckNvdW50ID4gMTIwMDAwKVxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50X2luID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50X291dCA9IDA7XHJcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLl9vdXRlclBlb3BsZSA9IDA7Ly/lrp7pmYXlgLzlvZLpm7ZcclxuICAgICAgICAgICAgY291bnRyeURhdGEuX2lubmVyUGVvcGxlID0gMDsvL+WunumZheWAvOW9kumbtlxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7aTxvdXRlclRhcmdldC1fb3V0ZXI7aSsrKS8v6YCa55+l5Ye65Z+OXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KGZhbHNlKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8aW5uZXJUYWdldC1faW5uZXI7aSsrKS8v6YCa55+l6L+b56iLXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KHRydWUpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuR2FtZSBleHRlbmRzIExheWEuU2NyaXB0e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkgOiB2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgb25DbGljaygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEuU2NlbmUub3BlbihcIkdhbWVXb3JsZC5zY2VuZVwiKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5TdG9yeSBleHRlbmRzIExheWEuU2NyaXB0e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkgOiB2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgb25DbGljaygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEuU2NlbmUub3BlbihcIkdhbWVTdG9yeS5zY2VuZVwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHtcclxuICAgIC8v6I635Y+W5LiJ6KeS5Ye95pWw5YC8XHJcbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uRGVhbChmeDpudW1iZXIsZnk6bnVtYmVyLHN4Om51bWJlcixzeTpudW1iZXIsZ2V0U3RyaW5nKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIC8qKuaWnOi+uSAqL1xyXG4gICAgICAgIGxldCBjIDogbnVtYmVyID0gTWF0aC5zcXJ0KE1hdGgucG93KGZ4IC0gc3gsMikgKyBNYXRoLnBvdyhmeSAtIHN5LDIpKTtcclxuICAgICAgICAvKirkuLTovrkgKi9cclxuICAgICAgICBsZXQgYSA6IG51bWJlciA9IHN4IC0gZng7XHJcbiAgICAgICAgLyoq5a+56L65ICovXHJcbiAgICAgICAgbGV0IGIgOiBudW1iZXIgPSBzeSAtIGZ5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGdldFN0cmluZyA9PSBcInNpblwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiNzaW4gPT1cIiArIChiL2MpKTtcclxuICAgICAgICAgICAgcmV0dXJuIChiL2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGdldFN0cmluZyA9PSBcImNvc1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiNjb3MgPT1cIiArIChhL2MpKTtcclxuICAgICAgICAgICAgcmV0dXJuIChhL2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiI3RhbiA9PVwiICsgKGIvYSkpOy8v5a+56L65IOavlCDkuLTovrkgXHJcbiAgICAgICAgICAgIHJldHVybiAoYi9hKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq56Kw5pKe5qOA5rWLIGRpY051bSDvvJrpooTorr7ot53nprsgb2JqZWN0MeWSjG9iamVjdDLkvKDlhaVzcHJpdGUs5piv5oyJ54Wn5q+P5Liqc3ByaXRl55qE6ZSa54K55Zyo5Lit5b+D5L2N572u5p2l6K6h566X55qEICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjb2xsaXNpb25DaGVjayhvYmplY3QxLG9iamVjdDIpIDogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmKE1hdGguYWJzKG9iamVjdDEueCAtIG9iamVjdDIueCk8IG9iamVjdDEud2lkdGgvMiArIG9iamVjdDIud2lkdGgvMiYmXHJcbiAgICAgICAgICAgTWF0aC5hYnMob2JqZWN0MS55IC0gb2JqZWN0Mi55KSA8IG9iamVjdDEuaGVpZ2h0LzIgKyBvYmplY3QyLmhlaWdodC8yKXtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyByb3RhdGVSb3BlUG9pbnRfMih4LHksWCxZKTpudW1iZXJcclxuICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvcz1Ub29sLnJvdGF0aW9uRGVhbCh4LHksWCxZLFwiY29zXCIpO1xyXG4gICAgICAgICAgICBsZXQgc2luPVRvb2wucm90YXRpb25EZWFsKHgseSxYLFksXCJzaW5cIik7XHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvbjtcclxuICAgICAgICAgICAgaWYoY29zPj0wJiZzaW4+MCl7XHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbj0gMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyktOTA7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvczwwJiZzaW4+PTApe1xyXG4gICAgICAgICAgICAgICAgcm90YXRpb249MTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyktOTA7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvczw9MCYmc2luPDApe1xyXG4gICAgICAgICAgICAgICAgcm90YXRpb249OTAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvcz4wJiZzaW48PTApe1xyXG4gICAgICAgICAgICAgICAgcm90YXRpb249IDkwLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHkgPCBZKSByb3RhdGlvbiArPSAxODA7XHJcbiAgICAgICAgICAgIHJldHVybiByb3RhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5bop5LluqYgXHJcbiAgICAgKiDnp7vliqjngrnlnKjliY1cclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJvdGF0aW9uKHgxLHkxLHgyLHkyKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBjb3M9VG9vbC5yb3RhdGlvbkRlYWwoeDEseTEseDIseTIsXCJjb3NcIik7XHJcbiAgICAgICAgbGV0IHNpbj1Ub29sLnJvdGF0aW9uRGVhbCh4MSx5MSx4Mix5MixcInNpblwiKTtcclxuICAgICAgICBsZXQgcm90YXRpb247XHJcbiAgICAgICAgaWYoY29zID49MCAmJiBzaW4+MCl7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uID0gOTAgKyAxODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29zIDwwICYmIHNpbj49MCl7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uID0gLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb3MgPjAgJiYgc2luPD0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm90YXRpb24gPSAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvcyA8PTAgJiYgc2luPDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3RhdGlvbiA9IDE4MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdGF0aW9uO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJvdGF0aW9uID0gNDUg6KeS5bqmXHJcbiAgICAgKiDmsYIgY29zIOi/mOaYryBzaW5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByb3RhdGlvblNldChyb3RhdGlvbix0eXBlU3RyaW5nKSAgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgciA7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgIGlmKHJvdGF0aW9uIDwgMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uICs9IDM2MCooTWF0aC5hYnMoTWF0aC5mbG9vcihyb3RhdGlvbi8zNjApKzIpKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoTWF0aC5mbG9vcihyb3RhdGlvbi8zNjApPjApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3RhdGlvbiAtPSAzNjAqTWF0aC5mbG9vcihyb3RhdGlvbi8zNjApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByID0gKHJvdGF0aW9uKS8xODAqTWF0aC5QSTsgICAgICAgIFxyXG4gICAgICAgIGlmKHR5cGVTdHJpbmcgPT0gXCJjb3NcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5hYnMoTWF0aC5jb3MocikpO1xyXG4gICAgICAgICAgICBpZigocm90YXRpb24gPiAwICYmIHJvdGF0aW9uIDw9IDkwKSB8fCAocm90YXRpb24+MjcwICYmIHJvdGF0aW9uPD0zNjApKSAgdmFsdWUgPSAtdmFsdWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29zOjpcIiArIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHsgICAgICAgICBcclxuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmFicyhNYXRoLnNpbihyKSk7XHJcbiAgICAgICAgICAgIGlmKChyb3RhdGlvbj4xODAgJiYgcm90YXRpb24gPD0gMjcwKSB8fCAocm90YXRpb24+MjcwICYmIHJvdGF0aW9uPD0zNjApKSB2YWx1ZSA9IC12YWx1ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaW46OlwiICsgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWUgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDot53nprvorqHnrpdcclxuICAgICAqIDIg5a+56LGhXHJcbiAgICAgKiBmaXJzdFxyXG4gICAgICogc2Vjb25kXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY291bnREaWNfT2JqZWN0KGY6YW55LHM6YW55KSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coZi54IC0gcy54LDIpICsgTWF0aC5wb3coZi55IC0gcy55LDIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaWueWdl+ajgOa1iyBcclxuICAgICAqIFxyXG4gICAgICog5pa55Z2X5a+56LGhIHNwXHJcbiAgICAgKiDmo4DmtYvnmoTngrkg5a+56LGhXHJcbiAgICAgKiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBibG9ja1Rlc3Qoc3AscG9pbnQpIDogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGlmKCFzcCB8fCAhcG9pbnQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgcG9pbnRMZWZ0IDogYW55ID17eDpzcC54IC0gc3Aud2lkdGgvMix5OnNwLnktc3AuaGVpZ2h0LzJ9O1xyXG4gICAgICAgIGxldCBwb2ludFJpZ2h0IDogYW55ID17eDpzcC54ICsgc3Aud2lkdGgvMix5OnNwLnkrc3AuaGVpZ2h0LzJ9O1xyXG4gICAgICAgIGxldCBzX3BvaW50TGVmdCA9IHBvaW50LnggPiBwb2ludExlZnQueCAmJiBwb2ludC55PnBvaW50TGVmdC55O1xyXG4gICAgICAgIGxldCBzX3BvaW50UmlnaHQgPSBwb2ludC54IDwgcG9pbnRSaWdodC54ICYmIHBvaW50Lnk8cG9pbnRSaWdodC55O1xyXG4gICAgICAgIGlmKHNfcG9pbnRMZWZ0ICYmIHNfcG9pbnRSaWdodCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuICBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdhbWVEYXRhIC0gQ291bnRyeURhdGFcclxuICAgICAqIOWNoOavlCDmlbDnu4RcclxuICAgICrojrflj5bljLrpl7TmlbDnu4QgMCwwLjgsMC44MywwLjg0LDAuOSwxXHJcbiAgICAgKiBAYXJyIOWxnuaAp+WQjeWtl1xyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGVyY2VudEFyZWEoYXJyKTpBcnJheTxudW1iZXI+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFyclBlcmNlbnQgPSBbXTsvL+eUn+S6p+avlOS+i1xyXG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxhcnIubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG51bWJlciArPSBDb3VudHJ5RGF0YS5pbnNfW2FycltpXV07XHJcbiAgICAgICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyUGVyY2VudDtcclxuICAgIH1cclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xyXG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xyXG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbmV4cG9ydCBtb2R1bGUgdWkge1xyXG4gICAgZXhwb3J0IGNsYXNzIEJ1eVVJIGV4dGVuZHMgRGlhbG9nIHtcclxuXHRcdHB1YmxpYyBiZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnRuX2J1eTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnV5X25hbWU6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGJ1eV9pbnB1dDpMYXlhLlRleHRJbnB1dDtcblx0XHRwdWJsaWMgYnRuX2Nsb3NlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBidXlfcHJpY2U6bGF5YS5kaXNwbGF5LlRleHQ7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJCdXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIEdhbWVXb3JsZFVJIGV4dGVuZHMgU2NlbmUge1xyXG5cdFx0cHVibGljIHNwX3NjZW5lOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9ncm91bmQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX3JpdmVyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF93YWxsOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9kb29yOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfOTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgZXZlbnRIb3VzZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBwYWxhY2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvc3BpdGFsOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGVjaG5vbG9neTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBmYXJtOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGFybXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX1VJOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBpbWdfcG9wdWxhdGlvbjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9wb3B1bGF0aW9uOmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfcG9wdWxhclN1cHBvcnQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfcG9wdWxhclN1cHBvcnQ6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ19tb25leTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9tb25leTpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX3RlY2hub2xvZ3k6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfdGVjaG5vbG9neTpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX3ByZXN0aWdlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3ByZXN0aWdlOmxheWEuZGlzcGxheS5UZXh0O1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiR2FtZVdvcmxkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgbW9kdWxlIHVpLkRpYSB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ3VycmVudERpYWxvZ1VJIGV4dGVuZHMgU2NlbmUge1xyXG5cdFx0cHVibGljIG1zZ0JvZHk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9QZXJzb246TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9Nc2c6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkRpYS9DdXJyZW50RGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyIl19
