function checkWebKit() {
    var result = /WebKit\/([\d.]+)/.exec(navigator.userAgent);
	document.write(parseFloat(result[1]))
    return parseFloat(result[1]);
}