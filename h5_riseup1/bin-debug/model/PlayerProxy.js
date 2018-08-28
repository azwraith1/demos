/**
 * long description for the file
 *
 * @summary 玩家数据管理模块
 * @author wangtao
 *
 * Created at     : 2018-07-30 14:35:56
 * Last modified  : 2018-08-24 19:10:09
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    var PlayerProxy = (function (_super) {
        __extends(PlayerProxy, _super);
        function PlayerProxy() {
            return _super.call(this) || this;
        }
        Object.defineProperty(PlayerProxy.prototype, "playerBean", {
            get: function () {
                return this.playerInfo._score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerProxy.prototype, "playerBeans", {
            set: function (score) {
                this.playerInfo = new game.PlayerBean();
                this.playerInfo._score = score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerProxy.prototype, "BallonBean", {
            get: function () {
                return this.BallonBean;
            },
            set: function (ballonData) {
                this.ballonInfo = ballonData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerProxy.prototype, "LevelBeans", {
            get: function () {
                return this.LevelBean;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerProxy.prototype, "LevelBean", {
            set: function (levelData) {
                this.levelInfo = levelData;
                this.point = levelData.point;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlayerProxy.prototype, "WallBean", {
            get: function () {
                return this.wallInfo;
            },
            set: function (wallData) {
                this.wallInfo = wallData;
            },
            enumerable: true,
            configurable: true
        });
        return PlayerProxy;
    }(puremvc.Proxy));
    game.PlayerProxy = PlayerProxy;
    __reflect(PlayerProxy.prototype, "game.PlayerProxy", ["puremvc.IProxy", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=PlayerProxy.js.map