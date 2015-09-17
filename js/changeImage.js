//chrome.tabs.getSelected(null, function (tab) {
var storyDiv = document.getElementsByClassName("story-body");
if (storyDiv.length > 0) {
    storyDiv = storyDiv[0];
    // Change the source of the images
    var newsImgs = storyDiv.getElementsByTagName("img");
    for (var i = 0; i < newsImgs.length; i++) {
        newsImgs[i].style.webkitFilter = "blur(15px) saturate(10)";
    }
    // Change the source of the videos
    var newsVids = storyDiv.getElementsByTagName("video");
    for (var i = 0; i < newsVids.length; i++) {
        newsVids[i].src = "http://www.w3schools.com/html/mov_bbb.mp4";
    }
    // 'Classify' the text
    var newsParagraphs = storyDiv.getElementsByTagName("p");
    var paraText = "";
    var index = 0;
    var index2 = 0;
    var index3 = 0;
    for (var i = 0; i < newsParagraphs.length; i++) {
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
//        console.log("parent node: " + paraText.parentElement);
        paraText = "<span style='background-color:#000; color:#000;'>" + paraText.substring(0,index) + 
            "</span>" + paraText.substring(index, index2) + 
            "<span style='background-color:#000; color:#000;'>" + paraText.substring(index2,index3) + 
            "</span>" + paraText.substring(index3,paraText.length);
        newsParagraphs[i].innerHTML = paraText;
    }
}