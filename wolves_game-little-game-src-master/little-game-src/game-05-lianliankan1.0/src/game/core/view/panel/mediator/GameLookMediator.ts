/**
 * 分享界面
 * @author 
 */
module game {
	export class GameLookMediator extends BaseMediator {
		public static NAME: string = "GameLookMediator";
		public constructor() {
			super(GameLookMediator.NAME);
		}

		public listNotificationInterests(): Array<any> {
			return [
				PanelNotify.OPEN_LOOK,
				PanelNotify.CLOSE_LOOK
			];
		}

		public viewComponent: GameLookPanel;

		public showViewComponent() {
			this.viewComponent = new GameLookPanel();
			this.showUI(this.viewComponent, false, 0, 0, 7);
		}

		public onRegister() {
			super.onRegister();
		}


		public handleNotification(notification: puremvc.INotification): void {
			switch (notification.getName()) {
				case PanelNotify.OPEN_LOOK:
					if (this.viewComponent) {
						return;
					}
					this.showViewComponent();
					break;
				case PanelNotify.CLOSE_LOOK:
					this.closeViewComponent(1);
					break;
			}
		}
	}
}
