import React from 'react'
import Login from './Login'
import Onboarding from './Onboarding'
import Register from './Register'

const Body = () => {
    return (
        <div >
            <Onboarding />
            {/* <Onboarding2 /> */}
            <Login />
            <Register />
        </div>
    )
}

export default Body
