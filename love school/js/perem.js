document.querySelector("#div2").style.display = "none";
document.querySelector("#div21").style.display = "none";
document.querySelector("#div22").style.display = "none";
document.querySelector(".verx").style.display = "none";
document.querySelector(".verx1").style.display = "none";
document.querySelector(".verx2").style.display = "none";
function div() {
    if (document.querySelector("#div2").style.display == "none") {
        document.querySelector("#div2").style.display = "block";
        document.querySelector("#da_ny").style.display = "block";
        document.querySelector("#da_ny").style.background = 'url(img/3F3F3F3F_3F3F3F3F3F3F3F3F3F3F3F3F_3F3F.jpg';
        document.querySelector(".verx").style.display = "block";
        document.querySelector(".nus").style.display = "none";
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            document.querySelector("#mag").style.fontSize = timePassed / 270 + 'rem';
            document.querySelector(".top").style.paddingTop = timePassed / 50 + '%';
            if (timePassed > 350) clearInterval(timer);
        }, 10);
    } else {
        document.querySelector("#div2").style.display = "none";
        document.querySelector(".verx").style.display = "none";
        document.querySelector("#da_ny").style.background = "none";
        document.querySelector(".nus").style.display = "block";
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            document.querySelector("#mag").style.fontSize = timePassed / 300 + 'rem';
            document.querySelector(".top").style.paddingTop = timePassed / 18 + '%';
            if (timePassed > 350) clearInterval(timer);
        }, 10);
    }
}
function div1() {
    i=1
    if (document.querySelector("#div2"+i).style.display == "none") {
        document.querySelector("#div2"+i).style.display = "block";
        document.querySelector("#da_ny"+i).style.display = "block";
        document.querySelector("#da_ny"+i).style.background = 'url(img/kazuha-kazuha-genshin.gif';
        document.querySelector(".verx"+i).style.display = "block";
        document.querySelector(".nus"+i).style.display = "none";
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            document.querySelector("#mag"+i).style.fontSize = timePassed / 270 + 'rem';
            document.querySelector(".top"+i).style.paddingTop = timePassed / 50 + '%';
            if (timePassed > 350) clearInterval(timer);
        }, 10);
    } else {
        document.querySelector("#div2"+i).style.display = "none";
        document.querySelector(".verx"+i).style.display = "none";
        document.querySelector("#da_ny"+i).style.background = "none";
        document.querySelector(".nus"+i).style.display = "block";
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            document.querySelector("#mag"+i).style.fontSize = timePassed / 300 + 'rem';
            document.querySelector(".top"+i).style.paddingTop = timePassed / 18 + '%';
            if (timePassed > 350) clearInterval(timer);
        }, 10);
    }
}
function div2() {
    i=2
    if (document.querySelector("#div2"+i).style.display == "none") {
        document.querySelector("#div2"+i).style.display = "block";
        document.querySelector("#da_ny"+i).style.display = "block";
        document.querySelector("#da_ny"+i).style.background = 'url(img/31c7ce82c43457e36b0e4c892db7cc4a_8179770966222100404.gif';
        document.querySelector(".verx"+i).style.display = "block";
        document.querySelector(".nus"+i).style.display = "none";
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            document.querySelector("#mag"+i).style.fontSize = timePassed / 270 + 'rem';
            document.querySelector(".top"+i).style.paddingTop = timePassed / 50 + '%';
            if (timePassed > 350) clearInterval(timer);
        }, 10);
    } else {
        document.querySelector("#div2"+i).style.display = "none";
        document.querySelector(".verx"+i).style.display = "none";
        document.querySelector("#da_ny"+i).style.background = "none";
        document.querySelector(".nus"+i).style.display = "block";
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            document.querySelector("#mag"+i).style.fontSize = timePassed / 300 + 'rem';
            document.querySelector(".top"+i).style.paddingTop = timePassed / 18 + '%';
            if (timePassed > 350) clearInterval(timer);
        }, 10);
    }
}