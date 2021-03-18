import axios from "axios"
export const START_LOADING = 'START_LOADING'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL'
export const GET_MORE_POSTS_SUCCESS = 'GET_MORE_POSTS_SUCCESS'
export const GET_MORE_POSTS_FAIL = 'GET_MORE_POSTS_FAIL'

export function getPosts(after = '', subreddit = 'all'){
  return dispatch => {
    dispatch({type: START_LOADING})

    axios.get(`https://www.reddit.com/r/${subreddit}.json?after=${after}`)
      .then(res => {
        // console.log(res)
        dispatch({type: GET_POSTS_SUCCESS, data: res.data.data.children, after: res.data.data.after})
      })
      .catch(err => {
        console.log(err)
        dispatch({type: GET_POSTS_FAIL, data: 'Could not get data'})
      })
  }
}