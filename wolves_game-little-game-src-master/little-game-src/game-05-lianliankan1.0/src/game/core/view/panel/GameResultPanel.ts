module game {
	export class GameResultPanel extends BaseComponent {
		private timeLabel: eui.BitmapLabel;
		private scoreLabel: eui.BitmapLabel;
		private rankLabel: eui.BitmapLabel;
		private backBtn: eui.Button;
		private restartBtn: eui.Button;
		private resultData;

		private tipBg: eui.Image;
		private percentLabel: eui.BitmapLabel;
		private tipImage: eui.Image;

		private winMusic: egret.Sound;
		private failMusic: egret.Sound;
		public constructor(resultData) {
			super();
			this.resultData = resultData;
			this.skinName = new GameResultPanelSkin();
		}

		public initMusic() {
			this.winMusic = RES.getRes("mc_win_mp3");
			this.failMusic = RES.getRes("mc_fail_mp3");
		}

		public createChildren() {
			super.createChildren();
			this.initMusic();
			this.timeLabel.text = TimeFormat.showloseMMSS(this.resultData.time);
			var otherData = this.resultData.otherData;
			this.timeLabel.text = TimeFormat.showloseMMSS(otherData.useTime);
			if (otherData.win == Global.playerProxy.uid) {
				this.winMusic.play(0, 1);
				var score = 10;
				AppFacade.getInstance().sendNotification(ClientNotify.ADD_SCORE, score);
				if (!GameConfig.DEBUG_MODEL) {
					this.scoreLabel.text = (Global.playerProxy.score + 10) + "";
					Global.tikiHttpProxy.sendTikiHttpRequest("increaseScore", score, (resp) => {
						this.rankLabel.text = resp.rank;
					});
				}
				this.percentLabel.text = this.resultData.otherPercent + "%";
			} else {
				this.failMusic.play(0, 1);
				this.scoreLabel.text = (Global.playerProxy.score) + "";
				this.rankLabel.text = (Global.playerProxy.rank) + "";
				this.tipBg.source = RES.getRes("r_img5_png");
				this.percentLabel.text = this.resultData.myPercent + "%";
				this.tipImage.source = RES.getRes("r_img7_png");
			}
			Global.gameProxy.clearData();
			this.backBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.restartBtnTouchEnded, this);
		}
		/**
		 * 再来一局
		 */
		private restartBtnTouchEnded() {
			AppFacade.getInstance().sendNotification(PanelNotify.CLOSE_RESULT);
			AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_HOME);
			AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_GAME);
			AppFacade.getInstance().sendNotification(SceneNotify.OPEN_HOME);
		}

		public backBtnTouchEnded() {
			this.restartBtnTouchEnded();
		}
	}
}