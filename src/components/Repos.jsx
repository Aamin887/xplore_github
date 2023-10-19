import axios from 'axios';
import {useState, useEffect}from 'react';
import { useParams } from 'react-router-dom';

const Repo = ({data}) => {
    const {name, htmt_url, watchers_count, language, visibility} = data
    return(
        <div style={{border:'1px solid gray', margin: '20px', padding: '10px'}}>
            <h4>name: {name}</h4>
            <p>Watcher: {watchers_count}</p>
            <a className='btn' href={htmt_url} target='blank'>visit repo</a>
            <p>Main Language: {language}</p>
            <p>Visibility: {visibility}</p>
        </div>
    )
}


function Repos() {
    const [repos, setRepos] = useState([])
    const {user} = useParams() 
    
    useEffect(() => {
        const API_URL = `https://api.github.com/users/${user}/repos`;
        const fetchRepos = async() => {
            const res = await axios(API_URL)
            const data = await res.data
            setRepos([...data])
        }
        fetchRepos()
    }, [user])

  return (
    <div>
      <h1>All Repos{user}</h1>
      {
        repos.map((repo, idx) => <Repo key={idx} data={repo}/>)
      }
    </div>
  )
}

export default Repos
