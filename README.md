# Work Day Scheduler Starter Code
## User Story
`AS AN` employee with a busy schedule <br>
`I WANT` to add important events to a daily planner <br>
`SO THAT` I can manage my time effectively <br>

## Acceptance Criteria 
`GIVEN` I am using a daily planner to create a schedule<br>
`WHEN` I open the planner<br>
`THEN` the current day is displayed at the top of the calendar<br>
`WHEN` I scroll down<br>
`THEN` I am presented with time blocks for standard business hours of 9am to 5pm<br>
`WHEN` I view the time blocks for that day<br>
`THEN` each time block is color-coded to indicate whether it is in the past, present, or future<br>
`WHEN` I click into a time block<br>
`THEN` I can enter an event<br>
`WHEN` I click the save button for that time block<br>
`THEN` the text for that event is saved in local storage<br>
`WHEN` I refresh the page<br>
`THEN` the saved events persist<br>

## Overview 
The goal of this project is to create a calendar application that allows users to save events for each hour of a typical working day (9am-5pm). The application retrieves current day from Day.js, and saves new events to Local Storage. Past, Present, and Future hours are color coded to help user quickly identify upcoming events. 

![app image](assets/images/readme-img.png)

## Technologies Used 
* [Day.js](https://day.js.org/)
* [jQuery](https://jquery.com/)
* localStorage

## Deployment
I have deployed my Work Day Scheduler on the web to make it live and accessible. You can view and create your own schedules by following this link: [Work Day Scheduler](https://briimcfly.github.io/jquery-scheduler/)

## Reflection 
This project has allowed me to apply the core skills I have recently learned and put them into practice. During development, I had the opportunity to deepen my understanding interacting with server side APIs, jQuery, and working with localStorage. Additionally, I developed a deeper appreciation for for the importance code commenting, and the development principal DRY. (Don't repeat yourself). In the future, I would like to add alerts to show the user that they have saved an entry. I would also like to experiment with a way to allow users to select a specific day, so they can see past and future day events. 