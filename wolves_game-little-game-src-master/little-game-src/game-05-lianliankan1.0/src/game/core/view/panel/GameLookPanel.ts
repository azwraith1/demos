module game {
	export class GameLookPanel extends BaseComponent {
		private touchRect: eui.Rect;
		private lookImage: eui.Image;
		public constructor() {
			super();
			this.skinName = new GameLookPanelSkin();
		}

		public createChildren() {
			super.createChildren();
			var type = Global.gameProxy.currentType;
			this.lookImage.source = RES.getRes("tollogate" + type + "_jpg");
			this.touchRect.addEventListener(egret.TouchEvent.TOUCH_END, this.closeBtnTouchEnded, this);
		}

		public closeBtnTouchEnded() {
			AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_LOOK);
		}
	}
}
