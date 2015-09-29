function start_puzzle(x){
    $('#puzzle_solved').hide();
    $('#source_image').snapPuzzle({
        rows: x, columns: x,
        pile: '#pile',
        containment: '#puzzle-containment',
        onComplete: function(){
            $('#source_image').fadeOut(150).fadeIn();
            $('#puzzle_solved').show();
            chrome.tabs.executeScript(null, {file: "js/revertImage.js"}, function() {
                chrome.storage.sync.get("prevImg", function(newPrevImg) {
                    console.log("Retrieved from extension storage: " + newPrevImg);
//                    $.getJSON("../store/userData.json", function(data) {
//                        //alert();
//                        data.user1.prevImg = newPrevImg;
//                        var fout = new File("../store/userData.json","write","TEXT");
//                        if (fout.isopen) {
//                            fout.writeline(JSON.stringify(data));
//                            fout.close();
//                        } else {
//                            alert("No good :(");
//                        }
//                    });
                });
            });
        }
    });
}

function initPuzzle(x){
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