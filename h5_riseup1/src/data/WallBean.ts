// TypeScript file
module game
{
    export class WallBean
    {
        public point: number[]  //位置坐标
        public color: string;   //颜色
        public coefficient: number    //碰撞系数
        public sides: number    //边数
        public radius: number   //半径
        public vertices: number[]   //顶点坐标
        public axis: number[]    //边的法向量(可缺省)

        public constructor(){}
    }
}