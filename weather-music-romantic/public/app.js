let audio = null;

async function getWeatherAndPlay() {
  const location = "rewa, madhya pradesh";
  const apiKey = "5a993672c9c7d190f1ef2784647c32cb";
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`;

  const weatherDiv = document.getElementById("weather");
  weatherDiv.innerText = "🔄 Loading weather data...";

  try {
    const response = await fetch(url);
    const result = await response.json();

    const desc = result.current.weather_descriptions[0].toLowerCase();
    const temp = result.current.temperature;
    const place = `${result.location.name}, ${result.location.region}`;

    let loveNote = "❤️";
    let musicFile = "music/default.mp3";
    document.body.className = "";

    if (desc.includes("sunny") || desc.includes("clear")) {
      musicFile =
        "https://github.com/Ajay8659/AjayCoder/raw/refs/heads/main/Music/Dil%20Meri%20Na%20Sune%20Lyrical%20-%20Genius%20_%20Utkarsh%20Sharma_%20Ishita%20_%20Atif%20Aslam%20_%20Himesh%20Reshammiya(MP3_160K).mp3";
      loveNote = "☀️ Sunny like your smile!";
      document.body.className = "sunny";
    } else if (desc.includes("rain") || desc.includes("Mist")) {
      musicFile =
        "https://github.com/Ajay8659/AjayCoder/raw/refs/heads/main/Music/Baarish%20Aayi%20Hai%20(Video)%20Javed-Mohsin%20_%20Stebin%20Ben_%20Shreya%20Ghoshal%20_%20Karan%20K_%20Tejasswi%20P%20_%20Kunaal%20V(MP3_160K).mp3";
      loveNote = "🌧️ Rainy days, perfect for cuddles!";
      document.body.className = "rain";
    } else if (desc.includes("cloudy") || desc.includes("overcast")) {
      musicFile =
        "https://github.com/Ajay8659/AjayCoder/raw/refs/heads/main/Music/Dil%20Se%20Sun%20Piya%20Ye%20Dil%20Ki%20Daastaan%20Full%20Song%20with%20Lyrics_%20Yasser%20Desai_%20Gold(MP3_160K).mp3";
      loveNote = "☁️ Even clouds can’t hide your shine!";
      document.body.className = "cloudy";
    }

    weatherDiv.innerHTML = `
      📍 Location: ${place} <br>
      🌡️ Temperature: ${temp}°C <br>
      ☁️ Weather: ${desc} <br><br>
      ${loveNote}
    `;

    audio = new Audio(musicFile);
    await audio.play();
    document.getElementById("toggleBtn").style.display = "inline-block";
    confetti();
  } catch (err) {
    console.error("❌ Error:", err);
    weatherDiv.innerText = "⚠️ Failed to load weather/music.";
  }
}

document.getElementById("toggleBtn").addEventListener("click", function () {
  if (!audio) return;

  if (audio.paused) {
    audio.play();
    this.innerText = "⏸️ Pause Music";
  } else {
    audio.pause();
    this.innerText = "▶️ Play Music";
  }
});


document.getElementById("startBtn").addEventListener("click", function () {
  this.disabled = true;
  getWeatherAndPlay();
});

document.getElementById("hugBtn").addEventListener("click", function () {
  const msg = new SpeechSynthesisUtterance(
    "I love you, sending you a warm hug"
  );
  window.speechSynthesis.speak(msg);
});
