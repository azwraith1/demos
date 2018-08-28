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
// TypeScript file
var game;
(function (game) {
    var BallonSkinMediator = (function (_super) {
        __extends(BallonSkinMediator, _super);
        function BallonSkinMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, BallonSkinMediator.NAME, viewComponent) || this;
            _this.type = "scene";
            _this.moveLock = false;
            return _this;
        }
        BallonSkinMediator.prototype.listNotificationInterests = function () {
            return [
                SceneNotify.OPEN_BALLON_SKIN,
                SceneNotify.CLOSE_BALLON_SKIN
            ];
        };
        BallonSkinMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.facade.registerMediator(new game.StartMediator());
        };
        BallonSkinMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case SceneNotify.OPEN_BALLON_SKIN: {
                    if (this.viewComponent) {
                        return;
                    }
                    this.showViewComponent();
                    break;
                }
                case SceneNotify.CLOSE_BALLON_SKIN: {
                    this.closeViewComponent(1);
                    break;
                }
            }
        };
        BallonSkinMediator.prototype.showViewComponent = function () {
            this.viewComponent = new game.BallonSkinPanel();
            PopUpManager.addSceneUp(this.viewComponent);
        };
        /**
         * 初始化面板ui
         */
        BallonSkinMediator.prototype.initUI = function () {
        };
        /**
         * 初始化面板数据
         */
        BallonSkinMediator.prototype.initData = function () {
        };
        BallonSkinMediator.NAME = "BallonSkinMediator";
        return BallonSkinMediator;
    }(BaseMediator));
    game.BallonSkinMediator = BallonSkinMediator;
    __reflect(BallonSkinMediator.prototype, "game.BallonSkinMediator");
})(game || (game = {}));
//# sourceMappingURL=BallonSkinMediator.js.map