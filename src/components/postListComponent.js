import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          <li className=" black">
            <h2>Post_title : first post</h2>
          </li>
          <hr/>
          <li className=" black">
            <h2>Post_title : second post</h2>
          </li>
          <hr/>
          <li className=" black">
            <h2>Post_title : third post</h2>
          </li>
          <hr/>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {posts: state.posts }
}

export default connect(mapStateToProps, {fetchPosts})(PostList);