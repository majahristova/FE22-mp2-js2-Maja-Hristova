


export class Tamagotchi {

    constructor(name, animalOption) {
        this.name = name;
        this.animalOption = animalOption;
        this.foodlevel = 10;
        this.happinesslevel = 10;
    }
    hungerscore(foodlevelInnerText,feedbtn,playBtn) {
        this.firstintervallID = setInterval(() => {
            this.foodlevel--;
            foodlevelInnerText.innerText = 'Food level = '  +  this.foodlevel;
             const audioWhenLosing = new Audio('gameover.mp3');
 
            if ( this.foodlevel === 0) {
                this.hungerscoreEnd();
                audioWhenLosing.play();
                feedbtn.disabled = true;
                playBtn.disabled = true;
            }
        }, "5000")
    }
    hungerscoreEnd(){
        clearInterval(this.firstintervallID);
    }
    happinessscore(happinessLevelInnerText,playBtn,feedBtn){
        this.secondintervalID = setInterval(() => {
            this.happinesslevel--;
            happinessLevelInnerText.innerText = 'Happiness level = ' + this.happinesslevel;
            const audioWhenLosing = new Audio('gameover.mp3');
         
            if( this.happinesslevel === 0){
                this.happinesscoreEnd();
                audioWhenLosing.play();
                playBtn.disabled = true;
                feedBtn.disabled = true;
            }
        }, "2000" )
    }
    happinesscoreEnd(){
        clearInterval(this.secondintervalID)
    }
    feedTamagotchiBtn(foodlevelInnerText){
        this.foodlevel++;
        foodlevelInnerText.innerText = 'Food Level = ' +  this.foodlevel; 
        if( this.foodlevel === 10){
            this.foodlevel--;
        }
    }
    playTamagotchiBtn(happinessLevelInnerText){
        this.happinesslevel++;
        happinessLevelInnerText.innerText = 'Happiness level = ' +  this.happinesslevel;
        if( this.happinesslevel === 10){
            this.happinesslevel--;
        }
    }

}