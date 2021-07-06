var falseBtn=false
var menuBar=document.getElementById('menu-bar')
menuBar.addEventListener('click',()=>{
    var showMenu=document.getElementById('show-menu')
   if(falseBtn===false){ 
    showMenu.style.display="flex"
    showMenu.style.transition="all .2s ease-in-out;"
   falseBtn=true
}
else if(falseBtn=true){
    showMenu.style.display="none"
    falseBtn=false
}
});