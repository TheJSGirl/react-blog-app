import React, { Component } from 'react';

export default class PostList extends Component {
  render() {
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
