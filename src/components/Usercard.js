import React from 'react'
import { Link, NavLink } from 'react-router-dom'

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

function Usercard({user}) {
    return (
        <>
            <article className='usercard'>
                <div className='profile-img'>
                    <img src={user.avatar_url} alt='img'/>
                </div>
                <div className='user-info'>
                    <h4>user Name:</h4>
                    <p>{user.login}</p>
                </div>
                <div className='more-info'>
                    <button>
                    <Link to={`/details/${user.login}`}>view profile</Link>
                    </button>
                </div>
            </article>
        </>
    )
}

export default Usercard
