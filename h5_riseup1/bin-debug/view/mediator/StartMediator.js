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
 * 游戏开始mediator
 * @author wangtao
 *
 * Created at     : 2018-07-31 09:50:34
 * Last modified  : 2018-08-01 10:00:52
 */
var game;
(function (game) {
    var StartMediator = (function (_super) {
        __extends(StartMediator, _super);
        function StartMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, StartMediator.NAME, viewComponent) || this;
            _this.type = "scene";
            _this.moveLock = false;
            return _this;
        }
        StartMediator.prototype.listNotificationInterests = function () {
            return [
                SceneNotify.OPEN_START,
                SceneNotify.CLOSE_START
            ];
        };
        StartMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.facade.registerMediator(new game.GameMediator());
            this.facade.registerMediator(new game.LoginMediator());
            this.facade.registerMediator(new game.GameOverMediator());
            this.facade.registerMediator(new game.BallonSkinMediator());
        };
        StartMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case SceneNotify.OPEN_START: {
                    if (this.viewComponent) {
                        return;
                    }
                    this.showViewComponent();
                    break;
                }
                case SceneNotify.CLOSE_START: {
                    this.closeViewComponent(1);
                    break;
                }
            }
        };
        StartMediator.prototype.showViewComponent = function () {
            this.viewComponent = new game.StartScene();
            var sceneLayer = GameLayerManager.gameLayer().sceneLayer;
            sceneLayer.addChild(this.viewComponent);
        };
        /**
         * 初始化面板ui
         */
        StartMediator.prototype.initUI = function () {
        };
        /**
         * 初始化面板数据
         */
        StartMediator.prototype.initData = function () {
        };
        StartMediator.NAME = "StartMediator";
        return StartMediator;
    }(BaseMediator));
    game.StartMediator = StartMediator;
    __reflect(StartMediator.prototype, "game.StartMediator");
})(game || (game = {}));
//# sourceMappingURL=StartMediator.js.map