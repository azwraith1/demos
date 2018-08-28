/**
 * long description for the file
 *
 * @summary login mediator
 * @author wangtao
 *
 * Created at     : 2018-07-31 10:04:21 
 * Last modified  : 2018-07-31 10:07:34
 */
module game
{
    export  class LoginMediator extends BaseMediator
    {
         public static NAME: string = "LoginMediator";
		public type: string = "scene";
		public moveLock: boolean = false;
		public constructor(viewComponent: any = null) {
			super(LoginMediator.NAME, viewComponent);
		}

		public listNotificationInterests(): Array<any> {
			return [
				SceneNotify.OPEN_LOGIN,
				SceneNotify.CLOSE_LOGIN
			];
		}

		public onRegister() {
			super.onRegister();
            this.facade.registerMediator(new StartMediator());
            this.facade.registerMediator(new GameMediator());
		}

		public viewComponent: LoginScene;
		public handleNotification(notification: puremvc.INotification): void {
			var data: any = notification.getBody();
			switch (notification.getName()) {
				case SceneNotify.OPEN_LOGIN: {
					if (this.viewComponent) {
						return;
					}
					this.showViewComponent();
					break;
				}
				case SceneNotify.CLOSE_LOGIN: {
					this.closeViewComponent(1);
					break;
				}
			}
		}


		public showViewComponent() {
			this.viewComponent = new LoginScene();
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