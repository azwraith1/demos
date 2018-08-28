var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
  * 系统消息
  */
var SysNotify = (function () {
    function SysNotify() {
    }
    //服务器连接成功
    SysNotify.CHOOSE_ANSWER = "CHOOSE_ANSWER";
    //服务器返回数据
    SysNotify.SERVER_BACK_DATA = "SERVER_BACK_DATA";
    SysNotify.PLAYER_JOIN = "PLAYER_JOIN";
    SysNotify.PLAYER_LEAVE = "PLAYER_LEAVE";
    /** 准备OK */
    SysNotify.READY = "SysNotify_READY";
    // public static SEND_CHOOSE: string = "SysNotify_SEND_CHOOSE";
    SysNotify.START_GAME = "SysNotify_START_GAME";
    SysNotify.NEXT_GAME = "SysNotify_NEXT_GAME";
    SysNotify.YOU_CHOOSE = "SysNotify_YOU_CHOOSE";
    SysNotify.PLAYER_MOVE_CALL = "SysNotify_PLAYER_MOVE_CALL";
    SysNotify.SHOW_RESULT = "SysNotify_SHOW_RESULT";
    SysNotify.YOU_WIN = "SysNotify_YOU_WIN";
    SysNotify.OTHER_LESS = "SysNotify_OTHER_LESS";
    return SysNotify;
}());
__reflect(SysNotify.prototype, "SysNotify");
//# sourceMappingURL=SysNotify.js.map