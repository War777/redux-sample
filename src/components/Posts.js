import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions/postsActions';

class Posts extends Component {

    constructor(){
        
        super();
        
        this.deletePost = this.deletePost.bind(this);

    }

    componentWillMount(){

        // This method is defined in ../actions/postsActions.js:3
        this.props.fetchPosts();

    }

    componentWillReceiveProps(nextProps){
        
        if(nextProps.newPost){
            
            // This method is defined in ../actions/postsActions.js:16
            this.props.posts.unshift(nextProps.newPost);

        }

    }

    deletePost(e){

        if(window.confirm('Sure?')){
            let id = parseInt(e.target.getAttribute('id'));
            this.props.deletePost(id);
        }

    }


    render() {

        const postItems = this.props.posts.map(post => (
            
            <div key={post.id}>

                <div className="card">
                    
                    <div className="card-body">

                        <div className="row">
                            
                            <div className="col-11">
                                <h5 className="card-title"> {post.title} </h5>
                            </div>

                            <div className="col-1">
                                <button id={post.id} onClick={this.deletePost} className="btn btn-sm btn-danger float-right">x</button>
                            </div>
                            
                        </div>

                        <p className="card-text"> {post.body} </p>
                        
                    </div>

                </div>

                <br/>
                
            </div>

        ));

        
        return (
            
            <div>
                <h1>
                    Posts
                </h1>
                
                { postItems }

            </div>

        )
  
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    post: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({

    /** 
     * state.posts is defined in ../reducers/index.js:6
     * state.posts.items is defined in ../reducers/postsReducer.js:4
     * state.posts.item is defined in in ../reducers/postsReducer.js:5
     */

    posts: state.posts.items,
    newPost: state.posts.item


});

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);
