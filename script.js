const number = document.querySelectorAll('.n');
const sign = document.querySelector('.math-sing');
const operator = document.querySelectorAll('.operator');
const previousNumber = document.querySelector('.previous-number p');
const currentNumber = document.querySelector('.current-number');
const equal = document.querySelector('.equal');
const calculationHstr = document.querySelector('.calculations-hstr');
const clearHstr = document.querySelector('.btn');
const clearCalculation = document.querySelector('.clear');

let result = '';

function displayNumber(){
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.0';
    
    currentNumber.innerHTML += this.textContent;

}

function operate () {
    if(currentNumber.innerHTML === '' && this.textContent ==='-'){
        currentNumber.innerHTML = '-';

        return;
    } 
    else if(currentNumber.innerHTML === ''){
        return;
    }

    if(sign.innerHTML !== ''){
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    sign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}

function showResult(){
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let n1 = Number(previousNumber.innerHTML);
    let n2 = Number(currentNumber.innerHTML);
    let signCheck = sign.innerHTML;

    switch(signCheck){
        case '+':
        result = n1 + n2;
        break;
        case '-':
        result = n1 - n2;
        break;
        case '*':
        result = n1 * n2;
        break;
        case ':':
        result = n1 / n2;
        break;
        case '2^':
        result = n1 ** n2;
        break;
    }
    addToHstr();
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    sign.innerHTML = '';
    clearHstr.classList.add('active');
    
}

function addToHstr(){
    const itemHstr = document.createElement('li');
    itemHstr.innerHTML = `${previousNumber.innerHTML} ${sign.innerHTML} ${currentNumber.innerHTML} = ${result}`;
    itemHstr.classList.add('item-hstr');
    calculationHstr.appendChild(itemHstr);
}

function clearNumber(){
    currentNumber.innerHTML = '';
    previousNumber.innerHTML ='';
    sign.innerHTML = '';
}

function clearHistory(){
    calculationHstr.textContent='';
    if(calculationHstr.textContent === ''){
        clearHstr.classList.remove('active');
    }
}


number.forEach((button) => {
    button.addEventListener('click',displayNumber)}
);
operator.forEach((button) => button.addEventListener('click', operate));
clearCalculation.addEventListener('click',clearNumber);
equal.addEventListener('click',showResult);
clearHstr.addEventListener('click', clearHistory);