const userInput = document.getElementById('user-input');
const theButton = document.getElementById('button');
const proButton = document.getElementById('button-pronoun');
const theName = document.getElementById('the-name');
const changeBackgroundPink = document.getElementById('background-button');
const changeBackgroundLightGreen = document.getElementById('background-button1');
const changeBackgroundLightBlue = document.getElementById('background-button2');
const nameCount = document.getElementById('name-count');
let pronoun = 0;
let counter = 0;

theButton.addEventListener('click', () => {
    if(userInput.value === ''){
        theName.textContent = 'Edmond Zhan';
    }else{
        theName.textContent = userInput.value;
        counter += 1;
        let n = counter.toString();
        nameCount.textContent = "Name Change Count: ";
        nameCount.textContent += n;
    }
});

proButton.addEventListener('click', () => {
    if(pronoun === 0){
        if(userInput.value === ''){
            theName.textContent = 'Edmond Zhan';
        }else{
            theName.textContent = userInput.value;
            counter += 1;
        }
        theName.textContent += ' (they/their)';
        pronoun += 1;
    }else if(pronoun === 1){
        if(userInput.value === ''){
            theName.textContent = 'Edmond Zhan';
        }else{
            theName.textContent = userInput.value;
            counter += 1;
        }
        theName.textContent += ' (she/her)';
        pronoun += 1;
    }else{
        if(userInput.value === ''){
            theName.textContent = 'Edmond Zhan';
        }else{
            theName.textContent = userInput.value;
            counter += 1;
        }
        theName.textContent += ' (he/him)';
        pronoun = 0;
    }
});

changeBackgroundPink.addEventListener('click', () => {
    document.body.style.backgroundColor = 'pink';
})

changeBackgroundLightGreen.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightgreen';
})

changeBackgroundLightBlue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightblue';
})