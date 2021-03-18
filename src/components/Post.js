import React from 'react';
import styled from 'styled-components';

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
    <DivBoxStyled>
      <DivUpVotesStyled>
        <p>UP</p>
        <p>{score}</p>
        <p>DOWN</p>
      </DivUpVotesStyled>
      <DivImageStyled src={(thumbnail !== 'self' && thumbnail !== 'default') ? thumbnail : 'http://sangervilleme.com/wp-content/plugins/slider/images/noimage.png'}>
        {/* <img src={(thumbnail !== 'self' && thumbnail !== 'default') ? thumbnail : 'http://sangervilleme.com/wp-content/plugins/slider/images/noimage.png'} alt=''/> */}
      </DivImageStyled>
      <DivTextStyled>
        <p>r/{subreddit}</p>
        <a href={url} target={'_blank'} rel='noreferrer'>{title}</a>
        <p>Submitted by {author_fullname} </p>
        <DivCommentsStyled>
          <a href={`https://www.reddit.com${permalink}`} target={'_blank'} rel='noreferrer'>{num_comments} Comments</a>
          <p>Share</p>
          <p>Hide</p>
        </DivCommentsStyled>
      </DivTextStyled>
    </DivBoxStyled>
  )
}

const DivBoxStyled = styled.div`
  background-color: #161B22;
  box-shadow: 0 0 2px 1px #343536;
  border-radius: 5px;
  display: flex;
  margin: 25px 0;
  padding: 20px;
  
  &:hover {
    box-shadow: 0 0 2px 1px #DCE6E7;
  }

  a {
    color: #58A6FF;
    text-decoration: none;
  }
`

const DivUpVotesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const DivImageStyled = styled.div`
  background-image: url(${ props => props.src});
  background-size: contain; // doing it this way because it was faster than make a 140x140 px image
  margin: 0 10px;
  max-height: 140px;
  min-height: 140px;
  width: 140px;
`

const DivTextStyled = styled.div`
  flex: 1;
`

const DivCommentsStyled = styled.div`
  display: flex;
  // a ~ p will select any p tag that comes after an a tag
  // in this case the selected tags contain Share and Hide
  a ~ p {
    margin-left: 10px;
  }
`