var newHTML = document.createElement('div');
newHTML.innerHTML = '<div id="difficulty" style="position:absolute;top:20px;margin:3px auto;left:50%;margin-left:-60px;"><button id="skipPuzzle" class="requestHelp" style="margin:0px 5px 5px 5px;padding:5px 10px;border-radius: 6px;border:none;display:inline-block;color:#fff;text-decoration: none;background-color: #28a8e0;height:30px;">Skip</button><button id="easyPuzzle" class="requestHelp" style="margin:0px 5px 5px 5px;padding:5px 10px;border-radius: 6px;border:none;display:inline-block;color:#fff;text-decoration: none;background-color: #28a8e0;height:30px;">Easy</button><button id="hardPuzzle" class="requestHelp" style="margin:0px 5px 5px 5px;padding:5px 10px;border-radius: 6px;border:none;display:inline-block;color:#fff;text-decoration: none;background-color: #28a8e0;height:30px;">Hard</button></div><!-- HTML for the image snap puzzle --><div id="puzzle-containment" style="border-top: 1px solid #eee;border-bottom:1px solid #eee;background:#fafafa;margin:10px;padding:40px 10px 130px 10px;text-align:center"><div id="help" style="float:left;overflow:hidden;max-width:300px;"><img id="helpImg" style="max-width:300px;" src=""/><img id="helpChat" style="max-width:300px;margin-top:15px;" src=""/></div><div class="pure-g" style="max-width:1920px;margin:auto"><div class="pure-u-1 pure-u-md-1-2"><div style="margin:10px"><img style="height:500px;width:auto;opacity:0.1;position:absolute;left:0px;right:0px;margin:auto;" id="source_image" class="pure-img" src=""></div></div><div class="pure-u-1 pure-u-md-1-2"><div id="pile" style="margin:10px"><div id="puzzle_solved" style="display:none;text-align:center;position:relative;top:25%"><h2 id="finished-msg" style="margin:0 0 20px">Well done! Your article has been declassified for you to read. Your score was: 2400.</h2><p><button id="hidePuzzle" style="margin:0px 5px 5px 5px;padding:5px 10px;border-radius: 6px;border:none;display:inline-block;color:#fff;text-decoration: none;background-color: #28a8e0;height:30px;">Hide Puzzle</button></p></div></div></div></div></div>';

//document.body.appendChild (newHTML);
document.body.innerHTML = newHTML.innerHTML + document.body.innerHTML;

getUserData();
var scriptJ = document.createElement('script');
    scriptJ.src = chrome.extension.getURL('js/jquery-2.1.4.min.js');
    scriptJ.onload = function() 
    {
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(scriptJ);

var scriptJui = document.createElement('script');
    scriptJui.src = chrome.extension.getURL('js/jquery-ui.min.js');
    scriptJ.onload = function() 
    {
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(scriptJui);

var scriptPuzzle = document.createElement('script');
    scriptPuzzle.src = chrome.extension.getURL('js/jQuery-snapPuzzle-master/jquery.snap-puzzle.js');
    scriptPuzzle.onload = function() 
    {
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(scriptPuzzle);

var scriptPopup = document.createElement('script');
    scriptPopup.src = chrome.extension.getURL('js/popup.js');
    scriptPopup.onload = function() 
    {
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(scriptPopup);

var script = document.createElement('script');
    script.src = chrome.extension.getURL('js/gameLoad.js');
    script.onload = function() 
    {
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(script);

var script2 = document.createElement('script');
    script2.src = chrome.extension.getURL('js/puzzle.js');
    script2.onload = function() 
    {
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(script2);

//var style1 = document.createElement('link');
//    style1.rel = "stylesheet";
//    style1.href = chrome.extension.getURL('css/list-css.css');
//    style1.onload = function()
//    {
//        this.parentNode.removeChild(this);
//    };
//    (document.head||document.documentElement).appendChild(style1);

function getUserData() {
    //$.getJSON("../store/userData.json", function(data) {
        //alert();

        document.getElementById('source_image').src = chrome.extension.getURL('css/kangaroo.jpg');
    
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