(function () {
    "use strict";

    function addGlCnParameter(url) {
        try {
            const [mainUrl, hash] = url.split('#');
            let cleanUrl = mainUrl.replace(/[?&]gl=[^&]*/g, "");
            const separator = cleanUrl.includes("?") ? "&" : "?";
            const urlWithParam = cleanUrl + separator + "gl=cn";
            return hash ? urlWithParam + "#" + hash : urlWithParam;
        } catch (error) {
            console.error("处理URL时出错：", error);
            return url;
        }
    }

    function shouldHandleUrl(url) {
        const patterns = [
            /^https?:\/\/earth\.google\.com\//i,
            /^https?:\/\/www\.google\.com\/maps\//i,
            /^https?:\/\/www\.google\.com\.hk\/maps\//i,
            /^https?:\/\/maps\.google\.com\//i,
            /^https?:\/\/maps\.google\.com\.hk\//i
        ];
        return patterns.some(pattern => pattern.test(url));
    }

    function redirectWithGlCn() {
        try {
            const currentUrl = window.location.href;
            
            if (!shouldHandleUrl(currentUrl)) {
                return;
            }
            
            const newUrl = addGlCnParameter(currentUrl);
            if (newUrl !== currentUrl) {
                console.log("Google Maps添加gl=cn并刷新：", currentUrl, "->", newUrl);
                window.location.replace(newUrl);
            } else {
                console.log("Google Maps已包含gl=cn参数，无需刷新");
            }
        } catch (error) {
            console.error("重定向时出错：", error);
        }
    }

    redirectWithGlCn();

})();
