let theButton = document.getElementById('theButton'); 

theButton.addEventListener('click', function(event) { 
    // some code here, that will be executed each time you click on myButton 

        
        event.preventDefault(); //annuler l'evenement par default
        let userName= document.getElementById('userName').value; //;prompt("What is your name ?");
        let firstValue=parseInt(document.getElementById('firstValue').value); //prompt("Please enter a number ?"));
        let operator=document.getElementById('operator').value; //prompt("Please enter a operator (+/*-) ?");
        let secondValue=parseInt(document.getElementById('secondValue').value); //prompt("Please enter a second number ?"));
        let result= document.getElementById('result');
        //console.log(firstValue, secondValue, operator);

        switch (operator){
            case "+":
                let addition = (firstValue+secondValue);
                result.innerHTML = addition;
            break;
            case "-":
                let soustraction = (firstValue-secondValue);
                result.innerHTML = soustraction;
            break;
            case "/":
                let division = (firstValue/secondValue);
                result.innerHTML = division;
            break;
            case "*":
                let multiplication = (firstValue*secondValue);
                result.innerHTML = multiplication;
            break;
            default :
            let other = "Invalid operator";
            result.innerHTML = other;
            break;
        }
    
    });








/*const playerName = document.getElementById('your_id'); //prompt("What is your name ?");
const random = Math.floor(Math.random() * 100) + 1;
console.log(random);


let Calculate = document.getElementById('button');
Calculate.addEventListener('click', function(event) { 
    // some code here, that will be executed each time you click on myButton 
});

let result = document.getElementById('result').innerHTML = 'Bob'; // will retrieve the element with id="firstname" and replace the actual content 'John' by 'Bob'


let gameContinue = true;
   

while (gameContinue) {
    const playerNumber = parseInt(document.getElementById('your_id').value,10); //parseInt(prompt("Pick a number between 0 and 100"), 10);
    if (playerNumber > random){
    console.log("It is less");
    }if (playerNumber < random) {
    console.log("It is more");
    
    }if (playerNumber === random) {
    alert(`${playerName} wins !`);
    gameContinue = false;
    }
}*/