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
 * @summary 气球皮肤
 * @author wangtao
 *
 * Created at     : 2018-08-01 09:36:15
 * Last modified  : 2018-08-24 19:08:13
 */
var game;
(function (game) {
    var BallonSkinPanel = (function (_super) {
        __extends(BallonSkinPanel, _super);
        function BallonSkinPanel() {
            var _this = _super.call(this) || this;
            _this.skinName = "BallonSkin";
            return _this;
        }
        BallonSkinPanel.prototype.init = function () {
            // this.skinList.dataProvider  = new eui.ArrayCollection([1,2,3,4,5]);
            // this.skinList.itemRenderer = BallSkinItem;
            this.test.source = "resource/assets/balloon_skin1.png";
            this.test.x = 250;
            this.itemGroup.addChild(this.test);
            this.test2.source = "resource/assets/balloon_skin2.png";
            this.test2.x = 250 + 480;
            this.itemGroup.addChild(this.test2);
            this.test3.source = "resource/assets/balloon_skin3.png";
            this.test3.x = 250 + 960;
            this.itemGroup.addChild(this.test3);
            this.test4.source = "resource/assets/balloon_skin4.png";
            this.test4.x = 250 + 1440;
            this.itemGroup.addChild(this.test4);
            this.test5.source = "resource/assets/balloon_skin5.png";
            this.test5.x = 250 + 1920;
            this.itemGroup.addChild(this.test5);
            this.skinScroller.addChild(this.itemGroup);
            // this.skinList.addChild(this.itemGroup);
            this.skinScroller.viewport = this.itemGroup;
            this.skinScroller.verticalScrollBar.autoVisibility = false;
            this.skinScroller.addEventListener(eui.UIEvent.CHANGE_END, this.fixPosition, this);
            // this.skinScroller.addChild(this.itemGroup);
            // this.skinList.dataProvider = this.data;
        };
        BallonSkinPanel.prototype.fixPosition = function () {
            var l = this.skinScroller.viewport.scrollH;
            console.log(l);
            if (l <= 150) {
                // egret.Tween.get(this.skinScroller.viewport.scrollH).to(this.skinScroller.viewport.scrollH - l,1500);
                this.skinScroller.viewport.scrollH += -l;
            }
            else if (l > 150 && l <= 840) {
                //  egret.Tween.get(this.skinScroller.viewport.scrollH).to(this.skinScroller.viewport.scrollH +461- l,1500);
                this.skinScroller.viewport.scrollH += (461 - l);
            }
            else if (l > 840 && l <= 1300) {
                //  egret.Tween.get(this.skinScroller.viewport.scrollH).to(this.skinScroller.viewport.scrollH + 965 - l,1500);
                this.skinScroller.viewport.scrollH += (965 - l);
            }
            else if (l > 1300 && l <= 1650) {
                // egret.Tween.get(this.skinScroller.viewport.scrollH).to(this.skinScroller.viewport.scrollH + 1440 - l,1500);
                this.skinScroller.viewport.scrollH += (1440 - l);
            }
            else if (l > 1650) {
                // egret.Tween.get(this.skinScroller.viewport.scrollH).to(this.skinScroller.viewport.scrollH + 1945 - l,1500);
                this.skinScroller.viewport.scrollH += (1945 - l);
            }
        };
        BallonSkinPanel.prototype.onTouchTap = function (e) {
            switch (e.target) {
                case this.selectBtn:
                    this.chooseSkin(e);
                    game.AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_BALLON_SKIN);
                    game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_START);
                    break;
            }
        };
        BallonSkinPanel.prototype.chooseSkin = function (evt) {
            var balloonImag = new game.PlayerBean();
            var l = this.skinScroller.viewport.scrollH;
            if (l <= 150) {
                balloonImag._balloonImag = "resource/assets/balloon_skin1.png";
            }
            else if (l > 150 && l <= 840) {
                balloonImag._balloonImag = "resource/assets/balloon_skin2.png";
            }
            else if (l > 840 && l <= 1300) {
                balloonImag._balloonImag = "resource/assets/balloon_skin3.png";
            }
            else if (l > 1300 && l <= 1650) {
                balloonImag._balloonImag = "resource/assets/balloon_skin4.png";
            }
            else if (l > 1650) {
                balloonImag._balloonImag = "resource/assets/balloon_skin5.png";
            }
        };
        return BallonSkinPanel;
    }(game.BaseComponent));
    game.BallonSkinPanel = BallonSkinPanel;
    __reflect(BallonSkinPanel.prototype, "game.BallonSkinPanel");
})(game || (game = {}));
//# sourceMappingURL=BallonSkinPanel.js.map