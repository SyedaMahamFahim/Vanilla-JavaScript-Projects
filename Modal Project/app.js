var btnClicked=document.getElementById('btn')
btnClicked.addEventListener("click",()=>{
    console.log("Hello wolrd")
    var getDiv=document.getElementById('myModal').style.display="block";
});
var closedBtn=document.getElementById('close')
closedBtn.addEventListener("click",()=>{
    var getDiv=document.getElementById('myModal').style.display="none";
})