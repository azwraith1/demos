module game {
	export class TikiSocketProxy extends ResourceProxyBase {
		public static NAME: string = "TikiSocketProxy";
		public socket: any = null;
		public constructor() {
			super();
		}

		public init() {
			Global.tikiSocketProxy = this;
		}

		public isConnect() {
			return this.socket != null;
		}

		public sendMessage(data) {
			this.socket.sendMessage(data);
		}


		public sendMessageToOther(data) {
			this.socket.sendMessageToOther(data);
		}


		public sendDisconnect() {
			this.socket.sendDisconnect();
		}


		public connectToServer(socketUrl) {
			if (!socketUrl) {
				socketUrl = "http://112.124.112.61:9092?_d=" + GameConfig.GAME_ID + "&_t=" + GameConfig.ROOM_ID + "&cid=" + Global.playerProxy.playerId;
			}
			this.socket = window['TikigameConnector'](socketUrl);
			this.socket.on('chat', (resp) => {
				if (resp.cmd == 1 && resp.data) {
					// console.log(JSON.stringify(resp, null, 4));
					AppFacade.getInstance().sendNotification(resp.data.method, resp.data);
				} else if (resp.cmd == 2) {
					// console.log(JSON.stringify(resp, null, 4));
					// Global.otherPlayerProxy.setPlayerData(resp.data);
					AppFacade.getInstance().sendNotification(SysNotify.PLAYER_JOIN, resp.data);
				} else if (resp.cmd == 3) {
					// console.log(JSON.stringify(resp, null, 4));
					// Global.otherPlayerProxy.clearPlayerData();
					AppFacade.getInstance().sendNotification(SysNotify.PLAYER_LEAVE, resp.data);
				}
			});

			this.socket.on("disconnect", (resp) => {
				window.location.href = window.location.href;
			});

			this.socket.on("connect", (resp) => {

			});
		}
	}
}