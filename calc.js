const display = document.getElementById('display');
let isError = false;
function appendToDisplay(input){
    if (isError) return;
    display.value += input;

}

function clearDisplay(){
    display.value = '';
    isError = false;

}

function calculate(){
    try{
        let result = eval(display.value);

        if (result === Infinity || result === -Infinity || isNaN(result)){
            throw new Error();
        }

        display.value = result;

    }

    catch(error){
        display.value = 'Error';
        isError = true;
    }

}



