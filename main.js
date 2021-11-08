var newActivityForm = document.querySelector('.new-activity-form');
var studyButton = document.querySelector('.study-button-label');
var studyRadioButton = document.getElementById("studyButton")
var meditateButton = document.querySelector('.meditate-button');
var meditateRadioButton = document.getElementById("meditateButton");
var exerciseButton = document.querySelector('.exercise-button');
var exerciseRadioButton = document.getElementById("exerciseButton");
var accomplishInput = document.querySelector('#accomplish-input');
var minutesInput = document.querySelector('#minutesInput');
var secondsInput = document.querySelector('#secondsInput');
var startActivityButton = document.querySelector('.start-activity-button');
var noActivitiesLogged = document.querySelector('.no-activies-logged');
var studyImage = document.querySelector('#study-img');
var categoryWarning = document.querySelector('.category-warning');
var accomplishWarning = document.querySelector('.accomplish-warning');
var timeWarning = document.querySelector('.time-warning');
var startTimerButton = document.querySelector('.start-timer-button');
var timerView = document.querySelector('.time-view');
var logActivityButton = document.querySelector(".log-activity-button")
var pastActivityLog = document.querySelector(".past-activity-log");
var createNewActivityButton = document.querySelector('.create-new-activity-button')
var minutesWarning = document.querySelector('.warning-label');
var timerViewHeader = document.querySelector('.timer-view-header');
var time = document.querySelector('.time');
var invalidCharacters = ['-', '+', 'e'];
var savedActivities = [];
var activity = {};

//Event Listeners
studyButton.addEventListener('click', clickStudyButton);
meditateButton.addEventListener('click', clickMeditateButton);
exerciseButton.addEventListener('click', clickExerciseButton);
startActivityButton.addEventListener('click', validateForm);
logActivityButton.addEventListener('click', clickLogActivityButton);
minutesInput.addEventListener('keydown', function(e) { if(invalidCharacters.includes(e.key)) {
  e.preventDefault();
  }});
secondsInput.addEventListener('keydown', function(e) { if(invalidCharacters.includes(e.key)) {
  e.preventDefault();
  }});
startTimerButton.addEventListener('click', startCountdown);
window.onload = function(){
  var parsedActivities = JSON.parse(localStorage.getItem('activity'));
  if(parsedActivities.length > 0) {
    noActivitiesLogged.classList.add('hidden');
  }
  for(var i=0; i<parsedActivities.length; i++) {
    savedActivities = parsedActivities;
    var currentActivity = parsedActivities[i];
    var categoryColor = '';
    if(parsedActivities[i].category === "Study") {
      categoryColor = 'study-color';
      changeColor(currentActivity, categoryColor);
    } else if(parsedActivities[i].category === "Meditate") {
      categoryColor = 'meditate-color';
      changeColor(currentActivity, categoryColor);
    } else if(parsedActivities[i].category === "Exercise") {
      categoryColor = 'exercise-color';
      changeColor(currentActivity, categoryColor);
    }
  }
}

function hide(element) {
  element.classList.add('visibility-hidden');
}

function show(element) {
  element.classList.remove('visibility-hidden');
}

function clickStudyButton() {
  clearExerciseButton();
  clearMeditateButton();
  studyButton.classList.add('study-btn-clicked');
  document.getElementById('study-img').src = './assets/study-active.svg';
  startTimerButton.classList.add('active-study-timer');
}

function clickMeditateButton() {
  clearStudyButton()
  clearExerciseButton();
  meditateButton.classList.add('meditate-btn-clicked')
  document.getElementById('meditate-img').src = './assets/meditate-active.svg';
  startTimerButton.classList.add('active-meditate-timer');
}

function clickExerciseButton() {
  clearStudyButton();
  clearMeditateButton();
  exerciseButton.classList.add('exercise-btn-clicked')
  document.getElementById('exercise-img').src = './assets/exercise-active.svg';
  startTimerButton.classList.add('active-exercise-timer');
}

function clearStudyButton() {
  studyButton.classList.remove('study-btn-clicked')
  document.getElementById('study-img').src = './assets/study.svg';
}

function clearMeditateButton() {
  meditateButton.classList.remove('meditate-btn-clicked')
  document.getElementById('meditate-img').src = './assets/meditate.svg';
}

function clearExerciseButton() {
  exerciseButton.classList.remove('exercise-btn-clicked')
  document.getElementById('exercise-img').src = './assets/exercise.svg';
}


function whichOneIsClicked(){
  if(studyRadioButton.checked){
    return studyRadioButton.value
  } else if(meditateRadioButton.checked){
    return meditateRadioButton.value
  } else if(exerciseRadioButton.checked) {
    return exerciseRadioButton.value
  }
}

function validateForm(event) {
  event.preventDefault();
  validateDescriptionInput();
  validateCategoryButtons()
  validateMinutes();
  validateSeconds();
  if (checkIfAllValid()) {
    whichOneIsClicked();
    createActivity();
    changeView();
  }
}

function validateCategoryButtons() {
  if (!exerciseRadioButton.checked &&
    !meditateRadioButton.checked &&
    !studyRadioButton.checked) {
    show(categoryWarning);
  }
}

function validateDescriptionInput() {
  if (accomplishInput.value === '') {
    show(accomplishWarning);
  }
}

function validateMinutes() {
  if (minutesInput.value === '') {
    show(timeWarning);
  }
}

function validateSeconds() {
  if (secondsInput.value === '' || secondsInput.value > 60) {
    show(timeWarning);
  }
}

function clearWarnings() {
  hide(categoryWarning);
  hide(accomplishWarning);
  hide(timeWarning);
}

function checkIfAllValid() {
  if (exerciseRadioButton.checked ||
    meditateRadioButton.checked ||
    studyRadioButton.checked &&
    accomplishInput.value != '' &&
    secondsInput.value <=60 &&
    minutesInput.value !== '' &&
    secondsInput.value !== '') {
      return true;
    }
  return false;
}

function createActivity() {
  activity = new Activity(whichOneIsClicked(), accomplishInput.value, minutesInput.value, secondsInput.value);
  updateTimer(activity);
}

function changeView() {
timerView.classList.remove('hidden');
newActivityForm.classList.add('hidden');
}

function updateTimer() {
  timerViewHeader.innerText = `${accomplishInput.value}`;
  time.innerText = `${minutesInput.value.padStart(2, "0")}:${secondsInput.value.padStart(2, "0")}`;
}

function startCountdown() {
  activity.countdown(minutesInput.value, secondsInput.value);
  startTimerButton.disabled = true;
}

function clickLogActivityButton() {
  activity.markComplete();
  savedActivities.push(activity);
  activity.saveToStorage();
  noActivitiesLogged.classList.add('hidden');
  var parsedActivities = JSON.parse(localStorage.getItem('activity'));
  pastActivityLog.innerHTML = ""
  for(var i=0; i<parsedActivities.length; i++) {
    var currentActivity = parsedActivities[i];
    var categoryColor = '';
    if(parsedActivities[i].category === "Study") {
      categoryColor = 'study-color';
      changeColor(currentActivity, categoryColor);
    } else if(parsedActivities[i].category === "Meditate") {
      categoryColor = 'meditate-color';
      changeColor(currentActivity, categoryColor);
    } else if(parsedActivities[i].category === "Exercise") {
      categoryColor = 'exercise-color';
      changeColor(currentActivity, categoryColor);
    }
  }
  timerView.classList.add('hidden');
  createNewActivityButton.classList.remove('hidden');
}

function changeColor(currentActivity, categoryColor) {
  return pastActivityLog.innerHTML += `
  <div>
      <div class="past-activity-card">
        <div>
          <p class="past-activity-title">${currentActivity.category}</p>
          <p class="past-activity-time">${currentActivity.minutes.padStart(2, "0")}:${currentActivity.seconds.padStart(2, "0")}</p>
          <p class="past-activity-description">${currentActivity.description}</p>
        </div>
        <div class="${categoryColor}">
        </div>
      </div>
  </div>
`
}