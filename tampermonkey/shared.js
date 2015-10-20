// ==UserScript==
// @name         DECO3500 test
// @namespace    http://localhost
// @version      0.1
// @description  testing overlay
// @author       You
// @match        http://www.news.com.au/entertainment/celebrity-life/justin-bieber-says-nude-photos-showed-shrinkage/story-fn907478-1227572983142
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==


//document.body.style.background = "#000000";

//http://i.imgur.com/EgImzw8.png
var a = "http://deco3500-the_declassicles.uqcloud.net/download/";

var newHTML         = document.createElement ('div');
newHTML.innerHTML   = '<div id="declassicleshare" style="position:absolute;width:100%;height:700px;top:0px;margin:0 auto;z-index:50;"><div style="background-color:#FFFFFF;;opacity:1!important;width:1100px;margin:0 auto;padding:10px 10px 20px 10px;border-radius:20px;margin-top:30px;height:450px;"><h1 style="font-size:3em;margin:0 auto;margin-top:20px;text-align:center;">This site has been classified by <span id="declassiclespan" style="font-weight:bold;">Declassicle!</span></h1><div style="padding:10px 20px 20px 20px;margin:0 auto;width:900px;margin-top:30px;background-color:#555555;color:#FFFFFF;"><p style="text-align:center;margin-top:20px;">Scroll down the page and have a look. What happened to the article your friend has shared with you?</p><p style="text-align:center;margin-top:10px;">Its been classified, but dont worry. Theres a way you can de-classify it!</p></div><h2 style="text-align:center;font-size:2em;margin-top:20px;">Interested?</h2><button id="playButton" style="position:relative;left:50%;margin-top:30px;margin-left:-110px;background-color:#1b8aba;border-radius:8px;color:#FFFFFF;padding:20px 30px 20px 30px;font-size:1.5em;" onclick="hideBanner()"><h1>Play the game!</h1></button><button style="position:absolute;left:10px;bottom:40px;background-color:#666666;border-radius:6px;color:#FFFFFF;padding:10px 20px 10px 20px;" onclick="notInterested()">Not Interested.</button></div></div><div id="joinbanner" style="position:fixed;right:30px;bottom:30px;z-index:1;padding:10px 20px 20px 20px;margin:0 auto;width:300px;margin-top:0px;background-color:#555555;color:#FFFFFF;"><p style="text-align:center;margin-top:20px;">Interested in joining the Declassicle community and joining the game?</p><button style="margin-top:30px;margin-left:40px;background-color:#FFFFFF;border-radius:6px;color:#FFFFFF;padding:10px 20px 10px 20px;"><a href="http://deco3500-the_declassicles.uqcloud.net/download/">Download Declassicle!</a></button></div>';

var scriptJ = document.createElement('script');
    scriptJ.innerHTML = "function hideBanner(){ $('#declassicleshare').hide(); } function notInterested(){ $('#declassicleshare').hide(); $('#joinbanner').hide(); }"
    scriptJ.onload = function() 
    {
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(scriptJ);

document.body.appendChild (newHTML);

function hideBanner()
{
	$('#declassicleshare').hide();
}

$('#declassicleshare').css('font-family', '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif');
$('#playButton').css('font-family', '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif');


$('#declassicleshare').css('background-image', 'url("http://i.imgur.com/nYksbyh.png")');
$('#declassicleshare').css('background-size', '400px 300px');

$('#declassiclespan').html('<img style="max-width:300px;height:auto;position:relative;top:20px;" src="http://i.imgur.com/WeIKYR9.png">');





//background-color:#AAAAAA

//<p style="width:900px;margin:0 auto;margin-top:20px;">Declassicle breaks up the monotony of reading by classifying the articles (hiding parts) that youre reading, only letting you read it fully if you can solve the puzzle!<br><br>Declassicle is a Chrome extension that detects when youre on a site that features articles, and automatically classifies them. You get a score for solving the puzzles that puts you on a leaderboard of the article and the website, so you can see who else is on your level, and who else has the same taste as you in articles. Visit more articles and solve more puzzles to find your place on top of the leaderboards. You sign into the extension with your Facebook account to keep track of your score, and to see where your Facebook friends stand. <br><br>When you move to another article, the puzzle may use something from the previous one you read, so you need to pay attention to what youre reading! Dont be worried though, as you can ask other users using Declassicle on the same site for help, including your friends. If they decide to help you, you both work on the puzzle and split the points evenly at the end. </p><h2 style="text-align:center;font-size:2em;margin-top:20px;">Sounds interesting?</h2>