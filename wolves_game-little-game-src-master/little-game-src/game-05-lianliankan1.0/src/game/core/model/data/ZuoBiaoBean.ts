module game {
	export class ZuoBiaoBean {
		public x: number;
		public y: number;
		public visited;
		public wall;
		public flag;
		public index;
		public isWalled: boolean = false;
		public constructor(x, y, f) {
			this.x = x;
			this.y = y;
			this.visited = f;
			/* 0 not visit  1 tobevisit  2 visit*/
			this.wall = new Array(0, 0, 0, 0); //wall left->top->right->bottom  0:closed  1:open 2 lock
		}

		public getWallByZero() {
			var wall = _.clone(this.wall);
			var rodeArr = [];
			for (var i = 0; i < wall.length; i++) {
				if (wall[i] == 0) {
					rodeArr.push(i);
				}
			}
			return _.shuffle(rodeArr)[0];
		}
	}
}