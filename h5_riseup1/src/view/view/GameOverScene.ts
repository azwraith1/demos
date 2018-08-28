// TypeScript file
module game
{
    export class GameOverScene extends BaseComponent
    {
        private backBtn: eui.Button;
        private highScore: eui.Label;
        private restartLabel: eui.Button;
        private skinBtn: eui.Button;
        private imag: eui.Image;
        private score: eui.Label;

        public constructor()
        {
            super();
            this.skinName = "GameOverSkin";
        }

        private init()
        {
            let score = new PlayerBean();
            this.score.text = score._highScore+ "";
            this.imag.source = score._balloonImag;
        }

        protected onTouchTap(e:egret.TouchEvent)
        {
            switch(e.target)
            {
                case this.skinBtn:
                AppFacade.getInstance().sendNotification(SceneNotify.OPEN_BALLON_SKIN);
                AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_GAME_OVER);
                break;
                case this.restartLabel:
                AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_GAME_OVER);
                AppFacade.getInstance().sendNotification(SceneNotify.OPEN_GAME);
                break;

            }
        }
    }
}