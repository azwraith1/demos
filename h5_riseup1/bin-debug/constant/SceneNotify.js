var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
  * 场景消息
  */
var SceneNotify = (function () {
    function SceneNotify() {
    }
    //打开加载
    SceneNotify.OPEN_LOGIN = "SceneNotify_OPEN_LOGIN";
    //关闭加载
    SceneNotify.CLOSE_LOGIN = "SceneNotify_CLOSE_LOGIN";
    //打开主城场景
    SceneNotify.OPEN_START = "SceneNotify_OPEN_START";
    //关闭主城场景
    SceneNotify.CLOSE_START = "SceneNotify_CLOSE_START";
    //打开游戏场景
    SceneNotify.OPEN_GAME = "SceneNotify_OPEN_GAME";
    //关闭游戏场景
    SceneNotify.CLOSE_GAME = "SceneNotify_CLOSE_GAME";
    //打开游戏结算
    SceneNotify.OPEN_GAME_OVER = "SceneNotify_OPEN_GAME_OVER";
    //关闭游戏结算
    SceneNotify.CLOSE_GAME_OVER = "SceneNotify_CLOSE_GAME_OVER";
    //打开气球皮肤
    SceneNotify.OPEN_BALLON_SKIN = "SceneNotify_OPEN_BALLON_SKIN";
    //关闭气球皮肤
    SceneNotify.CLOSE_BALLON_SKIN = "SceneNotify_CLOSE_BALLON_SKIN";
    return SceneNotify;
}());
__reflect(SceneNotify.prototype, "SceneNotify");
//# sourceMappingURL=SceneNotify.js.map