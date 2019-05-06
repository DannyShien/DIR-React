import React, { Component } from 'react'; 
import { 
    Redirect,
    Link
} from 'react-router-dom'

class PageNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRedirect: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showRedirect: true
            });
        }, 2000);
    }
    
    render() {
        return (
            <>
                <h1>ERROR</h1>
                <Link to='/'>Click here or be redirect</Link>
                {this.state.showRedirect ? <Redirect to='/' /> : null}            
            </>
        )
    }
}

export default PageNotFound;