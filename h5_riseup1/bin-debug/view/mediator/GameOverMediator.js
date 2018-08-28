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
 * @summary gameover mediator
 * @author wangtao
 *
 * Created at     : 2018-07-31 17:16:48
 * Last modified  : 2018-07-31 17:22:59
 */
var game;
(function (game) {
    var GameOverMediator = (function (_super) {
        __extends(GameOverMediator, _super);
        function GameOverMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            var _this = _super.call(this, GameOverMediator.NAME, viewComponent) || this;
            _this.type = "scene";
            _this.moveLock = false;
            return _this;
        }
        GameOverMediator.prototype.listNotificationInterests = function () {
            return [
                SceneNotify.OPEN_GAME_OVER,
                SceneNotify.CLOSE_GAME_OVER
            ];
        };
        GameOverMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.facade.registerMediator(new game.StartMediator());
            this.facade.registerMediator(new game.GameMediator());
        };
        GameOverMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case SceneNotify.OPEN_GAME_OVER: {
                    if (this.viewComponent) {
                        return;
                    }
                    this.showViewComponent();
                    break;
                }
                case SceneNotify.CLOSE_GAME_OVER: {
                    this.closeViewComponent(1);
                    break;
                }
            }
        };
        GameOverMediator.prototype.showViewComponent = function () {
            this.viewComponent = new game.GameOverScene();
            PopUpManager.addSceneUp(this.viewComponent);
        };
        /**
         * 初始化面板ui
         */
        GameOverMediator.prototype.initUI = function () {
        };
        /**
         * 初始化面板数据
         */
        GameOverMediator.prototype.initData = function () {
        };
        GameOverMediator.NAME = "GameOverMediator";
        return GameOverMediator;
    }(BaseMediator));
    game.GameOverMediator = GameOverMediator;
    __reflect(GameOverMediator.prototype, "game.GameOverMediator");
})(game || (game = {}));
//# sourceMappingURL=GameOverMediator.js.map