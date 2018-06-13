module game {
	export class GameScene extends BaseComponent {
		private mineGroup: eui.Group;
		private myMaskImage: eui.Image;
		private myHeader: eui.Image;
		private myNameLabel: eui.Label;
		private myPercent: eui.BitmapLabel;
		private myBar: eui.Image;
		private myPoint: eui.Image;


		private otherGroup: eui.Group;
		private otherNameLabel: eui.Label;
		private otherMaskImage: eui.Image;
		private otherHeader: eui.Image;
		private otherPercent: eui.BitmapLabel;
		private otherBar: eui.Image;
		private otherPoint: eui.Image;

		private cardGroup: eui.Group;
		//
		private canTouch: boolean = true;
		private maxRow: number = 7;
		private maxCol: number = 8;

		private hitArr: eui.ArrayCollection;
		private cards;
		public widgetFruits: any[] = [];

		private effectPoint1: eui.Image;
		private effectPoint2: eui.Image;
		private boomMcData: egret.MovieClipData;
		private otherLess: number = 56;

		private clickSound: egret.Sound;
		private lxSound: egret.Sound;

		public constructor() {
			super();
			this.skinName = new GameSceneSkin();
		}

		public getMyPercent() {
			var total = 56;
			var percent = Math.floor((56 - this.widgetFruits.length) / 56 * 100);
			console.log(percent);
			return percent;
		}

		public getOtherPercent() {
			var total = 56;
			var percent = Math.floor((56 - this.otherLess) / 56 * 100);
			console.log("other" + percent);
			return percent;
		}

		public showPercent(lessNumber, isMine) {
			var total = 56;
			var percent = Math.floor((56 - lessNumber) / 56 * 100);
			if (isMine) {
				this.myPercent.text = percent + "%";
				this.myBar.scaleX = percent / 100;
				this.myPoint.x = 132 + 400 * this.myBar.scaleX;
			} else {
				this.otherLess = lessNumber;
				this.otherPercent.text = percent + "%";
				this.otherBar.scaleX = percent / 100;
				this.otherPoint.x = 132 + 400 * this.otherBar.scaleX;
			}

		}

		private initMc() {
			var texture = RES.getRes("effect_boom_png");
			var json = RES.getRes("effect_boom_json");
			var mcDataFactory = new egret.MovieClipDataFactory(json, texture);
			this.boomMcData = mcDataFactory.generateMovieClipData("boom");
		}

		public createCards() {
			// var copyArr = _.shuffle(_.clone(Global.gameProxy.copyCard));
			var copyArr = Global.gameProxy.cardsArr;
			// var copyArr = [14, 12, 15, 2, 20, 10, 9, 18, 1, 4, 3, 13, 19, 8, 10, 8, 3, 6, 5, 12, 19, 8, 2, 17, 9, 4, 3, 7, 6, 2, 8, 16, 7, 17, 2, 1, 6, 11, 4, 1, 3, 1, 14, 16, 6, 11, 13, 18, 7, 15, 5, 4, 5, 20, 5, 7]
			this.cards = copyArr;
			var addCardID: number = 0;
			var showX: number = 0;
			var showY: number = 0;
			this.hitArr = new eui.ArrayCollection();
			var total = this.maxRow * this.maxCol;

			for (var i = 0; i < copyArr.length; i++) {
				var type: any = copyArr[i];
				var card = new WidgetFruit(type, Math.floor(i % this.maxRow), Math.floor(i / this.maxRow));
				card.x = Math.floor(i % this.maxRow) * 105;
				card.y = Math.floor(i / this.maxRow) * 103;
				if (i % 2 == 0) {
					card.changeDb();
				}
				this.cardGroup.addChild(card);
				this.widgetFruits.push(card);
			}
			this.checkHasPath();
		}


		public removeByPoint(xIndex, yIndex) {
			var widget = this.getWidgetByPoint(xIndex, yIndex);
			if (widget) {
				UIUtils.removeSelf(widget);
				Utils.removeArrayItem(this.widgetFruits, widget);
			}
		}

		// public printPosition(widgets) {
		// 	if (widgets) {
		// 		var a = "";
		// 		for (var i = 0; i < widgets.length; i++) {
		// 			a += widgets[i].xIndex + " , " + widgets[i].yIndex + " suc ";
		// 		}
		// 	}
		// }
		/**
		 * 判断是否无路可走
		 */
		public checkHasPath() {
			var typeGroups = _.groupBy(_.clone(this.widgetFruits), "type");
			var typeArrs = _.values(typeGroups);
			var result = [];
			for (var i = 0; i < typeArrs.length; i++) {
				var typeOneGroup = typeArrs[i];
				for (var j = 0; j < typeOneGroup.length; j++) {
					var one = typeOneGroup[j];
					for (var k = 0; k < typeOneGroup.length; k++) {
						if (!this.equal(one, typeOneGroup[k])) {
							// console.log(one.toString() + " , " + typeOneGroup[k].toString());
							var widgets = this.getPath(one, typeOneGroup[k]);
							if (widgets != null) {
								result.push(widgets);
							}
							// this.printPosition(widgets);
						}
					}
				}
			}
			if (result.length < 1) {
				// console.log("无路可走");
				return false;
			}
			return true;
		}

		public initMusic() {
			this.lxSound = RES.getRes("mc_lx_mp3");
			this.clickSound = RES.getRes("mc_click_mp3");
		}

		protected createChildren() {
			super.createChildren();
			this.initMusic();
			this.maskHeaders();
			this.initMc();
			this.renderPlayers();
			this.createCards();
			this.startTime = Date.now();
			this.cardGroup.addEventListener(egret.TouchEvent.TOUCH_END, this.cardGroupTouchEnded, this);
		}

		private touchOnFruit: WidgetFruit;
		private effectGroup: eui.Group;
		public cardGroupTouchEnded(e: egret.TouchEvent) {
			if (!this.canTouch) {
				return;
			}
			var point1 = new egret.Point(e.stageX, e.stageY);
			// var
			// console.log(this.cardGroup.localToGlobal())
			var findFruit = _.find(this.widgetFruits, function (widgetFruit: WidgetFruit) {
				var point = widgetFruit.localToGlobal();
				var rect = new egret.Rectangle(point.x, point.y, widgetFruit.width, widgetFruit.height);
				return rect.containsPoint(point1);
			});
			if (findFruit) {
				this.clickSound.play(0, 1);
				if (this.touchOnFruit) {
					if (this.equal(findFruit, this.touchOnFruit)) {
						this.effectGroup.removeChildren();
						this.effectPoint1 = null;
						this.effectPoint2 = null;
						this.touchOnFruit = null;
					} else {
						this.checkCanXiaoChu(findFruit);
					}
				} else {
					this.touchOnFruit = findFruit;
					this.effectPoint1 = this.showTouchOnPoint(findFruit);
				}
			}
		}

		public checkCanXiaoChu(widgetFruit: WidgetFruit) {
			this.canTouch = false;
			//不是一个类型
			if (widgetFruit.type != this.touchOnFruit.type) {
				this.clearEffectGroup();
				this.touchOnFruit = null;
				this.canTouch = true;
				return;
			}
			var points = this.getPath(widgetFruit, this.touchOnFruit);
			if (!points) {
				this.clearEffectGroup();
				this.touchOnFruit = null;
				this.canTouch = true;
				return;
			}
			var result = [];
			for (var i = points.length - 1; i >= 0; i--) {
				result.push({ xIndex: points[i].xIndex, yIndex: points[i].yIndex });
			}
			if (result.length > 0) {
				this.effectPoint2 = this.showTouchOnPoint(widgetFruit);
				this.lxSound.play(0, 1);
			}
			console.log(result);
			this.showPointLine(result);
			this.effectGroup.addChild(this.effectPoint1);
			this.effectGroup.addChild(this.effectPoint2);
			egret.setTimeout(function () {
				this.clearEffectGroup();
				this.playBoomEffect(this.touchOnFruit);
				this.playBoomEffect(widgetFruit);
				Utils.removeArrayItem(this.widgetFruits, this.touchOnFruit);
				Utils.removeArrayItem(this.widgetFruits, widgetFruit);
				UIUtils.removeSelf(this.touchOnFruit);
				UIUtils.removeSelf(widgetFruit);
				this.touchOnFruit = null;

				this.xiaochuOver();

				// this.checkHasPath();

			}, this, 150);
			// egret.Tween.get(this.)


		}

		/**
		 * 随机摆放剩下的
		 */
		public randomLessCard() {
			var data = _.shuffle(_.clone(this.widgetFruits));
			this.widgetFruits = data
			for (var i = 0; i < this.widgetFruits.length; i = i + 2) {
				var before = this.widgetFruits[i];
				var after = this.widgetFruits[i + 1];
				var temp = after;
				after.changeType(before.type);
				before.changeType(temp.type);
			}
		}

		private startTime: number;

		public gameOver() {
			this.canTouch = false;
		}



		public xiaochuOver() {
			this.showPercent(this.widgetFruits.length, true);
			var data = { method: SysNotify.OTHER_LESS, lessNumber: this.widgetFruits.length };
			Global.tikiSocketProxy.sendMessageToOther(data);
			if (this.widgetFruits.length < 1) {
				var useTime = Date.now() - this.startTime;
				var resultData = { useTime: useTime, win: Global.playerProxy.uid, method: SysNotify.SHOW_RESULT };
				Global.tikiSocketProxy.sendMessage(resultData);
				//游戏结束
				return;
			}
			while (!this.checkHasPath()) {
				this.randomLessCard();
			}
			this.canTouch = true;
		}

		public clearEffectGroup() {
			this.effectGroup.removeChildren();
			this.effectPoint1 = null;
			this.effectPoint2 = null;

		}

		private playBoomEffect(widgetFruit: WidgetFruit) {
			var moveClip = new egret.MovieClip(this.boomMcData);
			this.effectGroup.addChild(moveClip);
			moveClip.addEventListener(egret.Event.COMPLETE, function (e: egret.Event): void {
				UIUtils.removeSelf(moveClip);
				moveClip = null;
			}, this);
			moveClip.x = widgetFruit.xIndex * 105 - 55;
			moveClip.y = widgetFruit.yIndex * 103 - 60;
			moveClip.play(1);
		}

		public createLineByPoint(point1, point2) {
			var image = new eui.Image("line_png");
			image.scale9Grid = new egret.Rectangle(13, 13, 5, 5);
			if (point1.xIndex == point2.xIndex) {
				var length = Math.abs(point2.yIndex - point1.yIndex) * 103 + 28;
				image.height = length;
				// 下方
				var addPoint = point1;
				if (point2.yIndex < point1.yIndex) {
					addPoint = point2;
				}
				image.x = addPoint.xIndex * 105 + (105 / 2) - (14);
				image.y = addPoint.yIndex * 103 + (103 / 2) - 18;
			} else {
				var length = Math.abs(point2.xIndex - point1.xIndex) * 105 + 30;
				image.width = length;
				var addPoint = point1;
				if (point2.xIndex < point1.xIndex) {
					addPoint = point2;
				}
				image.x = addPoint.xIndex * 105 + (105 / 2) - 14;
				image.y = addPoint.yIndex * 103 + (103 / 2) - 18;
			}
			return image;
		}


		public showPointLine(points) {
			if (points.length == 2) {
				var point1 = points[0];
				var point2 = points[1];
				var image: eui.Image = this.createLineByPoint(point1, point2);
				this.effectGroup.addChild(image);
			} else if (points.length == 3) {
				var point1 = points[0];
				var point2 = points[1];
				var point3 = points[2];
				var image1: eui.Image = this.createLineByPoint(point1, point2);
				this.effectGroup.addChild(image1);
				var image2: eui.Image = this.createLineByPoint(point2, point3);
				this.effectGroup.addChild(image2);
			} else if (points.length == 4) {
				var point1 = points[0];
				var point2 = points[1];
				var point3 = points[2];
				var point4 = points[3];
				var image1: eui.Image = this.createLineByPoint(point1, point2);
				this.effectGroup.addChild(image1);
				var image3: eui.Image = this.createLineByPoint(point3, point4);
				this.effectGroup.addChild(image3);
				var image2: eui.Image = this.createLineByPoint(point2, point3);
				this.effectGroup.addChild(image2);
			}
		}

		public showTouchOnPoint(widgetFruit: WidgetFruit): eui.Image {
			var image = new eui.Image(RES.getRes("effect1_png"));
			image.touchEnabled = false;
			image.x = widgetFruit.x + 22;
			image.y = widgetFruit.y + 25;
			this.effectGroup.addChild(image);
			return image;
		}

		public getPath(p1: WidgetFruit, p2: WidgetFruit) {
			//优化搜索
			if (p1.xIndex > p2.xIndex) {
				var t = p1;
				p1 = p2;
				p2 = t;
			} else if (p1.xIndex == p2.xIndex) {
				if (p1.yIndex > p2.yIndex) {
					var t = p1;
					p1 = p2;
					p2 = t;
				}
			}

			//通过分析连连看中两点之间的位置关系，逐步由简到难分析每一种类型  
			//第一种类型， 两点是否在一条直线上，而且两点之间可直线连通  
			if ((this.onlineY(p1, p2) || this.onlineX(p1, p2)) && this.hasLine(p1, p2)) {
				status = 'type 1';
				return [p1, p2];
			}
			//第二种类型， 如果两点中任何一个点被全包围，则不通。
			if (this.getWidgetByPoint(p1.xIndex, p1.yIndex + 1)
				&& this.getWidgetByPoint(p1.xIndex, p1.yIndex - 1)
				&& this.getWidgetByPoint(p1.xIndex - 1, p1.yIndex)
				&& this.getWidgetByPoint(p1.xIndex + 1, p1.yIndex)
			) {
				status = "type 2";
				return null;
			}

			if (this.getWidgetByPoint(p2.xIndex, p2.yIndex + 1)
				&& this.getWidgetByPoint(p2.xIndex, p2.yIndex - 1)
				&& this.getWidgetByPoint(p2.xIndex - 1, p2.yIndex)
				&& this.getWidgetByPoint(p2.xIndex + 1, p2.yIndex)
			) {
				status = "type 2";
				return null;
			}

			//第三种类型， 两点在一条直线上，但是不能直线连接  

			var pt0, pt1, pt2, pt3;
			//如果都在x轴，则自左至右扫描可能的路径，  
			//每次构造4个顶点pt0, pt1, pt2, pt3，然后看他们两两之间是否连通  
			if (this.onlineX(p1, p2)) {
				for (var i = -1; i <= this.maxCol; i++) {
					if (i == p1.yIndex) {
						continue;
					}
					pt0 = p1;
					pt1 = { x: p1.x, y: i, xIndex: p1.x, yIndex: i };
					pt2 = { x: p2.x, y: i, xIndex: p2.x, yIndex: i };
					pt3 = p2;
					//如果顶点不为空，则该路不通。  
					if (this.getWidgetByPoint(pt1.xIndex, pt1.yIndex) || this.getWidgetByPoint(pt2.xIndex, pt2.yIndex)) {
						continue;
					}
					if (this.hasLine(pt0, pt1) && this.hasLine(pt1, pt2) && this.hasLine(pt2, pt3)) {
						status = '(x:' + pt0.x + ',y:' + pt0.y + ')' + ', (x:' + pt1.x + ',y:' + pt1.y + ')' + ', (x:' + pt2.x + ',y:' + pt2.y + ')' + ', (x:' + pt3.x + ',y:' + pt3.y + ')';
						return [pt0, pt1, pt2, pt3];
					}
				}
			}
			//第四种类型， 两点不在一条直线上。  
			//先纵向扫描可能的路径  
			//同样，每次构造4个顶点，看是否可通  
			for (var k = -1; k <= this.maxCol; k++) {
				pt0 = p1;
				pt1 = { x: p1.x, y: k, xIndex: p1.xIndex, yIndex: k };
				pt2 = { x: p2.x, y: k, xIndex: p2.xIndex, yIndex: k };
				pt3 = p2;
				status = '(x:' + pt0.x + ',y:' + pt0.y + ')' + ', (x:' + pt1.x + ',y:' + pt1.y + ')' + ', (x:' + pt2.x + ',y:' + pt2.y + ')' + ', (x:' + pt3.x + ',y:' + pt3.y + ')';
				//特殊情况，如果pt0和pt1重合  
				if (this.equal(pt0, pt1)) {
					//如果pt2不为空，则此路不通  
					if (this.getWidgetByPoint(pt2.xIndex, pt2.yIndex)) {
						continue;
					}
					if (this.hasLine(pt1, pt2) && this.hasLine(pt2, pt3)) {
						return [pt1, pt2, pt3];
					}
					else {
						continue;
					}
				}
				//特殊情况，如果pt2和pt3重合  
				else if (this.equal(pt2, pt3)) {
					//如果pt1不为空，则此路不通  
					if (this.getWidgetByPoint(pt1.xIndex, pt2.yIndex)) {
						continue;
					}
					if (this.hasLine(pt0, pt1) && this.hasLine(pt1, pt2)) {
						return [pt0, pt1, pt2];
					}
					else {
						continue;
					}
				}
				//如果pt1, pt2都不为空,则不通  
				if (this.getWidgetByPoint(pt1.xIndex, pt1.yIndex) || this.getWidgetByPoint(pt2.xIndex, pt2.yIndex)) {
					continue;
				}
				if (this.hasLine(pt0, pt1) && this.hasLine(pt1, pt2) && this.hasLine(pt2, pt3)) {
					return [pt0, pt1, pt2, pt3];
				}
			}
			//横向扫描可能的路径  
			for (var k = -1; k < this.maxRow; k++) {
				pt0 = p1;
				pt1 = { x: k, y: p1.y, xIndex: k, yIndex: p1.yIndex };
				pt2 = { x: k, y: p2.y, xIndex: k, yIndex: p2.yIndex };
				pt3 = p2;
				status = '(x:' + pt0.x + ',y:' + pt0.y + ')' + ', (x:' + pt1.x + ',y:' + pt1.y + ')' + ', (x:' + pt2.x + ',y:' + pt2.y + ')' + ', (x:' + pt3.x + ',y:' + pt3.y + ')';
				if (this.equal(pt0, pt1)) {
					if (this.getWidgetByPoint(pt2.xIndex, pt2.yIndex)) {
						continue;
					}
					if (this.hasLine(pt1, pt2) && this.hasLine(pt2, pt3)) {
						return [pt1, pt2, pt3];
					}
				}
				if (this.equal(pt2, pt3)) {
					if (this.getWidgetByPoint(pt1.xIndex, pt1.yIndex)) {
						continue;
					}
					if (this.hasLine(pt0, pt1) && this.hasLine(pt1, pt2)) {
						return [pt0, pt1, pt2];
					}
				}
				if (this.getWidgetByPoint(pt1.xIndex, pt1.yIndex) || this.getWidgetByPoint(pt2.xIndex, pt2.yIndex)) {
					continue;
				}
				if (this.hasLine(pt0, pt1) && this.hasLine(pt1, pt2) && this.hasLine(pt2, pt3)) {
					return [pt0, pt1, pt2, pt3];
				}
			}
			//status='type4';  
			return null;

		}

		public equal(p1: WidgetFruit, p2: WidgetFruit) {
			return ((p1.xIndex == p2.xIndex) && (p1.yIndex == p2.yIndex));
		}


		public onlineX(p1: WidgetFruit, p2: WidgetFruit) {
			return p1.yIndex == p2.yIndex;
		}

		public onlineY(p1, p2) {
			return p1.xIndex == p2.xIndex;
		}

		public getWidgetByPoint(xIndex, yIndex) {
			return _.find(this.widgetFruits, function (widgetFruit: WidgetFruit) {
				return widgetFruit.xIndex == xIndex && widgetFruit.yIndex == yIndex;
			})
		}


		public hasLine(p1: WidgetFruit, p2: WidgetFruit) {
			if (p1.xIndex == p2.xIndex && p1.yIndex == p2.yIndex) {
				return true;
			}

			if (this.onlineY(p1, p2)) {
				var i = p1.yIndex > p2.yIndex ? p2.yIndex : p1.yIndex;
				i = i + 1;
				var max = p1.yIndex > p2.yIndex ? p1.yIndex : p2.yIndex;
				for (; i < max; i++) {
					if (this.getWidgetByPoint(p1.xIndex, i)) {
						break;
					}
				}
				if (i == max) {
					return true;
				}
				return false;
			} else if (this.onlineX(p1, p2)) {
				var j = p1.xIndex > p2.xIndex ? p2.xIndex : p1.xIndex;
				j = j + 1;
				var max = p1.xIndex > p2.xIndex ? p1.xIndex : p2.xIndex;
				for (; j < max; j++) {
					if (this.getWidgetByPoint(j, p1.yIndex)) {
						break;
					}
				}
				if (j == max) {
					return true;
				}
				return false;
			}
		}


		//没有转折点
		public getPointByZero(widgetFruit1: WidgetFruit, widgetFruit2: WidgetFruit) {


		}




		private maskHeaders() {
			this.otherHeader.mask = this.otherMaskImage;
			this.myHeader.mask = this.myMaskImage;
		}

		public renderPlayers() {
			var playerData = Global.playerProxy.getPlayerData();
			if (playerData) {
				this.myNameLabel.text = playerData.nick;
				this.myHeader.source = playerData.avatar;
			}
			var otherPlayerData: PlayerBean = Global.otherPlayerProxy.getPlayerData();
			if (otherPlayerData) {
				this.otherNameLabel.text = otherPlayerData.nick;
				this.otherHeader.source = otherPlayerData.avatar;
			}
		}
	}
}