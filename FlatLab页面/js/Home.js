//
// var data = [
//     {
//         url : "./images/red-bg.jpg"
//     },
//     {
//         url : "./images/banner_bg.jpg"
//     },
//     {
//         url : "./images/red-bg.jpg"
//     }
// ];
//
// var aLoop = document.getElementById("loop");
//
//
//
// data.map(function (item) {
//     var aDiv = document.createElement("div");
//     aDiv.style.backgroundImage = "url("+item.url+")";
//     aLoop.appendChild(aDiv);
// })

var aLoop = document.getElementById("loop");
var aImg = aLoop.getElementsByTagName("img")[0];
var aPrevious = document.getElementById("previous");
var aNext = document.getElementById("next");
var aStretch = document.getElementById("stretch");

var arrUrl = ["./images/red-bg.jpg", "./images/banner_bg.jpg", "./images/red-bg.jpg", "./images/banner_bg.jpg"]

var num = 0;

aImg.src = arrUrl[num];

var timer = setInterval(fn1, 5000);

aImg.onmouseover = function () {
    clearInterval(timer);
}
aImg.onmouseout = function () {
    timer = setInterval(fn1, 5000);
}

function fn1() {
    aImg.src = arrUrl[num];
    num++;
    if(num===arrUrl.length){
        num = 0;
    }
    // clearInterval(timer1);
    // fn3();
}

// function fn3() {
//     timer1 = setInterval(fn2, 20)
// };
// var timer1 = setInterval(fn2, 20)
//
// function fn2() {
//     var changd = parseInt(getStyle(aStretch, "width")) + 5;
//     if (changd > 1900){
//         changd = 1900;
//     }
//     aStretch.style.width = changd + "px";
// }


aPrevious.onclick = function () {
    clearInterval(timer);
    aImg.src = arrUrl[num];
    num--;
    if(num < 0){
        num = arrUrl.length-1;
    }
}

aNext.onclick = function () {
    clearInterval(timer);
    fn1();
}

var oLoop2 = document.getElementById("loop2");
var oLoop2Left = document.getElementById("loop2Left");
var oA = oLoop2Left.getElementsByTagName("a");
var oUl = oLoop2Left.getElementsByTagName("ul");

oA[0].className = "first";
oUl[0].style.display = "block";


for (var i=0; i<oA.length; i++){
    oA[i].a = i;
    oA[i].onclick = function () {
        for (var i=0; i<oA.length; i++){
            oA[i].className = "";
            oUl[i].style.display = "none";
        }
        this.className = "first";
        oUl[this.a].style.display = "block";
    }
}


var oRightLoop = document.getElementById("rightLoop");
var oBoy = document.getElementById("boy");
var oGirl = document.getElementById("girl");
var oZuo = document.getElementById("zuo");
var oYou = document.getElementById("you");

oYou.onclick = function () {
    var timer = setInterval(function () {
        var speed = parseInt(getStyle(oGirl, "left")) + -10;
        var speed1 = parseInt(getStyle(oBoy, "left")) + -10;
        if(speed < 0){
            speed = 0;
        }
        oGirl.style.left = speed + "px";
        if (speed1 < -554){
            speed1 = 554;
        }
        oBoy.style.left = speed1 + "px";
        if (speed1 == 554){
            clearInterval(timer);
        }

    },10)


}

oZuo.onclick = function () {
    oGirl.style.left = "554px";
    oBoy.style.left = "0";
}


function getStyle ( obj, attr ) {
    return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}