
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket.io/socket.io.js",
	"libs/modules/puremvc/puremvc.js",
	"libs/modules/underscore/underscore.js",
	"libs/modules/async/async.js",
	"promise/promise.js",
	"bin-debug/game/constants/Proxy.js",
	"bin-debug/game/core/view/BaseComponent.js",
	"bin-debug/game/core/view/panel/mediator/BaseMediator.js",
	"bin-debug/game/core/model/proxy/ResourceProxyBase.js",
	"bin-debug/game/core/view/panel/GameDescPanel.js",
	"bin-debug/game/config/GameConfig.js",
	"bin-debug/game/config/Global.js",
	"bin-debug/game/constants/ClientNotify.js",
	"bin-debug/game/constants/PanelNotify.js",
	"bin-debug/AppFacade.js",
	"bin-debug/game/constants/SceneNotify.js",
	"bin-debug/game/constants/SysNotify.js",
	"bin-debug/game/core/controller/command/ControllerPrepCommand.js",
	"bin-debug/game/core/controller/command/ModelPrepCommand.js",
	"bin-debug/game/core/controller/command/StartupCommand.js",
	"bin-debug/game/core/controller/command/ViewPrepCommand.js",
	"bin-debug/game/core/model/data/PlayerBean.js",
	"bin-debug/game/core/model/data/PlayerGameBean.js",
	"bin-debug/game/core/model/data/RoomBean.js",
	"bin-debug/game/core/model/data/ZuoBiaoBean.js",
	"bin-debug/game/core/model/proxy/AudioProxy.js",
	"bin-debug/game/core/model/proxy/GameProxy.js",
	"bin-debug/game/core/model/proxy/NetProxy.js",
	"bin-debug/game/core/model/proxy/OtherPlayerProxy.js",
	"bin-debug/game/core/model/proxy/PlayerProxy.js",
	"bin-debug/egert/AssetAdapter.js",
	"bin-debug/game/core/model/proxy/TikiHttpProxy.js",
	"bin-debug/game/core/model/proxy/TikiSocketProxy.js",
	"bin-debug/egert/LoadingUI.js",
	"bin-debug/game/core/view/component/BackGroupComponent.js",
	"bin-debug/game/core/view/component/GameChooseComponent.js",
	"bin-debug/game/core/view/component/ToastTip.js",
	"bin-debug/game/utils/UtilsClass/TipsUtils.js",
	"bin-debug/game/core/view/panel/GameLookPanel.js",
	"bin-debug/game/core/view/panel/GameResultPanel.js",
	"bin-debug/game/core/view/panel/WaitPanel.js",
	"bin-debug/egert/ThemeAdapter.js",
	"bin-debug/game/core/view/panel/mediator/GameDescMediator.js",
	"bin-debug/game/core/view/panel/mediator/GameLookMediator.js",
	"bin-debug/game/core/view/panel/mediator/GameResultMediator.js",
	"bin-debug/game/core/view/scene/GameScene.js",
	"bin-debug/game/core/view/scene/HomeScene.js",
	"bin-debug/game/core/view/scene/LogoScene.js",
	"bin-debug/game/core/view/scene/mediator/GameMediator.js",
	"bin-debug/game/core/view/scene/mediator/HomeMediator.js",
	"bin-debug/game/core/view/scene/mediator/LogoMediator.js",
	"bin-debug/game/core/view/widget/WidgetFangKuai.js",
	"bin-debug/game/managers/GameLayerManager.js",
	"bin-debug/game/managers/PopUpManager.js",
	"bin-debug/game/managers/SocketManager.js",
	"bin-debug/game/utils/EffectUtils.js",
	"bin-debug/game/utils/Global.js",
	"bin-debug/game/utils/HashMap.js",
	"bin-debug/game/utils/Mta.js",
	"bin-debug/game/utils/NativeApi.js",
	"bin-debug/game/utils/QRCode.js",
	"bin-debug/game/utils/RegUtils.js",
	"bin-debug/game/utils/TimeUtils.js",
	"bin-debug/game/utils/TipsManager.js",
	"bin-debug/game/utils/TipsPanel.js",
	"bin-debug/game/utils/UIUtils.js",
	"bin-debug/game/utils/Utils.js",
	"bin-debug/game/utils/UtilsClass/BitmapBlink.js",
	"bin-debug/Main.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "game.Main",
		frameRate: 60,
		scaleMode: "exactFit",
		contentWidth: 750,
		contentHeight: 1334,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:24,textColor:0x000000,bgAlpha:1",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};