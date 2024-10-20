// instializing the score for user and computer

let userScore=0;
let comScore=0;
let butt=document.querySelector("button");
let text=document.querySelector("h2");


const choices=document.querySelectorAll(".choice");
const userScorepara=document.querySelector("#user-score");
const comScorepara=document.querySelector("#com-score");






//genrating computer choice



const genComChoice =() =>
{
    //we have to gerate randomly 1 choice between the rock sceesior and paper hence we store this in the array
    const options=["rock","paper","scisssor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];


    //when we use Math.random() it create random number between 0 to 10 with this help we are slecting randoom options 
    //it usually gives value in 0.976563838 something
    //when we want to create the value from 0 to 2 we use to multiply with 3
    //in array we directly cannot select random by index value we cant select the random position we get  the index value from 0 to 2 so we are multiplying with three
    //to remove the decimal value we use 
    //Math.floor(Math.random()*3)
}






// creating user choice







choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
       const userChoice= choice.getAttribute("id")
      // console.log("choice was selected by you is => ",userChoice);
       playGame(userChoice)
    });
});






// game starts






const playGame =(userChoice) =>
    {
    console.log("user choice is => " ,userChoice);
    const comChoice=genComChoice();
    console.log("computer choice is => ",comChoice);

    // applaying condition to check who win the game


    // in case of draw

    if(userChoice==comChoice)
    {
        console.log("------------------------------------------------");
        console.log("THE GAME WAS DRAW");
        butt.innerText=`THE GAME WAS DRAW .. .........👀🤦‍♀️`;
        text.innerText=`your Choice is ${userChoice}...... AND.......computer choice is ${comChoice}`;
        butt.style.background="yellow"
        butt.style.color="red";
        console.log("------------------------------------------------");
    }


    //incase of user choice is rock


   else if(userChoice=="rock")
   {
    if(comChoice=="paper")
    {
        console.log("------------------------------------------------");
        console.log("YOU WIN THE GAME");
        butt.innerText=`YOU WIN THE GAME ............💃😎`;
        text.innerText=`your Choice is ${userChoice}...... AND.......computer choice is ${comChoice}`;
        butt.style.background="green";
        userScore++;
        userScorepara.innerText=userScore;
        butt.style.color="white";
        console.log("------------------------------------------------");
    }
    else{
        console.log("------------------------------------------------");
        console.log("YOU LOSE THE GAME . COMPUTER WINS");
        butt.innerText=`YOU LOSE THE GAME . COMPUTER WINS.......😒 !`;
        text.innerText=`your Choice is ${userChoice}...... AND.......computer choice is ${comChoice}`;
        comScore++;
        comScorepara.innerText=comScore;
        butt.style.background="red";
        butt.style.color="white";
        console.log("------------------------------------------------");
    }
   }


    //incase of user choice is paper


   else if(userChoice=="paper")
    {
     if(comChoice=="rock")
     {
         console.log("------------------------------------------------");
         console.log("YOU LOSE THE GAME . COMPUTER WINS");
         butt.innerText=`YOU LOSE THE GAME . COMPUTER WINS.......😒 !`;
         text.innerText=`your Choice is ${userChoice}...... AND.......computer choice is ${comChoice}`;
         comScore++;
         comScorepara.innerText=comScore;
         butt.style.color="white";
         butt.style.background="red";
         console.log("------------------------------------------------");
     }
     else{
         console.log("------------------------------------------------");
         console.log("YOU WIN THE GAME");
         butt.innerText=`YOU WIN THE GAME ............💃😎`;
         userScore++;
         userScorepara.innerText=userScore;
         text.innerText=`your Choice is ${userChoice}...... AND.......computer choice is ${comChoice}`;
         butt.style.background="green";
         butt.style.color="white";
         console.log("------------------------------------------------");
     }
    }



     //incase of user choice is scissor


    else 
        {
         if(comChoice=="paper")
         {
             console.log("------------------------------------------------");
             console.log("YOU LOSE THE GAME . COMPUTER WINS");
             butt.innerText=`YOU LOSE THE GAME . COMPUTER WINS......😒 !`;
             text.innerText=`your Choice is ${userChoice}...... AND.......computer choice is ${comChoice}`;
             comScore++;
             comScorepara.innerText=comScore;
             butt.style.color="white";
             butt.style.background="red";
             console.log("------------------------------------------------");
         }
         else{
             console.log("------------------------------------------------");
             console.log("YOU WIN THE GAME");
             butt.innerText=`YOU WIN THE GAME ............💃😎`;
             userScore++;
             userScorepara.innerText=userScore;
             text.innerText=`your Choice is ${userChoice}...... AND.......computer choice is ${comChoice}`;
             butt.style.color="white";
             butt.style.background="green";
             console.log("------------------------------------------------");
         }
        }

     
    }

 