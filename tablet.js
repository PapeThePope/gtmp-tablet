var browserInternet = null;
var res = API.getScreenResolution();
var showInternetBrowser = false;
var ctrlPressed = false;

// Key-Mangement
API.onKeyDown.connect(function (sender, e) {
    if (e.KeyCode === Keys.ControlKey) {
        ctrlPressed = true;
    }
    if (e.KeyCode === Keys.I && ctrlPressed) {
        if (showInternetBrowser === false) {
            browserInternet = API.createCefBrowser(res.Width - 100, res.Height - 100, false);
            API.waitUntilCefBrowserInit(browserInternet);
            API.setCefBrowserPosition(browserInternet, 50, 50);
            API.loadPageCefBrowser(browserInternet, "YOURONEYEHERE");
            API.showCursor(true);
            API.setCanOpenChat(false);
            API.setHudVisible(false);
            showInternetBrowser = true;
        }
        else {
            API.destroyCefBrowser(browserInternet);
            API.showCursor(false);
            API.setCanOpenChat(true);
            API.setHudVisible(true);
            showInternetBrowser = false;
        }
    }
})
API.onKeyUp.connect(function (sender, e) {
    if (e.KeyCode === Keys.ControlKey) {
        ctrlPressed = false;
    }
})
