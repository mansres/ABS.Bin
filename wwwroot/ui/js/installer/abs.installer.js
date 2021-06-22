window.interopFunction = {
    toastNotification: function (notificationType, notificationMessage) {
        console.log(notificationMessage);
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
    CloseHoldOn: function (text) {
        HoldOn.close();
    },
    OpenHoldOn: function (text) {
        HoldOn.close();

        HoldOn.open({
            message: text,
            theme: "sk-cube-grid",
            backgroundColor: "#f1f1f1",
            textColor: "black"
        })
    },
    InitInstallForm: function () {

        /*
            Fullscreen background
        */
        $.backstretch("/ui/images/installer/backgrounds/1.jpg");

        $('#top-navbar-1').on('shown.bs.collapse', function () {
            $.backstretch("resize");
        });
        $('#top-navbar-1').on('hidden.bs.collapse', function () {
            $.backstretch("resize");
        });

        /*
            Form
        */
        $('.registration-form fieldset:first-child').fadeIn('slow');

        $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea').on('focus', function () {
            $(this).removeClass('input-error');
        });

        // next step
        $('.registration-form .btn-next').on('click', function () {
            var parent_fieldset = $(this).parents('fieldset');
            var next_step = true;

            parent_fieldset.find('input[type="text"], input[type="password"], textarea').each(function () {
                if ($(this).val() == "") {
                    $(this).addClass('input-error');
                    next_step = false;
                }
                else {
                    $(this).removeClass('input-error');
                }
            });

            if (next_step) {
                parent_fieldset.fadeOut(400, function () {
                    $(this).next().fadeIn();
                });
            }

        });

        // previous step
        $('.registration-form .btn-previous').on('click', function () {
            $(this).parents('fieldset').fadeOut(400, function () {
                $(this).prev().fadeIn();
            });
        });

        // submit
        $('.registration-form').on('submit', function (e) {

            $(this).find('input[type="text"], input[type="password"], textarea').each(function () {
                if ($(this).val() == "") {
                    e.preventDefault();
                    $(this).addClass('input-error');
                }
                else {
                    $(this).removeClass('input-error');
                }
            });

        });
    }
};



jQuery(document).ready(function () {

    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea').each(function () {
        $(this).val($(this).attr('placeholder'));
    });

});