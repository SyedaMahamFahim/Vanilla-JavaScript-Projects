function getNumber(num) {
    
    var result = document.getElementById("userInput");
    var property_value = Math.PI;
    result.value += num;

}
function clearBtn() {
    var result = document.getElementById("userInput");
    result.value = "";
}
function calculation() {
    var result = document.getElementById("userInput");
    result.value = eval(result.value)
}