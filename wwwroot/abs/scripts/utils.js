window.interopFunctions = {
    OpenUrlNewTab: function (URL) {
        window.open(URL, '_blank');
    },
    displayWelcome: function (welcomeMessage) {
        document.getElementById('welcome').innerText = welcomeMessage;
    },
    returnArrayAsyncJs: function () {
        DotNet.invokeMethodAsync('BlazorSample', 'ReturnArrayAsync')
            .then(data => {
                data.push(4);
                console.log(data);
            });
    },
    sayHello: function (dotnetHelper) {
        return dotnetHelper.invokeMethodAsync('SayHello')
            .then(r => console.log(r));
    },
    SelectLang: function (culture) {
        value = "c=" + culture + "|uic=" + culture;
        Cookies.set('.AspNetCore.Culture', value);
        window.location.reload();
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
    InitLayout: function () {
        StudioApp.init(StudioAppOptions);
        StudioDemoPanel.init();
        StudioLayout.init();
        StudioQuickPanel.init();
        StudioUtil.removeClass(StudioUtil.get('body'), 'abs-page--loading');
    }
};
