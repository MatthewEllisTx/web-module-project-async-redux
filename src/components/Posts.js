import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions/actions';

import Post from './Post';

function Posts(props){
  const { getPosts, posts } = props
  console.log(posts)

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <div>
      {posts.map( post => <Post key={post.data.id} post={post} />)}
    </div>
  )
}
// not sure how to bind getPosts to the redux without connect, otherwise I'd use useDispatch
function mapStateToProps(state){
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { getPosts })(Posts);