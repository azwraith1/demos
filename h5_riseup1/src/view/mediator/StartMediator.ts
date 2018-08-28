/**
 * long description for the file
 * 游戏开始mediator
 * @author wangtao
 *
 * Created at     : 2018-07-31 09:50:34 
 * Last modified  : 2018-08-01 10:00:52
 */
module game
{
    export class StartMediator extends BaseMediator
    {
        public static NAME: string = "StartMediator";
		public type: string = "scene";
		public moveLock: boolean = false;
		public constructor(viewComponent: any = null) {
			super(StartMediator.NAME, viewComponent);
		}

		public listNotificationInterests(): Array<any> {
			return [
				SceneNotify.OPEN_START,
				SceneNotify.CLOSE_START
			];
		}

		public onRegister() {
			super.onRegister();
            this.facade.registerMediator(new GameMediator());
            this.facade.registerMediator(new LoginMediator());
			this.facade.registerMediator(new GameOverMediator());
			this.facade.registerMediator(new BallonSkinMediator());
		}

		public viewComponent: StartScene;
		public handleNotification(notification: puremvc.INotification): void {
			var data: any = notification.getBody();
			switch (notification.getName()) {
				case SceneNotify.OPEN_START: {
					if (this.viewComponent) {
						return;
					}
					this.showViewComponent();
					break;
				}
				case SceneNotify.CLOSE_START: {
					this.closeViewComponent(1);
					break;
				}
			}
		}


		public showViewComponent() {
			this.viewComponent = new StartScene();
			var sceneLayer = GameLayerManager.gameLayer().sceneLayer;
			sceneLayer.addChild(this.viewComponent);
		}


        /**
         * 初始化面板ui
         */
		public initUI(): void {

		}

        /**
         * 初始化面板数据
         */
		public initData(): void {

		}

    }
}
