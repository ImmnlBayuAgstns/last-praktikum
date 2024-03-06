import React from 'react'
import "../styles/Logout.css"

const Loading = ({ item }) => {
    return (
        <div className='parLoad'>
            <div class="loader">
                <li class="ball"></li>
                <li class="ball"></li>
                <li class="ball"></li>
            </div>
            <div className='message'>{item}</div>
        </div>
    )
}

export default Loading
