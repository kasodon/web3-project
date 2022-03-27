import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './Creator.scss'

interface CreatorProps {}

const Creator: FC<CreatorProps> = () => (
    <div className="Creator" data-testid="Creator">
        <div className="creator-box">
            <div className="back">
                <Link to="/register">
                    <span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.828 7H16V9H3.828L9.192 14.364L7.778 15.778L0 8L7.778 0.222L9.192 1.636L3.828 7Z"
                                fill="black"
                            />
                        </svg>
                        Back
                    </span>
                </Link>
            </div>
            <div className="creator-header">
                <h1>Register as creator</h1>
                <p>
                    Provide the necessary details to verify you as a creator and
                    start creating and earning.
                </p>
            </div>
            <form action="#" className="form">
                <div className="form-inputs">
                    <div className="box">
                        <label htmlFor="">
                            Full Name (Only visible to you)
                        </label>
                        <input type="text" />
                    </div>
                    <div className="box">
                        <label htmlFor="">Email*</label>
                        <input type="email" />
                    </div>
                    <div className="box">
                        <label htmlFor="">LinkedIn or Twitter</label>
                        <input type="text" />
                    </div>
                    <div className="box">
                        <label htmlFor="">Phone No.</label>
                        <input type="tel" />
                    </div>
                </div>
                <div className="actions">
                    <Link to={{}}>
                        <button>Register</button>
                    </Link>
                    <p>Already a member? Log in</p>
                </div>
            </form>
        </div>
    </div>
)

export default Creator
