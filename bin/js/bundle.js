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
    GameConfig.TIME_MAINDATA = 0.5 * 60 * 60;
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
        this._innerPeople = 0;
        this._outerPeople = 0;
    }
    CountryData.prototype.onEnable = function () {
    };
    /**开启定时器 */
    CountryData.prototype.openTimer = function () {
        Laya.timer.frameLoop(GameConfig_1.default.TIME_MAINDATA, this, this.cal_Money);
        Laya.timer.frameLoop(GameConfig_1.default.TIME_MAINDATA, this, this.influence_Grain);
        Laya.timer.frameLoop(GameConfig_1.default.TIME_MAINDATA, this, this.influence_PopularSupport);
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
            // people.createTechnologyTime();
        }
        //明星
        else if (random >= array[2] && random < array[3]) {
            people = Laya.Pool.getItem("star");
            if (!people) {
                people = new Star_1.default(this.view, GameConfig_1.default.STAR_MAN, true);
                DataManager_1.default.ins_.arr_outPeople.push(people);
            }
            // people.createStarTime();
        }
        //盗贼
        else if (random >= array[3] && random < array[4]) {
            people = Laya.Pool.getItem("robber");
            if (!people) {
                people = new Robber_1.default(this.view, GameConfig_1.default.ROBBER_MAN, true);
                DataManager_1.default.ins_.arr_outPeople.push(people);
            }
            // people.cutMoneyTime();
        }
        //土匪
        else {
            people = Laya.Pool.getItem("bandit");
            if (!people) {
                people = new Bandit_1.default(this.view, GameConfig_1.default.BANDIT_MAN, true);
                DataManager_1.default.ins_.arr_outPeople.push(people);
            }
            // people.cutMoneyTime();
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
                DataManager_1.default.ins_.population++;
                DataManager_1.default.ins_._innerPeople++;
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
        this.cutMoneyTime();
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
        Laya.timer.frameOnce(10, this, this.CutMoney);
    };
    //时间后偷取
    Robber.prototype.CutMoney = function () {
        var random = Math.random();
        //偷盗成功
        DataManager_1.default.ins_.money -= Math.floor(Math.random() * 10);
        this.lowSupport();
        //给予随机时间进行偷盗(3-6)分钟
        var time = Math.random() * 3 + 3;
        //time秒之后进行偷盗
        Laya.timer.frameOnce(10, this, this.CutMoney);
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
        this.cutMoneyTime();
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
        this.createTechnologyTime();
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
        this.createStarTime();
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
        Laya.timer.loop(1000, this, this.currentRatio);
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
        this.clickHouse.on(Laya.Event.CLICK, this, this.doorCtr);
        this.clickHouse.on(Laya.Event.MOUSE_OVER, this, this.mouseOver);
        this.clickHouse.on(Laya.Event.MOUSE_OVER, this, this.mouseOut);
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
    /**鼠标悬浮 */
    GameWorld.prototype.mouseOver = function () {
        this.clickHouse.loadImage("map/doorHouse2.png");
    };
    /**离开 */
    GameWorld.prototype.mouseOut = function () {
        this.clickHouse.loadImage("map/doorHouse.png");
    };
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
        if (!this.ani1.isPlaying)
            this.ani1.play(0, false);
    };
    /**开门 */
    GameWorld.prototype.doorOpen = function () {
        if (!this.ani2.isPlaying && !this.ani1.isPlaying)
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
        this.text_count_population.text = Math.ceil(DataManager_2.default.ins_.population).toString();
        this.text_count_popularSupport.text = Math.ceil(DataManager_2.default.ins_.popularSupport).toString();
        this.text_count_money.text = Math.ceil(DataManager_2.default.ins_.money).toString();
        this.text_count_technology.text = Math.ceil(DataManager_2.default.ins_.technology).toString();
        this.text_count_prestige.text = Math.ceil(DataManager_2.default.ins_.prestige).toString();
    };
    //----------------------稀有门
    /**购买稀有门 */
    GameWorld.prototype.buyRareDoor = function () {
    };
    ////////////游戏流程开始//////////////////////////
    /**游戏流程开始 */
    GameWorld.prototype.gameStart = function () {
        this.updateUIMainData();
        this.peopleManager.openPeopleFactory(); //人口生成逻辑运行
        this.peopleManager.createPeople_Inner(); //内人口生成
        DataManager_2.default.ins_.openTimer();
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
        var lastTime = 120 - this.timerCount - 5; //获取剩余时间，多预支10秒
        console.log("进出比例" + BI);
        console.log("出门目标数::" + outerTarget + "  |||  实际出门数：：" + _outer);
        console.log("进门目标数::" + innerTaget + "  |||  实际进门数：：" + _inner);
        console.log("剩下时间：：" + lastTime);
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
        if (this.timerCount >= 120) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXIyLjAvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvQnV5RGlhbG9nLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0JhbmRpdC50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvQ29tbW9uLnRzIiwic3JjL1BlcmZlYi9kaWZmX1Blb3BsZS9Sb2JiZXIudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL1NjaWVudGlzdC50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvU3Rhci50cyIsInNyYy9TY3JpcHQvQ2VudGVyLnRzIiwic3JjL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzIiwic3JjL1NjcmlwdC9PcGVuR2FtZS50cyIsInNyYy9TY3JpcHQvT3BlblN0b3J5LnRzIiwic3JjL1Rvb2wvVG9vbC50cyIsInNyYy91aS9sYXlhTWF4VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVkE7SUFBQTtJQWdFQSxDQUFDO0lBL0RHLGNBQWM7SUFDQSxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxtQkFBUSxHQUFZ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O1FBQUEsQ0FBQztRQUN2Qiw4QkFBYyxHQUFkO1lBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0wsWUFBQztJQUFELENBWkEsQUFZQyxDQVowQixNQUFNLEdBWWhDO0lBWlksUUFBSyxRQVlqQixDQUFBO0lBQ0Q7UUFBaUMsK0JBQUs7UUE2RGxDO21CQUFlLGlCQUFPO1FBQUEsQ0FBQztRQUN2QixvQ0FBYyxHQUFkO1lBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQWxFQSxBQWtFQyxDQWxFZ0MsS0FBSyxHQWtFckM7SUFsRVksY0FBVyxjQWtFdkIsQ0FBQTtBQUNMLENBQUMsRUFqRmEsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBaUZmO0FBQ0QsV0FBYyxFQUFFO0lBQUMsSUFBQSxHQUFHLENBWW5CO0lBWmdCLFdBQUEsR0FBRztRQUNoQjtZQUFxQyxtQ0FBSztZQUt0Qzt1QkFBZSxpQkFBTztZQUFBLENBQUM7WUFDdkIsd0NBQWMsR0FBZDtnQkFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFDTCxzQkFBQztRQUFELENBVkEsQUFVQyxDQVZvQyxLQUFLLEdBVXpDO1FBVlksbUJBQWUsa0JBVTNCLENBQUE7SUFDTCxDQUFDLEVBWmdCLEdBQUcsR0FBSCxNQUFHLEtBQUgsTUFBRyxRQVluQjtBQUFELENBQUMsRUFaYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFZZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcbiAgICAvKirkurrnp40gLSDmma7pgJrkurogKi9cbiAgICBwdWJsaWMgc3RhdGljIENPTU1PTl9NQU4gOiBzdHJpbmcgPSBcImNvbW1vblwiO1xuICAgIC8qKuS6uuenjSAtIOebl+i0vCAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUk9CQkVSX01BTiA6IHN0cmluZyA9IFwicm9iYmVyXCI7XG4gICAgLyoq5Lq656eNIC0g5Zyf5YyqICovXG4gICAgcHVibGljIHN0YXRpYyBCQU5ESVRfTUFOIDogc3RyaW5nID0gXCJiYW5kaXRcIjtcbiAgICAvKirkurrnp40gLSDmmI7mmJ8gKi9cbiAgICBwdWJsaWMgc3RhdGljIFNUQVJfTUFOIDogc3RyaW5nID0gXCJzdGFyXCI7XG4gICAgLyoq5Lq656eNIC0g56eR5a2m5a62ICovXG4gICAgcHVibGljIHN0YXRpYyBTQ0lFTlRJU1RfTUFOIDogc3RyaW5nID0gXCJzY2llbnRpc3RcIjtcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5bu6562RXG4gICAgLyoq5Yy76ZmiICovXG4gICAgcHVibGljIHN0YXRpYyBIT1NQSVRBTCA6IG51bWJlciA9IDE7XG4gICAgLyoq5Yab6ZifICovXG4gICAgcHVibGljIHN0YXRpYyBBUk1ZIDogbnVtYmVyID0gMjtcbiAgICAvKirlhpzlnLogKi9cbiAgICBwdWJsaWMgc3RhdGljIEZBUk06IG51bWJlciA9IDM7XG4gICAgLyoq56eR5oqAICovXG4gICAgcHVibGljIHN0YXRpYyBURUNITk9MT0dZOiBudW1iZXIgPSA0O1xuICAgIC8qKuS6i+S7tuaIvyDmlrDpl7vmiL8gKi9cbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UX0hPVVNFOiBudW1iZXIgPSA1O1xuICAgIC8qKueah+WuqyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUEFMQUNFOiBudW1iZXIgPSA2O1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeajgOa1i+eCueeahOmXtOi3nVxuICAgIC8qKuajgOa1i+eCuemXtOi3nSAqL1xuICAgIHB1YmxpYyBzdGF0aWMgVEVTVF9QT0lOVF9ESUMgOiBudW1iZXIgPSA1O1xuICAgIC8qKumAn+W6piAqL1xuICAgIHB1YmxpYyBzdGF0aWMgVEVTVF9QT0lOVF9TUEVFRCA6IG51bWJlciA9IDAuNDtcbiAgICAvKirml4vovazop5LluqblgY/np7sgKi9cbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfUk8gOiBudW1iZXIgPSAxMDtcbiAgICAvKirkurrnsbvnlJ/kuqfpl7TpmpRTICovXG4gICAgcHVibGljIHN0YXRpYyBQRVJTT05fQ1JFQVRFX1RJTUUgOiBudW1iZXIgPSAxO1xuICAgIC8qKuebkea1i+eCueaVsOmHjyovXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX0NPVU5UIDogbnVtYmVyID0gNjtcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Li75YC8XG4gICAgLyoq5Zu95a626LSi5pS/ICovXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX01PTkVZIDogc3RyaW5nID0gXCJtb25leVwiO1xuICAgIC8qKuWbveWutuS6uuWPoyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9QT1BVTEFUSU9OIDogc3RyaW5nPVwicG9wdWxhdGlvblwiO1xuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9QT1BVTEFSU1VQUE9SVCA6IHN0cmluZyA9IFwicG9wdWxhclN1cHBvcnRcIjtcbiAgICAvKirlm73lrrbnp5HmioAgKi9cbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fVEVDSE5PTE9HWSA6IHN0cmluZyA9IFwidGVjaG5vbG9neVwiO1xuICAgIC8qKuWbveWutuWogeacmyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9QUkVTVElHRSA6IHN0cmluZyA9IFwicHJlc3RpZ2VcIjtcblxuICAgIFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pe26Ze0XG4gICAgLyoq5LqU5aSn5Li75YC86Kem5Y+R5pe26Ze0ICovXG4gICAgcHVibGljIHN0YXRpYyBUSU1FX01BSU5EQVRBIDogbnVtYmVyID0gMC41KjYwKjYwO1xuICAgIFxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWFtuS7llxuICAgIC8qKuS4gOWkqeaXtumXtC/liIbpkp8gKi9cbiAgICBwdWJsaWMgc3RhdGljIE9ORV9EQVk6bnVtYmVyPTEwKjYwO1xuICAgIC8qKueyrumjn+eUn+S6p+eOh+aNoumSseS4tOeVjOWAvCAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UPTEuNTtcbiAgICAvKirnsq7po5/mjaLpkrHmsYfnjocgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdSQUlOVE9NT05FWT0yO1xufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xyXG4vKipcclxuICog6LSt5Lmw5qGGIOmAmueUqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV5RGlhbG9nIGV4dGVuZHMgdWkuQnV5VUl7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndpZHRoPTgwMDtcclxuICAgICAgICB0aGlzLmhlaWdodD00MDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTp2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKuazqOWGjOS6i+S7tiAqL1xyXG4gICAgcHJpdmF0ZSBhZGRFdmVudHMoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idG5fYnV5Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmJ1eUNsaWNrKTtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZUNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirngrnlh7votK3kubAgKi9cclxuICAgIHByaXZhdGUgYnV5Q2xpY2soKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGN1cnJcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC8qKueCueWHu+WFs+mXrSAqL1xyXG4gICAgcHJpdmF0ZSBjbG9zZUNsaWNrKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0gXHJcbn0iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcbmltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1BlcmZlYi9QZW9wbGVcIjtcblxuLyoqXG4gKiDmlbDmja7kuK3lv4Mg5omA5pyJ55qE5pWw5o2uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlEYXRhe1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zXyA6IENvdW50cnlEYXRhID0gbmV3IENvdW50cnlEYXRhKCk7XG4gICAgLyoqKioqKioqKioqKioq5Li75pWw5o2uKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoq5Zu95a626LSi5pS/ICovXG4gICAgcHVibGljIG1vbmV5IDogbnVtYmVyID0gMTAwMDA7XG4gICAgLyoq5Zu95a625Lq65Y+jICovXG4gICAgcHVibGljIHBvcHVsYXRpb24gOiBudW1iZXI9MTAwO1xuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xuICAgIHB1YmxpYyBwb3B1bGFyU3VwcG9ydCA6IG51bWJlciA9IDUwO1xuICAgIC8qKuWbveWutuenkeaKgCAqL1xuICAgIHB1YmxpYyB0ZWNobm9sb2d5IDogbnVtYmVyID0gNTA7XG4gICAgLyoq5Zu95a625aOw5pybICovXG4gICAgcHVibGljIHByZXN0aWdlIDogbnVtYmVyID0gNTA7XG5cbiAgICAvKioqKioqKioqKioqKioq5Ymv5pWw5o2uKioqKioqKioqKioqKioqKiovXG4gICAgLy8tLS0tLS0tLeS4u+aVsOaNruW9seWTjVxuICAgIC8v5Zu65a6a5pSv5Ye6XG4gICAgLyoq5Yab6LS5ICovXG4gICAgcHVibGljIGFybXlDb3N0IDogbnVtYmVyID0gMTAwO1xuICAgIC8qKuaUv+W6nOi0ueeUqCAqL1xuICAgIHB1YmxpYyBnb3Zlcm5Db3N0IDogbnVtYmVyID0gMTAwO1xuICAgIC8qKuenkeaKgOi0ueeUqCAqL1xuICAgIHB1YmxpYyB0ZWNobm9sb2d5Q29zdCA6IG51bWJlciA9IDEwMDtcbiAgICAvKirnqI7mlLbnjocgKi9cbiAgICBwdWJsaWMgdGF4IDogbnVtYmVyID0gMC4wNTtcbiAgICAvKirnsq7po5/mtojogJfph48gKOS6uuWdh+a2iOiAl+mHjykgKi9cbiAgICBwdWJsaWMgZ3JhaW5QZXJDb3N0IDogbnVtYmVyID0gMTtcbiAgICBcblxuICAgIC8v5Y+Y5Yqo546HXG4gICAgLyoq57Ku6aOf5Lqn6YePICjkurrlnYfkuqfph48pKi9cbiAgICBwdWJsaWMgZ3JhaW5QZXJBZGQgOiBudW1iZXIgPSAxO1xuICAgIC8qKueyrumjn+W6k+WtmCAqL1xuICAgIHB1YmxpYyBncmFpblN0b2NrOm51bWJlcj0wO1xuICAgIC8qKuWGm+i0ueWHj+WwkeeOhyAqL1xuICAgIHB1YmxpYyBhcm15UGVyY2VudDpudW1iZXI9MC4yO1xuICAgIC8qKkdEUCDmjKPpkrHog73lipvvvIzmr4/kurrmr4/lpKnog73kuqflpJrlsJHpkrEgKi9cbiAgICBwdWJsaWMgR0RQIDogbnVtYmVyID0gMTA7XG5cblxuICAgIC8qKui/m+WfjuaVsCDnm67moIflgLwybWluKi9cbiAgICBwdWJsaWMgZW50ZXJQZW9wbGUgOiBudW1iZXIgPSA1MDtcbiAgICAvKirlh7rln47mlbAg55uu5qCH5YC8Mm1pbiovXG4gICAgcHVibGljIGV4aXRQZW9wbGUgOiBudW1iZXIgPSA1MDtcbiAgICAvKirkurrlj6Pmr5TkvovmlbAg6L+b5Z+O5pWwL+WHuuWfjuaVsCAybWluKi9cbiAgICBwdWJsaWMgcGVyY2VudCA6IG51bWJlciA9IDE7XG4gICAgLyoq5Z+O5aSW5Lq65Y+j5pWw57uEKi9cbiAgICBwdWJsaWMgYXJyX291dFBlb3BsZSA6IEFycmF5PFBlb3BsZT47XG4gICAgLyoq5Z+O5YaF5Lq65Y+j5pWw57uEICovXG4gICAgcHVibGljIGFycl9pblBlb3BsZSA6IEFycmF5PFBlb3BsZT47XG4gICAgLyoq5Ye65Z+O5Lq65Y+jIOWunumZheWAvC8ybWluICovXG4gICAgcHVibGljIF9vdXRlclBlb3BsZSA6IG51bWJlcjtcbiAgICAvKirov5vpl6jkurrlj6Mg5a6e6ZmF5YC8LzJtaW4gKi9cbiAgICBwdWJsaWMgX2lubmVyUGVvcGxlIDogbnVtYmVyO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pmu6YCa5Lq65Y+j5Y2g5q+UXG4gICAgLyoqMC3ljLvnlJ8gMS3orablr58gMi3llYbkurogLTPmuLjmiYvlpb3pl7IgLTTlhpzmsJEqL1xuICAgIHB1YmxpYyBhcnJfcGVyc29uUGVyY2VudE5hbWUgOiBBcnJheTxzdHJpbmc+ID0gW1wicGVyY2VudERvY3RvclwiLFwicGVyY2VudFBvbGljXCIsXCJwZXJjZW50U2hvcGVyXCIsXCJwZXJjZW50Tm90aGluZ1wiLFwicGVyY2VudEZhcm1lclwiXTtcbiAgICAvKirmma7pgJrkurrkuK0g5Yy755Sf55qE5Y2g5q+UKi9cbiAgICBwdWJsaWMgcGVyY2VudERvY3RvciA6IG51bWJlciA9IDAuMDI7XG4gICAgLyoq5pmu6YCa5Lq656eNIOitpuWvn+WNoOavlCAqL1xuICAgIHB1YmxpYyBwZXJjZW50UG9saWMgOiBudW1iZXIgPSAwLjAzO1xuICAgIC8qKuaZrumAmuS6uuenjSDllYbkurrnmoTljaDmr5QgKi9cbiAgICBwdWJsaWMgcGVyY2VudFNob3BlciA6IG51bWJlciA9IDAuMTU7XG4gICAgLyoq5ri45omL5aW96ZeyICovXG4gICAgcHVibGljIHBlcmNlbnROb3RoaW5nIDogbnVtYmVyID0gMC4xO1xuICAgIC8qKuWGnOawkSAqL1xuICAgIHB1YmxpYyBwZXJjZW50RmFybWVyIDogbnVtYmVyID0gMC43O1xuXG4gICAgLy8tLS0tLS0tLeW9seWTjSDjgJDkuLvmlbDmja7jgJEtLS0tLS0tLS0tLS0tLS0tXG4gICAgXG5cblxuXG5cblxuXG4gICAgLy8tLS0tLS0tLeS6i+S7tuaVsOaNrlxuICAgIC8qKueYn+eWqyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8qL1xuICAgIHB1YmxpYyBwZXN0IDogbnVtYmVyID0gMDtcbiAgICAvKirlnLDpnIcgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfICovXG4gICAgcHVibGljIG5hdHVyYWxEaXNhc3RlciA6IG51bWJlciA9IDA7XG4gICAgLyoq5oiY5LmxICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyovXG4gICAgcHVibGljIHdhciA6IG51bWJlciA9IDA7XG5cbiAgICAvLy0tLS0tLS0t6IGM5Lia5Lq65pWwXG4gICAgcHVibGljIGFycl9QZW9wbGUgOiBBcnJheTxzdHJpbmc+ID0gW1wiY29tbW9uXCIsXCJzY2llbnRpc3RcIixcInN0YXJcIixcImJhbmRpdFwiLFwicm9iYmVyXCJdO1xuICAgIC8qKuaZrumAmuS6uiBBICDmma7pgJrkurrkuK3kvJrkuqfnlJ/ljLvnlJ8g6K2m5a+fIOetieato+W4uOiBjOS4miovXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDk1O1xuICAgIC8qKuenkeWtpuWutiBTU1MqL1xuICAgIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAxO1xuICAgIC8qKuaYjuaYnyBTUyovXG4gICAgcHVibGljIHN0YXIgOiBudW1iZXIgPSAyO1xuICAgIC8qKuWcn+WMqiAtUyAqL1xuICAgIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAxO1xuICAgIC8qKuebl+i0vCAtQSAqL1xuICAgIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAxO1xuICAgICAgICAvLyAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xuICAgICAgICAvLyBwdWJsaWMgY29tbW9uIDogbnVtYmVyID0gMTtcbiAgICAgICAgLy8gLyoq56eR5a2m5a62IFNTUyovXG4gICAgICAgIC8vIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAwO1xuICAgICAgICAvLyAvKirmmI7mmJ8gU1MqL1xuICAgICAgICAvLyBwdWJsaWMgc3RhciA6IG51bWJlciA9IDA7XG4gICAgICAgIC8vIC8qKuWcn+WMqiAtUyAqL1xuICAgICAgICAvLyBwdWJsaWMgYmFuZGl0IDogbnVtYmVyID0gMDtcbiAgICAgICAgLy8gLyoq55uX6LS8IC1BICovXG4gICAgICAgIC8vIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAwO1xuICAgIC8qKuW3sueUn+aIkOeahOS6uuenjSAgMCDmma7pgJogICAx56eR5a2m5a62ICAy5piO5pifIDPlnJ/ljKogNOebl+i0vCovXG4gICAgcHVibGljIGFscmVhZHlDcmVhdGUgOiBBcnJheTxudW1iZXI+ID0gWzAsMCwwLDAsMF07XG5cbiAgICAvLy0tLS0tLS0t5Z+O6ZeoXG4gICAgLyoq6Zeo5piv5ZCm5omT5byAKi9cbiAgICBwdWJsaWMgaXNEb29yT3BlbiA6IGJvb2xlYW49dHJ1ZTtcbiAgICAvKirnrZvmn6Xog73lipsg5ZCv5Yqo54m55q6K6Zeo55qE5pe25YCZICDnrZvmn6Xog73lipvnlJ/mlYgqL1xuICAgIHB1YmxpYyBwcmVwYXJhdGlvbiA6IG51bWJlciA9IDAuNTtcbiAgICAvKirnibnmrorpl6gg562b5p+lIDEt6Ziy5q2i6L+b5YWlICAgMi3pgoDor7fov5vlhaUqL1xuICAgIC8vIHB1YmxpYyBrZWVwU2VsZWN0IDogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3ljLrln59cbiAgICAvKirlopnlhoXljLrln5/liJLliIYgKi9cbiAgICBwdWJsaWMgYXJyX0xlZnRBcmVhIDogQXJyYXk8YW55PjtcbiAgICBwdWJsaWMgYXJyX1JpZ2h0QXJlYSA6IEFycmF5PGFueT47XG4gICAgXG4gICAgLy8tLS0tLS0tLS0tLS0tLS3ls7DlgLxcbiAgICAvKirlm73lrrblubjnpo/luqbls7DlgLwgKi9cbiAgICBwdWJsaWMgcG9wdWxhclN1cHBvcnRNYXggOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq5Zu95a6256eR5oqA5bOw5YC8ICovXG4gICAgcHVibGljIHRlY2hub2xvZ3lNYXggOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq5Zu95a625aOw5pyb5bOw5YC8ICovXG4gICAgcHVibGljIHByZXN0aWdlTWF4IDogbnVtYmVyID0gMTAwO1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgICAgICB0aGlzLmFycl9pblBlb3BsZSA9IG5ldyBBcnJheTxQZW9wbGU+KCk7XG4gICAgICAgIHRoaXMuYXJyX291dFBlb3BsZSA9IG5ldyBBcnJheTxQZW9wbGU+KCk7XG4gICAgICAgIHRoaXMuX2lubmVyUGVvcGxlID0gMDtcbiAgICAgICAgdGhpcy5fb3V0ZXJQZW9wbGUgPSAwO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuW8gOWQr+WumuaXtuWZqCAqL1xuICAgIHB1YmxpYyBvcGVuVGltZXIoKTp2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcChHYW1lQ29uZmlnLlRJTUVfTUFJTkRBVEEsdGhpcyx0aGlzLmNhbF9Nb25leSk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKEdhbWVDb25maWcuVElNRV9NQUlOREFUQSx0aGlzLHRoaXMuaW5mbHVlbmNlX0dyYWluKTtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoR2FtZUNvbmZpZy5USU1FX01BSU5EQVRBLHRoaXMsdGhpcy5pbmZsdWVuY2VfUG9wdWxhclN1cHBvcnQpO1xuICAgIH1cblxuXG4gICAgLyoq6I635Y+W5Yy65Z+fICovXG4gICAgcHVibGljIHNldEFyZWEodmlldyA6IExheWEuTm9kZSkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSB2aWV3Ll9jaGlsZHJlbjtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxjaGlsZHJlbi5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihjaGlsZHJlbltpXS5uYW1lID09IFwicGFsYWNlXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2goY2hpbGRyZW5baV0pOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoY2hpbGRyZW5baV0ueDw5ODEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXJyX0xlZnRBcmVhLnB1c2godmlldy5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJzcF93YWxsXCIpKTtcbiAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2godmlldy5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJzcF93YWxsXCIpKTtcbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurrnmoTpmo/mnLrnp7vliqjpgJ/luqYgKi9cbiAgICBwdWJsaWMgZ2V0TW92ZVNwZWVkKCkgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiBHYW1lQ29uZmlnLlRFU1RfUE9JTlRfU1BFRUQqKE1hdGgucmFuZG9tKCkrMC41KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bkurrlj6PmtYHph48gOlxuICAgICAqIHJldHVybiDov5vlhaUgLyDlh7rljrtcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0X1Blb3BsZU1vdmUoKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyY2VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bkurrnp43mr5TkvotcbiAgICAgKiBAcGFyYW0gdHlwZSDkurrnp41cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0X1Byb2Zlc3Npb25QZXJjZW50KHR5cGU6c3RyaW5nKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgaWYodGhpc1t0eXBlXSA9PT0gdW5kZWZpbmVkKSBjb25zb2xlLmxvZyhcIuS4jeWtmOWcqOivpeS6uuenjVwiKTtcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpc1t0eXBlXS8odGhpcy5wb3B1bGF0aW9uKTtcbiAgICB9XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLee7k+eul1xuICAgIC8qKui0ouaUv+e7k+eulyovXG4gICAgcHVibGljIGNhbF9Nb25leSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5wcmVzdGlnZV9Bcm15Q29zdCgpO1xuICAgICAgICB0aGlzLnN0ZWFkeUNvc3QoKTtcbiAgICAgICAgdGhpcy5nZXRUYXgoKTtcbiAgICAgICAgdGhpcy50ZWNobm9sb2d5X0dEUCgpO1xuICAgIH1cblxuICAgIC8qKueyrumjnyDlvbHlk43nu5PnrpcqL1xuICAgIHB1YmxpYyBpbmZsdWVuY2VfR3JhaW4oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBncmFpbk1pbnVzPXRoaXMucG9wdWxhdGlvbl9HcmFpbkNvc3QoKTtcbiAgICAgICAgbGV0IGdyYWluQWRkPXRoaXMucG9wdWxhdGlvbl9HcmFpbkFkZCgpO1xuICAgICAgICB0aGlzLmNhbF9HcmFpbihncmFpbkFkZCxncmFpbk1pbnVzKTtcbiAgICB9XG5cbiAgICAvKirlubjnpo/luqYg5b2x5ZON57uT566XICovXG4gICAgcHVibGljIGluZmx1ZW5jZV9Qb3B1bGFyU3VwcG9ydCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zdXBwb3J0X1BlcmNlbnQoKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0X1Blb3BsZVR5cGUoKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0X091dFBlb3BsZU1heCgpO1xuICAgIH1cblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5YWs5byPXG4gICAgLyoq56iz5a6a5pSv5Ye6ICovXG4gICAgcHVibGljIHN0ZWFkeUNvc3QoKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLm1vbmV5LT10aGlzLmFybXlDb3N0KigxLXRoaXMuYXJteVBlcmNlbnQpK3RoaXMuZ292ZXJuQ29zdCt0aGlzLnRlY2hub2xvZ3lDb3N0O1xuICAgIH1cblxuICAgIC8qKueyrumjn+a2iOiAlyDkurrlj6PmlbAq5q+P5Lq65raI6ICX6YePKi9cbiAgICBwdWJsaWMgcG9wdWxhdGlvbl9HcmFpbkNvc3QoKTpudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvcHVsYXRpb24qdGhpcy5ncmFpblBlckNvc3Q7XG4gICAgfVxuXG4gICAgLyoq57Ku6aOf55Sf5LqnIOS6uuWPo+aVsCrmr4/kurrlrp7pmYXkuqfph48qL1xuICAgIHB1YmxpYyBwb3B1bGF0aW9uX0dyYWluQWRkKCk6bnVtYmVyXG4gICAge1xuICAgICAgICAvL+enkeaKgOW6pui9rOaNoiDnp5HmioDluqYwLTEwMCDnlJ/kuqflj5jljJbnjocwLTIg5YWs5byP5pqC5a6aeT14KjAuMDItMSw1MOS4uuWIhueVjOmZkFxuICAgICAgICBsZXQgY2hhbmdlPXRoaXMudGVjaG5vbG9neSowLjAyLTE7XG4gICAgICAgIHRoaXMuZ3JhaW5QZXJBZGQ9KDErY2hhbmdlKSp0aGlzLmdyYWluUGVyQWRkO1xuICAgICAgICBsZXQgcHJvPXRoaXMuZ3JhaW5QZXJBZGQqdGhpcy5wb3B1bGF0aW9uO1xuICAgICAgICByZXR1cm4gcHJvO1xuICAgIH1cblxuICAgIC8qKuW5uOemj+W6puW9seWTjeS6uuWPo+a1geWKqOeOhyAqL1xuICAgIHB1YmxpYyBzdXBwb3J0X1BlcmNlbnQoKTp2b2lkXG4gICAge1xuICAgICAgICAvL+W5uOemj+W9seWTjeS6uuWPo+a1geWKqOeOh+eahOazouWKqOiMg+WbtCAtMC4yfjAuMiDlhazlvI/mmoLlrpp5PXgqMC4wMDQtMC4yLDUw5Li65YiG55WM6ZmQXG4gICAgICAgIGxldCBjaGFuZ2U9dGhpcy5wb3B1bGFyU3VwcG9ydCowLjAwNC0wLjI7XG4gICAgICAgIHRoaXMucGVyY2VudD0oMStjaGFuZ2UpKnRoaXMucGVyY2VudDsgICBcbiAgICB9XG5cbiAgICAvKirlubjnpo/luqblvbHlk43kurrnp43lh6Dnjocg5Z2H5LuO5pmu6YCa5Lq65Yeg546H5Lit6L+b6KGM5pu/5o2iKi9cbiAgICBwdWJsaWMgc3VwcG9ydF9QZW9wbGVUeXBlKClcbiAgICB7XG4gICAgICAgIC8v56eR5a2m5a625rOi5Yqo6IyD5Zu0IDAuMDEtMC4wNSDlhazlvI/mmoLlrpp5PXgqMC4wMDA0KzAuMDEsNTDkuLrliIbnlYzpmZBcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5zY2llbnRpc3Q9dGhpcy5wb3B1bGFyU3VwcG9ydCowLjAwMDQrMC4wMTtcbiAgICAgICAgLy/mmI7mmJ/ms6LliqjojIPlm7QgMC4wMDUtMC4wMjUg5YWs5byP5pqC5a6aeT14KjAuMDAwMiswLjAwNSw1MOS4uuWIhueVjOmZkFxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLnN0YXI9dGhpcy5wb3B1bGFyU3VwcG9ydCowLjAwMDIrMC4wMDU7XG4gICAgICAgIC8v55uX6LS85rOi5Yqo6IyD5Zu0IDAuMDYtMC4xNCDlhazlvI/mmoLlrpp5PXgqMC4wMDA4KzAuMDYsNTDkuLrliIbnlYzpmZBcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5yb2JiZXI9dGhpcy5wb3B1bGFyU3VwcG9ydCowLjAwMDgrMC4wNjtcbiAgICAgICAgLy/lnJ/ljKrms6LliqjojIPlm7QgMC4wMi0wLjEg5YWs5byP5pqC5a6aeT14KjAuMDAwOCswLjAyLDUw5Li65YiG55WM6ZmQXG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18uYmFuZGl0PXRoaXMucG9wdWxhclN1cHBvcnQqMC4wMDA4KzAuMDI7XG4gICAgICAgIC8v5pmu6YCa5Lq65rOi5Yqo6IyD5Zu0XG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18uY29tbW9uPTEtKE91dENvdW50cnlEYXRhLmluc18uc2NpZW50aXN0K091dENvdW50cnlEYXRhLmluc18uc3RhcitPdXRDb3VudHJ5RGF0YS5pbnNfLnJvYmJlcitPdXRDb3VudHJ5RGF0YS5pbnNfLmJhbmRpdCk7XG4gICAgfVxuXG4gICAgLyoq5bm456aP5bqm5b2x5ZON5aKZ5aSW5Lq65Y+jIOWimeWkluacgOWkp+Wuuee6s+aVsDIwMC02MDAqL1xuICAgIHB1YmxpYyBzdXBwb3J0X091dFBlb3BsZU1heCgpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v5aKZ5aSW5aKe6ZW/546H5rOi5Yqo6IyD5Zu0IDAuMi0wLjYg5YWs5byP5pqC5a6aeT14KjAuMDA0KzAuMiw1MOS4uuWIhueVjOmZkFxuICAgICAgICBsZXQgY2hhbmdlPXRoaXMucG9wdWxhclN1cHBvcnQqMC4wMDQrMC4yO1xuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50PTEwMDAqY2hhbmdlO1xuICAgIH1cblxuICAgIC8qKuenkeaKgOW9seWTjUdEUCAqL1xuICAgIHB1YmxpYyB0ZWNobm9sb2d5X0dEUCgpOnZvaWRcbiAgICB7XG4gICAgICAgIC8vR0RQ5rOi5Yqo6IyD5Zu0IC0wLjV+MC41IOWFrOW8j+aaguWumnk9eCowLjA1LDUw5Li65YiG55WM6ZmQXG4gICAgICAgIGxldCBjaGFuZ2U9dGhpcy50ZWNobm9sb2d5KjAuMDEtMC41O1xuICAgICAgICAvL+WunumZhUdEUFxuICAgICAgICBsZXQgY3VyckdEUD10aGlzLkdEUCooY2hhbmdlKzEpO1xuICAgICAgICB0aGlzLm1vbmV5LT1jdXJyR0RQKnRoaXMucG9wdWxhdGlvbjtcbiAgICB9XG4gICAgLyoq5aiB5pyb5b2x5ZON5Yab6LS5ICovXG4gICAgcHVibGljIHByZXN0aWdlX0FybXlDb3N0KCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/lhpvotLnlh4/lsJHnjofms6LliqjojIPlm7QgMC4wLTAuNCDlhazlvI/mmoLlrpp5PXgqMC4wMDQsNTDkuLrliIbnlYzpmZBcbiAgICAgICAgdGhpcy5hcm15UGVyY2VudD10aGlzLnByZXN0aWdlKjAuMDA0O1xuICAgIH1cblxuICAgIC8qKueojuaUtiAqL1xuICAgIHB1YmxpYyBnZXRUYXgoKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLm1vbmV5Kz10aGlzLnRheDtcbiAgICB9XG5cbiAgICAvKirnsq7po5/nu5PnrpcgKi9cbiAgICBwdWJsaWMgY2FsX0dyYWluKGdyYWluQWRkOm51bWJlcixncmFpbk1pbnVzOm51bWJlcik6dm9pZFxuICAgIHtcbiAgICAgICAgLy/lpoLmnpzov5jmnInnsq7po5/lupPlrZhcbiAgICAgICAgaWYoZ3JhaW5BZGQ+PWdyYWluTWludXMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5aaC5p6c55Sf5Lqn6YeP5aSn5LqO5aSn5LqO5raI6ICX546H55qE5p+Q5Liq5YCN546H77yM5YWI6K6p5YW26Ieq5Yqo6L2s5YyW5Li66LSi5pS/77yM5LmL5ZCO5L+u5pS55Li65omL5Yqo6L2s5YyWXG4gICAgICAgICAgICBpZihncmFpbkFkZC9ncmFpbk1pbnVzPj1HYW1lQ29uZmlnLkdSQUlOX0VYQ0hBTkdFTU9ORVlfUEVSQ0VOVClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+i2heWHuuWAjeeOh+eahOmDqOWIhlxuICAgICAgICAgICAgICAgIGxldCBleGNoYW5nZT1ncmFpbkFkZC1ncmFpbk1pbnVzKkdhbWVDb25maWcuR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UO1xuICAgICAgICAgICAgICAgIC8v57Ku6aOf5o2i6ZKxXG4gICAgICAgICAgICAgICAgdGhpcy5tb25leSs9ZXhjaGFuZ2UqR2FtZUNvbmZpZy5HUkFJTlRPTU9ORVk7XG4gICAgICAgICAgICAgICAgLy/liankvZnnmoTliqDlhaXlupPlrZhcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srPShncmFpbkFkZC1leGNoYW5nZS1ncmFpbk1pbnVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+WKoOWFpeW6k+WtmFxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jays9KGdyYWluQWRkLWdyYWluTWludXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy/lpoLmnpzlupPlrZjliqDkuIrnlJ/kuqfnmoTnsq7po5/kuI3otrPku6XmirXlpJ/mtojogJfnmoTnsq7po59cbiAgICAgICAgICAgIGlmKChDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srZ3JhaW5BZGQpPGdyYWluTWludXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy/ngrnlh7vpgInmi6nmmK/lkKbotK3kubDnsq7po5/vvIzlpoLmnpzkuI3otK3kubDliJnlr7zoh7Tkurrlj6Plh4/lsJHlkozlubjnpo/luqbpmY3kvY5cbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRpb24tPShncmFpbk1pbnVzLShDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srZ3JhaW5BZGQpKSoxO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhclN1cHBvcnQtPShncmFpbk1pbnVzLShDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srZ3JhaW5BZGQpKSowLjAwMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+WHj+WwkeW6k+WtmFxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jay09Z3JhaW5NaW51cy1ncmFpbkFkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuaUueWPmCDov5vjgIHlh7og55uu5qCH5Lq65pWwIEBpc291dDrmmK/lkKbmmK/lh7rln44gIEBjb3VudO+8muaUueWPmOebruagh+WAvCovXG4gICAgcHVibGljIHNldEluT3V0VGFyZ2V0KGlzT3V0LGNvdW50KSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKGlzT3V0KSB0aGlzLmV4aXRQZW9wbGUgKz0gY291bnQ7XG4gICAgICAgIGVsc2UgdGhpcy5lbnRlclBlb3BsZSArPSBjb3VudDtcbiAgICB9XG5cbiAgICAvKirmlLnlj5gg6L+b44CB5Ye6IOebruagh+S6uuaVsCBAaXNvdXQ65piv5ZCm5piv5Ye65Z+OICBAY291bnTvvJrmlLnlj5jlrp7pmYXlgLwqL1xuICAgIHB1YmxpYyBzZXRJbk91dFRydXRoKGlzT3V0LGNvdW50KSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKGlzT3V0KSB0aGlzLl9vdXRlclBlb3BsZSArPSBjb3VudDtcbiAgICAgICAgZWxzZSB0aGlzLl9pbm5lclBlb3BsZSArPSBjb3VudDtcbiAgICB9XG4gICAgXG4gICAgLyoq6YCa55+l5Lq65Y+j5Ye65Z+OIEB0eXBlIO+8miDov5vmiJB0dXJlICDlh7rln44gZmFsc2UqL1xuICAgIHB1YmxpYyBwZW9wbGVHb091dCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBhcnIgO1xuICAgICAgICBpZih0eXBlKSBhcnIgPSB0aGlzLmFycl9vdXRQZW9wbGU7XG4gICAgICAgICAgICBlbHNlIGFyciA9IHRoaXMuYXJyX2luUGVvcGxlO1xuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihhcnIubGVuZ3RoKnJhbmRvbSk7XG4gICAgICAgIGlmKGluZGV4PjApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCFhcnJbaW5kZXhdLmlzR28pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXJyW2luZGV4XS5wZW9wbGVHbyh0eXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgdGhpcy5wZW9wbGVHb091dCh0eXBlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIumaj+acuuWHuumUmVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvKirlh7rln47pl6jnm7jlhbPmk43kvZwgKi9cbiAgICBwdWJsaWMgZ29PdXQodHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLl9vdXRlclBlb3BsZSsrOy8v5a6e6ZmF5Lq65pWw5Yqg5LiAXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbi0tOy8v5oC75Lq65Y+jIC0tXG4gICAgICAgIGlmKHRoaXNbdHlwZV0pIHRoaXNbdHlwZV0tLTtcbiAgICB9XG59XG5cbi8qKuWkluWfjiAqL1xuZXhwb3J0IGNsYXNzIE91dENvdW50cnlEYXRhe1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zXyA6IE91dENvdW50cnlEYXRhID0gbmV3IE91dENvdW50cnlEYXRhKCk7XG4gICAgLyoqKioqKioqKioqKioq5Li75pWw5o2uKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoq5pyA5aSn5aSW5Z+O5a6557qz5pWw6YePICovXG4gICAgcHVibGljIG1heENvdW50IDogbnVtYmVyPTQwMDtcbiAgICAvKirlvZPliY3lpJbln47kurrlj6PmlbAgKi9cbiAgICBwdWJsaWMgb3V0Q291bnQ6bnVtYmVyPTA7XG4gICAgLyoq5Lq65rue55WZ5pe26Ze0ICovXG4gICAgcHVibGljIGxpbWl0VGltZTpudW1iZXI9NTA7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKirmma7pgJrkuroqL1xuICAgIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSAwLjc5NTtcbiAgICAvKirnp5HlrablrrYgU1NTKi9cbiAgICBwdWJsaWMgc2NpZW50aXN0IDogbnVtYmVyID0gMC4wMztcbiAgICAvKirmmI7mmJ8gU1MqL1xuICAgIHB1YmxpYyBzdGFyIDogbnVtYmVyID0gMC4wMTU7XG4gICAgLyoq5Zyf5YyqIC1TICovXG4gICAgcHVibGljIGJhbmRpdCA6IG51bWJlciA9IDAuMDY7XG4gICAgLyoq55uX6LS8IC1BICovXG4gICAgcHVibGljIHJvYmJlciA6IG51bWJlciA9IDAuMTtcbiAgICAvKirlj5jph4/lkI0gKi9cbiAgICBwdWJsaWMgYXJyX1Blb3BsZSA6IEFycmF5PHN0cmluZz4gPSBbXCJjb21tb25cIixcInNjaWVudGlzdFwiLFwic3RhclwiLFwiYmFuZGl0XCIsXCJyb2JiZXJcIl07XG4gICAgXG4gICAgLyoq6I635Y+W5Yy66Ze05pWw57uEIDAsMC43OTUsMC44MjUsMC44NCwwLjksMSovXG4gICAgcHVibGljIGdldFBlcmNlbnRBcmVhKCk6QXJyYXk8bnVtYmVyPlxuICAgIHtcbiAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXG4gICAgICAgbGV0IGFycl9QZW9wbGUgPSB0aGlzLmFycl9QZW9wbGU7XG4gICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgZm9yKGxldCBpID0gMDtpPGFycl9QZW9wbGUubGVuZ3RoO2krKylcbiAgICAgICB7XG4gICAgICAgICAgICBudW1iZXIgKz0gdGhpc1thcnJfUGVvcGxlW2ldXTtcbiAgICAgICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xuICAgICAgIH1cbiAgICAgICByZXR1cm4gYXJyUGVyY2VudDtcbiAgICB9XG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XG5cbi8qKlxuICog5raI5oGv5qGGIOmAmueUqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNc2dEaWFsb2cgZXh0ZW5kcyB1aS5EaWEuQ3VycmVudERpYWxvZ1VJe1xuICAgIC8qKuexu+WeiyAqL1xuICAgIHByaXZhdGUgdHlwZSA6IG51bWJlciA7XG4gICAgLyoq57yT5YqoICovXG4gICAgLy8gcHJpdmF0ZSBzaG93VHdlZW4gOiBMYXlhLlR3ZWVuO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoq5Yid5aeL5YyWICovXG4gICAgcHVibGljIHNob3dNc2codHlwZTpudW1iZXIpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5idG5fY2xvc2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuY2xvc2VEaWFsb2cpOyAgICAgICAgXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2hhbmdlSW1nKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlVGl0bGUoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VXb3JkKCk7IFxuICAgICAgICB0aGlzLm1zZ0JvZHkueCA9ICg5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKS0xMTYzKS8yOyAgICAgICBcbiAgICAgICAgdGhpcy5tc2dCb2R5LnkgPSAtNTU3OyAgICAgICBcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLm1zZ0JvZHkse3k6MH0sMjAwLExheWEuRWFzZS5iYWNrT3V0KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5o2i5Zu+ICovXG4gICAgcHJpdmF0ZSBjaGFuZ2VJbWcoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5o2i5qCH6aKYICovXG4gICAgcHJpdmF0ZSBjaGFuZ2VUaXRsZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5paH5a2X6L295YWlICovXG4gICAgcHJpdmF0ZSBjaGFuZ2VXb3JkKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirlhbPpl60gKi9cbiAgICBwdWJsaWMgY2xvc2VEaWFsb2coKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9mZihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZURpYWxvZyk7ICAgICAgICAgICAgICAgIFxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eTotNTU3fSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQsTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLHRoaXMuY2xvc2VPdmVyKSk7ICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3NlT3ZlcigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7ICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVyZmViL1Blb3BsZVwiO1xuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgQ291bnRyeURhdGEsIHsgT3V0Q291bnRyeURhdGEgfSBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IENvbW1vbiBmcm9tXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvQ29tbW9uXCJcbmltcG9ydCBSb2JiZXIgZnJvbVwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL1JvYmJlclwiXG5pbXBvcnQgU2NpZW50aXN0IGZyb20gXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvU2NpZW50aXN0XCI7XG5pbXBvcnQgU3RhciBmcm9tIFwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL1N0YXJcIjtcbmltcG9ydCBCYW5kaXQgZnJvbSBcIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9CYW5kaXRcIjtcbi8qKlxuICog5Lq6IOeuoeeQhlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVNYW5hZ2VyIHtcbiAgICAvKirop4blm74qL1xuICAgIHByaXZhdGUgdmlldzphbnk7IFxuICAgIC8qKuaoquWdkOaghyAqL1xuICAgIHByaXZhdGUgWDpudW1iZXI7XG4gICAgLyoq57q15Z2Q5qCHICovXG4gICAgcHJpdmF0ZSBZOm51bWJlcjtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWimeWGhVxuICAgIC8qKueUn+aIkOmXtOmalOiuoeaXtuWZqCAqL1xuICAgIHByaXZhdGUgY291bnRUaW1lIDogbnVtYmVyID0gMDtcbiAgICAvKirnlJ/kuqfml7bpl7Tpl7TpmpQgKi9cbiAgICBwcml2YXRlIGNvdW50VGltZV8gOiBudW1iZXIgPSA1MDA7XG4gICAgLy/lpJbln47kurrlj6PorqHml7blmahcbiAgICBwcml2YXRlIGNvdW50VGltZV9vdXQgOiBudW1iZXIgPSAwOyAgICBcbiAgICAvKirlpJbln47kurrlj6PnlJ/kuqfpl7TpmpQgKi9cbiAgICBwcml2YXRlIGNvdW50VGltZV9vdXRfIDogbnVtYmVyID0gNTAwO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdHJ1Y3Rvcih2aWV3KVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3PXZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5byA5ZCv55Sf5oiQ5bel5Y6CXG4gICAgICog55Sf5oiQ5Lq6IFxuICAgICAqIOeUn+aIkOS6uueahOS9jee9rlxuICAgICAqIOeUn+S6p+S6uueahHR5cGUg77yaIOWfjumHjOS6ui/ln47lpJbkurog6YC76L6R5YiG5byAXG4gICAgICovXG4gICAgLyoq5byA5ZCv55Sf5oiQ5bel5Y6CICovXG4gICAgcHVibGljIG9wZW5QZW9wbGVGYWN0b3J5KCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmxvb3AoMSx0aGlzLHRoaXMuY3JlYXRlUGVvcGxlKTtcbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurogKi9cbiAgICBwdWJsaWMgY3JlYXRlUGVvcGxlKCk6dm9pZFxuICAgIHtcbiAgICAgICAgaWYodGhpcy5jb3VudFRpbWVfb3V0IDw9IHRoaXMuY291bnRUaW1lX291dF8pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRUaW1lX291dCsrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRUaW1lX291dCA9IDA7XG4gICAgICAgIHRoaXMuY291bnRUaW1lX291dF8gPSBNYXRoLnJhbmRvbSgpKkdhbWVDb25maWcuUEVSU09OX0NSRUFURV9USU1FKjEwMDtcbiAgICAgICAgaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudCA+PSBPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpIHJldHVybjtcbiAgICAgICAgbGV0IGFycmF5OkFycmF5PG51bWJlcj49T3V0Q291bnRyeURhdGEuaW5zXy5nZXRQZXJjZW50QXJlYSgpO1xuICAgICAgICBsZXQgcGVvcGxlO1xuICAgICAgICAvKirnlJ/miJDkuI3lkIzkurrnp43nmoTlh6DnjocgKi9cbiAgICAgICAgbGV0IHJhbmRvbT1NYXRoLnJhbmRvbSgpO1xuICAgICAgICAvL+aZrumAmuS6ulxuICAgICAgICBpZihyYW5kb20+PTAmJnJhbmRvbTxhcnJheVsxXSlcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcImNvbW1vblwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgQ29tbW9uKHRoaXMudmlldyxHYW1lQ29uZmlnLkNPTU1PTl9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+enkeWtpuWutlxuICAgICAgICBlbHNlIGlmKHJhbmRvbT49YXJyYXlbMV0mJnJhbmRvbTxhcnJheVsyXSlcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInNjaWVudGlzdFwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID0gbmV3IFNjaWVudGlzdCh0aGlzLnZpZXcsR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOLHRydWUpO1xuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX291dFBlb3BsZS5wdXNoKHBlb3BsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBwZW9wbGUuY3JlYXRlVGVjaG5vbG9neVRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+aYjuaYn1xuICAgICAgICBlbHNlIGlmKHJhbmRvbT49YXJyYXlbMl0mJnJhbmRvbTxhcnJheVszXSlcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInN0YXJcIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFN0YXIodGhpcy52aWV3LEdhbWVDb25maWcuU1RBUl9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHBlb3BsZS5jcmVhdGVTdGFyVGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8v55uX6LS8XG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj1hcnJheVszXSYmcmFuZG9tPGFycmF5WzRdKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwicm9iYmVyXCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuUk9CQkVSX01BTix0cnVlKTtcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcGVvcGxlLmN1dE1vbmV5VGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8v5Zyf5YyqXG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcImJhbmRpdFwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgQmFuZGl0KHRoaXMudmlldyxHYW1lQ29uZmlnLkJBTkRJVF9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHBlb3BsZS5jdXRNb25leVRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBwZW9wbGUudmlzaWJsZT10cnVlO1xuICAgICAgICBwZW9wbGUuaXNPdXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdldFBvcygpO1xuICAgICAgICBwZW9wbGUuc2V0UG9zKHRoaXMuWCx0aGlzLlkpO1xuICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpO1xuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50Kys7XG4gICAgfVxuXG4gICAgLyoq55Sf5oiQ5Lq655qE5L2N572uICovXG4gICAgcHVibGljIGdldFBvcygpOmFueVxuICAgIHtcbiAgICAgICAgbGV0IHR5cGVOdW09TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMpO1xuICAgICAgICBzd2l0Y2godHlwZU51bSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIC8v5ZyoQei+ueeVjFxuICAgICAgICAgICAgICAgIHRoaXMuWD0wO1xuICAgICAgICAgICAgICAgIHRoaXMuWT1NYXRoLnJhbmRvbSgpKjM5MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvL+WcqELovrnnlYxcbiAgICAgICAgICAgICAgICB0aGlzLlg9TWF0aC5yYW5kb20oKSoyMDAwO1xuICAgICAgICAgICAgICAgIHRoaXMuWT0wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIC8v5ZyoQ+i+ueeVjFxuICAgICAgICAgICAgICAgIHRoaXMuWD0yMDAwO1xuICAgICAgICAgICAgICAgIHRoaXMuWT1NYXRoLnJhbmRvbSgpKjM5MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq55WM6ZmQ5qOA5rWLICoqKioqKioqKioqKioqKioqKioqKiovXG4gICAgXG4gICAgXG4gICAgcHVibGljIGNoZWNrUGVyY2VudChwZW9wbGUsdHlwZTpzdHJpbmcpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v5rWB5Yqo5q+U5L6L5qOA5rWLXG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18ucGVyY2VudDwxKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBlb3BsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWIm+W7uuWimeWGheS6uiAqL1xuICAgIHB1YmxpYyBjcmVhdGVQZW9wbGVfSW5uZXIoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgbGV0IHJhbmRvbVN0cmluZyA7XG4gICAgICAgbGV0IGFyclBlcmNlbnQgPSBbXTsvL+eUn+S6p+avlOS+i1xuICAgICAgIGxldCBhcnJfUGVvcGxlID0gQ291bnRyeURhdGEuaW5zXy5hcnJfUGVvcGxlO1xuICAgICAgIGxldCBudW1iZXIgPSAwO1xuICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xuICAgICAgIGZvcihsZXQgaSA9IDA7aTxhcnJfUGVvcGxlLmxlbmd0aDtpKyspXG4gICAgICAge1xuICAgICAgICAgICAgbnVtYmVyICs9IENvdW50cnlEYXRhLmluc18uZ2V0X1Byb2Zlc3Npb25QZXJjZW50KGFycl9QZW9wbGVbaV0pO1xuICAgICAgICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgfVxuICAgICAgIGNvbnNvbGUubG9nKGFyclBlcmNlbnQpO1xuICAgICAgIExheWEudGltZXIubG9vcCgxLHRoaXMsdGhpcy5nZXRSYW5kb20sW2FyclBlcmNlbnRdKTtcbiAgICB9XG5cbiAgICAvKirnlJ/kuqfkurogKi9cbiAgICBwcml2YXRlIGNyZWF0ZV9Jbm5lcihyYW5kb21TdHJpbmcpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYocmFuZG9tU3RyaW5nID09IFwibm9uZVwiKSByZXR1cm47XG4gICAgICAgIGxldCBwZW9wbGUgPSBMYXlhLlBvb2wuZ2V0SXRlbShyYW5kb21TdHJpbmcpOyAgXG4gICAgICAgIGxldCBjb3VudHJ5RGF0YSA9IENvdW50cnlEYXRhLmluc187XG4gICAgICAgIC8v55Sf5Lqn5Lq656eNXG4gICAgICAgIGNvbnNvbGUubG9nKHJhbmRvbVN0cmluZyk7XG4gICAgICAgIHN3aXRjaChyYW5kb21TdHJpbmcpXG4gICAgICAgIHsgICAgLyoq5bey55Sf5oiQ55qE5Lq656eNICAwIOaZrumAmiAgIDHnp5HlrablrrYgIDLmmI7mmJ8gM+Wcn+WMqiA055uX6LS8Ki9cbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5DT01NT05fTUFOOiAgIFxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVswXSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlJPQkJFUl9NQU46Ly/nm5fotLxcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbNF0rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5CQU5ESVRfTUFOOi8v5Zyf5YyqXG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzNdKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuU1RBUl9NQU46Ly/mmI7mmJ9cbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbMl0rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOOi8v56eR5a2m5a62XG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzFdKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXBlb3BsZSkge2NvbnNvbGUubG9nKFwi5paw5bu65Lq65aSx6LSl77yBXCIpIDtyZXR1cm47fVxuICAgICAgICBwZW9wbGUuaXNPdXQgPSBmYWxzZTtcbiAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfaW5QZW9wbGUucHVzaChwZW9wbGUpOy8v5Yqg5YWl57u05oqk5pWw57uEXG4gICAgICAgIGlmKHBlb3BsZSA9PT0gdW5kZWZpbmVkIHx8IHBlb3BsZSA9PT0gbnVsbCkge2NvbnNvbGUubG9nKFwi5rKh5pyJ55Sf5oiQ5Lq656eN77yB56eN57G7OlwiICsgcmFuZG9tU3RyaW5nKTtyZXR1cm47fVxuICAgICAgICB0aGlzLmNyZWF0ZVBvcyhwZW9wbGUpO1xuICAgICAgICBwZW9wbGUuc3BlY2lhbERvKCk7XG4gICAgICAgIHBlb3BsZS5vcGVuQmVoYXZpb3VyKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKueUn+S6p+S9jee9riAqL1xuICAgIHByb3RlY3RlZCBjcmVhdGVQb3MocGVvcGxlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBob3VzZU5vZGUgPSAodGhpcy52aWV3IGFzIExheWEuU3ByaXRlKS5nZXRDaGlsZEJ5TmFtZSgnaG91c2UnKTtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBob3VzZU5vZGUuX2NoaWxkcmVuLmxlbmd0aC8xMDA7XG4gICAgICAgIGxldCBob3VzZSA7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8IGhvdXNlTm9kZS5fY2hpbGRyZW4ubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwZXJjZW50KjEwMCk7XG4gICAgICAgICAgICBob3VzZSA9IGhvdXNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvdXNlX1wiK251bWJlcik7XG4gICAgICAgICAgICBpZihob3VzZSAhPT0gdW5kZWZpbmVkICYmIGhvdXNlICE9PSBudWxsKSAgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlLnNldFBvcyhob3VzZS54LGhvdXNlLnksaG91c2UpOyAgIFxuICAgICAgICAgICAgICAgIC8vIHBlb3BsZS5wZW9wbGVJbnRvKCk7IFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuiOt+WPlumaj+acuuS6uuenjSAqL1xuICAgIHByaXZhdGUgZ2V0UmFuZG9tKGFyclBlcmNlbnQpIDogc3RyaW5nXG4gICAge1xuICAgICAgICBpZih0aGlzLmNvdW50VGltZSA8PSB0aGlzLmNvdW50VGltZV8pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRUaW1lKys7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudFRpbWVfID0gTWF0aC5yYW5kb20oKSpHYW1lQ29uZmlnLlBFUlNPTl9DUkVBVEVfVElNRSoxMDA7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi55Sf5oiQ6Ze06ZqUOlwiICsgTWF0aC5mbG9vcih0aGlzLmNvdW50VGltZS8xMDApICsgXCJzXCIpO1xuICAgICAgICB0aGlzLmNvdW50VGltZSA9IDA7XG5cbiAgICAgICAgbGV0IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGxldCBwZXJzb24gPSBcIlwiO1xuICAgICAgICBsZXQgaW5kZXggPSB1bmRlZmluZWQ7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyUGVyY2VudC5sZW5ndGggO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIWFyclBlcmNlbnRbaSsxXSkgYnJlYWs7XG4gICAgICAgICAgICBpZihhcnJQZXJjZW50W2ldIDw9IG51bWJlciAmJiBudW1iZXIgPCBhcnJQZXJjZW50W2krMV0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVyc29uID0gQ291bnRyeURhdGEuaW5zXy5hcnJfUGVvcGxlW2ldO1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTsgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXBlcnNvbikge2NvbnNvbGUubG9nKFwi5Lq656eN6ZqP5py65aSx6LSl77yBXCIpO3JldHVybjt9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tXCIgKyBwZXJzb24pO1xuICAgICAgICAvL+WIpOaWreS6uuaYr+WQpui/mOiDveeUn+aIkFxuICAgICAgICBpZihpbmRleCA9PT0gdW5kZWZpbmVkKXtjb25zb2xlLmxvZyhcIuamgueOh+iuoeeul+WHuumUmVwiKTtyZXR1cm47fVxuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbaW5kZXhdID09IENvdW50cnlEYXRhLmluc19bcGVyc29uXSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5nZXRBbHJlYWRDcmVhdGUoKSA9PSBDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXRpb24pIHJldHVybjtcbiAgICAgICAgICAgIHBlcnNvbiA9IHRoaXMuZ2V0UmFuZG9tKGFyclBlcmNlbnQpOyAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYoIXBlcnNvbil7Y29uc29sZS5sb2coXCLkurrnp43pmo/mnLrlpLHotKXvvIFcIik7cmV0dXJuO31cbiAgICAgICB0aGlzLmNyZWF0ZV9Jbm5lcihwZXJzb24pOy8v55Sf5Lqn5Lq656eNIFxuICAgICAgIHJldHVybiBwZXJzb247ICBcbiAgICB9XG5cbiAgICAvKuiOt+WPluW3sueUn+aIkOS6uuWPo+eahOaVsOmHjyovXG4gICAgcHVibGljIGdldEFscmVhZENyZWF0ZSgpIDogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGUubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyICs9Q291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlW2ldXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICB9XG59IiwiaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XG5cbi8qKlxuICogVUnnrqHnkIblmahcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2Vye1xuICAgIC8qKuaVsOaNrueuoeeQhuWZqCAqL1xuICAgIC8vIHB1YmxpYyBzdGF0aWMgZGF0YU1hbmFnZXIgOiBEYXRhTWFuYWdlcjtcbiAgICAvKipVSSBzcHJpdGUgKi9cbiAgICBwcml2YXRlIFVpU3ByaXRlIDogTGF5YS5TcHJpdGU7XG5cbiAgICAvKirovb3lhaXmlbDmja4gKi9cbiAgICBjb25zdHJ1Y3Rvcih1aTpMYXlhLlNwcml0ZSl7XG4gICAgICAgIHRoaXMuVWlTcHJpdGUgPSB1aTtcbiAgICB9XG4gICAgXG4gICAgXG59IiwiLyoqXG4gKiDkuovku7blj5HnlJ/nrqHnkIblmahcbiAqIFxuICogXG4gKiDnlJ/miJDkuovku7bjgIFcbiAqIOW9seWTjeS6uuWPo+a1geWKqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZEV2ZW50TWFuYWdlciB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICAvKirkuovku7bpooTmiqXliLAgKi9cbiAgICBcblxuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xuXG4gICAgXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBCdXlEaWFsb2cgZnJvbSBcIi4vQ29yZS9CdXlEaWFsb2dcIlxuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi9Db3JlL01zZ0RpYWxvZ1wiXG5pbXBvcnQgT3BlbkdhbWUgZnJvbSBcIi4vU2NyaXB0L09wZW5HYW1lXCJcbmltcG9ydCBHYW1lV29ybGQgZnJvbSBcIi4vU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGRcIlxuaW1wb3J0IE9wZW5TdG9yeSBmcm9tIFwiLi9TY3JpcHQvT3BlblN0b3J5XCJcbmltcG9ydCBDZW50ZXIgZnJvbSBcIi4vU2NyaXB0L0NlbnRlclwiXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xNDQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9OTAwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZGhlaWdodFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiU3RhcnRHYW1lLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJDb3JlL0J1eURpYWxvZy50c1wiLEJ1eURpYWxvZyk7XG4gICAgICAgIHJlZyhcIkNvcmUvTXNnRGlhbG9nLnRzXCIsTXNnRGlhbG9nKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5HYW1lLnRzXCIsT3BlbkdhbWUpO1xuICAgICAgICByZWcoXCJTY3JpcHQvR2FtZVdvcmxkL0dhbWVXb3JsZC50c1wiLEdhbWVXb3JsZCk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9PcGVuU3RvcnkudHNcIixPcGVuU3RvcnkpO1xuICAgICAgICByZWcoXCJTY3JpcHQvQ2VudGVyLnRzXCIsQ2VudGVyKTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XG5jbGFzcyBNYWluIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xuXHRcdGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XG5cblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlO1xuXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xuXHR9XG5cblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcblx0fVxuXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXG5cdFx0R2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xuXHR9XG59XG4vL+a/gOa0u+WQr+WKqOexu1xubmV3IE1haW4oKTtcbiIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IENvdW50cnlEYXRhLCB7IE91dENvdW50cnlEYXRhIH0gZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBUb29sIGZyb20gXCIuLi9Ub29sL1Rvb2xcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IFBlb3BsZU1hbmFnZXIgZnJvbSBcIi4uL0NvcmUvUGVvcGxlTWFuYWdlclwiO1xuXG4vKipcbiAqIFxuICog5Lq656eN54i257G7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZSB7XG4gICAgLyoq5Zy65pmvKi9cbiAgICBwcm90ZWN0ZWQgdmlldyA6IExheWEuU3ByaXRlO1xuICAgIC8qKueyvueBtSAqL1xuICAgIHB1YmxpYyBzcCA6IExheWEuU3ByaXRlO1xuICAgIC8qKuaoquWdkOagh+enu+WKqOmAn+W6piAqL1xuICAgIHByaXZhdGUgZGlyWDpudW1iZXI7XG4gICAgLyoq57q15Z2Q5qCH56e75Yqo6YCf5bqmICovXG4gICAgcHJpdmF0ZSBkaXJZOm51bWJlcjtcbiAgICBcbiAgICAvKioqKioqKioqKioqKioqKioqKuWimeWGhSAqKioqKioqKioqKiovXG4gICAgLyoq5aKZ5YaF5Lq66L+Y5piv5aKZ5aSW5Lq6ICovXG4gICAgcHVibGljIGlzT3V0IDogYm9vbGVhbjtcbiAgICAvKirkurrlsZ7mgKcgKi9cbiAgICBwdWJsaWMgdHlwZTpzdHJpbmc7XG4gICAgLyoq5Lq655qE5pyd5ZCRICovXG4gICAgcHVibGljIHRvd2FyZCA6IGFueTtcbiAgICAvKirpnaLliY3nmoQ15Liq5qOA5rWL54K5ICovXG4gICAgcHVibGljIHRvd2FyZFBvcyA6IEFycmF5PGFueT47XG4gICAgLyoq5Lq655qE56e75Yqo55uu5qCH54K5ICovXG4gICAgcHVibGljIHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirlh7rnlJ/ngrkgKi9cbiAgICBwdWJsaWMgYm9ybk5vZGUgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirmmK/lkKbooqvlj6zllKQgKi9cbiAgICBwdWJsaWMgaXNHbyA6IG51bWJlcjtcbiAgICAvKirpgJLlvZLlgZzmraLlj5jph48gKi9cbiAgICBwcml2YXRlIHN0b3BEaSA6IG51bWJlcjtcbiAgICAvKirlj4LogIPpgJ/luqYgKi9cbiAgICBwcml2YXRlIHNwZWVkIDogbnVtYmVyO1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmlzT3V0ID0gaXNPdXQ7XG4gICAgICAgIHRoaXMudHlwZT10eXBlO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlKTtcbiAgICAgICAgdGhpcy5pbml0KHR5cGUpO1xuICAgIH1cblxuICAgIC8qKuWIneWni+WMliAqL1xuICAgIHByaXZhdGUgaW5pdCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v5pWw5o2u5Yid5aeL5YyWXG4gICAgICAgIHRoaXMuc2V0RGF0YUluaXQoKTtcbiAgICAgICAgLy/liJvlu7pcbiAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUodHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5pWw5o2u5Yid5aeL5YyWICovXG4gICAgcHJpdmF0ZSBzZXREYXRhSW5pdCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IENvdW50cnlEYXRhLmluc18uZ2V0TW92ZVNwZWVkKCk7XG4gICAgICAgIHRoaXMudG93YXJkID0ge1xuICAgICAgICAgICAgeDoxMDAwLFxuICAgICAgICAgICAgeTowLFxuICAgICAgICAgICAgc3BlZWQ6dGhpcy5zcGVlZCxyb3RhdGlvbjp1bmRlZmluZWQsXG4gICAgICAgICAgICB0YXJnZXRSb3RhdGlvbjp1bmRlZmluZWQsXG4gICAgICAgICAgICByb3RhdGlvbkNoYW5nZSA6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50b3dhcmRQb3MgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5zdG9wRGkgPSAwO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirlvIDlp4vooYzliqggKi9cbiAgICBwdWJsaWMgb3BlbkJlaGF2aW91cigpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v6L+Q6KGM5LqG6YC76L6RXG4gICAgICAgIGlmKHRoaXMuaXNPdXQpIFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBlb3BsZV9Qb3NPdXQoKTtcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKE91dENvdW50cnlEYXRhLmluc18ubGltaXRUaW1lKjYwLHRoaXMsdGhpcy5saW1pdFRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zSW5uZXIoKTtcbiAgICAgICAgICAgIExheWEudGltZXIubG9vcCgxNix0aGlzLHRoaXMucGVvcGxlX1Bvc0lubmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uiAqL1xuICAgIHByaXZhdGUgY3JlYXRlUGVvcGxlKHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlU3AodHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5Yib5bu6U3ByaXRlICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTcCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBpbWdVcmwgPSBcIm1hcC9cIit0eXBlK1wiLnBuZ1wiO1xuICAgICAgICBpZighdGhpcy5zcClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zcCA9IG5ldyBMYXlhLlNwcml0ZSgpO1xuICAgICAgICAgICAgdGhpcy52aWV3LmFkZENoaWxkKHRoaXMuc3ApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3AubG9hZEltYWdlKGltZ1VybCk7XG4gICAgICAgIHRoaXMuc3Auc2l6ZSgxMiwxMik7XG4gICAgICAgIHRoaXMuc3AucGl2b3QodGhpcy5zcC53aWR0aC8yLHRoaXMuc3AuaGVpZ2h0LzIpOyAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq6K6+572u5Yid5aeL5L2N572uICovXG4gICAgcHVibGljIHNldFBvcyh4LHksc3A6TGF5YS5TcHJpdGUpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3AueCA9IHg7XG4gICAgICAgIHRoaXMuc3AueSA9IHk7XG4gICAgICAgIHRoaXMuYm9ybk5vZGUgPSBzcDtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5aKZ5aSW5Lq66KGM5Yqo6YC76L6RKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwcml2YXRlIHBlb3BsZV9Qb3NPdXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pa55ZCR77yM5pa55ZCR55SoKC0xfjEp6KGo56S6XG4gICAgICAgIGlmKHRoaXMuc3AueDw9OTAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5zcC54Pj0xMTAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgICAgfVxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtO+8jOWcqOatpOaXtumXtOWGheenu+WKqCzpmo/mnLrml7bpl7TlnKgoMiw4KeS4remAieaLqVxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjYrMjtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMuY2xvc2VNb3ZlVGltZXIpO1xuICAgICAgICAvL+W8gOWQr+enu+WKqFxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xuICAgIH1cbiAgICBcbiAgICAvKirljZXkvY3luKfnp7vliqgqL1xuICAgIHByaXZhdGUgbW92ZURpc3RhbmNlKCk6dm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcC54Kz10aGlzLmRpclg7XG4gICAgICAgIHRoaXMuc3AueSs9dGhpcy5kaXJZO1xuICAgIH1cblxuICAgIC8qKuWFs+mXreenu+WKqOWumuaXtuWZqO+8jOW8gOWQr+WOn+WcsOS8keaBryovXG4gICAgcHJpdmF0ZSBjbG9zZU1vdmVUaW1lcigpOnZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIC8v5LyR5oGv5pe26Ze057uT5p2f5ZCO57un57ut56e75YqoXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNisyO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5wZW9wbGVfUG9zT3V0KTtcbiAgICB9XG4gICAgXG4gICAgLyoq5rue55WZ5pe26Ze077yM6Iul6LaF6L+H5pe26Ze077yM5bCx56a75byA5aSW5Z+OICovXG4gICAgcHJpdmF0ZSBsaW1pdFRpbWUoKTp2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICBpZih0aGlzLnNwLng8PTEwMDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcbiAgICB9XG5cbiAgICBcblxuICAgIC8qKueisOaSnuajgOa1iyAqL1xuICAgIHByaXZhdGUgY2hlY2tMaW1pdF9PdXQoKTp2b2lkXG4gICAge1xuICAgICAgICAvL+i+ueeVjOajgOa1i1xuICAgICAgICBpZih0aGlzLnNwLng8LTV8fHRoaXMuc3AueD4yMDA1fHx0aGlzLnNwLnk8LTUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdG9yeVBlb3BsZSgpO1xuICAgICAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudC0tO1xuICAgICAgICAgICAgaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSozO1xuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNyZWF0ZVBlb3BsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL+aKpOWfjuays+ajgOa1i1xuICAgICAgICBpZih0aGlzLnNwLnk+PTM5MClcbiAgICAgICAge1xuICAgICAgICAgICAgLy/ph43mlrDnu5nkuIDkuKrkvY3np7tcbiAgICAgICAgICAgICAgICB0aGlzLmRpclk9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL+WfjumXqOWMuuWfn+ajgOa1i1xuICAgICAgICBpZih0aGlzLnNwLng+OTMyJiZ0aGlzLnNwLng8MTA2OCYmdGhpcy5zcC55PjM1MCYmdGhpcy5zcC55PDM5MClcbiAgICAgICAge1xuICAgICAgICAgICAgLy/ln47pl6jmmK/lkKbmiZPlvIBcbiAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy/ln47lpJbkurrlj6MtMVxuICAgICAgICAgICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQtLTtcbiAgICAgICAgICAgICAgICAvL+WbveWutuS6uuWPoysxXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5wb3B1bGF0aW9uKys7XG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5faW5uZXJQZW9wbGUrKztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZUludG8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5aKZ5YaF5Lq66KGM5Yqo6YC76L6RKi9cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirlopnlhoXkurrooYzliqjpgLvovpEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXG4gICAge1xuXG4gICAgICAgIC8vIHRoaXMudG93ZWRUb01vdmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VHJhZ2V0KHRhcmdldDpMYXlhLlNwcml0ZSkgOiB2b2lkXG4gICAge1xuICAgICAgICAvLyB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXQ7XG4gICAgICAgIC8v5rWL6K+VXG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IHRhcmdldDtcbiAgICAgICAgLy8gdGhpcy50b3dhcmQueCA9IHRhcmdldC54O1xuICAgICAgICAvLyB0aGlzLnRvd2FyZC55ID0gdGFyZ2V0Lnk7XG4gICAgfVxuXG4gICAgLyoqdG93ZXJk6L2s5YyW5oiQ5L2N56e7ICovXG4gICAgcHJvdGVjdGVkIHRvd2VkVG9Nb3ZlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZighdGhpcy50b3dhcmQucm90YXRpb24pIHRoaXMudG93YXJkLnJvdGF0aW9uID0gVG9vbC5yb3RhdGVSb3BlUG9pbnRfMih0aGlzLnNwLngsdGhpcy5zcC55LHRoaXMudGFyZ2V0Tm9kZS54LHRoaXMudGFyZ2V0Tm9kZS55KTs7XG4gICAgICAgIHRoaXMucGVvcGxlVG93ZXJkKCk7Ly/orqnnm67moIfmnJ3lkJHorqHnrpfmlbBcbiAgICB9XG5cbiAgICAvKirmnJ3lkJEgIHRvd2VyZOenu+WKqCAqL1xuICAgIHByaXZhdGUgcG9zTW92ZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcC54ICs9IHRoaXMudG93YXJkLnNwZWVkKlRvb2wucm90YXRpb25TZXQodGhpcy50b3dhcmQucm90YXRpb24sXCJzaW5cIik7XG4gICAgICAgIHRoaXMuc3AueSArPSB0aGlzLnRvd2FyZC5zcGVlZCpUb29sLnJvdGF0aW9uU2V0KHRoaXMudG93YXJkLnJvdGF0aW9uLFwiY29zXCIpO1xuICAgICAgICB0aGlzLnNwLnJvdGF0aW9uID0gdGhpcy50b3dhcmQucm90YXRpb247XG4gICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMudGFyZ2V0Tm9kZSx0aGlzLnNwKSkge1xuICAgICAgICAgICAgaWYodGhpcy50YXJnZXROb2RlLm5hbWUgPT09IFwic3BfZG9vclwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ29PdXQodGhpcy50eXBlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUodHJ1ZSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5kb29yUGVvcGxlX1RvT3V0KCk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zcC54IDwgMCB8fCB0aGlzLnNwLnkgPiA5MDAgfHwgdGhpcy5zcC54ID4gMjAwMCkge3RoaXMuZGVzdG9yeVBlb3BsZSgpO31cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zcC5yb3RhdGlvbik7XG4gICAgfVxuICAgIFxuICAgIC8qKuS6uumdouWQkSAqL1xuICAgIHByb3RlY3RlZCBwZW9wbGVUb3dlcmQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKCk7Ly/ojrflvpfkupTkuKrngrnvvIzmoLnmja7nm67moIflnZDmoIforqHnrpdcbiAgICAgICAgdGhpcy50ZXN0VG93ZXJkKCk7Ly/mo4DmtYvmmK/lkKbnrKblkIjopoHmsYIg5LiN56ym5ZCIICsgLSA1XG4gICAgfVxuXG4gICAgLyoq5qOA5rWL6KGM6LWw5pa55ZCRICovXG4gICAgcHJvdGVjdGVkIHRlc3RUb3dlcmQoKSA6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGxldCBwb3dlciA9IHRoaXMudGVzdENvbGlkZXIoKTsvLyAtMSAwIDEgMiAzIDQgNVxuICAgICAgICBpZihwb3dlciA+IDApXG4gICAgICAgIHsvL+aSnuWIsOS6humcgOimgei9rOaWueWQkVxuICAgICAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2UgPSAwO1xuICAgICAgICAgICAgdGhpcy5zcGVlZEN0cihwb3dlcik7XG4gICAgICAgICAgICB0aGlzLmp1ZGdlTGVmdFJpZ2h0KCk7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucG9zTW92ZSgpOy8v56e75YqoXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maW5kVGFyZ2V0KCk7XG4gICAgICAgIHRoaXMudG93YXJkLnNwZWVkID0gdGhpcy5zcGVlZDsgICAgICBcbiAgICAgICAgdGhpcy5wb3NNb3ZlKCk7Ly/np7vliqggIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKirpgJ/luqbmjqfliLYgKi9cbiAgICBwcml2YXRlIHNwZWVkQ3RyKHBvd2VyKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudG93YXJkLnNwZWVkID0gdGhpcy5zcGVlZCooKHBvd2VyKzEpLyh0aGlzLnRvd2FyZFBvcy5sZW5ndGgrMikpOyBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzcGVlZCA6OlwiICsgdGhpcy50b3dhcmQuc3BlZWQpO1xuICAgIH1cblxuICAgIC8qKuWIpOaWreaWueWQkSAqL1xuICAgIHByb3RlY3RlZCBqdWRnZUxlZnRSaWdodCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zdG9wRGkrKztcbiAgICAgICAgaWYodGhpcy5zdG9wRGk+MzYpIHt0aGlzLnN0b3BEaSA9IDA7cmV0dXJuO31cbiAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2UgKz0gR2FtZUNvbmZpZy5URVNUX1BPSU5UX1JPO1xuICAgICAgICBsZXQgcm8xID0gdGhpcy50b3dhcmQucm90YXRpb24gLSB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZTtcbiAgICAgICAgbGV0IHJvMiA9IHRoaXMudG93YXJkLnJvdGF0aW9uICsgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2U7XG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKHJvMSk7XG4gICAgICAgIGxldCBudW1SbzEgPSB0aGlzLnRlc3RDb2xpZGVyKCk7XG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKHJvMik7XG4gICAgICAgIGxldCBudW1SbzIgPSB0aGlzLnRlc3RDb2xpZGVyKCk7XG4gICAgICAgIGlmKG51bVJvMSA9PSAtMSkge3RoaXMudG93YXJkLnJvdGF0aW9uID0gcm8xOyByZXR1cm47fVxuICAgICAgICBpZihudW1SbzIgPT0gLTEpIHt0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvMjsgcmV0dXJuO31cbiAgICAgICAgdGhpcy5qdWRnZUxlZnRSaWdodCgpO1xuICAgIH1cblxuICAgIC8qKmZpbmRUYXJnZXTlr7vmib7nm67moIcgKi9cbiAgICBwcml2YXRlIGZpbmRUYXJnZXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBDYSA9IHRoaXMudG93YXJkLnJvdGF0aW9uIC0gdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb247XG4gICAgICAgIGlmKENhID4gMCkgdGhpcy50b3dhcmQucm90YXRpb24gLT0gNTtcbiAgICAgICAgICAgIGVsc2UgaWYoIENhIDwgMCApIHRoaXMudG93YXJkLnJvdGF0aW9uICs9NTtcbiAgICAgICAgaWYoIE1hdGguYWJzKENhKSA8IDUpIHRoaXMudG93YXJkLnJvdGF0aW9uICs9IENhO1xuICAgIH0gICBcblxuICAgIC8qKuajgOa1i+aYr+WQpueisOaSniDmkp7liLDkuobov5Tlm550dXJlIC0x5Y+v5Lul6LWwIDDku6XkuIrooajnpLrnorDmkp7liLDlk6rkuKrngrkqL1xuICAgIHByb3RlY3RlZCB0ZXN0Q29saWRlcigpIDogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgbnVtID0gLTE7XG4gICAgICAgIGxldCBhcmVhIDogQXJyYXk8TGF5YS5TcHJpdGU+PSBEYXRhTWFuYWdlci5pbnNfLmFycl9SaWdodEFyZWE7XG4gICAgICAgIGlmKHRoaXMuc3AueDw5ODEpIGFyZWEgPSBEYXRhTWFuYWdlci5pbnNfLmFycl9MZWZ0QXJlYTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhcmVhLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMuYm9ybk5vZGUsdGhpcy5zcCkpIHtyZXR1cm4gLTE7fVxuICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QoYXJlYVtpXSx0aGlzLnNwKSl7cmV0dXJuIDA7fS8v5aaC5p6c5bey57uP5pKe5LiK5LqG44CCICAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBoID0gMDtoPHRoaXMudG93YXJkUG9zLmxlbmd0aDtoKyspXG4gICAgICAgICAgICB7Ly/kupTkuKrngrnmo4DmtYtcbiAgICAgICAgICAgICAgICBpZihUb29sLmJsb2NrVGVzdCh0aGlzLnRhcmdldE5vZGUsdGhpcy50b3dhcmRQb3NbaF0pKXtyZXR1cm4tMTt9XG4gICAgICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QoYXJlYVtpXSx0aGlzLnRvd2FyZFBvc1toXSkpXG4gICAgICAgICAgICAgICAgey8v56a75Lq65pyA6L+R55qE54K5XG4gICAgICAgICAgICAgICAgICAgIG51bSA9IGgrMTsvLzHvvIwy77yMM++8jDTvvIw1XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW07XG4gICAgfVxuXG4gICAgLyoq5Lq66Z2i5ZCR55qE5LqU5Liq5qOA5rWL54K5ICovXG4gICAgcHJvdGVjdGVkIGdldFRvd2VyZFBvcyhyb3RhdGlvblRlc3Q/KSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCByb3RhdGlvbiA9IHRoaXMudG93YXJkLnJvdGF0aW9uOy8v5L2/55So5b2T5YmN6Z2i5ZCRXG4gICAgICAgIGlmKHJvdGF0aW9uVGVzdCkgcm90YXRpb24gPSByb3RhdGlvblRlc3Q7XG4gICAgICAgIGVsc2UgdGhpcy5rZWVwVG93ZXJkRGF0YSgpOy8v5L+d5a2YIOeOsOWcqOS4uuatouWIsOebruagh+eCueeahOinkuW6plxuICAgICAgICBpZihyb3RhdGlvbiA9PT0gdW5kZWZpbmVkKSBcbiAgICAgICAgey8v5aaC5p6c6KeS5bqm5pivdW5kZWZcbiAgICAgICAgICAgIHJvdGF0aW9uID0gdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb24vL+ebruagh+inkuW6pu+8jOWIneWni+inkuW6piAgIFxuICAgICAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5L2N56e76ZyA6KaB55qE5Y+Y6YePXG4gICAgICAgIGxldCBjb3MgOiBudW1iZXIgPSBUb29sLnJvdGF0aW9uU2V0KHJvdGF0aW9uLFwiY29zXCIpO1xuICAgICAgICBsZXQgc2luIDogbnVtYmVyID0gVG9vbC5yb3RhdGlvblNldChyb3RhdGlvbixcInNpblwiKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLXg6OlwiICsgdGhpcy5zcC54ICsgXCJ5OjpcIiArIHRoaXMuc3AueSk7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8R2FtZUNvbmZpZy5URVNUX1BPSU5UX0NPVU5UO2krKykvL+iusOW9leS6lOS4qlxuICAgICAgICB7IFxuICAgICAgICAgICAgaWYoIXRoaXMudG93YXJkUG9zW2ldKSB0aGlzLnRvd2FyZFBvc1tpXSA9IHt9OyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRvd2FyZFBvc1tpXS54ID0gdGhpcy5zcC54ICsgR2FtZUNvbmZpZy5URVNUX1BPSU5UX0RJQypzaW4qKGkrMSk7XG4gICAgICAgICAgICB0aGlzLnRvd2FyZFBvc1tpXS55ID0gdGhpcy5zcC55ICsgR2FtZUNvbmZpZy5URVNUX1BPSU5UX0RJQypjb3MqKGkrMSk7IFxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG93YXJkUG9zKTtcbiAgICB9XG5cbiAgICAvKirkv53lrZggdG93ZXLkv6Hmga8gKi9cbiAgICBwcm90ZWN0ZWQga2VlcFRvd2VyZERhdGEoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v5a2Y5YKo546w5Zyo54K55Yiw55uu5qCH6KeS5bqmXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICB0aGlzLnRvd2FyZC50YXJnZXRSb3RhdGlvbiA9IFRvb2wucm90YXRlUm9wZVBvaW50XzIodGhpcy5zcC54LHRoaXMuc3AueSx0aGlzLnRhcmdldE5vZGUueCx0aGlzLnRhcmdldE5vZGUueSk7XG4gICAgfVxuXG4gICAgLyoq5Zyo6L+Q6KGM56e75Yqo6YC76L6R5LmL5YmNIOeahOeJueauiuaTjeS9nCAqL1xuICAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLyoqKlxuICAgICAqIOi/m+eoiyAvIOWHuuWfjumAu+i+kSBcbiAgICAgKiBAdHlwZSB0cnVl6L+b5Z+OICBmYWxzZeWHuuWfjlxuICAgICovXG4gICAgcHVibGljIHBlb3BsZUdvKHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgICAgIGlmKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAvL+i/m+WfjuaWueazlVxuICAgICAgICAgICAgICAgIHRoaXMub3V0UGVvcGxlX1RvRG9vcigpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy/lh7rln47mlrnms5VcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZU91dCgpO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuWfjuWkluW8uuWItui/m+mXqCAqL1xuICAgIHByaXZhdGUgb3V0UGVvcGxlX1RvRG9vcigpOnZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XG4gICAgICAgIGxldCBkaXJYPTEwMDAtdGhpcy5zcC54O1xuICAgICAgICBsZXQgZGlyWT00MTAtdGhpcy5zcC55O1xuICAgICAgICBsZXQgZGlzPU1hdGguc3FydChNYXRoLnBvdygxMDAwLXRoaXMuc3AueCwyKStNYXRoLnBvdyg0MTAtdGhpcy5zcC55LDIpKTtcbiAgICAgICAgdGhpcy5kaXJYPWRpclgvZGlzO1xuICAgICAgICB0aGlzLmRpclk9ZGlyWS9kaXM7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcbiAgICB9XG5cbiAgICAvKirpl6jlvLrliLblh7rln47lpJYgKi9cbiAgICBwcml2YXRlIGRvb3JQZW9wbGVfVG9PdXQoKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlzT3V0ID0gdHJ1ZTtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcbiAgICAgICAgbGV0IHg9TWF0aC5yYW5kb20oKSoxMzYrOTMyO1xuICAgICAgICBsZXQgeT0zNTA7XG4gICAgICAgIHRoaXMuc2V0UG9zKHgseSx0aGlzLnNwKTtcbiAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCkqMi0xO1xuICAgICAgICB0aGlzLmRpclk9LU1hdGgucmFuZG9tKCkqMC43LTAuMjtcbiAgICAgICAgLy8gdGhpcy5vcGVuQmVoYXZpb3VyKCk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcbiAgICB9XG5cbiAgIC8qKuWHuuWfjumAu+i+kSAqL1xuICAgcHJvdGVjdGVkIHBlb3BsZU91dCgpIDogdm9pZFxuICAge1xuICAgICAgICB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJzcF9kb29yXCIpIGFzIExheWEuU3ByaXRlKTsvL+iuvue9ruebruagh+aYr+mXqFxuICAgfVxuXG4gICAvKirov5vln47mlrnms5Ug5LuO5q2j6Zeo5Yiw5p+Q5LiA5Liq5L2P5a6FKi9cbiAgIHByb3RlY3RlZCBwZW9wbGVJbnRvKCkgOiB2b2lkXG4gICB7XG4gICAgICAgIGxldCBib3JuTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcInNwX2Rvb3JcIikgYXMgTGF5YS5TcHJpdGU7XG4gICAgICAgIHRoaXMuaXNPdXQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xuICAgICAgICB0aGlzLnNldFBvcyhib3JuTm9kZS54LGJvcm5Ob2RlLnkgKyA0MCxib3JuTm9kZSk7XG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xuICAgICAgICB0aGlzLm9wZW5CZWhhdmlvdXIoKTtcbiAgIH1cblxuICAgLyoq5LuOaG91c2XkuK3ojrflj5Yg5LiA5Liq6ZqP5py655qE54K5ICovXG4gICBwcm90ZWN0ZWQgZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKSA6IExheWEuU3ByaXRlXG4gICB7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKCgoaG91c2VOb2RlIGFzIExheWEuU3ByaXRlKS5fY2hpbGRyZW4ubGVuZ3RoLTEpKnJhbmRvbSk7XG4gICAgICAgIGxldCB0YXJnZXROb2RlIDpMYXlhLlNwcml0ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIgLS0tLS0tLS0tIGdldFRhcmdldCBcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5kZXggOjpcIiArIGluZGV4KTtcbiAgICAgICAgaWYoaW5kZXggPj0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGhvdXNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvdXNlX1wiK2luZGV4KTtcbiAgICAgICAgICAgIGlmKHRhcmdldE5vZGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwi6ZqP5py65pWw5Y+W6ZSZXCIpO1xuICAgICAgICAvLyB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XG4gICB9XG5cbiAgICAvKirkurrmtojlpLEgaXNyZWNvdmVy5LiN5Zue5pS25ZCXICovXG4gICAgcHJvdGVjdGVkIGRlc3RvcnlQZW9wbGUobm90UmVjb3Zlcj8pIDogdm9pZFxuICAgIHsgICBcbiAgICAgICAgaWYoIW5vdFJlY292ZXIpIExheWEuUG9vbC5yZWNvdmVyKHRoaXMudHlwZSx0aGlzKTtcbiAgICAgICAgdGhpcy5zcC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XG4gICAgICAgIC8vXG4gICAgICAgIGlmKCF0aGlzLmlzT3V0KSB0aGlzLmRlc3RvcnlJbm5lcigpO1xuICAgIH1cblxuICAgIC8qKuWimeWGheS6uuWIoOmZpCDnibnmrorlpITnkIYgKi9cbiAgICBwcm90ZWN0ZWQgZGVzdG9yeUlubmVyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+iuoeaXtuWZqOa4healmlxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5wZW9wbGVfUG9zSW5uZXIpO1xuICAgICAgICBzd2l0Y2godGhpcy50eXBlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuQ09NTU9OX01BTjpcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMF0+MClcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMF0tLTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuQkFORElUX01BTjpcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbM10+MClcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbM10tLTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuUk9CQkVSX01BTjpcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbNF0+MClcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbNF0tLTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuU0NJRU5USVNUX01BTjpcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMV0+MClcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMV0tLTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuU1RBUl9NQU46XG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzJdPjApXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzJdLS07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZSk7XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYW5kaXQgZXh0ZW5kcyBQZW9wbGV7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5oqi5Yqr55qE5pa55byPLOWFiOe7meS6iOaXtumXtCAqL1xyXG4gICAgcHVibGljIGN1dE1vbmV5VGltZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtOi/m+ihjOWBt+eblyg1LTgp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo1KzM7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5YG355uXXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuQ3V0TW9uZXkpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIC8v5pe26Ze05ZCO5oqi5YqrXHJcbiAgICBwcml2YXRlIEN1dE1vbmV5KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByYW5kb209TWF0aC5yYW5kb20oKTtcclxuICAgICAgICBpZihyYW5kb208MC41KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/miqLliqvmiJDlip9cclxuICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5tb25leT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTArMTApO1xyXG4gICAgICAgICAgICB0aGlzLmxvd1N1cHBvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7Tov5vooYzlgbfnm5coNS04KeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNSszO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOWBt+ebl1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLkN1dE1vbmV5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpmY3kvY7lubjnpo/luqYgKi9cclxuICAgIHByaXZhdGUgbG93U3VwcG9ydCgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXJTdXBwb3J0LT0wLjE7XHJcbiAgICB9XHJcblxyXG4gICAvKirlopnlhoXpgLvovpEgKi9cclxuICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICAvLyB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcInBhbGFjZVwiKSBhcyBMYXlhLlNwcml0ZSk7XHJcbiAgICAgICB0aGlzLnRvd2VkVG9Nb3ZlKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKumHjeWGmXNwZWNpYWxkbyAqL1xyXG4gICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIGxldCBob3VzZU5vZGUgPSB0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKTtcclxuICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICBmb3IobGV0IGk9MDt0cnVlO2krKylcclxuICAgICAgIHtcclxuICAgICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgICAgIGlmKHRhcmdldE5vZGUgIT09IHRoaXMuYm9ybk5vZGUpIGJyZWFrO1xyXG4gICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xyXG4gICAgICAgIHRoaXMuY3V0TW9uZXlUaW1lKCk7XHJcbiAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XG5pbXBvcnQgVG9vbCBmcm9tIFwiLi4vLi4vVG9vbC9Ub29sXCI7XG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi8uLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24gZXh0ZW5kcyBQZW9wbGV7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTsgICAgICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5aKZ5YaF6YC76L6RICovXG4gICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xuICAgICAgICB0aGlzLnRvd2VkVG9Nb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXG4gICAgcHJvdGVjdGVkIHNwZWNpYWxEbygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy/ojrflj5bljaDmr5TmlbDnu4RcbiAgICAgICAgbGV0IGFycl9wZXJjZW50ID0gVG9vbC5nZXRQZXJjZW50QXJlYShDb3VudHJ5RGF0YS5pbnNfLmFycl9wZXJzb25QZXJjZW50TmFtZSk7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyX3BlcmNlbnQubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIWFycl9wZXJjZW50W2krMV0pIGJyZWFrO1xuICAgICAgICAgICAgaWYoYXJyX3BlcmNlbnRbaV0gPCByYW5kb20gJiYgcmFuZG9tIDw9IGFycl9wZXJjZW50W2krMV0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpIHtjb25zb2xlLmxvZyhcIuamgueOh+iuoeeul+WHuumUmVwiKTtyZXR1cm47fVxuICAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XG4gICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XG4gICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xuICAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoKGluZGV4KVxuICAgICAgICB7ICAgIC8qKjAt5Yy755SfIDEt6K2m5a+fIDIt5ZWG5Lq6IC0z5ri45omL5aW96ZeyIC005Yac5rCRKi9cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcImhvc3BpdGFsXCIpIGFzIExheWEuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTsgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZU91dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwiZmFybVwiKSBhcyBMYXlhLlNwcml0ZSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9iYmVyIGV4dGVuZHMgUGVvcGxle1xyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlgbflj5botKLmlL/nmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3V0TW9uZXlUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze06L+b6KGM5YG355uXKDMtNinliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjMrMztcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzlgbfnm5dcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxMCx0aGlzLHRoaXMuQ3V0TW9uZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pe26Ze05ZCO5YG35Y+WXHJcbiAgICBwcml2YXRlIEN1dE1vbmV5KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByYW5kb209TWF0aC5yYW5kb20oKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy/lgbfnm5fmiJDlip9cclxuICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5tb25leS09TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcclxuICAgICAgICAgICAgdGhpcy5sb3dTdXBwb3J0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7Tov5vooYzlgbfnm5coMy02KeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMyszO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOWBt+ebl1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEwLHRoaXMsdGhpcy5DdXRNb25leSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZmN5L2O5bm456aP5bqmICovXHJcbiAgICBwcml2YXRlIGxvd1N1cHBvcnQoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgQ291bnRyeURhdGEuaW5zXy5wb3B1bGFyU3VwcG9ydC09MC4wNTtcclxuICAgIH1cclxuICAgIC8qKuWimeWGhSAqL1xyXG4gICAvKirlopnlhoXpgLvovpEgKi9cclxuICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICAvLyB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcInBhbGFjZVwiKSBhcyBMYXlhLlNwcml0ZSk7XHJcbiAgICAgICB0aGlzLnRvd2VkVG9Nb3ZlKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKumHjeWGmXNwZWNpYWxkbyAqL1xyXG4gICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIGxldCBob3VzZU5vZGUgPSB0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKTtcclxuICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICBmb3IobGV0IGk9MDt0cnVlO2krKylcclxuICAgICAgIHtcclxuICAgICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgICAgIGlmKHRhcmdldE5vZGUgIT09IHRoaXMuYm9ybk5vZGUpIGJyZWFrO1xyXG4gICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xyXG4gICAgICAgIHRoaXMuY3V0TW9uZXlUaW1lKCk7XHJcbiAgIH1cclxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5pbXBvcnQgVG9vbCBmcm9tIFwiLi4vLi4vVG9vbC9Ub29sXCI7XHJcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NpZW50aXN0IGV4dGVuZHMgUGVvcGxle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xyXG4gICAgICAgIHN1cGVyKHZpZXcsdHlwZSxpc091dCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKuS6p+eUn+enkeaKgOeahOaWueW8jyzlhYjnu5nkuojml7bpl7QgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVUZWNobm9sb2d5VGltZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtCgxLTMp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSoyKzE7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5Lqn55Sf56eR5oqA5YC8XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuY3JlYXRlVGVjaG5vbG9neSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Lqn55Sf56eR5oqA5YC8ICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVRlY2hub2xvZ3koKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgQ291bnRyeURhdGEuaW5zXy50ZWNobm9sb2d5Kz0wLjU7XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7QoMS0zKeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMisxO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOS6p+eUn+enkeaKgOWAvFxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLmNyZWF0ZVRlY2hub2xvZ3kpO1xyXG4gICAgfVxyXG4gICAgLyoq5aKZ5YaF6YC76L6RICovXHJcbiAgICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirph43lhplzcGVjaWFsZG8gKi9cclxuICAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRlY2hub2xvZ3lcIikgYXMgTGF5YS5TcHJpdGUpOyAgICBcclxuICAgICAgICB0aGlzLmNyZWF0ZVRlY2hub2xvZ3lUaW1lKCk7ICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5pbXBvcnQgVG9vbCBmcm9tIFwiLi4vLi4vVG9vbC9Ub29sXCI7XHJcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhciBleHRlbmRzIFBlb3BsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirmmI7mmJ/mlYjlupTnmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3JlYXRlU3RhclRpbWUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7QoMS0zKeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMisxO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOS6p+eUn+aViOW6lOWAvFxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLmNyZWF0ZVN0YXJWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Lqn55Sf5pWI5bqU5YC8IOaViOW6lOWAvOS4uuW5uOemj+W6piovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVN0YXJWYWx1ZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXJTdXBwb3J0Kz0wLjU7XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7QoMS0zKeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMisxO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOS6p+eUn+enkeaKgOWAvFxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLmNyZWF0ZVN0YXJWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAvKirlopnlhoXpgLvovpEgKi9cclxuICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICAvLyB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcInBhbGFjZVwiKSBhcyBMYXlhLlNwcml0ZSk7XHJcbiAgICAgICB0aGlzLnRvd2VkVG9Nb3ZlKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKumHjeWGmXNwZWNpYWxkbyAqL1xyXG4gICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIGxldCBob3VzZU5vZGUgPSB0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKTtcclxuICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICBmb3IobGV0IGk9MDt0cnVlO2krKylcclxuICAgICAgIHtcclxuICAgICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgICAgIGlmKHRhcmdldE5vZGUgIT09IHRoaXMuYm9ybk5vZGUpIGJyZWFrO1xyXG4gICAgICAgfVxyXG4gICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XHJcbiAgICAgICB0aGlzLmNyZWF0ZVN0YXJUaW1lKCk7XHJcbiAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbnRlciBleHRlbmRzIExheWEuU2NyaXB0e1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIgKyB0aGlzLnNjcmVlbldpZHRoKTtcbiAgICAgICAgaWYoc2NyZWVuV2lkdGggPCA4MDApICh0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lKFwiZ2FtZU5hbWVcIikgYXMgTGF5YS5MYWJlbCkuZm9udFNpemUgPSAxMjU7XG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuU3ByaXRlKS54ID0gKHNjcmVlbldpZHRoLSA2NjcpLzI7ICAgICAgXG4gICAgfVxufSIsImltcG9ydCBXb3JsZEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9Xb3JsZEV2ZW50TWFuYWdlclwiO1xuaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vLi4vdWkvbGF5YU1heFVJXCI7XG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvVUlNYW5hZ2VyXCI7XG5pbXBvcnQgUGVvcGxlTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9QZW9wbGVNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcbmltcG9ydCBNc2dEaWFsb2cgZnJvbSBcIi4uLy4uL0NvcmUvTXNnRGlhbG9nXCI7XG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBCdXlEaWFsb2cgZnJvbSBcIi4uLy4uL0NvcmUvQnV5RGlhbG9nXCI7XG5pbXBvcnQgUGVvcGxlIGZyb20gXCIuLi8uLi9QZXJmZWIvUGVvcGxlXCI7XG5cbi8qKlxuICog5LiW55WM566h55CG5Zmo6ISa5pysXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXb3JsZCBleHRlbmRzIHVpLkdhbWVXb3JsZFVJe1xuICAgIC8qKkRhdGFNYW5hZ2VyICDljZXkvosgKi9cbiAgICAvKirkuovku7blj5HnlJ/lmaggKi9cbiAgICBwcml2YXRlIHdvcmxkRXZlbnRNYW5hZ2VyIDogV29ybGRFdmVudE1hbmFnZXI7XG4gICAgLyoq5Lq657G7566h55CG5ZmoKi9cbiAgICBwcml2YXRlIHBlb3BsZU1hbmFnZXIgOiBQZW9wbGVNYW5hZ2VyO1xuICAgIC8qKlVJ566h55CG5ZmoICovXG4gICAgcHJpdmF0ZSB1aU1hbmFnZXIgOiBVSU1hbmFnZXI7XG4gICAgLyoq5raI5oGv6YCa55So5qGGICovXG4gICAgcHJpdmF0ZSBtc2dEaWFsb2cgOiBNc2dEaWFsb2c7XG4gICAgLyoq6LSt5Lmw5qGGICovXG4gICAgcHJpdmF0ZSBidXlEaWFsb2c6QnV5RGlhbG9nO1xuICAgIFxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKuWxj+W5leWuveW6piAqL1xuICAgIHByaXZhdGUgc2NyZWVuV2lkdGggOiBudW1iZXI7XG4gICAgLyoq6byg5qCH5piv5ZCm5oyJ5LiLICovXG4gICAgcHJpdmF0ZSBpc0Rvd24gOiBib29sZWFuO1xuICAgIC8qKum8oOagh+eCueiusOW9lSAqL1xuICAgIHByaXZhdGUgbW91c2VQb3MgOiBhbnk7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKjJtaW7orqHml7YgKi9cbiAgICBwcml2YXRlIHRpbWVyQ291bnQgOiBudW1iZXI7XG4gICAgLyoq5Ye66Ze06ZqU6K6h5pe2ICovXG4gICAgcHJpdmF0ZSB0aW1lckNvdW50X291dCA6IG51bWJlcjtcbiAgICAvKirov5sgKi9cbiAgICBwcml2YXRlIHRpbWVyQ291bnRfaW4gOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZ2FtZURhdGFJbml0KCk7Ly/muLjmiI/lj5jph4/liJ3lp4vljJZcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpOy8v57uZ5qGl5re75Yqg5LqL5Lu2IFxuICAgICAgICB0aGlzLnNjcmVlblNldHRpbmcoKTsvL+Wxj+W5leWxheS4rVxuICAgICAgICB0aGlzLmdhbWVTdGFydCgpOy8v5ri45oiP5rWB56iL5byA5aeLXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc18uc2V0QXJlYSh0aGlzLnNwX3NjZW5lLmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikpO1xuICAgICAgICBMYXlhLnRpbWVyLmxvb3AoMTAwMCx0aGlzLHRoaXMuY3VycmVudFJhdGlvKTtcbiAgICB9XG5cbiAgICAvKirmlbDmja7liJ3lp4vljJYgKi9cbiAgICBwcml2YXRlIGdhbWVEYXRhSW5pdCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy53b3JsZEV2ZW50TWFuYWdlciA9IG5ldyBXb3JsZEV2ZW50TWFuYWdlcigpO1xuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIgPSBuZXcgUGVvcGxlTWFuYWdlcih0aGlzLnNwX3NjZW5lKTtcbiAgICAgICAgdGhpcy51aU1hbmFnZXIgPSBuZXcgVUlNYW5hZ2VyKHRoaXMuc3BfVUkpO1xuICAgICAgICB0aGlzLm1zZ0RpYWxvZyA9IG5ldyBNc2dEaWFsb2coKTsgICAgICBcbiAgICAgICAgdGhpcy5idXlEaWFsb2c9bmV3IEJ1eURpYWxvZygpO1xuICAgICAgICB0aGlzLm1vdXNlUG9zID0ge307XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZXJDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudGltZXJDb3VudF9vdXQgPSAwO1xuICAgICAgICB0aGlzLnRpbWVyQ291bnRfaW4gPSAwO1xuICAgIH1cblxuICAgIC8qKua3u+WKoOS6i+S7tiAqL1xuICAgIHByaXZhdGUgYWRkRXZlbnQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8vIHRoaXMuc3RhZ2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLGZ1bmN0aW9uKGUpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIC8vIH0pXG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLHRoaXMsdGhpcy5tb3VzZURvd24pO1xuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfVVAsdGhpcyx0aGlzLm1vdXNlVXApO1xuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfTU9WRSx0aGlzLHRoaXMubW91c2VNb3ZlKTtcbiAgICAgICAgLy/nu5npl6jluK7ngrnngrnlh7vkuosgICBcbiAgICAgICAgdGhpcy5jbGlja0hvdXNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmRvb3JDdHIpO1xuICAgICAgICB0aGlzLmNsaWNrSG91c2Uub24oTGF5YS5FdmVudC5NT1VTRV9PVkVSLHRoaXMsdGhpcy5tb3VzZU92ZXIpO1xuICAgICAgICB0aGlzLmNsaWNrSG91c2Uub24oTGF5YS5FdmVudC5NT1VTRV9PVkVSLHRoaXMsdGhpcy5tb3VzZU91dCk7XG4gICAgICAgIC8v5Yy76aaG5LqL5Lu257uR5a6aXG4gICAgICAgIHRoaXMuaG9zcGl0YWwub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuSE9TUElUQUxdKTtcbiAgICAgICAgLy/lhpvpmJ/kuovku7bnu5HlrppcbiAgICAgICAgdGhpcy5hcm15Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkFSTVldKTtcbiAgICAgICAgLy/nsq7ku5Pkuovku7bnu5HlrppcbiAgICAgICAgdGhpcy5mYXJtLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkZBUk1dKTsgICAgICAgIFxuICAgICAgICAvL+enkeaKgOmmhuS6i+S7tue7keWumlxuICAgICAgICB0aGlzLnRlY2hub2xvZ3kub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuVEVDSE5PTE9HWV0pOyAgICAgICAgXG4gICAgICAgIC8v5paw6Ze754K55LqL5Lu257uR5a6aXG4gICAgICAgIC8vdGhpcy5ldmVudEhvdXNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkVWRU5UX0hPVVNFXSk7ICAgICBcbiAgICAgICAgLy/mlrDpl7vnmoflrqvnu5HlrppcbiAgICAgICAgdGhpcy5wYWxhY2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuUEFMQUNFXSk7XG4gICAgfVxuXG4gICAgLyoq5bGP5bmVIOWxgOS4rSovXG4gICAgcHJpdmF0ZSBzY3JlZW5TZXR0aW5nKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aWR0aFwiICsgdGhpcy5zY3JlZW5XaWR0aCk7XG4gICAgICAgIHRoaXMuc3Bfc2NlbmUueCA9IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKS8yO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+S6i+S7tuWbnuiwg1xuICAgIC8qKum8oOagh+aCrOa1riAqL1xuICAgIHByaXZhdGUgbW91c2VPdmVyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmNsaWNrSG91c2UubG9hZEltYWdlKFwibWFwL2Rvb3JIb3VzZTIucG5nXCIpO1xuICAgIH1cblxuICAgIC8qKuemu+W8gCAqL1xuICAgIHByaXZhdGUgbW91c2VPdXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuY2xpY2tIb3VzZS5sb2FkSW1hZ2UoXCJtYXAvZG9vckhvdXNlLnBuZ1wiKTtcbiAgICB9XG5cbiAgICAvKirpl6jnmoTlvIDlhbMgKi9cbiAgICBwcml2YXRlIGRvb3JDdHIoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbilcbiAgICAgICAgey8v5byA6ZeoXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZG9vckNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7Ly/lhbPpl6hcbiAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRvb3JPcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirlhbPpl6ggKi9cbiAgICBwcml2YXRlIGRvb3JDbG9zZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoIXRoaXMuYW5pMS5pc1BsYXlpbmcpIHRoaXMuYW5pMS5wbGF5KDAsZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKuW8gOmXqCAqL1xuICAgIHByaXZhdGUgZG9vck9wZW4oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKCF0aGlzLmFuaTIuaXNQbGF5aW5nICYmICF0aGlzLmFuaTEuaXNQbGF5aW5nKSB0aGlzLmFuaTIucGxheSgwLGZhbHNlKTtcblxuICAgIH1cblxuICAgIC8qKuenu+WKqCAqL1xuICAgIHByaXZhdGUgbW91c2VNb3ZlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZighdGhpcy5pc0Rvd24pIHJldHVybjtcbiAgICAgICAgaWYodGhpcy5tb3VzZVBvcy54KVxuICAgICAgICB7XG4gICAgICAgICAgIHRoaXMuc3Bfc2NlbmUueCArPSBMYXlhLnN0YWdlLm1vdXNlWCAtIHRoaXMubW91c2VQb3MueDsgXG4gICAgICAgIC8vICAgIHRoaXMuc3Bfc2NlbmUueSArPSBMYXlhLnN0YWdlLm1vdXNlWSAtIHRoaXMubW91c2VQb3MueDtcbiAgICAgICAgICAgIGlmKHRoaXMuc3Bfc2NlbmUueCA+IDApICB0aGlzLnNwX3NjZW5lLnggPSAwO1xuICAgICAgICAgICAgaWYodGhpcy5zcF9zY2VuZS54IDwgLSgyMDAwLXRoaXMuc2NyZWVuV2lkdGgpKSB0aGlzLnNwX3NjZW5lLnggPSAgLSgyMDAwLXRoaXMuc2NyZWVuV2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW91c2VQb3MueCA9IExheWEuc3RhZ2UubW91c2VYO1xuICAgICAgICB0aGlzLm1vdXNlUG9zLnkgPSBMYXlhLnN0YWdlLm1vdXNlWTtcbiAgICB9XG5cbiAgICAvKirmi5bliqjmjInkuIsgKi9cbiAgICBwcml2YXRlIG1vdXNlRG93bigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKuaLluWKqOaKrOi1tyAqL1xuICAgIHByaXZhdGUgbW91c2VVcCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLHRoaXMubW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTsgXG4gICAgICAgIHRoaXMubW91c2VQb3MueCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy55ID0gdW5kZWZpbmVkOyAgICAgICBcbiAgICB9XG5cblxuICAgIC8qKueCueWHuyDojrflj5blu7rnrZHkv6Hmga8gKi9cbiAgICBwcml2YXRlIG9uSG91c2VJbmZvKHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5tc2dEaWFsb2cuc2hvd01zZyh0eXBlKTtcbiAgICB9XG5cbiAgICAvKirmm7TmlrBVSeagj+S6lOWkp+S4u+WAvOS/oeaBryAqL1xuICAgIHByaXZhdGUgdXBkYXRlVUlNYWluRGF0YSgpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudGV4dF9jb3VudF9wb3B1bGF0aW9uLnRleHQ9TWF0aC5jZWlsKENvdW50cnlEYXRhLmluc18ucG9wdWxhdGlvbikudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy50ZXh0X2NvdW50X3BvcHVsYXJTdXBwb3J0LnRleHQ9TWF0aC5jZWlsKENvdW50cnlEYXRhLmluc18ucG9wdWxhclN1cHBvcnQpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudGV4dF9jb3VudF9tb25leS50ZXh0PU1hdGguY2VpbChDb3VudHJ5RGF0YS5pbnNfLm1vbmV5KS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnRleHRfY291bnRfdGVjaG5vbG9neS50ZXh0PU1hdGguY2VpbChDb3VudHJ5RGF0YS5pbnNfLnRlY2hub2xvZ3kpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudGV4dF9jb3VudF9wcmVzdGlnZS50ZXh0PU1hdGguY2VpbChDb3VudHJ5RGF0YS5pbnNfLnByZXN0aWdlKS50b1N0cmluZygpO1xuICAgIH1cbiAgICBcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0t56iA5pyJ6ZeoXG4gICAgLyoq6LSt5Lmw56iA5pyJ6ZeoICovXG4gICAgcHVibGljIGJ1eVJhcmVEb29yKCk6dm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuICAgIC8vLy8vLy8vLy8vL+a4uOaIj+a1geeoi+W8gOWniy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLyoq5ri45oiP5rWB56iL5byA5aeLICovXG4gICAgcHJpdmF0ZSBnYW1lU3RhcnQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudXBkYXRlVUlNYWluRGF0YSgpO1xuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIub3BlblBlb3BsZUZhY3RvcnkoKTsvL+S6uuWPo+eUn+aIkOmAu+i+kei/kOihjFxuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIuY3JlYXRlUGVvcGxlX0lubmVyKCk7Ly/lhoXkurrlj6PnlJ/miJBcbiAgICAgICAgQ291bnRyeURhdGEuaW5zXy5vcGVuVGltZXIoKTtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMudXBkYXRlVUlNYWluRGF0YSk7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+S6uuWPo+a1geWKqOmAmuefpeWZqFxuICAgIC8qKlxuICAgICAqIOa1geWKqOavlOS+i++8jCDpgJrnn6XlmahcbiAgICAgKiBcbiAgICAgKiAgKi9cbiAgICBwcml2YXRlIGN1cnJlbnRSYXRpbygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy50aW1lckNvdW50Kys7XG4gICAgICAgIHRoaXMudGltZXJDb3VudF9vdXQrKztcbiAgICAgICAgdGhpcy50aW1lckNvdW50X2luKys7XG4gICAgICAgIGxldCBjb3VudHJ5RGF0YSA9IENvdW50cnlEYXRhLmluc187XG4gICAgICAgIGxldCBCSSA9IGNvdW50cnlEYXRhLnBlcmNlbnQ7ICAgLy/ov5sv5Ye6XG4gICAgICAgIGxldCBvdXRlclRhcmdldCA9IGNvdW50cnlEYXRhLmV4aXRQZW9wbGU7Ly/lh7rpl6jnm67moIfmlbBcbiAgICAgICAgbGV0IGlubmVyVGFnZXQgPSBjb3VudHJ5RGF0YS5lbnRlclBlb3BsZTsvL+i/m+mXqOebruagh+aVsFxuICAgICAgICBsZXQgX291dGVyID0gY291bnRyeURhdGEuX291dGVyUGVvcGxlOy8v5Ye65Z+O5Y+j5a6e6ZmF5YC8XG4gICAgICAgIGxldCBfaW5uZXIgPSBjb3VudHJ5RGF0YS5faW5uZXJQZW9wbGU7Ly/lhaXln47lrp7pmYXlgLxcbiAgICAgICAgbGV0IGxhc3RUaW1lID0gMTIwIC0gdGhpcy50aW1lckNvdW50IC0gNTsvL+iOt+WPluWJqeS9meaXtumXtO+8jOWkmumihOaUrzEw56eSXG5cbiAgICAgICAgY29uc29sZS5sb2coXCLov5vlh7rmr5TkvotcIiArIEJJKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLlh7rpl6jnm67moIfmlbA6OlwiICsgb3V0ZXJUYXJnZXQgICsgXCIgIHx8fCAg5a6e6ZmF5Ye66Zeo5pWw77ya77yaXCIgKyBfb3V0ZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIui/m+mXqOebruagh+aVsDo6XCIgKyBpbm5lclRhZ2V0ICArIFwiICB8fHwgIOWunumZhei/m+mXqOaVsO+8mu+8mlwiICsgX2lubmVyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLliankuIvml7bpl7TvvJrvvJpcIiArIGxhc3RUaW1lKTtcblxuICAgICAgICBpZihvdXRlclRhcmdldCA+IF9vdXRlcilcbiAgICAgICAge1xuICAgICAgICAgICAgLy/pgJrnn6VcbiAgICAgICAgICAgIGlmKHRoaXMudGltZXJDb3VudF9vdXQgPj0gbGFzdFRpbWUvKG91dGVyVGFyZ2V0IC0gX291dGVyKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lckNvdW50X291dCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoaW5uZXJUYWdldCA+IF9pbm5lcilcbiAgICAgICAge1xuICAgICAgICAgICAgLy/pgJrnn6UgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVyQ291bnRfaW4gPj0gbGFzdFRpbWUvKG91dGVyVGFyZ2V0IC0gX2lubmVyKSkgIFxuICAgICAgICAgICAgY291bnRyeURhdGEucGVvcGxlR29PdXQodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnRpbWVyQ291bnQgPj0gMTIwKVxuICAgICAgICB7ICAgXG4gICAgICAgICAgICB0aGlzLnRpbWVyQ291bnRfaW4gPSAwO1xuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50X291dCA9IDA7XG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5fb3V0ZXJQZW9wbGUgPSAwOy8v5a6e6ZmF5YC85b2S6Zu2XG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5faW5uZXJQZW9wbGUgPSAwOy8v5a6e6ZmF5YC85b2S6Zu2XG4gICAgICAgICAgICB0aGlzLnRpbWVyQ291bnQgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8b3V0ZXJUYXJnZXQtX291dGVyO2krKykvL+mAmuefpeWHuuWfjlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KGZhbHNlKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7aTxpbm5lclRhZ2V0LV9pbm5lcjtpKyspLy/pgJrnn6Xov5vnqItcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dCh0cnVlKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuR2FtZSBleHRlbmRzIExheWEuU2NyaXB0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG4gICAgXG5cbiAgICBvbkNsaWNrKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lV29ybGQuc2NlbmVcIik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5TdG9yeSBleHRlbmRzIExheWEuU2NyaXB0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG4gICAgXG5cbiAgICBvbkNsaWNrKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lU3Rvcnkuc2NlbmVcIik7XG4gICAgfVxufSIsImltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29se1xuICAgIC8v6I635Y+W5LiJ6KeS5Ye95pWw5YC8XG4gICAgcHVibGljIHN0YXRpYyByb3RhdGlvbkRlYWwoZng6bnVtYmVyLGZ5Om51bWJlcixzeDpudW1iZXIsc3k6bnVtYmVyLGdldFN0cmluZykgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIC8qKuaWnOi+uSAqL1xuICAgICAgICBsZXQgYyA6IG51bWJlciA9IE1hdGguc3FydChNYXRoLnBvdyhmeCAtIHN4LDIpICsgTWF0aC5wb3coZnkgLSBzeSwyKSk7XG4gICAgICAgIC8qKuS4tOi+uSAqL1xuICAgICAgICBsZXQgYSA6IG51bWJlciA9IHN4IC0gZng7XG4gICAgICAgIC8qKuWvuei+uSAqL1xuICAgICAgICBsZXQgYiA6IG51bWJlciA9IHN5IC0gZnk7XG4gICAgICAgIFxuICAgICAgICBpZihnZXRTdHJpbmcgPT0gXCJzaW5cIilcbiAgICAgICAge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiNzaW4gPT1cIiArIChiL2MpKTtcbiAgICAgICAgICAgIHJldHVybiAoYi9jKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGdldFN0cmluZyA9PSBcImNvc1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiI2NvcyA9PVwiICsgKGEvYykpO1xuICAgICAgICAgICAgcmV0dXJuIChhL2MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiN0YW4gPT1cIiArIChiL2EpKTsvL+Wvuei+uSDmr5Qg5Li06L65IFxuICAgICAgICAgICAgcmV0dXJuIChiL2EpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq56Kw5pKe5qOA5rWLIGRpY051bSDvvJrpooTorr7ot53nprsgb2JqZWN0MeWSjG9iamVjdDLkvKDlhaVzcHJpdGUs5piv5oyJ54Wn5q+P5Liqc3ByaXRl55qE6ZSa54K55Zyo5Lit5b+D5L2N572u5p2l6K6h566X55qEICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29sbGlzaW9uQ2hlY2sob2JqZWN0MSxvYmplY3QyKSA6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmKE1hdGguYWJzKG9iamVjdDEueCAtIG9iamVjdDIueCk8IG9iamVjdDEud2lkdGgvMiArIG9iamVjdDIud2lkdGgvMiYmXG4gICAgICAgICAgIE1hdGguYWJzKG9iamVjdDEueSAtIG9iamVjdDIueSkgPCBvYmplY3QxLmhlaWdodC8yICsgb2JqZWN0Mi5oZWlnaHQvMil7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRlUm9wZVBvaW50XzIoeCx5LFgsWSk6bnVtYmVyXG4gICAge1xuICAgICAgICAgICAgbGV0IGNvcz1Ub29sLnJvdGF0aW9uRGVhbCh4LHksWCxZLFwiY29zXCIpO1xuICAgICAgICAgICAgbGV0IHNpbj1Ub29sLnJvdGF0aW9uRGVhbCh4LHksWCxZLFwic2luXCIpO1xuICAgICAgICAgICAgbGV0IHJvdGF0aW9uO1xuICAgICAgICAgICAgaWYoY29zPj0wJiZzaW4+MCl7XG4gICAgICAgICAgICAgICAgcm90YXRpb249IDE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpLTkwO1xuICAgICAgICAgICAgfWVsc2UgaWYoY29zPDAmJnNpbj49MCl7XG4gICAgICAgICAgICAgICAgcm90YXRpb249MTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyktOTA7XG4gICAgICAgICAgICB9ZWxzZSBpZihjb3M8PTAmJnNpbjwwKXtcbiAgICAgICAgICAgICAgICByb3RhdGlvbj05MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvcz4wJiZzaW48PTApe1xuICAgICAgICAgICAgICAgIHJvdGF0aW9uPSA5MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHkgPCBZKSByb3RhdGlvbiArPSAxODA7XG4gICAgICAgICAgICByZXR1cm4gcm90YXRpb247XG4gICAgfVxuXG4gICAgLyoq6I635Y+W6KeS5bqmIFxuICAgICAqIOenu+WKqOeCueWcqOWJjVxuICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRSb3RhdGlvbih4MSx5MSx4Mix5MikgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCBjb3M9VG9vbC5yb3RhdGlvbkRlYWwoeDEseTEseDIseTIsXCJjb3NcIik7XG4gICAgICAgIGxldCBzaW49VG9vbC5yb3RhdGlvbkRlYWwoeDEseTEseDIseTIsXCJzaW5cIik7XG4gICAgICAgIGxldCByb3RhdGlvbjtcbiAgICAgICAgaWYoY29zID49MCAmJiBzaW4+MCl7XG4gICAgICAgICAgICByb3RhdGlvbiA9IDkwICsgMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29zIDwwICYmIHNpbj49MCl7XG4gICAgICAgICAgICByb3RhdGlvbiA9IC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgfVxuICAgICAgICBpZihjb3MgPjAgJiYgc2luPD0wKVxuICAgICAgICB7XG4gICAgICAgICAgICByb3RhdGlvbiA9IC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgfVxuICAgICAgICBpZihjb3MgPD0wICYmIHNpbjwwKVxuICAgICAgICB7XG4gICAgICAgICAgICByb3RhdGlvbiA9IDE4MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm90YXRpb247XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiByb3RhdGlvbiA9IDQ1IOinkuW6plxuICAgICAqIOaxgiBjb3Mg6L+Y5pivIHNpblxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRpb25TZXQocm90YXRpb24sdHlwZVN0cmluZykgIDogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgciA7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYocm90YXRpb24gPCAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByb3RhdGlvbiArPSAzNjAqKE1hdGguYWJzKE1hdGguZmxvb3Iocm90YXRpb24vMzYwKSsyKSk7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYoTWF0aC5mbG9vcihyb3RhdGlvbi8zNjApPjApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJvdGF0aW9uIC09IDM2MCpNYXRoLmZsb29yKHJvdGF0aW9uLzM2MCk7XG4gICAgICAgIH1cbiAgICAgICAgciA9IChyb3RhdGlvbikvMTgwKk1hdGguUEk7ICAgICAgICBcbiAgICAgICAgaWYodHlwZVN0cmluZyA9PSBcImNvc1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKE1hdGguY29zKHIpKTtcbiAgICAgICAgICAgIGlmKChyb3RhdGlvbiA+IDAgJiYgcm90YXRpb24gPD0gOTApIHx8IChyb3RhdGlvbj4yNzAgJiYgcm90YXRpb248PTM2MCkpICB2YWx1ZSA9IC12YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29zOjpcIiArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHsgICAgICAgICBcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5hYnMoTWF0aC5zaW4ocikpO1xuICAgICAgICAgICAgaWYoKHJvdGF0aW9uPjE4MCAmJiByb3RhdGlvbiA8PSAyNzApIHx8IChyb3RhdGlvbj4yNzAgJiYgcm90YXRpb248PTM2MCkpIHZhbHVlID0gLXZhbHVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaW46OlwiICsgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZSAgICAgICAgXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOi3neemu+iuoeeul1xuICAgICAqIDIg5a+56LGhXG4gICAgICogZmlyc3RcbiAgICAgKiBzZWNvbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvdW50RGljX09iamVjdChmOmFueSxzOmFueSkgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coZi54IC0gcy54LDIpICsgTWF0aC5wb3coZi55IC0gcy55LDIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmlrnlnZfmo4DmtYsgXG4gICAgICogXG4gICAgICog5pa55Z2X5a+56LGhIHNwXG4gICAgICog5qOA5rWL55qE54K5IOWvueixoVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBibG9ja1Rlc3Qoc3AscG9pbnQpIDogYm9vbGVhblxuICAgIHtcbiAgICAgICAgaWYoIXNwIHx8ICFwb2ludCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgcG9pbnRMZWZ0IDogYW55ID17eDpzcC54IC0gc3Aud2lkdGgvMix5OnNwLnktc3AuaGVpZ2h0LzJ9O1xuICAgICAgICBsZXQgcG9pbnRSaWdodCA6IGFueSA9e3g6c3AueCArIHNwLndpZHRoLzIseTpzcC55K3NwLmhlaWdodC8yfTtcbiAgICAgICAgbGV0IHNfcG9pbnRMZWZ0ID0gcG9pbnQueCA+IHBvaW50TGVmdC54ICYmIHBvaW50Lnk+cG9pbnRMZWZ0Lnk7XG4gICAgICAgIGxldCBzX3BvaW50UmlnaHQgPSBwb2ludC54IDwgcG9pbnRSaWdodC54ICYmIHBvaW50Lnk8cG9pbnRSaWdodC55O1xuICAgICAgICBpZihzX3BvaW50TGVmdCAmJiBzX3BvaW50UmlnaHQpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdhbWVEYXRhIC0gQ291bnRyeURhdGFcbiAgICAgKiDljaDmr5Qg5pWw57uEXG4gICAgKuiOt+WPluWMuumXtOaVsOe7hCAwLDAuOCwwLjgzLDAuODQsMC45LDFcbiAgICAgKiBAYXJyIOWxnuaAp+WQjeWtl1xuICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRQZXJjZW50QXJlYShhcnIpOkFycmF5PG51bWJlcj5cbiAgICB7XG4gICAgICAgIGxldCBhcnJQZXJjZW50ID0gW107Ly/nlJ/kuqfmr5TkvotcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xuICAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlciArPSBDb3VudHJ5RGF0YS5pbnNfW2FycltpXV07XG4gICAgICAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyUGVyY2VudDtcbiAgICB9XG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xuaW1wb3J0IFNjZW5lPUxheWEuU2NlbmU7XG5leHBvcnQgbW9kdWxlIHVpIHtcclxuICAgIGV4cG9ydCBjbGFzcyBCdXlVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgYmc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9idXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ1eV9uYW1lOmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBidXlfaW5wdXQ6TGF5YS5UZXh0SW5wdXQ7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnV5X3ByaWNlOmxheWEuZGlzcGxheS5UZXh0O1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiQnV5XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBHYW1lV29ybGRVSSBleHRlbmRzIFNjZW5lIHtcclxuXHRcdHB1YmxpYyBhbmkxOkxheWEuRnJhbWVBbmltYXRpb247XG5cdFx0cHVibGljIGFuaTI6TGF5YS5GcmFtZUFuaW1hdGlvbjtcblx0XHRwdWJsaWMgc3Bfc2NlbmU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2dyb3VuZDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGV2ZW50SG91c2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzExOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcGFsYWNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3NwaXRhbDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xOTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRlY2hub2xvZ3k6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIxOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgZmFybTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMxOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBhcm15OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9yaXZlcjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3Bfd2FsbDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfZG9vcjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgY2xpY2tIb3VzZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfVUk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGltZ19wb3B1bGF0aW9uOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3BvcHVsYXRpb246bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ19wb3B1bGFyU3VwcG9ydDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9wb3B1bGFyU3VwcG9ydDpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX21vbmV5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X21vbmV5OmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfdGVjaG5vbG9neTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF90ZWNobm9sb2d5OmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfcHJlc3RpZ2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfcHJlc3RpZ2U6bGF5YS5kaXNwbGF5LlRleHQ7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJHYW1lV29ybGRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBtb2R1bGUgdWkuRGlhIHtcclxuICAgIGV4cG9ydCBjbGFzcyBDdXJyZW50RGlhbG9nVUkgZXh0ZW5kcyBTY2VuZSB7XHJcblx0XHRwdWJsaWMgbXNnQm9keTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3ByaXRlX1BlcnNvbjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3ByaXRlX01zZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnRuX2Nsb3NlOkxheWEuU3ByaXRlO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiRGlhL0N1cnJlbnREaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHIiXX0=
