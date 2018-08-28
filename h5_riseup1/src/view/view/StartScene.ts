/**
 * long description for the file
 *
 * @summary 游戏开始界面
 * @author wangtao
 *
 * Created at     : 2018-07-31 09:43:29 
 * Last modified  : 2018-08-24 19:08:01
 */
module game
{
    export class StartScene extends BaseComponent
    {
        private bgImag: eui.Image;
        private startBtn: eui.Button;
        private infoBtn: eui.Button;
        private rankBtn: eui.Button;
        private skinBtn: eui.Button;
        private starBtn: eui.Button;
        private ballonImag: eui.Image;
        private championImag: eui.Image;
        private scoreLabel: eui.Label;
        private levelLabel: eui.Label;
        private overLabel: eui.Label;
        private lastScoreLabel: eui.Label;
        private ItemGroup: eui.Group;

        public constructor()
        {
            super();
            this.skinName = "StartSceneSkin";
        }

        private init()
        {
            let playData = Global.playerProxy.getplayerBean();
            this.ballonImag.source = playData._balloonImag;
            let ballNun = playData._ballNum;
            var skeletonData = RES.getRes("qiqiu0"+ballNun+"_ske_json");
            var textureData = RES.getRes("qiqiu0"+ballNun+"_tex_json");
            var texture = RES.getRes("qiqiu0"+ballNun+"_tex_png");
            var factory = new dragonBones.EgretFactory();
            factory.parseDragonBonesData(skeletonData);
            factory.parseTextureAtlasData(textureData, texture);
            let armatureDisplay = factory.buildArmatureDisplay("armatureName");
            armatureDisplay.animation.play("aniIdle", 0);
            armatureDisplay.x = 367;
            armatureDisplay.y = 564;
            this.ItemGroup.addChild(armatureDisplay);
            
            // this.ballonImag.source = _imagName;
        }

        protected onTouchTap(e:egret.TouchEvent)
        {
            switch(e.target)
            {
                case this.startBtn:
                AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_START);
                AppFacade.getInstance().sendNotification(SceneNotify.OPEN_GAME);
                break;
                case this.infoBtn:
                break;
                case this.rankBtn:
                this.getRank();
                break;
                case this.skinBtn:
                this.chooseSkin();
                break;
                case this.starBtn:
                break;
            }
        }

        private getRank()
        {

        }

        private chooseSkin()
        {
            AppFacade.getInstance().sendNotification(SceneNotify.OPEN_BALLON_SKIN);
        }
    }
}

