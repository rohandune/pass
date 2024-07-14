var textArray=['Web Devolper.','Front End Enng.','Web Designer.','Intern']
var info=document.querySelector('#info')
var index=0
setInterval(() => {
    if(index>3){
        index=0
    }
    info.textContent=textArray[index]
    index+=1
}, 3000);