//// Facebook login SDK
//// This is called with the results from from FB.getLoginStatus().
//function statusChangeCallback(response) {
//    console.log('statusChangeCallback');
//    console.log(response);
//    // The response object is returned with a status field that lets the
//    // app know the current login status of the person.
//    // Full docs on the response object can be found in the documentation
//    // for FB.getLoginStatus().
//    if (response.status === 'connected') {
//      // Logged into your app and Facebook.
//      testAPI();
//    } else if (response.status === 'not_authorized') {
//      // The person is logged into Facebook, but not your app.
//      document.getElementById('status').innerHTML = 'Please log ' +
//        'into this app.';
//    } else {
//      // The person is not logged into Facebook, so we're not sure if
//      // they are logged into this app or not.
//      document.getElementById('status').innerHTML = 'Please log ' +
//        'into Facebook.';
//    }
//}
//
//// This function is called when someone finishes with the Login
//// Button.  See the onlogin handler attached to it in the sample
//// code below.
//function checkLoginState() {
//    FB.getLoginStatus(function(response) {
//      statusChangeCallback(response);
//    });
//}
//
//window.fbAsyncInit = function() {
//    FB.init({
//      appId      : '422047611320042',
//      cookie     : true,
//      xfbml      : true,
//      version    : 'v2.4'
//    });
//
//    // Now that we've initialized the JavaScript SDK, we call 
//    // FB.getLoginStatus().  This function gets the state of the
//    // person visiting this page and can return one of three states to
//    // the callback you provide.  They can be:
//    //
//    // 1. Logged into your app ('connected')
//    // 2. Logged into Facebook, but not your app ('not_authorized')
//    // 3. Not logged into Facebook and can't tell if they are logged into
//    //    your app or not.
//    //
//    // These three cases are handled in the callback function.
//
//    FB.getLoginStatus(function(response) {
//        statusChangeCallback(response);
//    });
//};
//
//(function(d, s, id){
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) {return;}
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/all.js";
//    fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));
//
//// Here we run a very simple test of the Graph API after login is
//// successful.  See statusChangeCallback() for when this call is made.
//function testAPI() {
//    console.log('Welcome!  Fetching your information.... ');
//    FB.api('/me', function(response) {
//      console.log('Successful login for: ' + response.name);
//      document.getElementById('status').innerHTML =
//        'Thanks for logging in, ' + response.name + '!';
//    });
//}

function loginfacebook(callback) {
    chrome.windows.create({
        'url' : "https://www.facebook.com/dialog/oauth?"
                + "display=popup&"
                + "client_id=422047611320042&"
                + "redirect_uri=https://www.google.com/&"
                + "scope=publish_actions&" + "response_type=token",
        'width' : 580,
        'height' : 400
    }, function(popupWindow) {
        chrome.tabs.query({
            active : true
        }, function(tabs) {
            tabid = tabs[0].id;
            chrome.tabs.onUpdated.addListener(function(tabid, tab) {
                var tabUrl = tab.url;
				var accessTokenMatcher = null;
				var expiresInMatcher = null;
				if (tabUrl != null) {
				    accessTokenMatcher = tabUrl.match(/[\\?&#]access_token=([^&#])*/i);
                    expiresInMatcher = tabUrl.match(/expires_in=.*/);
                }
				if (accessTokenMatcher != null) {
				    token = accessTokenMatcher[0];
					token = token.substring(14);
                    expires_in = expiresInMatcher[0];
					expires_in = expires_in.substring(11);
                    localStorage.accessToken = token;
					var currentDate = new Date();
					var expiryTime = currentDate.getTime() + 1000 * (expires_in - 300);
                    localStorage.expiryTime = expiryTime;
                    chrome.windows.remove(popupWindow.id);
                    callback();
				};
            });
        });
    });
}