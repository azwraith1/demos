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
 * @summary login mediator
 * @author wangtao
 *
 * Created at     : 2018-07-31 10:04:21
 * Last modified  : 2018-07-31 10:07:34
 */
var game;
(function (game) {
    var LoginMediator = (function (_super) {
        __extends(LoginMediator, _super);
        function LoginMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, LoginMediator.NAME, viewComponent) || this;
            _this.type = "scene";
            _this.moveLock = false;
            return _this;
        }
        LoginMediator.prototype.listNotificationInterests = function () {
            return [
                SceneNotify.OPEN_LOGIN,
                SceneNotify.CLOSE_LOGIN
            ];
        };
        LoginMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.facade.registerMediator(new game.StartMediator());
            this.facade.registerMediator(new game.GameMediator());
        };
        LoginMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case SceneNotify.OPEN_LOGIN: {
                    if (this.viewComponent) {
                        return;
                    }
                    this.showViewComponent();
                    break;
                }
                case SceneNotify.CLOSE_LOGIN: {
                    this.closeViewComponent(1);
                    break;
                }
            }
        };
        LoginMediator.prototype.showViewComponent = function () {
            this.viewComponent = new game.LoginScene();
            PopUpManager.addSceneUp(this.viewComponent);
        };
        /**
         * 初始化面板ui
         */
        LoginMediator.prototype.initUI = function () {
        };
        /**
         * 初始化面板数据
         */
        LoginMediator.prototype.initData = function () {
        };
        LoginMediator.NAME = "LoginMediator";
        return LoginMediator;
    }(BaseMediator));
    game.LoginMediator = LoginMediator;
    __reflect(LoginMediator.prototype, "game.LoginMediator");
})(game || (game = {}));
//# sourceMappingURL=LoginMediator.js.map