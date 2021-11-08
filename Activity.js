class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }
  countdown(minutes, seconds) {
    var timer = setInterval(function(){
      if (seconds > 0) {
        seconds -= 1;
      } else if (minutes > 0) {
        seconds += 59;
        minutes -= 1;
      } else {
        clearInterval(timer);
        time.innerText = '00:00';
        startTimerButton.innerText = 'COMPLETE!'
        logActivityButton.classList.remove('hidden');
      };
      if(minutes < 10 && seconds < 10){
       time.innerText = `0${minutes}:0${seconds}`
      } else if(minutes > 10 && seconds > 10){
        time.innerText = `${minutes}:${seconds}`
      } else if(minutes < 10 && seconds > 10){
        time.innerText = `0${minutes}:${seconds}`
      } else if(minutes > 10 && seconds < 10){
        time.innerText = `${minutes}:0${seconds}`
      }
    }, 1000);
  }
  markComplete() {
    this.completed = true;
  }
  saveToStorage() {
    localStorage.setItem('activity', JSON.stringify(savedActivities));
  }
}