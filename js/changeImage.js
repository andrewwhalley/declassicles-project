var newHTML = document.createElement('div');
newHTML.innerHTML = '<div id="difficulty" style="position:absolute;top:30px;margin:0 auto;"><button id="easyPuzzle">Easy</button><button id="hardPuzzle">Hard</button></div><!-- HTML for the image snap puzzle --><div id="puzzle-containment" style="border-top: 1px solid #eee;border-bottom:1px solid #eee;background:#fafafa;margin:30px 0;padding:10px;text-align:center"><div class="pure-g" style="max-width:1920px;margin:auto"><div class="pure-u-1 pure-u-md-1-2"><div style="margin:10px"><img style="height:500px;width:auto;opacity:0.1" id="source_image" class="pure-img" src=""></div></div><div class="pure-u-1 pure-u-md-1-2"><div id="pile" style="margin:10px"><div id="puzzle_solved" style="display:none;text-align:center;position:relative;top:25%"><h2 style="margin:0 0 20px">Well done!</h2></div></div></div></div></div>';

'<div id="difficulty"><button class="requestHelp" id="easyPuzzle" style="margin:10px;">Easy</button><button class="requestHelp" id="hardPuzzle" style="margin:10px;">Hard</button></div><div id="puzzle-containment" style="border-top: 1px solid #eee;border-bottom:1px solid #eee;background:#fafafa;margin:30px 0;padding:10px;text-align:center"><div class="pure-g" style="max-width:1920px;margin:auto"><div class="pure-u-1 pure-u-md-1-2"><div style="margin:10px"><img id="source_image" class="pure-img" src="" width="680px" height="550px" style="display:none"></div></div><div class="pure-u-1 pure-u-md-1-2"><div id="pile" style="margin:10px"><div id="puzzle_solved" style="display:none;text-align:center;position:relative;top:25%"><h2 style="margin:0 0 20px">Well done! Your article has been declassified for you to read. Your score was: 2400.</h2>';
//document.body.appendChild (newHTML);
document.body.innerHTML = newHTML.innerHTML + document.body.innerHTML;

getUserData();

var scriptJ = document.createElement('script');
    scriptJ.src = chrome.extension.getURL('js/jquery-2.1.4.min.js');
    scriptJ.onload = function() 
    {
        console.log('hey jquery');
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(scriptJ);

var scriptJui = document.createElement('script');
    scriptJui.src = chrome.extension.getURL('js/jquery-ui.min.js');
    scriptJ.onload = function() 
    {
        console.log('hey jquery ui');
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(scriptJui);

var scriptPuzzle = document.createElement('script');
    scriptPuzzle.src = chrome.extension.getURL('js/jQuery-snapPuzzle-master/jquery.snap-puzzle.js');
    scriptPuzzle.onload = function() 
    {
        console.log('hey puzzle snap thing');
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(scriptPuzzle);

var scriptPopup = document.createElement('script');
    scriptPopup.src = chrome.extension.getURL('js/popup.js');
    scriptPopup.onload = function() 
    {
        console.log('hey popup');
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(scriptPopup);

var script = document.createElement('script');
    script.src = chrome.extension.getURL('js/gameLoad.js');
    script.onload = function() 
    {
        console.log('hey');
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(script);

var script2 = document.createElement('script');
    script2.src = chrome.extension.getURL('js/puzzle.js');
    script2.onload = function() 
    {
        console.log('hey puzzle');
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(script2);

function getUserData() {
    //$.getJSON("../store/userData.json", function(data) {
        //alert();
        console.log("fffffffffff");
        document.getElementById('source_image').src = chrome.extension.getURL('kangaroo.jpg');
        //$("#source_image").attr("src", chrome.extension.getURL('kangaroo.jpg'));
        //use a class for this image ^
    //});
}

var storyDiv = document.getElementsByClassName("story-body");
if (storyDiv.length > 0) {
    storyDiv = storyDiv[0];
    // Change the source of the images
    var newsImgs = storyDiv.getElementsByTagName("img");
    for (var i = 0; i < newsImgs.length; i++) {
        newsImgs[i].style.webkitFilter = "blur(15px) saturate(10)";
    }
    // 'Classify' the text
    var newsParagraphs = storyDiv.getElementsByTagName("p");
    var paraText = "";
    var newParaText = "";
    var index = 0;
    var index2 = 0;
    var index3 = 0;
    for (var i = 0; i < newsParagraphs.length; i++) {
        // Don't 'classify' image captions
        if (newsParagraphs[i].classList.contains("caption")) {
            continue;
        }
        // Don't 'classify' text with italics in it
        if (newsParagraphs[i].getElementsByTagName("i").length > 0) {
            continue;
        }
        // Don't 'classify' text with links in it
        if (newsParagraphs[i].getElementsByTagName("a").length > 0) {
            continue;
        }
        // Don't 'classify' text with bold or strong tags
        if (newsParagraphs[i].getElementsByTagName("b").length > 0) {
            continue;
        }
        if (newsParagraphs[i].getElementsByTagName("strong").length > 0) {
            continue;
        }
        paraText = newsParagraphs[i].innerHTML;
        
        index = Math.floor(Math.random()*100);
        // Make sure the index isn't greater than the length of the text
        if (index > paraText.length) {
            index = paraText.length;
            index2 = index;
            index3 = index;
        } else {
            index2 = index + Math.floor(Math.random()*50);
            if (index2 > paraText.length) {
                index2 = index;
            }
            index3 = index + Math.floor(Math.random()*100);
            if (index3 > paraText.length) {
                index3 = paraText.length;
            }
        }
        // Highlight from 0 to index and index2 to index3        
        newParaText = "<span class='declassicles' style='background-color:#000; color:#000;'>" + paraText.substring(0,index) + 
        "</span>" + paraText.substring(index, index2) + "<span class='declassicles' style='background-color:#000; color:#000;'>" + 
        paraText.substring(index2,index3) + "</span>" + paraText.substring(index3,paraText.length);
        newsParagraphs[i].innerHTML = newParaText;
    }
}