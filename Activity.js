class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
  }
  countdown() {
    setInterval(function() {
} else if (this.seconds > 0) {
this.seconds--;
} else if (this.minutes > 1) {
	this.minutes--;
	this.seconds += 59;
} else {clearInterval()}
time.innerText = `${this.minutes}:${this.seconds}`;
), 1000}
  markComplete() {

  }
  saveToStorage() {

  }
}

// module.exports = Activity;
