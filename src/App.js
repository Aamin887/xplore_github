import './App.css';
import { useState, lazy, Suspense} from 'react';

import { SearchQuery } from './util/queryContext';
import {Route, Routes,} from 'react-router-dom';
import Spinner from './util/Spinner';

const Home = lazy(() => import('./components/Home'))
const Profilecard = lazy(() => import('./components/Profilecard'))
const Followers = lazy(() => import('./components/Followers'))
const Following = lazy(() => import('./components/Following'))
const Repos = lazy(() => import('./components/Repos'))



const dummyData = {
    "login": "yusifk88",
    "id": 44758614,
    "node_id": "MDQ6VXNlcjQ0NzU4NjE0",
    "avatar_url": "https://avatars.githubusercontent.com/u/44758614?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/yusifk88",
    "html_url": "https://github.com/yusifk88",
    "followers_url": "https://api.github.com/users/yusifk88/followers",
    "following_url": "https://api.github.com/users/yusifk88/following{/other_user}",
    "gists_url": "https://api.github.com/users/yusifk88/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/yusifk88/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/yusifk88/subscriptions",
    "organizations_url": "https://api.github.com/users/yusifk88/orgs",
    "repos_url": "https://api.github.com/users/yusifk88/repos",
    "events_url": "https://api.github.com/users/yusifk88/events{/privacy}",
    "received_events_url": "https://api.github.com/users/yusifk88/received_events",
    "type": "User",
    "site_admin": false
}

function App() {
  const [theme, setTheme] = useState('');

  // const API_URL = `https://api.github.com/search/users?q=${query}`

  return (
    <SearchQuery.Provider value={theme}>
      <div className="App">
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:slug' element={<Profilecard/>} />
            <Route path='/followers/:user' element={<Followers/>} />
            <Route path='/following/:user' element={<Following/>} />
            <Route path='/repos/:user' element={<Repos/>} />
          </Routes>
        </Suspense>
      </div>
    </SearchQuery.Provider>
  );
}

export default App;
