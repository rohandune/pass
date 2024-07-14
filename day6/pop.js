var model=document.querySelector('.model')
function openModel(){
    model.style.opacity='1'
    model.style.display='flex'
}
function closeModel(){
    model.style.opacity='0'
    model.style.display='none'
}
var msg=document.querySelector('.msg')
function openMessage(){
    msg.style.opacity='1'
    msg.style.animation='anim1 linear 0.5s'
    setTimeout(() => {
         msg.style.animation='anim2 linear 0.5s'
         msg.style.opacity='0'    
    }, 3000);
}
setTimeout(() => {
   openModel()
}, 10000);