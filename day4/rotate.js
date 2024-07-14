var contaner=document.querySelector('.contaner')
var box=document.querySelector('.contaner .box')
var btn=document.querySelector('.contaner .btn')
var result=true;

function chage(){
    if(result){
        box.style.transform='translateX(550px) rotate(20deg)'
        contaner.style.borderTopRightRadius = '85px';
        contaner.style.borderBottomRightRadius = '0px'; 
        contaner.style.borderTopLeftRadius = '0px';
        contaner.style.borderBottomLeftRadius = '85px';
        btn.style.marginLeft='10px'
        
    }else{
        box.style.transform='translateX(0px) rotate(-10deg)'
        contaner.style.borderTopLeftRadius = '85px';
        contaner.style.borderBottomLeftRadius = '0px';
        contaner.style.borderTopRightRadius = '0px';
        contaner.style.borderBottomRightRadius = '85px'; 
        btn.style.marginLeft='750px'
    }
    result=!result
}