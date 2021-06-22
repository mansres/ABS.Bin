// Facebook  Page Btn
window.Facebook = {
    writeToTerminal: function () {
        // Get required page permissions
        FB.login(function (response) {
            if (response.authResponse) {
                toastr.warning('Welcome!  Fetching your information.... ');
                FB.api('/me', function (response) {
                    toastr.info('Good to see you, ' + response.name + '.');
                    document.getElementById('userId').innerHTML = response.id;
                });
            } else {
                toastr.error('User cancelled login or did not fully authorize.');
            }
        }, { scope: 'manage_pages, publish_pages', return_scopes: true });
    },
    GetPages: function () {
        FB.api('/me/accounts?fields=name,access_token,link', function (response) {
            console.log(response);
            return response;
        });
    },
    PostToPage: function (pageToken, message, imageurl, element) {
        // Post to page
        FB.api('/me/feed', 'post', {
            message: message,
            url: imageurl,
            access_token: pageToken
        }, function (response) {
            console.log(response);
            element.innerHTML = 'API response is ' + response.id;
        }
        )
        return false;
    }
}