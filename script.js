// VarElements
// Clicks/ClicksButton
let clicksId = document.getElementById("clicks");
let clicksButtonId = document.getElementById("clicksButton");
let turnOnWorkers = document.getElementById("turnOnWorkers");
// Get Upgrades
let manualClicksId = document.getElementById("manualClicks");
let workersId = document.getElementById("workers");
let mcBuy1Id = document.getElementById("mcBuy1");
let mcBuy10Id = document.getElementById("mcBuy10");
let mcBuy100Id = document.getElementById("mcBuy100");
let mcBuyMaxId = document.getElementById("mcBuyMax");
let autoClickerId = document.getElementById("autoclicker");
let buyAutoclicker = document.getElementById("buyAutoclicker");
// Level
let levelId = document.getElementById("level");
// Other
let resetId = document.getElementById("reset");
let levelUpId = document.getElementById("levelUp");
// Variables
let clicks = 0;
let manualClicks = 1;
let level = 1;
let mcMax = 0;
let levelUp = level * 10000;

clicksButtonId.onclick = function(){
    clicks = clicks + manualClicks;
    clicksId.innerHTML = clicks;
};

mcBuy1Id.onclick = function(){
    if (clicks >= 10){
        clicks = clicks - 10;
        manualClicks = manualClicks + 1;
        clicksId.innerHTML = clicks;
        manualClicksId.innerHTML = manualClicks;
    }
    else {
        alert("You don't have enough clicks!")
    };
};
mcBuy10Id.onclick = function(){
    if (clicks >= 100){
        clicks = clicks - 100;
        manualClicks = manualClicks + 10;
        clicksId.innerHTML = clicks;
        manualClicksId.innerHTML = manualClicks;
    }
    else {
        alert("You don't have enough clicks!")
    };
};
mcBuy100Id.onclick = function(){
    if (clicks >= 1000){
        clicks = clicks - 1000;
        manualClicks = manualClicks + 100;
        clicksId.innerHTML = clicks;
        manualClicksId.innerHTML = manualClicks;
    }
    else {
        alert("You don't have enough clicks!")
    };
};
mcBuyMaxId.onclick = function(){
    if (clicks >= 10){
        mcMax = Math.floor(clicks / 10);
        clicks = clicks - mcMax * 10;
        manualClicks = manualClicks + mcMax;
        clicksId.innerHTML = clicks;
        manualClicksId.innerHTML = manualClicks;
    }
    else {
        alert("You don't have enough clicks!");
    };
};
document.getElementById("buyAutoclicker").onclick = function(){
    if (clicks >= 1000){
        clicks = clicks - 1000;
        setInterval(function(){
            clicksButtonId.click()
        }, 2555);
        clicksId.innerHTML = clicks;
        autoClickerId.style.display = "none";
    }
    else {
        alert("You Don't Have Enough Clicks!");
    };
};

levelUpId.onclick = function(){
    if (clicks >= levelUp){
        level = level + 1;
        levelUp = level * 10000;
        levelId.innerHTML = (`Level ${level}`);
        alert(`Congrats on leveling up! You are now level ${level}. Your next levelup is at ${levelUp} clicks.`);
    }
    else {
        alert(`You need ${levelUp} more clicks to level up!`);
    }
};
