import React from 'react'

export default function AuthForm(props) {
const {handleChange, handleSubmit, inputs:{username,password} } = props
    return (
        <form onSubmit = {handleSubmit}>
            <input 
            type = 'text'
            value = {username}
            onChange = {handleChange}
            placeholder = 'username'
            />
            <input type = 'text'
            value = {password}
            onChange = {handleChange}
            placeholder = 'password'
            />
        <button 
        onClick={LogOut}> LogOut
        </button>
        </form>
    )
}