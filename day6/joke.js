var modal =document.querySelector('.modal')
var joke=document.querySelector('#joke')
function getJoke(){
    joke.textContent=''
    modal.style.display='flex'
    setTimeout(async() => {
        let resObj=await fetch('https://icanhazdadjoke.com/slack')
        let data=await resObj.json()
        joke.textContent=data.attachments[0].text
        modal.style.display='none'
    }, 2000);
}