
const Button = document.getElementById('btn')
const output = document.getElementById('output')

let count = 0
let intervalId;

window.addEventListener('load', () => {
        const intervalId = setInterval(()=>{
        count = count+1
       output.innerText = count

        if(count === 3){
            clearInterval(intervalId)
            const ranNum = Math.floor((Math.random())*100)
           output.innerText = ranNum
    }

    },1000)
})

Button.addEventListener('click', () => {
    location.reload();
});

