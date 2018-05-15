//1. timer should start at 30 sec  
//2. when user clicks on start game, timer starts
//3. once timer starts mole needs to appear 
//4.mole moves randomly every x sec 
//5.score board reflects every click 
//6. timer runs out=alert(users score) 
//7. resets game 
//set intervals 
//add eventListerners 
//Math.random 

document.addEventListener('DOMContentLoaded', function(){ 
    const button = document.getElementById('start-button');   
    const timer = document.getElementById('timer'); 
    const score = document.getElementById('score'); 
    const mole = document.getElementById('mole'); 
    const holes = document.getElementsByClassName('hole');
    var currentScore = 0 
    
    function startTimer (){
        timerCount = 30    
        var countDown = setInterval(function() {   
            timerCount--
            timer.innerText = timerCount
            mole.style.display = 'initial'
            moleSeq() 
            if (timerCount <= 0){
                clearInterval(countDown) 
                alert('You scored'+ ' ' + score.innerText + ', ' + 'loser!')
            } 
        }, 1000) 
    } 
    
    function moleSeq (){
        setInterval(function(){
            var newHole = Math.floor(Math.random() * Math.floor(holes.length)) 
            holes[newHole].appendChild(mole)
        }, 1000)

    }  

    function addScore (){ 
        currentScore = currentScore + 1
        score.innerText = currentScore
    }

    
    button.addEventListener('click', startTimer)  
    mole.addEventListener('click', addScore) 

})