var currUser = 'user1';
//getUserData();
var easyButton = document.getElementById('easyPuzzle');
easyButton.addEventListener('click', function() 
{
       
       // Script to be run at the end of the game
       //chrome.tabs.executeScript(null, {file: "js/revertImage.js"});
       //chrome.tabs.executeScript(null, {file: "js/fbLogin.js"});
       initPuzzle(2);
       $("#difficulty").hide();
       $("#source_image").show();
}, false);
var hardButton = document.getElementById('hardPuzzle');
hardButton.addEventListener('click', function()
{
    initPuzzle(6);
    $("#difficulty").hide();
    $("#source_image").show();
}, false);

var skipButton = document.getElementById('skipPuzzle');
skipButton.addEventListener('click', function()
{
    $("#difficulty").hide();
//    initPuzzle(0);
    Dclsffy();
    $("#puzzle-containment").hide();
}, false);

// function initIFrame() {
// 	chrome.tabs.query({
// 		active : true,
// 		currentWindow : true
// 	}, function(tabs) {
// 		var expiry = new Date(parseInt(localStorage.expiryTime));
// 		var now = new Date();
// 		if (localStorage.accessToken && now < expiry) {
// 			$('#frame').show();
// 		} else {
// 			$('#frame').hide();
// 			loginfacebook(initIFrame);
// 		}
// 	});
// }

function getUserData() {
    //$.getJSON("../store/userData.json", function(data) {
        //alert();
        $("#source_image").attr("src", chrome.extension.getURL('kangaroo.jpg'));
        //use a class for this image ^
    //});
}

document.addEventListener('DOMContentLoaded', function() {
	//initIFrame();
    getUserData();
});