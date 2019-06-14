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
                //CountryData.ins_.cal_MainData(GameConfig.MAIN_POPULATION,1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXIyLjAvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvQnV5RGlhbG9nLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0JhbmRpdC50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvQ29tbW9uLnRzIiwic3JjL1BlcmZlYi9kaWZmX1Blb3BsZS9Sb2JiZXIudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL1NjaWVudGlzdC50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvU3Rhci50cyIsInNyYy9TY3JpcHQvQ2VudGVyLnRzIiwic3JjL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzIiwic3JjL1NjcmlwdC9PcGVuR2FtZS50cyIsInNyYy9TY3JpcHQvT3BlblN0b3J5LnRzIiwic3JjL1Rvb2wvVG9vbC50cyIsInNyYy91aS9sYXlhTWF4VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVkE7SUFBQTtJQWdFQSxDQUFDO0lBL0RHLGNBQWM7SUFDQSxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxtQkFBUSxHQUFZ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VlksbUJBQWUsa0JBVTNCLENBQUE7SUFDTCxDQUFDLEVBWmdCLEdBQUcsR0FBSCxNQUFHLEtBQUgsTUFBRyxRQVluQjtBQUFELENBQUMsRUFaYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFZZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcbiAgICAvKirkurrnp40gLSDmma7pgJrkurogKi9cbiAgICBwdWJsaWMgc3RhdGljIENPTU1PTl9NQU4gOiBzdHJpbmcgPSBcImNvbW1vblwiO1xuICAgIC8qKuS6uuenjSAtIOebl+i0vCAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUk9CQkVSX01BTiA6IHN0cmluZyA9IFwicm9iYmVyXCI7XG4gICAgLyoq5Lq656eNIC0g5Zyf5YyqICovXG4gICAgcHVibGljIHN0YXRpYyBCQU5ESVRfTUFOIDogc3RyaW5nID0gXCJiYW5kaXRcIjtcbiAgICAvKirkurrnp40gLSDmmI7mmJ8gKi9cbiAgICBwdWJsaWMgc3RhdGljIFNUQVJfTUFOIDogc3RyaW5nID0gXCJzdGFyXCI7XG4gICAgLyoq5Lq656eNIC0g56eR5a2m5a62ICovXG4gICAgcHVibGljIHN0YXRpYyBTQ0lFTlRJU1RfTUFOIDogc3RyaW5nID0gXCJzY2llbnRpc3RcIjtcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5bu6562RXG4gICAgLyoq5Yy76ZmiICovXG4gICAgcHVibGljIHN0YXRpYyBIT1NQSVRBTCA6IG51bWJlciA9IDE7XG4gICAgLyoq5Yab6ZifICovXG4gICAgcHVibGljIHN0YXRpYyBBUk1ZIDogbnVtYmVyID0gMjtcbiAgICAvKirlhpzlnLogKi9cbiAgICBwdWJsaWMgc3RhdGljIEZBUk06IG51bWJlciA9IDM7XG4gICAgLyoq56eR5oqAICovXG4gICAgcHVibGljIHN0YXRpYyBURUNITk9MT0dZOiBudW1iZXIgPSA0O1xuICAgIC8qKuS6i+S7tuaIvyDmlrDpl7vmiL8gKi9cbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UX0hPVVNFOiBudW1iZXIgPSA1O1xuICAgIC8qKueah+WuqyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUEFMQUNFOiBudW1iZXIgPSA2O1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeajgOa1i+eCueeahOmXtOi3nVxuICAgIC8qKuajgOa1i+eCuemXtOi3nSAqL1xuICAgIHB1YmxpYyBzdGF0aWMgVEVTVF9QT0lOVF9ESUMgOiBudW1iZXIgPSA1O1xuICAgIC8qKumAn+W6piAqL1xuICAgIHB1YmxpYyBzdGF0aWMgVEVTVF9QT0lOVF9TUEVFRCA6IG51bWJlciA9IDAuNDtcbiAgICAvKirml4vovazop5LluqblgY/np7sgKi9cbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfUk8gOiBudW1iZXIgPSAxMDtcbiAgICAvKirkurrnsbvnlJ/kuqfpl7TpmpRTICovXG4gICAgcHVibGljIHN0YXRpYyBQRVJTT05fQ1JFQVRFX1RJTUUgOiBudW1iZXIgPSAxO1xuICAgIC8qKuebkea1i+eCueaVsOmHjyovXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX0NPVU5UIDogbnVtYmVyID0gNjtcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Li75YC8XG4gICAgLyoq5Zu95a626LSi5pS/ICovXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX01PTkVZIDogc3RyaW5nID0gXCJtb25leVwiO1xuICAgIC8qKuWbveWutuS6uuWPoyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9QT1BVTEFUSU9OIDogc3RyaW5nPVwicG9wdWxhdGlvblwiO1xuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9QT1BVTEFSU1VQUE9SVCA6IHN0cmluZyA9IFwicG9wdWxhclN1cHBvcnRcIjtcbiAgICAvKirlm73lrrbnp5HmioAgKi9cbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fVEVDSE5PTE9HWSA6IHN0cmluZyA9IFwidGVjaG5vbG9neVwiO1xuICAgIC8qKuWbveWutuWogeacmyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTUFJTl9QUkVTVElHRSA6IHN0cmluZyA9IFwicHJlc3RpZ2VcIjtcblxuICAgIFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pe26Ze0XG4gICAgLyoq5LqU5aSn5Li75YC86Kem5Y+R5pe26Ze0ICovXG4gICAgcHVibGljIHN0YXRpYyBUSU1FX01BSU5EQVRBIDogbnVtYmVyID0gMTIqNjAqNjA7XG4gICAgXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5YW25LuWXG4gICAgLyoq5LiA5aSp5pe26Ze0L+WIhumSnyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgT05FX0RBWTpudW1iZXI9MTAqNjA7XG4gICAgLyoq57Ku6aOf55Sf5Lqn546H5o2i6ZKx5Li055WM5YC8ICovXG4gICAgcHVibGljIHN0YXRpYyBHUkFJTl9FWENIQU5HRU1PTkVZX1BFUkNFTlQ9MS41O1xuICAgIC8qKumSseaNoueyrumjn+axh+eOhyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTU9ORVlUT0dSQUlOPTI7XG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XHJcbi8qKlxyXG4gKiDotK3kubDmoYYg6YCa55SoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXlEaWFsb2cgZXh0ZW5kcyB1aS5CdXlVSXtcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMud2lkdGg9ODAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PTQwMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpOnZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5rOo5YaM5LqL5Lu2ICovXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50cygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0bl9idXkub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuYnV5Q2xpY2spO1xyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlQ2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueCueWHu+i0reS5sCAqL1xyXG4gICAgcHJpdmF0ZSBidXlDbGljaygpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgY3VyclxyXG4gICAgfSBcclxuICAgIFxyXG4gICAgLyoq54K55Ye75YWz6ZetICovXHJcbiAgICBwcml2YXRlIGNsb3NlQ2xpY2soKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSBcclxufSIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVyZmViL1Blb3BsZVwiO1xuXG4vKipcbiAqIOaVsOaNruS4reW/gyDmiYDmnInnmoTmlbDmja5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRyeURhdGF7XG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogQ291bnRyeURhdGEgPSBuZXcgQ291bnRyeURhdGEoKTtcbiAgICAvKioqKioqKioqKioqKirkuLvmlbDmja4qKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKirlm73lrrbotKLmlL8gKi9cbiAgICBwdWJsaWMgbW9uZXkgOiBudW1iZXIgPSAxMDAwMDtcbiAgICAvKirlm73lrrbkurrlj6MgKi9cbiAgICBwdWJsaWMgcG9wdWxhdGlvbiA6IG51bWJlcj0xMDA7XG4gICAgLyoq5Zu95a625bm456aP5bqmICovXG4gICAgcHVibGljIHBvcHVsYXJTdXBwb3J0IDogbnVtYmVyID0gNTA7XG4gICAgLyoq5Zu95a6256eR5oqAICovXG4gICAgcHVibGljIHRlY2hub2xvZ3kgOiBudW1iZXIgPSA1MDtcbiAgICAvKirlm73lrrblo7DmnJsgKi9cbiAgICBwdWJsaWMgcHJlc3RpZ2UgOiBudW1iZXIgPSA1MDtcblxuICAgIC8qKioqKioqKioqKioqKirlia/mlbDmja4qKioqKioqKioqKioqKioqKi9cbiAgICAvLy0tLS0tLS0t5Li75pWw5o2u5b2x5ZONXG4gICAgLy/lm7rlrprmlK/lh7pcbiAgICAvKirlhpvotLkgKi9cbiAgICBwdWJsaWMgYXJteUNvc3QgOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq5pS/5bqc6LS555SoICovXG4gICAgcHVibGljIGdvdmVybkNvc3QgOiBudW1iZXIgPSAxMDA7XG4gICAgLyoq56eR5oqA6LS555SoICovXG4gICAgcHVibGljIHRlY2hub2xvZ3lDb3N0IDogbnVtYmVyID0gMTAwO1xuICAgIC8qKueojuaUtueOhyAqL1xuICAgIHB1YmxpYyB0YXggOiBudW1iZXIgPSAwLjA1O1xuICAgIC8qKueyrumjn+a2iOiAl+mHjyAo5Lq65Z2H5raI6ICX6YePKSAqL1xuICAgIHB1YmxpYyBncmFpblBlckNvc3QgOiBudW1iZXIgPSAxO1xuICAgIFxuXG4gICAgLy/lj5jliqjnjodcbiAgICAvKirnsq7po5/kuqfph48gKOS6uuWdh+S6p+mHjykqL1xuICAgIHB1YmxpYyBncmFpblBlckFkZCA6IG51bWJlciA9IDE7XG4gICAgLyoq57Ku6aOf5bqT5a2YICovXG4gICAgcHVibGljIGdyYWluU3RvY2s6bnVtYmVyPTA7XG4gICAgLyoq5Yab6LS55YeP5bCR546HICovXG4gICAgcHVibGljIGFybXlQZXJjZW50Om51bWJlcj0wLjI7XG4gICAgLyoqR0RQIOaMo+mSseiDveWKm++8jOavj+S6uuavj+WkqeiDveS6p+WkmuWwkemSsSAqL1xuICAgIHB1YmxpYyBHRFAgOiBudW1iZXIgPSAxMDtcblxuXG4gICAgLyoq6L+b5Z+O5pWwIOebruagh+WAvDJtaW4qL1xuICAgIHB1YmxpYyBlbnRlclBlb3BsZSA6IG51bWJlciA9IDUwO1xuICAgIC8qKuWHuuWfjuaVsCDnm67moIflgLwybWluKi9cbiAgICBwdWJsaWMgZXhpdFBlb3BsZSA6IG51bWJlciA9IDUwO1xuICAgIC8qKuS6uuWPo+avlOS+i+aVsCDov5vln47mlbAv5Ye65Z+O5pWwIDJtaW4qL1xuICAgIHB1YmxpYyBwZXJjZW50IDogbnVtYmVyID0gMTtcbiAgICAvKirln47lpJbkurrlj6PmlbDnu4QqL1xuICAgIHB1YmxpYyBhcnJfb3V0UGVvcGxlIDogQXJyYXk8UGVvcGxlPjtcbiAgICAvKirln47lhoXkurrlj6PmlbDnu4QgKi9cbiAgICBwdWJsaWMgYXJyX2luUGVvcGxlIDogQXJyYXk8UGVvcGxlPjtcbiAgICAvKirlh7rln47kurrlj6Mg5a6e6ZmF5YC8LzJtaW4gKi9cbiAgICBwdWJsaWMgX291dGVyUGVvcGxlIDogbnVtYmVyO1xuICAgIC8qKui/m+mXqOS6uuWPoyDlrp7pmYXlgLwvMm1pbiAqL1xuICAgIHB1YmxpYyBfaW5uZXJQZW9wbGUgOiBudW1iZXI7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mma7pgJrkurrlj6PljaDmr5RcbiAgICAvKiowLeWMu+eUnyAxLeitpuWvnyAyLeWVhuS6uiAtM+a4uOaJi+WlvemXsiAtNOWGnOawkSovXG4gICAgcHVibGljIGFycl9wZXJzb25QZXJjZW50TmFtZSA6IEFycmF5PHN0cmluZz4gPSBbXCJwZXJjZW50RG9jdG9yXCIsXCJwZXJjZW50UG9saWNcIixcInBlcmNlbnRTaG9wZXJcIixcInBlcmNlbnROb3RoaW5nXCIsXCJwZXJjZW50RmFybWVyXCJdO1xuICAgIC8qKuaZrumAmuS6uuS4rSDljLvnlJ/nmoTljaDmr5QqL1xuICAgIHB1YmxpYyBwZXJjZW50RG9jdG9yIDogbnVtYmVyID0gMC4wMjtcbiAgICAvKirmma7pgJrkurrnp40g6K2m5a+f5Y2g5q+UICovXG4gICAgcHVibGljIHBlcmNlbnRQb2xpYyA6IG51bWJlciA9IDAuMDM7XG4gICAgLyoq5pmu6YCa5Lq656eNIOWVhuS6uueahOWNoOavlCAqL1xuICAgIHB1YmxpYyBwZXJjZW50U2hvcGVyIDogbnVtYmVyID0gMC4xNTtcbiAgICAvKirmuLjmiYvlpb3pl7IgKi9cbiAgICBwdWJsaWMgcGVyY2VudE5vdGhpbmcgOiBudW1iZXIgPSAwLjE7XG4gICAgLyoq5Yac5rCRICovXG4gICAgcHVibGljIHBlcmNlbnRGYXJtZXIgOiBudW1iZXIgPSAwLjc7XG5cbiAgICAvLy0tLS0tLS0t5b2x5ZONIOOAkOS4u+aVsOaNruOAkS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcblxuXG5cblxuXG5cbiAgICAvLy0tLS0tLS0t5LqL5Lu25pWw5o2uXG4gICAgLyoq55if55arICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyovXG4gICAgcHVibGljIHBlc3QgOiBudW1iZXIgPSAwO1xuICAgIC8qKuWcsOmchyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8gKi9cbiAgICBwdWJsaWMgbmF0dXJhbERpc2FzdGVyIDogbnVtYmVyID0gMDtcbiAgICAvKirmiJjkubEgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfKi9cbiAgICBwdWJsaWMgd2FyIDogbnVtYmVyID0gMDtcblxuICAgIC8vLS0tLS0tLS3ogYzkuJrkurrmlbBcbiAgICBwdWJsaWMgYXJyX1Blb3BsZSA6IEFycmF5PHN0cmluZz4gPSBbXCJjb21tb25cIixcInNjaWVudGlzdFwiLFwic3RhclwiLFwiYmFuZGl0XCIsXCJyb2JiZXJcIl07XG4gICAgLyoq5pmu6YCa5Lq6IEEgIOaZrumAmuS6uuS4reS8muS6p+eUn+WMu+eUnyDorablr58g562J5q2j5bi46IGM5LiaKi9cbiAgICBwdWJsaWMgY29tbW9uIDogbnVtYmVyID0gOTU7XG4gICAgLyoq56eR5a2m5a62IFNTUyovXG4gICAgcHVibGljIHNjaWVudGlzdCA6IG51bWJlciA9IDE7XG4gICAgLyoq5piO5pifIFNTKi9cbiAgICBwdWJsaWMgc3RhciA6IG51bWJlciA9IDI7XG4gICAgLyoq5Zyf5YyqIC1TICovXG4gICAgcHVibGljIGJhbmRpdCA6IG51bWJlciA9IDE7XG4gICAgLyoq55uX6LS8IC1BICovXG4gICAgcHVibGljIHJvYmJlciA6IG51bWJlciA9IDE7XG4gICAgICAgIC8vIC8qKuaZrumAmuS6uiBBICDmma7pgJrkurrkuK3kvJrkuqfnlJ/ljLvnlJ8g6K2m5a+fIOetieato+W4uOiBjOS4miovXG4gICAgICAgIC8vIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSAxO1xuICAgICAgICAvLyAvKirnp5HlrablrrYgU1NTKi9cbiAgICAgICAgLy8gcHVibGljIHNjaWVudGlzdCA6IG51bWJlciA9IDA7XG4gICAgICAgIC8vIC8qKuaYjuaYnyBTUyovXG4gICAgICAgIC8vIHB1YmxpYyBzdGFyIDogbnVtYmVyID0gMDtcbiAgICAgICAgLy8gLyoq5Zyf5YyqIC1TICovXG4gICAgICAgIC8vIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAwO1xuICAgICAgICAvLyAvKirnm5fotLwgLUEgKi9cbiAgICAgICAgLy8gcHVibGljIHJvYmJlciA6IG51bWJlciA9IDA7XG4gICAgLyoq5bey55Sf5oiQ55qE5Lq656eNICAwIOaZrumAmiAgIDHnp5HlrablrrYgIDLmmI7mmJ8gM+Wcn+WMqiA055uX6LS8Ki9cbiAgICBwdWJsaWMgYWxyZWFkeUNyZWF0ZSA6IEFycmF5PG51bWJlcj4gPSBbMCwwLDAsMCwwXTtcblxuICAgIC8vLS0tLS0tLS3ln47pl6hcbiAgICAvKirpl6jmmK/lkKbmiZPlvIAqL1xuICAgIHB1YmxpYyBpc0Rvb3JPcGVuIDogYm9vbGVhbj10cnVlO1xuICAgIC8qKuetm+afpeiDveWKmyDlkK/liqjnibnmrorpl6jnmoTml7blgJkgIOetm+afpeiDveWKm+eUn+aViCovXG4gICAgcHVibGljIHByZXBhcmF0aW9uIDogbnVtYmVyID0gMC41O1xuICAgIC8qKueJueauiumXqCDnrZvmn6UgMS3pmLLmraLov5vlhaUgICAyLemCgOivt+i/m+WFpSovXG4gICAgLy8gcHVibGljIGtlZXBTZWxlY3QgOiBBcnJheTxudW1iZXI+ID0gW107XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWMuuWfn1xuICAgIC8qKuWimeWGheWMuuWfn+WIkuWIhiAqL1xuICAgIHB1YmxpYyBhcnJfTGVmdEFyZWEgOiBBcnJheTxhbnk+O1xuICAgIHB1YmxpYyBhcnJfUmlnaHRBcmVhIDogQXJyYXk8YW55PjtcbiAgICBcbiAgICAvLy0tLS0tLS0tLS0tLS0tLeWzsOWAvFxuICAgIC8qKuWbveWutuW5uOemj+W6puWzsOWAvCAqL1xuICAgIHB1YmxpYyBwb3B1bGFyU3VwcG9ydE1heCA6IG51bWJlciA9IDEwMDtcbiAgICAvKirlm73lrrbnp5HmioDls7DlgLwgKi9cbiAgICBwdWJsaWMgdGVjaG5vbG9neU1heCA6IG51bWJlciA9IDEwMDtcbiAgICAvKirlm73lrrblo7DmnJvls7DlgLwgKi9cbiAgICBwdWJsaWMgcHJlc3RpZ2VNYXggOiBudW1iZXIgPSAxMDA7XG4gICAgXG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYSA9IG5ldyBBcnJheTxhbnk+KCk7XG4gICAgICAgIHRoaXMuYXJyX1JpZ2h0QXJlYSA9IG5ldyBBcnJheTxhbnk+KCk7XG4gICAgICAgIHRoaXMuYXJyX2luUGVvcGxlID0gbmV3IEFycmF5PFBlb3BsZT4oKTtcbiAgICAgICAgdGhpcy5hcnJfb3V0UGVvcGxlID0gbmV3IEFycmF5PFBlb3BsZT4oKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirojrflj5bljLrln58gKi9cbiAgICBwdWJsaWMgc2V0QXJlYSh2aWV3IDogTGF5YS5Ob2RlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHZpZXcuX2NoaWxkcmVuO1xuICAgICAgICBmb3IobGV0IGk9MDtpPGNoaWxkcmVuLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLm5hbWUgPT0gXCJwYWxhY2VcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYS5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEucHVzaChjaGlsZHJlbltpXSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihjaGlsZHJlbltpXS54PDk4MSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYS5wdXNoKGNoaWxkcmVuW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcnJfTGVmdEFyZWEucHVzaCh2aWV3LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInNwX3dhbGxcIikpO1xuICAgICAgICB0aGlzLmFycl9SaWdodEFyZWEucHVzaCh2aWV3LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInNwX3dhbGxcIikpO1xuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uueahOmaj+acuuenu+WKqOmAn+W6piAqL1xuICAgIHB1YmxpYyBnZXRNb3ZlU3BlZWQoKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIEdhbWVDb25maWcuVEVTVF9QT0lOVF9TUEVFRCooTWF0aC5yYW5kb20oKSswLjUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS6uuWPo+a1gemHjyA6XG4gICAgICogcmV0dXJuIOi/m+WFpSAvIOWHuuWOu1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRfUGVvcGxlTW92ZSgpIDogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJjZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS6uuenjeavlOS+i1xuICAgICAqIEBwYXJhbSB0eXBlIOS6uuenjVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRfUHJvZmVzc2lvblBlcmNlbnQodHlwZTpzdHJpbmcpIDogbnVtYmVyXG4gICAge1xuICAgICAgICBpZih0aGlzW3R5cGVdID09PSB1bmRlZmluZWQpIGNvbnNvbGUubG9nKFwi5LiN5a2Y5Zyo6K+l5Lq656eNXCIpO1xuICAgICAgICBlbHNlIHJldHVybiB0aGlzW3R5cGVdLyh0aGlzLnBvcHVsYXRpb24pO1xuICAgIH1cblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t57uT566XXG4gICAgLyoq6LSi5pS/57uT566XKi9cbiAgICBwdWJsaWMgY2FsX01vbmV5KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnByZXN0aWdlX0FybXlDb3N0KCk7XG4gICAgICAgIHRoaXMuc3RlYWR5Q29zdCgpO1xuICAgICAgICB0aGlzLmdldFRheCgpO1xuICAgICAgICB0aGlzLnRlY2hub2xvZ3lfR0RQKCk7XG4gICAgfVxuXG4gICAgLyoq57Ku6aOfIOW9seWTjee7k+eulyovXG4gICAgcHVibGljIGluZmx1ZW5jZV9HcmFpbigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGdyYWluQ29zdD10aGlzLnBvcHVsYXRpb25fR3JhaW5Db3N0KCk7XG4gICAgICAgIGxldCBncmFpbkFkZD10aGlzLnBvcHVsYXRpb25fR3JhaW5BZGQoKTtcbiAgICB9XG5cbiAgICAvKirlubjnpo/luqYg5b2x5ZON57uT566XICovXG4gICAgcHVibGljIGluZmx1ZW5jZV9Qb3B1bGFyU3VwcG9ydCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zdXBwb3J0X1BlcmNlbnQoKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0X1Blb3BsZVR5cGUoKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0X091dFBlb3BsZU1heCgpO1xuICAgIH1cblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5YWs5byPXG4gICAgLyoq56iz5a6a5pSv5Ye6ICovXG4gICAgcHJpdmF0ZSBzdGVhZHlDb3N0KCk6dm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5tb25leS09dGhpcy5hcm15Q29zdCooMS10aGlzLmFybXlQZXJjZW50KSt0aGlzLmdvdmVybkNvc3QrdGhpcy50ZWNobm9sb2d5Q29zdDtcbiAgICB9XG5cbiAgICAvKirnsq7po5/mtojogJcg5Lq65Y+j5pWwKuavj+S6uua2iOiAl+mHjyovXG4gICAgcHJpdmF0ZSBwb3B1bGF0aW9uX0dyYWluQ29zdCgpOm51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9wdWxhdGlvbip0aGlzLmdyYWluUGVyQ29zdDtcbiAgICB9XG5cbiAgICAvKirnsq7po5/nlJ/kuqcg5Lq65Y+j5pWwKuavj+S6uuWunumZheS6p+mHjyovXG4gICAgcHJpdmF0ZSBwb3B1bGF0aW9uX0dyYWluQWRkKCk6bnVtYmVyXG4gICAge1xuICAgICAgICAvL+enkeaKgOW6pui9rOaNoiDnp5HmioDluqYwLTEwMCDnlJ/kuqflj5jljJbnjocwLTIg5YWs5byP5pqC5a6aeT14KjAuMDItMSw1MOS4uuWIhueVjOmZkFxuICAgICAgICBsZXQgY2hhbmdlPXRoaXMudGVjaG5vbG9neSowLjAyLTE7XG4gICAgICAgIHRoaXMuZ3JhaW5QZXJBZGQ9KDErY2hhbmdlKSp0aGlzLmdyYWluUGVyQWRkO1xuICAgICAgICBsZXQgcHJvPXRoaXMuZ3JhaW5QZXJBZGQqdGhpcy5wb3B1bGF0aW9uO1xuICAgICAgICByZXR1cm4gcHJvO1xuICAgIH1cblxuICAgIC8qKuW5uOemj+W6puW9seWTjeS6uuWPo+a1geWKqOeOhyAqL1xuICAgIHByaXZhdGUgc3VwcG9ydF9QZXJjZW50KCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/lubjnpo/lvbHlk43kurrlj6PmtYHliqjnjofnmoTms6LliqjojIPlm7QgLTAuMn4wLjIg5YWs5byP5pqC5a6aeT14KjAuMDA0LTAuMiw1MOS4uuWIhueVjOmZkFxuICAgICAgICBsZXQgY2hhbmdlPXRoaXMucG9wdWxhclN1cHBvcnQqMC4wMDQtMC4yO1xuICAgICAgICB0aGlzLnBlcmNlbnQ9KDErY2hhbmdlKSp0aGlzLnBlcmNlbnQ7ICAgXG4gICAgfVxuXG4gICAgLyoq5bm456aP5bqm5b2x5ZON5Lq656eN5Yeg546HIOWdh+S7juaZrumAmuS6uuWHoOeOh+S4rei/m+ihjOabv+aNoiovXG4gICAgcHJpdmF0ZSBzdXBwb3J0X1Blb3BsZVR5cGUoKVxuICAgIHtcbiAgICAgICAgLy/np5Hlrablrrbms6LliqjojIPlm7QgMC4wMS0wLjA1IOWFrOW8j+aaguWumnk9eCowLjAwMDQrMC4wMSw1MOS4uuWIhueVjOmZkFxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLnNjaWVudGlzdD10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDAwNCswLjAxO1xuICAgICAgICAvL+aYjuaYn+azouWKqOiMg+WbtCAwLjAwNS0wLjAyNSDlhazlvI/mmoLlrpp5PXgqMC4wMDAyKzAuMDA1LDUw5Li65YiG55WM6ZmQXG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18uc3Rhcj10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDAwMiswLjAwNTtcbiAgICAgICAgLy/nm5fotLzms6LliqjojIPlm7QgMC4wNi0wLjE0IOWFrOW8j+aaguWumnk9eCowLjAwMDgrMC4wNiw1MOS4uuWIhueVjOmZkFxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLnJvYmJlcj10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDAwOCswLjA2O1xuICAgICAgICAvL+Wcn+WMquazouWKqOiMg+WbtCAwLjAyLTAuMSDlhazlvI/mmoLlrpp5PXgqMC4wMDA4KzAuMDIsNTDkuLrliIbnlYzpmZBcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5iYW5kaXQ9dGhpcy5wb3B1bGFyU3VwcG9ydCowLjAwMDgrMC4wMjtcbiAgICAgICAgLy/mma7pgJrkurrms6LliqjojIPlm7RcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5jb21tb249MS0oT3V0Q291bnRyeURhdGEuaW5zXy5zY2llbnRpc3QrT3V0Q291bnRyeURhdGEuaW5zXy5zdGFyK091dENvdW50cnlEYXRhLmluc18ucm9iYmVyK091dENvdW50cnlEYXRhLmluc18uYmFuZGl0KTtcbiAgICB9XG5cbiAgICAvKirlubjnpo/luqblvbHlk43lopnlpJbkurrlj6Mg5aKZ5aSW5pyA5aSn5a6557qz5pWwMjAwLTYwMCovXG4gICAgcHJpdmF0ZSBzdXBwb3J0X091dFBlb3BsZU1heCgpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v5aKZ5aSW5aKe6ZW/546H5rOi5Yqo6IyD5Zu0IDAuMi0wLjYg5YWs5byP5pqC5a6aeT14KjAuMDA0KzAuMiw1MOS4uuWIhueVjOmZkFxuICAgICAgICBsZXQgY2hhbmdlPXRoaXMucG9wdWxhclN1cHBvcnQqMC4wMDQrMC4yO1xuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50PTEwMDAqY2hhbmdlO1xuICAgIH1cblxuICAgIC8qKuenkeaKgOW9seWTjUdEUCAqL1xuICAgIHByaXZhdGUgdGVjaG5vbG9neV9HRFAoKTp2b2lkXG4gICAge1xuICAgICAgICAvL0dEUOazouWKqOiMg+WbtCAtMC41fjAuNSDlhazlvI/mmoLlrpp5PXgqMC4wNSw1MOS4uuWIhueVjOmZkFxuICAgICAgICBsZXQgY2hhbmdlPXRoaXMudGVjaG5vbG9neSowLjAxLTAuNTtcbiAgICAgICAgLy/lrp7pmYVHRFBcbiAgICAgICAgbGV0IGN1cnJHRFA9dGhpcy5HRFAqKGNoYW5nZSsxKTtcbiAgICAgICAgdGhpcy5tb25leS09Y3VyckdEUCp0aGlzLnBvcHVsYXRpb247XG4gICAgfVxuICAgIC8qKuWogeacm+W9seWTjeWGm+i0uSAqL1xuICAgIHByaXZhdGUgcHJlc3RpZ2VfQXJteUNvc3QoKTp2b2lkXG4gICAge1xuICAgICAgICAvL+WGm+i0ueWHj+WwkeeOh+azouWKqOiMg+WbtCAwLjAtMC40IOWFrOW8j+aaguWumnk9eCowLjAwNCw1MOS4uuWIhueVjOmZkFxuICAgICAgICB0aGlzLmFybXlQZXJjZW50PXRoaXMucHJlc3RpZ2UqMC4wMDQ7XG4gICAgfVxuXG4gICAgLyoq56iO5pS2ICovXG4gICAgcHVibGljIGdldFRheCgpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubW9uZXkrPXRoaXMudGF4O1xuICAgIH1cblxuICAgIC8qKueyrumjn+e7k+eulyAqL1xuICAgIC8qcHVibGljIGNhbF9HcmFpbigpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v5aaC5p6c6L+Y5pyJ57Ku6aOf5bqT5a2YXG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQ+PUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cylcbiAgICAgICAge1xuICAgICAgICAgICAgLy/lpoLmnpznlJ/kuqfph4/lpKfkuo7lpKfkuo7mtojogJfnjofnmoTmn5DkuKrlgI3njofvvIzlhYjorqnlhbboh6rliqjovazljJbkuLrotKLmlL/vvIzkuYvlkI7kv67mlLnkuLrmiYvliqjovazljJZcbiAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQvQ291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzPj1HYW1lQ29uZmlnLkdSQUlOX0VYQ0hBTkdFTU9ORVlfUEVSQ0VOVClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+i2heWHuuWAjeeOh+eahOmDqOWIhlxuICAgICAgICAgICAgICAgIGxldCBleGNoYW5nZT1Db3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkLUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cypHYW1lQ29uZmlnLkdSQUlOX0VYQ0hBTkdFTU9ORVlfUEVSQ0VOVDtcbiAgICAgICAgICAgICAgICAvL+aNoumSsVxuICAgICAgICAgICAgICAgIHRoaXMuZXhjaGFuZ2VNb25leShleGNoYW5nZSk7XG4gICAgICAgICAgICAgICAgLy/liankvZnnmoTliqDlhaXlupPlrZhcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srPShDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkLWV4Y2hhbmdlLUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy/liqDlhaXlupPlrZhcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srPShDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkLUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+WmguaenOW6k+WtmOWKoOS4iueUn+S6p+eahOeyrumjn+S4jei2s+S7peaKteWkn+a2iOiAl+eahOeyrumjn1xuICAgICAgICAgICAgaWYoKENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jaytDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkKTxDb3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy/ngrnlh7vpgInmi6nmmK/lkKbotK3kubDnsq7po5/vvIzlpoLmnpzkuI3otK3kubDliJnlr7zoh7Tkurrlj6Plh4/lsJHlkozlubjnpo/luqbpmY3kvY5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL+WHj+WwkeW6k+WtmFxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ3JhaW5TdG9jay09Q291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzLUNvdW50cnlEYXRhLmluc18uZ3JhaW5BZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9Ki9cblxuICAgIFxuICAgIC8qKuaUueWPmCDov5vjgIHlh7og55uu5qCH5Lq65pWwIEBpc291dDrmmK/lkKbmmK/lh7rln44gIEBjb3VudO+8muaUueWPmOebruagh+WAvCovXG4gICAgcHVibGljIHNldEluT3V0VGFyZ2V0KGlzT3V0LGNvdW50KSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKGlzT3V0KSB0aGlzLmV4aXRQZW9wbGUgKz0gY291bnQ7XG4gICAgICAgIGVsc2UgdGhpcy5lbnRlclBlb3BsZSArPSBjb3VudDtcbiAgICB9XG5cbiAgICAvKirmlLnlj5gg6L+b44CB5Ye6IOebruagh+S6uuaVsCBAaXNvdXQ65piv5ZCm5piv5Ye65Z+OICBAY291bnTvvJrmlLnlj5jlrp7pmYXlgLwqL1xuICAgIHB1YmxpYyBzZXRJbk91dFRydXRoKGlzT3V0LGNvdW50KSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKGlzT3V0KSB0aGlzLl9vdXRlclBlb3BsZSArPSBjb3VudDtcbiAgICAgICAgZWxzZSB0aGlzLl9pbm5lclBlb3BsZSArPSBjb3VudDtcbiAgICB9XG4gICAgXG4gICAgLyoq6YCa55+l5Lq65Y+j5Ye65Z+OIEB0eXBlIO+8miDov5vmiJB0dXJlICDlh7rln44gZmFsc2UqL1xuICAgIHB1YmxpYyBwZW9wbGVHb091dCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBhcnIgO1xuICAgICAgICBpZih0eXBlKSBhcnIgPSB0aGlzLmFycl9vdXRQZW9wbGU7XG4gICAgICAgICAgICBlbHNlIGFyciA9IHRoaXMuYXJyX2luUGVvcGxlO1xuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihhcnIubGVuZ3RoKnJhbmRvbSk7XG4gICAgICAgIGlmKGluZGV4PjApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCFhcnJbaW5kZXhdLmlzR28pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXJyW2luZGV4XS5wZW9wbGVHbyh0eXBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgdGhpcy5wZW9wbGVHb091dCh0eXBlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIumaj+acuuWHuumUmVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvKirlh7rln47pl6jnm7jlhbPmk43kvZwgKi9cbiAgICBwdWJsaWMgZ29PdXQodHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLl9vdXRlclBlb3BsZSsrOy8v5a6e6ZmF5Lq65pWw5Yqg5LiAXG4gICAgICAgIHRoaXMucG9wdWxhdGlvbi0tOy8v5oC75Lq65Y+jIC0tXG4gICAgICAgIGlmKHRoaXNbdHlwZV0pIHRoaXNbdHlwZV0tLTtcbiAgICB9XG59XG5cbi8qKuWkluWfjiAqL1xuZXhwb3J0IGNsYXNzIE91dENvdW50cnlEYXRhe1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zXyA6IE91dENvdW50cnlEYXRhID0gbmV3IE91dENvdW50cnlEYXRhKCk7XG4gICAgLyoqKioqKioqKioqKioq5Li75pWw5o2uKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoq5pyA5aSn5aSW5Z+O5a6557qz5pWw6YePICovXG4gICAgcHVibGljIG1heENvdW50IDogbnVtYmVyPTQwMDtcbiAgICAvKirlvZPliY3lpJbln47kurrlj6PmlbAgKi9cbiAgICBwdWJsaWMgb3V0Q291bnQ6bnVtYmVyPTA7XG4gICAgLyoq5Lq65rue55WZ5pe26Ze0ICovXG4gICAgcHVibGljIGxpbWl0VGltZTpudW1iZXI9NTA7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKirmma7pgJrkuroqL1xuICAgIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSAwLjc5NTtcbiAgICAvKirnp5HlrablrrYgU1NTKi9cbiAgICBwdWJsaWMgc2NpZW50aXN0IDogbnVtYmVyID0gMC4wMztcbiAgICAvKirmmI7mmJ8gU1MqL1xuICAgIHB1YmxpYyBzdGFyIDogbnVtYmVyID0gMC4wMTU7XG4gICAgLyoq5Zyf5YyqIC1TICovXG4gICAgcHVibGljIGJhbmRpdCA6IG51bWJlciA9IDAuMDY7XG4gICAgLyoq55uX6LS8IC1BICovXG4gICAgcHVibGljIHJvYmJlciA6IG51bWJlciA9IDAuMTtcbiAgICAvKirlj5jph4/lkI0gKi9cbiAgICBwdWJsaWMgYXJyX1Blb3BsZSA6IEFycmF5PHN0cmluZz4gPSBbXCJjb21tb25cIixcInNjaWVudGlzdFwiLFwic3RhclwiLFwiYmFuZGl0XCIsXCJyb2JiZXJcIl07XG4gICAgXG4gICAgLyoq6I635Y+W5Yy66Ze05pWw57uEIDAsMC43OTUsMC44MjUsMC44NCwwLjksMSovXG4gICAgcHVibGljIGdldFBlcmNlbnRBcmVhKCk6QXJyYXk8bnVtYmVyPlxuICAgIHtcbiAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXG4gICAgICAgbGV0IGFycl9QZW9wbGUgPSB0aGlzLmFycl9QZW9wbGU7XG4gICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgZm9yKGxldCBpID0gMDtpPGFycl9QZW9wbGUubGVuZ3RoO2krKylcbiAgICAgICB7XG4gICAgICAgICAgICBudW1iZXIgKz0gdGhpc1thcnJfUGVvcGxlW2ldXTtcbiAgICAgICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xuICAgICAgIH1cbiAgICAgICByZXR1cm4gYXJyUGVyY2VudDtcbiAgICB9XG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XG5cbi8qKlxuICog5raI5oGv5qGGIOmAmueUqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNc2dEaWFsb2cgZXh0ZW5kcyB1aS5EaWEuQ3VycmVudERpYWxvZ1VJe1xuICAgIC8qKuexu+WeiyAqL1xuICAgIHByaXZhdGUgdHlwZSA6IG51bWJlciA7XG4gICAgLyoq57yT5YqoICovXG4gICAgLy8gcHJpdmF0ZSBzaG93VHdlZW4gOiBMYXlhLlR3ZWVuO1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoq5Yid5aeL5YyWICovXG4gICAgcHVibGljIHNob3dNc2codHlwZTpudW1iZXIpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5idG5fY2xvc2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuY2xvc2VEaWFsb2cpOyAgICAgICAgXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2hhbmdlSW1nKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlVGl0bGUoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VXb3JkKCk7IFxuICAgICAgICB0aGlzLm1zZ0JvZHkueCA9ICg5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKS0xMTYzKS8yOyAgICAgICBcbiAgICAgICAgdGhpcy5tc2dCb2R5LnkgPSAtNTU3OyAgICAgICBcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLm1zZ0JvZHkse3k6MH0sMjAwLExheWEuRWFzZS5iYWNrT3V0KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5o2i5Zu+ICovXG4gICAgcHJpdmF0ZSBjaGFuZ2VJbWcoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5o2i5qCH6aKYICovXG4gICAgcHJpdmF0ZSBjaGFuZ2VUaXRsZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5paH5a2X6L295YWlICovXG4gICAgcHJpdmF0ZSBjaGFuZ2VXb3JkKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirlhbPpl60gKi9cbiAgICBwdWJsaWMgY2xvc2VEaWFsb2coKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9mZihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZURpYWxvZyk7ICAgICAgICAgICAgICAgIFxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eTotNTU3fSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQsTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLHRoaXMuY2xvc2VPdmVyKSk7ICAgICAgICBcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb3NlT3ZlcigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7ICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVyZmViL1Blb3BsZVwiO1xuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgQ291bnRyeURhdGEsIHsgT3V0Q291bnRyeURhdGEgfSBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IENvbW1vbiBmcm9tXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvQ29tbW9uXCJcbmltcG9ydCBSb2JiZXIgZnJvbVwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL1JvYmJlclwiXG5pbXBvcnQgU2NpZW50aXN0IGZyb20gXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvU2NpZW50aXN0XCI7XG5pbXBvcnQgU3RhciBmcm9tIFwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL1N0YXJcIjtcbmltcG9ydCBCYW5kaXQgZnJvbSBcIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9CYW5kaXRcIjtcbi8qKlxuICog5Lq6IOeuoeeQhlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVNYW5hZ2VyIHtcbiAgICAvKirop4blm74qL1xuICAgIHByaXZhdGUgdmlldzphbnk7IFxuICAgIC8qKuaoquWdkOaghyAqL1xuICAgIHByaXZhdGUgWDpudW1iZXI7XG4gICAgLyoq57q15Z2Q5qCHICovXG4gICAgcHJpdmF0ZSBZOm51bWJlcjtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWimeWGhVxuICAgIC8qKueUn+aIkOmXtOmalOiuoeaXtuWZqCAqL1xuICAgIHByaXZhdGUgY291bnRUaW1lIDogbnVtYmVyID0gMDtcbiAgICAvKirnlJ/kuqfml7bpl7Tpl7TpmpQgKi9cbiAgICBwcml2YXRlIGNvdW50VGltZV8gOiBudW1iZXIgPSA1MDA7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdHJ1Y3Rvcih2aWV3KVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3PXZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5byA5ZCv55Sf5oiQ5bel5Y6CXG4gICAgICog55Sf5oiQ5Lq6IFxuICAgICAqIOeUn+aIkOS6uueahOS9jee9rlxuICAgICAqIOeUn+S6p+S6uueahHR5cGUg77yaIOWfjumHjOS6ui/ln47lpJbkurog6YC76L6R5YiG5byAXG4gICAgICovXG4gICAgLyoq5byA5ZCv55Sf5oiQ5bel5Y6CICovXG4gICAgcHVibGljIG9wZW5QZW9wbGVGYWN0b3J5KCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmNyZWF0ZVBlb3BsZSgpO1xuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uiAqL1xuICAgIHB1YmxpYyBjcmVhdGVQZW9wbGUoKTp2b2lkXG4gICAge1xuICAgICAgICBsZXQgYXJyYXk6QXJyYXk8bnVtYmVyPj1PdXRDb3VudHJ5RGF0YS5pbnNfLmdldFBlcmNlbnRBcmVhKCk7XG4gICAgICAgIGxldCBwZW9wbGU7XG4gICAgICAgIC8qKueUn+aIkOS4jeWQjOS6uuenjeeahOWHoOeOhyAqL1xuICAgICAgICBsZXQgcmFuZG9tPU1hdGgucmFuZG9tKCk7XG4gICAgICAgIC8v5pmu6YCa5Lq6XG4gICAgICAgIGlmKHJhbmRvbT49MCYmcmFuZG9tPGFycmF5WzFdKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwiY29tbW9uXCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBDb21tb24odGhpcy52aWV3LEdhbWVDb25maWcuQ09NTU9OX01BTix0cnVlKTtcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v56eR5a2m5a62XG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj1hcnJheVsxXSYmcmFuZG9tPGFycmF5WzJdKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwic2NpZW50aXN0XCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBTY2llbnRpc3QodGhpcy52aWV3LEdhbWVDb25maWcuU0NJRU5USVNUX01BTix0cnVlKTtcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGVvcGxlLmNyZWF0ZVRlY2hub2xvZ3lUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/mmI7mmJ9cbiAgICAgICAgZWxzZSBpZihyYW5kb20+PWFycmF5WzJdJiZyYW5kb208YXJyYXlbM10pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJzdGFyXCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBTdGFyKHRoaXMudmlldyxHYW1lQ29uZmlnLlNUQVJfTUFOLHRydWUpO1xuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX291dFBlb3BsZS5wdXNoKHBlb3BsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZW9wbGUuY3JlYXRlU3RhclRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+ebl+i0vFxuICAgICAgICBlbHNlIGlmKHJhbmRvbT49YXJyYXlbM10mJnJhbmRvbTxhcnJheVs0XSlcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInJvYmJlclwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgUm9iYmVyKHRoaXMudmlldyxHYW1lQ29uZmlnLlJPQkJFUl9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBlb3BsZS5jdXRNb25leVRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICAvL+Wcn+WMqlxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJiYW5kaXRcIik7XG4gICAgICAgICAgICBpZighcGVvcGxlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IEJhbmRpdCh0aGlzLnZpZXcsR2FtZUNvbmZpZy5CQU5ESVRfTUFOLHRydWUpO1xuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYXJyX291dFBlb3BsZS5wdXNoKHBlb3BsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZW9wbGUuY3V0TW9uZXlUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcGVvcGxlLnZpc2libGU9dHJ1ZTtcbiAgICAgICAgcGVvcGxlLmlzT3V0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRQb3MoKTtcbiAgICAgICAgcGVvcGxlLnNldFBvcyh0aGlzLlgsdGhpcy5ZKTtcbiAgICAgICAgcGVvcGxlLm9wZW5CZWhhdmlvdXIoKTtcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSozO1xuICAgICAgICBpZihPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50PE91dENvdW50cnlEYXRhLmluc18ubWF4Q291bnQtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMuY3JlYXRlUGVvcGxlKTtcbiAgICAgICAgfVxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50Kys7XG4gICAgfVxuXG4gICAgLyoq55Sf5oiQ5Lq655qE5L2N572uICovXG4gICAgcHVibGljIGdldFBvcygpOmFueVxuICAgIHtcbiAgICAgICAgbGV0IHR5cGVOdW09TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMpO1xuICAgICAgICBzd2l0Y2godHlwZU51bSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIC8v5ZyoQei+ueeVjFxuICAgICAgICAgICAgICAgIHRoaXMuWD0wO1xuICAgICAgICAgICAgICAgIHRoaXMuWT1NYXRoLnJhbmRvbSgpKjM5MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvL+WcqELovrnnlYxcbiAgICAgICAgICAgICAgICB0aGlzLlg9TWF0aC5yYW5kb20oKSoyMDAwO1xuICAgICAgICAgICAgICAgIHRoaXMuWT0wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIC8v5ZyoQ+i+ueeVjFxuICAgICAgICAgICAgICAgIHRoaXMuWD0yMDAwO1xuICAgICAgICAgICAgICAgIHRoaXMuWT1NYXRoLnJhbmRvbSgpKjM5MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq55WM6ZmQ5qOA5rWLICoqKioqKioqKioqKioqKioqKioqKiovXG4gICAgXG4gICAgXG4gICAgcHVibGljIGNoZWNrUGVyY2VudChwZW9wbGUsdHlwZTpzdHJpbmcpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v5rWB5Yqo5q+U5L6L5qOA5rWLXG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18ucGVyY2VudDwxKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBlb3BsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWIm+W7uuWimeWGheS6uiAqL1xuICAgIHB1YmxpYyBjcmVhdGVQZW9wbGVfSW5uZXIoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgbGV0IHJhbmRvbVN0cmluZyA7XG4gICAgICAgbGV0IGFyclBlcmNlbnQgPSBbXTsvL+eUn+S6p+avlOS+i1xuICAgICAgIGxldCBhcnJfUGVvcGxlID0gQ291bnRyeURhdGEuaW5zXy5hcnJfUGVvcGxlO1xuICAgICAgIGxldCBudW1iZXIgPSAwO1xuICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xuICAgICAgIGZvcihsZXQgaSA9IDA7aTxhcnJfUGVvcGxlLmxlbmd0aDtpKyspXG4gICAgICAge1xuICAgICAgICAgICAgbnVtYmVyICs9IENvdW50cnlEYXRhLmluc18uZ2V0X1Byb2Zlc3Npb25QZXJjZW50KGFycl9QZW9wbGVbaV0pO1xuICAgICAgICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XG4gICAgICAgfVxuICAgICAgIGNvbnNvbGUubG9nKGFyclBlcmNlbnQpO1xuICAgICAgIExheWEudGltZXIubG9vcCgxLHRoaXMsdGhpcy5nZXRSYW5kb20sW2FyclBlcmNlbnRdKTtcbiAgICB9XG5cbiAgICAvKirnlJ/kuqfkurogKi9cbiAgICBwcml2YXRlIGNyZWF0ZV9Jbm5lcihyYW5kb21TdHJpbmcpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYocmFuZG9tU3RyaW5nID09IFwibm9uZVwiKSByZXR1cm47XG4gICAgICAgIGxldCBwZW9wbGUgPSBMYXlhLlBvb2wuZ2V0SXRlbShyYW5kb21TdHJpbmcpOyAgXG4gICAgICAgIGxldCBjb3VudHJ5RGF0YSA9IENvdW50cnlEYXRhLmluc187XG4gICAgICAgIC8v55Sf5Lqn5Lq656eNXG4gICAgICAgIHN3aXRjaChyYW5kb21TdHJpbmcpXG4gICAgICAgIHsgICAgLyoq5bey55Sf5oiQ55qE5Lq656eNICAwIOaZrumAmiAgIDHnp5HlrablrrYgIDLmmI7mmJ8gM+Wcn+WMqiA055uX6LS8Ki9cbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5DT01NT05fTUFOOiAgIFxuICAgICAgICAgICAgICAgIGlmKCFwZW9wbGUpIHBlb3BsZSA9IG5ldyBDb21tb24odGhpcy52aWV3LHJhbmRvbVN0cmluZyxmYWxzZSk7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVswXSsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlJPQkJFUl9NQU46Ly/nm5fotLxcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbNF0rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5CQU5ESVRfTUFOOi8v5Zyf5YyqXG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzNdKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuU1RBUl9NQU46Ly/mmI7mmJ9cbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbMl0rKztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOOi8v56eR5a2m5a62XG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5hbHJlYWR5Q3JlYXRlWzFdKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXBlb3BsZSkge2NvbnNvbGUubG9nKFwi5paw5bu65Lq65aSx6LSl77yBXCIpIDtyZXR1cm47fVxuICAgICAgICBwZW9wbGUuaXNPdXQgPSBmYWxzZTtcbiAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfaW5QZW9wbGUucHVzaChwZW9wbGUpOy8v5Yqg5YWl57u05oqk5pWw57uEXG4gICAgICAgIGlmKHBlb3BsZSA9PT0gdW5kZWZpbmVkIHx8IHBlb3BsZSA9PT0gbnVsbCkge2NvbnNvbGUubG9nKFwi5rKh5pyJ55Sf5oiQ5Lq656eN77yB56eN57G7OlwiICsgcmFuZG9tU3RyaW5nKTtyZXR1cm47fVxuICAgICAgICB0aGlzLmNyZWF0ZVBvcyhwZW9wbGUpO1xuICAgICAgICBwZW9wbGUuc3BlY2lhbERvKCk7XG4gICAgICAgIHBlb3BsZS5vcGVuQmVoYXZpb3VyKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKueUn+S6p+S9jee9riAqL1xuICAgIHByaXZhdGUgY3JlYXRlUG9zKHBlb3BsZSkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgaG91c2VOb2RlID0gKHRoaXMudmlldyBhcyBMYXlhLlNwcml0ZSkuZ2V0Q2hpbGRCeU5hbWUoJ2hvdXNlJyk7XG4gICAgICAgIGxldCBwZXJjZW50ID0gaG91c2VOb2RlLl9jaGlsZHJlbi5sZW5ndGgvMTAwO1xuICAgICAgICBsZXQgaG91c2UgO1xuICAgICAgICBmb3IobGV0IGk9MDtpPCBob3VzZU5vZGUuX2NoaWxkcmVuLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcGVyY2VudCoxMDApO1xuICAgICAgICAgICAgaG91c2UgPSBob3VzZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZV9cIitudW1iZXIpO1xuICAgICAgICAgICAgaWYoaG91c2UgIT09IHVuZGVmaW5lZCAmJiBob3VzZSAhPT0gbnVsbCkgIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlb3BsZS5zZXRQb3MoaG91c2UueCxob3VzZS55LGhvdXNlKTsgICBcbiAgICAgICAgICAgICAgICAvLyBwZW9wbGUucGVvcGxlSW50bygpOyBcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirojrflj5bpmo/mnLrkurrnp40gKi9cbiAgICBwcml2YXRlIGdldFJhbmRvbShhcnJQZXJjZW50KSA6IHN0cmluZ1xuICAgIHtcbiAgICAgICAgaWYodGhpcy5jb3VudFRpbWUgPD0gdGhpcy5jb3VudFRpbWVfKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmNvdW50VGltZSsrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRUaW1lXyA9IE1hdGgucmFuZG9tKCkqR2FtZUNvbmZpZy5QRVJTT05fQ1JFQVRFX1RJTUUqMTAwO1xuICAgICAgICBjb25zb2xlLmxvZyhcIueUn+aIkOmXtOmalDpcIiArIE1hdGguZmxvb3IodGhpcy5jb3VudFRpbWUvMTAwKSArIFwic1wiKTtcbiAgICAgICAgdGhpcy5jb3VudFRpbWUgPSAwO1xuXG4gICAgICAgIGxldCBudW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBsZXQgcGVyc29uID0gXCJcIjtcbiAgICAgICAgbGV0IGluZGV4ID0gdW5kZWZpbmVkO1xuICAgICAgICBmb3IobGV0IGk9MDtpPGFyclBlcmNlbnQubGVuZ3RoIDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKCFhcnJQZXJjZW50W2krMV0pIGJyZWFrO1xuICAgICAgICAgICAgaWYoYXJyUGVyY2VudFtpXSA8PSBudW1iZXIgJiYgbnVtYmVyIDwgYXJyUGVyY2VudFtpKzFdKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlcnNvbiA9IENvdW50cnlEYXRhLmluc18uYXJyX1Blb3BsZVtpXTtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7IFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKCFwZXJzb24pIHtjb25zb2xlLmxvZyhcIuS6uuenjemaj+acuuWksei0pe+8gVwiKTtyZXR1cm47fVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwZXJzb24pO1xuICAgICAgICAvL+WIpOaWreS6uuaYr+WQpui/mOiDveeUn+aIkFxuICAgICAgICBpZihpbmRleCA9PT0gdW5kZWZpbmVkKXtjb25zb2xlLmxvZyhcIuamgueOh+iuoeeul+WHuumUmVwiKTtyZXR1cm47fVxuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbaW5kZXhdID09IENvdW50cnlEYXRhLmluc19bcGVyc29uXSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5nZXRBbHJlYWRDcmVhdGUoKSA9PSBDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXRpb24pIHJldHVybjtcbiAgICAgICAgICAgIHBlcnNvbiA9IHRoaXMuZ2V0UmFuZG9tKGFyclBlcmNlbnQpOyAgICAgXG4gICAgICAgIH1cbiAgICAgICB0aGlzLmNyZWF0ZV9Jbm5lcihwZXJzb24pOy8v55Sf5Lqn5Lq656eNICAgXG4gICAgfVxuXG4gICAgLyrojrflj5blt7LnlJ/miJDkurrlj6PnmoTmlbDph48qL1xuICAgIHB1YmxpYyBnZXRBbHJlYWRDcmVhdGUoKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8Q291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlciArPUNvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVtpXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgfVxufSIsImltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xuXG4vKipcbiAqIFVJ566h55CG5ZmoXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTWFuYWdlcntcbiAgICAvKirmlbDmja7nrqHnkIblmaggKi9cbiAgICAvLyBwdWJsaWMgc3RhdGljIGRhdGFNYW5hZ2VyIDogRGF0YU1hbmFnZXI7XG4gICAgLyoqVUkgc3ByaXRlICovXG4gICAgcHJpdmF0ZSBVaVNwcml0ZSA6IExheWEuU3ByaXRlO1xuXG4gICAgLyoq6L295YWl5pWw5o2uICovXG4gICAgY29uc3RydWN0b3IodWk6TGF5YS5TcHJpdGUpe1xuICAgICAgICB0aGlzLlVpU3ByaXRlID0gdWk7XG4gICAgfVxuICAgIFxuICAgIFxufSIsIi8qKlxuICog5LqL5Lu25Y+R55Sf566h55CG5ZmoXG4gKiBcbiAqIFxuICog55Sf5oiQ5LqL5Lu244CBXG4gKiDlvbHlk43kurrlj6PmtYHliqhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ybGRFdmVudE1hbmFnZXIge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgLyoq5LqL5Lu26aKE5oql5YiwICovXG4gICAgXG5cbiAgICAvKirkuovku7blj5HnlJ/lmaggKi9cblxuICAgIFxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgQnV5RGlhbG9nIGZyb20gXCIuL0NvcmUvQnV5RGlhbG9nXCJcbmltcG9ydCBNc2dEaWFsb2cgZnJvbSBcIi4vQ29yZS9Nc2dEaWFsb2dcIlxuaW1wb3J0IE9wZW5HYW1lIGZyb20gXCIuL1NjcmlwdC9PcGVuR2FtZVwiXG5pbXBvcnQgR2FtZVdvcmxkIGZyb20gXCIuL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkXCJcbmltcG9ydCBPcGVuU3RvcnkgZnJvbSBcIi4vU2NyaXB0L09wZW5TdG9yeVwiXG5pbXBvcnQgQ2VudGVyIGZyb20gXCIuL1NjcmlwdC9DZW50ZXJcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9MTQ0MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTkwMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWRoZWlnaHRcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cIlN0YXJ0R2FtZS5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcbiAgICAgICAgcmVnKFwiQ29yZS9CdXlEaWFsb2cudHNcIixCdXlEaWFsb2cpO1xuICAgICAgICByZWcoXCJDb3JlL01zZ0RpYWxvZy50c1wiLE1zZ0RpYWxvZyk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9PcGVuR2FtZS50c1wiLE9wZW5HYW1lKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHNcIixHYW1lV29ybGQpO1xuICAgICAgICByZWcoXCJTY3JpcHQvT3BlblN0b3J5LnRzXCIsT3BlblN0b3J5KTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L0NlbnRlci50c1wiLENlbnRlcik7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xuY2xhc3MgTWFpbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxuXHRcdGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcblx0XHRlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xuXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcblxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcblx0fVxuXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XG5cdH1cblxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xuXHRcdEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcblx0fVxufVxuLy/mv4DmtLvlkK/liqjnsbtcbm5ldyBNYWluKCk7XG4iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcbmltcG9ydCBDb3VudHJ5RGF0YSwgeyBPdXRDb3VudHJ5RGF0YSB9IGZyb20gXCIuLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XG5pbXBvcnQgVG9vbCBmcm9tIFwiLi4vVG9vbC9Ub29sXCI7XG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcblxuLyoqXG4gKiBcbiAqIOS6uuenjeeItuexu1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGUge1xuICAgIC8qKuWcuuaZryovXG4gICAgcHJvdGVjdGVkIHZpZXcgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirnsr7ngbUgKi9cbiAgICBwdWJsaWMgc3AgOiBMYXlhLlNwcml0ZTtcbiAgICAvKirmqKrlnZDmoIfnp7vliqjpgJ/luqYgKi9cbiAgICBwcml2YXRlIGRpclg6bnVtYmVyO1xuICAgIC8qKue6teWdkOagh+enu+WKqOmAn+W6piAqL1xuICAgIHByaXZhdGUgZGlyWTpudW1iZXI7XG4gICAgXG4gICAgLyoqKioqKioqKioqKioqKioqKirlopnlhoUgKioqKioqKioqKioqL1xuICAgIC8qKuWimeWGheS6uui/mOaYr+WimeWkluS6uiAqL1xuICAgIHB1YmxpYyBpc091dCA6IGJvb2xlYW47XG4gICAgLyoq5Lq65bGe5oCnICovXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xuICAgIC8qKuS6uueahOacneWQkSAqL1xuICAgIHB1YmxpYyB0b3dhcmQgOiBhbnk7XG4gICAgLyoq6Z2i5YmN55qENeS4quajgOa1i+eCuSAqL1xuICAgIHB1YmxpYyB0b3dhcmRQb3MgOiBBcnJheTxhbnk+O1xuICAgIC8qKuS6uueahOenu+WKqOebruagh+eCuSAqL1xuICAgIHB1YmxpYyB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGU7XG4gICAgLyoq5Ye655Sf54K5ICovXG4gICAgcHVibGljIGJvcm5Ob2RlIDogTGF5YS5TcHJpdGU7XG4gICAgLyoq5piv5ZCm6KKr5Y+s5ZSkICovXG4gICAgcHVibGljIGlzR28gOiBudW1iZXI7XG4gICAgLyoq6YCS5b2S5YGc5q2i5Y+Y6YePICovXG4gICAgcHJpdmF0ZSBzdG9wRGkgOiBudW1iZXI7XG4gICAgLyoq5Y+C6ICD6YCf5bqmICovXG4gICAgcHJpdmF0ZSBzcGVlZCA6IG51bWJlcjtcblxuXG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5pc091dCA9IGlzT3V0O1xuICAgICAgICB0aGlzLnR5cGU9dHlwZTtcbiAgICAgICAgdGhpcy5pbml0KHR5cGUpO1xuICAgIH1cblxuICAgIC8qKuWIneWni+WMliAqL1xuICAgIHByaXZhdGUgaW5pdCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v5pWw5o2u5Yid5aeL5YyWXG4gICAgICAgIHRoaXMuc2V0RGF0YUluaXQoKTtcbiAgICAgICAgLy/liJvlu7pcbiAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUodHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5pWw5o2u5Yid5aeL5YyWICovXG4gICAgcHJpdmF0ZSBzZXREYXRhSW5pdCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IENvdW50cnlEYXRhLmluc18uZ2V0TW92ZVNwZWVkKCk7XG4gICAgICAgIHRoaXMudG93YXJkID0ge1xuICAgICAgICAgICAgeDoxMDAwLFxuICAgICAgICAgICAgeTowLFxuICAgICAgICAgICAgc3BlZWQ6dGhpcy5zcGVlZCxyb3RhdGlvbjp1bmRlZmluZWQsXG4gICAgICAgICAgICB0YXJnZXRSb3RhdGlvbjp1bmRlZmluZWQsXG4gICAgICAgICAgICByb3RhdGlvbkNoYW5nZSA6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50b3dhcmRQb3MgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5zdG9wRGkgPSAwO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKirlvIDlp4vooYzliqggKi9cbiAgICBwdWJsaWMgb3BlbkJlaGF2aW91cigpOnZvaWRcbiAgICB7XG4gICAgICAgIC8v6L+Q6KGM5LqG6YC76L6RXG4gICAgICAgIGlmKHRoaXMuaXNPdXQpIFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBlb3BsZV9Qb3NPdXQoKTtcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKE91dENvdW50cnlEYXRhLmluc18ubGltaXRUaW1lKjYwLHRoaXMsdGhpcy5saW1pdFRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zSW5uZXIoKTtcbiAgICAgICAgICAgIExheWEudGltZXIubG9vcCgxNix0aGlzLHRoaXMucGVvcGxlX1Bvc0lubmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uiAqL1xuICAgIHByaXZhdGUgY3JlYXRlUGVvcGxlKHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgIHRoaXMuY3JlYXRlU3AodHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5Yib5bu6U3ByaXRlICovXG4gICAgcHJpdmF0ZSBjcmVhdGVTcCh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBpbWdVcmwgPSBcIm1hcC9cIit0eXBlK1wiLnBuZ1wiO1xuICAgICAgICBpZighdGhpcy5zcClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zcCA9IG5ldyBMYXlhLlNwcml0ZSgpO1xuICAgICAgICAgICAgdGhpcy52aWV3LmFkZENoaWxkKHRoaXMuc3ApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3AubG9hZEltYWdlKGltZ1VybCk7XG4gICAgICAgIHRoaXMuc3Auc2l6ZSgxMiwxMik7XG4gICAgICAgIHRoaXMuc3AucGl2b3QodGhpcy5zcC53aWR0aC8yLHRoaXMuc3AuaGVpZ2h0LzIpOyAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq6K6+572u5Yid5aeL5L2N572uICovXG4gICAgcHVibGljIHNldFBvcyh4LHksc3A6TGF5YS5TcHJpdGUpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3AueCA9IHg7XG4gICAgICAgIHRoaXMuc3AueSA9IHk7XG4gICAgICAgIHRoaXMuYm9ybk5vZGUgPSBzcDtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5aKZ5aSW5Lq66KGM5Yqo6YC76L6RKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwcml2YXRlIHBlb3BsZV9Qb3NPdXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pa55ZCR77yM5pa55ZCR55SoKC0xfjEp6KGo56S6XG4gICAgICAgIGlmKHRoaXMuc3AueDw9OTAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5zcC54Pj0xMTAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRpclg9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB0aGlzLmRpclk9TWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgICAgfVxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtO+8jOWcqOatpOaXtumXtOWGheenu+WKqCzpmo/mnLrml7bpl7TlnKgoMiw4KeS4remAieaLqVxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjYrMjtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMuY2xvc2VNb3ZlVGltZXIpO1xuICAgICAgICAvL+W8gOWQr+enu+WKqFxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xuICAgIH1cbiAgICBcbiAgICAvKirljZXkvY3luKfnp7vliqgqL1xuICAgIHByaXZhdGUgbW92ZURpc3RhbmNlKCk6dm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcC54Kz10aGlzLmRpclg7XG4gICAgICAgIHRoaXMuc3AueSs9dGhpcy5kaXJZO1xuICAgIH1cblxuICAgIC8qKuWFs+mXreenu+WKqOWumuaXtuWZqO+8jOW8gOWQr+WOn+WcsOS8keaBryovXG4gICAgcHJpdmF0ZSBjbG9zZU1vdmVUaW1lcigpOnZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIC8v5LyR5oGv5pe26Ze057uT5p2f5ZCO57un57ut56e75YqoXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNisyO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5wZW9wbGVfUG9zT3V0KTtcbiAgICB9XG4gICAgXG4gICAgLyoq5rue55WZ5pe26Ze077yM6Iul6LaF6L+H5pe26Ze077yM5bCx56a75byA5aSW5Z+OICovXG4gICAgcHJpdmF0ZSBsaW1pdFRpbWUoKTp2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICBpZih0aGlzLnNwLng8PTEwMDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLmNoZWNrTGltaXRfT3V0KTtcbiAgICB9XG5cbiAgICBcblxuICAgIC8qKueisOaSnuajgOa1iyAqL1xuICAgIHByaXZhdGUgY2hlY2tMaW1pdF9PdXQoKTp2b2lkXG4gICAge1xuICAgICAgICAvL+i+ueeVjOajgOa1i1xuICAgICAgICBpZih0aGlzLnNwLng8LTV8fHRoaXMuc3AueD4yMDA1fHx0aGlzLnNwLnk8LTUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdG9yeVBlb3BsZSgpO1xuICAgICAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudC0tO1xuICAgICAgICAgICAgaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSozO1xuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNyZWF0ZVBlb3BsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL+aKpOWfjuays+ajgOa1i1xuICAgICAgICBpZih0aGlzLnNwLnk+PTM5MClcbiAgICAgICAge1xuICAgICAgICAgICAgLy/ph43mlrDnu5nkuIDkuKrkvY3np7tcbiAgICAgICAgICAgICAgICB0aGlzLmRpclk9LU1hdGgucmFuZG9tKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL+WfjumXqOWMuuWfn+ajgOa1i1xuICAgICAgICBpZih0aGlzLnNwLng+OTMyJiZ0aGlzLnNwLng8MTA2OCYmdGhpcy5zcC55PjM1MCYmdGhpcy5zcC55PDM5MClcbiAgICAgICAge1xuICAgICAgICAgICAgLy/ln47pl6jmmK/lkKbmiZPlvIBcbiAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUoKTtcbiAgICAgICAgICAgICAgICAvL+WfjuWkluS6uuWPoy0xXG4gICAgICAgICAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudC0tO1xuICAgICAgICAgICAgICAgIC8v5Zu95a625Lq65Y+jKzFcbiAgICAgICAgICAgICAgICAvL0NvdW50cnlEYXRhLmluc18uY2FsX01haW5EYXRhKEdhbWVDb25maWcuTUFJTl9QT1BVTEFUSU9OLDEpO1xuICAgICAgICAgICAgICAgIGlmKE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQ8T3V0Q291bnRyeURhdGEuaW5zXy5tYXhDb3VudC0xKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSozO1xuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwLHRoaXMsdGhpcy5jcmVhdGVQZW9wbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5aKZ5YaF5Lq66KGM5Yqo6YC76L6RKi9cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirlopnlhoXkurrooYzliqjpgLvovpEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXG4gICAge1xuXG4gICAgICAgIC8vIHRoaXMudG93ZWRUb01vdmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VHJhZ2V0KHRhcmdldDpMYXlhLlNwcml0ZSkgOiB2b2lkXG4gICAge1xuICAgICAgICAvLyB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXQ7XG4gICAgICAgIC8v5rWL6K+VXG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZSA9IHRhcmdldDtcbiAgICAgICAgLy8gdGhpcy50b3dhcmQueCA9IHRhcmdldC54O1xuICAgICAgICAvLyB0aGlzLnRvd2FyZC55ID0gdGFyZ2V0Lnk7XG4gICAgfVxuXG4gICAgLyoqdG93ZXJk6L2s5YyW5oiQ5L2N56e7ICovXG4gICAgcHJvdGVjdGVkIHRvd2VkVG9Nb3ZlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZighdGhpcy50b3dhcmQucm90YXRpb24pIHRoaXMudG93YXJkLnJvdGF0aW9uID0gVG9vbC5yb3RhdGVSb3BlUG9pbnRfMih0aGlzLnNwLngsdGhpcy5zcC55LHRoaXMudGFyZ2V0Tm9kZS54LHRoaXMudGFyZ2V0Tm9kZS55KTs7XG4gICAgICAgIHRoaXMucGVvcGxlVG93ZXJkKCk7Ly/orqnnm67moIfmnJ3lkJHorqHnrpfmlbBcbiAgICB9XG5cbiAgICAvKirmnJ3lkJEgIHRvd2VyZOenu+WKqCAqL1xuICAgIHByaXZhdGUgcG9zTW92ZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5zcC54ICs9IHRoaXMudG93YXJkLnNwZWVkKlRvb2wucm90YXRpb25TZXQodGhpcy50b3dhcmQucm90YXRpb24sXCJzaW5cIik7XG4gICAgICAgIHRoaXMuc3AueSArPSB0aGlzLnRvd2FyZC5zcGVlZCpUb29sLnJvdGF0aW9uU2V0KHRoaXMudG93YXJkLnJvdGF0aW9uLFwiY29zXCIpO1xuICAgICAgICB0aGlzLnNwLnJvdGF0aW9uID0gdGhpcy50b3dhcmQucm90YXRpb247XG4gICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMudGFyZ2V0Tm9kZSx0aGlzLnNwKSkge1xuICAgICAgICAgICAgaWYodGhpcy50YXJnZXROb2RlLm5hbWUgPT09IFwic3BfZG9vclwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uZ29PdXQodGhpcy50eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGVzdG9yeVBlb3BsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc3AueCA8IDAgfHwgdGhpcy5zcC55ID4gOTAwIHx8IHRoaXMuc3AueCA+IDIwMDApIHt0aGlzLmRlc3RvcnlQZW9wbGUoKTt9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3Aucm90YXRpb24pO1xuICAgIH1cbiAgICBcbiAgICAvKirkurrpnaLlkJEgKi9cbiAgICBwcm90ZWN0ZWQgcGVvcGxlVG93ZXJkKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmdldFRvd2VyZFBvcygpOy8v6I635b6X5LqU5Liq54K577yM5qC55o2u55uu5qCH5Z2Q5qCH6K6h566XXG4gICAgICAgIHRoaXMudGVzdFRvd2VyZCgpOy8v5qOA5rWL5piv5ZCm56ym5ZCI6KaB5rGCIOS4jeespuWQiCArIC0gNVxuICAgIH1cblxuICAgIC8qKuajgOa1i+ihjOi1sOaWueWQkSAqL1xuICAgIHByb3RlY3RlZCB0ZXN0VG93ZXJkKCkgOiBib29sZWFuXG4gICAge1xuICAgICAgICBsZXQgcG93ZXIgPSB0aGlzLnRlc3RDb2xpZGVyKCk7Ly8gLTEgMCAxIDIgMyA0IDVcbiAgICAgICAgaWYocG93ZXIgPiAwKVxuICAgICAgICB7Ly/mkp7liLDkuobpnIDopoHovazmlrnlkJFcbiAgICAgICAgICAgIHRoaXMudG93YXJkLnJvdGF0aW9uQ2hhbmdlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDdHIocG93ZXIpO1xuICAgICAgICAgICAgdGhpcy5qdWRnZUxlZnRSaWdodCgpOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnBvc01vdmUoKTsvL+enu+WKqFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmluZFRhcmdldCgpO1xuICAgICAgICB0aGlzLnRvd2FyZC5zcGVlZCA9IHRoaXMuc3BlZWQ7ICAgICAgXG4gICAgICAgIHRoaXMucG9zTW92ZSgpOy8v56e75YqoICBcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoq6YCf5bqm5o6n5Yi2ICovXG4gICAgcHJpdmF0ZSBzcGVlZEN0cihwb3dlcikgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnRvd2FyZC5zcGVlZCA9IHRoaXMuc3BlZWQqKChwb3dlcisxKS8odGhpcy50b3dhcmRQb3MubGVuZ3RoKzIpKTsgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3BlZWQgOjpcIiArIHRoaXMudG93YXJkLnNwZWVkKTtcbiAgICB9XG5cbiAgICAvKirliKTmlq3mlrnlkJEgKi9cbiAgICBwcm90ZWN0ZWQganVkZ2VMZWZ0UmlnaHQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3RvcERpKys7XG4gICAgICAgIGlmKHRoaXMuc3RvcERpPjM2KSB7dGhpcy5zdG9wRGkgPSAwO3JldHVybjt9XG4gICAgICAgIHRoaXMudG93YXJkLnJvdGF0aW9uQ2hhbmdlICs9IEdhbWVDb25maWcuVEVTVF9QT0lOVF9STztcbiAgICAgICAgbGV0IHJvMSA9IHRoaXMudG93YXJkLnJvdGF0aW9uIC0gdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2U7XG4gICAgICAgIGxldCBybzIgPSB0aGlzLnRvd2FyZC5yb3RhdGlvbiArIHRoaXMudG93YXJkLnJvdGF0aW9uQ2hhbmdlO1xuICAgICAgICB0aGlzLmdldFRvd2VyZFBvcyhybzEpO1xuICAgICAgICBsZXQgbnVtUm8xID0gdGhpcy50ZXN0Q29saWRlcigpO1xuICAgICAgICB0aGlzLmdldFRvd2VyZFBvcyhybzIpO1xuICAgICAgICBsZXQgbnVtUm8yID0gdGhpcy50ZXN0Q29saWRlcigpO1xuICAgICAgICBpZihudW1SbzEgPT0gLTEpIHt0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvMTsgcmV0dXJuO31cbiAgICAgICAgaWYobnVtUm8yID09IC0xKSB7dGhpcy50b3dhcmQucm90YXRpb24gPSBybzI7IHJldHVybjt9XG4gICAgICAgIHRoaXMuanVkZ2VMZWZ0UmlnaHQoKTtcbiAgICB9XG5cbiAgICAvKipmaW5kVGFyZ2V05a+75om+55uu5qCHICovXG4gICAgcHJpdmF0ZSBmaW5kVGFyZ2V0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgQ2EgPSB0aGlzLnRvd2FyZC5yb3RhdGlvbiAtIHRoaXMudG93YXJkLnRhcmdldFJvdGF0aW9uO1xuICAgICAgICBpZihDYSA+IDApIHRoaXMudG93YXJkLnJvdGF0aW9uIC09IDU7XG4gICAgICAgICAgICBlbHNlIGlmKCBDYSA8IDAgKSB0aGlzLnRvd2FyZC5yb3RhdGlvbiArPTU7XG4gICAgICAgIGlmKCBNYXRoLmFicyhDYSkgPCA1KSB0aGlzLnRvd2FyZC5yb3RhdGlvbiArPSBDYTtcbiAgICB9ICAgXG5cbiAgICAvKirmo4DmtYvmmK/lkKbnorDmkp4g5pKe5Yiw5LqG6L+U5ZuedHVyZSAtMeWPr+S7pei1sCAw5Lul5LiK6KGo56S656Kw5pKe5Yiw5ZOq5Liq54K5Ki9cbiAgICBwcm90ZWN0ZWQgdGVzdENvbGlkZXIoKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgbGV0IG51bSA9IC0xO1xuICAgICAgICBsZXQgYXJlYSA6IEFycmF5PExheWEuU3ByaXRlPj0gRGF0YU1hbmFnZXIuaW5zXy5hcnJfUmlnaHRBcmVhO1xuICAgICAgICBpZih0aGlzLnNwLng8OTgxKSBhcmVhID0gRGF0YU1hbmFnZXIuaW5zXy5hcnJfTGVmdEFyZWE7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJlYS5sZW5ndGg7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihUb29sLmJsb2NrVGVzdCh0aGlzLmJvcm5Ob2RlLHRoaXMuc3ApKSB7cmV0dXJuIC0xO31cbiAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KGFyZWFbaV0sdGhpcy5zcCkpe3JldHVybiAwO30vL+WmguaenOW3sue7j+aSnuS4iuS6huOAgiAgICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaCA9IDA7aDx0aGlzLnRvd2FyZFBvcy5sZW5ndGg7aCsrKVxuICAgICAgICAgICAgey8v5LqU5Liq54K55qOA5rWLXG4gICAgICAgICAgICAgICAgaWYoVG9vbC5ibG9ja1Rlc3QodGhpcy50YXJnZXROb2RlLHRoaXMudG93YXJkUG9zW2hdKSl7cmV0dXJuLTE7fVxuICAgICAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KGFyZWFbaV0sdGhpcy50b3dhcmRQb3NbaF0pKVxuICAgICAgICAgICAgICAgIHsvL+emu+S6uuacgOi/keeahOeCuVxuICAgICAgICAgICAgICAgICAgICBudW0gPSBoKzE7Ly8x77yMMu+8jDPvvIw077yMNVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtO1xuICAgIH1cblxuICAgIC8qKuS6uumdouWQkeeahOS6lOS4quajgOa1i+eCuSAqL1xuICAgIHByb3RlY3RlZCBnZXRUb3dlcmRQb3Mocm90YXRpb25UZXN0PykgOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgcm90YXRpb24gPSB0aGlzLnRvd2FyZC5yb3RhdGlvbjsvL+S9v+eUqOW9k+WJjemdouWQkVxuICAgICAgICBpZihyb3RhdGlvblRlc3QpIHJvdGF0aW9uID0gcm90YXRpb25UZXN0O1xuICAgICAgICBlbHNlIHRoaXMua2VlcFRvd2VyZERhdGEoKTsvL+S/neWtmCDnjrDlnKjkuLrmraLliLDnm67moIfngrnnmoTop5LluqZcbiAgICAgICAgaWYocm90YXRpb24gPT09IHVuZGVmaW5lZCkgXG4gICAgICAgIHsvL+WmguaenOinkuW6puaYr3VuZGVmXG4gICAgICAgICAgICByb3RhdGlvbiA9IHRoaXMudG93YXJkLnRhcmdldFJvdGF0aW9uLy/nm67moIfop5LluqbvvIzliJ3lp4vop5LluqYgICBcbiAgICAgICAgICAgIHRoaXMudG93YXJkLnJvdGF0aW9uID0gcm90YXRpb247XG4gICAgICAgIH1cblxuICAgICAgICAvL+S9jeenu+mcgOimgeeahOWPmOmHj1xuICAgICAgICBsZXQgY29zIDogbnVtYmVyID0gVG9vbC5yb3RhdGlvblNldChyb3RhdGlvbixcImNvc1wiKTtcbiAgICAgICAgbGV0IHNpbiA6IG51bWJlciA9IFRvb2wucm90YXRpb25TZXQocm90YXRpb24sXCJzaW5cIik7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS14OjpcIiArIHRoaXMuc3AueCArIFwieTo6XCIgKyB0aGlzLnNwLnkpO1xuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVDb25maWcuVEVTVF9QT0lOVF9DT1VOVDtpKyspLy/orrDlvZXkupTkuKpcbiAgICAgICAgeyBcbiAgICAgICAgICAgIGlmKCF0aGlzLnRvd2FyZFBvc1tpXSkgdGhpcy50b3dhcmRQb3NbaV0gPSB7fTsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy50b3dhcmRQb3NbaV0ueCA9IHRoaXMuc3AueCArIEdhbWVDb25maWcuVEVTVF9QT0lOVF9ESUMqc2luKihpKzEpO1xuICAgICAgICAgICAgdGhpcy50b3dhcmRQb3NbaV0ueSA9IHRoaXMuc3AueSArIEdhbWVDb25maWcuVEVTVF9QT0lOVF9ESUMqY29zKihpKzEpOyBcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRvd2FyZFBvcyk7XG4gICAgfVxuXG4gICAgLyoq5L+d5a2YIHRvd2Vy5L+h5oGvICovXG4gICAgcHJvdGVjdGVkIGtlZXBUb3dlcmREYXRhKCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+WtmOWCqOeOsOWcqOeCueWIsOebruagh+inkuW6plxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgdGhpcy50b3dhcmQudGFyZ2V0Um90YXRpb24gPSBUb29sLnJvdGF0ZVJvcGVQb2ludF8yKHRoaXMuc3AueCx0aGlzLnNwLnksdGhpcy50YXJnZXROb2RlLngsdGhpcy50YXJnZXROb2RlLnkpO1xuICAgIH1cblxuICAgIC8qKuWcqOi/kOihjOenu+WKqOmAu+i+keS5i+WJjSDnmoTnibnmrormk43kvZwgKi9cbiAgICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBcbiAgICB9XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8qKipcbiAgICAgKiDov5vnqIsgLyDlh7rln47pgLvovpEgXG4gICAgICogQHR5cGUgdHJ1Zei/m+WfjiAgZmFsc2Xlh7rln45cbiAgICAqL1xuICAgIHB1YmxpYyBwZW9wbGVHbyh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgICAgICBpZih0eXBlKSB7XG4gICAgICAgICAgICAgICAgLy/ov5vln47mlrnms5VcbiAgICAgICAgICAgICAgICB0aGlzLm91dFBlb3BsZV9Ub0Rvb3IoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8v5Ye65Z+O5pa55rOVXG4gICAgICAgICAgICAgICAgdGhpcy5wZW9wbGVPdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirln47lpJblvLrliLbov5vpl6ggKi9cbiAgICBwcml2YXRlIG91dFBlb3BsZV9Ub0Rvb3IoKTp2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xuICAgICAgICBsZXQgZGlyWD0xMDAwLXRoaXMuc3AueDtcbiAgICAgICAgbGV0IGRpclk9NDEwLXRoaXMuc3AueTtcbiAgICAgICAgbGV0IGRpcz1NYXRoLnNxcnQoTWF0aC5wb3coMTAwMC10aGlzLnNwLngsMikrTWF0aC5wb3coNDEwLXRoaXMuc3AueSwyKSk7XG4gICAgICAgIHRoaXMuZGlyWD1kaXJYL2RpcztcbiAgICAgICAgdGhpcy5kaXJZPWRpclkvZGlzO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XG4gICAgfVxuXG4gICAgLyoq6Zeo5by65Yi25Ye65Z+O5aSWICovXG4gICAgcHJpdmF0ZSBkb29yUGVvcGxlX1RvT3V0KCk6dm9pZFxuICAgIHtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcbiAgICAgICAgbGV0IHg9TWF0aC5yYW5kb20oKSoxMzYrOTMyO1xuICAgICAgICBsZXQgeT0zNTA7XG4gICAgICAgIHRoaXMuc2V0UG9zKHgseSx0aGlzLnNwKTtcbiAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCkqMi0xO1xuICAgICAgICB0aGlzLmRpclk9LU1hdGgucmFuZG9tKCkqMC43LTAuMjtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMuY2hlY2tMaW1pdF9PdXQpO1xuICAgIH1cblxuICAgLyoq5Ye65Z+O6YC76L6RICovXG4gICBwcm90ZWN0ZWQgcGVvcGxlT3V0KCkgOiB2b2lkXG4gICB7XG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcInNwX2Rvb3JcIikgYXMgTGF5YS5TcHJpdGUpOy8v6K6+572u55uu5qCH5piv6ZeoXG4gICB9XG5cbiAgIC8qKui/m+WfjuaWueazlSDku47mraPpl6jliLDmn5DkuIDkuKrkvY/lroUqL1xuICAgcHJvdGVjdGVkIHBlb3BsZUludG8oKSA6IHZvaWRcbiAgIHtcbiAgICAgICAgbGV0IGJvcm5Ob2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwic3BfZG9vclwiKSBhcyBMYXlhLlNwcml0ZTtcbiAgICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xuICAgICAgICB0aGlzLnNldFBvcyhib3JuTm9kZS54LGJvcm5Ob2RlLnkgKyA0MCxib3JuTm9kZSk7XG4gICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xuICAgfVxuXG4gICAvKirku45ob3VzZeS4reiOt+WPliDkuIDkuKrpmo/mnLrnmoTngrkgKi9cbiAgIHByb3RlY3RlZCBnZXRUYXJnZVBvcyhob3VzZU5vZGUpIDogTGF5YS5TcHJpdGVcbiAgIHtcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoKChob3VzZU5vZGUgYXMgTGF5YS5TcHJpdGUpLl9jaGlsZHJlbi5sZW5ndGgtMSkqcmFuZG9tKTtcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgOkxheWEuU3ByaXRlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiAtLS0tLS0tLS0gZ2V0VGFyZ2V0IFwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbmRleCA6OlwiICsgaW5kZXgpO1xuICAgICAgICBpZihpbmRleCA+PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXROb2RlID0gaG91c2VOb2RlLmdldENoaWxkQnlOYW1lKFwiaG91c2VfXCIraW5kZXgpO1xuICAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCLpmo/mnLrmlbDlj5bplJlcIik7XG4gICAgICAgIC8vIHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcbiAgIH1cblxuICAgIC8qKuS6uua2iOWksSAqL1xuICAgIHByb3RlY3RlZCBkZXN0b3J5UGVvcGxlKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLlBvb2wucmVjb3Zlcih0aGlzLnR5cGUsdGhpcyk7ICAgICAgICBcbiAgICAgICAgdGhpcy5zcC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIExheWEuUG9vbC5yZWNvdmVyKHRoaXMudHlwZSx0aGlzKTtcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcbiAgICAgICAgLy9cbiAgICAgICAgaWYoIXRoaXMuaXNPdXQpIHRoaXMuZGVzdG9yeUlubmVyKCk7XG4gICAgfVxuXG4gICAgLyoq5aKZ5YaF5Lq65Yig6ZmkIOeJueauiuWkhOeQhiAqL1xuICAgIHByb3RlY3RlZCBkZXN0b3J5SW5uZXIoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIC8v6K6h5pe25Zmo5riF5qWaXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLnBlb3BsZV9Qb3NJbm5lcik7XG4gICAgICAgIHN3aXRjaCh0aGlzLnR5cGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5DT01NT05fTUFOOlxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVswXT4wKVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVswXS0tO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5CQU5ESVRfTUFOOlxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVszXT4wKVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVszXS0tO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5ST0JCRVJfTUFOOlxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVs0XT4wKVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVs0XS0tO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOOlxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVsxXT4wKVxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVsxXS0tO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TVEFSX01BTjpcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMl0+MClcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMl0tLTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlKTtcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbmRpdCBleHRlbmRzIFBlb3BsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirmiqLliqvnmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3V0TW9uZXlUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze06L+b6KGM5YG355uXKDUtOCnliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjUrMztcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzlgbfnm5dcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5DdXRNb25leSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgLy/ml7bpl7TlkI7miqLliqtcclxuICAgIHByaXZhdGUgQ3V0TW9uZXkoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJhbmRvbT1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGlmKHJhbmRvbTwwLjUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+aKouWKq+aIkOWKn1xyXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLm1vbmV5PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCsxMCk7XHJcbiAgICAgICAgICAgIHRoaXMubG93U3VwcG9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtOi/m+ihjOWBt+eblyg1LTgp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo1KzM7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5YG355uXXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuQ3V0TW9uZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumZjeS9juW5uOemj+W6piAqL1xyXG4gICAgcHJpdmF0ZSBsb3dTdXBwb3J0KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIENvdW50cnlEYXRhLmluc18ucG9wdWxhclN1cHBvcnQtPTAuMTtcclxuICAgIH1cclxuXHJcbiAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgfVxyXG5cclxuICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XHJcbiAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XG5pbXBvcnQgVG9vbCBmcm9tIFwiLi4vLi4vVG9vbC9Ub29sXCI7XG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi8uLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24gZXh0ZW5kcyBQZW9wbGV7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTsgICAgICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgLyoq5aKZ5YaF6YC76L6RICovXG4gICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xuICAgICAgICB0aGlzLnRvd2VkVG9Nb3ZlKCk7XG4gICAgfVxuXG4gICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXG4gICAgcHJvdGVjdGVkIHNwZWNpYWxEbygpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy/ojrflj5bljaDmr5TmlbDnu4RcbiAgICAgICAgbGV0IGFycl9wZXJjZW50ID0gVG9vbC5nZXRQZXJjZW50QXJlYShDb3VudHJ5RGF0YS5pbnNfLmFycl9wZXJzb25QZXJjZW50TmFtZSk7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyX3BlcmNlbnQubGVuZ3RoO2krKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoIWFycl9wZXJjZW50W2krMV0pIGJyZWFrO1xuICAgICAgICAgICAgaWYoYXJyX3BlcmNlbnRbaV0gPCByYW5kb20gJiYgcmFuZG9tIDw9IGFycl9wZXJjZW50W2krMV0pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpIHtjb25zb2xlLmxvZyhcIuamgueOh+iuoeeul+WHuumUmVwiKTtyZXR1cm47fVxuICAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XG4gICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XG4gICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xuICAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoKGluZGV4KVxuICAgICAgICB7ICAgIC8qKjAt5Yy755SfIDEt6K2m5a+fIDIt5ZWG5Lq6IC0z5ri45omL5aW96ZeyIC005Yac5rCRKi9cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcImhvc3BpdGFsXCIpIGFzIExheWEuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTsgICAgICAgICBcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZU91dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwiZmFybVwiKSBhcyBMYXlhLlNwcml0ZSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9iYmVyIGV4dGVuZHMgUGVvcGxle1xyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlgbflj5botKLmlL/nmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3V0TW9uZXlUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze06L+b6KGM5YG355uXKDMtNinliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjMrMztcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzlgbfnm5dcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5DdXRNb25leSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ml7bpl7TlkI7lgbflj5ZcclxuICAgIHByaXZhdGUgQ3V0TW9uZXkoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJhbmRvbT1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGlmKHJhbmRvbTwwLjUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+WBt+ebl+aIkOWKn1xyXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLm1vbmV5LT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xyXG4gICAgICAgICAgICB0aGlzLmxvd1N1cHBvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7Tov5vooYzlgbfnm5coMy02KeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMyszO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOWBt+ebl1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLkN1dE1vbmV5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpmY3kvY7lubjnpo/luqYgKi9cclxuICAgIHByaXZhdGUgbG93U3VwcG9ydCgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLnBvcHVsYXJTdXBwb3J0LT0wLjA1O1xyXG4gICAgfVxyXG4gICAgLyoq5aKZ5YaFICovXHJcbiAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgfVxyXG5cclxuICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XHJcbiAgIH1cclxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5pbXBvcnQgVG9vbCBmcm9tIFwiLi4vLi4vVG9vbC9Ub29sXCI7XHJcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NpZW50aXN0IGV4dGVuZHMgUGVvcGxle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xyXG4gICAgICAgIHN1cGVyKHZpZXcsdHlwZSxpc091dCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKuS6p+eUn+enkeaKgOeahOaWueW8jyzlhYjnu5nkuojml7bpl7QgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVUZWNobm9sb2d5VGltZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtCgxLTMp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSoyKzE7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5Lqn55Sf56eR5oqA5YC8XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuY3JlYXRlVGVjaG5vbG9neSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Lqn55Sf56eR5oqA5YC8ICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVRlY2hub2xvZ3koKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgQ291bnRyeURhdGEuaW5zXy50ZWNobm9sb2d5Kz0wLjU7XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7QoMS0zKeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMisxO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOS6p+eUn+enkeaKgOWAvFxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLmNyZWF0ZVRlY2hub2xvZ3kpO1xyXG4gICAgfVxyXG4gICAgLyoq5aKZ5YaF6YC76L6RICovXHJcbiAgICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirph43lhplzcGVjaWFsZG8gKi9cclxuICAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcInRlY2hub2xvZ3lcIikgYXMgTGF5YS5TcHJpdGUpOyAgICAgICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XHJcbmltcG9ydCBUb29sIGZyb20gXCIuLi8uLi9Ub29sL1Rvb2xcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFyIGV4dGVuZHMgUGVvcGxle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xyXG4gICAgICAgIHN1cGVyKHZpZXcsdHlwZSxpc091dCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuaYjuaYn+aViOW6lOeahOaWueW8jyzlhYjnu5nkuojml7bpl7QgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVTdGFyVGltZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtCgxLTMp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSoyKzE7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5Lqn55Sf5pWI5bqU5YC8XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuY3JlYXRlU3RhclZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirkuqfnlJ/mlYjlupTlgLwg5pWI5bqU5YC85Li65bm456aP5bqmKi9cclxuICAgIHByaXZhdGUgY3JlYXRlU3RhclZhbHVlKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIENvdW50cnlEYXRhLmluc18ucG9wdWxhclN1cHBvcnQrPTAuNTtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtCgxLTMp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSoyKzE7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5Lqn55Sf56eR5oqA5YC8XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuY3JlYXRlU3RhclZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgfVxyXG5cclxuICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTtcclxuICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VudGVyIGV4dGVuZHMgTGF5YS5TY3JpcHR7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIGxldCBzY3JlZW5XaWR0aCA9IDkwMC8oTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodC9MYXlhLkJyb3dzZXIuY2xpZW50V2lkdGgpOy8v5bGP5bmV6auY5bqmXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiArIHRoaXMuc2NyZWVuV2lkdGgpO1xuICAgICAgICBpZihzY3JlZW5XaWR0aCA8IDgwMCkgKHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lTmFtZVwiKSBhcyBMYXlhLkxhYmVsKS5mb250U2l6ZSA9IDEyNTtcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5TcHJpdGUpLnggPSAoc2NyZWVuV2lkdGgtIDY2NykvMjsgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IFdvcmxkRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1dvcmxkRXZlbnRNYW5hZ2VyXCI7XG5pbXBvcnQgeyB1aSB9IGZyb20gXCIuLi8uLi91aS9sYXlhTWF4VUlcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9VSU1hbmFnZXJcIjtcbmltcG9ydCBQZW9wbGVNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1Blb3BsZU1hbmFnZXJcIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi8uLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IE1zZ0RpYWxvZyBmcm9tIFwiLi4vLi4vQ29yZS9Nc2dEaWFsb2dcIjtcbmltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IEJ1eURpYWxvZyBmcm9tIFwiLi4vLi4vQ29yZS9CdXlEaWFsb2dcIjtcbmltcG9ydCBQZW9wbGUgZnJvbSBcIi4uLy4uL1BlcmZlYi9QZW9wbGVcIjtcblxuLyoqXG4gKiDkuJbnlYznrqHnkIblmajohJrmnKxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdvcmxkIGV4dGVuZHMgdWkuR2FtZVdvcmxkVUl7XG4gICAgLyoqRGF0YU1hbmFnZXIgIOWNleS+iyAqL1xuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xuICAgIHByaXZhdGUgd29ybGRFdmVudE1hbmFnZXIgOiBXb3JsZEV2ZW50TWFuYWdlcjtcbiAgICAvKirkurrnsbvnrqHnkIblmagqL1xuICAgIHByaXZhdGUgcGVvcGxlTWFuYWdlciA6IFBlb3BsZU1hbmFnZXI7XG4gICAgLyoqVUnnrqHnkIblmaggKi9cbiAgICBwcml2YXRlIHVpTWFuYWdlciA6IFVJTWFuYWdlcjtcbiAgICAvKirmtojmga/pgJrnlKjmoYYgKi9cbiAgICBwcml2YXRlIG1zZ0RpYWxvZyA6IE1zZ0RpYWxvZztcbiAgICAvKirotK3kubDmoYYgKi9cbiAgICBwcml2YXRlIGJ1eURpYWxvZzpCdXlEaWFsb2c7XG4gICAgXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoq5bGP5bmV5a695bqmICovXG4gICAgcHJpdmF0ZSBzY3JlZW5XaWR0aCA6IG51bWJlcjtcbiAgICAvKirpvKDmoIfmmK/lkKbmjInkuIsgKi9cbiAgICBwcml2YXRlIGlzRG93biA6IGJvb2xlYW47XG4gICAgLyoq6byg5qCH54K56K6w5b2VICovXG4gICAgcHJpdmF0ZSBtb3VzZVBvcyA6IGFueTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqMm1pbuiuoeaXtiAqL1xuICAgIHByaXZhdGUgdGltZXJDb3VudCA6IG51bWJlcjtcbiAgICAvKirlh7rpl7TpmpTorqHml7YgKi9cbiAgICBwcml2YXRlIHRpbWVyQ291bnRfb3V0IDogbnVtYmVyO1xuICAgIC8qKui/myAqL1xuICAgIHByaXZhdGUgdGltZXJDb3VudF9pbiA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5nYW1lRGF0YUluaXQoKTsvL+a4uOaIj+WPmOmHj+WIneWni+WMllxuICAgICAgICB0aGlzLmFkZEV2ZW50KCk7Ly/nu5nmoaXmt7vliqDkuovku7YgXG4gICAgICAgIHRoaXMuc2NyZWVuU2V0dGluZygpOy8v5bGP5bmV5bGF5LitXG4gICAgICAgIHRoaXMuZ2FtZVN0YXJ0KCk7Ly/muLjmiI/mtYHnqIvlvIDlp4tcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zXy5zZXRBcmVhKHRoaXMuc3Bfc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKSk7XG4gICAgfVxuXG4gICAgLyoq5pWw5o2u5Yid5aeL5YyWICovXG4gICAgcHJpdmF0ZSBnYW1lRGF0YUluaXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMud29ybGRFdmVudE1hbmFnZXIgPSBuZXcgV29ybGRFdmVudE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyID0gbmV3IFBlb3BsZU1hbmFnZXIodGhpcy5zcF9zY2VuZSk7XG4gICAgICAgIHRoaXMudWlNYW5hZ2VyID0gbmV3IFVJTWFuYWdlcih0aGlzLnNwX1VJKTtcbiAgICAgICAgdGhpcy5tc2dEaWFsb2cgPSBuZXcgTXNnRGlhbG9nKCk7ICAgICAgXG4gICAgICAgIHRoaXMuYnV5RGlhbG9nPW5ldyBCdXlEaWFsb2coKTtcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IHt9O1xuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0ID0gMDtcbiAgICAgICAgdGhpcy50aW1lckNvdW50X2luID0gMDtcbiAgICB9XG5cbiAgICAvKirmt7vliqDkuovku7YgKi9cbiAgICBwcml2YXRlIGFkZEV2ZW50KCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvLyB0aGlzLnN0YWdlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyxmdW5jdGlvbihlKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAvLyB9KVxuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTix0aGlzLHRoaXMubW91c2VEb3duKTtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX1VQLHRoaXMsdGhpcy5tb3VzZVVwKTtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX01PVkUsdGhpcyx0aGlzLm1vdXNlTW92ZSk7XG4gICAgICAgIC8v57uZ6Zeo5biu54K554K55Ye75LqLICAgXG4gICAgICAgIHRoaXMuc3BfZG9vci5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5kb29yQ3RyKTtcbiAgICAgICAgLy/ljLvppobkuovku7bnu5HlrppcbiAgICAgICAgdGhpcy5ob3NwaXRhbC5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5IT1NQSVRBTF0pO1xuICAgICAgICAvL+WGm+mYn+S6i+S7tue7keWumlxuICAgICAgICB0aGlzLmFybXkub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuQVJNWV0pO1xuICAgICAgICAvL+eyruS7k+S6i+S7tue7keWumlxuICAgICAgICB0aGlzLmZhcm0ub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRkFSTV0pOyAgICAgICAgXG4gICAgICAgIC8v56eR5oqA6aaG5LqL5Lu257uR5a6aXG4gICAgICAgIHRoaXMudGVjaG5vbG9neS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5URUNITk9MT0dZXSk7ICAgICAgICBcbiAgICAgICAgLy/mlrDpl7vngrnkuovku7bnu5HlrppcbiAgICAgICAgLy90aGlzLmV2ZW50SG91c2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRVZFTlRfSE9VU0VdKTsgICAgIFxuICAgICAgICAvL+aWsOmXu+eah+Wuq+e7keWumlxuICAgICAgICB0aGlzLnBhbGFjZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5QQUxBQ0VdKTtcbiAgICB9XG5cbiAgICAvKirlsY/luZUg5bGA5LitKi9cbiAgICBwcml2YXRlIHNjcmVlblNldHRpbmcoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIgKyB0aGlzLnNjcmVlbldpZHRoKTtcbiAgICAgICAgdGhpcy5zcF9zY2VuZS54ID0gLSgyMDAwLXRoaXMuc2NyZWVuV2lkdGgpLzI7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8v5LqL5Lu25Zue6LCDXG5cbiAgICAvKirpl6jnmoTlvIDlhbMgKi9cbiAgICBwcml2YXRlIGRvb3JDdHIoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbilcbiAgICAgICAgey8v5byA6ZeoXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZG9vckNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7Ly/lhbPpl6hcbiAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRvb3JPcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirlhbPpl6ggKi9cbiAgICBwcml2YXRlIGRvb3JDbG9zZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5hbmkxLnBsYXkoMCxmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoq5byA6ZeoICovXG4gICAgcHJpdmF0ZSBkb29yT3BlbigpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5hbmkyLnBsYXkoMCxmYWxzZSk7XG5cbiAgICB9XG5cbiAgICAvKirnp7vliqggKi9cbiAgICBwcml2YXRlIG1vdXNlTW92ZSgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoIXRoaXMuaXNEb3duKSByZXR1cm47XG4gICAgICAgIGlmKHRoaXMubW91c2VQb3MueClcbiAgICAgICAge1xuICAgICAgICAgICB0aGlzLnNwX3NjZW5lLnggKz0gTGF5YS5zdGFnZS5tb3VzZVggLSB0aGlzLm1vdXNlUG9zLng7IFxuICAgICAgICAvLyAgICB0aGlzLnNwX3NjZW5lLnkgKz0gTGF5YS5zdGFnZS5tb3VzZVkgLSB0aGlzLm1vdXNlUG9zLng7XG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPiAwKSAgdGhpcy5zcF9zY2VuZS54ID0gMDtcbiAgICAgICAgICAgIGlmKHRoaXMuc3Bfc2NlbmUueCA8IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKSkgdGhpcy5zcF9zY2VuZS54ID0gIC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSBMYXlhLnN0YWdlLm1vdXNlWDtcbiAgICAgICAgdGhpcy5tb3VzZVBvcy55ID0gTGF5YS5zdGFnZS5tb3VzZVk7XG4gICAgfVxuXG4gICAgLyoq5ouW5Yqo5oyJ5LiLICovXG4gICAgcHJpdmF0ZSBtb3VzZURvd24oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKirmi5bliqjmiqzotbcgKi9cbiAgICBwcml2YXRlIG1vdXNlVXAoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7IFxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IHVuZGVmaW5lZDsgICAgICAgXG4gICAgfVxuXG5cbiAgICAvKirngrnlh7sg6I635Y+W5bu6562R5L+h5oGvICovXG4gICAgcHJpdmF0ZSBvbkhvdXNlSW5mbyh0eXBlKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubXNnRGlhbG9nLnNob3dNc2codHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5pu05pawVUnmoI/kupTlpKfkuLvlgLzkv6Hmga8gKi9cbiAgICBwcml2YXRlIHVwZGF0ZVVJTWFpbkRhdGEoKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnRleHRfY291bnRfcG9wdWxhdGlvbi50ZXh0PUNvdW50cnlEYXRhLmluc18ucG9wdWxhdGlvbi50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnRleHRfY291bnRfcG9wdWxhclN1cHBvcnQudGV4dD1Db3VudHJ5RGF0YS5pbnNfLnBvcHVsYXJTdXBwb3J0LnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudGV4dF9jb3VudF9tb25leS50ZXh0PUNvdW50cnlEYXRhLmluc18ubW9uZXkudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy50ZXh0X2NvdW50X3RlY2hub2xvZ3kudGV4dD1Db3VudHJ5RGF0YS5pbnNfLnRlY2hub2xvZ3kudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy50ZXh0X2NvdW50X3ByZXN0aWdlLnRleHQ9Q291bnRyeURhdGEuaW5zXy5wcmVzdGlnZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0t56iA5pyJ6ZeoXG4gICAgLyoq6LSt5Lmw56iA5pyJ6ZeoICovXG4gICAgcHVibGljIGJ1eVJhcmVEb29yKCk6dm9pZFxuICAgIHtcbiAgICAgICAgXG4gICAgfVxuICAgIC8vLy8vLy8vLy8vL+a4uOaIj+a1geeoi+W8gOWniy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLyoq5ri45oiP5rWB56iL5byA5aeLICovXG4gICAgcHJpdmF0ZSBnYW1lU3RhcnQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudXBkYXRlVUlNYWluRGF0YSgpO1xuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIuY3JlYXRlUGVvcGxlKCk7Ly/kurrlj6PnlJ/miJDpgLvovpHov5DooYxcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLmNyZWF0ZVBlb3BsZV9Jbm5lcigpOy8v5YaF5Lq65Y+j55Sf5oiQXG4gICAgfVxuXG5cbiAgICAvKirlvIDlkK/lrprml7blmaggKi9cbiAgICBwcml2YXRlIG9wZW5UaW1lcigpOnZvaWRcbiAgICB7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKEdhbWVDb25maWcuVElNRV9NQUlOREFUQSx0aGlzLENvdW50cnlEYXRhLmluc18uY2FsX01vbmV5KTtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoR2FtZUNvbmZpZy5USU1FX01BSU5EQVRBLHRoaXMsQ291bnRyeURhdGEuaW5zXy5pbmZsdWVuY2VfR3JhaW4pO1xuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcChHYW1lQ29uZmlnLlRJTUVfTUFJTkRBVEEsdGhpcyxDb3VudHJ5RGF0YS5pbnNfLmluZmx1ZW5jZV9Qb3B1bGFyU3VwcG9ydCk7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy/kurrlj6PmtYHliqjpgJrnn6XlmahcbiAgICAvKipcbiAgICAgKiDmtYHliqjmr5TkvovvvIwg6YCa55+l5ZmoXG4gICAgICogXG4gICAgICogICovXG4gICAgcHJpdmF0ZSBjdXJyZW50UmF0aW8oKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudGltZXJDb3VudCsrO1xuICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0Kys7XG4gICAgICAgIHRoaXMudGltZXJDb3VudF9pbisrO1xuICAgICAgICBsZXQgY291bnRyeURhdGEgPSBDb3VudHJ5RGF0YS5pbnNfO1xuICAgICAgICBsZXQgQkkgPSBjb3VudHJ5RGF0YS5wZXJjZW50OyAgIC8v6L+bL+WHulxuICAgICAgICBsZXQgb3V0ZXJUYXJnZXQgPSBjb3VudHJ5RGF0YS5leGl0UGVvcGxlOy8v5Ye66Zeo55uu5qCH5pWwXG4gICAgICAgIGxldCBpbm5lclRhZ2V0ID0gY291bnRyeURhdGEuZW50ZXJQZW9wbGU7Ly/ov5vpl6jnm67moIfmlbBcbiAgICAgICAgbGV0IF9vdXRlciA9IGNvdW50cnlEYXRhLl9vdXRlclBlb3BsZTsvL+WHuuWfjuWPo+WunumZheWAvFxuICAgICAgICBsZXQgX2lubmVyID0gY291bnRyeURhdGEuX2lubmVyUGVvcGxlOy8v5YWl5Z+O5a6e6ZmF5YC8XG4gICAgICAgIGxldCBsYXN0VGltZSA9IDEyMDAwMCAtIHRoaXMudGltZXJDb3VudCAtIDUwMDAwOy8v6I635Y+W5Ymp5L2Z5pe26Ze077yM5aSa6aKE5pSvMTDnp5JcbiAgICAgICAgaWYob3V0ZXJUYXJnZXQgPiBfb3V0ZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6YCa55+lXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVyQ291bnRfb3V0ID49IGxhc3RUaW1lLyhvdXRlclRhcmdldCAtIF9vdXRlcikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEucGVvcGxlR29PdXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXJDb3VudF9vdXQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGlubmVyVGFnZXQgPiBfaW5uZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6YCa55+lICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy50aW1lckNvdW50X2luID49IGxhc3RUaW1lLyhvdXRlclRhcmdldCAtIF9pbm5lcikpICBcbiAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy50aW1lckNvdW50ID4gMTIwMDAwKVxuICAgICAgICB7ICAgXG4gICAgICAgICAgICB0aGlzLnRpbWVyQ291bnRfaW4gPSAwO1xuICAgICAgICAgICAgdGhpcy50aW1lckNvdW50X291dCA9IDA7XG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5fb3V0ZXJQZW9wbGUgPSAwOy8v5a6e6ZmF5YC85b2S6Zu2XG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5faW5uZXJQZW9wbGUgPSAwOy8v5a6e6ZmF5YC85b2S6Zu2XG4gICAgICAgICAgICB0aGlzLnRpbWVyQ291bnQgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8b3V0ZXJUYXJnZXQtX291dGVyO2krKykvL+mAmuefpeWHuuWfjlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KGZhbHNlKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7aTxpbm5lclRhZ2V0LV9pbm5lcjtpKyspLy/pgJrnn6Xov5vnqItcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5RGF0YS5wZW9wbGVHb091dCh0cnVlKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuR2FtZSBleHRlbmRzIExheWEuU2NyaXB0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG4gICAgXG5cbiAgICBvbkNsaWNrKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lV29ybGQuc2NlbmVcIik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5TdG9yeSBleHRlbmRzIExheWEuU2NyaXB0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG4gICAgXG5cbiAgICBvbkNsaWNrKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lU3Rvcnkuc2NlbmVcIik7XG4gICAgfVxufSIsImltcG9ydCBDb3VudHJ5RGF0YSBmcm9tIFwiLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29se1xuICAgIC8v6I635Y+W5LiJ6KeS5Ye95pWw5YC8XG4gICAgcHVibGljIHN0YXRpYyByb3RhdGlvbkRlYWwoZng6bnVtYmVyLGZ5Om51bWJlcixzeDpudW1iZXIsc3k6bnVtYmVyLGdldFN0cmluZykgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIC8qKuaWnOi+uSAqL1xuICAgICAgICBsZXQgYyA6IG51bWJlciA9IE1hdGguc3FydChNYXRoLnBvdyhmeCAtIHN4LDIpICsgTWF0aC5wb3coZnkgLSBzeSwyKSk7XG4gICAgICAgIC8qKuS4tOi+uSAqL1xuICAgICAgICBsZXQgYSA6IG51bWJlciA9IHN4IC0gZng7XG4gICAgICAgIC8qKuWvuei+uSAqL1xuICAgICAgICBsZXQgYiA6IG51bWJlciA9IHN5IC0gZnk7XG4gICAgICAgIFxuICAgICAgICBpZihnZXRTdHJpbmcgPT0gXCJzaW5cIilcbiAgICAgICAge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiNzaW4gPT1cIiArIChiL2MpKTtcbiAgICAgICAgICAgIHJldHVybiAoYi9jKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGdldFN0cmluZyA9PSBcImNvc1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiI2NvcyA9PVwiICsgKGEvYykpO1xuICAgICAgICAgICAgcmV0dXJuIChhL2MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiN0YW4gPT1cIiArIChiL2EpKTsvL+Wvuei+uSDmr5Qg5Li06L65IFxuICAgICAgICAgICAgcmV0dXJuIChiL2EpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq56Kw5pKe5qOA5rWLIGRpY051bSDvvJrpooTorr7ot53nprsgb2JqZWN0MeWSjG9iamVjdDLkvKDlhaVzcHJpdGUs5piv5oyJ54Wn5q+P5Liqc3ByaXRl55qE6ZSa54K55Zyo5Lit5b+D5L2N572u5p2l6K6h566X55qEICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY29sbGlzaW9uQ2hlY2sob2JqZWN0MSxvYmplY3QyKSA6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGlmKE1hdGguYWJzKG9iamVjdDEueCAtIG9iamVjdDIueCk8IG9iamVjdDEud2lkdGgvMiArIG9iamVjdDIud2lkdGgvMiYmXG4gICAgICAgICAgIE1hdGguYWJzKG9iamVjdDEueSAtIG9iamVjdDIueSkgPCBvYmplY3QxLmhlaWdodC8yICsgb2JqZWN0Mi5oZWlnaHQvMil7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRlUm9wZVBvaW50XzIoeCx5LFgsWSk6bnVtYmVyXG4gICAge1xuICAgICAgICAgICAgbGV0IGNvcz1Ub29sLnJvdGF0aW9uRGVhbCh4LHksWCxZLFwiY29zXCIpO1xuICAgICAgICAgICAgbGV0IHNpbj1Ub29sLnJvdGF0aW9uRGVhbCh4LHksWCxZLFwic2luXCIpO1xuICAgICAgICAgICAgbGV0IHJvdGF0aW9uO1xuICAgICAgICAgICAgaWYoY29zPj0wJiZzaW4+MCl7XG4gICAgICAgICAgICAgICAgcm90YXRpb249IDE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpLTkwO1xuICAgICAgICAgICAgfWVsc2UgaWYoY29zPDAmJnNpbj49MCl7XG4gICAgICAgICAgICAgICAgcm90YXRpb249MTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyktOTA7XG4gICAgICAgICAgICB9ZWxzZSBpZihjb3M8PTAmJnNpbjwwKXtcbiAgICAgICAgICAgICAgICByb3RhdGlvbj05MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNlIGlmKGNvcz4wJiZzaW48PTApe1xuICAgICAgICAgICAgICAgIHJvdGF0aW9uPSA5MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHkgPCBZKSByb3RhdGlvbiArPSAxODA7XG4gICAgICAgICAgICByZXR1cm4gcm90YXRpb247XG4gICAgfVxuXG4gICAgLyoq6I635Y+W6KeS5bqmIFxuICAgICAqIOenu+WKqOeCueWcqOWJjVxuICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRSb3RhdGlvbih4MSx5MSx4Mix5MikgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCBjb3M9VG9vbC5yb3RhdGlvbkRlYWwoeDEseTEseDIseTIsXCJjb3NcIik7XG4gICAgICAgIGxldCBzaW49VG9vbC5yb3RhdGlvbkRlYWwoeDEseTEseDIseTIsXCJzaW5cIik7XG4gICAgICAgIGxldCByb3RhdGlvbjtcbiAgICAgICAgaWYoY29zID49MCAmJiBzaW4+MCl7XG4gICAgICAgICAgICByb3RhdGlvbiA9IDkwICsgMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29zIDwwICYmIHNpbj49MCl7XG4gICAgICAgICAgICByb3RhdGlvbiA9IC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgfVxuICAgICAgICBpZihjb3MgPjAgJiYgc2luPD0wKVxuICAgICAgICB7XG4gICAgICAgICAgICByb3RhdGlvbiA9IC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgfVxuICAgICAgICBpZihjb3MgPD0wICYmIHNpbjwwKVxuICAgICAgICB7XG4gICAgICAgICAgICByb3RhdGlvbiA9IDE4MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm90YXRpb247XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiByb3RhdGlvbiA9IDQ1IOinkuW6plxuICAgICAqIOaxgiBjb3Mg6L+Y5pivIHNpblxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRpb25TZXQocm90YXRpb24sdHlwZVN0cmluZykgIDogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgciA7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYocm90YXRpb24gPCAwKVxuICAgICAgICB7XG4gICAgICAgICAgICByb3RhdGlvbiArPSAzNjAqKE1hdGguYWJzKE1hdGguZmxvb3Iocm90YXRpb24vMzYwKSsyKSk7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYoTWF0aC5mbG9vcihyb3RhdGlvbi8zNjApPjApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJvdGF0aW9uIC09IDM2MCpNYXRoLmZsb29yKHJvdGF0aW9uLzM2MCk7XG4gICAgICAgIH1cbiAgICAgICAgciA9IChyb3RhdGlvbikvMTgwKk1hdGguUEk7ICAgICAgICBcbiAgICAgICAgaWYodHlwZVN0cmluZyA9PSBcImNvc1wiKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKE1hdGguY29zKHIpKTtcbiAgICAgICAgICAgIGlmKChyb3RhdGlvbiA+IDAgJiYgcm90YXRpb24gPD0gOTApIHx8IChyb3RhdGlvbj4yNzAgJiYgcm90YXRpb248PTM2MCkpICB2YWx1ZSA9IC12YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29zOjpcIiArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHsgICAgICAgICBcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5hYnMoTWF0aC5zaW4ocikpO1xuICAgICAgICAgICAgaWYoKHJvdGF0aW9uPjE4MCAmJiByb3RhdGlvbiA8PSAyNzApIHx8IChyb3RhdGlvbj4yNzAgJiYgcm90YXRpb248PTM2MCkpIHZhbHVlID0gLXZhbHVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzaW46OlwiICsgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZSAgICAgICAgXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOi3neemu+iuoeeul1xuICAgICAqIDIg5a+56LGhXG4gICAgICogZmlyc3RcbiAgICAgKiBzZWNvbmRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvdW50RGljX09iamVjdChmOmFueSxzOmFueSkgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coZi54IC0gcy54LDIpICsgTWF0aC5wb3coZi55IC0gcy55LDIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmlrnlnZfmo4DmtYsgXG4gICAgICogXG4gICAgICog5pa55Z2X5a+56LGhIHNwXG4gICAgICog5qOA5rWL55qE54K5IOWvueixoVxuICAgICAqICovXG4gICAgcHVibGljIHN0YXRpYyBibG9ja1Rlc3Qoc3AscG9pbnQpIDogYm9vbGVhblxuICAgIHtcbiAgICAgICAgaWYoIXNwIHx8ICFwb2ludCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgcG9pbnRMZWZ0IDogYW55ID17eDpzcC54IC0gc3Aud2lkdGgvMix5OnNwLnktc3AuaGVpZ2h0LzJ9O1xuICAgICAgICBsZXQgcG9pbnRSaWdodCA6IGFueSA9e3g6c3AueCArIHNwLndpZHRoLzIseTpzcC55K3NwLmhlaWdodC8yfTtcbiAgICAgICAgbGV0IHNfcG9pbnRMZWZ0ID0gcG9pbnQueCA+IHBvaW50TGVmdC54ICYmIHBvaW50Lnk+cG9pbnRMZWZ0Lnk7XG4gICAgICAgIGxldCBzX3BvaW50UmlnaHQgPSBwb2ludC54IDwgcG9pbnRSaWdodC54ICYmIHBvaW50Lnk8cG9pbnRSaWdodC55O1xuICAgICAgICBpZihzX3BvaW50TGVmdCAmJiBzX3BvaW50UmlnaHQpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdhbWVEYXRhIC0gQ291bnRyeURhdGFcbiAgICAgKiDljaDmr5Qg5pWw57uEXG4gICAgKuiOt+WPluWMuumXtOaVsOe7hCAwLDAuOCwwLjgzLDAuODQsMC45LDFcbiAgICAgKiBAYXJyIOWxnuaAp+WQjeWtl1xuICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRQZXJjZW50QXJlYShhcnIpOkFycmF5PG51bWJlcj5cbiAgICB7XG4gICAgICAgIGxldCBhcnJQZXJjZW50ID0gW107Ly/nlJ/kuqfmr5TkvotcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XG4gICAgICAgIGFyclBlcmNlbnQucHVzaChudW1iZXIpO1xuICAgICAgICBmb3IobGV0IGkgPSAwO2k8YXJyLmxlbmd0aDtpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlciArPSBDb3VudHJ5RGF0YS5pbnNfW2FycltpXV07XG4gICAgICAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyUGVyY2VudDtcbiAgICB9XG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xuaW1wb3J0IFNjZW5lPUxheWEuU2NlbmU7XG5leHBvcnQgbW9kdWxlIHVpIHtcclxuICAgIGV4cG9ydCBjbGFzcyBCdXlVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgYmc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9idXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ1eV9uYW1lOmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBidXlfaW5wdXQ6TGF5YS5UZXh0SW5wdXQ7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYnV5X3ByaWNlOmxheWEuZGlzcGxheS5UZXh0O1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiQnV5XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBHYW1lV29ybGRVSSBleHRlbmRzIFNjZW5lIHtcclxuXHRcdHB1YmxpYyBhbmkxOkxheWEuRnJhbWVBbmltYXRpb247XG5cdFx0cHVibGljIGFuaTI6TGF5YS5GcmFtZUFuaW1hdGlvbjtcblx0XHRwdWJsaWMgc3Bfc2NlbmU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2dyb3VuZDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3Bfcml2ZXI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX3dhbGw6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2Rvb3I6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV80OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV81OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV82OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV84OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV85OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBwYWxhY2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvc3BpdGFsOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xOTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRlY2hub2xvZ3k6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIxOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgZmFybTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMxOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBhcm15OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9VSTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaW1nX3BvcHVsYXRpb246TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfcG9wdWxhdGlvbjpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX3BvcHVsYXJTdXBwb3J0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3BvcHVsYXJTdXBwb3J0OmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfbW9uZXk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfbW9uZXk6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ190ZWNobm9sb2d5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3RlY2hub2xvZ3k6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ19wcmVzdGlnZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9wcmVzdGlnZTpsYXlhLmRpc3BsYXkuVGV4dDtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkdhbWVXb3JsZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IG1vZHVsZSB1aS5EaWEge1xyXG4gICAgZXhwb3J0IGNsYXNzIEN1cnJlbnREaWFsb2dVSSBleHRlbmRzIFNjZW5lIHtcclxuXHRcdHB1YmxpYyBtc2dCb2R5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcHJpdGVfUGVyc29uOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcHJpdGVfTXNnOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBidG5fY2xvc2U6TGF5YS5TcHJpdGU7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJEaWEvQ3VycmVudERpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cciJdfQ==
