// main function play btn
function getsPlayGame(){
   playGamePage('play-alpha');
   homePage('home');
   starting()
}

// play game secton 
function playGamePage(play){
    const continu =document.getElementById(play);
    continu.classList.remove('hidden')
}

// first page hiden 
function homePage(page){
const home=document.getElementById(page);
home.classList.add('hidden')
}
// continue game 
function starting(){
    const alphabet=getAlphabet()
    console.log('alphaber', alphabet)
}


// get alphabet
function getAlphabet(){
    const alphabetSteing='abcdefghijkllmnopdqrstuvwxyz'
   const alphabets= alphabetSteing.split('')
//    get random Number
const randomNumber=Math.random()*25;
const Number=Math.round(randomNumber)
const alphabet =alphabets[Number]
return alphabet
}

