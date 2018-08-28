/**
 * long description for the file
 *
 * @summary gameover mediator
 * @author wangtao
 *
 * Created at     : 2018-07-31 17:16:48 
 * Last modified  : 2018-07-31 17:22:59
 */
module game
{
    export  class GameOverMediator extends BaseMediator
    {
         public static NAME: string = "GameOverMediator";
		public type: string = "scene";
		public moveLock: boolean = false;
		public constructor(viewComponent: any = null) {
			super(GameOverMediator.NAME, viewComponent);
		}

		public listNotificationInterests(): Array<any> {
			return [
				SceneNotify.OPEN_GAME_OVER,
				SceneNotify.CLOSE_GAME_OVER
			];
		}

		public onRegister() {
			super.onRegister();
            this.facade.registerMediator(new StartMediator());
            this.facade.registerMediator(new GameMediator());
		}

		public viewComponent: GameOverScene;
		public handleNotification(notification: puremvc.INotification): void {
			var data: any = notification.getBody();
			switch (notification.getName()) {
				case SceneNotify.OPEN_GAME_OVER: {
					if (this.viewComponent) {
						return;
					}
					this.showViewComponent();
					break;
				}
				case SceneNotify.CLOSE_GAME_OVER: {
					this.closeViewComponent(1);
					break;
				}
			}
		}


		public showViewComponent() {
			this.viewComponent = new GameOverScene();
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
