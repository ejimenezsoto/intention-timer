# Intention Timer

## Overview

This app is a useful tool for timing your favorite activities whether that be study, meditative or exercise. Just choose your activity, set a goal, tell the app how long you want to go for and hit start. You can view the application [here](file:///Users/chaddegange/turing/module_1/projects/intention-timer/index.html).

## How Does It Work?

1) When the page loads, the user is presented with a New Activity header. Below that are 3 category buttons with hover states informing the user that they are clickable elements on the page. Below that is a user input field, fillable for setting a user defined goal. Lastly, there are a minutes and seconds input that again is user defined, accepts only 2 digits as well as limits the user to inputing no more than 60 seconds. At the bottom right, a Start Activity button is disabled until all fields above have been properly completed. If any fields are not properly completed, an error message pops up to guide the user to a correction.

<img width="1440" alt="Screen Shot 2021-11-08 at 6 04 57 PM" src="https://user-images.githubusercontent.com/65195952/140842781-43cc9058-b552-44d4-bbe7-33cbe27bfaec.png">


2) When the user clicks the Start Activity button, they are taken to a timer view allowing them to hit a Start button and begin the activity. The button has a border color corresponding to the activity category they chose in the home view. Past activities are viewable on the right side of the screen.

<img width="1440" alt="Screen Shot 2021-11-08 at 5 58 44 PM" src="https://user-images.githubusercontent.com/65195952/140842254-9a649dd7-46b0-4a57-882a-f9c5d2bec268.png">

<img width="1440" alt="Screen Shot 2021-11-08 at 5 58 59 PM" src="https://user-images.githubusercontent.com/65195952/140842261-e2243fae-fe88-4735-a9af-82a47d44b345.png">

3) When the user clicks the Start button, the time countdown begins. The Start button is disabled once it has been pressed.

<img width="1440" alt="Screen Shot 2021-11-08 at 6 06 08 PM" src="https://user-images.githubusercontent.com/65195952/140842882-8750875c-b537-4202-9ea7-420b246b6fc7.png">

4) When the timer finishes, the Start button displays a Complete message to the user and a Log Activity button is displayed.

<img width="1440" alt="Screen Shot 2021-11-08 at 6 11 51 PM" src="https://user-images.githubusercontent.com/65195952/140843385-ff2b4c83-e734-42f4-a5bd-e713ef1af44f.png">

5) When Log Activity is pressed, the activity details are added to the Past Activities log on the right side of the page and a new view is displayed with a Create A New Activity button.

<img width="1440" alt="Screen Shot 2021-11-08 at 6 12 53 PM" src="https://user-images.githubusercontent.com/65195952/140843475-b70dacc5-6aeb-4e17-8f5d-373331279f7f.png">

6) Pressing the Create A New Activity button returns the user to the home view ready to select a new activity and now displaying the previously completed activity on the right side of the page under Past Activities.

<img width="1440" alt="Screen Shot 2021-11-08 at 6 13 46 PM" src="https://user-images.githubusercontent.com/65195952/140843566-ba53ffcb-dcc4-43d3-9825-bda0cf0058f7.png">

7) Past activities are logged on the right with handy color references that correspond to the category button used to create it. This data is stored locally and displayed upon page load.

<img width="1440" alt="Screen Shot 2021-11-08 at 6 16 25 PM" src="https://user-images.githubusercontent.com/65195952/140843814-61f8c8f2-4fba-4ea8-8a54-8321b046fe89.png">

8) If the user does not copmlete any of the fields, an error message will appear and the user cannot proceed further.

<img width="1440" alt="Screen Shot 2021-11-08 at 6 16 59 PM" src="https://user-images.githubusercontent.com/65195952/140843850-3e0a8dc6-2aae-4699-8f20-16a0e9270713.png">

## Contributors

- Turing School of Software & Design Front-End Students
   - Phil Lewis
   - Enzo Jimenez-Soto
   - Chad DeGange

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
