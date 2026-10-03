/* =====================================================
   GET PAGES
===================================================== */

const questionPage =
    document.getElementById("question-page");

const noPage =
    document.getElementById("no-page");

const letterPage =
    document.getElementById("letter-page");

const videoPage =
    document.getElementById("video-page");

const finalPage =
    document.getElementById("final-page");


/* =====================================================
   GET BUTTONS
===================================================== */

const yesButton =
    document.getElementById("yes-button");

const noButton =
    document.getElementById("no-button");

const backButton =
    document.getElementById("back-button");

const videoButton =
    document.getElementById("video-button");


/* =====================================================
   GET ENVELOPE ELEMENTS
===================================================== */

const envelope =
    document.getElementById("envelope");

const clickEnvelopeText =
    document.getElementById("click-envelope-text");


/* =====================================================
   GET VIDEO
===================================================== */

const ourVideo =
    document.getElementById("our-video");


/* =====================================================
   GET HEART CONTAINER
===================================================== */

const heartsContainer =
    document.getElementById("hearts-container");


/* =====================================================
   CHANGE PAGE
===================================================== */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(function(currentPage) {

            currentPage.classList.remove("active");

        });


    page.classList.add("active");

}


/* =====================================================
   YES
===================================================== */

yesButton.addEventListener("click", function() {

    createHeartExplosion();

    setTimeout(function() {

        showPage(letterPage);

    }, 500);

});


/* =====================================================
   NO
===================================================== */

noButton.addEventListener("click", function() {

    showPage(noPage);

});


/* =====================================================
   GO BACK FROM NO
===================================================== */

backButton.addEventListener("click", function() {

    showPage(questionPage);

});


/* =====================================================
   OPEN ENVELOPE
===================================================== */

envelope.addEventListener("click", function() {

    /*
        Don't allow the animation
        to restart if already opened.
    */

    if (envelope.classList.contains("open")) {

        return;

    }


    envelope.classList.add("open");


    /*
        Hide the little
        "click the envelope"
        instruction.
    */

    clickEnvelopeText.style.opacity = "0";


    /*
        Wait for the envelope
        animation to happen.
    */

    setTimeout(function() {

        videoButton.classList.remove("hidden");

    }, 1200);


    /*
        Little heart explosion.
    */

    createHeartExplosion();

});


/* =====================================================
   GO TO VIDEO
===================================================== */

videoButton.addEventListener("click", function() {

    showPage(videoPage);


    /*
        Start the video.

        Some browsers may block
        autoplay, so the catch
        prevents an error.
    */

    ourVideo.currentTime = 0;


    const playPromise =
        ourVideo.play();


    if (playPromise !== undefined) {

        playPromise.catch(function() {

            /*
                If autoplay is blocked,
                the controls will still
                allow him to press play.
            */

        });

    }

});


/* =====================================================
   VIDEO FINISHED
===================================================== */

ourVideo.addEventListener("ended", function() {

    createHeartExplosion();


    setTimeout(function() {

        showPage(finalPage);

    }, 600);

});


/* =====================================================
   CREATE FLOATING HEART
===================================================== */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.classList.add("floating-heart");


    const symbols = [
        "♡",
        "♥",
        "❤",
        "💕"
    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];


    /*
        Random horizontal position.
    */

    heart.style.left =
        Math.random() * 100 + "%";


    /*
        Random size.
    */

    heart.style.fontSize =
        12 + Math.random() * 25 + "px";


    /*
        Random animation speed.
    */

    const duration =
        5 + Math.random() * 7;


    heart.style.animationDuration =
        duration + "s";


    heartsContainer.appendChild(heart);


    /*
        Remove it after animation.
    */

    setTimeout(function() {

        heart.remove();

    }, (duration + 1) * 1000);

}


/* =====================================================
   CONTINUOUS HEARTS
===================================================== */

setInterval(function() {

    createHeart();

}, 900);


/* =====================================================
   INITIAL HEARTS
===================================================== */

for (let i = 0; i < 10; i++) {

    setTimeout(function() {

        createHeart();

    }, i * 250);

}


/* =====================================================
   HEART EXPLOSION
===================================================== */

function createHeartExplosion() {

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "♡",
        "♥"
    ];


    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");


        heart.classList.add("floating-heart");


        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        heart.style.left =
            (35 + Math.random() * 30) + "%";


        heart.style.bottom =
            (35 + Math.random() * 20) + "%";


        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        const duration =
            2 + Math.random() * 3;


        heart.style.animationDuration =
            duration + "s";


        heartsContainer.appendChild(heart);


        setTimeout(function() {

            heart.remove();

        }, (duration + 1) * 1000);

    }

}