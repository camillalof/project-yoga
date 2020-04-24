# Project Yoga :ok_woman:

A online yoga app Built in React that creates a custom yoga-workout based on your mood. In yoga theory each yogapose is connected to a different chakra or energyfield in the body, that makes the different poses helpful not only for physical exersice but also for mental wellbeing. For example yogaposes that is affecting the sakral chakra helps us with creativity, the poses connected to the solar plexus chakra affect our self confidence and so on. The app uses javascript functions to automaticly fetch random poses connected to the energyfield needed and sort them randomly into a workout-array.   

## How did I do it :seedling:

I started with building a backend app with all the poses, backend for registrer and log in and images using MongoDB and Mongoose model (you can find the backend here: https://github.com/camillalof/project-mongo-api). Then I fetched the poses from the database and built functions in javascript that randomly sliced different types of yoga poses and included the into a new array. I later mapped over the new array making the session run automatlicly using neo slick slider. For the overall frontend for the app I used react, react routes and react hooks. I also styled the log in/Registrer pages with inspiration from Neumorphorism design trends.

If I would of had more time I would of focused more on accessability and used props to create less repetitive code. I also feel that a easier and more structured way to work with the components would of been using styled components instead of vanilla CSS, since that would of been fewer files.

## View it live here :eyes:

https://projectyoga.netlify.app/ 
