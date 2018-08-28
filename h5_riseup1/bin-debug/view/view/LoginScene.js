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
/**
 * long description for the file
 *
 * @summary 加载界面
 * @author wangtao
 *
 * Created at     : 2018-07-31 09:48:04
 * Last modified  : 2018-07-31 09:49:28
 */
var game;
(function (game) {
    var LoginScene = (function (_super) {
        __extends(LoginScene, _super);
        function LoginScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LoginScene;
    }(game.BaseComponent));
    game.LoginScene = LoginScene;
    __reflect(LoginScene.prototype, "game.LoginScene");
})(game || (game = {}));
//# sourceMappingURL=LoginScene.js.map