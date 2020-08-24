$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#header').addClass('scroll')
        }
        if ($(this).scrollTop() <= 0) {
            $('#header').removeClass('scroll')
        }
    });
});

function checkWeb3() {
    if (typeof (ethereum) !== "undefined") {
        $(".no-web3").hide();
        $(".with-web3").show();
    } else {
        setTimeout(checkWeb3, 5000);
    }

}

// Check for latex and load mathjax
function checkForTex() {
    var body = document.body.textContent;
    if (body.match(/(?:\$\$|\\\(|\\\[|\\begin\{.*?})/)) {
        console.log("Loading MathJax");
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
        document.head.appendChild(script);
    }
}

$(document).ready(function () {
    checkWeb3();
    checkForTex();
});

