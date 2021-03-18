import { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { client_id, client_secret} from './authStuff/authStuff';

import Posts from './components/Posts';
import { getPosts } from './store/actions/actions';

function App(props) {
  const { after, getPosts, loading } = props

  useEffect(() => {
    // https://github.com/reddit-archive/reddit/wiki/OAuth2 used Aplication Only OAuth
    axios.post('https://www.reddit.com/api/v1/access_token', "grant_type=client_credentials", {headers: {authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`}})
      .then( res => console.log(res))
      .catch( err => console.log(err))
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  // shoutout to Brendon for posting this
  // https://stackoverflow.com/a/49573628
  function handleScroll(e){
    const bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight;
    console.log(e.target.scrollHeight, e.target.scrollTop, e.target.clientHeight)
    if(bottom < 400){
      console.log('bottom')
      if(!loading)
        getPosts(after)
    }
  }


  return (
    <div style={{height: '100vh', overflowY: 'scroll'}} onScroll={handleScroll}>
      <div style={{ width: '50%', margin: '0 auto', minWidth: '400px',}} onScroll={handleScroll}>
        <Posts />
      </div>
      {loading && <h3 style={{textAlign: 'center'}}>Loading...</h3>}
    </div>
  );
}

function mapStateToProps(state){
  return {
    after: state.after,
    loading: state.loading,
  }
}

export default connect(mapStateToProps, { getPosts })(App);
