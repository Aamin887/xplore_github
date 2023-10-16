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

    const {name, email, hireable, company, followers, following, blog, location, bio, twitter_username, public_repos} = details

    return (
    <>
    <button onClick={() => navigate(-1)}>Back</button>
        <section className='details'>
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
            {twitter_username? (<>
            </>):(<>
            </>)}

            {/*company*/}
            {company ? (<>
            </>):(<>
            </>)}

            {/* locatiomn */}
            {location ? (<>
            <h4>Location:</h4>
            {location}
            </>):(<>''
            </>)}

            {/* locatiomn */}
            {location ? (<>
            </>):(<>
            </>)}

            {/* followring */}
            {following ? (<>
            <h4>Number of following:</h4>
            <p></p>
            </>):(<>
            </>)}

            {/* followers */}
            {followers ? (<>
            </>):(<>
            </>)}

            {/* blog */}
            {blog ? (<>
            </>):(<>
            </>)}

            {/* bio */}
            {bio ? (<>
            </>):(<>
            </>)}

            {/* hireable */}
            {hireable? (<>

            </>):(<>
            </>)}

            {/* hireable */}
            {public_repos? (<>
                {public_repos}
            </>):(<>
            </>)}

        </section>
    </>
    )
}

export default Profilecard
