let userArea = document.querySelector('#userArea'),
 comp1Area = document.querySelector('#comp1Area'),
 comp2Area = document.querySelector('#comp2Area'),
 comp3Area = document.querySelector('#comp3Area'),
 userBtn = document.querySelector('#userBtn'),
 comp1Btn = document.querySelector('#comp1Btn'),
 comp2Btn = document.querySelector('#comp2Btn'),
 comp3Btn = document.querySelector('#comp3Btn'),
 startBtn = document.querySelector('#startBtn'),
 infoDiv = document.querySelector('#info'),
 rand = 0,
 pos = 0,
 texts = ["Today is a big day for your future", "I need to do some serious work tonight", "Please do something about yourself"],
 h = document.querySelector('h3');

startBtn.addEventListener('click', startClock);
userArea.addEventListener('keyup', userFinished);


function startClock() {
  let self = this;
    let counter = 5;
    let loop = setInterval(()=> {
        counter--;
        this.innerHTML = "00:0"+counter;
        if (counter == 0){
          clearInterval(loop);
          this.style.display = "none";
          game();
        }
    },100)
    //ecma 6
}


function game() {
  chooseText();
  com1Start();
  com2Start();
  com3Start();
}


function chooseText() {
    rand = Math.floor(Math.random()*texts.length);
    h.innerHTML = texts[rand];
    infoDiv.style.display = "block";
    userArea.focus();
}
function com1Start() {
  let textArray = texts[rand].split("")
  let loop = setInterval(()=>{
    if (textArray.length > 0){
      comp1Area.value += textArray.shift();
    }else{
      clearInterval(loop)
      pos++;
      comp1Btn.className = "btn btn-success form-control";
      comp1Btn.innerHTML = "Possition: "+pos;
    }
  },300)
}
function com2Start() {
  let textArray = texts[rand].split("")
  let loop = setInterval(()=>{
    if (textArray.length > 0){
      comp2Area.value += textArray.shift();
    }else{
      clearInterval(loop)
      pos++;
      comp2Btn.className = "btn btn-success form-control"
      comp2Btn.innerHTML = "Possition: "+pos;
    }
  },400)
}
function com3Start() {
  let textArray = texts[rand].split("")
  let loop = setInterval(()=>{
    if (textArray.length > 0){
      comp3Area.value += textArray.shift();
    }else{
      clearInterval(loop)
      pos++;
      comp3Btn.className = "btn btn-success form-control"
      comp3Btn.innerHTML = "Possition: "+pos;
    }
  },500)
}

function userFinished(e) {
  if(e.keyCode == 13){
    let userText = userArea.value.trim();
    if(userText == texts[rand]){
      pos++;
      userBtn.className = "btn btn-success form-control"
      userBtn.innerHTML = "Possition: "+pos;
    }else{
      userBtn.className = "btn btn-danger form-control"
    }
  }
}
