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
    var GameOverScene = (function (_super) {
        __extends(GameOverScene, _super);
        function GameOverScene() {
            var _this = _super.call(this) || this;
            _this.skinName = "GameOverSkin";
            return _this;
        }
        GameOverScene.prototype.init = function () {
            var score = new game.PlayerBean();
            this.score.text = score._highScore + "";
            this.imag.source = score._balloonImag;
        };
        GameOverScene.prototype.onTouchTap = function (e) {
            switch (e.target) {
                case this.skinBtn:
                    game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_BALLON_SKIN);
                    game.AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_GAME_OVER);
                    break;
                case this.restartLabel:
                    game.AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_GAME_OVER);
                    game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_GAME);
                    break;
            }
        };
        return GameOverScene;
    }(game.BaseComponent));
    game.GameOverScene = GameOverScene;
    __reflect(GameOverScene.prototype, "game.GameOverScene");
})(game || (game = {}));
//# sourceMappingURL=GameOverScene.js.map