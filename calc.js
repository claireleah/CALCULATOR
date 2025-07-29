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
        let expression = display.value;
        let result = eval(expression);
        

        if (result === Infinity || result === -Infinity || isNaN(result)){
            throw new Error();
        }

        display.value = result;

        addToHistory(expression, result);

    }

    catch(error){
        display.value = 'Error';
        isError = true;
    }

}


function backspace(){
    if (!isError) {
        display.value = display.value.slice(0, -1);
    }
}


function addToHistory(expression, result) {
    const historyList = document.getElementById('history');
    const listItem = document.createElement('li');
    listItem.textContent = `${expression} = ${result}`;
    historyList.prepend(listItem);
}


