import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from './Container'

function Followers() {
    const [followers, setFollowers] = useState([])
    const {user} = useParams()
    
    const _API = `https://api.github.com/users/${user}/followers`

    useEffect(() => {
        const fetchFollowers = async() => {
            const res = await axios(_API)
            const data = await res.data
            setFollowers([...data])
        }
        
        fetchFollowers()
    },[])
    console.log(followers)
    return (
    <div>
        <h1>Profiles that follower them</h1>
        <Container data = {followers} />
    </div>
    )
}

export default Followers
