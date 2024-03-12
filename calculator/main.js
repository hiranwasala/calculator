const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.buttons');
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');

buttons.forEach(button =>{
    button.addEventListener('click', (e)=> {
        if(e.target.dataset.num !== '=' && e.target.dataset.num  !== 'C'){
            screen.value += e.target.dataset.num;
        }
    })
})

equal.addEventListener('click', ()=> {

    if(screen.value === ''){
        screen.value = '';
    }else{
        let answer = eval(screen.value);
        screen.value = answer;
        
    }
    
})

clear.addEventListener("click",()=> {
    screen.value = '';
})