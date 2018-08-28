var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * long description for the file
 *
 * @summary 关卡信息
 * @author wangtao
 *
 * Created at     : 2018-07-31 10:46:41
 * Last modified  : 2018-08-01 14:22:22
 */
var game;
(function (game) {
    var LevelBean = (function () {
        function LevelBean() {
        }
        return LevelBean;
    }());
    game.LevelBean = LevelBean;
    __reflect(LevelBean.prototype, "game.LevelBean");
})(game || (game = {}));
//# sourceMappingURL=LevelBean.js.map