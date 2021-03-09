let player = document.getElementById("player");
let block = document.getElementById("block");
let point;
document.querySelector(".gameField").style.display = "none";

function startGame() { 
    document.querySelector(".gameField").style.display = "block";
    document.querySelector(".startGame").style.display = "none";
    point = 0;
}
function closeGame() { 
    document.querySelector(".gameField").style.display = "none";
    document.querySelector(".startGame").style.display = "block";
}
function playerJump() {
    if (player.classList != 'animateJump'){
    player.classList.add('animateJump');
    }
    setTimeout(function() {
        player.classList.remove('animateJump');
    }, 500)
}
let checkDead = setInterval(function() {
    let playerTop = 
    parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft<20 && playerTop>130) {
        //block.style.animation = 'none';
        block.style.display = 'none';

        alert(`You score: ${point++} points`); // ${Math.floor(point++ /200)}
    } else {
        document.getElementById("score").innerHTML = `You score: ${point++} points`;
    }
}, 10);
function resetGame() {
    //block.style.animation = 'block';
    block.style.display = 'block';
    block.classList.add('moveBlock');
    point = 0;
}
