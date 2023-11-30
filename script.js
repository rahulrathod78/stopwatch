var seconds = 0;
var tens = 0;
var appendtens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");


var interval;
//Function will run when click on start
function startTime() {
  tens++;
  if (tens < 9) {
    appendtens.innerHTML = 0+ tens;
  }
  if (tens > 9) {
    appendtens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    // appendSeconds.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  
}


const buttonstart = document.querySelector("#btn-start");
buttonstart.addEventListener("click", () => {
  interval = setInterval(startTime ,20);
});

 const buttonstop=document.querySelector("#btn-stop");
 buttonstop.addEventListener("click",()=>{
    clearInterval(interval)
 })
 const buttonreset = document.querySelector("#btn-reset");
 buttonreset.addEventListener("click",()=>{
    clearInterval(interval)
    tens="00"
    seconds="00"
    appendSeconds.innerHTML=seconds;
    appendtens.innerHTML=tens;
 })