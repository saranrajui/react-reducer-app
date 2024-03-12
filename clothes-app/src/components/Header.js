import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='nav-bar-wrapper'>
                <nav className="navbar navbar-light bg-light">
                    <Link to={'/'} >
                    <a className="navbar-brand" href="#">
                        <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        Bootstrap
                    </a>
                    </Link>
                </nav>
            </div>
            <div className='break' style={ {height: "20px"}}>
                <hr />
            </div>
        </>
    )
}

export default Header