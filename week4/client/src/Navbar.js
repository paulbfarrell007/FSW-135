import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(props){
    const {logout} = props
return(
<div className='navbar'>
<Link to='/profile'> profile </Link>
<button onClick={LogOut}> LogOut
</button>
</div>    
)    
}
