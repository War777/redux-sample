import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postsActions'

class PostForm extends Component {
  
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
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
        <h5> Add post, title from PR </h5>
        <p>
          Este es un test para revisar la funcionalidad de como funciona el branching con Github.
        </p>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="title" value={this.state.title} onChange={this.onChange} className="form-control" placeholder="Title" /> <br />
          <textarea name="body" value={this.state.body} onChange={this.onChange} className="form-control" placeholder="Post" /><br />
          <button type="submit" className="btn btn-outline-primary "> Add </button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);