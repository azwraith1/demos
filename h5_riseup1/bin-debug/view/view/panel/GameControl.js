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
    var GameControl = (function (_super) {
        __extends(GameControl, _super);
        function GameControl(gamesence) {
            var _this = _super.call(this) || this;
            _this.curScore = 0;
            _this.moveX = 0;
            _this.moveY = 0;
            _this.init(gamesence);
            return _this;
        }
        GameControl.prototype.init = function (gamesence) {
            this.stageH = egret.MainContext.instance.stage.stageHeight;
            this.stageW = egret.MainContext.instance.stage.stageWidth;
            // this.ballon = gamesence.ballon;
            //this.ballonBody = gamesence.ballonBody;
            this.setUI();
        };
        GameControl.prototype.setUI = function () {
            var stageW = this.stageW;
            var stageH = this.stageH;
            var scoreLabel = new egret.TextField();
            this.addChild(scoreLabel);
            scoreLabel.anchorOffsetX = scoreLabel.width / 2;
            scoreLabel.anchorOffsetY = scoreLabel.height / 2;
            scoreLabel.x = stageW * 0.05;
            scoreLabel.y = stageH * 0.05;
            scoreLabel.size = 30;
            scoreLabel.textAlign = "center";
            scoreLabel.text = "0";
            scoreLabel.textColor = 0xffffff;
            scoreLabel.fontFamily = "Arial";
            scoreLabel.italic = true;
            this.scoreLabel = scoreLabel;
            var levelLabel = new egret.TextField();
            this.addChild(levelLabel);
            levelLabel.anchorOffsetX = levelLabel.width / 2;
            levelLabel.anchorOffsetY = levelLabel.height / 2;
            levelLabel.x = stageW * 0.85;
            levelLabel.y = stageH * 0.05;
            levelLabel.size = 30;
            levelLabel.textAlign = "center";
            levelLabel.text = "0";
            levelLabel.textColor = 0xffffff;
            levelLabel.fontFamily = "Arial";
            levelLabel.italic = true;
            this.levelLabel = levelLabel;
            this.timer = new egret.Timer(1000, 0);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.touchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchStart, this);
            //this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
            //this.addEventListener(egret.TouchEvent.TOUCH_END,this.toucEnd,this);
        };
        GameControl.prototype.updataScore = function (score) {
            this.curScore = score;
            this.scoreLabel.text = "" + score;
        };
        GameControl.prototype.touchStart = function (evt) {
            this.moveX = evt.stageX / this.factor;
            this.moveY = evt.stageY / this.factor;
        };
        GameControl.prototype.touchMove = function (evt) {
            var ballonBody = this.ballonBody;
            egret.Tween.get(this.ballonBody).to({ x: this.moveX, y: this.moveY });
        };
        return GameControl;
    }(egret.Sprite));
    game.GameControl = GameControl;
    __reflect(GameControl.prototype, "game.GameControl");
})(game || (game = {}));
//# sourceMappingURL=GameControl.js.map