let urlRegex = /^(http|https):\/\/[a-z A-Z 0-9 !@#$%^&*]+\.[a-z A-Z]+$/
const opScreen = document.getElementById('output')
let url = "";

document.getElementById('urlValidation').addEventListener('input',(e)=>{
    url = e.target.value;
    opScreen.innerText = "";
})

document.getElementById('btn').addEventListener('click', ()=> {

    if(url != ""){

       if(urlRegex.test(url)){
        opScreen.innerText = "Your URL is Valid" ;
        opScreen.style.color = "green" ;
       }
       else{
        opScreen.innerText = "Your URL is not Valid" ;
        opScreen.style.color = "red" ;
       }
    }
    else{
        alert('please entre the url !!!')
    }
})