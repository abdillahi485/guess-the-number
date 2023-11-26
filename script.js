//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1
let score = 20
let highScore = 0

document.querySelector(".check").addEventListener('click',function (){
    if(score === 0)return
    const input=document.querySelector(".guess").value * 1;
    console.log(randomNumber)
    if(input === randomNumber){
        document.querySelector("body").style.backgroundColor= '#008000';
        document.querySelector(".message").innerText='correct Number';
        document.querySelector(".number").innerText=input;

        if(score > highScore){
            document.querySelector(".highscore").innerText=score;
        }

    }else {
        score--
        document.querySelector(".score").innerText=score;
        if(score===0){
        document.querySelector("body").style.backgroundColor= 'red';
        document.querySelector(".message").innerText='Game Over';
        return;
        }
        if(input > randomNumber){
            document.querySelector(".message").innerText='Too High'
        }else{
            document.querySelector(".message").innerText='Too Low'
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    document.querySelector(".score").innerText=score;
    document.querySelector("body").style.backgroundColor= '#222';
    document.querySelector(".message").innerText='Start guessing...';
    document.querySelector(".number").innerText='?';
    const input=document.querySelector(".guess").value= '';
    

})
