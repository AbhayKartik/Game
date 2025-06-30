let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3 );
    return options[randIdx];
};


const drawGame = () => {
    // console.log("Game was draw.");  
    msg.innerText = "Game was Draw. play again";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin , userchoice, compChoice) => {
    if(userWin) {
        userscore++;
        userscorePara.innerText =userscore
        // console.log("you win !");
        msg.innerText = `you win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        
        compscore++;
        compscorePara.innerText = compscore;
        // console.log("you lose ");
        msg.innerText = `you lost ${compChoice} beats Your ${userchoice} `;
        msg.style.backgroundColor = "red";


    }
}


const playGame = (userchoice) => {
    // console.log("user choice = ", userchoice );
    //Genrate computer choice 
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if(userchoice === compChoice){
        drawGame();
        //draw game 
    } else {
        let userWin = true;
        if(userchoice === "rock") {
            //scissors, paper 
            userWin = compChoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            //rock,scissors
           userWin = compChoice === "scissors" ? false : true ;
        } else{
            //rock,papper
           userWin =  compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userchoice , compChoice);
    }


};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});