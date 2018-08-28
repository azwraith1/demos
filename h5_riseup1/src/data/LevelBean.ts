/**
 * long description for the file
 *
 * @summary 关卡信息
 * @author wangtao
 *
 * Created at     : 2018-07-31 10:46:41 
 * Last modified  : 2018-08-01 14:22:22
 */
module game
{
    export class LevelBean
    {
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

        public constructor(){}
    }
}