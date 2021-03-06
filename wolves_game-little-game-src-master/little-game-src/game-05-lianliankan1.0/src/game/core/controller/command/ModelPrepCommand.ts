/**
  * 注册注册proxy
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  */
module game {

  export class ModelPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {

    public constructor() {
      super();
    }
    public execute(notification: puremvc.INotification): void {
      var proxys: any = [
        NetProxy,
        PlayerProxy,
        GameProxy,
        OtherPlayerProxy,
        TikiHttpProxy,
        TikiSocketProxy,
        AudioProxy
      ];
      var self = this;
      _.forEach(proxys, function (proxy, index) {
        var proxyObj = new proxys[index]();
        self.facade.registerProxy(proxyObj);
        if (proxyObj && proxyObj.init) {
          proxyObj.init();
        }
      })
      // this.facade.registerProxy(new NetProxy());
      // //游戏其他需要存储数据
      // this.facade.registerProxy(new PlayerProxy());
      // this.facade.registerProxy(new AudioProxy());
    }
  }
}