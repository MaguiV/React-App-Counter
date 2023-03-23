# React App Counter

This project was bootstrapped with Create React App.

## Overview

This is a simple React application that displays a counter and a Chuck Norris joke. The application has two buttons, one to increment the counter and another to reset the counter and the joke. The application is designed to be responsive, with styles that adapt to different screen sizes.

## Code Explanation

The code starts with importing the necessary modules - React, useState, and useEffect - and the App.css file.

`useState` is a hook that allows functional components to manage state without using a class component. In this application, `count` and `joke` are state variables managed using the `useState` hook.

`useEffect` is a hook that allows functional components to perform side effects, such as fetching data or updating the DOM. In this application, `useEffect` is used to fetch a Chuck Norris joke from the API when the `count` state variable is updated.

The `fetchJoke` function is an asynchronous function that fetches a random joke from the Chuck Norris API and sets the `joke` state variable.

The `increment` function is a simple function that increments the `count` state variable.

The `reset` function resets the `count` and `joke` state variables to their initial values.

The return statement renders the application components - the two buttons, the counter, and the joke.

The CSS styles apply to the entire body and to the App component, the buttons, the counter, and the joke. The styles are responsive, adapting to different screen sizes using media queries

## How to Use

To use this application, clone the repository and run `npm install` to install the necessary dependencies. Then run `npm start` to start the application. The application will open in your default browser

## Dependencies

This application requires the following dependencies:

• React
• react-dom

## References

• React documentation (https://react.dev/)
• Create React App (https://create-react-app.dev/docs/getting-started/)
• Chuck Norris API (https://api.chucknorris.io/)

