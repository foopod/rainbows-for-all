var rainbowInstallService = document.createElement('script');
rainbowInstallService.src = chrome.extension.getURL('rainbow.js');
(document.head||document.documentElement).appendChild(rainbowInstallService);
rainbowInstallService.onload = function() {
    if(rainbowInstallService.parentNode != null){
        rainbowInstallService.parentNode.removeChild(rainbowInstallService);
    }
};