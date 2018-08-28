window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/BallonSkin.exml'] = window.BallonSkin = (function (_super) {
	__extends(BallonSkin, _super);
	var BallonSkin$Skin1 = 	(function (_super) {
		__extends(BallonSkin$Skin1, _super);
		function BallonSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BallonSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "balloon (6)_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BallonSkin$Skin1;
	})(eui.Skin);

	function BallonSkin() {
		_super.call(this);
		this.skinParts = ["skinList","skinScroller","selectBtn","icon"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group3_i()];
	}
	var _proto = BallonSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 1280;
		t.width = 720;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1280;
		t.source = "bg_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 180;
		t.elementsContent = [this.skinScroller_i(),this.selectBtn_i()];
		return t;
	};
	_proto.skinScroller_i = function () {
		var t = new eui.Scroller();
		this.skinScroller = t;
		t.anchorOffsetY = 0;
		t.height = 732;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.viewport = this.skinList_i();
		return t;
	};
	_proto.skinList_i = function () {
		var t = new eui.List();
		this.skinList = t;
		t.anchorOffsetY = 0;
		t.height = 732;
		return t;
	};
	_proto.selectBtn_i = function () {
		var t = new eui.Button();
		this.selectBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.label = "SELECTED";
		t.width = 168;
		t.y = 804;
		t.skinName = BallonSkin$Skin1;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.icon_i()];
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = 0;
		t.y = 38;
		return t;
	};
	return BallonSkin;
})(eui.Skin);generateEUI.paths['resource/skins/BallSkinItemSkin.exml'] = window.BallSkinItemSkin = (function (_super) {
	__extends(BallSkinItemSkin, _super);
	function BallSkinItemSkin() {
		_super.call(this);
		this.skinParts = ["scoreLabel","ballSkinImag","completeLabel"];
		
		this.height = 732;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = BallSkinItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0;
		t.fillColor = 0x6acde8;
		t.height = 732;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 732;
		t.width = 480;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.scoreLabel_i(),this.ballSkinImag_i(),this.completeLabel_i()];
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Score 10000 Point";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 320;
		t.y = 32;
		return t;
	};
	_proto.ballSkinImag_i = function () {
		var t = new eui.Image();
		this.ballSkinImag = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 120;
		t.y = 180.00000000000003;
		return t;
	};
	_proto.completeLabel_i = function () {
		var t = new eui.Label();
		this.completeLabel = t;
		t.height = 40;
		t.horizontalCenter = 0;
		t.text = "COMPLETED";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 320;
		t.y = 150;
		return t;
	};
	return BallSkinItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameOverSkin.exml'] = window.GameOverSkin = (function (_super) {
	__extends(GameOverSkin, _super);
	function GameOverSkin() {
		_super.call(this);
		this.skinParts = ["bgImag","backBtn","newRecordLabel","imag","restartLabel"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = GameOverSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bgImag_i(),this.backBtn_i(),this._Label1_i(),this._Label2_i(),this.newRecordLabel_i(),this.imag_i(),this.restartLabel_i()];
		return t;
	};
	_proto.bgImag_i = function () {
		var t = new eui.Image();
		this.bgImag = t;
		t.height = 1280;
		t.source = "bg_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.label = "<";
		t.width = 110;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.horizontalCenter = 0;
		t.size = 48;
		t.text = "本局得分";
		t.textAlign = "center";
		t.textColor = 0xd12a1f;
		t.verticalAlign = "middle";
		t.width = 420;
		t.y = 204;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.horizontalCenter = 0;
		t.text = "10000";
		t.textAlign = "center";
		t.textColor = 0xe21818;
		t.verticalAlign = "middle";
		t.width = 200;
		t.y = 310;
		return t;
	};
	_proto.newRecordLabel_i = function () {
		var t = new eui.Label();
		this.newRecordLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.horizontalCenter = 0;
		t.size = 48;
		t.text = "新纪录";
		t.textAlign = "center";
		t.textColor = 0xe02c2c;
		t.verticalAlign = "middle";
		t.width = 222;
		t.y = 398;
		return t;
	};
	_proto.imag_i = function () {
		var t = new eui.Image();
		this.imag = t;
		t.height = 0;
		t.horizontalCenter = 0;
		t.width = 0;
		t.y = 616;
		return t;
	};
	_proto.restartLabel_i = function () {
		var t = new eui.Label();
		this.restartLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124;
		t.horizontalCenter = 1;
		t.text = "点击重新开始";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 310;
		t.y = 926;
		return t;
	};
	return GameOverSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameSceneSkin.exml'] = window.GameSceneSkin = (function (_super) {
	__extends(GameSceneSkin, _super);
	function GameSceneSkin() {
		_super.call(this);
		this.skinParts = ["gameList","gameScroller","score","level","gameGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.gameGroup_i()];
	}
	var _proto = GameSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xa7e2d9;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gameGroup_i = function () {
		var t = new eui.Group();
		this.gameGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1280;
		t.width = 720;
		t.elementsContent = [this.gameScroller_i(),this.score_i(),this.level_i()];
		return t;
	};
	_proto.gameScroller_i = function () {
		var t = new eui.Scroller();
		this.gameScroller = t;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.viewport = this.gameList_i();
		return t;
	};
	_proto.gameList_i = function () {
		var t = new eui.List();
		this.gameList = t;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.left = 0;
		t.text = "10000";
		t.y = 8;
		return t;
	};
	_proto.level_i = function () {
		var t = new eui.Label();
		this.level = t;
		t.right = 0;
		t.text = "0/45";
		t.y = 8;
		return t;
	};
	return GameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/LevelItemSkin.exml'] = window.LevelItemSkin = (function (_super) {
	__extends(LevelItemSkin, _super);
	function LevelItemSkin() {
		_super.call(this);
		this.skinParts = ["bgImag"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = LevelItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bgImag_i()];
		return t;
	};
	_proto.bgImag_i = function () {
		var t = new eui.Image();
		this.bgImag = t;
		t.height = 1280;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return LevelItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/StartSceneSkin.exml'] = window.StartSceneSkin = (function (_super) {
	__extends(StartSceneSkin, _super);
	var StartSceneSkin$Skin2 = 	(function (_super) {
		__extends(StartSceneSkin$Skin2, _super);
		function StartSceneSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "title (10)_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin2;
	})(eui.Skin);

	var StartSceneSkin$Skin3 = 	(function (_super) {
		__extends(StartSceneSkin$Skin3, _super);
		function StartSceneSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "title (6)_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin3;
	})(eui.Skin);

	var StartSceneSkin$Skin4 = 	(function (_super) {
		__extends(StartSceneSkin$Skin4, _super);
		function StartSceneSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "title (3)_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin4;
	})(eui.Skin);

	var StartSceneSkin$Skin5 = 	(function (_super) {
		__extends(StartSceneSkin$Skin5, _super);
		function StartSceneSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "title (5)_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin5;
	})(eui.Skin);

	var StartSceneSkin$Skin6 = 	(function (_super) {
		__extends(StartSceneSkin$Skin6, _super);
		function StartSceneSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "title (4)_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin6;
	})(eui.Skin);

	function StartSceneSkin() {
		_super.call(this);
		this.skinParts = ["bgImag","startBtn","infoBtn","skinBtn","starBtn","rankBtn","ballonImag","ItemGroup","championImag","scoreLabel","scoreGroup","levelLabel","overLabel","lastScoreLabel","lastGameGroup","StartGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.StartGroup_i()];
	}
	var _proto = StartSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 1280;
		t.width = 720;
		t.x = 1.33;
		t.y = 0;
		return t;
	};
	_proto.StartGroup_i = function () {
		var t = new eui.Group();
		this.StartGroup = t;
		t.height = 1280;
		t.width = 720;
		t.y = 0;
		t.elementsContent = [this.bgImag_i(),this.ItemGroup_i(),this.scoreGroup_i(),this.levelLabel_i(),this.lastGameGroup_i(),this._Image1_i()];
		return t;
	};
	_proto.bgImag_i = function () {
		var t = new eui.Image();
		this.bgImag = t;
		t.height = 1280;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_png";
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ItemGroup_i = function () {
		var t = new eui.Group();
		this.ItemGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 786;
		t.verticalCenter = 247;
		t.width = 720;
		t.x = 0;
		t.elementsContent = [this.startBtn_i(),this.infoBtn_i(),this.skinBtn_i(),this.starBtn_i(),this.rankBtn_i(),this.ballonImag_i()];
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 0;
		t.skinName = StartSceneSkin$Skin2;
		return t;
	};
	_proto.infoBtn_i = function () {
		var t = new eui.Button();
		this.infoBtn = t;
		t.label = "";
		t.x = 0;
		t.y = 100;
		t.skinName = StartSceneSkin$Skin3;
		return t;
	};
	_proto.skinBtn_i = function () {
		var t = new eui.Button();
		this.skinBtn = t;
		t.label = "";
		t.right = 0;
		t.y = 100;
		t.skinName = StartSceneSkin$Skin4;
		return t;
	};
	_proto.starBtn_i = function () {
		var t = new eui.Button();
		this.starBtn = t;
		t.label = "";
		t.y = 230;
		t.skinName = StartSceneSkin$Skin5;
		return t;
	};
	_proto.rankBtn_i = function () {
		var t = new eui.Button();
		this.rankBtn = t;
		t.label = "";
		t.right = 0;
		t.y = 230;
		t.skinName = StartSceneSkin$Skin6;
		return t;
	};
	_proto.ballonImag_i = function () {
		var t = new eui.Image();
		this.ballonImag = t;
		t.horizontalCenter = 7;
		t.source = "balloon_png";
		t.verticalCenter = 70.5;
		return t;
	};
	_proto.scoreGroup_i = function () {
		var t = new eui.Group();
		this.scoreGroup = t;
		t.anchorOffsetX = 0;
		t.height = 100;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 110;
		t.y = 16;
		t.elementsContent = [this.championImag_i(),this.scoreLabel_i()];
		return t;
	};
	_proto.championImag_i = function () {
		var t = new eui.Image();
		this.championImag = t;
		t.horizontalCenter = 0;
		t.y = 18;
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.text = "10000";
		t.textAlign = "center";
		t.textColor = 0x080960;
		t.width = 110;
		return t;
	};
	_proto.levelLabel_i = function () {
		var t = new eui.Label();
		this.levelLabel = t;
		t.anchorOffsetY = 0;
		t.height = 66.67;
		t.right = 0;
		t.text = "0/45";
		t.textAlign = "center";
		t.textColor = 0x1f096d;
		t.verticalAlign = "middle";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.lastGameGroup_i = function () {
		var t = new eui.Group();
		this.lastGameGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 246.66;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 366.66;
		t.y = 179;
		t.elementsContent = [this.overLabel_i(),this.lastScoreLabel_i()];
		return t;
	};
	_proto.overLabel_i = function () {
		var t = new eui.Label();
		this.overLabel = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.size = 48;
		t.text = "GAME OVER";
		t.textAlign = "center";
		t.textColor = 0x030e5b;
		t.verticalAlign = "middle";
		t.width = 300;
		t.y = 20;
		return t;
	};
	_proto.lastScoreLabel_i = function () {
		var t = new eui.Label();
		this.lastScoreLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.33;
		t.horizontalCenter = 0;
		t.text = "10000";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 243.34;
		t.y = 140;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "title (1)_png";
		t.y = 162;
		return t;
	};
	return StartSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/LevelManager/levelA02.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 2300;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 300;
		t.y = 1500;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 240;
		t.y = 1300;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 360;
		t.y = 1300;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 180;
		t.y = 1100;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 300;
		t.y = 1100;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 420;
		t.y = 1100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 240;
		t.y = 900;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 120;
		t.y = 900;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 480;
		t.y = 900;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 360;
		t.y = 900;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 180;
		t.y = 700;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 300;
		t.y = 700;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 420;
		t.y = 700;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 240;
		t.y = 500;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 360;
		t.y = 500;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 300;
		t.y = 300;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/skins/LevelManager/levelA03.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 2300;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 150;
		t.y = 1500;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 330;
		t.y = 1500;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 510;
		t.y = 1500;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 150;
		t.y = 1300;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 330;
		t.y = 1300;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 510;
		t.y = 1300;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 150;
		t.y = 1100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 330;
		t.y = 1100;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 510;
		t.y = 1100;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 150;
		t.y = 900;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 330;
		t.y = 900;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 510;
		t.y = 900;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 150;
		t.y = 700;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 330;
		t.y = 700;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 510;
		t.y = 700;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 150;
		t.y = 500;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 330;
		t.y = 500;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 510;
		t.y = 500;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 150;
		t.y = 300;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 330;
		t.y = 300;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 510;
		t.y = 300;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/skins/LevelManager/levelA04.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 2300;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 192;
		t.y = 1262.37;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 224.5;
		t.y = 1325.69;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 217.01;
		t.y = 1333.64;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 230.65;
		t.y = 1331.14;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 217.01;
		t.y = 1424.91;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 231;
		t.y = 1422.24;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 330;
		t.y = 1262.37;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 362.5;
		t.y = 1325.69;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 355.01;
		t.y = 1333.64;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 368.65;
		t.y = 1331.14;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 355.01;
		t.y = 1424.91;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 369;
		t.y = 1422.24;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 468.48;
		t.y = 1262.37;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 500.98;
		t.y = 1325.69;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 493.49;
		t.y = 1333.64;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 507.13;
		t.y = 1331.14;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 493.49;
		t.y = 1424.91;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 507.48;
		t.y = 1422.24;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 253.83;
		t.y = 970;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 286.33;
		t.y = 1033.32;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 278.84;
		t.y = 1041.27;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 292.48;
		t.y = 1038.77;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 278.84;
		t.y = 1132.54;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 292.83;
		t.y = 1129.87;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 406.32;
		t.y = 970;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 438.82;
		t.y = 1033.32;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 431.33;
		t.y = 1041.27;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 444.97;
		t.y = 1038.77;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 431.33;
		t.y = 1132.54;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 445.32;
		t.y = 1129.87;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 300;
		t.y = 400;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 364.67;
		t.y = 527;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 345.83;
		t.y = 553.79;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 382.66;
		t.y = 548.79;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.rotation = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 345.83;
		t.y = 732;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.rotation = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 382.66;
		t.y = 727;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/skins/LevelManager/levelB01.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 2300;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/wallTriangle1.png";
		t.x = 0;
		t.y = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/wallTriangle2.png";
		t.x = 75;
		t.y = 60;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 282;
		t.y = 1100;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 210;
		t.y = 900;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 390;
		t.y = 900;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 178;
		t.y = 700;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 310;
		t.y = 700;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 442;
		t.y = 700;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 124;
		t.y = 500;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 223;
		t.y = 500;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 322;
		t.y = 500;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 421;
		t.y = 500;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 510;
		t.y = 500;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 100;
		t.y = 300;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 194;
		t.y = 300;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 287;
		t.y = 300;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 381;
		t.y = 300;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 474;
		t.y = 300;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 568;
		t.y = 300;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/skins/LevelManager/levelB02.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 2300;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = -100;
		t.y = 1500;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 750;
		t.y = 1500;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = -100;
		t.y = 1300;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 750;
		t.y = 1300;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = -100;
		t.y = 1100;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 750;
		t.y = 1100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = -100;
		t.y = 900;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 750;
		t.y = 900;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = -100;
		t.y = 700;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 750;
		t.y = 700;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = -100;
		t.y = 500;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 750;
		t.y = 500;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = -100;
		t.y = 300;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 750;
		t.y = 300;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = -100;
		t.y = 100;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 750;
		t.y = 100;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/skins/LevelManager/levelB03.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 2300;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i(),this._Image42_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 270;
		t.y = 1473;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 360;
		t.y = 1500;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 450;
		t.y = 1473;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 270;
		t.y = 1410;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 360;
		t.y = 1383;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 450;
		t.y = 1410;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 270;
		t.y = 1293;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 360;
		t.y = 1320;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 450;
		t.y = 1293;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 270;
		t.y = 1224;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 360;
		t.y = 1196.53;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 450;
		t.y = 1224;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 270;
		t.y = 1105.2;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 360;
		t.y = 1132.2;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 450;
		t.y = 1105.2;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 270;
		t.y = 1040.2;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 360;
		t.y = 1012.73;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 450;
		t.y = 1040.2;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 270;
		t.y = 921.21;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 360;
		t.y = 948.21;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 450;
		t.y = 921.21;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 270;
		t.y = 856.21;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 360;
		t.y = 828.74;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 450;
		t.y = 856.21;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 270;
		t.y = 737.23;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 360;
		t.y = 764.23;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 450;
		t.y = 737.23;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 270;
		t.y = 672.23;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 360;
		t.y = 644.76;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 450;
		t.y = 672.23;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 270;
		t.y = 554.36;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 360;
		t.y = 581.36;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 450;
		t.y = 554.36;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 270;
		t.y = 489.36;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 360;
		t.y = 461.89;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 450;
		t.y = 489.36;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 270;
		t.y = 371.54;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 360;
		t.y = 398.54;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 450;
		t.y = 371.54;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 270;
		t.y = 306.54;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCross1.png";
		t.x = 360;
		t.y = 279.07;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare1.png";
		t.x = 450;
		t.y = 306.54;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/skins/LevelManager/levelB04.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 2300;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare4.png";
		t.x = -108;
		t.y = 1400;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 135;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare4.png";
		t.x = 855;
		t.y = 1187.87;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare4.png";
		t.x = -108;
		t.y = 909.58;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 135;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare4.png";
		t.x = 855;
		t.y = 697.45;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 135;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare4.png";
		t.x = 840.21;
		t.y = 216.62;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare4.png";
		t.x = -108;
		t.y = 428.75;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/skins/LevelManager/levelB05.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 2300;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 45.5;
		t.rotation = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockStar1.png";
		t.x = 240;
		t.y = 385.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 850;
		t.y = 1400;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = -150;
		t.y = 1300;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 850;
		t.y = 1200;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = -150;
		t.y = 1100;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 850;
		t.y = 1000;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = -150;
		t.y = 900;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 850;
		t.y = 800;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = -150;
		t.y = 700;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 850;
		t.y = 600;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = -150;
		t.y = 500;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockCircle1.png";
		t.x = 850;
		t.y = 400;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/skins/LevelManager/levelB06.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 2300;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i(),this._Image42_i(),this._Image43_i(),this._Image44_i(),this._Image45_i(),this._Image46_i(),this._Image47_i(),this._Image48_i(),this._Image49_i(),this._Image50_i(),this._Image51_i(),this._Image52_i(),this._Image53_i(),this._Image54_i(),this._Image55_i(),this._Image56_i(),this._Image57_i(),this._Image58_i(),this._Image59_i(),this._Image60_i(),this._Image61_i(),this._Image62_i(),this._Image63_i(),this._Image64_i(),this._Image65_i(),this._Image66_i(),this._Image67_i(),this._Image68_i(),this._Image69_i(),this._Image70_i(),this._Image71_i(),this._Image72_i(),this._Image73_i(),this._Image74_i(),this._Image75_i(),this._Image76_i(),this._Image77_i(),this._Image78_i(),this._Image79_i(),this._Image80_i(),this._Image81_i(),this._Image82_i(),this._Image83_i(),this._Image84_i(),this._Image85_i(),this._Image86_i(),this._Image87_i(),this._Image88_i(),this._Image89_i(),this._Image90_i(),this._Image91_i(),this._Image92_i(),this._Image93_i(),this._Image94_i(),this._Image95_i(),this._Image96_i(),this._Image97_i(),this._Image98_i(),this._Image99_i(),this._Image100_i(),this._Image101_i(),this._Image102_i(),this._Image103_i(),this._Image104_i(),this._Image105_i(),this._Image106_i(),this._Image107_i(),this._Image108_i(),this._Image109_i(),this._Image110_i(),this._Image111_i(),this._Image112_i(),this._Image113_i(),this._Image114_i(),this._Image115_i(),this._Image116_i(),this._Image117_i(),this._Image118_i(),this._Image119_i(),this._Image120_i(),this._Image121_i(),this._Image122_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1500;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1500;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1480;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1480;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1460;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1460;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1440;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1440;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1420;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1420;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1400;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1400;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1380;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1380;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1360;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1360;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1340;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1340;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1320;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1320;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1300;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1300;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1280;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1280;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1260;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1260;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1240;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1240;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1220;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1220;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1200;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1200;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1180;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1180;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1160;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1160;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1140;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1140;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1120;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1120;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1100;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1100;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1080;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1080;
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1060;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1060;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1040;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1040;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1020;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1020;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 40;
		t.y = 1000;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 520;
		t.y = 1000;
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 50;
		t.y = 980;
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 510;
		t.y = 980;
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 60;
		t.y = 960;
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 500;
		t.y = 960;
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 70;
		t.y = 940;
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 490;
		t.y = 940;
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 80;
		t.y = 920;
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 480;
		t.y = 920;
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 90;
		t.y = 900;
		return t;
	};
	_proto._Image62_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 470;
		t.y = 900;
		return t;
	};
	_proto._Image63_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 100;
		t.y = 880;
		return t;
	};
	_proto._Image64_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 460;
		t.y = 880;
		return t;
	};
	_proto._Image65_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 110;
		t.y = 860;
		return t;
	};
	_proto._Image66_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 450;
		t.y = 860;
		return t;
	};
	_proto._Image67_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 120;
		t.y = 840;
		return t;
	};
	_proto._Image68_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 440;
		t.y = 840;
		return t;
	};
	_proto._Image69_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 130;
		t.y = 820;
		return t;
	};
	_proto._Image70_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 430;
		t.y = 820;
		return t;
	};
	_proto._Image71_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 140;
		t.y = 800;
		return t;
	};
	_proto._Image72_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 420;
		t.y = 800;
		return t;
	};
	_proto._Image73_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 150;
		t.y = 780;
		return t;
	};
	_proto._Image74_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 410;
		t.y = 780;
		return t;
	};
	_proto._Image75_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 160;
		t.y = 760;
		return t;
	};
	_proto._Image76_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 400;
		t.y = 760;
		return t;
	};
	_proto._Image77_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 170;
		t.y = 740;
		return t;
	};
	_proto._Image78_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 390;
		t.y = 740;
		return t;
	};
	_proto._Image79_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 180;
		t.y = 720;
		return t;
	};
	_proto._Image80_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 380;
		t.y = 720;
		return t;
	};
	_proto._Image81_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 190;
		t.y = 700;
		return t;
	};
	_proto._Image82_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 370;
		t.y = 700;
		return t;
	};
	_proto._Image83_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 680;
		return t;
	};
	_proto._Image84_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 680;
		return t;
	};
	_proto._Image85_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 660;
		return t;
	};
	_proto._Image86_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 660;
		return t;
	};
	_proto._Image87_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 640;
		return t;
	};
	_proto._Image88_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 640;
		return t;
	};
	_proto._Image89_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 620;
		return t;
	};
	_proto._Image90_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 620;
		return t;
	};
	_proto._Image91_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 600;
		return t;
	};
	_proto._Image92_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 600;
		return t;
	};
	_proto._Image93_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 580;
		return t;
	};
	_proto._Image94_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 580;
		return t;
	};
	_proto._Image95_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 560;
		return t;
	};
	_proto._Image96_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 560;
		return t;
	};
	_proto._Image97_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 540;
		return t;
	};
	_proto._Image98_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 540;
		return t;
	};
	_proto._Image99_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 520;
		return t;
	};
	_proto._Image100_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 520;
		return t;
	};
	_proto._Image101_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 500;
		return t;
	};
	_proto._Image102_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 500;
		return t;
	};
	_proto._Image103_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 480;
		return t;
	};
	_proto._Image104_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 480;
		return t;
	};
	_proto._Image105_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 460;
		return t;
	};
	_proto._Image106_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 460;
		return t;
	};
	_proto._Image107_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 440;
		return t;
	};
	_proto._Image108_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 440;
		return t;
	};
	_proto._Image109_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 420;
		return t;
	};
	_proto._Image110_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 420;
		return t;
	};
	_proto._Image111_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 400;
		return t;
	};
	_proto._Image112_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 400;
		return t;
	};
	_proto._Image113_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 380;
		return t;
	};
	_proto._Image114_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 380;
		return t;
	};
	_proto._Image115_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 360;
		return t;
	};
	_proto._Image116_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 360;
		return t;
	};
	_proto._Image117_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 340;
		return t;
	};
	_proto._Image118_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 340;
		return t;
	};
	_proto._Image119_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 320;
		return t;
	};
	_proto._Image120_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 320;
		return t;
	};
	_proto._Image121_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 200;
		t.y = 300;
		return t;
	};
	_proto._Image122_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.rotation = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "file:///f%3A/LibiiSVN/H5G01_ProtectBalloon/h5_riseup/resource/assets/blockSquare3.png";
		t.x = 360;
		t.y = 300;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/skins/LevelManager/levelB07.exml'] = window.levelB07 = (function (_super) {
	__extends(levelB07, _super);
	function levelB07() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = levelB07.prototype;

	return levelB07;
})(eui.Skin);