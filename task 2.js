let timer = false;
let startTime = 0;
let elapsed = 0;
let interval;

function startStop() {
  const btn = document.getElementById("startBtn");
  if (!timer) {
    timer = true;
    startTime = Date.now() - elapsed;
    interval = setInterval(updateTime, 200); 
    btn.innerText = "Pause";
    btn.style.background = "linear-gradient(45deg, #00b09b, #96c93d)";
  } else {
    timer = false;
    clearInterval(interval);
    elapsed = Date.now() - startTime;
    btn.innerText = "Start";
    btn.style.background = "linear-gradient(45deg, #ff416c, #ff4b2b)";
  }
}

function updateTime() {
  elapsed = Date.now() - startTime;
  
  let totalSeconds = Math.floor(elapsed / 1000);
  let h = Math.floor(totalSeconds / 3600);
  let m = Math.floor((totalSeconds % 3600) / 60);
  let s = totalSeconds % 60;

  document.getElementById("display").innerText =
    `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function resetWatch() {
  timer = false;
  clearInterval(interval);
  elapsed = 0;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  const btn = document.getElementById("startBtn");
  btn.innerText = "Start";
  btn.style.background = "linear-gradient(45deg, #ff416c, #ff4b2b)";
}

function lapTime() {
  if (timer) {
    let lap = document.getElementById("display").innerText;
    let li = document.createElement("li");
    li.innerText = `Lap: ${lap}`;
    document.getElementById("laps").appendChild(li);
  }
}
