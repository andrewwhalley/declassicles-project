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
    console.log("Total length: " + declassicleSpans.length);
    var currLength = declassicleSpans.length; 
    for (var i=0; i<currLength; i++) {
        declassicleSpans[0].outerHTML = declassicleSpans[0].innerHTML;
    }
    // Store an image from the article in chrome storage
    // Save it using the Chrome extension storage API.
    var newPrevImg = newsImgs[Math.floor(Math.random()*50) % newsImgs.length].src;
    chrome.storage.sync.set({'prevImg': newPrevImg}, function() {
      // Notify that we saved.
      console.log('Settings saved');
    });
}
