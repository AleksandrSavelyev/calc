const operators = ['+', '-', '*', '/', '%']
let val1 = 0;
let val2 = 0;
let display = '';

document.getElementById('key1').addEventListener('click', but1);
document.getElementById('key2').addEventListener('click', but2);
document.getElementById('key3').addEventListener('click', but3);
document.getElementById('key4').addEventListener('click', but4);
document.getElementById('key5').addEventListener('click', but5);
document.getElementById('key6').addEventListener('click', but6);
document.getElementById('key7').addEventListener('click', but7);
document.getElementById('key8').addEventListener('click', but8);
document.getElementById('key9').addEventListener('click', but9);
document.getElementById('key0').addEventListener('click', but0);
document.getElementById('keyAdd').addEventListener('click', butAddition);
document.getElementById('keySub').addEventListener('click', butSubtraction);
document.getElementById('keyMult').addEventListener('click', butMultiplication);
document.getElementById('keyDivis').addEventListener('click', butDivision);
document.getElementById('keyDot').addEventListener('click', butDot);
document.getElementById('keyCE').addEventListener('click', butCE);
document.getElementById('keyC').addEventListener('click', butC);
document.getElementById('keyEqualy').addEventListener('click', butEqually);
document.getElementById('keyRem').addEventListener('click', butRem);

function but1() {
    display += '1'; 

    document.getElementById('screan').innerHTML = display;
    return display ;
}

function but2() {
    display += '2'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function but3() {
    display += '3'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function but4() {
    display += '4'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function but5() {
    display += '5'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function but6() {
    display += '6'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function but7() {
    display += '7'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function but8() {
    display += '8'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function but9() {
    display += '9'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function but0() {
    display += '0'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function butDot() {
    display += '.'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function butAddition() {
    console.log(typeof(display));
    searchOper(display);
    display += '+'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function butMultiplication() {
    searchOper(display);
    display += '*'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function butDivision() {
    searchOper(display);
    display += '/'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function butSubtraction() {
    searchOper(display);
    display += '-';
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function butCE() {
    value1 = 0;
    value2 = 0;
    display = ''; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function butC() {
    console.log(typeof(display));
    display.slice(0, 1); 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function butEqually() {
    var oper = '';
    let num = [];
    for (let i = 0; i < display.length; i++) {

        if(display.indexOf(operators[i]) !== -1) {
            oper = operators[i];
            break;
        }
    }
    nums = display.split(oper); 
    val1 = Number(nums[0]);
    val2 = Number(nums[1]);
    console.log(val1, val2);
    switch(oper) {
        case '+' : document.getElementById('screan').innerHTML = display = val1 + val2;
        return String(display);
        case '-' : document.getElementById('screan').innerHTML = display = val1 - val2;
        return String(display);
        case '*' : document.getElementById('screan').innerHTML = display = val1 * val2;
        return display;
        case '/' : document.getElementById('screan').innerHTML = display = val1 / val2;
        return display;
        case '%' : document.getElementById('screan').innerHTML = display = val1 % val2;
        return display;  
    }
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function butRem() {
    searchOper(display);
    display += '%'; 
    document.getElementById('screan').innerHTML = display;
    return display ;
}

function searchOper (display) {         
    console.log(typeof(display));
    for(i = 0; i < operators.length; i++) {
        if(display.indexOf(operators[i]) !== -1) {
            butEqually();
        }
    }
    return display;
}
document.getElementById('screan').innerHTML = display;