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
    
    var declassicleImg = document.getElementById('declassicle-image');
    declassicleImg.addEventListener('click', function()
    {
        $(this).fadeOut(2000);
        $("#declassicle-content").fadeIn(2000);
    }, false);
    
    var user1Help = document.getElementById('user1Help');
    user1Help.addEventListener('click', function()
    {
        $("#user1HelpSent").html("Request for help sent");
        $("#user1Help").hide();
    }, false);
    
    var user2Help = document.getElementById('user2Help');
    user2Help.addEventListener('click', function()
    {
        $("#user2HelpSent").html("Request for help sent");
        $("#user2Help").hide();
    }, false);
    
    var user3Help = document.getElementById('user3Help');
    user3Help.addEventListener('click', function()
    {
        $("#user3HelpSent").html("Request for help sent");
        $("#user3Help").hide();
    }, false);
    
    var user4Help = document.getElementById('user4Help');
    user4Help.addEventListener('click', function()
    {
        $("#user4HelpSent").html("Request for help sent");
        $("#user4Help").hide();
    }, false);
    
//    var usersButton = document.getElementById('showUsers');
//    usersButton.addEventListener('click', function()
//    {
//        var options = {
//            valueNames: ['profilepic', 'name', 'requesthelp']
//        };
//        $("#users").show();
//        $("#hideUsers").show();
//        $("#showUsers").hide();
//    }, false);
//    
//    var hideUsersButton = document.getElementById('hideUsers');
//    hideUsersButton.addEventListener('click', function()
//    {
//        $("#users").hide();
//        $("#hideUsers").hide();
//        $("#showUsers").show();
//    }, false);
    
//    var easyButton = document.getElementById('easyPuzzle');
//	easyButton.addEventListener('click', function() 
//	{
//        
//        // Script to be run at the end of the game
//        //chrome.tabs.executeScript(null, {file: "js/revertImage.js"});
//        //chrome.tabs.executeScript(null, {file: "js/fbLogin.js"});
//        initPuzzle(1);
//        $("#difficulty").hide();
//        $("#showUsers").show();
//        $("#source_image").show();
//	}, false);
//    var hardButton = document.getElementById('hardPuzzle');
//    hardButton.addEventListener('click', function()
//    {
//        initPuzzle(8);
//        $("#difficulty").hide();
//        $("#showUsers").show();
//        $("#source_image").show();
//    }, false);
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
//    getUserData();
});