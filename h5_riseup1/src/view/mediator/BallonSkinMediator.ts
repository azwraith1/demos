// TypeScript file
module game
{
    export class BallonSkinMediator extends BaseMediator
    {
         public static NAME: string = "BallonSkinMediator";
		public type: string = "scene";
		public moveLock: boolean = false;
		public constructor(viewComponent: any = null) {
			super(BallonSkinMediator.NAME, viewComponent);
		}

		public listNotificationInterests(): Array<any> {
			return [
				SceneNotify.OPEN_BALLON_SKIN,
                SceneNotify.CLOSE_BALLON_SKIN
			];
		}

		public onRegister() {
			super.onRegister();
            this.facade.registerMediator(new StartMediator());
		}

		public viewComponent: BallonSkinPanel;
		public handleNotification(notification: puremvc.INotification): void {
			var data: any = notification.getBody();
			switch (notification.getName()) {
				case SceneNotify.OPEN_BALLON_SKIN: {
					if (this.viewComponent) {
						return;
					}
					this.showViewComponent();
					break;
				}
				case SceneNotify.CLOSE_BALLON_SKIN: {
					this.closeViewComponent(1);
					break;
				}
			}
		}


		public showViewComponent() {
			this.viewComponent = new BallonSkinPanel();
			PopUpManager.addSceneUp(this.viewComponent);
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