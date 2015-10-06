var currUser = 'user1';

document.addEventListener('DOMContentLoaded', function () 
{
//	var popup = chrome.extension.getBackgroundPage().popup,
//        $body = $('body'); 
//    $(window).unload(function() {
//        popup.cache = $body.html();
//    });
//    
//    if (popup.cache) {
//        $body.html(popup.cache);
//    } else {
//        initialize();
//    }
    
    var easyButton = document.getElementById('easyPuzzle');
	easyButton.addEventListener('click', function() 
	{
        
        // Script to be run at the end of the game
        //chrome.tabs.executeScript(null, {file: "js/revertImage.js"});
        //chrome.tabs.executeScript(null, {file: "js/fbLogin.js"});
        initPuzzle(1);
        $("#difficulty").hide();
        $("#source_image").show();
	}, false);
    var hardButton = document.getElementById('hardPuzzle');
    hardButton.addEventListener('click', function()
    {
        initPuzzle(8);
        $("#difficulty").hide();
        $("#source_image").show();
    }, false);
}, false);

function initIFrame() {
	chrome.tabs.query({
		active : true,
		currentWindow : true
	}, function(tabs) {
		var expiry = new Date(parseInt(localStorage.expiryTime));
		var now = new Date();
		if (localStorage.accessToken && now < expiry) {
			$('#frame').show();
		} else {
			$('#frame').hide();
			loginfacebook(initIFrame);
		}
	});
}

function getUserData() {
    $.getJSON("../store/userData.json", function(data) {
        //alert();
        $("#source_image").attr("src", data.user1.prevImg);
    });
}

document.addEventListener('DOMContentLoaded', function() {
	//initIFrame();
    getUserData();
});