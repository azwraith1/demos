/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  */
module game {
	export class GameMediator extends BaseMediator {
		public static NAME: string = "GameMediator";
		public type: string = "scene";
		public moveLock: boolean = false;
		public constructor(viewComponent: any = null) {
			super(GameMediator.NAME, viewComponent);
		}

		public listNotificationInterests(): Array<any> {
			return [
				SceneNotify.OPEN_GAME,
				SceneNotify.CLOSE_GAME,
				SysNotify.SHOW_RESULT,
				SysNotify.YOU_CHOOSE,
				SysNotify.OTHER_LESS
			];
		}

		public onRegister() {
			super.onRegister();

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

				case SysNotify.SHOW_RESULT:
					if (this.viewComponent) {
						this.viewComponent.gameOver();
						// AppFacade.getInstance().sendNotification(PanelNotify.);
						// AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_GAME);
						AppFacade.getInstance().sendNotification(PanelNotify.SHOW_RESULT, { otherData: data, otherPercent: this.viewComponent.getOtherPercent(), myPercent: this.viewComponent.getMyPercent() });
						// this.viewComponent.showGameResultCall();
					}
					break;
				case SysNotify.OTHER_LESS:
					if (this.viewComponent) {
						this.viewComponent.showPercent(data.lessNumber, false);
					}
					break;
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