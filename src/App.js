import { useEffect } from 'react';
import axios from 'axios';

import { client_id, client_secret} from './authStuff/authStuff';

import Posts from './components/Posts';

function App() {
  // const [res, setRes] = useState('')

  useEffect(() => {
    // https://github.com/reddit-archive/reddit/wiki/OAuth2 used Aplication Only OAuth
    axios.post('https://www.reddit.com/api/v1/access_token', "grant_type=client_credentials", {headers: {authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`}})
      .then( res => console.log(res))
      .catch( err => console.log(err))
  }, [])

  return (
    <div style={{ width: '50%', margin: '0 auto', minWidth: '400px'}}>
      <Posts />
    </div>
  );
}

export default App;
