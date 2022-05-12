# Bitmama's Frontend Engineering Test Solution

## Task:
Design a web application with a simple form that can sign in a user with just a username. (No API is required)

When the user is signed on, it should display the currently signed in username, a button to log out of the account or sign in with a different username.

The current page on focus should also display the list of all active sessions on the browser. You should be able to logout any other active session, from the focused tab if it is currently signed on and display their presence status. Presence status can be active or idle A tab that has not received focus in the past 60 seconds, should be regarded as idle.

## Tools used

The stack used include:

### `React Js`

This project used [Create React App](https://github.com/facebook/create-react-app).
### `Chakra UI`

Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

You can find the docs here: [Chakra UI](https://chakra-ui.com/docs/); I used chakra to give the task some interesting touch of modern design patterns; 


### `React Icons`

[react icons](https://react-icons.github.io/react-icons) Includes popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.


## Scope
### Deliverables

1. The signed in user should remain signed on even with a browser refresh

2. A user can be signed on with a different username in another tab of the same browser

3. The application is able to manage the sessions of all users

4. When a new tab is opened, it should start with the state of the last active signed on username on the browser

5. Signing in with a username that is already active, should drag focus to the tab with that username.

6. Username should be case insensitive

**Project was done locally, pushed to github and deployed on netlify**
