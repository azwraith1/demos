/**
 * long description for the file
 *
 * @summary 气球皮肤
 * @author wangtao
 *
 * Created at     : 2018-08-01 09:36:15 
 * Last modified  : 2018-08-24 19:08:13
 */
module game {
    export class BallonSkinPanel extends BaseComponent {
        private selectBtn: eui.Button;

        private skinScroller: eui.Scroller;
        private skinList: eui.List;
        private itemGroup: eui.Group;
        private data: eui.ArrayCollection;
        private test: eui.Image;
        private test2: eui.Image;
        private test3: eui.Image;
        private test4: eui.Image;
        private test5: eui.Image;

        public constructor() {
            super();
            this.skinName = "BallonSkin";
        }

        private init() {
            // this.skinList.dataProvider  = new eui.ArrayCollection([1,2,3,4,5]);
            // this.skinList.itemRenderer = BallSkinItem;
            this.test.source = "resource/assets/balloon_skin1.png";
            this.test.x = 250;
            this.itemGroup.addChild(this.test);

            this.test2.source = "resource/assets/balloon_skin2.png";
            this.test2.x = 250 + 480;
            this.itemGroup.addChild(this.test2);

            this.test3.source = "resource/assets/balloon_skin3.png";
            this.test3.x = 250 + 960;
            this.itemGroup.addChild(this.test3);

            this.test4.source = "resource/assets/balloon_skin4.png";
            this.test4.x = 250 + 1440;
            this.itemGroup.addChild(this.test4);

            this.test5.source = "resource/assets/balloon_skin5.png";
            this.test5.x = 250 + 1920;
            this.itemGroup.addChild(this.test5);
            this.skinScroller.addChild(this.itemGroup);
            // this.skinList.addChild(this.itemGroup);

            this.skinScroller.viewport = this.itemGroup;
            this.skinScroller.verticalScrollBar.autoVisibility = false;
            this.skinScroller.addEventListener(eui.UIEvent.CHANGE_END, this.fixPosition, this)
            // this.skinScroller.addChild(this.itemGroup);
            // this.skinList.dataProvider = this.data;
        }
        private fixPosition() {
            let l = this.skinScroller.viewport.scrollH;
            console.log(l);
            if (l <= 150) {
                // egret.Tween.get(this.skinScroller.viewport.scrollH).to(this.skinScroller.viewport.scrollH - l,1500);
                 this.skinScroller.viewport.scrollH += -l;
            } else if (l > 150 && l <= 840) {
                //  egret.Tween.get(this.skinScroller.viewport.scrollH).to(this.skinScroller.viewport.scrollH +461- l,1500);
                 this.skinScroller.viewport.scrollH += (461 - l);
            } else if (l > 840 && l <= 1300) {
                //  egret.Tween.get(this.skinScroller.viewport.scrollH).to(this.skinScroller.viewport.scrollH + 965 - l,1500);
                 this.skinScroller.viewport.scrollH += (965 - l);
            } else if (l > 1300 && l <= 1650) {
                // egret.Tween.get(this.skinScroller.viewport.scrollH).to(this.skinScroller.viewport.scrollH + 1440 - l,1500);
                 this.skinScroller.viewport.scrollH += (1440 - l);
            } else if (l > 1650) {
                // egret.Tween.get(this.skinScroller.viewport.scrollH).to(this.skinScroller.viewport.scrollH + 1945 - l,1500);
                 this.skinScroller.viewport.scrollH += (1945 - l);
            }
        }

        protected onTouchTap(e: egret.TouchEvent) {
            switch (e.target) {
                case this.selectBtn:
                    this.chooseSkin(e);
                    AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_BALLON_SKIN);
                    AppFacade.getInstance().sendNotification(SceneNotify.OPEN_START);
                    break;
            }
        }
        private chooseSkin(evt) {
            let balloonImag = new PlayerBean();
            let l = this.skinScroller.viewport.scrollH;
             if (l <= 150) {
                balloonImag._balloonImag = "resource/assets/balloon_skin1.png";
                balloonImag._ballNum = 1;
                Global.playerProxy.setPlayerData(balloonImag);
            } else if (l > 150 && l <= 840) {
                balloonImag._balloonImag = "resource/assets/balloon_skin2.png";
                balloonImag._ballNum =2;
                Global.playerProxy.setPlayerData(balloonImag);
            } else if (l > 840 && l <= 1300) {
                balloonImag._balloonImag = "resource/assets/balloon_skin3.png";
                balloonImag._ballNum = 3;
                Global.playerProxy.setPlayerData(balloonImag);
            } else if (l > 1300 && l <= 1650){
                balloonImag._balloonImag = "resource/assets/balloon_skin4.png";
                balloonImag._ballNum = 4;
                Global.playerProxy.setPlayerData(balloonImag);
            } else if (l > 1650) {
                balloonImag._balloonImag = "resource/assets/balloon_skin5.png";
                balloonImag._ballNum = 5;
                Global.playerProxy.setPlayerData(balloonImag);
            }
        }

    }
}