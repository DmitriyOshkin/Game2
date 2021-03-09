let player = document.getElementById("player");
let stone = document.getElementById("stone");
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
    let stoneLeft = 
    parseInt(window.getComputedStyle(stone).getPropertyValue('left'));
    if (stoneLeft<20 && playerTop>130) {
        //stone.style.animation = 'none';
        stone.style.display = 'none';

        alert(`You score: ${point++} points`); // ${Math.floor(point++ /200)}
    } else {
        document.getElementById("score").innerHTML = `You score: ${point++} points`;
    }
}, 10);
function resetGame() {
    //stone.style.animation = 'block';
    stone.style.display = 'block';
    stone.classList.add('moveBlock');
    point = 0;
}
