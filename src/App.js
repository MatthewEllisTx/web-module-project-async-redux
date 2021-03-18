import { useEffect } from 'react';
import axios from 'axios';

import { client_id, client_secret} from './authStuff/authStuff';

import Posts from './components/Posts';

function App() {
  // const [res, setRes] = useState('')

  useEffect(() => {
    // axios.post('https://www.reddit.com/api/v1/access_token', `grant_type=client_credentials&username=${username}&password=${password}`, {header: `Authorization: Basic ${client_id}:${client_secret}`})
    // axios.post('https://www.reddit.com/api/v1/access_token', `grant_type=client_credentials`, {headers: {Authorization: `Basic ${client_id}:${client_secret}`}})
    // axios.get('https://www.reddit.com/api/v1/access_token', {headers: {Authorization: `Basic ${client_id}:${client_secret}`}})
    // axios.post('https://corswww.reddit.com/api/v1/access_token', `grant_type=client_credentials&username=${username}&password=${password}`, {headers: {Authorization: `Basic ${client_id}:${client_secret}`, 'Access-Control-Allow-Origin': '*'}})
    // axios.post('https://corswww.reddit.com/api/v1/access_token', `grant_type=cpassword&username=${username}&password=${password}`, {headers: { 'User-Agent': 'testbot' }, auth: {username: client_id, password: client_secret}})
    //   .then( res => console.log(res))
    //   .catch( err => console.log(err))
    
    // fetch('https://www.reddit.com/api/v1/access_token', {
    //   method: 'post',
    //   mode: 'cors',
    //   headers: new Headers({
    //     // 'Access-Control-Allow-Origin': '*',
    //     // "Authorization": `Basic ${btoa(`${client_id}:${client_secret}`)}`
    //     "Authorization": `Basic ${client_id}:${client_secret}`
    //   }),
    //   body: JSON.stringify({
    //     'grant_type': 'password'
    //   })
    // })
    //   .then( res => console.log(res))
    //   .catch( err => console.log(err))

    // https://github.com/reddit-archive/reddit/wiki/OAuth2 used Aplication Only OAuth
    axios.post('https://www.reddit.com/api/v1/access_token', "grant_type=client_credentials", {headers: {authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`}})
      .then( res => console.log(res))
      .catch( err => console.log(err))
  }, [])

  return (
    <div>
      <Posts />
    </div>
  );
}

export default App;
