/**
  * 游戏数据读取模板
  * 注意：
  * 不能直接操作vo数据，只能通过gameProxy操作
  */
module game {
    export class PlayerProxy extends ResourceProxyBase {
        public static NAME: string = "PlayerProxy";

        private playerData: PlayerBean;

        public playerId: string = "";

        public uid: string = "";

        public score: number = 0;

        public rank: number = 0;

        public gameType: number;

        public ready: boolean = false;

        private init() {
            Global.playerProxy = this;
            if (GameConfig.DEBUG_MODEL) {
                this.getPlayerDataByUrl();
            }
        }

        public needGetScore() {
            if (this.score && this.rank) {
                return false;
            }
            return true;
        }

        public isMy(uid) {
            return this.uid == uid;
        }


        private getPlayerDataByUrl() {
            var uid = Utils.getURLQueryString('uid');
            if (!uid) {
                this.playerId = "001";
            } else {
                this.playerId = "002";
            }
        }

        public getPlayerData(): PlayerBean {
            return this.playerData;
        }

        public setPlayerData(playerData) {
            this.playerData = playerData;
            this.uid = playerData.uid;
        }


        public addServerListener() {
            //   SocketManager.So  
        }



    }
}