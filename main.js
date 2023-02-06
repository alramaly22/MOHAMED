let title =document.querySelector('.title');
// هنا بنادي علي الtitle االلي في html
let ul =document.querySelector('ul');
// بنادي علي ul
let reload =document.querySelector('.reload');

window.onload=function(){
    if(window.navigator.online){
        online()
    }
    else{offline()
    }

}
window.addEventListener("online", function(){
online();

})
window.addEventListener("offline", function(){
    offline();
    
})
reload.onclick =function(){ 
    window.location.reload();

}

function online(){
title.innerHTML ='online now';
// علشان يكتب لما يبقي اونلاين انه online now
title.style.color ='green';
// يغير لونه لاخضر
ul.classList.add('hide');
// يعني لو فيه نت هيضيف الهايد اللي مكتوب فيه انه display noneيعني مش هيشغله
reload.classList.add('hide');
}
function offline(){
    title.innerHTML ='offline now';
    title.style.color ='#666';
    ul .classList.remove('hide');
    reload .classList.remove('hide');
}