var newActivityForm = document.querySelector('.new-activity-form');
var studyButton = document.querySelector('.study-button-label');
var studyRadioButton = document.getElementById("study-button")
var meditateButton = document.querySelector('.meditate-button');
var meditateRadioButton = document.getElementById("meditate-button");
var exerciseButton = document.querySelector('.exercise-button');
var exerciseRadioButton = document.getElementById("exercise-button");
var accomplishInput = document.querySelector('#accomplish-input');
var minutesInput = document.querySelector('#minutes-input');
var secondsInput = document.querySelector('#seconds-input');
var startActivityButton = document.querySelector('.start-activity-button');
var noActivitiesLogged = document.querySelector('#no-activies-logged');
var studyImage = document.querySelector('#study-img');
var categoryWarning = document.querySelector('.category-warning');
var accomplishWarning = document.querySelector('.accomplish-warning');
var timeWarning = document.querySelector('.time-warning');
var startTimerButton = document.querySelector('.start-timer-button');
var timerView = document.querySelector('.time-view');
var invalidCharacters = ['-', '+', 'e'];
var activities = [];
var activity = {};

var timerViewHeader = document.querySelector('.timer-view-header');
var time = document.querySelector('.time');


//Event Listeners
studyButton.addEventListener('click', clickStudyButton);
meditateButton.addEventListener('click', clickMeditateButton);
exerciseButton.addEventListener('click', clickExerciseButton);
startActivityButton.addEventListener('click', validateForm);
minutesInput.addEventListener('keydown', function(e) { if(invalidCharacters.includes(e.key)) {
  e.preventDefault();
  }});
secondsInput.addEventListener('keydown', function(e) { if(invalidCharacters.includes(e.key)) {
  e.preventDefault();
  }});

startTimerButton.addEventListener('click', startCountdown);

function hide(element) {
  element.classList.add('visibility-hidden');
}

function show(element) {
  console.log(element)
  element.classList.remove('visibility-hidden');
}

function clickStudyButton() {
  clearExerciseButton();
  clearMeditateButton();
  studyButton.classList.remove('btn')
  studyButton.classList.add('study-btn-clicked')
  document.getElementById('study-img').src = './assets/study-active.svg';
  startTimerButton.classList.add('active-study-timer');
}

function clickMeditateButton() {
  clearStudyButton()
  clearExerciseButton();
  meditateButton.classList.remove('btn')
  meditateButton.classList.add('meditate-btn-clicked')
  document.getElementById('meditate-img').src = './assets/meditate-active.svg';
  startTimerButton.classList.add('active-meditate-timer');
}

function clickExerciseButton() {
  clearStudyButton();
  clearMeditateButton();
  exerciseButton.classList.remove('btn')
  exerciseButton.classList.add('exercise-btn-clicked')
  document.getElementById('exercise-img').src = './assets/exercise-active.svg';
  startTimerButton.classList.add('active-exercise-timer');
}

function clearStudyButton() {
  studyButton.classList.add('btn')
  studyButton.classList.remove('study-btn-clicked')
  document.getElementById('study-img').src = './assets/study.svg';
}

function clearMeditateButton() {
  meditateButton.classList.add('btn')
  meditateButton.classList.remove('meditate-btn-clicked')
  document.getElementById('meditate-img').src = './assets/meditate.svg';
}

function clearExerciseButton() {
  exerciseButton.classList.add('btn')
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
    // console.log("click")
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
  if (secondsInput.value === '') {
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
    accomplishInput.value != '') {
      return true;
    }
  return false;
}

function createActivity() {
  activity = new Activity(whichOneIsClicked(), accomplishInput.value, minutesInput.value, secondsInput.value);
  activities.push(activity);
  updateTimer(activity);
}

function changeView() {
timerView.classList.remove('hidden');
newActivityForm.classList.add('hidden');
}

function updateTimer() {
  timerViewHeader.innerText = `${accomplishInput.value}`;
  time.innerText = `${minutesInput.value}:${secondsInput.value}`;
}

function startCountdown() {
  activities[activities.length - 1].countdown(minutesInput.value, secondsInput.value);
}
