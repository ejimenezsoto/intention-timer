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
var logActivityButton = document.querySelector(".log-activity-button")
var pastActivityLog = document.querySelector(".past-activity-log");
var createNewActivityButton = document.querySelector('.create-new-activity-button')
var minutesWarning = document.querySelector('.warning-label');
var invalidCharacters = ['-', '+', 'e'];
var newActivitiy = [];
var savedActivities = [];
var activity = {};


var timerViewHeader = document.querySelector('.timer-view-header');
var time = document.querySelector('.time');


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
  console.log(parsedActivities)
  for(var i=0; i<parsedActivities.length; i++) {
    savedActivities = parsedActivities
    var activity1 = parsedActivities[i];
    if(parsedActivities[i].category === "study") {
      changeStudyColor(activity1);
    } else if(parsedActivities[i].category === "meditate") {
      changeMeditateColor(activity1);
    } else if(parsedActivities[i].category === "exercise") {
      changeExerciseColor(activity1);
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
  newActivitiy.push(activity);
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

  savedActivities.push(newActivitiy[0]);
  console.log(savedActivities)
  localStorage.setItem('activity', JSON.stringify(savedActivities));
  var parsedActivities = JSON.parse(localStorage.getItem('activity'));
  pastActivityLog.innerHTML = ""
  for(var i=0; i<parsedActivities.length; i++) {
    var activity1 = parsedActivities[i];
    if(parsedActivities[i].category === "study") {
      changeStudyColor(activity1);
    } else if(parsedActivities[i].category === "meditate") {
      changeMeditateColor(activity1);
    } else if(parsedActivities[i].category === "exercise") {
      changeExerciseColor(activity1);
    }

  }
  timerView.classList.add('hidden');
  createNewActivityButton.classList.remove('hidden');

  }

  function changeStudyColor(activity1) {
    return pastActivityLog.innerHTML += `
    <div>
        <div class="past-activity-card">
          <div>
            <p class="past-activity-title">${activity1.category}</p>
            <p class="past-activity-time">${activity1.minutes.padStart(2, "0")}:${activity1.seconds.padStart(2, "0")}</p>
            <p class="past-activity-description">${activity1.description}</p>
          </div>
          <div class="study-color">
          </div>
        </div>
    </div>
  `
  }

  function changeMeditateColor(activity1) {
    return pastActivityLog.innerHTML += `
    <div>
        <div class="past-activity-card">
          <div>
            <p class="past-activity-title">${activity1.category}</p>
            <p class="past-activity-time">${activity1.minutes.padStart(2, "0")}:${activity1.seconds.padStart(2, "0")}</p>
            <p class="past-activity-description">${activity1.description}</p>
          </div>
          <div class="meditate-color">
          </div>
        </div>
    </div>
  `
  }

  function changeExerciseColor(activity1) {
    return pastActivityLog.innerHTML += `
    <div>
        <div class="past-activity-card">
          <div>
            <p class="past-activity-title">${activity1.category}</p>
            <p class="past-activity-time">${activity1.minutes.padStart(2, "0")}:${activity1.seconds.padStart(2, "0")}</p>
            <p class="past-activity-description">${activity1.description}</p>
          </div>
          <div class="exercise-color">
          </div>
        </div>
    </div>
  `
  }
