let theButton = document.getElementById('theButton'); 

theButton.addEventListener('click', function(event) { 
    // some code here, that will be executed each time you click on myButton 
    event.preventDefault(); //annuler l'evenement par default
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
}});




const selectCharactere = document.querySelector('.charactere');
const imgCharactere = document.querySelector('.img-charactere');

selectCharactere.addEventListener('change', (event) => {
    console.log(event.target.value);
    switch (event.target.value){
    case 'Goku':
        imgCharactere.src = 'https://media.eventhubs.com/images/2018/10/26_dbgoku01.jpg';
    break;
    case 'Piccolo':
        imgCharactere.src = "https://media.eventhubs.com/images/2018/10/26_dbpiccolo01.jpg";
    break;
    case "Tortue_Génial":
        imgCharactere.src = "https://media.eventhubs.com/images/2018/10/26_dbroshi01.jpg";
    break;
    case "Général_Blue":
        imgCharactere.src ="https://media.eventhubs.com/images/2018/10/26_dbblue01.jpg";
    break;
    default :
        imgCharactere.src = 'https://media.eventhubs.com/images/2018/10/26-characters-original-dragon-ball-would-be-extremely-welcome-addit.jpg';
    break;}
});



const buttonMenu = document.querySelector('#menu-burger-position');
const navMenu = document.querySelector('#nav-barre');

buttonMenu.addEventListener('click', () => {
    navMenu.classList.toggle('translate-menu');
    buttonMenu.classList.toggle('translate-burger')
});
