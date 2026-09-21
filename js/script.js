/* =========================================================
   BEFORE / AFTER SLIDER
========================================================= */

const slider = document.getElementById("comparisonSlider");
const beforeWrapper = document.getElementById("beforeWrapper");
const sliderDivider = document.getElementById("sliderDivider");
const comparisonRange = document.getElementById("comparisonRange");


function updateSlider(position) {

    beforeWrapper.style.width = `${position}%`;

    sliderDivider.style.left = `${position}%`;

}


if (comparisonRange) {

    comparisonRange.addEventListener("input", function () {

        updateSlider(this.value);

    });

}


/* CLICK / DRAG ANYWHERE ON SLIDER */

if (slider) {

    function moveSlider(event) {

        const rect = slider.getBoundingClientRect();

        let clientX;

        if (event.touches) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = event.clientX;
        }

        let position =
            ((clientX - rect.left) / rect.width) * 100;


        position = Math.max(
            0,
            Math.min(100, position)
        );


        updateSlider(position);

        comparisonRange.value = position;
    }


    slider.addEventListener("mousedown", function (event) {

        moveSlider(event);

        function drag(event) {
            moveSlider(event);
        }

        function stopDrag() {

            window.removeEventListener(
                "mousemove",
                drag
            );

            window.removeEventListener(
                "mouseup",
                stopDrag
            );

        }

        window.addEventListener(
            "mousemove",
            drag
        );

        window.addEventListener(
            "mouseup",
            stopDrag
        );

    });

}

/* =========================================================
   SCROLLING NAVBAR
========================================================= */

const siteHeader =
    document.querySelector(".site-header");

function updateNavbar() {

    if (window.scrollY > 50) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================================
   CINEMATIC WATER INTRO
========================================================= */

const waterIntro =
    document.getElementById("waterIntro");


if (waterIntro) {

    document.body.classList.add("intro-active");


    setTimeout(() => {

        waterIntro.style.opacity = "0";

        waterIntro.style.pointerEvents = "none";

        document.body.classList.remove("intro-active");


        setTimeout(() => {

            waterIntro.remove();

        }, 400);

    }, 2850);

}