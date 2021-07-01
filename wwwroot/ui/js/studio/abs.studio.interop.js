window.InitLayout = () => {
    StudioApp.init(StudioAppOptions);
    StudioLayout.init();
    StudioDemoPanel.init();
    StudioQuickPanel.init();
    StudioUtil.removeClass(StudioUtil.get('body'), 'abs-page--loading');
}

var StudioAppOptions = {
    "colors": {
        "state": {
            "brand": "#22b9ff",
            "light": "#ffffff",
            "dark": "#282a3c",
            "primary": "#5867dd",
            "success": "#34bfa3",
            "info": "#36a3f7",
            "warning": "#ffb822",
            "danger": "#fd3995"
        },
        "base": {
            "label": ["#c5cbe3", "#a1a8c3", "#3d4465", "#3e4466"],
            "shape": ["#f0f3ff", "#d9dffa", "#afb4d4", "#646c9a"]
        }
    }
};



window.onerror = function () {
    //  location.reload();
}

window.ClearTooltips = () => {
    $(".tooltip").each(function (index) {
        this.remove()
    });
}

window.AddScript = (URI) => {
    $(document).ready(function () {
        $.getScript(URI);
    });
}

$(".abs-aside-menu-overlay").mouseover(function () {
    $("body").removeClass("abs-aside-menu-overlay--on");
    console.log("Removed Class");
});


