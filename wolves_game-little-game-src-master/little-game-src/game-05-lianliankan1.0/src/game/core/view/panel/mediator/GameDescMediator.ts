/**
 * 分享界面
 * @author 
 */
module game {
	export class GameDescMediator extends BaseMediator {
		public static NAME: string = "GameDescMediator";
		public constructor() {
			super(GameDescMediator.NAME);
		}

		public listNotificationInterests(): Array<any> {
			return [
				PanelNotify.OPEN_DESC,
				PanelNotify.CLOSE_DESC
			];
		}

		public viewComponent: GameDescPanel;

		public showViewComponent() {
			this.viewComponent = new GameDescPanel();
			this.showUI(this.viewComponent, false, 0, 0, 7);
		}

		public onRegister() {
			super.onRegister();
		}


		public handleNotification(notification: puremvc.INotification): void {
			switch (notification.getName()) {
				case PanelNotify.OPEN_DESC:
					if (this.viewComponent) {
						return;
					}
					this.showViewComponent();
					break;
				case PanelNotify.CLOSE_DESC:
					this.closeViewComponent(1);
					break;
			}
		}
	}
}
