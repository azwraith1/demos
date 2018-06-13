/**
  * 背包面板
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  */
module game {
	export class HomeMediator extends BaseMediator {
		public static NAME: string = "HomeMediator";
		public type: string = "scene";
		private isSendReq: boolean = false;
		private sendScoketInterval;
		public constructor(viewComponent: any = null) {
			super(HomeMediator.NAME, viewComponent);
		}

		public listNotificationInterests(): Array<any> {
			return [
				SceneNotify.OPEN_HOME,
				SceneNotify.CLOSE_HOME,
				ClientNotify.START_GAME_1,
				SysNotify.READY,
				SysNotify.START_GAME,
				SysNotify.NEXT_GAME,
				SysNotify.PLAYER_JOIN,
				SysNotify.PLAYER_LEAVE,
				ClientNotify.ADD_SCORE
			];
		}

		public onRegister() {
			super.onRegister();
			this.facade.registerMediator(new GameDescMediator());
			this.facade.registerMediator(new GameMediator());
			this.facade.registerMediator(new GameLookMediator());
			this.facade.registerMediator(new GameResultMediator());
		}

		public viewComponent: HomeScene;

		public handleNotification(notification: puremvc.INotification): void {
			var data: any = notification.getBody();
			switch (notification.getName()) {
				case SceneNotify.OPEN_HOME: {
					if (this.viewComponent) {
						return;
					}
					this.showViewComponent();
					break;
				}
				case SceneNotify.CLOSE_HOME: {
					this.closeViewComponent(1);
					break;
				}
				case SysNotify.START_GAME: {
					if (this.viewComponent) {
						Global.gameProxy.cardsArr = data.numberArr;
						this.viewComponent.stopSendReadOkReq();
						this.viewComponent.startDaojiShi();
						// AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_HOME);
						// AppFacade.getInstance().sendNotification(SceneNotify.OPEN_GAME);
					}
					break;
				}
				// //玩家加入
				// case SysNotify.PLAYER_JOIN:
				// 	alert("PLAYER_JOIN: " + JSON.stringify(data, null, 4));
				// 	Global.otherPlayerProxy.setPlayerData(data);
				// 	Global.gameProxy.initGamePlayer(data.uid, true);
				// 	var data1 = { "uid": Global.playerProxy.getPlayerData().uid, "method": SysNotify.READY };
				// 	// Global.tikiSocketProxy.sendMessage(data);
				// 	Global.tikiSocketProxy.sendMessageToOther(data1);
				// 	break;
				case SysNotify.PLAYER_LEAVE:
					Global.tikiHttpProxy.sendTikiHttpRequest("exitView", null, null);
					break;
				case SysNotify.READY:
					if (this.viewComponent) {
						// 	var reqData = { time: Date.now(), method: SysNotify.START_GAME };
						// 	Global.tikiSocketProxy.sendMessage(reqData);
						this.viewComponent.changeStart();
					}
					Global.gameProxy.readyForPlayer(data.uid);
					// //全部准备好
					if (Global.gameProxy.isReadyAll()) {
						//第一个准备的人 随机数字 和 开始猜
						var startUid = Global.gameProxy.gameData[0].uid;
						if (Global.playerProxy.uid == startUid) {
							var numberArr = Global.gameProxy.getCardsArr();
							var reqData = { numberArr: numberArr, method: SysNotify.START_GAME };
							Global.tikiSocketProxy.sendMessage(reqData);
						}
					}
					// }
					// }
					break;
				// case SysNotify.READY:
				// 	if (this.viewComponent) {
				// 		if (!GameConfig.DEBUG_MODEL) {
				// 			this.viewComponent.startGame();
				// 			return;
				// 		}


				// 		var player = Global.gameProxy.getGamePlayer(data.uid);
				// 		player.ready = true;
				// 		for (var key in Global.gameProxy.gameData) {
				// 			var playerData = Global.gameProxy.gameData[key];
				// 			if (!playerData.ready) {
				// 				return;
				// 			}
				// 		}
				// 		console.log(JSON.stringify(Global.gameProxy.gameData, null, 4));
				// 		//大家都准备好了， 告诉对方游戏可以开始
				// 		if (GameConfig.DEBUG_MODEL) {
				// 			var reqData = { method: SysNotify.START_GAME };
				// 			Global.tikiSocketProxy.sendMessageToOther(reqData);
				// 			return
				// 		}
				// 		this.facade.sendNotification(ClientNotify.START_GAME_1);
				// 	}
				// 	break;
			}
		}


		public showViewComponent() {
			this.viewComponent = new HomeScene();
			var sceneLayer = GameLayerManager.gameLayer().sceneLayer;
			sceneLayer.addChild(this.viewComponent);
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
