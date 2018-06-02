import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component{

    componentDidMount( ) {
        //Searches the term matching 'id' from the url params
        const { id } = this.props.match.params;
        //calls the action creator
        this.props.fetchPost(id);
    }
    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/')
            }
        ); 
    }
    render(){
        
        const { post } = this.props;

        // Check we are getting post data from props
        if(!this.props.post){
            return <div>Loading...</div>;
        }        

        return(
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>Content: {post.content}</p> 
                <Link to='/' className='btn btn-primary'>Back to Posts</Link>
                <button
                    className='btn btn-danger pull-xs-right'
                    onClick={this.onDeleteClick.bind(this)} >
                    Delete
                </button>
            </div>
        );
    }
}

// First param refers to app state, second to our component state
function mapStateToProps( { posts }, ownProps){
    // assigninf this.props.post = the post matching our url id
    return { post: posts[ownProps.match.params.id] };
}

export default  connect( mapStateToProps, { fetchPost, deletePost })(PostsShow);