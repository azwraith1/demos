// // TypeScript file
// var SHAPE={rect:"rect",circle:"circle"}
// var MOON_FTP:number=24;
// var factor:number = 50;
// class MImage extends Image{};
// module game
// {
//     export class BallonItem extends egret.Sprite
//     {
//         private world: P2World;
//         private data: any;
//         public sprite:egret.Bitmap;
//         private stageW:number;
//         private stageH:number;
//     public constructor(){
//         super();
//         this.init();
//     }
//     private init()
//     {
//         var stageW:number = egret.MainContext.instance.stage.stageWidth;
//         var stageH:number = egret.MainContext.instance.stage.stageHeight;
//         this.stageH = stageH;
//         this.stageW = stageW;
//         this.sprite = new egret.Bitmap();
//         this.sprite.texture = RES.getRes("resource/assets/block1.png");
//         var spriteShape = new p2.Circle();
//         spriteShape.material = new p2.Material(1);
//         var heroBody = new p2.Body({
//             mass: 1,
//             position: [stageW*0.5/factor, stageH*0.5/factor],
//             fixedRotation: true
//         });
//         //this.createBody("ballon","circle",p2.Body.DYNAMIC);
//     }
//     private createBody(name:string,shapeType:string=SHAPE.rect,type:number=p2.Body.KINEMATIC):p2.Body
//     {
//         var world:P2World=this.world;
//         var skin:MImage=this.createSkin(name);
//         var body:p2.Body;
//         //if(shapeType==SHAPE.rect)           body=world.createPolygon(skin.width,skin.height,type);
//          if(shapeType==SHAPE.circle)    body=world.createPolygon(0,10,p2.Circle.HEIGHTFIELD,[0,0],[10,10],[0,0]);
//         body.userData.skin=skin;
//         body.userData["hit"]=true;
//         this.setAndBallHit(body);
//         return body;
//     }
//     private setAndBallHit(body:p2.Body):void
//     {
//         var shape=body.shapes[0];
//         shape.collisionMask=6;//010与001为0，010与110为1
//     }
//     private createSkin(name:string):MImage
//     {
//         var skin;
//         skin.x=-500;//避免在一出现的时候会在左上角闪现
//         skin.setAnchorCenter();
//         this.addChild(skin);
//         return skin;
//     }
//     }
//     export class Image extends MoonContainer{
//         protected skinName:string;
//         protected skinImage:Scale9Image;
//         protected position:egret.Point;
//         public bgWidth:number;
//         public bgHeight:number;
// 		public constructor(skinName:string="")
//         {
//             super();
//             if(skinName!=""){
//                 this.skinName=skinName;
//                 this.position=new egret.Point();
//                 this.addBitmap();
//                 this.bgWidth=this.width;
//                 this.bgHeight=this.height;
//             }
//         }
//         public addBitmap():void
//         {
//             if(RES.hasRes(this.skinName)){
//                 this.skinImage=new Scale9Image(this.skinName);
//                 this.skinImage.smoothing=true;
//                 this.addChild(this.skinImage);
//             }else{
//                 //trace("找不到资源："+this.skinName)
//                 //egret.error("找不到key"+this.skinName);
//             }
//         }
//         /**设置锚点在中心 */
//         public setAnchorCenter():void
//         {
//             this.anchorOffsetX=this.width>>1;
//             this.anchorOffsetY=this.height>>1;
//         }
// 	}
//     /**图像容器类 */
//     export class BasicContainer extends Image{
//         protected items:any[]=[];
//         protected index:number=0;
//         protected skinImage;
//         public addItem(item:any):void{
//             this.items.push(item);
//         }
//         public removeItem(index:number):void{
//             if(this.hasItem(index)){
//                 this.items.splice(index,1);
//             }
//         }
// 		public getItem(index:number):any{
// 			return this.items[index];
// 		}
//         public hasItem(index:number):boolean{
// 			return this.items.length>0&&(index>=0&&index<this.items.length);
// 		}
// 		public getNextItem():any{
// 			return this.items[this.index++]; 
// 		}
// 		public reset():void{
// 			this.index=0;
// 		}
//     }
//     /**图像贴图类 */
//     export class ImageChartlet extends BasicContainer {
//         public constructor(skinName:string,count:number=1){
//             super();
//             this.skinName=skinName;
//             for(var i:number=0;i<count;i++){
//                 this.items.push(this.getBitmap());
//             }
//         }
//         private getBitmap()
//         {
//             var skin
//             return skin;
//         }
//         /**竖排获横排 */
//         public layout(type:string,interval:number=0):void
//         {
//             //if(type==Const.VERTICAL)        SimpleLayout.displayRank(this.items,1,interval,interval,0,0);
//             //else if(type==Const.HORIZONTAL) SimpleLayout.displayRank(this.items,this.items.length,interval,interval,0,0);
//         }
//         /**多行排列，xNum是一排排几个 */
//         public setMultiLine(xNum:number,interval:number=0):void
//         {
//             //SimpleLayout.displayRank(this.items,xNum,interval,interval,0,0);
//         }
//     }
//     export class Scale9Image extends egret.Bitmap
// 	{
// 		public constructor(name:string,rect:egret.Rectangle=null)
//         {
//             super();
// 			if(RES.hasRes(name)){
// 				this.texture = RES.getRes(name);
// 				this.scale9Grid=rect||new egret.Rectangle(8,8,2,2);
// 			}else{
// 				 egret.error("找不到资源："+name);
// 			}
// 		}
// 	}
//     /**图像动画类 */
//     export class ImageAnimation extends BasicContainer{
//         protected timer:egret.Timer;
//         protected _ftp:number=MOON_FTP;
//         public loop:boolean;
//         public constructor(skinName:string="",start:number,end:number,type:string="png"){
//             super();
//             for(var i:number=start;i<=end;i++){
//                 this.items.push(skinName+i+"_"+type);
//             }
//             this.skinName=this.getItem(0);
//             this.addBitmap();
//             this.createTime();
//         }
//         protected createTime():void
//         {
//             if(this.timer==null){
//                 this.timer=new egret.Timer(1000/this.ftp,0);
//                 this.timer.addEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
//             }
//         } 
//         protected onTimer():void
//         {
//             if(this.hasItem(++this.index)){
//                 this.gotoAndStop(this.index);
//             }else{
//                 if(this.loop){
//                     this.reset();
//                     this.gotoAndStop(this.index);
//                 }else{
//                     this.timer.stop();
//                 }
//             }
//         }
//         public gotoAndStop(index:number):void{
//             if(this.hasItem(index)){
//                 this.index=index;
//                 this.skinName=this.getItem(index);
//                 this.update();
//             }
//         }
//         public gotoAndPlay(index:number):void{
//             this.index=index;
//             this.play();
//         }
//         public play():void{
//             this.timer.start();
//         }
//         public stop():void{
//             this.timer.stop();
//         }
//         public update():void
//         {
//             if(RES.hasRes(this.skinName)){
//                 this.skinImage.texture=RES.getRes(this.skinName);
//             }
//         }
//         public get currentFrame():number{return this.index}
//         public get ftp(){return this._ftp}
//         public set ftp(value:number){
//             this._ftp=value;
//             this.removeTime();
//             this.createTime();
//         }
//         protected removeTime():void
//         {
//             if(this.timer!=null){
//                 this.timer.stop();
//                 this.timer.removeEventListener(egret.TimerEvent.TIMER,this.onTimer,this);
//                 this.timer=null;
//             }
//         }
//         public dispose():void
//         {
//             this.removeTime();
//         }
//     }
//     /**图像布局类 */
//     export class ImageLayout{
//         private tw:number;
//         private th:number;
//         private image:egret.DisplayObject;
//         private static instance:ImageLayout;
// 		public static getIns():ImageLayout{
// 			if(this.instance == null) this.instance = new ImageLayout();
// 			return this.instance;
// 		}
//         public setImage(image:egret.DisplayObject):void{
//             this.image=image;
//         }
// 		public setStageWH(w:number,h:number):void{
//             this.tw=w;this.th=h;
//         }
//         public setTop(distance:number){
//             this.image.y=distance;
//         }
//         public setBottom(distance:number):void{
//             this.image.y=this.th-this.image.height-distance;
//         }
//         public setLeft(distance:number):void{
//             this.image.x=distance;
//         }
//         public setRight(distance:number):void{
//             this.image.x=this.tw-this.image.width-distance;
//         }
//         public setCenterX(distance:number=0):void{
//             this.image.x=((this.tw-this.image.width)>>1)+distance;
//         }
//         public setCenterY(distance:number=0):void{
//             this.image.y=((this.tw-this.image.width)>>1)+distance;
//         }
//         public setCenterXByPanent(image:egret.DisplayObject):void{
//             if(image.parent instanceof Image) image.x=(image.parent.bgWidth-image.width)>>1;
//             else image.x=(image.parent.width-image.width)>>1;
//         }
//         public setCenterYByPanent(image:egret.DisplayObject):void{
//             if(image.parent instanceof Image) image.y=(image.parent.bgHeight-image.height)>>1;
//             else image.y=(image.parent.height-image.height)>>1;
//         }
//     }
// } 
//# sourceMappingURL=BallonItem.js.map