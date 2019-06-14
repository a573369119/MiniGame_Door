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
        var grainCost = this.population_GrainCost();
        var grainAdd = this.population_GrainAdd();
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
        this.peopleManager.openPeopleFactory(); //人口生成逻辑运行
        this.peopleManager.createPeople_Inner(); //内人口生成
    };
    /**开启定时器 */
    GameWorld.prototype.openTimer = function () {
        Laya.timer.frameLoop(GameConfig_1.default.TIME_MAINDATA, this, DataManager_2.default.ins_.cal_Money);
        Laya.timer.frameLoop(GameConfig_1.default.TIME_MAINDATA, this, DataManager_2.default.ins_.influence_Grain);
        Laya.timer.frameLoop(GameConfig_1.default.TIME_MAINDATA, this, DataManager_2.default.ins_.influence_PopularSupport);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL+adgui0p+mTui9MYXlhQWlySURFX2JldGEvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvQnV5RGlhbG9nLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0JhbmRpdC50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvQ29tbW9uLnRzIiwic3JjL1BlcmZlYi9kaWZmX1Blb3BsZS9Sb2JiZXIudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL1NjaWVudGlzdC50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvU3Rhci50cyIsInNyYy9TY3JpcHQvQ2VudGVyLnRzIiwic3JjL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzIiwic3JjL1NjcmlwdC9PcGVuR2FtZS50cyIsInNyYy9TY3JpcHQvT3BlblN0b3J5LnRzIiwic3JjL1Rvb2wvVG9vbC50cyIsInNyYy91aS9sYXlhTWF4VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVkE7SUFBQTtJQWdFQSxDQUFDO0lBL0RHLGNBQWM7SUFDQSxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFB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QUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUcsR0FBRyxJQUFFLENBQUMsSUFBRSxHQUFHLEdBQUMsQ0FBQyxFQUFDO1lBQ2IsUUFBUSxHQUFFLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFDO1NBQzNDO2FBQUssSUFBRyxHQUFHLEdBQUMsQ0FBQyxJQUFFLEdBQUcsSUFBRSxDQUFDLEVBQUM7WUFDbkIsUUFBUSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFDO1NBQzFDO2FBQUssSUFBRyxHQUFHLElBQUUsQ0FBQyxJQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUM7WUFDbkIsUUFBUSxHQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO2FBQUssSUFBRyxHQUFHLEdBQUMsQ0FBQyxJQUFFLEdBQUcsSUFBRSxDQUFDLEVBQUM7WUFDbkIsUUFBUSxHQUFFLEVBQUUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBRyxDQUFDLEdBQUcsQ0FBQztZQUFFLFFBQVEsSUFBSSxHQUFHLENBQUM7UUFDMUIsT0FBTyxRQUFRLENBQUM7SUFDeEIsQ0FBQztJQUVEOztNQUVFO0lBQ1ksZ0JBQVcsR0FBekIsVUFBMEIsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRTtRQUVqQyxJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVB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LE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7Ozs7U0FLSztJQUNTLGNBQVMsR0FBdkIsVUFBd0IsRUFBRSxFQUFDLEtBQUs7UUFFNUIsSUFBRyxDQUFDLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNyQixJQUFJLFNBQVMsR0FBUSxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLENBQUM7UUFDOUQsSUFBSSxVQUFVLEdBQVEsRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxDQUFDO1FBQy9ELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFHLFdBQVcsSUFBSSxZQUFZO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDNUMsT0FBUSxLQUFLLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ1ksbUJBQWMsR0FBNUIsVUFBNkIsR0FBRztRQUU1QixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBQzFCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQzlCO1lBQ0ksTUFBTSxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBQ0wsV0FBQztBQUFELENBcktBLEFBcUtDLElBQUE7Ozs7O0FDcktELElBQU8sTUFBTSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDMUIsSUFBTyxLQUFLLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN4QixJQUFjLEVBQUUsQ0FpRmY7QUFqRkQsV0FBYyxFQUFFO0lBQ1o7UUFBMkIseUJBQU07UUFPN0I7bUJBQWUsaUJBQU87UUFBQSxDQUFDO1FBQ3ZCLDhCQUFjLEdBQWQ7WUFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0FaQSxBQVlDLENBWjBCLE1BQU0sR0FZaEM7SUFaWSxRQUFLLFFBWWpCLENBQUE7SUFDRDtRQUFpQywrQkFBSztRQTZEbEM7bUJBQWUsaUJBQU87UUFBQSxDQUFDO1FBQ3ZCLG9DQUFjLEdBQWQ7WUFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDTCxrQkFBQztJQUFELENBbEVBLEFBa0VDLENBbEVnQyxLQUFLLEdBa0VyQztJQWxFWSxjQUFXLGNBa0V2QixDQUFBO0FBQ0wsQ0FBQyxFQWpGYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFpRmY7QUFDRCxXQUFjLEVBQUU7SUFBQyxJQUFBLEdBQUcsQ0FZbkI7SUFaZ0IsV0FBQSxHQUFHO1FBQ2hCO1lBQXFDLG1DQUFLO1lBS3RDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2Qix3Q0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUNMLHNCQUFDO1FBQUQsQ0FWQSxBQVVDLENBVm9DLEtBQUssR0FVekM7UUFWWSxtQkFBZSxrQkFVM0IsQ0FBQTtJQUNMLENBQUMsRUFaZ0IsR0FBRyxHQUFILE1BQUcsS0FBSCxNQUFHLFFBWW5CO0FBQUQsQ0FBQyxFQVphLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQVlmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWcge1xyXG4gICAgLyoq5Lq656eNIC0g5pmu6YCa5Lq6ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENPTU1PTl9NQU4gOiBzdHJpbmcgPSBcImNvbW1vblwiO1xyXG4gICAgLyoq5Lq656eNIC0g55uX6LS8ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJPQkJFUl9NQU4gOiBzdHJpbmcgPSBcInJvYmJlclwiO1xyXG4gICAgLyoq5Lq656eNIC0g5Zyf5YyqICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEJBTkRJVF9NQU4gOiBzdHJpbmcgPSBcImJhbmRpdFwiO1xyXG4gICAgLyoq5Lq656eNIC0g5piO5pifICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUQVJfTUFOIDogc3RyaW5nID0gXCJzdGFyXCI7XHJcbiAgICAvKirkurrnp40gLSDnp5HlrablrrYgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU0NJRU5USVNUX01BTiA6IHN0cmluZyA9IFwic2NpZW50aXN0XCI7XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeW7uuetkVxyXG4gICAgLyoq5Yy76ZmiICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEhPU1BJVEFMIDogbnVtYmVyID0gMTtcclxuICAgIC8qKuWGm+mYnyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBBUk1ZIDogbnVtYmVyID0gMjtcclxuICAgIC8qKuWGnOWcuiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGQVJNOiBudW1iZXIgPSAzO1xyXG4gICAgLyoq56eR5oqAICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFQ0hOT0xPR1k6IG51bWJlciA9IDQ7XHJcbiAgICAvKirkuovku7bmiL8g5paw6Ze75oi/ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UX0hPVVNFOiBudW1iZXIgPSA1O1xyXG4gICAgLyoq55qH5a6rICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBBTEFDRTogbnVtYmVyID0gNjtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeajgOa1i+eCueeahOmXtOi3nVxyXG4gICAgLyoq5qOA5rWL54K56Ze06LedICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfRElDIDogbnVtYmVyID0gNTtcclxuICAgIC8qKumAn+W6piAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX1NQRUVEIDogbnVtYmVyID0gMC40O1xyXG4gICAgLyoq5peL6L2s6KeS5bqm5YGP56e7ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfUk8gOiBudW1iZXIgPSAxMDtcclxuICAgIC8qKuS6uuexu+eUn+S6p+mXtOmalFMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUEVSU09OX0NSRUFURV9USU1FIDogbnVtYmVyID0gMTtcclxuICAgIC8qKuebkea1i+eCueaVsOmHjyovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfQ09VTlQgOiBudW1iZXIgPSA2O1xyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3kuLvlgLxcclxuICAgIC8qKuWbveWutui0ouaUvyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX01PTkVZIDogc3RyaW5nID0gXCJtb25leVwiO1xyXG4gICAgLyoq5Zu95a625Lq65Y+jICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUE9QVUxBVElPTiA6IHN0cmluZz1cInBvcHVsYXRpb25cIjtcclxuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX1BPUFVMQVJTVVBQT1JUIDogc3RyaW5nID0gXCJwb3B1bGFyU3VwcG9ydFwiO1xyXG4gICAgLyoq5Zu95a6256eR5oqAICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fVEVDSE5PTE9HWSA6IHN0cmluZyA9IFwidGVjaG5vbG9neVwiO1xyXG4gICAgLyoq5Zu95a625aiB5pybICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUFJFU1RJR0UgOiBzdHJpbmcgPSBcInByZXN0aWdlXCI7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pe26Ze0XHJcbiAgICAvKirkupTlpKfkuLvlgLzop6blj5Hml7bpl7QgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVElNRV9NQUlOREFUQSA6IG51bWJlciA9IDEyKjYwKjYwO1xyXG4gICAgXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lhbbku5ZcclxuICAgIC8qKuS4gOWkqeaXtumXtC/liIbpkp8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgT05FX0RBWTpudW1iZXI9MTAqNjA7XHJcbiAgICAvKirnsq7po5/nlJ/kuqfnjofmjaLpkrHkuLTnlYzlgLwgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UPTEuNTtcclxuICAgIC8qKumSseaNoueyrumjn+axh+eOhyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNT05FWVRPR1JBSU49MjtcclxufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xyXG4vKipcclxuICog6LSt5Lmw5qGGIOmAmueUqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV5RGlhbG9nIGV4dGVuZHMgdWkuQnV5VUl7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndpZHRoPTgwMDtcclxuICAgICAgICB0aGlzLmhlaWdodD00MDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTp2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKuazqOWGjOS6i+S7tiAqL1xyXG4gICAgcHJpdmF0ZSBhZGRFdmVudHMoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idG5fYnV5Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmJ1eUNsaWNrKTtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZUNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirngrnlh7votK3kubAgKi9cclxuICAgIHByaXZhdGUgYnV5Q2xpY2soKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGN1cnJcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC8qKueCueWHu+WFs+mXrSAqL1xyXG4gICAgcHJpdmF0ZSBjbG9zZUNsaWNrKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0gXHJcbn0iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVyZmViL1Blb3BsZVwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNruS4reW/gyDmiYDmnInnmoTmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlEYXRhe1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogQ291bnRyeURhdGEgPSBuZXcgQ291bnRyeURhdGEoKTtcclxuICAgIC8qKioqKioqKioqKioqKuS4u+aVsOaNrioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoq5Zu95a626LSi5pS/ICovXHJcbiAgICBwdWJsaWMgbW9uZXkgOiBudW1iZXIgPSAxMDAwMDtcclxuICAgIC8qKuWbveWutuS6uuWPoyAqL1xyXG4gICAgcHVibGljIHBvcHVsYXRpb24gOiBudW1iZXI9MTAwO1xyXG4gICAgLyoq5Zu95a625bm456aP5bqmICovXHJcbiAgICBwdWJsaWMgcG9wdWxhclN1cHBvcnQgOiBudW1iZXIgPSA1MDtcclxuICAgIC8qKuWbveWutuenkeaKgCAqL1xyXG4gICAgcHVibGljIHRlY2hub2xvZ3kgOiBudW1iZXIgPSA1MDtcclxuICAgIC8qKuWbveWutuWjsOacmyAqL1xyXG4gICAgcHVibGljIHByZXN0aWdlIDogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKuWJr+aVsOaNrioqKioqKioqKioqKioqKioqL1xyXG4gICAgLy8tLS0tLS0tLeS4u+aVsOaNruW9seWTjVxyXG4gICAgLy/lm7rlrprmlK/lh7pcclxuICAgIC8qKuWGm+i0uSAqL1xyXG4gICAgcHVibGljIGFybXlDb3N0IDogbnVtYmVyID0gMTAwO1xyXG4gICAgLyoq5pS/5bqc6LS555SoICovXHJcbiAgICBwdWJsaWMgZ292ZXJuQ29zdCA6IG51bWJlciA9IDEwMDtcclxuICAgIC8qKuenkeaKgOi0ueeUqCAqL1xyXG4gICAgcHVibGljIHRlY2hub2xvZ3lDb3N0IDogbnVtYmVyID0gMTAwO1xyXG4gICAgLyoq56iO5pS2546HICovXHJcbiAgICBwdWJsaWMgdGF4IDogbnVtYmVyID0gMC4wNTtcclxuICAgIC8qKueyrumjn+a2iOiAl+mHjyAo5Lq65Z2H5raI6ICX6YePKSAqL1xyXG4gICAgcHVibGljIGdyYWluUGVyQ29zdCA6IG51bWJlciA9IDE7XHJcbiAgICBcclxuXHJcbiAgICAvL+WPmOWKqOeOh1xyXG4gICAgLyoq57Ku6aOf5Lqn6YePICjkurrlnYfkuqfph48pKi9cclxuICAgIHB1YmxpYyBncmFpblBlckFkZCA6IG51bWJlciA9IDE7XHJcbiAgICAvKirnsq7po5/lupPlrZggKi9cclxuICAgIHB1YmxpYyBncmFpblN0b2NrOm51bWJlcj0wO1xyXG4gICAgLyoq5Yab6LS55YeP5bCR546HICovXHJcbiAgICBwdWJsaWMgYXJteVBlcmNlbnQ6bnVtYmVyPTAuMjtcclxuICAgIC8qKkdEUCDmjKPpkrHog73lipvvvIzmr4/kurrmr4/lpKnog73kuqflpJrlsJHpkrEgKi9cclxuICAgIHB1YmxpYyBHRFAgOiBudW1iZXIgPSAxMDtcclxuXHJcblxyXG4gICAgLyoq6L+b5Z+O5pWwIOebruagh+WAvDJtaW4qL1xyXG4gICAgcHVibGljIGVudGVyUGVvcGxlIDogbnVtYmVyID0gNTA7XHJcbiAgICAvKirlh7rln47mlbAg55uu5qCH5YC8Mm1pbiovXHJcbiAgICBwdWJsaWMgZXhpdFBlb3BsZSA6IG51bWJlciA9IDUwO1xyXG4gICAgLyoq5Lq65Y+j5q+U5L6L5pWwIOi/m+WfjuaVsC/lh7rln47mlbAgMm1pbiovXHJcbiAgICBwdWJsaWMgcGVyY2VudCA6IG51bWJlciA9IDE7XHJcbiAgICAvKirln47lpJbkurrlj6PmlbDnu4QqL1xyXG4gICAgcHVibGljIGFycl9vdXRQZW9wbGUgOiBBcnJheTxQZW9wbGU+O1xyXG4gICAgLyoq5Z+O5YaF5Lq65Y+j5pWw57uEICovXHJcbiAgICBwdWJsaWMgYXJyX2luUGVvcGxlIDogQXJyYXk8UGVvcGxlPjtcclxuICAgIC8qKuWHuuWfjuS6uuWPoyDlrp7pmYXlgLwvMm1pbiAqL1xyXG4gICAgcHVibGljIF9vdXRlclBlb3BsZSA6IG51bWJlcjtcclxuICAgIC8qKui/m+mXqOS6uuWPoyDlrp7pmYXlgLwvMm1pbiAqL1xyXG4gICAgcHVibGljIF9pbm5lclBlb3BsZSA6IG51bWJlcjtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pmu6YCa5Lq65Y+j5Y2g5q+UXHJcbiAgICAvKiowLeWMu+eUnyAxLeitpuWvnyAyLeWVhuS6uiAtM+a4uOaJi+WlvemXsiAtNOWGnOawkSovXHJcbiAgICBwdWJsaWMgYXJyX3BlcnNvblBlcmNlbnROYW1lIDogQXJyYXk8c3RyaW5nPiA9IFtcInBlcmNlbnREb2N0b3JcIixcInBlcmNlbnRQb2xpY1wiLFwicGVyY2VudFNob3BlclwiLFwicGVyY2VudE5vdGhpbmdcIixcInBlcmNlbnRGYXJtZXJcIl07XHJcbiAgICAvKirmma7pgJrkurrkuK0g5Yy755Sf55qE5Y2g5q+UKi9cclxuICAgIHB1YmxpYyBwZXJjZW50RG9jdG9yIDogbnVtYmVyID0gMC4wMjtcclxuICAgIC8qKuaZrumAmuS6uuenjSDorablr5/ljaDmr5QgKi9cclxuICAgIHB1YmxpYyBwZXJjZW50UG9saWMgOiBudW1iZXIgPSAwLjAzO1xyXG4gICAgLyoq5pmu6YCa5Lq656eNIOWVhuS6uueahOWNoOavlCAqL1xyXG4gICAgcHVibGljIHBlcmNlbnRTaG9wZXIgOiBudW1iZXIgPSAwLjE1O1xyXG4gICAgLyoq5ri45omL5aW96ZeyICovXHJcbiAgICBwdWJsaWMgcGVyY2VudE5vdGhpbmcgOiBudW1iZXIgPSAwLjE7XHJcbiAgICAvKirlhpzmsJEgKi9cclxuICAgIHB1YmxpYyBwZXJjZW50RmFybWVyIDogbnVtYmVyID0gMC43O1xyXG5cclxuICAgIC8vLS0tLS0tLS3lvbHlk40g44CQ5Li75pWw5o2u44CRLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0t5LqL5Lu25pWw5o2uXHJcbiAgICAvKirnmJ/nlqsgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfKi9cclxuICAgIHB1YmxpYyBwZXN0IDogbnVtYmVyID0gMDtcclxuICAgIC8qKuWcsOmchyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8gKi9cclxuICAgIHB1YmxpYyBuYXR1cmFsRGlzYXN0ZXIgOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5oiY5LmxICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyovXHJcbiAgICBwdWJsaWMgd2FyIDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLy0tLS0tLS0t6IGM5Lia5Lq65pWwXHJcbiAgICBwdWJsaWMgYXJyX1Blb3BsZSA6IEFycmF5PHN0cmluZz4gPSBbXCJjb21tb25cIixcInNjaWVudGlzdFwiLFwic3RhclwiLFwiYmFuZGl0XCIsXCJyb2JiZXJcIl07XHJcbiAgICAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xyXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDk1O1xyXG4gICAgLyoq56eR5a2m5a62IFNTUyovXHJcbiAgICBwdWJsaWMgc2NpZW50aXN0IDogbnVtYmVyID0gMTtcclxuICAgIC8qKuaYjuaYnyBTUyovXHJcbiAgICBwdWJsaWMgc3RhciA6IG51bWJlciA9IDI7XHJcbiAgICAvKirlnJ/ljKogLVMgKi9cclxuICAgIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAxO1xyXG4gICAgLyoq55uX6LS8IC1BICovXHJcbiAgICBwdWJsaWMgcm9iYmVyIDogbnVtYmVyID0gMTtcclxuICAgICAgICAvLyAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSAxO1xyXG4gICAgICAgIC8vIC8qKuenkeWtpuWutiBTU1MqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuaYjuaYnyBTUyovXHJcbiAgICAgICAgLy8gcHVibGljIHN0YXIgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuWcn+WMqiAtUyAqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuebl+i0vCAtQSAqL1xyXG4gICAgICAgIC8vIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5bey55Sf5oiQ55qE5Lq656eNICAwIOaZrumAmiAgIDHnp5HlrablrrYgIDLmmI7mmJ8gM+Wcn+WMqiA055uX6LS8Ki9cclxuICAgIHB1YmxpYyBhbHJlYWR5Q3JlYXRlIDogQXJyYXk8bnVtYmVyPiA9IFswLDAsMCwwLDBdO1xyXG5cclxuICAgIC8vLS0tLS0tLS3ln47pl6hcclxuICAgIC8qKumXqOaYr+WQpuaJk+W8gCovXHJcbiAgICBwdWJsaWMgaXNEb29yT3BlbiA6IGJvb2xlYW49dHJ1ZTtcclxuICAgIC8qKuetm+afpeiDveWKmyDlkK/liqjnibnmrorpl6jnmoTml7blgJkgIOetm+afpeiDveWKm+eUn+aViCovXHJcbiAgICBwdWJsaWMgcHJlcGFyYXRpb24gOiBudW1iZXIgPSAwLjU7XHJcbiAgICAvKirnibnmrorpl6gg562b5p+lIDEt6Ziy5q2i6L+b5YWlICAgMi3pgoDor7fov5vlhaUqL1xyXG4gICAgLy8gcHVibGljIGtlZXBTZWxlY3QgOiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWMuuWfn1xyXG4gICAgLyoq5aKZ5YaF5Yy65Z+f5YiS5YiGICovXHJcbiAgICBwdWJsaWMgYXJyX0xlZnRBcmVhIDogQXJyYXk8YW55PjtcclxuICAgIHB1YmxpYyBhcnJfUmlnaHRBcmVhIDogQXJyYXk8YW55PjtcclxuICAgIFxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS3ls7DlgLxcclxuICAgIC8qKuWbveWutuW5uOemj+W6puWzsOWAvCAqL1xyXG4gICAgcHVibGljIHBvcHVsYXJTdXBwb3J0TWF4IDogbnVtYmVyID0gMTAwO1xyXG4gICAgLyoq5Zu95a6256eR5oqA5bOw5YC8ICovXHJcbiAgICBwdWJsaWMgdGVjaG5vbG9neU1heCA6IG51bWJlciA9IDEwMDtcclxuICAgIC8qKuWbveWutuWjsOacm+WzsOWAvCAqL1xyXG4gICAgcHVibGljIHByZXN0aWdlTWF4IDogbnVtYmVyID0gMTAwO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgICAgICB0aGlzLmFycl9pblBlb3BsZSA9IG5ldyBBcnJheTxQZW9wbGU+KCk7XHJcbiAgICAgICAgdGhpcy5hcnJfb3V0UGVvcGxlID0gbmV3IEFycmF5PFBlb3BsZT4oKTtcclxuICAgICAgICB0aGlzLl9pbm5lclBlb3BsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fb3V0ZXJQZW9wbGUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWKoOWFpeaVsOe7hCBpc091dOaYr+WQpuWcqOWklumdoiovXHJcbiAgICBwdWJsaWMgYWRkQXJyYXkoaXNPdXQsb2JqKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgYXJyID0gdGhpcy5hcnJfaW5QZW9wbGU7XHJcbiAgICAgICAgaWYoaXNPdXQpIGFyciA9IHRoaXMuYXJyX291dFBlb3BsZTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTwgYXJyLmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihhcnJbaV0gPT09IHVuZGVmaW5lZCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycltpXSA9IG9iajtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhcnIucHVzaChvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuenu+mZpOaVsOe7hCBpc091dOaYr+WQpuWcqOWklumdoiAqL1xyXG4gICAgcHVibGljIGRlbGV0ZUFycmF5KGlzT3V0LG9iaikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuYXJyX2luUGVvcGxlO1xyXG4gICAgICAgIGlmKGlzT3V0KSBhcnIgPSB0aGlzLmFycl9vdXRQZW9wbGU7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aSA8IGFyci5sZW5ndGggO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGFycltpXSA9PT0gb2JqKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhcnJbaV0gPT09IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmlbDnu4Tovaznp7sg5Z+O5aSWLeOAi+WfjuWGhSDmiJbln47lhoXliLDln47lpJYgIOaYr+WQpuaYr1vln47lpJbovazln47lhoVdICDovaznp7vlr7nosaEqL1xyXG4gICAgcHVibGljIG1vdmVBcnJheShpc091dCxvYmopIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYWRkQXJyYXkoIWlzT3V0LG9iaik7Ly/liqDlhaXln47lhoXmlbDnu4RcclxuICAgICAgICB0aGlzLmRlbGV0ZUFycmF5KGlzT3V0LG9iaik7Ly/np7vpmaTln47lpJbmlbDnu4RcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluWMuuWfnyAqL1xyXG4gICAgcHVibGljIHNldEFyZWEodmlldyA6IExheWEuTm9kZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdmlldy5fY2hpbGRyZW47XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxjaGlsZHJlbi5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0ubmFtZSA9PSBcInBhbGFjZVwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYS5wdXNoKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyX1JpZ2h0QXJlYS5wdXNoKGNoaWxkcmVuW2ldKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihjaGlsZHJlbltpXS54PDk4MSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEucHVzaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaCh2aWV3LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInNwX3dhbGxcIikpO1xyXG4gICAgICAgIHRoaXMuYXJyX1JpZ2h0QXJlYS5wdXNoKHZpZXcucGFyZW50LmdldENoaWxkQnlOYW1lKFwic3Bfd2FsbFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq655qE6ZqP5py656e75Yqo6YCf5bqmICovXHJcbiAgICBwdWJsaWMgZ2V0TW92ZVNwZWVkKCkgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gR2FtZUNvbmZpZy5URVNUX1BPSU5UX1NQRUVEKihNYXRoLnJhbmRvbSgpKzAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkurrlj6PmtYHph48gOlxyXG4gICAgICogcmV0dXJuIOi/m+WFpSAvIOWHuuWOu1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0X1Blb3BsZU1vdmUoKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlcmNlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkurrnp43mr5TkvotcclxuICAgICAqIEBwYXJhbSB0eXBlIOS6uuenjVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0X1Byb2Zlc3Npb25QZXJjZW50KHR5cGU6c3RyaW5nKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXNbdHlwZV0gPT09IHVuZGVmaW5lZCkgY29uc29sZS5sb2coXCLkuI3lrZjlnKjor6Xkurrnp41cIik7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpc1t0eXBlXS8odGhpcy5wb3B1bGF0aW9uKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t57uT566XXHJcbiAgICAvKirotKLmlL/nu5PnrpcqL1xyXG4gICAgcHVibGljIGNhbF9Nb25leSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucHJlc3RpZ2VfQXJteUNvc3QoKTtcclxuICAgICAgICB0aGlzLnN0ZWFkeUNvc3QoKTtcclxuICAgICAgICB0aGlzLmdldFRheCgpO1xyXG4gICAgICAgIHRoaXMudGVjaG5vbG9neV9HRFAoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirnsq7po58g5b2x5ZON57uT566XKi9cclxuICAgIHB1YmxpYyBpbmZsdWVuY2VfR3JhaW4oKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgZ3JhaW5Db3N0PXRoaXMucG9wdWxhdGlvbl9HcmFpbkNvc3QoKTtcclxuICAgICAgICBsZXQgZ3JhaW5BZGQ9dGhpcy5wb3B1bGF0aW9uX0dyYWluQWRkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5bm456aP5bqmIOW9seWTjee7k+eulyAqL1xyXG4gICAgcHVibGljIGluZmx1ZW5jZV9Qb3B1bGFyU3VwcG9ydCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3VwcG9ydF9QZXJjZW50KCk7XHJcbiAgICAgICAgdGhpcy5zdXBwb3J0X1Blb3BsZVR5cGUoKTtcclxuICAgICAgICB0aGlzLnN1cHBvcnRfT3V0UGVvcGxlTWF4KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWFrOW8j1xyXG4gICAgLyoq56iz5a6a5pSv5Ye6ICovXHJcbiAgICBwcml2YXRlIHN0ZWFkeUNvc3QoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tb25leS09dGhpcy5hcm15Q29zdCooMS10aGlzLmFybXlQZXJjZW50KSt0aGlzLmdvdmVybkNvc3QrdGhpcy50ZWNobm9sb2d5Q29zdDtcclxuICAgIH1cclxuXHJcbiAgICAvKirnsq7po5/mtojogJcg5Lq65Y+j5pWwKuavj+S6uua2iOiAl+mHjyovXHJcbiAgICBwcml2YXRlIHBvcHVsYXRpb25fR3JhaW5Db3N0KCk6bnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9wdWxhdGlvbip0aGlzLmdyYWluUGVyQ29zdDtcclxuICAgIH1cclxuXHJcbiAgICAvKirnsq7po5/nlJ/kuqcg5Lq65Y+j5pWwKuavj+S6uuWunumZheS6p+mHjyovXHJcbiAgICBwcml2YXRlIHBvcHVsYXRpb25fR3JhaW5BZGQoKTpudW1iZXJcclxuICAgIHtcclxuICAgICAgICAvL+enkeaKgOW6pui9rOaNoiDnp5HmioDluqYwLTEwMCDnlJ/kuqflj5jljJbnjocwLTIg5YWs5byP5pqC5a6aeT14KjAuMDItMSw1MOS4uuWIhueVjOmZkFxyXG4gICAgICAgIGxldCBjaGFuZ2U9dGhpcy50ZWNobm9sb2d5KjAuMDItMTtcclxuICAgICAgICB0aGlzLmdyYWluUGVyQWRkPSgxK2NoYW5nZSkqdGhpcy5ncmFpblBlckFkZDtcclxuICAgICAgICBsZXQgcHJvPXRoaXMuZ3JhaW5QZXJBZGQqdGhpcy5wb3B1bGF0aW9uO1xyXG4gICAgICAgIHJldHVybiBwcm87XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5bm456aP5bqm5b2x5ZON5Lq65Y+j5rWB5Yqo546HICovXHJcbiAgICBwcml2YXRlIHN1cHBvcnRfUGVyY2VudCgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+W5uOemj+W9seWTjeS6uuWPo+a1geWKqOeOh+eahOazouWKqOiMg+WbtCAtMC4yfjAuMiDlhazlvI/mmoLlrpp5PXgqMC4wMDQtMC4yLDUw5Li65YiG55WM6ZmQXHJcbiAgICAgICAgbGV0IGNoYW5nZT10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDA0LTAuMjtcclxuICAgICAgICB0aGlzLnBlcmNlbnQ9KDErY2hhbmdlKSp0aGlzLnBlcmNlbnQ7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5bm456aP5bqm5b2x5ZON5Lq656eN5Yeg546HIOWdh+S7juaZrumAmuS6uuWHoOeOh+S4rei/m+ihjOabv+aNoiovXHJcbiAgICBwcml2YXRlIHN1cHBvcnRfUGVvcGxlVHlwZSgpXHJcbiAgICB7XHJcbiAgICAgICAgLy/np5Hlrablrrbms6LliqjojIPlm7QgMC4wMS0wLjA1IOWFrOW8j+aaguWumnk9eCowLjAwMDQrMC4wMSw1MOS4uuWIhueVjOmZkFxyXG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18uc2NpZW50aXN0PXRoaXMucG9wdWxhclN1cHBvcnQqMC4wMDA0KzAuMDE7XHJcbiAgICAgICAgLy/mmI7mmJ/ms6LliqjojIPlm7QgMC4wMDUtMC4wMjUg5YWs5byP5pqC5a6aeT14KjAuMDAwMiswLjAwNSw1MOS4uuWIhueVjOmZkFxyXG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18uc3Rhcj10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDAwMiswLjAwNTtcclxuICAgICAgICAvL+ebl+i0vOazouWKqOiMg+WbtCAwLjA2LTAuMTQg5YWs5byP5pqC5a6aeT14KjAuMDAwOCswLjA2LDUw5Li65YiG55WM6ZmQXHJcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5yb2JiZXI9dGhpcy5wb3B1bGFyU3VwcG9ydCowLjAwMDgrMC4wNjtcclxuICAgICAgICAvL+Wcn+WMquazouWKqOiMg+WbtCAwLjAyLTAuMSDlhazlvI/mmoLlrpp5PXgqMC4wMDA4KzAuMDIsNTDkuLrliIbnlYzpmZBcclxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLmJhbmRpdD10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDAwOCswLjAyO1xyXG4gICAgICAgIC8v5pmu6YCa5Lq65rOi5Yqo6IyD5Zu0XHJcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5jb21tb249MS0oT3V0Q291bnRyeURhdGEuaW5zXy5zY2llbnRpc3QrT3V0Q291bnRyeURhdGEuaW5zXy5zdGFyK091dENvdW50cnlEYXRhLmluc18ucm9iYmVyK091dENvdW50cnlEYXRhLmluc18uYmFuZGl0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlubjnpo/luqblvbHlk43lopnlpJbkurrlj6Mg5aKZ5aSW5pyA5aSn5a6557qz5pWwMjAwLTYwMCovXHJcbiAgICBwcml2YXRlIHN1cHBvcnRfT3V0UGVvcGxlTWF4KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v5aKZ5aSW5aKe6ZW/546H5rOi5Yqo6IyD5Zu0IDAuMi0wLjYg5YWs5byP5pqC5a6aeT14KjAuMDA0KzAuMiw1MOS4uuWIhueVjOmZkFxyXG4gICAgICAgIGxldCBjaGFuZ2U9dGhpcy5wb3B1bGFyU3VwcG9ydCowLjAwNCswLjI7XHJcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudD0xMDAwKmNoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirnp5HmioDlvbHlk41HRFAgKi9cclxuICAgIHByaXZhdGUgdGVjaG5vbG9neV9HRFAoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy9HRFDms6LliqjojIPlm7QgLTAuNX4wLjUg5YWs5byP5pqC5a6aeT14KjAuMDUsNTDkuLrliIbnlYzpmZBcclxuICAgICAgICBsZXQgY2hhbmdlPXRoaXMudGVjaG5vbG9neSowLjAxLTAuNTtcclxuICAgICAgICAvL+WunumZhUdEUFxyXG4gICAgICAgIGxldCBjdXJyR0RQPXRoaXMuR0RQKihjaGFuZ2UrMSk7XHJcbiAgICAgICAgdGhpcy5tb25leS09Y3VyckdEUCp0aGlzLnBvcHVsYXRpb247XHJcbiAgICB9XHJcbiAgICAvKirlqIHmnJvlvbHlk43lhpvotLkgKi9cclxuICAgIHByaXZhdGUgcHJlc3RpZ2VfQXJteUNvc3QoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/lhpvotLnlh4/lsJHnjofms6LliqjojIPlm7QgMC4wLTAuNCDlhazlvI/mmoLlrpp5PXgqMC4wMDQsNTDkuLrliIbnlYzpmZBcclxuICAgICAgICB0aGlzLmFybXlQZXJjZW50PXRoaXMucHJlc3RpZ2UqMC4wMDQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq56iO5pS2ICovXHJcbiAgICBwdWJsaWMgZ2V0VGF4KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW9uZXkrPXRoaXMudGF4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueyrumjn+e7k+eulyAqL1xyXG4gICAgLypwdWJsaWMgY2FsX0dyYWluKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v5aaC5p6c6L+Y5pyJ57Ku6aOf5bqT5a2YXHJcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZD49Q291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/lpoLmnpznlJ/kuqfph4/lpKfkuo7lpKfkuo7mtojogJfnjofnmoTmn5DkuKrlgI3njofvvIzlhYjorqnlhbboh6rliqjovazljJbkuLrotKLmlL/vvIzkuYvlkI7kv67mlLnkuLrmiYvliqjovazljJZcclxuICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZC9Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXM+PUdhbWVDb25maWcuR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL+i2heWHuuWAjeeOh+eahOmDqOWIhlxyXG4gICAgICAgICAgICAgICAgbGV0IGV4Y2hhbmdlPUNvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQtQ291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKkdhbWVDb25maWcuR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UO1xyXG4gICAgICAgICAgICAgICAgLy/mjaLpkrFcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VNb25leShleGNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAvL+WJqeS9meeahOWKoOWFpeW6k+WtmFxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrKz0oQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZC1leGNoYW5nZS1Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy/liqDlhaXlupPlrZhcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jays9KENvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQtQ291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+WmguaenOW6k+WtmOWKoOS4iueUn+S6p+eahOeyrumjn+S4jei2s+S7peaKteWkn+a2iOiAl+eahOeyrumjn1xyXG4gICAgICAgICAgICBpZigoQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrK0NvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQpPENvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy/ngrnlh7vpgInmi6nmmK/lkKbotK3kubDnsq7po5/vvIzlpoLmnpzkuI3otK3kubDliJnlr7zoh7Tkurrlj6Plh4/lsJHlkozlubjnpo/luqbpmY3kvY5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy/lh4/lsJHlupPlrZhcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jay09Q291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzLUNvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9Ki9cclxuXHJcbiAgICBcclxuICAgIC8qKuaUueWPmCDov5vjgIHlh7og55uu5qCH5Lq65pWwIEBpc291dDrmmK/lkKbmmK/lh7rln44gIEBjb3VudO+8muaUueWPmOebruagh+WAvCovXHJcbiAgICBwdWJsaWMgc2V0SW5PdXRUYXJnZXQoaXNPdXQsY291bnQpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKGlzT3V0KSB0aGlzLmV4aXRQZW9wbGUgKz0gY291bnQ7XHJcbiAgICAgICAgZWxzZSB0aGlzLmVudGVyUGVvcGxlICs9IGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaUueWPmCDov5vjgIHlh7og55uu5qCH5Lq65pWwIEBpc291dDrmmK/lkKbmmK/lh7rln44gIEBjb3VudO+8muaUueWPmOWunumZheWAvCovXHJcbiAgICBwdWJsaWMgc2V0SW5PdXRUcnV0aChpc091dCxjb3VudCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXNPdXQpIHRoaXMuX291dGVyUGVvcGxlICs9IGNvdW50O1xyXG4gICAgICAgIGVsc2UgdGhpcy5faW5uZXJQZW9wbGUgKz0gY291bnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKumAmuefpeS6uuWPo+WHuuWfjiBAdHlwZSDvvJog6L+b5oiQdHVyZSAg5Ye65Z+OIGZhbHNlKi9cclxuICAgIHB1YmxpYyBwZW9wbGVHb091dCh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgYXJyIDtcclxuICAgICAgICBpZih0eXBlKSBhcnIgPSB0aGlzLmFycl9vdXRQZW9wbGU7XHJcbiAgICAgICAgICAgIGVsc2UgYXJyID0gdGhpcy5hcnJfaW5QZW9wbGU7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihhcnIubGVuZ3RoKnJhbmRvbSk7XHJcbiAgICAgICAgaWYoaW5kZXg+MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCFhcnJbaW5kZXhdLmlzR28pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFycltpbmRleF0ucGVvcGxlR28odHlwZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIHRoaXMucGVvcGxlR29PdXQodHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLpmo/mnLrlh7rplJlcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirlh7rln47pl6jnm7jlhbPmk43kvZwgKi9cclxuICAgIHB1YmxpYyBnb091dCh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9vdXRlclBlb3BsZSsrOy8v5a6e6ZmF5Lq65pWw5Yqg5LiAXHJcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uLS07Ly/mgLvkurrlj6MgLS1cclxuICAgICAgICBpZih0aGlzW3R5cGVdKSB0aGlzW3R5cGVdLS07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKuWkluWfjiAqL1xyXG5leHBvcnQgY2xhc3MgT3V0Q291bnRyeURhdGF7XHJcbiAgICBwdWJsaWMgc3RhdGljIGluc18gOiBPdXRDb3VudHJ5RGF0YSA9IG5ldyBPdXRDb3VudHJ5RGF0YSgpO1xyXG4gICAgLyoqKioqKioqKioqKioq5Li75pWw5o2uKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICAvKirmnIDlpKflpJbln47lrrnnurPmlbDph48gKi9cclxuICAgIHB1YmxpYyBtYXhDb3VudCA6IG51bWJlcj00MDA7XHJcbiAgICAvKirlvZPliY3lpJbln47kurrlj6PmlbAgKi9cclxuICAgIHB1YmxpYyBvdXRDb3VudDpudW1iZXI9MDtcclxuICAgIC8qKuS6uua7nueVmeaXtumXtCAqL1xyXG4gICAgcHVibGljIGxpbWl0VGltZTpudW1iZXI9NTA7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLyoq5pmu6YCa5Lq6Ki9cclxuICAgIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSAwLjc5NTtcclxuICAgIC8qKuenkeWtpuWutiBTU1MqL1xyXG4gICAgcHVibGljIHNjaWVudGlzdCA6IG51bWJlciA9IDAuMDM7XHJcbiAgICAvKirmmI7mmJ8gU1MqL1xyXG4gICAgcHVibGljIHN0YXIgOiBudW1iZXIgPSAwLjAxNTtcclxuICAgIC8qKuWcn+WMqiAtUyAqL1xyXG4gICAgcHVibGljIGJhbmRpdCA6IG51bWJlciA9IDAuMDY7XHJcbiAgICAvKirnm5fotLwgLUEgKi9cclxuICAgIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAwLjE7XHJcbiAgICAvKirlj5jph4/lkI0gKi9cclxuICAgIHB1YmxpYyBhcnJfUGVvcGxlIDogQXJyYXk8c3RyaW5nPiA9IFtcImNvbW1vblwiLFwic2NpZW50aXN0XCIsXCJzdGFyXCIsXCJiYW5kaXRcIixcInJvYmJlclwiXTtcclxuICAgIFxyXG4gICAgLyoq6I635Y+W5Yy66Ze05pWw57uEIDAsMC43OTUsMC44MjUsMC44NCwwLjksMSovXHJcbiAgICBwdWJsaWMgZ2V0UGVyY2VudEFyZWEoKTpBcnJheTxudW1iZXI+XHJcbiAgICB7XHJcbiAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXHJcbiAgICAgICBsZXQgYXJyX1Blb3BsZSA9IHRoaXMuYXJyX1Blb3BsZTtcclxuICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XHJcbiAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyX1Blb3BsZS5sZW5ndGg7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgICBudW1iZXIgKz0gdGhpc1thcnJfUGVvcGxlW2ldXTtcclxuICAgICAgICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XHJcbiAgICAgICB9XHJcbiAgICAgICByZXR1cm4gYXJyUGVyY2VudDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xyXG5cclxuLyoqXHJcbiAqIOa2iOaBr+ahhiDpgJrnlKhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1zZ0RpYWxvZyBleHRlbmRzIHVpLkRpYS5DdXJyZW50RGlhbG9nVUl7XHJcbiAgICAvKirnsbvlnosgKi9cclxuICAgIHByaXZhdGUgdHlwZSA6IG51bWJlciA7XHJcbiAgICAvKirnvJPliqggKi9cclxuICAgIC8vIHByaXZhdGUgc2hvd1R3ZWVuIDogTGF5YS5Ud2VlbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirliJ3lp4vljJYgKi9cclxuICAgIHB1YmxpYyBzaG93TXNnKHR5cGU6bnVtYmVyKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZURpYWxvZyk7ICAgICAgICBcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJbWcoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVRpdGxlKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VXb3JkKCk7IFxyXG4gICAgICAgIHRoaXMubXNnQm9keS54ID0gKDkwMC8oTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodC9MYXlhLkJyb3dzZXIuY2xpZW50V2lkdGgpLTExNjMpLzI7ICAgICAgIFxyXG4gICAgICAgIHRoaXMubXNnQm9keS55ID0gLTU1NzsgICAgICAgXHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLm1zZ0JvZHkse3k6MH0sMjAwLExheWEuRWFzZS5iYWNrT3V0KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirmjaLlm74gKi9cclxuICAgIHByaXZhdGUgY2hhbmdlSW1nKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirmjaLmoIfpopggKi9cclxuICAgIHByaXZhdGUgY2hhbmdlVGl0bGUoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirmloflrZfovb3lhaUgKi9cclxuICAgIHByaXZhdGUgY2hhbmdlV29yZCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWFs+mXrSAqL1xyXG4gICAgcHVibGljIGNsb3NlRGlhbG9nKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idG5fY2xvc2Uub2ZmKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlRGlhbG9nKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLm1zZ0JvZHkse3k6LTU1N30sMjAwLExheWEuRWFzZS5iYWNrT3V0LExheWEuSGFuZGxlci5jcmVhdGUodGhpcyx0aGlzLmNsb3NlT3ZlcikpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZU92ZXIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTsgICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVyZmViL1Blb3BsZVwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhLCB7IE91dENvdW50cnlEYXRhIH0gZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IENvbW1vbiBmcm9tXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvQ29tbW9uXCJcclxuaW1wb3J0IFJvYmJlciBmcm9tXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyXCJcclxuaW1wb3J0IFNjaWVudGlzdCBmcm9tIFwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL1NjaWVudGlzdFwiO1xyXG5pbXBvcnQgU3RhciBmcm9tIFwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL1N0YXJcIjtcclxuaW1wb3J0IEJhbmRpdCBmcm9tIFwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL0JhbmRpdFwiO1xyXG4vKipcclxuICog5Lq6IOeuoeeQhlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlTWFuYWdlciB7XHJcbiAgICAvKirop4blm74qL1xyXG4gICAgcHJpdmF0ZSB2aWV3OmFueTsgXHJcbiAgICAvKirmqKrlnZDmoIcgKi9cclxuICAgIHByaXZhdGUgWDpudW1iZXI7XHJcbiAgICAvKirnurXlnZDmoIcgKi9cclxuICAgIHByaXZhdGUgWTpudW1iZXI7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWimeWGhVxyXG4gICAgLyoq55Sf5oiQ6Ze06ZqU6K6h5pe25ZmoICovXHJcbiAgICBwcml2YXRlIGNvdW50VGltZSA6IG51bWJlciA9IDA7XHJcbiAgICAvKirnlJ/kuqfml7bpl7Tpl7TpmpQgKi9cclxuICAgIHByaXZhdGUgY291bnRUaW1lXyA6IG51bWJlciA9IDUwMDtcclxuICAgIC8v5aSW5Z+O5Lq65Y+j6K6h5pe25ZmoXHJcbiAgICBwcml2YXRlIGNvdW50VGltZV9vdXQgOiBudW1iZXIgPSAwOyAgICBcclxuICAgIC8qKuWkluWfjuS6uuWPo+eUn+S6p+mXtOmalCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudFRpbWVfb3V0XyA6IG51bWJlciA9IDUwMDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc3RydWN0b3IodmlldylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZpZXc9dmlldztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWQr+eUn+aIkOW3peWOglxyXG4gICAgICog55Sf5oiQ5Lq6IFxyXG4gICAgICog55Sf5oiQ5Lq655qE5L2N572uXHJcbiAgICAgKiDnlJ/kuqfkurrnmoR0eXBlIO+8miDln47ph4zkurov5Z+O5aSW5Lq6IOmAu+i+keWIhuW8gFxyXG4gICAgICovXHJcbiAgICAvKirlvIDlkK/nlJ/miJDlt6XljoIgKi9cclxuICAgIHB1YmxpYyBvcGVuUGVvcGxlRmFjdG9yeSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEudGltZXIubG9vcCgxLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueUn+aIkOS6uiAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmNvdW50VGltZV9vdXQgPD0gdGhpcy5jb3VudFRpbWVfb3V0XylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRUaW1lX291dCsrO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnRUaW1lX291dCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb3VudFRpbWVfb3V0XyA9IE1hdGgucmFuZG9tKCkqR2FtZUNvbmZpZy5QRVJTT05fQ1JFQVRFX1RJTUUqMTAwO1xyXG4gICAgICAgIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQgPj0gT3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGFycmF5OkFycmF5PG51bWJlcj49T3V0Q291bnRyeURhdGEuaW5zXy5nZXRQZXJjZW50QXJlYSgpO1xyXG4gICAgICAgIGxldCBwZW9wbGU7XHJcbiAgICAgICAgLyoq55Sf5oiQ5LiN5ZCM5Lq656eN55qE5Yeg546HICovXHJcbiAgICAgICAgbGV0IHJhbmRvbT1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIC8v5pmu6YCa5Lq6XHJcbiAgICAgICAgaWYocmFuZG9tPj0wJiZyYW5kb208YXJyYXlbMV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwiY29tbW9uXCIpO1xyXG4gICAgICAgICAgICBpZighcGVvcGxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBDb21tb24odGhpcy52aWV3LEdhbWVDb25maWcuQ09NTU9OX01BTix0cnVlKTtcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX291dFBlb3BsZS5wdXNoKHBlb3BsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/np5HlrablrrZcclxuICAgICAgICBlbHNlIGlmKHJhbmRvbT49YXJyYXlbMV0mJnJhbmRvbTxhcnJheVsyXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJzY2llbnRpc3RcIik7XHJcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZSA9IG5ldyBTY2llbnRpc3QodGhpcy52aWV3LEdhbWVDb25maWcuU0NJRU5USVNUX01BTix0cnVlKTtcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX291dFBlb3BsZS5wdXNoKHBlb3BsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcGVvcGxlLmNyZWF0ZVRlY2hub2xvZ3lUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5piO5pifXHJcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PWFycmF5WzJdJiZyYW5kb208YXJyYXlbM10pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwic3RhclwiKTtcclxuICAgICAgICAgICAgaWYoIXBlb3BsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgU3Rhcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5TVEFSX01BTix0cnVlKTtcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX291dFBlb3BsZS5wdXNoKHBlb3BsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcGVvcGxlLmNyZWF0ZVN0YXJUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v55uX6LS8XHJcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PWFycmF5WzNdJiZyYW5kb208YXJyYXlbNF0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwicm9iYmVyXCIpO1xyXG4gICAgICAgICAgICBpZighcGVvcGxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuUk9CQkVSX01BTix0cnVlKTtcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX291dFBlb3BsZS5wdXNoKHBlb3BsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcGVvcGxlLmN1dE1vbmV5VGltZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+Wcn+WMqlxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJiYW5kaXRcIik7XHJcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IEJhbmRpdCh0aGlzLnZpZXcsR2FtZUNvbmZpZy5CQU5ESVRfTUFOLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBwZW9wbGUuY3V0TW9uZXlUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBlb3BsZS52aXNpYmxlPXRydWU7XHJcbiAgICAgICAgcGVvcGxlLmlzT3V0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdldFBvcygpO1xyXG4gICAgICAgIHBlb3BsZS5zZXRQb3ModGhpcy5YLHRoaXMuWSk7XHJcbiAgICAgICAgcGVvcGxlLm9wZW5CZWhhdmlvdXIoKTtcclxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq655qE5L2N572uICovXHJcbiAgICBwdWJsaWMgZ2V0UG9zKCk6YW55XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHR5cGVOdW09TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMpO1xyXG4gICAgICAgIHN3aXRjaCh0eXBlTnVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgLy/lnKhB6L6555WMXHJcbiAgICAgICAgICAgICAgICB0aGlzLlg9MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuWT1NYXRoLnJhbmRvbSgpKjM5MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAvL+WcqELovrnnlYxcclxuICAgICAgICAgICAgICAgIHRoaXMuWD1NYXRoLnJhbmRvbSgpKjIwMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlk9MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAvL+WcqEPovrnnlYxcclxuICAgICAgICAgICAgICAgIHRoaXMuWD0yMDAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq55WM6ZmQ5qOA5rWLICoqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBcclxuICAgIFxyXG4gICAgcHVibGljIGNoZWNrUGVyY2VudChwZW9wbGUsdHlwZTpzdHJpbmcpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+a1geWKqOavlOS+i+ajgOa1i1xyXG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18ucGVyY2VudDwxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWIm+W7uuWimeWGheS6uiAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZV9Jbm5lcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgbGV0IHJhbmRvbVN0cmluZyA7XHJcbiAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXHJcbiAgICAgICBsZXQgYXJyX1Blb3BsZSA9IENvdW50cnlEYXRhLmluc18uYXJyX1Blb3BsZTtcclxuICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XHJcbiAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyX1Blb3BsZS5sZW5ndGg7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgICBudW1iZXIgKz0gQ291bnRyeURhdGEuaW5zXy5nZXRfUHJvZmVzc2lvblBlcmNlbnQoYXJyX1Blb3BsZVtpXSk7XHJcbiAgICAgICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xyXG4gICAgICAgfVxyXG4gICAgICAgY29uc29sZS5sb2coYXJyUGVyY2VudCk7XHJcbiAgICAgICBMYXlhLnRpbWVyLmxvb3AoMSx0aGlzLHRoaXMuZ2V0UmFuZG9tLFthcnJQZXJjZW50XSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5Lqn5Lq6ICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZV9Jbm5lcihyYW5kb21TdHJpbmcpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKHJhbmRvbVN0cmluZyA9PSBcIm5vbmVcIikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBwZW9wbGUgPSBMYXlhLlBvb2wuZ2V0SXRlbShyYW5kb21TdHJpbmcpOyAgXHJcbiAgICAgICAgbGV0IGNvdW50cnlEYXRhID0gQ291bnRyeURhdGEuaW5zXztcclxuICAgICAgICAvL+eUn+S6p+S6uuenjVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJhbmRvbVN0cmluZyk7XHJcbiAgICAgICAgc3dpdGNoKHJhbmRvbVN0cmluZylcclxuICAgICAgICB7ICAgIC8qKuW3sueUn+aIkOeahOS6uuenjSAgMCDmma7pgJogICAx56eR5a2m5a62ICAy5piO5pifIDPlnJ/ljKogNOebl+i0vCovXHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5DT01NT05fTUFOOiAgIFxyXG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbMF0rKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuUk9CQkVSX01BTjovL+ebl+i0vFxyXG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbNF0rKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuQkFORElUX01BTjovL+Wcn+WMqlxyXG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbM10rKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuU1RBUl9NQU46Ly/mmI7mmJ9cclxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzJdKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNDSUVOVElTVF9NQU46Ly/np5HlrablrrZcclxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzFdKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXBlb3BsZSkge2NvbnNvbGUubG9nKFwi5paw5bu65Lq65aSx6LSl77yBXCIpIDtyZXR1cm47fVxyXG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwocGVvcGxlKTtcclxuICAgICAgICBwZW9wbGUuaXNPdXQgPSBmYWxzZTtcclxuICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9pblBlb3BsZS5wdXNoKHBlb3BsZSk7Ly/liqDlhaXnu7TmiqTmlbDnu4RcclxuICAgICAgICBpZihwZW9wbGUgPT09IHVuZGVmaW5lZCB8fCBwZW9wbGUgPT09IG51bGwpIHtjb25zb2xlLmxvZyhcIuayoeacieeUn+aIkOS6uuenje+8geenjeexuzpcIiArIHJhbmRvbVN0cmluZyk7cmV0dXJuO31cclxuICAgICAgICB0aGlzLmNyZWF0ZVBvcyhwZW9wbGUpO1xyXG4gICAgICAgIHBlb3BsZS5zcGVjaWFsRG8oKTtcclxuICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKueUn+S6p+S9jee9riAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVBvcyhwZW9wbGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBob3VzZU5vZGUgPSAodGhpcy52aWV3IGFzIExheWEuU3ByaXRlKS5nZXRDaGlsZEJ5TmFtZSgnaG91c2UnKTtcclxuICAgICAgICBsZXQgcGVyY2VudCA9IGhvdXNlTm9kZS5fY2hpbGRyZW4ubGVuZ3RoLzEwMDtcclxuICAgICAgICBsZXQgaG91c2UgO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8IGhvdXNlTm9kZS5fY2hpbGRyZW4ubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcGVyY2VudCoxMDApO1xyXG4gICAgICAgICAgICBob3VzZSA9IGhvdXNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvdXNlX1wiK251bWJlcik7XHJcbiAgICAgICAgICAgIGlmKGhvdXNlICE9PSB1bmRlZmluZWQgJiYgaG91c2UgIT09IG51bGwpICBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlLnNldFBvcyhob3VzZS54LGhvdXNlLnksaG91c2UpOyAgIFxyXG4gICAgICAgICAgICAgICAgLy8gcGVvcGxlLnBlb3BsZUludG8oKTsgXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W6ZqP5py65Lq656eNICovXHJcbiAgICBwcml2YXRlIGdldFJhbmRvbShhcnJQZXJjZW50KSA6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuY291bnRUaW1lIDw9IHRoaXMuY291bnRUaW1lXylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRUaW1lKys7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudFRpbWVfID0gTWF0aC5yYW5kb20oKSpHYW1lQ29uZmlnLlBFUlNPTl9DUkVBVEVfVElNRSoxMDA7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLnlJ/miJDpl7TpmpQ6XCIgKyBNYXRoLmZsb29yKHRoaXMuY291bnRUaW1lLzEwMCkgKyBcInNcIik7XHJcbiAgICAgICAgdGhpcy5jb3VudFRpbWUgPSAwO1xyXG5cclxuICAgICAgICBsZXQgbnVtYmVyID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBsZXQgcGVyc29uID0gXCJcIjtcclxuICAgICAgICBsZXQgaW5kZXggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhcnJQZXJjZW50Lmxlbmd0aCA7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIWFyclBlcmNlbnRbaSsxXSkgYnJlYWs7XHJcbiAgICAgICAgICAgIGlmKGFyclBlcmNlbnRbaV0gPD0gbnVtYmVyICYmIG51bWJlciA8IGFyclBlcmNlbnRbaSsxXSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVyc29uID0gQ291bnRyeURhdGEuaW5zXy5hcnJfUGVvcGxlW2ldO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFwZXJzb24pIHtjb25zb2xlLmxvZyhcIuS6uuenjemaj+acuuWksei0pe+8gVwiKTtyZXR1cm47fVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tXCIgKyBwZXJzb24pO1xyXG4gICAgICAgIC8v5Yik5pat5Lq65piv5ZCm6L+Y6IO955Sf5oiQXHJcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCl7Y29uc29sZS5sb2coXCLmpoLnjoforqHnrpflh7rplJlcIik7cmV0dXJuO31cclxuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbaW5kZXhdID09IENvdW50cnlEYXRhLmluc19bcGVyc29uXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0QWxyZWFkQ3JlYXRlKCkgPT0gQ291bnRyeURhdGEuaW5zXy5wb3B1bGF0aW9uKSByZXR1cm47XHJcbiAgICAgICAgICAgIHBlcnNvbiA9IHRoaXMuZ2V0UmFuZG9tKGFyclBlcmNlbnQpOyAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFwZXJzb24pe2NvbnNvbGUubG9nKFwi5Lq656eN6ZqP5py65aSx6LSl77yBXCIpO3JldHVybjt9XHJcbiAgICAgICB0aGlzLmNyZWF0ZV9Jbm5lcihwZXJzb24pOy8v55Sf5Lqn5Lq656eNIFxyXG4gICAgICAgcmV0dXJuIHBlcnNvbjsgIFxyXG4gICAgfVxyXG5cclxuICAgIC8q6I635Y+W5bey55Sf5oiQ5Lq65Y+j55qE5pWw6YePKi9cclxuICAgIHB1YmxpYyBnZXRBbHJlYWRDcmVhdGUoKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8Q291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlLmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBudW1iZXIgKz1Db3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbaV1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcclxuICAgIH1cclxufSIsImltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIFVJ566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXJ7XHJcbiAgICAvKirmlbDmja7nrqHnkIblmaggKi9cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgZGF0YU1hbmFnZXIgOiBEYXRhTWFuYWdlcjtcclxuICAgIC8qKlVJIHNwcml0ZSAqL1xyXG4gICAgcHJpdmF0ZSBVaVNwcml0ZSA6IExheWEuU3ByaXRlO1xyXG5cclxuICAgIC8qKui9veWFpeaVsOaNriAqL1xyXG4gICAgY29uc3RydWN0b3IodWk6TGF5YS5TcHJpdGUpe1xyXG4gICAgICAgIHRoaXMuVWlTcHJpdGUgPSB1aTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn0iLCIvKipcclxuICog5LqL5Lu25Y+R55Sf566h55CG5ZmoXHJcbiAqIFxyXG4gKiBcclxuICog55Sf5oiQ5LqL5Lu244CBXHJcbiAqIOW9seWTjeS6uuWPo+a1geWKqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ybGRFdmVudE1hbmFnZXIge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKirkuovku7bpooTmiqXliLAgKi9cclxuICAgIFxyXG5cclxuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xyXG5cclxuICAgIFxyXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBCdXlEaWFsb2cgZnJvbSBcIi4vQ29yZS9CdXlEaWFsb2dcIlxuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi9Db3JlL01zZ0RpYWxvZ1wiXG5pbXBvcnQgT3BlbkdhbWUgZnJvbSBcIi4vU2NyaXB0L09wZW5HYW1lXCJcbmltcG9ydCBHYW1lV29ybGQgZnJvbSBcIi4vU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGRcIlxuaW1wb3J0IE9wZW5TdG9yeSBmcm9tIFwiLi9TY3JpcHQvT3BlblN0b3J5XCJcbmltcG9ydCBDZW50ZXIgZnJvbSBcIi4vU2NyaXB0L0NlbnRlclwiXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xNDQwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9OTAwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZGhlaWdodFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwibGVmdFwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiU3RhcnRHYW1lLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJDb3JlL0J1eURpYWxvZy50c1wiLEJ1eURpYWxvZyk7XG4gICAgICAgIHJlZyhcIkNvcmUvTXNnRGlhbG9nLnRzXCIsTXNnRGlhbG9nKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5HYW1lLnRzXCIsT3BlbkdhbWUpO1xuICAgICAgICByZWcoXCJTY3JpcHQvR2FtZVdvcmxkL0dhbWVXb3JsZC50c1wiLEdhbWVXb3JsZCk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9PcGVuU3RvcnkudHNcIixPcGVuU3RvcnkpO1xuICAgICAgICByZWcoXCJTY3JpcHQvQ2VudGVyLnRzXCIsQ2VudGVyKTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly/moLnmja5JREXorr7nva7liJ3lp4vljJblvJXmk45cdFx0XHJcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG5cdFx0R2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdH1cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG4iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhLCB7IE91dENvdW50cnlEYXRhIH0gZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFRvb2wgZnJvbSBcIi4uL1Rvb2wvVG9vbFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFBlb3BsZU1hbmFnZXIgZnJvbSBcIi4uL0NvcmUvUGVvcGxlTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiDkurrnp43niLbnsbtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZSB7XHJcbiAgICAvKirlnLrmma8qL1xyXG4gICAgcHJvdGVjdGVkIHZpZXcgOiBMYXlhLlNwcml0ZTtcclxuICAgIC8qKueyvueBtSAqL1xyXG4gICAgcHVibGljIHNwIDogTGF5YS5TcHJpdGU7XHJcbiAgICAvKirmqKrlnZDmoIfnp7vliqjpgJ/luqYgKi9cclxuICAgIHByaXZhdGUgZGlyWDpudW1iZXI7XHJcbiAgICAvKirnurXlnZDmoIfnp7vliqjpgJ/luqYgKi9cclxuICAgIHByaXZhdGUgZGlyWTpudW1iZXI7XHJcbiAgICBcclxuICAgIC8qKioqKioqKioqKioqKioqKioq5aKZ5YaFICoqKioqKioqKioqKi9cclxuICAgIC8qKuWimeWGheS6uui/mOaYr+WimeWkluS6uiAqL1xyXG4gICAgcHVibGljIGlzT3V0IDogYm9vbGVhbjtcclxuICAgIC8qKuS6uuWxnuaApyAqL1xyXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xyXG4gICAgLyoq5Lq655qE5pyd5ZCRICovXHJcbiAgICBwdWJsaWMgdG93YXJkIDogYW55O1xyXG4gICAgLyoq6Z2i5YmN55qENeS4quajgOa1i+eCuSAqL1xyXG4gICAgcHVibGljIHRvd2FyZFBvcyA6IEFycmF5PGFueT47XHJcbiAgICAvKirkurrnmoTnp7vliqjnm67moIfngrkgKi9cclxuICAgIHB1YmxpYyB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGU7XHJcbiAgICAvKirlh7rnlJ/ngrkgKi9cclxuICAgIHB1YmxpYyBib3JuTm9kZSA6IExheWEuU3ByaXRlO1xyXG4gICAgLyoq5piv5ZCm6KKr5Y+s5ZSkICovXHJcbiAgICBwdWJsaWMgaXNHbyA6IG51bWJlcjtcclxuICAgIC8qKumAkuW9kuWBnOatouWPmOmHjyAqL1xyXG4gICAgcHJpdmF0ZSBzdG9wRGkgOiBudW1iZXI7XHJcbiAgICAvKirlj4LogIPpgJ/luqYgKi9cclxuICAgIHByaXZhdGUgc3BlZWQgOiBudW1iZXI7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMuaXNPdXQgPSBpc091dDtcclxuICAgICAgICB0aGlzLnR5cGU9dHlwZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlKTtcclxuICAgICAgICB0aGlzLmluaXQodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yid5aeL5YyWICovXHJcbiAgICBwcml2YXRlIGluaXQodHlwZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/mlbDmja7liJ3lp4vljJZcclxuICAgICAgICB0aGlzLnNldERhdGFJbml0KCk7XHJcbiAgICAgICAgLy/liJvlu7pcclxuICAgICAgICB0aGlzLmNyZWF0ZVBlb3BsZSh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmlbDmja7liJ3lp4vljJYgKi9cclxuICAgIHByaXZhdGUgc2V0RGF0YUluaXQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gQ291bnRyeURhdGEuaW5zXy5nZXRNb3ZlU3BlZWQoKTtcclxuICAgICAgICB0aGlzLnRvd2FyZCA9IHtcclxuICAgICAgICAgICAgeDoxMDAwLFxyXG4gICAgICAgICAgICB5OjAsXHJcbiAgICAgICAgICAgIHNwZWVkOnRoaXMuc3BlZWQscm90YXRpb246dW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0YXJnZXRSb3RhdGlvbjp1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHJvdGF0aW9uQ2hhbmdlIDogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50b3dhcmRQb3MgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnN0b3BEaSA9IDA7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5byA5aeL6KGM5YqoICovXHJcbiAgICBwdWJsaWMgb3BlbkJlaGF2aW91cigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+i/kOihjOS6humAu+i+kVxyXG4gICAgICAgIGlmKHRoaXMuaXNPdXQpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zT3V0KCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoT3V0Q291bnRyeURhdGEuaW5zXy5saW1pdFRpbWUqNjAsdGhpcyx0aGlzLmxpbWl0VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGVvcGxlX1Bvc0lubmVyKCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIubG9vcCgxNix0aGlzLHRoaXMucGVvcGxlX1Bvc0lubmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq6ICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVBlb3BsZSh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAgdGhpcy5jcmVhdGVTcCh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirliJvlu7pTcHJpdGUgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlU3AodHlwZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGltZ1VybCA9IFwibWFwL1wiK3R5cGUrXCIucG5nXCI7XHJcbiAgICAgICAgaWYoIXRoaXMuc3ApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNwID0gbmV3IExheWEuU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnNwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mtYvor5VcclxuICAgICAgICB0aGlzLnNwLnpPcmRlciA9IDExO1xyXG4gICAgICAgIHRoaXMuc3AubG9hZEltYWdlKGltZ1VybCk7XHJcbiAgICAgICAgdGhpcy5zcC5zaXplKDEyLDEyKTtcclxuICAgICAgICB0aGlzLnNwLnBpdm90KHRoaXMuc3Aud2lkdGgvMix0aGlzLnNwLmhlaWdodC8yKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiuvue9ruWIneWni+S9jee9riAqL1xyXG4gICAgcHVibGljIHNldFBvcyh4LHksc3A6TGF5YS5TcHJpdGUpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3AueCA9IHg7XHJcbiAgICAgICAgdGhpcy5zcC55ID0geTtcclxuICAgICAgICB0aGlzLmJvcm5Ob2RlID0gc3A7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWimeWkluS6uuihjOWKqOmAu+i+kSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBwcml2YXRlIHBlb3BsZV9Qb3NPdXQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaWueWQke+8jOaWueWQkeeUqCgtMX4xKeihqOekulxyXG4gICAgICAgIGlmKHRoaXMuc3AueDw9OTAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuc3AueD49MTEwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWD0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpKjItMTtcclxuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCkqMi0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtO+8jOWcqOatpOaXtumXtOWGheenu+WKqCzpmo/mnLrml7bpl7TlnKgoMiw4KeS4remAieaLqVxyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNisyO1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNsb3NlTW92ZVRpbWVyKTtcclxuICAgICAgICAvL+W8gOWQr+enu+WKqFxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuWNleS9jeW4p+enu+WKqCovXHJcbiAgICBwcml2YXRlIG1vdmVEaXN0YW5jZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwLngrPXRoaXMuZGlyWDtcclxuICAgICAgICB0aGlzLnNwLnkrPXRoaXMuZGlyWTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlhbPpl63np7vliqjlrprml7blmajvvIzlvIDlkK/ljp/lnLDkvJHmga8qL1xyXG4gICAgcHJpdmF0ZSBjbG9zZU1vdmVUaW1lcigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xyXG4gICAgICAgIC8v5LyR5oGv5pe26Ze057uT5p2f5ZCO57un57ut56e75YqoXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo2KzI7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMucGVvcGxlX1Bvc091dCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKua7nueVmeaXtumXtO+8jOiLpei2hei/h+aXtumXtO+8jOWwseemu+W8gOWkluWfjiAqL1xyXG4gICAgcHJpdmF0ZSBsaW1pdFRpbWUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBpZih0aGlzLnNwLng8PTEwMDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRpclg9LU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgLyoq56Kw5pKe5qOA5rWLICovXHJcbiAgICBwcml2YXRlIGNoZWNrTGltaXRfT3V0KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v6L6555WM5qOA5rWLXHJcbiAgICAgICAgaWYodGhpcy5zcC54PC01fHx0aGlzLnNwLng+MjAwNXx8dGhpcy5zcC55PC01KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7XHJcbiAgICAgICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQtLTtcclxuICAgICAgICAgICAgLy8gaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMztcclxuICAgICAgICAgICAgLy8gICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNyZWF0ZVBlb3BsZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5oqk5Z+O5rKz5qOA5rWLXHJcbiAgICAgICAgaWYodGhpcy5zcC55Pj0zOTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+mHjeaWsOe7meS4gOS4quS9jeenu1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ln47pl6jljLrln5/mo4DmtYtcclxuICAgICAgICBpZih0aGlzLnNwLng+OTMyJiZ0aGlzLnNwLng8MTA2OCYmdGhpcy5zcC55PjM1MCYmdGhpcy5zcC55PDM5MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5Z+O6Zeo5piv5ZCm5omT5byAXHJcbiAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy/ln47lpJbkurrlj6MtMVxyXG4gICAgICAgICAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgLy/lm73lrrbkurrlj6MrMVxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5wb3B1bGF0aW9uKys7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5faW5uZXJQZW9wbGUrKztcclxuICAgICAgICAgICAgICAgIC8vIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQ8T3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKVxyXG4gICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMztcclxuICAgICAgICAgICAgICAgIC8vICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsY3JlYXRlUGVvcGxlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18ubW92ZUFycmF5KHRydWUsdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZUludG8oKTtcclxuICAgICAgICAgICAgICAgIC8vIENvdW50cnlEYXRhLmluc18uY2FsX01haW5EYXRhKEdhbWVDb25maWcuTUFJTl9QT1BVTEFUSU9OLDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXHJcbiAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSozO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNyZWF0ZSAgICBQZW9wbGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirlopnlhoXkurrooYzliqjpgLvovpEqL1xyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5aKZ5YaF5Lq66KGM5Yqo6YC76L6RKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgICAgIC8vIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VHJhZ2V0KHRhcmdldDpMYXlhLlNwcml0ZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy50YXJnZXROb2RlID0gdGFyZ2V0O1xyXG4gICAgICAgIC8v5rWL6K+VXHJcbiAgICAgICAgdGhpcy50YXJnZXROb2RlID0gdGFyZ2V0O1xyXG4gICAgICAgIC8vIHRoaXMudG93YXJkLnggPSB0YXJnZXQueDtcclxuICAgICAgICAvLyB0aGlzLnRvd2FyZC55ID0gdGFyZ2V0Lnk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqdG93ZXJk6L2s5YyW5oiQ5L2N56e7ICovXHJcbiAgICBwcm90ZWN0ZWQgdG93ZWRUb01vdmUoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy50b3dhcmQucm90YXRpb24pIHRoaXMudG93YXJkLnJvdGF0aW9uID0gVG9vbC5yb3RhdGVSb3BlUG9pbnRfMih0aGlzLnNwLngsdGhpcy5zcC55LHRoaXMudGFyZ2V0Tm9kZS54LHRoaXMudGFyZ2V0Tm9kZS55KTs7XHJcbiAgICAgICAgdGhpcy5wZW9wbGVUb3dlcmQoKTsvL+iuqeebruagh+acneWQkeiuoeeul+aVsFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuacneWQkSAgdG93ZXJk56e75YqoICovXHJcbiAgICBwcml2YXRlIHBvc01vdmUoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwLnggKz0gdGhpcy50b3dhcmQuc3BlZWQqVG9vbC5yb3RhdGlvblNldCh0aGlzLnRvd2FyZC5yb3RhdGlvbixcInNpblwiKTtcclxuICAgICAgICB0aGlzLnNwLnkgKz0gdGhpcy50b3dhcmQuc3BlZWQqVG9vbC5yb3RhdGlvblNldCh0aGlzLnRvd2FyZC5yb3RhdGlvbixcImNvc1wiKTtcclxuICAgICAgICB0aGlzLnNwLnJvdGF0aW9uID0gdGhpcy50b3dhcmQucm90YXRpb247XHJcbiAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QodGhpcy50YXJnZXROb2RlLHRoaXMuc3ApKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGFyZ2V0Tm9kZS5uYW1lID09IFwic3BfZG9vclwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmdvT3V0KHRoaXMudHlwZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUodHJ1ZSk7ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLm1vdmVBcnJheShmYWxzZSx0aGlzKTsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvb3JQZW9wbGVfVG9PdXQoKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdG9yeVBlb3BsZSgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc3AueCA8IDAgfHwgdGhpcy5zcC55ID4gOTAwIHx8IHRoaXMuc3AueCA+IDIwMDApIHt0aGlzLmRlc3RvcnlQZW9wbGUoKTt9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zcC5yb3RhdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuS6uumdouWQkSAqL1xyXG4gICAgcHJvdGVjdGVkIHBlb3BsZVRvd2VyZCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKCk7Ly/ojrflvpfkupTkuKrngrnvvIzmoLnmja7nm67moIflnZDmoIforqHnrpdcclxuICAgICAgICB0aGlzLnRlc3RUb3dlcmQoKTsvL+ajgOa1i+aYr+WQpuespuWQiOimgeaxgiDkuI3nrKblkIggKyAtIDVcclxuICAgIH1cclxuXHJcbiAgICAvKirmo4DmtYvooYzotbDmlrnlkJEgKi9cclxuICAgIHByb3RlY3RlZCB0ZXN0VG93ZXJkKCkgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBvd2VyID0gdGhpcy50ZXN0Q29saWRlcigpOy8vIC0xIDAgMSAyIDMgNCA1XHJcbiAgICAgICAgaWYocG93ZXIgPiAwKVxyXG4gICAgICAgIHsvL+aSnuWIsOS6humcgOimgei9rOaWueWQkVxyXG4gICAgICAgICAgICB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDdHIocG93ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmp1ZGdlTGVmdFJpZ2h0KCk7ICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wb3NNb3ZlKCk7Ly/np7vliqhcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmRUYXJnZXQoKTtcclxuICAgICAgICB0aGlzLnRvd2FyZC5zcGVlZCA9IHRoaXMuc3BlZWQ7ICAgICAgXHJcbiAgICAgICAgdGhpcy5wb3NNb3ZlKCk7Ly/np7vliqggIFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumAn+W6puaOp+WItiAqL1xyXG4gICAgcHJpdmF0ZSBzcGVlZEN0cihwb3dlcikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50b3dhcmQuc3BlZWQgPSB0aGlzLnNwZWVkKigocG93ZXIrMSkvKHRoaXMudG93YXJkUG9zLmxlbmd0aCsyKSk7IFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3BlZWQgOjpcIiArIHRoaXMudG93YXJkLnNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirliKTmlq3mlrnlkJEgKi9cclxuICAgIHByb3RlY3RlZCBqdWRnZUxlZnRSaWdodCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RvcERpKys7XHJcbiAgICAgICAgaWYodGhpcy5zdG9wRGk+MzYpIHt0aGlzLnN0b3BEaSA9IDA7cmV0dXJuO31cclxuICAgICAgICB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZSArPSBHYW1lQ29uZmlnLlRFU1RfUE9JTlRfUk87XHJcbiAgICAgICAgbGV0IHJvMSA9IHRoaXMudG93YXJkLnJvdGF0aW9uIC0gdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2U7XHJcbiAgICAgICAgbGV0IHJvMiA9IHRoaXMudG93YXJkLnJvdGF0aW9uICsgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2U7XHJcbiAgICAgICAgdGhpcy5nZXRUb3dlcmRQb3Mocm8xKTtcclxuICAgICAgICBsZXQgbnVtUm8xID0gdGhpcy50ZXN0Q29saWRlcigpO1xyXG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKHJvMik7XHJcbiAgICAgICAgbGV0IG51bVJvMiA9IHRoaXMudGVzdENvbGlkZXIoKTtcclxuICAgICAgICBpZihudW1SbzEgPT0gLTEpIHt0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvMTsgcmV0dXJuO31cclxuICAgICAgICBpZihudW1SbzIgPT0gLTEpIHt0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvMjsgcmV0dXJuO31cclxuICAgICAgICB0aGlzLmp1ZGdlTGVmdFJpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqZmluZFRhcmdldOWvu+aJvuebruaghyAqL1xyXG4gICAgcHJpdmF0ZSBmaW5kVGFyZ2V0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IENhID0gdGhpcy50b3dhcmQucm90YXRpb24gLSB0aGlzLnRvd2FyZC50YXJnZXRSb3RhdGlvbjtcclxuICAgICAgICBpZihDYSA+IDApIHRoaXMudG93YXJkLnJvdGF0aW9uIC09IDU7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoIENhIDwgMCApIHRoaXMudG93YXJkLnJvdGF0aW9uICs9NTtcclxuICAgICAgICBpZiggTWF0aC5hYnMoQ2EpIDwgNSkgdGhpcy50b3dhcmQucm90YXRpb24gKz0gQ2E7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgLyoq5qOA5rWL5piv5ZCm56Kw5pKeIOaSnuWIsOS6hui/lOWbnnR1cmUgLTHlj6/ku6XotbAgMOS7peS4iuihqOekuueisOaSnuWIsOWTquS4queCuSovXHJcbiAgICBwcm90ZWN0ZWQgdGVzdENvbGlkZXIoKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBudW0gPSAtMTtcclxuICAgICAgICBsZXQgYXJlYSA6IEFycmF5PExheWEuU3ByaXRlPj0gRGF0YU1hbmFnZXIuaW5zXy5hcnJfUmlnaHRBcmVhO1xyXG4gICAgICAgIGlmKHRoaXMuc3AueDw5ODEpIGFyZWEgPSBEYXRhTWFuYWdlci5pbnNfLmFycl9MZWZ0QXJlYTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPGFyZWEubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMuYm9ybk5vZGUsdGhpcy5zcCkpIHtyZXR1cm4gLTE7fVxyXG4gICAgICAgICAgICBpZihUb29sLmJsb2NrVGVzdChhcmVhW2ldLHRoaXMuc3ApKXtyZXR1cm4gMDt9Ly/lpoLmnpzlt7Lnu4/mkp7kuIrkuobjgIIgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaCA9IDA7aDx0aGlzLnRvd2FyZFBvcy5sZW5ndGg7aCsrKVxyXG4gICAgICAgICAgICB7Ly/kupTkuKrngrnmo4DmtYtcclxuICAgICAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMudGFyZ2V0Tm9kZSx0aGlzLnRvd2FyZFBvc1toXSkpe3JldHVybi0xO31cclxuICAgICAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KGFyZWFbaV0sdGhpcy50b3dhcmRQb3NbaF0pKVxyXG4gICAgICAgICAgICAgICAgey8v56a75Lq65pyA6L+R55qE54K5XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gaCsxOy8vMe+8jDLvvIwz77yMNO+8jDVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Lq66Z2i5ZCR55qE5LqU5Liq5qOA5rWL54K5ICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0VG93ZXJkUG9zKHJvdGF0aW9uVGVzdD8pIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByb3RhdGlvbiA9IHRoaXMudG93YXJkLnJvdGF0aW9uOy8v5L2/55So5b2T5YmN6Z2i5ZCRXHJcbiAgICAgICAgaWYocm90YXRpb25UZXN0KSByb3RhdGlvbiA9IHJvdGF0aW9uVGVzdDtcclxuICAgICAgICBlbHNlIHRoaXMua2VlcFRvd2VyZERhdGEoKTsvL+S/neWtmCDnjrDlnKjkuLrmraLliLDnm67moIfngrnnmoTop5LluqZcclxuICAgICAgICBpZihyb3RhdGlvbiA9PT0gdW5kZWZpbmVkKSBcclxuICAgICAgICB7Ly/lpoLmnpzop5LluqbmmK91bmRlZlxyXG4gICAgICAgICAgICByb3RhdGlvbiA9IHRoaXMudG93YXJkLnRhcmdldFJvdGF0aW9uLy/nm67moIfop5LluqbvvIzliJ3lp4vop5LluqYgICBcclxuICAgICAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb24gPSByb3RhdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5L2N56e76ZyA6KaB55qE5Y+Y6YePXHJcbiAgICAgICAgbGV0IGNvcyA6IG51bWJlciA9IFRvb2wucm90YXRpb25TZXQocm90YXRpb24sXCJjb3NcIik7XHJcbiAgICAgICAgbGV0IHNpbiA6IG51bWJlciA9IFRvb2wucm90YXRpb25TZXQocm90YXRpb24sXCJzaW5cIik7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0teDo6XCIgKyB0aGlzLnNwLnggKyBcInk6OlwiICsgdGhpcy5zcC55KTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVDb25maWcuVEVTVF9QT0lOVF9DT1VOVDtpKyspLy/orrDlvZXkupTkuKpcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBpZighdGhpcy50b3dhcmRQb3NbaV0pIHRoaXMudG93YXJkUG9zW2ldID0ge307ICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy50b3dhcmRQb3NbaV0ueCA9IHRoaXMuc3AueCArIEdhbWVDb25maWcuVEVTVF9QT0lOVF9ESUMqc2luKihpKzEpO1xyXG4gICAgICAgICAgICB0aGlzLnRvd2FyZFBvc1tpXS55ID0gdGhpcy5zcC55ICsgR2FtZUNvbmZpZy5URVNUX1BPSU5UX0RJQypjb3MqKGkrMSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRvd2FyZFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5L+d5a2YIHRvd2Vy5L+h5oGvICovXHJcbiAgICBwcm90ZWN0ZWQga2VlcFRvd2VyZERhdGEoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+WtmOWCqOeOsOWcqOeCueWIsOebruagh+inkuW6plxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG93YXJkLnRhcmdldFJvdGF0aW9uID0gVG9vbC5yb3RhdGVSb3BlUG9pbnRfMih0aGlzLnNwLngsdGhpcy5zcC55LHRoaXMudGFyZ2V0Tm9kZS54LHRoaXMudGFyZ2V0Tm9kZS55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlnKjov5DooYznp7vliqjpgLvovpHkuYvliY0g55qE54m55q6K5pON5L2cICovXHJcbiAgICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvKioqXHJcbiAgICAgKiDov5vnqIsgLyDlh7rln47pgLvovpEgXHJcbiAgICAgKiBAdHlwZSB0cnVl6L+b5Z+OICBmYWxzZeWHuuWfjlxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBwZW9wbGVHbyh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAgICAgaWYodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgLy/ov5vln47mlrnms5VcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0UGVvcGxlX1RvRG9vcigpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8v5Ye65Z+O5pa55rOVXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZU91dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Z+O5aSW5by65Yi26L+b6ZeoICovXHJcbiAgICBwcml2YXRlIG91dFBlb3BsZV9Ub0Rvb3IoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBsZXQgZGlyWD0xMDAwLXRoaXMuc3AueDtcclxuICAgICAgICBsZXQgZGlyWT00MTAtdGhpcy5zcC55O1xyXG4gICAgICAgIGxldCBkaXM9TWF0aC5zcXJ0KE1hdGgucG93KDEwMDAtdGhpcy5zcC54LDIpK01hdGgucG93KDQxMC10aGlzLnNwLnksMikpO1xyXG4gICAgICAgIHRoaXMuZGlyWD1kaXJYL2RpcztcclxuICAgICAgICB0aGlzLmRpclk9ZGlyWS9kaXM7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6Zeo5by65Yi25Ye65Z+O5aSWICovXHJcbiAgICBwcml2YXRlIGRvb3JQZW9wbGVfVG9PdXQoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pc091dCA9IHRydWU7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBsZXQgeD1NYXRoLnJhbmRvbSgpKjEzNis5MzI7XHJcbiAgICAgICAgbGV0IHk9MzUwO1xyXG4gICAgICAgIHRoaXMuc2V0UG9zKHgseSx0aGlzLnNwKTtcclxuICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKSoyLTE7XHJcbiAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpKjAuNy0wLjI7XHJcbiAgICAgICAgLy8gdGhpcy5vcGVuQmVoYXZpb3VyKCk7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XHJcbiAgICB9XHJcblxyXG4gICAvKirlh7rln47pgLvovpEgKi9cclxuICAgcHJvdGVjdGVkIHBlb3BsZU91dCgpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwic3BfZG9vclwiKSBhcyBMYXlhLlNwcml0ZSk7Ly/orr7nva7nm67moIfmmK/pl6hcclxuICAgfVxyXG5cclxuICAgLyoq6L+b5Z+O5pa55rOVIOS7juato+mXqOWIsOafkOS4gOS4quS9j+WuhSovXHJcbiAgIHByb3RlY3RlZCBwZW9wbGVJbnRvKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgICBsZXQgYm9ybk5vZGUgPSB0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJzcF9kb29yXCIpIGFzIExheWEuU3ByaXRlO1xyXG4gICAgICAgIHRoaXMuaXNPdXQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XHJcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgICB0aGlzLnNldFBvcyhib3JuTm9kZS54LGJvcm5Ob2RlLnkgKyA0MCxib3JuTm9kZSk7XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgdGhpcy5vcGVuQmVoYXZpb3VyKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKuS7jmhvdXNl5Lit6I635Y+WIOS4gOS4qumaj+acuueahOeCuSAqL1xyXG4gICBwcm90ZWN0ZWQgZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKSA6IExheWEuU3ByaXRlXHJcbiAgIHtcclxuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKCgoaG91c2VOb2RlIGFzIExheWEuU3ByaXRlKS5fY2hpbGRyZW4ubGVuZ3RoLTEpKnJhbmRvbSk7XHJcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgOkxheWEuU3ByaXRlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIC0tLS0tLS0tLSBnZXRUYXJnZXQgXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5kZXggOjpcIiArIGluZGV4KTtcclxuICAgICAgICBpZihpbmRleCA+PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGhvdXNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvdXNlX1wiK2luZGV4KTtcclxuICAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLpmo/mnLrmlbDlj5bplJlcIik7XHJcbiAgICAgICAgLy8gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICB9XHJcblxyXG4gICAgLyoq5Lq65raI5aSxIGlzcmVjb3ZlcuS4jeWbnuaUtuWQlyAqL1xyXG4gICAgcHJvdGVjdGVkIGRlc3RvcnlQZW9wbGUobm90UmVjb3Zlcj8pIDogdm9pZFxyXG4gICAgeyAgIFxyXG4gICAgICAgIGlmKCFub3RSZWNvdmVyKSBMYXlhLlBvb2wucmVjb3Zlcih0aGlzLnR5cGUsdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zcC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKCF0aGlzLmlzT3V0KSB0aGlzLmRlc3RvcnlJbm5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWimeWGheS6uuWIoOmZpCDnibnmrorlpITnkIYgKi9cclxuICAgIHByb3RlY3RlZCBkZXN0b3J5SW5uZXIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+iuoeaXtuWZqOa4healmlxyXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLnBlb3BsZV9Qb3NJbm5lcik7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5DT01NT05fTUFOOlxyXG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzBdPjApXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMF0tLTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkJBTkRJVF9NQU46XHJcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbM10+MClcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVszXS0tO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuUk9CQkVSX01BTjpcclxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVs0XT4wKVxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzRdLS07XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOOlxyXG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzFdPjApXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMV0tLTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNUQVJfTUFOOlxyXG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzJdPjApXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMl0tLTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJUaW1lcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5saW1pdFRpbWUpO1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLnBlb3BsZV9Qb3NJbm5lcik7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLHRoaXMuY2xvc2VNb3ZlVGltZXIpO1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLHRoaXMucGVvcGxlX1Bvc091dCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYW5kaXQgZXh0ZW5kcyBQZW9wbGV7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5oqi5Yqr55qE5pa55byPLOWFiOe7meS6iOaXtumXtCAqL1xyXG4gICAgcHVibGljIGN1dE1vbmV5VGltZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtOi/m+ihjOWBt+eblyg1LTgp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo1KzM7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5YG355uXXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuQ3V0TW9uZXkpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIC8v5pe26Ze05ZCO5oqi5YqrXHJcbiAgICBwcml2YXRlIEN1dE1vbmV5KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByYW5kb209TWF0aC5yYW5kb20oKTtcclxuICAgICAgICBpZihyYW5kb208MC41KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/miqLliqvmiJDlip9cclxuICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5tb25leT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTArMTApO1xyXG4gICAgICAgICAgICB0aGlzLmxvd1N1cHBvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7Tov5vooYzlgbfnm5coNS04KeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNSszO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOWBt+ebl1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLkN1dE1vbmV5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpmY3kvY7lubjnpo/luqYgKi9cclxuICAgIHByaXZhdGUgbG93U3VwcG9ydCgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXJTdXBwb3J0LT0wLjE7XHJcbiAgICB9XHJcblxyXG4gICAvKirlopnlhoXpgLvovpEgKi9cclxuICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICAvLyB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcInBhbGFjZVwiKSBhcyBMYXlhLlNwcml0ZSk7XHJcbiAgICAgICB0aGlzLnRvd2VkVG9Nb3ZlKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKumHjeWGmXNwZWNpYWxkbyAqL1xyXG4gICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIGxldCBob3VzZU5vZGUgPSB0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKTtcclxuICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICBmb3IobGV0IGk9MDt0cnVlO2krKylcclxuICAgICAgIHtcclxuICAgICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgICAgIGlmKHRhcmdldE5vZGUgIT09IHRoaXMuYm9ybk5vZGUpIGJyZWFrO1xyXG4gICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xyXG4gICAgICAgIHRoaXMuY3V0TW9uZXlUaW1lKCk7XHJcbiAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcbmltcG9ydCBUb29sIGZyb20gXCIuLi8uLi9Ub29sL1Rvb2xcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi8uLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIGV4dGVuZHMgUGVvcGxle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xyXG4gICAgICAgIHN1cGVyKHZpZXcsdHlwZSxpc091dCk7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnRvd2VkVG9Nb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/ojrflj5bljaDmr5TmlbDnu4RcclxuICAgICAgICBsZXQgYXJyX3BlcmNlbnQgPSBUb29sLmdldFBlcmNlbnRBcmVhKENvdW50cnlEYXRhLmluc18uYXJyX3BlcnNvblBlcmNlbnROYW1lKTtcclxuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBsZXQgaW5kZXg7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhcnJfcGVyY2VudC5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIWFycl9wZXJjZW50W2krMV0pIGJyZWFrO1xyXG4gICAgICAgICAgICBpZihhcnJfcGVyY2VudFtpXSA8IHJhbmRvbSAmJiByYW5kb20gPD0gYXJyX3BlcmNlbnRbaSsxXSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpIHtjb25zb2xlLmxvZyhcIuamgueOh+iuoeeul+WHuumUmVwiKTtyZXR1cm47fVxyXG4gICAgICAgIGxldCBob3VzZU5vZGUgPSB0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKTtcclxuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaChpbmRleClcclxuICAgICAgICB7ICAgIC8qKjAt5Yy755SfIDEt6K2m5a+fIDIt5ZWG5Lq6IC0z5ri45omL5aW96ZeyIC005Yac5rCRKi9cclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJob3NwaXRhbFwiKSBhcyBMYXlhLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW9wbGVPdXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcImZhcm1cIikgYXMgTGF5YS5TcHJpdGUpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9iYmVyIGV4dGVuZHMgUGVvcGxle1xyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlgbflj5botKLmlL/nmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3V0TW9uZXlUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze06L+b6KGM5YG355uXKDMtNinliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjMrMztcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzlgbfnm5dcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5DdXRNb25leSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ml7bpl7TlkI7lgbflj5ZcclxuICAgIHByaXZhdGUgQ3V0TW9uZXkoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJhbmRvbT1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGlmKHJhbmRvbTwwLjUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+WBt+ebl+aIkOWKn1xyXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLm1vbmV5LT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xyXG4gICAgICAgICAgICB0aGlzLmxvd1N1cHBvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7Tov5vooYzlgbfnm5coMy02KeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMyszO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOWBt+ebl1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLkN1dE1vbmV5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpmY3kvY7lubjnpo/luqYgKi9cclxuICAgIHByaXZhdGUgbG93U3VwcG9ydCgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXJTdXBwb3J0LT0wLjA1O1xyXG4gICAgfVxyXG4gICAgLyoq5aKZ5YaFICovXHJcbiAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgfVxyXG5cclxuICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgdGhpcy5jdXRNb25leVRpbWUoKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcbmltcG9ydCBUb29sIGZyb20gXCIuLi8uLi9Ub29sL1Rvb2xcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2llbnRpc3QgZXh0ZW5kcyBQZW9wbGV7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoq5Lqn55Sf56eR5oqA55qE5pa55byPLOWFiOe7meS6iOaXtumXtCAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVRlY2hub2xvZ3lUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze0KDEtMynliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjIrMTtcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzkuqfnlJ/np5HmioDlgLxcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5jcmVhdGVUZWNobm9sb2d5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirkuqfnlJ/np5HmioDlgLwgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlVGVjaG5vbG9neSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLnRlY2hub2xvZ3krPTAuNTtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtCgxLTMp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSoyKzE7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5Lqn55Sf56eR5oqA5YC8XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuY3JlYXRlVGVjaG5vbG9neSk7XHJcbiAgICB9XHJcbiAgICAvKirlopnlhoXpgLvovpEgKi9cclxuICAgIHByb3RlY3RlZCBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcInBhbGFjZVwiKSBhcyBMYXlhLlNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy50b3dlZFRvTW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumHjeWGmXNwZWNpYWxkbyAqL1xyXG4gICAgcHJvdGVjdGVkIHNwZWNpYWxEbygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwidGVjaG5vbG9neVwiKSBhcyBMYXlhLlNwcml0ZSk7ICAgIFxyXG4gICAgICAgIHRoaXMuY3JlYXRlVGVjaG5vbG9neVRpbWUoKTsgICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcbmltcG9ydCBUb29sIGZyb20gXCIuLi8uLi9Ub29sL1Rvb2xcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyIGV4dGVuZHMgUGVvcGxle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xyXG4gICAgICAgIHN1cGVyKHZpZXcsdHlwZSxpc091dCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuaYjuaYn+aViOW6lOeahOaWueW8jyzlhYjnu5nkuojml7bpl7QgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVTdGFyVGltZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtCgxLTMp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSoyKzE7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5Lqn55Sf5pWI5bqU5YC8XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuY3JlYXRlU3RhclZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirkuqfnlJ/mlYjlupTlgLwg5pWI5bqU5YC85Li65bm456aP5bqmKi9cclxuICAgIHByaXZhdGUgY3JlYXRlU3RhclZhbHVlKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIENvdW50cnlEYXRhLmluc18ucG9wdWxhclN1cHBvcnQrPTAuNTtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtCgxLTMp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSoyKzE7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5Lqn55Sf56eR5oqA5YC8XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuY3JlYXRlU3RhclZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgfVxyXG5cclxuICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTtcclxuICAgICAgIHRoaXMuY3JlYXRlU3RhclRpbWUoKTtcclxuICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VudGVyIGV4dGVuZHMgTGF5YS5TY3JpcHR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIgKyB0aGlzLnNjcmVlbldpZHRoKTtcclxuICAgICAgICBpZihzY3JlZW5XaWR0aCA8IDgwMCkgKHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lTmFtZVwiKSBhcyBMYXlhLkxhYmVsKS5mb250U2l6ZSA9IDEyNTtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLlNwcml0ZSkueCA9IChzY3JlZW5XaWR0aC0gNjY3KS8yOyAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdvcmxkRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1dvcmxkRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHVpIH0gZnJvbSBcIi4uLy4uL3VpL2xheWFNYXhVSVwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IFBlb3BsZU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvUGVvcGxlTWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi4vLi4vQ29yZS9Nc2dEaWFsb2dcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBCdXlEaWFsb2cgZnJvbSBcIi4uLy4uL0NvcmUvQnV5RGlhbG9nXCI7XHJcbmltcG9ydCBQZW9wbGUgZnJvbSBcIi4uLy4uL1BlcmZlYi9QZW9wbGVcIjtcclxuXHJcbi8qKlxyXG4gKiDkuJbnlYznrqHnkIblmajohJrmnKxcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVXb3JsZCBleHRlbmRzIHVpLkdhbWVXb3JsZFVJe1xyXG4gICAgLyoqRGF0YU1hbmFnZXIgIOWNleS+iyAqL1xyXG4gICAgLyoq5LqL5Lu25Y+R55Sf5ZmoICovXHJcbiAgICBwcml2YXRlIHdvcmxkRXZlbnRNYW5hZ2VyIDogV29ybGRFdmVudE1hbmFnZXI7XHJcbiAgICAvKirkurrnsbvnrqHnkIblmagqL1xyXG4gICAgcHJpdmF0ZSBwZW9wbGVNYW5hZ2VyIDogUGVvcGxlTWFuYWdlcjtcclxuICAgIC8qKlVJ566h55CG5ZmoICovXHJcbiAgICBwcml2YXRlIHVpTWFuYWdlciA6IFVJTWFuYWdlcjtcclxuICAgIC8qKua2iOaBr+mAmueUqOahhiAqL1xyXG4gICAgcHJpdmF0ZSBtc2dEaWFsb2cgOiBNc2dEaWFsb2c7XHJcbiAgICAvKirotK3kubDmoYYgKi9cclxuICAgIHByaXZhdGUgYnV5RGlhbG9nOkJ1eURpYWxvZztcclxuICAgIFxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvKirlsY/luZXlrr3luqYgKi9cclxuICAgIHByaXZhdGUgc2NyZWVuV2lkdGggOiBudW1iZXI7XHJcbiAgICAvKirpvKDmoIfmmK/lkKbmjInkuIsgKi9cclxuICAgIHByaXZhdGUgaXNEb3duIDogYm9vbGVhbjtcclxuICAgIC8qKum8oOagh+eCueiusOW9lSAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZVBvcyA6IGFueTtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8qKjJtaW7orqHml7YgKi9cclxuICAgIHByaXZhdGUgdGltZXJDb3VudCA6IG51bWJlcjtcclxuICAgIC8qKuWHuumXtOmalOiuoeaXtiAqL1xyXG4gICAgcHJpdmF0ZSB0aW1lckNvdW50X291dCA6IG51bWJlcjtcclxuICAgIC8qKui/myAqL1xyXG4gICAgcHJpdmF0ZSB0aW1lckNvdW50X2luIDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5nYW1lRGF0YUluaXQoKTsvL+a4uOaIj+WPmOmHj+WIneWni+WMllxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTsvL+e7meahpea3u+WKoOS6i+S7tiBcclxuICAgICAgICB0aGlzLnNjcmVlblNldHRpbmcoKTsvL+Wxj+W5leWxheS4rVxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0KCk7Ly/muLjmiI/mtYHnqIvlvIDlp4tcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnNfLnNldEFyZWEodGhpcy5zcF9zY2VuZS5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpKTtcclxuICAgICAgICBMYXlhLnRpbWVyLmxvb3AoMTAwMCx0aGlzLHRoaXMuY3VycmVudFJhdGlvKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmlbDmja7liJ3lp4vljJYgKi9cclxuICAgIHByaXZhdGUgZ2FtZURhdGFJbml0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53b3JsZEV2ZW50TWFuYWdlciA9IG5ldyBXb3JsZEV2ZW50TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucGVvcGxlTWFuYWdlciA9IG5ldyBQZW9wbGVNYW5hZ2VyKHRoaXMuc3Bfc2NlbmUpO1xyXG4gICAgICAgIHRoaXMudWlNYW5hZ2VyID0gbmV3IFVJTWFuYWdlcih0aGlzLnNwX1VJKTtcclxuICAgICAgICB0aGlzLm1zZ0RpYWxvZyA9IG5ldyBNc2dEaWFsb2coKTsgICAgICBcclxuICAgICAgICB0aGlzLmJ1eURpYWxvZz1uZXcgQnV5RGlhbG9nKCk7XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lckNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0ID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVyQ291bnRfaW4gPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKua3u+WKoOS6i+S7tiAqL1xyXG4gICAgcHJpdmF0ZSBhZGRFdmVudCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuc3RhZ2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLHRoaXMsdGhpcy5tb3VzZURvd24pO1xyXG4gICAgICAgIHRoaXMuc3Bfc2NlbmUub24oTGF5YS5FdmVudC5NT1VTRV9VUCx0aGlzLHRoaXMubW91c2VVcCk7XHJcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX01PVkUsdGhpcyx0aGlzLm1vdXNlTW92ZSk7XHJcbiAgICAgICAgLy/nu5npl6jluK7ngrnngrnlh7vkuosgICBcclxuICAgICAgICB0aGlzLmNsaWNrSG91c2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuZG9vckN0cik7XHJcbiAgICAgICAgdGhpcy5jbGlja0hvdXNlLm9uKExheWEuRXZlbnQuTU9VU0VfT1ZFUix0aGlzLHRoaXMubW91c2VPdmVyKTtcclxuICAgICAgICB0aGlzLmNsaWNrSG91c2Uub24oTGF5YS5FdmVudC5NT1VTRV9PVkVSLHRoaXMsdGhpcy5tb3VzZU91dCk7XHJcbiAgICAgICAgLy/ljLvppobkuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLmhvc3BpdGFsLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkhPU1BJVEFMXSk7XHJcbiAgICAgICAgLy/lhpvpmJ/kuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLmFybXkub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuQVJNWV0pO1xyXG4gICAgICAgIC8v57Ku5LuT5LqL5Lu257uR5a6aXHJcbiAgICAgICAgdGhpcy5mYXJtLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLkZBUk1dKTsgICAgICAgIFxyXG4gICAgICAgIC8v56eR5oqA6aaG5LqL5Lu257uR5a6aXHJcbiAgICAgICAgdGhpcy50ZWNobm9sb2d5Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLm9uSG91c2VJbmZvLFtHYW1lQ29uZmlnLlRFQ0hOT0xPR1ldKTsgICAgICAgIFxyXG4gICAgICAgIC8v5paw6Ze754K55LqL5Lu257uR5a6aXHJcbiAgICAgICAgLy90aGlzLmV2ZW50SG91c2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRVZFTlRfSE9VU0VdKTsgICAgIFxyXG4gICAgICAgIC8v5paw6Ze755qH5a6r57uR5a6aXHJcbiAgICAgICAgdGhpcy5wYWxhY2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuUEFMQUNFXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5bGP5bmVIOWxgOS4rSovXHJcbiAgICBwcml2YXRlIHNjcmVlblNldHRpbmcoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIgKyB0aGlzLnNjcmVlbldpZHRoKTtcclxuICAgICAgICB0aGlzLnNwX3NjZW5lLnggPSAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCkvMjtcclxuICAgIH1cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/kuovku7blm57osINcclxuICAgIC8qKum8oOagh+aCrOa1riAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZU92ZXIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNsaWNrSG91c2UubG9hZEltYWdlKFwibWFwL2Rvb3JIb3VzZTIucG5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuemu+W8gCAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZU91dCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2xpY2tIb3VzZS5sb2FkSW1hZ2UoXCJtYXAvZG9vckhvdXNlLnBuZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpl6jnmoTlvIDlhbMgKi9cclxuICAgIHByaXZhdGUgZG9vckN0cigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbilcclxuICAgICAgICB7Ly/lvIDpl6hcclxuICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZG9vckNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7Ly/lhbPpl6hcclxuICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kb29yT3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirlhbPpl6ggKi9cclxuICAgIHByaXZhdGUgZG9vckNsb3NlKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMuYW5pMS5pc1BsYXlpbmcpIHRoaXMuYW5pMS5wbGF5KDAsZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuW8gOmXqCAqL1xyXG4gICAgcHJpdmF0ZSBkb29yT3BlbigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLmFuaTIuaXNQbGF5aW5nICYmICF0aGlzLmFuaTEuaXNQbGF5aW5nKSB0aGlzLmFuaTIucGxheSgwLGZhbHNlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq56e75YqoICovXHJcbiAgICBwcml2YXRlIG1vdXNlTW92ZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzRG93bikgcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMubW91c2VQb3MueClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgdGhpcy5zcF9zY2VuZS54ICs9IExheWEuc3RhZ2UubW91c2VYIC0gdGhpcy5tb3VzZVBvcy54OyBcclxuICAgICAgICAvLyAgICB0aGlzLnNwX3NjZW5lLnkgKz0gTGF5YS5zdGFnZS5tb3VzZVkgLSB0aGlzLm1vdXNlUG9zLng7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3Bfc2NlbmUueCA+IDApICB0aGlzLnNwX3NjZW5lLnggPSAwO1xyXG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPCAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCkpIHRoaXMuc3Bfc2NlbmUueCA9ICAtKDIwMDAtdGhpcy5zY3JlZW5XaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW91c2VQb3MueCA9IExheWEuc3RhZ2UubW91c2VYO1xyXG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IExheWEuc3RhZ2UubW91c2VZO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaLluWKqOaMieS4iyAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZURvd24oKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzRG93biA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5ouW5Yqo5oqs6LW3ICovXHJcbiAgICBwcml2YXRlIG1vdXNlVXAoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3VzZU1vdmUpO1xyXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7IFxyXG4gICAgICAgIHRoaXMubW91c2VQb3MueCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLnkgPSB1bmRlZmluZWQ7ICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirngrnlh7sg6I635Y+W5bu6562R5L+h5oGvICovXHJcbiAgICBwcml2YXRlIG9uSG91c2VJbmZvKHR5cGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubXNnRGlhbG9nLnNob3dNc2codHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pu05pawVUnmoI/kupTlpKfkuLvlgLzkv6Hmga8gKi9cclxuICAgIHByaXZhdGUgdXBkYXRlVUlNYWluRGF0YSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRleHRfY291bnRfcG9wdWxhdGlvbi50ZXh0PUNvdW50cnlEYXRhLmluc18ucG9wdWxhdGlvbi50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMudGV4dF9jb3VudF9wb3B1bGFyU3VwcG9ydC50ZXh0PUNvdW50cnlEYXRhLmluc18ucG9wdWxhclN1cHBvcnQudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnRleHRfY291bnRfbW9uZXkudGV4dD1Db3VudHJ5RGF0YS5pbnNfLm1vbmV5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0X2NvdW50X3RlY2hub2xvZ3kudGV4dD1Db3VudHJ5RGF0YS5pbnNfLnRlY2hub2xvZ3kudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnRleHRfY291bnRfcHJlc3RpZ2UudGV4dD1Db3VudHJ5RGF0YS5pbnNfLnByZXN0aWdlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0t56iA5pyJ6ZeoXHJcbiAgICAvKirotK3kubDnqIDmnInpl6ggKi9cclxuICAgIHB1YmxpYyBidXlSYXJlRG9vcigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8vLy8vLy8vLy8vL+a4uOaIj+a1geeoi+W8gOWniy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvKirmuLjmiI/mtYHnqIvlvIDlp4sgKi9cclxuICAgIHByaXZhdGUgZ2FtZVN0YXJ0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVVSU1haW5EYXRhKCk7XHJcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLm9wZW5QZW9wbGVGYWN0b3J5KCk7Ly/kurrlj6PnlJ/miJDpgLvovpHov5DooYxcclxuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIuY3JlYXRlUGVvcGxlX0lubmVyKCk7Ly/lhoXkurrlj6PnlJ/miJBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoq5byA5ZCv5a6a5pe25ZmoICovXHJcbiAgICBwcml2YXRlIG9wZW5UaW1lcigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcChHYW1lQ29uZmlnLlRJTUVfTUFJTkRBVEEsdGhpcyxDb3VudHJ5RGF0YS5pbnNfLmNhbF9Nb25leSk7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoR2FtZUNvbmZpZy5USU1FX01BSU5EQVRBLHRoaXMsQ291bnRyeURhdGEuaW5zXy5pbmZsdWVuY2VfR3JhaW4pO1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKEdhbWVDb25maWcuVElNRV9NQUlOREFUQSx0aGlzLENvdW50cnlEYXRhLmluc18uaW5mbHVlbmNlX1BvcHVsYXJTdXBwb3J0KTtcclxuICAgIH1cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/kurrlj6PmtYHliqjpgJrnn6XlmahcclxuICAgIC8qKlxyXG4gICAgICog5rWB5Yqo5q+U5L6L77yMIOmAmuefpeWZqFxyXG4gICAgICogXHJcbiAgICAgKiAgKi9cclxuICAgIHByaXZhdGUgY3VycmVudFJhdGlvKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50aW1lckNvdW50Kys7XHJcbiAgICAgICAgdGhpcy50aW1lckNvdW50X291dCsrO1xyXG4gICAgICAgIHRoaXMudGltZXJDb3VudF9pbisrO1xyXG4gICAgICAgIGxldCBjb3VudHJ5RGF0YSA9IENvdW50cnlEYXRhLmluc187XHJcbiAgICAgICAgbGV0IEJJID0gY291bnRyeURhdGEucGVyY2VudDsgICAvL+i/my/lh7pcclxuICAgICAgICBsZXQgb3V0ZXJUYXJnZXQgPSBjb3VudHJ5RGF0YS5leGl0UGVvcGxlOy8v5Ye66Zeo55uu5qCH5pWwXHJcbiAgICAgICAgbGV0IGlubmVyVGFnZXQgPSBjb3VudHJ5RGF0YS5lbnRlclBlb3BsZTsvL+i/m+mXqOebruagh+aVsFxyXG4gICAgICAgIGxldCBfb3V0ZXIgPSBjb3VudHJ5RGF0YS5fb3V0ZXJQZW9wbGU7Ly/lh7rln47lj6Plrp7pmYXlgLxcclxuICAgICAgICBsZXQgX2lubmVyID0gY291bnRyeURhdGEuX2lubmVyUGVvcGxlOy8v5YWl5Z+O5a6e6ZmF5YC8XHJcbiAgICAgICAgbGV0IGxhc3RUaW1lID0gMTIwIC0gdGhpcy50aW1lckNvdW50IC0gNTsvL+iOt+WPluWJqeS9meaXtumXtO+8jOWkmumihOaUrzEw56eSXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6L+b5Ye65q+U5L6LXCIgKyBCSSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlh7rpl6jnm67moIfmlbA6OlwiICsgb3V0ZXJUYXJnZXQgICsgXCIgIHx8fCAg5a6e6ZmF5Ye66Zeo5pWw77ya77yaXCIgKyBfb3V0ZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi6L+b6Zeo55uu5qCH5pWwOjpcIiArIGlubmVyVGFnZXQgICsgXCIgIHx8fCAg5a6e6ZmF6L+b6Zeo5pWw77ya77yaXCIgKyBfaW5uZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Ymp5LiL5pe26Ze077ya77yaXCIgKyBsYXN0VGltZSk7XHJcblxyXG4gICAgICAgIGlmKG91dGVyVGFyZ2V0ID4gX291dGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/pgJrnn6VcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lckNvdW50X291dCA+PSBsYXN0VGltZS8ob3V0ZXJUYXJnZXQgLSBfb3V0ZXIpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpbm5lclRhZ2V0ID4gX2lubmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/pgJrnn6UgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZXJDb3VudF9pbiA+PSBsYXN0VGltZS8ob3V0ZXJUYXJnZXQgLSBfaW5uZXIpKSAgXHJcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy50aW1lckNvdW50ID49IDEyMClcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIHRoaXMudGltZXJDb3VudF9pbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJDb3VudF9vdXQgPSAwO1xyXG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5fb3V0ZXJQZW9wbGUgPSAwOy8v5a6e6ZmF5YC85b2S6Zu2XHJcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLl9pbm5lclBlb3BsZSA9IDA7Ly/lrp7pmYXlgLzlvZLpm7ZcclxuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50ID0gMDtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8b3V0ZXJUYXJnZXQtX291dGVyO2krKykvL+mAmuefpeWHuuWfjlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dChmYWxzZSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9MDtpPGlubmVyVGFnZXQtX2lubmVyO2krKykvL+mAmuefpei/m+eoi1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dCh0cnVlKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbkdhbWUgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIDogdm9pZFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIG9uQ2xpY2soKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lV29ybGQuc2NlbmVcIik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuU3RvcnkgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIDogdm9pZFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIG9uQ2xpY2soKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lU3Rvcnkuc2NlbmVcIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x7XHJcbiAgICAvL+iOt+WPluS4ieinkuWHveaVsOWAvFxyXG4gICAgcHVibGljIHN0YXRpYyByb3RhdGlvbkRlYWwoZng6bnVtYmVyLGZ5Om51bWJlcixzeDpudW1iZXIsc3k6bnVtYmVyLGdldFN0cmluZykgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICAvKirmlpzovrkgKi9cclxuICAgICAgICBsZXQgYyA6IG51bWJlciA9IE1hdGguc3FydChNYXRoLnBvdyhmeCAtIHN4LDIpICsgTWF0aC5wb3coZnkgLSBzeSwyKSk7XHJcbiAgICAgICAgLyoq5Li06L65ICovXHJcbiAgICAgICAgbGV0IGEgOiBudW1iZXIgPSBzeCAtIGZ4O1xyXG4gICAgICAgIC8qKuWvuei+uSAqL1xyXG4gICAgICAgIGxldCBiIDogbnVtYmVyID0gc3kgLSBmeTtcclxuICAgICAgICBcclxuICAgICAgICBpZihnZXRTdHJpbmcgPT0gXCJzaW5cIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIjc2luID09XCIgKyAoYi9jKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoYi9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihnZXRTdHJpbmcgPT0gXCJjb3NcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIjY29zID09XCIgKyAoYS9jKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoYS9jKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiN0YW4gPT1cIiArIChiL2EpKTsvL+Wvuei+uSDmr5Qg5Li06L65IFxyXG4gICAgICAgICAgICByZXR1cm4gKGIvYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKueisOaSnuajgOa1iyBkaWNOdW0g77ya6aKE6K6+6Led56a7IG9iamVjdDHlkoxvYmplY3Qy5Lyg5YWlc3ByaXRlLOaYr+aMieeFp+avj+S4qnNwcml0ZeeahOmUmueCueWcqOS4reW/g+S9jee9ruadpeiuoeeul+eahCAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY29sbGlzaW9uQ2hlY2sob2JqZWN0MSxvYmplY3QyKSA6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZihNYXRoLmFicyhvYmplY3QxLnggLSBvYmplY3QyLngpPCBvYmplY3QxLndpZHRoLzIgKyBvYmplY3QyLndpZHRoLzImJlxyXG4gICAgICAgICAgIE1hdGguYWJzKG9iamVjdDEueSAtIG9iamVjdDIueSkgPCBvYmplY3QxLmhlaWdodC8yICsgb2JqZWN0Mi5oZWlnaHQvMil7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRlUm9wZVBvaW50XzIoeCx5LFgsWSk6bnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb3M9VG9vbC5yb3RhdGlvbkRlYWwoeCx5LFgsWSxcImNvc1wiKTtcclxuICAgICAgICAgICAgbGV0IHNpbj1Ub29sLnJvdGF0aW9uRGVhbCh4LHksWCxZLFwic2luXCIpO1xyXG4gICAgICAgICAgICBsZXQgcm90YXRpb247XHJcbiAgICAgICAgICAgIGlmKGNvcz49MCYmc2luPjApe1xyXG4gICAgICAgICAgICAgICAgcm90YXRpb249IDE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpLTkwO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjb3M8MCYmc2luPj0wKXtcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uPTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpLTkwO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihjb3M8PTAmJnNpbjwwKXtcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uPTkwLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ZWxzZSBpZihjb3M+MCYmc2luPD0wKXtcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uPSA5MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih5IDwgWSkgcm90YXRpb24gKz0gMTgwO1xyXG4gICAgICAgICAgICByZXR1cm4gcm90YXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W6KeS5bqmIFxyXG4gICAgICog56e75Yqo54K55Zyo5YmNXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSb3RhdGlvbih4MSx5MSx4Mix5MikgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgY29zPVRvb2wucm90YXRpb25EZWFsKHgxLHkxLHgyLHkyLFwiY29zXCIpO1xyXG4gICAgICAgIGxldCBzaW49VG9vbC5yb3RhdGlvbkRlYWwoeDEseTEseDIseTIsXCJzaW5cIik7XHJcbiAgICAgICAgbGV0IHJvdGF0aW9uO1xyXG4gICAgICAgIGlmKGNvcyA+PTAgJiYgc2luPjApe1xyXG4gICAgICAgICAgICByb3RhdGlvbiA9IDkwICsgMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvcyA8MCAmJiBzaW4+PTApe1xyXG4gICAgICAgICAgICByb3RhdGlvbiA9IC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29zID4wICYmIHNpbjw9MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uID0gLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb3MgPD0wICYmIHNpbjwwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm90YXRpb24gPSAxODAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3RhdGlvbjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByb3RhdGlvbiA9IDQ1IOinkuW6plxyXG4gICAgICog5rGCIGNvcyDov5jmmK8gc2luXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRpb25TZXQocm90YXRpb24sdHlwZVN0cmluZykgIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHIgO1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICBpZihyb3RhdGlvbiA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3RhdGlvbiArPSAzNjAqKE1hdGguYWJzKE1hdGguZmxvb3Iocm90YXRpb24vMzYwKSsyKSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKE1hdGguZmxvb3Iocm90YXRpb24vMzYwKT4wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm90YXRpb24gLT0gMzYwKk1hdGguZmxvb3Iocm90YXRpb24vMzYwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgciA9IChyb3RhdGlvbikvMTgwKk1hdGguUEk7ICAgICAgICBcclxuICAgICAgICBpZih0eXBlU3RyaW5nID09IFwiY29zXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKE1hdGguY29zKHIpKTtcclxuICAgICAgICAgICAgaWYoKHJvdGF0aW9uID4gMCAmJiByb3RhdGlvbiA8PSA5MCkgfHwgKHJvdGF0aW9uPjI3MCAmJiByb3RhdGlvbjw9MzYwKSkgIHZhbHVlID0gLXZhbHVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvczo6XCIgKyB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7ICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5hYnMoTWF0aC5zaW4ocikpO1xyXG4gICAgICAgICAgICBpZigocm90YXRpb24+MTgwICYmIHJvdGF0aW9uIDw9IDI3MCkgfHwgKHJvdGF0aW9uPjI3MCAmJiByb3RhdGlvbjw9MzYwKSkgdmFsdWUgPSAtdmFsdWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2luOjpcIiArIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICAgICAgICBcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6Led56a76K6h566XXHJcbiAgICAgKiAyIOWvueixoVxyXG4gICAgICogZmlyc3RcclxuICAgICAqIHNlY29uZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvdW50RGljX09iamVjdChmOmFueSxzOmFueSkgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGYueCAtIHMueCwyKSArIE1hdGgucG93KGYueSAtIHMueSwyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlrnlnZfmo4DmtYsgXHJcbiAgICAgKiBcclxuICAgICAqIOaWueWdl+WvueixoSBzcFxyXG4gICAgICog5qOA5rWL55qE54K5IOWvueixoVxyXG4gICAgICogKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYmxvY2tUZXN0KHNwLHBvaW50KSA6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZighc3ApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgcG9pbnRMZWZ0IDogYW55ID17eDpzcC54IC0gc3Aud2lkdGgvMix5OnNwLnktc3AuaGVpZ2h0LzJ9O1xyXG4gICAgICAgIGxldCBwb2ludFJpZ2h0IDogYW55ID17eDpzcC54ICsgc3Aud2lkdGgvMix5OnNwLnkrc3AuaGVpZ2h0LzJ9O1xyXG4gICAgICAgIGxldCBzX3BvaW50TGVmdCA9IHBvaW50LnggPiBwb2ludExlZnQueCAmJiBwb2ludC55PnBvaW50TGVmdC55O1xyXG4gICAgICAgIGxldCBzX3BvaW50UmlnaHQgPSBwb2ludC54IDwgcG9pbnRSaWdodC54ICYmIHBvaW50Lnk8cG9pbnRSaWdodC55O1xyXG4gICAgICAgIGlmKHNfcG9pbnRMZWZ0ICYmIHNfcG9pbnRSaWdodCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuICBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdhbWVEYXRhIC0gQ291bnRyeURhdGFcclxuICAgICAqIOWNoOavlCDmlbDnu4RcclxuICAgICrojrflj5bljLrpl7TmlbDnu4QgMCwwLjgsMC44MywwLjg0LDAuOSwxXHJcbiAgICAgKiBAYXJyIOWxnuaAp+WQjeWtl1xyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGVyY2VudEFyZWEoYXJyKTpBcnJheTxudW1iZXI+XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFyclBlcmNlbnQgPSBbXTsvL+eUn+S6p+avlOS+i1xyXG4gICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aTxhcnIubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG51bWJlciArPSBDb3VudHJ5RGF0YS5pbnNfW2FycltpXV07XHJcbiAgICAgICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyUGVyY2VudDtcclxuICAgIH1cclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xyXG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xyXG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbmV4cG9ydCBtb2R1bGUgdWkge1xyXG4gICAgZXhwb3J0IGNsYXNzIEJ1eVVJIGV4dGVuZHMgRGlhbG9nIHtcclxuXHRcdHB1YmxpYyBiZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnRuX2J1eTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnV5X25hbWU6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGJ1eV9pbnB1dDpMYXlhLlRleHRJbnB1dDtcblx0XHRwdWJsaWMgYnRuX2Nsb3NlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBidXlfcHJpY2U6bGF5YS5kaXNwbGF5LlRleHQ7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJCdXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIEdhbWVXb3JsZFVJIGV4dGVuZHMgU2NlbmUge1xyXG5cdFx0cHVibGljIGFuaTE6TGF5YS5GcmFtZUFuaW1hdGlvbjtcblx0XHRwdWJsaWMgYW5pMjpMYXlhLkZyYW1lQW5pbWF0aW9uO1xuXHRcdHB1YmxpYyBzcF9zY2VuZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfZ3JvdW5kOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfOTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgZXZlbnRIb3VzZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBwYWxhY2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvc3BpdGFsOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGVjaG5vbG9neTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBmYXJtOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGFybXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX3JpdmVyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF93YWxsOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9kb29yOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBjbGlja0hvdXNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9VSTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaW1nX3BvcHVsYXRpb246TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfcG9wdWxhdGlvbjpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX3BvcHVsYXJTdXBwb3J0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3BvcHVsYXJTdXBwb3J0OmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfbW9uZXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfbW9uZXk6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ190ZWNobm9sb2d5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3RlY2hub2xvZ3k6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ19wcmVzdGlnZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9wcmVzdGlnZTpsYXlhLmRpc3BsYXkuVGV4dDtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkdhbWVXb3JsZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IG1vZHVsZSB1aS5EaWEge1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1cnJlbnREaWFsb2dVSSBleHRlbmRzIFNjZW5lIHtcclxuXHRcdHB1YmxpYyBtc2dCb2R5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcHJpdGVfUGVyc29uOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcHJpdGVfTXNnOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBidG5fY2xvc2U6TGF5YS5TcHJpdGU7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJEaWEvQ3VycmVudERpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cciJdfQ==
