import {useEffect, useState} from 'react';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';
import Usercard from './Usercard';

function Container({data}) {

    return (
    <>
        <div className='content'>
            {
                data.length < 1 ? (
                    <div className='content'>
                        <p className='no-content'>No users yet. Run a search query</p>
                    </div>
                ): (
                    <>
                        {data.map((user)=>{
                            return(
                                <Usercard key={user.id} user={user} />
                            )
                        })}
                    </>
                )
            }
        </div>
    </>
    )
}

export default Container
