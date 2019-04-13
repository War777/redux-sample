import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

class App extends Component {

    render() {

        return (
            
            /**
             * 2) Wrap app with provider.
             * It makes the store available for the rest of the app
             */

            <div className="container">
                
                <br/>
                
                <div className="row">
                    
                    <div className="col-12">
                         
                        <h1>
                            <img src={logo} className="App-logo align-middle" alt="logo" />
                            React.js-Redux
                        </h1>

                    </div>

                </div>
                
                <br/>
                
                <PostForm />
                
                <hr/>

                <Posts />
                
            </div>

        );

    }
    
}

export default App;
