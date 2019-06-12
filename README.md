
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
