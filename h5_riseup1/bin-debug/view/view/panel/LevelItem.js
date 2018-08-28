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
var game;
(function (game) {
    var LevelItem = (function (_super) {
        __extends(LevelItem, _super);
        function LevelItem() {
            var _this = _super.call(this) || this;
            _this.removeBodys = []; //需要移除的刚体
            _this.world = new p2.World({ gravity: [0, 0] });
            _this.addEventListener(egret.Event.ENTER_FRAME, _this.updateWorld, _this);
            return _this;
        }
        LevelItem.prototype.init = function () {
            var _this = this;
            var urlLorder = new egret.URLLoader();
            var urlreq = new egret.URLRequest();
            urlreq.method = egret.URLRequestMethod.GET;
            urlLorder.dataFormat = egret.URLLoaderDataFormat.TEXT;
            urlreq.url = "resource/assets/blockBox.xml";
            urlLorder.load(urlreq);
            urlLorder.addEventListener(egret.Event.COMPLETE, function () {
                var a = urlLorder.data;
                _this.data = a;
                console.log(egret.XML.parse(a));
                ;
            }, this);
            this.ondataChange(this.data);
        };
        LevelItem.prototype.ondataChange = function (data) {
            for (var i = 0; i < data.children[0].children.length; i++) {
                if (data.children[0].children[i].children.type == "CIRCLE") {
                    this.createBallon(data.children[0].children[i].children.children.r, p2.Body.DYNAMIC, 1, [0, 0], [100, 100], [10, 10]);
                }
                else {
                    this.createConvexBodyShape([0, 100], p2.Body.DYNAMIC, [1, 0], [0, 100], [10, 0]);
                }
            }
        };
        LevelItem.prototype.updateWorld = function (e) {
            var timeStep = 1 / 60;
            var removeBodys = this.removeBodys;
            this.world.step(timeStep);
            var bodys = this.world.bodies;
            var l = bodys.length;
            for (var i = 0; i < l; i++) {
                var body = bodys[i];
                if (body.userData && body.userData.skin) {
                    var skin = body.userData.skin;
                    skin.x = body.position[0];
                    skin.y = body.position[1];
                    skin.rotation = body.angle * 180 / Math.PI;
                }
                else {
                    if (!(body.shapes[0] instanceof p2.Plane)) {
                        // this.txtWarn.x=this.txtWarn.y=200
                        // this.addChild(this.txtWarn);
                        // this.txtWarn.text="警告：有刚体没有设置皮肤"
                    }
                }
            }
            for (i = 0; i < removeBodys.length; i++) {
                body = removeBodys[i];
                if (body.userData && body.userData.skin) {
                    skin = body.userData.skin;
                    if (skin.parent != null) {
                        //skin.parent.removeChild(skin);
                    }
                    body.userData = null;
                }
                this.world.removeBody(body);
            }
        };
        //impulse:冲量[]，worldPoint:世界坐标[]
        LevelItem.prototype.getBody = function (mass, type, impulse, worldPoint, velocity) {
            if (mass === void 0) { mass = 0; }
            if (type === void 0) { type = p2.Body.DYNAMIC; }
            var body = new p2.Body({ mass: mass });
            body.type = type;
            body.userData = {};
            body.applyImpulse(impulse, worldPoint);
            return body;
        };
        //创建气球 
        LevelItem.prototype.createBallon = function (radius, type, angle, impulse, worldPoint, velocity) {
            if (type === void 0) { type = p2.Body.DYNAMIC; }
            if (angle === void 0) { angle = 0; }
            var body = this.getBody(10, type, [0, 0], worldPoint, velocity);
            var shape = new p2.Circle({ radius: radius });
            body.addShape(shape);
            //body.angle=angle;
            this.world.addBody(body);
            return body;
        };
        //创建多边形刚体
        LevelItem.prototype.createConvexBodyShape = function (points, type, impulse, worldPoint, velocity) {
            if (type === void 0) { type = p2.Body.DYNAMIC; }
            var body = this.getBody(10, type, impulse, worldPoint, velocity);
            body.fromPolygon(points, { optimalDecomp: false });
            this.world.addBody(body);
            return body;
        };
        //创建多边形  side: 边数，radius：半径
        LevelItem.prototype.createPolygon = function (side, radius, type, impulse, worldPoint, velocity) {
            if (side === void 0) { side = 3; }
            if (radius === void 0) { radius = 30; }
            if (type === void 0) { type = p2.Body.DYNAMIC; }
            var body = this.getBody(10, type, impulse, worldPoint, velocity);
            var points = [];
            for (var i = 0; i < side; i++) {
                var x = Math.cos((i * (360 / side) * Math.PI / 180)) * radius;
                var y = Math.sin((i * (360 / side) * Math.PI / 180)) * radius;
                points.push([x, y]);
            }
            return this.createConvexBodyShape(points, type, impulse, worldPoint, velocity);
        };
        return LevelItem;
    }(egret.Sprite));
    game.LevelItem = LevelItem;
    __reflect(LevelItem.prototype, "game.LevelItem");
})(game || (game = {}));
//# sourceMappingURL=LevelItem.js.map