/**
  * 游戏配置文件
  * 存放游戏的配置数据
  * 比如：游戏界面尺寸、分享随机百分比、获取系统数据
  */
module GameConfig {

    export var WINSIZE_WIDTH: number = 750;

    export var WINSIZE_HEIGHT: number = 1334;

    export var WINSIZE_WIDTH_BILI: number = 1;

    export var WINSIZE_HEIGHT_BILI: number = 1;

    export var SERVER_PATH: string = "http://wx.yutong.com/vote/vote/index.php?m=ylyd&a=";

    export var GAME_ID: string = "1";

    export var KIT_ID_1: string = "90003546";

    export var KIT_ID_2: string = "79371488"

    export var ROOM_ID: string = "1";

    export var PLAYERS = {
        "001": {
            "uid": "001",
            "nick": "天蝎座",
            "avatar": "http://www.muchang123.com/frontend/web/game/resource/assets/icon/head/head1.png"
            , "oper": "测试一号"
            , "relation": "测试一号"
            , "areaName": "测试一号"
            , "tid": "90003546"
            , "gender": "男"
        },
        "002": {
            "uid": "002",
            "nick": "猎户座",
            "avatar": "http://www.muchang123.com/frontend/web/game/resource/assets/icon/head/head2.png"
            , "oper": "测试二号"
            , "relation": "测试二号"
            , "areaName": "测试二号"
            , "tid": "79371488"
            , "gender": "男"
        }
    }

    /**
     * 游戏模式单机还是网络
     */
    export var DEBUG_MODEL: boolean = true;

    //全局字体颜色表--可以扩展
    export var TextColors = {
        white: 0xFFFFFF,//白色
        milkWhite: 0xfbf1af,//乳白色 
        grayWhite: 0xceb6a2,//灰白色
        yellow: 0xffff00,//金黄色 
        lightYellow: 0xffd375,//淡黄色
        orangeYellow: 0xff9900,//橘黄色//道具名称 //玩家姓名
        red: 0xf11300,//红色
        green: 0x00e500,//绿色 
        blue: 0x1a94d7,//蓝色 
        grayBlue: 0x2f5177,//墨蓝色 
        purple: 0xe938f2,//紫色 
        pink: 0xFF3030,//粉色 
        black: 0x2e2d2d,//黑色
        golden: 0xFFD700 //金色
    }

    //全局字体大小表--可以扩展
    export var LabelFontSize = {
        littleSize: 12,//小型字体大小
        middleSize: 18,//中型字体大小
        normalSize: 24,//正常字体大小
        bigSize: 36//大型字体大小
    }

    //是不是微信浏览
    export function isWeiXin(): boolean {
        var ua = window.navigator.userAgent.toLowerCase();
        var microStr = "" + ua.match(/MicroMessenger/i);
        if (microStr == "null") {
            return false;
        } else if (microStr == "micromessenger") {
            return true;
        }
    }

    //是不是大屏
    export function isBigScreen(): boolean {
        return (document.body.clientHeight / document.body.clientWidth > 1.32);
    }

    //获得浏览器类型 pc android ios -- 可扩展为其他 如 微信、qqzone、qq、微博、校内、facebook
    export function systemType(): string {
        var ua = window.navigator.userAgent.toLowerCase();
        var microStr = "" + ua.match(/MicroMessenger/i);
        if (("" + ua.match(/windows nt/i)) == "windows nt") {
            return "windows";
        } else if (("" + ua.match(/iphone/i)) == "iphone") {
            return "ios";
        } else if (("" + ua.match(/android/i)) == "android") {
            return "android";
        } else if (("" + ua.match(/ipad/i)) == "ipad") {
            return "ipad";
        } else if (("" + ua.match(/linux/i)) == "linux") {
            return "linux";
        } else if (("" + ua.match(/mac/i)) == "mac") {
            return "mac";
        } else if (("" + ua.match(/ucbrower/i)) == "ucbrower") {
            return "ucbrower";
        } else {
            console.log("未知系统类型");
        }
    }

    //获得平台类型 如 微信、qqzone、qq、微博、校内、facebook
    export function platformType(): string {
        var ua = window.navigator.userAgent.toLowerCase();
        if (("" + ua.match(/micromessenger/i)) == "micromessenger") {
            return "micromessenger";
        } else if (("" + ua.match(/qzone/i)) == "qzone") {
            return "qzone";
        } else if (("" + ua.match(/weibo/i)) == "weibo") {
            return "weibo";
        } else if (("" + ua.match(/qq/i)) == "qq") {
            return "qq";
        } else if (("" + ua.match(/renren/i)) == "renren") {
            return "renren";
        } else if (("" + ua.match(/txmicroblog/i)) == "txmicroblog") {
            return "txmicroblog";
        } else if (("" + ua.match(/douban/i)) == "douban") {
            return "douban";
        } else {
            return "other";
        }
    }

    //当前舞台
    export function curStage(): egret.Stage {
        return egret.MainContext.instance.stage;
    }

    //当前面板
    export var curPanel: egret.DisplayObjectContainer;

    //当前游戏宽度
    export function curWidth(): number {
        return egret.MainContext.instance.stage.stageWidth;
    }

    //当前游戏宽度
    export function curHeight(): number {
        return egret.MainContext.instance.stage.stageHeight;
    }




}



