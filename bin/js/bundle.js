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
                // if(OutCountryData.ins_.outCount<OutCountryData.ins_.maxCount-1)
                // {
                //     let time=Math.random()*3;
                //     Laya.timer.frameOnce(time*60,this,createPeople);
                // }
                this.peopleInto();
                // CountryData.ins_.cal_MainData(GameConfig.MAIN_POPULATION,1);
                // if(OutCountryData.ins_.outCount<OutCountryData.ins_.maxCount-1)
                // {
                //     let time=Math.random()*3;
                //     Laya.timer.frameOnce(time*60,this,this.createPeople);
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
        if (this.timerCount > 120) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL+adgui0p+mTui9MYXlhQWlySURFX2JldGEvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvQnV5RGlhbG9nLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9Nc2dEaWFsb2cudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0JhbmRpdC50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvQ29tbW9uLnRzIiwic3JjL1BlcmZlYi9kaWZmX1Blb3BsZS9Sb2JiZXIudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL1NjaWVudGlzdC50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvU3Rhci50cyIsInNyYy9TY3JpcHQvQ2VudGVyLnRzIiwic3JjL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzIiwic3JjL1NjcmlwdC9PcGVuR2FtZS50cyIsInNyYy9TY3JpcHQvT3BlblN0b3J5LnRzIiwic3JjL1Rvb2wvVG9vbC50cyIsInNyYy91aS9sYXlhTWF4VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDVkE7SUFBQTtJQWdFQSxDQUFDO0lBL0RHLGNBQWM7SUFDQSxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDN0MsYUFBYTtJQUNDLHFCQUFVLEdBQVksUUFBUSxDQUFDO0lBQzdDLGFBQWE7SUFDQyxtQkFBUSxHQUFZLE1BQU0sQ0FBQztJQUN6QyxjQUFjO0lBQ0Esd0JBQWEsR0FBWSxXQUFXLENBQUM7SUFHbkQsc0NBQXNDO0lBQ3RDLFFBQVE7SUFDTSxtQkFBUSxHQUFZLENBQUMsQ0FBQztJQUNwQyxRQUFRO0lBQ00sZUFBSSxHQUFZLENBQUMsQ0FBQztJQUNoQyxRQUFRO0lBQ00sZUFBSSxHQUFXLENBQUMsQ0FBQztJQUMvQixRQUFRO0lBQ00scUJBQVUsR0FBVyxDQUFDLENBQUM7SUFDckMsYUFBYTtJQUNDLHNCQUFXLEdBQVcsQ0FBQyxDQUFDO0lBQ3RDLFFBQVE7SUFDTSxpQkFBTSxHQUFXLENBQUMsQ0FBQztJQUNqQywwQ0FBMEM7SUFDMUMsV0FBVztJQUNHLHlCQUFjLEdBQVksQ0FBQyxDQUFDO0lBQzFDLFFBQVE7SUFDTSwyQkFBZ0IsR0FBWSxHQUFHLENBQUM7SUFDOUMsWUFBWTtJQUNFLHdCQUFhLEdBQVksRUFBRSxDQUFDO0lBQzFDLGFBQWE7SUFDQyw2QkFBa0IsR0FBWSxDQUFDLENBQUM7SUFDOUMsVUFBVTtJQUNJLDJCQUFnQixHQUFZLENBQUMsQ0FBQztJQUc1QyxzQ0FBc0M7SUFDdEMsVUFBVTtJQUNJLHFCQUFVLEdBQVksT0FBTyxDQUFDO0lBQzVDLFVBQVU7SUFDSSwwQkFBZSxHQUFVLFlBQVksQ0FBQztJQUNwRCxXQUFXO0lBQ0csOEJBQW1CLEdBQVksZ0JBQWdCLENBQUM7SUFDOUQsVUFBVTtJQUNJLDBCQUFlLEdBQVksWUFBWSxDQUFDO0lBQ3RELFVBQVU7SUFDSSx3QkFBYSxHQUFZLFVBQVUsQ0FBQztJQUlsRCxzQ0FBc0M7SUFDdEMsY0FBYztJQUNBLHdCQUFhLEdBQVksRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFFaEQsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDQyxrQkFBTyxHQUFRLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDbkMsZ0JBQWdCO0lBQ0Ysc0NBQTJCLEdBQUMsR0FBRyxDQUFDO0lBQzlDLFlBQVk7SUFDRSx1QkFBWSxHQUFDLENBQUMsQ0FBQztJQUNqQyxpQkFBQztDQWhFRCxBQWdFQyxJQUFBO2tCQWhFb0IsVUFBVTs7OztBQ0EvQiw2Q0FBcUM7QUFDckM7O0dBRUc7QUFDSDtJQUF1Qyw2QkFBUTtJQUMzQztRQUFBLFlBRUksaUJBQU8sU0FHVjtRQUZHLEtBQUksQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDO1FBQ2YsS0FBSSxDQUFDLE1BQU0sR0FBQyxHQUFHLENBQUM7O0lBQ3BCLENBQUM7SUFFRCw0QkFBUSxHQUFSO0lBR0EsQ0FBQztJQUVELFVBQVU7SUFDRiw2QkFBUyxHQUFqQjtRQUVJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsVUFBVTtJQUNGLDRCQUFRLEdBQWhCO1FBRUksSUFBSSxJQUFJLENBQUE7SUFDWixDQUFDO0lBRUQsVUFBVTtJQUNGLDhCQUFVLEdBQWxCO1FBRUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTCxnQkFBQztBQUFELENBL0JBLEFBK0JDLENBL0JzQyxjQUFFLENBQUMsS0FBSyxHQStCOUM7Ozs7O0FDbkNELG1EQUE4QztBQUc5Qzs7R0FFRztBQUNIO0lBb0lJO1FBbElBLHVDQUF1QztRQUN2QyxVQUFVO1FBQ0gsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUM5QixVQUFVO1FBQ0gsZUFBVSxHQUFVLEdBQUcsQ0FBQztRQUMvQixXQUFXO1FBQ0osbUJBQWMsR0FBWSxFQUFFLENBQUM7UUFDcEMsVUFBVTtRQUNILGVBQVUsR0FBWSxFQUFFLENBQUM7UUFDaEMsVUFBVTtRQUNILGFBQVEsR0FBWSxFQUFFLENBQUM7UUFFOUIscUNBQXFDO1FBQ3JDLGVBQWU7UUFDZixNQUFNO1FBQ04sUUFBUTtRQUNELGFBQVEsR0FBWSxHQUFHLENBQUM7UUFDL0IsVUFBVTtRQUNILGVBQVUsR0FBWSxHQUFHLENBQUM7UUFDakMsVUFBVTtRQUNILG1CQUFjLEdBQVksR0FBRyxDQUFDO1FBQ3JDLFNBQVM7UUFDRixRQUFHLEdBQVksSUFBSSxDQUFDO1FBQzNCLG1CQUFtQjtRQUNaLGlCQUFZLEdBQVksQ0FBQyxDQUFDO1FBR2pDLEtBQUs7UUFDTCxnQkFBZ0I7UUFDVCxnQkFBVyxHQUFZLENBQUMsQ0FBQztRQUNoQyxVQUFVO1FBQ0gsZUFBVSxHQUFRLENBQUMsQ0FBQztRQUMzQixXQUFXO1FBQ0osZ0JBQVcsR0FBUSxHQUFHLENBQUM7UUFDOUIsd0JBQXdCO1FBQ2pCLFFBQUcsR0FBWSxFQUFFLENBQUM7UUFHekIsZ0JBQWdCO1FBQ1QsZ0JBQVcsR0FBWSxFQUFFLENBQUM7UUFDakMsZ0JBQWdCO1FBQ1QsZUFBVSxHQUFZLEVBQUUsQ0FBQztRQUNoQyx1QkFBdUI7UUFDaEIsWUFBTyxHQUFZLENBQUMsQ0FBQztRQVM1QixrREFBa0Q7UUFDbEQsK0JBQStCO1FBQ3hCLDBCQUFxQixHQUFtQixDQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2pJLGVBQWU7UUFDUixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUNyQyxlQUFlO1FBQ1IsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDcEMsZ0JBQWdCO1FBQ1Qsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDckMsVUFBVTtRQUNILG1CQUFjLEdBQVksR0FBRyxDQUFDO1FBQ3JDLFFBQVE7UUFDRCxrQkFBYSxHQUFZLEdBQUcsQ0FBQztRQUVwQyxrQ0FBa0M7UUFRbEMsY0FBYztRQUNkLDJCQUEyQjtRQUNwQixTQUFJLEdBQVksQ0FBQyxDQUFDO1FBQ3pCLDRCQUE0QjtRQUNyQixvQkFBZSxHQUFZLENBQUMsQ0FBQztRQUNwQywyQkFBMkI7UUFDcEIsUUFBRyxHQUFZLENBQUMsQ0FBQztRQUV4QixjQUFjO1FBQ1AsZUFBVSxHQUFtQixDQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUNwRiw4QkFBOEI7UUFDdkIsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUM1QixZQUFZO1FBQ0wsY0FBUyxHQUFZLENBQUMsQ0FBQztRQUM5QixVQUFVO1FBQ0gsU0FBSSxHQUFZLENBQUMsQ0FBQztRQUN6QixXQUFXO1FBQ0osV0FBTSxHQUFZLENBQUMsQ0FBQztRQUMzQixXQUFXO1FBQ0osV0FBTSxHQUFZLENBQUMsQ0FBQztRQUN2QixpQ0FBaUM7UUFDakMsOEJBQThCO1FBQzlCLGVBQWU7UUFDZixpQ0FBaUM7UUFDakMsYUFBYTtRQUNiLDRCQUE0QjtRQUM1QixjQUFjO1FBQ2QsOEJBQThCO1FBQzlCLGNBQWM7UUFDZCw4QkFBOEI7UUFDbEMscUNBQXFDO1FBQzlCLGtCQUFhLEdBQW1CLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5ELFlBQVk7UUFDWixVQUFVO1FBQ0gsZUFBVSxHQUFXLElBQUksQ0FBQztRQUNqQywwQkFBMEI7UUFDbkIsZ0JBQVcsR0FBWSxHQUFHLENBQUM7UUFVbEMsbUJBQW1CO1FBQ25CLGFBQWE7UUFDTixzQkFBaUIsR0FBWSxHQUFHLENBQUM7UUFDeEMsWUFBWTtRQUNMLGtCQUFhLEdBQVksR0FBRyxDQUFDO1FBQ3BDLFlBQVk7UUFDTCxnQkFBVyxHQUFZLEdBQUcsQ0FBQztRQUk5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksS0FBSyxFQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssRUFBTyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELDhCQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsVUFBVTtJQUNILDZCQUFPLEdBQWQsVUFBZSxJQUFnQjtRQUUzQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzlCLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUNqQztZQUNJLElBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxRQUFRLEVBQy9CO2dCQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztpQkFDSSxJQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsR0FBRyxFQUN6QjtnQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QztpQkFFRDtnQkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztTQUNKO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxnQkFBZ0I7SUFDVCxrQ0FBWSxHQUFuQjtRQUVJLE9BQU8sb0JBQVUsQ0FBQyxnQkFBZ0IsR0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksb0NBQWMsR0FBckI7UUFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDJDQUFxQixHQUE1QixVQUE2QixJQUFXO1FBRXBDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVM7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUM5QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBR0QsNENBQTRDO0lBQzVDLFNBQVM7SUFDRiwrQkFBUyxHQUFoQjtRQUVJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFlBQVk7SUFDTCxxQ0FBZSxHQUF0QjtRQUVJLElBQUksU0FBUyxHQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzFDLElBQUksUUFBUSxHQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxjQUFjO0lBQ1AsOENBQXdCLEdBQS9CO1FBRUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFHRCxtQ0FBbUM7SUFDbkMsVUFBVTtJQUNGLGdDQUFVLEdBQWxCO1FBRUksSUFBSSxDQUFDLEtBQUssSUFBRSxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDdkYsQ0FBQztJQUVELG1CQUFtQjtJQUNYLDBDQUFvQixHQUE1QjtRQUVJLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7SUFFRCxvQkFBb0I7SUFDWix5Q0FBbUIsR0FBM0I7UUFFSSwrQ0FBK0M7UUFDL0MsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLFVBQVUsR0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLEdBQUMsTUFBTSxDQUFDLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM3QyxJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekMsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsZ0JBQWdCO0lBQ1IscUNBQWUsR0FBdkI7UUFFSSxrREFBa0Q7UUFDbEQsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDLEdBQUMsTUFBTSxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkJBQTJCO0lBQ25CLHdDQUFrQixHQUExQjtRQUVJLDhDQUE4QztRQUM5QyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsY0FBYyxHQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7UUFDOUQsZ0RBQWdEO1FBQ2hELGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxjQUFjLEdBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztRQUMxRCw2Q0FBNkM7UUFDN0MsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO1FBQzNELDRDQUE0QztRQUM1QyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsY0FBYyxHQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7UUFDM0QsU0FBUztRQUNULGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEosQ0FBQztJQUVELDZCQUE2QjtJQUNyQiwwQ0FBb0IsR0FBNUI7UUFFSSw0Q0FBNEM7UUFDNUMsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDO1FBQ3pDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksR0FBQyxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUVELGFBQWE7SUFDTCxvQ0FBYyxHQUF0QjtRQUVJLHNDQUFzQztRQUN0QyxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksR0FBQyxHQUFHLENBQUM7UUFDcEMsT0FBTztRQUNQLElBQUksT0FBTyxHQUFDLElBQUksQ0FBQyxHQUFHLEdBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssSUFBRSxPQUFPLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsWUFBWTtJQUNKLHVDQUFpQixHQUF6QjtRQUVJLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxRQUFRO0lBQ0QsNEJBQU0sR0FBYjtRQUVJLElBQUksQ0FBQyxLQUFLLElBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUN6QixDQUFDO0lBRUQsVUFBVTtJQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW1DRztJQUdILDJDQUEyQztJQUNwQyxvQ0FBYyxHQUFyQixVQUFzQixLQUFLLEVBQUMsS0FBSztRQUU3QixJQUFHLEtBQUs7WUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQzs7WUFDOUIsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVELDJDQUEyQztJQUNwQyxtQ0FBYSxHQUFwQixVQUFxQixLQUFLLEVBQUMsS0FBSztRQUU1QixJQUFHLEtBQUs7WUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQzs7WUFDaEMsSUFBSSxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELG9DQUFvQztJQUM3QixpQ0FBVyxHQUFsQixVQUFtQixJQUFJO1FBRW5CLElBQUksR0FBRyxDQUFFO1FBQ1QsSUFBRyxJQUFJO1lBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7O1lBQ3pCLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2pDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBRyxLQUFLLEdBQUMsQ0FBQyxFQUNWO1lBQ0ksSUFBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQ25CO2dCQUNJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLE9BQU87YUFDVjtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsT0FBTztTQUNWO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPO0lBQ1gsQ0FBQztJQUVELGFBQWE7SUFDTiwyQkFBSyxHQUFaLFVBQWEsSUFBSTtRQUViLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFBLFFBQVE7UUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUEsUUFBUTtRQUMxQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBelhhLGdCQUFJLEdBQWlCLElBQUksV0FBVyxFQUFFLENBQUM7SUEwWHpELGtCQUFDO0NBM1hELEFBMlhDLElBQUE7a0JBM1hvQixXQUFXO0FBNlhoQyxRQUFRO0FBQ1I7SUFBQTtRQUVJLHVDQUF1QztRQUN2QyxjQUFjO1FBQ1AsYUFBUSxHQUFVLEdBQUcsQ0FBQztRQUM3QixhQUFhO1FBQ04sYUFBUSxHQUFRLENBQUMsQ0FBQztRQUN6QixXQUFXO1FBQ0osY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUMzQiw0Q0FBNEM7UUFDNUMsUUFBUTtRQUNELFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDL0IsWUFBWTtRQUNMLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDakMsVUFBVTtRQUNILFNBQUksR0FBWSxLQUFLLENBQUM7UUFDN0IsV0FBVztRQUNKLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFDOUIsV0FBVztRQUNKLFdBQU0sR0FBWSxHQUFHLENBQUM7UUFDN0IsU0FBUztRQUNGLGVBQVUsR0FBbUIsQ0FBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFnQnhGLENBQUM7SUFkRyxvQ0FBb0M7SUFDN0IsdUNBQWMsR0FBckI7UUFFRyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBQzFCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDakMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDckM7WUFDSyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNyQixDQUFDO0lBbkNhLG1CQUFJLEdBQW9CLElBQUksY0FBYyxFQUFFLENBQUM7SUFvQy9ELHFCQUFDO0NBckNELEFBcUNDLElBQUE7QUFyQ1ksd0NBQWM7Ozs7QUNwWTNCLDZDQUFxQztBQUVyQzs7R0FFRztBQUNIO0lBQXVDLDZCQUFzQjtJQUd6RCxRQUFRO0lBQ1Isa0NBQWtDO0lBRWxDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBRkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDMUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7O0lBQ3pCLENBQUM7SUFFRCxTQUFTO0lBQ0YsMkJBQU8sR0FBZCxVQUFlLElBQVc7UUFFdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFNUQsQ0FBQztJQUVELFFBQVE7SUFDQSw2QkFBUyxHQUFqQjtRQUVJLFFBQU8sSUFBSSxDQUFDLElBQUksRUFDaEI7U0FFQztJQUNMLENBQUM7SUFFRCxTQUFTO0lBQ0QsK0JBQVcsR0FBbkI7SUFHQSxDQUFDO0lBRUQsVUFBVTtJQUNGLDhCQUFVLEdBQWxCO0lBR0EsQ0FBQztJQUVELFFBQVE7SUFDRCwrQkFBVyxHQUFsQjtRQUVJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsRUFBQyxFQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVPLDZCQUFTLEdBQWpCO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0EzREEsQUEyREMsQ0EzRHNDLGNBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxHQTJENUQ7Ozs7O0FDL0RELG1EQUE4QztBQUM5Qyw2Q0FBNEQ7QUFDNUQsdURBQWdEO0FBQ2hELHVEQUFnRDtBQUNoRCw2REFBd0Q7QUFDeEQsbURBQThDO0FBQzlDLHVEQUFrRDtBQUNsRDs7R0FFRztBQUNIO0lBZ0JJLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMsdUJBQVksSUFBSTtRQVhoQiw4Q0FBOEM7UUFDOUMsYUFBYTtRQUNMLGNBQVMsR0FBWSxDQUFDLENBQUM7UUFDL0IsWUFBWTtRQUNKLGVBQVUsR0FBWSxHQUFHLENBQUM7UUFDbEMsU0FBUztRQUNELGtCQUFhLEdBQVksQ0FBQyxDQUFDO1FBQ25DLGNBQWM7UUFDTixtQkFBYyxHQUFZLEdBQUcsQ0FBQztRQUtsQyxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxZQUFZO0lBQ0wseUNBQWlCLEdBQXhCO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFNBQVM7SUFDRixvQ0FBWSxHQUFuQjtRQUVJLElBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUM1QztZQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxvQkFBVSxDQUFDLGtCQUFrQixHQUFDLEdBQUcsQ0FBQztRQUN0RSxJQUFHLDRCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSw0QkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQztZQUFFLE9BQU87UUFDMUUsSUFBSSxLQUFLLEdBQWUsNEJBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0QsSUFBSSxNQUFNLENBQUM7UUFDWCxlQUFlO1FBQ2YsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLEtBQUs7UUFDTCxJQUFHLE1BQU0sSUFBRSxDQUFDLElBQUUsTUFBTSxHQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDN0I7WUFDSSxNQUFNLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsSUFBRyxDQUFDLE1BQU0sRUFDVjtnQkFDSSxNQUFNLEdBQUUsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsb0JBQVUsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0M7U0FDSjtRQUNELEtBQUs7YUFDQSxJQUFHLE1BQU0sSUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUUsTUFBTSxHQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDekM7WUFDSSxNQUFNLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkMsSUFBRyxDQUFDLE1BQU0sRUFDVjtnQkFDSSxNQUFNLEdBQUcsSUFBSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsb0JBQVUsQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hFLHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0M7WUFDRCxpQ0FBaUM7U0FDcEM7UUFDRCxJQUFJO2FBQ0MsSUFBRyxNQUFNLElBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFFLE1BQU0sR0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ3pDO1lBQ0ksTUFBTSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLElBQUcsQ0FBQyxNQUFNLEVBQ1Y7Z0JBQ0ksTUFBTSxHQUFFLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsb0JBQVUsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JELHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0M7WUFDRCwyQkFBMkI7U0FDOUI7UUFDRCxJQUFJO2FBQ0MsSUFBRyxNQUFNLElBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFFLE1BQU0sR0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ3pDO1lBQ0ksTUFBTSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUcsQ0FBQyxNQUFNLEVBQ1Y7Z0JBQ0ksTUFBTSxHQUFFLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLG9CQUFVLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9DO1lBQ0QseUJBQXlCO1NBQzVCO1FBQ0QsSUFBSTthQUVKO1lBQ0ksTUFBTSxHQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLElBQUcsQ0FBQyxNQUFNLEVBQ1Y7Z0JBQ0ksTUFBTSxHQUFFLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLG9CQUFVLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6RCxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9DO1lBQ0QseUJBQXlCO1NBQzVCO1FBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUM7UUFDcEIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsNEJBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELFlBQVk7SUFDTCw4QkFBTSxHQUFiO1FBRUksSUFBSSxPQUFPLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsUUFBTyxPQUFPLEVBQ2Q7WUFDSSxLQUFLLENBQUM7Z0JBQ0YsTUFBTTtnQkFDTixJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztnQkFDVCxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLENBQUM7Z0JBQ3pCLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsTUFBTTtnQkFDTixJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxJQUFJLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO2dCQUNULE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsTUFBTTtnQkFDTixJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQztnQkFDWixJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLENBQUM7Z0JBQ3pCLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCxrRUFBa0U7SUFHM0Qsb0NBQVksR0FBbkIsVUFBb0IsTUFBTSxFQUFDLElBQVc7UUFFbEMsUUFBUTtRQUNSLElBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFDLENBQUMsRUFDN0I7WUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBRUQsMENBQTBDO0lBQ25DLDBDQUFrQixHQUF6QjtRQUVHLElBQUksWUFBWSxDQUFFO1FBQ2xCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFBLE1BQU07UUFDMUIsSUFBSSxVQUFVLEdBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzdDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQ3JDO1lBQ0ssTUFBTSxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFNBQVM7SUFDRCxvQ0FBWSxHQUFwQixVQUFxQixZQUFZO1FBRTdCLElBQUcsWUFBWSxJQUFJLE1BQU07WUFBRSxPQUFPO1FBQ2xDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLElBQUksV0FBVyxHQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDO1FBQ25DLE1BQU07UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLFFBQU8sWUFBWSxFQUNuQixFQUFLLHFDQUFxQztZQUN0QyxLQUFLLG9CQUFVLENBQUMsVUFBVTtnQkFDdEIsSUFBRyxDQUFDLE1BQU07b0JBQUUsTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxvQkFBVSxDQUFDLFVBQVUsRUFBQyxJQUFJO2dCQUMzQixJQUFHLENBQUMsTUFBTTtvQkFBRSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5RCxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLE1BQU07WUFDVixLQUFLLG9CQUFVLENBQUMsVUFBVSxFQUFDLElBQUk7Z0JBQzNCLElBQUcsQ0FBQyxNQUFNO29CQUFFLE1BQU0sR0FBRyxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlELFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssb0JBQVUsQ0FBQyxRQUFRLEVBQUMsSUFBSTtnQkFDekIsSUFBRyxDQUFDLE1BQU07b0JBQUUsTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUQsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxvQkFBVSxDQUFDLGFBQWEsRUFBQyxLQUFLO2dCQUMvQixJQUFHLENBQUMsTUFBTTtvQkFBRSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5RCxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9CLE1BQU07U0FDYjtRQUNELElBQUcsQ0FBQyxNQUFNLEVBQUU7WUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFFO1lBQUEsT0FBTztTQUFDO1FBQzVDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHFCQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSxRQUFRO1FBQ25ELElBQUcsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFBQSxPQUFPO1NBQUM7UUFDOUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRTNCLENBQUM7SUFFRCxVQUFVO0lBQ0EsaUNBQVMsR0FBbkIsVUFBb0IsTUFBTTtRQUV0QixJQUFJLFNBQVMsR0FBSSxJQUFJLENBQUMsSUFBb0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkUsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsR0FBRyxDQUFDO1FBQzdDLElBQUksS0FBSyxDQUFFO1FBQ1gsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUM3QztZQUNJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRCxLQUFLLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsSUFBRyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQ3hDO2dCQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQyx3QkFBd0I7Z0JBQ3hCLE9BQU87YUFDVjtTQUNKO0lBQ0wsQ0FBQztJQUVELFlBQVk7SUFDSixpQ0FBUyxHQUFqQixVQUFrQixVQUFVO1FBRXhCLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUNwQztZQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxvQkFBVSxDQUFDLGtCQUFrQixHQUFDLEdBQUcsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFbkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdEIsS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ3BDO1lBQ0ksSUFBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO2dCQUFFLE1BQU07WUFDM0IsSUFBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUN0RDtnQkFDSSxNQUFNLEdBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLE1BQU07YUFDVDtTQUNKO1FBQ0QsSUFBRyxDQUFDLE1BQU0sRUFBRTtZQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFBQSxPQUFPO1NBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDbEMsV0FBVztRQUNYLElBQUcsS0FBSyxLQUFLLFNBQVMsRUFBQztZQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFBQSxPQUFPO1NBQUM7UUFDdEQsSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQ3BFO1lBQ0ksSUFBRyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVTtnQkFBRSxPQUFPO1lBQ2pFLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBRyxDQUFDLE1BQU0sRUFBQztZQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFBQSxPQUFPO1NBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLE9BQU87UUFDakMsT0FBTyxNQUFNLENBQUM7SUFDakIsQ0FBQztJQUVELGNBQWM7SUFDUCx1Q0FBZSxHQUF0QjtRQUVJLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUN2RDtZQUNJLE1BQU0sSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDN0M7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQWxSQSxBQWtSQyxJQUFBOzs7OztBQzNSRDs7R0FFRztBQUNIO0lBTUksVUFBVTtJQUNWLG1CQUFZLEVBQWM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdMLGdCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7Ozs7O0FDakJEOzs7Ozs7R0FNRztBQUNIO0lBR0k7SUFFQSxDQUFDO0lBUUwsd0JBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTs7Ozs7QUNwQkQsZ0dBQWdHO0FBQ2hHLDhDQUF3QztBQUN4Qyw4Q0FBd0M7QUFDeEMsOENBQXdDO0FBQ3hDLDBEQUFvRDtBQUNwRCxnREFBMEM7QUFDMUMsMENBQW9DO0FBQ3BDOztFQUVFO0FBQ0Y7SUFhSTtJQUFjLENBQUM7SUFDUixlQUFJLEdBQVg7UUFDSSxJQUFJLEdBQUcsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUM3QyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsbUJBQVMsQ0FBQyxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxtQkFBUyxDQUFDLENBQUM7UUFDbkMsR0FBRyxDQUFDLG9CQUFvQixFQUFDLGtCQUFRLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsK0JBQStCLEVBQUMsbUJBQVMsQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxxQkFBcUIsRUFBQyxtQkFBUyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLGtCQUFrQixFQUFDLGdCQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBckJNLGdCQUFLLEdBQVEsSUFBSSxDQUFDO0lBQ2xCLGlCQUFNLEdBQVEsR0FBRyxDQUFDO0lBQ2xCLG9CQUFTLEdBQVEsYUFBYSxDQUFDO0lBQy9CLHFCQUFVLEdBQVEsTUFBTSxDQUFDO0lBQ3pCLGlCQUFNLEdBQVEsS0FBSyxDQUFDO0lBQ3BCLGlCQUFNLEdBQVEsTUFBTSxDQUFDO0lBQ3JCLHFCQUFVLEdBQUssaUJBQWlCLENBQUM7SUFDakMsb0JBQVMsR0FBUSxFQUFFLENBQUM7SUFDcEIsZ0JBQUssR0FBUyxLQUFLLENBQUM7SUFDcEIsZUFBSSxHQUFTLEtBQUssQ0FBQztJQUNuQix1QkFBWSxHQUFTLEtBQUssQ0FBQztJQUMzQiw0QkFBaUIsR0FBUyxJQUFJLENBQUM7SUFXMUMsaUJBQUM7Q0F2QkQsQUF1QkMsSUFBQTtrQkF2Qm9CLFVBQVU7QUF3Qi9CLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztBQ2xDbEIsMkNBQXNDO0FBQ3RDO0lBQ0M7UUFDQyxnQkFBZ0I7UUFDaEIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBVSxDQUFDLEtBQUssRUFBRSxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFVLENBQUMsS0FBSyxFQUFFLG9CQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxvQkFBVSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxvQkFBVSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxvQkFBVSxDQUFDLGlCQUFpQixDQUFDO1FBRTFELG9EQUFvRDtRQUNwRCxJQUFJLG9CQUFVLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU07WUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5RixJQUFJLG9CQUFVLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNGLElBQUksb0JBQVUsQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBRTdCLGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDckksQ0FBQztJQUVELDhCQUFlLEdBQWY7UUFDQywrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELDZCQUFjLEdBQWQ7UUFDQyxZQUFZO1FBQ1osb0JBQVUsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0YsV0FBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUFDRCxPQUFPO0FBQ1AsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7OztBQ2xDWCxtREFBOEM7QUFDOUMsbURBQWtFO0FBQ2xFLHFDQUFnQztBQUNoQyxtREFBOEM7QUFHOUM7OztHQUdHO0FBQ0g7SUFnQ0ksZ0JBQVksSUFBSSxFQUFDLElBQVcsRUFBQyxLQUFLO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxTQUFTO0lBQ0QscUJBQUksR0FBWixVQUFhLElBQUk7UUFFYixPQUFPO1FBQ1AsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUk7UUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXO0lBQ0gsNEJBQVcsR0FBbkI7UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDVixDQUFDLEVBQUMsSUFBSTtZQUNOLENBQUMsRUFBQyxDQUFDO1lBQ0gsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLFNBQVM7WUFDbkMsY0FBYyxFQUFDLFNBQVM7WUFDeEIsY0FBYyxFQUFHLENBQUM7U0FDckIsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVwQixDQUFDO0lBRUQsVUFBVTtJQUNILDhCQUFhLEdBQXBCO1FBRUksT0FBTztRQUNQLElBQUcsSUFBSSxDQUFDLEtBQUssRUFDYjtZQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyw0QkFBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUU7YUFFRDtZQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqRDtJQUNMLENBQUM7SUFFRCxTQUFTO0lBQ0QsNkJBQVksR0FBcEIsVUFBcUIsSUFBSTtRQUVwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxjQUFjO0lBQ04seUJBQVEsR0FBaEIsVUFBaUIsSUFBSTtRQUVqQixJQUFJLE1BQU0sR0FBRyxNQUFNLEdBQUMsSUFBSSxHQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFDWDtZQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsWUFBWTtJQUNMLHVCQUFNLEdBQWIsVUFBYyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQWM7UUFFNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxrRkFBa0Y7SUFDMUUsOEJBQWEsR0FBckI7UUFFSSxvQkFBb0I7UUFDcEIsSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBRSxHQUFHLEVBQ2pCO1lBQ0ksSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7YUFDSSxJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFFLElBQUksRUFDdkI7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzNCO2FBRUQ7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7U0FDL0I7UUFDRCw4QkFBOEI7UUFDOUIsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU07UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsVUFBVTtJQUNGLDZCQUFZLEdBQXBCO1FBRUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtQkFBbUI7SUFDWCwrQkFBYyxHQUF0QjtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsYUFBYTtRQUNiLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0JBQXNCO0lBQ2QsMEJBQVMsR0FBakI7UUFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFFLElBQUksRUFDbEI7WUFDSSxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDNUI7YUFFRDtZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBSUQsVUFBVTtJQUNGLCtCQUFjLEdBQXRCO1FBRUksTUFBTTtRQUNOLElBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUM3QztZQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQiw0QkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvQixJQUFHLDRCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyw0QkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxFQUM5RDtnQkFDSSxJQUFJLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDeEQ7U0FDSjtRQUVELE9BQU87UUFDUCxJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFFLEdBQUcsRUFDakI7WUFDSSxTQUFTO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNoQztRQUVELFFBQVE7UUFDUixJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEdBQUcsSUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxJQUFJLElBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsR0FBRyxJQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEdBQUcsRUFDOUQ7WUFDSSxRQUFRO1lBQ1IsSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQzlCO2dCQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLFFBQVE7Z0JBQ1IsNEJBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQy9CLFFBQVE7Z0JBQ1IscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzlCLGtFQUFrRTtnQkFDbEUsSUFBSTtnQkFDSixnQ0FBZ0M7Z0JBQ2hDLHVEQUF1RDtnQkFDdkQsSUFBSTtnQkFDSixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLCtEQUErRDtnQkFDL0Qsa0VBQWtFO2dCQUNsRSxJQUFJO2dCQUNKLGdDQUFnQztnQkFDaEMsNERBQTREO2dCQUM1RCxJQUFJO2FBQ1A7U0FFSjtJQUNMLENBQUM7SUFFRCxZQUFZO0lBQ1osMEdBQTBHO0lBQ2hHLGdDQUFlLEdBQXpCO1FBR0ksc0JBQXNCO0lBQzFCLENBQUM7SUFFTSwwQkFBUyxHQUFoQixVQUFpQixNQUFrQjtRQUUvQiw0QkFBNEI7UUFDNUIsSUFBSTtRQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLDRCQUE0QjtRQUM1Qiw0QkFBNEI7SUFDaEMsQ0FBQztJQUVELGlCQUFpQjtJQUNQLDRCQUFXLEdBQXJCO1FBRUksSUFBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLGNBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUNsSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQSxVQUFVO0lBQ2xDLENBQUM7SUFFRCxrQkFBa0I7SUFDVix3QkFBTyxHQUFmO1FBRUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsY0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxjQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3hDLElBQUcsY0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN4QyxJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFDckM7Z0JBQ0kscUJBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDM0I7aUJBRUQ7Z0JBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hCO1NBQ0o7UUFDRCxJQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFO1lBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQUM7UUFDaEYsaUNBQWlDO0lBQ3JDLENBQUM7SUFFRCxTQUFTO0lBQ0MsNkJBQVksR0FBdEI7UUFFSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQSxnQkFBZ0I7UUFDcEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUEsb0JBQW9CO0lBQzFDLENBQUM7SUFFRCxZQUFZO0lBQ0YsMkJBQVUsR0FBcEI7UUFFSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQSxpQkFBaUI7UUFDaEQsSUFBRyxLQUFLLEdBQUcsQ0FBQyxFQUNaLEVBQUMsVUFBVTtZQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQSxJQUFJO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUEsTUFBTTtRQUNyQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsVUFBVTtJQUNGLHlCQUFRLEdBQWhCLFVBQWlCLEtBQUs7UUFFbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSwrQ0FBK0M7SUFDbkQsQ0FBQztJQUVELFVBQVU7SUFDQSwrQkFBYyxHQUF4QjtRQUVJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLEVBQUU7WUFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUFBLE9BQU87U0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsSUFBSSxvQkFBVSxDQUFDLGFBQWEsQ0FBQztRQUN2RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM1RCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFHLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRTtZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUFDLE9BQU87U0FBQztRQUN0RCxJQUFHLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBRTtZQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUFDLE9BQU87U0FBQztRQUN0RCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELG9CQUFvQjtJQUNaLDJCQUFVLEdBQWxCO1FBRUksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDM0QsSUFBRyxFQUFFLEdBQUcsQ0FBQztZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQzthQUM1QixJQUFJLEVBQUUsR0FBRyxDQUFDO1lBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCx1Q0FBdUM7SUFDN0IsNEJBQVcsR0FBckI7UUFFSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNiLElBQUksSUFBSSxHQUF1QixxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUQsSUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxHQUFHO1lBQUUsSUFBSSxHQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2RCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDN0I7WUFDSSxJQUFHLGNBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUFDO1lBQ3RELElBQUcsY0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFDO2dCQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQUMsQ0FBQSx1QkFBdUI7WUFDckUsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUN6QyxFQUFDLE9BQU87Z0JBQ0osSUFBRyxjQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO29CQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQUM7Z0JBQ2hFLElBQUcsY0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM1QyxFQUFDLFFBQVE7b0JBQ0wsR0FBRyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQSxXQUFXO29CQUNyQixPQUFPLEdBQUcsQ0FBQztpQkFDZDthQUNKO1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxlQUFlO0lBQ0wsNkJBQVksR0FBdEIsVUFBdUIsWUFBYTtRQUVoQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBLFFBQVE7UUFDNUMsSUFBRyxZQUFZO1lBQUUsUUFBUSxHQUFHLFlBQVksQ0FBQzs7WUFDcEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUEsZ0JBQWdCO1FBQzNDLElBQUcsUUFBUSxLQUFLLFNBQVMsRUFDekIsRUFBQyxZQUFZO1lBQ1QsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFBLENBQUEsY0FBYztZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDbkM7UUFFRCxTQUFTO1FBQ1QsSUFBSSxHQUFHLEdBQVksY0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxHQUFHLEdBQVksY0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQscUVBQXFFO1FBQ3JFLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxvQkFBVSxDQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBRSxFQUFDLE1BQU07U0FDcEQ7WUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsb0JBQVUsQ0FBQyxjQUFjLEdBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLG9CQUFVLENBQUMsY0FBYyxHQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RTtRQUNELCtCQUErQjtJQUNuQyxDQUFDO0lBRUQsZ0JBQWdCO0lBQ04sK0JBQWMsR0FBeEI7UUFFSSxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLGNBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFRCxxQkFBcUI7SUFDWCwwQkFBUyxHQUFuQjtJQUdBLENBQUM7SUFDTCxtRkFBbUY7SUFDL0U7OztNQUdFO0lBQ0sseUJBQVEsR0FBZixVQUFnQixJQUFJO1FBRVosSUFBRyxJQUFJLEVBQUU7WUFDTCxNQUFNO1lBQ04sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0I7YUFBSTtZQUNELE1BQU07WUFDTixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDVCxDQUFDO0lBRUQsWUFBWTtJQUNKLGlDQUFnQixHQUF4QjtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksSUFBSSxHQUFDLElBQUksR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLElBQUksR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFDLElBQUksR0FBQyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFlBQVk7SUFDSixpQ0FBZ0IsR0FBeEI7UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDO1FBQ2pDLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUYsVUFBVTtJQUNBLDBCQUFTLEdBQW5CO1FBRUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQWdCLENBQUMsQ0FBQyxDQUFBLFFBQVE7SUFDaEYsQ0FBQztJQUVELG1CQUFtQjtJQUNULDJCQUFVLEdBQXBCO1FBRUssSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFnQixDQUFDO1FBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksVUFBVSxHQUFpQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsc0JBQXNCO0lBQ1osNEJBQVcsR0FBckIsVUFBc0IsU0FBUztRQUUxQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFFLFNBQXlCLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRSxJQUFJLFVBQXVCLENBQUM7UUFDNUIsd0NBQXdDO1FBQ3hDLG1DQUFtQztRQUNuQyxJQUFHLEtBQUssSUFBSSxDQUFDLEVBQ2I7WUFDSSxVQUFVLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsSUFBRyxVQUFVLEVBQ2I7Z0JBQ0ksT0FBTyxVQUFVLENBQUM7YUFDckI7WUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLCtCQUErQjtJQUNwQyxDQUFDO0lBRUEsdUJBQXVCO0lBQ2IsOEJBQWEsR0FBdkIsVUFBd0IsVUFBVztRQUUvQixJQUFHLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLEVBQUU7UUFDRixJQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELGdCQUFnQjtJQUNOLDZCQUFZLEdBQXRCO1FBRUksT0FBTztRQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUMsUUFBTyxJQUFJLENBQUMsSUFBSSxFQUNoQjtZQUNJLEtBQUssb0JBQVUsQ0FBQyxVQUFVO2dCQUN0QixJQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDO29CQUN0QyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDcEMsT0FBTztZQUNYLEtBQUssb0JBQVUsQ0FBQyxVQUFVO2dCQUN0QixJQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDO29CQUN0QyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDcEMsT0FBTztZQUNYLEtBQUssb0JBQVUsQ0FBQyxVQUFVO2dCQUN0QixJQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDO29CQUN0QyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDcEMsT0FBTztZQUNYLEtBQUssb0JBQVUsQ0FBQyxhQUFhO2dCQUN6QixJQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDO29CQUN0QyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDcEMsT0FBTztZQUNYLEtBQUssb0JBQVUsQ0FBQyxRQUFRO2dCQUNwQixJQUFHLHFCQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDO29CQUN0QyxxQkFBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDcEMsT0FBTztTQUNkO1FBQ0QsK0NBQStDO0lBRW5ELENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FqZ0JBLEFBaWdCQyxJQUFBOzs7OztBQzNnQkQsb0NBQStCO0FBQy9CLHNEQUFpRDtBQUVqRDtJQUFvQywwQkFBTTtJQUV0QyxnQkFBWSxJQUFJLEVBQUMsSUFBVyxFQUFDLEtBQUs7ZUFDOUIsa0JBQU0sSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELGlCQUFpQjtJQUNWLDZCQUFZLEdBQW5CO1FBRUksbUJBQW1CO1FBQ25CLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQzNCLGFBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxPQUFPO0lBQ0MseUJBQVEsR0FBaEI7UUFFSSxJQUFJLE1BQU0sR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekIsSUFBRyxNQUFNLEdBQUMsR0FBRyxFQUNiO1lBQ0ksTUFBTTtZQUNOLHFCQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsbUJBQW1CO1FBQ25CLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQzNCLGFBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxXQUFXO0lBQ0gsMkJBQVUsR0FBbEI7UUFFSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUUsR0FBRyxDQUFDO0lBQ3pDLENBQUM7SUFFRixVQUFVO0lBQ0EsZ0NBQWUsR0FBekI7UUFFSSw2RkFBNkY7UUFDN0YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQkFBaUI7SUFDUCwwQkFBUyxHQUFuQjtRQUVJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELElBQUksVUFBVSxHQUFpQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUUsRUFDcEI7WUFDSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6QyxJQUFHLFVBQVUsS0FBSyxJQUFJLENBQUMsUUFBUTtnQkFBRSxNQUFNO1NBQzFDO1FBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVKLGFBQUM7QUFBRCxDQTFEQSxBQTBEQyxDQTFEbUMsZ0JBQU0sR0EwRHpDOzs7OztBQzdERCxvQ0FBK0I7QUFDL0Isd0NBQW1DO0FBQ25DLHNEQUFpRDtBQUdqRDtJQUFvQywwQkFBTTtJQUV0QyxnQkFBWSxJQUFJLEVBQUMsSUFBVyxFQUFDLEtBQUs7ZUFDOUIsa0JBQU0sSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELFVBQVU7SUFDQSxnQ0FBZSxHQUF6QjtRQUVJLDZGQUE2RjtRQUM3RixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGlCQUFpQjtJQUNQLDBCQUFTLEdBQW5CO1FBRUksUUFBUTtRQUNSLElBQUksV0FBVyxHQUFHLGNBQUksQ0FBQyxjQUFjLENBQUMscUJBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM5RSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxLQUFLLENBQUM7UUFDVixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsV0FBVyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFDcEM7WUFDSSxJQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7Z0JBQUUsTUFBTTtZQUM1QixJQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksTUFBTSxJQUFJLFdBQVcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQ3hEO2dCQUNJLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDYjtTQUNKO1FBQ0QsSUFBRyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUFBLE9BQU87U0FBQztRQUN2RCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLFVBQVUsR0FBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLEVBQ3BCO1lBQ0ksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekMsSUFBRyxVQUFVLEtBQUssSUFBSSxDQUFDLFFBQVE7Z0JBQUUsTUFBTTtTQUMxQztRQUNELFFBQU8sS0FBSyxFQUNaLEVBQUssK0JBQStCO1lBQ2hDLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQWdCLENBQUMsQ0FBQztnQkFDNUYsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBZ0IsQ0FBQyxDQUFDO2dCQUN4RixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBQ0wsYUFBQztBQUFELENBdkRBLEFBdURDLENBdkRtQyxnQkFBTSxHQXVEekM7Ozs7O0FDNURELG9DQUErQjtBQUMvQixzREFBaUQ7QUFFakQ7SUFBb0MsMEJBQU07SUFDdEMsZ0JBQVksSUFBSSxFQUFDLElBQVcsRUFBQyxLQUFLO2VBQzlCLGtCQUFNLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxtQkFBbUI7SUFDWiw2QkFBWSxHQUFuQjtRQUVJLG1CQUFtQjtRQUNuQixJQUFJLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUMzQixhQUFhO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsT0FBTztJQUNDLHlCQUFRLEdBQWhCO1FBRUksSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLElBQUcsTUFBTSxHQUFDLEdBQUcsRUFDYjtZQUNJLE1BQU07WUFDTixxQkFBVyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsbUJBQW1CO1FBQ25CLElBQUksSUFBSSxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQzNCLGFBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxXQUFXO0lBQ0gsMkJBQVUsR0FBbEI7UUFFSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUUsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFDRCxRQUFRO0lBQ1QsVUFBVTtJQUNBLGdDQUFlLEdBQXpCO1FBRUksNkZBQTZGO1FBQzdGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsaUJBQWlCO0lBQ1AsMEJBQVMsR0FBbkI7UUFFSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLFVBQVUsR0FBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLEVBQ3BCO1lBQ0ksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekMsSUFBRyxVQUFVLEtBQUssSUFBSSxDQUFDLFFBQVE7Z0JBQUUsTUFBTTtTQUMxQztRQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDSixhQUFDO0FBQUQsQ0F4REEsQUF3REMsQ0F4RG1DLGdCQUFNLEdBd0R6Qzs7Ozs7QUMzREQsb0NBQStCO0FBRS9CLHNEQUFpRDtBQUVqRDtJQUF1Qyw2QkFBTTtJQUV6QyxtQkFBWSxJQUFJLEVBQUMsSUFBVyxFQUFDLEtBQUs7ZUFDOUIsa0JBQU0sSUFBSSxFQUFDLElBQUksRUFBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUdELG1CQUFtQjtJQUNaLHdDQUFvQixHQUEzQjtRQUVJLGVBQWU7UUFDZixJQUFJLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUMzQixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxXQUFXO0lBQ0gsb0NBQWdCLEdBQXhCO1FBRUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFFLEdBQUcsQ0FBQztRQUNqQyxlQUFlO1FBQ2YsSUFBSSxJQUFJLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDM0IsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxFQUFFLEdBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0QsVUFBVTtJQUNBLG1DQUFlLEdBQXpCO1FBRUksNkZBQTZGO1FBQzdGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsaUJBQWlCO0lBQ1AsNkJBQVMsR0FBbkI7UUFFSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQWdCLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQXRDQSxBQXNDQyxDQXRDc0MsZ0JBQU0sR0FzQzVDOzs7OztBQzFDRCxvQ0FBK0I7QUFFL0Isc0RBQWlEO0FBRWpEO0lBQWtDLHdCQUFNO0lBRXBDLGNBQVksSUFBSSxFQUFDLElBQVcsRUFBQyxLQUFLO2VBQzlCLGtCQUFNLElBQUksRUFBQyxJQUFJLEVBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxtQkFBbUI7SUFDWiw2QkFBYyxHQUFyQjtRQUVJLGVBQWU7UUFDZixJQUFJLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUMzQixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsa0JBQWtCO0lBQ1YsOEJBQWUsR0FBdkI7UUFFSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUUsR0FBRyxDQUFDO1FBQ3JDLGVBQWU7UUFDZixJQUFJLElBQUksR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUMzQixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUYsVUFBVTtJQUNBLDhCQUFlLEdBQXpCO1FBRUksNkZBQTZGO1FBQzdGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsaUJBQWlCO0lBQ1Asd0JBQVMsR0FBbkI7UUFFSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLFVBQVUsR0FBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFLEVBQ3BCO1lBQ0ksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekMsSUFBRyxVQUFVLEtBQUssSUFBSSxDQUFDLFFBQVE7Z0JBQUUsTUFBTTtTQUMxQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDSixXQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsQ0E3Q2lDLGdCQUFNLEdBNkN2Qzs7Ozs7QUNqREQ7SUFBb0MsMEJBQVc7SUFFM0M7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0ksSUFBSSxXQUFXLEdBQUcsR0FBRyxHQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLE1BQU07UUFDakYsMkNBQTJDO1FBQzNDLElBQUcsV0FBVyxHQUFHLEdBQUc7WUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQWdCLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUMxRixJQUFJLENBQUMsS0FBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUUsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FaQSxBQVlDLENBWm1DLElBQUksQ0FBQyxNQUFNLEdBWTlDOzs7OztBQ1pELGtFQUE2RDtBQUM3RCxnREFBd0M7QUFDeEMsc0RBQWlEO0FBQ2pELGtEQUE2QztBQUM3QywwREFBcUQ7QUFDckQsc0RBQWlEO0FBQ2pELGtEQUE2QztBQUM3QyxzREFBaUQ7QUFDakQsa0RBQTZDO0FBRzdDOztHQUVHO0FBQ0g7SUFBdUMsNkJBQWM7SUE0QmpEO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUVJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFBLFNBQVM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUEsU0FBUztRQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBQzNCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBLFFBQVE7UUFDekIscUJBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFdBQVc7SUFDSCxnQ0FBWSxHQUFwQjtRQUVJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLDJCQUFpQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLHVCQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxtQkFBUyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVU7SUFDRiw0QkFBUSxHQUFoQjtRQUVJLG1EQUFtRDtRQUNuRCxzQkFBc0I7UUFDdEIsS0FBSztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVELFlBQVk7UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxRQUFRO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0UsUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLFFBQVE7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2RSxTQUFTO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxvQkFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbkYsU0FBUztRQUNULDJGQUEyRjtRQUMzRixRQUFRO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxvQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELFVBQVU7SUFDRixpQ0FBYSxHQUFyQjtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLE1BQU07UUFDbEYsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsMkNBQTJDO0lBQzNDLFVBQVU7SUFDRiw2QkFBUyxHQUFqQjtRQUVJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELFFBQVE7SUFDQSw0QkFBUSxHQUFoQjtRQUVJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELFVBQVU7SUFDRiwyQkFBTyxHQUFmO1FBRUksSUFBRyxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQzlCLEVBQUMsSUFBSTtZQUNELHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BCO2FBRUQsRUFBQyxJQUFJO1lBQ0QscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUNBLDZCQUFTLEdBQWpCO1FBRUksSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsUUFBUTtJQUNBLDRCQUFRLEdBQWhCO1FBRUksSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTdFLENBQUM7SUFFRCxRQUFRO0lBQ0EsNkJBQVMsR0FBakI7UUFFSSxJQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3hCLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2xCO1lBQ0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUQsNkRBQTZEO1lBQ3pELElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUksQ0FBQyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUY7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUN4QyxDQUFDO0lBRUQsVUFBVTtJQUNGLDZCQUFTLEdBQWpCO1FBRUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELFVBQVU7SUFDRiwyQkFBTyxHQUFmO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxlQUFlO0lBQ1AsK0JBQVcsR0FBbkIsVUFBb0IsSUFBSTtRQUVwQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsaUJBQWlCO0lBQ1Qsb0NBQWdCLEdBQXhCO1FBRUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksR0FBQyxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksR0FBQyxxQkFBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBQyxxQkFBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksR0FBQyxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksR0FBQyxxQkFBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdkUsQ0FBQztJQUlELDJCQUEyQjtJQUMzQixXQUFXO0lBQ0osK0JBQVcsR0FBbEI7SUFHQSxDQUFDO0lBQ0QsNENBQTRDO0lBQzVDLFlBQVk7SUFDSiw2QkFBUyxHQUFqQjtRQUVJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFBLFVBQVU7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUEsT0FBTztJQUNuRCxDQUFDO0lBR0QsV0FBVztJQUNILDZCQUFTLEdBQWpCO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsb0JBQVUsQ0FBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLHFCQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLG9CQUFVLENBQUMsYUFBYSxFQUFDLElBQUksRUFBQyxxQkFBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxvQkFBVSxDQUFDLGFBQWEsRUFBQyxJQUFJLEVBQUMscUJBQVcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBQ0QscURBQXFEO0lBQ3JEOzs7VUFHTTtJQUNFLGdDQUFZLEdBQXBCO1FBRUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxXQUFXLEdBQUcscUJBQVcsQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxFQUFFLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFHLEtBQUs7UUFDckMsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBLE9BQU87UUFDaEQsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFBLE9BQU87UUFDaEQsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBLFFBQVE7UUFDOUMsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBLE9BQU87UUFDN0MsSUFBSSxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUEsZUFBZTtRQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxXQUFXLEdBQUksZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxHQUFJLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBRWpDLElBQUcsV0FBVyxHQUFHLE1BQU0sRUFDdkI7WUFDSSxJQUFJO1lBQ0osSUFBRyxJQUFJLENBQUMsY0FBYyxJQUFJLFFBQVEsR0FBQyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsRUFDekQ7Z0JBQ0ksV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7YUFDM0I7U0FDSjtRQUNELElBQUcsVUFBVSxHQUFHLE1BQU0sRUFDdEI7WUFDSSxjQUFjO1lBQ2QsSUFBRyxJQUFJLENBQUMsYUFBYSxJQUFJLFFBQVEsR0FBQyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7Z0JBQ3hELFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUN4QjtZQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUEsT0FBTztZQUNwQyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFBLE9BQU87WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsS0FBSSxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUMsQ0FBQyxHQUFDLFdBQVcsR0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsTUFBTTthQUM1QztnQkFDSSxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xDO1lBQ0QsS0FBSSxJQUFJLENBQUMsR0FBRSxDQUFDLEVBQUMsQ0FBQyxHQUFDLFVBQVUsR0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsTUFBTTthQUMzQztnQkFDSSxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDO1NBQ0o7SUFDTCxDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQXRRQSxBQXNRQyxDQXRRc0MsY0FBRSxDQUFDLFdBQVcsR0FzUXBEOzs7OztBQ3BSRDtJQUFzQyw0QkFBVztJQUM3QztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELDJCQUFRLEdBQVI7SUFHQSxDQUFDO0lBR0QsMEJBQU8sR0FBUDtRQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQWZBLEFBZUMsQ0FmcUMsSUFBSSxDQUFDLE1BQU0sR0FlaEQ7Ozs7O0FDZkQ7SUFBdUMsNkJBQVc7SUFDOUM7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFFRCw0QkFBUSxHQUFSO0lBR0EsQ0FBQztJQUdELDJCQUFPLEdBQVA7UUFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxnQkFBQztBQUFELENBZkEsQUFlQyxDQWZzQyxJQUFJLENBQUMsTUFBTSxHQWVqRDs7Ozs7QUNmRCxtREFBOEM7QUFFOUM7SUFBQTtJQXFLQSxDQUFDO0lBcEtHLFNBQVM7SUFDSyxpQkFBWSxHQUExQixVQUEyQixFQUFTLEVBQUMsRUFBUyxFQUFDLEVBQVMsRUFBQyxFQUFTLEVBQUMsU0FBUztRQUV4RSxRQUFRO1FBQ1IsSUFBSSxDQUFDLEdBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsUUFBUTtRQUNSLElBQUksQ0FBQyxHQUFZLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDekIsUUFBUTtRQUNSLElBQUksQ0FBQyxHQUFZLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFekIsSUFBRyxTQUFTLElBQUksS0FBSyxFQUNyQjtZQUNJLGlDQUFpQztZQUNqQyxPQUFPLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO2FBQ0ksSUFBRyxTQUFTLElBQUksS0FBSyxFQUMxQjtZQUNJLGlDQUFpQztZQUNqQyxPQUFPLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO2FBRUQ7WUFDSSwyQ0FBMkM7WUFDM0MsT0FBTyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFFRCx3RUFBd0U7SUFDMUQsbUJBQWMsR0FBNUIsVUFBNkIsT0FBTyxFQUFDLE9BQU87UUFFeEMsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFFLE9BQU8sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO1lBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUM7U0FDZjthQUNHO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVyQixPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFHYSxzQkFBaUIsR0FBL0IsVUFBZ0MsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQztRQUUvQixJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUcsR0FBRyxJQUFFLENBQUMsSUFBRSxHQUFHLEdBQUMsQ0FBQyxFQUFDO1lBQ2IsUUFBUSxHQUFFLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFDO1NBQzNDO2FBQUssSUFBRyxHQUFHLEdBQUMsQ0FBQyxJQUFFLEdBQUcsSUFBRSxDQUFDLEVBQUM7WUFDbkIsUUFBUSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUMsRUFBRSxDQUFDO1NBQzFDO2FBQUssSUFBRyxHQUFHLElBQUUsQ0FBQyxJQUFFLEdBQUcsR0FBQyxDQUFDLEVBQUM7WUFDbkIsUUFBUSxHQUFDLEVBQUUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO2FBQUssSUFBRyxHQUFHLEdBQUMsQ0FBQyxJQUFFLEdBQUcsSUFBRSxDQUFDLEVBQUM7WUFDbkIsUUFBUSxHQUFFLEVBQUUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBRyxDQUFDLEdBQUcsQ0FBQztZQUFFLFFBQVEsSUFBSSxHQUFHLENBQUM7UUFDMUIsT0FBTyxRQUFRLENBQUM7SUFDeEIsQ0FBQztJQUVEOztNQUVFO0lBQ1ksZ0JBQVcsR0FBekIsVUFBMEIsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRTtRQUVqQyxJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUcsR0FBRyxJQUFHLENBQUMsSUFBSSxHQUFHLEdBQUMsQ0FBQyxFQUFDO1lBQ2hCLFFBQVEsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUcsR0FBRyxHQUFFLENBQUMsSUFBSSxHQUFHLElBQUUsQ0FBQyxFQUFDO1lBQ2hCLFFBQVEsR0FBRyxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUM7UUFDRCxJQUFHLEdBQUcsR0FBRSxDQUFDLElBQUksR0FBRyxJQUFFLENBQUMsRUFDbkI7WUFDSSxRQUFRLEdBQUcsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBRyxHQUFHLElBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBQyxDQUFDLEVBQ25CO1lBQ0ksUUFBUSxHQUFHLEdBQUcsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUdEOzs7T0FHRztJQUNXLGdCQUFXLEdBQXpCLFVBQTBCLFFBQVEsRUFBQyxVQUFVO1FBRXpDLElBQUksQ0FBQyxDQUFFO1FBQ1AsSUFBSSxLQUFLLENBQUM7UUFDVixJQUFHLFFBQVEsR0FBRyxDQUFDLEVBQ2Y7WUFDSSxRQUFRLElBQUksR0FBRyxHQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsR0FBQyxDQUFDLEVBQzdCO1lBQ0ksUUFBUSxJQUFJLEdBQUcsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QztRQUNELENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUcsVUFBVSxJQUFJLEtBQUssRUFDdEI7WUFDSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksUUFBUSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLEdBQUcsSUFBSSxRQUFRLElBQUUsR0FBRyxDQUFDO2dCQUFHLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN4RixnQ0FBZ0M7U0FDbkM7YUFFRDtZQUNJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFHLENBQUMsUUFBUSxHQUFDLEdBQUcsSUFBSSxRQUFRLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsR0FBRyxJQUFJLFFBQVEsSUFBRSxHQUFHLENBQUM7Z0JBQUUsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3hGLGdDQUFnQztTQUNuQztRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNXLG9CQUFlLEdBQTdCLFVBQThCLENBQUssRUFBQyxDQUFLO1FBRXJDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7Ozs7U0FLSztJQUNTLGNBQVMsR0FBdkIsVUFBd0IsRUFBRSxFQUFDLEtBQUs7UUFFNUIsSUFBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUMvQixJQUFJLFNBQVMsR0FBUSxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLENBQUM7UUFDOUQsSUFBSSxVQUFVLEdBQVEsRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxHQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxDQUFDO1FBQy9ELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFHLFdBQVcsSUFBSSxZQUFZO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDNUMsT0FBUSxLQUFLLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7OztNQUtFO0lBQ1ksbUJBQWMsR0FBNUIsVUFBNkIsR0FBRztRQUU1QixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBQzFCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQzlCO1lBQ0ksTUFBTSxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBQ0wsV0FBQztBQUFELENBcktBLEFBcUtDLElBQUE7Ozs7O0FDcktELElBQU8sTUFBTSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDMUIsSUFBTyxLQUFLLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN4QixJQUFjLEVBQUUsQ0FpRmY7QUFqRkQsV0FBYyxFQUFFO0lBQ1o7UUFBMkIseUJBQU07UUFPN0I7bUJBQWUsaUJBQU87UUFBQSxDQUFDO1FBQ3ZCLDhCQUFjLEdBQWQ7WUFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0FaQSxBQVlDLENBWjBCLE1BQU0sR0FZaEM7SUFaWSxRQUFLLFFBWWpCLENBQUE7SUFDRDtRQUFpQywrQkFBSztRQTZEbEM7bUJBQWUsaUJBQU87UUFBQSxDQUFDO1FBQ3ZCLG9DQUFjLEdBQWQ7WUFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDTCxrQkFBQztJQUFELENBbEVBLEFBa0VDLENBbEVnQyxLQUFLLEdBa0VyQztJQWxFWSxjQUFXLGNBa0V2QixDQUFBO0FBQ0wsQ0FBQyxFQWpGYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUFpRmY7QUFDRCxXQUFjLEVBQUU7SUFBQyxJQUFBLEdBQUcsQ0FZbkI7SUFaZ0IsV0FBQSxHQUFHO1FBQ2hCO1lBQXFDLG1DQUFLO1lBS3RDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2Qix3Q0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUNMLHNCQUFDO1FBQUQsQ0FWQSxBQVVDLENBVm9DLEtBQUssR0FVekM7UUFWWSxtQkFBZSxrQkFVM0IsQ0FBQTtJQUNMLENBQUMsRUFaZ0IsR0FBRyxHQUFILE1BQUcsS0FBSCxNQUFHLFFBWW5CO0FBQUQsQ0FBQyxFQVphLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQVlmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWcge1xyXG4gICAgLyoq5Lq656eNIC0g5pmu6YCa5Lq6ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENPTU1PTl9NQU4gOiBzdHJpbmcgPSBcImNvbW1vblwiO1xyXG4gICAgLyoq5Lq656eNIC0g55uX6LS8ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFJPQkJFUl9NQU4gOiBzdHJpbmcgPSBcInJvYmJlclwiO1xyXG4gICAgLyoq5Lq656eNIC0g5Zyf5YyqICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEJBTkRJVF9NQU4gOiBzdHJpbmcgPSBcImJhbmRpdFwiO1xyXG4gICAgLyoq5Lq656eNIC0g5piO5pifICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUQVJfTUFOIDogc3RyaW5nID0gXCJzdGFyXCI7XHJcbiAgICAvKirkurrnp40gLSDnp5HlrablrrYgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU0NJRU5USVNUX01BTiA6IHN0cmluZyA9IFwic2NpZW50aXN0XCI7XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeW7uuetkVxyXG4gICAgLyoq5Yy76ZmiICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEhPU1BJVEFMIDogbnVtYmVyID0gMTtcclxuICAgIC8qKuWGm+mYnyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBBUk1ZIDogbnVtYmVyID0gMjtcclxuICAgIC8qKuWGnOWcuiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGQVJNOiBudW1iZXIgPSAzO1xyXG4gICAgLyoq56eR5oqAICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFQ0hOT0xPR1k6IG51bWJlciA9IDQ7XHJcbiAgICAvKirkuovku7bmiL8g5paw6Ze75oi/ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UX0hPVVNFOiBudW1iZXIgPSA1O1xyXG4gICAgLyoq55qH5a6rICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBBTEFDRTogbnVtYmVyID0gNjtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeajgOa1i+eCueeahOmXtOi3nVxyXG4gICAgLyoq5qOA5rWL54K56Ze06LedICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfRElDIDogbnVtYmVyID0gNTtcclxuICAgIC8qKumAn+W6piAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBURVNUX1BPSU5UX1NQRUVEIDogbnVtYmVyID0gMC40O1xyXG4gICAgLyoq5peL6L2s6KeS5bqm5YGP56e7ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfUk8gOiBudW1iZXIgPSAxMDtcclxuICAgIC8qKuS6uuexu+eUn+S6p+mXtOmalFMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUEVSU09OX0NSRUFURV9USU1FIDogbnVtYmVyID0gMTtcclxuICAgIC8qKuebkea1i+eCueaVsOmHjyovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFU1RfUE9JTlRfQ09VTlQgOiBudW1iZXIgPSA2O1xyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3kuLvlgLxcclxuICAgIC8qKuWbveWutui0ouaUvyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX01PTkVZIDogc3RyaW5nID0gXCJtb25leVwiO1xyXG4gICAgLyoq5Zu95a625Lq65Y+jICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUE9QVUxBVElPTiA6IHN0cmluZz1cInBvcHVsYXRpb25cIjtcclxuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNQUlOX1BPUFVMQVJTVVBQT1JUIDogc3RyaW5nID0gXCJwb3B1bGFyU3VwcG9ydFwiO1xyXG4gICAgLyoq5Zu95a6256eR5oqAICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fVEVDSE5PTE9HWSA6IHN0cmluZyA9IFwidGVjaG5vbG9neVwiO1xyXG4gICAgLyoq5Zu95a625aiB5pybICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fUFJFU1RJR0UgOiBzdHJpbmcgPSBcInByZXN0aWdlXCI7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pe26Ze0XHJcbiAgICAvKirkupTlpKfkuLvlgLzop6blj5Hml7bpl7QgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVElNRV9NQUlOREFUQSA6IG51bWJlciA9IDEyKjYwKjYwO1xyXG4gICAgXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3lhbbku5ZcclxuICAgIC8qKuS4gOWkqeaXtumXtC/liIbpkp8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgT05FX0RBWTpudW1iZXI9MTAqNjA7XHJcbiAgICAvKirnsq7po5/nlJ/kuqfnjofmjaLpkrHkuLTnlYzlgLwgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR1JBSU5fRVhDSEFOR0VNT05FWV9QRVJDRU5UPTEuNTtcclxuICAgIC8qKumSseaNoueyrumjn+axh+eOhyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNT05FWVRPR1JBSU49MjtcclxufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xyXG4vKipcclxuICog6LSt5Lmw5qGGIOmAmueUqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV5RGlhbG9nIGV4dGVuZHMgdWkuQnV5VUl7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLndpZHRoPTgwMDtcclxuICAgICAgICB0aGlzLmhlaWdodD00MDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTp2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKuazqOWGjOS6i+S7tiAqL1xyXG4gICAgcHJpdmF0ZSBhZGRFdmVudHMoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idG5fYnV5Lm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmJ1eUNsaWNrKTtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZUNsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirngrnlh7votK3kubAgKi9cclxuICAgIHByaXZhdGUgYnV5Q2xpY2soKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGN1cnJcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC8qKueCueWHu+WFs+mXrSAqL1xyXG4gICAgcHJpdmF0ZSBjbG9zZUNsaWNrKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH0gXHJcbn0iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi4vQ29uZmlnL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVyZmViL1Blb3BsZVwiO1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNruS4reW/gyDmiYDmnInnmoTmlbDmja5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50cnlEYXRhe1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogQ291bnRyeURhdGEgPSBuZXcgQ291bnRyeURhdGEoKTtcclxuICAgIC8qKioqKioqKioqKioqKuS4u+aVsOaNrioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgLyoq5Zu95a626LSi5pS/ICovXHJcbiAgICBwdWJsaWMgbW9uZXkgOiBudW1iZXIgPSAxMDAwMDtcclxuICAgIC8qKuWbveWutuS6uuWPoyAqL1xyXG4gICAgcHVibGljIHBvcHVsYXRpb24gOiBudW1iZXI9MTAwO1xyXG4gICAgLyoq5Zu95a625bm456aP5bqmICovXHJcbiAgICBwdWJsaWMgcG9wdWxhclN1cHBvcnQgOiBudW1iZXIgPSA1MDtcclxuICAgIC8qKuWbveWutuenkeaKgCAqL1xyXG4gICAgcHVibGljIHRlY2hub2xvZ3kgOiBudW1iZXIgPSA1MDtcclxuICAgIC8qKuWbveWutuWjsOacmyAqL1xyXG4gICAgcHVibGljIHByZXN0aWdlIDogbnVtYmVyID0gNTA7XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKuWJr+aVsOaNrioqKioqKioqKioqKioqKioqL1xyXG4gICAgLy8tLS0tLS0tLeS4u+aVsOaNruW9seWTjVxyXG4gICAgLy/lm7rlrprmlK/lh7pcclxuICAgIC8qKuWGm+i0uSAqL1xyXG4gICAgcHVibGljIGFybXlDb3N0IDogbnVtYmVyID0gMTAwO1xyXG4gICAgLyoq5pS/5bqc6LS555SoICovXHJcbiAgICBwdWJsaWMgZ292ZXJuQ29zdCA6IG51bWJlciA9IDEwMDtcclxuICAgIC8qKuenkeaKgOi0ueeUqCAqL1xyXG4gICAgcHVibGljIHRlY2hub2xvZ3lDb3N0IDogbnVtYmVyID0gMTAwO1xyXG4gICAgLyoq56iO5pS2546HICovXHJcbiAgICBwdWJsaWMgdGF4IDogbnVtYmVyID0gMC4wNTtcclxuICAgIC8qKueyrumjn+a2iOiAl+mHjyAo5Lq65Z2H5raI6ICX6YePKSAqL1xyXG4gICAgcHVibGljIGdyYWluUGVyQ29zdCA6IG51bWJlciA9IDE7XHJcbiAgICBcclxuXHJcbiAgICAvL+WPmOWKqOeOh1xyXG4gICAgLyoq57Ku6aOf5Lqn6YePICjkurrlnYfkuqfph48pKi9cclxuICAgIHB1YmxpYyBncmFpblBlckFkZCA6IG51bWJlciA9IDE7XHJcbiAgICAvKirnsq7po5/lupPlrZggKi9cclxuICAgIHB1YmxpYyBncmFpblN0b2NrOm51bWJlcj0wO1xyXG4gICAgLyoq5Yab6LS55YeP5bCR546HICovXHJcbiAgICBwdWJsaWMgYXJteVBlcmNlbnQ6bnVtYmVyPTAuMjtcclxuICAgIC8qKkdEUCDmjKPpkrHog73lipvvvIzmr4/kurrmr4/lpKnog73kuqflpJrlsJHpkrEgKi9cclxuICAgIHB1YmxpYyBHRFAgOiBudW1iZXIgPSAxMDtcclxuXHJcblxyXG4gICAgLyoq6L+b5Z+O5pWwIOebruagh+WAvDJtaW4qL1xyXG4gICAgcHVibGljIGVudGVyUGVvcGxlIDogbnVtYmVyID0gNTA7XHJcbiAgICAvKirlh7rln47mlbAg55uu5qCH5YC8Mm1pbiovXHJcbiAgICBwdWJsaWMgZXhpdFBlb3BsZSA6IG51bWJlciA9IDUwO1xyXG4gICAgLyoq5Lq65Y+j5q+U5L6L5pWwIOi/m+WfjuaVsC/lh7rln47mlbAgMm1pbiovXHJcbiAgICBwdWJsaWMgcGVyY2VudCA6IG51bWJlciA9IDE7XHJcbiAgICAvKirln47lpJbkurrlj6PmlbDnu4QqL1xyXG4gICAgcHVibGljIGFycl9vdXRQZW9wbGUgOiBBcnJheTxQZW9wbGU+O1xyXG4gICAgLyoq5Z+O5YaF5Lq65Y+j5pWw57uEICovXHJcbiAgICBwdWJsaWMgYXJyX2luUGVvcGxlIDogQXJyYXk8UGVvcGxlPjtcclxuICAgIC8qKuWHuuWfjuS6uuWPoyDlrp7pmYXlgLwvMm1pbiAqL1xyXG4gICAgcHVibGljIF9vdXRlclBlb3BsZSA6IG51bWJlcjtcclxuICAgIC8qKui/m+mXqOS6uuWPoyDlrp7pmYXlgLwvMm1pbiAqL1xyXG4gICAgcHVibGljIF9pbm5lclBlb3BsZSA6IG51bWJlcjtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5pmu6YCa5Lq65Y+j5Y2g5q+UXHJcbiAgICAvKiowLeWMu+eUnyAxLeitpuWvnyAyLeWVhuS6uiAtM+a4uOaJi+WlvemXsiAtNOWGnOawkSovXHJcbiAgICBwdWJsaWMgYXJyX3BlcnNvblBlcmNlbnROYW1lIDogQXJyYXk8c3RyaW5nPiA9IFtcInBlcmNlbnREb2N0b3JcIixcInBlcmNlbnRQb2xpY1wiLFwicGVyY2VudFNob3BlclwiLFwicGVyY2VudE5vdGhpbmdcIixcInBlcmNlbnRGYXJtZXJcIl07XHJcbiAgICAvKirmma7pgJrkurrkuK0g5Yy755Sf55qE5Y2g5q+UKi9cclxuICAgIHB1YmxpYyBwZXJjZW50RG9jdG9yIDogbnVtYmVyID0gMC4wMjtcclxuICAgIC8qKuaZrumAmuS6uuenjSDorablr5/ljaDmr5QgKi9cclxuICAgIHB1YmxpYyBwZXJjZW50UG9saWMgOiBudW1iZXIgPSAwLjAzO1xyXG4gICAgLyoq5pmu6YCa5Lq656eNIOWVhuS6uueahOWNoOavlCAqL1xyXG4gICAgcHVibGljIHBlcmNlbnRTaG9wZXIgOiBudW1iZXIgPSAwLjE1O1xyXG4gICAgLyoq5ri45omL5aW96ZeyICovXHJcbiAgICBwdWJsaWMgcGVyY2VudE5vdGhpbmcgOiBudW1iZXIgPSAwLjE7XHJcbiAgICAvKirlhpzmsJEgKi9cclxuICAgIHB1YmxpYyBwZXJjZW50RmFybWVyIDogbnVtYmVyID0gMC43O1xyXG5cclxuICAgIC8vLS0tLS0tLS3lvbHlk40g44CQ5Li75pWw5o2u44CRLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0t5LqL5Lu25pWw5o2uXHJcbiAgICAvKirnmJ/nlqsgIDAgMSAyIDMgNCA1IDAt5piv5rKh5Y+R55SfKi9cclxuICAgIHB1YmxpYyBwZXN0IDogbnVtYmVyID0gMDtcclxuICAgIC8qKuWcsOmchyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8gKi9cclxuICAgIHB1YmxpYyBuYXR1cmFsRGlzYXN0ZXIgOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5oiY5LmxICAwIDEgMiAzIDQgNSAwLeaYr+ayoeWPkeeUnyovXHJcbiAgICBwdWJsaWMgd2FyIDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLy0tLS0tLS0t6IGM5Lia5Lq65pWwXHJcbiAgICBwdWJsaWMgYXJyX1Blb3BsZSA6IEFycmF5PHN0cmluZz4gPSBbXCJjb21tb25cIixcInNjaWVudGlzdFwiLFwic3RhclwiLFwiYmFuZGl0XCIsXCJyb2JiZXJcIl07XHJcbiAgICAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xyXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDk1O1xyXG4gICAgLyoq56eR5a2m5a62IFNTUyovXHJcbiAgICBwdWJsaWMgc2NpZW50aXN0IDogbnVtYmVyID0gMTtcclxuICAgIC8qKuaYjuaYnyBTUyovXHJcbiAgICBwdWJsaWMgc3RhciA6IG51bWJlciA9IDI7XHJcbiAgICAvKirlnJ/ljKogLVMgKi9cclxuICAgIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAxO1xyXG4gICAgLyoq55uX6LS8IC1BICovXHJcbiAgICBwdWJsaWMgcm9iYmVyIDogbnVtYmVyID0gMTtcclxuICAgICAgICAvLyAvKirmma7pgJrkurogQSAg5pmu6YCa5Lq65Lit5Lya5Lqn55Sf5Yy755SfIOitpuWvnyDnrYnmraPluLjogYzkuJoqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBjb21tb24gOiBudW1iZXIgPSAxO1xyXG4gICAgICAgIC8vIC8qKuenkeWtpuWutiBTU1MqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuaYjuaYnyBTUyovXHJcbiAgICAgICAgLy8gcHVibGljIHN0YXIgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuWcn+WMqiAtUyAqL1xyXG4gICAgICAgIC8vIHB1YmxpYyBiYW5kaXQgOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIC8qKuebl+i0vCAtQSAqL1xyXG4gICAgICAgIC8vIHB1YmxpYyByb2JiZXIgOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq5bey55Sf5oiQ55qE5Lq656eNICAwIOaZrumAmiAgIDHnp5HlrablrrYgIDLmmI7mmJ8gM+Wcn+WMqiA055uX6LS8Ki9cclxuICAgIHB1YmxpYyBhbHJlYWR5Q3JlYXRlIDogQXJyYXk8bnVtYmVyPiA9IFswLDAsMCwwLDBdO1xyXG5cclxuICAgIC8vLS0tLS0tLS3ln47pl6hcclxuICAgIC8qKumXqOaYr+WQpuaJk+W8gCovXHJcbiAgICBwdWJsaWMgaXNEb29yT3BlbiA6IGJvb2xlYW49dHJ1ZTtcclxuICAgIC8qKuetm+afpeiDveWKmyDlkK/liqjnibnmrorpl6jnmoTml7blgJkgIOetm+afpeiDveWKm+eUn+aViCovXHJcbiAgICBwdWJsaWMgcHJlcGFyYXRpb24gOiBudW1iZXIgPSAwLjU7XHJcbiAgICAvKirnibnmrorpl6gg562b5p+lIDEt6Ziy5q2i6L+b5YWlICAgMi3pgoDor7fov5vlhaUqL1xyXG4gICAgLy8gcHVibGljIGtlZXBTZWxlY3QgOiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWMuuWfn1xyXG4gICAgLyoq5aKZ5YaF5Yy65Z+f5YiS5YiGICovXHJcbiAgICBwdWJsaWMgYXJyX0xlZnRBcmVhIDogQXJyYXk8YW55PjtcclxuICAgIHB1YmxpYyBhcnJfUmlnaHRBcmVhIDogQXJyYXk8YW55PjtcclxuICAgIFxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS3ls7DlgLxcclxuICAgIC8qKuWbveWutuW5uOemj+W6puWzsOWAvCAqL1xyXG4gICAgcHVibGljIHBvcHVsYXJTdXBwb3J0TWF4IDogbnVtYmVyID0gMTAwO1xyXG4gICAgLyoq5Zu95a6256eR5oqA5bOw5YC8ICovXHJcbiAgICBwdWJsaWMgdGVjaG5vbG9neU1heCA6IG51bWJlciA9IDEwMDtcclxuICAgIC8qKuWbveWutuWjsOacm+WzsOWAvCAqL1xyXG4gICAgcHVibGljIHByZXN0aWdlTWF4IDogbnVtYmVyID0gMTAwO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYSA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgICAgICB0aGlzLmFycl9pblBlb3BsZSA9IG5ldyBBcnJheTxQZW9wbGU+KCk7XHJcbiAgICAgICAgdGhpcy5hcnJfb3V0UGVvcGxlID0gbmV3IEFycmF5PFBlb3BsZT4oKTtcclxuICAgICAgICB0aGlzLl9pbm5lclBlb3BsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fb3V0ZXJQZW9wbGUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W5Yy65Z+fICovXHJcbiAgICBwdWJsaWMgc2V0QXJlYSh2aWV3IDogTGF5YS5Ob2RlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSB2aWV3Ll9jaGlsZHJlbjtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPGNoaWxkcmVuLmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihjaGlsZHJlbltpXS5uYW1lID09IFwicGFsYWNlXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyX0xlZnRBcmVhLnB1c2goY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2goY2hpbGRyZW5baV0pOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGNoaWxkcmVuW2ldLng8OTgxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYS5wdXNoKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyX1JpZ2h0QXJlYS5wdXNoKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFycl9MZWZ0QXJlYS5wdXNoKHZpZXcucGFyZW50LmdldENoaWxkQnlOYW1lKFwic3Bfd2FsbFwiKSk7XHJcbiAgICAgICAgdGhpcy5hcnJfUmlnaHRBcmVhLnB1c2godmlldy5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJzcF93YWxsXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirnlJ/miJDkurrnmoTpmo/mnLrnp7vliqjpgJ/luqYgKi9cclxuICAgIHB1YmxpYyBnZXRNb3ZlU3BlZWQoKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBHYW1lQ29uZmlnLlRFU1RfUE9JTlRfU1BFRUQqKE1hdGgucmFuZG9tKCkrMC41KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6uuWPo+a1gemHjyA6XHJcbiAgICAgKiByZXR1cm4g6L+b5YWlIC8g5Ye65Y67XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRfUGVvcGxlTW92ZSgpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyY2VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6uuenjeavlOS+i1xyXG4gICAgICogQHBhcmFtIHR5cGUg5Lq656eNXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRfUHJvZmVzc2lvblBlcmNlbnQodHlwZTpzdHJpbmcpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpc1t0eXBlXSA9PT0gdW5kZWZpbmVkKSBjb25zb2xlLmxvZyhcIuS4jeWtmOWcqOivpeS6uuenjVwiKTtcclxuICAgICAgICBlbHNlIHJldHVybiB0aGlzW3R5cGVdLyh0aGlzLnBvcHVsYXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3nu5PnrpdcclxuICAgIC8qKui0ouaUv+e7k+eulyovXHJcbiAgICBwdWJsaWMgY2FsX01vbmV5KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wcmVzdGlnZV9Bcm15Q29zdCgpO1xyXG4gICAgICAgIHRoaXMuc3RlYWR5Q29zdCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0VGF4KCk7XHJcbiAgICAgICAgdGhpcy50ZWNobm9sb2d5X0dEUCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueyrumjnyDlvbHlk43nu5PnrpcqL1xyXG4gICAgcHVibGljIGluZmx1ZW5jZV9HcmFpbigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBncmFpbkNvc3Q9dGhpcy5wb3B1bGF0aW9uX0dyYWluQ29zdCgpO1xyXG4gICAgICAgIGxldCBncmFpbkFkZD10aGlzLnBvcHVsYXRpb25fR3JhaW5BZGQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlubjnpo/luqYg5b2x5ZON57uT566XICovXHJcbiAgICBwdWJsaWMgaW5mbHVlbmNlX1BvcHVsYXJTdXBwb3J0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zdXBwb3J0X1BlcmNlbnQoKTtcclxuICAgICAgICB0aGlzLnN1cHBvcnRfUGVvcGxlVHlwZSgpO1xyXG4gICAgICAgIHRoaXMuc3VwcG9ydF9PdXRQZW9wbGVNYXgoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5YWs5byPXHJcbiAgICAvKirnqLPlrprmlK/lh7ogKi9cclxuICAgIHByaXZhdGUgc3RlYWR5Q29zdCgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1vbmV5LT10aGlzLmFybXlDb3N0KigxLXRoaXMuYXJteVBlcmNlbnQpK3RoaXMuZ292ZXJuQ29zdCt0aGlzLnRlY2hub2xvZ3lDb3N0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueyrumjn+a2iOiAlyDkurrlj6PmlbAq5q+P5Lq65raI6ICX6YePKi9cclxuICAgIHByaXZhdGUgcG9wdWxhdGlvbl9HcmFpbkNvc3QoKTpudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3B1bGF0aW9uKnRoaXMuZ3JhaW5QZXJDb3N0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueyrumjn+eUn+S6pyDkurrlj6PmlbAq5q+P5Lq65a6e6ZmF5Lqn6YePKi9cclxuICAgIHByaXZhdGUgcG9wdWxhdGlvbl9HcmFpbkFkZCgpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgIC8v56eR5oqA5bqm6L2s5o2iIOenkeaKgOW6pjAtMTAwIOeUn+S6p+WPmOWMlueOhzAtMiDlhazlvI/mmoLlrpp5PXgqMC4wMi0xLDUw5Li65YiG55WM6ZmQXHJcbiAgICAgICAgbGV0IGNoYW5nZT10aGlzLnRlY2hub2xvZ3kqMC4wMi0xO1xyXG4gICAgICAgIHRoaXMuZ3JhaW5QZXJBZGQ9KDErY2hhbmdlKSp0aGlzLmdyYWluUGVyQWRkO1xyXG4gICAgICAgIGxldCBwcm89dGhpcy5ncmFpblBlckFkZCp0aGlzLnBvcHVsYXRpb247XHJcbiAgICAgICAgcmV0dXJuIHBybztcclxuICAgIH1cclxuXHJcbiAgICAvKirlubjnpo/luqblvbHlk43kurrlj6PmtYHliqjnjocgKi9cclxuICAgIHByaXZhdGUgc3VwcG9ydF9QZXJjZW50KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v5bm456aP5b2x5ZON5Lq65Y+j5rWB5Yqo546H55qE5rOi5Yqo6IyD5Zu0IC0wLjJ+MC4yIOWFrOW8j+aaguWumnk9eCowLjAwNC0wLjIsNTDkuLrliIbnlYzpmZBcclxuICAgICAgICBsZXQgY2hhbmdlPXRoaXMucG9wdWxhclN1cHBvcnQqMC4wMDQtMC4yO1xyXG4gICAgICAgIHRoaXMucGVyY2VudD0oMStjaGFuZ2UpKnRoaXMucGVyY2VudDsgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirlubjnpo/luqblvbHlk43kurrnp43lh6Dnjocg5Z2H5LuO5pmu6YCa5Lq65Yeg546H5Lit6L+b6KGM5pu/5o2iKi9cclxuICAgIHByaXZhdGUgc3VwcG9ydF9QZW9wbGVUeXBlKClcclxuICAgIHtcclxuICAgICAgICAvL+enkeWtpuWutuazouWKqOiMg+WbtCAwLjAxLTAuMDUg5YWs5byP5pqC5a6aeT14KjAuMDAwNCswLjAxLDUw5Li65YiG55WM6ZmQXHJcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5zY2llbnRpc3Q9dGhpcy5wb3B1bGFyU3VwcG9ydCowLjAwMDQrMC4wMTtcclxuICAgICAgICAvL+aYjuaYn+azouWKqOiMg+WbtCAwLjAwNS0wLjAyNSDlhazlvI/mmoLlrpp5PXgqMC4wMDAyKzAuMDA1LDUw5Li65YiG55WM6ZmQXHJcbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5zdGFyPXRoaXMucG9wdWxhclN1cHBvcnQqMC4wMDAyKzAuMDA1O1xyXG4gICAgICAgIC8v55uX6LS85rOi5Yqo6IyD5Zu0IDAuMDYtMC4xNCDlhazlvI/mmoLlrpp5PXgqMC4wMDA4KzAuMDYsNTDkuLrliIbnlYzpmZBcclxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLnJvYmJlcj10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDAwOCswLjA2O1xyXG4gICAgICAgIC8v5Zyf5Yyq5rOi5Yqo6IyD5Zu0IDAuMDItMC4xIOWFrOW8j+aaguWumnk9eCowLjAwMDgrMC4wMiw1MOS4uuWIhueVjOmZkFxyXG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18uYmFuZGl0PXRoaXMucG9wdWxhclN1cHBvcnQqMC4wMDA4KzAuMDI7XHJcbiAgICAgICAgLy/mma7pgJrkurrms6LliqjojIPlm7RcclxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLmNvbW1vbj0xLShPdXRDb3VudHJ5RGF0YS5pbnNfLnNjaWVudGlzdCtPdXRDb3VudHJ5RGF0YS5pbnNfLnN0YXIrT3V0Q291bnRyeURhdGEuaW5zXy5yb2JiZXIrT3V0Q291bnRyeURhdGEuaW5zXy5iYW5kaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuW5uOemj+W6puW9seWTjeWimeWkluS6uuWPoyDlopnlpJbmnIDlpKflrrnnurPmlbAyMDAtNjAwKi9cclxuICAgIHByaXZhdGUgc3VwcG9ydF9PdXRQZW9wbGVNYXgoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/lopnlpJblop7plb/njofms6LliqjojIPlm7QgMC4yLTAuNiDlhazlvI/mmoLlrpp5PXgqMC4wMDQrMC4yLDUw5Li65YiG55WM6ZmQXHJcbiAgICAgICAgbGV0IGNoYW5nZT10aGlzLnBvcHVsYXJTdXBwb3J0KjAuMDA0KzAuMjtcclxuICAgICAgICBPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50PTEwMDAqY2hhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuenkeaKgOW9seWTjUdEUCAqL1xyXG4gICAgcHJpdmF0ZSB0ZWNobm9sb2d5X0dEUCgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL0dEUOazouWKqOiMg+WbtCAtMC41fjAuNSDlhazlvI/mmoLlrpp5PXgqMC4wNSw1MOS4uuWIhueVjOmZkFxyXG4gICAgICAgIGxldCBjaGFuZ2U9dGhpcy50ZWNobm9sb2d5KjAuMDEtMC41O1xyXG4gICAgICAgIC8v5a6e6ZmFR0RQXHJcbiAgICAgICAgbGV0IGN1cnJHRFA9dGhpcy5HRFAqKGNoYW5nZSsxKTtcclxuICAgICAgICB0aGlzLm1vbmV5LT1jdXJyR0RQKnRoaXMucG9wdWxhdGlvbjtcclxuICAgIH1cclxuICAgIC8qKuWogeacm+W9seWTjeWGm+i0uSAqL1xyXG4gICAgcHJpdmF0ZSBwcmVzdGlnZV9Bcm15Q29zdCgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+WGm+i0ueWHj+WwkeeOh+azouWKqOiMg+WbtCAwLjAtMC40IOWFrOW8j+aaguWumnk9eCowLjAwNCw1MOS4uuWIhueVjOmZkFxyXG4gICAgICAgIHRoaXMuYXJteVBlcmNlbnQ9dGhpcy5wcmVzdGlnZSowLjAwNDtcclxuICAgIH1cclxuXHJcbiAgICAvKirnqI7mlLYgKi9cclxuICAgIHB1YmxpYyBnZXRUYXgoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tb25leSs9dGhpcy50YXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq57Ku6aOf57uT566XICovXHJcbiAgICAvKnB1YmxpYyBjYWxfR3JhaW4oKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/lpoLmnpzov5jmnInnsq7po5/lupPlrZhcclxuICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkPj1Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+WmguaenOeUn+S6p+mHj+Wkp+S6juWkp+S6jua2iOiAl+eOh+eahOafkOS4quWAjeeOh++8jOWFiOiuqeWFtuiHquWKqOi9rOWMluS4uui0ouaUv++8jOS5i+WQjuS/ruaUueS4uuaJi+WKqOi9rOWMllxyXG4gICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkL0NvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cz49R2FtZUNvbmZpZy5HUkFJTl9FWENIQU5HRU1PTkVZX1BFUkNFTlQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8v6LaF5Ye65YCN546H55qE6YOo5YiGXHJcbiAgICAgICAgICAgICAgICBsZXQgZXhjaGFuZ2U9Q291bnRyeURhdGEuaW5zXy5ncmFpbkFkZC1Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMqR2FtZUNvbmZpZy5HUkFJTl9FWENIQU5HRU1PTkVZX1BFUkNFTlQ7XHJcbiAgICAgICAgICAgICAgICAvL+aNoumSsVxyXG4gICAgICAgICAgICAgICAgdGhpcy5leGNoYW5nZU1vbmV5KGV4Y2hhbmdlKTtcclxuICAgICAgICAgICAgICAgIC8v5Ymp5L2Z55qE5Yqg5YWl5bqT5a2YXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srPShDb3VudHJ5RGF0YS5pbnNfLmdyYWluQWRkLWV4Y2hhbmdlLUNvdW50cnlEYXRhLmluc18uZ3JhaW5NaW51cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOWFpeW6k+WtmFxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrKz0oQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZC1Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5bqT5a2Y5Yqg5LiK55Sf5Lqn55qE57Ku6aOf5LiN6Laz5Lul5oq15aSf5raI6ICX55qE57Ku6aOfXHJcbiAgICAgICAgICAgIGlmKChDb3VudHJ5RGF0YS5pbnNfLmdyYWluU3RvY2srQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZCk8Q291bnRyeURhdGEuaW5zXy5ncmFpbk1pbnVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL+eCueWHu+mAieaLqeaYr+WQpui0reS5sOeyrumjn++8jOWmguaenOS4jei0reS5sOWImeWvvOiHtOS6uuWPo+WHj+WwkeWSjOW5uOemj+W6pumZjeS9jlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL+WHj+WwkeW6k+WtmFxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5ncmFpblN0b2NrLT1Db3VudHJ5RGF0YS5pbnNfLmdyYWluTWludXMtQ291bnRyeURhdGEuaW5zXy5ncmFpbkFkZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0qL1xyXG5cclxuICAgIFxyXG4gICAgLyoq5pS55Y+YIOi/m+OAgeWHuiDnm67moIfkurrmlbAgQGlzb3V0OuaYr+WQpuaYr+WHuuWfjiAgQGNvdW5077ya5pS55Y+Y55uu5qCH5YC8Ki9cclxuICAgIHB1YmxpYyBzZXRJbk91dFRhcmdldChpc091dCxjb3VudCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXNPdXQpIHRoaXMuZXhpdFBlb3BsZSArPSBjb3VudDtcclxuICAgICAgICBlbHNlIHRoaXMuZW50ZXJQZW9wbGUgKz0gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pS55Y+YIOi/m+OAgeWHuiDnm67moIfkurrmlbAgQGlzb3V0OuaYr+WQpuaYr+WHuuWfjiAgQGNvdW5077ya5pS55Y+Y5a6e6ZmF5YC8Ki9cclxuICAgIHB1YmxpYyBzZXRJbk91dFRydXRoKGlzT3V0LGNvdW50KSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZihpc091dCkgdGhpcy5fb3V0ZXJQZW9wbGUgKz0gY291bnQ7XHJcbiAgICAgICAgZWxzZSB0aGlzLl9pbm5lclBlb3BsZSArPSBjb3VudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq6YCa55+l5Lq65Y+j5Ye65Z+OIEB0eXBlIO+8miDov5vmiJB0dXJlICDlh7rln44gZmFsc2UqL1xyXG4gICAgcHVibGljIHBlb3BsZUdvT3V0KHR5cGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBhcnIgO1xyXG4gICAgICAgIGlmKHR5cGUpIGFyciA9IHRoaXMuYXJyX291dFBlb3BsZTtcclxuICAgICAgICAgICAgZWxzZSBhcnIgPSB0aGlzLmFycl9pblBlb3BsZTtcclxuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKGFyci5sZW5ndGgqcmFuZG9tKTtcclxuICAgICAgICBpZihpbmRleD4wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIWFycltpbmRleF0uaXNHbylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYXJyW2luZGV4XS5wZW9wbGVHbyh0eXBlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgdGhpcy5wZW9wbGVHb091dCh0eXBlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIumaj+acuuWHuumUmVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuWHuuWfjumXqOebuOWFs+aTjeS9nCAqL1xyXG4gICAgcHVibGljIGdvT3V0KHR5cGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuX291dGVyUGVvcGxlKys7Ly/lrp7pmYXkurrmlbDliqDkuIBcclxuICAgICAgICB0aGlzLnBvcHVsYXRpb24tLTsvL+aAu+S6uuWPoyAtLVxyXG4gICAgICAgIGlmKHRoaXNbdHlwZV0pIHRoaXNbdHlwZV0tLTtcclxuICAgIH1cclxufVxyXG5cclxuLyoq5aSW5Z+OICovXHJcbmV4cG9ydCBjbGFzcyBPdXRDb3VudHJ5RGF0YXtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zXyA6IE91dENvdW50cnlEYXRhID0gbmV3IE91dENvdW50cnlEYXRhKCk7XHJcbiAgICAvKioqKioqKioqKioqKirkuLvmlbDmja4qKioqKioqKioqKioqKioqKioqKi9cclxuICAgIC8qKuacgOWkp+WkluWfjuWuuee6s+aVsOmHjyAqL1xyXG4gICAgcHVibGljIG1heENvdW50IDogbnVtYmVyPTQwMDtcclxuICAgIC8qKuW9k+WJjeWkluWfjuS6uuWPo+aVsCAqL1xyXG4gICAgcHVibGljIG91dENvdW50Om51bWJlcj0wO1xyXG4gICAgLyoq5Lq65rue55WZ5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgbGltaXRUaW1lOm51bWJlcj01MDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvKirmma7pgJrkuroqL1xyXG4gICAgcHVibGljIGNvbW1vbiA6IG51bWJlciA9IDAuNzk1O1xyXG4gICAgLyoq56eR5a2m5a62IFNTUyovXHJcbiAgICBwdWJsaWMgc2NpZW50aXN0IDogbnVtYmVyID0gMC4wMztcclxuICAgIC8qKuaYjuaYnyBTUyovXHJcbiAgICBwdWJsaWMgc3RhciA6IG51bWJlciA9IDAuMDE1O1xyXG4gICAgLyoq5Zyf5YyqIC1TICovXHJcbiAgICBwdWJsaWMgYmFuZGl0IDogbnVtYmVyID0gMC4wNjtcclxuICAgIC8qKuebl+i0vCAtQSAqL1xyXG4gICAgcHVibGljIHJvYmJlciA6IG51bWJlciA9IDAuMTtcclxuICAgIC8qKuWPmOmHj+WQjSAqL1xyXG4gICAgcHVibGljIGFycl9QZW9wbGUgOiBBcnJheTxzdHJpbmc+ID0gW1wiY29tbW9uXCIsXCJzY2llbnRpc3RcIixcInN0YXJcIixcImJhbmRpdFwiLFwicm9iYmVyXCJdO1xyXG4gICAgXHJcbiAgICAvKirojrflj5bljLrpl7TmlbDnu4QgMCwwLjc5NSwwLjgyNSwwLjg0LDAuOSwxKi9cclxuICAgIHB1YmxpYyBnZXRQZXJjZW50QXJlYSgpOkFycmF5PG51bWJlcj5cclxuICAgIHtcclxuICAgICAgIGxldCBhcnJQZXJjZW50ID0gW107Ly/nlJ/kuqfmr5TkvotcclxuICAgICAgIGxldCBhcnJfUGVvcGxlID0gdGhpcy5hcnJfUGVvcGxlO1xyXG4gICAgICAgbGV0IG51bWJlciA9IDA7XHJcbiAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcclxuICAgICAgIGZvcihsZXQgaSA9IDA7aTxhcnJfUGVvcGxlLmxlbmd0aDtpKyspXHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgIG51bWJlciArPSB0aGlzW2Fycl9QZW9wbGVbaV1dO1xyXG4gICAgICAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcclxuICAgICAgIH1cclxuICAgICAgIHJldHVybiBhcnJQZXJjZW50O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vdWkvbGF5YU1heFVJXCI7XHJcblxyXG4vKipcclxuICog5raI5oGv5qGGIOmAmueUqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXNnRGlhbG9nIGV4dGVuZHMgdWkuRGlhLkN1cnJlbnREaWFsb2dVSXtcclxuICAgIC8qKuexu+WeiyAqL1xyXG4gICAgcHJpdmF0ZSB0eXBlIDogbnVtYmVyIDtcclxuICAgIC8qKue8k+WKqCAqL1xyXG4gICAgLy8gcHJpdmF0ZSBzaG93VHdlZW4gOiBMYXlhLlR3ZWVuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIneWni+WMliAqL1xyXG4gICAgcHVibGljIHNob3dNc2codHlwZTpudW1iZXIpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYnRuX2Nsb3NlLm9uKExheWEuRXZlbnQuQ0xJQ0ssdGhpcyx0aGlzLmNsb3NlRGlhbG9nKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUltZygpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVGl0bGUoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVdvcmQoKTsgXHJcbiAgICAgICAgdGhpcy5tc2dCb2R5LnggPSAoOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCktMTE2MykvMjsgICAgICAgXHJcbiAgICAgICAgdGhpcy5tc2dCb2R5LnkgPSAtNTU3OyAgICAgICBcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eTowfSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaNouWbviAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VJbWcoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2godGhpcy50eXBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaNouagh+mimCAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VUaXRsZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaWh+Wtl+i9veWFpSAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VXb3JkKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YWz6ZetICovXHJcbiAgICBwdWJsaWMgY2xvc2VEaWFsb2coKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vZmYoTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuY2xvc2VEaWFsb2cpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eTotNTU3fSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQsTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLHRoaXMuY2xvc2VPdmVyKSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlT3ZlcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlOyAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZXJmZWIvUGVvcGxlXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEsIHsgT3V0Q291bnRyeURhdGEgfSBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29tbW9uIGZyb21cIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9Db21tb25cIlxyXG5pbXBvcnQgUm9iYmVyIGZyb21cIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9Sb2JiZXJcIlxyXG5pbXBvcnQgU2NpZW50aXN0IGZyb20gXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvU2NpZW50aXN0XCI7XHJcbmltcG9ydCBTdGFyIGZyb20gXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvU3RhclwiO1xyXG5pbXBvcnQgQmFuZGl0IGZyb20gXCIuLi9QZXJmZWIvZGlmZl9QZW9wbGUvQmFuZGl0XCI7XHJcbi8qKlxyXG4gKiDkurog566h55CGXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVNYW5hZ2VyIHtcclxuICAgIC8qKuinhuWbviovXHJcbiAgICBwcml2YXRlIHZpZXc6YW55OyBcclxuICAgIC8qKuaoquWdkOaghyAqL1xyXG4gICAgcHJpdmF0ZSBYOm51bWJlcjtcclxuICAgIC8qKue6teWdkOaghyAqL1xyXG4gICAgcHJpdmF0ZSBZOm51bWJlcjtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5aKZ5YaFXHJcbiAgICAvKirnlJ/miJDpl7TpmpTorqHml7blmaggKi9cclxuICAgIHByaXZhdGUgY291bnRUaW1lIDogbnVtYmVyID0gMDtcclxuICAgIC8qKueUn+S6p+aXtumXtOmXtOmalCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudFRpbWVfIDogbnVtYmVyID0gNTAwO1xyXG4gICAgLy/lpJbln47kurrlj6PorqHml7blmahcclxuICAgIHByaXZhdGUgY291bnRUaW1lX291dCA6IG51bWJlciA9IDA7ICAgIFxyXG4gICAgLyoq5aSW5Z+O5Lq65Y+j55Sf5Lqn6Ze06ZqUICovXHJcbiAgICBwcml2YXRlIGNvdW50VGltZV9vdXRfIDogbnVtYmVyID0gNTAwO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmlldz12aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5ZCv55Sf5oiQ5bel5Y6CXHJcbiAgICAgKiDnlJ/miJDkurogXHJcbiAgICAgKiDnlJ/miJDkurrnmoTkvY3nva5cclxuICAgICAqIOeUn+S6p+S6uueahHR5cGUg77yaIOWfjumHjOS6ui/ln47lpJbkurog6YC76L6R5YiG5byAXHJcbiAgICAgKi9cclxuICAgIC8qKuW8gOWQr+eUn+aIkOW3peWOgiAqL1xyXG4gICAgcHVibGljIG9wZW5QZW9wbGVGYWN0b3J5KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS50aW1lci5sb29wKDEsdGhpcyx0aGlzLmNyZWF0ZVBlb3BsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq55Sf5oiQ5Lq6ICovXHJcbiAgICBwdWJsaWMgY3JlYXRlUGVvcGxlKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuY291bnRUaW1lX291dCA8PSB0aGlzLmNvdW50VGltZV9vdXRfKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudFRpbWVfb3V0Kys7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudFRpbWVfb3V0ID0gMDtcclxuICAgICAgICB0aGlzLmNvdW50VGltZV9vdXRfID0gTWF0aC5yYW5kb20oKSpHYW1lQ29uZmlnLlBFUlNPTl9DUkVBVEVfVElNRSoxMDA7XHJcbiAgICAgICAgaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudCA+PSBPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpIHJldHVybjtcclxuICAgICAgICBsZXQgYXJyYXk6QXJyYXk8bnVtYmVyPj1PdXRDb3VudHJ5RGF0YS5pbnNfLmdldFBlcmNlbnRBcmVhKCk7XHJcbiAgICAgICAgbGV0IHBlb3BsZTtcclxuICAgICAgICAvKirnlJ/miJDkuI3lkIzkurrnp43nmoTlh6DnjocgKi9cclxuICAgICAgICBsZXQgcmFuZG9tPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgLy/mma7pgJrkurpcclxuICAgICAgICBpZihyYW5kb20+PTAmJnJhbmRvbTxhcnJheVsxXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJjb21tb25cIik7XHJcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IENvbW1vbih0aGlzLnZpZXcsR2FtZUNvbmZpZy5DT01NT05fTUFOLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+enkeWtpuWutlxyXG4gICAgICAgIGVsc2UgaWYocmFuZG9tPj1hcnJheVsxXSYmcmFuZG9tPGFycmF5WzJdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcInNjaWVudGlzdFwiKTtcclxuICAgICAgICAgICAgaWYoIXBlb3BsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlID0gbmV3IFNjaWVudGlzdCh0aGlzLnZpZXcsR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBwZW9wbGUuY3JlYXRlVGVjaG5vbG9neVRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mmI7mmJ9cclxuICAgICAgICBlbHNlIGlmKHJhbmRvbT49YXJyYXlbMl0mJnJhbmRvbTxhcnJheVszXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJzdGFyXCIpO1xyXG4gICAgICAgICAgICBpZighcGVvcGxlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBTdGFyKHRoaXMudmlldyxHYW1lQ29uZmlnLlNUQVJfTUFOLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBwZW9wbGUuY3JlYXRlU3RhclRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nm5fotLxcclxuICAgICAgICBlbHNlIGlmKHJhbmRvbT49YXJyYXlbM10mJnJhbmRvbTxhcnJheVs0XSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlb3BsZSA9TGF5YS5Qb29sLmdldEl0ZW0oXCJyb2JiZXJcIik7XHJcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZSA9bmV3IFJvYmJlcih0aGlzLnZpZXcsR2FtZUNvbmZpZy5ST0JCRVJfTUFOLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfb3V0UGVvcGxlLnB1c2gocGVvcGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBwZW9wbGUuY3V0TW9uZXlUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Zyf5YyqXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcImJhbmRpdFwiKTtcclxuICAgICAgICAgICAgaWYoIXBlb3BsZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgQmFuZGl0KHRoaXMudmlldyxHYW1lQ29uZmlnLkJBTkRJVF9NQU4sdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFycl9vdXRQZW9wbGUucHVzaChwZW9wbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHBlb3BsZS5jdXRNb25leVRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGVvcGxlLnZpc2libGU9dHJ1ZTtcclxuICAgICAgICBwZW9wbGUuaXNPdXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2V0UG9zKCk7XHJcbiAgICAgICAgcGVvcGxlLnNldFBvcyh0aGlzLlgsdGhpcy5ZKTtcclxuICAgICAgICBwZW9wbGUub3BlbkJlaGF2aW91cigpO1xyXG4gICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQrKztcclxuICAgIH1cclxuXHJcbiAgICAvKirnlJ/miJDkurrnmoTkvY3nva4gKi9cclxuICAgIHB1YmxpYyBnZXRQb3MoKTphbnlcclxuICAgIHtcclxuICAgICAgICBsZXQgdHlwZU51bT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMyk7XHJcbiAgICAgICAgc3dpdGNoKHR5cGVOdW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAvL+WcqEHovrnnlYxcclxuICAgICAgICAgICAgICAgIHRoaXMuWD0wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ZPU1hdGgucmFuZG9tKCkqMzkwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIC8v5ZyoQui+ueeVjFxyXG4gICAgICAgICAgICAgICAgdGhpcy5YPU1hdGgucmFuZG9tKCkqMjAwMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuWT0wO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIC8v5ZyoQ+i+ueeVjFxyXG4gICAgICAgICAgICAgICAgdGhpcy5YPTIwMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlk9TWF0aC5yYW5kb20oKSozOTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirnlYzpmZDmo4DmtYsgKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIFxyXG4gICAgXHJcbiAgICBwdWJsaWMgY2hlY2tQZXJjZW50KHBlb3BsZSx0eXBlOnN0cmluZyk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v5rWB5Yqo5q+U5L6L5qOA5rWLXHJcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5wZXJjZW50PDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBlb3BsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5Yib5bu65aKZ5YaF5Lq6ICovXHJcbiAgICBwdWJsaWMgY3JlYXRlUGVvcGxlX0lubmVyKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICBsZXQgcmFuZG9tU3RyaW5nIDtcclxuICAgICAgIGxldCBhcnJQZXJjZW50ID0gW107Ly/nlJ/kuqfmr5TkvotcclxuICAgICAgIGxldCBhcnJfUGVvcGxlID0gQ291bnRyeURhdGEuaW5zXy5hcnJfUGVvcGxlO1xyXG4gICAgICAgbGV0IG51bWJlciA9IDA7XHJcbiAgICAgICBhcnJQZXJjZW50LnB1c2gobnVtYmVyKTtcclxuICAgICAgIGZvcihsZXQgaSA9IDA7aTxhcnJfUGVvcGxlLmxlbmd0aDtpKyspXHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgIG51bWJlciArPSBDb3VudHJ5RGF0YS5pbnNfLmdldF9Qcm9mZXNzaW9uUGVyY2VudChhcnJfUGVvcGxlW2ldKTtcclxuICAgICAgICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XHJcbiAgICAgICB9XHJcbiAgICAgICBjb25zb2xlLmxvZyhhcnJQZXJjZW50KTtcclxuICAgICAgIExheWEudGltZXIubG9vcCgxLHRoaXMsdGhpcy5nZXRSYW5kb20sW2FyclBlcmNlbnRdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirnlJ/kuqfkurogKi9cclxuICAgIHByaXZhdGUgY3JlYXRlX0lubmVyKHJhbmRvbVN0cmluZykgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYocmFuZG9tU3RyaW5nID09IFwibm9uZVwiKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHBlb3BsZSA9IExheWEuUG9vbC5nZXRJdGVtKHJhbmRvbVN0cmluZyk7ICBcclxuICAgICAgICBsZXQgY291bnRyeURhdGEgPSBDb3VudHJ5RGF0YS5pbnNfO1xyXG4gICAgICAgIC8v55Sf5Lqn5Lq656eNXHJcbiAgICAgICAgY29uc29sZS5sb2cocmFuZG9tU3RyaW5nKTtcclxuICAgICAgICBzd2l0Y2gocmFuZG9tU3RyaW5nKVxyXG4gICAgICAgIHsgICAgLyoq5bey55Sf5oiQ55qE5Lq656eNICAwIOaZrumAmiAgIDHnp5HlrablrrYgIDLmmI7mmJ8gM+Wcn+WMqiA055uX6LS8Ki9cclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkNPTU1PTl9NQU46ICAgXHJcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVswXSsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5ST0JCRVJfTUFOOi8v55uX6LS8XHJcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVs0XSsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5CQU5ESVRfTUFOOi8v5Zyf5YyqXHJcbiAgICAgICAgICAgICAgICBpZighcGVvcGxlKSBwZW9wbGUgPSBuZXcgQ29tbW9uKHRoaXMudmlldyxyYW5kb21TdHJpbmcsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEuYWxyZWFkeUNyZWF0ZVszXSsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TVEFSX01BTjovL+aYjuaYn1xyXG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbMl0rKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuU0NJRU5USVNUX01BTjovL+enkeWtpuWutlxyXG4gICAgICAgICAgICAgICAgaWYoIXBlb3BsZSkgcGVvcGxlID0gbmV3IENvbW1vbih0aGlzLnZpZXcscmFuZG9tU3RyaW5nLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLmFscmVhZHlDcmVhdGVbMV0rKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighcGVvcGxlKSB7Y29uc29sZS5sb2coXCLmlrDlu7rkurrlpLHotKXvvIFcIikgO3JldHVybjt9XHJcbiAgICAgICAgcGVvcGxlLmlzT3V0ID0gZmFsc2U7XHJcbiAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hcnJfaW5QZW9wbGUucHVzaChwZW9wbGUpOy8v5Yqg5YWl57u05oqk5pWw57uEXHJcbiAgICAgICAgaWYocGVvcGxlID09PSB1bmRlZmluZWQgfHwgcGVvcGxlID09PSBudWxsKSB7Y29uc29sZS5sb2coXCLmsqHmnInnlJ/miJDkurrnp43vvIHnp43nsbs6XCIgKyByYW5kb21TdHJpbmcpO3JldHVybjt9XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQb3MocGVvcGxlKTtcclxuICAgICAgICBwZW9wbGUuc3BlY2lhbERvKCk7XHJcbiAgICAgICAgcGVvcGxlLm9wZW5CZWhhdmlvdXIoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirnlJ/kuqfkvY3nva4gKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdGVQb3MocGVvcGxlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgaG91c2VOb2RlID0gKHRoaXMudmlldyBhcyBMYXlhLlNwcml0ZSkuZ2V0Q2hpbGRCeU5hbWUoJ2hvdXNlJyk7XHJcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBob3VzZU5vZGUuX2NoaWxkcmVuLmxlbmd0aC8xMDA7XHJcbiAgICAgICAgbGV0IGhvdXNlIDtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPCBob3VzZU5vZGUuX2NoaWxkcmVuLmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnBlcmNlbnQqMTAwKTtcclxuICAgICAgICAgICAgaG91c2UgPSBob3VzZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZV9cIitudW1iZXIpO1xyXG4gICAgICAgICAgICBpZihob3VzZSAhPT0gdW5kZWZpbmVkICYmIGhvdXNlICE9PSBudWxsKSAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlb3BsZS5zZXRQb3MoaG91c2UueCxob3VzZS55LGhvdXNlKTsgICBcclxuICAgICAgICAgICAgICAgIC8vIHBlb3BsZS5wZW9wbGVJbnRvKCk7IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPlumaj+acuuS6uuenjSAqL1xyXG4gICAgcHJpdmF0ZSBnZXRSYW5kb20oYXJyUGVyY2VudCkgOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmNvdW50VGltZSA8PSB0aGlzLmNvdW50VGltZV8pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50VGltZSsrO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnRUaW1lXyA9IE1hdGgucmFuZG9tKCkqR2FtZUNvbmZpZy5QRVJTT05fQ1JFQVRFX1RJTUUqMTAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi55Sf5oiQ6Ze06ZqUOlwiICsgTWF0aC5mbG9vcih0aGlzLmNvdW50VGltZS8xMDApICsgXCJzXCIpO1xyXG4gICAgICAgIHRoaXMuY291bnRUaW1lID0gMDtcclxuXHJcbiAgICAgICAgbGV0IG51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgbGV0IHBlcnNvbiA9IFwiXCI7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8YXJyUGVyY2VudC5sZW5ndGggO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCFhcnJQZXJjZW50W2krMV0pIGJyZWFrO1xyXG4gICAgICAgICAgICBpZihhcnJQZXJjZW50W2ldIDw9IG51bWJlciAmJiBudW1iZXIgPCBhcnJQZXJjZW50W2krMV0pXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBlcnNvbiA9IENvdW50cnlEYXRhLmluc18uYXJyX1Blb3BsZVtpXTtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gaTsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighcGVyc29uKSB7Y29uc29sZS5sb2coXCLkurrnp43pmo/mnLrlpLHotKXvvIFcIik7cmV0dXJuO31cclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLVwiICsgcGVyc29uKTtcclxuICAgICAgICAvL+WIpOaWreS6uuaYr+WQpui/mOiDveeUn+aIkFxyXG4gICAgICAgIGlmKGluZGV4ID09PSB1bmRlZmluZWQpe2NvbnNvbGUubG9nKFwi5qaC546H6K6h566X5Ye66ZSZXCIpO3JldHVybjt9XHJcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlW2luZGV4XSA9PSBDb3VudHJ5RGF0YS5pbnNfW3BlcnNvbl0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLmdldEFscmVhZENyZWF0ZSgpID09IENvdW50cnlEYXRhLmluc18ucG9wdWxhdGlvbikgcmV0dXJuO1xyXG4gICAgICAgICAgICBwZXJzb24gPSB0aGlzLmdldFJhbmRvbShhcnJQZXJjZW50KTsgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighcGVyc29uKXtjb25zb2xlLmxvZyhcIuS6uuenjemaj+acuuWksei0pe+8gVwiKTtyZXR1cm47fVxyXG4gICAgICAgdGhpcy5jcmVhdGVfSW5uZXIocGVyc29uKTsvL+eUn+S6p+S6uuenjSBcclxuICAgICAgIHJldHVybiBwZXJzb247ICBcclxuICAgIH1cclxuXHJcbiAgICAvKuiOt+WPluW3sueUn+aIkOS6uuWPo+eahOaVsOmHjyovXHJcbiAgICBwdWJsaWMgZ2V0QWxyZWFkQ3JlYXRlKCkgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgbnVtYmVyID0gMDtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZS5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbnVtYmVyICs9Q291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlW2ldXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW1iZXI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBVSeeuoeeQhuWZqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2Vye1xyXG4gICAgLyoq5pWw5o2u566h55CG5ZmoICovXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIGRhdGFNYW5hZ2VyIDogRGF0YU1hbmFnZXI7XHJcbiAgICAvKipVSSBzcHJpdGUgKi9cclxuICAgIHByaXZhdGUgVWlTcHJpdGUgOiBMYXlhLlNwcml0ZTtcclxuXHJcbiAgICAvKirovb3lhaXmlbDmja4gKi9cclxuICAgIGNvbnN0cnVjdG9yKHVpOkxheWEuU3ByaXRlKXtcclxuICAgICAgICB0aGlzLlVpU3ByaXRlID0gdWk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59IiwiLyoqXHJcbiAqIOS6i+S7tuWPkeeUn+euoeeQhuWZqFxyXG4gKiBcclxuICogXHJcbiAqIOeUn+aIkOS6i+S7tuOAgVxyXG4gKiDlvbHlk43kurrlj6PmtYHliqhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmxkRXZlbnRNYW5hZ2VyIHtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5LqL5Lu26aKE5oql5YiwICovXHJcbiAgICBcclxuXHJcbiAgICAvKirkuovku7blj5HnlJ/lmaggKi9cclxuXHJcbiAgICBcclxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgQnV5RGlhbG9nIGZyb20gXCIuL0NvcmUvQnV5RGlhbG9nXCJcbmltcG9ydCBNc2dEaWFsb2cgZnJvbSBcIi4vQ29yZS9Nc2dEaWFsb2dcIlxuaW1wb3J0IE9wZW5HYW1lIGZyb20gXCIuL1NjcmlwdC9PcGVuR2FtZVwiXG5pbXBvcnQgR2FtZVdvcmxkIGZyb20gXCIuL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkXCJcbmltcG9ydCBPcGVuU3RvcnkgZnJvbSBcIi4vU2NyaXB0L09wZW5TdG9yeVwiXG5pbXBvcnQgQ2VudGVyIGZyb20gXCIuL1NjcmlwdC9DZW50ZXJcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9MTQ0MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTkwMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWRoZWlnaHRcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cIlN0YXJ0R2FtZS5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcbiAgICAgICAgcmVnKFwiQ29yZS9CdXlEaWFsb2cudHNcIixCdXlEaWFsb2cpO1xuICAgICAgICByZWcoXCJDb3JlL01zZ0RpYWxvZy50c1wiLE1zZ0RpYWxvZyk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9PcGVuR2FtZS50c1wiLE9wZW5HYW1lKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L0dhbWVXb3JsZC9HYW1lV29ybGQudHNcIixHYW1lV29ybGQpO1xuICAgICAgICByZWcoXCJTY3JpcHQvT3BlblN0b3J5LnRzXCIsT3BlblN0b3J5KTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L0NlbnRlci50c1wiLENlbnRlcik7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5jbGFzcyBNYWluIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8v5qC55o2uSURF6K6+572u5Yid5aeL5YyW5byV5pOOXHRcdFxyXG5cdFx0aWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWU7XHJcblxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcblxyXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuXHRcdEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuXHR9XHJcbn1cclxuLy/mv4DmtLvlkK/liqjnsbtcclxubmV3IE1haW4oKTtcclxuIiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBDb3VudHJ5RGF0YSwgeyBPdXRDb3VudHJ5RGF0YSB9IGZyb20gXCIuLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBUb29sIGZyb20gXCIuLi9Ub29sL1Rvb2xcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBQZW9wbGVNYW5hZ2VyIGZyb20gXCIuLi9Db3JlL1Blb3BsZU1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBcclxuICog5Lq656eN54i257G7XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGUge1xyXG4gICAgLyoq5Zy65pmvKi9cclxuICAgIHByb3RlY3RlZCB2aWV3IDogTGF5YS5TcHJpdGU7XHJcbiAgICAvKirnsr7ngbUgKi9cclxuICAgIHB1YmxpYyBzcCA6IExheWEuU3ByaXRlO1xyXG4gICAgLyoq5qiq5Z2Q5qCH56e75Yqo6YCf5bqmICovXHJcbiAgICBwcml2YXRlIGRpclg6bnVtYmVyO1xyXG4gICAgLyoq57q15Z2Q5qCH56e75Yqo6YCf5bqmICovXHJcbiAgICBwcml2YXRlIGRpclk6bnVtYmVyO1xyXG4gICAgXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKuWimeWGhSAqKioqKioqKioqKiovXHJcbiAgICAvKirlopnlhoXkurrov5jmmK/lopnlpJbkurogKi9cclxuICAgIHB1YmxpYyBpc091dCA6IGJvb2xlYW47XHJcbiAgICAvKirkurrlsZ7mgKcgKi9cclxuICAgIHB1YmxpYyB0eXBlOnN0cmluZztcclxuICAgIC8qKuS6uueahOacneWQkSAqL1xyXG4gICAgcHVibGljIHRvd2FyZCA6IGFueTtcclxuICAgIC8qKumdouWJjeeahDXkuKrmo4DmtYvngrkgKi9cclxuICAgIHB1YmxpYyB0b3dhcmRQb3MgOiBBcnJheTxhbnk+O1xyXG4gICAgLyoq5Lq655qE56e75Yqo55uu5qCH54K5ICovXHJcbiAgICBwdWJsaWMgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlO1xyXG4gICAgLyoq5Ye655Sf54K5ICovXHJcbiAgICBwdWJsaWMgYm9ybk5vZGUgOiBMYXlhLlNwcml0ZTtcclxuICAgIC8qKuaYr+WQpuiiq+WPrOWUpCAqL1xyXG4gICAgcHVibGljIGlzR28gOiBudW1iZXI7XHJcbiAgICAvKirpgJLlvZLlgZzmraLlj5jph48gKi9cclxuICAgIHByaXZhdGUgc3RvcERpIDogbnVtYmVyO1xyXG4gICAgLyoq5Y+C6ICD6YCf5bqmICovXHJcbiAgICBwcml2YXRlIHNwZWVkIDogbnVtYmVyO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgICAgICB0aGlzLmlzT3V0ID0gaXNPdXQ7XHJcbiAgICAgICAgdGhpcy50eXBlPXR5cGU7XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZSk7XHJcbiAgICAgICAgdGhpcy5pbml0KHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIneWni+WMliAqL1xyXG4gICAgcHJpdmF0ZSBpbml0KHR5cGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v5pWw5o2u5Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5zZXREYXRhSW5pdCgpO1xyXG4gICAgICAgIC8v5Yib5bu6XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pWw5o2u5Yid5aeL5YyWICovXHJcbiAgICBwcml2YXRlIHNldERhdGFJbml0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IENvdW50cnlEYXRhLmluc18uZ2V0TW92ZVNwZWVkKCk7XHJcbiAgICAgICAgdGhpcy50b3dhcmQgPSB7XHJcbiAgICAgICAgICAgIHg6MTAwMCxcclxuICAgICAgICAgICAgeTowLFxyXG4gICAgICAgICAgICBzcGVlZDp0aGlzLnNwZWVkLHJvdGF0aW9uOnVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGFyZ2V0Um90YXRpb246dW5kZWZpbmVkLFxyXG4gICAgICAgICAgICByb3RhdGlvbkNoYW5nZSA6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG93YXJkUG9zID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5zdG9wRGkgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuW8gOWni+ihjOWKqCAqL1xyXG4gICAgcHVibGljIG9wZW5CZWhhdmlvdXIoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/ov5DooYzkuobpgLvovpFcclxuICAgICAgICBpZih0aGlzLmlzT3V0KSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGVvcGxlX1Bvc091dCgpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKE91dENvdW50cnlEYXRhLmluc18ubGltaXRUaW1lKjYwLHRoaXMsdGhpcy5saW1pdFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnBlb3BsZV9Qb3NJbm5lcigpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmxvb3AoMTYsdGhpcyx0aGlzLnBlb3BsZV9Qb3NJbm5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKueUn+aIkOS6uiAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVQZW9wbGUodHlwZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgIHRoaXMuY3JlYXRlU3AodHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yib5bu6U3ByaXRlICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVNwKHR5cGUpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbWdVcmwgPSBcIm1hcC9cIit0eXBlK1wiLnBuZ1wiO1xyXG4gICAgICAgIGlmKCF0aGlzLnNwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zcCA9IG5ldyBMYXlhLlNwcml0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5zcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3AubG9hZEltYWdlKGltZ1VybCk7XHJcbiAgICAgICAgdGhpcy5zcC5zaXplKDEyLDEyKTtcclxuICAgICAgICB0aGlzLnNwLnBpdm90KHRoaXMuc3Aud2lkdGgvMix0aGlzLnNwLmhlaWdodC8yKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiuvue9ruWIneWni+S9jee9riAqL1xyXG4gICAgcHVibGljIHNldFBvcyh4LHksc3A6TGF5YS5TcHJpdGUpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3AueCA9IHg7XHJcbiAgICAgICAgdGhpcy5zcC55ID0geTtcclxuICAgICAgICB0aGlzLmJvcm5Ob2RlID0gc3A7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuWimeWkluS6uuihjOWKqOmAu+i+kSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBwcml2YXRlIHBlb3BsZV9Qb3NPdXQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+e7meS6iOmaj+acuuaWueWQke+8jOaWueWQkeeUqCgtMX4xKeihqOekulxyXG4gICAgICAgIGlmKHRoaXMuc3AueDw9OTAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuc3AueD49MTEwMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWD0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWD1NYXRoLnJhbmRvbSgpKjItMTtcclxuICAgICAgICAgICAgdGhpcy5kaXJZPU1hdGgucmFuZG9tKCkqMi0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtO+8jOWcqOatpOaXtumXtOWGheenu+WKqCzpmo/mnLrml7bpl7TlnKgoMiw4KeS4remAieaLqVxyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqNisyO1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNsb3NlTW92ZVRpbWVyKTtcclxuICAgICAgICAvL+W8gOWQr+enu+WKqFxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKDEsdGhpcyx0aGlzLm1vdmVEaXN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuWNleS9jeW4p+enu+WKqCovXHJcbiAgICBwcml2YXRlIG1vdmVEaXN0YW5jZSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwLngrPXRoaXMuZGlyWDtcclxuICAgICAgICB0aGlzLnNwLnkrPXRoaXMuZGlyWTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlhbPpl63np7vliqjlrprml7blmajvvIzlvIDlkK/ljp/lnLDkvJHmga8qL1xyXG4gICAgcHJpdmF0ZSBjbG9zZU1vdmVUaW1lcigpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xyXG4gICAgICAgIC8v5LyR5oGv5pe26Ze057uT5p2f5ZCO57un57ut56e75YqoXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo2KzI7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMucGVvcGxlX1Bvc091dCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKua7nueVmeaXtumXtO+8jOiLpei2hei/h+aXtumXtO+8jOWwseemu+W8gOWkluWfjiAqL1xyXG4gICAgcHJpdmF0ZSBsaW1pdFRpbWUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBpZih0aGlzLnNwLng8PTEwMDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRpclg9LU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgLyoq56Kw5pKe5qOA5rWLICovXHJcbiAgICBwcml2YXRlIGNoZWNrTGltaXRfT3V0KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v6L6555WM5qOA5rWLXHJcbiAgICAgICAgaWYodGhpcy5zcC54PC01fHx0aGlzLnNwLng+MjAwNXx8dGhpcy5zcC55PC01KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKCk7XHJcbiAgICAgICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQtLTtcclxuICAgICAgICAgICAgaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMztcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNyZWF0ZVBlb3BsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5oqk5Z+O5rKz5qOA5rWLXHJcbiAgICAgICAgaWYodGhpcy5zcC55Pj0zOTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+mHjeaWsOe7meS4gOS4quS9jeenu1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/ln47pl6jljLrln5/mo4DmtYtcclxuICAgICAgICBpZih0aGlzLnNwLng+OTMyJiZ0aGlzLnNwLng8MTA2OCYmdGhpcy5zcC55PjM1MCYmdGhpcy5zcC55PDM5MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5Z+O6Zeo5piv5ZCm5omT5byAXHJcbiAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uaXNEb29yT3BlbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0b3J5UGVvcGxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy/ln47lpJbkurrlj6MtMVxyXG4gICAgICAgICAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgLy/lm73lrrbkurrlj6MrMVxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5wb3B1bGF0aW9uKys7XHJcbiAgICAgICAgICAgICAgICAvLyBpZihPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50PE91dENvdW50cnlEYXRhLmluc18ubWF4Q291bnQtMSlcclxuICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjM7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLGNyZWF0ZVBlb3BsZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZUludG8oKTtcclxuICAgICAgICAgICAgICAgIC8vIENvdW50cnlEYXRhLmluc18uY2FsX01haW5EYXRhKEdhbWVDb25maWcuTUFJTl9QT1BVTEFUSU9OLDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXHJcbiAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSozO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNyZWF0ZVBlb3BsZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWimeWGheS6uuihjOWKqOmAu+i+kSovXHJcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirlopnlhoXkurrooYzliqjpgLvovpEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIHByb3RlY3RlZCBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcclxuICAgIHtcclxuXHJcbiAgICAgICAgLy8gdGhpcy50b3dlZFRvTW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUcmFnZXQodGFyZ2V0OkxheWEuU3ByaXRlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXQ7XHJcbiAgICAgICAgLy/mtYvor5VcclxuICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXQ7XHJcbiAgICAgICAgLy8gdGhpcy50b3dhcmQueCA9IHRhcmdldC54O1xyXG4gICAgICAgIC8vIHRoaXMudG93YXJkLnkgPSB0YXJnZXQueTtcclxuICAgIH1cclxuXHJcbiAgICAvKip0b3dlcmTovazljJbmiJDkvY3np7sgKi9cclxuICAgIHByb3RlY3RlZCB0b3dlZFRvTW92ZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKCF0aGlzLnRvd2FyZC5yb3RhdGlvbikgdGhpcy50b3dhcmQucm90YXRpb24gPSBUb29sLnJvdGF0ZVJvcGVQb2ludF8yKHRoaXMuc3AueCx0aGlzLnNwLnksdGhpcy50YXJnZXROb2RlLngsdGhpcy50YXJnZXROb2RlLnkpOztcclxuICAgICAgICB0aGlzLnBlb3BsZVRvd2VyZCgpOy8v6K6p55uu5qCH5pyd5ZCR6K6h566X5pWwXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pyd5ZCRICB0b3dlcmTnp7vliqggKi9cclxuICAgIHByaXZhdGUgcG9zTW92ZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3AueCArPSB0aGlzLnRvd2FyZC5zcGVlZCpUb29sLnJvdGF0aW9uU2V0KHRoaXMudG93YXJkLnJvdGF0aW9uLFwic2luXCIpO1xyXG4gICAgICAgIHRoaXMuc3AueSArPSB0aGlzLnRvd2FyZC5zcGVlZCpUb29sLnJvdGF0aW9uU2V0KHRoaXMudG93YXJkLnJvdGF0aW9uLFwiY29zXCIpO1xyXG4gICAgICAgIHRoaXMuc3Aucm90YXRpb24gPSB0aGlzLnRvd2FyZC5yb3RhdGlvbjtcclxuICAgICAgICBpZihUb29sLmJsb2NrVGVzdCh0aGlzLnRhcmdldE5vZGUsdGhpcy5zcCkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy50YXJnZXROb2RlLm5hbWUgPT09IFwic3BfZG9vclwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmdvT3V0KHRoaXMudHlwZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3RvcnlQZW9wbGUodHJ1ZSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvb3JQZW9wbGVfVG9PdXQoKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdG9yeVBlb3BsZSgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuc3AueCA8IDAgfHwgdGhpcy5zcC55ID4gOTAwIHx8IHRoaXMuc3AueCA+IDIwMDApIHt0aGlzLmRlc3RvcnlQZW9wbGUoKTt9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zcC5yb3RhdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKuS6uumdouWQkSAqL1xyXG4gICAgcHJvdGVjdGVkIHBlb3BsZVRvd2VyZCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKCk7Ly/ojrflvpfkupTkuKrngrnvvIzmoLnmja7nm67moIflnZDmoIforqHnrpdcclxuICAgICAgICB0aGlzLnRlc3RUb3dlcmQoKTsvL+ajgOa1i+aYr+WQpuespuWQiOimgeaxgiDkuI3nrKblkIggKyAtIDVcclxuICAgIH1cclxuXHJcbiAgICAvKirmo4DmtYvooYzotbDmlrnlkJEgKi9cclxuICAgIHByb3RlY3RlZCB0ZXN0VG93ZXJkKCkgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHBvd2VyID0gdGhpcy50ZXN0Q29saWRlcigpOy8vIC0xIDAgMSAyIDMgNCA1XHJcbiAgICAgICAgaWYocG93ZXIgPiAwKVxyXG4gICAgICAgIHsvL+aSnuWIsOS6humcgOimgei9rOaWueWQkVxyXG4gICAgICAgICAgICB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRDdHIocG93ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmp1ZGdlTGVmdFJpZ2h0KCk7ICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wb3NNb3ZlKCk7Ly/np7vliqhcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmRUYXJnZXQoKTtcclxuICAgICAgICB0aGlzLnRvd2FyZC5zcGVlZCA9IHRoaXMuc3BlZWQ7ICAgICAgXHJcbiAgICAgICAgdGhpcy5wb3NNb3ZlKCk7Ly/np7vliqggIFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumAn+W6puaOp+WItiAqL1xyXG4gICAgcHJpdmF0ZSBzcGVlZEN0cihwb3dlcikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50b3dhcmQuc3BlZWQgPSB0aGlzLnNwZWVkKigocG93ZXIrMSkvKHRoaXMudG93YXJkUG9zLmxlbmd0aCsyKSk7IFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3BlZWQgOjpcIiArIHRoaXMudG93YXJkLnNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirliKTmlq3mlrnlkJEgKi9cclxuICAgIHByb3RlY3RlZCBqdWRnZUxlZnRSaWdodCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3RvcERpKys7XHJcbiAgICAgICAgaWYodGhpcy5zdG9wRGk+MzYpIHt0aGlzLnN0b3BEaSA9IDA7cmV0dXJuO31cclxuICAgICAgICB0aGlzLnRvd2FyZC5yb3RhdGlvbkNoYW5nZSArPSBHYW1lQ29uZmlnLlRFU1RfUE9JTlRfUk87XHJcbiAgICAgICAgbGV0IHJvMSA9IHRoaXMudG93YXJkLnJvdGF0aW9uIC0gdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2U7XHJcbiAgICAgICAgbGV0IHJvMiA9IHRoaXMudG93YXJkLnJvdGF0aW9uICsgdGhpcy50b3dhcmQucm90YXRpb25DaGFuZ2U7XHJcbiAgICAgICAgdGhpcy5nZXRUb3dlcmRQb3Mocm8xKTtcclxuICAgICAgICBsZXQgbnVtUm8xID0gdGhpcy50ZXN0Q29saWRlcigpO1xyXG4gICAgICAgIHRoaXMuZ2V0VG93ZXJkUG9zKHJvMik7XHJcbiAgICAgICAgbGV0IG51bVJvMiA9IHRoaXMudGVzdENvbGlkZXIoKTtcclxuICAgICAgICBpZihudW1SbzEgPT0gLTEpIHt0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvMTsgcmV0dXJuO31cclxuICAgICAgICBpZihudW1SbzIgPT0gLTEpIHt0aGlzLnRvd2FyZC5yb3RhdGlvbiA9IHJvMjsgcmV0dXJuO31cclxuICAgICAgICB0aGlzLmp1ZGdlTGVmdFJpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqZmluZFRhcmdldOWvu+aJvuebruaghyAqL1xyXG4gICAgcHJpdmF0ZSBmaW5kVGFyZ2V0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IENhID0gdGhpcy50b3dhcmQucm90YXRpb24gLSB0aGlzLnRvd2FyZC50YXJnZXRSb3RhdGlvbjtcclxuICAgICAgICBpZihDYSA+IDApIHRoaXMudG93YXJkLnJvdGF0aW9uIC09IDU7XHJcbiAgICAgICAgICAgIGVsc2UgaWYoIENhIDwgMCApIHRoaXMudG93YXJkLnJvdGF0aW9uICs9NTtcclxuICAgICAgICBpZiggTWF0aC5hYnMoQ2EpIDwgNSkgdGhpcy50b3dhcmQucm90YXRpb24gKz0gQ2E7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgLyoq5qOA5rWL5piv5ZCm56Kw5pKeIOaSnuWIsOS6hui/lOWbnnR1cmUgLTHlj6/ku6XotbAgMOS7peS4iuihqOekuueisOaSnuWIsOWTquS4queCuSovXHJcbiAgICBwcm90ZWN0ZWQgdGVzdENvbGlkZXIoKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCBudW0gPSAtMTtcclxuICAgICAgICBsZXQgYXJlYSA6IEFycmF5PExheWEuU3ByaXRlPj0gRGF0YU1hbmFnZXIuaW5zXy5hcnJfUmlnaHRBcmVhO1xyXG4gICAgICAgIGlmKHRoaXMuc3AueDw5ODEpIGFyZWEgPSBEYXRhTWFuYWdlci5pbnNfLmFycl9MZWZ0QXJlYTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPGFyZWEubGVuZ3RoO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMuYm9ybk5vZGUsdGhpcy5zcCkpIHtyZXR1cm4gLTE7fVxyXG4gICAgICAgICAgICBpZihUb29sLmJsb2NrVGVzdChhcmVhW2ldLHRoaXMuc3ApKXtyZXR1cm4gMDt9Ly/lpoLmnpzlt7Lnu4/mkp7kuIrkuobjgIIgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaCA9IDA7aDx0aGlzLnRvd2FyZFBvcy5sZW5ndGg7aCsrKVxyXG4gICAgICAgICAgICB7Ly/kupTkuKrngrnmo4DmtYtcclxuICAgICAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KHRoaXMudGFyZ2V0Tm9kZSx0aGlzLnRvd2FyZFBvc1toXSkpe3JldHVybi0xO31cclxuICAgICAgICAgICAgICAgIGlmKFRvb2wuYmxvY2tUZXN0KGFyZWFbaV0sdGhpcy50b3dhcmRQb3NbaF0pKVxyXG4gICAgICAgICAgICAgICAgey8v56a75Lq65pyA6L+R55qE54K5XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gaCsxOy8vMe+8jDLvvIwz77yMNO+8jDVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Lq66Z2i5ZCR55qE5LqU5Liq5qOA5rWL54K5ICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0VG93ZXJkUG9zKHJvdGF0aW9uVGVzdD8pIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCByb3RhdGlvbiA9IHRoaXMudG93YXJkLnJvdGF0aW9uOy8v5L2/55So5b2T5YmN6Z2i5ZCRXHJcbiAgICAgICAgaWYocm90YXRpb25UZXN0KSByb3RhdGlvbiA9IHJvdGF0aW9uVGVzdDtcclxuICAgICAgICBlbHNlIHRoaXMua2VlcFRvd2VyZERhdGEoKTsvL+S/neWtmCDnjrDlnKjkuLrmraLliLDnm67moIfngrnnmoTop5LluqZcclxuICAgICAgICBpZihyb3RhdGlvbiA9PT0gdW5kZWZpbmVkKSBcclxuICAgICAgICB7Ly/lpoLmnpzop5LluqbmmK91bmRlZlxyXG4gICAgICAgICAgICByb3RhdGlvbiA9IHRoaXMudG93YXJkLnRhcmdldFJvdGF0aW9uLy/nm67moIfop5LluqbvvIzliJ3lp4vop5LluqYgICBcclxuICAgICAgICAgICAgdGhpcy50b3dhcmQucm90YXRpb24gPSByb3RhdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5L2N56e76ZyA6KaB55qE5Y+Y6YePXHJcbiAgICAgICAgbGV0IGNvcyA6IG51bWJlciA9IFRvb2wucm90YXRpb25TZXQocm90YXRpb24sXCJjb3NcIik7XHJcbiAgICAgICAgbGV0IHNpbiA6IG51bWJlciA9IFRvb2wucm90YXRpb25TZXQocm90YXRpb24sXCJzaW5cIik7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0teDo6XCIgKyB0aGlzLnNwLnggKyBcInk6OlwiICsgdGhpcy5zcC55KTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVDb25maWcuVEVTVF9QT0lOVF9DT1VOVDtpKyspLy/orrDlvZXkupTkuKpcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBpZighdGhpcy50b3dhcmRQb3NbaV0pIHRoaXMudG93YXJkUG9zW2ldID0ge307ICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy50b3dhcmRQb3NbaV0ueCA9IHRoaXMuc3AueCArIEdhbWVDb25maWcuVEVTVF9QT0lOVF9ESUMqc2luKihpKzEpO1xyXG4gICAgICAgICAgICB0aGlzLnRvd2FyZFBvc1tpXS55ID0gdGhpcy5zcC55ICsgR2FtZUNvbmZpZy5URVNUX1BPSU5UX0RJQypjb3MqKGkrMSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRvd2FyZFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5L+d5a2YIHRvd2Vy5L+h5oGvICovXHJcbiAgICBwcm90ZWN0ZWQga2VlcFRvd2VyZERhdGEoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+WtmOWCqOeOsOWcqOeCueWIsOebruagh+inkuW6plxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG93YXJkLnRhcmdldFJvdGF0aW9uID0gVG9vbC5yb3RhdGVSb3BlUG9pbnRfMih0aGlzLnNwLngsdGhpcy5zcC55LHRoaXMudGFyZ2V0Tm9kZS54LHRoaXMudGFyZ2V0Tm9kZS55KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlnKjov5DooYznp7vliqjpgLvovpHkuYvliY0g55qE54m55q6K5pON5L2cICovXHJcbiAgICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvKioqXHJcbiAgICAgKiDov5vnqIsgLyDlh7rln47pgLvovpEgXHJcbiAgICAgKiBAdHlwZSB0cnVl6L+b5Z+OICBmYWxzZeWHuuWfjlxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBwZW9wbGVHbyh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAgICAgaWYodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgLy/ov5vln47mlrnms5VcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0UGVvcGxlX1RvRG9vcigpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8v5Ye65Z+O5pa55rOVXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZU91dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Z+O5aSW5by65Yi26L+b6ZeoICovXHJcbiAgICBwcml2YXRlIG91dFBlb3BsZV9Ub0Rvb3IoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBsZXQgZGlyWD0xMDAwLXRoaXMuc3AueDtcclxuICAgICAgICBsZXQgZGlyWT00MTAtdGhpcy5zcC55O1xyXG4gICAgICAgIGxldCBkaXM9TWF0aC5zcXJ0KE1hdGgucG93KDEwMDAtdGhpcy5zcC54LDIpK01hdGgucG93KDQxMC10aGlzLnNwLnksMikpO1xyXG4gICAgICAgIHRoaXMuZGlyWD1kaXJYL2RpcztcclxuICAgICAgICB0aGlzLmRpclk9ZGlyWS9kaXM7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6Zeo5by65Yi25Ye65Z+O5aSWICovXHJcbiAgICBwcml2YXRlIGRvb3JQZW9wbGVfVG9PdXQoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pc091dCA9IHRydWU7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBsZXQgeD1NYXRoLnJhbmRvbSgpKjEzNis5MzI7XHJcbiAgICAgICAgbGV0IHk9MzUwO1xyXG4gICAgICAgIHRoaXMuc2V0UG9zKHgseSx0aGlzLnNwKTtcclxuICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKSoyLTE7XHJcbiAgICAgICAgdGhpcy5kaXJZPS1NYXRoLnJhbmRvbSgpKjAuNy0wLjI7XHJcbiAgICAgICAgLy8gdGhpcy5vcGVuQmVoYXZpb3VyKCk7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XHJcbiAgICB9XHJcblxyXG4gICAvKirlh7rln47pgLvovpEgKi9cclxuICAgcHJvdGVjdGVkIHBlb3BsZU91dCgpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwic3BfZG9vclwiKSBhcyBMYXlhLlNwcml0ZSk7Ly/orr7nva7nm67moIfmmK/pl6hcclxuICAgfVxyXG5cclxuICAgLyoq6L+b5Z+O5pa55rOVIOS7juato+mXqOWIsOafkOS4gOS4quS9j+WuhSovXHJcbiAgIHByb3RlY3RlZCBwZW9wbGVJbnRvKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgICBsZXQgYm9ybk5vZGUgPSB0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJzcF9kb29yXCIpIGFzIExheWEuU3ByaXRlO1xyXG4gICAgICAgIHRoaXMuaXNPdXQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XHJcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgICB0aGlzLnNldFBvcyhib3JuTm9kZS54LGJvcm5Ob2RlLnkgKyA0MCxib3JuTm9kZSk7XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgdGhpcy5vcGVuQmVoYXZpb3VyKCk7XHJcbiAgIH1cclxuXHJcbiAgIC8qKuS7jmhvdXNl5Lit6I635Y+WIOS4gOS4qumaj+acuueahOeCuSAqL1xyXG4gICBwcm90ZWN0ZWQgZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKSA6IExheWEuU3ByaXRlXHJcbiAgIHtcclxuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKCgoaG91c2VOb2RlIGFzIExheWEuU3ByaXRlKS5fY2hpbGRyZW4ubGVuZ3RoLTEpKnJhbmRvbSk7XHJcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgOkxheWEuU3ByaXRlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIC0tLS0tLS0tLSBnZXRUYXJnZXQgXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5kZXggOjpcIiArIGluZGV4KTtcclxuICAgICAgICBpZihpbmRleCA+PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGhvdXNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImhvdXNlX1wiK2luZGV4KTtcclxuICAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLpmo/mnLrmlbDlj5bplJlcIik7XHJcbiAgICAgICAgLy8gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICB9XHJcblxyXG4gICAgLyoq5Lq65raI5aSxIGlzcmVjb3ZlcuS4jeWbnuaUtuWQlyAqL1xyXG4gICAgcHJvdGVjdGVkIGRlc3RvcnlQZW9wbGUobm90UmVjb3Zlcj8pIDogdm9pZFxyXG4gICAgeyAgIFxyXG4gICAgICAgIGlmKCFub3RSZWNvdmVyKSBMYXlhLlBvb2wucmVjb3Zlcih0aGlzLnR5cGUsdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zcC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKCF0aGlzLmlzT3V0KSB0aGlzLmRlc3RvcnlJbm5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWimeWGheS6uuWIoOmZpCDnibnmrorlpITnkIYgKi9cclxuICAgIHByb3RlY3RlZCBkZXN0b3J5SW5uZXIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+iuoeaXtuWZqOa4healmlxyXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLnBlb3BsZV9Qb3NJbm5lcik7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMudHlwZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5DT01NT05fTUFOOlxyXG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzBdPjApXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMF0tLTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLkJBTkRJVF9NQU46XHJcbiAgICAgICAgICAgICAgICBpZihDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbM10+MClcclxuICAgICAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVszXS0tO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVDb25maWcuUk9CQkVSX01BTjpcclxuICAgICAgICAgICAgICAgIGlmKENvdW50cnlEYXRhLmluc18uYWxyZWFkeUNyZWF0ZVs0XT4wKVxyXG4gICAgICAgICAgICAgICAgQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzRdLS07XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZUNvbmZpZy5TQ0lFTlRJU1RfTUFOOlxyXG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzFdPjApXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMV0tLTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSBHYW1lQ29uZmlnLlNUQVJfTUFOOlxyXG4gICAgICAgICAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlWzJdPjApXHJcbiAgICAgICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmFscmVhZHlDcmVhdGVbMl0tLTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coQ291bnRyeURhdGEuaW5zXy5hbHJlYWR5Q3JlYXRlKTtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1Blb3BsZVwiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbmRpdCBleHRlbmRzIFBlb3BsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKirmiqLliqvnmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3V0TW9uZXlUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze06L+b6KGM5YG355uXKDUtOCnliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjUrMztcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzlgbfnm5dcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5DdXRNb25leSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgLy/ml7bpl7TlkI7miqLliqtcclxuICAgIHByaXZhdGUgQ3V0TW9uZXkoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJhbmRvbT1NYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGlmKHJhbmRvbTwwLjUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+aKouWKq+aIkOWKn1xyXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLm1vbmV5PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCsxMCk7XHJcbiAgICAgICAgICAgIHRoaXMubG93U3VwcG9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtOi/m+ihjOWBt+eblyg1LTgp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo1KzM7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5YG355uXXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuQ3V0TW9uZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumZjeS9juW5uOemj+W6piAqL1xyXG4gICAgcHJpdmF0ZSBsb3dTdXBwb3J0KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIENvdW50cnlEYXRhLmluc18ucG9wdWxhclN1cHBvcnQtPTAuMTtcclxuICAgIH1cclxuXHJcbiAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgIHtcclxuICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgfVxyXG5cclxuICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgbGV0IHRhcmdldE5vZGUgOiBMYXlhLlNwcml0ZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgIGZvcihsZXQgaT0wO3RydWU7aSsrKVxyXG4gICAgICAge1xyXG4gICAgICAgICAgIHRhcmdldE5vZGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgICAgaWYodGFyZ2V0Tm9kZSAhPT0gdGhpcy5ib3JuTm9kZSkgYnJlYWs7XHJcbiAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgdGhpcy5jdXRNb25leVRpbWUoKTtcclxuICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuaW1wb3J0IFRvb2wgZnJvbSBcIi4uLy4uL1Rvb2wvVG9vbFwiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uLy4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24gZXh0ZW5kcyBQZW9wbGV7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTsgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5aKZ5YaF6YC76L6RICovXHJcbiAgICBwcm90ZWN0ZWQgcGVvcGxlX1Bvc0lubmVyKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMudG93ZWRUb01vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirph43lhplzcGVjaWFsZG8gKi9cclxuICAgIHByb3RlY3RlZCBzcGVjaWFsRG8oKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvL+iOt+WPluWNoOavlOaVsOe7hFxyXG4gICAgICAgIGxldCBhcnJfcGVyY2VudCA9IFRvb2wuZ2V0UGVyY2VudEFyZWEoQ291bnRyeURhdGEuaW5zXy5hcnJfcGVyc29uUGVyY2VudE5hbWUpO1xyXG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGxldCBpbmRleDtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPGFycl9wZXJjZW50Lmxlbmd0aDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZighYXJyX3BlcmNlbnRbaSsxXSkgYnJlYWs7XHJcbiAgICAgICAgICAgIGlmKGFycl9wZXJjZW50W2ldIDwgcmFuZG9tICYmIHJhbmRvbSA8PSBhcnJfcGVyY2VudFtpKzFdKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaW5kZXggPT09IHVuZGVmaW5lZCkge2NvbnNvbGUubG9nKFwi5qaC546H6K6h566X5Ye66ZSZXCIpO3JldHVybjt9XHJcbiAgICAgICAgbGV0IGhvdXNlTm9kZSA9IHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpO1xyXG4gICAgICAgIGxldCB0YXJnZXROb2RlIDogTGF5YS5TcHJpdGUgPSB0aGlzLmdldFRhcmdlUG9zKGhvdXNlTm9kZSk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7dHJ1ZTtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0YXJnZXROb2RlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgICAgICBpZih0YXJnZXROb2RlICE9PSB0aGlzLmJvcm5Ob2RlKSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoKGluZGV4KVxyXG4gICAgICAgIHsgICAgLyoqMC3ljLvnlJ8gMS3orablr58gMi3llYbkurogLTPmuLjmiYvlpb3pl7IgLTTlhpzmsJEqL1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0aGlzLnZpZXcuZ2V0Q2hpbGRCeU5hbWUoXCJob3VzZVwiKS5nZXRDaGlsZEJ5TmFtZShcImhvc3BpdGFsXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTsgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwiZmFybVwiKSBhcyBMYXlhLlNwcml0ZSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2JiZXIgZXh0ZW5kcyBQZW9wbGV7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWBt+WPlui0ouaUv+eahOaWueW8jyzlhYjnu5nkuojml7bpl7QgKi9cclxuICAgIHB1YmxpYyBjdXRNb25leVRpbWUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7Tov5vooYzlgbfnm5coMy02KeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMyszO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOWBt+ebl1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLkN1dE1vbmV5KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aXtumXtOWQjuWBt+WPllxyXG4gICAgcHJpdmF0ZSBDdXRNb25leSgpOnZvaWRcclxuICAgIHtcclxuICAgICAgICBsZXQgcmFuZG9tPU1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgaWYocmFuZG9tPDAuNSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5YG355uX5oiQ5YqfXHJcbiAgICAgICAgICAgIENvdW50cnlEYXRhLmluc18ubW9uZXktPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XHJcbiAgICAgICAgICAgIHRoaXMubG93U3VwcG9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+e7meS6iOmaj+acuuaXtumXtOi/m+ihjOWBt+eblygzLTYp5YiG6ZKfXHJcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSozKzM7XHJcbiAgICAgICAgLy90aW1l56eS5LmL5ZCO6L+b6KGM5YG355uXXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCo2MCx0aGlzLHRoaXMuQ3V0TW9uZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumZjeS9juW5uOemj+W6piAqL1xyXG4gICAgcHJpdmF0ZSBsb3dTdXBwb3J0KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIENvdW50cnlEYXRhLmluc18ucG9wdWxhclN1cHBvcnQtPTAuMDU7XHJcbiAgICB9XHJcbiAgICAvKirlopnlhoUgKi9cclxuICAgLyoq5aKZ5YaF6YC76L6RICovXHJcbiAgIHByb3RlY3RlZCBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xyXG4gICAgICAgdGhpcy50b3dlZFRvTW92ZSgpO1xyXG4gICB9XHJcblxyXG4gICAvKirph43lhplzcGVjaWFsZG8gKi9cclxuICAgcHJvdGVjdGVkIHNwZWNpYWxEbygpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XHJcbiAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgZm9yKGxldCBpPTA7dHJ1ZTtpKyspXHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgICAgICBpZih0YXJnZXROb2RlICE9PSB0aGlzLmJvcm5Ob2RlKSBicmVhaztcclxuICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFRyYWdldCh0YXJnZXROb2RlKTtcclxuICAgICAgICB0aGlzLmN1dE1vbmV5VGltZSgpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuaW1wb3J0IFRvb2wgZnJvbSBcIi4uLy4uL1Rvb2wvVG9vbFwiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaWVudGlzdCBleHRlbmRzIFBlb3BsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirkuqfnlJ/np5HmioDnmoTmlrnlvI8s5YWI57uZ5LqI5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgY3JlYXRlVGVjaG5vbG9neVRpbWUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7QoMS0zKeWIhumSn1xyXG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMisxO1xyXG4gICAgICAgIC8vdGltZeenkuS5i+WQjui/m+ihjOS6p+eUn+enkeaKgOWAvFxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAqNjAsdGhpcyx0aGlzLmNyZWF0ZVRlY2hub2xvZ3kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuS6p+eUn+enkeaKgOWAvCAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVUZWNobm9sb2d5KCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIENvdW50cnlEYXRhLmluc18udGVjaG5vbG9neSs9MC41O1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze0KDEtMynliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjIrMTtcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzkuqfnlJ/np5HmioDlgLxcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5jcmVhdGVUZWNobm9sb2d5KTtcclxuICAgIH1cclxuICAgIC8qKuWimeWGhemAu+i+kSAqL1xyXG4gICAgcHJvdGVjdGVkIHBlb3BsZV9Qb3NJbm5lcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuc2V0VHJhZ2V0KHRoaXMudmlldy5nZXRDaGlsZEJ5TmFtZShcImhvdXNlXCIpLmdldENoaWxkQnlOYW1lKFwicGFsYWNlXCIpIGFzIExheWEuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnRvd2VkVG9Nb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6YeN5YaZc3BlY2lhbGRvICovXHJcbiAgICBwcm90ZWN0ZWQgc3BlY2lhbERvKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZWNobm9sb2d5XCIpIGFzIExheWEuU3ByaXRlKTsgICAgXHJcbiAgICAgICAgdGhpcy5jcmVhdGVUZWNobm9sb2d5VGltZSgpOyAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuaW1wb3J0IFRvb2wgZnJvbSBcIi4uLy4uL1Rvb2wvVG9vbFwiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXIgZXh0ZW5kcyBQZW9wbGV7XHJcblxyXG4gICAgY29uc3RydWN0b3Iodmlldyx0eXBlOnN0cmluZyxpc091dCl7XHJcbiAgICAgICAgc3VwZXIodmlldyx0eXBlLGlzT3V0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoq5piO5pif5pWI5bqU55qE5pa55byPLOWFiOe7meS6iOaXtumXtCAqL1xyXG4gICAgcHVibGljIGNyZWF0ZVN0YXJUaW1lKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze0KDEtMynliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjIrMTtcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzkuqfnlJ/mlYjlupTlgLxcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5jcmVhdGVTdGFyVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuS6p+eUn+aViOW6lOWAvCDmlYjlupTlgLzkuLrlubjnpo/luqYqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVTdGFyVmFsdWUoKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgQ291bnRyeURhdGEuaW5zXy5wb3B1bGFyU3VwcG9ydCs9MC41O1xyXG4gICAgICAgIC8v57uZ5LqI6ZqP5py65pe26Ze0KDEtMynliIbpkp9cclxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjIrMTtcclxuICAgICAgICAvL3RpbWXnp5LkuYvlkI7ov5vooYzkuqfnlJ/np5HmioDlgLxcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSh0aW1lKjYwKjYwLHRoaXMsdGhpcy5jcmVhdGVTdGFyVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgLyoq5aKZ5YaF6YC76L6RICovXHJcbiAgIHByb3RlY3RlZCBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcclxuICAge1xyXG4gICAgICAgLy8gdGhpcy5zZXRUcmFnZXQodGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwYWxhY2VcIikgYXMgTGF5YS5TcHJpdGUpO1xyXG4gICAgICAgdGhpcy50b3dlZFRvTW92ZSgpO1xyXG4gICB9XHJcblxyXG4gICAvKirph43lhplzcGVjaWFsZG8gKi9cclxuICAgcHJvdGVjdGVkIHNwZWNpYWxEbygpIDogdm9pZFxyXG4gICB7XHJcbiAgICAgICBsZXQgaG91c2VOb2RlID0gdGhpcy52aWV3LmdldENoaWxkQnlOYW1lKFwiaG91c2VcIik7XHJcbiAgICAgICBsZXQgdGFyZ2V0Tm9kZSA6IExheWEuU3ByaXRlID0gdGhpcy5nZXRUYXJnZVBvcyhob3VzZU5vZGUpO1xyXG4gICAgICAgZm9yKGxldCBpPTA7dHJ1ZTtpKyspXHJcbiAgICAgICB7XHJcbiAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRoaXMuZ2V0VGFyZ2VQb3MoaG91c2VOb2RlKTtcclxuICAgICAgICAgICBpZih0YXJnZXROb2RlICE9PSB0aGlzLmJvcm5Ob2RlKSBicmVhaztcclxuICAgICAgIH1cclxuICAgICAgIHRoaXMuc2V0VHJhZ2V0KHRhcmdldE5vZGUpO1xyXG4gICAgICAgdGhpcy5jcmVhdGVTdGFyVGltZSgpO1xyXG4gICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDZW50ZXIgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiArIHRoaXMuc2NyZWVuV2lkdGgpO1xyXG4gICAgICAgIGlmKHNjcmVlbldpZHRoIDwgODAwKSAodGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShcImdhbWVOYW1lXCIpIGFzIExheWEuTGFiZWwpLmZvbnRTaXplID0gMTI1O1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuU3ByaXRlKS54ID0gKHNjcmVlbldpZHRoLSA2NjcpLzI7ICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgV29ybGRFdmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvV29ybGRFdmVudE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi4vLi4vdWkvbGF5YU1heFVJXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgVUlNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1VJTWFuYWdlclwiO1xyXG5pbXBvcnQgUGVvcGxlTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9QZW9wbGVNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi8uLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgTXNnRGlhbG9nIGZyb20gXCIuLi8uLi9Db3JlL01zZ0RpYWxvZ1wiO1xyXG5pbXBvcnQgQ291bnRyeURhdGEgZnJvbSBcIi4uLy4uL0NvcmUvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IEJ1eURpYWxvZyBmcm9tIFwiLi4vLi4vQ29yZS9CdXlEaWFsb2dcIjtcclxuaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vLi4vUGVyZmViL1Blb3BsZVwiO1xyXG5cclxuLyoqXHJcbiAqIOS4lueVjOeuoeeQhuWZqOiEmuacrFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdvcmxkIGV4dGVuZHMgdWkuR2FtZVdvcmxkVUl7XHJcbiAgICAvKipEYXRhTWFuYWdlciAg5Y2V5L6LICovXHJcbiAgICAvKirkuovku7blj5HnlJ/lmaggKi9cclxuICAgIHByaXZhdGUgd29ybGRFdmVudE1hbmFnZXIgOiBXb3JsZEV2ZW50TWFuYWdlcjtcclxuICAgIC8qKuS6uuexu+euoeeQhuWZqCovXHJcbiAgICBwcml2YXRlIHBlb3BsZU1hbmFnZXIgOiBQZW9wbGVNYW5hZ2VyO1xyXG4gICAgLyoqVUnnrqHnkIblmaggKi9cclxuICAgIHByaXZhdGUgdWlNYW5hZ2VyIDogVUlNYW5hZ2VyO1xyXG4gICAgLyoq5raI5oGv6YCa55So5qGGICovXHJcbiAgICBwcml2YXRlIG1zZ0RpYWxvZyA6IE1zZ0RpYWxvZztcclxuICAgIC8qKui0reS5sOahhiAqL1xyXG4gICAgcHJpdmF0ZSBidXlEaWFsb2c6QnV5RGlhbG9nO1xyXG4gICAgXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8qKuWxj+W5leWuveW6piAqL1xyXG4gICAgcHJpdmF0ZSBzY3JlZW5XaWR0aCA6IG51bWJlcjtcclxuICAgIC8qKum8oOagh+aYr+WQpuaMieS4iyAqL1xyXG4gICAgcHJpdmF0ZSBpc0Rvd24gOiBib29sZWFuO1xyXG4gICAgLyoq6byg5qCH54K56K6w5b2VICovXHJcbiAgICBwcml2YXRlIG1vdXNlUG9zIDogYW55O1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLyoqMm1pbuiuoeaXtiAqL1xyXG4gICAgcHJpdmF0ZSB0aW1lckNvdW50IDogbnVtYmVyO1xyXG4gICAgLyoq5Ye66Ze06ZqU6K6h5pe2ICovXHJcbiAgICBwcml2YXRlIHRpbWVyQ291bnRfb3V0IDogbnVtYmVyO1xyXG4gICAgLyoq6L+bICovXHJcbiAgICBwcml2YXRlIHRpbWVyQ291bnRfaW4gOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdhbWVEYXRhSW5pdCgpOy8v5ri45oiP5Y+Y6YeP5Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpOy8v57uZ5qGl5re75Yqg5LqL5Lu2IFxyXG4gICAgICAgIHRoaXMuc2NyZWVuU2V0dGluZygpOy8v5bGP5bmV5bGF5LitXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnQoKTsvL+a4uOaIj+a1geeoi+W8gOWni1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc18uc2V0QXJlYSh0aGlzLnNwX3NjZW5lLmdldENoaWxkQnlOYW1lKFwiaG91c2VcIikpO1xyXG4gICAgICAgIExheWEudGltZXIubG9vcCgxMDAwLHRoaXMsdGhpcy5jdXJyZW50UmF0aW8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaVsOaNruWIneWni+WMliAqL1xyXG4gICAgcHJpdmF0ZSBnYW1lRGF0YUluaXQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLndvcmxkRXZlbnRNYW5hZ2VyID0gbmV3IFdvcmxkRXZlbnRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyID0gbmV3IFBlb3BsZU1hbmFnZXIodGhpcy5zcF9zY2VuZSk7XHJcbiAgICAgICAgdGhpcy51aU1hbmFnZXIgPSBuZXcgVUlNYW5hZ2VyKHRoaXMuc3BfVUkpO1xyXG4gICAgICAgIHRoaXMubXNnRGlhbG9nID0gbmV3IE1zZ0RpYWxvZygpOyAgICAgIFxyXG4gICAgICAgIHRoaXMuYnV5RGlhbG9nPW5ldyBCdXlEaWFsb2coKTtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zID0ge307XHJcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVyQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZXJDb3VudF9vdXQgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZXJDb3VudF9pbiA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5re75Yqg5LqL5Lu2ICovXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5zdGFnZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sdGhpcyx0aGlzLm1vdXNlRG93bik7XHJcbiAgICAgICAgdGhpcy5zcF9zY2VuZS5vbihMYXlhLkV2ZW50Lk1PVVNFX1VQLHRoaXMsdGhpcy5tb3VzZVVwKTtcclxuICAgICAgICB0aGlzLnNwX3NjZW5lLm9uKExheWEuRXZlbnQuTU9VU0VfTU9WRSx0aGlzLHRoaXMubW91c2VNb3ZlKTtcclxuICAgICAgICAvL+e7memXqOW4rueCueeCueWHu+S6iyAgIFxyXG4gICAgICAgIHRoaXMuY2xpY2tIb3VzZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5kb29yQ3RyKTtcclxuICAgICAgICB0aGlzLmNsaWNrSG91c2Uub24oTGF5YS5FdmVudC5NT1VTRV9PVkVSLHRoaXMsdGhpcy5tb3VzZU92ZXIpO1xyXG4gICAgICAgIHRoaXMuY2xpY2tIb3VzZS5vbihMYXlhLkV2ZW50Lk1PVVNFX09WRVIsdGhpcyx0aGlzLm1vdXNlT3V0KTtcclxuICAgICAgICAvL+WMu+mmhuS6i+S7tue7keWumlxyXG4gICAgICAgIHRoaXMuaG9zcGl0YWwub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuSE9TUElUQUxdKTtcclxuICAgICAgICAvL+WGm+mYn+S6i+S7tue7keWumlxyXG4gICAgICAgIHRoaXMuYXJteS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5BUk1ZXSk7XHJcbiAgICAgICAgLy/nsq7ku5Pkuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLmZhcm0ub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRkFSTV0pOyAgICAgICAgXHJcbiAgICAgICAgLy/np5HmioDppobkuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLnRlY2hub2xvZ3kub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuVEVDSE5PTE9HWV0pOyAgICAgICAgXHJcbiAgICAgICAgLy/mlrDpl7vngrnkuovku7bnu5HlrppcclxuICAgICAgICAvL3RoaXMuZXZlbnRIb3VzZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5FVkVOVF9IT1VTRV0pOyAgICAgXHJcbiAgICAgICAgLy/mlrDpl7vnmoflrqvnu5HlrppcclxuICAgICAgICB0aGlzLnBhbGFjZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5QQUxBQ0VdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlsY/luZUg5bGA5LitKi9cclxuICAgIHByaXZhdGUgc2NyZWVuU2V0dGluZygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiArIHRoaXMuc2NyZWVuV2lkdGgpO1xyXG4gICAgICAgIHRoaXMuc3Bfc2NlbmUueCA9IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKS8yO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+S6i+S7tuWbnuiwg1xyXG4gICAgLyoq6byg5qCH5oKs5rWuICovXHJcbiAgICBwcml2YXRlIG1vdXNlT3ZlcigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2xpY2tIb3VzZS5sb2FkSW1hZ2UoXCJtYXAvZG9vckhvdXNlMi5wbmdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq56a75byAICovXHJcbiAgICBwcml2YXRlIG1vdXNlT3V0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jbGlja0hvdXNlLmxvYWRJbWFnZShcIm1hcC9kb29ySG91c2UucG5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKumXqOeahOW8gOWFsyAqL1xyXG4gICAgcHJpdmF0ZSBkb29yQ3RyKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5pc0Rvb3JPcGVuKVxyXG4gICAgICAgIHsvL+W8gOmXqFxyXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kb29yQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHsvL+WFs+mXqFxyXG4gICAgICAgICAgICBDb3VudHJ5RGF0YS5pbnNfLmlzRG9vck9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRvb3JPcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWFs+mXqCAqL1xyXG4gICAgcHJpdmF0ZSBkb29yQ2xvc2UoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy5hbmkxLmlzUGxheWluZykgdGhpcy5hbmkxLnBsYXkoMCxmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5byA6ZeoICovXHJcbiAgICBwcml2YXRlIGRvb3JPcGVuKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMuYW5pMi5pc1BsYXlpbmcgJiYgIXRoaXMuYW5pMS5pc1BsYXlpbmcpIHRoaXMuYW5pMi5wbGF5KDAsZmFsc2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKirnp7vliqggKi9cclxuICAgIHByaXZhdGUgbW91c2VNb3ZlKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNEb3duKSByZXR1cm47XHJcbiAgICAgICAgaWYodGhpcy5tb3VzZVBvcy54KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICB0aGlzLnNwX3NjZW5lLnggKz0gTGF5YS5zdGFnZS5tb3VzZVggLSB0aGlzLm1vdXNlUG9zLng7IFxyXG4gICAgICAgIC8vICAgIHRoaXMuc3Bfc2NlbmUueSArPSBMYXlhLnN0YWdlLm1vdXNlWSAtIHRoaXMubW91c2VQb3MueDtcclxuICAgICAgICAgICAgaWYodGhpcy5zcF9zY2VuZS54ID4gMCkgIHRoaXMuc3Bfc2NlbmUueCA9IDA7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3Bfc2NlbmUueCA8IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKSkgdGhpcy5zcF9zY2VuZS54ID0gIC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcy54ID0gTGF5YS5zdGFnZS5tb3VzZVg7XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcy55ID0gTGF5YS5zdGFnZS5tb3VzZVk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5ouW5Yqo5oyJ5LiLICovXHJcbiAgICBwcml2YXRlIG1vdXNlRG93bigpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNEb3duID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmi5bliqjmiqzotbcgKi9cclxuICAgIHByaXZhdGUgbW91c2VVcCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcyx0aGlzLm1vdXNlTW92ZSk7XHJcbiAgICAgICAgdGhpcy5pc0Rvd24gPSBmYWxzZTsgXHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcy54ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubW91c2VQb3MueSA9IHVuZGVmaW5lZDsgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKueCueWHuyDojrflj5blu7rnrZHkv6Hmga8gKi9cclxuICAgIHByaXZhdGUgb25Ib3VzZUluZm8odHlwZSkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tc2dEaWFsb2cuc2hvd01zZyh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmm7TmlrBVSeagj+S6lOWkp+S4u+WAvOS/oeaBryAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVVSU1haW5EYXRhKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGV4dF9jb3VudF9wb3B1bGF0aW9uLnRleHQ9Q291bnRyeURhdGEuaW5zXy5wb3B1bGF0aW9uLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy50ZXh0X2NvdW50X3BvcHVsYXJTdXBwb3J0LnRleHQ9Q291bnRyeURhdGEuaW5zXy5wb3B1bGFyU3VwcG9ydC50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMudGV4dF9jb3VudF9tb25leS50ZXh0PUNvdW50cnlEYXRhLmluc18ubW9uZXkudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnRleHRfY291bnRfdGVjaG5vbG9neS50ZXh0PUNvdW50cnlEYXRhLmluc18udGVjaG5vbG9neS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMudGV4dF9jb3VudF9wcmVzdGlnZS50ZXh0PUNvdW50cnlEYXRhLmluc18ucHJlc3RpZ2UudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS3nqIDmnInpl6hcclxuICAgIC8qKui0reS5sOeogOaciemXqCAqL1xyXG4gICAgcHVibGljIGJ1eVJhcmVEb29yKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy8vLy8vLy8vLy8v5ri45oiP5rWB56iL5byA5aeLLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8qKua4uOaIj+a1geeoi+W8gOWniyAqL1xyXG4gICAgcHJpdmF0ZSBnYW1lU3RhcnQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVJTWFpbkRhdGEoKTtcclxuICAgICAgICB0aGlzLnBlb3BsZU1hbmFnZXIub3BlblBlb3BsZUZhY3RvcnkoKTsvL+S6uuWPo+eUn+aIkOmAu+i+kei/kOihjFxyXG4gICAgICAgIHRoaXMucGVvcGxlTWFuYWdlci5jcmVhdGVQZW9wbGVfSW5uZXIoKTsvL+WGheS6uuWPo+eUn+aIkFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirlvIDlkK/lrprml7blmaggKi9cclxuICAgIHByaXZhdGUgb3BlblRpbWVyKCk6dm9pZFxyXG4gICAge1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVMb29wKEdhbWVDb25maWcuVElNRV9NQUlOREFUQSx0aGlzLENvdW50cnlEYXRhLmluc18uY2FsX01vbmV5KTtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcChHYW1lQ29uZmlnLlRJTUVfTUFJTkRBVEEsdGhpcyxDb3VudHJ5RGF0YS5pbnNfLmluZmx1ZW5jZV9HcmFpbik7XHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoR2FtZUNvbmZpZy5USU1FX01BSU5EQVRBLHRoaXMsQ291bnRyeURhdGEuaW5zXy5pbmZsdWVuY2VfUG9wdWxhclN1cHBvcnQpO1xyXG4gICAgfVxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+S6uuWPo+a1geWKqOmAmuefpeWZqFxyXG4gICAgLyoqXHJcbiAgICAgKiDmtYHliqjmr5TkvovvvIwg6YCa55+l5ZmoXHJcbiAgICAgKiBcclxuICAgICAqICAqL1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UmF0aW8oKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnRpbWVyQ291bnQrKztcclxuICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0Kys7XHJcbiAgICAgICAgdGhpcy50aW1lckNvdW50X2luKys7XHJcbiAgICAgICAgbGV0IGNvdW50cnlEYXRhID0gQ291bnRyeURhdGEuaW5zXztcclxuICAgICAgICBsZXQgQkkgPSBjb3VudHJ5RGF0YS5wZXJjZW50OyAgIC8v6L+bL+WHulxyXG4gICAgICAgIGxldCBvdXRlclRhcmdldCA9IGNvdW50cnlEYXRhLmV4aXRQZW9wbGU7Ly/lh7rpl6jnm67moIfmlbBcclxuICAgICAgICBsZXQgaW5uZXJUYWdldCA9IGNvdW50cnlEYXRhLmVudGVyUGVvcGxlOy8v6L+b6Zeo55uu5qCH5pWwXHJcbiAgICAgICAgbGV0IF9vdXRlciA9IGNvdW50cnlEYXRhLl9vdXRlclBlb3BsZTsvL+WHuuWfjuWPo+WunumZheWAvFxyXG4gICAgICAgIGxldCBfaW5uZXIgPSBjb3VudHJ5RGF0YS5faW5uZXJQZW9wbGU7Ly/lhaXln47lrp7pmYXlgLxcclxuICAgICAgICBsZXQgbGFzdFRpbWUgPSAxMjAgLSB0aGlzLnRpbWVyQ291bnQgLSA1Oy8v6I635Y+W5Ymp5L2Z5pe26Ze077yM5aSa6aKE5pSvMTDnp5JcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLov5vlh7rmr5TkvotcIiArIEJJKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWHuumXqOebruagh+aVsDo6XCIgKyBvdXRlclRhcmdldCAgKyBcIiAgfHx8ICDlrp7pmYXlh7rpl6jmlbDvvJrvvJpcIiArIF9vdXRlcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLov5vpl6jnm67moIfmlbA6OlwiICsgaW5uZXJUYWdldCAgKyBcIiAgfHx8ICDlrp7pmYXov5vpl6jmlbDvvJrvvJpcIiArIF9pbm5lcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliankuIvml7bpl7TvvJrvvJpcIiArIGxhc3RUaW1lKTtcclxuXHJcbiAgICAgICAgaWYob3V0ZXJUYXJnZXQgPiBfb3V0ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+mAmuefpVxyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVyQ291bnRfb3V0ID49IGxhc3RUaW1lLyhvdXRlclRhcmdldCAtIF9vdXRlcikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlEYXRhLnBlb3BsZUdvT3V0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJDb3VudF9vdXQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlubmVyVGFnZXQgPiBfaW5uZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+mAmuefpSAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lckNvdW50X2luID49IGxhc3RUaW1lLyhvdXRlclRhcmdldCAtIF9pbm5lcikpICBcclxuICAgICAgICAgICAgY291bnRyeURhdGEucGVvcGxlR29PdXQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnRpbWVyQ291bnQgPiAxMjApXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyQ291bnRfaW4gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyQ291bnRfb3V0ID0gMDtcclxuICAgICAgICAgICAgY291bnRyeURhdGEuX291dGVyUGVvcGxlID0gMDsvL+WunumZheWAvOW9kumbtlxyXG4gICAgICAgICAgICBjb3VudHJ5RGF0YS5faW5uZXJQZW9wbGUgPSAwOy8v5a6e6ZmF5YC85b2S6Zu2XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9MDtpPG91dGVyVGFyZ2V0LV9vdXRlcjtpKyspLy/pgJrnn6Xlh7rln45cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEucGVvcGxlR29PdXQoZmFsc2UpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7aTxpbm5lclRhZ2V0LV9pbm5lcjtpKyspLy/pgJrnn6Xov5vnqItcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY291bnRyeURhdGEucGVvcGxlR29PdXQodHJ1ZSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5HYW1lIGV4dGVuZHMgTGF5YS5TY3JpcHR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSA6IHZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBvbkNsaWNrKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS5TY2VuZS5vcGVuKFwiR2FtZVdvcmxkLnNjZW5lXCIpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlblN0b3J5IGV4dGVuZHMgTGF5YS5TY3JpcHR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSA6IHZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBvbkNsaWNrKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS5TY2VuZS5vcGVuKFwiR2FtZVN0b3J5LnNjZW5lXCIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvdW50cnlEYXRhIGZyb20gXCIuLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29se1xyXG4gICAgLy/ojrflj5bkuInop5Llh73mlbDlgLxcclxuICAgIHB1YmxpYyBzdGF0aWMgcm90YXRpb25EZWFsKGZ4Om51bWJlcixmeTpudW1iZXIsc3g6bnVtYmVyLHN5Om51bWJlcixnZXRTdHJpbmcpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgLyoq5pac6L65ICovXHJcbiAgICAgICAgbGV0IGMgOiBudW1iZXIgPSBNYXRoLnNxcnQoTWF0aC5wb3coZnggLSBzeCwyKSArIE1hdGgucG93KGZ5IC0gc3ksMikpO1xyXG4gICAgICAgIC8qKuS4tOi+uSAqL1xyXG4gICAgICAgIGxldCBhIDogbnVtYmVyID0gc3ggLSBmeDtcclxuICAgICAgICAvKirlr7novrkgKi9cclxuICAgICAgICBsZXQgYiA6IG51bWJlciA9IHN5IC0gZnk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZ2V0U3RyaW5nID09IFwic2luXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiI3NpbiA9PVwiICsgKGIvYykpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGIvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZ2V0U3RyaW5nID09IFwiY29zXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiI2NvcyA9PVwiICsgKGEvYykpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGEvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCIjdGFuID09XCIgKyAoYi9hKSk7Ly/lr7novrkg5q+UIOS4tOi+uSBcclxuICAgICAgICAgICAgcmV0dXJuIChiL2EpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirnorDmkp7mo4DmtYsgZGljTnVtIO+8mumihOiuvui3neemuyBvYmplY3Qx5ZKMb2JqZWN0MuS8oOWFpXNwcml0ZSzmmK/mjInnhafmr4/kuKpzcHJpdGXnmoTplJrngrnlnKjkuK3lv4PkvY3nva7mnaXorqHnrpfnmoQgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbGxpc2lvbkNoZWNrKG9iamVjdDEsb2JqZWN0MikgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYoTWF0aC5hYnMob2JqZWN0MS54IC0gb2JqZWN0Mi54KTwgb2JqZWN0MS53aWR0aC8yICsgb2JqZWN0Mi53aWR0aC8yJiZcclxuICAgICAgICAgICBNYXRoLmFicyhvYmplY3QxLnkgLSBvYmplY3QyLnkpIDwgb2JqZWN0MS5oZWlnaHQvMiArIG9iamVjdDIuaGVpZ2h0LzIpe1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0ZVJvcGVQb2ludF8yKHgseSxYLFkpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgICAgICBsZXQgY29zPVRvb2wucm90YXRpb25EZWFsKHgseSxYLFksXCJjb3NcIik7XHJcbiAgICAgICAgICAgIGxldCBzaW49VG9vbC5yb3RhdGlvbkRlYWwoeCx5LFgsWSxcInNpblwiKTtcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uO1xyXG4gICAgICAgICAgICBpZihjb3M+PTAmJnNpbj4wKXtcclxuICAgICAgICAgICAgICAgIHJvdGF0aW9uPSAxODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKS05MDtcclxuICAgICAgICAgICAgfWVsc2UgaWYoY29zPDAmJnNpbj49MCl7XHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbj0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKS05MDtcclxuICAgICAgICAgICAgfWVsc2UgaWYoY29zPD0wJiZzaW48MCl7XHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbj05MC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2UgaWYoY29zPjAmJnNpbjw9MCl7XHJcbiAgICAgICAgICAgICAgICByb3RhdGlvbj0gOTAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoeSA8IFkpIHJvdGF0aW9uICs9IDE4MDtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdGF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluinkuW6piBcclxuICAgICAqIOenu+WKqOeCueWcqOWJjVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Um90YXRpb24oeDEseTEseDIseTIpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvcz1Ub29sLnJvdGF0aW9uRGVhbCh4MSx5MSx4Mix5MixcImNvc1wiKTtcclxuICAgICAgICBsZXQgc2luPVRvb2wucm90YXRpb25EZWFsKHgxLHkxLHgyLHkyLFwic2luXCIpO1xyXG4gICAgICAgIGxldCByb3RhdGlvbjtcclxuICAgICAgICBpZihjb3MgPj0wICYmIHNpbj4wKXtcclxuICAgICAgICAgICAgcm90YXRpb24gPSA5MCArIDE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb3MgPDAgJiYgc2luPj0wKXtcclxuICAgICAgICAgICAgcm90YXRpb24gPSAtMTgwL01hdGguUEkqTWF0aC5hY29zKGNvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvcyA+MCAmJiBzaW48PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByb3RhdGlvbiA9IC0xODAvTWF0aC5QSSpNYXRoLmFjb3MoY29zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29zIDw9MCAmJiBzaW48MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uID0gMTgwLTE4MC9NYXRoLlBJKk1hdGguYWNvcyhjb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm90YXRpb247XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcm90YXRpb24gPSA0NSDop5LluqZcclxuICAgICAqIOaxgiBjb3Mg6L+Y5pivIHNpblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJvdGF0aW9uU2V0KHJvdGF0aW9uLHR5cGVTdHJpbmcpICA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCByIDtcclxuICAgICAgICBsZXQgdmFsdWU7XHJcbiAgICAgICAgaWYocm90YXRpb24gPCAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcm90YXRpb24gKz0gMzYwKihNYXRoLmFicyhNYXRoLmZsb29yKHJvdGF0aW9uLzM2MCkrMikpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihNYXRoLmZsb29yKHJvdGF0aW9uLzM2MCk+MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uIC09IDM2MCpNYXRoLmZsb29yKHJvdGF0aW9uLzM2MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHIgPSAocm90YXRpb24pLzE4MCpNYXRoLlBJOyAgICAgICAgXHJcbiAgICAgICAgaWYodHlwZVN0cmluZyA9PSBcImNvc1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmFicyhNYXRoLmNvcyhyKSk7XHJcbiAgICAgICAgICAgIGlmKChyb3RhdGlvbiA+IDAgJiYgcm90YXRpb24gPD0gOTApIHx8IChyb3RhdGlvbj4yNzAgJiYgcm90YXRpb248PTM2MCkpICB2YWx1ZSA9IC12YWx1ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb3M6OlwiICsgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgeyAgICAgICAgIFxyXG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKE1hdGguc2luKHIpKTtcclxuICAgICAgICAgICAgaWYoKHJvdGF0aW9uPjE4MCAmJiByb3RhdGlvbiA8PSAyNzApIHx8IChyb3RhdGlvbj4yNzAgJiYgcm90YXRpb248PTM2MCkpIHZhbHVlID0gLXZhbHVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNpbjo6XCIgKyB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZSAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi3neemu+iuoeeul1xyXG4gICAgICogMiDlr7nosaFcclxuICAgICAqIGZpcnN0XHJcbiAgICAgKiBzZWNvbmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjb3VudERpY19PYmplY3QoZjphbnksczphbnkpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhmLnggLSBzLngsMikgKyBNYXRoLnBvdyhmLnkgLSBzLnksMikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pa55Z2X5qOA5rWLIFxyXG4gICAgICogXHJcbiAgICAgKiDmlrnlnZflr7nosaEgc3BcclxuICAgICAqIOajgOa1i+eahOeCuSDlr7nosaFcclxuICAgICAqICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGJsb2NrVGVzdChzcCxwb2ludCkgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXNwIHx8ICFwb2ludCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGxldCBwb2ludExlZnQgOiBhbnkgPXt4OnNwLnggLSBzcC53aWR0aC8yLHk6c3AueS1zcC5oZWlnaHQvMn07XHJcbiAgICAgICAgbGV0IHBvaW50UmlnaHQgOiBhbnkgPXt4OnNwLnggKyBzcC53aWR0aC8yLHk6c3AueStzcC5oZWlnaHQvMn07XHJcbiAgICAgICAgbGV0IHNfcG9pbnRMZWZ0ID0gcG9pbnQueCA+IHBvaW50TGVmdC54ICYmIHBvaW50Lnk+cG9pbnRMZWZ0Lnk7XHJcbiAgICAgICAgbGV0IHNfcG9pbnRSaWdodCA9IHBvaW50LnggPCBwb2ludFJpZ2h0LnggJiYgcG9pbnQueTxwb2ludFJpZ2h0Lnk7XHJcbiAgICAgICAgaWYoc19wb2ludExlZnQgJiYgc19wb2ludFJpZ2h0KSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2FtZURhdGEgLSBDb3VudHJ5RGF0YVxyXG4gICAgICog5Y2g5q+UIOaVsOe7hFxyXG4gICAgKuiOt+WPluWMuumXtOaVsOe7hCAwLDAuOCwwLjgzLDAuODQsMC45LDFcclxuICAgICAqIEBhcnIg5bGe5oCn5ZCN5a2XXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQZXJjZW50QXJlYShhcnIpOkFycmF5PG51bWJlcj5cclxuICAgIHtcclxuICAgICAgICBsZXQgYXJyUGVyY2VudCA9IFtdOy8v55Sf5Lqn5q+U5L6LXHJcbiAgICAgICAgbGV0IG51bWJlciA9IDA7XHJcbiAgICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDtpPGFyci5sZW5ndGg7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbnVtYmVyICs9IENvdW50cnlEYXRhLmluc19bYXJyW2ldXTtcclxuICAgICAgICAgICAgYXJyUGVyY2VudC5wdXNoKG51bWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJQZXJjZW50O1xyXG4gICAgfVxyXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XHJcbmltcG9ydCBEaWFsb2c9TGF5YS5EaWFsb2c7XHJcbmltcG9ydCBTY2VuZT1MYXlhLlNjZW5lO1xuZXhwb3J0IG1vZHVsZSB1aSB7XHJcbiAgICBleHBvcnQgY2xhc3MgQnV5VUkgZXh0ZW5kcyBEaWFsb2cge1xyXG5cdFx0cHVibGljIGJnOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBidG5fYnV5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBidXlfbmFtZTpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgYnV5X2lucHV0OkxheWEuVGV4dElucHV0O1xuXHRcdHB1YmxpYyBidG5fY2xvc2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ1eV9wcmljZTpsYXlhLmRpc3BsYXkuVGV4dDtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkJ1eVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgR2FtZVdvcmxkVUkgZXh0ZW5kcyBTY2VuZSB7XHJcblx0XHRwdWJsaWMgYW5pMTpMYXlhLkZyYW1lQW5pbWF0aW9uO1xuXHRcdHB1YmxpYyBhbmkyOkxheWEuRnJhbWVBbmltYXRpb247XG5cdFx0cHVibGljIHNwX3NjZW5lOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9ncm91bmQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV80OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV81OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV82OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV84OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV85OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBldmVudEhvdXNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHBhbGFjZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG9zcGl0YWw6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIwOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZWNobm9sb2d5OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8wOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI2OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGZhcm06TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMwOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMzOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM2OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgYXJteTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3Bfcml2ZXI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX3dhbGw6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2Rvb3I6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGNsaWNrSG91c2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX1VJOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBpbWdfcG9wdWxhdGlvbjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9wb3B1bGF0aW9uOmxheWEuZGlzcGxheS5UZXh0O1xuXHRcdHB1YmxpYyBpbWdfcG9wdWxhclN1cHBvcnQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfcG9wdWxhclN1cHBvcnQ6bGF5YS5kaXNwbGF5LlRleHQ7XG5cdFx0cHVibGljIGltZ19tb25leTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgdGV4dF9jb3VudF9tb25leTpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX3RlY2hub2xvZ3k6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRleHRfY291bnRfdGVjaG5vbG9neTpsYXlhLmRpc3BsYXkuVGV4dDtcblx0XHRwdWJsaWMgaW1nX3ByZXN0aWdlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyB0ZXh0X2NvdW50X3ByZXN0aWdlOmxheWEuZGlzcGxheS5UZXh0O1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiR2FtZVdvcmxkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgbW9kdWxlIHVpLkRpYSB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ3VycmVudERpYWxvZ1VJIGV4dGVuZHMgU2NlbmUge1xyXG5cdFx0cHVibGljIG1zZ0JvZHk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9QZXJzb246TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9Nc2c6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkRpYS9DdXJyZW50RGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyIl19
