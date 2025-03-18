//get counter to work

let count = 0;
let history = ["-","-","-","-","-","-","-","-"];
let ctr = 0;
const counterElement = document.getElementById("Counter");
let historyElements =[
    document.getElementById("first"),
    document.getElementById("second"),
    document.getElementById("third"),
    document.getElementById("fourth"),
    document.getElementById("fifth"),
    document.getElementById("sixth"),
    document.getElementById("seventh"),
    document.getElementById("eighth"),
]

function historyCount(){
    if(ctr==8){
        ctr = 0;
    }
    for(let i = 0; i<history.length; i++){
        historyElements[i].textContent = history[i];
    }
}

function updateCounter(){
    counterElement.textContent = count;
}

document.getElementById("decrement").onclick = function(){
    count-=1;
    updateCounter();
}

document.getElementById("reset").onclick = function(){
    history[ctr++] = count
    count = 0;
    updateCounter();
    historyCount();
}

document.getElementById("increment").onclick = function(){
    count+=1;
    updateCounter();
}

updateCounter();
