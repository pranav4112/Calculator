let display = document.getElementById('display');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');
let del = document.getElementById('delete');

window.onload = ()=>{
    display.value = "";
}

let operation = document.querySelectorAll('.input');

operation.forEach(function(button){
    button.addEventListener('click',()=>{
        display.value += button.value ;
    })
})

clear.addEventListener('click',()=>{
    display.value = "";
})

del.addEventListener('click',()=>{
    display.value = display.value.slice(0,-1);
})

equal.addEventListener('click',()=>{
    try{
        let result = display.value;
        result = eval(result);
        if(Number.isInteger(result)){
            display.value = result;
        }
        else{
            result = result.toFixed(2);
            display.value = result;
        }
    }
    catch(e){
        alert("Invalid Input");
    }
})