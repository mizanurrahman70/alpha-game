// main function play btn
function getsPlayGame() {
  playGamePage("play-alpha");
  homePage('end')
  homePage("home");
  starting();

  // reset scoure 
  setGetElementById('carrent-score',0)
  setGetElementById('carrent-life',5)
}
// game over 
function gameOver(){
  playGamePage("end");
  homePage("play-alpha");
 const lastScoure= textGetElementById('carrent-score')
  setGetElementById('game-scour',lastScoure)
  // reset key board 
  const currentAlphabet=getElementByIdKeu('change-word')
  removeKeyId(currentAlphabet)

}
function getElementByIdKeu(element){
  const elements=document.getElementById(element)
  const text=elements.innerText
  return text
}
// start again 
function startAgainGame(){
  playGamePage("play-alpha");
  homePage("end");
}
// play game secton
function playGamePage(play) {
  const continu = document.getElementById(play);
  continu.classList.remove("hidden");
}

// first page hiden
function homePage(page) {
  const home = document.getElementById(page);
  home.classList.add("hidden");
}
// continue game
function starting() {
  const alphabet = getAlphabet();
}

// key background color add
function backgroundColor(elemtid) {
  const element = document.getElementById(elemtid);
  element.classList.add("bg-amber-200");
  return element;
}
// key backgroundColor remove
function removeKeyId(elements) {
  const element = document
    .getElementById(elements)
    .classList.remove("bg-amber-200");
}
// get scoure 
function textGetElementById(elemtId){
  const element=document.getElementById(elemtId).innerText
 const value=parseInt(element)
 return value
}

// set value 
function setGetElementById(elemtId,value){
  const element =document.getElementById(elemtId);
  element.innerText=value;
  return element
}

// get alphabet
function getAlphabet() {
  const alphabetSteing = "abcdefghijkllmnopdqrstuvwxyz";
  const alphabets = alphabetSteing.split("");
  //    get random Number
  const randomNumber = Math.random() * 25;
  const Number = Math.round(randomNumber);
  const alphabet = alphabets[Number];
  document.getElementById("change-word").innerText = alphabet;
  //   set backgroundColor
  backgroundColor(alphabet);
  return alphabet;
}
// key button press
function keyButtonPress(even) {
  const plearPress = even.key;
  console.log(plearPress);

  // we accpcet
  const showDisplay = document
    .getElementById("change-word")
    .innerText.toLowerCase();

  console.log(showDisplay);
  if (showDisplay === plearPress) {
//    carrunt scoure updatr 
   
const currentscoure=textGetElementById('carrent-score')
const updateScours=currentscoure +1
setGetElementById('carrent-score',updateScours)






//.............................................................
// const carruntValue=document.getElementById('carrent-score').innerText
//     const carruntScour= parseInt(carruntValue);
    
//     // update scoure 
//     const updateScour=carruntScour + 1;
    
//     // show showDisplay 
//     const show=document.getElementById('carrent-score').innerText= updateScour
    starting();
    removeKeyId(showDisplay)
  } else {
    // current life update 
    const currentLife=textGetElementById('carrent-life')
    const updateLife=currentLife -1
    setGetElementById('carrent-life',updateLife)





    //---------------------------------------
    // const carrentLifeValu= document.getElementById('carrent-life').innerText;
    // const carrentValue= parseInt(carrentLifeValu);
    // const carrentLife= carrentValue - 1
    // show showDisplay 
    // const showDisplay =document.getElementById('carrent-life').innerText = carrentLife;
    if(updateLife === 0){
      gameOver()
    }
  }
  
}
document.addEventListener("keyup", keyButtonPress);
