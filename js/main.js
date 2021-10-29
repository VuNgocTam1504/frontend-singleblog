const mainMenu=document.querySelector('.mainMenu');
const closeMenu=document.querySelector('.closeMenu');
const openMenu=document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display='flex';
    mainMenu.style.top='0';
}

function close()
{
    mainMenu.style.top='-100%';
}

$(document).ready(function(){

  $('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
    },2000)
})
  //Aos chuyển động của ảnh
    AOS.init();

});


