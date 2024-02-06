const infoDiv = document.querySelector(".info");
const keyPressed = new Audio("keypressed.mp3");

addEventListener("keydown", (ev) => {
  const key = ev.code.toLocaleLowerCase();
  const keyDiv = document.querySelector(`#${key}`);

  if ((key === "numlock") || (key === "capslock") || (key === "scrolllock")){
      const ledDiv = document.querySelector(`.leds-ligth.${key}`);
      ledDiv.classList.toggle("on");
  }

  //pressed key
  keyDiv.classList.add("pressed");
  keyPressed.currentTime = 0;
  keyPressed.play();
  infoDiv.textContent = `Se ha pulsado la tecla '${key}' ${ev.key}  (${ev.keyCode})`;
  
});

addEventListener("keyup", (ev) => {
  const key = ev.code.toLocaleLowerCase();
  const keyDiv = document.querySelector(`#${key}`);
  keyDiv.classList.remove("pressed");
})


