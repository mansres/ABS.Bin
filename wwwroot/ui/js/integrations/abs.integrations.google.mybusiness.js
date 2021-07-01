/* Google My Business - ComputeWorks Integration
 * @Author: Fenix Alliance S.A.S
 * License: https://fenixalliance.com.co/Legal/Policies/EULA
*/

var apiKey = 'AIzaSyDxBJG41nGo7c9MXfcwibS4VryDPsLawtE';
var clientId = '905876142173-msfddr5bijq8du6bigreihtsdorq8838.apps.googleusercontent.com';
// Use the latest Google My Business API version
var gmb_api_version = 'https://mybusiness.googleapis.com/v4';
var scopes = 'https://www.googleapis.com/auth/business.manage';

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');
var accountsButton = document.getElementById('accounts-button');
var adminsButton = document.getElementById('admins-button');
var locationsButton = document.getElementById('locations-button');

var accounts = [];

function handleClientLoad() {
    // Load the API client and auth2 library
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: apiKey,
        clientId: clientId,
        scope: scopes
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
        accountsButton.onclick = handleAccountsClick;
        adminsButton.onclick = handleAdminsClick;
        locationsButton.onclick = handleLocationsClick;
    });
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'inline-block';
        accountsButton.style.display = 'inline-block';
    } else {
        authorizeButton.style.display = 'inline-block';
        signoutButton.style.display = 'none';
        accountsButton.style.display = 'none';
        adminsButton.style.display = 'none';
        locationsButton.style.display = 'none';
    }
}

function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

function handleAccountsClick(event) {
    let user = gapi.auth2.getAuthInstance().currentUser.get();
    let oauthToken = user.getAuthResponse().access_token;
    let req = gmb_api_version + '/accounts';
    let xhr = new XMLHttpRequest();
    let p = document.createElement('p');

    p.appendChild(document.createTextNode('Accounts'));

    console.log(req);

    xhr.responseType = 'json';
    xhr.open('GET', req);
    xhr.setRequestHeader('Authorization', 'Bearer ' + oauthToken);

    xhr.onload = function () {

        if (xhr.status !== 200) {
            return;
        }

        for (let i = 0; i < xhr.response.accounts.length; i++) {

            let account = xhr.response.accounts[i].name;

            if (accounts.indexOf(account) === -1) {
                accounts.push(account);
            }

            p.appendChild(document.createElement('br'));
            p.appendChild(document.createTextNode(account));
            p.appendChild(document.createTextNode(' accountName: ' + xhr.response.accounts[i].accountName));
            p.appendChild(document.createTextNode(' type: ' + xhr.response.accounts[i].type));
            p.appendChild(document.createTextNode(' role: ' + xhr.response.accounts[i].role));
            p.appendChild(document.createTextNode(' state.status: ' + xhr.response.accounts[i].state.status));

            adminsButton.style.display = 'inline-block';
            locationsButton.style.display = 'inline-block';
        }
    };
    xhr.send();
    document.getElementById('dynamic-content').appendChild(p);
}

function handleAdminsClick(event) {
    let p = document.createElement('p');

    p.appendChild(document.createTextNode('Admins'));

    for (let i = 0; i < accounts.length; i++) {

        let user = gapi.auth2.getAuthInstance().currentUser.get();
        let oauthToken = user.getAuthResponse().access_token;
        let xhr = new XMLHttpRequest();
        let req = gmb_api_version + '/' + accounts[i] + '/admins';

        console.log(req);

        xhr.responseType = 'json';
        xhr.open('GET', req);
        xhr.setRequestHeader('Authorization', 'Bearer ' + oauthToken);

        xhr.onload = function () {

            if (xhr.status !== 200) {
                return;
            }

            for (let j = 0; j < xhr.response.admins.length; j++) {

                p.appendChild(document.createElement('br'));
                p.appendChild(document.createTextNode(xhr.response.admins[j].name));
                p.appendChild(document.createTextNode(' adminName: ' + xhr.response.admins[j].adminName));
                p.appendChild(document.createTextNode(' role: ' + xhr.response.admins[j].role));
            }
        };
        xhr.send();
    }
    document.getElementById('dynamic-content').appendChild(p);
}

function handleLocationsClick(event) {
    let p = document.createElement('p');

    p.appendChild(document.createTextNode('Locations'));

    for (let i = 0; i < accounts.length; i++) {

        let user = gapi.auth2.getAuthInstance().currentUser.get();
        let oauthToken = user.getAuthResponse().access_token;
        let xhr = new XMLHttpRequest();
        let req = gmb_api_version + '/' + accounts[i] + '/locations';

        xhr.responseType = 'json';
        xhr.open('GET', req);
        xhr.setRequestHeader('Authorization', 'Bearer ' + oauthToken);

        xhr.onload = function () {

            if (xhr.status !== 200 || xhr.response.locations === undefined) {
                return;
            }

            for (let j = 0; j < xhr.response.locations.length; j++) {

                p.appendChild(document.createElement('br'));
                p.appendChild(document.createTextNode(xhr.response.locations[j].name));
                p.appendChild(document.createTextNode(' locationName: ' + xhr.response.locations[j].locationName));
                p.appendChild(document.createTextNode(' address.addressLines: ' + xhr.response.locations[j].address.addressLines));
                p.appendChild(document.createTextNode(' locationState isVerified: ' + xhr.response.locations[j].locationState.isVerified));
            }
        };
        xhr.send();
    }
    document.getElementById('dynamic-content').appendChild(p);
}