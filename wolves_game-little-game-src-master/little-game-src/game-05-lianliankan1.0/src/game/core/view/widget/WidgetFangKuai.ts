module game {
	export class WidgetFruit extends eui.Component {
		private dibanImage: eui.Image;
		public fruitImage: eui.Image;
		private position: eui.Label;
		public type: number;
		public xIndex: number;
		public yIndex: number;
		public isClear: boolean = false;
		public constructor(type, xIndex, yIndex) {
			super();
			this.type = type;
			this.xIndex = xIndex;
			this.yIndex = yIndex;
			this.skinName = new WidgetFruitSkin();
		}

		public changeType(type) {
			this.type = type;
			this.fruitImage.source = RES.getRes("f" + this.type + "_png");
		}

		public createChildren() {
			super.createChildren();
			// this.position.text = this.xIndex + " , " + this.yIndex;
			this.fruitImage.source = RES.getRes("f" + this.type + "_png");
			// this.coreImage.source = RES.getRes(type + "_" + this.numberIndex + "_png");
		}

		public changeDb() {
			this.dibanImage.source = RES.getRes("img_card2_png");
		}

		public toString() {
			return this.position.text;
		}
	}
}