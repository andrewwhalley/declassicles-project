function start_puzzle(x) {
    $('#puzzle_solved').hide();
    $('#source_image').snapPuzzle({
        rows: x,
        columns: x,
        pile: '#pile',
        containment: '#puzzle-containment',
        onComplete: function(){
            $('#source_image').fadeOut(150).fadeIn();
            $('#puzzle_solved').show();
            Dclsffy();
            //console.log($('#helpChat').css('height'));
            if(parseInt($('#helpChat').css('height')) > 0)
            {
                //console.log('h');
                document.getElementById('helpChat').src = "chrome-extension://khjadhpmoemiiobonbigedkpeblinjem/css/chatcomplete.png";
            }
//            chrome.tabs.executeScript(null, {file: "js/revertImage.js"}, function() {
//                chrome.storage.sync.get("prevImg", function(newPrevImg) {
//                    console.log("Retrieved from extension storage: " + newPrevImg.prevImg);
//                    $.getJSON("../store/userData.json", function(data) {
//                        //alert();
//                        data.user1.prevImg = newPrevImg.prevImg;
//                        var fout = new File("../store/userData.json");
//                        if (fout.isopen) {
//                            fout.writeline(JSON.stringify(data));
//                            fout.close();
//                        } else {
//                            alert("No good :(");
//                        }
//                    });
//                });
//            });
        }
    });
}

function initPuzzle(x){
    if (x == 0) {
        Dclsffy();
        return;
    }
    $('#pile').height($('#source_image').height());
    start_puzzle(x);

    $('.restart-puzzle').click(function(){
        $('#source_image').snapPuzzle('destroy');
        start_puzzle($(this).data('grid'));
    });

    $(window).resize(function(){
        $('#pile').height($('#source_image').height());
        $('#source_image').snapPuzzle('refresh');
    });
}

function Dclsffy()
{
    var storyDiv = document.getElementsByClassName("story-body");
    if (storyDiv.length > 0) {
        storyDiv = storyDiv[0];
        // Change the source of the images
        var newsImgs = storyDiv.getElementsByTagName("img");
        for (var i = 0; i < newsImgs.length; i++) {
            newsImgs[i].style.webkitFilter = "blur(0px) saturate(1)";
        }
        // 'declassify' the text
        var declassicleSpans = storyDiv.getElementsByClassName("declassicles");
        var currLength = declassicleSpans.length; 
        for (var i=0; i<currLength; i++) {
            declassicleSpans[0].outerHTML = declassicleSpans[0].innerHTML;
        }
        // Store an image from the article in chrome storage
        // Save it using the Chrome extension storage API.
        var newPrevImg = newsImgs[Math.floor(Math.random()*50) % newsImgs.length].src;
//        chrome.storage.sync.set({'prevImg': newPrevImg}, function() {
//          // Notify that we saved.
//          console.log('Settings saved');
//        });
    }
}