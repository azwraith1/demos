// TypeScript file
class Stage extends egret.Stage{};
class TextField extends egret.TextField {};
class Sprite extends egret.Sprite{};
class Bitmap extends egret.Bitmap{};
class DisplayObject extends egret.DisplayObject{};
class Rectangle extends egret.Rectangle{};
var traceSimple=function(...arg):void
{
	var str:string="";
	for(let i:number=0;i<arg.length;i++){
         str+=arg[i]+",";
    }
	str=str.substr(0,str.length-1);
    game.LogManager.getIns().log(str);
}
module game{
	export class Const{
		/**布局 横版*/
		public static readonly HORIZONTAL:string="horizontal";
		/**布局 竖版*/
		public static readonly VERTICAL:string="vertical";

		/**形状 方块*/
		public static readonly SHAPE_RECT:string="shape rect";
		/**形状 圆角方块*/
		public static readonly SHAPE_RECT_ROUND:string="shape rect round";
		/**形状 圆块*/
		public static readonly SHAPE_CIRCLE:string="shape circle";
		/**版本 调试*/
		public static readonly VER_DEBUG:string="debug";
		/**版本 发布*/
		public static readonly VER_RELEASE:string="release";
	}
export class MoonContainer extends egret.DisplayObjectContainer
	{
		private dataEvent:Object=new Object;
		protected stageWidth:number;
		protected stageHeight:number;
        public constructor()
        {
            super();
            this.init();
			this.once(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
        }
        private addToStage():void
        {
            this.render();
        }
        /**加载到舞台之前调用 */
        protected init():void
        {

        }
        /**加载到舞台之后调用 */
        protected render():void
        {
			this.stageWidth=this.stage.stageWidth;
			this.stageHeight=this.stage.stageHeight;
        }
		/**发布事件*/
		public dispEvent(type:string,data:Object=null,dataType:Object=null):void
		{
			if(this.dataEvent){
				var fun:Function=this.dataEvent[type] as Function;
				/* if(fun!=null){
					var moonEvent:MoonEvent=new MoonEvent;
					moonEvent.currentTarget=this;
					moonEvent.data=data;
					moonEvent.type=type;
					moonEvent.dataType=dataType;
					if(fun["this"]){
						(<Function>fun).apply(fun["this"],[moonEvent]);
					}else{
						fun(moonEvent)
					}
				}*/
			}
		}
		/**帧听事件*/
		public addEvent(type:string, listener:Function,thisObj:any=null):void
		{
			if(this.dataEvent&&this.dataEvent[type]==null){
				listener["this"]=thisObj
				this.dataEvent[type]=listener;
			}
		}
		/**删除事件*/
		public removeEvent(type:string, listener:Function):void
		{
			if(this.dataEvent&&this.dataEvent[type]){
				delete this.dataEvent[type];
			}
		}
		/**把自己从父级删除*/
		public removeFromParent(value:Boolean=false):void
		{
			var _parent:egret.DisplayObjectContainer=this.parent as egret.DisplayObjectContainer;
			if(value)		this.dispose();
			if(_parent&&_parent.contains(this))		_parent.removeChild(this);
			_parent=null;
		}
		/**删除所有的*/
		public removeChildAll(beginIndex:number=0, endIndex:number=2147483647,dispose:Boolean=false):void
		{
			if (endIndex < 0 || endIndex >= this.numChildren) 
				endIndex = this.numChildren - 1;
			
			for (var i:number=beginIndex; i<=endIndex; ++i)
				this.removeChildIndex(beginIndex, dispose);
		}
		/**删除index层的*/
		public removeChildIndex(beginIndex:number, dispose:Boolean):void
		{
			if (beginIndex >= 0 || beginIndex < this.numChildren){ 
				var basicContent:MoonContainer=this.getChildAt(beginIndex) as MoonContainer;
				if(basicContent instanceof MoonContainer){
					basicContent.removeFromParent(dispose);
				}else{
					var display:egret.DisplayObject=this.getChildAt(beginIndex) as egret.DisplayObject;
					if(display.parent)	display.parent.removeChild(display);
				}
				
			}
		}
		/**销毁*/
		public dispose():void
		{
			this.removeChildAll(0,-1,true);
			this.dataEvent=null;
			this.stageWidth=null;
			this.stageHeight=null;
		}
    }
	export class MoonEvent extends egret.EventDispatcher
	{
		public static readonly MOUSE_OVER:string="event-over";//移进
		public static readonly MOUSE_OUT:string="event-out";//移出
		public static readonly MOUSE_DOWN:string="event-down";//点下
		public static readonly MOUSE_MOVE:string="event-move";//移动
		public static readonly MOUSE_UP:string="event-up";//弹开
		public static readonly CLICK:string="event-click";//单击
		
		//tabbar event
		public static readonly CHANGE:string="change";//更换
		public static readonly COMPLETE:string="complete";//完成
		public static readonly RENDER_COMPLETE:string="render complete";//渲染完成
		public static readonly UPDATE:string="update";//更新
		public static readonly START:string="start";//开始
		public static readonly MOVE:string="move";//移动
		public static readonly OVER:string="over";//结束
		public static readonly PAUSE:string="pause";//暂停
		public static readonly STOP:string="stop";//停止
		public static readonly PLAY:string="play";//播放
		public static readonly OPEN:string="open";//开启
		public static readonly CLOSE:string="close";//关闭
		
		public currentTarget:Object;
		public type:string;
		public data:Object;
		public dataType:Object;
		public constructor(type:string="",data:Object=null,currentTarget:Object=null)
		{
			super();
			this.type=type;
			this.data=data;
			this.currentTarget=currentTarget;
		}
	}
	export class MoonDisplayObject extends egret.Sprite
	{
		private _type:string=Const.SHAPE_RECT;
		private _color:number=0;
		private _data:any;
		private _hasBg:boolean;
		private display:egret.Sprite;
		private bg:egret.Sprite;
		public constructor()
		{
			super();
			this.display=new egret.Sprite;
			this.bg=new egret.Sprite;
		}
		set type(value:string){this._type=value}
		get type():string{return this._type}
		set color(value:number){this._color=value;this._data.c=value;this.draw();}
		get color():number{return this._color}
		/**{w:1,h:1,r:1,c:1,ew:1,eh:1} */
		set data(value:Object){this._data=value;this.draw();}
		protected draw():void
		{
			this._color=this._data.c;
			this.display.graphics.clear();
			this.display=this.getDisplay(this._data);
			this.addChild(this.display);
			this.setPosition();
		}
		protected setPosition():void
		{
			if(this._hasBg&&this.type!=Const.SHAPE_CIRCLE){
				this.display.x=(this.bg.width-this.display.width)>>1;
				this.display.y=(this.bg.height-this.display.height)>>1;
			}
		}
		public setBackground(color:number,side:number=1)
		{
			this._hasBg=true;
			var d:any=this._data;
			var o:any={};
			for(var i in d){
				o[i]=d[i];
			}
			o.c=color;
			if(o.w) o.w=o.w+side*2;
			if(o.h) o.h=o.h+side*2;
			if(o.r) o.r=o.r+side;
			this.bg.graphics.clear();
			this.bg=this.getDisplay(o);
			this.addChildAt(this.bg,0);
			this.setPosition();
		}
		protected getDisplay(o:any):egret.Sprite
		{
			switch(this.type){
				case Const.SHAPE_RECT:
				return MoonUI.getRect(o.w,o.h,o.c);
				case Const.SHAPE_RECT_ROUND:
				return MoonUI.getRoundRect(o.w,o.h,o.c,o.ew,o.eh);
				case Const.SHAPE_CIRCLE:
				return MoonUI.getCircle(o.r,o.c);
			}
		}
	}
	export class MoonUI
	{
        /**得到随机色*/
		public static get randomColor():number{
			return Math.random()*0XFFFFFF;
		}
		/**得到矩形框*/
		public static getLineRect(w:number,h:number,c:number=0,s:number=1,x:number=0,y:number=0):egret.Sprite
		{
			var node:egret.Sprite=new egret.Sprite()
			node.graphics.lineStyle(s,c)
			node.graphics.drawRect(x,y,w,h);
			node.graphics.endFill();
			return node;
		}
		/**得到圆形框*/
		public static getLineCircle(r:number,c:number=0,s:number=1,x:number=0,y:number=0):egret.Sprite
		{
			var node:egret.Sprite=new egret.Sprite();
			node.graphics.lineStyle(s,c)
			node.graphics.drawCircle(x,y,r);
			node.graphics.endFill();
			return node;
		}
		/**得到渐变矩形 a为角度偏移率0,0.5,1,2分别为四个正方向*/
		public static getMatrixRect(w:number,h:number,c1:number=0,c2:number=0,a:number=0):egret.Sprite
		{
			var node = new egret.Sprite();
			var matrix = new egret.Matrix();
			matrix.createGradientBox(w, h, Math.PI * a, 0, 0); 
			node.graphics.beginGradientFill(egret.GradientType.LINEAR, [c1, c2], [1, 1], [0, 255], matrix);
			node.graphics.drawRect(0, 0, w, h);
			node.graphics.endFill();
			return node;
		}
		/**得到矩形*/
		public static getRect(w:number,h:number,c:number=0,x:number=0,y:number=0):egret.Sprite
		{
			var s:egret.Sprite=new egret.Sprite()
			s.graphics.beginFill(c);
			s.graphics.drawRect(x,y,w,h);
			s.graphics.endFill();
			return s;
		}
		/**得到矩形和一个X*/
		public static getRectAndX(w:number,h:number,c:number=0,x:number=0,y:number=0):egret.Sprite
		{
			var s:egret.Sprite=this.getRect(w,h,c,x,y)
			s.addChild(this.getX(w,h,c,1,x,y));
			return s;
		}
		/**得到矩形和一个X*/
		public static getX(w:number,h:number,c:number=0,s:number=1,x:number=0,y:number=0):egret.Sprite
		{
			var container:egret.Sprite=new egret.Sprite;
			var l1:egret.Sprite=new egret.Sprite;
			l1.graphics.lineStyle(s,c);
			l1.graphics.moveTo(0,0);
			l1.graphics.lineTo(w,h);
			var l2:egret.Sprite=new egret.Sprite;
			l2.graphics.lineStyle(s,c);
			l2.graphics.moveTo(w,0);
			l2.graphics.lineTo(0,h);
			container.addChild(l1);
			container.addChild(l2);
			return container;
		}
		/**得到圆角矩形*/
		public static getRoundRect(w:number,h:number,c:number=0,ew:number=5,eh:number=5,x:number=0,y:number=0):egret.Sprite
		{
			var s:egret.Sprite=new egret.Sprite()
			s.graphics.beginFill(c);
			s.graphics.drawRoundRect(x,y,w,h,ew,eh);
			s.graphics.endFill();
			return s;
		}
		/**得到圆形*/
		public static getCircle(r:number,c:number=0,x:number=0,y:number=0):egret.Sprite
		{
			var s:egret.Sprite=new egret.Sprite();
			s.graphics.beginFill(c);
			s.graphics.drawCircle(x,y,r);
			s.graphics.endFill();
			return s;
		}
		/**得到多边形,side边数,rotation角度*/
		public static getPolygon(side:number=3,r:number=10,c:number=0,rotation:number=0):egret.Sprite
		{
			var s:egret.Sprite = new egret.Sprite;
			s.rotation=rotation;
			s.graphics.beginFill(c);
			for (var i:number =0; i <=side; i++) {
				var lineX:number =  Math.cos((i * (360 / side) * Math.PI / 180)) * r;
				var lineY:number =  Math.sin((i * (360 / side) * Math.PI / 180)) * r;
				if (i == 0) s.graphics.moveTo(lineX,lineY);
				else		s.graphics.lineTo(lineX, lineY);
				
			}
			s.graphics.endFill();
			return s;
		}
		/**得到圆角矩形与三角形合体rc是正方形颜色,pc是三角形颜色*/
		public static getArrowRoundRect(w:number,h:number,rc:number,pc:number=0,rotation:number=0):egret.Sprite
		{
			var s:egret.Sprite = new egret.Sprite;
			s.addChild(this.getRoundRect(w,h,rc));
			var p:egret.Sprite=this.getPolygon(3,w/3,pc,30+rotation);
			p.x=s.width>>1;p.y=s.height>>1;
			s.addChild(p);
			return s;
		}
		/**得到滚动条的bar*/
		public static getScrollLineBar(w:number,h:number,c:number):egret.Sprite
		{
			var s:egret.Sprite = new egret.Sprite;
			var _h:number=h/3;
			for(var i:number=0;i<3;i++){
				var r:egret.Sprite=this.getRect(w,1,c,0,i*_h);
				s.addChild(r);
			}
			return s;
		}
		/**得到圆角矩形-加*/
		public static getAddRoundRect(w:number,h:number,c:number):egret.Sprite
		{
			var s:egret.Sprite = new egret.Sprite;
			s.addChild(this.getRoundRect(w,h,c));
			var r1:egret.Sprite=this.getRect(w/2,2,0,w/4,h/2-1);
			var r2:egret.Sprite=this.getRect(2,h/2,0,w/2-1,h/4);
			s.addChild(r1);
			s.addChild(r2);
			return s;
		}
		/**得到圆角矩形-减*/
		public static getRemoveRoundRect(w:number,h:number,c:number):egret.Sprite
		{
			var s:egret.Sprite = new egret.Sprite;
			s.addChild(this.getRoundRect(w,h,c));
			var r:egret.Sprite=this.getRect(w/2,2,0,w/4,h/2-1);
			s.addChild(r);
			return s;
		}
		/**得到带文字的圆角方形*/
		public static getRoundRectText(w:number,h:number,c:number,str:string="click"):egret.Sprite
		{
			var s:egret.Sprite = new egret.Sprite;
			s.addChild(this.getRoundRect(w,h,c));
			var text:egret.TextField=new egret.TextField;
			text.name="text";
			text.text=str;
			text.x=(s.width-text.width)>>1;
			text.y=(s.height-text.height)>>1;
			s.addChild(text);
			return s;
		}
		/**得到矩形-switchButton bc背景颜色，gc钩选的颜色,type为0是没有钩为1是有钩*/
		public static getSwitch(bc:number=0XFFFFFF,gc:number=0,type:number=0):egret.Sprite
		{
			var node:egret.Sprite=game.MoonUI.getRoundRect(80,50,bc,60,60);
			node.addChild(game.MoonUI.getCircle(22,gc,type==0?25:55,25));
			return node;
		}
		/**得到矩形-复选框 bc背景颜色，gc钩的颜色,type为0是没有钩为1是有钩*/
		public static getCheckBoxRect(bc:number=0XFFFFFF,gc:number=0,type:number=0):egret.Sprite
		{
			var s:egret.Sprite = new egret.Sprite;
			s.addChild(this.getRect(40,40,bc));
			if(type==1){
				var r:egret.Sprite=new egret.Sprite;
				r.graphics.beginFill(gc);
				r.graphics.moveTo(0,20);
				r.graphics.lineTo(20,36);r.graphics.lineTo(44,8);r.graphics.lineTo(36,0);r.graphics.lineTo(20,18);
				r.graphics.lineTo(12,8);r.graphics.lineTo(0,20);
				s.addChild(r);
			}
			return s;
		}
		/**得到矩形-单选框 bc背景颜色，gc钩的颜色,type为0是没有圆为1是有圆*/
		public static getRadioCircle(bc:number=0XFFFFFF,gc:number=0,type:number=0):egret.Sprite
		{
			var s:egret.Sprite = new egret.Sprite;
			s.addChild(this.getCircle(16,bc,16,16));
			s.graphics.lineStyle(1,0);
			if(type==1){
				var r:egret.Sprite=this.getCircle(8,gc,16,16)
				s.addChild(r);
			}
			return s;
		}
		/**得到矩形-网格
		 * rect.x是x轴数量
		 * rect.y是y轴数量
		 * rect.width是网格宽
		 * rect.height是网格高
		 * lc网格线颜色
		 * */
		public static getGridding(rect:egret.Rectangle,c:number=0):egret.Sprite
		{
			var s:egret.Sprite=new egret.Sprite;
			s.graphics.lineStyle(0.1,c);
			var disx:number=rect.width/rect.x;
			var disy:number=rect.height/rect.y;
			for(var i:number=0;i<rect.x;i++){
				s.graphics.moveTo(0,i*disy);
				s.graphics.lineTo(rect.width,i*disy);
			}
			for(i=0;i<rect.y;i++){
				s.graphics.moveTo(i*disx,0);
				s.graphics.lineTo(i*disx,rect.height);
			}
			return s;
		}
		/***得到爱心 */
		public static getHeart(r:number=15,c:number=0XFF0000):egret.Sprite
		{
			var s:egret.Sprite=new egret.Sprite;
			s.graphics.beginFill(c);
			s.graphics.moveTo(0,0);
			s.graphics.lineTo(0,-r*2)
			s.graphics.cubicCurveTo(r,-r*2.5,r*2,-r*1.5,0,0);  
			s.graphics.moveTo(0,0);
			s.graphics.lineTo(0,-r*2)
			s.graphics.cubicCurveTo(-r,-r*2.5,-r*2,-r*1.5,0,0);  	
			s.graphics.endFill();
			s.anchorOffsetX=-s.width/2;
			s.anchorOffsetY=-s.height;
			return s;
		}
    }
	export class FONT{
		public static fontName:string="黑体";
	}
	export class Label extends MoonContainer
	{
		private text:TextField;
		public constructor(str:string="",c:number=0XFFFFFF)
        {
			super();
			this.text=new TextField;
			this.text.textAlign = egret.HorizontalAlign.LEFT;
			this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
			this.text.text=str;
			this.text.textColor=c;
			this.text.fontFamily=game.FONT.fontName;
			this.addChild(this.text);
		}
		get textField():TextField
		{
			return this.text;
		}
	}
    //--------------
	export class LogManager
	{
		private static instance:LogManager;
		private txtSimple:egret.TextField;
		private txtMessage:egret.TextField;
		public static getIns():LogManager{
			if(this.instance == null){
					this.instance = new LogManager();
			}
			return this.instance;
		}
		/**请先调用初始化函数 */
		public init(stage:Stage):void
		{
			var txt:TextField;
			txt.textAlign = egret.HorizontalAlign.LEFT;
			stage.addChild(txt);
			this.txtSimple=txt;

			var txt:TextField=(new Label).textField;
			txt.size=25;
			stage.addChild(txt);
			this.txtMessage=txt;
		}
		/**每次都覆盖上一次信息 */
		public debug(value:string):void
		{
			this.txtSimple.text=value;
		}
		/**每次都覆盖上一次信息 */
		public log(value:string):void
		{
			//if(GameData.version==Const.VER_DEBUG) this.txtSimple.text=value;
		}
		/**显示所有信息 */
		public logMessage(value:string):void
		{
			//if(GameData.version==Const.VER_DEBUG) this.txtMessage.appendText(value+"\n");
		}
		public setLogColor(color:number):void
		{
			this.txtSimple.textColor=color;
		}
		public setLogMessageColor(color:number):void
		{
			this.txtMessage.textColor=color;
		}
	}
	export class BasicView extends MoonContainer
	{
		protected createText(x:number=0,y:number=0,s:string=""):TextField
		{
			var text:TextField=(new Label).textField;
			text.x=x;text.y=y;text.text=s;
			this.addChild(text);
			return text;
		}
		protected createRect(w:number,h:number,c:number=0,x:number=0,y:number=0):Sprite
		{
			var sprite:Sprite=game.MoonUI.getRect(w,h,c,x,y);
			this.addChild(sprite);
			return sprite;
		}
		protected createCircle(r:number,c:number=0,x:number=0,y:number=0):Sprite
		{
			var sprite:Sprite=game.MoonUI.getCircle(r,c,x,y);
			this.addChild(sprite);
			return sprite;
		}
		protected createRectBySprite(s:Sprite,w:number,h:number,c:number=0,x:number=0,y:number=0):void
		{
			s.graphics.clear();
			s.graphics.beginFill(c);
			s.graphics.drawRect(x,y,w,h);
			s.graphics.endFill();
		}
		/**创建纯色背景 */
		protected createBackground(c:number=0,a:number=1):Sprite
		{
			var s:Sprite=this.createRect(this.stageWidth,this.stageHeight,c);
			s.alpha=a;s.touchEnabled=true;//用于阻止下层点击事件
			return s;
		}
		/**创建渐变色背景 */
		protected createBgGradientFill(c1:number=0X017AC3,c2:number=0XDDDDDD):Sprite
		{
			var w:number=this.stageWidth;
			var h:number=this.stageHeight;
			var matrix:egret.Matrix = new egret.Matrix();
			matrix.createGradientBox(w,h,Math.PI/2);
			var sprite:Sprite=new Sprite;
			sprite.graphics.beginGradientFill(egret.GradientType.LINEAR,[c1,c2],[1,1],[0,255],matrix);
			sprite.graphics.drawRect(0,0,w,h);
			this.addChild(sprite);
			return sprite;
		}
	}
	export class GameView extends BasicView
	{
		protected isPlay:boolean;
		protected play():void
		{
			this.stop();
			this.isPlay=true;
			egret.startTick(this.loop, this);
		}
		protected stop():void
		{
			this.isPlay=false;
			egret.stopTick(this.loop, this);
		}
		protected loop(n:number):boolean
		{
			traceSimple(n);
			return true;
		}
		protected createButton(name:string,x:number=0,y:number=0):game.BasicButton
		{
			var btn:game.BasicButton=new game.BasicButton
			btn.label=name;btn.x=x;btn.y=y;
			this.addChild(btn);
			return btn;
		}
	}
	export interface IOnoff{
		open():void;
		close():void;
	}
	export class BasicButton extends MoonContainer implements IOnoff
	{
		protected statusNormal:DisplayObject;
		protected statusDown:DisplayObject;
		protected skinContainer:egret.DisplayObjectContainer;
		protected text:TextField;
		/**皮肤大小随字体大小变化 */
		public skinAutoScale:boolean=true;
		public constructor(normal:DisplayObject=null,down:DisplayObject=null)
        {
			super();
			this.statusNormal=normal||Skin.buttonNormal;
			this.statusDown=down||Skin.buttonDown;
			this.skinContainer=new egret.DisplayObjectContainer;
			this.addChild(this.skinContainer);
			this.updateSkin(this.statusNormal);
			this.text=(new Label).textField;
			this.addChild(this.text);

			this.open();
		}
		public open():void
		{
			this.close();
			this.touchEnabled=true;
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
		}
		public close():void
		{
			this.touchEnabled=false;
			this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
			if(this.stage) this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
		}
		public setLabelPoint(x:number,y:number):void
		{
			this.text.anchorOffsetX=0;
			this.text.anchorOffsetY=0;
			this.text.x=x;this.text.y=y;
		}
		set labelCircle(value:string)
		{
			this.text.text=value;
			this.skinAutoScale=false;
			this.text.x=this.text.y=0;
			this.text.anchorOffsetX=this.text.textWidth>>1;
			this.text.anchorOffsetY=this.text.textHeight>>1;
		}
		set labelColor(value:number)
		{
			this.text.textColor=value;
		}
		set label(value:string)
		{
			this.text.text=value;
			var width:number=this.text.width+20;
			this.setSkinSize();
			this.setTextPosition();
		}
		get label():string
		{
			return this.text.text;
		}
		get textFild():TextField
		{
			return this.text;
		}
		/**设置富文字 {text:"string",style:{"size":50,"textColor":0}}*/
		public setTextFlow(textFlow:egret.ITextElement[]):void
		{
			this.text.textFlow=textFlow;
			this.setSkinSize();
			this.setTextPosition();
		}
		public setSkinNormal():void
		{
			this.updateSkin(this.statusNormal);
		}
		public setSkinDown():void
		{
			this.updateSkin(this.statusDown);
		}
		protected onTouch(e:egret.TouchEvent):void
		{
			if(e.type==egret.TouchEvent.TOUCH_BEGIN){
				this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
				this.updateSkin(this.statusDown);
			}else{
				this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
				this.updateSkin(this.statusNormal);
			}	
			this.dispEvent(MoonEvent.CLICK);									
		}
		protected get textWidth():number
		{
			return this.text.width+20;
		}
		protected get textHeight():number
		{
			return this.text.height+20;
		}
		protected setSkinSize():void
		{
			if(this.skinAutoScale&&this.text.text!=""){
				var scale:number=this.textWidth/this.statusNormal.width;
				if(this.statusNormal instanceof Bitmap){
					this.statusNormal.width=this.textWidth;
					this.statusDown.width=this.textWidth;
				}else{
					this.statusNormal.scaleX=this.statusDown.scaleX=scale;
				} 
				var height:number=this.textHeight;
				if(height>=this.statusNormal.height){
					scale=height/this.statusNormal.height;
					if(this.statusNormal instanceof Bitmap){
						this.statusNormal.height=this.textHeight;
						this.statusDown.height=this.textHeight;
					}else{ 
						this.statusNormal.scaleY=this.statusDown.scaleY=scale;
					}
				}
			}
		}
		protected setTextPosition():void
		{
			this.text.anchorOffsetX=this.text.width>>1;
			this.text.anchorOffsetY=this.text.height>>1;
			if(this.textWidth>this.statusNormal.width)		this.text.x=this.textWidth>>1;
			else											this.text.x=this.statusNormal.width>>1;
			if(this.textHeight>this.statusNormal.height)	this.text.y=this.textHeight>>1;
			else											this.text.y=this.statusNormal.height>>1;
		}
		protected updateSkin(skin:egret.DisplayObject):void
		{
			this.skinContainer.removeChildren();
			this.skinContainer.addChild(skin);
		}
		public dispose():void
		{
			this.close();
			super.dispose();
		}
	}
	export class Skin
	{
		public static get randomRect():Sprite{return game.MoonUI.getRect(60,60,game.Color.random)};
		public static get randomCircle():Sprite{return game.MoonUI.getCircle(50,game.Color.random)};
		/**默认点 */
		public static get pointNormal():Sprite{return game.MoonUI.getCircle(6,game.Color.black)};
		public static get pointDown():Sprite{return game.MoonUI.getCircle(6,game.Color.gray)};
		/**默认按钮 */
		public static get buttonNormal():Sprite{return game.MoonUI.getRect(60,60,game.Color.skinNormal)};
		public static get buttonDown():Sprite{return game.MoonUI.getRect(60,60,game.Color.skinDown)};
		/**默认单选框 */
		public static get radioOff():Sprite{return game.MoonUI.getRadioCircle(game.Color.white,game.Color.white)};
		public static get radioOn():Sprite{return game.MoonUI.getRadioCircle(game.Color.white,game.Color.black,1)};
		/**默认复选框 */
		public static get checkBoxOff():Sprite{return game.MoonUI.getCheckBoxRect(game.Color.white,game.Color.white)};
		public static get checkBoxOn():Sprite{return game.MoonUI.getCheckBoxRect(game.Color.white,game.Color.black,1)};
		/**默认开关 */
		public static get switchOff():Sprite{return game.MoonUI.getSwitch(game.Color.skinNormal,game.Color.white)};
		public static get switchOn():Sprite{return game.MoonUI.getSwitch(game.Color.skinNormal,game.Color.white,1)};
		/**默认进度条 */
		public static get progressBackground():Sprite{return game.MoonUI.getRect(300,20,game.Color.skinNormal);}
		public static get progressValue():Sprite{return game.MoonUI.getRect(300,20,game.Color.skinDown);}
		/**默认滑动器 */
		public static get sliderBackground():Sprite{return game.MoonUI.getRect(300,10,game.Color.skinNormal);}
		public static get sliderValue():Sprite{return game.MoonUI.getRect(300,10,game.Color.skinDown);}
		public static get sliderBar():Sprite{return game.MoonUI.getCircle(15,game.Color.white);}
		/**默认滚动条 */
		public static get scrollBar():Sprite{return game.MoonUI.getRect(10,10,game.Color.skinNormal);}

		public static getRodatioButton(label:string):BasicButton
		{
			var btn:BasicButton=new BasicButton(game.Skin.radioOff,game.Skin.radioOn);
			btn.skinAutoScale=false;
			btn.label=label;
			btn.labelColor=game.Color.black;
            btn.setLabelPoint(40,0);
			return btn;
		}
		public static getCheckBox(label:string):MoreSkinButton
		{
			var skins:any[]=[game.Skin.checkBoxOff,game.Skin.checkBoxOff,game.Skin.checkBoxOn,game.Skin.checkBoxOn]
            var btn:game.MoreSkinButton=new game.MoreSkinButton(skins);
			btn.skinAutoScale=false;
			btn.label=label;
            btn.toggleSwitch=true;
            btn.labelColor=game.Color.black;
            btn.setLabelPoint(50,2);
			return btn;
		}
	}
	export class Color
	{
		public static get random():number{return Math.random()*0XFFFFFF};
		public static get white():number {return 0XFFFFFF};
		public static get black():number {return 0X000000};
		public static get gray():number {return 0X666666};
		public static get red():number {return 0XFF0000};
		public static get green():number {return 0X00FF00};
		public static get bule():number {return 0X0000FF};
		public static get skinNormal():number{return 0X15191C};
		public static get skinDown():number{return 0X999999};
		public static get titleBackground():number{return 0X20262B};
		public static getRandomArray(count:number):number[]{
			var colors:number[]=[];
			for(var i:number=0;i<count;i++) colors.push(Math.random()*0XFFFFFF);
			return colors;
		};
		/** 可改变颜色的亮暗,value值是-255到255*/
		public static lightenDarkenColor(color:number, value:number):number {  
			var r = (color >> 16) + value;
			if (r > 255) r = 255;
			else if (r < 0) r = 0;
			var b = ((color >> 8) & 0x00FF) + value;
			if (b > 255) b = 255;
			else if (b < 0) b = 0;
			var g = (color & 0x0000FF) + value;
			if (g > 255) g = 255;
			else if (g < 0) g = 0;
			return (g | (b << 8) | (r << 16));
		}
	}
	export class MoreSkinButton extends BasicButton
	{
		protected _currentPage:number=0;
		protected skins:any[];
		protected _toggleSwitch:Boolean;
		public constructor(skins:any[])
        {
			super(skins[0],skins[1]);
			this.skins=skins;
		}
		/**更新到第几个按钮同时刷新皮肤 */
		public updatePage(value:number)
		{
			this.currentPage=value;
			this.setSkinNormal();
		}
		set currentPage(value:number)
		{
			value=value*2==this.skins.length?0:value;
			this._currentPage=value;
			this.statusNormal=this.skins[value*2];
			this.statusDown=this.skins[(value*2)+1];
			this.setSkinSize();
		}
		get currentPage():number
		{
			return this._currentPage;
		}
		set toggleSwitch(value:Boolean)
		{
			this._toggleSwitch=value;
		}
		protected onTouch(e:egret.TouchEvent):void
		{
			if(e.type==egret.TouchEvent.TOUCH_END){
				if(this._toggleSwitch){
					this.currentPage=1-this.currentPage;
				}
			}
			super.onTouch(e);								
		}
	}

	export class Imag extends MoonContainer
	{
	    protected skinName: string;
		protected skinImag: Scale9Image;
		protected position: egret.Point;
        public bgWidth:number;
        public bgHeight:number;
		public constructor(skinName:string="")
        {
            super();
            if(skinName!=""){
                this.skinName=skinName;
                this.position=new egret.Point();
                this.addBitmap();
                this.bgWidth=this.width;
                this.bgHeight=this.height;
            }
	    }
		public addBitmap():void
        {
            if(RES.hasRes(this.skinName)){
                this.skinImag=new Scale9Image(this.skinName);
                this.skinImag.smoothing=true;
                this.addChild(this.skinImag);
            }else{
                //trace("找不到资源："+this.skinName)
                egret.error("找不到key"+this.skinName);
            }
        }
        /**设置锚点在中心 */
        public setAnchorCenter():void
        {
            this.anchorOffsetX=this.width>>1;
            this.anchorOffsetY=this.height>>1;
        }
		
	}export class basicContainer extends Imag{
        protected items:any[]=[];
        protected index:number=0;
        // protected skinImage:Scale9Image;
        
        public addItem(item:any):void{
            this.items.push(item);
        }
        public removeItem(index:number):void{
            if(this.hasItem(index)){
                this.items.splice(index,1);
            }
        }
		public getItem(index:number):any{
			return this.items[index];
		}
        public hasItem(index:number):boolean{
			return this.items.length>0&&(index>=0&&index<this.items.length);
		}
		public getNextItem():any{
			return this.items[this.index++]; 
		}
		public reset():void{
			this.index=0;
		}
    }
	export interface ILayout{  
		layout(type:string,interval:number):void;
    }
export class imageChartlet extends basicContainer implements ILayout{
        public constructor(skinName:string,count:number=1){
            super();
            this.skinName=skinName;
            for(var i:number=0;i<count;i++){
                this.items.push(this.getBitmap());
            }
        }
         private getBitmap():Scale9Image
         {
             var skin:Scale9Image;
             if(RES.hasRes(this.skinName)){
                 skin=new Scale9Image(this.skinName);
                 this.addChild(skin);
             }else{
                 //trace("找不到资源："+this.skinName)
             }
             return skin;
         }
        /**竖排获横排 */
        public layout(type:string,interval:number=0):void
        {
            if(type==Const.VERTICAL)        SimpleLayout.displayRank(this.items,1,interval,interval,0,0);
            else if(type==Const.HORIZONTAL) SimpleLayout.displayRank(this.items,this.items.length,interval,interval,0,0);
        }
        /**多行排列，xNum是一排排几个 */
        public setMultiLine(xNum:number,interval:number=0):void
        {
            SimpleLayout.displayRank(this.items,xNum,interval,interval,0,0);
        }
    }
	export class SimpleLayout{
		/**参数：数组,X轴个数,X轴距离,Y轴距离,X轴位置,Y轴位置,正排/反排 */
		public static displayRank(array:any[],xNum:number=1,xDis:number=0,yDis:number=0,x:number=0,y:number=0,sign:number=1):void
		{
			var display:egret.DisplayObject;
			for(var i:number=0;i<array.length;i++){
				display=array[i];
				display.x=x+Math.floor(i%xNum)*(display.width+xDis)*sign;
				display.y=y+Math.floor(i/xNum)*(display.height+yDis)*sign;
			}
		}
	}
    /**图像动画类 */
    export class imageAnimation extends basicContainer{
        protected timer:egret.Timer;
        // protected _ftp:number=MOON_FTP;
        public loop:boolean;
        public constructor(skinName:string="",start:number,end:number,type:string="png"){
            super();
            for(var i:number=start;i<=end;i++){
                this.items.push(skinName+i+"_"+type);
            }
            this.skinName=this.getItem(0);
            this.addBitmap();
            this.createTime();
        }
        protected createTime():void
        {
            if(this.timer==null){
                this.timer=new egret.Timer(1000/this.ftp,0);
                this.timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
            }
        } 
        protected onTimer():void
        {
            if(this.hasItem(++this.index)){
                this.gotoAndStop(this.index);
            }else{
                if(this.loop){
                    this.reset();
                    this.gotoAndStop(this.index);
                }else{
                    this.timer.stop();
                }
            }
        }
        public gotoAndStop(index:number):void{
            if(this.hasItem(index)){
                this.index=index;
                this.skinName=this.getItem(index);
                this.update();
            }else{
                //trace("gotoAndStop的参数请保持在0到"+this.items.length,"当前index="+index)
            }
        }
        public gotoAndPlay(index:number):void{
            this.index=index;
            this.play();
        }
        public play():void{
            this.timer.start();
        }
        public stop():void{
            this.timer.stop();
        }
        public update():void
        {
            if(RES.hasRes(this.skinName)){
                this.skinImag.texture=RES.getRes(this.skinName);
            }else{
                //trace("找不到资源："+this.skinName);
            }
        }
        public get currentFrame():number{return this.index}
        // public get ftp(){return this._ftp}
        public set ftp(value:number){
            // this._ftp=value;
            this.removeTime();
            this.createTime();
        }
        protected removeTime():void
        {
            if(this.timer!=null){
                this.timer.stop();
                this.timer.removeEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
                this.timer=null;
            }
        }
        public dispose():void
        {
            super.dispose();
            this.removeTime();
        }
    }
    /**图像布局类 */
    export class imageLayout{
        private tw:number;
        private th:number;
        private image:DisplayObject;
        private static instance:imageLayout;
		public static getIns():imageLayout{
			if(this.instance == null) this.instance = new imageLayout();
			return this.instance;
		}
        public setImage(image:DisplayObject):void{
            this.image=image;
        }
		public setStageWH(w:number,h:number):void{
            this.tw=w;this.th=h;
        }
        public setTop(distance:number){
            this.image.y=distance;
        }
        public setBottom(distance:number):void{
            this.image.y=this.th-this.image.height-distance;
        }
        public setLeft(distance:number):void{
            this.image.x=distance;
        }
        public setRight(distance:number):void{
            this.image.x=this.tw-this.image.width-distance;
        }
        public setCenterX(distance:number=0):void{
            this.image.x=((this.tw-this.image.width)>>1)+distance;
        }
        public setCenterY(distance:number=0):void{
            this.image.y=((this.tw-this.image.width)>>1)+distance;
        }
        // public setCenterXByPanent(image:DisplayObject):void{
        //     if(image.parent instanceof Image) image.x=(image.parent.bgWidth-image.width)>>1;
        //     else image.x=(image.parent.width-image.width)>>1;
        // }
        // public setCenterYByPanent(image:DisplayObject):void{
        //     if(image.parent instanceof Image) image.y=(image.parent.bgHeight-image.height)>>1;
        //     else image.y=(image.parent.height-image.height)>>1;
        // }
    }
	/**九宫格*/
	export class Scale9Image extends Bitmap
	{
		public constructor(name:string,rect:Rectangle=null)
        {
            super();
			if(RES.hasRes(name)){
				this.texture = RES.getRes(name);
				this.scale9Grid=rect||new Rectangle(8,8,2,2);
			}else{
				 egret.error("找不到资源："+name);
			}
		}
	}

}