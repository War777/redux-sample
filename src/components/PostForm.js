import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postsActions'

class PostForm extends Component {
    
    constructor(){
        
        super();
        
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e){
        
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);

        this.setState({
            title: '',
            body: ''
        });

    }

    render() {
        
        return (

            <div>
                <h1>
                    Add post
                </h1>

                <form onSubmit={this.onSubmit}>
                    
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange} /> <br/><br/>
                    <textarea name="body" value={this.state.body}  onChange={this.onChange} /><br/>
                    <button type="submit">Add</button>

                </form>
                
            </div>

        )

    }

}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);