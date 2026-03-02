
/* Tar fram sidan där kurserna finns*/
const kursyta = document.getElementById("courses-container");

/* Ser till så sidan finns innan nästa steg */ 
if (kursyta===null) { 
console.log("Hittar inte #courses-container. Är du på rätt sida?");
} else { /* Hittas inte "courses-container" i HTML så kommer en varning */ 

/* Hämtar kurslista från API:n */ 
fetch("https://jek-hb.github.io/portal/courses.json")
.then(function (svar) {

/* Checkar så att hämtningen gick bra */
if (svar.ok === false) {
 console.log("Fel vid hämtning av data");
}

return svar.json(); /* Svar från servern och svaret översätts så JavaScript förstår */
})
.then(function (allaKurser) {
console.log("Kurser:", allaKurser); /* Kontrollerar att det fungerar */ 

kursyta.innerHTML = ""; /* Tar bort gammalt innan kurserna visas */ 

for (let i = 0; i < allaKurser.length; i++) { /* Loopar igenom alla kurser och det bildas en ruta för kurserna där man kan finna information om kursen  */  
const kurs = allaKurser[i];
const kursBox = document.createElement("div");
kursBox.className = "kurs-kort";

/* Kursens rubrik och ID skapas */
const titel = document.createElement("h2");
titel.innerText = kurs.courseId + "-" + kurs.courseName;
kursBox.appendChild(titel);

/* Poäng för kuren */ 
const poangInfo = document.createElement("p");
poangInfo.innerText = "Poäng: " + kurs.credit + " poäng";
kursBox.appendChild(poangInfo);

/* Hämtar vilken skola som håller kursen */ 
const info = document.createElement("p");
info.innerText = kurs.school;
kursBox.appendChild(info);

/* Länk till testverktyget där quizet finns */ 
const gaVidare = document.createElement("a");
gaVidare.href = "quiz.html";
gaVidare.innerText = "Starta quizet här";
kursBox.appendChild(gaVidare);

kursyta.appendChild(kursBox); /* Kurslådan hamnar på sidan */ 
}
})
.catch(function (fel) {
console.log("Något gick fel:", fel);  /* Om API:t inte funkar så visar det att det blivit fel */ 
kursyta.innerHTML = "<p>Kunde inte ladda kurser.</p>";
});
}



