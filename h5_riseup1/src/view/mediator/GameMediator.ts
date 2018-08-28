/**
 * long description for the file
 * Game mediator
 * @author wangtao
 *
 * Created at     : 2018-07-31 10:08:03 
 * Last modified  : 2018-07-31 18:00:11
 */
module game
{
    export class GameMediator extends BaseMediator
    {
         public static NAME: string = "GameMediator";
		public type: string = "scene";
		public moveLock: boolean = false;
		public constructor(viewComponent: any = null) {
			super(GameMediator.NAME, viewComponent);
		}

		public listNotificationInterests(): Array<any> {
			return [
				SceneNotify.OPEN_GAME,
				SceneNotify.CLOSE_GAME
			];
		}

		public onRegister() {
			super.onRegister();
            this.facade.registerMediator(new StartMediator());
            this.facade.registerMediator(new LoginMediator());
			this.facade.registerMediator(new GameOverMediator());
		}

		public viewComponent: GameScene;
		public handleNotification(notification: puremvc.INotification): void {
			var data: any = notification.getBody();
			switch (notification.getName()) {
				case SceneNotify.OPEN_GAME: {
					if (this.viewComponent) {
						return;
					}
					this.showViewComponent();
					break;
				}
				case SceneNotify.CLOSE_GAME: {
					this.closeViewComponent(1);
					break;
				}
			}
		}


		public showViewComponent() {
			this.viewComponent = new GameScene();
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
