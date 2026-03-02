 /* Tar fram sidan där quizet finns*/

const quizbox = document.getElementById('quiz-container');

  /* Här hämtas frågorna från API och görs om så att Javascript kan använda informationen */ 
fetch('https://jek-hb.github.io/portal/quiz.json')
.then(function(svar) {
return svar.json(); 
})
.then(function(allaFrågor) {
    
quizbox.innerHTML = ""; /* Tar bort allt på sidan så den blir tom */ 

/* Loopar alla frågor i quizet */ 
for (let i = 0; i < allaFrågor.length; i++) { /* Tar och går igenom frågorna i listan */
let Fråga = allaFrågor[i];

/* Här skapas en ny ruta för varje frågan */ 
let frågeLåda = document.createElement('div'); 
frågeLåda.className = "quiz-item";

/* Rubrik till frågan */
let rubrik = document.createElement('h3');
rubrik.innerText = Fråga.question;
frågeLåda.appendChild(rubrik);

let svarsBox = document.createElement('ul'); /* Skapar ett lista för svarsalternativen */ 

/* Loopar svarsalternativen */ 
for (let j = 0; j < Fråga.answers.length; j++) {
let val = Fråga.answers[j];

/* Här bildas ett listobjekt för varje svar */ 
let punkt = document.createElement('li');
punkt.innerText = val.answer;
svarsBox.appendChild(punkt);
}


frågeLåda.appendChild(svarsBox); /* Svaren läggs i frågerutan */ 
quizbox.appendChild(frågeLåda); /* frågerutan hamnar på quizsidan */ 
}
}) 
.catch(function(fel) { /* Om API:t inte funkar så visar det att det blivit fel */ 
console.log("Ett fel uppstod: " + fel);
});
