import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Home from './Home';
import Fishing from './Fishing';
import Rockclimbing from './Rockclimbing';
import Workout from './Workout';
import PageNotFound from './PageNotFound';

import {
    Link, 
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            workouts: [
                'pushups', 
                'situps', 
                'pullups', 
                'lunges'
            ]
        }
    }

    
    render() {
        return (
            <div className="App">
                <Header />
                {/*Link is what you use instead of an anchor  */}
                <Link to='/'>Home</Link>
                <Link to='/fishing'>Fishing</Link>
                <Link to='/rockclimbing'>Rockclimbing</Link>
                <Link to='/workout'>Workout</Link>
                <Link to='/error'>PageNotFound</Link>



                <Switch>
                    {/* Switch shows the first matching Route or the last Route listed */}
                    <Route exact path='/' component={Home} />

                    {/* <Fishing />
                    Route conditionally renders a component based on the path in the address bar */}

                    <Route path='/fishing' component={Fishing} />
                    {/* <Rockclimbing /> */}
                    <Route path='/rockclimbing' component={Rockclimbing} />

                    {/* <Workout /> */}
                    <Route path='/workout' 
                        render={(props) => (
                            <Workout 
                                {...props}
                                workouts={this.state.props}
                            />
                        )}
                    />

                    {/* When useing <Switch>, you can use a
                    <Route path='/*' component={PageNotFound} /> */}
                    <Route component={PageNotFound} />
                </Switch>

            </div>
        );
    }

}
export default App;
