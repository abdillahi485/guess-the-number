//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1
let score = 20
let highScore = 0

document.querySelector(".check").addEventListener('click',function (){
    const input=document.querySelector(".guess").value * 1;
    console.log(randomNumber)
    if(input === randomNumber){
        document.querySelector("body").style.backgroundColor= '#008000';
        document.querySelector(".message").innerText='correct Number';
        document.querySelector(".number").innerText=input;

    }else (console.log('wrong'))
})

document.querySelector('.again').addEventListener('click', function(){



})
