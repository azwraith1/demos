var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
var Stage = (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Stage;
}(egret.Stage));
__reflect(Stage.prototype, "Stage");
;
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextField;
}(egret.TextField));
__reflect(TextField.prototype, "TextField");
;
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sprite;
}(egret.Sprite));
__reflect(Sprite.prototype, "Sprite");
;
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bitmap;
}(egret.Bitmap));
__reflect(Bitmap.prototype, "Bitmap");
;
var DisplayObject = (function (_super) {
    __extends(DisplayObject, _super);
    function DisplayObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DisplayObject;
}(egret.DisplayObject));
__reflect(DisplayObject.prototype, "DisplayObject");
;
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(egret.Rectangle));
__reflect(Rectangle.prototype, "Rectangle");
;
var traceSimple = function () {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var str = "";
    for (var i = 0; i < arg.length; i++) {
        str += arg[i] + ",";
    }
    str = str.substr(0, str.length - 1);
    game.LogManager.getIns().log(str);
};
var game;
(function (game) {
    var Const = (function () {
        function Const() {
        }
        /**布局 横版*/
        Const.HORIZONTAL = "horizontal";
        /**布局 竖版*/
        Const.VERTICAL = "vertical";
        /**形状 方块*/
        Const.SHAPE_RECT = "shape rect";
        /**形状 圆角方块*/
        Const.SHAPE_RECT_ROUND = "shape rect round";
        /**形状 圆块*/
        Const.SHAPE_CIRCLE = "shape circle";
        /**版本 调试*/
        Const.VER_DEBUG = "debug";
        /**版本 发布*/
        Const.VER_RELEASE = "release";
        return Const;
    }());
    game.Const = Const;
    __reflect(Const.prototype, "game.Const");
    var MoonContainer = (function (_super) {
        __extends(MoonContainer, _super);
        function MoonContainer() {
            var _this = _super.call(this) || this;
            _this.dataEvent = new Object;
            _this.init();
            _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
            return _this;
        }
        MoonContainer.prototype.addToStage = function () {
            this.render();
        };
        /**加载到舞台之前调用 */
        MoonContainer.prototype.init = function () {
        };
        /**加载到舞台之后调用 */
        MoonContainer.prototype.render = function () {
            this.stageWidth = this.stage.stageWidth;
            this.stageHeight = this.stage.stageHeight;
        };
        /**发布事件*/
        MoonContainer.prototype.dispEvent = function (type, data, dataType) {
            if (data === void 0) { data = null; }
            if (dataType === void 0) { dataType = null; }
            if (this.dataEvent) {
                var fun = this.dataEvent[type];
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
        };
        /**帧听事件*/
        MoonContainer.prototype.addEvent = function (type, listener, thisObj) {
            if (thisObj === void 0) { thisObj = null; }
            if (this.dataEvent && this.dataEvent[type] == null) {
                listener["this"] = thisObj;
                this.dataEvent[type] = listener;
            }
        };
        /**删除事件*/
        MoonContainer.prototype.removeEvent = function (type, listener) {
            if (this.dataEvent && this.dataEvent[type]) {
                delete this.dataEvent[type];
            }
        };
        /**把自己从父级删除*/
        MoonContainer.prototype.removeFromParent = function (value) {
            if (value === void 0) { value = false; }
            var _parent = this.parent;
            if (value)
                this.dispose();
            if (_parent && _parent.contains(this))
                _parent.removeChild(this);
            _parent = null;
        };
        /**删除所有的*/
        MoonContainer.prototype.removeChildAll = function (beginIndex, endIndex, dispose) {
            if (beginIndex === void 0) { beginIndex = 0; }
            if (endIndex === void 0) { endIndex = 2147483647; }
            if (dispose === void 0) { dispose = false; }
            if (endIndex < 0 || endIndex >= this.numChildren)
                endIndex = this.numChildren - 1;
            for (var i = beginIndex; i <= endIndex; ++i)
                this.removeChildIndex(beginIndex, dispose);
        };
        /**删除index层的*/
        MoonContainer.prototype.removeChildIndex = function (beginIndex, dispose) {
            if (beginIndex >= 0 || beginIndex < this.numChildren) {
                var basicContent = this.getChildAt(beginIndex);
                if (basicContent instanceof MoonContainer) {
                    basicContent.removeFromParent(dispose);
                }
                else {
                    var display = this.getChildAt(beginIndex);
                    if (display.parent)
                        display.parent.removeChild(display);
                }
            }
        };
        /**销毁*/
        MoonContainer.prototype.dispose = function () {
            this.removeChildAll(0, -1, true);
            this.dataEvent = null;
            this.stageWidth = null;
            this.stageHeight = null;
        };
        return MoonContainer;
    }(egret.DisplayObjectContainer));
    game.MoonContainer = MoonContainer;
    __reflect(MoonContainer.prototype, "game.MoonContainer");
    var MoonEvent = (function (_super) {
        __extends(MoonEvent, _super);
        function MoonEvent(type, data, currentTarget) {
            if (type === void 0) { type = ""; }
            if (data === void 0) { data = null; }
            if (currentTarget === void 0) { currentTarget = null; }
            var _this = _super.call(this) || this;
            _this.type = type;
            _this.data = data;
            _this.currentTarget = currentTarget;
            return _this;
        }
        MoonEvent.MOUSE_OVER = "event-over"; //移进
        MoonEvent.MOUSE_OUT = "event-out"; //移出
        MoonEvent.MOUSE_DOWN = "event-down"; //点下
        MoonEvent.MOUSE_MOVE = "event-move"; //移动
        MoonEvent.MOUSE_UP = "event-up"; //弹开
        MoonEvent.CLICK = "event-click"; //单击
        //tabbar event
        MoonEvent.CHANGE = "change"; //更换
        MoonEvent.COMPLETE = "complete"; //完成
        MoonEvent.RENDER_COMPLETE = "render complete"; //渲染完成
        MoonEvent.UPDATE = "update"; //更新
        MoonEvent.START = "start"; //开始
        MoonEvent.MOVE = "move"; //移动
        MoonEvent.OVER = "over"; //结束
        MoonEvent.PAUSE = "pause"; //暂停
        MoonEvent.STOP = "stop"; //停止
        MoonEvent.PLAY = "play"; //播放
        MoonEvent.OPEN = "open"; //开启
        MoonEvent.CLOSE = "close"; //关闭
        return MoonEvent;
    }(egret.EventDispatcher));
    game.MoonEvent = MoonEvent;
    __reflect(MoonEvent.prototype, "game.MoonEvent");
    var MoonDisplayObject = (function (_super) {
        __extends(MoonDisplayObject, _super);
        function MoonDisplayObject() {
            var _this = _super.call(this) || this;
            _this._type = Const.SHAPE_RECT;
            _this._color = 0;
            _this.display = new egret.Sprite;
            _this.bg = new egret.Sprite;
            return _this;
        }
        Object.defineProperty(MoonDisplayObject.prototype, "type", {
            get: function () { return this._type; },
            set: function (value) { this._type = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoonDisplayObject.prototype, "color", {
            get: function () { return this._color; },
            set: function (value) { this._color = value; this._data.c = value; this.draw(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoonDisplayObject.prototype, "data", {
            /**{w:1,h:1,r:1,c:1,ew:1,eh:1} */
            set: function (value) { this._data = value; this.draw(); },
            enumerable: true,
            configurable: true
        });
        MoonDisplayObject.prototype.draw = function () {
            this._color = this._data.c;
            this.display.graphics.clear();
            this.display = this.getDisplay(this._data);
            this.addChild(this.display);
            this.setPosition();
        };
        MoonDisplayObject.prototype.setPosition = function () {
            if (this._hasBg && this.type != Const.SHAPE_CIRCLE) {
                this.display.x = (this.bg.width - this.display.width) >> 1;
                this.display.y = (this.bg.height - this.display.height) >> 1;
            }
        };
        MoonDisplayObject.prototype.setBackground = function (color, side) {
            if (side === void 0) { side = 1; }
            this._hasBg = true;
            var d = this._data;
            var o = {};
            for (var i in d) {
                o[i] = d[i];
            }
            o.c = color;
            if (o.w)
                o.w = o.w + side * 2;
            if (o.h)
                o.h = o.h + side * 2;
            if (o.r)
                o.r = o.r + side;
            this.bg.graphics.clear();
            this.bg = this.getDisplay(o);
            this.addChildAt(this.bg, 0);
            this.setPosition();
        };
        MoonDisplayObject.prototype.getDisplay = function (o) {
            switch (this.type) {
                case Const.SHAPE_RECT:
                    return MoonUI.getRect(o.w, o.h, o.c);
                case Const.SHAPE_RECT_ROUND:
                    return MoonUI.getRoundRect(o.w, o.h, o.c, o.ew, o.eh);
                case Const.SHAPE_CIRCLE:
                    return MoonUI.getCircle(o.r, o.c);
            }
        };
        return MoonDisplayObject;
    }(egret.Sprite));
    game.MoonDisplayObject = MoonDisplayObject;
    __reflect(MoonDisplayObject.prototype, "game.MoonDisplayObject");
    var MoonUI = (function () {
        function MoonUI() {
        }
        Object.defineProperty(MoonUI, "randomColor", {
            /**得到随机色*/
            get: function () {
                return Math.random() * 0XFFFFFF;
            },
            enumerable: true,
            configurable: true
        });
        /**得到矩形框*/
        MoonUI.getLineRect = function (w, h, c, s, x, y) {
            if (c === void 0) { c = 0; }
            if (s === void 0) { s = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var node = new egret.Sprite();
            node.graphics.lineStyle(s, c);
            node.graphics.drawRect(x, y, w, h);
            node.graphics.endFill();
            return node;
        };
        /**得到圆形框*/
        MoonUI.getLineCircle = function (r, c, s, x, y) {
            if (c === void 0) { c = 0; }
            if (s === void 0) { s = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var node = new egret.Sprite();
            node.graphics.lineStyle(s, c);
            node.graphics.drawCircle(x, y, r);
            node.graphics.endFill();
            return node;
        };
        /**得到渐变矩形 a为角度偏移率0,0.5,1,2分别为四个正方向*/
        MoonUI.getMatrixRect = function (w, h, c1, c2, a) {
            if (c1 === void 0) { c1 = 0; }
            if (c2 === void 0) { c2 = 0; }
            if (a === void 0) { a = 0; }
            var node = new egret.Sprite();
            var matrix = new egret.Matrix();
            matrix.createGradientBox(w, h, Math.PI * a, 0, 0);
            node.graphics.beginGradientFill(egret.GradientType.LINEAR, [c1, c2], [1, 1], [0, 255], matrix);
            node.graphics.drawRect(0, 0, w, h);
            node.graphics.endFill();
            return node;
        };
        /**得到矩形*/
        MoonUI.getRect = function (w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new egret.Sprite();
            s.graphics.beginFill(c);
            s.graphics.drawRect(x, y, w, h);
            s.graphics.endFill();
            return s;
        };
        /**得到矩形和一个X*/
        MoonUI.getRectAndX = function (w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = this.getRect(w, h, c, x, y);
            s.addChild(this.getX(w, h, c, 1, x, y));
            return s;
        };
        /**得到矩形和一个X*/
        MoonUI.getX = function (w, h, c, s, x, y) {
            if (c === void 0) { c = 0; }
            if (s === void 0) { s = 1; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var container = new egret.Sprite;
            var l1 = new egret.Sprite;
            l1.graphics.lineStyle(s, c);
            l1.graphics.moveTo(0, 0);
            l1.graphics.lineTo(w, h);
            var l2 = new egret.Sprite;
            l2.graphics.lineStyle(s, c);
            l2.graphics.moveTo(w, 0);
            l2.graphics.lineTo(0, h);
            container.addChild(l1);
            container.addChild(l2);
            return container;
        };
        /**得到圆角矩形*/
        MoonUI.getRoundRect = function (w, h, c, ew, eh, x, y) {
            if (c === void 0) { c = 0; }
            if (ew === void 0) { ew = 5; }
            if (eh === void 0) { eh = 5; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new egret.Sprite();
            s.graphics.beginFill(c);
            s.graphics.drawRoundRect(x, y, w, h, ew, eh);
            s.graphics.endFill();
            return s;
        };
        /**得到圆形*/
        MoonUI.getCircle = function (r, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new egret.Sprite();
            s.graphics.beginFill(c);
            s.graphics.drawCircle(x, y, r);
            s.graphics.endFill();
            return s;
        };
        /**得到多边形,side边数,rotation角度*/
        MoonUI.getPolygon = function (side, r, c, rotation) {
            if (side === void 0) { side = 3; }
            if (r === void 0) { r = 10; }
            if (c === void 0) { c = 0; }
            if (rotation === void 0) { rotation = 0; }
            var s = new egret.Sprite;
            s.rotation = rotation;
            s.graphics.beginFill(c);
            for (var i = 0; i <= side; i++) {
                var lineX = Math.cos((i * (360 / side) * Math.PI / 180)) * r;
                var lineY = Math.sin((i * (360 / side) * Math.PI / 180)) * r;
                if (i == 0)
                    s.graphics.moveTo(lineX, lineY);
                else
                    s.graphics.lineTo(lineX, lineY);
            }
            s.graphics.endFill();
            return s;
        };
        /**得到圆角矩形与三角形合体rc是正方形颜色,pc是三角形颜色*/
        MoonUI.getArrowRoundRect = function (w, h, rc, pc, rotation) {
            if (pc === void 0) { pc = 0; }
            if (rotation === void 0) { rotation = 0; }
            var s = new egret.Sprite;
            s.addChild(this.getRoundRect(w, h, rc));
            var p = this.getPolygon(3, w / 3, pc, 30 + rotation);
            p.x = s.width >> 1;
            p.y = s.height >> 1;
            s.addChild(p);
            return s;
        };
        /**得到滚动条的bar*/
        MoonUI.getScrollLineBar = function (w, h, c) {
            var s = new egret.Sprite;
            var _h = h / 3;
            for (var i = 0; i < 3; i++) {
                var r = this.getRect(w, 1, c, 0, i * _h);
                s.addChild(r);
            }
            return s;
        };
        /**得到圆角矩形-加*/
        MoonUI.getAddRoundRect = function (w, h, c) {
            var s = new egret.Sprite;
            s.addChild(this.getRoundRect(w, h, c));
            var r1 = this.getRect(w / 2, 2, 0, w / 4, h / 2 - 1);
            var r2 = this.getRect(2, h / 2, 0, w / 2 - 1, h / 4);
            s.addChild(r1);
            s.addChild(r2);
            return s;
        };
        /**得到圆角矩形-减*/
        MoonUI.getRemoveRoundRect = function (w, h, c) {
            var s = new egret.Sprite;
            s.addChild(this.getRoundRect(w, h, c));
            var r = this.getRect(w / 2, 2, 0, w / 4, h / 2 - 1);
            s.addChild(r);
            return s;
        };
        /**得到带文字的圆角方形*/
        MoonUI.getRoundRectText = function (w, h, c, str) {
            if (str === void 0) { str = "click"; }
            var s = new egret.Sprite;
            s.addChild(this.getRoundRect(w, h, c));
            var text = new egret.TextField;
            text.name = "text";
            text.text = str;
            text.x = (s.width - text.width) >> 1;
            text.y = (s.height - text.height) >> 1;
            s.addChild(text);
            return s;
        };
        /**得到矩形-switchButton bc背景颜色，gc钩选的颜色,type为0是没有钩为1是有钩*/
        MoonUI.getSwitch = function (bc, gc, type) {
            if (bc === void 0) { bc = 0XFFFFFF; }
            if (gc === void 0) { gc = 0; }
            if (type === void 0) { type = 0; }
            var node = game.MoonUI.getRoundRect(80, 50, bc, 60, 60);
            node.addChild(game.MoonUI.getCircle(22, gc, type == 0 ? 25 : 55, 25));
            return node;
        };
        /**得到矩形-复选框 bc背景颜色，gc钩的颜色,type为0是没有钩为1是有钩*/
        MoonUI.getCheckBoxRect = function (bc, gc, type) {
            if (bc === void 0) { bc = 0XFFFFFF; }
            if (gc === void 0) { gc = 0; }
            if (type === void 0) { type = 0; }
            var s = new egret.Sprite;
            s.addChild(this.getRect(40, 40, bc));
            if (type == 1) {
                var r = new egret.Sprite;
                r.graphics.beginFill(gc);
                r.graphics.moveTo(0, 20);
                r.graphics.lineTo(20, 36);
                r.graphics.lineTo(44, 8);
                r.graphics.lineTo(36, 0);
                r.graphics.lineTo(20, 18);
                r.graphics.lineTo(12, 8);
                r.graphics.lineTo(0, 20);
                s.addChild(r);
            }
            return s;
        };
        /**得到矩形-单选框 bc背景颜色，gc钩的颜色,type为0是没有圆为1是有圆*/
        MoonUI.getRadioCircle = function (bc, gc, type) {
            if (bc === void 0) { bc = 0XFFFFFF; }
            if (gc === void 0) { gc = 0; }
            if (type === void 0) { type = 0; }
            var s = new egret.Sprite;
            s.addChild(this.getCircle(16, bc, 16, 16));
            s.graphics.lineStyle(1, 0);
            if (type == 1) {
                var r = this.getCircle(8, gc, 16, 16);
                s.addChild(r);
            }
            return s;
        };
        /**得到矩形-网格
         * rect.x是x轴数量
         * rect.y是y轴数量
         * rect.width是网格宽
         * rect.height是网格高
         * lc网格线颜色
         * */
        MoonUI.getGridding = function (rect, c) {
            if (c === void 0) { c = 0; }
            var s = new egret.Sprite;
            s.graphics.lineStyle(0.1, c);
            var disx = rect.width / rect.x;
            var disy = rect.height / rect.y;
            for (var i = 0; i < rect.x; i++) {
                s.graphics.moveTo(0, i * disy);
                s.graphics.lineTo(rect.width, i * disy);
            }
            for (i = 0; i < rect.y; i++) {
                s.graphics.moveTo(i * disx, 0);
                s.graphics.lineTo(i * disx, rect.height);
            }
            return s;
        };
        /***得到爱心 */
        MoonUI.getHeart = function (r, c) {
            if (r === void 0) { r = 15; }
            if (c === void 0) { c = 0XFF0000; }
            var s = new egret.Sprite;
            s.graphics.beginFill(c);
            s.graphics.moveTo(0, 0);
            s.graphics.lineTo(0, -r * 2);
            s.graphics.cubicCurveTo(r, -r * 2.5, r * 2, -r * 1.5, 0, 0);
            s.graphics.moveTo(0, 0);
            s.graphics.lineTo(0, -r * 2);
            s.graphics.cubicCurveTo(-r, -r * 2.5, -r * 2, -r * 1.5, 0, 0);
            s.graphics.endFill();
            s.anchorOffsetX = -s.width / 2;
            s.anchorOffsetY = -s.height;
            return s;
        };
        return MoonUI;
    }());
    game.MoonUI = MoonUI;
    __reflect(MoonUI.prototype, "game.MoonUI");
    var FONT = (function () {
        function FONT() {
        }
        FONT.fontName = "黑体";
        return FONT;
    }());
    game.FONT = FONT;
    __reflect(FONT.prototype, "game.FONT");
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(str, c) {
            if (str === void 0) { str = ""; }
            if (c === void 0) { c = 0XFFFFFF; }
            var _this = _super.call(this) || this;
            _this.text = new TextField;
            _this.text.textAlign = egret.HorizontalAlign.LEFT;
            _this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
            _this.text.text = str;
            _this.text.textColor = c;
            _this.text.fontFamily = game.FONT.fontName;
            _this.addChild(_this.text);
            return _this;
        }
        Object.defineProperty(Label.prototype, "textField", {
            get: function () {
                return this.text;
            },
            enumerable: true,
            configurable: true
        });
        return Label;
    }(MoonContainer));
    game.Label = Label;
    __reflect(Label.prototype, "game.Label");
    //--------------
    var LogManager = (function () {
        function LogManager() {
        }
        LogManager.getIns = function () {
            if (this.instance == null) {
                this.instance = new LogManager();
            }
            return this.instance;
        };
        /**请先调用初始化函数 */
        LogManager.prototype.init = function (stage) {
            var txt;
            txt.textAlign = egret.HorizontalAlign.LEFT;
            stage.addChild(txt);
            this.txtSimple = txt;
            var txt = (new Label).textField;
            txt.size = 25;
            stage.addChild(txt);
            this.txtMessage = txt;
        };
        /**每次都覆盖上一次信息 */
        LogManager.prototype.debug = function (value) {
            this.txtSimple.text = value;
        };
        /**每次都覆盖上一次信息 */
        LogManager.prototype.log = function (value) {
            //if(GameData.version==Const.VER_DEBUG) this.txtSimple.text=value;
        };
        /**显示所有信息 */
        LogManager.prototype.logMessage = function (value) {
            //if(GameData.version==Const.VER_DEBUG) this.txtMessage.appendText(value+"\n");
        };
        LogManager.prototype.setLogColor = function (color) {
            this.txtSimple.textColor = color;
        };
        LogManager.prototype.setLogMessageColor = function (color) {
            this.txtMessage.textColor = color;
        };
        return LogManager;
    }());
    game.LogManager = LogManager;
    __reflect(LogManager.prototype, "game.LogManager");
    var BasicView = (function (_super) {
        __extends(BasicView, _super);
        function BasicView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BasicView.prototype.createText = function (x, y, s) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (s === void 0) { s = ""; }
            var text = (new Label).textField;
            text.x = x;
            text.y = y;
            text.text = s;
            this.addChild(text);
            return text;
        };
        BasicView.prototype.createRect = function (w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var sprite = game.MoonUI.getRect(w, h, c, x, y);
            this.addChild(sprite);
            return sprite;
        };
        BasicView.prototype.createCircle = function (r, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var sprite = game.MoonUI.getCircle(r, c, x, y);
            this.addChild(sprite);
            return sprite;
        };
        BasicView.prototype.createRectBySprite = function (s, w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            s.graphics.clear();
            s.graphics.beginFill(c);
            s.graphics.drawRect(x, y, w, h);
            s.graphics.endFill();
        };
        /**创建纯色背景 */
        BasicView.prototype.createBackground = function (c, a) {
            if (c === void 0) { c = 0; }
            if (a === void 0) { a = 1; }
            var s = this.createRect(this.stageWidth, this.stageHeight, c);
            s.alpha = a;
            s.touchEnabled = true; //用于阻止下层点击事件
            return s;
        };
        /**创建渐变色背景 */
        BasicView.prototype.createBgGradientFill = function (c1, c2) {
            if (c1 === void 0) { c1 = 0X017AC3; }
            if (c2 === void 0) { c2 = 0XDDDDDD; }
            var w = this.stageWidth;
            var h = this.stageHeight;
            var matrix = new egret.Matrix();
            matrix.createGradientBox(w, h, Math.PI / 2);
            var sprite = new Sprite;
            sprite.graphics.beginGradientFill(egret.GradientType.LINEAR, [c1, c2], [1, 1], [0, 255], matrix);
            sprite.graphics.drawRect(0, 0, w, h);
            this.addChild(sprite);
            return sprite;
        };
        return BasicView;
    }(MoonContainer));
    game.BasicView = BasicView;
    __reflect(BasicView.prototype, "game.BasicView");
    var GameView = (function (_super) {
        __extends(GameView, _super);
        function GameView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameView.prototype.play = function () {
            this.stop();
            this.isPlay = true;
            egret.startTick(this.loop, this);
        };
        GameView.prototype.stop = function () {
            this.isPlay = false;
            egret.stopTick(this.loop, this);
        };
        GameView.prototype.loop = function (n) {
            traceSimple(n);
            return true;
        };
        GameView.prototype.createButton = function (name, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var btn = new game.BasicButton;
            btn.label = name;
            btn.x = x;
            btn.y = y;
            this.addChild(btn);
            return btn;
        };
        return GameView;
    }(BasicView));
    game.GameView = GameView;
    __reflect(GameView.prototype, "game.GameView");
    var BasicButton = (function (_super) {
        __extends(BasicButton, _super);
        function BasicButton(normal, down) {
            if (normal === void 0) { normal = null; }
            if (down === void 0) { down = null; }
            var _this = _super.call(this) || this;
            /**皮肤大小随字体大小变化 */
            _this.skinAutoScale = true;
            _this.statusNormal = normal || Skin.buttonNormal;
            _this.statusDown = down || Skin.buttonDown;
            _this.skinContainer = new egret.DisplayObjectContainer;
            _this.addChild(_this.skinContainer);
            _this.updateSkin(_this.statusNormal);
            _this.text = (new Label).textField;
            _this.addChild(_this.text);
            _this.open();
            return _this;
        }
        BasicButton.prototype.open = function () {
            this.close();
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        };
        BasicButton.prototype.close = function () {
            this.touchEnabled = false;
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
            if (this.stage)
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
        };
        BasicButton.prototype.setLabelPoint = function (x, y) {
            this.text.anchorOffsetX = 0;
            this.text.anchorOffsetY = 0;
            this.text.x = x;
            this.text.y = y;
        };
        Object.defineProperty(BasicButton.prototype, "labelCircle", {
            set: function (value) {
                this.text.text = value;
                this.skinAutoScale = false;
                this.text.x = this.text.y = 0;
                this.text.anchorOffsetX = this.text.textWidth >> 1;
                this.text.anchorOffsetY = this.text.textHeight >> 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "labelColor", {
            set: function (value) {
                this.text.textColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "label", {
            get: function () {
                return this.text.text;
            },
            set: function (value) {
                this.text.text = value;
                var width = this.text.width + 20;
                this.setSkinSize();
                this.setTextPosition();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "textFild", {
            get: function () {
                return this.text;
            },
            enumerable: true,
            configurable: true
        });
        /**设置富文字 {text:"string",style:{"size":50,"textColor":0}}*/
        BasicButton.prototype.setTextFlow = function (textFlow) {
            this.text.textFlow = textFlow;
            this.setSkinSize();
            this.setTextPosition();
        };
        BasicButton.prototype.setSkinNormal = function () {
            this.updateSkin(this.statusNormal);
        };
        BasicButton.prototype.setSkinDown = function () {
            this.updateSkin(this.statusDown);
        };
        BasicButton.prototype.onTouch = function (e) {
            if (e.type == egret.TouchEvent.TOUCH_BEGIN) {
                this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                this.updateSkin(this.statusDown);
            }
            else {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
                this.updateSkin(this.statusNormal);
            }
            this.dispEvent(MoonEvent.CLICK);
        };
        Object.defineProperty(BasicButton.prototype, "textWidth", {
            get: function () {
                return this.text.width + 20;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicButton.prototype, "textHeight", {
            get: function () {
                return this.text.height + 20;
            },
            enumerable: true,
            configurable: true
        });
        BasicButton.prototype.setSkinSize = function () {
            if (this.skinAutoScale && this.text.text != "") {
                var scale = this.textWidth / this.statusNormal.width;
                if (this.statusNormal instanceof Bitmap) {
                    this.statusNormal.width = this.textWidth;
                    this.statusDown.width = this.textWidth;
                }
                else {
                    this.statusNormal.scaleX = this.statusDown.scaleX = scale;
                }
                var height = this.textHeight;
                if (height >= this.statusNormal.height) {
                    scale = height / this.statusNormal.height;
                    if (this.statusNormal instanceof Bitmap) {
                        this.statusNormal.height = this.textHeight;
                        this.statusDown.height = this.textHeight;
                    }
                    else {
                        this.statusNormal.scaleY = this.statusDown.scaleY = scale;
                    }
                }
            }
        };
        BasicButton.prototype.setTextPosition = function () {
            this.text.anchorOffsetX = this.text.width >> 1;
            this.text.anchorOffsetY = this.text.height >> 1;
            if (this.textWidth > this.statusNormal.width)
                this.text.x = this.textWidth >> 1;
            else
                this.text.x = this.statusNormal.width >> 1;
            if (this.textHeight > this.statusNormal.height)
                this.text.y = this.textHeight >> 1;
            else
                this.text.y = this.statusNormal.height >> 1;
        };
        BasicButton.prototype.updateSkin = function (skin) {
            this.skinContainer.removeChildren();
            this.skinContainer.addChild(skin);
        };
        BasicButton.prototype.dispose = function () {
            this.close();
            _super.prototype.dispose.call(this);
        };
        return BasicButton;
    }(MoonContainer));
    game.BasicButton = BasicButton;
    __reflect(BasicButton.prototype, "game.BasicButton", ["game.IOnoff"]);
    var Skin = (function () {
        function Skin() {
        }
        Object.defineProperty(Skin, "randomRect", {
            get: function () { return game.MoonUI.getRect(60, 60, game.Color.random); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "randomCircle", {
            get: function () { return game.MoonUI.getCircle(50, game.Color.random); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "pointNormal", {
            /**默认点 */
            get: function () { return game.MoonUI.getCircle(6, game.Color.black); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "pointDown", {
            get: function () { return game.MoonUI.getCircle(6, game.Color.gray); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "buttonNormal", {
            /**默认按钮 */
            get: function () { return game.MoonUI.getRect(60, 60, game.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "buttonDown", {
            get: function () { return game.MoonUI.getRect(60, 60, game.Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "radioOff", {
            /**默认单选框 */
            get: function () { return game.MoonUI.getRadioCircle(game.Color.white, game.Color.white); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "radioOn", {
            get: function () { return game.MoonUI.getRadioCircle(game.Color.white, game.Color.black, 1); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "checkBoxOff", {
            /**默认复选框 */
            get: function () { return game.MoonUI.getCheckBoxRect(game.Color.white, game.Color.white); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "checkBoxOn", {
            get: function () { return game.MoonUI.getCheckBoxRect(game.Color.white, game.Color.black, 1); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "switchOff", {
            /**默认开关 */
            get: function () { return game.MoonUI.getSwitch(game.Color.skinNormal, game.Color.white); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "switchOn", {
            get: function () { return game.MoonUI.getSwitch(game.Color.skinNormal, game.Color.white, 1); },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Skin, "progressBackground", {
            /**默认进度条 */
            get: function () { return game.MoonUI.getRect(300, 20, game.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "progressValue", {
            get: function () { return game.MoonUI.getRect(300, 20, game.Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "sliderBackground", {
            /**默认滑动器 */
            get: function () { return game.MoonUI.getRect(300, 10, game.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "sliderValue", {
            get: function () { return game.MoonUI.getRect(300, 10, game.Color.skinDown); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "sliderBar", {
            get: function () { return game.MoonUI.getCircle(15, game.Color.white); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Skin, "scrollBar", {
            /**默认滚动条 */
            get: function () { return game.MoonUI.getRect(10, 10, game.Color.skinNormal); },
            enumerable: true,
            configurable: true
        });
        Skin.getRodatioButton = function (label) {
            var btn = new BasicButton(game.Skin.radioOff, game.Skin.radioOn);
            btn.skinAutoScale = false;
            btn.label = label;
            btn.labelColor = game.Color.black;
            btn.setLabelPoint(40, 0);
            return btn;
        };
        Skin.getCheckBox = function (label) {
            var skins = [game.Skin.checkBoxOff, game.Skin.checkBoxOff, game.Skin.checkBoxOn, game.Skin.checkBoxOn];
            var btn = new game.MoreSkinButton(skins);
            btn.skinAutoScale = false;
            btn.label = label;
            btn.toggleSwitch = true;
            btn.labelColor = game.Color.black;
            btn.setLabelPoint(50, 2);
            return btn;
        };
        return Skin;
    }());
    game.Skin = Skin;
    __reflect(Skin.prototype, "game.Skin");
    var Color = (function () {
        function Color() {
        }
        Object.defineProperty(Color, "random", {
            get: function () { return Math.random() * 0XFFFFFF; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "white", {
            get: function () { return 0XFFFFFF; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "black", {
            get: function () { return 0X000000; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "gray", {
            get: function () { return 0X666666; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "red", {
            get: function () { return 0XFF0000; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "green", {
            get: function () { return 0X00FF00; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "bule", {
            get: function () { return 0X0000FF; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "skinNormal", {
            get: function () { return 0X15191C; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "skinDown", {
            get: function () { return 0X999999; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Color, "titleBackground", {
            get: function () { return 0X20262B; },
            enumerable: true,
            configurable: true
        });
        ;
        Color.getRandomArray = function (count) {
            var colors = [];
            for (var i = 0; i < count; i++)
                colors.push(Math.random() * 0XFFFFFF);
            return colors;
        };
        ;
        /** 可改变颜色的亮暗,value值是-255到255*/
        Color.lightenDarkenColor = function (color, value) {
            var r = (color >> 16) + value;
            if (r > 255)
                r = 255;
            else if (r < 0)
                r = 0;
            var b = ((color >> 8) & 0x00FF) + value;
            if (b > 255)
                b = 255;
            else if (b < 0)
                b = 0;
            var g = (color & 0x0000FF) + value;
            if (g > 255)
                g = 255;
            else if (g < 0)
                g = 0;
            return (g | (b << 8) | (r << 16));
        };
        return Color;
    }());
    game.Color = Color;
    __reflect(Color.prototype, "game.Color");
    var MoreSkinButton = (function (_super) {
        __extends(MoreSkinButton, _super);
        function MoreSkinButton(skins) {
            var _this = _super.call(this, skins[0], skins[1]) || this;
            _this._currentPage = 0;
            _this.skins = skins;
            return _this;
        }
        /**更新到第几个按钮同时刷新皮肤 */
        MoreSkinButton.prototype.updatePage = function (value) {
            this.currentPage = value;
            this.setSkinNormal();
        };
        Object.defineProperty(MoreSkinButton.prototype, "currentPage", {
            get: function () {
                return this._currentPage;
            },
            set: function (value) {
                value = value * 2 == this.skins.length ? 0 : value;
                this._currentPage = value;
                this.statusNormal = this.skins[value * 2];
                this.statusDown = this.skins[(value * 2) + 1];
                this.setSkinSize();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MoreSkinButton.prototype, "toggleSwitch", {
            set: function (value) {
                this._toggleSwitch = value;
            },
            enumerable: true,
            configurable: true
        });
        MoreSkinButton.prototype.onTouch = function (e) {
            if (e.type == egret.TouchEvent.TOUCH_END) {
                if (this._toggleSwitch) {
                    this.currentPage = 1 - this.currentPage;
                }
            }
            _super.prototype.onTouch.call(this, e);
        };
        return MoreSkinButton;
    }(BasicButton));
    game.MoreSkinButton = MoreSkinButton;
    __reflect(MoreSkinButton.prototype, "game.MoreSkinButton");
    var Imag = (function (_super) {
        __extends(Imag, _super);
        function Imag(skinName) {
            if (skinName === void 0) { skinName = ""; }
            var _this = _super.call(this) || this;
            if (skinName != "") {
                _this.skinName = skinName;
                _this.position = new egret.Point();
                _this.addBitmap();
                _this.bgWidth = _this.width;
                _this.bgHeight = _this.height;
            }
            return _this;
        }
        Imag.prototype.addBitmap = function () {
            if (RES.hasRes(this.skinName)) {
                this.skinImag = new Scale9Image(this.skinName);
                this.skinImag.smoothing = true;
                this.addChild(this.skinImag);
            }
            else {
                //trace("找不到资源："+this.skinName)
                egret.error("找不到key" + this.skinName);
            }
        };
        /**设置锚点在中心 */
        Imag.prototype.setAnchorCenter = function () {
            this.anchorOffsetX = this.width >> 1;
            this.anchorOffsetY = this.height >> 1;
        };
        return Imag;
    }(MoonContainer));
    game.Imag = Imag;
    __reflect(Imag.prototype, "game.Imag");
    var basicContainer = (function (_super) {
        __extends(basicContainer, _super);
        function basicContainer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.items = [];
            _this.index = 0;
            return _this;
        }
        // protected skinImage:Scale9Image;
        basicContainer.prototype.addItem = function (item) {
            this.items.push(item);
        };
        basicContainer.prototype.removeItem = function (index) {
            if (this.hasItem(index)) {
                this.items.splice(index, 1);
            }
        };
        basicContainer.prototype.getItem = function (index) {
            return this.items[index];
        };
        basicContainer.prototype.hasItem = function (index) {
            return this.items.length > 0 && (index >= 0 && index < this.items.length);
        };
        basicContainer.prototype.getNextItem = function () {
            return this.items[this.index++];
        };
        basicContainer.prototype.reset = function () {
            this.index = 0;
        };
        return basicContainer;
    }(Imag));
    game.basicContainer = basicContainer;
    __reflect(basicContainer.prototype, "game.basicContainer");
    var imageChartlet = (function (_super) {
        __extends(imageChartlet, _super);
        function imageChartlet(skinName, count) {
            if (count === void 0) { count = 1; }
            var _this = _super.call(this) || this;
            _this.skinName = skinName;
            for (var i = 0; i < count; i++) {
                _this.items.push(_this.getBitmap());
            }
            return _this;
        }
        imageChartlet.prototype.getBitmap = function () {
            var skin;
            if (RES.hasRes(this.skinName)) {
                skin = new Scale9Image(this.skinName);
                this.addChild(skin);
            }
            else {
                //trace("找不到资源："+this.skinName)
            }
            return skin;
        };
        /**竖排获横排 */
        imageChartlet.prototype.layout = function (type, interval) {
            if (interval === void 0) { interval = 0; }
            if (type == Const.VERTICAL)
                SimpleLayout.displayRank(this.items, 1, interval, interval, 0, 0);
            else if (type == Const.HORIZONTAL)
                SimpleLayout.displayRank(this.items, this.items.length, interval, interval, 0, 0);
        };
        /**多行排列，xNum是一排排几个 */
        imageChartlet.prototype.setMultiLine = function (xNum, interval) {
            if (interval === void 0) { interval = 0; }
            SimpleLayout.displayRank(this.items, xNum, interval, interval, 0, 0);
        };
        return imageChartlet;
    }(basicContainer));
    game.imageChartlet = imageChartlet;
    __reflect(imageChartlet.prototype, "game.imageChartlet", ["game.ILayout"]);
    var SimpleLayout = (function () {
        function SimpleLayout() {
        }
        /**参数：数组,X轴个数,X轴距离,Y轴距离,X轴位置,Y轴位置,正排/反排 */
        SimpleLayout.displayRank = function (array, xNum, xDis, yDis, x, y, sign) {
            if (xNum === void 0) { xNum = 1; }
            if (xDis === void 0) { xDis = 0; }
            if (yDis === void 0) { yDis = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (sign === void 0) { sign = 1; }
            var display;
            for (var i = 0; i < array.length; i++) {
                display = array[i];
                display.x = x + Math.floor(i % xNum) * (display.width + xDis) * sign;
                display.y = y + Math.floor(i / xNum) * (display.height + yDis) * sign;
            }
        };
        return SimpleLayout;
    }());
    game.SimpleLayout = SimpleLayout;
    __reflect(SimpleLayout.prototype, "game.SimpleLayout");
    /**图像动画类 */
    var imageAnimation = (function (_super) {
        __extends(imageAnimation, _super);
        function imageAnimation(skinName, start, end, type) {
            if (skinName === void 0) { skinName = ""; }
            if (type === void 0) { type = "png"; }
            var _this = _super.call(this) || this;
            for (var i = start; i <= end; i++) {
                _this.items.push(skinName + i + "_" + type);
            }
            _this.skinName = _this.getItem(0);
            _this.addBitmap();
            _this.createTime();
            return _this;
        }
        imageAnimation.prototype.createTime = function () {
            if (this.timer == null) {
                this.timer = new egret.Timer(1000 / this.ftp, 0);
                this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
            }
        };
        imageAnimation.prototype.onTimer = function () {
            if (this.hasItem(++this.index)) {
                this.gotoAndStop(this.index);
            }
            else {
                if (this.loop) {
                    this.reset();
                    this.gotoAndStop(this.index);
                }
                else {
                    this.timer.stop();
                }
            }
        };
        imageAnimation.prototype.gotoAndStop = function (index) {
            if (this.hasItem(index)) {
                this.index = index;
                this.skinName = this.getItem(index);
                this.update();
            }
            else {
                //trace("gotoAndStop的参数请保持在0到"+this.items.length,"当前index="+index)
            }
        };
        imageAnimation.prototype.gotoAndPlay = function (index) {
            this.index = index;
            this.play();
        };
        imageAnimation.prototype.play = function () {
            this.timer.start();
        };
        imageAnimation.prototype.stop = function () {
            this.timer.stop();
        };
        imageAnimation.prototype.update = function () {
            if (RES.hasRes(this.skinName)) {
                this.skinImag.texture = RES.getRes(this.skinName);
            }
            else {
                //trace("找不到资源："+this.skinName);
            }
        };
        Object.defineProperty(imageAnimation.prototype, "currentFrame", {
            get: function () { return this.index; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(imageAnimation.prototype, "ftp", {
            // public get ftp(){return this._ftp}
            set: function (value) {
                // this._ftp=value;
                this.removeTime();
                this.createTime();
            },
            enumerable: true,
            configurable: true
        });
        imageAnimation.prototype.removeTime = function () {
            if (this.timer != null) {
                this.timer.stop();
                this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
                this.timer = null;
            }
        };
        imageAnimation.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.removeTime();
        };
        return imageAnimation;
    }(basicContainer));
    game.imageAnimation = imageAnimation;
    __reflect(imageAnimation.prototype, "game.imageAnimation");
    /**图像布局类 */
    var imageLayout = (function () {
        function imageLayout() {
        }
        imageLayout.getIns = function () {
            if (this.instance == null)
                this.instance = new imageLayout();
            return this.instance;
        };
        imageLayout.prototype.setImage = function (image) {
            this.image = image;
        };
        imageLayout.prototype.setStageWH = function (w, h) {
            this.tw = w;
            this.th = h;
        };
        imageLayout.prototype.setTop = function (distance) {
            this.image.y = distance;
        };
        imageLayout.prototype.setBottom = function (distance) {
            this.image.y = this.th - this.image.height - distance;
        };
        imageLayout.prototype.setLeft = function (distance) {
            this.image.x = distance;
        };
        imageLayout.prototype.setRight = function (distance) {
            this.image.x = this.tw - this.image.width - distance;
        };
        imageLayout.prototype.setCenterX = function (distance) {
            if (distance === void 0) { distance = 0; }
            this.image.x = ((this.tw - this.image.width) >> 1) + distance;
        };
        imageLayout.prototype.setCenterY = function (distance) {
            if (distance === void 0) { distance = 0; }
            this.image.y = ((this.tw - this.image.width) >> 1) + distance;
        };
        return imageLayout;
    }());
    game.imageLayout = imageLayout;
    __reflect(imageLayout.prototype, "game.imageLayout");
    /**九宫格*/
    var Scale9Image = (function (_super) {
        __extends(Scale9Image, _super);
        function Scale9Image(name, rect) {
            if (rect === void 0) { rect = null; }
            var _this = _super.call(this) || this;
            if (RES.hasRes(name)) {
                _this.texture = RES.getRes(name);
                _this.scale9Grid = rect || new Rectangle(8, 8, 2, 2);
            }
            else {
                egret.error("找不到资源：" + name);
            }
            return _this;
        }
        return Scale9Image;
    }(Bitmap));
    game.Scale9Image = Scale9Image;
    __reflect(Scale9Image.prototype, "game.Scale9Image");
})(game || (game = {}));
//# sourceMappingURL=MoonContainer.js.map