var newActivityView = document.querySelector('.new-activity-view');
var studyButton = document.querySelector('.study-button-label');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var accomplishInput = document.querySelector('#accomplish-input');
var minutesInput = document.querySelector('#minutes-input');
var secondsInput = document.querySelector('#seconds-input');
var startActivityButton = document.querySelector('#start-activity-button');
var noActivitiesLogged = document.querySelector('#start-activity-button');
var studyImage = document.querySelector('#study-img');
var invalidCharacters = ['-', '+', 'e'];


var pastActivities= [];


//Event Listeners
studyButton.addEventListener('click', clickStudyButton);
meditateButton.addEventListener('click', clickMeditateButton);
exerciseButton.addEventListener('click', clickExerciseButton);
minutesInput.addEventListener('keydown', function(e) { if(invalidCharacters.includes(e.key)) {
e.preventDefault();
}});
secondsInput.addEventListener('keydown', function(e) { if(invalidCharacters.includes(e.key)) {
e.preventDefault();
}});
startActivityButton.addEventListener('click', submitForm);



function clickStudyButton() {
  clearExerciseButton();
  clearMeditateButton();
  studyButton.classList.remove('btn')
  studyButton.classList.add('study-btn-clicked')
  document.getElementById('study-img').src = './assets/study-active.svg';
}

function clickMeditateButton() {
  clearStudyButton()
  clearExerciseButton();
  meditateButton.classList.remove('btn')
  meditateButton.classList.add('meditate-btn-clicked')
  document.getElementById('meditate-img').src = './assets/meditate-active.svg';
}

function clickExerciseButton() {
  clearStudyButton();
  clearMeditateButton();
  exerciseButton.classList.remove('btn')
  exerciseButton.classList.add('exercise-btn-clicked')
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

function submitForm() {
  event.preventDefault();
  if(document.getElementById('study-button').clicked === true) {
    alert('Study button clicked');
  }


}
