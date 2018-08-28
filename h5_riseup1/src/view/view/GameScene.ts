/**
 * long description for the file
 *
 * @summary 游戏主场景
 * @author wangtao
 *
 * Created at     : 2018-07-31 09:41:37 
 * Last modified  : 2018-08-24 21:12:36
 */
var world: p2.World = new p2.World();
var SHAPE = { rect: "rect", circle: "circle" }//形状
var CONTROL = Math.pow(2, 0);
var OBSCALES = Math.pow(2, 1);
class MButton extends game.BasicButton { };
class ImageAnimation extends game.imageAnimation { };
class Layout extends game.imageLayout { };
//class Scale9Image extends game.Scale9Image{};
class MoonEvent extends game.MoonEvent { };
class Const extends game.Const { };
module game {
    export class GameData {
        /**舞台*/
        public static stage: Stage;
        /**游戏屏幕宽 */
        public static stageWidth: number = 640;
        /**游戏屏幕高 */
        public static stageHeight: number = 1136;
        /**帧频*/
        public static FPS: number = 60;
        /**游戏版号，默认是调试版 */
        public static version: string = Const.VER_DEBUG;
        /**是否为移动模式（例如移动电话或平板电脑） */
        public static isMobile: boolean = egret.Capabilities.isMobile;
        /**游戏的ID */
        public static gameId: number = 1;
        /**游戏分数 */
        public static score: number = 0;
        /**游戏历史分数 */
        public static scoreHighest: number = 0;
    }
    /**游戏加载模版 */
    export class GameLoad extends game.GameView {
        private txtLoad: TextField;
        private txtName: TextField;
        private progress: Sprite;
        private txtLoadPos: egret.Point;
        private color: number = 0XF9AB03;
        private proWidth: number;
        private airFan: Sprite;
        protected render(): void {
            super.render();
            this.createBgGradientFill();
            var container: Sprite = new Sprite;
            this.addChild(container);
            var sw: number = this.stageWidth;
            var sh: number = this.stageHeight;
            var w: number = 80;
            var loadbg: Sprite = MoonUI.getRoundRect(sw - 100, w, 0XFCE59D, 10, 10);
            loadbg.x = (sw - loadbg.width) >> 1;
            loadbg.y = (sh - loadbg.height) >> 1;
            container.addChild(loadbg);

            //--------
            var progress: Sprite = MoonUI.getRect(sw - 120, w - 10, this.color);
            progress.x = (sw - progress.width) >> 1;
            progress.y = (sh - progress.height) >> 1;
            container.addChild(progress);
            this.proWidth = progress.width;

            var mask: Sprite = MoonUI.getRoundRect(sw - 120, w - 10, 0, 10, 10);
            mask.x = (sw - mask.width) >> 1;
            mask.y = (sh - mask.height) >> 1;
            progress.mask = mask;
            this.progress = progress;

            //--------
            var txtbg: MoonDisplayObject = new MoonDisplayObject();
            txtbg.type = game.Const.SHAPE_CIRCLE
            txtbg.data = { r: w / 2, c: 0XE18E0D };
            txtbg.setBackground(0XFFFFFF, 5);
            this.addChild(txtbg);
            txtbg.x = loadbg.x + loadbg.width - w / 2;
            txtbg.y = loadbg.y + w / 2;
            this.txtLoadPos = new egret.Point(txtbg.x, txtbg.y);

            var txtExp: TextField = this.createText(0, 0, "");
            txtExp.size = 40;
            txtExp.textColor = 0xB07300;
            this.txtLoad = txtExp;
            //--------
            var txtTip: TextField = this.createText(0, 0, "游戏加载");
            txtTip.size = 40;
            txtTip.x = (sw - txtTip.width) >> 1;
            txtTip.y = loadbg.y - txtTip.height * 2;

            var txtName: TextField = this.createText(0, 0, "");
            txtName.size = 40;
            this.txtName = txtName;
            this.updateName("敬请期待");
            //--------
            this.createAirFan();
            this.airFan.x = txtbg.x;
            this.airFan.y = txtbg.y;

            this.createLogo();

            this.update(0);
            this.play();
        }
        protected loop(n: number): boolean {
            this.airFan.rotation += 3;
            return true;
        }
        private createAirFan(): void {
            this.airFan = new Sprite;
            this.addChild(this.airFan);
            for (var i: number = 0; i < 4; i++) {
                var shape: Sprite = new Sprite();
                this.airFan.addChild(shape);
                shape.graphics.lineStyle(0);
                shape.graphics.beginFill(0xFFFFFF);
                shape.graphics.cubicCurveTo(-29, -28, 29, -28, 0, 0);
                shape.graphics.endFill();
                shape.rotation = i * 90;
            }
        }
        protected createLogo(): void {
            var sw: number = this.stageWidth;
            var sh: number = this.stageHeight;
            var logo: MoonDisplayObject = new MoonDisplayObject();
            logo.type = game.Const.SHAPE_CIRCLE;
            logo.data = { r: 50, c: 0XE18E0D };
            logo.setBackground(0XFFFFFF, 2);
            logo.x = sw >> 1;
            logo.y = logo.height;
            this.addChild(logo);

            var txtName: TextField = this.createText(0, 0, "ZL");
            txtName.size = 40;
            txtName.x = logo.x - (txtName.width >> 1);
            txtName.y = logo.y - (txtName.height >> 1) - 15;

            txtName = this.createText(0, 0, "game");
            txtName.size = 30;
            txtName.x = logo.x - (txtName.width >> 1);
            txtName.y = logo.y - (txtName.height >> 1) + 15;

            this.addChild(game.MoonUI.getHeart(15, 0XFFFFFF))
            txtName = this.createText(0, 0, "子乐游戏");
            txtName.size = 40;
            txtName.textColor = 0XE09F21;
            txtName.x = sw - txtName.width - 10;
            txtName.y = sh - txtName.height - 10;

        }
        /**创建渐变色背景 */
        protected createBgGradientFill(c1: number = 0XFDD559, c2: number = 0XE09F21): Sprite {
            var w: number = this.stageWidth;
            var h: number = this.stageHeight;
            var matrix: egret.Matrix = new egret.Matrix();
            matrix.createGradientBox(w * 2, h * 2, Math.PI / 2);
            var sprite: Sprite = new Sprite;
            sprite.graphics.beginGradientFill(egret.GradientType.RADIAL, [c1, c2], [1, 1], [0, 255], matrix);
            sprite.graphics.drawRect(0, 0, w, h);
            this.addChild(sprite);
            return sprite;
        }
        public updateName(name: string): void {
            this.txtName.text = name;
            this.txtName.x = (this.stageWidth - this.txtName.width) >> 1;
            this.txtName.y = this.stageHeight / 2 + this.txtName.height * 2;
        }
        public update(value: number): void {
            if (value > 1) return;
            if (value > 0.99) this.stop();
            this.progress.scaleX = value;
            var txtExp: TextField = this.txtLoad;
            var pos: egret.Point = this.txtLoadPos;
            txtExp.text = Math.ceil(value * 100) + "%";
            txtExp.x = (this.stageWidth - txtExp.width) >> 1;
            txtExp.y = pos.y - txtExp.height / 2;
            var exp: Sprite = MoonUI.getCircle(5 + Math.random() * 5, this.color, pos.x, pos.y);
            exp.y = 10 - Math.random() * 20;
            this.addChildAt(exp, 2);
            egret.Tween.get(exp).to({ x: -this.proWidth, alpha: 0 }, 1000);
        }
    }
    export class BasicGamePanel extends game.GameView {

        protected render(): void {
            super.render();
            this.initView();
        }

        protected initView(): void {

            this.initGame();
        }

        public initGame(): void {
        }
        public start(): void {
            this.play();
        }
        public pause(): void {
            this.stop();
        }
        public loop(n: number): boolean {

            return true;
        }

        protected over(): void {

        }

        protected createImageBg(name: string): void {
            this.addChild(new game.Imag(name));
        }
        public dispose(): void {
            this.stop();
            super.dispose();
        }
    }
    export class GameScene extends game.BasicGamePanel {
        public stageHeight;   //舞台高度
        public stageWidth;    //舞台宽度
        public levelLabel: egret.TextField;         //等级框
        public scoreLable: egret.TextField;         //分数框 
        public score: number = 0;                 //分数
        public level: number = -1;               //等级
        public factor: number = 50;            //系数 
        private world: p2.World;//2D物理世界 
        private _isDebug: boolean = false;
        public ballon: p2.Body;
        public ballonPlay: egret.DisplayObject              //气球刚体
        public blockStar1: p2.Body;          //星型障碍
        public x2: p2.Body;
        public obj: any;                     //关卡解析的data 
        public convex: p2.Body;              //不规则障碍刚体
        public obj2: any;                    //
        public point: any[]
        public testPoint: any[];
        public testPoint2: any[]
        public point2: any[]
        public point3: any[];                  //不规则障碍坐标
        public starBlockData: any;               //星型障碍json解析data
        public impluseY: number;                 //y方向速度
        private material: p2.Material;//碰撞时的弹性变化
        private removeSkins: any[] = [];//需要删除刚体的皮肤
        public j: number = 0;
        public n: number;
        public contact: p2.Body;           //玩家控制小球刚体
        public bg: egret.Bitmap;           //云朵
        public bg1: egret.Bitmap;          //云朵 
        public bg2: egret.Bitmap;
        public bg3: egret.Bitmap;
        public bg4: egret.Bitmap;
        public bg5: egret.Bitmap;
        public bg6: egret.Bitmap;         //云朵
        public l: number = 2300;           // 关卡长度
        // public url1: Array<string> = ["resource/data/LevelB03.json"]
        public url1: Array<string> = ["resource/data/LevelA01.json", "resource/data/LevelA02.json", "resource/data/LevelA03.json", "resource/data/LevelA04.json", "resource/data/LevelB01.json", "resource/data/LevelB02.json", "resource/data/LevelC01.json", "resource/data/LevelC02.json", "resource/data/LevelG01.json", "resource/data/LevelG02.json", "resource/data/LevelG03.json", "resource/data/LevelG04.json", "resource/data/LevelG05.json", "resource/data/LevelG06.json", "resource/data/LevelG07.json", "resource/data/LevelG08.json"]//,"resource/data/LevelB03.json"   策划专用
        public url2: Array<string> = ["resource/data/LevelB01.json", "resource/data/LevelB02.json", "resource/data/LevelB03.json", "resource/data/LevelB04.json", "resource/data/LevelB05.json", "resource/data/LevelB06.json", "resource/data/LevelB07.json", "resource/data/LevelB08.json", "resource/data/LevelB09.json", "resource/data/LevelB10.json"];
        public constructor() {
            super();
            this.loadResource2();
            this.createScene();
            this.createWorld();
            this.createBallon();
            this.createLevel();
            this.loadResource();
            this.updateScore();
            let balloonImag = new PlayerBean();
            let ste = balloonImag._balloonImag;
            console.log(ste);
        }
        private createObstacles() {
            this.updateLevel();
            this.updateScore();
            for (let i = 1001; i <= 1080; i++) {
                if (this.obj[i].isWall == 1) {
                    if (this.obj[i].name == "triangle") {
                        let triangleobstacles: p2.Body = new p2.Body();
                        triangleobstacles = this.addtriangleobstacles(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, this.obj[i].ratio, this.obj[i].img_name, this.obj[i].angle, this.obj[i].delay);
                    }
                    else if (this.obj[i].name == "square") {
                        let obstacle: p2.Body = new p2.Body();
                        obstacle = this.addWallobstacles(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, [this.obj[i].width, this.obj[i].height], this.obj[i].ratio, this.obj[i].mass, this.obj[i].angle, this.obj[i].delay)
                    }
                    else if (this.obj[i].name == "wallOtherA1") {
                        let wallstacles: p2.Body = new p2.Body();
                        wallstacles = this.addWallothers1(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, [this.obj[i].width, this.obj[i].height], this.obj[i].ratio, this.obj[i].mass, this.obj[i].angle, this.obj[i].delay)
                    } else if (this.obj[i].name == "wallOtherA2") {
                        let wallstacles: p2.Body = new p2.Body();
                        wallstacles = this.addWallothers2(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, [this.obj[i].width, this.obj[i].height], this.obj[i].ratio, this.obj[i].mass, this.obj[i].angle, this.obj[i].delay)
                    }
                } else {
                    if (this.obj[i].name == "square") {
                        let obstacle: p2.Body = new p2.Body();
                        obstacle = this.addobstacles(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, [this.obj[i].width, this.obj[i].height], this.obj[i].ratio, this.obj[i].mass, this.obj[i].angle, this.obj[i].delay, this.obj[i].img_name);

                    } else if (this.obj[i].name == "cycle") {
                        let cycleobstacles: p2.Body = new p2.Body();
                        cycleobstacles = this.addCycleobstacles(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, this.obj[i].radius, this.obj[i].ratio, this.obj[i].delay, this.obj[i].mass);
                    } else if (this.obj[i].name == "star") {
                        let starBlock: p2.Body = new p2.Body();
                        starBlock = this.addStarobstacles(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, this.obj[i].ratio, this.obj[i].angleVelocity, this.obj[i].delay, this.obj[i].mass);
                    }
                    else if (this.obj[i].name == "cross") {
                        let crossobstacles: p2.Body = new p2.Body();
                        crossobstacles = this.addcrossobstacles(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, this.obj[i].ratio, this.obj[i].angleVelocity, this.obj[i], this.obj[i].mass);
                    } else if (this.obj[i].name == "triangle") {
                        let triangleobstacles: p2.Body = new p2.Body();
                        triangleobstacles = this.addRecttriangleobstacles(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, this.obj[i].ratio, this.obj[i].img_name, this.obj[i].angle, this.obj[i].angleVelocity, this.obj[i].delay, this.obj[i].mass);
                    } else if (this.obj[i].name == "rhombus") {
                        let rhombus: p2.Body = new p2.Body();
                        rhombus = this.addRhombusobstacles(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, [this.obj[i].width, this.obj[i].height], this.obj[i].ratio, this.obj[i].mass, this.obj[i].angle, this.obj[i].delay, this.obj[i].img_name)
                    }
                    else if (this.obj[i].name == "polygon") {
                        let polygon: p2.Body = new p2.Body();
                        polygon = this.addPolygonobstacles(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, this.obj[i].ratio, this.obj[i].img_name, this.obj[i].angle, this.obj[i].angleVelocity, this.obj[i].delay, this.obj[i].mass)
                    } else if (this.obj[i].name == "hexagon") {
                        let hexagon: p2.Body = new p2.Body();
                        hexagon = this.addhexagonobstacles(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, this.obj[i].ratio, this.obj[i].img_name, this.obj[i].angle, this.obj[i].angleVelocity, this.obj[i].delay, this.obj[i].mass)
                    } else if (this.obj[i].name == "octagon") {
                        let octagon: p2.Body = new p2.Body();
                        octagon = this.addoctagonobstacles(this.obj[i].positionX, this.obj[i].positionY, [this.obj[i].impulseX, this.obj[i].impulseY], this.obj[i].gravity, this.obj[i].ratio, this.obj[i].img_name, this.obj[i].angle, this.obj[i].angleVelocity, this.obj[i].delay, this.obj[i].mass)
                    }
                }
            }
        }
        private updateLevel() {
            this.level++;
            this.levelLabel.text = "level: " + this.level;
            return this.level;
        }
        private updateScore() {
            this.score = this.level * 100
            this.scoreLable.text = "score:" + this.score;
        }


        private createScene() {

            let sprite: egret.Sprite = new egret.Sprite();
            sprite.graphics.drawRect(0, -67720, 720, 69000);
            for (let l = 0; l <= 30 * this.l; l += this.l) {
                this.n = Math.floor(Math.random() * 5 + 1);
                let bgColor: egret.Bitmap = new egret.Bitmap();
                this.bg = new egret.Bitmap();
                this.bg1 = new egret.Bitmap();
                this.bg2 = new egret.Bitmap();
                this.bg3 = new egret.Bitmap();
                this.bg4 = new egret.Bitmap();
                this.bg5 = new egret.Bitmap();
                this.bg6 = new egret.Bitmap();

                this.bg2.texture = RES.getRes("bg0_png");
                console.log(this.bg2.height);
                this.bg3.texture = RES.getRes("bg01_png");
                this.bg5.texture = RES.getRes("bg" + this.n + "_1_png");
                this.bg6.texture = RES.getRes("bg" + this.n + "_2_png");
                bgColor.x = 0;
                if (l == 0) {
                    bgColor.texture = RES.getRes("bg_png");
                    this.bg4.texture = RES.getRes("bg5_4_png");
                    console.log(bgColor.height);
                    bgColor.y = -83;
                    this.bg2.y = - 158; //-158
                    this.bg4.y = -5;//15
                    sprite.addChild(bgColor);
                    sprite.addChild(this.bg2);
                    sprite.addChild(this.bg4);
                    // this.bg3.y = 1780;
                    // this.bg5.y = this.bg3.y - 135;
                    // this.bg6.y = this.bg3.y - 270;
                } else {
                    bgColor.texture = RES.getRes("bg" + this.n + "_3_png")
                    this.bg4.texture = RES.getRes("bg" + this.n + "_4_png");
                    bgColor.y = -83 - l;
                    this.bg2.y = - 158 - l;
                    this.bg4.y = -5 - l;
                    this.bg3.y = 2177 - l; //2077
                    this.bg5.y = this.bg3.y - 105;//135
                    this.bg6.y = this.bg3.y - 210;
                    this.bg3.x = 0;
                    this.bg5.x = 0;
                    this.bg6.x = 0;
                    sprite.addChild(bgColor);
                    sprite.addChild(this.bg6);
                    sprite.addChild(this.bg5);
                    sprite.addChild(this.bg3);
                    sprite.addChild(this.bg2);
                    sprite.addChild(this.bg4);
                }
                // bgColor.texture = RES.getRes("bg" + this.n + "_3_png")

                this.bg2.x = 0;

                this.bg4.x = 0;


            }
            this.addChild(sprite);
            egret.Tween.get(sprite).to({ x: 0, y: 30 * this.l }, 450500);
            this.scoreLable = new egret.TextField();
            this.levelLabel = new egret.TextField();
            this.scoreLable.x = 20;
            this.scoreLable.y = 10;
            this.scoreLable.width = 200;
            this.addChild(this.scoreLable);
            this.levelLabel.text = "level:" + this.level;
            this.levelLabel.x = 620;
            this.levelLabel.y = 10;
            this.levelLabel.width = 100;
            this.addChild(this.levelLabel);

        }
        public createLevel() {
            let i = 1;
            let bar1: egret.Bitmap = new egret.Bitmap();
            let bar2: egret.Bitmap = new egret.Bitmap();
            let bar3: egret.Bitmap = new egret.Bitmap();
            bar1.texture = RES.getRes("bar1_png");
            bar2.texture = RES.getRes("bar2_png");
            bar3.texture = RES.getRes("bar3_png");
            let off: egret.Bitmap = new egret.Bitmap();
            let on: egret.Bitmap = new egret.Bitmap();
            off.texture = RES.getRes("levelOff_png");
            on.texture = RES.getRes("levelOn_png");
            on.x = 112.8;
            off.y = 84;
            off.x = 555;
            on.y = 84;
            let level: egret.TextField = new egret.TextField();
            level.x = 132;
            level.y = 95.57;
            level.text = i + "";
            level.textColor = 0x050404;
            let level2: egret.TextField = new egret.TextField();
            level2.x = 573.34;
            level2.y = 95.57;
            level2.text = i + 1 + "";
            bar1.x = 98;
            bar1.y = 70;
            bar2.x = 160;
            bar2.y = 100.5;
            bar3.y = 100.5;
            bar3.x = 177;
            bar2.width = 190;
            bar3.width = 394;
            egret.Tween.get(bar2).to({ width: 414 }, 45000).call(onComplete, this);

            function onComplete(this_obj) {
                off.texture = RES.getRes("levelOn_png");
                level2.textColor = 0x050404;
                AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_GAME);
                AppFacade.getInstance().sendNotification(SceneNotify.OPEN_GAME_OVER);
                // this.tiaozhuan();
            }
            this.addChild(bar1);
            this.addChild(bar3);
            this.addChild(bar2);
            this.addChild(on);
            this.addChild(off);
            this.addChild(level);
            this.addChild(level2);
        }
        public createWorld() {
            let world = new p2.World();
            this.world = world;
            this.world.applyDamping = false;
            let planeShape: p2.Plane = new p2.Plane();
            let planeBody: p2.Body = new p2.Body();
            planeBody.addShape(planeShape);
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (evt) => {
                let startX = evt.stageX;
                let startY = evt.stageY;

                this.addEventListener(egret.TouchEvent.TOUCH_MOVE, (evt) => {
                    let offsetX = evt.stageX - startX;
                    let offsetY = evt.stageY - startY;
                    var boxBody: p2.Body = this.world.bodies["ballon"];
                    var box: egret.DisplayObject = boxBody.displays[0];
                    boxBody.position[0] += offsetX;
                    boxBody.position[1] += offsetY;
                }, this)
            }, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, () => {
                this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, (evt) => { }, this)
            }, this)
            egret.Ticker.getInstance().register(function () {
                this.world.step(100 / 10000);
                // if(!this._isDebug)
                // {
                let stageHeight: number = egret.MainContext.instance.stage.stageHeight;
                let l = this.world.bodies.length;
                for (var i: number = 0; i < l; i++) {
                    var boxBody: p2.Body = this.world.bodies[i];
                    var box: egret.DisplayObject = boxBody.displays[0];
                    if (box) {
                        box.x = boxBody.position[0];
                        box.y = stageHeight - boxBody.position[1];
                        box.rotation = 360 - boxBody.angle * 180 / Math.PI;
                        if (boxBody.sleepState == p2.Body.SLEEPING) {
                            box.alpha = 0.5;
                        }
                        else {
                            box.alpha = 1;
                        }

                    }
                }
            }, this);
            let shapeA = new p2.Material();
            let shapeB = new p2.Material();
            var material = new p2.ContactMaterial(shapeA, shapeB, {
                surfaceVelocity: -50,
                restitution: 0.5,
                friction: 0.3,
                stiffness: 1e7
            });
            world.addContactMaterial(material);
            this.addConvexShape();
        }
        private createBg(y, y1, y2) {
            let n = Math.floor(Math.random() * 5 + 1);
            this.bg = new egret.Bitmap();
            this.bg1 = new egret.Bitmap();
            this.bg2 = new egret.Bitmap();
            this.bg.texture = RES.getRes("bg" + n + "_2_png");
            this.bg1.texture = RES.getRes("bg" + n + "_1_png");
            this.bg2.texture = RES.getRes("bg0_png");
            this.bg.x = 0;
            this.bg.y = y;
            this.bg1.x = 0
            this.bg1.y = y1;
            this.bg2.x = 0;
            this.bg2.y = y2;
            // return this.bg;
        }
        public createBallon() {
            // let balloon = this.addBalloon(360,300);
            var boxShape: p2.Shape = new p2.Circle({ radius: 25 });
            this.contact = new p2.Body({ mass: 12, position: [385, 475] });
            boxShape.collisionGroup = CONTROL;
            boxShape.collisionMask = OBSCALES | CONTROL;
            this.contact.addShape(boxShape);
            // boxShape.collisionGroup = 1;
            this.contact.gravityScale = 0;
            this.contact.mass = 0;
            this.contact.fixedRotation = true;
            this.contact.damping = 1;
            this.contact.type = p2.Body.KINEMATIC;
            // boxBody.collisionResponse = true;

            this.world.addBody(this.contact);
            var ballon: egret.DisplayObject = this.createBitmapByName("circle_png");
            ballon.width = (<p2.Circle>boxShape).radius * 2;
            ballon.height = (<p2.Circle>boxShape).radius * 2;
            ballon.anchorOffsetX = ballon.width / 2
            ballon.anchorOffsetY = ballon.height / 2;
            this.contact.displays = [ballon];
            this.addChild(ballon);

            // boxBody.userData["ballon"] = true;
            ballon.touchEnabled = true;
            ballon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, moveBegin, this);
            ballon.addEventListener(egret.TouchEvent.TOUCH_END, moveEnd, this);
            var offsetX, offsetY;
            var prePosX, prePosY;
            function moveBegin(event) {
                this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
                prePosX = event.stageX;
                prePosY = event.stageY;
                //  boxBody.type = p2.Body.DYNAMIC;
            }
            function onMove(event) {
                offsetX = event.stageX - prePosX;
                offsetY = event.stageY - prePosY;
                this.contact.position[0] += offsetX;
                this.contact.position[1] -= offsetY;
                prePosX = event.stageX;
                prePosY = event.stageY;
            }
            function moveEnd(event) {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
            }
            var boxShape2: p2.Shape = new p2.Circle({ radius: 70 });
            this.ballon = new p2.Body({ mass: 12, position: [385, 375] });
            boxShape2.collisionGroup = CONTROL;
            boxShape2.collisionMask = OBSCALES | CONTROL;
            this.ballon.addShape(boxShape2);
            this.ballon.gravityScale = 0;
            this.ballon.mass = 0;
            this.ballon.fixedRotation = true;
            this.ballon.fixedX = true;
            this.ballon.fixedY = true;
            this.ballon.type = p2.Body.KINEMATIC;
            this.ballon.userData = true;
            this.ballon.damping = 1;
            this.world.addBody(this.ballon);
            let playData = Global.playerProxy.getplayerBean();
            let imagBallon = playData._balloonImag;
            let imagNum = playData._ballNum;
            this.ballonPlay = this.createBitmapByName(imagBallon);
            this.ballonPlay.width = (<p2.Circle>boxShape2).radius * 2;
            this.ballonPlay.height = (<p2.Circle>boxShape2).radius * 2;
            this.ballonPlay.anchorOffsetX = this.ballonPlay.width / 2;
            this.ballonPlay.anchorOffsetY = this.ballonPlay.height / 2;
            this.ballon.displays = [this.ballonPlay];
            var skeletonData = RES.getRes("qiqiu0"+imagNum+"_ske_json");
            var textureData = RES.getRes("qiqiu0"+imagNum+"_tex_json");
            var texture = RES.getRes("qiqiu0"+imagNum+"_tex_png");
            var factory = new dragonBones.EgretFactory();
            factory.parseDragonBonesData(skeletonData);
            factory.parseTextureAtlasData(textureData, texture);
            let armatureDisplay = factory.buildArmatureDisplay("armatureName");
            armatureDisplay.animation.play("aniIdle", 0);
            this.addChild(armatureDisplay);
            armatureDisplay.x = this.ballon.position[0];
            armatureDisplay.y = 1280 - this.ballon.position[1] + 175;
            this.addChild(armatureDisplay);
            // this.addChild(this.ballonPlay);
            // egret.log(this.ballonPlay.parent);
            this.world.on("beginContact", (evt) => {
                onhit(evt, this);
                function onhit(evt, this_obj): void {
                    let bodyA: p2.Body = evt.bodyA;
                    let bodyB: p2.Body = evt.bodyB;
                    switch (evt.bodyA.id) {
                        case (3):
                            this_obj.playAnimation();
                            //  this_obj.removeChild(armatureDisplay);
                            //  setTimeout(() => { this_obj.tiaozhuan(); this_obj.addChild(armatureDisplay); }, 500);
                            //  this_obj.tiaozhuan();

                            break;
                    }
                    // this.playAnimation();
                }

            })

        }

        private loadResource() {

           

            let q = 0;
            var urlloader: egret.URLLoader = new egret.URLLoader();
            var urlreq: egret.URLRequest = new egret.URLRequest();
            urlreq.url = this.url1[q];
            urlloader.load(urlreq);
            urlloader.addEventListener(egret.Event.COMPLETE, () => {
                var data = urlloader.data;
                this.obj = JSON.parse(data);
                this.createObstacles();
            }, this);
            egret.setInterval(() => {
                q += 1;
                var urlloader: egret.URLLoader = new egret.URLLoader();
                var urlreq: egret.URLRequest = new egret.URLRequest();
                urlreq.url = this.url1[q];
                urlloader.load(urlreq);
                urlloader.addEventListener(egret.Event.COMPLETE, () => {
                    var data = urlloader.data;
                    this.obj = JSON.parse(data);
                    this.createObstacles();
                }, this);
            }, this, 15000);


        }
        private loadLevel(data)
        {
            let level = new PlayerBean();
            let levelNum = data[level._level].levelNum  //当前等级关卡数量
            for(let i=0;i<=levelNum;i++)
            {
                for(let j = 0;j<=data[i].A;j++)
                {
                    let k = Math.random()*data[i].A;
                    this.url1.push("resource/data/LevelA0"+i+".json");
                }for(let k =0;k<=data[i].B;k++)
                {
                    let j = Math.random()*data[k].B;
                    this.url1.push("resource/data/LevelB0"+j+".json");
                }
                for(let l =0;l<=data[i].C;l++)
                {
                    let m = Math.random()*data[i].C;
                    this.url1.push("resource/data/LevelC0"+m+".json");
                }for(let n = 0;n<=data[i].G;n++)
                {
                    let o = Math.random()*data[i].G;
                    this.url1.push("resource/data/LevelG0"+o+".json");
                }
            }
            return this.url1;
        }


        private loadResource2() {
            let urlLoader1:egret.URLLoader = new egret.URLLoader();
            let urlreq1:egret.URLRequest = new egret.URLRequest();
            urlreq1.url = "";
            urlLoader1.load(urlreq1);
            urlLoader1.addEventListener(egret.Event.COMPLETE,()=>{
                let data = urlLoader1.data;
                let req = JSON.parse(data);
                this.loadLevel(req);
            },this);
        }

        private armatureMap: any = {};
        public addConvexShape() {
            var urlloader: egret.URLLoader = new egret.URLLoader();
            var urlreq: egret.URLRequest = new egret.URLRequest();
            urlreq.url = "resource/data/BlockBox.json";
            urlloader.load(urlreq);
            urlloader.addEventListener(egret.Event.COMPLETE, () => {
                var data = urlloader.data;
                this.obj2 = JSON.parse(data);
                this.createConvex(this.obj2);
            }, this);
        }
        public createConvex(data) {
            for (let i = 1001; i <= 1020; i++) {
                if (data[i].img_name == "blockStar1") {
                    this.blockStar1 = new p2.Body();
                    this.point = data[i].vertices;
                    this.blockStar1.fromPolygon(data[i].vertices, { optimalDecomp: false });
                    this.blockStar1.position[0] = 60;
                    this.blockStar1.position[1] = 1220;
                }
                else if (data[i].img_name == "wallTriangle1") {
                    this.testPoint = data[i].vertices;
                } else if (data[i].img_name == "wallTriangle2") {
                    this.testPoint2 = data[i].vertices;
                }
            }
        }
        private playAnimation() {
            var skeletonData = RES.getRes("qiqiu00_ske_json");
            var textureData = RES.getRes("qiqiu00_tex_json");
            var texture = RES.getRes("qiqiu00_tex_png");
            var factory = new dragonBones.EgretFactory();
            factory.parseDragonBonesData(skeletonData);
            factory.parseTextureAtlasData(textureData, texture);
            let armatureDisplay = factory.buildArmatureDisplay("armatureName");
            armatureDisplay.animation.play("aniDie", 1);
            this.addChild(armatureDisplay);
            armatureDisplay.x = this.ballon.position[0];
            armatureDisplay.y = 1280 - this.ballon.position[1] + 175;
            this.ballonPlay = new egret.DisplayObject();
            let score = new PlayerBean();
            let highScore = score._score;
            if (this.score >= highScore) {
                score._score = this.score;
            }
        }
        private setMaterial(body1: p2.Body, body2: p2.Body): void {
            var material: p2.Material = this.material;
            body1.shapes[0].material = material;
            body2.shapes[0].material = material;
            var roleAndStoneMaterial = new p2.ContactMaterial(material, material, { restitution: 0.7, friction: 0 });//弹性，摩擦力
            this.world.addContactMaterial(roleAndStoneMaterial);
        }

        private endContact(event) {
        }

        public addCycleobstacles(x, y, [vX, vY], g, radius, ratio, delay, mass) {
            var boxShape: p2.Shape = new p2.Circle({ radius: radius * ratio });
            var boxBody: p2.Body = new p2.Body({ mass: mass, position: [x + radius * ratio, 2300 - y - radius * ratio + 1280] });
            boxShape.collisionGroup = OBSCALES;
            boxShape.collisionMask = CONTROL | OBSCALES;
            boxBody.addShape(boxShape);
            this.world.addBody(boxBody);

            if (delay == 0) {
                boxBody.velocity = [vX, vY];
            } else {
                boxBody.velocity[1] = vY;
                egret.setTimeout(() => { boxBody.velocity[0] = vX; }, this, delay * 1000)
            }
            boxBody.gravityScale = g;
            // boxBody.mass = 100;
            var cycleobstacles: egret.DisplayObject = this.createBitmapByName("blockCircle1_png");
            cycleobstacles.width = (<p2.Circle>boxShape).radius * 2;
            cycleobstacles.height = (<p2.Circle>boxShape).radius * 2;
            cycleobstacles.anchorOffsetX = cycleobstacles.width / 2;
            cycleobstacles.anchorOffsetY = cycleobstacles.height / 2;
            boxBody.displays = [cycleobstacles];
            this.addChild(cycleobstacles);
            return boxBody;
        }
        public addobstacles(x, y, [vX, vY], g, [w, h], ratio, mass, angle, delay, imag) {
            if (imag == "blockSquare1") {
                var boxShape: p2.Shape = new p2.Box({ width: w * ratio, height: h * ratio });
                var boxBody: p2.Body = new p2.Body({ mass: mass, angle: (180 - angle) });
                if (angle == 90) {
                    boxBody.position = [x + ratio * h / 2, 2300 - y - ratio * w / 2 + 1280]
                } else {
                    boxBody.position = [x + Math.sqrt((Math.pow(h, 2) + Math.pow(w, 2)) / 2) * Math.sin(angle), 2300 - y - Math.sqrt((Math.pow(h, 2) + Math.pow(w, 2)) / 2) * Math.cos(angle) + 1280];//w / 5 * Math.cos(180 - angle)
                }
                boxShape.collisionGroup = OBSCALES;
                boxShape.collisionMask = CONTROL | OBSCALES;
                boxBody.addShape(boxShape);
                this.world.addBody(boxBody);
                if (delay == 0) {
                    boxBody.velocity = [vX, vY];
                } else {
                    boxBody.velocity[1] = vY;
                    egret.setTimeout(() => { boxBody.velocity[0] = vX; }, this, delay * 1000)
                }
                boxBody.gravityScale = g;
                boxBody.angle = (180 - angle) * Math.PI / 180;
                // boxBody.mass = 100;
                this.world.addBody(boxBody);
                var obstacles: egret.DisplayObject = this.createBitmapByName("blockSquare1_png");
                obstacles.width = (<p2.Box>boxShape).width;
                obstacles.height = (<p2.Box>boxShape).height;
                obstacles.anchorOffsetX = obstacles.width / 2;
                obstacles.anchorOffsetY = obstacles.height / 2;
                boxBody.displays = [obstacles];
                this.addChild(obstacles);
                return boxBody;
            }
            else if (imag == "blockSquare3") {
                var boxShape: p2.Shape = new p2.Box({ width: w * ratio, height: h * ratio });
                var boxBody: p2.Body = new p2.Body({ mass: mass, angle: (180 - angle) });
                if (angle == 90) {
                    boxBody.position = [x + h, 2300 - y + 1280]
                } else {
                    boxBody.position = [x + w / 5 * Math.cos(180 - angle), 2300 - y + 1280];
                }
                boxShape.collisionGroup = OBSCALES;
                boxShape.collisionMask = CONTROL | OBSCALES;
                boxBody.addShape(boxShape);
                this.world.addBody(boxBody);
                if (delay == 0) {
                    boxBody.velocity = [vX, vY];
                } else {
                    boxBody.velocity[1] = vY;
                    egret.setTimeout(() => { boxBody.velocity[0] = vX; }, this, delay * 1000)
                }
                boxBody.gravityScale = g;
                boxBody.angle = (180 - angle) * Math.PI / 180;
                // boxBody.mass = 100;
                this.world.addBody(boxBody);
                var obstacles: egret.DisplayObject = this.createBitmapByName("blockSquare3_png");
                obstacles.width = (<p2.Box>boxShape).width;
                obstacles.height = (<p2.Box>boxShape).height;
                obstacles.anchorOffsetX = obstacles.width / 2;
                obstacles.anchorOffsetY = obstacles.height / 2;
                boxBody.displays = [obstacles];
                this.addChild(obstacles);
                return boxBody;
            }

        }
        public addWallobstacles(x, y, [vX, vY], g, [w, h], ratio, mass, angle, delay) {
            // var boxShape: p2.Shape = new p2.Box({ width: h * ratio, height: w * ratio });
            var boxBody: p2.Body = new p2.Body({ mass: mass });
            boxBody.fromPolygon([[x, y], [x, y - w * ratio], [x + h * ratio, y - w * ratio], [x + h * ratio, y]], { optimalDecomp: false })
            if (angle == 90) {
                boxBody.position = [x - 30, 2300 - y + 1280]
            } else {
                boxBody.position = [x + w / 5 * Math.cos(180 - angle), 2300 - y + 1280];
            }
            // boxShape.collisionGroup = OBSCALES;
            // boxShape.collisionMask = CONTROL | OBSCALES;
            boxBody.type = p2.Body.KINEMATIC;
            // boxBody.addShape(boxShape);
            this.world.addBody(boxBody);
            if (delay == 0) {
                boxBody.velocity = [vX, vY];
            } else {
                boxBody.velocity[1] = vY;
                egret.setTimeout(() => { boxBody.velocity[0] = vX; }, this, delay * 1000)
            }
            boxBody.gravityScale = g;
            // boxBody.mass = 100;
            this.world.addBody(boxBody);
            var obstacles: egret.DisplayObject = this.createBitmapByName("wallSquare3_png");
            obstacles.width = h * ratio;
            obstacles.height = w * ratio;
            obstacles.anchorOffsetX = h / 2 * ratio;
            obstacles.anchorOffsetY = w / 2 * ratio;
            boxBody.displays = [obstacles];
            this.addChild(obstacles);
            return boxBody;
        }
        public addStarobstacles(x, y, [vX, vY], g, ratio, angleVelocity, delay, mass) {
            let blockStar: p2.Body = new p2.Body({ mass: mass });
            let blockStarShape: p2.Shape = new p2.Circle({ radius: 60 * ratio });
            blockStar.position[0] = x;
            blockStar.position[1] = 2300 - y + 1280;
            if (delay == 0) {
                blockStar.velocity = [vX, vY];
            } else {
                blockStar.velocity[1] = vY;
                egret.setTimeout(() => { blockStar.velocity[0] = vX; }, this, delay * 1000)
            }
            blockStar.gravityScale = g;
            blockStarShape.collisionGroup = OBSCALES;
            blockStarShape.collisionMask = CONTROL | OBSCALES;
            blockStar.angularVelocity = angleVelocity * Math.PI / 180;
            blockStar.addShape(blockStarShape);
            this.world.addBody(blockStar);
            var starObstacles: egret.DisplayObject = this.createBitmapByName("blockStar1_png");
            starObstacles.width = 120 * ratio;
            starObstacles.height = 120 * ratio;
            starObstacles.anchorOffsetX = 60 * ratio;
            starObstacles.anchorOffsetY = 60 * ratio;
            blockStar.displays = [starObstacles];
            this.addChild(starObstacles);
            return blockStar;
        }

        private addtriangleobstacles(x, y, [vX, vY], g, ratio, imag, angle, delay) {
            for (let i = 1001; i <= 1020; i++) {
                if (imag == "wallTriangle1") {
                    let triangleobstaclesShape: p2.Convex = new p2.Convex({ vertices: [[x, y], [x, y - 1400], [x + 240, y - 1400]] });
                    let triangleobstacles: p2.Body = new p2.Body();
                    triangleobstacles.position = [x, 2300 - y + 1280];
                    if (delay == 0) {
                        triangleobstacles.velocity = [vX, vY];
                    } else {
                        triangleobstacles.velocity[1] = vY;
                        egret.setTimeout(() => { triangleobstacles.velocity[0] = vX; }, this, delay * 1000)
                    }
                    triangleobstaclesShape.collisionGroup = OBSCALES;
                    triangleobstaclesShape.collisionMask = CONTROL | OBSCALES;
                    triangleobstacles.type = p2.Body.KINEMATIC;
                    triangleobstacles.addShape(triangleobstaclesShape);
                    this.world.addBody(triangleobstacles);
                    let trianglePng: egret.DisplayObject = this.createBitmapByName("wallTriangle1_png");
                    trianglePng.width = 240 * ratio;
                    trianglePng.height = 1400 * ratio;
                    triangleobstacles.displays = [trianglePng];
                    this.addChild(trianglePng);
                    return triangleobstacles;
                } else if (imag == "wallTriangle2") {
                    // let triangleobstaclesShape2: p2.Convex = new p2.Convex({ vertices: [[x, y], [x - 240, y - 1400], [x, y - 1400]] });
                    let triangleobstacles2: p2.Body = new p2.Body();
                    triangleobstacles2.fromPolygon([[x + 240 * ratio, y], [x, y - 1400 * ratio], [x + 240 * ratio, y - 1400 * ratio]], { optimalDecomp: false })
                    triangleobstacles2.position = [x + 240, 2300 - y + 1280];
                    if (delay == 0) {
                        triangleobstacles2.velocity = [vX, vY];
                    } else {
                        triangleobstacles2.velocity[1] = vY;
                        egret.setTimeout(() => { triangleobstacles2.velocity[0] = vX; }, this, delay * 1000)
                    }
                    // triangleobstaclesShape2.collisionGroup = OBSCALES;
                    // triangleobstaclesShape2.collisionMask = CONTROL | OBSCALES;
                    triangleobstacles2.type = p2.Body.KINEMATIC;
                    // triangleobstacles2.addShape(triangleobstaclesShape2);
                    this.world.addBody(triangleobstacles2);
                    let trianglePng2: egret.DisplayObject = this.createBitmapByName("wallTriangle2_png");
                    trianglePng2.width = 240 * ratio;
                    trianglePng2.height = 1400 * ratio;
                    trianglePng2.anchorOffsetX = trianglePng2.width / 2;
                    trianglePng2.anchorOffsetY = trianglePng2.height / 2;
                    triangleobstacles2.displays = [trianglePng2];
                    this.addChild(trianglePng2);
                    return triangleobstacles2;
                } else if (imag == "wallTriangle3") {
                    // let triangleobstaclesShape3: p2.Convex = new p2.Convex({ vertices: [[x, y], [x, y - 78], [x + 139, y - 78]] });
                    let triangleobstacles3: p2.Body = new p2.Body();
                    triangleobstacles3.fromPolygon([[x, y], [x + 78 * ratio, y], [x + 78 * ratio, y + 139 * ratio]], { optimalDecomp: false })
                    triangleobstacles3.position = [x + ratio * 78 / 2, 2300 - y + 139 * ratio / 2 + 1280];
                    triangleobstacles3.angle = -angle * Math.PI / 180;
                    if (delay == 0) {
                        triangleobstacles3.velocity = [vX, vY];
                    } else {
                        triangleobstacles3.velocity[1] = vY;
                        egret.setTimeout(() => { triangleobstacles3.velocity[0] = vX; }, this, delay * 1000)
                    }
                    // triangleobstaclesShape3.collisionGroup = OBSCALES;
                    // triangleobstaclesShape3.collisionMask = CONTROL | OBSCALES;
                    triangleobstacles3.type = p2.Body.KINEMATIC;
                    // triangleobstacles3.addShape(triangleobstaclesShape3);
                    this.world.addBody(triangleobstacles3);
                    let trianglePng3: egret.DisplayObject = this.createBitmapByName("wallTriangle3_png");
                    trianglePng3.width = 139 * ratio;
                    trianglePng3.height = 78 * ratio;
                    trianglePng3.anchorOffsetX = 70 * ratio;
                    trianglePng3.anchorOffsetY = 39 * ratio;
                    triangleobstacles3.displays = [trianglePng3];
                    this.addChild(trianglePng3);
                }
                else if (imag == "wallTriangle4") {
                    // let triangleobstaclesShape4: p2.Convex = new p2.Convex({ vertices: [[x, y], [x - 139, y - 78], [x, y - 78]] });
                    let triangleobstacles4: p2.Body = new p2.Body();
                    triangleobstacles4.fromPolygon([[x + 139 * ratio, y], [x, y - 78 * ratio], [x + 139 * ratio, y - 78 * ratio]], { optimalDecomp: false })
                    triangleobstacles4.position = [x, 2300 - y + 1280];
                    triangleobstacles4.angle = -angle * Math.PI / 180;
                    if (delay == 0) {
                        triangleobstacles4.velocity = [vX, vY];
                    } else {
                        triangleobstacles4.velocity[1] = vY;
                        egret.setTimeout(() => { triangleobstacles4.velocity[0] = vX; }, this, delay * 1000)
                    }
                    // triangleobstaclesShape4.collisionGroup = OBSCALES;
                    // triangleobstaclesShape4.collisionMask = CONTROL | OBSCALES;
                    triangleobstacles4.type = p2.Body.KINEMATIC;
                    // triangleobstacles4.addShape(triangleobstaclesShape4);
                    this.world.addBody(triangleobstacles4);
                    let trianglePng4: egret.DisplayObject = this.createBitmapByName("wallTriangle4_png");
                    trianglePng4.width = 139 * ratio;
                    trianglePng4.height = 78 * ratio;
                    trianglePng4.anchorOffsetX = 70 * ratio;
                    trianglePng4.anchorOffsetY = 39 * ratio;
                    triangleobstacles4.displays = [trianglePng4];
                    this.addChild(trianglePng4);

                }
            }
        }
        private addoctagonobstacles(x, y, [vX, vY], g, ratio, imag, angle, angleVelocity, delay, mass) {
            let octagon: p2.Body = new p2.Body({ mass: mass });
            octagon.fromPolygon([[x, y], [x - 35, y - 35], [x - 35, y - 85], [x, y - 120], [x + 50, y - 120], [x + 85, y - 85], [x + 85, y - 35], [x + 50, y]], { optimalDecomp: false });
            octagon.position = [x, 2300 - y + 1280];
            if (delay == 0) {
                octagon.velocity = [vX, vY];
            } else {
                octagon.velocity[1] = vY;
                egret.setTimeout(() => { octagon.velocity[0] = vX; }, this, delay * 1000);
            }
            octagon.gravityScale = g;
            this.world.addBody(octagon);
            let trianglePng: egret.DisplayObject = this.createBitmapByName("blockOctagon1_png");
            trianglePng.width = 120 * ratio;
            trianglePng.height = 120 * ratio;
            trianglePng.anchorOffsetX = 60 * ratio;
            trianglePng.anchorOffsetY = 60 * ratio;
            octagon.displays = [trianglePng];
            this.addChild(trianglePng);
            return octagon;
        }
        private addhexagonobstacles(x, y, [vX, vY], g, ratio, imag, angle, angleVelocity, delay, mass) {
            let hexagon: p2.Body = new p2.Body({ mass: mass });
            hexagon.fromPolygon([[x, y], [x - 53, y - 30], [x - 53, y - 90], [x, y - 120], [x + 53, y - 90], [x + 53, y - 30]], { optimalDecomp: false });
            hexagon.position = [x, 2300 - y + 1280];
            if (delay == 0) {
                // hexagon.velocity = [vX, vY];
            } else {
                // hexagon.velocity[1] = vY;
                egret.setTimeout(() => { hexagon.velocity = [vX, vY]; }, this, delay * 1000);
            }
            hexagon.gravityScale = g;
            this.world.addBody(hexagon);
            let trianglePng: egret.DisplayObject = this.createBitmapByName("blockHexagon1_png");
            trianglePng.width = 106 * ratio;
            trianglePng.height = 120 * ratio;
            trianglePng.anchorOffsetX = 53 * ratio;
            trianglePng.anchorOffsetY = 60 * ratio;
            hexagon.displays = [trianglePng];
            this.addChild(trianglePng);
            return hexagon;

        }
        private addPolygonobstacles(x, y, [vX, vY], g, ratio, imag, angle, angleVelocity, delay, mass) {
            let polygon: p2.Body = new p2.Body({ mass: mass });
            polygon.fromPolygon([[x, y], [x, y - 261], [x + 75, y - 78], [x + 391, y - 75], [x + 391, y - 261], [x + 466, y - 261], [x + 466, y]], { optimalDecomp: false });
            polygon.position = [x, 2300 - y + 1280];
            if (delay == 0) {
                polygon.velocity = [vX, vY];
            } else {
                polygon.velocity[1] = vY;
                egret.setTimeout(() => { polygon.velocity[0] = vX; }, this, delay * 1000);
            }
            polygon.gravityScale = g;
            this.world.addBody(polygon);
            let trianglePng: egret.DisplayObject = this.createBitmapByName("blockPolygon1_png");
            trianglePng.width = 466 * ratio;
            trianglePng.height = 261 * ratio;
            trianglePng.anchorOffsetX = 233 * ratio;
            trianglePng.anchorOffsetY = 130 * ratio;
            polygon.displays = [trianglePng];
            this.addChild(trianglePng);
            return polygon;

        }

        private addRecttriangleobstacles(x, y, [vX, vY], g, ratio, imag, angle, angleVelocity, delay, mass) {
            let triangleobstacles: p2.Body = new p2.Body({ mass: mass });
            triangleobstacles.fromPolygon([[x + 63 * ratio, y], [x, y - 109 * ratio], [x + 127 * ratio, y - 109 * ratio]], { optimalDecomp: false })
            triangleobstacles.position = [x, 2300 - y + 1280];
            if (delay == 0) {
                triangleobstacles.velocity = [vX, vY];
            } else {
                triangleobstacles.velocity[1] = vY;
                egret.setTimeout(() => { triangleobstacles.velocity[0] = vX; }, this, delay * 1000);
            }
            triangleobstacles.angularVelocity = angleVelocity;
            this.world.addBody(triangleobstacles);
            let trianglePng: egret.DisplayObject = this.createBitmapByName("blockTriangle1_png");
            trianglePng.width = 127 * ratio;
            trianglePng.height = 109 * ratio;
            trianglePng.anchorOffsetX = 63 * ratio;
            trianglePng.anchorOffsetY = 55 * ratio;
            triangleobstacles.displays = [trianglePng];
            this.addChild(trianglePng);
            return triangleobstacles;
        }
        private addRhombusobstacles(x, y, [vX, vY], g, [w, h], ratio, mass, angle, delay, imag) {
            var boxBody: p2.Body = new p2.Body({ mass: mass });
            boxBody.fromPolygon([[x, y], [x - 77 * ratio, y - 107 * ratio], [x, y - 214 * ratio], [x + 77 * ratio, y - 77 * ratio]], { optimalDecomp: false })
            boxBody.position = [x + 77 * ratio, 2300 - y - 154 * ratio + 1280];
            if (delay == 0) {
                boxBody.velocity = [vX, vY];
            } else {
                boxBody.velocity[1] = vY;
                egret.setTimeout(() => { boxBody.velocity[0] = vX; }, this, delay * 1000);
            }
            this.world.addBody(boxBody);
            boxBody.gravityScale = g;
            this.world.addBody(boxBody);
            var obstacles: egret.DisplayObject = this.createBitmapByName("blockRhombus2_png");
            obstacles.width = 107 * ratio;
            obstacles.height = 214 * ratio;
            obstacles.anchorOffsetX = 53 * ratio;
            obstacles.anchorOffsetY = 107 * ratio;
            boxBody.displays = [obstacles];
            this.addChild(obstacles);
            return boxBody;
        }

        private addWallothers1(x, y, [vX, vY], g, [w, h], ratio, mass, angle, delay) {
            var boxBody: p2.Body = new p2.Body({ mass: 1 });
            boxBody.fromPolygon([[x, y], [x, y - 1500 * ratio], [x + 120 * ratio, y - 1500 * ratio], [x + 120 * ratio, y - 1060 * ratio], [x + 180 * ratio, y - 980 * ratio], [x + 180 * ratio, y - 530 * ratio], [x + 240 * ratio, y - 450 * ratio], [x + 240 * ratio, y]], { optimalDecomp: false })
            boxBody.position = [x, 2300 - y + 1280];
            if (delay == 0) {
                boxBody.velocity = [vX, vY];
            } else {
                boxBody.velocity[1] = vY;
                egret.setTimeout(() => { boxBody.velocity[0] = vX; }, this, delay * 1000);
            }
            // crossobstaclesShape.collisionGroup = OBSCALES;
            // crossobstaclesShape.collisionMask = CONTROL | OBSCALES;
            // boxBody.addShape(crossobstaclesShape);
            this.world.addBody(boxBody);
            if (delay == 0) {
                boxBody.velocity = [vX, vY];
            } else {
                boxBody.velocity[1] = vY;
                egret.setTimeout(() => { boxBody.velocity[0] = vX; }, this, delay);
            }
            boxBody.gravityScale = g;
            // boxBody.mass = 100;
            this.world.addBody(boxBody);
            var obstacles: egret.DisplayObject = this.createBitmapByName("wallOtherA1_png");
            obstacles.width = 240 * ratio;
            obstacles.height = 1500 * ratio;
            obstacles.anchorOffsetX = 120 * ratio;
            obstacles.anchorOffsetY = 750 * ratio;
            boxBody.displays = [obstacles];
            this.addChild(obstacles);
            return boxBody;
        }
        private addWallothers2(x, y, [vX, vY], g, [w, h], ratio, mass, angle, delay) {
            var boxBody: p2.Body = new p2.Body({ mass: 1 });
            boxBody.fromPolygon([[x, y], [x, y - 450 * ratio], [x + 60 * ratio, y - 530 * ratio], [x + 60 * ratio, y - 980 * ratio], [x + 120 * ratio, y - 1060 * ratio], [x + 120 * ratio, y - 1500 * ratio], [x + 240 * ratio, y - 1500 * ratio], [x + 240 * ratio, y]], { optimalDecomp: false })
            boxBody.position = [x, 2300 - y + 1280];
            if (delay == 0) {
                boxBody.velocity = [vX, vY];
            } else {
                boxBody.velocity[1] = vY;
                egret.setTimeout(() => { boxBody.velocity[0] = vX; }, this, delay * 1000);
            }
            // crossobstaclesShape.collisionGroup = OBSCALES;
            // crossobstaclesShape.collisionMask = CONTROL | OBSCALES;
            // boxBody.addShape(crossobstaclesShape);
            this.world.addBody(boxBody);
            boxBody.gravityScale = g;
            // boxBody.mass = 100;
            this.world.addBody(boxBody);
            var obstacles: egret.DisplayObject = this.createBitmapByName("wallOtherA2_png");
            obstacles.width = 240 * ratio;
            obstacles.height = 1500 * ratio;
            obstacles.anchorOffsetX = 120 * ratio;
            obstacles.anchorOffsetY = 750 * ratio;
            boxBody.displays = [obstacles];
            this.addChild(obstacles);
            return boxBody;
        }
        private addcrossobstacles(x, y, [vX, vY], g, ratio, angleVelocity, delay, mass) {
            // let crossobstaclesShape: p2.Convex = new p2.Convex({ vertices: [[x,y],[x,y-45*ratio],[x-45*ratio,y-45*ratio],[x-45*ratio,y-75*ratio],[x,y-75*ratio],[x,y-120*ratio],[x+30*ratio,y-120*ratio],[x+30*ratio,y-75*ratio],[x+75*ratio,y-75*ratio],[x+75*ratio,y-45*ratio],[x+30*ratio,y-45*ratio],[x+30*ratio,y]]});
            // var boxShape: p2.Shape = new p2.Box({ width:120 * ratio, height: 120 * ratio });
            var boxBody: p2.Body = new p2.Body({ mass: mass });
            boxBody.fromPolygon([[x, y], [x, y - 45 * ratio], [x - 45 * ratio, y - 45 * ratio], [x - 45 * ratio, y - 75 * ratio], [x, y - 75 * ratio], [x, y - 120 * ratio], [x + 30 * ratio, y - 120 * ratio], [x + 30 * ratio, y - 75 * ratio], [x + 75 * ratio, y - 75 * ratio], [x + 75 * ratio, y - 45 * ratio], [x + 30 * ratio, y - 45 * ratio], [x + 30 * ratio, y]], { optimalDecomp: false })
            boxBody.position = [x, 2300 - y + 1280];
            // boxBody.velocity = [vX, vY]
            // crossobstaclesShape.collisionGroup = OBSCALES;
            // crossobstaclesShape.collisionMask = CONTROL | OBSCALES;
            // boxBody.addShape(crossobstaclesShape);
            if (delay == 0) {
                boxBody.velocity = [vX, vY];
            } else {
                boxBody.velocity[1] = vY;
                egret.setTimeout(() => { boxBody.velocity[0] = vX; }, this, delay * 1000);
            }
            boxBody.gravityScale = g;
            boxBody.angularVelocity = angleVelocity * Math.PI / 180;
            // boxBody.mass = 100;
            this.world.addBody(boxBody);
            var obstacles: egret.DisplayObject = this.createBitmapByName("blockCross1_png");
            obstacles.width = 120 * ratio;
            obstacles.height = 120 * ratio;
            obstacles.anchorOffsetX = 60 * ratio;
            obstacles.anchorOffsetY = 60 * ratio;
            boxBody.displays = [obstacles];
            this.addChild(obstacles);
            return boxBody;
        }
        private createBitmapByName(name: string): egret.Bitmap {
            var result: egret.Bitmap = new egret.Bitmap();
            var texture: egret.Texture = RES.getRes(name);
            result.texture = texture;
            return result;
        }

        private tiaozhuan() {
            AppFacade.getInstance().sendNotification(SceneNotify.CLOSE_GAME);
            AppFacade.getInstance().sendNotification(SceneNotify.OPEN_GAME_OVER);
        }
        /**设置属性后就可以与球碰撞 */
        private setAndBallHit(body: p2.Body): void {
            var shape = body.shapes[0];
            shape.collisionMask = 6;//010与001为0，010与110为1
        }


    }
    /**游戏开始界面 */
    export class BasicGameStart extends game.GameView {
        /**加载到舞台之后调用 */
        protected render(): void {
            super.render();

            this.initView();
        }
        protected initView(): void {
            var bg: Sprite = this.createBackground();
            bg.alpha = 0.5;

            //this.createBtn("开始游戏");
            //this.createTitle("游戏标题");
        }
        protected createBtn(value: string): MButton {
            var btn: game.BasicButton = this.createButton(value);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            btn.x = (this.stageWidth - btn.width) >> 1;
            btn.y = (this.stageHeight - btn.height) >> 1;
            return btn;
        }
        protected createTitle(value: string): TextField {
            var title: TextField = this.createText(0, 0, value);
            title.x = (this.stageWidth - title.width) / 2;
            title.y = (this.stageHeight - title.height) / 2 - 100;
            return title;
        }
        protected onClick(e: egret.TouchEvent): void {
            this.dispEvent(MoonEvent.START);
            egret.Tween.get(this).to({ alpha: 0 }, 300).call(this.backCall, this)
        }
        protected backCall(e: egret.TouchEvent): void {
            this.removeFromParent();
        }
        protected createImageBg(name: string): void {
            this.addChild(new game.Imag(name));
        }
    }
    /**游戏结束界面 */
    export class BasicGameOver extends BasicGameStart {
        protected txtScore: TextField;
        protected txtLevel: TextField;
        protected btnRestart: MButton;
        protected btnRank: MButton;
        //protected rankPanel:game.BasicGameRank;
        protected initView(): void {
            var bg: Sprite = this.createBackground();
            bg.alpha = 0.5;

            this.btnRestart = this.createBtn("再来一次");
            this.btnRank = this.createBtn("排行榜");
            this.btnRank.y += 100;
            this.txtScore = this.createText();
            this.txtLevel = this.createText();

            //this.rankPanel=new BasicGameRank;
        }
        public update(data: Object): void {
            this.txtScore.text = "score:" + data["score"];
            this.txtLevel.text = "level:" + data["level"];
            this.txtScore.x = (this.stageWidth - this.txtScore.width) / 2;
            this.txtLevel.x = (this.stageWidth - this.txtLevel.width) / 2;
            this.txtScore.y = (this.stageHeight - this.txtScore.height) / 2 - 60;
            this.txtLevel.y = this.txtScore.y - 60;
            GameData.score = data["score"];
        }
        protected onClick(e: egret.TouchEvent): void {
            var btn: MButton = e.currentTarget as MButton;
            if (btn == this.btnRestart) {
                super.onClick(e);
            } else if (btn == this.btnRank) {

            }
        }
    }
    /**游戏设置面板*/
    export class BasicGameSet extends game.BasicView {
        protected btnClose: MButton;
        protected btnSoundBg: MoreSkinButton;
        protected btnSoundEffect: MoreSkinButton;
        public static SOUND_BG: string = "sound bg";
        public static SOUND_EFFECT: string = "sound effect";
        protected render(): void {
            super.render();
            this.initView();
        }
        protected initView(): void {
            var containerBg = this.createBackground(0, 0.5);
            this.addChild(containerBg);

            var setbg: MoonDisplayObject = new MoonDisplayObject;
            var bgWidth: number = this.stageWidth >> 1;
            var colorBg: number = 0XFF9900;
            setbg.type = Const.SHAPE_RECT_ROUND;
            setbg.data = { w: bgWidth * 1.1, h: bgWidth, ew: 100, eh: 100, c: colorBg };
            setbg.setBackground(0XFFFFFF, 5);
            setbg.x = (containerBg.width - bgWidth) >> 1;
            setbg.y = (containerBg.height - bgWidth) >> 1;
            this.addChild(setbg);

            var label1: Label = new Label("背景音乐", 0XFFFFFF);
            var label2: Label = new Label("游戏音效", 0XFFFFFF);
            label1.textField.size = 40;
            label2.textField.size = 40;
            label1.x = label2.x = 50;
            label1.y = 50; label2.y = 150;
            setbg.addChild(label1);
            setbg.addChild(label2);

            var btn = this.getToggleSwitch();
            btn.x = label1.x + label1.width + 10;
            btn.y = label1.y - 5;
            setbg.addChild(btn);
            this.btnSoundBg = btn;

            var btn = this.getToggleSwitch();
            btn.x = label2.x + label2.width + 10;
            btn.y = label2.y - 5;
            setbg.addChild(btn);
            this.btnSoundEffect = btn;

            var button: MButton = new MButton();
            button.label = "关  闭";
            button.x = (setbg.width - button.width) >> 1;
            button.y = 240;
            button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            setbg.addChild(button);
            this.btnClose = button;

        }
        protected getToggleSwitch(): MoreSkinButton {
            var normal: Sprite = game.Skin.switchOn;
            var down: Sprite = game.Skin.switchOn;
            var normal2: Sprite = game.MoonUI.getSwitch(game.Color.bule, game.Color.white)
            var down2: Sprite = game.MoonUI.getSwitch(game.Color.red, game.Color.white)
            var btn: MoreSkinButton = new MoreSkinButton([normal, down, normal2, down2]);
            btn.toggleSwitch = true;
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            return btn;
        }
        protected onClick(e: egret.TouchEvent): void {
            var btn: MButton = e.currentTarget as MButton;
            var value: number;
            /*if(btn==this.btnSoundBg){
                value=this.btnSoundBg.currentPage;
                alertAuto("背景音乐"+(value==1?"开":"关"),1);
                BasicGameStorage.localWrite(BasicGameSet.SOUND_BG,value.toString());
                this.dispEvent(MoonEvent.CHANGE,this.btnSoundBg.currentPage,"soundBg");
            }else if(btn==this.btnSoundEffect){
                value=this.btnSoundEffect.currentPage;
                alertAuto("游戏音效"+(value==1?"开":"关"),1);
                BasicGameStorage.localWrite(BasicGameSet.SOUND_EFFECT,value.toString());
                this.dispEvent(MoonEvent.CHANGE,this.btnSoundEffect.currentPage,"soundEffect");
            }else if(btn==this.btnClose){
                this.removeFromParent();
                this.dispEvent(MoonEvent.PLAY);
            }*/
        }
        protected setValue(): void {
            /*var value:string=BasicGameStorage.localRead(BasicGameSet.SOUND_BG)||"1";
            this.btnSoundBg.updatePage(parseInt(value));
 
            var value:string=BasicGameStorage.localRead(BasicGameSet.SOUND_EFFECT)||"1";
            this.btnSoundEffect.updatePage(parseInt(value));*/
        }
    }
    export class backGround extends egret.Sprite {
        public create(color: number) {
            let backGround: egret.Sprite = new egret.Sprite;
            backGround.graphics.drawRect(0, -2000, 720, 3280);
            backGround.graphics.beginFill(color);
            let bg: egret.Bitmap = new egret.Bitmap();
            bg.texture = RES.getRes("001_png");
            bg.x = 0;
            bg.y = 1035;
            backGround.addChild(bg);
            return backGround;
        }

    }
    export class convex extends egret.DisplayObject {
        public convex: p2.Body;
        public obj: any;
        public point: any[]
        public loadResource() {
            var urlloader: egret.URLLoader = new egret.URLLoader();
            var urlreq: egret.URLRequest = new egret.URLRequest();
            urlreq.url = "resource/data/BlockBox.json";
            urlloader.load(urlreq);
            urlloader.addEventListener(egret.Event.COMPLETE, () => {
                var data = urlloader.data;
                this.obj = JSON.parse(data);
                this.point = this.obj[1001].vertices;
                // this.bg = RES.getRes("001_png");
                this.convex = new p2.Body();
                this.convex.fromPolygon(this.point, { optimalDecomp: false });
            }, this);
            return this.convex;
        }
    }

}