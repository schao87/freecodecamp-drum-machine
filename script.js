// const audio = new Audio();
const drumpad = document.querySelectorAll(".drum-pad");

const qBtn = document.getElementById("heater1");
const wBtn = document.getElementById("heater2");
const eBtn = document.getElementById("heater3");
const aBtn = document.getElementById("heater4");
const sBtn = document.getElementById("clap");
const dBtn = document.getElementById("open-hh");
const zBtn = document.getElementById("kick-n-hat");
const xBtn = document.getElementById("kick");
const cBtn = document.getElementById("closed-hh");

const display = document.getElementById("display");

const keyMap = {
  'Q': qBtn,
  'W': wBtn,
  'E': eBtn,
  'A': aBtn,
  'S': sBtn,
  'D': dBtn,
  'Z': zBtn,
  'X': xBtn,
  'C': cBtn
};

function playSound(btn){
  // const audioSource = btn.querySelector('audio').getAttribute('src')
  // audio.src = audioSource;
  // audio.play()
  const displayName = btn.getAttribute('data-name')
  display.innerText = displayName;
  const audioSource = btn.querySelector('audio')
  audioSource.pause(); // Pauses the audio at its current time. Allows rapid clicking
  audioSource.currentTime = 0;
  audioSource.play()
}

//keyboard actions
document.addEventListener('keydown', (e) => {
  if (e.repeat) return; // ignore held keys
  const button = keyMap[e.key.toUpperCase()];
  if (button) {
    button.classList.add('active');
    playSound(button);
  }
});
document.addEventListener('keyup', (e) => {
  const button = keyMap[e.key.toUpperCase()];
  if (button) {
    button.classList.remove('active');
  }
});

//mouse actions
drumpad.forEach(pad => {
  pad.addEventListener("click", (e) => {
    const targetBtnTxt = e.target.textContent.trim().toUpperCase();
    playSound(keyMap[targetBtnTxt]);
  })
  
  
});
