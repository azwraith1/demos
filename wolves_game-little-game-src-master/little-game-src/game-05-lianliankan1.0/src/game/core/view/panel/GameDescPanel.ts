module game {
	export class GameDescPanel extends BaseComponent {
		private scoreLabel: eui.Label;
		private typeImage: eui.Image;
		private timeLabel: eui.Label;

		private timeLess: number = 10;
		public constructor() {
			super();
			this.skinName = new GameDescPanelSkin();
		}

		public createChildren() {
			super.createChildren();
			var type = Global.gameProxy.currentType;
			this.typeImage.source = RES.getRes("tollogate" + type + "_jpg");
			this.startAni();
		}


		public startAni() {
			var interVal = egret.setInterval(function () {
				this.timeLabel.text = this.timeLess + "";
				if (this.timeLess <= 0) {
					egret.clearInterval(interVal);
					interVal = null;
					this.closeBtnTouchEnded();
				}
				this.timeLess--;
			}, this, 1000);
		}

		public closeBtnTouchEnded() {
			AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_HOME);
			AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_DESC);
			AppFacade.getInstance().sendNotification(SceneNotify.OPEN_GAME);
		}
	}
}
