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
    var AppContainer = (function (_super) {
        __extends(AppContainer, _super);
        function AppContainer() {
            return _super.call(this) || this;
        }
        AppContainer.prototype.addBackGround = function () {
        };
        return AppContainer;
    }(egret.Stage));
    game.AppContainer = AppContainer;
    __reflect(AppContainer.prototype, "game.AppContainer");
})(game || (game = {}));
//# sourceMappingURL=AppContainer.js.map