/**
  * 游戏数据读取模板
  * 注意：
  * 不能直接操作vo数据，只能通过gameProxy操作
  */
module game {
    export class OtherPlayerProxy extends ResourceProxyBase {
        public static NAME: string = "OtherPlayerProxy";

        private playerData: PlayerBean;

        public playerId: string;

        public uid: string;

        public gameType: number;

        public ready: boolean = false;

        private init() {
            Global.otherPlayerProxy = this;
            if (GameConfig.DEBUG_MODEL) {
                this.getPlayerDataByUrl();
            }
        }

        public getPlayerData(): PlayerBean {
            return this.playerData;
        }

        private getPlayerDataByUrl() {
            var uid = Utils.getURLQueryString('uid');
            if (uid) {
                this.playerId = "001";
            } else {
                this.playerId = "002";
            }
        }

        public clearPlayerData() {
            this.playerData = null;
            this.playerId = "";
            this.uid = "";
        }

        public setPlayerData(playerData) {
            this.playerData = playerData;
            this.uid = playerData.uid;
        }
    }
}
