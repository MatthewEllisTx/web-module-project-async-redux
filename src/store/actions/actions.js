import axios from "axios"
export const START_LOADING = 'START_LOADING'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL'

export function getPosts(subreddit = 'all'){
  return dispatch => {
    dispatch({type: START_LOADING})

    axios.get(`https://www.reddit.com/r/${subreddit}.json`)
      .then(res => {
        // console.log(res)
        dispatch({type: GET_POSTS_SUCCESS, data: res.data.data.children})
      })
      .catch(err => {
        console.log(err)
        dispatch({type: GET_POSTS_FAIL, data: 'Could not get data'})
      })
  }
}