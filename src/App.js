import React from 'react'
import TopNav from './TopNav';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import About from './About';
import Home from './Home';
import SignIn from './SignIn';
import classes from './app.scss';

const links = [
    {id: 'home', text: 'Home', orient: 'left', to:'/', exact: true},
    {id: 'about', text: 'About', orient: 'left', to:'/about'},
    {id: 'signin', text: 'SignIn', orient: 'right', to:'/signin'},
];

const App = () => {
    return (
        <div className={classes.container}>
            <Router>
                <TopNav links={links}/>
                <div className={classes.body}>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/signin">
                            <SignIn />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
