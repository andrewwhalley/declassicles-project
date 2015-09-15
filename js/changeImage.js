//chrome.tabs.getSelected(null, function (tab) {
var storyDiv = document.getElementById("story");
var newsImgs = storyDiv.getElementsByTagName("img");
console.log("Number of article-media's: " + newsImgs.length);
for (var i = 0; i < newsImgs.length; i++) {
    newsImgs[i].src = "http://lovelesssociety.com/wp-content/uploads/2015/03/cool_cat.jpg";
}
//    console.log(tab.url);
//});