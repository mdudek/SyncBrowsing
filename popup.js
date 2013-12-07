$(document).ready(function () {
    $.each(chrome.extension.getBackgroundPage().SyncBrowsing.getAvailableDevices(), function (index, value) {
        $("#availDevices").append("<div class='device' title='" + value + "'><div class='deviceId'>" + index + "</div><span class='deviceTitle'> : " + value + "</span></div>");
    });
});