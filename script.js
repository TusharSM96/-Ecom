let bar =document.getElementById('bar')
let nav =document.getElementById('navbar')
let close =document.getElementById('close')

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

// single page javascript for img change 
var MainImg =document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img-col");

smallimg[0].onclick = function(){
    console.log(document.getElementsByClassName("small-img-col")[0].src)
    MainImg.src =document.getElementsByClassName("small-img-col")[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}