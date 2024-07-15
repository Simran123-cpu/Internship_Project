import React from 'react'
import Login from './Login'
import Onboarding from './Onboarding'
import Onboarding2 from './Onboarding2'
import Register from './Register'

const Body = () => {
    return (
        <div >
            <Onboarding />
            <Onboarding2 />
            <Login />
            <Register />
        </div>
    )
}

export default Body
