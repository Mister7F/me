function viewable(el, bounds) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top + rect.height >= 0 &&
        rect.left + rect.width >= 0 &&
        rect.bottom - rect.height <=
            (window.innerHeight || document.documentElement.clientHeight) +
                bounds &&
        rect.right - rect.width <=
            (window.innerWidth || document.documentElement.clientWidth) + bounds
    );
}

function updateVisibility() {
    var elements = document.querySelectorAll("*[observeVisibility]");
    for (var i = 0; i < elements.length; i++) {
        var vis = viewable(elements[i], 0);
        if (vis && elements[i].hasAttribute("visible") == false) {
            elements[i].setAttribute("visible", "");

            if (elements[i].getAttribute("observeVisibility")) {
                let f = eval(elements[i].getAttribute("observeVisibility"));
                f(true, elements[i]);
            }
        } else if (
            elements[i].hasAttribute("visible") == true &&
            vis == false
        ) {
            elements[i].removeAttribute("visible");

            if (elements[i].getAttribute("observeVisibility")) {
                let f = eval(elements[i].getAttribute("observeVisibility"));
                f(false, elements[i]);
            }
        }
    }

    var elements = document.querySelectorAll("*[observePosition]");
    for (var i = 0; i < elements.length; i++) {
        let callback = eval(elements[i].getAttribute("observePosition"));
        callback(elements[i].getBoundingClientRect().top);
    }
}

document.querySelector("body").onscroll = updateVisibility;

document.body.onload = function () {
    updateVisibility();
};
