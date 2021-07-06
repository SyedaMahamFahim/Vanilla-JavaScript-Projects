var number = 0;

var increaseCounterValue = document.getElementById('increase')
increaseCounterValue.addEventListener("click", () => {
    number++;
    var counterValue = document.getElementById('counter-value').innerHTML = number
    counterValue.style.color=red;
});

var decreaseCounterValue = document.getElementById('decrease')
decreaseCounterValue.addEventListener("click", () => {
    number--;
    var counterValue = document.getElementById('counter-value').innerHTML = number

});

var resetCounterValue = document.getElementById('reset')
resetCounterValue.addEventListener("click", () => {
    number = 0;
    var counterValue = document.getElementById('counter-value').innerHTML = number
});


 

// Extra Local Strorage Work
// var allCounters = []
// allCounters.push(number)
// localStorage.setItem("countervalue", JSON.stringify(allCounters))
// var parsingValue = JSON.parse(localStorage.getItem("countervalue", allCounters))
// var setItem = localStorage.setItem("countervalue", number)
// var counterValue = document.getElementById('counter-value').innerHTML = getItem
