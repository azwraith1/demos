var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Mediator 常量
 * Created by LMC on 2016/3/8 0008.
 */
var Mediator = (function () {
    function Mediator() {
    }
    Mediator.LOGIN_MEDIATOR = 'loginMediator';
    Mediator.APPLICATION_MEDIATOR = 'applicationMediator';
    Mediator.MAINSCENE_MEDIATOR = 'mainSceneMediator';
    Mediator.WEIXIN_MEDIATOR = 'weixinMediator';
    Mediator.TIPS_MEDIATOR = 'tipsMediator';
    Mediator.SHARE_MEDIATOR = 'shareMediator';
    Mediator.GAME_MEDIATOR = 'GameMediator';
    Mediator.GAME_OVER_MEDIATOR = 'GameOverMediator';
    Mediator.REWARD_GIFT_MEDIATOR = 'GameGiftMediator';
    Mediator.PLAYER_INFO_MEDIATOR = 'PlayerInfoMediator';
    Mediator.RANK_MEDIATOR = 'RankMediator';
    Mediator.FRIENDHELP_MEDIATOR = 'FriendHelpMediator';
    Mediator.FRIENDHELP_SUCCESS_MEDIATOR = 'FriendHelpSuccessMediator';
    Mediator.GAME_DESC_MEDIATOR = 'GameDescMedaitor';
    return Mediator;
}());
__reflect(Mediator.prototype, "Mediator");
//# sourceMappingURL=Mediator.js.map