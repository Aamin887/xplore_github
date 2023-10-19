import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from './Container'

function Following() {
    const [followers, setFollowers] = useState([])
    const {user} = useParams()
    // https://api.github.com/users/yusifk88/following
    const _API = `https://api.github.com/users/${user}/following`

    useEffect(() => {
        const fetchFollowers = async() => {
            const res = await axios(_API)
            const data = await res.data
            setFollowers([...data])
        }
        
        fetchFollowers()
    },[])

    console.log(user)

    return (
    <div>
        <h1>Profile they follower</h1>
        <Container data = {followers} />
    </div>
    )
}

export default Following;
