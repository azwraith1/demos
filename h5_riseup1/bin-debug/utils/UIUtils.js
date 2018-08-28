/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wangtao
 *
 * Created at     : 2018-07-30 14:36:47
 * Last modified  : 2018-07-31 09:57:27
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var UIUtils = (function () {
        function UIUtils() {
        }
        UIUtils.removeFromParent = function (child) {
            if (child && child.parent) {
                child.parent.removeChild(child);
            }
        };
        UIUtils.addButtonScaleEffects = function (p) {
            if (!p)
                return;
            if (egret.is(p, egret.getQualifiedClassName(eui.Button))) {
                p.addEventListener(egret.TouchEvent.TOUCH_BEGIN, UIUtils.onButtonTouchBegan, p);
            }
            else {
                var len = p.numChildren;
                for (var i = 0; i < len; i++) {
                    var ch = p.getChildAt(i);
                    UIUtils.addButtonScaleEffects(ch);
                }
            }
        };
        UIUtils.onButtonTouchBegan = function (e) {
            var btn = e.target;
            egret.Tween.get(btn).to({ scaleX: 0.9, scaleY: 0.9 }, 50).to({ scaleX: 1, scaleY: 1 }, 50);
        };
        UIUtils.removeButtonScaleEffects = function (p) {
            if (!p)
                return;
            if (egret.is(p, egret.getQualifiedClassName(eui.Button))) {
                p.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, UIUtils.onButtonTouchBegan, p);
            }
            else {
                var len = p.numChildren;
                for (var i = 0; i < len; i++) {
                    var ch = p.getChildAt(i);
                    UIUtils.removeButtonScaleEffects(ch);
                }
            }
        };
        UIUtils.removeSelf = function (p) {
            UIUtils.removeFromParent(p);
        };
        return UIUtils;
    }());
    game.UIUtils = UIUtils;
    __reflect(UIUtils.prototype, "game.UIUtils");
})(game || (game = {}));
//# sourceMappingURL=UIUtils.js.map