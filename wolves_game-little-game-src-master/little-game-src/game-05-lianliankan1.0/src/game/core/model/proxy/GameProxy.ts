module game {
	export class GameProxy extends ResourceProxyBase {
		public static NAME: string = "GameProxy";

		private roomData: RoomBean;

		public gameData: PlayerGameBean[] = [];

		public currentType: number;

		public numberArr: number[];

		public currentUid;

		public startTime: number;

		public copyCard: number[];

		public cardsArr;

		public getCardsArr() {
			this.cardsArr = this.copyCard;
			// var arr = [this.copyCard[0], this.copyCard[1], this.copyCard[2], this.copyCard[3]];
			// this.cardsArr = arr;
			this.cardsArr = _.shuffle(_.clone(this.copyCard));
			return this.cardsArr;
		}

		public createCards() {
			var arr = [];
			for (var i = 1; i <= 20; i++) {
				arr.push(i);
				arr.push(i);
				if (i < 9) {
					arr.push(i);
					arr.push(i);
				}
				// if (i < 18) {
				// arr.push(i);
				// }
			}
			console.log(arr);
			this.copyCard = arr;
		}


		public clearData() {
			this.gameData = [];
			this.numberArr = null;
			this.startTime = null;
			this.currentType = null;
			this.changePlayerId();
		}

		private init() {
			Global.gameProxy = this;
			this.createCards();
		}

		public setRoomData(roomData) {
			this.roomData = roomData;
		}

		public getGamePlayer(playerId) {
			return this.gameData[playerId];
		}

		public currentIsMe() {
			return this.currentUid == Global.playerProxy.uid;
		}


		public findPlayer(uid) {
			return _.find(this.gameData, function (playerGameBean: PlayerGameBean) {
				return playerGameBean.uid == uid;
			});
		}

		public readyForPlayer(uid) {
			var findPlayer = _.find(this.gameData, function (playerGameBean: PlayerGameBean) {
				return playerGameBean.uid == uid;
			});
			if (!findPlayer) {
				this.gameData.push(new PlayerGameBean(uid));
			}
		}


		public isReadyAll() {
			return this.gameData.length == 2;
		}


		public startByPlayer() {
			var playerData: PlayerBean = Global.playerProxy.getPlayerData();
			var otherPlayerData: PlayerBean = Global.otherPlayerProxy.getPlayerData();
			if (parseInt(playerData.tid) > parseInt(otherPlayerData.tid)) {
				Global.gameProxy.currentUid = playerData.uid;
			} else {
				Global.gameProxy.currentUid = otherPlayerData.uid;
			}
		}

		public changePlayerId() {
			var playerData: PlayerBean = Global.playerProxy.getPlayerData();
			var otherPlayerData: PlayerBean = Global.otherPlayerProxy.getPlayerData();
			if (Global.gameProxy.currentUid == Global.playerProxy.uid) {
				Global.gameProxy.currentUid = otherPlayerData.uid;
			} else {
				Global.gameProxy.currentUid = playerData.uid;
			}
		}
	}
}