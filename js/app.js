const qu1=document.querySelector('.quest1');
const ans1=document.querySelector('.ans1');
const asd1=document.querySelector('.asd1');
const asd2=document.querySelector('.asd2');
const asd3=document.querySelector('.asd3');
const asd4=document.querySelector('.asd4');

qu1.addEventListener('click',function(){
    ans1.classList.toggle('hide');
    asd1.classList.toggle('rotate')
});
const qu2=document.querySelector('.quest2');
const ans2=document.querySelector('.ans2');

qu2.addEventListener('click',function(){
    ans2.classList.toggle('hide');
    asd2.classList.toggle('rotate');
});
const qu3=document.querySelector('.quest3');
const ans3=document.querySelector('.ans3');

qu3.addEventListener('click',function(){
    ans3.classList.toggle('hide');
    asd3.classList.toggle('rotate');
});
const qu4=document.querySelector('.quest4');
const ans4=document.querySelector('.ans4');

qu4.addEventListener('click',function(){
    ans4.classList.toggle('hide');
    asd4.classList.toggle('rotate');
});

const book=document.querySelector('.book');
const search=document.querySelector('.search');
const share=document.querySelector('.share');
const ill1=document.querySelector('.ill1');
const ill2=document.querySelector('.ill2');
const ill3=document.querySelector('.ill3');

book.addEventListener('click',function(){
    ill1.classList.remove('hide');
    book.classList.add('marked');
    ill2.classList.add('hide');
  search.classList.remove('marked');
    ill3.classList.add('hide');
   share.classList.remove('marked');
    
    
});
search.addEventListener('click',function(){
    ill1.classList.add('hide');
    book.classList.remove('marked');
    ill2.classList.remove('hide');
    search.classList.add('marked');
    share.classList.remove('marked');
    ill3.classList.add('hide');
    
});
share.addEventListener('click',function(){
    ill1.classList.add('hide');
    book.classList.remove('marked');
    ill2.classList.add('hide');
    search.classList.remove('marked');
    share.classList.add('marked');
    ill3.classList.remove('hide');

});

const us=document.querySelector('.us');
const in1=document.querySelector('.in1');
const im=document.querySelector('.img');


us.addEventListener('click',function(){
    if(in1.value.includes("@email.com")){
        in1.value='';
        im.classList.add('hide');
        
    }
    else{
        in1.value='';
        im.classList.remove('hide');
    }
});

const menu=document.querySelector('.menu');
const ham=document.querySelector('.ham');
const nav=document.querySelector('.na');
const top1=document.querySelector('.t');
const mid=document.querySelector('.m');
const bot=document.querySelector('.b');


ham.addEventListener('click', function(){

    menu.classList.toggle('hide');
    nav.classList.toggle('lon');
    mid.classList.toggle('hide');
    top1.classList.toggle('white');
    bot.classList.toggle('white');
    top1.classList.toggle('rotate1');
    bot.classList.toggle('rotate2');
});

const fet=document.querySelector('.fet');
const down=document.querySelector('.down');
const faq=document.querySelector('.faq');
const fetm=document.querySelector('.fet-m');
const downm=document.querySelector('.down-m');
const faqm=document.querySelector('.faq-m');
const cont=document.querySelector('.cont');
const donwl=document.querySelector('.sec-2');
const faqq=document.querySelector('.q');
// desktob nav
document.querySelector('.fet').onclick=function(){
    'use strict';
    window.scrollTo(0,580);
}

down.addEventListener('click',function(){

window.scrollTo(0,1250)
});
faq.addEventListener('click',function(){

window.scrollTo(0,2000)
});
//mob nav
document.querySelector('.fet-m').onclick=function(){
    'use strict';
    window.scrollTo(0,650);
   
    menu.classList.toggle('hide');
    nav.classList.toggle('lon');
    mid.classList.toggle('hide');
    top1.classList.toggle('white');
    bot.classList.toggle('white');
    top1.classList.toggle('rotate1');
    bot.classList.toggle('rotate2');
    
}
downm.addEventListener('click',function(){

window.scrollTo(0,1750)
menu.classList.toggle('hide');
nav.classList.toggle('lon');
mid.classList.toggle('hide');
top1.classList.toggle('white');
bot.classList.toggle('white');
top1.classList.toggle('rotate1');
bot.classList.toggle('rotate2');

});
faqm.addEventListener('click',function(){
window.scrollTo(0,2950)
menu.classList.toggle('hide');
nav.classList.toggle('lon');
mid.classList.toggle('hide');
top1.classList.toggle('white');
bot.classList.toggle('white');
top1.classList.toggle('rotate1');
bot.classList.toggle('rotate2');
});

window.onscroll=function() {scrollf()}

function scrollf(){
    if(document.body.scrollTop>400 || document.documentElement.scrollTop>400){
        scrlt.classList.remove('hide')
    }
    else         scrlt.classList.add('hide')

    if((document.body.scrollTop>550)  || document.documentElement.scrollTop>550){
        fet.classList.add('marked');
        faq.classList.remove('marked');
        down.classList.remove('marked');    
    }
    
    else{
        fet.classList.remove('marked');

    }
    if((document.body.scrollTop>1200)  || document.documentElement.scrollTop>1200){
        fet.classList.remove('marked');
        down.classList.add('marked');
        faq.classList.remove('marked');
    }
    if((document.body.scrollTop>1950)  || document.documentElement.scrollTop>1950){
        fet.classList.remove('marked');
        down.classList.remove('marked');
        faq.classList.add('marked');  
    }
}
const scrlt=document.querySelector('.scroll-top');


scrlt.onclick=function(){
    scrollTo(0,0);
}
var timer = null;
window.addEventListener('scroll', function() {
   if(timer !== null ) {
    clearTimeout(timer);      
    nav.classList.remove('hide')  ;
}
    timer = setTimeout(function() {
        if(document.documentElement.scrollTop>200){
            nav.classList.add('hide'); 
           }
          
    }, 250);
}, false);