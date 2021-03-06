let test = document.getElementById('test');
let test_status = document.getElementById('test_status');
let again = document.getElementById('again');
let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');
let pos = 0;
let correct = 0;
let question;
let choices;
let choice;
let chA, chB;

//timer en segundos
let timeleft = 20;
let downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " segundos sobrantes";
  timeleft -= 1;
  if(timeleft <= 0){
    if (timeleft === 0) {
    swal('Tu tiempo se acabo :( !', 'Se iniciara de nuevo el juego', 'error')
    .then (function() {
                window.location = "index.html";
          });
        }
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished"
  }
}, 1000)

let questions = [
  ['Luis salió a ca_ar por la mañana', 's', 'z','B'],
  ['En el la_oratorio hice una sustancia', 'b', 'v','A'],
  ['Ayer _ovió por la tarde', 'll', 'y','A'],
  ['La co_binación es correcta', 'n', 'm','B'],
  ['La inspira_ión fue en Laboratoria', 'c', 's','A']
];

function enablingBtn(){
  document.getElementById("nextBtn").disabled = false;
}

function renderQuestion(){
  test_status.innerHTML = 'Pregunta ' + (pos+1) + ' de ' + questions.length;

  if(pos >= questions.length){
     test_status.innerHTML = 'Test Completado';
     test.innerHTML = '<h2>Tú obtuviste ' + correct + ' preguntas correctas de ' + questions.length + ' </h2>';
     again.innerHTML = '<h2>Selecciona la categoria que quieras jugar </h2></br>';
     btn.innerHTML = `<button class="calculus btns" onclick="window.location.href='calculo.html'">Calculo Mental</button>`;
     btn1.innerHTML = `<button class="spelling btns" onclick="window.location.href='ortografia.html'">Ortografia</button>`;
    clearInterval(downloadTimer);
  return false;
 }

  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];

  test.innerHTML = '<h2>' + question + '</h2>';
  test.innerHTML += '<input type="radio" name="choices" value="A" onclick="enablingBtn()">' + chA + '<br>';
  test.innerHTML += '<input type="radio" name="choices" value="B" onclick="enablingBtn()">' + chB + '<br>';
  test.innerHTML += '<button id="nextBtn" class ="spelling btns" onclick="checkAnswer()"> Siguiente </button>';
  document.getElementById("nextBtn").disabled = true;
}

function checkAnswer(){
  choices = document.getElementsByName('choices');
  for(let i = 0; i < choices.length; i++){
    if(choices[i].checked){
       choice = choices[i].value;
    }
  }

  if(choice === questions[pos][3]){
     correct++;
     console.log('correct: ' + correct);
  }

  pos++;
  renderQuestion();
}

window.addEventListener('load', renderQuestion, false);