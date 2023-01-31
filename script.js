let clicks = 0;
let plusOneClick = 1;
let plusTenClick = 0;
let plus100Click = 0;
let clickButton = document.getElementById("clickButton");
let rebirth = 1;
let shopElementA = 0;
let shopElementB = 0;
let autoClicker = 0;
let rebirthValue = 10000;

document.getElementById("clickButton").onclick = function(){
    clicks = clicks + plusOneClick + plusTenClick + plus100Click;
    document.getElementById("clickValue").innerHTML = clicks;
};
document.getElementById("plusOneClick").onclick = function(){
    if (clicks >= 10){
        clicks = clicks - 10;
        plusOneClick = plusOneClick + 1;
        document.getElementById("clickValue").innerHTML = clicks;
    }
    else {
        alert("You Don't Have Enough Clicks!")
    };
    if (plusOneClick >= 10 && shopElementA <= 1){
        shopElementA = shopElementA + 1;
        document.getElementsByClassName('shopElements1')[0].style.display='block';
        document.getElementsByClassName('shopElements3')[0].style.display='block';
    };
};
document.getElementById("plusTenClick").onclick = function(){
    if (clicks >= 100){
        clicks = clicks - 100;
        plusTenClick = plus100Click + 10;
        document.getElementById("clickValue").innerHTML = clicks;
        if (plusTenClick >= 10){
            shopElementB = shopElementB + 1;
            document.getElementsByClassName('shopElements2')[0].style.display='block';
        };
    }
    else {
        alert("You Don't Have Enough Clicks!");
    };
};
document.getElementById("plus100Click").onclick = function(){
    if (clicks >= 1000){
        clicks = clicks - 1000;
        plus100Click = plus100Click + 100;
        document.getElementById("clickValue").innerHTML = clicks;
    }
    else {
        alert("You Don't Have Enough Clicks!");
    };
};
document.getElementById("autoClicker").onclick = function(){
    if (clicks >= 100 && autoClicker <= 1){
        clicks = clicks - 100;
        setInterval(function(){
            clickButton.click()
        }, 1000)
        document.getElementsByClassName('clickValue').innerHTML = clicks
        document.getElementsByClassName('shopElements3')[0].style.display='none';
    }
    else {
        alert("You Don't Have Enough Clicks!");
    };
};
document.getElementById("reset").onclick = function(){
    clicks = 0;
    plusOneClick = 1;
    plusTenClick = 0;
    plus100Click = 0;
    rebirth = 0;
    shopElementA = 0;
    shopElementB = 0;
    document.getElementById("clickValue").innerHTML = clicks;
};
document.getElementById("rebirth").onclick = function(){
    if (clicks >= rebirth*rebirthValue){
        clicks = 0;
        plusOneClick = 1;
        plusTenClick = 0;
        plus100Click = 0;
        rebirth = rebirth + 1;
        shopElementA = 0;
        shopElementB = 0;
        document.getElementsByClassName('shopElements1')[0].style.display='none';
        document.getElementsByClassName('shopElements2')[0].style.display='none';
        document.getElementsByClassName('shopElements3')[0].style.display='none';
        document.getElementById("clickValue").innerHTML = clicks;
        document.getElementById("level").innerHTML = `Level ${rebirth}`;
        alert(`Congrats on reaching level ${rebirth}!`);
    }
    else {
        alert(`You must first reach ${rebirth*rebirthValue} clicks!`);
    };
};