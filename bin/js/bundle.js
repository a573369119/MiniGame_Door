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
    /**加入数组 isOut是否在外面*/
    CountryData.prototype.addArray = function (isOut, obj) {
        var arr = this.arr_inPeople;
        if (isOut)
            arr = this.arr_outPeople;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
                arr[i] = obj;
                return;
            }
        }
        arr.push(obj);
    };
    /**移除数组 isOut是否在外面 */
    CountryData.prototype.deleteArray = function (isOut, obj) {
        var arr = this.arr_inPeople;
        if (isOut)
            arr = this.arr_outPeople;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === obj) {
                arr[i] === undefined;
                return;
            }
        }
    };
    /**数组转移 城外-》城内 或城内到城外  是否是[城外转城内]  转移对象*/
    CountryData.prototype.moveArray = function (isOut, obj) {
        this.addArray(!isOut, obj); //加入城内数组
        this.deleteArray(isOut, obj); //移除城外数组
    };
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
        Laya.timer.clearAll(people);
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
        //测试
        this.sp.zOrder = 11;
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
            // if(OutCountryData.ins_.outCount<OutCountryData.ins_.maxCount-1)
            // {
            //     let time=Math.random()*3;
            //     Laya.timer.frameOnce(time*60,this,this.createPeople);
            // }
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
                //
                DataManager_1.default.ins_._innerPeople++;
                // if(OutCountryData.ins_.outCount<OutCountryData.ins_.maxCount-1)
                // {
                //     let time=Math.random()*3;
                //     Laya.timer.frameOnce(time*60,this,createPeople);
                // }
                DataManager_1.default.ins_.moveArray(true, this);
                this.peopleInto();
                // CountryData.ins_.cal_MainData(GameConfig.MAIN_POPULATION,1);
                // if(OutCountryData.ins_.outCount<OutCountryData.ins_.maxCount-1)
                // {
                //     let time=Math.random()*3;
                //     Laya.timer.frameOnce(time*60,this,this.create    People);
                // }
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
            if (this.targetNode.name == "sp_door") {
                DataManager_1.default.ins_.goOut(this.type);
                this.destoryPeople(true);
                DataManager_1.default.ins_.moveArray(false, this);
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
    People.prototype.clearTimer = function () {
        Laya.timer.clear(this, this.checkLimit_Out);
        Laya.timer.clear(this, this.limitTime);
        Laya.timer.clear(this, this.people_PosInner);
        Laya.timer.clear(this, this.closeMoveTimer);
        Laya.timer.clear(this, this.moveDistance);
        Laya.timer.clear(this, this.people_PosOut);
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
        if (!sp)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXIyLjAvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvQnV5RGlhbG9nLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0JhbmRpdC50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvQ29tbW9uLnRzIiwic3JjL1BlcmZlYi9kaWZmX1Blb3BsZS9Sb2JiZXIudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL1NjaWVudGlzdC50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvU3Rhci50cyIsInNyYy9TY3JpcHQvQ2VudGVyLnRzIiwic3JjL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzIiwic3JjL1NjcmlwdC9PcGVuR2FtZS50cyIsInNyYy9TY3JpcHQvT3BlblN0b3J5LnRzIiwic3JjL1Rvb2wvVG9vbC50cyIsInNyYy91aS9sYXlhTWF4VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVkE7SUFBQTtJQWdFQSxDQUFDO0lBL0RHLGNBQWM7SUFDQSxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxtQkFBUSxHQUFZ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RSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELFFBQVE7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLG9CQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMvRSxRQUFRO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxvQkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkUsUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLFNBQVM7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLG9CQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNuRixTQUFTO1FBQ1QsMkZBQTJGO1FBQzNGLFFBQVE7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFD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LENBQUE7SUFDRDtRQUFpQywrQkFBSztRQTZEbEM7bUJBQWUsaUJBQU87UUFBQSxDQUFDO1FBQ3ZCLG9DQUFjLEdBQWQ7WUFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDTCxrQkFBQztJQUFELENBbEVBLEFBa0VDLENBbEVnQyxLQUFLLEdBa0VyQztJQWxFWSxjQUFXLGNBa0V2QixDQUFBO0FBQ0wsQ0FBQyxFQWpGYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFpRmY7QUFDRCxXQUFjLEVBQUU7SUFBQyxJQUFBLEdBQUcsQ0FZbkI7SUFaZ0IsV0FBQSxHQUFHO1FBQ2hCO1lBQXFDLG1DQUFLO1lBS3RDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2Qix3Q0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUNMLHNCQUFDO1FBQUQsQ0FWQSxBQVVDLENBVm9DLEtBQUssR0FVekM7UUFWWSxtQkFBZSxrQkFVM0IsQ0FBQTtJQUNMLENBQUMsRUFaZ0IsR0FBRyxHQUFILE1BQUcsS0FBSCxNQUFHLFFBWW5CO0FBQUQsQ0FBQyxFQVphLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQVlmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWcge1xuICAgIC8qKuS6uuenjSAtIOaZrumAmuS6uiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQ09NTU9OX01BTiA6IHN0cmluZyA9IFwiY29tbW9uXCI7XG4gICAgLyoq5Lq656eNIC0g55uX6LS8ICovXG4gICAgcHVibGljIHN0YXRpYyBST0JCRVJfTUFOIDogc3RyaW5nID0gXCJyb2JiZXJcIjtcbiAgICAvKirkurrnp40gLSDlnJ/ljKogKi9cbiAgICBwdWJsaWMgc3RhdGljIEJBTkRJVF9NQU4gOiBzdHJpbmcgPSBcImJhbmRpdFwiO1xuICAgIC8qKuS6uuenjSAtIOaYjuaYnyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU1RBUl9NQU4gOiBzdHJpbmcgPSBcInN0YXJcIjtcbiAgICAvKirkurrnp40gLSDnp5HlrablrrYgKi9cbiAgICBwdWJsaWMgc3RhdGljIFNDSUVOVElTVF9NQU4gOiBzdHJpbmcgPSBcInNjaWVudGlzdFwiO1xuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lu7rnrZFcbiAgICAvKirljLvpmaIgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhPU1BJVEFMIDogbnVtYmVyID0gMTtcbiAgICAvKirlhpvpmJ8gKi9cbiAgICBwdWJsaWMgc3RhdGljIEFSTVkgOiBudW1iZXIgPSAyO1xuICAgIC8qKuWGnOWcuiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgRkFSTTogbnVtYmVyID0gMztcbiAgICAvKirnp5HmioAgKi9cbiAgICBwdWJsaWMgc3RhdGljIFRFQ0hOT0xPR1k6IG51bWJlciA9IDQ7XG4gICAgLyoq5LqL5Lu25oi/IOaWsOmXu+aIvyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRfSE9VU0U6IG51bWJlciA9IDU7XG4gICAgLyoq55qH5a6rICovXG4gICAgcHVibGljIHN0YXRpYyBQQUxBQ0U6IG51bWJlciA9IDY7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5qOA5rWL54K555qE6Ze06LedXG4gICAgLyoq5qOA5rWL54K56Ze06LedICovXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX0RJQyA6IG51bWJlciA9IDU7XG4gICAgLyoq6YCf5bqmICovXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX1NQRUVEIDogbnVtYmVyID0gMC40O1xuICAgIC8qKuaXi+i9rOinkuW6puWBj+enuyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgVEVTVF9QT0lOVF9STyA6IG51bWJlciA9IDEwO1xuICAgIC8qKuS6uuexu+eUn+S6p+mXtOmalFMgKi9cbiAgICBwdWJsaWMgc3RhdGljIFBFUlNPTl9DUkVBVEVfVElNRSA6IG51bWJlciA9IDE7XG4gICAgLyoq55uR5rWL54K55pWw6YePKi9cbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfQ09VTlQgOiBudW1iZXIgPSA2O1xuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3kuLvlgLxcbiAgICAvKirlm73lrrbotKLmlL8gKi9cbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fTU9ORVkgOiBzdHJpbmcgPSBcIm1vbmV5XCI7XG4gICAgLyoq5Zu95a625Lq65Y+jICovXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX1BPUFVMQVRJT04gOiBzdHJpbmc9XCJwb3B1bGF0aW9uXCI7XG4gICAgLyoq5Zu95a625bm456aP5bqmICovXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX1BPUFVMQVJTVVBQT1JUIDogc3RyaW5nID0gXCJwb3B1bGFyU3VwcG9ydFwiO1xuICAgIC8qKuWbveWutuenkeaKgCAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9URUNITk9MT0dZIDogc3RyaW5nID0gXCJ0ZWNobm9sb2d5XCI7XG4gICAgLyoq5Zu95a625aiB5pybICovXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX1BSRVNUSUdFIDogc3RyaW5nID0gXCJwcmVzdGlnZVwiO1xuXG4gICAgXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3ml7bpl7RcbiAgICAvKirkupTlpKfkuLvlgLzop6blj5Hml7bpl7QgKi9cbiAgICBwdWJsaWMgc3RhdGljIFRJTUVfTUFJTkRBVEEgOiBudW1iZXIgPSAwLjUqNjAqNjA7XG4gICAgXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5YW25LuWXG4gICAgLyoq5LiA5aSp5pe26Ze0L+WIhumSnyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgT05FX0RBWTpudW1iZXI9MTAqNjA7XG4gICAgLyoq57Ku6aOf55Sf5Lqn546H5o2i6ZKx5Li055WM5YC8ICovXG4gICAgcHVibGljIHN0YXRpYyBHUkFJTl9FWENIQU5HRU1PTkVZX1BFUkNFTlQ9MS41O1xuICAgIC8qKueyrumjn+aNoumSseaxh+eOhyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR1JBSU5UT01PTkVZPTI7XG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XHJcbi8qKlxyXG4gKiDotK3kubDmoYYg6YCa55SoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXlEaWFsb2cgZXh0ZW5kcyB1aS5CdXlVSXtcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMud2lkdGg9ODAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PTQwMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpOnZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5rOo5YaM5LqL5Lu2ICovXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50cygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0bl9idXkub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuYnV5Q2xpY2spO1xyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlQ2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueCueWHu+i0reS5sCAqL1xyXG4gICAgcHJpdmF0ZSBidXlDbGljaygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgY3VyclxyXG4gICAgfSBcclxuICAgIFxyXG4gICAgLyoq54K55Ye75YWz6ZetICovXHJcbiAgICBwcml2YXRlIGNsb3NlQ2xpY2soKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSBcclxufSIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVyZmViL1Blb3BsZVwiO1xuXG4vKipcbiAqIOaVsOaNruS4reW/gyDmiYDmnInnmoTmlbDmja5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRyeURhdGF7XG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogQ291bnRyeURhdGEgPSBuZXcgQ291bnRyeURhdGEoKTtcbiAgICAvKioqKioqKioqKioqKirkuLvmlbDmja4qKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKirlm73lrrbotKLmlL8gKi9cbiAgICBwdWJsaWMgbW9uZXkgOiBudW1iZXIgPSAxMDAwMDtcbiAgICAvKirlm73lrrbkurrlj6MgKi9cbiAgICBwdWJsaWMgcG9wdWxhdGlvbiA6IG51bWJlcj0xMDA7XG4gICAgLyoq5Zu95a625bm456aP5bqmICovXG4gICAgcHVibGljIHBvcHVsYXJTdXBwb3J0IDogbnVtYmVyID0gNTA7XG4gICAgLyoq5Zu95a6256eR5oqAICovXG4gICAgcHVibGljIHRlY2hub2xvZ3kgOiBudW1iZXIgPSA1MDtcbiAgICAvKirlm73lrrblo7DmnJsgKi9cbiAgICBwdWJsaWMgcHJlc3RpZ2UgOiBudW1iZXIgPSA1MDtcblxuICAgIC8qKioqKioqKioqKioqKirlia/mlbDmja4qKioqKioqKioqKioqKioqKi9cbiAgICAvLy0tLS0tLS0t5Li75pWw5o2u5b2x5ZONXG4gICAgLy/lm7rlrprmlK/lh7pcbiAgICAvKirlhpvotLkgKi9cbiAgICBwdWJsaWMgYXJteUNvc3QgOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq5pS/5bqc6LS555SoICovXG4gICAgcHVibGljIGdvdmVybkNvc3QgOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq56eR5oqA6LS555SoICovXG4gICAgcHVibGljIHRlY2hub2xvZ3lDb3N0IDogbnVtYmVyID0gMTAwO1xuICAgIC8qKueojuaUtueOhyAqL1xuICAgIHB1YmxpYyB0YXggOiBudW1iZXIgPSAwLjA1O1xuICAgIC8qKueyrumjn+a2iOiAl+mHjyAo5Lq65Z2H5raI6ICX6YePKSAqL1xuICAgIHB1YmxpYyBncmFpblBlckNvc3QgOiBudW1iZXIgPSAxO1xuICAgIFxuXG4gICAgLy/lj5jliqjnjodcbiAgICAvKirnsq7po5/kuqfph48gKOS6uuWdh+S6p+mHjykqL1xuICAgIHB1YmxpYyBncmFpblBlckFkZCA6IG51bWJlciA9IDE7XG4gICAgLyoq57Ku6aOf5bqT5a2YICovXG4gICAgcHVibGljIGdyYWluU3RvY2s6bnVtYmVyPTA7XG4gICAgLyoq5Yab6LS55YeP5bCR546HICovXG4gICAgcHVibGljIGFybXlQZXJjZW50Om51bWJlcj0wLjI7XG4gICAgLyoqR0RQIOaMo+mSseiDveWKm++8jOavj+S6uuavj+WkqeiDveS6p+WkmuWwkemSsSAqL1xuICAgIHB1YmxpYyBHRFAgOiBudW1iZXIgPSAxMDtcblxuXG4gICAgLyoq6L+b5Z+O5pWwIOebruagh+WAvDJtaW4qL1xuICAgIHB1YmxpYyBlbnRlclBlb3BsZSA6IG51bWJlciA9IDUwO1xuICAgIC8qKuWHuuWfjuaVsCDnm67moIflgLwybWluKi9cbiAgICBwdWJsaWMgZXhpdFBlb3BsZSA6IG51bWJlciA9IDUwO1xuICAgIC8qKuS6uuWPo+avlOS+i+aVsCDov5vln47mlbAv5Ye65Z+O5pWwIDJtaW4qL1xuICAgIHB1YmxpYyBwZXJjZW50IDogbnVtYmVyID0gMTtcbiAgICAvKirln47lpJbkurrlj6PmlbDnu4QqL1xuICAgIHB1YmxpYyBhcnJfb3V0UGVvcGxlIDogQXJyYXk8UGVvcGxlPjtcbiAgICAvKirln47lhoXkurrlj6PmlbDnu4QgKi9cbiAgICBwdWJsaWMgYXJyX2luUGVvcGxlIDogQXJyYXk8UGVvcGxlPjtcbiAgICAvKirlh7rln47kurrlj6Mg5a6e6ZmF5YC8LzJtaW4gKi9cbiAgICBwdWJsaWMgX291dGVyUGVvcGxlIDogbnVtYmVyO1xuICAgIC8qKui/m+mXqOS6uuWPoyDlrp7pmYXlgLwvMm1pbiAqL1xuICAgIHB1YmxpYyBfaW5uZXJQZW9wbGUgOiBudW1iZXI7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mma7pgJrkurrlj6PljaDmr5RcbiAgICAvKiowLeWMu+eUnyAxLeitpuWvnyAyLeWVhuS6uiAtM+a4uOaJi+WlvemXsiAtNOWGnOawkSovXG4gICAgcHVibGljIGFycl9wZXJzb25QZXJjZW50TmFtZSA6IEFycmF5PHN0cmluZz4gPSBbXCJwZXJjZW50RG9jdG9yXCIsXCJwZXJjZW50UG9saWNcIixcInBlcmNlbnRTaG9wZXJcIixcInBlcmNlbnROb3RoaW5nXCIsXCJwZXJjZW50RmFybWVyXCJdO1xuICAgIC8qKuaZrumAmuS6uuS4rSDljLvnlJ/nmoTljaDmr5QqL1xuICAgIHB1YmxpYyBwZXJjZW50RG9jdG9yIDogbnVtYmVyID0gMC4wMjtcbiAgICAvKirmma7pgJrkurrnp40g6K2m5a+f5Y2g5q+UICovXG4gICAgcHVibGljIHBlcmNlbnRQb2xpYyA6IG51bWJlciA9IDAuMDM7XG4gICAgLyoq5pmu6YCa5Lq656eNIOWVhuS6uueahOWNoOavlCAqL1xuICAgIHB1YmxpYyBwZXJjZW50U2hvcGVyIDogbnVtYmVyID0gMC4xNTtcbiAgICAvKirmuLjmiYvlpb3pl7IgKi9cbiAgICBwdWJsaWMgcGVyY2VudE5vdGhpbmcgOiBudW1iZXIgPSAwLjE7XG4gICAgLyoq5Yac5rCRICovXG4gICAgcHVibGljIHBlcmNlbnRGYXJtZXIgOiBudW1iZXIgPSAwLjc7XG5cbiAgICAvLy0tLS0tLS0t5b2x5ZONIOOAkOS4u+aVsOaNruOAkS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcblxuXG5cblxuXG5cbiAgICAvLy0tLS0tLS0t5LqL5Lu25pWw5o2uXG4gICAgLyoq55if55arICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyovXG4gICAgcHVibGljIHBlc3QgOiBudW1iZXIgPSAwO1xuICAgIC8qKuWcsOmchyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8gKi9cbiAgICBwdWJsaWMgbmF0dXJhbERpc2FzdGVyIDogbnVtYmVyID0gMDtcbiAgICAvKirmiJjkubEgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfKi9cbiAgICBwdWJsaWMgd2FyIDogbnVtYmVyID0gMDtcblxuICAgIC8vLS0tLS0tLS3ogYzkuJrkurrmlbBcbiAgICBwdWJsaWMgYXJyX1Blb3BsZSA6IEFycmF5PHN0cmluZz4gPSBbXCJjb21tb25cIixcInNjaWVudGlzdFwiLFwic3RhclwiLFwiYmFuZGl0XCIsXCJyb2JiZXJcIl07XG4gICAgLyoq5pmu6YCa5Lq6IEEgIOaZrumAmuS6uuS4reS8muS6p+eUn+WMu+eUnyDorablr58g562J5q2j5bi46IGM5LiaKi9cbiAgICBwdWJsaWMgY29tbW9uIDogbnVtYmVyID0gOTU7XG4gICAgLyoq56eR5a2m5a62IFNTUyovXG4gICAgcHVibGljIHNjaWVudGlzdCA6IG51bWJlciA9IDE7XG4gICAgLyoq5piO5pifIFNTKi9cbiAgICBwdWJsaWMgc3RhciA6IG51bWJlciA9IDI7XG4gICAgLyoq5Zyf5YyqIC1TICovXG4gICAgcHVibGljIGJhbmRpdCA6IG51bWJlciA9IDE7XG4gICAgLyoq55uX6LS8IC1BICovXG4gICAgcHVibGljIHJvYmJlciA6IG51bWJlciA9IDE7XG4gICAgICAgIC8vIC8qKuaZrumAmuS6uiBBICDmma7pgJrkurrkuK3kvJrkuqfnlJ/ljLvnlJ8g6K2m5a+fIOetieato+W4uOiBjOS4miovXG4gICAgICAgIC8vIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSAxO1xuICAgICAgICAvLyAvKirnp5HlrablrrYgU1NTKi9cbiAgICAgICAgLy8gcHVibGljIHNjaWVudGlzdCA6IG51bWJlciA9IDA7XG4gICAgICAgIC8vIC8qKuaYjuaYnyBTUyovXG4gICAgICAgIC8vIHB1YmxpYyBzdGFyIDogbnVtYmVyID0gMDtcbiAgICAgICAgLy8gLyoq5Zyf5YyqIC1TICovXG4gICAgICAgIC8vIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAwO1xuICAgICAgICAvLyAvKirnm5fotLwgLUEgKi9cbiAgICAgICAgLy8gcHVibGljIHJvYmJlciA6IG51bWJlciA9IDA7XG4gICAgLyoq5bey55Sf5oiQ55qE5Lq656eNICAwIOaZrumAmiAgIDHnp5HlrablrrYgIDLmmI7mmJ8gM+Wcn+WMqiA055uX6LS8Ki9cbiAgICBwdWJsaWMgYWxyZWFkeUNyZWF0ZSA6IEFycmF5PG51bWJlcj4gPSBbMCwwLDAsMCwwXTtcblxuICAgIC8vLS0tLS0tLS3ln47pl6hcbiAgICAvKirpl6jmmK/lkKbmiZPlvIAqL1xuICAgIHB1YmxpYyBpc0Rvb3JPcGVuIDogYm9vbGVhbj10cnVlO1xuICAgIC8qKuetm+afpeiDveWKmyDlkK/liqjnibnmrorpl6jnmoTml7blgJkgIOetm+afpeiDveWKm+eUn+aViCovXG4gICAgcHVibGljIHByZXBhcmF0aW9uIDogbnVtYmVyID0gMC41O1xuICAgIC8qKueJueauiumXqCDnrZvmn6UgMS3pmLLmraLov5vlhaUgICAyLemCgOivt+i/m+WFpSovXG4gICAgLy8gcHVibGljIGtlZXBTZWxlY3QgOiBBcnJheTxudW1iZXI+ID0gW107XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWMuuWfn1xuICAgIC8qKuWimeWGheWMuuWfn+WIkuWIhiAqL1xuICAgIHB1YmxpYyBhcnJfTGVmdEFyZWEgOiBBcnJheTxhbnk+O1xuICAgIHB1YmxpYyBhcnJfUmlnaHRBcmVhIDogQXJyYXk8YW55PjtcbiAgICBcbiAgICAvLy0tLS0tLS0tLS0tLS0tLeWzsOWAvFxuICAgIC8qKuWbveWutuW5uOemj+W6puWzsOWAvCAqL1xuICAgIHB1YmxpYyBwb3B1bGFyU3VwcG9ydE1heCA6IG51bWJlciA9IDEwMDtcbiAgICAvKirlm73lrrbnp5HmioDls7DlgLwgKi9cbiAgICBwdWJsaWMgdGVjaG5vbG9neU1heCA6IG51bWJlciA9IDEwMDtcbiAgICAvKirlm73lrrblo7DmnJvls7DlgLwgKi9cbiAgICBwdWJsaWMgcHJlc3RpZ2VNYXggOiBudW1iZXIgPSAxMDA7XG4gICAgXG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYSA9IG5ldyBBcnJheTxhbnk+KCk7XG4gICAgICAgIHRoaXMuYXJyX1JpZ2h0QXJlYSA9IG5ldyBBcnJheTxhbnk+KCk7XG4gICAgICAgIHRoaXMuYXJyX2luUGVvcGxlID0gbmV3IEFycmF5PFBlb3BsZT4oKTtcbiAgICAgICAgdGhpcy5hcnJfb3V0UGVvcGxlID0gbmV3IEFycmF5PFBlb3BsZT4oKTtcbiAgICAgICAgdGhpcy5faW5uZXJQZW9wbGUgPSAwO1xuICAgICAgICB0aGlzLl9vdXRlclBlb3BsZSA9IDA7XG4gICAgfVxuXG4gICAgLyoq5Yqg5YWl5pWw57uEIGlzT3V05piv5ZCm5Zyo5aSW6Z2iKi9cbiAgICBwdWJsaWMgYWRkQXJyYXkoaXNPdXQsb2JqKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmFycl9pblBlb3BsZTtcbiAgICAgICAgaWYoaXNPdXQpIGFyciA9IHRoaXMuYXJyX291dFBlb3BsZTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8IGFyci5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihhcnJbaV0gPT09IHVuZGVmaW5lZCkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXJyW2ldID0gb2JqO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcnIucHVzaChvYmopO1xuICAgIH1cblxuICAgIC8qKuenu+mZpOaVsOe7hCBpc091dOaYr+WQpuWcqOWklumdoiAqL1xuICAgIHB1YmxpYyBkZWxldGVBcnJheShpc091dCxvYmopIDogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuYXJyX2luUGVvcGxlO1xuICAgICAgICBpZihpc091dCkgYXJyID0gdGhpcy5hcnJfb3V0UGVvcGxlO1xuICAgICAgICBmb3IobGV0IGk9MDtpIDwgYXJyLmxlbmd0aCA7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihhcnJbaV0gPT09IG9iailcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhcnJbaV0gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirmlbDnu4Tovaznp7sg5Z+O5aSWLeOAi+WfjuWGhSDmiJbln47lhoXliLDln47lpJYgIOaYr+WQpuaYr1vln47lpJbovazln47lhoVdICDovaznp7vlr7nosaEqL1xuICAgIHB1YmxpYyBtb3ZlQXJyYXkoaXNPdXQsb2JqKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuYWRkQXJyYXkoIWlzT3V0LG9iaik7Ly/liqDlhaXln47lhoXmlbDnu4RcbiAgICAgICAgdGhpcy5kZWxldGVBcnJheShpc091dCxvYmopOy8v56e76Zmk5Z+O5aSW5pWw57uEXG4gICAgfVxuXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5byA5ZCv5a6a5pe25ZmoICovXG4gICAgcHVibGljIG9wZW5UaW1lcigpOnZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKEdhbWVDb25maWcuVElNRV9NQUlOREFUQSx0aGlzLHRoaXMuY2FsX01vbmV5KTtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoR2FtZUNvbmZpZy5USU1FX01BSU5EQVRBLHRoaXMsdGhpcy5pbmZsdWVuY2VfR3JhaW4pO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcChHYW1lQ29uZmlnLlRJTUVfTUFJTkRBVEEsdGhpcyx0aGlzLmluZmx1ZW5jZV9Qb3B1bGFyU3VwcG9ydCk7XG4gICAgfVxuXG5cbiAgICAvKirojrflj5bljLrln58gKi9cbiAgICBwdWJsaWMgc2V0QXJlYSh2aWV3IDogTGF5YS5Ob2RlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHZpZXcuX2NoaWxkcmVuO1xuICAgICAgICBmb3IobGV0IGk9MDtpPGNoaWxkcmVuLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLm5hbWUgPT0gXCJwYWxhY2VcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYS5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEucHVzaChjaGlsZHJlbltpXSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihjaGlsZHJlbltpXS54PDk4MSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYS5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaCh2aWV3LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInNwX3dhbGxcIikpO1xuICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEucHVzaCh2aWV3LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInNwX3dhbGxcIikpO1xuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uueahOmaj+acuuenu+WKqOmAn+W6piAqL1xuICAgIHB1YmxpYyBnZXRNb3ZlU3BlZWQoKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIEdhbWVDb25maWcuVEVTVF9QT0lOVF9TUEVFRCooTWF0aC5yYW5kb20oKSswLjUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS6uuWPo+a1gemHjyA6XG4gICAgICogcmV0dXJuIOi/m+WFpSAvIOWHuuWOu1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRfUGVvcGxlTW92ZSgpIDogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJjZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS6uuenjeavlOS+i1xuICAgICAqIEBwYXJhbSB0eXBlIOS6uuenjVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRfUHJvZmVzc2lvblBlcmNlbnQodHlwZTpzdHJpbmcpIDogbnVtYmVyXG4gICAge1xuICAgICAgICBpZih0aGlzW3R5cGVdID09PSB1bmRlZmluZWQpIGNvbnNvbGUubG9nKFwi5LiN5a2Y5Zyo6K+l5Lq656eNXCIpO1xuICAgICAgICBlbHNlIHJldHVybiB0aGlzW3R5cGVdLyh0aGlzLnBvcHVsYXRpb24pO1xuICAgIH1cblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t57uT566XXG4gICAgLyoq6LSi5pS/57uT566XKi9cbiAgICBwdWJsaWMgY2FsX01vbmV5KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnByZXN0aWdlX0FybXlDb3N0KCk7XG4gICAgICAgIHRoaXMuc3RlYWR5Q29zdCgpO1xuICAgICAgICB0aGlzLmdldFRheCgpO1xuICAgICAgICB0aGlzLnRlY2hub2xvZ3lfR0RQKCk7XG4gICAgfVxuXG4gICAgLyoq57Ku6aOfIOW9seWTjee7k+eulyovXG4gICAgcHVibGljIGluZmx1ZW5jZV9HcmFpbigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGdyYWluTWludXM9dGhpcy5wb3B1bGF0aW9uX0dyYWluQ29zdCgpO1xuICAgICAgICBsZXQgZ3JhaW5BZGQ9dGhpcy5wb3B1bGF0aW9uX0dyYWluQWRkKCk7XG4gICAgICAgIHRoaXMuY2FsX0dyYWluKGdyYWluQWRkLGdyYWluTWludXMpO1xuICAgIH1cblxuICAgIC8qKuW5uOemj+W6piDlvbHlk43nu5PnrpcgKi9cbiAgICBwdWJsaWMgaW5mbHVlbmNlX1BvcHVsYXJTdXBwb3J0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnN1cHBvcnRfUGVyY2VudCgpO1xuICAgICAgICB0aGlzLnN1cHBvcnRfUGVvcGxlVHlwZSgpO1xuICAgICAgICB0aGlzLnN1cHBvcnRfT3V0UGVvcGxlTWF4KCk7XG4gICAgfVxuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lhazlvI9cbiAgICAvKirnqLPlrprmlK/lh7ogKi9cbiAgICBwdWJsaWMgc3RlYWR5Q29zdCgpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubW9uZXktPXRoaXMuYXJteUNvc3QqKDEtdGhpcy5hcm15UGVyY2VudCkrdGhpcy5nb3Zlcm5Db3N0K3RoaXMudGVjaG5vbG9neUNvc3Q7XG4gICAgfVxuXG4gICAgLyoq57Ku6aOf5raI6ICXIOS6uuWPo+aVsCrmr4/kurrmtojogJfph48qL1xuICAgIHB1YmxpYyBwb3B1bGF0aW9uX0dyYWluQ29zdCgpOm51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9wdWxhdGlvbip0aGlzLmdyYWluUGVyQ29zdDtcbiAgICB9XG5cbiAgICAvKirnsq7po5/nlJ/kuqcg5Lq65Y+j5pWwKuavj+S6uuWunumZheS6p+mHjyovXG4gICAgcHVibGljIHBvcHVsYXRpb25fR3JhaW5BZGQoKTpudW1iZXJcbiAgICB7XG4gICAgICAgIC8v56eR5oqA5bqm6L2s5o2iIOenkeaKgOW6pjAtMTAwIOeUn+S6p+WPmOWMlueOhzAtMiDlhazlvI/mmoLlrpp5PXgqMC4wMi0xLDUw5Li65YiG55WM6ZmQXG4gICAgICAgIGxldCBjaGFuZ2U9dGhpcy50ZWNobm9sb2d5KjAuMDItMTtcbiAgICAgICAgdGhpcy5ncmFpblBlckFkZD0oMStjaGFuZ2UpKnRoaXMuZ3JhaW5QZXJBZGQ7XG4gICAgICAgIGxldCBwcm89dGhpcy5ncmFpblBlckFkZCp0aGlzLnBvcHVsYXRpb247XG4gICAgICAgIHJldHVybiBwcm87XG4gICAgfVxuXG4gICAgLyoq5bm456aP5bqm5b2x5ZON5Lq65Y+j5rWB5Yqo546HICovXG4gICAgcHVibGljIHN1cHBvcnRfUGVyY2VudCgpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v5bm456aP5b2x5ZON5Lq65Y+j5rWB5Yqo546H55qE5rOi5Yqo6IyD5Zu0IC0wLjJ+MC4yIOWFrOW8j+aaguWumnk9eCowLjAwNC0wLjIsNTDkuLrliIbnlYzpmZBcbiAgICAgICAgbGV0IGNoYW5nZT10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDA0LTAuMjtcbiAgICAgICAgdGhpcy5wZXJjZW50PSgxK2NoYW5nZSkqdGhpcy5wZXJjZW50OyAgIFxuICAgIH1cblxuICAgIC8qKuW5uOemj+W6puW9seWTjeS6uuenjeWHoOeOhyDlnYfku47mma7pgJrkurrlh6DnjofkuK3ov5vooYzmm7/mjaIqL1xuICAgIHB1YmxpYyBzdXBwb3J0X1Blb3BsZVR5cGUoKVxuICAgIHtcbiAgICAgICAgLy/np5Hlrablrrbms6LliqjojIPlm7QgMC4wMS0wLjA1IOWFrOW8j+aaguWumnk9eCowLjAwMDQrMC4wMSw1MOS4uuWIhueVjOmZkFxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLnNjaWVudGlzdD10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDAwNCswLjAxO1xuICAgICAgICAvL+aYjuaYn+azouWKqOiMg+WbtCAwLjAwNS0wLjAyNSDlhazlvI/mmoLlrpp5PXgqMC4wMDAyKzAuMDA1LDUw5Li65YiG55WM6ZmQXG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18uc3Rhcj10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDAwMiswLjAwNTtcbiAgICAgICAgLy/nm5fotLzms6LliqjojIPlm7QgMC4wNi0wLjE0IOWFrOW8j+aaguWumnk9eCowLjAwMDgrMC4wNiw1MOS4uuWIhueVjOmZkFxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLnJvYmJlcj10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDAwOCswLjA2O1xuICAgICAgICAvL+Wcn+WMquazouWKqOiMg+WbtCAwLjAyLTAuMSDlhazlvI/mmoLlrpp5PXgqMC4wMDA4KzAuMDIsNTDkuLrliIbnlYzpmZBcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5iYW5kaXQ9dGhpcy5wb3B1bGFyU3VwcG9ydCowLjAwMDgrMC4wMjtcbiAgICAgICAgLy/mma7pgJrkurrms6LliqjojIPlm7RcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5jb21tb249MS0oT3V0Q291bnRyeURhdGEuaW5zXy5zY2llbnRpc3QrT3V0Q291bnRyeURhdGEuaW5zXy5zdGFyK091dENvdW50cnlEYXRhLmluc18ucm9iYmVyK091dENvdW50cnlEYXRhLmluc18uYmFuZGl0KTtcbiAgICB9XG5cbiAgICAvKirlubjnpo/luqblvbHlk43lopnlpJbkurrlj6Mg5aKZ5aSW5pyA5aSn5a6557qz5pWwMjAwLTYwMCovXG4gICAgcHVibGljIHN1cHBvcnRfT3V0UGVvcGxlTWF4KCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/lopnlpJblop7plb/njofms6LliqjojIPlm7QgMC4yLTAuNiDlhazlvI/mmoLlrpp5PXgqMC4wMDQrMC4yLDUw5Li65YiG55WM6ZmQXG4gICAgICAgIGxldCBjaGFuZ2U9dGhpcy5wb3B1bGFyU3VwcG9ydCowLjAwNCswLjI7XG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18ubWF4Q291bnQ9MTAwMCpjaGFuZ2U7XG4gICAgfVxuXG4gICAgLyoq56eR5oqA5b2x5ZONR0RQICovXG4gICAgcHVibGljIHRlY2hub2xvZ3lfR0RQKCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy9HRFDms6LliqjojIPlm7QgLTAuNX4wLjUg5YWs5byP5pqC5a6aeT14KjAuMDUsNTDkuLrliIbnlYzpmZBcbiAgICAgICAgbGV0IGNoYW5nZT10aGlzLnRlY2hub2xvZ3kqMC4wMS0wLjU7XG4gICAgICAgIC8v5a6e6ZmFR0RQXG4gICAgICAgIGxldCBjdXJyR0RQPXRoaXMuR0RQKihjaGFuZ2UrMSk7XG4gICAgICAgIHRoaXMubW9uZXktPWN1cnJHRFAqdGhpcy5wb3B1bGF0aW9uO1xuICAgIH1cbiAgICAvKirlqIHmnJvlvbHlk43lhpvotLkgKi9cbiAgICBwdWJsaWMgcHJlc3RpZ2VfQXJteUNvc3QoKTp2b2lkXG4gICAge1xuICAgICAgICAvL+WGm+i0ueWHj+WwkeeOh+azouWKqOiMg+WbtCAwLjAtMC40IOWFrOW8j+aaguWumnk9eCowLjAwNCw1MOS4uuWIhueVjOmZkFxuICAgICAgICB0aGlzLmFybXlQZXJjZW50PXRoaXMucHJlc3RpZ2UqMC4wMDQ7XG4gICAgfVxuXG4gICAgLyoq56iO5pS2ICovXG4gICAgcHVibGljIGdldFRheCgpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubW9uZXkrPXRoaXMudGF4O1xuICAgIH1cblxuICAgIC8qKueyrumjn+e7k+eulyAqL1xuICAgIHB1YmxpYyBjYWxfR3JhaW4oZ3JhaW5BZGQ6bnVtYmVyLGdyYWluTWludXM6bnVtYmVyKTp2b2lkXG4gICAge1xuICAgICAgICAvL+WmguaenOi/mOacieeyrumjn+W6k+WtmFxuICAgICAgICBpZihncmFpbkFkZD49Z3JhaW5NaW51cylcbiAgICAgICAge1xuICAgICAgICAgICAgLy/lpoLmnpznlJ/kuqfph4/lpKfkuo7lpKfkuo7mtojogJfnjofnmoTmn5DkuKrlgI3njofvvIzlhYjorqnlhbboh6rliqjovazljJbkuLrotKLmlL/vvIzkuYvlkI7kv67mlLnkuLrmiYvliqjovazljJZcbiAgICAgICAgICAgIGlmKGdyYWluQWRkL2dyYWluTWludXM+PUdhbWVDb25maWcuR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8v6LaF5Ye65YCN546H55qE6YOo5YiGXG4gICAgICAgICAgICAgICAgbGV0IGV4Y2hhbmdlPWdyYWluQWRkLWdyYWluTWludXMqR2FtZUNvbmZpZy5HUkFJTl9FWENIQU5HRU1PTkVZX1BFUkNFTlQ7XG4gICAgICAgICAgICAgICAgLy/nsq7po5/mjaLpkrFcbiAgICAgICAgICAgICAgICB0aGlzLm1vbmV5Kz1leGNoYW5nZSpHYW1lQ29uZmlnLkdSQUlOVE9NT05FWTtcbiAgICAgICAgICAgICAgICAvL+WJqeS9meeahOWKoOWFpeW6k+WtmFxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jays9KGdyYWluQWRkLWV4Y2hhbmdlLWdyYWluTWludXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8v5Yqg5YWl5bqT5a2YXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrKz0oZ3JhaW5BZGQtZ3JhaW5NaW51cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+WmguaenOW6k+WtmOWKoOS4iueUn+S6p+eahOeyrumjn+S4jei2s+S7peaKteWkn+a2iOiAl+eahOeyrumjn1xuICAgICAgICAgICAgaWYoKENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jaytncmFpbkFkZCk8Z3JhaW5NaW51cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+eCueWHu+mAieaLqeaYr+WQpui0reS5sOeyrumjn++8jOWmguaenOS4jei0reS5sOWImeWvvOiHtOS6uuWPo+WHj+WwkeWSjOW5uOemj+W6pumZjeS9jlxuICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbi09KGdyYWluTWludXMtKENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jaytncmFpbkFkZCkpKjE7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1bGFyU3VwcG9ydC09KGdyYWluTWludXMtKENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jaytncmFpbkFkZCkpKjAuMDAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8v5YeP5bCR5bqT5a2YXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrLT1ncmFpbk1pbnVzLWdyYWluQWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5pS55Y+YIOi/m+OAgeWHuiDnm67moIfkurrmlbAgQGlzb3V0OuaYr+WQpuaYr+WHuuWfjiAgQGNvdW5077ya5pS55Y+Y55uu5qCH5YC8Ki9cbiAgICBwdWJsaWMgc2V0SW5PdXRUYXJnZXQoaXNPdXQsY291bnQpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoaXNPdXQpIHRoaXMuZXhpdFBlb3BsZSArPSBjb3VudDtcbiAgICAgICAgZWxzZSB0aGlzLmVudGVyUGVvcGxlICs9IGNvdW50O1xuICAgIH1cblxuICAgIC8qKuaUueWPmCDov5vjgIHlh7og55uu5qCH5Lq65pWwIEBpc291dDrmmK/lkKbmmK/lh7rln44gIEBjb3VudO+8muaUueWPmOWunumZheWAvCovXG4gICAgcHVibGljIHNldEluT3V0VHJ1dGgoaXNPdXQsY291bnQpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoaXNPdXQpIHRoaXMuX291dGVyUGVvcGxlICs9IGNvdW50O1xuICAgICAgICBlbHNlIHRoaXMuX2lubmVyUGVvcGxlICs9IGNvdW50O1xuICAgIH1cbiAgICBcbiAgICAvKirpgJrnn6Xkurrlj6Plh7rln44gQHR5cGUg77yaIOi/m+aIkHR1cmUgIOWHuuWfjiBmYWxzZSovXG4gICAgcHVibGljIHBlb3BsZUdvT3V0KHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGFyciA7XG4gICAgICAgIGlmKHR5cGUpIGFyciA9IHRoaXMuYXJyX291dFBlb3BsZTtcbiAgICAgICAgICAgIGVsc2UgYXJyID0gdGhpcy5hcnJfaW5QZW9wbGU7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKGFyci5sZW5ndGgqcmFuZG9tKTtcbiAgICAgICAgaWYoaW5kZXg+MClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIWFycltpbmRleF0uaXNHbylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhcnJbaW5kZXhdLnBlb3BsZUdvKHR5cGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB0aGlzLnBlb3BsZUdvT3V0KHR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwi6ZqP5py65Ye66ZSZXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8qKuWHuuWfjumXqOebuOWFs+aTjeS9nCAqL1xuICAgIHB1YmxpYyBnb091dCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuX291dGVyUGVvcGxlKys7Ly/lrp7pmYXkurrmlbDliqDkuIBcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uLS07Ly/mgLvkurrlj6MgLS1cbiAgICAgICAgaWYodGhpc1t0eXBlXSkgdGhpc1t0eXBlXS0tO1xuICAgIH1cbn1cblxuLyoq5aSW5Z+OICovXG5leHBvcnQgY2xhc3MgT3V0Q291bnRyeURhdGF7XG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogT3V0Q291bnRyeURhdGEgPSBuZXcgT3V0Q291bnRyeURhdGEoKTtcbiAgICAvKioqKioqKioqKioqKirkuLvmlbDmja4qKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKirmnIDlpKflpJbln47lrrnnurPmlbDph48gKi9cbiAgICBwdWJsaWMgbWF4Q291bnQgOiBudW1iZXI9NDAwO1xuICAgIC8qKuW9k+WJjeWkluWfjuS6uuWPo+aVsCAqL1xuICAgIHB1YmxpYyBvdXRDb3VudDpudW1iZXI9MDtcbiAgICAvKirkurrmu57nlZnml7bpl7QgKi9cbiAgICBwdWJsaWMgbGltaXRUaW1lOm51bWJlcj01MDtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKuaZrumAmuS6uiovXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDAuNzk1O1xuICAgIC8qKuenkeWtpuWutiBTU1MqL1xuICAgIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAwLjAzO1xuICAgIC8qKuaYjuaYnyBTUyovXG4gICAgcHVibGljIHN0YXIgOiBudW1iZXIgPSAwLjAxNTtcbiAgICAvKirlnJ/ljKogLVMgKi9cbiAgICBwdWJsaWMgYmFuZGl0IDogbnVtYmVyID0gMC4wNjtcbiAgICAvKirnm5fotLwgLUEgKi9cbiAgICBwdWJsaWMgcm9iYmVyIDogbnVtYmVyID0gMC4xO1xuICAgIC8qKuWPmOmHj+WQjSAqL1xuICAgIHB1YmxpYyBhcnJfUGVvcGxlIDogQXJyYXk8c3RyaW5nPiA9IFtcImNvbW1vblwiLFwic2NpZW50aXN0XCIsXCJzdGFyXCIsXCJiYW5kaXRcIixcInJvYmJlclwiXTtcbiAgICBcbiAgICAvKirojrflj5bljLrpl7TmlbDnu4QgMCwwLjc5NSwwLjgyNSwwLjg0LDAuOSwxKi9cbiAgICBwdWJsaWMgZ2V0UGVyY2VudEFyZWEoKTpBcnJheTxudW1iZXI+XG4gICAge1xuICAgICAgIGxldCBhcnJQZXJjZW50ID0gW107Ly/nlJ/kuqfmr5TkvotcbiAgICAgICBsZXQgYXJyX1Blb3BsZSA9IHRoaXMuYXJyX1Blb3BsZTtcbiAgICAgICBsZXQgbnVtYmVyID0gMDtcbiAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyX1Blb3BsZS5sZW5ndGg7aSsrKVxuICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlciArPSB0aGlzW2Fycl9QZW9wbGVbaV1dO1xuICAgICAgICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgfVxuICAgICAgIHJldHVybiBhcnJQZXJjZW50O1xuICAgIH1cbn0iLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuLi91aS9sYXlhTWF4VUlcIjtcblxuLyoqXG4gKiDmtojmga/moYYg6YCa55SoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1zZ0RpYWxvZyBleHRlbmRzIHVpLkRpYS5DdXJyZW50RGlhbG9nVUl7XG4gICAgLyoq57G75Z6LICovXG4gICAgcHJpdmF0ZSB0eXBlIDogbnVtYmVyIDtcbiAgICAvKirnvJPliqggKi9cbiAgICAvLyBwcml2YXRlIHNob3dUd2VlbiA6IExheWEuVHdlZW47XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKirliJ3lp4vljJYgKi9cbiAgICBwdWJsaWMgc2hvd01zZyh0eXBlOm51bWJlcikgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZURpYWxvZyk7ICAgICAgICBcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VJbWcoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUaXRsZSgpO1xuICAgICAgICB0aGlzLmNoYW5nZVdvcmQoKTsgXG4gICAgICAgIHRoaXMubXNnQm9keS54ID0gKDkwMC8oTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodC9MYXlhLkJyb3dzZXIuY2xpZW50V2lkdGgpLTExNjMpLzI7ICAgICAgIFxuICAgICAgICB0aGlzLm1zZ0JvZHkueSA9IC01NTc7ICAgICAgIFxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eTowfSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirmjaLlm74gKi9cbiAgICBwcml2YXRlIGNoYW5nZUltZygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSlcbiAgICAgICAge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirmjaLmoIfpopggKi9cbiAgICBwcml2YXRlIGNoYW5nZVRpdGxlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirmloflrZfovb3lhaUgKi9cbiAgICBwcml2YXRlIGNoYW5nZVdvcmQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKuWFs+mXrSAqL1xuICAgIHB1YmxpYyBjbG9zZURpYWxvZygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5idG5fY2xvc2Uub2ZmKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlRGlhbG9nKTsgICAgICAgICAgICAgICAgXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5tc2dCb2R5LHt5Oi01NTd9LDIwMCxMYXlhLkVhc2UuYmFja091dCxMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsdGhpcy5jbG9zZU92ZXIpKTsgICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgY2xvc2VPdmVyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTsgICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZXJmZWIvUGVvcGxlXCI7XG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcbmltcG9ydCBDb3VudHJ5RGF0YSwgeyBPdXRDb3VudHJ5RGF0YSB9IGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgQ29tbW9uIGZyb21cIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9Db21tb25cIlxuaW1wb3J0IFJvYmJlciBmcm9tXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyXCJcbmltcG9ydCBTY2llbnRpc3QgZnJvbSBcIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9TY2llbnRpc3RcIjtcbmltcG9ydCBTdGFyIGZyb20gXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvU3RhclwiO1xuaW1wb3J0IEJhbmRpdCBmcm9tIFwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL0JhbmRpdFwiO1xuLyoqXG4gKiDkurog566h55CGXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZU1hbmFnZXIge1xuICAgIC8qKuinhuWbviovXG4gICAgcHJpdmF0ZSB2aWV3OmFueTsgXG4gICAgLyoq5qiq5Z2Q5qCHICovXG4gICAgcHJpdmF0ZSBYOm51bWJlcjtcbiAgICAvKirnurXlnZDmoIcgKi9cbiAgICBwcml2YXRlIFk6bnVtYmVyO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5aKZ5YaFXG4gICAgLyoq55Sf5oiQ6Ze06ZqU6K6h5pe25ZmoICovXG4gICAgcHJpdmF0ZSBjb3VudFRpbWUgOiBudW1iZXIgPSAwO1xuICAgIC8qKueUn+S6p+aXtumXtOmXtOmalCAqL1xuICAgIHByaXZhdGUgY291bnRUaW1lXyA6IG51bWJlciA9IDUwMDtcbiAgICAvL+WkluWfjuS6uuWPo+iuoeaXtuWZqFxuICAgIHByaXZhdGUgY291bnRUaW1lX291dCA6IG51bWJlciA9IDA7ICAgIFxuICAgIC8qKuWkluWfjuS6uuWPo+eUn+S6p+mXtOmalCAqL1xuICAgIHByaXZhdGUgY291bnRUaW1lX291dF8gOiBudW1iZXIgPSA1MDA7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGNvbnN0cnVjdG9yKHZpZXcpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXc9dmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvIDlkK/nlJ/miJDlt6XljoJcbiAgICAgKiDnlJ/miJDkurogXG4gICAgICog55Sf5oiQ5Lq655qE5L2N572uXG4gICAgICog55Sf5Lqn5Lq655qEdHlwZSDvvJog5Z+O6YeM5Lq6L+WfjuWkluS6uiDpgLvovpHliIblvIBcbiAgICAgKi9cbiAgICAvKirlvIDlkK/nlJ/miJDlt6XljoIgKi9cbiAgICBwdWJsaWMgb3BlblBlb3BsZUZhY3RvcnkoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIubG9vcCgxLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uiAqL1xuICAgIHB1YmxpYyBjcmVhdGVQZW9wbGUoKTp2b2lkXG4gICAge1xuICAgICAgICBpZih0aGlzLmNvdW50VGltZV9vdXQgPD0gdGhpcy5jb3VudFRpbWVfb3V0XylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5jb3VudFRpbWVfb3V0Kys7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudFRpbWVfb3V0ID0gMDtcbiAgICAgICAgdGhpcy5jb3VudFRpbWVfb3V0XyA9IE1hdGgucmFuZG9tKCkqR2FtZUNvbmZpZy5QRVJTT05fQ1JFQVRFX1RJTUUqMTAwO1xuICAgICAgICBpZihPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50ID49IE91dENvdW50cnlEYXRhLmluc18ubWF4Q291bnQtMSkgcmV0dXJuO1xuICAgICAgICBsZXQgYXJyYXk6QXJyYXk8bnVtYmVyPj1PdXRDb3VudHJ5RGF0YS5pbnNfLmdldFBlcmNlbnRBcmVhKCk7XG4gICAgICAgIGxldCBwZW9wbGU7XG4gICAgICAgIC8qKueUn+aIkOS4jeWQjOS6uuenjeeahOWHoOeOhyAqL1xuICAgICAgICBsZXQgcmFuZG9tPU1hdGgucmFuZG9tKCk7XG4gICAgICAgIC8v5pmu6YCa5Lq6XG4gICAgICAgIGlmKHJhbmRvbT49MCYmcmFuZG9tPGFycmF5WzFdKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwiY29tbW9uXCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBDb21tb24odGhpcy52aWV3LEdhbWVDb25maWcuQ09NTU9OX01BTix0cnVlKTtcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v56eR5a2m5a62XG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj1hcnJheVsxXSYmcmFuZG9tPGFycmF5WzJdKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwic2NpZW50aXN0XCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPSBuZXcgU2NpZW50aXN0KHRoaXMudmlldyxHYW1lQ29uZmlnLlNDSUVOVElTVF9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHBlb3BsZS5jcmVhdGVUZWNobm9sb2d5VGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8v5piO5pifXG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj1hcnJheVsyXSYmcmFuZG9tPGFycmF5WzNdKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwic3RhclwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgU3Rhcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5TVEFSX01BTix0cnVlKTtcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcGVvcGxlLmNyZWF0ZVN0YXJUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/nm5fotLxcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PWFycmF5WzNdJiZyYW5kb208YXJyYXlbNF0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJyb2JiZXJcIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFJvYmJlcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5ST0JCRVJfTUFOLHRydWUpO1xuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX291dFBlb3BsZS5wdXNoKHBlb3BsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBwZW9wbGUuY3V0TW9uZXlUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/lnJ/ljKpcbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwiYmFuZGl0XCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBCYW5kaXQodGhpcy52aWV3LEdhbWVDb25maWcuQkFORElUX01BTix0cnVlKTtcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcGVvcGxlLmN1dE1vbmV5VGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIHBlb3BsZS52aXNpYmxlPXRydWU7XG4gICAgICAgIHBlb3BsZS5pc091dCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0UG9zKCk7XG4gICAgICAgIHBlb3BsZS5zZXRQb3ModGhpcy5YLHRoaXMuWSk7XG4gICAgICAgIHBlb3BsZS5vcGVuQmVoYXZpb3VyKCk7XG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQrKztcbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurrnmoTkvY3nva4gKi9cbiAgICBwdWJsaWMgZ2V0UG9zKCk6YW55XG4gICAge1xuICAgICAgICBsZXQgdHlwZU51bT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMyk7XG4gICAgICAgIHN3aXRjaCh0eXBlTnVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy/lnKhB6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPTA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8v5ZyoQui+ueeVjFxuICAgICAgICAgICAgICAgIHRoaXMuWD1NYXRoLnJhbmRvbSgpKjIwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgLy/lnKhD6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPTIwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirnlYzpmZDmo4DmtYsgKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBcbiAgICBcbiAgICBwdWJsaWMgY2hlY2tQZXJjZW50KHBlb3BsZSx0eXBlOnN0cmluZyk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/mtYHliqjmr5Tkvovmo4DmtYtcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5wZXJjZW50PDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5Yib5bu65aKZ5YaF5Lq6ICovXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZV9Jbm5lcigpIDogdm9pZFxuICAgIHtcbiAgICAgICBsZXQgcmFuZG9tU3RyaW5nIDtcbiAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXG4gICAgICAgbGV0IGFycl9QZW9wbGUgPSBDb3VudHJ5RGF0YS5pbnNfLmFycl9QZW9wbGU7XG4gICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgZm9yKGxldCBpID0gMDtpPGFycl9QZW9wbGUubGVuZ3RoO2krKylcbiAgICAgICB7XG4gICAgICAgICAgICBudW1iZXIgKz0gQ291bnRyeURhdGEuaW5zXy5nZXRfUHJvZmVzc2lvblBlcmNlbnQoYXJyX1Blb3BsZVtpXSk7XG4gICAgICAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICB9XG4gICAgICAgY29uc29sZS5sb2coYXJyUGVyY2VudCk7XG4gICAgICAgTGF5YS50aW1lci5sb29wKDEsdGhpcyx0aGlzLmdldFJhbmRvbSxbYXJyUGVyY2VudF0pO1xuICAgIH1cblxuICAgIC8qKueUn+S6p+S6uiAqL1xuICAgIHByaXZhdGUgY3JlYXRlX0lubmVyKHJhbmRvbVN0cmluZykgOiB2b2lkXG4gICAge1xuICAgICAgICBpZihyYW5kb21TdHJpbmcgPT0gXCJub25lXCIpIHJldHVybjtcbiAgICAgICAgbGV0IHBlb3BsZSA9IExheWEuUG9vbC5nZXRJdGVtKHJhbmRvbVN0cmluZyk7ICBcbiAgICAgICAgbGV0IGNvdW50cnlEYXRhID0gQ291bnRyeURhdGEuaW5zXztcbiAgICAgICAgLy/nlJ/kuqfkurrnp41cbiAgICAgICAgY29uc29sZS5sb2cocmFuZG9tU3RyaW5nKTtcbiAgICAgICAgc3dpdGNoKHJhbmRvbVN0cmluZylcbiAgICAgICAgeyAgICAvKirlt7LnlJ/miJDnmoTkurrnp40gIDAg5pmu6YCaICAgMeenkeWtpuWutiAgMuaYjuaYnyAz5Zyf5YyqIDTnm5fotLwqL1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkNPTU1PTl9NQU46ICAgXG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzBdKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuUk9CQkVSX01BTjovL+ebl+i0vFxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVs0XSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkJBTkRJVF9NQU46Ly/lnJ/ljKpcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbM10rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TVEFSX01BTjovL+aYjuaYn1xuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVsyXSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNDSUVOVElTVF9NQU46Ly/np5HlrablrrZcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbMV0rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZighcGVvcGxlKSB7Y29uc29sZS5sb2coXCLmlrDlu7rkurrlpLHotKXvvIFcIikgO3JldHVybjt9XG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwocGVvcGxlKTtcbiAgICAgICAgcGVvcGxlLmlzT3V0ID0gZmFsc2U7XG4gICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX2luUGVvcGxlLnB1c2gocGVvcGxlKTsvL+WKoOWFpee7tOaKpOaVsOe7hFxuICAgICAgICBpZihwZW9wbGUgPT09IHVuZGVmaW5lZCB8fCBwZW9wbGUgPT09IG51bGwpIHtjb25zb2xlLmxvZyhcIuayoeacieeUn+aIkOS6uuenje+8geenjeexuzpcIiArIHJhbmRvbVN0cmluZyk7cmV0dXJuO31cbiAgICAgICAgdGhpcy5jcmVhdGVQb3MocGVvcGxlKTtcbiAgICAgICAgcGVvcGxlLnNwZWNpYWxEbygpO1xuICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirnlJ/kuqfkvY3nva4gKi9cbiAgICBwcm90ZWN0ZWQgY3JlYXRlUG9zKHBlb3BsZSkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgaG91c2VOb2RlID0gKHRoaXMudmlldyBhcyBMYXlhLlNwcml0ZSkuZ2V0Q2hpbGRCeU5hbWUoJ2hvdXNlJyk7XG4gICAgICAgIGxldCBwZXJjZW50ID0gaG91c2VOb2RlLl9jaGlsZHJlbi5sZW5ndGgvMTAwO1xuICAgICAgICBsZXQgaG91c2UgO1xuICAgICAgICBmb3IobGV0IGk9MDtpPCBob3VzZU5vZGUuX2NoaWxkcmVuLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcGVyY2VudCoxMDApO1xuICAgICAgICAgICAgaG91c2UgPSBob3VzZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZV9cIitudW1iZXIpO1xuICAgICAgICAgICAgaWYoaG91c2UgIT09IHVuZGVmaW5lZCAmJiBob3VzZSAhPT0gbnVsbCkgIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZS5zZXRQb3MoaG91c2UueCxob3VzZS55LGhvdXNlKTsgICBcbiAgICAgICAgICAgICAgICAvLyBwZW9wbGUucGVvcGxlSW50bygpOyBcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirojrflj5bpmo/mnLrkurrnp40gKi9cbiAgICBwcml2YXRlIGdldFJhbmRvbShhcnJQZXJjZW50KSA6IHN0cmluZ1xuICAgIHtcbiAgICAgICAgaWYodGhpcy5jb3VudFRpbWUgPD0gdGhpcy5jb3VudFRpbWVfKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvdW50VGltZSsrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRUaW1lXyA9IE1hdGgucmFuZG9tKCkqR2FtZUNvbmZpZy5QRVJTT05fQ1JFQVRFX1RJTUUqMTAwO1xuICAgICAgICBjb25zb2xlLmxvZyhcIueUn+aIkOmXtOmalDpcIiArIE1hdGguZmxvb3IodGhpcy5jb3VudFRpbWUvMTAwKSArIFwic1wiKTtcbiAgICAgICAgdGhpcy5jb3VudFRpbWUgPSAwO1xuXG4gICAgICAgIGxldCBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBsZXQgcGVyc29uID0gXCJcIjtcbiAgICAgICAgbGV0IGluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IobGV0IGk9MDtpPGFyclBlcmNlbnQubGVuZ3RoIDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCFhcnJQZXJjZW50W2krMV0pIGJyZWFrO1xuICAgICAgICAgICAgaWYoYXJyUGVyY2VudFtpXSA8PSBudW1iZXIgJiYgbnVtYmVyIDwgYXJyUGVyY2VudFtpKzFdKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlcnNvbiA9IENvdW50cnlEYXRhLmluc18uYXJyX1Blb3BsZVtpXTtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKCFwZXJzb24pIHtjb25zb2xlLmxvZyhcIuS6uuenjemaj+acuuWksei0pe+8gVwiKTtyZXR1cm47fVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLVwiICsgcGVyc29uKTtcbiAgICAgICAgLy/liKTmlq3kurrmmK/lkKbov5jog73nlJ/miJBcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCl7Y29uc29sZS5sb2coXCLmpoLnjoforqHnrpflh7rplJlcIik7cmV0dXJuO31cbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlW2luZGV4XSA9PSBDb3VudHJ5RGF0YS5pbnNfW3BlcnNvbl0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0QWxyZWFkQ3JlYXRlKCkgPT0gQ291bnRyeURhdGEuaW5zXy5wb3B1bGF0aW9uKSByZXR1cm47XG4gICAgICAgICAgICBwZXJzb24gPSB0aGlzLmdldFJhbmRvbShhcnJQZXJjZW50KTsgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmKCFwZXJzb24pe2NvbnNvbGUubG9nKFwi5Lq656eN6ZqP5py65aSx6LSl77yBXCIpO3JldHVybjt9XG4gICAgICAgdGhpcy5jcmVhdGVfSW5uZXIocGVyc29uKTsvL+eUn+S6p+S6uuenjSBcbiAgICAgICByZXR1cm4gcGVyc29uOyAgXG4gICAgfVxuXG4gICAgLyrojrflj5blt7LnlJ/miJDkurrlj6PnmoTmlbDph48qL1xuICAgIHB1YmxpYyBnZXRBbHJlYWRDcmVhdGUoKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8Q291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlciArPUNvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVtpXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfVxufSIsImltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xuXG4vKipcbiAqIFVJ566h55CG5ZmoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTWFuYWdlcntcbiAgICAvKirmlbDmja7nrqHnkIblmaggKi9cbiAgICAvLyBwdWJsaWMgc3RhdGljIGRhdGFNYW5hZ2VyIDogRGF0YU1hbmFnZXI7XG4gICAgLyoqVUkgc3ByaXRlICovXG4gICAgcHJpdmF0ZSBVaVNwcml0ZSA6IExheWEuU3ByaXRlO1xuXG4gICAgLyoq6L295YWl5pWw5o2uICovXG4gICAgY29uc3RydWN0b3IodWk6TGF5YS5TcHJpdGUpe1xuICAgICAgICB0aGlzLlVpU3ByaXRlID0gdWk7XG4gICAgfVxuICAgIFxuICAgIFxufSIsIi8qKlxuICog5LqL5Lu25Y+R55Sf566h55CG5ZmoXG4gKiBcbiAqIFxuICog55Sf5oiQ5LqL5Lu244CBXG4gKiDlvbHlk43kurrlj6PmtYHliqhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ybGRFdmVudE1hbmFnZXIge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgLyoq5LqL5Lu26aKE5oql5YiwICovXG4gICAgXG5cbiAgICAvKirkuovku7blj5HnlJ/lmaggKi9cblxuICAgIFxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgQnV5RGlhbG9nIGZyb20gXCIuL0NvcmUvQnV5RGlhbG9nXCJcbmltcG9ydCBNc2dEaWFsb2cgZnJvbSBcIi4vQ29yZS9Nc2dEaWFsb2dcIlxuaW1wb3J0IE9wZW5HYW1lIGZyb20gXCIuL1NjcmlwdC9PcGVuR2FtZVwiXG5pbXBvcnQgR2FtZVdvcmxkIGZyb20gXCIuL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkXCJcbmltcG9ydCBPcGVuU3RvcnkgZnJvbSBcIi4vU2NyaXB0L09wZW5TdG9yeVwiXG5pbXBvcnQgQ2VudGVyIGZyb20gXCIuL1NjcmlwdC9DZW50ZXJcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9MTQ0MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTkwMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWRoZWlnaHRcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cIlN0YXJ0R2FtZS5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcbiAgICAgICAgcmVnKFwiQ29yZS9CdXlEaWFsb2cudHNcIixCdXlEaWFsb2cpO1xuICAgICAgICByZWcoXCJDb3JlL01zZ0RpYWxvZy50c1wiLE1zZ0RpYWxvZyk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9PcGVuR2FtZS50c1wiLE9wZW5HYW1lKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHNcIixHYW1lV29ybGQpO1xuICAgICAgICByZWcoXCJTY3JpcHQvT3BlblN0b3J5LnRzXCIsT3BlblN0b3J5KTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L0NlbnRlci50c1wiLENlbnRlcik7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xuY2xhc3MgTWFpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxuXHRcdGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xuXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcblxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcblx0fVxuXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XG5cdH1cblxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xuXHRcdEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcblx0fVxufVxuLy/mv4DmtLvlkK/liqjnsbtcbm5ldyBNYWluKCk7XG4iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcbmltcG9ydCBDb3VudHJ5RGF0YSwgeyBPdXRDb3VudHJ5RGF0YSB9IGZyb20gXCIuLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgVG9vbCBmcm9tIFwiLi4vVG9vbC9Ub29sXCI7XG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBQZW9wbGVNYW5hZ2VyIGZyb20gXCIuLi9Db3JlL1Blb3BsZU1hbmFnZXJcIjtcblxuLyoqXG4gKiBcbiAqIOS6uuenjeeItuexu1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGUge1xuICAgIC8qKuWcuuaZryovXG4gICAgcHJvdGVjdGVkIHZpZXcgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirnsr7ngbUgKi9cbiAgICBwdWJsaWMgc3AgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirmqKrlnZDmoIfnp7vliqjpgJ/luqYgKi9cbiAgICBwcml2YXRlIGRpclg6bnVtYmVyO1xuICAgIC8qKue6teWdkOagh+enu+WKqOmAn+W6piAqL1xuICAgIHByaXZhdGUgZGlyWTpudW1iZXI7XG4gICAgXG4gICAgLyoqKioqKioqKioqKioqKioqKirlopnlhoUgKioqKioqKioqKioqL1xuICAgIC8qKuWimeWGheS6uui/mOaYr+WimeWkluS6uiAqL1xuICAgIHB1YmxpYyBpc091dCA6IGJvb2xlYW47XG4gICAgLyoq5Lq65bGe5oCnICovXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xuICAgIC8qKuS6uueahOacneWQkSAqL1xuICAgIHB1YmxpYyB0b3dhcmQgOiBhbnk7XG4gICAgLyoq6Z2i5YmN55qENeS4quajgOa1i+eCuSAqL1xuICAgIHB1YmxpYyB0b3dhcmRQb3MgOiBBcnJheTxhbnk+O1xuICAgIC8qKuS6uueahOenu+WKqOebruagh+eCuSAqL1xuICAgIHB1YmxpYyB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGU7XG4gICAgLyoq5Ye655Sf54K5ICovXG4gICAgcHVibGljIGJvcm5Ob2RlIDogTGF5YS5TcHJpdGU7XG4gICAgLyoq5piv5ZCm6KKr5Y+s5ZSkICovXG4gICAgcHVibGljIGlzR28gOiBudW1iZXI7XG4gICAgLyoq6YCS5b2S5YGc5q2i5Y+Y6YePICovXG4gICAgcHJpdmF0ZSBzdG9wRGkgOiBudW1iZXI7XG4gICAgLyoq5Y+C6ICD6YCf5bqmICovXG4gICAgcHJpdmF0ZSBzcGVlZCA6IG51bWJlcjtcblxuXG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5pc091dCA9IGlzT3V0O1xuICAgICAgICB0aGlzLnR5cGU9dHlwZTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZSk7XG4gICAgICAgIHRoaXMuaW5pdCh0eXBlKTtcbiAgICB9XG5cbiAgICAvKirliJ3lp4vljJYgKi9cbiAgICBwcml2YXRlIGluaXQodHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+aVsOaNruWIneWni+WMllxuICAgICAgICB0aGlzLnNldERhdGFJbml0KCk7XG4gICAgICAgIC8v5Yib5bu6XG4gICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKHR5cGUpO1xuICAgIH1cblxuICAgIC8qKuaVsOaNruWIneWni+WMliAqL1xuICAgIHByaXZhdGUgc2V0RGF0YUluaXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBDb3VudHJ5RGF0YS5pbnNfLmdldE1vdmVTcGVlZCgpO1xuICAgICAgICB0aGlzLnRvd2FyZCA9IHtcbiAgICAgICAgICAgIHg6MTAwMCxcbiAgICAgICAgICAgIHk6MCxcbiAgICAgICAgICAgIHNwZWVkOnRoaXMuc3BlZWQscm90YXRpb246dW5kZWZpbmVkLFxuICAgICAgICAgICAgdGFyZ2V0Um90YXRpb246dW5kZWZpbmVkLFxuICAgICAgICAgICAgcm90YXRpb25DaGFuZ2UgOiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudG93YXJkUG9zID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuc3RvcERpID0gMDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5byA5aeL6KGM5YqoICovXG4gICAgcHVibGljIG9wZW5CZWhhdmlvdXIoKTp2b2lkXG4gICAge1xuICAgICAgICAvL+i/kOihjOS6humAu+i+kVxuICAgICAgICBpZih0aGlzLmlzT3V0KSBcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zT3V0KCk7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZShPdXRDb3VudHJ5RGF0YS5pbnNfLmxpbWl0VGltZSo2MCx0aGlzLHRoaXMubGltaXRUaW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGVvcGxlX1Bvc0lubmVyKCk7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmxvb3AoMTYsdGhpcyx0aGlzLnBlb3BsZV9Qb3NJbm5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirnlJ/miJDkurogKi9cbiAgICBwcml2YXRlIGNyZWF0ZVBlb3BsZSh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgICB0aGlzLmNyZWF0ZVNwKHR5cGUpO1xuICAgIH1cblxuICAgIC8qKuWIm+W7ulNwcml0ZSAqL1xuICAgIHByaXZhdGUgY3JlYXRlU3AodHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgaW1nVXJsID0gXCJtYXAvXCIrdHlwZStcIi5wbmdcIjtcbiAgICAgICAgaWYoIXRoaXMuc3ApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3AgPSBuZXcgTGF5YS5TcHJpdGUoKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnNwKTtcbiAgICAgICAgfVxuICAgICAgICAvL+a1i+ivlVxuICAgICAgICB0aGlzLnNwLnpPcmRlciA9IDExO1xuICAgICAgICB0aGlzLnNwLmxvYWRJbWFnZShpbWdVcmwpO1xuICAgICAgICB0aGlzLnNwLnNpemUoMTIsMTIpO1xuICAgICAgICB0aGlzLnNwLnBpdm90KHRoaXMuc3Aud2lkdGgvMix0aGlzLnNwLmhlaWdodC8yKTsgICAgICAgIFxuICAgIH1cblxuICAgIC8qKuiuvue9ruWIneWni+S9jee9riAqL1xuICAgIHB1YmxpYyBzZXRQb3MoeCx5LHNwOkxheWEuU3ByaXRlKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNwLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwLnggPSB4O1xuICAgICAgICB0aGlzLnNwLnkgPSB5O1xuICAgICAgICB0aGlzLmJvcm5Ob2RlID0gc3A7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWimeWkluS6uuihjOWKqOmAu+i+kSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgcHJpdmF0ZSBwZW9wbGVfUG9zT3V0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+e7meS6iOmaj+acuuaWueWQke+8jOaWueWQkeeUqCgtMX4xKeihqOekulxuICAgICAgICBpZih0aGlzLnNwLng8PTkwMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuc3AueD49MTEwMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kaXJYPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKSoyLTE7XG4gICAgICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKSoyLTE7XG4gICAgICAgIH1cbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7TvvIzlnKjmraTml7bpl7TlhoXnp7vliqgs6ZqP5py65pe26Ze05ZyoKDIsOCnkuK3pgInmi6lcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo2KzI7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNsb3NlTW92ZVRpbWVyKTtcbiAgICAgICAgLy/lvIDlkK/np7vliqhcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcbiAgICB9XG4gICAgXG4gICAgLyoq5Y2V5L2N5bin56e75YqoKi9cbiAgICBwcml2YXRlIG1vdmVEaXN0YW5jZSgpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3AueCs9dGhpcy5kaXJYO1xuICAgICAgICB0aGlzLnNwLnkrPXRoaXMuZGlyWTtcbiAgICB9XG5cbiAgICAvKirlhbPpl63np7vliqjlrprml7blmajvvIzlvIDlkK/ljp/lnLDkvJHmga8qL1xuICAgIHByaXZhdGUgY2xvc2VNb3ZlVGltZXIoKTp2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xuICAgICAgICAvL+S8keaBr+aXtumXtOe7k+adn+WQjue7p+e7reenu+WKqFxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjYrMjtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMucGVvcGxlX1Bvc091dCk7XG4gICAgfVxuICAgIFxuICAgIC8qKua7nueVmeaXtumXtO+8jOiLpei2hei/h+aXtumXtO+8jOWwseemu+W8gOWkluWfjiAqL1xuICAgIHByaXZhdGUgbGltaXRUaW1lKCk6dm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcbiAgICAgICAgaWYodGhpcy5zcC54PD0xMDAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLmRpclk9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XG4gICAgfVxuXG4gICAgXG5cbiAgICAvKirnorDmkp7mo4DmtYsgKi9cbiAgICBwcml2YXRlIGNoZWNrTGltaXRfT3V0KCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/ovrnnlYzmo4DmtYtcbiAgICAgICAgaWYodGhpcy5zcC54PC01fHx0aGlzLnNwLng+MjAwNXx8dGhpcy5zcC55PC01KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUoKTtcbiAgICAgICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQtLTtcbiAgICAgICAgICAgIC8vIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQ8T3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKVxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMztcbiAgICAgICAgICAgIC8vICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG5cbiAgICAgICAgLy/miqTln47msrPmo4DmtYtcbiAgICAgICAgaWYodGhpcy5zcC55Pj0zOTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6YeN5paw57uZ5LiA5Liq5L2N56e7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/ln47pl6jljLrln5/mo4DmtYtcbiAgICAgICAgaWYodGhpcy5zcC54PjkzMiYmdGhpcy5zcC54PDEwNjgmJnRoaXMuc3AueT4zNTAmJnRoaXMuc3AueTwzOTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v5Z+O6Zeo5piv5ZCm5omT5byAXG4gICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKHRydWUpO1xuICAgICAgICAgICAgICAgIC8v5Z+O5aSW5Lq65Y+jLTFcbiAgICAgICAgICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50LS07XG4gICAgICAgICAgICAgICAgLy/lm73lrrbkurrlj6MrMVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18ucG9wdWxhdGlvbisrO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5faW5uZXJQZW9wbGUrKztcbiAgICAgICAgICAgICAgICAvLyBpZihPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50PE91dENvdW50cnlEYXRhLmluc18ubWF4Q291bnQtMSlcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMztcbiAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLGNyZWF0ZVBlb3BsZSk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18ubW92ZUFycmF5KHRydWUsdGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW9wbGVJbnRvKCk7XG4gICAgICAgICAgICAgICAgLy8gQ291bnRyeURhdGEuaW5zXy5jYWxfTWFpbkRhdGEoR2FtZUNvbmZpZy5NQUlOX1BPUFVMQVRJT04sMSk7XG4gICAgICAgICAgICAgICAgLy8gaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjM7XG4gICAgICAgICAgICAgICAgLy8gICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNyZWF0ZSAgICBQZW9wbGUpO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5aKZ5YaF5Lq66KGM5Yqo6YC76L6RKi9cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirlopnlhoXkurrooYzliqjpgLvovpEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXG4gICAge1xuXG4gICAgICAgIC8vIHRoaXMudG93ZWRUb01vdmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VHJhZ2V0KHRhcmdldDpMYXlhLlNwcml0ZSkgOiB2b2lkXG4gICAge1xuICAgICAgICAvLyB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXQ7XG4gICAgICAgIC8v5rWL6K+VXG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IHRhcmdldDtcbiAgICAgICAgLy8gdGhpcy50b3dhcmQueCA9IHRhcmdldC54O1xuICAgICAgICAvLyB0aGlzLnRvd2FyZC55ID0gdGFyZ2V0Lnk7XG4gICAgfVxuXG4gICAgLyoqdG93ZXJk6L2s5YyW5oiQ5L2N56e7ICovXG4gICAgcHJvdGVjdGVkIHRvd2VkVG9Nb3ZlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZighdGhpcy50b3dhcmQucm90YXRpb24pIHRoaXMudG93YXJkLnJvdGF0aW9uID0gVG9vbC5yb3RhdGVSb3BlUG9pbnRfMih0aGlzLnNwLngsdGhpcy5zcC55LHRoaXMudGFyZ2V0Tm9kZS54LHRoaXMudGFyZ2V0Tm9kZS55KTs7XG4gICAgICAgIHRoaXMucGVvcGxlVG93ZXJkKCk7Ly/orqnnm67moIfmnJ3lkJHorqHnrpfmlbBcbiAgICB9XG5cbiAgICAvKirmnJ3lkJEgIHRvd2VyZOenu+WKqCAqL1xuICAgIHByaXZhdGUgcG9zTW92ZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcC54ICs9IHRoaXMudG93YXJkLnNwZWVkKlRvb2wucm90YXRpb25TZXQodGhpcy50b3dhcmQucm90YXRpb24sXCJzaW5cIik7XG4gICAgICAgIHRoaXMuc3AueSArPSB0aGlzLnRvd2FyZC5zcGVlZCpUb29sLnJvdGF0aW9uU2V0KHRoaXMudG93YXJkLnJvdGF0aW9uLFwiY29zXCIpO1xuICAgICAgICB0aGlzLnNwLnJvdGF0aW9uID0gdGhpcy50b3dhcmQucm90YXRpb247XG4gICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMudGFyZ2V0Tm9kZSx0aGlzLnNwKSkge1xuICAgICAgICAgICAgaWYodGhpcy50YXJnZXROb2RlLm5hbWUgPT0gXCJzcF9kb29yXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5nb091dCh0aGlzLnR5cGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdG9yeVBlb3BsZSh0cnVlKTsgICAgICAgICBcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLm1vdmVBcnJheShmYWxzZSx0aGlzKTsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5kb29yUGVvcGxlX1RvT3V0KCk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7ICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5zcC54IDwgMCB8fCB0aGlzLnNwLnkgPiA5MDAgfHwgdGhpcy5zcC54ID4gMjAwMCkge3RoaXMuZGVzdG9yeVBlb3BsZSgpO31cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zcC5yb3RhdGlvbik7XG4gICAgfVxuICAgIFxuICAgIC8qKuS6uumdouWQkSAqL1xuICAgIHByb3RlY3RlZCBwZW9wbGVUb3dlcmQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKCk7Ly/ojrflvpfkupTkuKrngrnvvIzmoLnmja7nm67moIflnZDmoIforqHnrpdcbiAgICAgICAgdGhpcy50ZXN0VG93ZXJkKCk7Ly/mo4DmtYvmmK/lkKbnrKblkIjopoHmsYIg5LiN56ym5ZCIICsgLSA1XG4gICAgfVxuXG4gICAgLyoq5qOA5rWL6KGM6LWw5pa55ZCRICovXG4gICAgcHJvdGVjdGVkIHRlc3RUb3dlcmQoKSA6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGxldCBwb3dlciA9IHRoaXMudGVzdENvbGlkZXIoKTsvLyAtMSAwIDEgMiAzIDQgNVxuICAgICAgICBpZihwb3dlciA+IDApXG4gICAgICAgIHsvL+aSnuWIsOS6humcgOimgei9rOaWueWQkVxuICAgICAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2UgPSAwO1xuICAgICAgICAgICAgdGhpcy5zcGVlZEN0cihwb3dlcik7XG4gICAgICAgICAgICB0aGlzLmp1ZGdlTGVmdFJpZ2h0KCk7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucG9zTW92ZSgpOy8v56e75YqoXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maW5kVGFyZ2V0KCk7XG4gICAgICAgIHRoaXMudG93YXJkLnNwZWVkID0gdGhpcy5zcGVlZDsgICAgICBcbiAgICAgICAgdGhpcy5wb3NNb3ZlKCk7Ly/np7vliqggIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKirpgJ/luqbmjqfliLYgKi9cbiAgICBwcml2YXRlIHNwZWVkQ3RyKHBvd2VyKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudG93YXJkLnNwZWVkID0gdGhpcy5zcGVlZCooKHBvd2VyKzEpLyh0aGlzLnRvd2FyZFBvcy5sZW5ndGgrMikpOyBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzcGVlZCA6OlwiICsgdGhpcy50b3dhcmQuc3BlZWQpO1xuICAgIH1cblxuICAgIC8qKuWIpOaWreaWueWQkSAqL1xuICAgIHByb3RlY3RlZCBqdWRnZUxlZnRSaWdodCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zdG9wRGkrKztcbiAgICAgICAgaWYodGhpcy5zdG9wRGk+MzYpIHt0aGlzLnN0b3BEaSA9IDA7cmV0dXJuO31cbiAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2UgKz0gR2FtZUNvbmZpZy5URVNUX1BPSU5UX1JPO1xuICAgICAgICBsZXQgcm8xID0gdGhpcy50b3dhcmQucm90YXRpb24gLSB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZTtcbiAgICAgICAgbGV0IHJvMiA9IHRoaXMudG93YXJkLnJvdGF0aW9uICsgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2U7XG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKHJvMSk7XG4gICAgICAgIGxldCBudW1SbzEgPSB0aGlzLnRlc3RDb2xpZGVyKCk7XG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKHJvMik7XG4gICAgICAgIGxldCBudW1SbzIgPSB0aGlzLnRlc3RDb2xpZGVyKCk7XG4gICAgICAgIGlmKG51bVJvMSA9PSAtMSkge3RoaXMudG93YXJkLnJvdGF0aW9uID0gcm8xOyByZXR1cm47fVxuICAgICAgICBpZihudW1SbzIgPT0gLTEpIHt0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvMjsgcmV0dXJuO31cbiAgICAgICAgdGhpcy5qdWRnZUxlZnRSaWdodCgpO1xuICAgIH1cblxuICAgIC8qKmZpbmRUYXJnZXTlr7vmib7nm67moIcgKi9cbiAgICBwcml2YXRlIGZpbmRUYXJnZXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBDYSA9IHRoaXMudG93YXJkLnJvdGF0aW9uIC0gdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb247XG4gICAgICAgIGlmKENhID4gMCkgdGhpcy50b3dhcmQucm90YXRpb24gLT0gNTtcbiAgICAgICAgICAgIGVsc2UgaWYoIENhIDwgMCApIHRoaXMudG93YXJkLnJvdGF0aW9uICs9NTtcbiAgICAgICAgaWYoIE1hdGguYWJzKENhKSA8IDUpIHRoaXMudG93YXJkLnJvdGF0aW9uICs9IENhO1xuICAgIH0gICBcblxuICAgIC8qKuajgOa1i+aYr+WQpueisOaSniDmkp7liLDkuobov5Tlm550dXJlIC0x5Y+v5Lul6LWwIDDku6XkuIrooajnpLrnorDmkp7liLDlk6rkuKrngrkqL1xuICAgIHByb3RlY3RlZCB0ZXN0Q29saWRlcigpIDogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgbnVtID0gLTE7XG4gICAgICAgIGxldCBhcmVhIDogQXJyYXk8TGF5YS5TcHJpdGU+PSBEYXRhTWFuYWdlci5pbnNfLmFycl9SaWdodEFyZWE7XG4gICAgICAgIGlmKHRoaXMuc3AueDw5ODEpIGFyZWEgPSBEYXRhTWFuYWdlci5pbnNfLmFycl9MZWZ0QXJlYTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhcmVhLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMuYm9ybk5vZGUsdGhpcy5zcCkpIHtyZXR1cm4gLTE7fVxuICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QoYXJlYVtpXSx0aGlzLnNwKSl7cmV0dXJuIDA7fS8v5aaC5p6c5bey57uP5pKe5LiK5LqG44CCICAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBoID0gMDtoPHRoaXMudG93YXJkUG9zLmxlbmd0aDtoKyspXG4gICAgICAgICAgICB7Ly/kupTkuKrngrnmo4DmtYtcbiAgICAgICAgICAgICAgICBpZihUb29sLmJsb2NrVGVzdCh0aGlzLnRhcmdldE5vZGUsdGhpcy50b3dhcmRQb3NbaF0pKXtyZXR1cm4tMTt9XG4gICAgICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QoYXJlYVtpXSx0aGlzLnRvd2FyZFBvc1toXSkpXG4gICAgICAgICAgICAgICAgey8v56a75Lq65pyA6L+R55qE54K5XG4gICAgICAgICAgICAgICAgICAgIG51bSA9IGgrMTsvLzHvvIwy77yMM++8jDTvvIw1XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW07XG4gICAgfVxuXG4gICAgLyoq5Lq66Z2i5ZCR55qE5LqU5Liq5qOA5rWL54K5ICovXG4gICAgcHJvdGVjdGVkIGdldFRvd2VyZFBvcyhyb3RhdGlvblRlc3Q/KSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCByb3RhdGlvbiA9IHRoaXMudG93YXJkLnJvdGF0aW9uOy8v5L2/55So5b2T5YmN6Z2i5ZCRXG4gICAgICAgIGlmKHJvdGF0aW9uVGVzdCkgcm90YXRpb24gPSByb3RhdGlvblRlc3Q7XG4gICAgICAgIGVsc2UgdGhpcy5rZWVwVG93ZXJkRGF0YSgpOy8v5L+d5a2YIOeOsOWcqOS4uuatouWIsOebruagh+eCueeahOinkuW6plxuICAgICAgICBpZihyb3RhdGlvbiA9PT0gdW5kZWZpbmVkKSBcbiAgICAgICAgey8v5aaC5p6c6KeS5bqm5pivdW5kZWZcbiAgICAgICAgICAgIHJvdGF0aW9uID0gdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb24vL+ebruagh+inkuW6pu+8jOWIneWni+inkuW6piAgIFxuICAgICAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5L2N56e76ZyA6KaB55qE5Y+Y6YePXG4gICAgICAgIGxldCBjb3MgOiBudW1iZXIgPSBUb29sLnJvdGF0aW9uU2V0KHJvdGF0aW9uLFwiY29zXCIpO1xuICAgICAgICBsZXQgc2luIDogbnVtYmVyID0gVG9vbC5yb3RhdGlvblNldChyb3RhdGlvbixcInNpblwiKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLXg6OlwiICsgdGhpcy5zcC54ICsgXCJ5OjpcIiArIHRoaXMuc3AueSk7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8R2FtZUNvbmZpZy5URVNUX1BPSU5UX0NPVU5UO2krKykvL+iusOW9leS6lOS4qlxuICAgICAgICB7IFxuICAgICAgICAgICAgaWYoIXRoaXMudG93YXJkUG9zW2ldKSB0aGlzLnRvd2FyZFBvc1tpXSA9IHt9OyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRvd2FyZFBvc1tpXS54ID0gdGhpcy5zcC54ICsgR2FtZUNvbmZpZy5URVNUX1BPSU5UX0RJQypzaW4qKGkrMSk7XG4gICAgICAgICAgICB0aGlzLnRvd2FyZFBvc1tpXS55ID0gdGhpcy5zcC55ICsgR2FtZUNvbmZpZy5URVNUX1BPSU5UX0RJQypjb3MqKGkrMSk7IFxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG93YXJkUG9zKTtcbiAgICB9XG5cbiAgICAvKirkv53lrZggdG93ZXLkv6Hmga8gKi9cbiAgICBwcm90ZWN0ZWQga2VlcFRvd2VyZERhdGEoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v5a2Y5YKo546w5Zyo54K55Yiw55uu5qCH6KeS5bqmXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICB0aGlzLnRvd2FyZC50YXJnZXRSb3RhdGlvbiA9IFRvb2wucm90YXRlUm9wZVBvaW50XzIodGhpcy5zcC54LHRoaXMuc3AueSx0aGlzLnRhcmdldE5vZGUueCx0aGlzLnRhcmdldE5vZGUueSk7XG4gICAgfVxuXG4gICAgLyoq5Zyo6L+Q6KGM56e75Yqo6YC76L6R5LmL5YmNIOeahOeJueauiuaTjeS9nCAqL1xuICAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLyoqKlxuICAgICAqIOi/m+eoiyAvIOWHuuWfjumAu+i+kSBcbiAgICAgKiBAdHlwZSB0cnVl6L+b5Z+OICBmYWxzZeWHuuWfjlxuICAgICovXG4gICAgcHVibGljIHBlb3BsZUdvKHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgICAgIGlmKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAvL+i/m+WfjuaWueazlVxuICAgICAgICAgICAgICAgIHRoaXMub3V0UGVvcGxlX1RvRG9vcigpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy/lh7rln47mlrnms5VcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZU91dCgpO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuWfjuWkluW8uuWItui/m+mXqCAqL1xuICAgIHByaXZhdGUgb3V0UGVvcGxlX1RvRG9vcigpOnZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XG4gICAgICAgIGxldCBkaXJYPTEwMDAtdGhpcy5zcC54O1xuICAgICAgICBsZXQgZGlyWT00MTAtdGhpcy5zcC55O1xuICAgICAgICBsZXQgZGlzPU1hdGguc3FydChNYXRoLnBvdygxMDAwLXRoaXMuc3AueCwyKStNYXRoLnBvdyg0MTAtdGhpcy5zcC55LDIpKTtcbiAgICAgICAgdGhpcy5kaXJYPWRpclgvZGlzO1xuICAgICAgICB0aGlzLmRpclk9ZGlyWS9kaXM7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcbiAgICB9XG5cbiAgICAvKirpl6jlvLrliLblh7rln47lpJYgKi9cbiAgICBwcml2YXRlIGRvb3JQZW9wbGVfVG9PdXQoKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmlzT3V0ID0gdHJ1ZTtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcbiAgICAgICAgbGV0IHg9TWF0aC5yYW5kb20oKSoxMzYrOTMyO1xuICAgICAgICBsZXQgeT0zNTA7XG4gICAgICAgIHRoaXMuc2V0UG9zKHgseSx0aGlzLnNwKTtcbiAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCkqMi0xO1xuICAgICAgICB0aGlzLmRpclk9LU1hdGgucmFuZG9tKCkqMC43LTAuMjtcbiAgICAgICAgLy8gdGhpcy5vcGVuQmVoYXZpb3VyKCk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcbiAgICB9XG5cbiAgIC8qKuWHuuWfjumAu+i+kSAqL1xuICAgcHJvdGVjdGVkIHBlb3BsZU91dCgpIDogdm9pZFxuICAge1xuICAgICAgICB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJzcF9kb29yXCIpIGFzIExheWEuU3ByaXRlKTsvL+iuvue9ruebruagh+aYr+mXqFxuICAgfVxuXG4gICAvKirov5vln47mlrnms5Ug5LuO5q2j6Zeo5Yiw5p+Q5LiA5Liq5L2P5a6FKi9cbiAgIHByb3RlY3RlZCBwZW9wbGVJbnRvKCkgOiB2b2lkXG4gICB7XG4gICAgICAgIGxldCBib3JuTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcInNwX2Rvb3JcIikgYXMgTGF5YS5TcHJpdGU7XG4gICAgICAgIHRoaXMuaXNPdXQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xuICAgICAgICB0aGlzLnNldFBvcyhib3JuTm9kZS54LGJvcm5Ob2RlLnkgKyA0MCxib3JuTm9kZSk7XG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xuICAgICAgICB0aGlzLm9wZW5CZWhhdmlvdXIoKTtcbiAgIH1cblxuICAgLyoq5LuOaG91c2XkuK3ojrflj5Yg5LiA5Liq6ZqP5py655qE54K5ICovXG4gICBwcm90ZWN0ZWQgZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKSA6IExheWEuU3ByaXRlXG4gICB7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKCgoaG91c2VOb2RlIGFzIExheWEuU3ByaXRlKS5fY2hpbGRyZW4ubGVuZ3RoLTEpKnJhbmRvbSk7XG4gICAgICAgIGxldCB0YXJnZXROb2RlIDpMYXlhLlNwcml0ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIgLS0tLS0tLS0tIGdldFRhcmdldCBcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5kZXggOjpcIiArIGluZGV4KTtcbiAgICAgICAgaWYoaW5kZXggPj0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGhvdXNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvdXNlX1wiK2luZGV4KTtcbiAgICAgICAgICAgIGlmKHRhcmdldE5vZGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwi6ZqP5py65pWw5Y+W6ZSZXCIpO1xuICAgICAgICAvLyB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XG4gICB9XG5cbiAgICAvKirkurrmtojlpLEgaXNyZWNvdmVy5LiN5Zue5pS25ZCXICovXG4gICAgcHJvdGVjdGVkIGRlc3RvcnlQZW9wbGUobm90UmVjb3Zlcj8pIDogdm9pZFxuICAgIHsgICBcbiAgICAgICAgaWYoIW5vdFJlY292ZXIpIExheWEuUG9vbC5yZWNvdmVyKHRoaXMudHlwZSx0aGlzKTtcbiAgICAgICAgdGhpcy5zcC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XG4gICAgICAgIC8vXG4gICAgICAgIGlmKCF0aGlzLmlzT3V0KSB0aGlzLmRlc3RvcnlJbm5lcigpO1xuICAgIH1cblxuICAgIC8qKuWimeWGheS6uuWIoOmZpCDnibnmrorlpITnkIYgKi9cbiAgICBwcm90ZWN0ZWQgZGVzdG9yeUlubmVyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+iuoeaXtuWZqOa4healmlxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5wZW9wbGVfUG9zSW5uZXIpO1xuICAgICAgICBzd2l0Y2godGhpcy50eXBlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuQ09NTU9OX01BTjpcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMF0+MClcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMF0tLTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuQkFORElUX01BTjpcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbM10+MClcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbM10tLTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuUk9CQkVSX01BTjpcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbNF0+MClcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbNF0tLTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuU0NJRU5USVNUX01BTjpcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMV0+MClcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMV0tLTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuU1RBUl9NQU46XG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzJdPjApXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzJdLS07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclRpbWVyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLmxpbWl0VGltZSk7XG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLnBlb3BsZV9Qb3NJbm5lcik7XG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLmNsb3NlTW92ZVRpbWVyKTtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLHRoaXMucGVvcGxlX1Bvc091dCk7XG4gICAgfVxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbmRpdCBleHRlbmRzIFBlb3BsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirmiqLliqvnmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3V0TW9uZXlUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze06L+b6KGM5YG355uXKDUtOCnliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjUrMztcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzlgbfnm5dcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5DdXRNb25leSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgLy/ml7bpl7TlkI7miqLliqtcclxuICAgIHByaXZhdGUgQ3V0TW9uZXkoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJhbmRvbT1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGlmKHJhbmRvbTwwLjUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+aKouWKq+aIkOWKn1xyXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLm1vbmV5PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCsxMCk7XHJcbiAgICAgICAgICAgIHRoaXMubG93U3VwcG9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtOi/m+ihjOWBt+eblyg1LTgp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo1KzM7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5YG355uXXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuQ3V0TW9uZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumZjeS9juW5uOemj+W6piAqL1xyXG4gICAgcHJpdmF0ZSBsb3dTdXBwb3J0KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIENvdW50cnlEYXRhLmluc18ucG9wdWxhclN1cHBvcnQtPTAuMTtcclxuICAgIH1cclxuXHJcbiAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgfVxyXG5cclxuICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgdGhpcy5jdXRNb25leVRpbWUoKTtcclxuICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcbmltcG9ydCBUb29sIGZyb20gXCIuLi8uLi9Ub29sL1Rvb2xcIjtcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uLy4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiBleHRlbmRzIFBlb3BsZXtcblxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpOyAgICAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICAvKirlopnlhoXpgLvovpEgKi9cbiAgICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvLyB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcInBhbGFjZVwiKSBhcyBMYXlhLlNwcml0ZSk7XG4gICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcbiAgICB9XG5cbiAgICAvKirph43lhplzcGVjaWFsZG8gKi9cbiAgICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+iOt+WPluWNoOavlOaVsOe7hFxuICAgICAgICBsZXQgYXJyX3BlcmNlbnQgPSBUb29sLmdldFBlcmNlbnRBcmVhKENvdW50cnlEYXRhLmluc18uYXJyX3BlcnNvblBlcmNlbnROYW1lKTtcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhcnJfcGVyY2VudC5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZighYXJyX3BlcmNlbnRbaSsxXSkgYnJlYWs7XG4gICAgICAgICAgICBpZihhcnJfcGVyY2VudFtpXSA8IHJhbmRvbSAmJiByYW5kb20gPD0gYXJyX3BlcmNlbnRbaSsxXSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCkge2NvbnNvbGUubG9nKFwi5qaC546H6K6h566X5Ye66ZSZXCIpO3JldHVybjt9XG4gICAgICAgIGxldCBob3VzZU5vZGUgPSB0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKTtcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcbiAgICAgICAgZm9yKGxldCBpPTA7dHJ1ZTtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XG4gICAgICAgICAgICBpZih0YXJnZXROb2RlICE9PSB0aGlzLmJvcm5Ob2RlKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2goaW5kZXgpXG4gICAgICAgIHsgICAgLyoqMC3ljLvnlJ8gMS3orablr58gMi3llYbkurogLTPmuLjmiYvlpb3pl7IgLTTlhpzmsJEqL1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwiaG9zcGl0YWxcIikgYXMgTGF5YS5TcHJpdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpOyAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMucGVvcGxlT3V0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJmYXJtXCIpIGFzIExheWEuU3ByaXRlKTsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2JiZXIgZXh0ZW5kcyBQZW9wbGV7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWBt+WPlui0ouaUv+eahOaWueW8jyzlhYjnu5nkuojml7bpl7QgKi9cclxuICAgIHB1YmxpYyBjdXRNb25leVRpbWUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7Tov5vooYzlgbfnm5coMy02KeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMyszO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOWBt+ebl1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLkN1dE1vbmV5KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aXtumXtOWQjuWBt+WPllxyXG4gICAgcHJpdmF0ZSBDdXRNb25leSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcmFuZG9tPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgaWYocmFuZG9tPDAuNSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5YG355uX5oiQ5YqfXHJcbiAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18ubW9uZXktPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XHJcbiAgICAgICAgICAgIHRoaXMubG93U3VwcG9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtOi/m+ihjOWBt+eblygzLTYp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSozKzM7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5YG355uXXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuQ3V0TW9uZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumZjeS9juW5uOemj+W6piAqL1xyXG4gICAgcHJpdmF0ZSBsb3dTdXBwb3J0KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIENvdW50cnlEYXRhLmluc18ucG9wdWxhclN1cHBvcnQtPTAuMDU7XHJcbiAgICB9XHJcbiAgICAvKirlopnlhoUgKi9cclxuICAgLyoq5aKZ5YaF6YC76L6RICovXHJcbiAgIHByb3RlY3RlZCBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xyXG4gICAgICAgdGhpcy50b3dlZFRvTW92ZSgpO1xyXG4gICB9XHJcblxyXG4gICAvKirph43lhplzcGVjaWFsZG8gKi9cclxuICAgcHJvdGVjdGVkIHNwZWNpYWxEbygpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XHJcbiAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgZm9yKGxldCBpPTA7dHJ1ZTtpKyspXHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgICAgICBpZih0YXJnZXROb2RlICE9PSB0aGlzLmJvcm5Ob2RlKSBicmVhaztcclxuICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTtcclxuICAgICAgICB0aGlzLmN1dE1vbmV5VGltZSgpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuaW1wb3J0IFRvb2wgZnJvbSBcIi4uLy4uL1Rvb2wvVG9vbFwiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaWVudGlzdCBleHRlbmRzIFBlb3BsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirkuqfnlJ/np5HmioDnmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3JlYXRlVGVjaG5vbG9neVRpbWUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7QoMS0zKeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMisxO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOS6p+eUn+enkeaKgOWAvFxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLmNyZWF0ZVRlY2hub2xvZ3kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuS6p+eUn+enkeaKgOWAvCAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVUZWNobm9sb2d5KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIENvdW50cnlEYXRhLmluc18udGVjaG5vbG9neSs9MC41O1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze0KDEtMynliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjIrMTtcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzkuqfnlJ/np5HmioDlgLxcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5jcmVhdGVUZWNobm9sb2d5KTtcclxuICAgIH1cclxuICAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnRvd2VkVG9Nb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZWNobm9sb2d5XCIpIGFzIExheWEuU3ByaXRlKTsgICAgXHJcbiAgICAgICAgdGhpcy5jcmVhdGVUZWNobm9sb2d5VGltZSgpOyAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuaW1wb3J0IFRvb2wgZnJvbSBcIi4uLy4uL1Rvb2wvVG9vbFwiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXIgZXh0ZW5kcyBQZW9wbGV7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5piO5pif5pWI5bqU55qE5pa55byPLOWFiOe7meS6iOaXtumXtCAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVN0YXJUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze0KDEtMynliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjIrMTtcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzkuqfnlJ/mlYjlupTlgLxcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5jcmVhdGVTdGFyVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuS6p+eUn+aViOW6lOWAvCDmlYjlupTlgLzkuLrlubjnpo/luqYqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVTdGFyVmFsdWUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgQ291bnRyeURhdGEuaW5zXy5wb3B1bGFyU3VwcG9ydCs9MC41O1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze0KDEtMynliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjIrMTtcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzkuqfnlJ/np5HmioDlgLxcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5jcmVhdGVTdGFyVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgLyoq5aKZ5YaF6YC76L6RICovXHJcbiAgIHByb3RlY3RlZCBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xyXG4gICAgICAgdGhpcy50b3dlZFRvTW92ZSgpO1xyXG4gICB9XHJcblxyXG4gICAvKirph43lhplzcGVjaWFsZG8gKi9cclxuICAgcHJvdGVjdGVkIHNwZWNpYWxEbygpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XHJcbiAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgZm9yKGxldCBpPTA7dHJ1ZTtpKyspXHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgICAgICBpZih0YXJnZXROb2RlICE9PSB0aGlzLmJvcm5Ob2RlKSBicmVhaztcclxuICAgICAgIH1cclxuICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xyXG4gICAgICAgdGhpcy5jcmVhdGVTdGFyVGltZSgpO1xyXG4gICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZW50ZXIgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aWR0aFwiICsgdGhpcy5zY3JlZW5XaWR0aCk7XG4gICAgICAgIGlmKHNjcmVlbldpZHRoIDwgODAwKSAodGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShcImdhbWVOYW1lXCIpIGFzIExheWEuTGFiZWwpLmZvbnRTaXplID0gMTI1O1xuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLlNwcml0ZSkueCA9IChzY3JlZW5XaWR0aC0gNjY3KS8yOyAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgV29ybGRFdmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvV29ybGRFdmVudE1hbmFnZXJcIjtcbmltcG9ydCB7IHVpIH0gZnJvbSBcIi4uLy4uL3VpL2xheWFNYXhVSVwiO1xuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1VJTWFuYWdlclwiO1xuaW1wb3J0IFBlb3BsZU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvUGVvcGxlTWFuYWdlclwiO1xuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uLy4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgTXNnRGlhbG9nIGZyb20gXCIuLi8uLi9Db3JlL01zZ0RpYWxvZ1wiO1xuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgQnV5RGlhbG9nIGZyb20gXCIuLi8uLi9Db3JlL0J1eURpYWxvZ1wiO1xuaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vLi4vUGVyZmViL1Blb3BsZVwiO1xuXG4vKipcbiAqIOS4lueVjOeuoeeQhuWZqOiEmuacrFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV29ybGQgZXh0ZW5kcyB1aS5HYW1lV29ybGRVSXtcbiAgICAvKipEYXRhTWFuYWdlciAg5Y2V5L6LICovXG4gICAgLyoq5LqL5Lu25Y+R55Sf5ZmoICovXG4gICAgcHJpdmF0ZSB3b3JsZEV2ZW50TWFuYWdlciA6IFdvcmxkRXZlbnRNYW5hZ2VyO1xuICAgIC8qKuS6uuexu+euoeeQhuWZqCovXG4gICAgcHJpdmF0ZSBwZW9wbGVNYW5hZ2VyIDogUGVvcGxlTWFuYWdlcjtcbiAgICAvKipVSeeuoeeQhuWZqCAqL1xuICAgIHByaXZhdGUgdWlNYW5hZ2VyIDogVUlNYW5hZ2VyO1xuICAgIC8qKua2iOaBr+mAmueUqOahhiAqL1xuICAgIHByaXZhdGUgbXNnRGlhbG9nIDogTXNnRGlhbG9nO1xuICAgIC8qKui0reS5sOahhiAqL1xuICAgIHByaXZhdGUgYnV5RGlhbG9nOkJ1eURpYWxvZztcbiAgICBcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKirlsY/luZXlrr3luqYgKi9cbiAgICBwcml2YXRlIHNjcmVlbldpZHRoIDogbnVtYmVyO1xuICAgIC8qKum8oOagh+aYr+WQpuaMieS4iyAqL1xuICAgIHByaXZhdGUgaXNEb3duIDogYm9vbGVhbjtcbiAgICAvKirpvKDmoIfngrnorrDlvZUgKi9cbiAgICBwcml2YXRlIG1vdXNlUG9zIDogYW55O1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKioybWlu6K6h5pe2ICovXG4gICAgcHJpdmF0ZSB0aW1lckNvdW50IDogbnVtYmVyO1xuICAgIC8qKuWHuumXtOmalOiuoeaXtiAqL1xuICAgIHByaXZhdGUgdGltZXJDb3VudF9vdXQgOiBudW1iZXI7XG4gICAgLyoq6L+bICovXG4gICAgcHJpdmF0ZSB0aW1lckNvdW50X2luIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmdhbWVEYXRhSW5pdCgpOy8v5ri45oiP5Y+Y6YeP5Yid5aeL5YyWXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTsvL+e7meahpea3u+WKoOS6i+S7tiBcbiAgICAgICAgdGhpcy5zY3JlZW5TZXR0aW5nKCk7Ly/lsY/luZXlsYXkuK1cbiAgICAgICAgdGhpcy5nYW1lU3RhcnQoKTsvL+a4uOaIj+a1geeoi+W8gOWni1xuICAgICAgICBEYXRhTWFuYWdlci5pbnNfLnNldEFyZWEodGhpcy5zcF9zY2VuZS5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpKTtcbiAgICAgICAgTGF5YS50aW1lci5sb29wKDEwMDAsdGhpcyx0aGlzLmN1cnJlbnRSYXRpbyk7XG4gICAgfVxuXG4gICAgLyoq5pWw5o2u5Yid5aeL5YyWICovXG4gICAgcHJpdmF0ZSBnYW1lRGF0YUluaXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMud29ybGRFdmVudE1hbmFnZXIgPSBuZXcgV29ybGRFdmVudE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyID0gbmV3IFBlb3BsZU1hbmFnZXIodGhpcy5zcF9zY2VuZSk7XG4gICAgICAgIHRoaXMudWlNYW5hZ2VyID0gbmV3IFVJTWFuYWdlcih0aGlzLnNwX1VJKTtcbiAgICAgICAgdGhpcy5tc2dEaWFsb2cgPSBuZXcgTXNnRGlhbG9nKCk7ICAgICAgXG4gICAgICAgIHRoaXMuYnV5RGlhbG9nPW5ldyBCdXlEaWFsb2coKTtcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IHt9O1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0ID0gMDtcbiAgICAgICAgdGhpcy50aW1lckNvdW50X2luID0gMDtcbiAgICB9XG5cbiAgICAvKirmt7vliqDkuovku7YgKi9cbiAgICBwcml2YXRlIGFkZEV2ZW50KCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvLyB0aGlzLnN0YWdlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyxmdW5jdGlvbihlKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAvLyB9KVxuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTix0aGlzLHRoaXMubW91c2VEb3duKTtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX1VQLHRoaXMsdGhpcy5tb3VzZVVwKTtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX01PVkUsdGhpcyx0aGlzLm1vdXNlTW92ZSk7XG4gICAgICAgIC8v57uZ6Zeo5biu54K554K55Ye75LqLICAgXG4gICAgICAgIHRoaXMuY2xpY2tIb3VzZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5kb29yQ3RyKTtcbiAgICAgICAgdGhpcy5jbGlja0hvdXNlLm9uKExheWEuRXZlbnQuTU9VU0VfT1ZFUix0aGlzLHRoaXMubW91c2VPdmVyKTtcbiAgICAgICAgdGhpcy5jbGlja0hvdXNlLm9uKExheWEuRXZlbnQuTU9VU0VfT1ZFUix0aGlzLHRoaXMubW91c2VPdXQpO1xuICAgICAgICAvL+WMu+mmhuS6i+S7tue7keWumlxuICAgICAgICB0aGlzLmhvc3BpdGFsLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkhPU1BJVEFMXSk7XG4gICAgICAgIC8v5Yab6Zif5LqL5Lu257uR5a6aXG4gICAgICAgIHRoaXMuYXJteS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5BUk1ZXSk7XG4gICAgICAgIC8v57Ku5LuT5LqL5Lu257uR5a6aXG4gICAgICAgIHRoaXMuZmFybS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5GQVJNXSk7ICAgICAgICBcbiAgICAgICAgLy/np5HmioDppobkuovku7bnu5HlrppcbiAgICAgICAgdGhpcy50ZWNobm9sb2d5Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLlRFQ0hOT0xPR1ldKTsgICAgICAgIFxuICAgICAgICAvL+aWsOmXu+eCueS6i+S7tue7keWumlxuICAgICAgICAvL3RoaXMuZXZlbnRIb3VzZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5FVkVOVF9IT1VTRV0pOyAgICAgXG4gICAgICAgIC8v5paw6Ze755qH5a6r57uR5a6aXG4gICAgICAgIHRoaXMucGFsYWNlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLlBBTEFDRV0pO1xuICAgIH1cblxuICAgIC8qKuWxj+W5lSDlsYDkuK0qL1xuICAgIHByaXZhdGUgc2NyZWVuU2V0dGluZygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IDkwMC8oTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodC9MYXlhLkJyb3dzZXIuY2xpZW50V2lkdGgpOy8v5bGP5bmV6auY5bqmXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiArIHRoaXMuc2NyZWVuV2lkdGgpO1xuICAgICAgICB0aGlzLnNwX3NjZW5lLnggPSAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCkvMjtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/kuovku7blm57osINcbiAgICAvKirpvKDmoIfmgqzmta4gKi9cbiAgICBwcml2YXRlIG1vdXNlT3ZlcigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5jbGlja0hvdXNlLmxvYWRJbWFnZShcIm1hcC9kb29ySG91c2UyLnBuZ1wiKTtcbiAgICB9XG5cbiAgICAvKirnprvlvIAgKi9cbiAgICBwcml2YXRlIG1vdXNlT3V0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmNsaWNrSG91c2UubG9hZEltYWdlKFwibWFwL2Rvb3JIb3VzZS5wbmdcIik7XG4gICAgfVxuXG4gICAgLyoq6Zeo55qE5byA5YWzICovXG4gICAgcHJpdmF0ZSBkb29yQ3RyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4pXG4gICAgICAgIHsvL+W8gOmXqFxuICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRvb3JDbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgey8v5YWz6ZeoXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kb29yT3BlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5YWz6ZeoICovXG4gICAgcHJpdmF0ZSBkb29yQ2xvc2UoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKCF0aGlzLmFuaTEuaXNQbGF5aW5nKSB0aGlzLmFuaTEucGxheSgwLGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKirlvIDpl6ggKi9cbiAgICBwcml2YXRlIGRvb3JPcGVuKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZighdGhpcy5hbmkyLmlzUGxheWluZyAmJiAhdGhpcy5hbmkxLmlzUGxheWluZykgdGhpcy5hbmkyLnBsYXkoMCxmYWxzZSk7XG5cbiAgICB9XG5cbiAgICAvKirnp7vliqggKi9cbiAgICBwcml2YXRlIG1vdXNlTW92ZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoIXRoaXMuaXNEb3duKSByZXR1cm47XG4gICAgICAgIGlmKHRoaXMubW91c2VQb3MueClcbiAgICAgICAge1xuICAgICAgICAgICB0aGlzLnNwX3NjZW5lLnggKz0gTGF5YS5zdGFnZS5tb3VzZVggLSB0aGlzLm1vdXNlUG9zLng7IFxuICAgICAgICAvLyAgICB0aGlzLnNwX3NjZW5lLnkgKz0gTGF5YS5zdGFnZS5tb3VzZVkgLSB0aGlzLm1vdXNlUG9zLng7XG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPiAwKSAgdGhpcy5zcF9zY2VuZS54ID0gMDtcbiAgICAgICAgICAgIGlmKHRoaXMuc3Bfc2NlbmUueCA8IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKSkgdGhpcy5zcF9zY2VuZS54ID0gIC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSBMYXlhLnN0YWdlLm1vdXNlWDtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy55ID0gTGF5YS5zdGFnZS5tb3VzZVk7XG4gICAgfVxuXG4gICAgLyoq5ouW5Yqo5oyJ5LiLICovXG4gICAgcHJpdmF0ZSBtb3VzZURvd24oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKirmi5bliqjmiqzotbcgKi9cbiAgICBwcml2YXRlIG1vdXNlVXAoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7IFxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IHVuZGVmaW5lZDsgICAgICAgXG4gICAgfVxuXG5cbiAgICAvKirngrnlh7sg6I635Y+W5bu6562R5L+h5oGvICovXG4gICAgcHJpdmF0ZSBvbkhvdXNlSW5mbyh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubXNnRGlhbG9nLnNob3dNc2codHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5pu05pawVUnmoI/kupTlpKfkuLvlgLzkv6Hmga8gKi9cbiAgICBwcml2YXRlIHVwZGF0ZVVJTWFpbkRhdGEoKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnRleHRfY291bnRfcG9wdWxhdGlvbi50ZXh0PU1hdGguY2VpbChDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXRpb24pLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudGV4dF9jb3VudF9wb3B1bGFyU3VwcG9ydC50ZXh0PU1hdGguY2VpbChDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXJTdXBwb3J0KS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnRleHRfY291bnRfbW9uZXkudGV4dD1NYXRoLmNlaWwoQ291bnRyeURhdGEuaW5zXy5tb25leSkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy50ZXh0X2NvdW50X3RlY2hub2xvZ3kudGV4dD1NYXRoLmNlaWwoQ291bnRyeURhdGEuaW5zXy50ZWNobm9sb2d5KS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnRleHRfY291bnRfcHJlc3RpZ2UudGV4dD1NYXRoLmNlaWwoQ291bnRyeURhdGEuaW5zXy5wcmVzdGlnZSkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgXG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeogOaciemXqFxuICAgIC8qKui0reS5sOeogOaciemXqCAqL1xuICAgIHB1YmxpYyBidXlSYXJlRG9vcigpOnZvaWRcbiAgICB7XG4gICAgICAgIFxuICAgIH1cbiAgICAvLy8vLy8vLy8vLy/muLjmiI/mtYHnqIvlvIDlp4svLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8qKua4uOaIj+a1geeoi+W8gOWniyAqL1xuICAgIHByaXZhdGUgZ2FtZVN0YXJ0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnVwZGF0ZVVJTWFpbkRhdGEoKTtcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLm9wZW5QZW9wbGVGYWN0b3J5KCk7Ly/kurrlj6PnlJ/miJDpgLvovpHov5DooYxcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLmNyZWF0ZVBlb3BsZV9Jbm5lcigpOy8v5YaF5Lq65Y+j55Sf5oiQXG4gICAgICAgIENvdW50cnlEYXRhLmluc18ub3BlblRpbWVyKCk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLnVwZGF0ZVVJTWFpbkRhdGEpO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/kurrlj6PmtYHliqjpgJrnn6XlmahcbiAgICAvKipcbiAgICAgKiDmtYHliqjmr5TkvovvvIwg6YCa55+l5ZmoXG4gICAgICogXG4gICAgICogICovXG4gICAgcHJpdmF0ZSBjdXJyZW50UmF0aW8oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudGltZXJDb3VudCsrO1xuICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0Kys7XG4gICAgICAgIHRoaXMudGltZXJDb3VudF9pbisrO1xuICAgICAgICBsZXQgY291bnRyeURhdGEgPSBDb3VudHJ5RGF0YS5pbnNfO1xuICAgICAgICBsZXQgQkkgPSBjb3VudHJ5RGF0YS5wZXJjZW50OyAgIC8v6L+bL+WHulxuICAgICAgICBsZXQgb3V0ZXJUYXJnZXQgPSBjb3VudHJ5RGF0YS5leGl0UGVvcGxlOy8v5Ye66Zeo55uu5qCH5pWwXG4gICAgICAgIGxldCBpbm5lclRhZ2V0ID0gY291bnRyeURhdGEuZW50ZXJQZW9wbGU7Ly/ov5vpl6jnm67moIfmlbBcbiAgICAgICAgbGV0IF9vdXRlciA9IGNvdW50cnlEYXRhLl9vdXRlclBlb3BsZTsvL+WHuuWfjuWPo+WunumZheWAvFxuICAgICAgICBsZXQgX2lubmVyID0gY291bnRyeURhdGEuX2lubmVyUGVvcGxlOy8v5YWl5Z+O5a6e6ZmF5YC8XG4gICAgICAgIGxldCBsYXN0VGltZSA9IDEyMCAtIHRoaXMudGltZXJDb3VudCAtIDU7Ly/ojrflj5bliankvZnml7bpl7TvvIzlpJrpooTmlK8xMOenklxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5Ye65q+U5L6LXCIgKyBCSSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Ye66Zeo55uu5qCH5pWwOjpcIiArIG91dGVyVGFyZ2V0ICArIFwiICB8fHwgIOWunumZheWHuumXqOaVsO+8mu+8mlwiICsgX291dGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLov5vpl6jnm67moIfmlbA6OlwiICsgaW5uZXJUYWdldCAgKyBcIiAgfHx8ICDlrp7pmYXov5vpl6jmlbDvvJrvvJpcIiArIF9pbm5lcik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Ymp5LiL5pe26Ze077ya77yaXCIgKyBsYXN0VGltZSk7XG5cbiAgICAgICAgaWYob3V0ZXJUYXJnZXQgPiBfb3V0ZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6YCa55+lXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVyQ291bnRfb3V0ID49IGxhc3RUaW1lLyhvdXRlclRhcmdldCAtIF9vdXRlcikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEucGVvcGxlR29PdXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXJDb3VudF9vdXQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGlubmVyVGFnZXQgPiBfaW5uZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6YCa55+lICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy50aW1lckNvdW50X2luID49IGxhc3RUaW1lLyhvdXRlclRhcmdldCAtIF9pbm5lcikpICBcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy50aW1lckNvdW50ID49IDEyMClcbiAgICAgICAgeyAgIFxuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50X2luID0gMDtcbiAgICAgICAgICAgIHRoaXMudGltZXJDb3VudF9vdXQgPSAwO1xuICAgICAgICAgICAgY291bnRyeURhdGEuX291dGVyUGVvcGxlID0gMDsvL+WunumZheWAvOW9kumbtlxuICAgICAgICAgICAgY291bnRyeURhdGEuX2lubmVyUGVvcGxlID0gMDsvL+WunumZheWAvOW9kumbtlxuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50ID0gMDtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9MDtpPG91dGVyVGFyZ2V0LV9vdXRlcjtpKyspLy/pgJrnn6Xlh7rln45cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dChmYWxzZSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8aW5uZXJUYWdldC1faW5uZXI7aSsrKS8v6YCa55+l6L+b56iLXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEucGVvcGxlR29PdXQodHJ1ZSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbkdhbWUgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkgOiB2b2lkXG4gICAge1xuXG4gICAgfVxuICAgIFxuXG4gICAgb25DbGljaygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS5TY2VuZS5vcGVuKFwiR2FtZVdvcmxkLnNjZW5lXCIpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuU3RvcnkgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkgOiB2b2lkXG4gICAge1xuXG4gICAgfVxuICAgIFxuXG4gICAgb25DbGljaygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS5TY2VuZS5vcGVuKFwiR2FtZVN0b3J5LnNjZW5lXCIpO1xuICAgIH1cbn0iLCJpbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHtcbiAgICAvL+iOt+WPluS4ieinkuWHveaVsOWAvFxuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRpb25EZWFsKGZ4Om51bWJlcixmeTpudW1iZXIsc3g6bnVtYmVyLHN5Om51bWJlcixnZXRTdHJpbmcpIDogbnVtYmVyXG4gICAge1xuICAgICAgICAvKirmlpzovrkgKi9cbiAgICAgICAgbGV0IGMgOiBudW1iZXIgPSBNYXRoLnNxcnQoTWF0aC5wb3coZnggLSBzeCwyKSArIE1hdGgucG93KGZ5IC0gc3ksMikpO1xuICAgICAgICAvKirkuLTovrkgKi9cbiAgICAgICAgbGV0IGEgOiBudW1iZXIgPSBzeCAtIGZ4O1xuICAgICAgICAvKirlr7novrkgKi9cbiAgICAgICAgbGV0IGIgOiBudW1iZXIgPSBzeSAtIGZ5O1xuICAgICAgICBcbiAgICAgICAgaWYoZ2V0U3RyaW5nID09IFwic2luXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIjc2luID09XCIgKyAoYi9jKSk7XG4gICAgICAgICAgICByZXR1cm4gKGIvYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihnZXRTdHJpbmcgPT0gXCJjb3NcIilcbiAgICAgICAge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiNjb3MgPT1cIiArIChhL2MpKTtcbiAgICAgICAgICAgIHJldHVybiAoYS9jKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIjdGFuID09XCIgKyAoYi9hKSk7Ly/lr7novrkg5q+UIOS4tOi+uSBcbiAgICAgICAgICAgIHJldHVybiAoYi9hKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKueisOaSnuajgOa1iyBkaWNOdW0g77ya6aKE6K6+6Led56a7IG9iamVjdDHlkoxvYmplY3Qy5Lyg5YWlc3ByaXRlLOaYr+aMieeFp+avj+S4qnNwcml0ZeeahOmUmueCueWcqOS4reW/g+S9jee9ruadpeiuoeeul+eahCAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvbGxpc2lvbkNoZWNrKG9iamVjdDEsb2JqZWN0MikgOiBib29sZWFuXG4gICAge1xuICAgICAgICBpZihNYXRoLmFicyhvYmplY3QxLnggLSBvYmplY3QyLngpPCBvYmplY3QxLndpZHRoLzIgKyBvYmplY3QyLndpZHRoLzImJlxuICAgICAgICAgICBNYXRoLmFicyhvYmplY3QxLnkgLSBvYmplY3QyLnkpIDwgb2JqZWN0MS5oZWlnaHQvMiArIG9iamVjdDIuaGVpZ2h0LzIpe1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0ZVJvcGVQb2ludF8yKHgseSxYLFkpOm51bWJlclxuICAgIHtcbiAgICAgICAgICAgIGxldCBjb3M9VG9vbC5yb3RhdGlvbkRlYWwoeCx5LFgsWSxcImNvc1wiKTtcbiAgICAgICAgICAgIGxldCBzaW49VG9vbC5yb3RhdGlvbkRlYWwoeCx5LFgsWSxcInNpblwiKTtcbiAgICAgICAgICAgIGxldCByb3RhdGlvbjtcbiAgICAgICAgICAgIGlmKGNvcz49MCYmc2luPjApe1xuICAgICAgICAgICAgICAgIHJvdGF0aW9uPSAxODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKS05MDtcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvczwwJiZzaW4+PTApe1xuICAgICAgICAgICAgICAgIHJvdGF0aW9uPTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpLTkwO1xuICAgICAgICAgICAgfWVsc2UgaWYoY29zPD0wJiZzaW48MCl7XG4gICAgICAgICAgICAgICAgcm90YXRpb249OTAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ZWxzZSBpZihjb3M+MCYmc2luPD0wKXtcbiAgICAgICAgICAgICAgICByb3RhdGlvbj0gOTAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih5IDwgWSkgcm90YXRpb24gKz0gMTgwO1xuICAgICAgICAgICAgcmV0dXJuIHJvdGF0aW9uO1xuICAgIH1cblxuICAgIC8qKuiOt+WPluinkuW6piBcbiAgICAgKiDnp7vliqjngrnlnKjliY1cbiAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Um90YXRpb24oeDEseTEseDIseTIpIDogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgY29zPVRvb2wucm90YXRpb25EZWFsKHgxLHkxLHgyLHkyLFwiY29zXCIpO1xuICAgICAgICBsZXQgc2luPVRvb2wucm90YXRpb25EZWFsKHgxLHkxLHgyLHkyLFwic2luXCIpO1xuICAgICAgICBsZXQgcm90YXRpb247XG4gICAgICAgIGlmKGNvcyA+PTAgJiYgc2luPjApe1xuICAgICAgICAgICAgcm90YXRpb24gPSA5MCArIDE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNvcyA8MCAmJiBzaW4+PTApe1xuICAgICAgICAgICAgcm90YXRpb24gPSAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29zID4wICYmIHNpbjw9MClcbiAgICAgICAge1xuICAgICAgICAgICAgcm90YXRpb24gPSAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29zIDw9MCAmJiBzaW48MClcbiAgICAgICAge1xuICAgICAgICAgICAgcm90YXRpb24gPSAxODAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdGF0aW9uO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogcm90YXRpb24gPSA0NSDop5LluqZcbiAgICAgKiDmsYIgY29zIOi/mOaYryBzaW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uU2V0KHJvdGF0aW9uLHR5cGVTdHJpbmcpICA6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IHIgO1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmKHJvdGF0aW9uIDwgMClcbiAgICAgICAge1xuICAgICAgICAgICAgcm90YXRpb24gKz0gMzYwKihNYXRoLmFicyhNYXRoLmZsb29yKHJvdGF0aW9uLzM2MCkrMikpOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmKE1hdGguZmxvb3Iocm90YXRpb24vMzYwKT4wKVxuICAgICAgICB7XG4gICAgICAgICAgICByb3RhdGlvbiAtPSAzNjAqTWF0aC5mbG9vcihyb3RhdGlvbi8zNjApO1xuICAgICAgICB9XG4gICAgICAgIHIgPSAocm90YXRpb24pLzE4MCpNYXRoLlBJOyAgICAgICAgXG4gICAgICAgIGlmKHR5cGVTdHJpbmcgPT0gXCJjb3NcIilcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmFicyhNYXRoLmNvcyhyKSk7XG4gICAgICAgICAgICBpZigocm90YXRpb24gPiAwICYmIHJvdGF0aW9uIDw9IDkwKSB8fCAocm90YXRpb24+MjcwICYmIHJvdGF0aW9uPD0zNjApKSAgdmFsdWUgPSAtdmFsdWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvczo6XCIgKyB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7ICAgICAgICAgXG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKE1hdGguc2luKHIpKTtcbiAgICAgICAgICAgIGlmKChyb3RhdGlvbj4xODAgJiYgcm90YXRpb24gPD0gMjcwKSB8fCAocm90YXRpb24+MjcwICYmIHJvdGF0aW9uPD0zNjApKSB2YWx1ZSA9IC12YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2luOjpcIiArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWUgICAgICAgIFxuICAgIH1cbiAgICAvKipcbiAgICAgKiDot53nprvorqHnrpdcbiAgICAgKiAyIOWvueixoVxuICAgICAqIGZpcnN0XG4gICAgICogc2Vjb25kXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjb3VudERpY19PYmplY3QoZjphbnksczphbnkpIDogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGYueCAtIHMueCwyKSArIE1hdGgucG93KGYueSAtIHMueSwyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pa55Z2X5qOA5rWLIFxuICAgICAqIFxuICAgICAqIOaWueWdl+WvueixoSBzcFxuICAgICAqIOajgOa1i+eahOeCuSDlr7nosaFcbiAgICAgKiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYmxvY2tUZXN0KHNwLHBvaW50KSA6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmKCFzcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgcG9pbnRMZWZ0IDogYW55ID17eDpzcC54IC0gc3Aud2lkdGgvMix5OnNwLnktc3AuaGVpZ2h0LzJ9O1xuICAgICAgICBsZXQgcG9pbnRSaWdodCA6IGFueSA9e3g6c3AueCArIHNwLndpZHRoLzIseTpzcC55K3NwLmhlaWdodC8yfTtcbiAgICAgICAgbGV0IHNfcG9pbnRMZWZ0ID0gcG9pbnQueCA+IHBvaW50TGVmdC54ICYmIHBvaW50Lnk+cG9pbnRMZWZ0Lnk7XG4gICAgICAgIGxldCBzX3BvaW50UmlnaHQgPSBwb2ludC54IDwgcG9pbnRSaWdodC54ICYmIHBvaW50Lnk8cG9pbnRSaWdodC55O1xuICAgICAgICBpZihzX3BvaW50TGVmdCAmJiBzX3BvaW50UmlnaHQpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdhbWVEYXRhIC0gQ291bnRyeURhdGFcbiAgICAgKiDljaDmr5Qg5pWw57uEXG4gICAgKuiOt+WPluWMuumXtOaVsOe7hCAwLDAuOCwwLjgzLDAuODQsMC45LDFcbiAgICAgKiBAYXJyIOWxnuaAp+WQjeWtl1xuICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRQZXJjZW50QXJlYShhcnIpOkFycmF5PG51bWJlcj5cbiAgICB7XG4gICAgICAgIGxldCBhcnJQZXJjZW50ID0gW107Ly/nlJ/kuqfmr5TkvotcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xuICAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlciArPSBDb3VudHJ5RGF0YS5pbnNfW2FycltpXV07XG4gICAgICAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyUGVyY2VudDtcbiAgICB9XG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xuaW1wb3J0IFNjZW5lPUxheWEuU2NlbmU7XG5leHBvcnQgbW9kdWxlIHVpIHtcclxuICAgIGV4cG9ydCBjbGFzcyBCdXlVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgYmc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9idXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ1eV9uYW1lOmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBidXlfaW5wdXQ6TGF5YS5UZXh0SW5wdXQ7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnV5X3ByaWNlOmxheWEuZGlzcGxheS5UZXh0O1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiQnV5XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBHYW1lV29ybGRVSSBleHRlbmRzIFNjZW5lIHtcclxuXHRcdHB1YmxpYyBhbmkxOkxheWEuRnJhbWVBbmltYXRpb247XG5cdFx0cHVibGljIGFuaTI6TGF5YS5GcmFtZUFuaW1hdGlvbjtcblx0XHRwdWJsaWMgc3Bfc2NlbmU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2dyb3VuZDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGV2ZW50SG91c2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzExOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcGFsYWNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3NwaXRhbDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xOTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRlY2hub2xvZ3k6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIxOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgZmFybTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMxOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBhcm15OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9yaXZlcjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3Bfd2FsbDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfZG9vcjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgY2xpY2tIb3VzZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfVUk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGltZ19wb3B1bGF0aW9uOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3BvcHVsYXRpb246bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ19wb3B1bGFyU3VwcG9ydDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9wb3B1bGFyU3VwcG9ydDpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX21vbmV5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X21vbmV5OmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfdGVjaG5vbG9neTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF90ZWNobm9sb2d5OmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfcHJlc3RpZ2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfcHJlc3RpZ2U6bGF5YS5kaXNwbGF5LlRleHQ7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJHYW1lV29ybGRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBtb2R1bGUgdWkuRGlhIHtcclxuICAgIGV4cG9ydCBjbGFzcyBDdXJyZW50RGlhbG9nVUkgZXh0ZW5kcyBTY2VuZSB7XHJcblx0XHRwdWJsaWMgbXNnQm9keTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3ByaXRlX1BlcnNvbjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3ByaXRlX01zZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnRuX2Nsb3NlOkxheWEuU3ByaXRlO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiRGlhL0N1cnJlbnREaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHIiXX0=
