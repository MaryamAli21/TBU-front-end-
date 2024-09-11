import React, { useEffect, useState } from 'react'
import tbu_logo from "./tbu-logo.jpeg"
import { Link } from 'react-router-dom'
import useStickyHeader from '../../../hooks/useStickyHeader'
import { menuList } from '../../../utlits/fackData/menuList'
import MobileMenu from './mobileMenu'

const MainHeader = ({ }) => {
    useStickyHeader()
    const [othersOption, setOtherOption] = useState(false)
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <div style={{background:"black"}} className="navbar-area style-2">
                <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />
                <div className="desktop-nav style-2">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand me-0" to="/">
                                <img src={tbu_logo} className="black-logo" alt="logo" width={120}/>
                            </Link>

                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    {
                                        menuList.map(({ id, dropDown, label, path }) => {
                                            return (
                                                <li key={id} className="nav-item">
                                                    <Link to={path} className={`nav-link ${dropDown.length ? "dropdown-toggle" : ""} `}>
                                                        {label}
                                                    </Link>
                                                    {
                                                        dropDown.length &&
                                                        <ul className="dropdown-menu">
                                                            {
                                                                dropDown.map(({ id, path, label }) => {
                                                                    return (
                                                                        <li key={id} className="nav-item">
                                                                            <Link to={path} className="nav-link">{label}</Link>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    }

                                                </li>
                                            )
                                        })
                                    }

                                </ul>

                                <div className="others-options">
                                    <ul>
                                        
                                        <li>
                                            <Link className="default-btn text-decoration-none" to="/contact">
                                                <i className="ri-arrow-right-line"></i>
                                                Send Inquiry
                                            </Link>

                                            <Link className="quote d-none text-decoration-none" to="/contact">
                                                <i className="ri-chat-quote-line"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="others-option-for-responsive">
                    <div className="container">

                       
                        <div className='menu-icon'>
                            <i className={`ri-menu-line ${menuActive ? "d-none" : "d-block "}`} onClick={() => setMenuActive(true)}></i>
                            <i className={`ri-close-line  ${menuActive ? "d-block " : "d-none"}`} onClick={() => setMenuActive(false)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainHeader