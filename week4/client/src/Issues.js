import React from 'react'
export default function Issue(props){
const{name,description}=props
    return(
        <div>
          <h1>{name}</h1>   
          <h2>{description}</h2>   
        </div>
    )
}