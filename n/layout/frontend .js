let myCursor =document.querySelector('.cursor')
let myButtons =document.querySelectorAll('.myButton')
let text =document.querySelector('.sixthSection .text')
let Sign_in=document.querySelector('.Sign_in')
let SignPage=document.querySelector('.Sign')
let SignInputs=document.querySelectorAll('.SignForm form .myInput')
let cursorSm=document.querySelectorAll('.cursorSm')
let lock=document.querySelector('.lock')
let closeCard=document.querySelector('.closeCard')
let shopping_card=document.querySelector('.shopping_card')
let imgEffect=document.querySelectorAll('.imgEffect')
let Shop_wines =document.querySelectorAll('.Shop_wines')
let slideshow_container = document.querySelector('.slideshow-container')
let shop_now_btn = document.querySelectorAll('.shop_now_btn')



document.addEventListener('mousemove',function(e){
    var x =e.clientX;
    var y =e.clientY;
    myCursor.style.left = x + "px"
    myCursor.style.top = y + "px"

    if(e.target.classList.contains('big_circle')){
        myCursor.classList.add('activeLg')
    }else {
        myCursor.classList.remove('activeLg')      
    }

    if(e.target.classList.contains('shopping_card')){
        myCursor.style.border='2px solid #000'
    }else {
        myCursor.style.border=''      
    }
});

cursorSm.forEach(cursorSm=>{
    cursorSm.addEventListener('mouseenter',function(){
        myCursor.classList.add('activeSm')
    });
    cursorSm.addEventListener('mouseleave',function(){
        myCursor.classList.remove('activeSm')
    });
});

myButtons.forEach(myButton=>{
    myButton.addEventListener('mouseenter',function(e){
        myButton.classList.add('btnEffect')
    });
    myButton.addEventListener('mouseleave',function(){
        myButton.classList.remove('btnEffect')
    });
});

text.innerHTML=text.textContent.replace(/\S/g,'<span>$&</span>')
const el = document.querySelectorAll('.text span')

for(let i=0 ; i < el.length ; i++){
    el[i].style.transform = "rotate("+i*18+"deg)"
}


Sign_in.addEventListener('click',function(e){
    e.preventDefault()
    SignPage.classList.toggle('active')
});

SignInputs.forEach(SignInput =>{
    SignInput.addEventListener('focus',function(){
        SignInput.parentElement.querySelector('.myLabel').classList.add('active')
    })
    SignInput.addEventListener('blur',function(){
        if(SignInput.value == ''){
            SignInput.style.borderBottom='2px solid #f00'
            SignInput.parentElement.querySelector('.myLabel').classList.remove('active')
        }else {
            SignInput.style.borderBottom=''          
        }
    })
});

$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		$('.webSiteMenu').toggleClass('open');
	});
});

lock.addEventListener('click',function(e){
    e.preventDefault()
    shopping_card.classList.add('open')
});
closeCard.addEventListener('click',function(){
    shopping_card.classList.remove('open')
});

imgEffect.forEach(imgEffect=>{
    imgEffect.addEventListener('mouseenter',function(){
        imgEffect.parentElement.querySelector('div').classList.add('move')
    });
    imgEffect.addEventListener('mouseleave',function(){
        imgEffect.parentElement.querySelector('div').classList.remove('move')
    });
});

window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";

    if(scrolled >= 95){
        document.querySelector('#theFirst').className=' animate__animated animate__bounce  animate__fadeInUp'
        document.querySelector('#TheSecond').className=' animate__animated animate__bounce  animate__fadeInUp  animate__delay-1s'
        document.querySelector('#theThird').className='myButton animate__animated animate__bounce  animate__fadeInUp  animate__delay-2s'
    }
}





var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";  
    console.log(slideIndex)
    fromTo(slideIndex , slides.length)
}

function fromTo(number , L){
    let line = document.querySelector('.complet')
    let from = document.querySelector('.fromTo .from')
    let to = document.querySelector('.fromTo .to')

    line.style.width = (number / L) * 100 + '%'
    from.textContent = number < 10 ? '0' + number : number
    to.textContent = L < 10 ? '0' + L : L
}

Shop_wines.forEach(Shop_wine=>{
    Shop_wine.addEventListener('click',function(){
        slideshow_container.classList.add('open')
    });
})

shop_now_btn.forEach(shop_now_btn=>{
    shop_now_btn.addEventListener('click',function(e){
        e.preventDefault()
        document.querySelector('.shop_now').classList.add('open')
    });
});