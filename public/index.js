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


// Onload
$(window).on("load", function() {
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
        "If": "Maxwell UBUR",
        "I listened to it": "Keith Sub Antix",
        "Good bing bing bong music": "Nolan Syzy",
        "I am on this EP": "Yauvin Akeos",
        "That good feel when Lee Jennings": "Kendal Vanfleet",
        "Cheese": "Jesse Subtronics",
        "If you like music theres a chance you'll like this": "Cooper Oolacile",
        "I have to Poopo": "L.U.X",
        "I left my dog in Ethiopia": "Kaimen Hukae",
        "Please save me from Lee Jenning basement": "Aaaron Jub",
        "Has anyone seen my shoe": "Cam Phonon",
    }
    var quotes = Object.keys(quoteAuthorDict);
    var quoteIdx = 0;
    setQuote();
    setInterval(function() { setQuote(); }, 2500);

    function setQuote() {
        if (quoteIdx >= quotes.length) {
            quoteIdx = 0;
        }
        $("#quote").text(" ‟ " + quotes[quoteIdx] + " ” ");
        $("#author").text(" - " + quoteAuthorDict[quotes[quoteIdx]]);
        quoteIdx++;
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

    $("#presave").on("click", function() {
        window.open("https://nsd.presave.io/t/NSDBL106", "_blank");
    });

    $("#presave").on("mouseenter", function() {
        document.body.style.cursor = "pointer";
        $("h2").css("animation", "none");
    });

    $("#presave").on("mouseout", function() {
        document.body.style.cursor = "default";
        $("h2").css("animation", "blinking 1s linear infinite");
    });
});
