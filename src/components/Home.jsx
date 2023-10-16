import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios, { Axios } from 'axios'
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers'
import Container from './Container'

function Home() {
    const [searchQuery, setSeacrchQuery] = useState('')
    const [users, setUsers] = useState([])


    const handleChange = function(e){
        setSeacrchQuery(e.target.value)
    } 
    
    const handleSubmit = async(e) =>{
        e.preventDefault();

        const API_URL = `https://api.github.com/search/users?q=${searchQuery}`

        try{
            const res = await axios(API_URL)
            console.log(res.data.items)
            await setUsers([...res.data.items])
        }catch(err){
            console.log(err)
        }

        console.log(users)

    } 

    return (
        <>
            <header className='home-header'>
                <small>Search a user on github</small>
                <h1>Xplore GitHub</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='userName' placeholder='Search here...' onChange={handleChange} required/>
                        <button>Search</button>
                </form>
            </header>
        
            <Container data={users}/>

        </>
    )
}

export default Home
