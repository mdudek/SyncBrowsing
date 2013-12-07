var SM = (function () {

    var my = {};

    my.get = function (key) {
        return localStorage.getItem(key);
    }
    my.put = function (key, value) {
        return localStorage.setItem(key, value);
    }
    my.delete = function (key) {
        return localStorage.removeItem(key);
    }
    
    return my;

}());

var SyncBrowsing = (function (SM) {
    var my = {};

    my.availableDevices = {
        "192.168.1.1"        : "My Mobile",
        "192.168.1.2"        : "My laptop"
    }
    
    my.getAvailableDevices = function () {
        return my.availableDevices;
    }

    return my;
}(SM));