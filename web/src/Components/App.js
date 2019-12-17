import React from 'react';
import Home from './Home';
import PostDetails from './PostDetails';
import PostEditForm from './PostEditForm';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/post/:id" exact component={PostDetails}/>
                <Route path="/post_edit_form/:id" exact component={PostEditForm}/>
            </Switch>
        </Router>
    )
}

export default App;