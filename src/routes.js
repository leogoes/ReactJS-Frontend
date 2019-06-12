import React from 'react'; //Every time that we use JSX like HTML tags for Functions
import {Switch, Route} from 'react-router-dom';
import Feed from './pages/Feed';
import New from './pages/New';

function Routes(){

    return(
        <Switch> 
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    );
}

export default Routes;