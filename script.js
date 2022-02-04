var elements = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var enemyOpt = "";

function result(){

    let winner = document.querySelector('.winner');

    if(playerOpt == "paper"){
        
        if(enemyOpt == "paper"){
            winner.innerHTML = "Empate";
            winner.style.color = "white";
        } else if(enemyOpt == "rock"){
            winner.innerHTML = "Venceu";
            winner.style.color = "green";
        } else if(enemyOpt == "scissor"){
            winner.innerHTML = "Perdeu";
            winner.style.color = "red";
        }

    } else if(playerOpt == "rock"){

        if(enemyOpt == "paper"){
            winner.innerHTML = "Perdeu";
            winner.style.color = "red";
        } else if(enemyOpt == "rock"){
            winner.innerHTML = "Empate";
            winner.style.color = "white";
        } else if(enemyOpt == "scissor"){
            winner.innerHTML = "Venceu";
            winner.style.color = "green";
        }

    } else if(playerOpt == "scissor"){

        if(enemyOpt == "paper"){
            winner.innerHTML = "Venceu";
            winner.style.color = "green";
        } else if(enemyOpt == "rock"){
            winner.innerHTML = "Perdeu";
            winner.style.color = "red";
        } else if(enemyOpt == "scissor"){
            winner.innerHTML = "Empate";
            winner.style.color = "white";
        }

    }

    

}

function resetEnemy(){

    let enemyOptions = document.querySelectorAll('.enemy-options div > img');
    
    for(var i = 0; i < enemyOptions.length; i++){

        enemyOptions[i].style.opacity = 0.3;

    }

}

function resetOpacityPlayer(){
    
    for(var i = 0; i < elements.length; i++) {
        
        elements[i].style.opacity = 0.3;
    
    }

}

function enemyPlay() {

    let rand = Math.floor(Math.random()*3);

    let enemyOptions = document.querySelectorAll('.enemy-options div > img');
    
    resetEnemy()

    for(var i = 0; i < enemyOptions.length; i++) {
        
        if(i == rand){
            
            enemyOptions[i].style.opacity = 1;
            enemyOpt = enemyOptions[i].getAttribute('opt');
        
        }
    }

    result()

}

for(var i = 0; i < elements.length; i++){
    
    elements[i].addEventListener('click', function(element){
        
        resetOpacityPlayer()
        
        element.target.style.opacity = 1;
        
        playerOpt = element.target.getAttribute('opt');

        enemyPlay()
    
    })

}