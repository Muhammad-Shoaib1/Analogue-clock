let hoursHand = document.getElementById("hour");
let minutesHand = document.getElementById("minutes");
let secondsHand = document.getElementById("seconds");

function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let hRotation = 30 * hours + minutes / 2;
  let mRotation = 6 * minutes + seconds / 10;
  let sRotation = 6 * seconds;

  hoursHand.style.transform = `rotate(${hRotation}deg)`;
  minutesHand.style.transform = `rotate(${mRotation}deg)`;
  secondsHand.style.transform = `rotate(${sRotation}deg)`;
  let sound = new Audio("./media/sound.mp3")
}

setInterval(updateClock, 1000);
updateClock(); 
