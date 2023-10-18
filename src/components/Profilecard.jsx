import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Profilecard() {
    const [details, setDetails] = useState({})

    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchDetails = async() =>{
            const _API = `https://api.github.com/users/${slug}`
            try{
                let res = await axios(_API)
                setDetails({...res.data})
            }catch(err){
                console.log(err)
            }
        }
        fetchDetails()
    }, [slug])
    console.log(details)

    const {login ,avatar_url ,name, email, company, followers, following, blog, location, twitter_username, public_repos} = details

    return (
    <div className='about-info'>
    <button onClick={() => navigate(-1)}>Back</button>
        <section className='details'>

            <div className='profile-details-img'>
                <img src={avatar_url} alt={'profile-img'+ login}/>
            </div>

            <div className='profile-details-info'>
                {/* name */}
                {name ? (
                    <div className='profile-details'>
                        <h4>Name:</h4>
                        <p>{name}</p>
                    </div>
                ):(<>
                </>)}

                {/* email */}
                {email ? (
                    <div className='profile-details'>
                        <h4>Email:</h4>
                        <p>{email}</p>
                    </div>
                ):(<>
                </>)}

                {/* twitter */}
                {twitter_username? (
                    <div className='profile-details'>
                        <h4>Twitter:</h4>
                        <p>{twitter_username}</p>
                    </div>
                ):(<>
                </>)}

                {/*company*/}
                {company ? (
                    <div className='profile-details'>
                        <h4>Works at:</h4>
                        <p>{company}</p>
                    </div>):(<>
                </>)}

                {/* locatiomn */}
                {location ? (<div className='profile-details'>
                <h4>Location:
                </h4>
                <p>{location}</p>
                </div>):(<>
                </>)}

                {/* locatiomn */}
                {location ? (<>
                </>):(<>
                </>)}

                {/* followring */}
                {following ? (
                    <div className='profile-details'>
                        <h4>Following:</h4>
                        <p>{following}</p>
                    </div>
                ):(<>
                </>)}

                {/* followers */}
                {followers ? (
                    <div className='profile-details'>
                        <h4>Followers:</h4>
                        <p>{followers}</p>
                    </div>
                ):(<>
                </>)}

                {/* blog */}
                {blog ? (
                    <div className='profile-details'>
                        <h4>Website:</h4>
                        <p>{blog}</p>
                    </div>
                ):(<>
                </>)}

                {/* hireable */}
                {public_repos? (
                    <div className='profile-details'>
                        <h4>Number of repos:</h4>
                        <p>{public_repos}</p>
                        <a className='btn' href="#">See them</a>
                    </div>
                ):(<>
                </>)}
            </div>
        </section>
    </div>
    )
}

export default Profilecard
