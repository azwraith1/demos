/**
 * long description for the file
 *
 * @summary short description for the file
 * @author wangtao
 *
 * Created at     : 2018-07-30 14:33:25 
 * Last modified  : 2018-07-31 17:01:06
 */



module game {

	export class ViewPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand{

		public constructor(){
			super();
		}
		public execute(notification:puremvc.INotification):void{
			var main:AppContainer = notification.getBody();
            this.facade.registerMediator(new StartMediator());
		}
	}
}