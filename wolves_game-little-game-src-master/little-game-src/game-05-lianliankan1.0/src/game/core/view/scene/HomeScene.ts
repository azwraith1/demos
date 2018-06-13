module game {
	export class HomeScene extends BaseComponent {
		private mineGroup: eui.Group;
		private myMaskImage: eui.Image;
		private myHeader: eui.Image;
		private myNameLabel: eui.Label;

		private otherGroup: eui.Group;
		private otherNameLabel: eui.Label;
		private otherMaskImage: eui.Image;
		private otherHeader: eui.Image;

		private myStatusImage: eui.Image;
		private otherStatusImage: eui.Image;

		private timeCount: number = 0;
		private startTime: number;
		public constructor() {
			super();
			this.skinName = new HomeSceneSkin();
		}

		public renderPlayers() {
			var playerData = Global.playerProxy.getPlayerData();
			if (playerData) {
				this.myNameLabel.text = playerData.nick;
				this.myHeader.source = playerData.avatar;
				if (!Global.playerProxy.needGetScore()) {
					// this.scoreLabel.text = Global.playerProxy.score + "";
					// this.rankLabel.text = Global.playerProxy.rank + "";
					// return;
				}
				Global.tikiHttpProxy.sendTikiHttpRequest("getUserScore", null, (resp) => {
					Global.playerProxy.score = resp.score;
					Global.playerProxy.rank = resp.rank;
					// this.scoreLabel.text = resp.score;
					// this.rankLabel.text = resp.rank;
				});
			}
			var otherPlayerData: PlayerBean = Global.otherPlayerProxy.getPlayerData();
			if (otherPlayerData) {
				this.otherNameLabel.text = otherPlayerData.nick;
				this.otherHeader.source = otherPlayerData.avatar;
			}
		}


		private maskHeaders() {
			this.otherHeader.mask = this.otherMaskImage;
			this.myHeader.mask = this.myMaskImage;
		}

		public createChildren() {
			super.createChildren();
			this.maskHeaders();
			this.renderPlayers();
			this.otherStatusImage.source = RES.getRes("h_img6_png");
			this.startBtnTouchEnded();

		}

		public startJiShu() {


		}


		public showLeftAndRight() {


		}

		public readyInterval;
		/**
		 * 每隔一秒发送我准备OK, 接收放如果收到 返回一个停止标记， 然后开始游戏
		 */
		public stopSendReadOkReq() {
			if (this.readyInterval) {
				// PopUpManager.popTip("接收停止发送请求, 并且开始游戏");
				egret.clearInterval(this.readyInterval);
				this.readyInterval = null;
				// this.startGame();
			}
		}

		public changeStart() {
			this.otherStatusImage.source = this.myStatusImage.source;
		}

		private timeLabel: eui.BitmapLabel;
		private interval;
		private currentTime: number = 2;
		public startDaojiShi() {
			if (this.interval) {
				return;
			}
			this.changeStart();
			this.interval = egret.setInterval(function () {
				this.timeLabel.text = this.currentTime + "";
				if (this.currentTime < 0) {
					egret.clearInterval(this.interval);
					this.interval = null;
					AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_HOME);
					AppFacade.getInstance().sendNotification(SceneNotify.OPEN_GAME);
					return;
				}
				this.currentTime--;
			}, this, 1000);

		}

		public sendReadyOkReq() {
			this.stopSendReadOkReq();
			// var array = [];
			// for (var i = 1; i <= 20; i++) {
			// 	array.push(i);
			// }
			// array = _.shuffle(array);
			// var type = this.currentIndex;
			var data = { "uid": Global.playerProxy.getPlayerData().uid, "method": SysNotify.READY };
			// Global.gameProxy.currentType = type;
			// Global.gameProxy.numberArr = array;
			// // AppFacade.getInstance().sendNotification(SceneNotify.OPEN_GAME);
			// // return;
			// // AppFacade.getInstance().sendNotification(PanelNotify.OPEN_DESC);
			this.readyInterval = egret.setInterval(function () {
				Global.tikiSocketProxy.sendMessageToOther(data);
			}, this, 500);
		}


		public startBtnTouchEnded() {
			Global.gameProxy.readyForPlayer(Global.playerProxy.uid);
			this.sendReadyOkReq();
		}

		// private musicBtnTouchEnded() {
		// 	var audioProxy: any = AppFacade.getInstance().retrieveProxy(Proxy.AUDIO_PROXY);
		// 	audioProxy.openSound(this.musicBtn.selected);
		// }
	}
}