# Intention Timer

## Overview

This app is a useful tool for timing your favorite activities whether that be study, meditative or exercise. Just choose your activity, set a goal, tell the app how long you want to go for and hit start. You can view the application [here](file:///Users/chaddegange/turing/module_1/projects/intention-timer/index.html).

## How Does It Work?

1) When the page loads, the user is presented with a New Activity header. Below that are 3 category buttons with hover states informing the user that they are clickable elements on the page. Below that is a user input field, fillable for setting a user defined goal. Lastly, there are a minutes and seconds input that again is user defined, accepts only 2 digits as well as limits the user to inputing no more than 60 seconds. At the bottom right, a Start Activity button is disabled until all fields above have been properly completed. If any fields are not properly completed, an error message pops up to guide the user to a correction.
![Screen Shot 2021-11-08 at 2 33 39 PM] src = (https://user-images.githubusercontent.com/41452531/140830441-2aa31ea4-ce55-4107-a99c-6278c01d02b5.png)

2) When the user clicks the Start Activity button, they are taken to a timer view allowing them to hit a Start button and begin the activity. The button has a border color corresponding to the activity category they chose in the home view. Past activities are viewable on the right side of the screen.

![Screen Shot 2021-11-08 at 2 34 29 PM] src = (https://user-images.githubusercontent.com/41452531/140830751-ba93fde7-667d-4737-96a0-5be3a2bcc781.png)


3) When the user clicks the Start button, the time countdown begins. The Start button is disabled once it has been pressed.

![Screen Shot 2021-11-08 at 2 34 45 PM] src = (https://user-images.githubusercontent.com/41452531/140830547-a2c82e6c-5af5-40af-8c1b-93db4cea8bd1.png)

4) When the timer finishes, the Start button displays a Complete message to the user and a Log Activity button is displayed.

![Screen Shot 2021-11-08 at 2 35 38 PM] src = (https://user-images.githubusercontent.com/41452531/140831100-81261f34-a12e-4dc2-96df-18e6d97bad79.png)

5) When Log Activity is pressed, the activity details are added to the Past Activities log on the right side of the page and a new view is displayed with a Create A New Activity button.

![Screen Shot 2021-11-08 at 2 35 49 PM] src = (https://user-images.githubusercontent.com/41452531/140831306-23f1b55f-41c6-4934-bd7b-8045348dc7f8.png)>

6) Pressing the Create A New Activity button returns the user to the home view ready to select a new activity and now displaying the previously completed activity on the right side of the page under Past Activities.

![Screen Shot 2021-11-08 at 2 35 58 PM] src = (https://user-images.githubusercontent.com/41452531/140831466-d05bac0c-369d-4921-a1ac-be08c99c1800.png)


## Contributors

- Turing School of Software & Design Front-End Students
   - Phil Lewis, Enzo Jimenez-Soto, Chad DeGange

## Future Feature Additions

- Expand/Collapse Reflection allowing user to reflect on activity.
- Favorite and Activity and ability to repeat it.
- Ability to pause and resume the timer before completion.
- Animate the timer in a way that communicates remaining time.

## Technologies Used

-HTML, CSS, Javascript

The spec for this project can be found [here](https://frontend.turing.edu/projects/module-1/intention-timer-group.html).

## Installation Instructions

- Fork this project to your own Github account
- Clone the repository to your local machine
- `cd` into the project
- Run open `index.html` to see the app
