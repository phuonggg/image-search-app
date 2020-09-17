Image seach app (front-end app) using Unsplash API built with React, Redux.
You can search images, like and put images to grouped lists in favorite tab.

## accquire API key

Register on unsplash to get an API key, set it to variable REACT_APP_API_KEY in .env file in directory root.

## Instructions to run the app

In the project directory, you can run:

### `yarn`

Add dependancies 

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Technologies used

I used React because I'm most farmiliar with this library for UI compared to other libraries/frameworks. Its tools like react-router helps managing the routing of the app dynamic. Managing state of the app is done properly with either passing props (from parent component (eg Search.js) to child component (eg SinglePhoto.js), or redux where data flows in multiple directions (moving a favorite image to different lists)

Style's done with mostly CSS, no additional library because it's efficient enough with scope of this project (eg flex box for laying out images), styling libraries could sometimes make codebase quite confusing if not organized well

Repo's organized into components which helps make it easy to follow logic, I tried to organize it in the a way to be best followed for other people to review.

## Future implementation/improvement

Please refer to Todo.md
