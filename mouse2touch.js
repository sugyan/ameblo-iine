document.addEventListener("mouseup", function (e) {
    var event = document.createEvent("Event");
    event.initEvent("touchend", true, true);
    e.target.dispatchEvent(event);
}, false);

document.addEventListener("mousedown", function (e) {
    var event = document.createEvent("Event");
    event.initEvent("touchstart", true, true);
    e.target.dispatchEvent(event);
}, false);
