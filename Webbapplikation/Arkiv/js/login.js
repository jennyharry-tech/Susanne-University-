

console.log("JS laddad");

/* Hämtar formuläret för inloggningen */ 
const loginForm = document.querySelector(".login-box"); /* om något går snett, visas meddelandet i den här rutan */
const felText = document.getElementById("felText");

/* Hämtar rutan där användaren kan skriva in sitt namn och lösenord */
const anvandareInput = document.getElementById("anvandare");
const losenordInput = document.getElementById("losen");

/* Väntar på att användaren ska tycka på logga in */ 
loginForm.addEventListener("submit", function (handelse) {
handelse.preventDefault(); /* Stoppar sidan från att laddas om helt */

/* Ser vad användaren har skrivit i rutan */ 
const anvandarnamn = anvandareInput.value;
const losenord = losenordInput.value;

/* Hämtar studentdata från API */ 
fetch("https://jek-hb.github.io/portal/students.json") 
.then(function (svar) {
return svar.json();
}) /* Svar från servern och svaret översätts så JavaScript förstår */


.then(function (studentlista) {
const studentlista = studentdata.results; /* Listan med studenter */ 
let hittadStudent = false;

for (let i = 0; i < studentlista.length; i++) { /* Loopar alla studenter */ 
let student = studentlista[i];

/* Ser till så att användarnamn och lösenord stämmer */ 
if (student.login.username === anvandarnamn && student.login.password === losenord) {
hittadStudent = true;
break;
}
} 

if (hittadStudent === true) { /* Användaren skickas vidare om inloggningen stämmer */ 
window.location.href = "courses.html";
} else {
felText.innerText = "Fel användarnamn eller lösenord, försök igen!";
} /* Felmeddelande visas om inloggningen inte går igenom */ 
})
.catch(function (fel) { /* Om API:t inte funkar så visar det att det blivit fel */ 
console.error("Något gick fel:", fel);
felText.textContent = "Kunde inte kontakta servern.";
});

});
