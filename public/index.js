/**************************************************************
 *
 * index.js
 * Website for the upcoming Lee Jennings EP
 * Very cool :D <3 8)
 *
 **************************************************************/


// Helper functions & common stuff used throughout this file
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function isMobileDevice() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}


$(window).on("load", function() {
    
    var presaveColor = "#fff";
    setInterval(function() {
        if (presaveColor == "#fff") {
            presaveColor = "#ff0";
        }
        else {
            presaveColor = "#fff";
        }
        $("#presave").css("color", presaveColor);
    }, 1000);

    var leeFaceTransform = 1; 
    setInterval(function() {
        if (leeFaceTransform == 1) {
            leeFaceTransform = -1;
        }
        else {
            leeFaceTransform = 1;
        }
        $("#lee-bam-face").css("transform", "scaleX(" + leeFaceTransform + ")");
    }, 300);

    var marqueeOptions = [
        "<b class='hotbread'>🔥 !!! HOT BREAD !!! 🔥</b>",
        "LEE JENNINGS MUST BE ELIMINATED",
        "THIS MUSIC IS BAD",
        "リージェニングスアスチャンバー",
        "LEE JENNINGS RISE FROM YOUR GRAVE",
    ];
    for (var i = 0; i <= 100; i++) {
        var j = getRandInt(0, marqueeOptions.length);
        var k = getRandInt(0, marqueeOptions.length);
        [marqueeOptions[j], marqueeOptions[k]] = [marqueeOptions[k], marqueeOptions[j]];

    }
    $("#marquee").html(marqueeOptions.join("&nbsp;".repeat(20)));

    var quoteAuthorDict = {
        "Get hit by a bus": "Robert Phiso",
        "Waalazinga": "Maxwell UBUR",
        "I listened to it": "Keith Sub Antix",
        "Good bing bing bong music": "Nolan Syzy",
        "Tom Flanders Oregon Trail. Macintosh Flanders click click space bar Tom. Fland gers. T o": "Yauvin Akeos"
    }
    var quotes = Object.keys(quoteAuthorDict);
    var quoteIdx = 0;
    setQuote();
    setInterval(function() { setQuote(); }, 2000);

    function setQuote() {
        //if (quoteIdx >= quotes.length) {
        //    quoteIdx = 0;
        //    console.log("yeh");
        //}
        //$("#quote").text(quotes[quoteIdx]);
        //$("#author").text(quoteAuthorDict[quotes[quoteIdx]]);
        //quoteIdx++;
    }

    // Video playing hack, kinda messy but it gets the job done
    var videos = $("video").get().reverse();
    for (const video of videos) {
        video.onended = function() {
            let videoId = parseInt(this.id.slice(-1));
            if (videoId + 1 == videos.length) {
                $("video").css("display", "block");
                $("#video0").get(0).play();
            }
            else {
                $("#video" + videoId).css("display", "none");
                this.currentTime = 0;
                $("#video" + (videoId + 1)).get(0).play();
            }
        }
    }

    $("#playbutton").on("click", function() {
        $(this).css("display", "none");
        $("#video0").get(0).play();
        $("audio").get(0).play();
    });
});
