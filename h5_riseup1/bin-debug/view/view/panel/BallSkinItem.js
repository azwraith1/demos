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
 * @summary 气球皮肤item
 * @author wangtao
 *
 * Created at     : 2018-08-01 10:03:34
 * Last modified  : 2018-08-23 15:02:22
 */
var game;
(function (game) {
    var BallSkinItem = (function (_super) {
        __extends(BallSkinItem, _super);
        function BallSkinItem(data) {
            var _this = _super.call(this) || this;
            _this.skinName = "BallSkinItemSkin";
            _this.init(data);
            return _this;
        }
        ;
        BallSkinItem.prototype.init = function (data) {
            this.ballSkinImag.source = "resource/assets/balloon_skin" + data + ".png";
        };
        return BallSkinItem;
    }(eui.Component));
    game.BallSkinItem = BallSkinItem;
    __reflect(BallSkinItem.prototype, "game.BallSkinItem");
})(game || (game = {}));
//# sourceMappingURL=BallSkinItem.js.map