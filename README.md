# Homework: Task manager

# Introduction

- In the next couple of weeks, your main task will be to create a simple task management application (similar to Jira).

## User Story

- From now on, your assignments are going to be in the form of user stories.
- What is user story? In short, user story is a general explanation of a feature from the perspective of the end user.
- For more info: https://www.atlassian.com/agile/project-management/user-stories
- This is currently the most used form of a task that you could be assigned to
- In this way, we are trying to simulate for you how it looks like when you will be working on one of our projects in the company.

# Assignment 1 - Design pages from figma

## Figma

## Description:

- When user opens the page, the task management page is present (design in Figma). So it is the "home page".
- They are able to switch between the task management and the user management by clicking on the link in the side panel.
- Currently, there are only those two options in the side panel.
- User is able to create new task by clicking on the button "Create new task".
- When user clicks on the button, the modal is displayed with an empty form for new task.
- It works the same with the user management and with the creation of a new user.
- User of the app is also able to remove existing tasks/users by clicking on the button "Delete".
- User of the app is also able to edit existing tasks/users by clicking on the button "Edit".
  - Same form as for creation opens up, but the data are prefilled,

## Subtasks:

- Design task management page
- Design user management page
- Create state logic for switching between those pages
  - List of possible pages should be an ENUM
  - current page information should be stored in the redux (or other state management library (e.g. zustand))
- Design form for creating/editing tasks
- Create logic for handling the task form
  - every time user opens the form it should be empty (for creation) or with actual data (for editing).
  - if user closes the form by clicking outside the modal or by clicking the "Cancel" button all the filled data are destroyed.
  - if user fills out all the data and click on "Confirm" button, new task is created or existing task is edited, and it shows in the table.
- Design and create the form for users the same way as for tasks

## Acceptance criteria

- User sees the task management page when they open the app.
- User is able to switch between the user management and the user management by clicking on the side panel items.
- User is able to create new task.
- User is able to create new user.
- User is able to edit existing task.
- User is able to edit existing user.
- User is able to delete existing task.
- User is able to delete existing user.
