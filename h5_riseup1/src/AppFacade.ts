/**
 * long description for the file
 *
 * @summary 程序主入口
 * @author wangtao
 *
 * Created at     : 2018-07-30 14:37:15 
 * Last modified  : 2018-07-30 14:37:34
 */


module game {
    export class AppFacade extends puremvc.Facade implements puremvc.IFacade {
        public constructor() {
            super();
       }

        public static getInstance(): AppFacade {
            if (this.instance == null) this.instance = new AppFacade();
            
            return <AppFacade><any>(this.instance);
        }

        public initializeController(): void {
            super.initializeController();
            this.registerCommand(Command.START_UP, StartUpCommand);
        }

        /**
         * 抛出start_up命令
         * @param	rootView
         */
        public startUp(rootView:egret.DisplayObjectContainer):void{
            this.sendNotification(Command.START_UP, rootView);
            this.removeCommand(Command.START_UP); //开始应用程序
        }
    }
}