var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var PlayerBean = (function () {
        function PlayerBean() {
            this._level = 0;
            // public get Score()
            // {
            //     return this._score;
            // }
            // public set score(score:number)
            // {
            //     this._score = score;
            // }
            // public get BalloonImag()
            // {
            //     return this._balloonImag;
            // }
            // public set balloonImag(imagName: string)
            // {
            //     this._balloonImag = imagName;
            // }
            // public get highScore()
            // {
            //     return this._highScore;
            // }
            // public set highScore(highScore: number)
            // {
            //     this._highScore = highScore;
            // }
        }
        return PlayerBean;
    }());
    game.PlayerBean = PlayerBean;
    __reflect(PlayerBean.prototype, "game.PlayerBean");
})(game || (game = {}));
//# sourceMappingURL=PlayerBean.js.map