//chrome.tabs.getSelected(null, function (tab) {
var storyDiv = document.getElementsByClassName("story-body");
console.log("dam son");
if (storyDiv.length > 0) {
    storyDiv = storyDiv[0];
    // Change the source of the images
    var newsImgs = storyDiv.getElementsByTagName("img");
    for (var i = 0; i < newsImgs.length; i++) {
        newsImgs[i].style.webkitFilter = "blur(0px) saturate(1)";
    }
    
    // 'Classify' the text
    var declassicleSpans = storyDiv.getElementsByClassName("declassicles");
    for (var i=0; i<declassicleSpans.length; i++) {
        declassicleSpans[i].outerHTML = declassicleSpans[i].innerHTML;
    }
    
}
