function kill_theater() {
    // kill theater anchors
    var anchors = document.getElementsByTagName("a");
    console.log("got anchors " + anchors.length);

    for(var index = 0; index < anchors.length; index++)
    {
        current_anchor = anchors[index];

        // handle click of anchored images, and redirect
        if(current_anchor != null && (current_anchor.rel == "theater" 
            || current_anchor.className.match(/uiMediaThumb|uiPhotoThumb/)))
        {
            current_anchor.addEventListener("click", function(e)
            {
                window.location.assign(this.href);
                return false;
            }, false);
        }
    }

    // check the URL just because facebook
    // does funky things with document.load
    var url = window.location.href;
    if (url.indexOf("&theater") !=-1) {
        console.log("in theater... redirecting");
        window.location.href = url.split("&theater")[0];
    }
}

setInterval ( "kill_theater()", 1000 );
