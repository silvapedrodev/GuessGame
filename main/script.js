const screen1 = document.querySelector(".screen1")
const footer = document.querySelector("footer > p")
const country = document.querySelector(".language")
let lang = document.querySelector("#lang")
const screen2 = document.querySelector(".screen2")
let language = 'pt'
let erroAlert = "Please enter only numbers from 0 to 10."
const screen3 = document.querySelector(".screen3")
const screen4 = document.querySelector(".screen4")

// var buttons
const play = document.querySelector("#play")
const HowToPlay = document.querySelector("#HowToPlay")
const usFlag = document.querySelector("#us-flag") 
const brFlag = document.querySelector("#br-flag")
const esFlag = document.querySelector("#es-flag")
const ruFlag = document.querySelector("#ru-flag")
let btnTry = document.querySelector("#try")
let scorePoint = document.querySelector("#scorePoint")
let btnReset = document.querySelector("#btnReset")
const btnBack = document.querySelector("#btnBack")
const btnExit = document.querySelector("#btnExit")
let score = 0
let point = 0
let xAttempts = 1
let randomNumberInterval = Math.floor(Math.random() * 11) 


// Buttons 
play.addEventListener("click", playGame)
HowToPlay.addEventListener("click", howPlayGame)
brFlag.addEventListener('click', handleClick)
usFlag.addEventListener('click', handleClick)
esFlag.addEventListener('click', handleClick)
ruFlag.addEventListener('click', handleClick)
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
btnBack.addEventListener("click", howPlayGame)
btnExit.addEventListener("click", exitGame)

// Functions screen1 | menu
function playGame(){
  screen1.classList.toggle("hide")
  country.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function howPlayGame(){
  screen1.classList.toggle("hide")
  country.classList.toggle("hide")
  screen4.classList.toggle("hide")
}


// Functions screen2 and screen 3
function handleTryClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")
  
  if(Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0 || inputNumber.value == ""){
    alert(erroAlert)
  } else if(language == 'pt') {
    if(Number(inputNumber.value) == randomNumberInterval) {
      toggleScreen()
      screen3.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas!`
      checkPoints()
      screen3.querySelector("p").innerHTML = `+ ${point} PONTOS`
    } 
  } else if(language == 'us') {
    if(Number(inputNumber.value) == randomNumberInterval){
      toggleScreen()
      screen3.querySelector("h2").innerText = `You got it in ${xAttempts} attempts!`
      checkPoints()
      screen3.querySelector("p").innerHTML = `+ ${point} POINTS`
    }
  } else if(language == 'es'){
    if(Number(inputNumber.value) == randomNumberInterval) {
      toggleScreen();
      screen3.querySelector("h2").innerText = `¡Lo lograste en ${xAttempts} intentos!`;
      checkPoints();
      screen3.querySelector("p").innerHTML = `+ ${point} PUNTOS`;
    }
  } else if(language == "ru"){
    if(Number(inputNumber.value) == randomNumberInterval){
      toggleScreen();
      screen3.querySelector("h2").innerText = `Ты справился за ${xAttempts} попыток!`;
      checkPoints();
      screen3.querySelector("p").innerHTML = `+ ${point} ОЧКОВ`;
    }
  }

  scorePoint.innerText = score
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick(){
  toggleScreen()
  randomNumberInterval = Math.floor(Math.random() * 11)
  xAttempts = 1
}

function checkPoints(){
  if(xAttempts == 1) {
    point = 20
  } else if(xAttempts >= 2 && xAttempts <= 5) {
    point = 10
  } else if(xAttempts >= 6 && xAttempts <= 8) {
    point = 4
  } else{
    point = 1
  }

  score += point
}

function toggleScreen(){
  screen2.classList.toggle("hide")
  screen3.classList.toggle("hide")
 }

function exitGame(){
  screen3.classList.toggle("hide")
  screen1.classList.toggle("hide")
  country.classList.toggle("hide")
}

// Translation Function
function handleClick(event){
  if(event.target == usFlag) {
    // screen1
    language = 'us'
    screen1.querySelector("h1").innerText = "Guessing Game"
    play.innerText = "PLAY"
    HowToPlay.innerText = "How to Play?"
    lang.innerText = "Language"
    footer.innerHTML = "<p>Created and developed by <strong>Pedro.S</strong></p>"
    
    //screen2
    screen2.querySelector("h1").innerText = "Guessing Game"
    screen2.querySelector(".screen2 > p").innerHTML = 'Guess the number between 0 and 10.'
    btnTry.innerText = "Try"
    erroAlert = "Please enter only numbers from 1 to 10."
    
    // screen3
    btnReset.innerText = "Play again"
    
    // screen4
    btnBack.innerText = 'BACK'
    screen4.querySelector("h1").innerText = "How to Play"
    screen4.querySelector(".screen4 p:nth-child(2)").innerText = 'Welcome to our guessing game!'
    screen4.querySelector(".screen4 p:nth-child(3)").innerHTML = "I'm thinking of a number between <strong>1 and 10</strong>. Your goal is to guess the number I'm thinking."
    screen4.querySelector(".screen4 p:nth-child(4)").innerText = "You can make your guesses by typing numbers, and I'll let you know if you guessed correctly."
    screen4.querySelector(".screen4 p:nth-child(5)").innerText = "Here's how the scoring works:"
    
    screen4.querySelector(".screen4 li:nth-child(1)").innerHTML = "If you guess the number in <strong>1 attempt</strong>, you'll earn <strong>20 points</strong>."
    screen4.querySelector(".screen4 li:nth-child(2)").innerHTML = "If you guess the number in <strong>2 to 5 attempts</strong>, you'll earn <strong>10 points</strong>.";
    screen4.querySelector(".screen4 li:nth-child(3)").innerHTML = "If you guess the number in <strong>6 to 8 attempts</strong>, you'll earn <strong>4 points</strong>.";
    screen4.querySelector(".screen4 li:nth-child(4)").innerHTML = "If you guess the number in more than <strong>8 attempts</strong>, you'll earn <strong>1 point</strong>.";

  } else if(event.target == brFlag){
    // screen1
    language = 'pt'
    screen1.querySelector("h1").innerText = "Jogo da Adivinhação"
    play.innerText = "JOGAR"
    HowToPlay.innerText = "Como Jogar?"
    lang.innerText = "Idioma"
    footer.innerHTML = "<p>Criado e desenvolvido por <strong>Pedro.S</strong></p>"
    
    // screen2
    screen2.querySelector("h1").innerText = "Jogo da Adivinhação"
    screen2.querySelector(".screen2 > p").innerHTML = 'Adivinhe o número entre 0 e 10'
    btnTry.innerText = "Tentar"
    erroAlert = "Por favor, digite apenas números de 1 a 10."
    
    // screen3
    btnReset.innerText = "Jogar novamente" 
    
    // screen4
    btnBack.innerText = 'VOLTAR'
    screen4.querySelector("h1").innerText = "Como Jogar"
    screen4.querySelector(".screen4 p:nth-child(2)").innerText = 'Bem-vindo ao nosso jogo de adivinhação!';
    screen4.querySelector(".screen4 p:nth-child(3)").innerHTML = "Estou pensando em um número entre <strong>1 e 10</strong>. Seu objetivo é adivinhar o número que estou pensando.";
    screen4.querySelector(".screen4 p:nth-child(4)").innerText = "Você pode fazer suas tentativas digitando números, e eu direi se você acertou.";
    screen4.querySelector(".screen4 p:nth-child(5)").innerText = "Aqui está como funciona a pontuação:";

    screen4.querySelector(".screen4 li:nth-child(1)").innerHTML = "Se você acertar o número em <strong>1 tentativa</strong>, você ganhará <strong>20 pontos</strong>.";
    screen4.querySelector(".screen4 li:nth-child(2)").innerHTML = "Se você acertar o número em <strong>2 a 5 tentativas</strong>, você ganhará <strong>10 pontos</strong>.";
    screen4.querySelector(".screen4 li:nth-child(3)").innerHTML = "Se você acertar o número em <strong>6 a 8 tentativas</strong>, você ganhará <strong>4 pontos</strong>.";
    screen4.querySelector(".screen4 li:nth-child(4)").innerHTML = "Se você acertar o número em mais de <strong>8 tentativas</strong>, você ganhará <strong>1 ponto</strong>.";
  } 
    else if (event.target === esFlag) {
    // screen1
    language = 'es';
    screen1.querySelector("h1").innerText = "Juego de Adivinanza";
    play.innerText = "JUGAR";
    HowToPlay.innerText = "¿Cómo Jugar?";
    lang.innerText = "Idioma";
    footer.innerHTML = "<p>Creado y desarrollado por <strong>Pedro.S</strong></p>"
    
    // screen2
    screen2.querySelector("h1").innerText = "Juego de Adivinanza";
    screen2.querySelector(".screen2 > p").innerHTML = 'Adivina el número entre 0 y 10';
    btnTry.innerText = "Intentar";
    erroAlert = "Por favor, introduce solo números del 1 al 10.";
    
    // screen3
    btnReset.innerText = "Jugar de Nuevo";
    
    // screen4
    btnBack.innerText = 'VOLVER';
    screen4.querySelector("h1").innerText = "Cómo Jugar";
    screen4.querySelector(".screen4 p:nth-child(2)").innerText = 'Bienvenido a nuestro juego de adivinanzas!';
    screen4.querySelector(".screen4 p:nth-child(3)").innerHTML = "Estoy pensando en un número entre <strong>1 y 10</strong>. Tu objetivo es adivinar el número que estoy pensando.";
    screen4.querySelector(".screen4 p:nth-child(4)").innerText = "Puedes hacer tus intentos escribiendo números, y te diré si acertaste.";
    screen4.querySelector(".screen4 p:nth-child(5)").innerText = "Así es como funciona la puntuación:";
  
    screen4.querySelector(".screen4 li:nth-child(1)").innerHTML = "Si adivinas el número en <strong>1 intento</strong>, ganarás <strong>20 puntos</strong>.";
    screen4.querySelector(".screen4 li:nth-child(2)").innerHTML = "Si adivinas el número en <strong>2 a 5 intentos</strong>, ganarás <strong>10 puntos</strong>.";
    screen4.querySelector(".screen4 li:nth-child(3)").innerHTML = "Si adivinas el número en <strong>6 a 8 intentos</strong>, ganarás <strong>4 puntos</strong>.";
    screen4.querySelector(".screen4 li:nth-child(4)").innerHTML = "Si adivinas el número en más de <strong>8 intentos</strong>, ganarás <strong>1 punto</strong>.";
}   
  else if (event.target === ruFlag) {
    // screen1
    language = 'ru';
    screen1.querySelector("h1").innerText = "Игра в Угадывание";
    play.innerText = "ИГРАТЬ";
    HowToPlay.innerText = "Как играть?";
    lang.innerText = "Язык";
    footer.innerHTML = "<p>Создано и разработано <strong>Pedro.S</strong></p>"
    
    // screen2
    screen2.querySelector("h1").innerText = "Игра в Угадывание";
    screen2.querySelector(".screen2 > p").innerHTML = 'Угадайте число от 0 до 10';
    btnTry.innerText = "Попробовать";
    erroAlert = "Пожалуйста, введите только числа от 1 до 10.";
    
    // screen3
    btnReset.innerText = "Играть снова";
    
    // screen4
    btnBack.innerText = 'НАЗАД';
    screen4.querySelector("h1").innerText = "Как играть";
    screen4.querySelector(".screen4 p:nth-child(2)").innerText = 'Добро пожаловать в нашу игру в угадывание!';
    screen4.querySelector(".screen4 p:nth-child(3)").innerHTML = "Я думаю о числе между <strong>1 и 10</strong>. Ваша цель - угадать число, которое я думаю.";
    screen4.querySelector(".screen4 p:nth-child(4)").innerText = "Вы можете попытаться угадать, вводя числа, и я скажу вам, правильно ли вы угадали.";
    screen4.querySelector(".screen4 p:nth-child(5)").innerText = "Вот как работает система подсчета очков:";

    screen4.querySelector(".screen4 li:nth-child(1)").innerHTML = "Если вы угадаете число с <strong>1 попытки</strong>, вы получите <strong>20 очков</strong>.";
    screen4.querySelector(".screen4 li:nth-child(2)").innerHTML = "Если вы угадаете число с <strong>2 по 5 попыток</strong>, вы получите <strong>10 очков</strong>.";
    screen4.querySelector(".screen4 li:nth-child(3)").innerHTML = "Если вы угадаете число с <strong>6 по 8 попыток</strong>, вы получите <strong>4 очка</strong>.";
    screen4.querySelector(".screen4 li:nth-child(4)").innerHTML = "Если вы угадаете число более чем <strong>8 попыток</strong>, вы получите <strong>1 очко</strong>.";
  }
}
