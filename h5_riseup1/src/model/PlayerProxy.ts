/**
 * long description for the file
 *
 * @summary 玩家数据管理模块
 * @author wangtao
 *
 * Created at     : 2018-07-30 14:35:56 
 * Last modified  : 2018-08-24 19:10:09
 */

module game {
    export class PlayerProxy extends puremvc.Proxy implements puremvc.IProxy {
        public constructor() {
            super();
        }
        public playerBean: PlayerBean;
        public ballonInfo: BallonBean;
        public levelInfo: LevelBean;
        public wallInfo: WallBean;
        public isCycle: boolean;
        public side: number;   //边数
        public radius: number; //半径
        public point: number[];       //位置坐标
        public impulse: number[];     //初始冲量
        public velocity: number[];    //初速度
        public color: string;         //颜色
        public weight: number;        //重量
        public num: number;           //数量
        public coefficient: number;   //碰撞系数
        public delay: number          //运动延迟时间
        public vertices: number[]     //顶点坐标
        public _score:number = 0;
        public _highScore: number = 0;
        public _balloonImag: string ="";
        public _level:number = 0;
        public _ballNum:number = 0;

   public getplayerBean(): PlayerBean
   {
       return this.playerBean;
   }
   public setPlayerData(playerData) {
            this.playerBean = playerData;
            this._score = playerData.score;
            this._balloonImag = playerData.balloonImag;
            this._highScore = playerData.highScore;
            this._level = playerData.level;
            this._ballNum = playerData.ballNum;
        }

   public get BallonBean()
   {
       return this.BallonBean;
   }
   public set BallonBean(ballonData: BallonBean)
   {
       this.ballonInfo = ballonData;
   }

   public get LevelBeans(): LevelBean
   {
       return this.LevelBean;
   }
   public set LevelBean(levelData: LevelBean)
   {
       this.levelInfo = levelData;
       this.point = levelData.point;
       
   }

   public get WallBean()
   {
       return this.wallInfo;
   }
   public set WallBean(wallData:WallBean)
   {
       this.wallInfo = wallData;
   }

}
}
