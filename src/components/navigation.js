import React from 'react'
import {Link} from 'react-router-dom'

const navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/namaztiming">
                        Namaz Timing
                    </Link>
                </li>
                <li>
                    <Link to="/islamiccalender">
                    Islamic Calender
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default navigation
