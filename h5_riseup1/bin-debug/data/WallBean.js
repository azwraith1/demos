var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var game;
(function (game) {
    var WallBean = (function () {
        function WallBean() {
        }
        return WallBean;
    }());
    game.WallBean = WallBean;
    __reflect(WallBean.prototype, "game.WallBean");
})(game || (game = {}));
//# sourceMappingURL=WallBean.js.map