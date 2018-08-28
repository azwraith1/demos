var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var BallonBean = (function () {
        function BallonBean() {
        }
        return BallonBean;
    }());
    game.BallonBean = BallonBean;
    __reflect(BallonBean.prototype, "game.BallonBean");
})(game || (game = {}));
//# sourceMappingURL=BallonBean.js.map