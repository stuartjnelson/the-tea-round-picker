# The Tea Round Picker

## Setup Locally
1. Install dependancies `yarn install`
2. `yarn serve` to run the project


## Overview
I created a very basic functional app using Vue.js This allows you to add users, remove users and randomly choose someone to make the round of drinks. The user data is stored in local storage so the state is persisted in your browser. I didn't make time to really add *glitter* to the interface but there are a few very basic transitions in there.


## Improvements I'd like to make

* Loading of picking users
    * I'd like to create an accessible loading animation using a live region (more info on this see [my Medium article](https://codeburst.io/how-to-create-a-simple-css-loading-spinner-make-it-accessible-e5c83c2e464c)). Ideally I was going to create a whell of fortune style spinner wheel that spins and "chooses" a user
* Design
    * Is very much lacking... I went for functionality over form. I spent 2:20 on this challenge.
* Tea Maker
    * The section that reveals the tea maker could have some graphics. I'd like to add in a leader board too.
* Ability to take orders
    * After someone has been choosen it would be cool to be able to take the order for the round using the app. Then intergrate this into Slack.
