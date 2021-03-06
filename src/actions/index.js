import axios from 'axios';
const BASE_URL = 'https://reduxblog.herokuapp.com/api';
// const API_KEY = '?key=PAPERCLIP1234';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
// const AUTH_TOKEN = ''; 

export function fetchPosts(){
  const request = axios.get(`${BASE_URL}/posts`);
  console.log('request----------', request);
  return{
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(values, callback){
  const request = axios.post(`${BASE_URL}/posts`, values)
  .then(() => {
    callback();
  });

  return{
    type: CREATE_POST,
    payload: request
  }
}