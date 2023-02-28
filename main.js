import { Tamagotchi } from "./modules/tamagotchi.js";


const btn = document.querySelector('#button');
btn.addEventListener('click',chooseTamagotchi);
const mainContainer = document.querySelector('#container')
mainContainer.classList.add('maincontainer')



function chooseTamagotchi(event){
    event.preventDefault();

    const smalldiv = document.createElement('div');
    mainContainer.appendChild(smalldiv);

    const inputbox = document.querySelector('#text')
    const inputTamagotchiName = inputbox.value;
    inputbox.value = '';

    const chooseSortOfTamagotchi = document.querySelector('#animalSorts')
    const sortchoosen = chooseSortOfTamagotchi.value;
    if(sortchoosen == 'mouse'){
        const sortOneImg = document.createElement ('img');
        smalldiv.appendChild(sortOneImg);
        sortOneImg.src = 'tamagotchiMouse.jpg';
        
    } else if(sortchoosen == 'rabbit'){
        const sortTwoImg = document.createElement ('img');
        smalldiv.appendChild(sortTwoImg);
        sortTwoImg.src = 'TamgotchiRabbit.jpg';
    }
        else if(sortchoosen =='snake'){
            const sortThreImg = document.createElement ('img');
            smalldiv.appendChild(sortThreImg);
            sortThreImg.src = 'TamagotchiSnake.jpg';
        }
        else if(sortchoosen =='bird'){
            const sortFourImg = document.createElement ('img');
            smalldiv.appendChild(sortFourImg);
            sortFourImg.src = 'TamagotchiBird.jpg';
        }
    

    const newTamagotchiCharacter = new Tamagotchi( inputTamagotchiName,sortchoosen)


    const tamagotchiName = document.createElement('h2');
    smalldiv.appendChild(tamagotchiName);
    tamagotchiName.innerText = inputTamagotchiName + ' ' +  'The' + ' ' +  sortchoosen;

    const foodlevelInnerText = document.createElement('h4');
    smalldiv.appendChild(foodlevelInnerText)
    foodlevelInnerText.innerText ='Food level =' +  newTamagotchiCharacter.foodlevel;

    const feedBtn = document.createElement('button');
    smalldiv.appendChild(feedBtn);
    feedBtn.innerText = 'Feed';
   
    
    const happinessLevelInnerText = document.createElement('h4');
    smalldiv.appendChild(happinessLevelInnerText);
    happinessLevelInnerText.innerText = 'Happiness level =' + newTamagotchiCharacter.happinesslevel  ;
   
    const playBtn = document.createElement('button');
    smalldiv.appendChild(playBtn);
    playBtn.innerText = 'Play';



    //Olika egenskaper mellan main.js => tamagotchi.js

    newTamagotchiCharacter.hungerscore(foodlevelInnerText,feedBtn,playBtn)
    newTamagotchiCharacter.happinessscore(happinessLevelInnerText,playBtn,feedBtn)
    feedBtn.addEventListener('click', ()=>{
        newTamagotchiCharacter.feedTamagotchiBtn(foodlevelInnerText);
    })
    playBtn.addEventListener('click', ()=>{
        newTamagotchiCharacter.playTamagotchiBtn(happinessLevelInnerText);
    })
}


