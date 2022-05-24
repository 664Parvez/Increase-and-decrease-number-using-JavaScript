let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

let number = 0;
btn1.addEventListener('click', function(){
    document.querySelector('#num').innerHTML = number++;
})

btn2.addEventListener('click', function(){
    document.querySelector('#num').innerHTML = --number;
})