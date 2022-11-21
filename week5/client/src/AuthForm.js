import React from 'react'

export default function AuthForm(props) {
const {handleChange, btntext, handleSubmit, inputs:{username,password} } = props
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
        <button> {btntext} </button>
        </form>
    )
}