const answer = Math.floor(Math.random() * 101);
console.log(answer);

function gamoicani() {
  let gamocnoba = document.getElementById("gamocnoba").value;
  gamocnoba = Number(gamocnoba);
  if (gamocnoba === answer) {
    console.log("sworia");
    const newMessage = "სწორია";
    const sworia = document.getElementById("sworia");
    sworia.textContent = newMessage;
    console.log("cade ufro dabali ricxvi");
    const newMessage2 = " ";
    const dabali = document.getElementById("dabali");
    dabali.textContent = newMessage2;
    console.log("cade ufro magali ricxvi");
    const newMessage1 = " ";
    const magali = document.getElementById("magali");
    magali.textContent = newMessage1;
  } else if (gamocnoba < answer) {
    console.log("cade ufro magali ricxvi");
    const newMessage1 = "ცადე მაღალი";
    const magali = document.getElementById("magali");
    magali.textContent = newMessage1;
    console.log("cade ufro dabali ricxvi");
    const newMessage2 = " ";
    const dabali = document.getElementById("dabali");
    dabali.textContent = newMessage2;
    console.log("sworia");
    const newMessage = " ";
    const sworia = document.getElementById("sworia");
    sworia.textContent = newMessage;
  } else {
    console.log("cade ufro dabali ricxvi");
    const newMessage2 = "ცადე დაბალი";
    const dabali = document.getElementById("dabali");
    dabali.textContent = newMessage2;
    console.log("cade ufro magali ricxvi");
    const newMessage1 = " ";
    const magali = document.getElementById("magali");
    magali.textContent = newMessage1;
    console.log("sworia");
    const newMessage = " ";
    const sworia = document.getElementById("sworia");
    sworia.textContent = newMessage;
  }
}
