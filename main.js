var newActivityView = document.querySelector('.new-activity-view');
var studyButton = document.querySelector('.study-button-label');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var accomplishInput = document.querySelector('#accomplish-input');
var minutesInput = document.querySelector('#minutes-input');
var secondsInput = document.querySelector('#seconds-input');
var startActivityButton = document.querySelector('.start-activity-button');
var noActivitiesLogged = document.querySelector('#no-activies-logged');
var studyImage = document.querySelector('#study-img');
var categoryWarning = document.querySelector('.category-warning');
var accomplishWarning = document.querySelector('.accomplish-warning');
var timeWarning = document.querySelector('.time-warning');

//Event Listeners
studyButton.addEventListener('click', clickStudyButton);
meditateButton.addEventListener('click', clickMeditateButton);
exerciseButton.addEventListener('click', clickExerciseButton);
startActivityButton.addEventListener('click', validateForm);

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

function clickStudyButton() {
  clearExerciseButton();
  clearMeditateButton();
  studyButton.classList.remove('btn')
  studyButton.classList.add('study-btn-clicked')
  giveStudyButtonValue();
  document.getElementById('study-img').src = './assets/study-active.svg';
}

function clickMeditateButton() {
  clearStudyButton()
  clearExerciseButton();
  meditateButton.classList.remove('btn')
  meditateButton.classList.add('meditate-btn-clicked')
  giveMeditateButtonValue();
  document.getElementById('meditate-img').src = './assets/meditate-active.svg';
}

function clickExerciseButton() {
  clearStudyButton();
  clearMeditateButton();
  exerciseButton.classList.remove('btn')
  exerciseButton.classList.add('exercise-btn-clicked')
  giveExerciseButtonValue();
  document.getElementById('exercise-img').src = './assets/exercise-active.svg';
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

function giveStudyButtonValue() {
  studyButton.value = 'study';
  meditateButton.value = '';
  exerciseButton.value = '';
}

function giveMeditateButtonValue() {
  studyButton.value = '';
  meditateButton.value = 'meditate';
  exerciseButton.value = '';
}

function giveExerciseButtonValue() {
  studyButton.value = '';
  meditateButton.value = '';
  exerciseButton.value = 'exercise';
}

function validateForm(event) {
  event.preventDefault();
  validateDescriptionInput();
  validateDescriptionInput();
  validateMinutes();
  validateSeconds();
  if (checkIfAllValid()) {
    console.log('This is where we would fire the function to create a class and start the timer');
  }
}

function validateCategoryButtons() {
  if (!exerciseButton.value === 'exercise' &&
    !meditateButton.value === 'meditate' &&
    !studyButton.value === 'study') {
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
  if (exerciseButton.value === 'exercise' ||
    meditateButton.value === 'meditate' ||
    studyButton.value === 'study' &&
    accomplishInput.value != '' &&
    typeof minutesInput.value == 'number' &&
    typeof secondsInput.value == 'number') {
      return true;
    }
  return false;
}
