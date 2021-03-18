import { START_LOADING, GET_POSTS_SUCCESS, GET_POSTS_FAIL } from '../actions/actions'

const initialState = {
  loading: false,
  after: '',
  posts: [],
  error: '',
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case START_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.data],
        after: action.after,
        error: '',
      }
    case GET_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.data,
      }
    default:
      return state
  }
}