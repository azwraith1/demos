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
 * Game mediator
 * @author wangtao
 *
 * Created at     : 2018-07-31 10:08:03
 * Last modified  : 2018-07-31 18:00:11
 */
var game;
(function (game) {
    var GameMediator = (function (_super) {
        __extends(GameMediator, _super);
        function GameMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, GameMediator.NAME, viewComponent) || this;
            _this.type = "scene";
            _this.moveLock = false;
            return _this;
        }
        GameMediator.prototype.listNotificationInterests = function () {
            return [
                SceneNotify.OPEN_GAME,
                SceneNotify.CLOSE_GAME
            ];
        };
        GameMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.facade.registerMediator(new game.StartMediator());
            this.facade.registerMediator(new game.LoginMediator());
            this.facade.registerMediator(new game.GameOverMediator());
        };
        GameMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case SceneNotify.OPEN_GAME: {
                    if (this.viewComponent) {
                        return;
                    }
                    this.showViewComponent();
                    break;
                }
                case SceneNotify.CLOSE_GAME: {
                    this.closeViewComponent(1);
                    break;
                }
            }
        };
        GameMediator.prototype.showViewComponent = function () {
            this.viewComponent = new game.GameScene();
            PopUpManager.addSceneUp(this.viewComponent);
        };
        /**
         * 初始化面板ui
         */
        GameMediator.prototype.initUI = function () {
        };
        /**
         * 初始化面板数据
         */
        GameMediator.prototype.initData = function () {
        };
        GameMediator.NAME = "GameMediator";
        return GameMediator;
    }(BaseMediator));
    game.GameMediator = GameMediator;
    __reflect(GameMediator.prototype, "game.GameMediator");
})(game || (game = {}));
//# sourceMappingURL=GameMediator.js.map