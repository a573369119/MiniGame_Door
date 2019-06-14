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
    /**人种 - 盗贼 */
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
    //----------------------------------时间
    /**五大主值触发时间 */
    GameConfig.TIME_MAINDATA = 12 * 60 * 60;
    //----------------------------------其他
    /**一天时间/分钟 */
    GameConfig.ONE_DAY = 10 * 60;
    /**粮食生产率换钱临界值 */
    GameConfig.GRAIN_EXCHANGEMONEY_PERCENT = 1.5;
    /**粮食换钱汇率 */
    GameConfig.GRAINTOMONEY = 2;
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
},{"../ui/layaMaxUI":21}],3:[function(require,module,exports){
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
        this.technology = 50;
        /**国家声望 */
        this.prestige = 50;
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
        /**粮食消耗量 (人均消耗量) */
        this.grainPerCost = 1;
        //变动率
        /**粮食产量 (人均产量)*/
        this.grainPerAdd = 1;
        /**粮食库存 */
        this.grainStock = 0;
        /**军费减少率 */
        this.armyPercent = 0.2;
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
    /**财政结算*/
    CountryData.prototype.cal_Money = function () {
        this.prestige_ArmyCost();
        this.steadyCost();
        this.getTax();
        this.technology_GDP();
    };
    /**粮食 影响结算*/
    CountryData.prototype.influence_Grain = function () {
        var grainMinus = this.population_GrainCost();
        var grainAdd = this.population_GrainAdd();
        this.cal_Grain(grainAdd, grainMinus);
    };
    /**幸福度 影响结算 */
    CountryData.prototype.influence_PopularSupport = function () {
        this.support_Percent();
        this.support_PeopleType();
        this.support_OutPeopleMax();
    };
    //-------------------------------公式
    /**稳定支出 */
    CountryData.prototype.steadyCost = function () {
        this.money -= this.armyCost * (1 - this.armyPercent) + this.governCost + this.technologyCost;
    };
    /**粮食消耗 人口数*每人消耗量*/
    CountryData.prototype.population_GrainCost = function () {
        return this.population * this.grainPerCost;
    };
    /**粮食生产 人口数*每人实际产量*/
    CountryData.prototype.population_GrainAdd = function () {
        //科技度转换 科技度0-100 生产变化率0-2 公式暂定y=x*0.02-1,50为分界限
        var change = this.technology * 0.02 - 1;
        this.grainPerAdd = (1 + change) * this.grainPerAdd;
        var pro = this.grainPerAdd * this.population;
        return pro;
    };
    /**幸福度影响人口流动率 */
    CountryData.prototype.support_Percent = function () {
        //幸福影响人口流动率的波动范围 -0.2~0.2 公式暂定y=x*0.004-0.2,50为分界限
        var change = this.popularSupport * 0.004 - 0.2;
        this.percent = (1 + change) * this.percent;
    };
    /**幸福度影响人种几率 均从普通人几率中进行替换*/
    CountryData.prototype.support_PeopleType = function () {
        //科学家波动范围 0.01-0.05 公式暂定y=x*0.0004+0.01,50为分界限
        OutCountryData.ins_.scientist = this.popularSupport * 0.0004 + 0.01;
        //明星波动范围 0.005-0.025 公式暂定y=x*0.0002+0.005,50为分界限
        OutCountryData.ins_.star = this.popularSupport * 0.0002 + 0.005;
        //盗贼波动范围 0.06-0.14 公式暂定y=x*0.0008+0.06,50为分界限
        OutCountryData.ins_.robber = this.popularSupport * 0.0008 + 0.06;
        //土匪波动范围 0.02-0.1 公式暂定y=x*0.0008+0.02,50为分界限
        OutCountryData.ins_.bandit = this.popularSupport * 0.0008 + 0.02;
        //普通人波动范围
        OutCountryData.ins_.common = 1 - (OutCountryData.ins_.scientist + OutCountryData.ins_.star + OutCountryData.ins_.robber + OutCountryData.ins_.bandit);
    };
    /**幸福度影响墙外人口 墙外最大容纳数200-600*/
    CountryData.prototype.support_OutPeopleMax = function () {
        //墙外增长率波动范围 0.2-0.6 公式暂定y=x*0.004+0.2,50为分界限
        var change = this.popularSupport * 0.004 + 0.2;
        OutCountryData.ins_.maxCount = 1000 * change;
    };
    /**科技影响GDP */
    CountryData.prototype.technology_GDP = function () {
        //GDP波动范围 -0.5~0.5 公式暂定y=x*0.05,50为分界限
        var change = this.technology * 0.01 - 0.5;
        //实际GDP
        var currGDP = this.GDP * (change + 1);
        this.money -= currGDP * this.population;
    };
    /**威望影响军费 */
    CountryData.prototype.prestige_ArmyCost = function () {
        //军费减少率波动范围 0.0-0.4 公式暂定y=x*0.004,50为分界限
        this.armyPercent = this.prestige * 0.004;
    };
    /**税收 */
    CountryData.prototype.getTax = function () {
        this.money += this.tax;
    };
    /**粮食结算 */
    CountryData.prototype.cal_Grain = function (grainAdd, grainMinus) {
        //如果还有粮食库存
        if (grainAdd >= grainMinus) {
            //如果生产量大于大于消耗率的某个倍率，先让其自动转化为财政，之后修改为手动转化
            if (grainAdd / grainMinus >= GameConfig_1.default.GRAIN_EXCHANGEMONEY_PERCENT) {
                //超出倍率的部分
                var exchange = grainAdd - grainMinus * GameConfig_1.default.GRAIN_EXCHANGEMONEY_PERCENT;
                //粮食换钱
                this.money += exchange * GameConfig_1.default.GRAINTOMONEY;
                //剩余的加入库存
                CountryData.ins_.grainStock += (grainAdd - exchange - grainMinus);
            }
            else {
                //加入库存
                CountryData.ins_.grainStock += (grainAdd - grainMinus);
            }
        }
        else {
            //如果库存加上生产的粮食不足以抵够消耗的粮食
            if ((CountryData.ins_.grainStock + grainAdd) < grainMinus) {
                //点击选择是否购买粮食，如果不购买则导致人口减少和幸福度降低
                this.population -= (grainMinus - (CountryData.ins_.grainStock + grainAdd)) * 1;
                this.popularSupport -= (grainMinus - (CountryData.ins_.grainStock + grainAdd)) * 0.001;
            }
            else {
                //减少库存
                CountryData.ins_.grainStock -= grainMinus - grainAdd;
            }
        }
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
        this.maxCount = 400;
        /**当前外城人口数 */
        this.outCount = 0;
        /**人滞留时间 */
        this.limitTime = 50;
        //------------------------------------------
        /**普通人*/
        this.common = 0.795;
        /**科学家 SSS*/
        this.scientist = 0.03;
        /**明星 SS*/
        this.star = 0.015;
        /**土匪 -S */
        this.bandit = 0.06;
        /**盗贼 -A */
        this.robber = 0.1;
        /**变量名 */
        this.arr_People = ["common", "scientist", "star", "bandit", "robber"];
    }
    /**获取区间数组 0,0.795,0.825,0.84,0.9,1*/
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
},{"../ui/layaMaxUI":21}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("../Config/GameConfig");
var DataManager_1 = require("./DataManager");
var Common_1 = require("../Perfeb/diff_People/Common");
var Robber_1 = require("../Perfeb/diff_People/Robber");
var Scientist_1 = require("../Perfeb/diff_People/Scientist");
var Star_1 = require("../Perfeb/diff_People/Star");
var Bandit_1 = require("../Perfeb/diff_People/Bandit");
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
        var array = DataManager_1.OutCountryData.ins_.getPercentArea();
        var people;
        /**生成不同人种的几率 */
        var random = Math.random();
        //普通人
        if (random >= 0 && random < array[1]) {
            people = Laya.Pool.getItem("common");
            if (!people) {
                people = new Common_1.default(this.view, GameConfig_1.default.COMMON_MAN, true);
                DataManager_1.default.ins_.arr_outPeople.push(people);
            }
        }
        //科学家
        else if (random >= array[1] && random < array[2]) {
            people = Laya.Pool.getItem("scientist");
            if (!people) {
                people = new Scientist_1.default(this.view, GameConfig_1.default.SCIENTIST_MAN, true);
                DataManager_1.default.ins_.arr_outPeople.push(people);
            }
            people.createTechnologyTime();
        }
        //明星
        else if (random >= array[2] && random < array[3]) {
            people = Laya.Pool.getItem("star");
            if (!people) {
                people = new Star_1.default(this.view, GameConfig_1.default.STAR_MAN, true);
                DataManager_1.default.ins_.arr_outPeople.push(people);
            }
            people.createStarTime();
        }
        //盗贼
        else if (random >= array[3] && random < array[4]) {
            people = Laya.Pool.getItem("robber");
            if (!people) {
                people = new Robber_1.default(this.view, GameConfig_1.default.ROBBER_MAN, true);
                DataManager_1.default.ins_.arr_outPeople.push(people);
            }
            people.cutMoneyTime();
        }
        //土匪
        else {
            people = Laya.Pool.getItem("bandit");
            if (!people) {
                people = new Bandit_1.default(this.view, GameConfig_1.default.BANDIT_MAN, true);
                DataManager_1.default.ins_.arr_outPeople.push(people);
            }
            people.cutMoneyTime();
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
},{"../Config/GameConfig":1,"../Perfeb/diff_People/Bandit":11,"../Perfeb/diff_People/Common":12,"../Perfeb/diff_People/Robber":13,"../Perfeb/diff_People/Scientist":14,"../Perfeb/diff_People/Star":15,"./DataManager":3}],6:[function(require,module,exports){
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
},{"./Core/BuyDialog":2,"./Core/MsgDialog":4,"./Script/Center":16,"./Script/GameWorld/GameWorld":17,"./Script/OpenGame":18,"./Script/OpenStory":19}],9:[function(require,module,exports){
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
                DataManager_1.default.ins_.population++;
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
},{"../Config/GameConfig":1,"../Core/DataManager":3,"../Tool/Tool":20}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("../People");
var DataManager_1 = require("../../Core/DataManager");
var Bandit = /** @class */ (function (_super) {
    __extends(Bandit, _super);
    function Bandit(view, type, isOut) {
        return _super.call(this, view, type, isOut) || this;
    }
    /**抢劫的方式,先给予时间 */
    Bandit.prototype.cutMoneyTime = function () {
        //给予随机时间进行偷盗(5-8)分钟
        var time = Math.random() * 5 + 3;
        //time秒之后进行偷盗
        Laya.timer.frameOnce(time * 60 * 60, this, this.CutMoney);
    };
    //时间后抢劫
    Bandit.prototype.CutMoney = function () {
        var random = Math.random();
        if (random < 0.5) {
            //抢劫成功
            DataManager_1.default.ins_.money = Math.floor(Math.random() * 10 + 10);
            this.lowSupport();
        }
        //给予随机时间进行偷盗(5-8)分钟
        var time = Math.random() * 5 + 3;
        //time秒之后进行偷盗
        Laya.timer.frameOnce(time * 60 * 60, this, this.CutMoney);
    };
    /**降低幸福度 */
    Bandit.prototype.lowSupport = function () {
        DataManager_1.default.ins_.popularSupport -= 0.1;
    };
    /**墙内逻辑 */
    Bandit.prototype.people_PosInner = function () {
        // this.setTraget(this.view.getChildByName("house").getChildByName("palace") as Laya.Sprite);
        this.towedToMove();
    };
    /**重写specialdo */
    Bandit.prototype.specialDo = function () {
        var houseNode = this.view.getChildByName("house");
        var targetNode = this.getTargePos(houseNode);
        for (var i = 0; true; i++) {
            targetNode = this.getTargePos(houseNode);
            if (targetNode !== this.bornNode)
                break;
        }
        this.setTraget(targetNode);
    };
    return Bandit;
}(People_1.default));
exports.default = Bandit;
},{"../../Core/DataManager":3,"../People":10}],12:[function(require,module,exports){
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
},{"../../Core/DataManager":3,"../../Tool/Tool":20,"../People":10}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("../People");
var DataManager_1 = require("../../Core/DataManager");
var Robber = /** @class */ (function (_super) {
    __extends(Robber, _super);
    function Robber(view, type, isOut) {
        return _super.call(this, view, type, isOut) || this;
    }
    /**偷取财政的方式,先给予时间 */
    Robber.prototype.cutMoneyTime = function () {
        //给予随机时间进行偷盗(3-6)分钟
        var time = Math.random() * 3 + 3;
        //time秒之后进行偷盗
        Laya.timer.frameOnce(time * 60 * 60, this, this.CutMoney);
    };
    //时间后偷取
    Robber.prototype.CutMoney = function () {
        var random = Math.random();
        if (random < 0.5) {
            //偷盗成功
            DataManager_1.default.ins_.money -= Math.floor(Math.random() * 10);
            this.lowSupport();
        }
        //给予随机时间进行偷盗(3-6)分钟
        var time = Math.random() * 3 + 3;
        //time秒之后进行偷盗
        Laya.timer.frameOnce(time * 60 * 60, this, this.CutMoney);
    };
    /**降低幸福度 */
    Robber.prototype.lowSupport = function () {
        DataManager_1.default.ins_.popularSupport -= 0.05;
    };
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
},{"../../Core/DataManager":3,"../People":10}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("../People");
var DataManager_1 = require("../../Core/DataManager");
var Scientist = /** @class */ (function (_super) {
    __extends(Scientist, _super);
    function Scientist(view, type, isOut) {
        return _super.call(this, view, type, isOut) || this;
    }
    /**产生科技的方式,先给予时间 */
    Scientist.prototype.createTechnologyTime = function () {
        //给予随机时间(1-3)分钟
        var time = Math.random() * 2 + 1;
        //time秒之后进行产生科技值
        Laya.timer.frameOnce(time * 60 * 60, this, this.createTechnology);
    };
    /**产生科技值 */
    Scientist.prototype.createTechnology = function () {
        DataManager_1.default.ins_.technology += 0.5;
        //给予随机时间(1-3)分钟
        var time = Math.random() * 2 + 1;
        //time秒之后进行产生科技值
        Laya.timer.frameOnce(time * 60 * 60, this, this.createTechnology);
    };
    /**墙内逻辑 */
    Scientist.prototype.people_PosInner = function () {
        // this.setTraget(this.view.getChildByName("house").getChildByName("palace") as Laya.Sprite);
        this.towedToMove();
    };
    /**重写specialdo */
    Scientist.prototype.specialDo = function () {
        this.setTraget(this.view.getChildByName("house").getChildByName("technology"));
    };
    return Scientist;
}(People_1.default));
exports.default = Scientist;
},{"../../Core/DataManager":3,"../People":10}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("../People");
var DataManager_1 = require("../../Core/DataManager");
var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    function Star(view, type, isOut) {
        return _super.call(this, view, type, isOut) || this;
    }
    /**明星效应的方式,先给予时间 */
    Star.prototype.createStarTime = function () {
        //给予随机时间(1-3)分钟
        var time = Math.random() * 2 + 1;
        //time秒之后进行产生效应值
        Laya.timer.frameOnce(time * 60 * 60, this, this.createStarValue);
    };
    /**产生效应值 效应值为幸福度*/
    Star.prototype.createStarValue = function () {
        DataManager_1.default.ins_.popularSupport += 0.5;
        //给予随机时间(1-3)分钟
        var time = Math.random() * 2 + 1;
        //time秒之后进行产生科技值
        Laya.timer.frameOnce(time * 60 * 60, this, this.createStarValue);
    };
    /**墙内逻辑 */
    Star.prototype.people_PosInner = function () {
        // this.setTraget(this.view.getChildByName("house").getChildByName("palace") as Laya.Sprite);
        this.towedToMove();
    };
    /**重写specialdo */
    Star.prototype.specialDo = function () {
        var houseNode = this.view.getChildByName("house");
        var targetNode = this.getTargePos(houseNode);
        for (var i = 0; true; i++) {
            targetNode = this.getTargePos(houseNode);
            if (targetNode !== this.bornNode)
                break;
        }
        this.setTraget(targetNode);
    };
    return Star;
}(People_1.default));
exports.default = Star;
},{"../../Core/DataManager":3,"../People":10}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
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
        this.ani1.play(0, false);
    };
    /**开门 */
    GameWorld.prototype.doorOpen = function () {
        this.ani2.play(0, false);
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
    /**更新UI栏五大主值信息 */
    GameWorld.prototype.updateUIMainData = function () {
        this.text_count_population.text = DataManager_2.default.ins_.population.toString();
        this.text_count_popularSupport.text = DataManager_2.default.ins_.popularSupport.toString();
        this.text_count_money.text = DataManager_2.default.ins_.money.toString();
        this.text_count_technology.text = DataManager_2.default.ins_.technology.toString();
        this.text_count_prestige.text = DataManager_2.default.ins_.prestige.toString();
    };
    //----------------------稀有门
    /**购买稀有门 */
    GameWorld.prototype.buyRareDoor = function () {
    };
    ////////////游戏流程开始//////////////////////////
    /**游戏流程开始 */
    GameWorld.prototype.gameStart = function () {
        this.updateUIMainData();
        this.peopleManager.createPeople(); //人口生成逻辑运行
        this.peopleManager.createPeople_Inner(); //内人口生成
        //this.openTimer();
    };
    /**开启定时器 */
    GameWorld.prototype.openTimer = function () {
        Laya.timer.frameLoop(GameConfig_1.default.TIME_MAINDATA, this, DataManager_2.default.ins_.cal_Money);
        Laya.timer.frameLoop(GameConfig_1.default.TIME_MAINDATA, this, DataManager_2.default.ins_.influence_Grain);
        Laya.timer.frameLoop(GameConfig_1.default.TIME_MAINDATA, this, DataManager_2.default.ins_.influence_PopularSupport);
        Laya.timer.frameLoop(1, this, this.updateUIMainData);
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
},{"../../Config/GameConfig":1,"../../Core/BuyDialog":2,"../../Core/DataManager":3,"../../Core/MsgDialog":4,"../../Core/PeopleManager":5,"../../Core/UIManager":6,"../../Core/WorldEventManager":7,"../../ui/layaMaxUI":21}],18:[function(require,module,exports){
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
},{}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
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
},{"../Core/DataManager":3}],21:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXIyLjAvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvQnV5RGlhbG9nLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0JhbmRpdC50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvQ29tbW9uLnRzIiwic3JjL1BlcmZlYi9kaWZmX1Blb3BsZS9Sb2JiZXIudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL1NjaWVudGlzdC50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvU3Rhci50cyIsInNyYy9TY3JpcHQvQ2VudGVyLnRzIiwic3JjL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzIiwic3JjL1NjcmlwdC9PcGVuR2FtZS50cyIsInNyYy9TY3JpcHQvT3BlblN0b3J5LnRzIiwic3JjL1Rvb2wvVG9vbC50cyIsInNyYy91aS9sYXlhTWF4VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVkE7SUFBQTtJQWdFQSxDQUFDO0lBL0RHLGNBQWM7SUFDQSxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxtQkFBUSxHQUFZ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Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN4QyxDQUFDO1lBQ0wsc0JBQUM7UUFBRCxDQVZBLEFBVUMsQ0FWb0MsS0FBSyxHQVV6QztRQVZZLG1CQUFlLGtCQVUzQixDQUFBO0lBQ0wsQ0FBQyxFQVpnQixHQUFHLEdBQUgsTUFBRyxLQUFILE1BQUcsUUFZbkI7QUFBRCxDQUFDLEVBWmEsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBWWYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZyB7XG4gICAgLyoq5Lq656eNIC0g5pmu6YCa5Lq6ICovXG4gICAgcHVibGljIHN0YXRpYyBDT01NT05fTUFOIDogc3RyaW5nID0gXCJjb21tb25cIjtcbiAgICAvKirkurrnp40gLSDnm5fotLwgKi9cbiAgICBwdWJsaWMgc3RhdGljIFJPQkJFUl9NQU4gOiBzdHJpbmcgPSBcInJvYmJlclwiO1xuICAgIC8qKuS6uuenjSAtIOWcn+WMqiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQkFORElUX01BTiA6IHN0cmluZyA9IFwiYmFuZGl0XCI7XG4gICAgLyoq5Lq656eNIC0g5piO5pifICovXG4gICAgcHVibGljIHN0YXRpYyBTVEFSX01BTiA6IHN0cmluZyA9IFwic3RhclwiO1xuICAgIC8qKuS6uuenjSAtIOenkeWtpuWutiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU0NJRU5USVNUX01BTiA6IHN0cmluZyA9IFwic2NpZW50aXN0XCI7XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeW7uuetkVxuICAgIC8qKuWMu+mZoiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSE9TUElUQUwgOiBudW1iZXIgPSAxO1xuICAgIC8qKuWGm+mYnyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQVJNWSA6IG51bWJlciA9IDI7XG4gICAgLyoq5Yac5Zy6ICovXG4gICAgcHVibGljIHN0YXRpYyBGQVJNOiBudW1iZXIgPSAzO1xuICAgIC8qKuenkeaKgCAqL1xuICAgIHB1YmxpYyBzdGF0aWMgVEVDSE5PTE9HWTogbnVtYmVyID0gNDtcbiAgICAvKirkuovku7bmiL8g5paw6Ze75oi/ICovXG4gICAgcHVibGljIHN0YXRpYyBFVkVOVF9IT1VTRTogbnVtYmVyID0gNTtcbiAgICAvKirnmoflrqsgKi9cbiAgICBwdWJsaWMgc3RhdGljIFBBTEFDRTogbnVtYmVyID0gNjtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mo4DmtYvngrnnmoTpl7Tot51cbiAgICAvKirmo4DmtYvngrnpl7Tot50gKi9cbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfRElDIDogbnVtYmVyID0gNTtcbiAgICAvKirpgJ/luqYgKi9cbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfU1BFRUQgOiBudW1iZXIgPSAwLjQ7XG4gICAgLyoq5peL6L2s6KeS5bqm5YGP56e7ICovXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX1JPIDogbnVtYmVyID0gMTA7XG4gICAgLyoq5Lq657G755Sf5Lqn6Ze06ZqUUyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUEVSU09OX0NSRUFURV9USU1FIDogbnVtYmVyID0gMTtcbiAgICAvKirnm5HmtYvngrnmlbDph48qL1xuICAgIHB1YmxpYyBzdGF0aWMgVEVTVF9QT0lOVF9DT1VOVCA6IG51bWJlciA9IDY7XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeS4u+WAvFxuICAgIC8qKuWbveWutui0ouaUvyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9NT05FWSA6IHN0cmluZyA9IFwibW9uZXlcIjtcbiAgICAvKirlm73lrrbkurrlj6MgKi9cbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUE9QVUxBVElPTiA6IHN0cmluZz1cInBvcHVsYXRpb25cIjtcbiAgICAvKirlm73lrrblubjnpo/luqYgKi9cbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUE9QVUxBUlNVUFBPUlQgOiBzdHJpbmcgPSBcInBvcHVsYXJTdXBwb3J0XCI7XG4gICAgLyoq5Zu95a6256eR5oqAICovXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX1RFQ0hOT0xPR1kgOiBzdHJpbmcgPSBcInRlY2hub2xvZ3lcIjtcbiAgICAvKirlm73lrrblqIHmnJsgKi9cbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUFJFU1RJR0UgOiBzdHJpbmcgPSBcInByZXN0aWdlXCI7XG5cbiAgICBcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeaXtumXtFxuICAgIC8qKuS6lOWkp+S4u+WAvOinpuWPkeaXtumXtCAqL1xuICAgIHB1YmxpYyBzdGF0aWMgVElNRV9NQUlOREFUQSA6IG51bWJlciA9IDEyKjYwKjYwO1xuICAgIFxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWFtuS7llxuICAgIC8qKuS4gOWkqeaXtumXtC/liIbpkp8gKi9cbiAgICBwdWJsaWMgc3RhdGljIE9ORV9EQVk6bnVtYmVyPTEwKjYwO1xuICAgIC8qKueyrumjn+eUn+S6p+eOh+aNoumSseS4tOeVjOWAvCAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UPTEuNTtcbiAgICAvKirnsq7po5/mjaLpkrHmsYfnjocgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdSQUlOVE9NT05FWT0yO1xufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xyXG4vKipcclxuICog6LSt5Lmw5qGGIOmAmueUqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV5RGlhbG9nIGV4dGVuZHMgdWkuQnV5VUl7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndpZHRoPTgwMDtcclxuICAgICAgICB0aGlzLmhlaWdodD00MDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTp2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKuazqOWGjOS6i+S7tiAqL1xyXG4gICAgcHJpdmF0ZSBhZGRFdmVudHMoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idG5fYnV5Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmJ1eUNsaWNrKTtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZUNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirngrnlh7votK3kubAgKi9cclxuICAgIHByaXZhdGUgYnV5Q2xpY2soKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGN1cnJcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC8qKueCueWHu+WFs+mXrSAqL1xyXG4gICAgcHJpdmF0ZSBjbG9zZUNsaWNrKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0gXHJcbn0iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcbmltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1BlcmZlYi9QZW9wbGVcIjtcblxuLyoqXG4gKiDmlbDmja7kuK3lv4Mg5omA5pyJ55qE5pWw5o2uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlEYXRhe1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zXyA6IENvdW50cnlEYXRhID0gbmV3IENvdW50cnlEYXRhKCk7XG4gICAgLyoqKioqKioqKioqKioq5Li75pWw5o2uKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoq5Zu95a626LSi5pS/ICovXG4gICAgcHVibGljIG1vbmV5IDogbnVtYmVyID0gMTAwMDA7XG4gICAgLyoq5Zu95a625Lq65Y+jICovXG4gICAgcHVibGljIHBvcHVsYXRpb24gOiBudW1iZXI9MTAwO1xuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xuICAgIHB1YmxpYyBwb3B1bGFyU3VwcG9ydCA6IG51bWJlciA9IDUwO1xuICAgIC8qKuWbveWutuenkeaKgCAqL1xuICAgIHB1YmxpYyB0ZWNobm9sb2d5IDogbnVtYmVyID0gNTA7XG4gICAgLyoq5Zu95a625aOw5pybICovXG4gICAgcHVibGljIHByZXN0aWdlIDogbnVtYmVyID0gNTA7XG5cbiAgICAvKioqKioqKioqKioqKioq5Ymv5pWw5o2uKioqKioqKioqKioqKioqKiovXG4gICAgLy8tLS0tLS0tLeS4u+aVsOaNruW9seWTjVxuICAgIC8v5Zu65a6a5pSv5Ye6XG4gICAgLyoq5Yab6LS5ICovXG4gICAgcHVibGljIGFybXlDb3N0IDogbnVtYmVyID0gMTAwO1xuICAgIC8qKuaUv+W6nOi0ueeUqCAqL1xuICAgIHB1YmxpYyBnb3Zlcm5Db3N0IDogbnVtYmVyID0gMTAwO1xuICAgIC8qKuenkeaKgOi0ueeUqCAqL1xuICAgIHB1YmxpYyB0ZWNobm9sb2d5Q29zdCA6IG51bWJlciA9IDEwMDtcbiAgICAvKirnqI7mlLbnjocgKi9cbiAgICBwdWJsaWMgdGF4IDogbnVtYmVyID0gMC4wNTtcbiAgICAvKirnsq7po5/mtojogJfph48gKOS6uuWdh+a2iOiAl+mHjykgKi9cbiAgICBwdWJsaWMgZ3JhaW5QZXJDb3N0IDogbnVtYmVyID0gMTtcbiAgICBcblxuICAgIC8v5Y+Y5Yqo546HXG4gICAgLyoq57Ku6aOf5Lqn6YePICjkurrlnYfkuqfph48pKi9cbiAgICBwdWJsaWMgZ3JhaW5QZXJBZGQgOiBudW1iZXIgPSAxO1xuICAgIC8qKueyrumjn+W6k+WtmCAqL1xuICAgIHB1YmxpYyBncmFpblN0b2NrOm51bWJlcj0wO1xuICAgIC8qKuWGm+i0ueWHj+WwkeeOhyAqL1xuICAgIHB1YmxpYyBhcm15UGVyY2VudDpudW1iZXI9MC4yO1xuICAgIC8qKkdEUCDmjKPpkrHog73lipvvvIzmr4/kurrmr4/lpKnog73kuqflpJrlsJHpkrEgKi9cbiAgICBwdWJsaWMgR0RQIDogbnVtYmVyID0gMTA7XG5cblxuICAgIC8qKui/m+WfjuaVsCDnm67moIflgLwybWluKi9cbiAgICBwdWJsaWMgZW50ZXJQZW9wbGUgOiBudW1iZXIgPSA1MDtcbiAgICAvKirlh7rln47mlbAg55uu5qCH5YC8Mm1pbiovXG4gICAgcHVibGljIGV4aXRQZW9wbGUgOiBudW1iZXIgPSA1MDtcbiAgICAvKirkurrlj6Pmr5TkvovmlbAg6L+b5Z+O5pWwL+WHuuWfjuaVsCAybWluKi9cbiAgICBwdWJsaWMgcGVyY2VudCA6IG51bWJlciA9IDE7XG4gICAgLyoq5Z+O5aSW5Lq65Y+j5pWw57uEKi9cbiAgICBwdWJsaWMgYXJyX291dFBlb3BsZSA6IEFycmF5PFBlb3BsZT47XG4gICAgLyoq5Z+O5YaF5Lq65Y+j5pWw57uEICovXG4gICAgcHVibGljIGFycl9pblBlb3BsZSA6IEFycmF5PFBlb3BsZT47XG4gICAgLyoq5Ye65Z+O5Lq65Y+jIOWunumZheWAvC8ybWluICovXG4gICAgcHVibGljIF9vdXRlclBlb3BsZSA6IG51bWJlcjtcbiAgICAvKirov5vpl6jkurrlj6Mg5a6e6ZmF5YC8LzJtaW4gKi9cbiAgICBwdWJsaWMgX2lubmVyUGVvcGxlIDogbnVtYmVyO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pmu6YCa5Lq65Y+j5Y2g5q+UXG4gICAgLyoqMC3ljLvnlJ8gMS3orablr58gMi3llYbkurogLTPmuLjmiYvlpb3pl7IgLTTlhpzmsJEqL1xuICAgIHB1YmxpYyBhcnJfcGVyc29uUGVyY2VudE5hbWUgOiBBcnJheTxzdHJpbmc+ID0gW1wicGVyY2VudERvY3RvclwiLFwicGVyY2VudFBvbGljXCIsXCJwZXJjZW50U2hvcGVyXCIsXCJwZXJjZW50Tm90aGluZ1wiLFwicGVyY2VudEZhcm1lclwiXTtcbiAgICAvKirmma7pgJrkurrkuK0g5Yy755Sf55qE5Y2g5q+UKi9cbiAgICBwdWJsaWMgcGVyY2VudERvY3RvciA6IG51bWJlciA9IDAuMDI7XG4gICAgLyoq5pmu6YCa5Lq656eNIOitpuWvn+WNoOavlCAqL1xuICAgIHB1YmxpYyBwZXJjZW50UG9saWMgOiBudW1iZXIgPSAwLjAzO1xuICAgIC8qKuaZrumAmuS6uuenjSDllYbkurrnmoTljaDmr5QgKi9cbiAgICBwdWJsaWMgcGVyY2VudFNob3BlciA6IG51bWJlciA9IDAuMTU7XG4gICAgLyoq5ri45omL5aW96ZeyICovXG4gICAgcHVibGljIHBlcmNlbnROb3RoaW5nIDogbnVtYmVyID0gMC4xO1xuICAgIC8qKuWGnOawkSAqL1xuICAgIHB1YmxpYyBwZXJjZW50RmFybWVyIDogbnVtYmVyID0gMC43O1xuXG4gICAgLy8tLS0tLS0tLeW9seWTjSDjgJDkuLvmlbDmja7jgJEtLS0tLS0tLS0tLS0tLS0tXG4gICAgXG5cblxuXG5cblxuXG4gICAgLy8tLS0tLS0tLeS6i+S7tuaVsOaNrlxuICAgIC8qKueYn+eWqyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8qL1xuICAgIHB1YmxpYyBwZXN0IDogbnVtYmVyID0gMDtcbiAgICAvKirlnLDpnIcgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfICovXG4gICAgcHVibGljIG5hdHVyYWxEaXNhc3RlciA6IG51bWJlciA9IDA7XG4gICAgLyoq5oiY5LmxICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyovXG4gICAgcHVibGljIHdhciA6IG51bWJlciA9IDA7XG5cbiAgICAvLy0tLS0tLS0t6IGM5Lia5Lq65pWwXG4gICAgcHVibGljIGFycl9QZW9wbGUgOiBBcnJheTxzdHJpbmc+ID0gW1wiY29tbW9uXCIsXCJzY2llbnRpc3RcIixcInN0YXJcIixcImJhbmRpdFwiLFwicm9iYmVyXCJdO1xuICAgIC8qKuaZrumAmuS6uiBBICDmma7pgJrkurrkuK3kvJrkuqfnlJ/ljLvnlJ8g6K2m5a+fIOetieato+W4uOiBjOS4miovXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDk1O1xuICAgIC8qKuenkeWtpuWutiBTU1MqL1xuICAgIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAxO1xuICAgIC8qKuaYjuaYnyBTUyovXG4gICAgcHVibGljIHN0YXIgOiBudW1iZXIgPSAyO1xuICAgIC8qKuWcn+WMqiAtUyAqL1xuICAgIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAxO1xuICAgIC8qKuebl+i0vCAtQSAqL1xuICAgIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAxO1xuICAgICAgICAvLyAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xuICAgICAgICAvLyBwdWJsaWMgY29tbW9uIDogbnVtYmVyID0gMTtcbiAgICAgICAgLy8gLyoq56eR5a2m5a62IFNTUyovXG4gICAgICAgIC8vIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAwO1xuICAgICAgICAvLyAvKirmmI7mmJ8gU1MqL1xuICAgICAgICAvLyBwdWJsaWMgc3RhciA6IG51bWJlciA9IDA7XG4gICAgICAgIC8vIC8qKuWcn+WMqiAtUyAqL1xuICAgICAgICAvLyBwdWJsaWMgYmFuZGl0IDogbnVtYmVyID0gMDtcbiAgICAgICAgLy8gLyoq55uX6LS8IC1BICovXG4gICAgICAgIC8vIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAwO1xuICAgIC8qKuW3sueUn+aIkOeahOS6uuenjSAgMCDmma7pgJogICAx56eR5a2m5a62ICAy5piO5pifIDPlnJ/ljKogNOebl+i0vCovXG4gICAgcHVibGljIGFscmVhZHlDcmVhdGUgOiBBcnJheTxudW1iZXI+ID0gWzAsMCwwLDAsMF07XG5cbiAgICAvLy0tLS0tLS0t5Z+O6ZeoXG4gICAgLyoq6Zeo5piv5ZCm5omT5byAKi9cbiAgICBwdWJsaWMgaXNEb29yT3BlbiA6IGJvb2xlYW49dHJ1ZTtcbiAgICAvKirnrZvmn6Xog73lipsg5ZCv5Yqo54m55q6K6Zeo55qE5pe25YCZICDnrZvmn6Xog73lipvnlJ/mlYgqL1xuICAgIHB1YmxpYyBwcmVwYXJhdGlvbiA6IG51bWJlciA9IDAuNTtcbiAgICAvKirnibnmrorpl6gg562b5p+lIDEt6Ziy5q2i6L+b5YWlICAgMi3pgoDor7fov5vlhaUqL1xuICAgIC8vIHB1YmxpYyBrZWVwU2VsZWN0IDogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3ljLrln59cbiAgICAvKirlopnlhoXljLrln5/liJLliIYgKi9cbiAgICBwdWJsaWMgYXJyX0xlZnRBcmVhIDogQXJyYXk8YW55PjtcbiAgICBwdWJsaWMgYXJyX1JpZ2h0QXJlYSA6IEFycmF5PGFueT47XG4gICAgXG4gICAgLy8tLS0tLS0tLS0tLS0tLS3ls7DlgLxcbiAgICAvKirlm73lrrblubjnpo/luqbls7DlgLwgKi9cbiAgICBwdWJsaWMgcG9wdWxhclN1cHBvcnRNYXggOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq5Zu95a6256eR5oqA5bOw5YC8ICovXG4gICAgcHVibGljIHRlY2hub2xvZ3lNYXggOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq5Zu95a625aOw5pyb5bOw5YC8ICovXG4gICAgcHVibGljIHByZXN0aWdlTWF4IDogbnVtYmVyID0gMTAwO1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgICAgICB0aGlzLmFycl9pblBlb3BsZSA9IG5ldyBBcnJheTxQZW9wbGU+KCk7XG4gICAgICAgIHRoaXMuYXJyX291dFBlb3BsZSA9IG5ldyBBcnJheTxQZW9wbGU+KCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq6I635Y+W5Yy65Z+fICovXG4gICAgcHVibGljIHNldEFyZWEodmlldyA6IExheWEuTm9kZSkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSB2aWV3Ll9jaGlsZHJlbjtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxjaGlsZHJlbi5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihjaGlsZHJlbltpXS5uYW1lID09IFwicGFsYWNlXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2goY2hpbGRyZW5baV0pOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoY2hpbGRyZW5baV0ueDw5ODEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXJyX0xlZnRBcmVhLnB1c2godmlldy5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJzcF93YWxsXCIpKTtcbiAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2godmlldy5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJzcF93YWxsXCIpKTtcbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurrnmoTpmo/mnLrnp7vliqjpgJ/luqYgKi9cbiAgICBwdWJsaWMgZ2V0TW92ZVNwZWVkKCkgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiBHYW1lQ29uZmlnLlRFU1RfUE9JTlRfU1BFRUQqKE1hdGgucmFuZG9tKCkrMC41KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bkurrlj6PmtYHph48gOlxuICAgICAqIHJldHVybiDov5vlhaUgLyDlh7rljrtcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0X1Blb3BsZU1vdmUoKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyY2VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bkurrnp43mr5TkvotcbiAgICAgKiBAcGFyYW0gdHlwZSDkurrnp41cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0X1Byb2Zlc3Npb25QZXJjZW50KHR5cGU6c3RyaW5nKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgaWYodGhpc1t0eXBlXSA9PT0gdW5kZWZpbmVkKSBjb25zb2xlLmxvZyhcIuS4jeWtmOWcqOivpeS6uuenjVwiKTtcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpc1t0eXBlXS8odGhpcy5wb3B1bGF0aW9uKTtcbiAgICB9XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLee7k+eul1xuICAgIC8qKui0ouaUv+e7k+eulyovXG4gICAgcHVibGljIGNhbF9Nb25leSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5wcmVzdGlnZV9Bcm15Q29zdCgpO1xuICAgICAgICB0aGlzLnN0ZWFkeUNvc3QoKTtcbiAgICAgICAgdGhpcy5nZXRUYXgoKTtcbiAgICAgICAgdGhpcy50ZWNobm9sb2d5X0dEUCgpO1xuICAgIH1cblxuICAgIC8qKueyrumjnyDlvbHlk43nu5PnrpcqL1xuICAgIHB1YmxpYyBpbmZsdWVuY2VfR3JhaW4oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBncmFpbk1pbnVzPXRoaXMucG9wdWxhdGlvbl9HcmFpbkNvc3QoKTtcbiAgICAgICAgbGV0IGdyYWluQWRkPXRoaXMucG9wdWxhdGlvbl9HcmFpbkFkZCgpO1xuICAgICAgICB0aGlzLmNhbF9HcmFpbihncmFpbkFkZCxncmFpbk1pbnVzKTtcbiAgICB9XG5cbiAgICAvKirlubjnpo/luqYg5b2x5ZON57uT566XICovXG4gICAgcHVibGljIGluZmx1ZW5jZV9Qb3B1bGFyU3VwcG9ydCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zdXBwb3J0X1BlcmNlbnQoKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0X1Blb3BsZVR5cGUoKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0X091dFBlb3BsZU1heCgpO1xuICAgIH1cblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5YWs5byPXG4gICAgLyoq56iz5a6a5pSv5Ye6ICovXG4gICAgcHJpdmF0ZSBzdGVhZHlDb3N0KCk6dm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5tb25leS09dGhpcy5hcm15Q29zdCooMS10aGlzLmFybXlQZXJjZW50KSt0aGlzLmdvdmVybkNvc3QrdGhpcy50ZWNobm9sb2d5Q29zdDtcbiAgICB9XG5cbiAgICAvKirnsq7po5/mtojogJcg5Lq65Y+j5pWwKuavj+S6uua2iOiAl+mHjyovXG4gICAgcHJpdmF0ZSBwb3B1bGF0aW9uX0dyYWluQ29zdCgpOm51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9wdWxhdGlvbip0aGlzLmdyYWluUGVyQ29zdDtcbiAgICB9XG5cbiAgICAvKirnsq7po5/nlJ/kuqcg5Lq65Y+j5pWwKuavj+S6uuWunumZheS6p+mHjyovXG4gICAgcHJpdmF0ZSBwb3B1bGF0aW9uX0dyYWluQWRkKCk6bnVtYmVyXG4gICAge1xuICAgICAgICAvL+enkeaKgOW6pui9rOaNoiDnp5HmioDluqYwLTEwMCDnlJ/kuqflj5jljJbnjocwLTIg5YWs5byP5pqC5a6aeT14KjAuMDItMSw1MOS4uuWIhueVjOmZkFxuICAgICAgICBsZXQgY2hhbmdlPXRoaXMudGVjaG5vbG9neSowLjAyLTE7XG4gICAgICAgIHRoaXMuZ3JhaW5QZXJBZGQ9KDErY2hhbmdlKSp0aGlzLmdyYWluUGVyQWRkO1xuICAgICAgICBsZXQgcHJvPXRoaXMuZ3JhaW5QZXJBZGQqdGhpcy5wb3B1bGF0aW9uO1xuICAgICAgICByZXR1cm4gcHJvO1xuICAgIH1cblxuICAgIC8qKuW5uOemj+W6puW9seWTjeS6uuWPo+a1geWKqOeOhyAqL1xuICAgIHByaXZhdGUgc3VwcG9ydF9QZXJjZW50KCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/lubjnpo/lvbHlk43kurrlj6PmtYHliqjnjofnmoTms6LliqjojIPlm7QgLTAuMn4wLjIg5YWs5byP5pqC5a6aeT14KjAuMDA0LTAuMiw1MOS4uuWIhueVjOmZkFxuICAgICAgICBsZXQgY2hhbmdlPXRoaXMucG9wdWxhclN1cHBvcnQqMC4wMDQtMC4yO1xuICAgICAgICB0aGlzLnBlcmNlbnQ9KDErY2hhbmdlKSp0aGlzLnBlcmNlbnQ7ICAgXG4gICAgfVxuXG4gICAgLyoq5bm456aP5bqm5b2x5ZON5Lq656eN5Yeg546HIOWdh+S7juaZrumAmuS6uuWHoOeOh+S4rei/m+ihjOabv+aNoiovXG4gICAgcHJpdmF0ZSBzdXBwb3J0X1Blb3BsZVR5cGUoKVxuICAgIHtcbiAgICAgICAgLy/np5Hlrablrrbms6LliqjojIPlm7QgMC4wMS0wLjA1IOWFrOW8j+aaguWumnk9eCowLjAwMDQrMC4wMSw1MOS4uuWIhueVjOmZkFxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLnNjaWVudGlzdD10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDAwNCswLjAxO1xuICAgICAgICAvL+aYjuaYn+azouWKqOiMg+WbtCAwLjAwNS0wLjAyNSDlhazlvI/mmoLlrpp5PXgqMC4wMDAyKzAuMDA1LDUw5Li65YiG55WM6ZmQXG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18uc3Rhcj10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDAwMiswLjAwNTtcbiAgICAgICAgLy/nm5fotLzms6LliqjojIPlm7QgMC4wNi0wLjE0IOWFrOW8j+aaguWumnk9eCowLjAwMDgrMC4wNiw1MOS4uuWIhueVjOmZkFxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLnJvYmJlcj10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDAwOCswLjA2O1xuICAgICAgICAvL+Wcn+WMquazouWKqOiMg+WbtCAwLjAyLTAuMSDlhazlvI/mmoLlrpp5PXgqMC4wMDA4KzAuMDIsNTDkuLrliIbnlYzpmZBcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5iYW5kaXQ9dGhpcy5wb3B1bGFyU3VwcG9ydCowLjAwMDgrMC4wMjtcbiAgICAgICAgLy/mma7pgJrkurrms6LliqjojIPlm7RcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5jb21tb249MS0oT3V0Q291bnRyeURhdGEuaW5zXy5zY2llbnRpc3QrT3V0Q291bnRyeURhdGEuaW5zXy5zdGFyK091dENvdW50cnlEYXRhLmluc18ucm9iYmVyK091dENvdW50cnlEYXRhLmluc18uYmFuZGl0KTtcbiAgICB9XG5cbiAgICAvKirlubjnpo/luqblvbHlk43lopnlpJbkurrlj6Mg5aKZ5aSW5pyA5aSn5a6557qz5pWwMjAwLTYwMCovXG4gICAgcHJpdmF0ZSBzdXBwb3J0X091dFBlb3BsZU1heCgpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v5aKZ5aSW5aKe6ZW/546H5rOi5Yqo6IyD5Zu0IDAuMi0wLjYg5YWs5byP5pqC5a6aeT14KjAuMDA0KzAuMiw1MOS4uuWIhueVjOmZkFxuICAgICAgICBsZXQgY2hhbmdlPXRoaXMucG9wdWxhclN1cHBvcnQqMC4wMDQrMC4yO1xuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50PTEwMDAqY2hhbmdlO1xuICAgIH1cblxuICAgIC8qKuenkeaKgOW9seWTjUdEUCAqL1xuICAgIHByaXZhdGUgdGVjaG5vbG9neV9HRFAoKTp2b2lkXG4gICAge1xuICAgICAgICAvL0dEUOazouWKqOiMg+WbtCAtMC41fjAuNSDlhazlvI/mmoLlrpp5PXgqMC4wNSw1MOS4uuWIhueVjOmZkFxuICAgICAgICBsZXQgY2hhbmdlPXRoaXMudGVjaG5vbG9neSowLjAxLTAuNTtcbiAgICAgICAgLy/lrp7pmYVHRFBcbiAgICAgICAgbGV0IGN1cnJHRFA9dGhpcy5HRFAqKGNoYW5nZSsxKTtcbiAgICAgICAgdGhpcy5tb25leS09Y3VyckdEUCp0aGlzLnBvcHVsYXRpb247XG4gICAgfVxuICAgIC8qKuWogeacm+W9seWTjeWGm+i0uSAqL1xuICAgIHByaXZhdGUgcHJlc3RpZ2VfQXJteUNvc3QoKTp2b2lkXG4gICAge1xuICAgICAgICAvL+WGm+i0ueWHj+WwkeeOh+azouWKqOiMg+WbtCAwLjAtMC40IOWFrOW8j+aaguWumnk9eCowLjAwNCw1MOS4uuWIhueVjOmZkFxuICAgICAgICB0aGlzLmFybXlQZXJjZW50PXRoaXMucHJlc3RpZ2UqMC4wMDQ7XG4gICAgfVxuXG4gICAgLyoq56iO5pS2ICovXG4gICAgcHVibGljIGdldFRheCgpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubW9uZXkrPXRoaXMudGF4O1xuICAgIH1cblxuICAgIC8qKueyrumjn+e7k+eulyAqL1xuICAgIHB1YmxpYyBjYWxfR3JhaW4oZ3JhaW5BZGQ6bnVtYmVyLGdyYWluTWludXM6bnVtYmVyKTp2b2lkXG4gICAge1xuICAgICAgICAvL+WmguaenOi/mOacieeyrumjn+W6k+WtmFxuICAgICAgICBpZihncmFpbkFkZD49Z3JhaW5NaW51cylcbiAgICAgICAge1xuICAgICAgICAgICAgLy/lpoLmnpznlJ/kuqfph4/lpKfkuo7lpKfkuo7mtojogJfnjofnmoTmn5DkuKrlgI3njofvvIzlhYjorqnlhbboh6rliqjovazljJbkuLrotKLmlL/vvIzkuYvlkI7kv67mlLnkuLrmiYvliqjovazljJZcbiAgICAgICAgICAgIGlmKGdyYWluQWRkL2dyYWluTWludXM+PUdhbWVDb25maWcuR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8v6LaF5Ye65YCN546H55qE6YOo5YiGXG4gICAgICAgICAgICAgICAgbGV0IGV4Y2hhbmdlPWdyYWluQWRkLWdyYWluTWludXMqR2FtZUNvbmZpZy5HUkFJTl9FWENIQU5HRU1PTkVZX1BFUkNFTlQ7XG4gICAgICAgICAgICAgICAgLy/nsq7po5/mjaLpkrFcbiAgICAgICAgICAgICAgICB0aGlzLm1vbmV5Kz1leGNoYW5nZSpHYW1lQ29uZmlnLkdSQUlOVE9NT05FWTtcbiAgICAgICAgICAgICAgICAvL+WJqeS9meeahOWKoOWFpeW6k+WtmFxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jays9KGdyYWluQWRkLWV4Y2hhbmdlLWdyYWluTWludXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8v5Yqg5YWl5bqT5a2YXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrKz0oZ3JhaW5BZGQtZ3JhaW5NaW51cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+WmguaenOW6k+WtmOWKoOS4iueUn+S6p+eahOeyrumjn+S4jei2s+S7peaKteWkn+a2iOiAl+eahOeyrumjn1xuICAgICAgICAgICAgaWYoKENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jaytncmFpbkFkZCk8Z3JhaW5NaW51cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+eCueWHu+mAieaLqeaYr+WQpui0reS5sOeyrumjn++8jOWmguaenOS4jei0reS5sOWImeWvvOiHtOS6uuWPo+WHj+WwkeWSjOW5uOemj+W6pumZjeS9jlxuICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbi09KGdyYWluTWludXMtKENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jaytncmFpbkFkZCkpKjE7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1bGFyU3VwcG9ydC09KGdyYWluTWludXMtKENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jaytncmFpbkFkZCkpKjAuMDAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8v5YeP5bCR5bqT5a2YXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrLT1ncmFpbk1pbnVzLWdyYWluQWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5pS55Y+YIOi/m+OAgeWHuiDnm67moIfkurrmlbAgQGlzb3V0OuaYr+WQpuaYr+WHuuWfjiAgQGNvdW5077ya5pS55Y+Y55uu5qCH5YC8Ki9cbiAgICBwdWJsaWMgc2V0SW5PdXRUYXJnZXQoaXNPdXQsY291bnQpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoaXNPdXQpIHRoaXMuZXhpdFBlb3BsZSArPSBjb3VudDtcbiAgICAgICAgZWxzZSB0aGlzLmVudGVyUGVvcGxlICs9IGNvdW50O1xuICAgIH1cblxuICAgIC8qKuaUueWPmCDov5vjgIHlh7og55uu5qCH5Lq65pWwIEBpc291dDrmmK/lkKbmmK/lh7rln44gIEBjb3VudO+8muaUueWPmOWunumZheWAvCovXG4gICAgcHVibGljIHNldEluT3V0VHJ1dGgoaXNPdXQsY291bnQpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoaXNPdXQpIHRoaXMuX291dGVyUGVvcGxlICs9IGNvdW50O1xuICAgICAgICBlbHNlIHRoaXMuX2lubmVyUGVvcGxlICs9IGNvdW50O1xuICAgIH1cbiAgICBcbiAgICAvKirpgJrnn6Xkurrlj6Plh7rln44gQHR5cGUg77yaIOi/m+aIkHR1cmUgIOWHuuWfjiBmYWxzZSovXG4gICAgcHVibGljIHBlb3BsZUdvT3V0KHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGFyciA7XG4gICAgICAgIGlmKHR5cGUpIGFyciA9IHRoaXMuYXJyX291dFBlb3BsZTtcbiAgICAgICAgICAgIGVsc2UgYXJyID0gdGhpcy5hcnJfaW5QZW9wbGU7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKGFyci5sZW5ndGgqcmFuZG9tKTtcbiAgICAgICAgaWYoaW5kZXg+MClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIWFycltpbmRleF0uaXNHbylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhcnJbaW5kZXhdLnBlb3BsZUdvKHR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB0aGlzLnBlb3BsZUdvT3V0KHR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwi6ZqP5py65Ye66ZSZXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8qKuWHuuWfjumXqOebuOWFs+aTjeS9nCAqL1xuICAgIHB1YmxpYyBnb091dCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuX291dGVyUGVvcGxlKys7Ly/lrp7pmYXkurrmlbDliqDkuIBcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uLS07Ly/mgLvkurrlj6MgLS1cbiAgICAgICAgaWYodGhpc1t0eXBlXSkgdGhpc1t0eXBlXS0tO1xuICAgIH1cbn1cblxuLyoq5aSW5Z+OICovXG5leHBvcnQgY2xhc3MgT3V0Q291bnRyeURhdGF7XG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogT3V0Q291bnRyeURhdGEgPSBuZXcgT3V0Q291bnRyeURhdGEoKTtcbiAgICAvKioqKioqKioqKioqKirkuLvmlbDmja4qKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKirmnIDlpKflpJbln47lrrnnurPmlbDph48gKi9cbiAgICBwdWJsaWMgbWF4Q291bnQgOiBudW1iZXI9NDAwO1xuICAgIC8qKuW9k+WJjeWkluWfjuS6uuWPo+aVsCAqL1xuICAgIHB1YmxpYyBvdXRDb3VudDpudW1iZXI9MDtcbiAgICAvKirkurrmu57nlZnml7bpl7QgKi9cbiAgICBwdWJsaWMgbGltaXRUaW1lOm51bWJlcj01MDtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKuaZrumAmuS6uiovXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDAuNzk1O1xuICAgIC8qKuenkeWtpuWutiBTU1MqL1xuICAgIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAwLjAzO1xuICAgIC8qKuaYjuaYnyBTUyovXG4gICAgcHVibGljIHN0YXIgOiBudW1iZXIgPSAwLjAxNTtcbiAgICAvKirlnJ/ljKogLVMgKi9cbiAgICBwdWJsaWMgYmFuZGl0IDogbnVtYmVyID0gMC4wNjtcbiAgICAvKirnm5fotLwgLUEgKi9cbiAgICBwdWJsaWMgcm9iYmVyIDogbnVtYmVyID0gMC4xO1xuICAgIC8qKuWPmOmHj+WQjSAqL1xuICAgIHB1YmxpYyBhcnJfUGVvcGxlIDogQXJyYXk8c3RyaW5nPiA9IFtcImNvbW1vblwiLFwic2NpZW50aXN0XCIsXCJzdGFyXCIsXCJiYW5kaXRcIixcInJvYmJlclwiXTtcbiAgICBcbiAgICAvKirojrflj5bljLrpl7TmlbDnu4QgMCwwLjc5NSwwLjgyNSwwLjg0LDAuOSwxKi9cbiAgICBwdWJsaWMgZ2V0UGVyY2VudEFyZWEoKTpBcnJheTxudW1iZXI+XG4gICAge1xuICAgICAgIGxldCBhcnJQZXJjZW50ID0gW107Ly/nlJ/kuqfmr5TkvotcbiAgICAgICBsZXQgYXJyX1Blb3BsZSA9IHRoaXMuYXJyX1Blb3BsZTtcbiAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyX1Blb3BsZS5sZW5ndGg7aSsrKVxuICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlciArPSB0aGlzW2Fycl9QZW9wbGVbaV1dO1xuICAgICAgICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgfVxuICAgICAgIHJldHVybiBhcnJQZXJjZW50O1xuICAgIH1cbn0iLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuLi91aS9sYXlhTWF4VUlcIjtcblxuLyoqXG4gKiDmtojmga/moYYg6YCa55SoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1zZ0RpYWxvZyBleHRlbmRzIHVpLkRpYS5DdXJyZW50RGlhbG9nVUl7XG4gICAgLyoq57G75Z6LICovXG4gICAgcHJpdmF0ZSB0eXBlIDogbnVtYmVyIDtcbiAgICAvKirnvJPliqggKi9cbiAgICAvLyBwcml2YXRlIHNob3dUd2VlbiA6IExheWEuVHdlZW47XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKirliJ3lp4vljJYgKi9cbiAgICBwdWJsaWMgc2hvd01zZyh0eXBlOm51bWJlcikgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZURpYWxvZyk7ICAgICAgICBcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VJbWcoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUaXRsZSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVdvcmQoKTsgXG4gICAgICAgIHRoaXMubXNnQm9keS54ID0gKDkwMC8oTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodC9MYXlhLkJyb3dzZXIuY2xpZW50V2lkdGgpLTExNjMpLzI7ICAgICAgIFxuICAgICAgICB0aGlzLm1zZ0JvZHkueSA9IC01NTc7ICAgICAgIFxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eTowfSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirmjaLlm74gKi9cbiAgICBwcml2YXRlIGNoYW5nZUltZygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSlcbiAgICAgICAge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirmjaLmoIfpopggKi9cbiAgICBwcml2YXRlIGNoYW5nZVRpdGxlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirmloflrZfovb3lhaUgKi9cbiAgICBwcml2YXRlIGNoYW5nZVdvcmQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuWFs+mXrSAqL1xuICAgIHB1YmxpYyBjbG9zZURpYWxvZygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5idG5fY2xvc2Uub2ZmKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlRGlhbG9nKTsgICAgICAgICAgICAgICAgXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5tc2dCb2R5LHt5Oi01NTd9LDIwMCxMYXlhLkVhc2UuYmFja091dCxMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsdGhpcy5jbG9zZU92ZXIpKTsgICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgY2xvc2VPdmVyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTsgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZXJmZWIvUGVvcGxlXCI7XG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcbmltcG9ydCBDb3VudHJ5RGF0YSwgeyBPdXRDb3VudHJ5RGF0YSB9IGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgQ29tbW9uIGZyb21cIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9Db21tb25cIlxuaW1wb3J0IFJvYmJlciBmcm9tXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyXCJcbmltcG9ydCBTY2llbnRpc3QgZnJvbSBcIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9TY2llbnRpc3RcIjtcbmltcG9ydCBTdGFyIGZyb20gXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvU3RhclwiO1xuaW1wb3J0IEJhbmRpdCBmcm9tIFwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL0JhbmRpdFwiO1xuLyoqXG4gKiDkurog566h55CGXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZU1hbmFnZXIge1xuICAgIC8qKuinhuWbviovXG4gICAgcHJpdmF0ZSB2aWV3OmFueTsgXG4gICAgLyoq5qiq5Z2Q5qCHICovXG4gICAgcHJpdmF0ZSBYOm51bWJlcjtcbiAgICAvKirnurXlnZDmoIcgKi9cbiAgICBwcml2YXRlIFk6bnVtYmVyO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5aKZ5YaFXG4gICAgLyoq55Sf5oiQ6Ze06ZqU6K6h5pe25ZmoICovXG4gICAgcHJpdmF0ZSBjb3VudFRpbWUgOiBudW1iZXIgPSAwO1xuICAgIC8qKueUn+S6p+aXtumXtOmXtOmalCAqL1xuICAgIHByaXZhdGUgY291bnRUaW1lXyA6IG51bWJlciA9IDUwMDtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0cnVjdG9yKHZpZXcpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXc9dmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvIDlkK/nlJ/miJDlt6XljoJcbiAgICAgKiDnlJ/miJDkurogXG4gICAgICog55Sf5oiQ5Lq655qE5L2N572uXG4gICAgICog55Sf5Lqn5Lq655qEdHlwZSDvvJog5Z+O6YeM5Lq6L+WfjuWkluS6uiDpgLvovpHliIblvIBcbiAgICAgKi9cbiAgICAvKirlvIDlkK/nlJ/miJDlt6XljoIgKi9cbiAgICBwdWJsaWMgb3BlblBlb3BsZUZhY3RvcnkoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKCk7XG4gICAgfVxuXG4gICAgLyoq55Sf5oiQ5Lq6ICovXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZSgpOnZvaWRcbiAgICB7XG4gICAgICAgIGxldCBhcnJheTpBcnJheTxudW1iZXI+PU91dENvdW50cnlEYXRhLmluc18uZ2V0UGVyY2VudEFyZWEoKTtcbiAgICAgICAgbGV0IHBlb3BsZTtcbiAgICAgICAgLyoq55Sf5oiQ5LiN5ZCM5Lq656eN55qE5Yeg546HICovXG4gICAgICAgIGxldCByYW5kb209TWF0aC5yYW5kb20oKTtcbiAgICAgICAgLy/mma7pgJrkurpcbiAgICAgICAgaWYocmFuZG9tPj0wJiZyYW5kb208YXJyYXlbMV0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJjb21tb25cIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IENvbW1vbih0aGlzLnZpZXcsR2FtZUNvbmZpZy5DT01NT05fTUFOLHRydWUpO1xuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX291dFBlb3BsZS5wdXNoKHBlb3BsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/np5HlrablrrZcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PWFycmF5WzFdJiZyYW5kb208YXJyYXlbMl0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJzY2llbnRpc3RcIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFNjaWVudGlzdCh0aGlzLnZpZXcsR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOLHRydWUpO1xuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX291dFBlb3BsZS5wdXNoKHBlb3BsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZW9wbGUuY3JlYXRlVGVjaG5vbG9neVRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+aYjuaYn1xuICAgICAgICBlbHNlIGlmKHJhbmRvbT49YXJyYXlbMl0mJnJhbmRvbTxhcnJheVszXSlcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInN0YXJcIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFN0YXIodGhpcy52aWV3LEdhbWVDb25maWcuU1RBUl9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBlb3BsZS5jcmVhdGVTdGFyVGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8v55uX6LS8XG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj1hcnJheVszXSYmcmFuZG9tPGFycmF5WzRdKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwicm9iYmVyXCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuUk9CQkVSX01BTix0cnVlKTtcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGVvcGxlLmN1dE1vbmV5VGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8v5Zyf5YyqXG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcImJhbmRpdFwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgQmFuZGl0KHRoaXMudmlldyxHYW1lQ29uZmlnLkJBTkRJVF9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBlb3BsZS5jdXRNb25leVRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBwZW9wbGUudmlzaWJsZT10cnVlO1xuICAgICAgICBwZW9wbGUuaXNPdXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdldFBvcygpO1xuICAgICAgICBwZW9wbGUuc2V0UG9zKHRoaXMuWCx0aGlzLlkpO1xuICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpO1xuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjM7XG4gICAgICAgIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQ8T3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xuICAgICAgICB9XG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQrKztcbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurrnmoTkvY3nva4gKi9cbiAgICBwdWJsaWMgZ2V0UG9zKCk6YW55XG4gICAge1xuICAgICAgICBsZXQgdHlwZU51bT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMyk7XG4gICAgICAgIHN3aXRjaCh0eXBlTnVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy/lnKhB6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPTA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8v5ZyoQui+ueeVjFxuICAgICAgICAgICAgICAgIHRoaXMuWD1NYXRoLnJhbmRvbSgpKjIwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgLy/lnKhD6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPTIwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirnlYzpmZDmo4DmtYsgKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBcbiAgICBcbiAgICBwdWJsaWMgY2hlY2tQZXJjZW50KHBlb3BsZSx0eXBlOnN0cmluZyk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/mtYHliqjmr5Tkvovmo4DmtYtcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5wZXJjZW50PDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5Yib5bu65aKZ5YaF5Lq6ICovXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZV9Jbm5lcigpIDogdm9pZFxuICAgIHtcbiAgICAgICBsZXQgcmFuZG9tU3RyaW5nIDtcbiAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXG4gICAgICAgbGV0IGFycl9QZW9wbGUgPSBDb3VudHJ5RGF0YS5pbnNfLmFycl9QZW9wbGU7XG4gICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgZm9yKGxldCBpID0gMDtpPGFycl9QZW9wbGUubGVuZ3RoO2krKylcbiAgICAgICB7XG4gICAgICAgICAgICBudW1iZXIgKz0gQ291bnRyeURhdGEuaW5zXy5nZXRfUHJvZmVzc2lvblBlcmNlbnQoYXJyX1Blb3BsZVtpXSk7XG4gICAgICAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICB9XG4gICAgICAgY29uc29sZS5sb2coYXJyUGVyY2VudCk7XG4gICAgICAgTGF5YS50aW1lci5sb29wKDEsdGhpcyx0aGlzLmdldFJhbmRvbSxbYXJyUGVyY2VudF0pO1xuICAgIH1cblxuICAgIC8qKueUn+S6p+S6uiAqL1xuICAgIHByaXZhdGUgY3JlYXRlX0lubmVyKHJhbmRvbVN0cmluZykgOiB2b2lkXG4gICAge1xuICAgICAgICBpZihyYW5kb21TdHJpbmcgPT0gXCJub25lXCIpIHJldHVybjtcbiAgICAgICAgbGV0IHBlb3BsZSA9IExheWEuUG9vbC5nZXRJdGVtKHJhbmRvbVN0cmluZyk7ICBcbiAgICAgICAgbGV0IGNvdW50cnlEYXRhID0gQ291bnRyeURhdGEuaW5zXztcbiAgICAgICAgLy/nlJ/kuqfkurrnp41cbiAgICAgICAgc3dpdGNoKHJhbmRvbVN0cmluZylcbiAgICAgICAgeyAgICAvKirlt7LnlJ/miJDnmoTkurrnp40gIDAg5pmu6YCaICAgMeenkeWtpuWutiAgMuaYjuaYnyAz5Zyf5YyqIDTnm5fotLwqL1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkNPTU1PTl9NQU46ICAgXG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzBdKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuUk9CQkVSX01BTjovL+ebl+i0vFxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVs0XSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkJBTkRJVF9NQU46Ly/lnJ/ljKpcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbM10rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TVEFSX01BTjovL+aYjuaYn1xuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVsyXSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNDSUVOVElTVF9NQU46Ly/np5HlrablrrZcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbMV0rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZighcGVvcGxlKSB7Y29uc29sZS5sb2coXCLmlrDlu7rkurrlpLHotKXvvIFcIikgO3JldHVybjt9XG4gICAgICAgIHBlb3BsZS5pc091dCA9IGZhbHNlO1xuICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9pblBlb3BsZS5wdXNoKHBlb3BsZSk7Ly/liqDlhaXnu7TmiqTmlbDnu4RcbiAgICAgICAgaWYocGVvcGxlID09PSB1bmRlZmluZWQgfHwgcGVvcGxlID09PSBudWxsKSB7Y29uc29sZS5sb2coXCLmsqHmnInnlJ/miJDkurrnp43vvIHnp43nsbs6XCIgKyByYW5kb21TdHJpbmcpO3JldHVybjt9XG4gICAgICAgIHRoaXMuY3JlYXRlUG9zKHBlb3BsZSk7XG4gICAgICAgIHBlb3BsZS5zcGVjaWFsRG8oKTtcbiAgICAgICAgcGVvcGxlLm9wZW5CZWhhdmlvdXIoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq55Sf5Lqn5L2N572uICovXG4gICAgcHJpdmF0ZSBjcmVhdGVQb3MocGVvcGxlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBob3VzZU5vZGUgPSAodGhpcy52aWV3IGFzIExheWEuU3ByaXRlKS5nZXRDaGlsZEJ5TmFtZSgnaG91c2UnKTtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBob3VzZU5vZGUuX2NoaWxkcmVuLmxlbmd0aC8xMDA7XG4gICAgICAgIGxldCBob3VzZSA7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8IGhvdXNlTm9kZS5fY2hpbGRyZW4ubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwZXJjZW50KjEwMCk7XG4gICAgICAgICAgICBob3VzZSA9IGhvdXNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvdXNlX1wiK251bWJlcik7XG4gICAgICAgICAgICBpZihob3VzZSAhPT0gdW5kZWZpbmVkICYmIGhvdXNlICE9PSBudWxsKSAgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlLnNldFBvcyhob3VzZS54LGhvdXNlLnksaG91c2UpOyAgIFxuICAgICAgICAgICAgICAgIC8vIHBlb3BsZS5wZW9wbGVJbnRvKCk7IFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuiOt+WPlumaj+acuuS6uuenjSAqL1xuICAgIHByaXZhdGUgZ2V0UmFuZG9tKGFyclBlcmNlbnQpIDogc3RyaW5nXG4gICAge1xuICAgICAgICBpZih0aGlzLmNvdW50VGltZSA8PSB0aGlzLmNvdW50VGltZV8pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRUaW1lKys7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudFRpbWVfID0gTWF0aC5yYW5kb20oKSpHYW1lQ29uZmlnLlBFUlNPTl9DUkVBVEVfVElNRSoxMDA7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi55Sf5oiQ6Ze06ZqUOlwiICsgTWF0aC5mbG9vcih0aGlzLmNvdW50VGltZS8xMDApICsgXCJzXCIpO1xuICAgICAgICB0aGlzLmNvdW50VGltZSA9IDA7XG5cbiAgICAgICAgbGV0IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGxldCBwZXJzb24gPSBcIlwiO1xuICAgICAgICBsZXQgaW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyUGVyY2VudC5sZW5ndGggO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIWFyclBlcmNlbnRbaSsxXSkgYnJlYWs7XG4gICAgICAgICAgICBpZihhcnJQZXJjZW50W2ldIDw9IG51bWJlciAmJiBudW1iZXIgPCBhcnJQZXJjZW50W2krMV0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVyc29uID0gQ291bnRyeURhdGEuaW5zXy5hcnJfUGVvcGxlW2ldO1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXBlcnNvbikge2NvbnNvbGUubG9nKFwi5Lq656eN6ZqP5py65aSx6LSl77yBXCIpO3JldHVybjt9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBlcnNvbik7XG4gICAgICAgIC8v5Yik5pat5Lq65piv5ZCm6L+Y6IO955Sf5oiQXG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpe2NvbnNvbGUubG9nKFwi5qaC546H6K6h566X5Ye66ZSZXCIpO3JldHVybjt9XG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVtpbmRleF0gPT0gQ291bnRyeURhdGEuaW5zX1twZXJzb25dKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLmdldEFscmVhZENyZWF0ZSgpID09IENvdW50cnlEYXRhLmluc18ucG9wdWxhdGlvbikgcmV0dXJuO1xuICAgICAgICAgICAgcGVyc29uID0gdGhpcy5nZXRSYW5kb20oYXJyUGVyY2VudCk7ICAgICBcbiAgICAgICAgfVxuICAgICAgIHRoaXMuY3JlYXRlX0lubmVyKHBlcnNvbik7Ly/nlJ/kuqfkurrnp40gICBcbiAgICB9XG5cbiAgICAvKuiOt+WPluW3sueUn+aIkOS6uuWPo+eahOaVsOmHjyovXG4gICAgcHVibGljIGdldEFscmVhZENyZWF0ZSgpIDogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGUubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyICs9Q291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlW2ldXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICB9XG59IiwiaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XG5cbi8qKlxuICogVUnnrqHnkIblmahcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2Vye1xuICAgIC8qKuaVsOaNrueuoeeQhuWZqCAqL1xuICAgIC8vIHB1YmxpYyBzdGF0aWMgZGF0YU1hbmFnZXIgOiBEYXRhTWFuYWdlcjtcbiAgICAvKipVSSBzcHJpdGUgKi9cbiAgICBwcml2YXRlIFVpU3ByaXRlIDogTGF5YS5TcHJpdGU7XG5cbiAgICAvKirovb3lhaXmlbDmja4gKi9cbiAgICBjb25zdHJ1Y3Rvcih1aTpMYXlhLlNwcml0ZSl7XG4gICAgICAgIHRoaXMuVWlTcHJpdGUgPSB1aTtcbiAgICB9XG4gICAgXG4gICAgXG59IiwiLyoqXG4gKiDkuovku7blj5HnlJ/nrqHnkIblmahcbiAqIFxuICogXG4gKiDnlJ/miJDkuovku7bjgIFcbiAqIOW9seWTjeS6uuWPo+a1geWKqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZEV2ZW50TWFuYWdlciB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICAvKirkuovku7bpooTmiqXliLAgKi9cbiAgICBcblxuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xuXG4gICAgXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBCdXlEaWFsb2cgZnJvbSBcIi4vQ29yZS9CdXlEaWFsb2dcIlxuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi9Db3JlL01zZ0RpYWxvZ1wiXG5pbXBvcnQgT3BlbkdhbWUgZnJvbSBcIi4vU2NyaXB0L09wZW5HYW1lXCJcbmltcG9ydCBHYW1lV29ybGQgZnJvbSBcIi4vU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGRcIlxuaW1wb3J0IE9wZW5TdG9yeSBmcm9tIFwiLi9TY3JpcHQvT3BlblN0b3J5XCJcbmltcG9ydCBDZW50ZXIgZnJvbSBcIi4vU2NyaXB0L0NlbnRlclwiXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xNDQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9OTAwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZGhlaWdodFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiU3RhcnRHYW1lLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJDb3JlL0J1eURpYWxvZy50c1wiLEJ1eURpYWxvZyk7XG4gICAgICAgIHJlZyhcIkNvcmUvTXNnRGlhbG9nLnRzXCIsTXNnRGlhbG9nKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5HYW1lLnRzXCIsT3BlbkdhbWUpO1xuICAgICAgICByZWcoXCJTY3JpcHQvR2FtZVdvcmxkL0dhbWVXb3JsZC50c1wiLEdhbWVXb3JsZCk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9PcGVuU3RvcnkudHNcIixPcGVuU3RvcnkpO1xuICAgICAgICByZWcoXCJTY3JpcHQvQ2VudGVyLnRzXCIsQ2VudGVyKTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XG5jbGFzcyBNYWluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xuXHRcdGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XG5cblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlO1xuXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xuXHR9XG5cblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcblx0fVxuXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXG5cdFx0R2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xuXHR9XG59XG4vL+a/gOa0u+WQr+WKqOexu1xubmV3IE1haW4oKTtcbiIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IENvdW50cnlEYXRhLCB7IE91dENvdW50cnlEYXRhIH0gZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBUb29sIGZyb20gXCIuLi9Ub29sL1Rvb2xcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuXG4vKipcbiAqIFxuICog5Lq656eN54i257G7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZSB7XG4gICAgLyoq5Zy65pmvKi9cbiAgICBwcm90ZWN0ZWQgdmlldyA6IExheWEuU3ByaXRlO1xuICAgIC8qKueyvueBtSAqL1xuICAgIHB1YmxpYyBzcCA6IExheWEuU3ByaXRlO1xuICAgIC8qKuaoquWdkOagh+enu+WKqOmAn+W6piAqL1xuICAgIHByaXZhdGUgZGlyWDpudW1iZXI7XG4gICAgLyoq57q15Z2Q5qCH56e75Yqo6YCf5bqmICovXG4gICAgcHJpdmF0ZSBkaXJZOm51bWJlcjtcbiAgICBcbiAgICAvKioqKioqKioqKioqKioqKioqKuWimeWGhSAqKioqKioqKioqKiovXG4gICAgLyoq5aKZ5YaF5Lq66L+Y5piv5aKZ5aSW5Lq6ICovXG4gICAgcHVibGljIGlzT3V0IDogYm9vbGVhbjtcbiAgICAvKirkurrlsZ7mgKcgKi9cbiAgICBwdWJsaWMgdHlwZTpzdHJpbmc7XG4gICAgLyoq5Lq655qE5pyd5ZCRICovXG4gICAgcHVibGljIHRvd2FyZCA6IGFueTtcbiAgICAvKirpnaLliY3nmoQ15Liq5qOA5rWL54K5ICovXG4gICAgcHVibGljIHRvd2FyZFBvcyA6IEFycmF5PGFueT47XG4gICAgLyoq5Lq655qE56e75Yqo55uu5qCH54K5ICovXG4gICAgcHVibGljIHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirlh7rnlJ/ngrkgKi9cbiAgICBwdWJsaWMgYm9ybk5vZGUgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirmmK/lkKbooqvlj6zllKQgKi9cbiAgICBwdWJsaWMgaXNHbyA6IG51bWJlcjtcbiAgICAvKirpgJLlvZLlgZzmraLlj5jph48gKi9cbiAgICBwcml2YXRlIHN0b3BEaSA6IG51bWJlcjtcbiAgICAvKirlj4LogIPpgJ/luqYgKi9cbiAgICBwcml2YXRlIHNwZWVkIDogbnVtYmVyO1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmlzT3V0ID0gaXNPdXQ7XG4gICAgICAgIHRoaXMudHlwZT10eXBlO1xuICAgICAgICB0aGlzLmluaXQodHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5Yid5aeL5YyWICovXG4gICAgcHJpdmF0ZSBpbml0KHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy/mlbDmja7liJ3lp4vljJZcbiAgICAgICAgdGhpcy5zZXREYXRhSW5pdCgpO1xuICAgICAgICAvL+WIm+W7ulxuICAgICAgICB0aGlzLmNyZWF0ZVBlb3BsZSh0eXBlKTtcbiAgICB9XG5cbiAgICAvKirmlbDmja7liJ3lp4vljJYgKi9cbiAgICBwcml2YXRlIHNldERhdGFJbml0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNwZWVkID0gQ291bnRyeURhdGEuaW5zXy5nZXRNb3ZlU3BlZWQoKTtcbiAgICAgICAgdGhpcy50b3dhcmQgPSB7XG4gICAgICAgICAgICB4OjEwMDAsXG4gICAgICAgICAgICB5OjAsXG4gICAgICAgICAgICBzcGVlZDp0aGlzLnNwZWVkLHJvdGF0aW9uOnVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRhcmdldFJvdGF0aW9uOnVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJvdGF0aW9uQ2hhbmdlIDogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRvd2FyZFBvcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnN0b3BEaSA9IDA7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuW8gOWni+ihjOWKqCAqL1xuICAgIHB1YmxpYyBvcGVuQmVoYXZpb3VyKCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/ov5DooYzkuobpgLvovpFcbiAgICAgICAgaWYodGhpcy5pc091dCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGVvcGxlX1Bvc091dCgpO1xuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMuY2hlY2tMaW1pdF9PdXQpO1xuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoT3V0Q291bnRyeURhdGEuaW5zXy5saW1pdFRpbWUqNjAsdGhpcyx0aGlzLmxpbWl0VGltZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBlb3BsZV9Qb3NJbm5lcigpO1xuICAgICAgICAgICAgTGF5YS50aW1lci5sb29wKDE2LHRoaXMsdGhpcy5wZW9wbGVfUG9zSW5uZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq55Sf5oiQ5Lq6ICovXG4gICAgcHJpdmF0ZSBjcmVhdGVQZW9wbGUodHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICAgdGhpcy5jcmVhdGVTcCh0eXBlKTtcbiAgICB9XG5cbiAgICAvKirliJvlu7pTcHJpdGUgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNwKHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGltZ1VybCA9IFwibWFwL1wiK3R5cGUrXCIucG5nXCI7XG4gICAgICAgIGlmKCF0aGlzLnNwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNwID0gbmV3IExheWEuU3ByaXRlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5zcCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcC5sb2FkSW1hZ2UoaW1nVXJsKTtcbiAgICAgICAgdGhpcy5zcC5zaXplKDEyLDEyKTtcbiAgICAgICAgdGhpcy5zcC5waXZvdCh0aGlzLnNwLndpZHRoLzIsdGhpcy5zcC5oZWlnaHQvMik7ICAgICAgICBcbiAgICB9XG5cbiAgICAvKirorr7nva7liJ3lp4vkvY3nva4gKi9cbiAgICBwdWJsaWMgc2V0UG9zKHgseSxzcDpMYXlhLlNwcml0ZSk6dm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcC54ID0geDtcbiAgICAgICAgdGhpcy5zcC55ID0geTtcbiAgICAgICAgdGhpcy5ib3JuTm9kZSA9IHNwO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKirlopnlpJbkurrooYzliqjpgLvovpEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHByaXZhdGUgcGVvcGxlX1Bvc091dCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy/nu5nkuojpmo/mnLrmlrnlkJHvvIzmlrnlkJHnlKgoLTF+MSnooajnpLpcbiAgICAgICAgaWYodGhpcy5zcC54PD05MDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnNwLng+PTExMDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCkqMi0xO1xuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCkqMi0xO1xuICAgICAgICB9XG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze077yM5Zyo5q2k5pe26Ze05YaF56e75YqoLOmaj+acuuaXtumXtOWcqCgyLDgp5Lit6YCJ5oupXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNisyO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jbG9zZU1vdmVUaW1lcik7XG4gICAgICAgIC8v5byA5ZCv56e75YqoXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgfVxuICAgIFxuICAgIC8qKuWNleS9jeW4p+enu+WKqCovXG4gICAgcHJpdmF0ZSBtb3ZlRGlzdGFuY2UoKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNwLngrPXRoaXMuZGlyWDtcbiAgICAgICAgdGhpcy5zcC55Kz10aGlzLmRpclk7XG4gICAgfVxuXG4gICAgLyoq5YWz6Zet56e75Yqo5a6a5pe25Zmo77yM5byA5ZCv5Y6f5Zyw5LyR5oGvKi9cbiAgICBwcml2YXRlIGNsb3NlTW92ZVRpbWVyKCk6dm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcbiAgICAgICAgLy/kvJHmga/ml7bpl7Tnu5PmnZ/lkI7nu6fnu63np7vliqhcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo2KzI7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLnBlb3BsZV9Qb3NPdXQpO1xuICAgIH1cbiAgICBcbiAgICAvKirmu57nlZnml7bpl7TvvIzoi6XotoXov4fml7bpl7TvvIzlsLHnprvlvIDlpJbln44gKi9cbiAgICBwcml2YXRlIGxpbWl0VGltZSgpOnZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XG4gICAgICAgIGlmKHRoaXMuc3AueDw9MTAwMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kaXJYPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLmRpclk9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMuY2hlY2tMaW1pdF9PdXQpO1xuICAgIH1cblxuICAgIFxuXG4gICAgLyoq56Kw5pKe5qOA5rWLICovXG4gICAgcHJpdmF0ZSBjaGVja0xpbWl0X091dCgpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v6L6555WM5qOA5rWLXG4gICAgICAgIGlmKHRoaXMuc3AueDwtNXx8dGhpcy5zcC54PjIwMDV8fHRoaXMuc3AueTwtNSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7XG4gICAgICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50LS07XG4gICAgICAgICAgICBpZihPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50PE91dENvdW50cnlEYXRhLmluc18ubWF4Q291bnQtMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjM7XG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMuY3JlYXRlUGVvcGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v5oqk5Z+O5rKz5qOA5rWLXG4gICAgICAgIGlmKHRoaXMuc3AueT49MzkwKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+mHjeaWsOe7meS4gOS4quS9jeenu1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5Z+O6Zeo5Yy65Z+f5qOA5rWLXG4gICAgICAgIGlmKHRoaXMuc3AueD45MzImJnRoaXMuc3AueDwxMDY4JiZ0aGlzLnNwLnk+MzUwJiZ0aGlzLnNwLnk8MzkwKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+WfjumXqOaYr+WQpuaJk+W8gFxuICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdG9yeVBlb3BsZSgpO1xuICAgICAgICAgICAgICAgIC8v5Z+O5aSW5Lq65Y+jLTFcbiAgICAgICAgICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50LS07XG4gICAgICAgICAgICAgICAgLy/lm73lrrbkurrlj6MrMVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18ucG9wdWxhdGlvbisrO1xuICAgICAgICAgICAgICAgIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQ8T3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSozO1xuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5aKZ5YaF5Lq66KGM5Yqo6YC76L6RKi9cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirlopnlhoXkurrooYzliqjpgLvovpEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXG4gICAge1xuXG4gICAgICAgIC8vIHRoaXMudG93ZWRUb01vdmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VHJhZ2V0KHRhcmdldDpMYXlhLlNwcml0ZSkgOiB2b2lkXG4gICAge1xuICAgICAgICAvLyB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXQ7XG4gICAgICAgIC8v5rWL6K+VXG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IHRhcmdldDtcbiAgICAgICAgLy8gdGhpcy50b3dhcmQueCA9IHRhcmdldC54O1xuICAgICAgICAvLyB0aGlzLnRvd2FyZC55ID0gdGFyZ2V0Lnk7XG4gICAgfVxuXG4gICAgLyoqdG93ZXJk6L2s5YyW5oiQ5L2N56e7ICovXG4gICAgcHJvdGVjdGVkIHRvd2VkVG9Nb3ZlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZighdGhpcy50b3dhcmQucm90YXRpb24pIHRoaXMudG93YXJkLnJvdGF0aW9uID0gVG9vbC5yb3RhdGVSb3BlUG9pbnRfMih0aGlzLnNwLngsdGhpcy5zcC55LHRoaXMudGFyZ2V0Tm9kZS54LHRoaXMudGFyZ2V0Tm9kZS55KTs7XG4gICAgICAgIHRoaXMucGVvcGxlVG93ZXJkKCk7Ly/orqnnm67moIfmnJ3lkJHorqHnrpfmlbBcbiAgICB9XG5cbiAgICAvKirmnJ3lkJEgIHRvd2VyZOenu+WKqCAqL1xuICAgIHByaXZhdGUgcG9zTW92ZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcC54ICs9IHRoaXMudG93YXJkLnNwZWVkKlRvb2wucm90YXRpb25TZXQodGhpcy50b3dhcmQucm90YXRpb24sXCJzaW5cIik7XG4gICAgICAgIHRoaXMuc3AueSArPSB0aGlzLnRvd2FyZC5zcGVlZCpUb29sLnJvdGF0aW9uU2V0KHRoaXMudG93YXJkLnJvdGF0aW9uLFwiY29zXCIpO1xuICAgICAgICB0aGlzLnNwLnJvdGF0aW9uID0gdGhpcy50b3dhcmQucm90YXRpb247XG4gICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMudGFyZ2V0Tm9kZSx0aGlzLnNwKSkge1xuICAgICAgICAgICAgaWYodGhpcy50YXJnZXROb2RlLm5hbWUgPT09IFwic3BfZG9vclwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ29PdXQodGhpcy50eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGVzdG9yeVBlb3BsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc3AueCA8IDAgfHwgdGhpcy5zcC55ID4gOTAwIHx8IHRoaXMuc3AueCA+IDIwMDApIHt0aGlzLmRlc3RvcnlQZW9wbGUoKTt9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3Aucm90YXRpb24pO1xuICAgIH1cbiAgICBcbiAgICAvKirkurrpnaLlkJEgKi9cbiAgICBwcm90ZWN0ZWQgcGVvcGxlVG93ZXJkKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmdldFRvd2VyZFBvcygpOy8v6I635b6X5LqU5Liq54K577yM5qC55o2u55uu5qCH5Z2Q5qCH6K6h566XXG4gICAgICAgIHRoaXMudGVzdFRvd2VyZCgpOy8v5qOA5rWL5piv5ZCm56ym5ZCI6KaB5rGCIOS4jeespuWQiCArIC0gNVxuICAgIH1cblxuICAgIC8qKuajgOa1i+ihjOi1sOaWueWQkSAqL1xuICAgIHByb3RlY3RlZCB0ZXN0VG93ZXJkKCkgOiBib29sZWFuXG4gICAge1xuICAgICAgICBsZXQgcG93ZXIgPSB0aGlzLnRlc3RDb2xpZGVyKCk7Ly8gLTEgMCAxIDIgMyA0IDVcbiAgICAgICAgaWYocG93ZXIgPiAwKVxuICAgICAgICB7Ly/mkp7liLDkuobpnIDopoHovazmlrnlkJFcbiAgICAgICAgICAgIHRoaXMudG93YXJkLnJvdGF0aW9uQ2hhbmdlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDdHIocG93ZXIpO1xuICAgICAgICAgICAgdGhpcy5qdWRnZUxlZnRSaWdodCgpOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnBvc01vdmUoKTsvL+enu+WKqFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmluZFRhcmdldCgpO1xuICAgICAgICB0aGlzLnRvd2FyZC5zcGVlZCA9IHRoaXMuc3BlZWQ7ICAgICAgXG4gICAgICAgIHRoaXMucG9zTW92ZSgpOy8v56e75YqoICBcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoq6YCf5bqm5o6n5Yi2ICovXG4gICAgcHJpdmF0ZSBzcGVlZEN0cihwb3dlcikgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnRvd2FyZC5zcGVlZCA9IHRoaXMuc3BlZWQqKChwb3dlcisxKS8odGhpcy50b3dhcmRQb3MubGVuZ3RoKzIpKTsgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3BlZWQgOjpcIiArIHRoaXMudG93YXJkLnNwZWVkKTtcbiAgICB9XG5cbiAgICAvKirliKTmlq3mlrnlkJEgKi9cbiAgICBwcm90ZWN0ZWQganVkZ2VMZWZ0UmlnaHQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3RvcERpKys7XG4gICAgICAgIGlmKHRoaXMuc3RvcERpPjM2KSB7dGhpcy5zdG9wRGkgPSAwO3JldHVybjt9XG4gICAgICAgIHRoaXMudG93YXJkLnJvdGF0aW9uQ2hhbmdlICs9IEdhbWVDb25maWcuVEVTVF9QT0lOVF9STztcbiAgICAgICAgbGV0IHJvMSA9IHRoaXMudG93YXJkLnJvdGF0aW9uIC0gdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2U7XG4gICAgICAgIGxldCBybzIgPSB0aGlzLnRvd2FyZC5yb3RhdGlvbiArIHRoaXMudG93YXJkLnJvdGF0aW9uQ2hhbmdlO1xuICAgICAgICB0aGlzLmdldFRvd2VyZFBvcyhybzEpO1xuICAgICAgICBsZXQgbnVtUm8xID0gdGhpcy50ZXN0Q29saWRlcigpO1xuICAgICAgICB0aGlzLmdldFRvd2VyZFBvcyhybzIpO1xuICAgICAgICBsZXQgbnVtUm8yID0gdGhpcy50ZXN0Q29saWRlcigpO1xuICAgICAgICBpZihudW1SbzEgPT0gLTEpIHt0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvMTsgcmV0dXJuO31cbiAgICAgICAgaWYobnVtUm8yID09IC0xKSB7dGhpcy50b3dhcmQucm90YXRpb24gPSBybzI7IHJldHVybjt9XG4gICAgICAgIHRoaXMuanVkZ2VMZWZ0UmlnaHQoKTtcbiAgICB9XG5cbiAgICAvKipmaW5kVGFyZ2V05a+75om+55uu5qCHICovXG4gICAgcHJpdmF0ZSBmaW5kVGFyZ2V0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgQ2EgPSB0aGlzLnRvd2FyZC5yb3RhdGlvbiAtIHRoaXMudG93YXJkLnRhcmdldFJvdGF0aW9uO1xuICAgICAgICBpZihDYSA+IDApIHRoaXMudG93YXJkLnJvdGF0aW9uIC09IDU7XG4gICAgICAgICAgICBlbHNlIGlmKCBDYSA8IDAgKSB0aGlzLnRvd2FyZC5yb3RhdGlvbiArPTU7XG4gICAgICAgIGlmKCBNYXRoLmFicyhDYSkgPCA1KSB0aGlzLnRvd2FyZC5yb3RhdGlvbiArPSBDYTtcbiAgICB9ICAgXG5cbiAgICAvKirmo4DmtYvmmK/lkKbnorDmkp4g5pKe5Yiw5LqG6L+U5ZuedHVyZSAtMeWPr+S7pei1sCAw5Lul5LiK6KGo56S656Kw5pKe5Yiw5ZOq5Liq54K5Ki9cbiAgICBwcm90ZWN0ZWQgdGVzdENvbGlkZXIoKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IG51bSA9IC0xO1xuICAgICAgICBsZXQgYXJlYSA6IEFycmF5PExheWEuU3ByaXRlPj0gRGF0YU1hbmFnZXIuaW5zXy5hcnJfUmlnaHRBcmVhO1xuICAgICAgICBpZih0aGlzLnNwLng8OTgxKSBhcmVhID0gRGF0YU1hbmFnZXIuaW5zXy5hcnJfTGVmdEFyZWE7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJlYS5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihUb29sLmJsb2NrVGVzdCh0aGlzLmJvcm5Ob2RlLHRoaXMuc3ApKSB7cmV0dXJuIC0xO31cbiAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KGFyZWFbaV0sdGhpcy5zcCkpe3JldHVybiAwO30vL+WmguaenOW3sue7j+aSnuS4iuS6huOAgiAgICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaCA9IDA7aDx0aGlzLnRvd2FyZFBvcy5sZW5ndGg7aCsrKVxuICAgICAgICAgICAgey8v5LqU5Liq54K55qOA5rWLXG4gICAgICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QodGhpcy50YXJnZXROb2RlLHRoaXMudG93YXJkUG9zW2hdKSl7cmV0dXJuLTE7fVxuICAgICAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KGFyZWFbaV0sdGhpcy50b3dhcmRQb3NbaF0pKVxuICAgICAgICAgICAgICAgIHsvL+emu+S6uuacgOi/keeahOeCuVxuICAgICAgICAgICAgICAgICAgICBudW0gPSBoKzE7Ly8x77yMMu+8jDPvvIw077yMNVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtO1xuICAgIH1cblxuICAgIC8qKuS6uumdouWQkeeahOS6lOS4quajgOa1i+eCuSAqL1xuICAgIHByb3RlY3RlZCBnZXRUb3dlcmRQb3Mocm90YXRpb25UZXN0PykgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgcm90YXRpb24gPSB0aGlzLnRvd2FyZC5yb3RhdGlvbjsvL+S9v+eUqOW9k+WJjemdouWQkVxuICAgICAgICBpZihyb3RhdGlvblRlc3QpIHJvdGF0aW9uID0gcm90YXRpb25UZXN0O1xuICAgICAgICBlbHNlIHRoaXMua2VlcFRvd2VyZERhdGEoKTsvL+S/neWtmCDnjrDlnKjkuLrmraLliLDnm67moIfngrnnmoTop5LluqZcbiAgICAgICAgaWYocm90YXRpb24gPT09IHVuZGVmaW5lZCkgXG4gICAgICAgIHsvL+WmguaenOinkuW6puaYr3VuZGVmXG4gICAgICAgICAgICByb3RhdGlvbiA9IHRoaXMudG93YXJkLnRhcmdldFJvdGF0aW9uLy/nm67moIfop5LluqbvvIzliJ3lp4vop5LluqYgICBcbiAgICAgICAgICAgIHRoaXMudG93YXJkLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIH1cblxuICAgICAgICAvL+S9jeenu+mcgOimgeeahOWPmOmHj1xuICAgICAgICBsZXQgY29zIDogbnVtYmVyID0gVG9vbC5yb3RhdGlvblNldChyb3RhdGlvbixcImNvc1wiKTtcbiAgICAgICAgbGV0IHNpbiA6IG51bWJlciA9IFRvb2wucm90YXRpb25TZXQocm90YXRpb24sXCJzaW5cIik7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS14OjpcIiArIHRoaXMuc3AueCArIFwieTo6XCIgKyB0aGlzLnNwLnkpO1xuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVDb25maWcuVEVTVF9QT0lOVF9DT1VOVDtpKyspLy/orrDlvZXkupTkuKpcbiAgICAgICAgeyBcbiAgICAgICAgICAgIGlmKCF0aGlzLnRvd2FyZFBvc1tpXSkgdGhpcy50b3dhcmRQb3NbaV0gPSB7fTsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50b3dhcmRQb3NbaV0ueCA9IHRoaXMuc3AueCArIEdhbWVDb25maWcuVEVTVF9QT0lOVF9ESUMqc2luKihpKzEpO1xuICAgICAgICAgICAgdGhpcy50b3dhcmRQb3NbaV0ueSA9IHRoaXMuc3AueSArIEdhbWVDb25maWcuVEVTVF9QT0lOVF9ESUMqY29zKihpKzEpOyBcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRvd2FyZFBvcyk7XG4gICAgfVxuXG4gICAgLyoq5L+d5a2YIHRvd2Vy5L+h5oGvICovXG4gICAgcHJvdGVjdGVkIGtlZXBUb3dlcmREYXRhKCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+WtmOWCqOeOsOWcqOeCueWIsOebruagh+inkuW6plxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb24gPSBUb29sLnJvdGF0ZVJvcGVQb2ludF8yKHRoaXMuc3AueCx0aGlzLnNwLnksdGhpcy50YXJnZXROb2RlLngsdGhpcy50YXJnZXROb2RlLnkpO1xuICAgIH1cblxuICAgIC8qKuWcqOi/kOihjOenu+WKqOmAu+i+keS5i+WJjSDnmoTnibnmrormk43kvZwgKi9cbiAgICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8qKipcbiAgICAgKiDov5vnqIsgLyDlh7rln47pgLvovpEgXG4gICAgICogQHR5cGUgdHJ1Zei/m+WfjiAgZmFsc2Xlh7rln45cbiAgICAqL1xuICAgIHB1YmxpYyBwZW9wbGVHbyh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgICAgICBpZih0eXBlKSB7XG4gICAgICAgICAgICAgICAgLy/ov5vln47mlrnms5VcbiAgICAgICAgICAgICAgICB0aGlzLm91dFBlb3BsZV9Ub0Rvb3IoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8v5Ye65Z+O5pa55rOVXG4gICAgICAgICAgICAgICAgdGhpcy5wZW9wbGVPdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirln47lpJblvLrliLbov5vpl6ggKi9cbiAgICBwcml2YXRlIG91dFBlb3BsZV9Ub0Rvb3IoKTp2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICBsZXQgZGlyWD0xMDAwLXRoaXMuc3AueDtcbiAgICAgICAgbGV0IGRpclk9NDEwLXRoaXMuc3AueTtcbiAgICAgICAgbGV0IGRpcz1NYXRoLnNxcnQoTWF0aC5wb3coMTAwMC10aGlzLnNwLngsMikrTWF0aC5wb3coNDEwLXRoaXMuc3AueSwyKSk7XG4gICAgICAgIHRoaXMuZGlyWD1kaXJYL2RpcztcbiAgICAgICAgdGhpcy5kaXJZPWRpclkvZGlzO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XG4gICAgfVxuXG4gICAgLyoq6Zeo5by65Yi25Ye65Z+O5aSWICovXG4gICAgcHJpdmF0ZSBkb29yUGVvcGxlX1RvT3V0KCk6dm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcbiAgICAgICAgbGV0IHg9TWF0aC5yYW5kb20oKSoxMzYrOTMyO1xuICAgICAgICBsZXQgeT0zNTA7XG4gICAgICAgIHRoaXMuc2V0UG9zKHgseSx0aGlzLnNwKTtcbiAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCkqMi0xO1xuICAgICAgICB0aGlzLmRpclk9LU1hdGgucmFuZG9tKCkqMC43LTAuMjtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMuY2hlY2tMaW1pdF9PdXQpO1xuICAgIH1cblxuICAgLyoq5Ye65Z+O6YC76L6RICovXG4gICBwcm90ZWN0ZWQgcGVvcGxlT3V0KCkgOiB2b2lkXG4gICB7XG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcInNwX2Rvb3JcIikgYXMgTGF5YS5TcHJpdGUpOy8v6K6+572u55uu5qCH5piv6ZeoXG4gICB9XG5cbiAgIC8qKui/m+WfjuaWueazlSDku47mraPpl6jliLDmn5DkuIDkuKrkvY/lroUqL1xuICAgcHJvdGVjdGVkIHBlb3BsZUludG8oKSA6IHZvaWRcbiAgIHtcbiAgICAgICAgbGV0IGJvcm5Ob2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwic3BfZG9vclwiKSBhcyBMYXlhLlNwcml0ZTtcbiAgICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xuICAgICAgICB0aGlzLnNldFBvcyhib3JuTm9kZS54LGJvcm5Ob2RlLnkgKyA0MCxib3JuTm9kZSk7XG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xuICAgfVxuXG4gICAvKirku45ob3VzZeS4reiOt+WPliDkuIDkuKrpmo/mnLrnmoTngrkgKi9cbiAgIHByb3RlY3RlZCBnZXRUYXJnZVBvcyhob3VzZU5vZGUpIDogTGF5YS5TcHJpdGVcbiAgIHtcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoKChob3VzZU5vZGUgYXMgTGF5YS5TcHJpdGUpLl9jaGlsZHJlbi5sZW5ndGgtMSkqcmFuZG9tKTtcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgOkxheWEuU3ByaXRlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiAtLS0tLS0tLS0gZ2V0VGFyZ2V0IFwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbmRleCA6OlwiICsgaW5kZXgpO1xuICAgICAgICBpZihpbmRleCA+PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXROb2RlID0gaG91c2VOb2RlLmdldENoaWxkQnlOYW1lKFwiaG91c2VfXCIraW5kZXgpO1xuICAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCLpmo/mnLrmlbDlj5bplJlcIik7XG4gICAgICAgIC8vIHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcbiAgIH1cblxuICAgIC8qKuS6uua2iOWksSAqL1xuICAgIHByb3RlY3RlZCBkZXN0b3J5UGVvcGxlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLlBvb2wucmVjb3Zlcih0aGlzLnR5cGUsdGhpcyk7ICAgICAgICBcbiAgICAgICAgdGhpcy5zcC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIExheWEuUG9vbC5yZWNvdmVyKHRoaXMudHlwZSx0aGlzKTtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcbiAgICAgICAgLy9cbiAgICAgICAgaWYoIXRoaXMuaXNPdXQpIHRoaXMuZGVzdG9yeUlubmVyKCk7XG4gICAgfVxuXG4gICAgLyoq5aKZ5YaF5Lq65Yig6ZmkIOeJueauiuWkhOeQhiAqL1xuICAgIHByb3RlY3RlZCBkZXN0b3J5SW5uZXIoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v6K6h5pe25Zmo5riF5qWaXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLnBlb3BsZV9Qb3NJbm5lcik7XG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5DT01NT05fTUFOOlxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVswXT4wKVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVswXS0tO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5CQU5ESVRfTUFOOlxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVszXT4wKVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVszXS0tO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5ST0JCRVJfTUFOOlxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVs0XT4wKVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVs0XS0tO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOOlxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVsxXT4wKVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVsxXS0tO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TVEFSX01BTjpcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMl0+MClcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMl0tLTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlKTtcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbmRpdCBleHRlbmRzIFBlb3BsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirmiqLliqvnmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3V0TW9uZXlUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze06L+b6KGM5YG355uXKDUtOCnliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjUrMztcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzlgbfnm5dcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5DdXRNb25leSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgLy/ml7bpl7TlkI7miqLliqtcclxuICAgIHByaXZhdGUgQ3V0TW9uZXkoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJhbmRvbT1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGlmKHJhbmRvbTwwLjUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+aKouWKq+aIkOWKn1xyXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLm1vbmV5PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCsxMCk7XHJcbiAgICAgICAgICAgIHRoaXMubG93U3VwcG9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtOi/m+ihjOWBt+eblyg1LTgp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo1KzM7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5YG355uXXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuQ3V0TW9uZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumZjeS9juW5uOemj+W6piAqL1xyXG4gICAgcHJpdmF0ZSBsb3dTdXBwb3J0KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIENvdW50cnlEYXRhLmluc18ucG9wdWxhclN1cHBvcnQtPTAuMTtcclxuICAgIH1cclxuXHJcbiAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgfVxyXG5cclxuICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XHJcbiAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XG5pbXBvcnQgVG9vbCBmcm9tIFwiLi4vLi4vVG9vbC9Ub29sXCI7XG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi8uLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24gZXh0ZW5kcyBQZW9wbGV7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTsgICAgICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5aKZ5YaF6YC76L6RICovXG4gICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xuICAgICAgICB0aGlzLnRvd2VkVG9Nb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXG4gICAgcHJvdGVjdGVkIHNwZWNpYWxEbygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy/ojrflj5bljaDmr5TmlbDnu4RcbiAgICAgICAgbGV0IGFycl9wZXJjZW50ID0gVG9vbC5nZXRQZXJjZW50QXJlYShDb3VudHJ5RGF0YS5pbnNfLmFycl9wZXJzb25QZXJjZW50TmFtZSk7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyX3BlcmNlbnQubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIWFycl9wZXJjZW50W2krMV0pIGJyZWFrO1xuICAgICAgICAgICAgaWYoYXJyX3BlcmNlbnRbaV0gPCByYW5kb20gJiYgcmFuZG9tIDw9IGFycl9wZXJjZW50W2krMV0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpIHtjb25zb2xlLmxvZyhcIuamgueOh+iuoeeul+WHuumUmVwiKTtyZXR1cm47fVxuICAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XG4gICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XG4gICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xuICAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoKGluZGV4KVxuICAgICAgICB7ICAgIC8qKjAt5Yy755SfIDEt6K2m5a+fIDIt5ZWG5Lq6IC0z5ri45omL5aW96ZeyIC005Yac5rCRKi9cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcImhvc3BpdGFsXCIpIGFzIExheWEuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTsgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZU91dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwiZmFybVwiKSBhcyBMYXlhLlNwcml0ZSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9iYmVyIGV4dGVuZHMgUGVvcGxle1xyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlgbflj5botKLmlL/nmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3V0TW9uZXlUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze06L+b6KGM5YG355uXKDMtNinliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjMrMztcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzlgbfnm5dcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5DdXRNb25leSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ml7bpl7TlkI7lgbflj5ZcclxuICAgIHByaXZhdGUgQ3V0TW9uZXkoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJhbmRvbT1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGlmKHJhbmRvbTwwLjUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+WBt+ebl+aIkOWKn1xyXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLm1vbmV5LT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xyXG4gICAgICAgICAgICB0aGlzLmxvd1N1cHBvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7Tov5vooYzlgbfnm5coMy02KeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMyszO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOWBt+ebl1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLkN1dE1vbmV5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpmY3kvY7lubjnpo/luqYgKi9cclxuICAgIHByaXZhdGUgbG93U3VwcG9ydCgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXJTdXBwb3J0LT0wLjA1O1xyXG4gICAgfVxyXG4gICAgLyoq5aKZ5YaFICovXHJcbiAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgfVxyXG5cclxuICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XHJcbiAgIH1cclxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5pbXBvcnQgVG9vbCBmcm9tIFwiLi4vLi4vVG9vbC9Ub29sXCI7XHJcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NpZW50aXN0IGV4dGVuZHMgUGVvcGxle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xyXG4gICAgICAgIHN1cGVyKHZpZXcsdHlwZSxpc091dCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKuS6p+eUn+enkeaKgOeahOaWueW8jyzlhYjnu5nkuojml7bpl7QgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVUZWNobm9sb2d5VGltZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtCgxLTMp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSoyKzE7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5Lqn55Sf56eR5oqA5YC8XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuY3JlYXRlVGVjaG5vbG9neSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Lqn55Sf56eR5oqA5YC8ICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVRlY2hub2xvZ3koKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgQ291bnRyeURhdGEuaW5zXy50ZWNobm9sb2d5Kz0wLjU7XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7QoMS0zKeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMisxO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOS6p+eUn+enkeaKgOWAvFxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLmNyZWF0ZVRlY2hub2xvZ3kpO1xyXG4gICAgfVxyXG4gICAgLyoq5aKZ5YaF6YC76L6RICovXHJcbiAgICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirph43lhplzcGVjaWFsZG8gKi9cclxuICAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRlY2hub2xvZ3lcIikgYXMgTGF5YS5TcHJpdGUpOyAgICAgICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcbmltcG9ydCBUb29sIGZyb20gXCIuLi8uLi9Ub29sL1Rvb2xcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyIGV4dGVuZHMgUGVvcGxle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xyXG4gICAgICAgIHN1cGVyKHZpZXcsdHlwZSxpc091dCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuaYjuaYn+aViOW6lOeahOaWueW8jyzlhYjnu5nkuojml7bpl7QgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVTdGFyVGltZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtCgxLTMp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSoyKzE7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5Lqn55Sf5pWI5bqU5YC8XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuY3JlYXRlU3RhclZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirkuqfnlJ/mlYjlupTlgLwg5pWI5bqU5YC85Li65bm456aP5bqmKi9cclxuICAgIHByaXZhdGUgY3JlYXRlU3RhclZhbHVlKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIENvdW50cnlEYXRhLmluc18ucG9wdWxhclN1cHBvcnQrPTAuNTtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtCgxLTMp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSoyKzE7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5Lqn55Sf56eR5oqA5YC8XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuY3JlYXRlU3RhclZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgfVxyXG5cclxuICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTtcclxuICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VudGVyIGV4dGVuZHMgTGF5YS5TY3JpcHR7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIGxldCBzY3JlZW5XaWR0aCA9IDkwMC8oTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodC9MYXlhLkJyb3dzZXIuY2xpZW50V2lkdGgpOy8v5bGP5bmV6auY5bqmXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiArIHRoaXMuc2NyZWVuV2lkdGgpO1xuICAgICAgICBpZihzY3JlZW5XaWR0aCA8IDgwMCkgKHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lTmFtZVwiKSBhcyBMYXlhLkxhYmVsKS5mb250U2l6ZSA9IDEyNTtcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5TcHJpdGUpLnggPSAoc2NyZWVuV2lkdGgtIDY2NykvMjsgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IFdvcmxkRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1dvcmxkRXZlbnRNYW5hZ2VyXCI7XG5pbXBvcnQgeyB1aSB9IGZyb20gXCIuLi8uLi91aS9sYXlhTWF4VUlcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9VSU1hbmFnZXJcIjtcbmltcG9ydCBQZW9wbGVNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1Blb3BsZU1hbmFnZXJcIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi8uLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi4vLi4vQ29yZS9Nc2dEaWFsb2dcIjtcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IEJ1eURpYWxvZyBmcm9tIFwiLi4vLi4vQ29yZS9CdXlEaWFsb2dcIjtcbmltcG9ydCBQZW9wbGUgZnJvbSBcIi4uLy4uL1BlcmZlYi9QZW9wbGVcIjtcblxuLyoqXG4gKiDkuJbnlYznrqHnkIblmajohJrmnKxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdvcmxkIGV4dGVuZHMgdWkuR2FtZVdvcmxkVUl7XG4gICAgLyoqRGF0YU1hbmFnZXIgIOWNleS+iyAqL1xuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xuICAgIHByaXZhdGUgd29ybGRFdmVudE1hbmFnZXIgOiBXb3JsZEV2ZW50TWFuYWdlcjtcbiAgICAvKirkurrnsbvnrqHnkIblmagqL1xuICAgIHByaXZhdGUgcGVvcGxlTWFuYWdlciA6IFBlb3BsZU1hbmFnZXI7XG4gICAgLyoqVUnnrqHnkIblmaggKi9cbiAgICBwcml2YXRlIHVpTWFuYWdlciA6IFVJTWFuYWdlcjtcbiAgICAvKirmtojmga/pgJrnlKjmoYYgKi9cbiAgICBwcml2YXRlIG1zZ0RpYWxvZyA6IE1zZ0RpYWxvZztcbiAgICAvKirotK3kubDmoYYgKi9cbiAgICBwcml2YXRlIGJ1eURpYWxvZzpCdXlEaWFsb2c7XG4gICAgXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoq5bGP5bmV5a695bqmICovXG4gICAgcHJpdmF0ZSBzY3JlZW5XaWR0aCA6IG51bWJlcjtcbiAgICAvKirpvKDmoIfmmK/lkKbmjInkuIsgKi9cbiAgICBwcml2YXRlIGlzRG93biA6IGJvb2xlYW47XG4gICAgLyoq6byg5qCH54K56K6w5b2VICovXG4gICAgcHJpdmF0ZSBtb3VzZVBvcyA6IGFueTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqMm1pbuiuoeaXtiAqL1xuICAgIHByaXZhdGUgdGltZXJDb3VudCA6IG51bWJlcjtcbiAgICAvKirlh7rpl7TpmpTorqHml7YgKi9cbiAgICBwcml2YXRlIHRpbWVyQ291bnRfb3V0IDogbnVtYmVyO1xuICAgIC8qKui/myAqL1xuICAgIHByaXZhdGUgdGltZXJDb3VudF9pbiA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5nYW1lRGF0YUluaXQoKTsvL+a4uOaIj+WPmOmHj+WIneWni+WMllxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7Ly/nu5nmoaXmt7vliqDkuovku7YgXG4gICAgICAgIHRoaXMuc2NyZWVuU2V0dGluZygpOy8v5bGP5bmV5bGF5LitXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0KCk7Ly/muLjmiI/mtYHnqIvlvIDlp4tcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zXy5zZXRBcmVhKHRoaXMuc3Bfc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKSk7XG4gICAgfVxuXG4gICAgLyoq5pWw5o2u5Yid5aeL5YyWICovXG4gICAgcHJpdmF0ZSBnYW1lRGF0YUluaXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMud29ybGRFdmVudE1hbmFnZXIgPSBuZXcgV29ybGRFdmVudE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyID0gbmV3IFBlb3BsZU1hbmFnZXIodGhpcy5zcF9zY2VuZSk7XG4gICAgICAgIHRoaXMudWlNYW5hZ2VyID0gbmV3IFVJTWFuYWdlcih0aGlzLnNwX1VJKTtcbiAgICAgICAgdGhpcy5tc2dEaWFsb2cgPSBuZXcgTXNnRGlhbG9nKCk7ICAgICAgXG4gICAgICAgIHRoaXMuYnV5RGlhbG9nPW5ldyBCdXlEaWFsb2coKTtcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IHt9O1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0ID0gMDtcbiAgICAgICAgdGhpcy50aW1lckNvdW50X2luID0gMDtcbiAgICB9XG5cbiAgICAvKirmt7vliqDkuovku7YgKi9cbiAgICBwcml2YXRlIGFkZEV2ZW50KCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvLyB0aGlzLnN0YWdlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyxmdW5jdGlvbihlKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAvLyB9KVxuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTix0aGlzLHRoaXMubW91c2VEb3duKTtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX1VQLHRoaXMsdGhpcy5tb3VzZVVwKTtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX01PVkUsdGhpcyx0aGlzLm1vdXNlTW92ZSk7XG4gICAgICAgIC8v57uZ6Zeo5biu54K554K55Ye75LqLICAgXG4gICAgICAgIHRoaXMuc3BfZG9vci5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5kb29yQ3RyKTtcbiAgICAgICAgLy/ljLvppobkuovku7bnu5HlrppcbiAgICAgICAgdGhpcy5ob3NwaXRhbC5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5IT1NQSVRBTF0pO1xuICAgICAgICAvL+WGm+mYn+S6i+S7tue7keWumlxuICAgICAgICB0aGlzLmFybXkub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuQVJNWV0pO1xuICAgICAgICAvL+eyruS7k+S6i+S7tue7keWumlxuICAgICAgICB0aGlzLmZhcm0ub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRkFSTV0pOyAgICAgICAgXG4gICAgICAgIC8v56eR5oqA6aaG5LqL5Lu257uR5a6aXG4gICAgICAgIHRoaXMudGVjaG5vbG9neS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5URUNITk9MT0dZXSk7ICAgICAgICBcbiAgICAgICAgLy/mlrDpl7vngrnkuovku7bnu5HlrppcbiAgICAgICAgLy90aGlzLmV2ZW50SG91c2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRVZFTlRfSE9VU0VdKTsgICAgIFxuICAgICAgICAvL+aWsOmXu+eah+Wuq+e7keWumlxuICAgICAgICB0aGlzLnBhbGFjZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5QQUxBQ0VdKTtcbiAgICB9XG5cbiAgICAvKirlsY/luZUg5bGA5LitKi9cbiAgICBwcml2YXRlIHNjcmVlblNldHRpbmcoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIgKyB0aGlzLnNjcmVlbldpZHRoKTtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS54ID0gLSgyMDAwLXRoaXMuc2NyZWVuV2lkdGgpLzI7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v5LqL5Lu25Zue6LCDXG5cbiAgICAvKirpl6jnmoTlvIDlhbMgKi9cbiAgICBwcml2YXRlIGRvb3JDdHIoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbilcbiAgICAgICAgey8v5byA6ZeoXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZG9vckNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7Ly/lhbPpl6hcbiAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRvb3JPcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirlhbPpl6ggKi9cbiAgICBwcml2YXRlIGRvb3JDbG9zZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5hbmkxLnBsYXkoMCxmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoq5byA6ZeoICovXG4gICAgcHJpdmF0ZSBkb29yT3BlbigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5hbmkyLnBsYXkoMCxmYWxzZSk7XG5cbiAgICB9XG5cbiAgICAvKirnp7vliqggKi9cbiAgICBwcml2YXRlIG1vdXNlTW92ZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoIXRoaXMuaXNEb3duKSByZXR1cm47XG4gICAgICAgIGlmKHRoaXMubW91c2VQb3MueClcbiAgICAgICAge1xuICAgICAgICAgICB0aGlzLnNwX3NjZW5lLnggKz0gTGF5YS5zdGFnZS5tb3VzZVggLSB0aGlzLm1vdXNlUG9zLng7IFxuICAgICAgICAvLyAgICB0aGlzLnNwX3NjZW5lLnkgKz0gTGF5YS5zdGFnZS5tb3VzZVkgLSB0aGlzLm1vdXNlUG9zLng7XG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPiAwKSAgdGhpcy5zcF9zY2VuZS54ID0gMDtcbiAgICAgICAgICAgIGlmKHRoaXMuc3Bfc2NlbmUueCA8IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKSkgdGhpcy5zcF9zY2VuZS54ID0gIC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSBMYXlhLnN0YWdlLm1vdXNlWDtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy55ID0gTGF5YS5zdGFnZS5tb3VzZVk7XG4gICAgfVxuXG4gICAgLyoq5ouW5Yqo5oyJ5LiLICovXG4gICAgcHJpdmF0ZSBtb3VzZURvd24oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKirmi5bliqjmiqzotbcgKi9cbiAgICBwcml2YXRlIG1vdXNlVXAoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7IFxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IHVuZGVmaW5lZDsgICAgICAgXG4gICAgfVxuXG5cbiAgICAvKirngrnlh7sg6I635Y+W5bu6562R5L+h5oGvICovXG4gICAgcHJpdmF0ZSBvbkhvdXNlSW5mbyh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubXNnRGlhbG9nLnNob3dNc2codHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5pu05pawVUnmoI/kupTlpKfkuLvlgLzkv6Hmga8gKi9cbiAgICBwcml2YXRlIHVwZGF0ZVVJTWFpbkRhdGEoKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnRleHRfY291bnRfcG9wdWxhdGlvbi50ZXh0PUNvdW50cnlEYXRhLmluc18ucG9wdWxhdGlvbi50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnRleHRfY291bnRfcG9wdWxhclN1cHBvcnQudGV4dD1Db3VudHJ5RGF0YS5pbnNfLnBvcHVsYXJTdXBwb3J0LnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudGV4dF9jb3VudF9tb25leS50ZXh0PUNvdW50cnlEYXRhLmluc18ubW9uZXkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy50ZXh0X2NvdW50X3RlY2hub2xvZ3kudGV4dD1Db3VudHJ5RGF0YS5pbnNfLnRlY2hub2xvZ3kudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy50ZXh0X2NvdW50X3ByZXN0aWdlLnRleHQ9Q291bnRyeURhdGEuaW5zXy5wcmVzdGlnZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0t56iA5pyJ6ZeoXG4gICAgLyoq6LSt5Lmw56iA5pyJ6ZeoICovXG4gICAgcHVibGljIGJ1eVJhcmVEb29yKCk6dm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuICAgIC8vLy8vLy8vLy8vL+a4uOaIj+a1geeoi+W8gOWniy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLyoq5ri45oiP5rWB56iL5byA5aeLICovXG4gICAgcHJpdmF0ZSBnYW1lU3RhcnQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudXBkYXRlVUlNYWluRGF0YSgpO1xuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIuY3JlYXRlUGVvcGxlKCk7Ly/kurrlj6PnlJ/miJDpgLvovpHov5DooYxcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLmNyZWF0ZVBlb3BsZV9Jbm5lcigpOy8v5YaF5Lq65Y+j55Sf5oiQXG4gICAgICAgIC8vdGhpcy5vcGVuVGltZXIoKTtcbiAgICB9XG5cblxuICAgIC8qKuW8gOWQr+WumuaXtuWZqCAqL1xuICAgIHByaXZhdGUgb3BlblRpbWVyKCk6dm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoR2FtZUNvbmZpZy5USU1FX01BSU5EQVRBLHRoaXMsQ291bnRyeURhdGEuaW5zXy5jYWxfTW9uZXkpO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcChHYW1lQ29uZmlnLlRJTUVfTUFJTkRBVEEsdGhpcyxDb3VudHJ5RGF0YS5pbnNfLmluZmx1ZW5jZV9HcmFpbik7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKEdhbWVDb25maWcuVElNRV9NQUlOREFUQSx0aGlzLENvdW50cnlEYXRhLmluc18uaW5mbHVlbmNlX1BvcHVsYXJTdXBwb3J0KTtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMudXBkYXRlVUlNYWluRGF0YSk7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/kurrlj6PmtYHliqjpgJrnn6XlmahcbiAgICAvKipcbiAgICAgKiDmtYHliqjmr5TkvovvvIwg6YCa55+l5ZmoXG4gICAgICogXG4gICAgICogICovXG4gICAgcHJpdmF0ZSBjdXJyZW50UmF0aW8oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudGltZXJDb3VudCsrO1xuICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0Kys7XG4gICAgICAgIHRoaXMudGltZXJDb3VudF9pbisrO1xuICAgICAgICBsZXQgY291bnRyeURhdGEgPSBDb3VudHJ5RGF0YS5pbnNfO1xuICAgICAgICBsZXQgQkkgPSBjb3VudHJ5RGF0YS5wZXJjZW50OyAgIC8v6L+bL+WHulxuICAgICAgICBsZXQgb3V0ZXJUYXJnZXQgPSBjb3VudHJ5RGF0YS5leGl0UGVvcGxlOy8v5Ye66Zeo55uu5qCH5pWwXG4gICAgICAgIGxldCBpbm5lclRhZ2V0ID0gY291bnRyeURhdGEuZW50ZXJQZW9wbGU7Ly/ov5vpl6jnm67moIfmlbBcbiAgICAgICAgbGV0IF9vdXRlciA9IGNvdW50cnlEYXRhLl9vdXRlclBlb3BsZTsvL+WHuuWfjuWPo+WunumZheWAvFxuICAgICAgICBsZXQgX2lubmVyID0gY291bnRyeURhdGEuX2lubmVyUGVvcGxlOy8v5YWl5Z+O5a6e6ZmF5YC8XG4gICAgICAgIGxldCBsYXN0VGltZSA9IDEyMDAwMCAtIHRoaXMudGltZXJDb3VudCAtIDUwMDAwOy8v6I635Y+W5Ymp5L2Z5pe26Ze077yM5aSa6aKE5pSvMTDnp5JcbiAgICAgICAgaWYob3V0ZXJUYXJnZXQgPiBfb3V0ZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6YCa55+lXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVyQ291bnRfb3V0ID49IGxhc3RUaW1lLyhvdXRlclRhcmdldCAtIF9vdXRlcikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEucGVvcGxlR29PdXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXJDb3VudF9vdXQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGlubmVyVGFnZXQgPiBfaW5uZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6YCa55+lICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy50aW1lckNvdW50X2luID49IGxhc3RUaW1lLyhvdXRlclRhcmdldCAtIF9pbm5lcikpICBcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy50aW1lckNvdW50ID4gMTIwMDAwKVxuICAgICAgICB7ICAgXG4gICAgICAgICAgICB0aGlzLnRpbWVyQ291bnRfaW4gPSAwO1xuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50X291dCA9IDA7XG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5fb3V0ZXJQZW9wbGUgPSAwOy8v5a6e6ZmF5YC85b2S6Zu2XG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5faW5uZXJQZW9wbGUgPSAwOy8v5a6e6ZmF5YC85b2S6Zu2XG4gICAgICAgICAgICB0aGlzLnRpbWVyQ291bnQgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8b3V0ZXJUYXJnZXQtX291dGVyO2krKykvL+mAmuefpeWHuuWfjlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KGZhbHNlKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7aTxpbm5lclRhZ2V0LV9pbm5lcjtpKyspLy/pgJrnn6Xov5vnqItcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dCh0cnVlKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuR2FtZSBleHRlbmRzIExheWEuU2NyaXB0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG4gICAgXG5cbiAgICBvbkNsaWNrKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lV29ybGQuc2NlbmVcIik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5TdG9yeSBleHRlbmRzIExheWEuU2NyaXB0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG4gICAgXG5cbiAgICBvbkNsaWNrKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lU3Rvcnkuc2NlbmVcIik7XG4gICAgfVxufSIsImltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29se1xuICAgIC8v6I635Y+W5LiJ6KeS5Ye95pWw5YC8XG4gICAgcHVibGljIHN0YXRpYyByb3RhdGlvbkRlYWwoZng6bnVtYmVyLGZ5Om51bWJlcixzeDpudW1iZXIsc3k6bnVtYmVyLGdldFN0cmluZykgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIC8qKuaWnOi+uSAqL1xuICAgICAgICBsZXQgYyA6IG51bWJlciA9IE1hdGguc3FydChNYXRoLnBvdyhmeCAtIHN4LDIpICsgTWF0aC5wb3coZnkgLSBzeSwyKSk7XG4gICAgICAgIC8qKuS4tOi+uSAqL1xuICAgICAgICBsZXQgYSA6IG51bWJlciA9IHN4IC0gZng7XG4gICAgICAgIC8qKuWvuei+uSAqL1xuICAgICAgICBsZXQgYiA6IG51bWJlciA9IHN5IC0gZnk7XG4gICAgICAgIFxuICAgICAgICBpZihnZXRTdHJpbmcgPT0gXCJzaW5cIilcbiAgICAgICAge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiNzaW4gPT1cIiArIChiL2MpKTtcbiAgICAgICAgICAgIHJldHVybiAoYi9jKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGdldFN0cmluZyA9PSBcImNvc1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiI2NvcyA9PVwiICsgKGEvYykpO1xuICAgICAgICAgICAgcmV0dXJuIChhL2MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiN0YW4gPT1cIiArIChiL2EpKTsvL+Wvuei+uSDmr5Qg5Li06L65IFxuICAgICAgICAgICAgcmV0dXJuIChiL2EpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq56Kw5pKe5qOA5rWLIGRpY051bSDvvJrpooTorr7ot53nprsgb2JqZWN0MeWSjG9iamVjdDLkvKDlhaVzcHJpdGUs5piv5oyJ54Wn5q+P5Liqc3ByaXRl55qE6ZSa54K55Zyo5Lit5b+D5L2N572u5p2l6K6h566X55qEICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29sbGlzaW9uQ2hlY2sob2JqZWN0MSxvYmplY3QyKSA6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmKE1hdGguYWJzKG9iamVjdDEueCAtIG9iamVjdDIueCk8IG9iamVjdDEud2lkdGgvMiArIG9iamVjdDIud2lkdGgvMiYmXG4gICAgICAgICAgIE1hdGguYWJzKG9iamVjdDEueSAtIG9iamVjdDIueSkgPCBvYmplY3QxLmhlaWdodC8yICsgb2JqZWN0Mi5oZWlnaHQvMil7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRlUm9wZVBvaW50XzIoeCx5LFgsWSk6bnVtYmVyXG4gICAge1xuICAgICAgICAgICAgbGV0IGNvcz1Ub29sLnJvdGF0aW9uRGVhbCh4LHksWCxZLFwiY29zXCIpO1xuICAgICAgICAgICAgbGV0IHNpbj1Ub29sLnJvdGF0aW9uRGVhbCh4LHksWCxZLFwic2luXCIpO1xuICAgICAgICAgICAgbGV0IHJvdGF0aW9uO1xuICAgICAgICAgICAgaWYoY29zPj0wJiZzaW4+MCl7XG4gICAgICAgICAgICAgICAgcm90YXRpb249IDE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpLTkwO1xuICAgICAgICAgICAgfWVsc2UgaWYoY29zPDAmJnNpbj49MCl7XG4gICAgICAgICAgICAgICAgcm90YXRpb249MTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyktOTA7XG4gICAgICAgICAgICB9ZWxzZSBpZihjb3M8PTAmJnNpbjwwKXtcbiAgICAgICAgICAgICAgICByb3RhdGlvbj05MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvcz4wJiZzaW48PTApe1xuICAgICAgICAgICAgICAgIHJvdGF0aW9uPSA5MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHkgPCBZKSByb3RhdGlvbiArPSAxODA7XG4gICAgICAgICAgICByZXR1cm4gcm90YXRpb247XG4gICAgfVxuXG4gICAgLyoq6I635Y+W6KeS5bqmIFxuICAgICAqIOenu+WKqOeCueWcqOWJjVxuICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRSb3RhdGlvbih4MSx5MSx4Mix5MikgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCBjb3M9VG9vbC5yb3RhdGlvbkRlYWwoeDEseTEseDIseTIsXCJjb3NcIik7XG4gICAgICAgIGxldCBzaW49VG9vbC5yb3RhdGlvbkRlYWwoeDEseTEseDIseTIsXCJzaW5cIik7XG4gICAgICAgIGxldCByb3RhdGlvbjtcbiAgICAgICAgaWYoY29zID49MCAmJiBzaW4+MCl7XG4gICAgICAgICAgICByb3RhdGlvbiA9IDkwICsgMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29zIDwwICYmIHNpbj49MCl7XG4gICAgICAgICAgICByb3RhdGlvbiA9IC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgfVxuICAgICAgICBpZihjb3MgPjAgJiYgc2luPD0wKVxuICAgICAgICB7XG4gICAgICAgICAgICByb3RhdGlvbiA9IC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgfVxuICAgICAgICBpZihjb3MgPD0wICYmIHNpbjwwKVxuICAgICAgICB7XG4gICAgICAgICAgICByb3RhdGlvbiA9IDE4MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm90YXRpb247XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiByb3RhdGlvbiA9IDQ1IOinkuW6plxuICAgICAqIOaxgiBjb3Mg6L+Y5pivIHNpblxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRpb25TZXQocm90YXRpb24sdHlwZVN0cmluZykgIDogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgciA7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYocm90YXRpb24gPCAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByb3RhdGlvbiArPSAzNjAqKE1hdGguYWJzKE1hdGguZmxvb3Iocm90YXRpb24vMzYwKSsyKSk7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYoTWF0aC5mbG9vcihyb3RhdGlvbi8zNjApPjApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJvdGF0aW9uIC09IDM2MCpNYXRoLmZsb29yKHJvdGF0aW9uLzM2MCk7XG4gICAgICAgIH1cbiAgICAgICAgciA9IChyb3RhdGlvbikvMTgwKk1hdGguUEk7ICAgICAgICBcbiAgICAgICAgaWYodHlwZVN0cmluZyA9PSBcImNvc1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKE1hdGguY29zKHIpKTtcbiAgICAgICAgICAgIGlmKChyb3RhdGlvbiA+IDAgJiYgcm90YXRpb24gPD0gOTApIHx8IChyb3RhdGlvbj4yNzAgJiYgcm90YXRpb248PTM2MCkpICB2YWx1ZSA9IC12YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29zOjpcIiArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHsgICAgICAgICBcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5hYnMoTWF0aC5zaW4ocikpO1xuICAgICAgICAgICAgaWYoKHJvdGF0aW9uPjE4MCAmJiByb3RhdGlvbiA8PSAyNzApIHx8IChyb3RhdGlvbj4yNzAgJiYgcm90YXRpb248PTM2MCkpIHZhbHVlID0gLXZhbHVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaW46OlwiICsgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZSAgICAgICAgXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOi3neemu+iuoeeul1xuICAgICAqIDIg5a+56LGhXG4gICAgICogZmlyc3RcbiAgICAgKiBzZWNvbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvdW50RGljX09iamVjdChmOmFueSxzOmFueSkgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coZi54IC0gcy54LDIpICsgTWF0aC5wb3coZi55IC0gcy55LDIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmlrnlnZfmo4DmtYsgXG4gICAgICogXG4gICAgICog5pa55Z2X5a+56LGhIHNwXG4gICAgICog5qOA5rWL55qE54K5IOWvueixoVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBibG9ja1Rlc3Qoc3AscG9pbnQpIDogYm9vbGVhblxuICAgIHtcbiAgICAgICAgaWYoIXNwIHx8ICFwb2ludCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgcG9pbnRMZWZ0IDogYW55ID17eDpzcC54IC0gc3Aud2lkdGgvMix5OnNwLnktc3AuaGVpZ2h0LzJ9O1xuICAgICAgICBsZXQgcG9pbnRSaWdodCA6IGFueSA9e3g6c3AueCArIHNwLndpZHRoLzIseTpzcC55K3NwLmhlaWdodC8yfTtcbiAgICAgICAgbGV0IHNfcG9pbnRMZWZ0ID0gcG9pbnQueCA+IHBvaW50TGVmdC54ICYmIHBvaW50Lnk+cG9pbnRMZWZ0Lnk7XG4gICAgICAgIGxldCBzX3BvaW50UmlnaHQgPSBwb2ludC54IDwgcG9pbnRSaWdodC54ICYmIHBvaW50Lnk8cG9pbnRSaWdodC55O1xuICAgICAgICBpZihzX3BvaW50TGVmdCAmJiBzX3BvaW50UmlnaHQpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdhbWVEYXRhIC0gQ291bnRyeURhdGFcbiAgICAgKiDljaDmr5Qg5pWw57uEXG4gICAgKuiOt+WPluWMuumXtOaVsOe7hCAwLDAuOCwwLjgzLDAuODQsMC45LDFcbiAgICAgKiBAYXJyIOWxnuaAp+WQjeWtl1xuICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRQZXJjZW50QXJlYShhcnIpOkFycmF5PG51bWJlcj5cbiAgICB7XG4gICAgICAgIGxldCBhcnJQZXJjZW50ID0gW107Ly/nlJ/kuqfmr5TkvotcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xuICAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlciArPSBDb3VudHJ5RGF0YS5pbnNfW2FycltpXV07XG4gICAgICAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyUGVyY2VudDtcbiAgICB9XG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xuaW1wb3J0IFNjZW5lPUxheWEuU2NlbmU7XG5leHBvcnQgbW9kdWxlIHVpIHtcclxuICAgIGV4cG9ydCBjbGFzcyBCdXlVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgYmc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9idXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ1eV9uYW1lOmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBidXlfaW5wdXQ6TGF5YS5UZXh0SW5wdXQ7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnV5X3ByaWNlOmxheWEuZGlzcGxheS5UZXh0O1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiQnV5XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBHYW1lV29ybGRVSSBleHRlbmRzIFNjZW5lIHtcclxuXHRcdHB1YmxpYyBhbmkxOkxheWEuRnJhbWVBbmltYXRpb247XG5cdFx0cHVibGljIGFuaTI6TGF5YS5GcmFtZUFuaW1hdGlvbjtcblx0XHRwdWJsaWMgc3Bfc2NlbmU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2dyb3VuZDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3Bfcml2ZXI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX3dhbGw6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2Rvb3I6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV80OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV81OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV82OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV84OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV85OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBwYWxhY2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvc3BpdGFsOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xOTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRlY2hub2xvZ3k6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIxOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgZmFybTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMxOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBhcm15OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9VSTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaW1nX3BvcHVsYXRpb246TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfcG9wdWxhdGlvbjpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX3BvcHVsYXJTdXBwb3J0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3BvcHVsYXJTdXBwb3J0OmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfbW9uZXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfbW9uZXk6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ190ZWNobm9sb2d5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3RlY2hub2xvZ3k6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ19wcmVzdGlnZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9wcmVzdGlnZTpsYXlhLmRpc3BsYXkuVGV4dDtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkdhbWVXb3JsZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IG1vZHVsZSB1aS5EaWEge1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1cnJlbnREaWFsb2dVSSBleHRlbmRzIFNjZW5lIHtcclxuXHRcdHB1YmxpYyBtc2dCb2R5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcHJpdGVfUGVyc29uOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcHJpdGVfTXNnOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBidG5fY2xvc2U6TGF5YS5TcHJpdGU7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJEaWEvQ3VycmVudERpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cciJdfQ==
