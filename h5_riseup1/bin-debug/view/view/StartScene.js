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
 * @summary 游戏开始界面
 * @author wangtao
 *
 * Created at     : 2018-07-31 09:43:29
 * Last modified  : 2018-08-24 19:08:01
 */
var game;
(function (game) {
    var StartScene = (function (_super) {
        __extends(StartScene, _super);
        function StartScene() {
            var _this = _super.call(this) || this;
            _this.skinName = "StartSceneSkin";
            return _this;
        }
        StartScene.prototype.init = function () {
            var balloonImag = new game.PlayerBean();
            this.ballonImag.source = balloonImag._balloonImag;
            var skeletonData = RES.getRes("qiqiu00_ske_json");
            var textureData = RES.getRes("qiqiu00_tex_json");
            var texture = RES.getRes("qiqiu00_tex_png");
            var factory = new dragonBones.EgretFactory();
            factory.parseDragonBonesData(skeletonData);
            factory.parseTextureAtlasData(textureData, texture);
            var armatureDisplay = factory.buildArmatureDisplay("armatureName");
            armatureDisplay.animation.play("aniIdle", 0);
            armatureDisplay.x = 367;
            armatureDisplay.y = 564;
            this.ItemGroup.addChild(armatureDisplay);
            // this.ballonImag.source = _imagName;
        };
        StartScene.prototype.onTouchTap = function (e) {
            switch (e.target) {
                case this.startBtn:
                    game.AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_START);
                    game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_GAME);
                    break;
                case this.infoBtn:
                    break;
                case this.rankBtn:
                    this.getRank();
                    break;
                case this.skinBtn:
                    this.chooseSkin();
                    break;
                case this.starBtn:
                    break;
            }
        };
        StartScene.prototype.getRank = function () {
        };
        StartScene.prototype.chooseSkin = function () {
            game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_BALLON_SKIN);
        };
        return StartScene;
    }(game.BaseComponent));
    game.StartScene = StartScene;
    __reflect(StartScene.prototype, "game.StartScene");
})(game || (game = {}));
//# sourceMappingURL=StartScene.js.map