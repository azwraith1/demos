/**
 *
 * @author 
 *
 */
module game {
    export class UIUtils {
        public static removeFromParent(child: egret.DisplayObject) {
            if (child && child.parent) {
                child.parent.removeChild(child);
            }
        }

        public static resetAnchorPoint(p) {
            p.x -= p.anchorOffsetX;
            p.y -= p.anchorOffsetY;
            p.anchorOffsetX = 0;
            p.anchorOffsetY = 0;
        }

        public static updatePosistion(p: egret.DisplayObjectContainer) {
            if (p.width === GameConfig.WINSIZE_WIDTH) {
                p.width = GameConfig.curWidth();
            }
            if (p.height === GameConfig.WINSIZE_HEIGHT) {
                p.height = GameConfig.curHeight();
            }
            p.x *= GameConfig.WINSIZE_WIDTH_BILI;
            p.y *= GameConfig.WINSIZE_HEIGHT_BILI;

        }

        public static addButtonScaleEffects(p: egret.DisplayObjectContainer) {
            if (!p) return;
            if (egret.is(p, egret.getQualifiedClassName(eui.Button))) {
                p.addEventListener(egret.TouchEvent.TOUCH_BEGIN, UIUtils.onButtonTouchBegan, p);
            } else {
                // if (!egret.is(p.parent, egret.getQualifiedClassName(eui.Group))) {
                var len = p.numChildren;
                for (var i = 0; i < len; i++) {
                    var ch: egret.DisplayObjectContainer = <egret.DisplayObjectContainer>p.getChildAt(i);
                    UIUtils.addButtonScaleEffects(ch);
                }
                // }
            }
        }

        private static onButtonTouchBegan(e: egret.TouchEvent) {
            var btn = e.target;
            var scaleX = btn.scaleX;
            var scaleY = btn.scaleY;
            egret.Tween.get(btn).to({ scaleX: scaleX - 0.1, scaleY: scaleY - 0.1 }, 50).to({ scaleX: scaleX, scaleY: scaleY }, 50);
        }

        static removeButtonScaleEffects(p: egret.DisplayObjectContainer) {
            if (!p) return;

            if (egret.is(p, egret.getQualifiedClassName(eui.Button))) {
                p.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, UIUtils.onButtonTouchBegan, p);
            } else {
                var len = p.numChildren;
                for (var i = 0; i < len; i++) {
                    var ch: egret.DisplayObjectContainer = <egret.DisplayObjectContainer>p.getChildAt(i);
                    UIUtils.removeButtonScaleEffects(ch);
                }
            }
        }

        static setAnchorPot(p: egret.DisplayObject) {
            p.anchorOffsetX = p.width / 2;
            p.anchorOffsetY = p.height / 2;
            p.x += p.width / 2;
            p.y += p.height / 2;
        }

        static removeSelf(p: egret.DisplayObject) {
            UIUtils.removeFromParent(p);
        }

        static removeSelfByAmi(p: egret.DisplayObject, time: number) {
            return new Promise(function (resolve, reject) {
                egret.Tween.get(p).to({
                    alpha: 0
                }, time).call(function () {
                    UIUtils.removeFromParent(p);
                    resolve('success');
                }, p)
            })
        }
    }
}