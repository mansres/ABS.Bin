var panelElement;
var initializedStudio;
var panelElements = [];

window.interopFunctions = {
    OpenUrlNewTab: function (URL) {
        window.open(URL, '_blank');
    },
    SelectLang: function (culture) {
        value = "c=" + culture + "|uic=" + culture;
        Cookies.set('.AspNetCore.Culture', value);
        window.location.reload();
    },
    FormatCurrency: function (number, currency = "USD", locale = "en-US") {
        return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(number)
    },
    InitLayout: function () {
        StudioApp.init(StudioAppOptions);
        StudioDemoPanel.init();
        StudioLayout.init();
        StudioUtil.removeClass(StudioUtil.get('body'), 'abs-page--loading');

        if (!initializedStudio) {
            setTimeout(function () {
                // This will be executed after 1,000 milliseconds
                StudioQuickPanel.init();
                window.fabricUtils.enableBreadcrumbs();
            }, 1000);
            initializedStudio = true;

            var DropdownHTMLElements = document.querySelectorAll('.ms-Dropdown');
            for (var i = 0; i < DropdownHTMLElements.length; ++i) {
                var Dropdown = new fabric['Dropdown'](DropdownHTMLElements[i]);
            }
        }
    },

    toastNotification: function (notificationType, notificationMessage) {
        // Display an info toast with no title
        switch (notificationType) {
            case "info":
                toastr.info(notificationMessage);
                break;
            case "success":
                toastr.success(notificationMessage);
                break;
            case "warning":
                toastr.warning(notificationMessage);
                break;
            case "error":
                toastr.error(notificationMessage);
                break;
        }
    },
    FormatCurrency: function (number, currency = "USD", locale = "en-US") {
        return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(number)
    },
    InitFacePile: function () {
        var PersonaElements = document.querySelectorAll(".ms-Persona");
        for (var i = 0; i < PersonaElements.length; i++) {
            new fabric['Persona'](PersonaElements[i]);
        }
    },
    InitPivots: function () {
        var PivotElements = document.querySelectorAll(".ms-Pivot");
        for (var i = 0; i < PivotElements.length; i++) {
            new fabric['Pivot'](PivotElements[i]);
        }
    },
    InitPanel: function (panelId) {
        if (!panelElements[panelId])
            panelElements[panelId] = document.getElementById(panelId);
        new fabric['Panel'](panelElements[panelId]);
    },

    closeHoldOn: function (){
        HoldOn.close();
    },
    openHoldOn: function (text, bgColor = "#1847B1", textColor = "white") {
        var options = {
            theme: "sk-cube-grid",
            message: text,
            backgroundColor: bgColor,
            textColor: textColor
        };

        HoldOn.open(options);
    },
    reloadScriptTags: function () {
        // Finds and executes scripts in a newly added element's body.
        // Needed since innerHTML does not run scripts.
        //
        // Argument body_el is an element in the dom.
        var body_el = $("body")
        function nodeName(elem, name) {
            return elem.nodeName && elem.nodeName.toUpperCase() ===
                name.toUpperCase();
        };

        function evalScript(elem) {
            var data = (elem.text || elem.textContent || elem.innerHTML || ""),
                head = document.getElementsByTagName("head")[0] ||
                    document.documentElement,
                script = document.createElement("script");

            script.type = "text/javascript";
            try {
                // doesn't work on ie...
                script.appendChild(document.createTextNode(data));
            } catch (e) {
                // IE has funky script nodes
                script.text = data;
            }

            head.insertBefore(script, head.firstChild);
            head.removeChild(script);
        };

        // main section of function
        var scripts = [],
            script,
            children_nodes = body_el.childNodes,
            child,
            i;


        var scripts = document.getElementsByTagName("script");

        for (i = 0; scripts[i]; i++) {
            script = scripts[i];
            if (script.parentNode) { script.parentNode.removeChild(script); }
            evalScript(scripts[i]);
        }
    }
}

window.blazorUtils = {
    onHold: function () {
    },
    onReady: function () {
    },
    HoldOnClose: function () {
        HoldOn.close();
    },
    HoldOnStart: function () {
        HoldOn.start();
    },
    NProgressStart: function () {
        NProgress.start()
    },
    NProgressSet: function (value) {
        NProgress.set(value)
    },
    NProgressIncrement: function () {
        NProgress.inc()
    },
    NProgressDone: function () {
        NProgress.done()
    },
    finishLoading() {
        window.blazorUtils.NProgressDone()
    },
    startLoading() {
        window.blazorUtils.NProgressStart()
    },
    formatCurrency: function (number, currency = "USD", locale = "en-US") {
        return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(number)
    },
    toastNotification: function (notificationType, notificationMessage) {
        toastr.options.closeButton = true;
        toastr.options.progressBar = true;
        toastr.options.preventDuplicates = true;
        toastr.options.positionClass = "toast-bottom-right";

        // Display an info toast with no title
        switch (notificationType) {
            case "info":
                toastr.info(notificationMessage);
                break;
            case "success":
                toastr.success(notificationMessage);
                break;
            case "warning":
                toastr.warning(notificationMessage);
                break;
            case "error":
                toastr.error(notificationMessage);
                break;
        }
    },
    SelectLang: function (culture) {
        Cookies.set('.AspNetCore.Culture', "c=" + culture + "|uic=" + culture);
        window.location.reload();
    },

}
