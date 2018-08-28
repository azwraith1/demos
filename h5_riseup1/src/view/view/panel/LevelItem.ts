// TypeScript file
module game
{
    export class LevelItem extends egret.Sprite
    {
        private world: p2.World;
        protected stageWidth:number;
		protected stageHeight:number;
        private data: any;
        private removeBodys: any[] = [];//需要移除的刚体

         public constructor()
         {
             super();
             this.world = new p2.World({gravity:[0,0]});
             this.addEventListener(egret.Event.ENTER_FRAME,this.updateWorld,this);
         }

         public init()
         {
            let urlLorder: egret.URLLoader = new egret.URLLoader();
            var urlreq: egret.URLRequest = new egret.URLRequest();
            urlreq.method = egret.URLRequestMethod.GET;
            urlLorder.dataFormat = egret.URLLoaderDataFormat.TEXT;
            urlreq.url = "resource/assets/blockBox.xml";
            urlLorder.load(urlreq);
            urlLorder.addEventListener(egret.Event.COMPLETE, () => {
                let a = urlLorder.data;
                this.data = a;
                console.log(egret.XML.parse(a));
                ;
            }, this);
            this.ondataChange(this.data);
         }

         protected ondataChange(data)
         
         {
             for(let i =0 ;i<data.children[0].children.length;i++)
             {
                 if(data.children[0].children[i].children.type == "CIRCLE"){
                     this.createBallon(data.children[0].children[i].children.children.r,p2.Body.DYNAMIC,1,[0,0],[100,100],[10,10])
                 }else
                 {
                     this.createConvexBodyShape([0,100],p2.Body.DYNAMIC,[1,0],[0,100],[10,0]);
                 }
             }
         }
         private updateWorld(e:egret.Event):void
        {
            var timeStep = 1/60;
            var removeBodys:any[]=this.removeBodys;
            this.world.step(timeStep);
            var bodys=this.world.bodies;
            var l: number = bodys.length;
            for (var i: number = 0; i < l; i++) {
                var body: p2.Body = bodys[i];
                if(body.userData&&body.userData.skin){
                var skin:egret.DisplayObject=body.userData.skin;
                skin.x=body.position[0];
                skin.y=body.position[1];
                skin.rotation=body.angle*180/Math.PI;
                }else{
                if(!(body.shapes[0] instanceof p2.Plane)){
                    // this.txtWarn.x=this.txtWarn.y=200
                    // this.addChild(this.txtWarn);
                    // this.txtWarn.text="警告：有刚体没有设置皮肤"
                }
            }
        }
              for(i=0;i<removeBodys.length;i++){
                body=removeBodys[i];
                if(body.userData&&body.userData.skin){
                skin=body.userData.skin;
                if(skin.parent!=null){
                    //skin.parent.removeChild(skin);
                }
                body.userData=null;
            }
               this.world.removeBody(body);
        }
    }
    //impulse:冲量[]，worldPoint:世界坐标[]
         public getBody(mass:number=0,type:number=p2.Body.DYNAMIC,impulse:number[],worldPoint: number[],velocity: number[]):p2.Body
         {
         var body = new p2.Body({mass:mass});
         body.type=type;
         body.userData={};
         body.applyImpulse(impulse,worldPoint);
         return body;
         }
         //创建气球 
         public createBallon(radius:number,type:number = p2.Body.DYNAMIC,angle : number = 0,impulse:number[],worldPoint: number[],velocity: number[])
         {
             var body = this.getBody(10,type,[0,0],worldPoint,velocity);
             var shape:p2.Shape = new p2.Circle({radius});
             body.addShape(shape);
             //body.angle=angle;
             this.world.addBody(body);
             return body;
         }
          //创建多边形刚体
         public createConvexBodyShape(points:any[],type:number=p2.Body.DYNAMIC,impulse:number[],worldPoint: number[],velocity: number[]):p2.Body
         {
             var body = this.getBody(10,type,impulse,worldPoint,velocity);
             body.fromPolygon(points, {optimalDecomp:false});
             this.world.addBody(body);
             return body;
         }
        //创建多边形  side: 边数，radius：半径
         public createPolygon(side:number=3,radius:number=30,type:number=p2.Body.DYNAMIC,impulse:number[],worldPoint: number[],velocity: number[]):p2.Body
        {
            var body: p2.Body = this.getBody(10,type,impulse,worldPoint,velocity);
            var points:any[]=[];
            for (var i:number =0; i <side; i++) 
            {
            var x:number =  Math.cos((i * (360 / side) * Math.PI / 180)) * radius;
            var y:number =  Math.sin((i * (360 / side) * Math.PI / 180)) * radius;
            points.push([x,y]);
            }
            return this.createConvexBodyShape(points,type,impulse,worldPoint,velocity)
        }

    }
}