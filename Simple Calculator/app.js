function getNumber(number){
    var result=document.getElementById("userInput");
    result.value+=number;
    
}
function clearBtn(){
    var result=document.getElementById("userInput");
    result.value="";
}
function evaluateNumber(){
    var result=document.getElementById("userInput");
    result.value = eval(result.value);
}