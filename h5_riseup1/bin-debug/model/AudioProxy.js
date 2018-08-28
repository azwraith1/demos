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
 * long description for the file
 *
 * @summary 音频代理模块
 * @author wangtao
 *
 * Created at     : 2018-07-30 14:35:30
 * Last modified  : 2018-07-30 14:35:48
 */
var game;
(function (game) {
    var AudioProxy = (function (_super) {
        __extends(AudioProxy, _super);
        function AudioProxy() {
            return _super.call(this, AudioProxy.NAME) || this;
        }
        AudioProxy.prototype.init = function () {
            var number = egret.localStorage.getItem('xsyx.sound');
            this.isOpen = number && number === '0' ? false : true;
            console.log("this.isOpen:" + this.isOpen);
        };
        AudioProxy.prototype.closeBgMusic = function () {
            if (!this.isOpen) {
                return;
            }
            if (this.channel) {
                this.channel.stop();
                this.backgroundSound = null;
                //                this.channel = null;
            }
        };
        AudioProxy.prototype.setVolice = function (vol) {
            if (this.moveChannel) {
                this.moveChannel.volume = vol;
            }
        };
        AudioProxy.prototype.startBgMusic = function () {
            if (!this.isOpen) {
                return;
            }
            if (!this.backgroundSound) {
                this.backgroundSound = RES.getRes("background_mp3");
                if (this.channel) {
                    this.channel.stop();
                    this.channel = null;
                }
                this.channel = this.backgroundSound.play(0, -1);
            }
        };
        AudioProxy.prototype.openSound = function (isOpen) {
            this.isOpen = isOpen;
            egret.localStorage.setItem('xsyx.sound', isOpen ? '1' : '0');
            if (isOpen) {
                if (this.channel) {
                    return;
                }
                else {
                    this.backgroundSound = RES.getRes("background_mp3");
                    this.channel = this.backgroundSound.play(0, -1);
                }
            }
            else {
                if (this.channel) {
                    this.channel.stop();
                }
                this.channel = null;
            }
        };
        /**
         * 播放音效
         * resourceName： 文件名称
         */
        AudioProxy.prototype.playSound = function (resourceName) {
            if (this.isOpen) {
                var sound = RES.getRes(resourceName);
                sound.play(0, 1);
            }
        };
        /**
         * 播放音效
         * resourceName： 文件名称
         */
        AudioProxy.prototype.playSoundCount = function (resourceName, count, voilce) {
            if (voilce === void 0) { voilce = 1; }
            if (this.isOpen) {
                var sound = RES.getRes(resourceName);
                //                this.moveChannel = sound.play(0, 0);
                this.moveChannel = sound.play(0, count);
                this.moveChannel.volume = voilce;
            }
        };
        AudioProxy.NAME = Proxy.AUDIO_PROXY;
        return AudioProxy;
    }(puremvc.Proxy));
    game.AudioProxy = AudioProxy;
    __reflect(AudioProxy.prototype, "game.AudioProxy", ["puremvc.IProxy", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=AudioProxy.js.map