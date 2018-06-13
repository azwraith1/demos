module game {
	export class BackGroupComponent extends eui.Component {
		public topGroup: eui.Group;
		public mainGroup: eui.Group;
		public leftGroup: eui.Group;
		public rightGroup: eui.Group;

		public myHeader: eui.Image;
		public otherHeader: eui.Image;
		public myHeaderBg: eui.Image;
		private otherHeaderBg: eui.Image;


		public scoreLabel: eui.BitmapLabel;
		public rankLabel: eui.BitmapLabel;
		public constructor() {
			super();
			this.skinName = new BackgroundSkin();
		}

		public createChildren() {
			super.createChildren();
			this.myHeader.mask = this.myHeaderBg;
			this.otherHeader.mask = this.otherHeaderBg;
		}


		public showScoreAni(score) {
			var currentScore = parseInt(this.scoreLabel.text);
			this.scoreLabel.text = currentScore + score;
			egret.Tween.get(this.scoreLabel).to({
				scaleX: 1,
				scaleY: 1
			}, 300).to({
				scaleX: 0.6,
				scaleY: 0.6
			}, 100);
		}

		public updateMineScore() {
			if (GameConfig.DEBUG_MODEL) {
				this.scoreLabel.text = "0";
				this.rankLabel.text = "0";
			}
			Global.tikiHttpProxy.sendNotification("getUserScore", (resp) => {
				if (resp.code == 0) {
					this.scoreLabel.text = resp.score;
					this.rankLabel.text = resp.rank;
				}
			})
		}
	}
}