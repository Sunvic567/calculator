const display = document.getElementById('screen');
const marthBtn = document.querySelectorAll('.marthBtn');
const clearBtn = document.getElementById('clearBtn');
const numbtn = document.querySelectorAll('.numbtn');
const equalBtn = document.getElementById('equalBtn');


 numbtn.forEach(button =>{
    button.addEventListener('click', ()=>{
         display.value += button.textContent ;
    })
 })
marthBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        display.value += " " + btn.textContent + " ";
    })})

    clearBtn.addEventListener('click', ()=>{
        display.value = "";
    })

    equalBtn.addEventListener('click', ()=>{
        try {
            display.value = eval(display.value)
        } catch (error) {
            setTimeout(() => {
                display.value = " ";
            }, 1000);
            display.value = "synatax error";
        }
    })
 
 