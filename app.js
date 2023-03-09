const   loginButton = document.querySelector(".loginIn"), 
        loginBox = document.querySelector(".loginInBox"),
        icon = document.querySelector("#icon__volume"),
        range = document.querySelector(".player__volumeValue"),
        playBtn = document.querySelector(".song__icons-play"),
        pauseBtn = document.querySelector(".song__icons-pause"),
        audio = document.querySelector(".song__n1"),
        songLength = document.getElementById("SongLength"),
        currentTime = document.getElementById("CurrentSongTime"),
        playPause = document.getElementById("PlayPause")

const calculateTime = (secs) =>{
    const minutes = Math.floor(secs / 60),
        seconds = Math.floor(secs % 60),
        returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

        return `${minutes}:${returnedSeconds}`
}

if(audio.readyStats > 0){
    displayDuration()
    currentTime.innerHTML = calculateTime(audio.currentTime)
}else{
    audio.addEventListener("loadedmetadata", () =>{
        displayDuration();
    })
}

audio.ontimeupdate = function(){
    currentTime.innerHTML = calculateTime(audio.currentTime);
    setProgress();
}

function setProgress() {
    let porcentage = (audio.currentTime / audio.duration) * 100;
    document.querySelector('.progress').style.width = porcentaje + '%';
}


const displayDuration = () =>{
    songLength.innerHTML = calculateTime(audio.duration)
}
displayDuration()
//Audio Controls





function loginBoxActive() {
    loginBox.classList.toggle("loginInBox__Active")
}

loginButton.addEventListener('click', loginBoxActive)

playBtn.addEventListener("click", () =>{
    if(audio.pause){
        audio.play()
        playBtn.classList.replace("show", "hide")
        pauseBtn.classList.replace("hide", "show")
    }else{
        audio.pause()
        playBtn.classList.replace("hide", "show")
        pauseBtn.classList.replace("show", "hide")
    }
})
pauseBtn.addEventListener("click", () =>{
    if(audio.play){
        audio.pause()
        playBtn.classList.replace("hide", "show")
        pauseBtn.classList.replace("show", "hide")
    }
    else{
        audio.play()
        playBtn.classList.replace("show", "hide")
        pauseBtn.classList.replace("hide", "show")
    }
})