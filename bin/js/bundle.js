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
<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    /**人种 - 普通人 */
    GameConfig.COMMON_MAN = "common";
    /**人种 - 小偷 */
    GameConfig.ROBBER_MAN = "robber";
    return GameConfig;
}());
exports.default = GameConfig;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数据中心 所有的数据
 */
var CountryData = /** @class */ (function () {
    function CountryData() {
        /**特殊门 筛查 1-防止进入   2-邀请进入*/
        // public keepSelect : Array<number> = [];
        /**流动比例 */
        this.percent = 1;
    }
    CountryData.prototype.onEnable = function () {
    };
    /**
     * 获取人口流量 :
     * return 进入 / 出去
     */
    CountryData.prototype.get_PeopleMove = function () {
        return this.enterPeople / this.outerPeople;
    };
    /**
     * 获取人种比例
     * @param type 人种
     */
    CountryData.prototype.get_ProfessionPercent = function (type) {
        if (this[type] === undefined)
            console.log("不存在该人种");
        else
            return this[type] / (this.commonMan + this.scientist + this.star + this.bandit + this.robber);
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
        this.maxCount = 10;
        /**当前外城人口数 */
        this.outCount = 0;
    }
    OutCountryData.ins_ = new OutCountryData();
    return OutCountryData;
}());
exports.OutCountryData = OutCountryData;
},{}],3:[function(require,module,exports){
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
    function PeopleManager(view) {
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
        if (random >= 0 && random < 85) {
            people = Laya.Pool.getItem("common");
            if (!people) {
                people = new Common_1.default(this.view, GameConfig_1.default.COMMON_MAN, true);
            }
        }
        //小偷
        else if (random >= 85 && random < 100) {
            people = Laya.Pool.getItem("robber");
            if (!people) {
                people = new Robber_1.default(this.view, GameConfig_1.default.ROBBER_MAN, true);
            }
        }
        people.visible = true;
        this.getPos();
        //people.setPos(this.X,this.Y);
        people.setPos(900, 300);
        people.openBehaviour();
        var time = Math.random() * 3;
        if (DataManager_1.OutCountryData.ins_.outCount < DataManager_1.OutCountryData.ins_.maxCount - 1) {
            Laya.timer.frameOnce(time * 60, this, this.createPeople);
        }
        DataManager_1.OutCountryData.ins_.outCount++;
        console.log(DataManager_1.OutCountryData.ins_.outCount);
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
    /**把人放入对象池 */
    /*************************************界限检测 **********************/
    PeopleManager.prototype.checkPercent = function (people, type) {
        //流动比例检测
        if (DataManager_1.default.ins_.percent < 1) {
            this.createPeople();
        }
    };
    return PeopleManager;
}());
exports.default = PeopleManager;
},{"../Config/GameConfig":1,"../Perfeb/diff_People/Common":9,"../Perfeb/diff_People/Robber":10,"./DataManager":2}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var OpenGame_1 = require("./Script/OpenGame");
var GameWorld_1 = require("./Script/GameWorld/GameWorld");
var OpenStory_1 = require("./Script/OpenStory");
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
        reg("Script/OpenGame.ts", OpenGame_1.default);
        reg("Script/GameWorld/GameWorld.ts", GameWorld_1.default);
        reg("Script/OpenStory.ts", OpenStory_1.default);
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
},{"./Script/GameWorld/GameWorld":11,"./Script/OpenGame":12,"./Script/OpenStory":13}],7:[function(require,module,exports){
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
},{"./GameConfig":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataManager_1 = require("../Core/DataManager");
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
        //创建
        this.createPeople(type);
    };
    /**开始行动 */
    People.prototype.openBehaviour = function () {
        //运行了逻辑
        if (this.isOut) {
            this.people_PosOut();
            Laya.timer.frameLoop(1, this, this.checkLimit_Out);
        }
        else {
            this.people_PosInner();
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
        this.sp.pivot(this.sp.width / 2, this.sp.height / 2);
    };
    /**设置初始位置 */
    People.prototype.setPos = function (x, y) {
        this.sp.visible = true;
        this.sp.x = x;
        this.sp.y = y;
    };
    /**墙外人行动逻辑*/
    People.prototype.people_PosOut = function () {
        //给予随机方向，方向用(-1~1)表示
        this.dirX = Math.random() * 2 - 1;
        this.dirY = Math.random() * 2 - 1;
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
    /**墙内人行动逻辑*/
    People.prototype.people_PosInner = function () {
    };
    /**碰撞检测 */
    People.prototype.checkLimit_Out = function () {
        //边界检测
        if (this.sp.x < -20 || this.sp.x > 2020 || this.sp.y < -20) {
            Laya.Pool.recover(this.type, this);
            DataManager_1.OutCountryData.ins_.outCount--;
        }
        //护城河检测
        if (this.sp.y >= 390) {
            //重新给一个位移
            //给予随机方向，方向用(-1~1)表示
            this.dirX = Math.random() * 2 - 1;
            this.dirY = -Math.random();
        }
    };
    /**人消失 */
    People.prototype.destoryPeople = function () {
        this.sp.visible = false;
    };
    return People;
}());
exports.default = People;
},{"../Core/DataManager":2}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("../People");
var Common = /** @class */ (function (_super) {
    __extends(Common, _super);
    function Common(view, type, isOut) {
        return _super.call(this, view, type, isOut) || this;
    }
    return Common;
}(People_1.default));
exports.default = Common;
},{"../People":8}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People_1 = require("../People");
var Robber = /** @class */ (function (_super) {
    __extends(Robber, _super);
    function Robber(view, type, isOut) {
        return _super.call(this, view, type, isOut) || this;
    }
    return Robber;
}(People_1.default));
exports.default = Robber;
},{"../People":8}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorldEventManager_1 = require("../../Core/WorldEventManager");
var layaMaxUI_1 = require("../../ui/layaMaxUI");
var UIManager_1 = require("../../Core/UIManager");
var PeopleManager_1 = require("../../Core/PeopleManager");
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
    };
    /**数据初始化 */
    GameWorld.prototype.gameDataInit = function () {
        this.worldEventManager = new WorldEventManager_1.default();
        this.peopleManager = new PeopleManager_1.default(this.sp_scene);
        this.uiManager = new UIManager_1.default(this.sp_UI);
    };
    /**添加事件 */
    GameWorld.prototype.addEvent = function () {
        //给门帮点点击事   
        this.sp_door.on(Laya.Event.CLICK, this, this.doorCtr);
    };
    /**屏幕 局中*/
    GameWorld.prototype.screenSetting = function () {
        this.screenWidth = 900 / (Laya.Browser.clientHeight / Laya.Browser.clientWidth); //屏幕高度
        console.log("width" + this.screenWidth);
    };
    /**门的开关 */
    GameWorld.prototype.doorCtr = function () {
        if (this.isOpen) { //开门
            this.isOpen = false;
            this.doorClose();
        }
        else { //关门
            this.isOpen = true;
            this.doorOpen();
        }
    };
    /**关门 */
    GameWorld.prototype.doorClose = function () {
    };
    /**开门 */
    GameWorld.prototype.doorOpen = function () {
    };
    ////////////游戏流程开始//////////////////////////
    /**游戏流程开始 */
    GameWorld.prototype.gameStart = function () {
        this.peopleManager.openPeopleFactory(); //人口生成逻辑运行
    };
    return GameWorld;
}(layaMaxUI_1.ui.GameWorldUI));
exports.default = GameWorld;
},{"../../Core/PeopleManager":3,"../../Core/UIManager":4,"../../Core/WorldEventManager":5,"../../ui/layaMaxUI":14}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
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
},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scene = Laya.Scene;
var ui;
(function (ui) {
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
},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXIyLjAvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvRGF0YU1hbmFnZXIudHMiLCJzcmMvQ29yZS9QZW9wbGVNYW5hZ2VyLnRzIiwic3JjL0NvcmUvVUlNYW5hZ2VyLnRzIiwic3JjL0NvcmUvV29ybGRFdmVudE1hbmFnZXIudHMiLCJzcmMvR2FtZUNvbmZpZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1BlcmZlYi9QZW9wbGUudHMiLCJzcmMvUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vbi50cyIsInNyYy9QZXJmZWIvZGlmZl9QZW9wbGUvUm9iYmVyLnRzIiwic3JjL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzIiwic3JjL1NjcmlwdC9PcGVuR2FtZS50cyIsInNyYy9TY3JpcHQvT3BlblN0b3J5LnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQTtJQUFBO0lBS0EsQ0FBQztJQUpHLGNBQWM7SUFDQSxxQkFBVSxHQUFZLFFBQVEsQ0FBQztJQUM3QyxhQUFhO0lBQ0MscUJBQVUsR0FBWSxRQUFRLENBQUM7SUFDakQsaUJBQUM7Q0FMRCxBQUtDLElBQUE7a0JBTG9CLFVBQVU7Ozs7QUNBL0I7O0dBRUc7QUFDSDtJQXVESTtRQUxBLDJCQUEyQjtRQUMzQiwwQ0FBMEM7UUFDMUMsVUFBVTtRQUNILFlBQU8sR0FBUSxDQUFDLENBQUM7SUFJeEIsQ0FBQztJQUVELDhCQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksb0NBQWMsR0FBckI7UUFFSSxPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7OztP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QUNaRCxJQUFPLEtBQUssR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3hCLElBQWMsRUFBRSxDQXdEZjtBQXhERCxXQUFjLEVBQUU7SUFDWjtRQUFpQywrQkFBSztRQWlEbEM7bUJBQWUsaUJBQU87UUFBQSxDQUFDO1FBQ3ZCLG9DQUFjLEdBQWQ7WUFDSSxpQkFBTSxjQUFjLFdBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDTCxrQkFBQztJQUFELENBdERBLEFBc0RDLENBdERnQyxLQUFLLEdBc0RyQztJQXREWSxjQUFXLGNBc0R2QixDQUFBO0FBQ0wsQ0FBQyxFQXhEYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUF3RGYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZyB7XG4gICAgLyoq5Lq656eNIC0g5pmu6YCa5Lq6ICovXG4gICAgcHVibGljIHN0YXRpYyBDT01NT05fTUFOIDogc3RyaW5nID0gXCJjb21tb25cIjtcbiAgICAvKirkurrnp40gLSDlsI/lgbcgKi9cbiAgICBwdWJsaWMgc3RhdGljIFJPQkJFUl9NQU4gOiBzdHJpbmcgPSBcInJvYmJlclwiO1xufSIsIi8qKlxuICog5pWw5o2u5Lit5b+DIOaJgOacieeahOaVsOaNrlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudHJ5RGF0YXtcbiAgICBwdWJsaWMgc3RhdGljIGluc18gOiBDb3VudHJ5RGF0YSA9IG5ldyBDb3VudHJ5RGF0YSgpO1xuICAgIC8qKioqKioqKioqKioqKuS4u+aVsOaNrioqKioqKioqKioqKioqKioqKioqL1xuICAgIC8qKuWbveWutui0ouaUvyAqL1xuICAgIHB1YmxpYyBnb2xkIDogbnVtYmVyO1xuICAgIC8qKuWbveWutuW5uOemj+W6piAqL1xuICAgIHB1YmxpYyBwb3B1bGFyU3VwcG9ydCA6IG51bWJlcjtcbiAgICAvKirlm73lrrbkurrlj6MgKi9cbiAgICBwdWJsaWMgcG9wdWxhdGlvbiA6IG51bWJlcjtcbiAgICAvKirlm73lrrbnp5HmioAgKi9cbiAgICBwdWJsaWMgdGVjaG5vbG9neSA6IG51bWJlcjtcbiAgICAvKirlm73lrrblo7DmnJsgKi9cbiAgICBwdWJsaWMgcHJlc3RpZ2UgOiBudW1iZXI7XG5cbiAgICAvKioqKioqKioqKioqKioq5Ymv5pWw5o2uKioqKioqKioqKioqKioqKiovXG4gICAgLy8tLS0tLS0tLeaZrumAmuaVsOaNrlxuICAgIC8qKueyrumjn+S6p+mHjyAqL1xuICAgIHB1YmxpYyBncmFpbllpZWxkIDogbnVtYmVyO1xuICAgIC8qKueyrumjn+a2iOiAlyAqL1xuICAgIHB1YmxpYyBncmFpbkNvbnN1bXB0aW9uIDogbnVtYmVyO1xuXG4gICAgLy8tLS0tLS0tLeS6i+S7tuaVsOaNrlxuICAgIC8qKueYn+eWqyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8qL1xuICAgIHB1YmxpYyBwZXN0IDogbnVtYmVyO1xuICAgIC8qKuWcsOmchyAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8gKi9cbiAgICBwdWJsaWMgbmF0dXJhbERpc2FzdGVyIDogbnVtYmVyO1xuICAgIC8qKuaImOS5sSAgMCAxIDIgMyA0IDUgMC3mmK/msqHlj5HnlJ8qL1xuICAgIHB1YmxpYyB3YXIgOiBudW1iZXI7XG5cbiAgICAvLy0tLS0tLS0t6IGM5Lia5Lq65pWwXG4gICAgLyoq5pmu6YCa5Lq6IEEgIOaZrumAmuS6uuS4reS8muS6p+eUn+WMu+eUnyDorablr58g562J5q2j5bi46IGM5LiaKi9cbiAgICBwdWJsaWMgY29tbW9uTWFuIDogbnVtYmVyO1xuICAgIC8qKuenkeWtpuWutiBTU1MqL1xuICAgIHB1YmxpYyBzY2llbnRpc3QgOiBudW1iZXI7XG4gICAgLyoq5piO5pifIFNTKi9cbiAgICBwdWJsaWMgc3RhciA6IG51bWJlcjtcbiAgICAvKirlnJ/ljKogLVMgKi9cbiAgICBwdWJsaWMgYmFuZGl0IDogbnVtYmVyO1xuICAgIC8qKuebl+i0vCAtQSAqL1xuICAgIHB1YmxpYyByb2JiZXIgOiBudW1iZXI7XG4gICAgXG4gICAgLy8tLS0tLS0tLeWfjumXqFxuICAgIC8qKumXqOaYr+WQpuaJk+W8gCovXG4gICAgcHVibGljIGlzRG9vck9wZW4gOiBib29sZWFuO1xuICAgIC8qKuS6uuWPo+i/m+WFpemHjyAqL1xuICAgIHB1YmxpYyBlbnRlclBlb3BsZSA6IG51bWJlcjtcbiAgICAvKirkurrlj6PmtYHlh7rph48gKi9cbiAgICBwdWJsaWMgb3V0ZXJQZW9wbGUgOiBudW1iZXI7XG4gICAgLyoq562b5p+l6IO95YqbIOWQr+WKqOeJueauiumXqOeahOaXtuWAmSAg562b5p+l6IO95Yqb55Sf5pWIKi9cbiAgICBwdWJsaWMgcHJlcGFyYXRpb24gOiBudW1iZXI7XG4gICAgLyoq54m55q6K6ZeoIOetm+afpSAxLemYsuatoui/m+WFpSAgIDIt6YKA6K+36L+b5YWlKi9cbiAgICAvLyBwdWJsaWMga2VlcFNlbGVjdCA6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICAvKirmtYHliqjmr5TkvosgKi9cbiAgICBwdWJsaWMgcGVyY2VudDpudW1iZXI9MTtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpe1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5Lq65Y+j5rWB6YePIDpcbiAgICAgKiByZXR1cm4g6L+b5YWlIC8g5Ye65Y67XG4gICAgICovXG4gICAgcHVibGljIGdldF9QZW9wbGVNb3ZlKCkgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudGVyUGVvcGxlL3RoaXMub3V0ZXJQZW9wbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5Lq656eN5q+U5L6LXG4gICAgICogQHBhcmFtIHR5cGUg5Lq656eNXG4gICAgICovXG4gICAgcHVibGljIGdldF9Qcm9mZXNzaW9uUGVyY2VudCh0eXBlOnN0cmluZykgOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGlmKHRoaXNbdHlwZV0gPT09IHVuZGVmaW5lZCkgY29uc29sZS5sb2coXCLkuI3lrZjlnKjor6Xkurrnp41cIik7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXNbdHlwZV0vKHRoaXMuY29tbW9uTWFuICsgdGhpcy5zY2llbnRpc3QgKyB0aGlzLnN0YXIgKyB0aGlzLmJhbmRpdCArIHRoaXMucm9iYmVyKTtcbiAgICB9XG5cbiAgICAvKirmlbDmja7nu5PnrpcgIOe7vOWQiOiuoeeul+aJgOacieeahOaVsOWAvCovXG4gICAgLy8gcHJpdmF0ZSBcblxuXG5cbn1cblxuLyoq5aSW5Z+OICovXG5leHBvcnQgY2xhc3MgT3V0Q291bnRyeURhdGF7XG4gICAgcHVibGljIHN0YXRpYyBpbnNfIDogT3V0Q291bnRyeURhdGEgPSBuZXcgT3V0Q291bnRyeURhdGEoKTtcbiAgICAvKioqKioqKioqKioqKirkuLvmlbDmja4qKioqKioqKioqKioqKioqKioqKi9cbiAgICAvKirmnIDlpKflpJbln47lrrnnurPmlbDph48gKi9cbiAgICBwdWJsaWMgbWF4Q291bnQgOiBudW1iZXI9MTA7XG4gICAgLyoq5b2T5YmN5aSW5Z+O5Lq65Y+j5pWwICovXG4gICAgcHVibGljIG91dENvdW50Om51bWJlcj0wO1xufSIsImltcG9ydCBQZW9wbGUgZnJvbSBcIi4uL1BlcmZlYi9QZW9wbGVcIjtcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuLi9Db25maWcvR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IENvdW50cnlEYXRhLCB7IE91dENvdW50cnlEYXRhIH0gZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcbmltcG9ydCBDb21tb24gZnJvbVwiLi4vUGVyZmViL2RpZmZfUGVvcGxlL0NvbW1vblwiXG5pbXBvcnQgUm9iYmVyIGZyb21cIi4uL1BlcmZlYi9kaWZmX1Blb3BsZS9Sb2JiZXJcIlxuLyoqXG4gKiDkurog566h55CGXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZU1hbmFnZXIge1xuICAgIC8qKuinhuWbviovXG4gICAgcHJpdmF0ZSB2aWV3OmFueTsgXG4gICAgLyoq5qiq5Z2Q5qCHICovXG4gICAgcHJpdmF0ZSBYOm51bWJlcjtcbiAgICAvKirnurXlnZDmoIcgKi9cbiAgICBwcml2YXRlIFk6bnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKHZpZXcpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXc9dmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvIDlkK/nlJ/miJDlt6XljoJcbiAgICAgKiDnlJ/miJDkurogXG4gICAgICog55Sf5oiQ5Lq655qE5L2N572uXG4gICAgICog55Sf5Lqn5Lq655qEdHlwZSDvvJog5Z+O6YeM5Lq6L+WfjuWkluS6uiDpgLvovpHliIblvIBcbiAgICAgKi9cbiAgICAvKirlvIDlkK/nlJ/miJDlt6XljoIgKi9cbiAgICBwdWJsaWMgb3BlblBlb3BsZUZhY3RvcnkoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKCk7XG4gICAgfVxuXG4gICAgLyoq55Sf5oiQ5Lq6ICovXG4gICAgcHVibGljIGNyZWF0ZVBlb3BsZSgpOnZvaWRcbiAgICB7XG4gICAgICAgIGxldCBwZW9wbGU7XG4gICAgICAgIC8qKueUn+aIkOS4jeWQjOS6uuenjeeahOWHoOeOhyAqL1xuICAgICAgICBsZXQgcmFuZG9tPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMDApO1xuICAgICAgICAvL+aZrumAmuS6ulxuICAgICAgICBpZihyYW5kb20+PTAmJnJhbmRvbTw4NSlcbiAgICAgICAge1xuICAgICAgICAgICAgcGVvcGxlID1MYXlhLlBvb2wuZ2V0SXRlbShcImNvbW1vblwiKTtcbiAgICAgICAgICAgIGlmKCFwZW9wbGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVvcGxlID1uZXcgQ29tbW9uKHRoaXMudmlldyxHYW1lQ29uZmlnLkNPTU1PTl9NQU4sdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/lsI/lgbdcbiAgICAgICAgZWxzZSBpZihyYW5kb20+PTg1JiZyYW5kb208MTAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBwZW9wbGUgPUxheWEuUG9vbC5nZXRJdGVtKFwicm9iYmVyXCIpO1xuICAgICAgICAgICAgaWYoIXBlb3BsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZW9wbGUgPW5ldyBSb2JiZXIodGhpcy52aWV3LEdhbWVDb25maWcuUk9CQkVSX01BTix0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwZW9wbGUudmlzaWJsZT10cnVlO1xuICAgICAgICB0aGlzLmdldFBvcygpO1xuICAgICAgICAvL3Blb3BsZS5zZXRQb3ModGhpcy5YLHRoaXMuWSk7XG4gICAgICAgIHBlb3BsZS5zZXRQb3MoOTAwLDMwMCk7XG4gICAgICAgIHBlb3BsZS5vcGVuQmVoYXZpb3VyKCk7XG4gICAgICAgIGxldCB0aW1lPU1hdGgucmFuZG9tKCkqMztcbiAgICAgICAgaWYoT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudDxPdXRDb3VudHJ5RGF0YS5pbnNfLm1heENvdW50LTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNyZWF0ZVBlb3BsZSk7XG4gICAgICAgIH1cbiAgICAgICAgT3V0Q291bnRyeURhdGEuaW5zXy5vdXRDb3VudCsrO1xuICAgICAgICBjb25zb2xlLmxvZyhPdXRDb3VudHJ5RGF0YS5pbnNfLm91dENvdW50KVxuICAgIH1cblxuICAgIC8qKueUn+aIkOS6uueahOS9jee9riAqL1xuICAgIHB1YmxpYyBnZXRQb3MoKTphbnlcbiAgICB7XG4gICAgICAgIGxldCB0eXBlTnVtPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozKTtcbiAgICAgICAgc3dpdGNoKHR5cGVOdW0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAvL+WcqEHovrnnlYxcbiAgICAgICAgICAgICAgICB0aGlzLlg9MDtcbiAgICAgICAgICAgICAgICB0aGlzLlk9TWF0aC5yYW5kb20oKSozOTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy/lnKhC6L6555WMXG4gICAgICAgICAgICAgICAgdGhpcy5YPU1hdGgucmFuZG9tKCkqMjAwMDtcbiAgICAgICAgICAgICAgICB0aGlzLlk9MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAvL+WcqEPovrnnlYxcbiAgICAgICAgICAgICAgICB0aGlzLlg9MjAwMDtcbiAgICAgICAgICAgICAgICB0aGlzLlk9TWF0aC5yYW5kb20oKSozOTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLyoq5oqK5Lq65pS+5YWl5a+56LGh5rGgICovXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKueVjOmZkOajgOa1iyAqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIFxuICAgIFxuICAgIHByaXZhdGUgY2hlY2tQZXJjZW50KHBlb3BsZSx0eXBlOnN0cmluZyk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/mtYHliqjmr5Tkvovmo4DmtYtcbiAgICAgICAgaWYoQ291bnRyeURhdGEuaW5zXy5wZXJjZW50PDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGVvcGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuL0RhdGFNYW5hZ2VyXCI7XG5cbi8qKlxuICogVUnnrqHnkIblmahcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNYW5hZ2Vye1xuICAgIC8qKuaVsOaNrueuoeeQhuWZqCAqL1xuICAgIC8vIHB1YmxpYyBzdGF0aWMgZGF0YU1hbmFnZXIgOiBEYXRhTWFuYWdlcjtcbiAgICAvKipVSSBzcHJpdGUgKi9cbiAgICBwcml2YXRlIFVpU3ByaXRlIDogTGF5YS5TcHJpdGU7XG5cbiAgICAvKirovb3lhaXmlbDmja4gKi9cbiAgICBjb25zdHJ1Y3Rvcih1aTpMYXlhLlNwcml0ZSl7XG4gICAgICAgIHRoaXMuVWlTcHJpdGUgPSB1aTtcbiAgICB9XG4gICAgXG4gICAgXG59IiwiLyoqXG4gKiDkuovku7blj5HnlJ/nrqHnkIblmahcbiAqIFxuICogXG4gKiDnlJ/miJDkuovku7bjgIFcbiAqIOW9seWTjeS6uuWPo+a1geWKqFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZEV2ZW50TWFuYWdlciB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG5cbiAgICAvKirkuovku7bpooTmiqXliLAgKi9cbiAgICBcblxuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xuXG4gICAgXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBPcGVuR2FtZSBmcm9tIFwiLi9TY3JpcHQvT3BlbkdhbWVcIlxuaW1wb3J0IEdhbWVXb3JsZCBmcm9tIFwiLi9TY3JpcHQvR2FtZVdvcmxkL0dhbWVXb3JsZFwiXG5pbXBvcnQgT3BlblN0b3J5IGZyb20gXCIuL1NjcmlwdC9PcGVuU3RvcnlcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9MTQ0MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTkwMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWRoZWlnaHRcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cIlN0YXJ0R2FtZS5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5HYW1lLnRzXCIsT3BlbkdhbWUpO1xuICAgICAgICByZWcoXCJTY3JpcHQvR2FtZVdvcmxkL0dhbWVXb3JsZC50c1wiLEdhbWVXb3JsZCk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9PcGVuU3RvcnkudHNcIixPcGVuU3RvcnkpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcbmNsYXNzIE1haW4ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcblx0XHRpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XG5cdFx0ZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcblxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWU7XG5cblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XG5cdH1cblxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xuXHR9XG5cblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cblx0XHRHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XG5cdH1cbn1cbi8v5r+A5rS75ZCv5Yqo57G7XG5uZXcgTWFpbigpO1xuIiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgeyBPdXRDb3VudHJ5RGF0YSB9IGZyb20gXCIuLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XG5cbi8qKlxuICogXG4gKiDkurrnp43niLbnsbtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlIHtcbiAgICAvKirlnLrmma8qL1xuICAgIHByaXZhdGUgdmlldyA6IExheWEuU3ByaXRlO1xuICAgIC8qKueyvueBtSAqL1xuICAgIHB1YmxpYyBzcCA6IExheWEuU3ByaXRlO1xuICAgIC8qKuaoquWdkOagh+enu+WKqOmAn+W6piAqL1xuICAgIHByaXZhdGUgZGlyWDpudW1iZXI7XG4gICAgLyoq57q15Z2Q5qCH56e75Yqo6YCf5bqmICovXG4gICAgcHJpdmF0ZSBkaXJZOm51bWJlcjtcbiAgICAvKirlopnlhoXkurrov5jmmK/lopnlpJbkurogKi9cbiAgICBwdWJsaWMgaXNPdXQgOiBib29sZWFuO1xuICAgIC8qKuS6uuWxnuaApyAqL1xuICAgIHB1YmxpYyB0eXBlOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmlzT3V0ID0gaXNPdXQ7XG4gICAgICAgIHRoaXMudHlwZT10eXBlO1xuICAgICAgICB0aGlzLmluaXQodHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5Yid5aeL5YyWICovXG4gICAgcHJpdmF0ZSBpbml0KHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgLy/liJvlu7pcbiAgICAgICAgdGhpcy5jcmVhdGVQZW9wbGUodHlwZSk7XG4gICAgfVxuXG4gICAgLyoq5byA5aeL6KGM5YqoICovXG4gICAgcHVibGljIG9wZW5CZWhhdmlvdXIoKTp2b2lkXG4gICAge1xuICAgICAgICAvL+i/kOihjOS6humAu+i+kVxuICAgICAgICBpZih0aGlzLmlzT3V0KSBcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wZW9wbGVfUG9zT3V0KCk7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lTG9vcCgxLHRoaXMsdGhpcy5jaGVja0xpbWl0X091dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBlb3BsZV9Qb3NJbm5lcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq55Sf5oiQ5Lq6ICovXG4gICAgcHJpdmF0ZSBjcmVhdGVQZW9wbGUodHlwZSkgOiB2b2lkXG4gICAge1xuICAgICAgICAgdGhpcy5jcmVhdGVTcCh0eXBlKTtcbiAgICB9XG5cbiAgICAvKirliJvlu7pTcHJpdGUgKi9cbiAgICBwcml2YXRlIGNyZWF0ZVNwKHR5cGUpIDogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGltZ1VybCA9IFwibWFwL1wiK3R5cGUrXCIucG5nXCI7XG4gICAgICAgIGlmKCF0aGlzLnNwKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNwID0gbmV3IExheWEuU3ByaXRlKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5zcCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcC5sb2FkSW1hZ2UoaW1nVXJsKTtcbiAgICAgICAgdGhpcy5zcC5waXZvdCh0aGlzLnNwLndpZHRoLzIsdGhpcy5zcC5oZWlnaHQvMik7ICAgICAgICBcbiAgICB9XG5cbiAgICAvKirorr7nva7liJ3lp4vkvY3nva4gKi9cbiAgICBwdWJsaWMgc2V0UG9zKHg6bnVtYmVyLHk6bnVtYmVyKTp2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNwLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwLnggPSB4O1xuICAgICAgICB0aGlzLnNwLnkgPSB5O1xuICAgIH1cblxuICAgIC8qKuWimeWkluS6uuihjOWKqOmAu+i+kSovXG4gICAgcHJpdmF0ZSBwZW9wbGVfUG9zT3V0KCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+e7meS6iOmaj+acuuaWueWQke+8jOaWueWQkeeUqCgtMX4xKeihqOekulxuICAgICAgICB0aGlzLmRpclg9TWF0aC5yYW5kb20oKSoyLTE7XG4gICAgICAgIHRoaXMuZGlyWT1NYXRoLnJhbmRvbSgpKjItMTtcbiAgICAgICAgLy/nu5nkuojpmo/mnLrml7bpl7TvvIzlnKjmraTml7bpl7TlhoXnp7vliqgs6ZqP5py65pe26Ze05ZyoKDIsOCnkuK3pgInmi6lcbiAgICAgICAgbGV0IHRpbWU9TWF0aC5yYW5kb20oKSo2KzI7XG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKHRpbWUqNjAsdGhpcyx0aGlzLmNsb3NlTW92ZVRpbWVyKTtcbiAgICAgICAgLy/lvIDlkK/np7vliqhcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZUxvb3AoMSx0aGlzLHRoaXMubW92ZURpc3RhbmNlKTtcbiAgICB9XG4gICAgXG4gICAgLyoq5Y2V5L2N5bin56e75YqoKi9cbiAgICBwcml2YXRlIG1vdmVEaXN0YW5jZSgpOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3AueCs9dGhpcy5kaXJYO1xuICAgICAgICB0aGlzLnNwLnkrPXRoaXMuZGlyWTtcbiAgICB9XG5cbiAgICAvKirlhbPpl63np7vliqjlrprml7blmajvvIzlvIDlkK/ljp/lnLDkvJHmga8qL1xuICAgIHByaXZhdGUgY2xvc2VNb3ZlVGltZXIoKTp2b2lkXG4gICAge1xuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsdGhpcy5tb3ZlRGlzdGFuY2UpO1xuICAgICAgICAvL+S8keaBr+aXtumXtOe7k+adn+WQjue7p+e7reenu+WKqFxuICAgICAgICBsZXQgdGltZT1NYXRoLnJhbmRvbSgpKjYrMjtcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UodGltZSo2MCx0aGlzLHRoaXMucGVvcGxlX1Bvc091dCk7XG4gICAgfVxuICAgIFxuICAgIC8qKuWimeWGheS6uuihjOWKqOmAu+i+kSovXG4gICAgcHJpdmF0ZSBwZW9wbGVfUG9zSW5uZXIoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG4gICAgXG5cbiAgICAvKirnorDmkp7mo4DmtYsgKi9cbiAgICBwcml2YXRlIGNoZWNrTGltaXRfT3V0KCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy/ovrnnlYzmo4DmtYtcbiAgICAgICAgaWYodGhpcy5zcC54PC0yMHx8dGhpcy5zcC54PjIwMjB8fHRoaXMuc3AueTwtMjApXG4gICAgICAgIHtcbiAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKHRoaXMudHlwZSx0aGlzKTtcbiAgICAgICAgICAgIE91dENvdW50cnlEYXRhLmluc18ub3V0Q291bnQtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5oqk5Z+O5rKz5qOA5rWLXG4gICAgICAgIGlmKHRoaXMuc3AueT49MzkwKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+mHjeaWsOe7meS4gOS4quS9jeenu1xuICAgICAgICAgICAgICAgIC8v57uZ5LqI6ZqP5py65pa55ZCR77yM5pa55ZCR55SoKC0xfjEp6KGo56S6XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJYPU1hdGgucmFuZG9tKCkqMi0xO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyWT0tTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirkurrmtojlpLEgKi9cbiAgICBwcml2YXRlIGRlc3RvcnlQZW9wbGUoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuc3AudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IFBlb3BsZSBmcm9tIFwiLi4vUGVvcGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiBleHRlbmRzIFBlb3BsZXtcblxuICAgIGNvbnN0cnVjdG9yKHZpZXcsdHlwZTpzdHJpbmcsaXNPdXQpe1xuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xuICAgIH1cbn0iLCJpbXBvcnQgUGVvcGxlIGZyb20gXCIuLi9QZW9wbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvYmJlciBleHRlbmRzIFBlb3BsZXtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3LHR5cGU6c3RyaW5nLGlzT3V0KXtcclxuICAgICAgICBzdXBlcih2aWV3LHR5cGUsaXNPdXQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFdvcmxkRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1dvcmxkRXZlbnRNYW5hZ2VyXCI7XG5pbXBvcnQgeyB1aSB9IGZyb20gXCIuLi8uLi91aS9sYXlhTWF4VUlcIjtcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9EYXRhTWFuYWdlclwiO1xuaW1wb3J0IFVJTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9VSU1hbmFnZXJcIjtcbmltcG9ydCBQZW9wbGVNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1Blb3BsZU1hbmFnZXJcIjtcblxuLyoqXG4gKiDkuJbnlYznrqHnkIblmajohJrmnKxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVdvcmxkIGV4dGVuZHMgdWkuR2FtZVdvcmxkVUl7XG4gICAgLyoqRGF0YU1hbmFnZXIgIOWNleS+iyAqL1xuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xuICAgIHByaXZhdGUgd29ybGRFdmVudE1hbmFnZXIgOiBXb3JsZEV2ZW50TWFuYWdlcjtcbiAgICAvKirkurrnsbvnrqHnkIblmagqL1xuICAgIHByaXZhdGUgcGVvcGxlTWFuYWdlciA6IFBlb3BsZU1hbmFnZXI7XG4gICAgLyoqVUnnrqHnkIblmaggKi9cbiAgICBwcml2YXRlIHVpTWFuYWdlciA6IFVJTWFuYWdlcjtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKumXqOaYr+WQpuaJk+W8gCAqL1xuICAgIHByaXZhdGUgaXNPcGVuIDogYm9vbGVhbjtcbiAgICAvKirlsY/luZXlrr3luqYgKi9cbiAgICBwcml2YXRlIHNjcmVlbldpZHRoIDogbnVtYmVyO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZ2FtZURhdGFJbml0KCk7Ly/muLjmiI/lj5jph4/liJ3lp4vljJZcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpOy8v57uZ5qGl5re75Yqg5LqL5Lu2IFxuICAgICAgICB0aGlzLnNjcmVlblNldHRpbmcoKTsvL+Wxj+W5leWxheS4rVxuICAgICAgICB0aGlzLmdhbWVTdGFydCgpOy8v5ri45oiP5rWB56iL5byA5aeLXG4gICAgfVxuXG4gICAgLyoq5pWw5o2u5Yid5aeL5YyWICovXG4gICAgcHJpdmF0ZSBnYW1lRGF0YUluaXQoKSA6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMud29ybGRFdmVudE1hbmFnZXIgPSBuZXcgV29ybGRFdmVudE1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyID0gbmV3IFBlb3BsZU1hbmFnZXIodGhpcy5zcF9zY2VuZSk7XG4gICAgICAgIHRoaXMudWlNYW5hZ2VyID0gbmV3IFVJTWFuYWdlcih0aGlzLnNwX1VJKTtcbiAgICB9XG5cbiAgICAvKirmt7vliqDkuovku7YgKi9cbiAgICBwcml2YXRlIGFkZEV2ZW50KCkgOiB2b2lkXG4gICAge1xuICAgICAgICAvL+e7memXqOW4rueCueeCueWHu+S6iyAgIFxuICAgICAgICB0aGlzLnNwX2Rvb3Iub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuZG9vckN0cik7XG4gICAgfVxuXG4gICAgLyoq5bGP5bmVIOWxgOS4rSovXG4gICAgcHJpdmF0ZSBzY3JlZW5TZXR0aW5nKCkgOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gOTAwLyhMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0L0xheWEuQnJvd3Nlci5jbGllbnRXaWR0aCk7Ly/lsY/luZXpq5jluqZcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aWR0aFwiICsgdGhpcy5zY3JlZW5XaWR0aCk7XG4gICAgfVxuXG4gICAgLyoq6Zeo55qE5byA5YWzICovXG4gICAgcHJpdmF0ZSBkb29yQ3RyKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBpZih0aGlzLmlzT3BlbilcbiAgICAgICAgey8v5byA6ZeoXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kb29yQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHsvL+WFs+mXqFxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kb29yT3BlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5YWz6ZeoICovXG4gICAgcHJpdmF0ZSBkb29yQ2xvc2UoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG5cbiAgICAvKirlvIDpl6ggKi9cbiAgICBwcml2YXRlIGRvb3JPcGVuKCkgOiB2b2lkXG4gICAge1xuXG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8v5ri45oiP5rWB56iL5byA5aeLLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvKirmuLjmiI/mtYHnqIvlvIDlp4sgKi9cbiAgICBwcml2YXRlIGdhbWVTdGFydCgpIDogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLm9wZW5QZW9wbGVGYWN0b3J5KCk7Ly/kurrlj6PnlJ/miJDpgLvovpHov5DooYxcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuR2FtZSBleHRlbmRzIExheWEuU2NyaXB0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG4gICAgXG5cbiAgICBvbkNsaWNrKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lV29ybGQuc2NlbmVcIik7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5TdG9yeSBleHRlbmRzIExheWEuU2NyaXB0e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSA6IHZvaWRcbiAgICB7XG5cbiAgICB9XG4gICAgXG5cbiAgICBvbkNsaWNrKCkgOiB2b2lkXG4gICAge1xuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lU3Rvcnkuc2NlbmVcIik7XG4gICAgfVxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xuaW1wb3J0IERpYWxvZz1MYXlhLkRpYWxvZztcbmltcG9ydCBTY2VuZT1MYXlhLlNjZW5lO1xuZXhwb3J0IG1vZHVsZSB1aSB7XHJcbiAgICBleHBvcnQgY2xhc3MgR2FtZVdvcmxkVUkgZXh0ZW5kcyBTY2VuZSB7XHJcblx0XHRwdWJsaWMgc3Bfc2NlbmU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2dyb3VuZDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3Bfcml2ZXI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX3dhbGw6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwX2Rvb3I6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV80OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV81OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV82OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV84OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV85OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzEyOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE1OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBwYWxhY2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvc3BpdGFsOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xOTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRlY2hub2xvZ3k6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIxOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgZmFybTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMxOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBhcm15OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9VSTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkdhbWVXb3JsZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cciJdfQ==
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    /**人种 - 普通人 */
    GameConfig.COMMON_MAN = 1;
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
    return GameConfig;
}());
exports.default = GameConfig;
},{}],2:[function(require,module,exports){
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
        this.msgBody.x = -1200;
        Laya.Tween.to(this.msgBody, { x: (900 / (Laya.Browser.clientHeight / Laya.Browser.clientWidth) - 1163) / 2 }, 200, Laya.Ease.backOut);
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
        Laya.Tween.to(this.msgBody, { x: -1200 }, 200, Laya.Ease.backOut, Laya.Handler.create(this, this.closeOver));
    };
    MsgDialog.prototype.closeOver = function () {
        this.visible = false;
    };
    return MsgDialog;
}(layaMaxUI_1.ui.Dialog.CurrentDialogUI));
exports.default = MsgDialog;
},{"../ui/layaMaxUI":12}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 人 管理
 */
var PeopleManager = /** @class */ (function () {
    function PeopleManager() {
    }
    ;
    /**
     * 生成人
     * 生成人的位置
     * 生产人的type ： 城里人/城外人 逻辑分开
     */
    PeopleManager.prototype.createPeople = function () {
    };
    return PeopleManager;
}());
exports.default = PeopleManager;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
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
},{"./Core/MsgDialog":2,"./Script/Center":8,"./Script/GameWorld/GameWorld":9,"./Script/OpenGame":10,"./Script/OpenStory":11}],7:[function(require,module,exports){
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
},{"./GameConfig":6}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorldEventManager_1 = require("../../Core/WorldEventManager");
var layaMaxUI_1 = require("../../ui/layaMaxUI");
var UIManager_1 = require("../../Core/UIManager");
var PeopleManager_1 = require("../../Core/PeopleManager");
var GameConfig_1 = require("../../Config/GameConfig");
var MsgDialog_1 = require("../../Core/MsgDialog");
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
    };
    /**数据初始化 */
    GameWorld.prototype.gameDataInit = function () {
        this.worldEventManager = new WorldEventManager_1.default();
        this.peopleManager = new PeopleManager_1.default();
        this.uiManager = new UIManager_1.default(this.sp_UI);
        this.msgDialog = new MsgDialog_1.default();
        this.mousePos = {};
        this.isDown = false;
    };
    /**添加事件 */
    GameWorld.prototype.addEvent = function () {
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseUp);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
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
        this.eventHouse.on(Laya.Event.CLICK, this, this.onHouseInfo, [GameConfig_1.default.EVENT_HOUSE]);
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
        if (this.isOpen) { //开门
            this.isOpen = false;
            this.doorClose();
        }
        else { //关门
            this.isOpen = true;
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
    ////////////游戏流程开始//////////////////////////
    /**游戏流程开始 */
    GameWorld.prototype.gameStart = function () {
        this.peopleManager.createPeople(); //人口生成逻辑运行
    };
    return GameWorld;
}(layaMaxUI_1.ui.GameWorldUI));
exports.default = GameWorld;
},{"../../Config/GameConfig":1,"../../Core/MsgDialog":2,"../../Core/PeopleManager":3,"../../Core/UIManager":4,"../../Core/WorldEventManager":5,"../../ui/layaMaxUI":12}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scene = Laya.Scene;
var ui;
(function (ui) {
    var Dialog;
    (function (Dialog) {
        var CurrentDialogUI = /** @class */ (function (_super) {
            __extends(CurrentDialogUI, _super);
            function CurrentDialogUI() {
                return _super.call(this) || this;
            }
            CurrentDialogUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadScene("Dialog/CurrentDialog");
            };
            return CurrentDialogUI;
        }(Scene));
        Dialog.CurrentDialogUI = CurrentDialogUI;
    })(Dialog = ui.Dialog || (ui.Dialog = {}));
})(ui = exports.ui || (exports.ui = {}));
(function (ui) {
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
},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL+adgui0p+mTui9MYXlhQWlySURFX2JldGEvcmVzb3VyY2VzL2FwcC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL0NvbmZpZy9HYW1lQ29uZmlnLnRzIiwic3JjL0NvcmUvTXNnRGlhbG9nLnRzIiwic3JjL0NvcmUvUGVvcGxlTWFuYWdlci50cyIsInNyYy9Db3JlL1VJTWFuYWdlci50cyIsInNyYy9Db3JlL1dvcmxkRXZlbnRNYW5hZ2VyLnRzIiwic3JjL0dhbWVDb25maWcudHMiLCJzcmMvTWFpbi50cyIsInNyYy9TY3JpcHQvQ2VudGVyLnRzIiwic3JjL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzIiwic3JjL1NjcmlwdC9PcGVuR2FtZS50cyIsInNyYy9TY3JpcHQvT3BlblN0b3J5LnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQTtJQUFBO0lBbUJBLENBQUM7SUFsQkcsY0FBYztJQUNBLHFCQUFVLEdBQVksQ0FBQyxDQUFDO0lBSXRDLHNDQUFzQztJQUN0QyxRQUFRO0lBQ00sbUJBQVEsR0FBWSxDQUFDLENBQUM7SUFDcEMsUUFBUTtJQUNNLGVBQUksR0FBWSxDQUFDLENBQUM7SUFDaEMsUUFBUTtJQUNNLGVBQUksR0FBVyxDQUFDLENBQUM7SUFDL0IsUUFBUTtJQUNNLHFCQUFVLEdBQVcsQ0FBQyxDQUFDO0lBQ3JDLGFBQWE7SUFDQyxzQkFBVyxHQUFXLENBQUMsQ0FBQztJQUN0QyxRQUFRO0lBQ00saUJBQU0sR0FBVyxDQUFDLENBQUM7SUFDckMsaUJBQUM7Q0FuQkQsQUFtQkMsSUFBQTtrQkFuQm9CLFVBQVU7Ozs7QUNBL0IsNkNBQXFDO0FBRXJDOztHQUVHO0FBQ0g7SUFBdUMsNkJBQXlCO0lBRzVELFFBQVE7SUFDUixrQ0FBa0M7SUFFbEM7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QztRQUNMLGtCQUFDO0lBQUQsQ0FyREEsQUFxREMsQ0FyRGdDLEtBQUssR0FxRHJDO0lBckRZLGNBQVcsY0FxRHZCLENBQUE7QUFDTCxDQUFDLEVBdkRhLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQXVEZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlnIHtcclxuICAgIC8qKuS6uuenjSAtIOaZrumAmuS6uiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDT01NT05fTUFOIDogbnVtYmVyID0gMTtcclxuXHJcblxyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeW7uuetkVxyXG4gICAgLyoq5Yy76ZmiICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEhPU1BJVEFMIDogbnVtYmVyID0gMTtcclxuICAgIC8qKuWGm+mYnyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBBUk1ZIDogbnVtYmVyID0gMjtcclxuICAgIC8qKuWGnOWcuiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGQVJNOiBudW1iZXIgPSAzO1xyXG4gICAgLyoq56eR5oqAICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRFQ0hOT0xPR1k6IG51bWJlciA9IDQ7XHJcbiAgICAvKirkuovku7bmiL8g5paw6Ze75oi/ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UX0hPVVNFOiBudW1iZXIgPSA1O1xyXG4gICAgLyoq55qH5a6rICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBBTEFDRTogbnVtYmVyID0gNjtcclxufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4uL3VpL2xheWFNYXhVSVwiO1xyXG5cclxuLyoqXHJcbiAqIOa2iOaBr+ahhiDpgJrnlKhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1zZ0RpYWxvZyBleHRlbmRzIHVpLkRpYWxvZy5DdXJyZW50RGlhbG9nVUl7XHJcbiAgICAvKirnsbvlnosgKi9cclxuICAgIHByaXZhdGUgdHlwZSA6IG51bWJlciA7XHJcbiAgICAvKirnvJPliqggKi9cclxuICAgIC8vIHByaXZhdGUgc2hvd1R3ZWVuIDogTGF5YS5Ud2VlbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirliJ3lp4vljJYgKi9cclxuICAgIHB1YmxpYyBzaG93TXNnKHR5cGU6bnVtYmVyKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5jbG9zZURpYWxvZyk7ICAgICAgICBcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VJbWcoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVRpdGxlKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VXb3JkKCk7IFxyXG4gICAgICAgIHRoaXMubXNnQm9keS54ID0gLTEyMDA7ICAgICAgIFxyXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5tc2dCb2R5LHt4Oig5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKS0xMTYzKS8yfSwyMDAsTGF5YS5FYXNlLmJhY2tPdXQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaNouWbviAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VJbWcoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBzd2l0Y2godGhpcy50eXBlKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaNouagh+mimCAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VUaXRsZSgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaWh+Wtl+i9veWFpSAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VXb3JkKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YWz6ZetICovXHJcbiAgICBwdWJsaWMgY2xvc2VEaWFsb2coKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ0bl9jbG9zZS5vZmYoTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMuY2xvc2VEaWFsb2cpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubXNnQm9keSx7eDotMTIwMH0sMjAwLExheWEuRWFzZS5iYWNrT3V0LExheWEuSGFuZGxlci5jcmVhdGUodGhpcyx0aGlzLmNsb3NlT3ZlcikpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZU92ZXIoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTsgICAgICAgIFxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOS6uiDnrqHnkIZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoKXt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog55Sf5oiQ5Lq6IFxyXG4gICAgICog55Sf5oiQ5Lq655qE5L2N572uXHJcbiAgICAgKiDnlJ/kuqfkurrnmoR0eXBlIO+8miDln47ph4zkurov5Z+O5aSW5Lq6IOmAu+i+keWIhuW8gFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlUGVvcGxlKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvKirmiorkurrmlL7lhaXlr7nosaHmsaAgKi9cclxufSIsImltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIFVJ566h55CG5ZmoXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSU1hbmFnZXJ7XHJcbiAgICAvKirmlbDmja7nrqHnkIblmaggKi9cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgZGF0YU1hbmFnZXIgOiBEYXRhTWFuYWdlcjtcclxuICAgIC8qKlVJIHNwcml0ZSAqL1xyXG4gICAgcHJpdmF0ZSBVaVNwcml0ZSA6IExheWEuU3ByaXRlO1xyXG5cclxuICAgIC8qKui9veWFpeaVsOaNriAqL1xyXG4gICAgY29uc3RydWN0b3IodWk6TGF5YS5TcHJpdGUpe1xyXG4gICAgICAgIHRoaXMuVWlTcHJpdGUgPSB1aTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn0iLCIvKipcclxuICog5LqL5Lu25Y+R55Sf566h55CG5ZmoXHJcbiAqIFxyXG4gKiBcclxuICog55Sf5oiQ5LqL5Lu244CBXHJcbiAqIOW9seWTjeS6uuWPo+a1geWKqFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ybGRFdmVudE1hbmFnZXIge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKirkuovku7bpooTmiqXliLAgKi9cclxuICAgIFxyXG5cclxuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xyXG5cclxuICAgIFxyXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBNc2dEaWFsb2cgZnJvbSBcIi4vQ29yZS9Nc2dEaWFsb2dcIlxuaW1wb3J0IE9wZW5HYW1lIGZyb20gXCIuL1NjcmlwdC9PcGVuR2FtZVwiXG5pbXBvcnQgR2FtZVdvcmxkIGZyb20gXCIuL1NjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkXCJcbmltcG9ydCBPcGVuU3RvcnkgZnJvbSBcIi4vU2NyaXB0L09wZW5TdG9yeVwiXG5pbXBvcnQgQ2VudGVyIGZyb20gXCIuL1NjcmlwdC9DZW50ZXJcIlxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9MTQ0MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTkwMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWRoZWlnaHRcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImxlZnRcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cIlN0YXJ0R2FtZS5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcbiAgICAgICAgcmVnKFwiQ29yZS9Nc2dEaWFsb2cudHNcIixNc2dEaWFsb2cpO1xuICAgICAgICByZWcoXCJTY3JpcHQvT3BlbkdhbWUudHNcIixPcGVuR2FtZSk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9HYW1lV29ybGQvR2FtZVdvcmxkLnRzXCIsR2FtZVdvcmxkKTtcbiAgICAgICAgcmVnKFwiU2NyaXB0L09wZW5TdG9yeS50c1wiLE9wZW5TdG9yeSk7XG4gICAgICAgIHJlZyhcIlNjcmlwdC9DZW50ZXIudHNcIixDZW50ZXIpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuY2xhc3MgTWFpbiB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvL+agueaNrklEReiuvue9ruWIneWni+WMluW8leaTjlx0XHRcclxuXHRcdGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuXHRcdGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlO1xyXG5cclxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG5cclxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXHJcblx0XHRHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcblx0fVxyXG59XHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbnRlciBleHRlbmRzIExheWEuU2NyaXB0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIGxldCBzY3JlZW5XaWR0aCA9IDkwMC8oTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodC9MYXlhLkJyb3dzZXIuY2xpZW50V2lkdGgpOy8v5bGP5bmV6auY5bqmXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aWR0aFwiICsgdGhpcy5zY3JlZW5XaWR0aCk7XHJcbiAgICAgICAgaWYoc2NyZWVuV2lkdGggPCA4MDApICh0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lKFwiZ2FtZU5hbWVcIikgYXMgTGF5YS5MYWJlbCkuZm9udFNpemUgPSAxMjU7XHJcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5TcHJpdGUpLnggPSAoc2NyZWVuV2lkdGgtIDY2NykvMjsgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCBXb3JsZEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vQ29yZS9Xb3JsZEV2ZW50TWFuYWdlclwiO1xyXG5pbXBvcnQgeyB1aSB9IGZyb20gXCIuLi8uLi91aS9sYXlhTWF4VUlcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uLy4uL0NvcmUvVUlNYW5hZ2VyXCI7XHJcbmltcG9ydCBQZW9wbGVNYW5hZ2VyIGZyb20gXCIuLi8uLi9Db3JlL1Blb3BsZU1hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4uLy4uL0NvbmZpZy9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBNc2dEaWFsb2cgZnJvbSBcIi4uLy4uL0NvcmUvTXNnRGlhbG9nXCI7XHJcblxyXG4vKipcclxuICog5LiW55WM566h55CG5Zmo6ISa5pysXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lV29ybGQgZXh0ZW5kcyB1aS5HYW1lV29ybGRVSXtcclxuICAgIC8qKkRhdGFNYW5hZ2VyICDljZXkvosgKi9cclxuICAgIC8qKuS6i+S7tuWPkeeUn+WZqCAqL1xyXG4gICAgcHJpdmF0ZSB3b3JsZEV2ZW50TWFuYWdlciA6IFdvcmxkRXZlbnRNYW5hZ2VyO1xyXG4gICAgLyoq5Lq657G7566h55CG5ZmoKi9cclxuICAgIHByaXZhdGUgcGVvcGxlTWFuYWdlciA6IFBlb3BsZU1hbmFnZXI7XHJcbiAgICAvKipVSeeuoeeQhuWZqCAqL1xyXG4gICAgcHJpdmF0ZSB1aU1hbmFnZXIgOiBVSU1hbmFnZXI7XHJcbiAgICAvKirmtojmga/pgJrnlKjmoYYgKi9cclxuICAgIHByaXZhdGUgbXNnRGlhbG9nIDogTXNnRGlhbG9nO1xyXG5cclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLyoq6Zeo5piv5ZCm5omT5byAICovXHJcbiAgICBwcml2YXRlIGlzT3BlbiA6IGJvb2xlYW47XHJcbiAgICAvKirlsY/luZXlrr3luqYgKi9cclxuICAgIHByaXZhdGUgc2NyZWVuV2lkdGggOiBudW1iZXI7XHJcbiAgICAvKirpvKDmoIfmmK/lkKbmjInkuIsgKi9cclxuICAgIHByaXZhdGUgaXNEb3duIDogYm9vbGVhbjtcclxuICAgIC8qKum8oOagh+eCueiusOW9lSAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZVBvcyA6IGFueTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdhbWVEYXRhSW5pdCgpOy8v5ri45oiP5Y+Y6YeP5Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpOy8v57uZ5qGl5re75Yqg5LqL5Lu2IFxyXG4gICAgICAgIHRoaXMuc2NyZWVuU2V0dGluZygpOy8v5bGP5bmV5bGF5LitXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhcnQoKTsvL+a4uOaIj+a1geeoi+W8gOWni1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaVsOaNruWIneWni+WMliAqL1xyXG4gICAgcHJpdmF0ZSBnYW1lRGF0YUluaXQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLndvcmxkRXZlbnRNYW5hZ2VyID0gbmV3IFdvcmxkRXZlbnRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyID0gbmV3IFBlb3BsZU1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLnVpTWFuYWdlciA9IG5ldyBVSU1hbmFnZXIodGhpcy5zcF9VSSk7XHJcbiAgICAgICAgdGhpcy5tc2dEaWFsb2cgPSBuZXcgTXNnRGlhbG9nKCk7ICAgICAgXHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaXNEb3duID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5re75Yqg5LqL5Lu2ICovXHJcbiAgICBwcml2YXRlIGFkZEV2ZW50KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sdGhpcyx0aGlzLm1vdXNlRG93bik7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50Lk1PVVNFX1VQLHRoaXMsdGhpcy5tb3VzZVVwKTtcclxuICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfTU9WRSx0aGlzLHRoaXMubW91c2VNb3ZlKTtcclxuICAgICAgICAvL+e7memXqOW4rueCueeCueWHu+S6iyAgIFxyXG4gICAgICAgIHRoaXMuc3BfZG9vci5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5kb29yQ3RyKTtcclxuICAgICAgICAvL+WMu+mmhuS6i+S7tue7keWumlxyXG4gICAgICAgIHRoaXMuaG9zcGl0YWwub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuSE9TUElUQUxdKTtcclxuICAgICAgICAvL+WGm+mYn+S6i+S7tue7keWumlxyXG4gICAgICAgIHRoaXMuYXJteS5vbihMYXlhLkV2ZW50LkNMSUNLLHRoaXMsdGhpcy5vbkhvdXNlSW5mbyxbR2FtZUNvbmZpZy5BUk1ZXSk7XHJcbiAgICAgICAgLy/nsq7ku5Pkuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLmZhcm0ub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRkFSTV0pOyAgICAgICAgXHJcbiAgICAgICAgLy/np5HmioDppobkuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLnRlY2hub2xvZ3kub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuVEVDSE5PTE9HWV0pOyAgICAgICAgXHJcbiAgICAgICAgLy/mlrDpl7vngrnkuovku7bnu5HlrppcclxuICAgICAgICB0aGlzLmV2ZW50SG91c2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuRVZFTlRfSE9VU0VdKTsgICAgIFxyXG4gICAgICAgIC8v5paw6Ze755qH5a6r57uR5a6aXHJcbiAgICAgICAgdGhpcy5wYWxhY2Uub24oTGF5YS5FdmVudC5DTElDSyx0aGlzLHRoaXMub25Ib3VzZUluZm8sW0dhbWVDb25maWcuUEFMQUNFXSk7ICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKirlsY/luZUg5bGA5LitKi9cclxuICAgIHByaXZhdGUgc2NyZWVuU2V0dGluZygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSA5MDAvKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQvTGF5YS5Ccm93c2VyLmNsaWVudFdpZHRoKTsvL+Wxj+W5lemrmOW6plxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiArIHRoaXMuc2NyZWVuV2lkdGgpO1xyXG4gICAgICAgIHRoaXMuc3Bfc2NlbmUueCA9IC0oMjAwMC10aGlzLnNjcmVlbldpZHRoKS8yO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL+S6i+S7tuWbnuiwg1xyXG5cclxuICAgIC8qKumXqOeahOW8gOWFsyAqL1xyXG4gICAgcHJpdmF0ZSBkb29yQ3RyKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYodGhpcy5pc09wZW4pXHJcbiAgICAgICAgey8v5byA6ZeoXHJcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZG9vckNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7Ly/lhbPpl6hcclxuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRvb3JPcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWFs+mXqCAqL1xyXG4gICAgcHJpdmF0ZSBkb29yQ2xvc2UoKSA6IHZvaWRcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5byA6ZeoICovXHJcbiAgICBwcml2YXRlIGRvb3JPcGVuKCkgOiB2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKuenu+WKqCAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZU1vdmUoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy5pc0Rvd24pIHJldHVybjtcclxuICAgICAgICBpZih0aGlzLm1vdXNlUG9zLngpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIHRoaXMuc3Bfc2NlbmUueCArPSBMYXlhLnN0YWdlLm1vdXNlWCAtIHRoaXMubW91c2VQb3MueDsgXHJcbiAgICAgICAgLy8gICAgdGhpcy5zcF9zY2VuZS55ICs9IExheWEuc3RhZ2UubW91c2VZIC0gdGhpcy5tb3VzZVBvcy54O1xyXG4gICAgICAgICAgICBpZih0aGlzLnNwX3NjZW5lLnggPiAwKSAgdGhpcy5zcF9zY2VuZS54ID0gMDtcclxuICAgICAgICAgICAgaWYodGhpcy5zcF9zY2VuZS54IDwgLSgyMDAwLXRoaXMuc2NyZWVuV2lkdGgpKSB0aGlzLnNwX3NjZW5lLnggPSAgLSgyMDAwLXRoaXMuc2NyZWVuV2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSBMYXlhLnN0YWdlLm1vdXNlWDtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLnkgPSBMYXlhLnN0YWdlLm1vdXNlWTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmi5bliqjmjInkuIsgKi9cclxuICAgIHByaXZhdGUgbW91c2VEb3duKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pc0Rvd24gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaLluWKqOaKrOi1tyAqL1xyXG4gICAgcHJpdmF0ZSBtb3VzZVVwKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLHRoaXMubW91c2VNb3ZlKTtcclxuICAgICAgICB0aGlzLmlzRG93biA9IGZhbHNlOyBcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLnggPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcy55ID0gdW5kZWZpbmVkOyAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoq54K55Ye7IOiOt+WPluW7uuetkeS/oeaBryAqL1xyXG4gICAgcHJpdmF0ZSBvbkhvdXNlSW5mbyh0eXBlKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1zZ0RpYWxvZy5zaG93TXNnKHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vL+a4uOaIj+a1geeoi+W8gOWniy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvKirmuLjmiI/mtYHnqIvlvIDlp4sgKi9cclxuICAgIHByaXZhdGUgZ2FtZVN0YXJ0KCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wZW9wbGVNYW5hZ2VyLmNyZWF0ZVBlb3BsZSgpOy8v5Lq65Y+j55Sf5oiQ6YC76L6R6L+Q6KGMXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbkdhbWUgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIDogdm9pZFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIG9uQ2xpY2soKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lV29ybGQuc2NlbmVcIik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuU3RvcnkgZXh0ZW5kcyBMYXlhLlNjcmlwdHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIDogdm9pZFxyXG4gICAge1xyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIG9uQ2xpY2soKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBMYXlhLlNjZW5lLm9wZW4oXCJHYW1lU3Rvcnkuc2NlbmVcIik7XHJcbiAgICB9XHJcbn0iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cbmltcG9ydCBWaWV3PUxheWEuVmlldztcclxuaW1wb3J0IERpYWxvZz1MYXlhLkRpYWxvZztcclxuaW1wb3J0IFNjZW5lPUxheWEuU2NlbmU7XG5leHBvcnQgbW9kdWxlIHVpLkRpYWxvZyB7XHJcbiAgICBleHBvcnQgY2xhc3MgQ3VycmVudERpYWxvZ1VJIGV4dGVuZHMgU2NlbmUge1xyXG5cdFx0cHVibGljIG1zZ0JvZHk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9QZXJzb246TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNwcml0ZV9Nc2c6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJ0bl9jbG9zZTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkRpYWxvZy9DdXJyZW50RGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgbW9kdWxlIHVpIHtcclxuICAgIGV4cG9ydCBjbGFzcyBHYW1lV29ybGRVSSBleHRlbmRzIFNjZW5lIHtcclxuXHRcdHB1YmxpYyBzcF9zY2VuZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfZ3JvdW5kOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9yaXZlcjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3Bfd2FsbDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc3BfZG9vcjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzQ6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzU6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzg6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzk6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGV2ZW50SG91c2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzExOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcGFsYWNlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3NwaXRhbDpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMTc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzE4OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8xOTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHRlY2hub2xvZ3k6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzIxOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMjY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzI3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8yODpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgZmFybTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzA6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzMxOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zMjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzM6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM0OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBob3VzZV8zNTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgaG91c2VfMzY6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGhvdXNlXzM3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBhcm15OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBzcF9VSTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIkdhbWVXb3JsZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cciJdfQ==
>>>>>>> c2732eb4aebe80eb23f1a83ea11e1a0d4f751f91
