function rockPpaerScissors(playerturn){
    const rock="Rock";
    const paper="Paper";
    const scissors="Scissors";
    if (playerturn=="r" || playerturn=="rock"){
        playerturn=rock
    }
    else if (playerturn=='s' || playerturn=="scissors"){
        playerturn=scissors
    }
    else if (playerturn=="p"||playerturn=="paper"){
        playerturn=paper
    }
    else{
        console.log("Invalid Input.Try again...")
    }
    let computerTurn=Math.floor(Math.random()*3)+1

switch (computerTurn) {
    case 1:
        computerTurn=rock
        break;
        case 2:
            computerTurn=paper
            break;
            case 3:
                computerTurn=scissors
                break;}
console.log(`You choose ${playerturn}`)
console.log(`Computer choses ${computerTurn}`)
if ((playerturn===rock && computerTurn===rock) || (playerturn==scissors && computerTurn==scissors) ||
(playerturn==paper && computerTurn==paper)){
    console.log("This game was a dwaw!")
}
else if ((playerturn===rock && computerTurn==scissors) || (playerturn==paper && computerTurn==rock)||(playerturn==scissors && computerTurn==paper)){
    console.log("You win!")
}
else {
    console.log("You loose!")
}
console.log("Maggi's first attempt to create a simple game")

}
rockPpaerScissors("s")