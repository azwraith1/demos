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
/**
 *
 * 开始命令:使用过后会自动注册
 * @author wangtao
 *
 */
var game;
(function (game) {
    var StartUpCommand = (function (_super) {
        __extends(StartUpCommand, _super);
        function StartUpCommand() {
            return _super.call(this) || this;
        }
        StartUpCommand.prototype.initializeMacroCommand = function () {
            this.addSubCommand(game.ControllerPrepCommand);
            this.addSubCommand(game.ModelPrepCommand);
            this.addSubCommand(game.ViewPrepCommand);
        };
        return StartUpCommand;
    }(puremvc.MacroCommand));
    game.StartUpCommand = StartUpCommand;
    __reflect(StartUpCommand.prototype, "game.StartUpCommand");
})(game || (game = {}));
//# sourceMappingURL=StartUpCommand.js.map