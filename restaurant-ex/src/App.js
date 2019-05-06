import React, { Component } from 'react';
import './App.css';
import restaurants from './restaurants';

import RestaurantType from './components/RestaurantType';
import RestaurantList from './components/RestaurantList';
import MenuItems from './components/MenuItems';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            restaurantTypes: '',
            restaurantList: ''
        })
    }

    
    render() {
        const type = Object.keys(restaurants);
        console.log(type); 
        return (
        <div className="App">
            <RestaurantType 
                restaurantType={type} 
                handleClick={this.setRestaurantTypes}
            />   
            {
                this.state.restaurantTypes ? <RestaurantList 
                                                restaurants={Object.keys(restaurants[this.state.restaurantTypes])}
                                                handleClick={this.setRestaurants}
                                             />
                                            : null
            }
            {
                this.state.restaurantList ? <MenuItems 
                                                items={restaurants[this.state.restaurantTypes][this.state.restaurantList]}
                                            />
                                            : null
            }
            
        </div>
        );
    }

    setRestaurantTypes = (restaurantTypes) => {
        this.setState({
            restaurantTypes, 
            restaurantList: ''
        });
    }
    setRestaurants = (restaurantList) => {
        this.setState({
            restaurantList
        }) 
    }

}


 
export default App;
