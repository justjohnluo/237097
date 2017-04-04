# HUBS - LEARNING CENTER. FRONT END PROTOTYPE USING REACTJS

## Prerequisites

-   [Node.js](https://nodejs.org/en/) v6+ with npm

## Local deployment

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.<br>

The app uses `redux-logger` to log Redux actions and state changes.
This will help future developers to better understand the data management in the application.

Use the following credentials to login:
-   Admin: admin/pass
-   Student: user/pass

#### Note that *Incubation Center* & *My Profile* pages won't be accessible if you're not logged in!

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](/STARTER_PACK_README.md#running-tests) in the *STARTER_PACK_README.md* for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](/STARTER_PACK_README.md#deployment) in the *STARTER_PACK_README.md* for more information.

### `npm run lint`

Check code for lint errors.

## Heroku deployment

To deploy the app on Heroku run the following commands:

```
  cd $APP_NAME
  git init
  heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
  git add .
  git commit -m "Deploy to Heroku"  // Or any commit message
  git push heroku master  // Or HEAD:master if your not on the master branch
  heroku open
```

Deployed heroku instance: https://hubs-frontend.herokuapp.com

## Unit testing

The application supports unit testing using *JEST*.
See the section about [running tests](/STARTER_PACK_README.md#running-tests) in the *STARTER_PACK_README.md* for more information.
