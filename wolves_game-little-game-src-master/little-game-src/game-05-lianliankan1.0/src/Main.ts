
module game {
    export class Main extends eui.UILayer {
        /**
         * 加载进度界面
         * loading process interface
         */
        private loadingView: LoadingUI;

        private logoScene: LogoScene;
        private version: RES.VersionController;
        private version_num: string = "2.0";
        private use_oss: boolean = false;
        private oss_path: string = "http://down.008sx.com/";
        protected createChildren(): void {
            super.createChildren();
            var self = this;
            //资源管理框架
            RES.web.Html5VersionController.prototype.getVirtualUrl = function (url) {
                if (self.use_oss) {
                    return self.oss_path + url + "?v=" + self.version_num;
                }
                url += "?v=" + self.version_num;
                return url;
            }
            this.version = new RES.VersionController();
            RES.registerVersionController(this.version);
            this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
            // if (!egret.Capabilities.isMobile) {
            // this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
            //     this.stage.orientation = 'auto';
            // } else {
            //     if (this.stage.stageHeight / this.stage.stageWidth < 1000 / 640) {
            //         this.stage.setContentSize(640, 1000);
            //         this.stage.scaleMode = egret.StageScaleMode.FIXED_HEIGHT;
            //     }
            // }

            var assetAdapter = new AssetAdapter();
            this.stage.registerImplementation("eui.IAssetAdapter", assetAdapter);
            this.stage.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
            //设置加载进度界面
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);

            this.addChild(GameLayerManager.gameLayer());
            game.AppFacade.getInstance().startUp(GameLayerManager.gameLayer());

            RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            RES.loadConfig("resource/default.res.json", "resource/");
        }

        /**
         * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
         * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
         */
        private onConfigComplete(e: RES.ResourceEvent): void {
            RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
            var theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);

            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.loadGroup("preload");
        }

        private isThemeLoadEnd: boolean = false;

        /**
         * 主题文件加载完成,开始预加载
         * Loading of theme configuration file is complete, start to pre-load the
         */
        private onThemeLoadComplete(): void {
            this.isThemeLoadEnd = true;
            this.createScene();
        }

        private isResourceLoadEnd: boolean = false;

        /**
         * preload资源组加载完成
         * preload resource group is loaded
         */
        private onResourceLoadComplete(event: RES.ResourceEvent): void {
            if (event.groupName == "preload") {
                this.stage.removeChild(this.loadingView);
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
                RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
                this.isResourceLoadEnd = true;
                this.createScene();
            }
        }

        private createScene() {
            if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
                this.startCreateScene();
            }
        }

        /**
         * 资源组加载出错
         * Resource group loading failed
         */
        private onResourceLoadError(event: RES.ResourceEvent): void {
            console.warn("Group:" + event.groupName + " has failed to load");
            this.onResourceLoadComplete(event);
        }

        /**
         * preload资源组加载进度
         * loading process of preload resource
         */
        private onResourceProgress(event: RES.ResourceEvent): void {
            if (event.groupName == "preload") {
                this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
            }
        }

        /**
         * 创建场景界面
         * Create scene interface
        */
        protected startCreateScene(): void {
            GameConfig.WINSIZE_WIDTH = this.stage.stageWidth;
            GameConfig.WINSIZE_HEIGHT = this.stage.stageHeight;
            var windowUrl = window.location.href;
            // if (windowUrl.indexOf("game") > 0) {
            GameConfig.DEBUG_MODEL = true;
            // }
            game.AppFacade.getInstance().sendNotification(SceneNotify.OPEN_LOADING);
            if (!GameConfig.DEBUG_MODEL) {
                Global.tikiHttpProxy.sendTikiHttpRequest("showGameView", null, null);
            }
        }
    }
}