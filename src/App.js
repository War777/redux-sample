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

            <div className="App">
                
                <header className="App-header">
                
                <img src={logo} className="App-logo" alt="logo" />
                
                </header>

                <PostForm />
                
                <hr />
                
                <Posts />
                
            </div>

        );

    }
    
}

export default App;
