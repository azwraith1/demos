/**
 * 分享界面
 * @author 
 */
module game {
	export class GameResultMediator extends BaseMediator {
		public static NAME: string = "GameResultMediator";
		public constructor() {
			super(GameResultMediator.NAME);
		}

		public listNotificationInterests(): Array<any> {
			return [
				PanelNotify.SHOW_RESULT,
				PanelNotify.CLOSE_RESULT
			];
		}

		public viewComponent: GameResultPanel;
		public showViewComponent() {
			// if (this.viewComponent) {
			// 	return;
			// }
			// this.viewComponent = new GameResultPanel();
			// this.showUI(this.viewComponent, true, 0, 0, 7);
		}

		public onRegister() {
			super.onRegister();
		}


		public handleNotification(notification: puremvc.INotification): void {
			var data = notification.getBody();
			switch (notification.getName()) {
				case PanelNotify.SHOW_RESULT:
					if (this.viewComponent) {
						return;
					}
					this.viewComponent = new GameResultPanel(data);
					this.showUI(this.viewComponent, false, 0, 0, 7);
					break;
				case PanelNotify.CLOSE_RESULT:
					this.closeViewComponent(1);
					break;
			}
		}
	}
}
