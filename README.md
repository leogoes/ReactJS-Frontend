<<<<<<< HEAD
<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
=======
>>>>>>> 177fe1fb9fed9bbfa3b5a1894350ff42ccfc96fa
# ReactJS-Frontend
Instagram Clone Application, just for study purpouse


Create project

```
yarn create react-app frontend
```
On windows, user name with spaces have some issues
with yarn command, so i used:
```
npx create-react-app frontend
```
---

**Development**

Created the pages folde with two files inside: *Feed.js and New.js*
Created the *routes.js*
Created the *global.css*

In **Feed.js and New.js**

Have to import the React from 'react' because of JSX and Component for Feed Extends that Componet

```
import React, { Component } from 'react';
```

Created a class name Feed that return the conten for Feed
not using JSX in this part

```
class Feed extends Component
{
    render(){
        return(
            <h1>Feed</h1>
        )
    }
}
```
Have to export the class

```
export default Feed
```

**routes.js**
 When a <Route> matches it will render its content and when it does not match, it will render null.
Import React for using JSX
 A <Switch> will iterate over all of its children <Route> elements and only render the first one that matches the current location. 
Import Switch for react undestrand just one route
Import Route for passing path when acces that url
Import Feed and New

```
import React from 'react'; //Every time that we use JSX like HTML tags for Functions
import {Switch, Route} from 'react-router-dom';
import Feed from './pages/Feed';
import New from './pages/New';
```
Using Switch around the Route tags
```
function Routes(){

    return(
        <Switch> 
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    );
}
```

Export the Routes Function
```
export default Routes;
```
<<<<<<< HEAD
>>>>>>> 177fe1fb9fed9bbfa3b5a1894350ff42ccfc96fa
=======
>>>>>>> 177fe1fb9fed9bbfa3b5a1894350ff42ccfc96fa
