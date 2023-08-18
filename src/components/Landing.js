import React, {Component} from 'react'
import Chat from './Chat'
import Login from './Login'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            hasUserLoggedIn: false,
            username: '',
        }
    }

    setPageView(uname) {
        this.setState({hasUserLoggedIn: true, username: uname})
    }

    logout() {
        this.setState({hasUserLoggedIn: false, username: ''})
    }


    render () {
        return (
            <>
                {this.state.hasUserLoggedIn ? 
                    <Chat uname={this.state.username} logout={() => this.logout()}/>
                        :
                    <Login login={uname => this.setPageView(uname)} /> }
            </>
        )
    }
}

export default Landing