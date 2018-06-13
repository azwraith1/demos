module game {
    export class LogoScene extends BaseComponent {
        private tipLabel: eui.Label;
        public constructor() {
            super();
            this.skinName = new LogoSceneSkin();
        }

        public createChildren() {
            super.createChildren();
            this.resGroup = "afterload";
            this.beganLoadResGroup()
        }

        private startAni() {
            var lockTime = 100;
            egret.Tween.get(this, { loop: true }).to({
                alpha: 0.4
            }, 300).to({
                alpha: 1
            }, 300);
        }

        /**
              * 开始加载资源
              */
        private beganLoadResGroup() {
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.loadGroup(this.resGroup);
        }

        private onResourceLoadComplete(e: RES.ResourceEvent): void {
            if (e.groupName == this.resGroup) {
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadComplete, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                this.onResourceLoadOver();
            }
        }

        /**
         * preload资源组加载进度
         * loading process of preload resource
         */
        private onResourceProgress(e: RES.ResourceEvent): void {
            if (e.groupName == this.resGroup) {
                var rate = Math.floor(e.itemsLoaded / e.itemsTotal * 100);
                // this.progressBar.scaleX = rate / 100;
                // this.carImage.x = this.progressBar.width * (rate / 100);
                // this.textLabel.text = "您要乘坐的景区专用车正努力赶来..." + rate + "%";
            }
        }

        public async onResourceLoadOver() {
            //获取玩家信息
            if (!GameConfig.DEBUG_MODEL) {
                Global.tikiHttpProxy.sendTikiHttpRequest("getRoomInfo", null, (resp) => {
                    if (resp && resp.code >= 0 && resp.roomid) {
                        // 没有连接coket就去连接
                        if (!Global.tikiSocketProxy.isConnect()) {
                            Global.tikiSocketProxy.connectToServer(resp.sio);
                        }
                        Global.gameProxy.setRoomData(resp);
                        if (resp.to) {
                            Global.otherPlayerProxy.setPlayerData(resp.to);
                        }
                        Global.gameProxy.startByPlayer();
                        AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_LOADING);
                        AppFacade.getInstance().sendNotification(SceneNotify.OPEN_HOME);
                    }
                });
                return;
            }
            Global.tikiSocketProxy.connectToServer(null);
            var playerData = GameConfig.PLAYERS[Global.playerProxy.playerId];
            Global.playerProxy.setPlayerData(playerData);
            if (GameConfig.DEBUG_MODEL) {
                var otherPlayerData = GameConfig.PLAYERS[Global.otherPlayerProxy.playerId];
                Global.otherPlayerProxy.setPlayerData(otherPlayerData);
            }
            Global.gameProxy.startByPlayer();
            AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_LOADING);
            AppFacade.getInstance().sendNotification(SceneNotify.OPEN_HOME);
            // AppFacade.getInstance().sendNotification(SceneNotify.OPEN_GAME);
        }
    }
}
