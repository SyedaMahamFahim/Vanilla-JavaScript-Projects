var showHistroyContent=document.getElementById('history')
showHistroyContent.addEventListener('click',()=>{
    var histroyContent=document.getElementById('histroy-content').style.display="block"
    var visionContent=document.getElementById('vision-content').style.display="none"
    var goalsContent=document.getElementById('goals-content').style.display="none"

    showHistroyContent.style.backgroundColor="white"
    showVisionContent.style.backgroundColor="#cdd3d8"
    showGoalsContent.style.backgroundColor="#cdd3d8"
})
var showVisionContent=document.getElementById('vision')
showVisionContent.addEventListener('click',()=>{
    var visionContent=document.getElementById('vision-content').style.display="block"
    var histroyContent=document.getElementById('histroy-content').style.display="none"
    var goalsContent=document.getElementById('goals-content').style.display="none"
    
    showHistroyContent.style.backgroundColor="#cdd3d8"
    showVisionContent.style.backgroundColor="white"
    showGoalsContent.style.backgroundColor="#cdd3d8"
})

var showGoalsContent=document.getElementById('goals')
showGoalsContent.addEventListener('click',()=>{
   var goalsContent=document.getElementById('goals-content').style.display="block"
   var histroyContent=document.getElementById('histroy-content').style.display="none"
   var visionContent=document.getElementById('vision-content').style.display="none"

   showHistroyContent.style.backgroundColor="#cdd3d8"
   showVisionContent.style.backgroundColor="#cdd3d8"
   showGoalsContent.style.backgroundColor="white"
   
})
