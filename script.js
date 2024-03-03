let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const generateComputerChoice =()=>{
    let options = ["rock", "paper", "scissors"];
    //rock  paper   scissors
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const playGame = (userChoice)=>{
    //generate computer choice
    const compchoice = generateComputerChoice();

    if(userChoice === compchoice)
    {
        //draw
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice ==="rock")
        {
            // scissors or paper
            if(compchoice === 'paper')
            {
                userWin = false;
            }
            else
            {
                userWin = true;
            }
        }
        else if(userChoice ==="paper")
        {
            //rock  scissors
            userWin = compchoice === 'scissors'? false : true;
        }
        else
        {
            //user --> scissors
            //comp --> rock paper
            userWin = compchoice ==='rock' ? false : true;
        }
        showWinner(userWin, userChoice, compchoice);
    }
}

const showWinner = (userWin, userChoice, compchoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! Your ${userChoice} beats ${compchoice}.`;
        msg.style.backgroundColor = 'green';
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost!! ${compchoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = 'red';
    }
}

const drawGame = ()=>{
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})


