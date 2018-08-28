// TypeScript file
module game
{
    export  class GameControl extends egret.Sprite
    {
        private stageW: number;
        private stageH: number;
        private scoreLabel: egret.TextField;
        private levelLabel: egret.TextField;
        private factor: 50;
        private curScore:number = 0;
        private moveX: number = 0;
        private moveY: number = 0;
        private timer: egret.Timer;

        // private ballon: BallonItem;
        private ballonBody: p2.Body;

        public constructor(gamesence: GameScene)
        {
            super();
            this.init(gamesence);
        }

        private init(gamesence: GameScene)
        {
            this.stageH = egret.MainContext.instance.stage.stageHeight;
            this.stageW = egret.MainContext.instance.stage.stageWidth;
            // this.ballon = gamesence.ballon;
            //this.ballonBody = gamesence.ballonBody;
            this.setUI();
        }

        private setUI()
        {
            let stageW = this.stageW;
            let stageH = this.stageH;

            let scoreLabel = new egret.TextField();
            this.addChild(scoreLabel);
            scoreLabel.anchorOffsetX = scoreLabel.width/2;
            scoreLabel.anchorOffsetY = scoreLabel.height/2;
            scoreLabel.x = stageW*0.05;
            scoreLabel.y = stageH*0.05;
            scoreLabel.size = 30;
            scoreLabel.textAlign = "center";
            scoreLabel.text = "0";
            scoreLabel.textColor = 0xffffff;
            scoreLabel.fontFamily = "Arial";
            scoreLabel.italic = true;
            this.scoreLabel = scoreLabel;

            let levelLabel = new egret.TextField();
            this.addChild(levelLabel);
            levelLabel.anchorOffsetX = levelLabel.width/2;
            levelLabel.anchorOffsetY = levelLabel.height/2;
            levelLabel.x = stageW*0.85;
            levelLabel.y = stageH*0.05;
            levelLabel.size = 30;
            levelLabel.textAlign = "center";
            levelLabel.text = "0";
            levelLabel.textColor = 0xffffff;
            levelLabel.fontFamily = "Arial";
            levelLabel.italic = true;
            this.levelLabel = levelLabel;

            this.timer = new egret.Timer(1000,0);
            this.timer.addEventListener(egret.TimerEvent.TIMER,this.touchMove,this)

            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchStart,this);
            //this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
            //this.addEventListener(egret.TouchEvent.TOUCH_END,this.toucEnd,this);
        }

        private updataScore(score: number)
        {
            this.curScore = score;
            this.scoreLabel.text = "" + score;
        }

        private touchStart(evt: egret.TouchEvent)
        {
            this.moveX = evt.stageX/this.factor;
            this.moveY = evt.stageY/this.factor;
        }

        private touchMove(evt: TouchEvent)
        {
            let ballonBody = this.ballonBody;
            egret.Tween.get(this.ballonBody).to({x: this.moveX,y: this.moveY});
            
        }




    }
}