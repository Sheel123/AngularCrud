/// <reference path="jquery-1.10.2.min.js" />

////function getAccessToken() {
////    if (location.hash) {
////        if (location.hash.split('access_token=')) {
////            var accessToken = location.hash.split('access_token=')[1].split('&')[0];
////            if (accessToken) {
////                isUserRegistered(accessToken);
////            }
////        }
////    }
////}

function getAccessToken() {
    if (location.hash) {
        if (location.hash.split('access_token=')) {
            var accessToken = location.hash.split('access_token=')[1].split('&')[0];
            if (accessToken) {
                isUserRegistered(accessToken);
            }
        }
    }
}

//function isUserRegistered(accessToken) {
//    $.ajax({
//        url: '/api/Account/UserInfo',
//        method: 'GET',
//        headers: {
//            'content-type': 'application/JSON',
//            'Authorization': 'Bearer ' + accessToken
//        },
//        success: function (response) {
//            if (response.HasRegistered) {
//                localStorage.setItem('accessToken', accessToken);
//                localStorage.setItem('userName', response.Email);
//                window.location.href = "Data.html";
//            }
//            else {
//                signupExternalUser(accessToken);
//            }
//        }
//    });
//}

function isUserRegistered(accessToken) {
    $.ajax({
        url: 'http://localhost:57842/api/Account/UserInfo',
        method: 'GET',
        headers: {
            'content-type': 'application/JSON',
            'Authorization': 'Bearer ' + accessToken
        },
        success: function (response) {
            if (response.HasRegistered) {
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('userName', response.Email);
                window.location.href = "index.html";
            }
            else {
                signupExternalUser(accessToken);
            }
        }
    });
}

function signupExternalUser(accessToken) {
    $.ajax({
        url: 'http://localhost:57842/api/Account/RegisterExternal',
        method: 'POST',
        headers: {
            'content-type': 'application/JSON',
            'Authorization': 'Bearer ' + accessToken
        },
        success: function (response) {
            window.location.href = "http://localhost:57842/api/Account/ExternalLogin?provider=Google&response_type=token&client_id=self&redirect_uri=http%3A%2F%2Flocalhost%3A57842%2FLogin.html&state=vK_bmTdF-iINHYHXDS6bYDDluIFY05iVQll6dSkKWT01";
        }
    });
}