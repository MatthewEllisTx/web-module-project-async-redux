import React from 'react';

export default function Post(props){
  const { subreddit,
    author_fullname,
    title,
    link_flair_text,
    thumbnail,
    score,
    url,
    num_comments,
    permalink,
  } = props.post.data
  return (
    <div>
      <div>
        <p>UP</p>
        <p>{score}</p>
        <p>DOWN</p>
      </div>
      <img src={thumbnail} alt=''/>
      <div>
        <p>r/{subreddit}</p>
        <a href={url}>{title}</a>
        <p>Submitted by {author_fullname} </p>
        <div>
          <a href={permalink}>{num_comments} Comments</a>
          <p>Share</p>
          <p>Hide</p>
        </div>
      </div>
    </div>
  )
}