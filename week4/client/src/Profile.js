import React,{ useContext} from 'react'
import { UserContext } from './Context/UserProvider'



export default function Profile(){
    const { user: {username} } = useContext(UserContext)
    return (
        <div>
            <h1>WELCOME{username}!</h1>

        </div>
    )
}