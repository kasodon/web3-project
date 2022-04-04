// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import logoImg from './../../../assets/images/logo.png'
import cardImg from './../../../assets/images/profile_pic.png'
import './header.scss'

function Header() {
    return (
        <div className="header">
            <div className="navigation">
                <div className="logo">
                    <img src={logoImg} alt="" />
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Dashboard</a>
                        </li>
                        <li>
                            <a href="/">Courses</a>
                        </li>
                        <li>
                            <a href="/">Events</a>
                        </li>
                        <li>
                            <a href="/">Marketplace</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="profile-box">
                <img src={cardImg} alt="" />
                <div className="box-address">
                    <span>
                        <p>0xFdbwettyjdut....503a</p> <KeyboardArrowDownIcon />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
