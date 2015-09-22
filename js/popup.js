document.addEventListener('DOMContentLoaded', function () 
{
	var checkPageButton = document.getElementById('checkPage');
	checkPageButton.addEventListener('click', function() 
	{
//		chrome.tabs.executeScript
//		(
//			{
//				code: 'document.body.style.backgroundColor="red"'
//				//To inject code from code in a file:
//				//chrome.tabs.executeScript(null, {file: "content_script.js"});
//			}
//		);
        
        //chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.executeScript(null, {file: "js/revertImage.js"});
        //});
        
//        chrome.tabs.getSelected(null, function (tab) {
//            var newsImg = document.getElementsByClassName("article-media");
//            console.log("Number of article-media's:   " + newsImg.length);
//            console.log(tab.url);
//        });
        
		//From the tutorial; how to use url in logic:
		//chrome.tabs.getSelected(null, function(tab) 
		//{
			// d = document;
			// var f = d.createElement('form');
			// f.action = 'http://gtmetrix.com/analyze.html?bm';
			// f.method = 'post';
			// var i = d.createElement('input');
			// i.type = 'hidden';
			// i.name = 'url';
			// i.value = tab.url;
			// f.appendChild(i);
			// d.body.appendChild(f);
			// f.submit();
		//});
	}, false);
}, false);