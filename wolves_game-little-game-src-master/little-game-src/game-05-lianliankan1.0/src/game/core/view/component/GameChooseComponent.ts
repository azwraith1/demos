module game {
	export class GameChooseComponent extends eui.Component {
		private maskImage: eui.Image;
		private resultImage: eui.Image;
		private canTouch: boolean = false;

		private defaultScaleX: number = 1;
		private defaultScaleY: number = 1;
		public constructor() {
			super();
			this.skinName = new GameChooseSkin();
		}

		public createChildren() {
			super.createChildren();
			this.maskImage.visible = false;
			this.defaultScaleX = this.resultImage.scaleX;
			this.defaultScaleY = this.resultImage.scaleY;
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);

		}

		public changeImage(type) {
			var texture = RES.getRes("game_type" + type + "_png");
			this.resultImage.source = texture
			this.resultImage.anchorOffsetX = texture.textureWidth / 2;
			this.resultImage.anchorOffsetY = texture.textureHeight / 2;
		}

		public touchBegin() {
			egret.Tween.get(this.resultImage).to({ scaleX: this.defaultScaleX + 0.1, scaleY: this.defaultScaleY + 0.1 }, 50).to({ scaleX: this.defaultScaleX, scaleY: this.defaultScaleY }, 50);
		}

		public unlockTouch() {
			this.canTouch = true;
		}

		public showMaskRectAni(visible) {
			this.maskImage.visible = visible;
		}

	}
}