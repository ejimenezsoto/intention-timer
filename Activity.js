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
    setInterval(function(){
      console.log(this.seconds)
      if (seconds > 0) {
        seconds -= 1;
      } else if (minutes > 0) {
        seconds += 59;
        minutes -= 1;
      } else {clearInterval(function() {
        time.innerText = '00:00';
        startTimerButton.innerText = 'COMPLETE!'
      })};
      time.innerText = `${minutes}:${seconds}`;
    }, 1000);
}
  markComplete() {

  }
  saveToStorage() {

  }
}

// module.exports = Activity;
