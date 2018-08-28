var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var Constant = (function () {
        function Constant() {
        }
        Constant.WINSIZE_WIDTH = 640;
        Constant.WINSIZE_HEIGHT = 1024;
        Constant.PASS_LEVEL = 8;
        Constant.GAME_NAME = '眼神不好,坚持不了3步哦';
        Constant.SERVER_PATH = "http://www.huhugame.com/index.php?id=100004&m=api&c=huhugame&a=";
        Constant.DEBUG_MODAL = true;
        /**
         * 微信调试模式
         */
        Constant.WEIXIN_DEBUG = false;
        /**
         * 关注链接
         * @type {string}
         */
        Constant.CARE_URL = "http://mp.weixin.qq.com/s?__biz=MzIzMzEzNTY5MA==&mid=504974636&idx=1&sn=95e01113efed89ab29d93566d55a8d85&scene=1&srcid=0416DNjhHqtgJLQCtvmKm9ck#wechat_redirect";
        return Constant;
    }());
    game.Constant = Constant;
    __reflect(Constant.prototype, "game.Constant");
})(game || (game = {}));
//# sourceMappingURL=Constant.js.map