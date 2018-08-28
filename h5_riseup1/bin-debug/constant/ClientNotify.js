var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var ClientNotify = (function () {
        function ClientNotify() {
        }
        ClientNotify.START_GAME_1 = "START_GAME_1";
        ClientNotify.ADD_SCORE = "ADD_SCORE";
        return ClientNotify;
    }());
    game.ClientNotify = ClientNotify;
    __reflect(ClientNotify.prototype, "game.ClientNotify");
})(game || (game = {}));
//# sourceMappingURL=ClientNotify.js.map