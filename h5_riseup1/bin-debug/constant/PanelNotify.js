var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
* 弹窗消息
*/
var PanelNotify = (function () {
    function PanelNotify() {
    }
    //游戲結束
    PanelNotify.OPEN_GAME_OVER = "OPEN_GAME_OVER";
    //關閉游戲結束
    PanelNotify.CLOSE_GAME_OVER = "CLOSE_GAME_OVER";
    /**
     * 展现当前结果
     */
    PanelNotify.SHOW_RESULT = "SHOW_RESULT";
    PanelNotify.CLOSE_RESULT = "CLOSE_RESULT";
    PanelNotify.OPEN_DESC = "OPEN_DESC";
    PanelNotify.CLOSE_DESC = "CLOSE_DESC";
    PanelNotify.OPEN_LOOK = "OPEN_LOOK";
    PanelNotify.CLOSE_LOOK = "CLOSE_LOOK";
    //打开气球皮肤
    PanelNotify.OPEN_BALLON_SKIN = "PanelNotify_OPEN_BALLON_SKIN";
    //关闭气球皮肤
    PanelNotify.CLOSE_BALLON_SKIN = "PanelNotify_CLOSE_BALLON_SKIN";
    return PanelNotify;
}());
__reflect(PanelNotify.prototype, "PanelNotify");
//# sourceMappingURL=PanelNotify.js.map