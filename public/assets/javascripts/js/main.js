! function(i) {
    "use strict";
    var t = function() {};
    t.prototype.initLoader = function() {
        i(window).load(function() {
            i("#status").fadeOut(), i("#preloader").delay(350).fadeOut("slow"), i("body").delay(350).css({
                overflow: "visible"
            })
        })
    }, t.prototype.initNicescroll = function() {
        i(".niceScrollleft").niceScroll({
            height: "auto",
            position: "right",
            scrollspeed: 40,
            cursorcolor: "#ddd",
            cursorwidth: "8px"
        })
    }, t.prototype.init = function() {
        this.initLoader(), this.initNicescroll()
    }, i.MainApp = new t, i.MainApp.Constructor = t
}(window.jQuery),
function(t) {
    "use strict";
    window.jQuery.MainApp.init()
}();
