var observer = new MutationObserver(reviewContentChange);
observer.observe($('#review')[0], {childList: true});

var currentWord;
var googleurl = "https://www.google.com/search?tbm=isch&q=";

function reviewContentChange(mutations) {
    var word = $("h1")[0];
    var span = $("div.offset1")[0];
    if(word && word.textContent != currentWord){
        currentWord = word.textContent;
        $("div#review").css("width", "1200px");
        $("div#answer").append("<br><iframe src=\"https://www.google.com/search?tbm=isch&q=" + currentWord + "\" style=\"width: 1100px; height:330px;\" />");

        console.debug(currentWord);
    }
}
