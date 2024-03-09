const answer = Math.floor(Math.random() * 101);
console.log(answer);

function gamoicani() {
  let gamocnoba = document.getElementById("gamocnoba").value;
  gamocnoba = Number(gamocnoba);
  if (gamocnoba === answer) {
    console.log("sworia");
    const newMessage = "სწორია";
    const sworia = document.getElementById("sworia");
  } else if (gamocnoba < answer) {
    console.log("cade ufro magali ricxvi");
    const newMessage1 = "ცადე მაღალი";
    const magali = document.getElementById("sworia");
    magali.textContent = newMessage1;
  } else {
    console.log("cade ufro dabali ricxvi");
    const newMessage2 = "ცადე დაბალი";
    const dabali = document.getElementById("sworia");
    dabali.textContent = newMessage2;
  }
}
