import React from 'react'
import Navigation from './navigation'
import logo from '../logo.png'

const header = () => {
    return (
        <div>
            <img src={logo} class="img-fluid" alt="namaz timing" />
            <h1>Header</h1>
            <Navigation/>
        </div>
    )
}

export default header
