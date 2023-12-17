const bar = document.getElementById('bar');
const nav = document.getElementById('nav-bar');

const close = document.getElementById('close');



if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add("active")
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove("active")
    })
}

// JAVASCRIPT GALLERY SLIDER CODE

var MainImg = document.getElementById('mainImg');
var SmallImg = document.getElementsByClassName('pic');

    SmallImg[0].onclick = () => {
        MainImg.src = SmallImg[0].src;
    }

    SmallImg[1].onclick = function(){
        MainImg.src = SmallImg[1].src;
    }

    SmallImg[2].onclick = function(){
        MainImg.src = SmallImg[2].src;
    }

    SmallImg[3].onclick = function(){
        MainImg.src = SmallImg[3].src;
    }

