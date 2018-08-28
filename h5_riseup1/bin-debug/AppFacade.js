/**
 * long description for the file
 *
 * @summary 程序主入口
 * @author wangtao
 *
 * Created at     : 2018-07-30 14:37:15
 * Last modified  : 2018-07-30 14:37:34
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    var AppFacade = (function (_super) {
        __extends(AppFacade, _super);
        function AppFacade() {
            return _super.call(this) || this;
        }
        AppFacade.getInstance = function () {
            if (this.instance == null)
                this.instance = new AppFacade();
            return (this.instance);
        };
        AppFacade.prototype.initializeController = function () {
            _super.prototype.initializeController.call(this);
            this.registerCommand(Command.START_UP, game.StartUpCommand);
        };
        /**
         * 抛出start_up命令
         * @param	rootView
         */
        AppFacade.prototype.startUp = function (rootView) {
            this.sendNotification(Command.START_UP, rootView);
            this.removeCommand(Command.START_UP); //开始应用程序
        };
        return AppFacade;
    }(puremvc.Facade));
    game.AppFacade = AppFacade;
    __reflect(AppFacade.prototype, "game.AppFacade", ["puremvc.IFacade", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=AppFacade.js.map