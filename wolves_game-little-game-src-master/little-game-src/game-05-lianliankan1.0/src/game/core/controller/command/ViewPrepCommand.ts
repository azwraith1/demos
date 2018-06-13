/**
  * 提前注册mediator, 并不需要全部注册
  */
module game {

  export class ViewPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {

    public constructor() {
      super();
    }
    public execute(notification: puremvc.INotification): void {
       this.facade.registerMediator(new LogoMediator());
    }
  }
}