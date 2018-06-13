module game {
	export class TikiHttpProxy extends ResourceProxyBase {
		public static NAME: string = "TikiHttpProxy";
		public tikigame: any = window['TikiGame'];
		public constructor() {
			super();
		}

		public init() {
			Global.tikiHttpProxy = this;
		}

		public async sendTikiHttpRequest(sdkName, data, callback) {
			if (GameConfig.DEBUG_MODEL) {
				return;
			}
			window['TikiGame'].$(function (auth) {
				if (auth.code == 0) {
					if (auth.data && auth.data.uid) {
						if (!Global.playerProxy.getPlayerData()){
							Global.playerProxy.setPlayerData(auth.data);
						}
					}
					if (sdkName) {
						if (data) {
							window['TikiGame'][sdkName](data, (resp) => {
								callback && callback(resp);
							});
						} else {
							window['TikiGame'][sdkName]((resp) => {
								callback && callback(resp);
							});
						}
					}
				} else {
					alert(auth.msg);
				}
			});
		}
	}
}