import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions';
import _ from 'lodash';

class PostList extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
          <li className="card-title  centered " key= {post.id}>
        { post.title === 'null' ? post.title = 0 : post.title }
          {/* Post Title: {post.title} */}
          </li>
        )
    })
  }
  render() {
    console.log(this.props.posts);
    return (
      <div>
        <h3 className= "center">BLOG POSTS</h3>
        <ul className= "card"> 
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {posts: state.posts };
}

export default connect(mapStateToProps, {fetchPosts})(PostList);