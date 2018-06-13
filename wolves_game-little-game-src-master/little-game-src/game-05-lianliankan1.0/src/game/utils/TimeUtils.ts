class TimeFormat {
	public static showDDHH(time: number) {
		var d: number = Math.floor(time / (24 * 3600 * 1000));
		time = time % (24 * 3600 * 1000);
		var h = Math.floor(time / (3600 * 1000));

		if (d < 0) {
			return h + "小时";
		} else {
			return d + "天" + h + "小时";
		}
	}

	public static showloseMMSS(time: number) {
		var time1 = time / 1000;
		var minutes = Math.floor(time1 / 60);
		var seconds = Math.floor(time1 % 60);
		var haomiao = (time % 1000);
		var msg = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + ":" + (haomiao < 10 ? "0" + haomiao : haomiao);
		return msg;
	}

	public static showHHMMSS(time: number) {
		var h = Math.floor(time / (3600));
		time = time % (3600);
		var m = Math.floor(time / (60));
		time = time % (60);
		var s = Math.floor(time);
		return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
	}

	public static showHHMMSSByChina(time: number) {
		var h = Math.floor(time / (3600));
		time = time % (3600);
		var m = Math.floor(time / (60));
		time = time % (60);
		var s = Math.floor(time);
		return (h < 10 ? "0" + h : h) + "时" + (m < 10 ? "0" + m : m) + "分" + (s < 10 ? "0" + s : s) + "秒";
	}
}