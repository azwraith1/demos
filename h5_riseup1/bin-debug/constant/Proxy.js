var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 代理常量
 * @author
 */
var Proxy = (function () {
    function Proxy() {
    }
    Proxy.NET_PROXY = 'netProxy';
    Proxy.WEIXIN_PROXY = 'weixinProxy';
    Proxy.PLAYER_PROXY = 'playerProxy';
    Proxy.AUDIO_PROXY = 'audioProxy';
    return Proxy;
}());
__reflect(Proxy.prototype, "Proxy");
//# sourceMappingURL=Proxy.js.map