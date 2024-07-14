var expre = document.querySelector('#expression input'); // Select the input inside #expression
var action = document.querySelectorAll('.calculator .buttons .action button');

action.forEach(button => {
    button.addEventListener('click', function(e) {
        let previousvalue = expre.value; 
        previousvalue = previousvalue + button.value;
        expre.value = previousvalue; 
    });
});

var number = document.querySelectorAll('.calculator .buttons .number .btn1');
number.forEach(button => {
    button.addEventListener('click', function(e) {
        let previousvalue = expre.value; 
        previousvalue = previousvalue + button.value;
        expre.value = previousvalue; 
    });
});

function calculator() {
    let expression = expre.value;
    let result = eval(expression);
    expre.value = result.toString();
}

function clearScreen() {
    expre.value = "";
}