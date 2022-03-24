import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './DAO.scss'

interface DAOProps {}

const DAO: FC<DAOProps> = () => (
    <div className="DAO" data-testid="DAO">
        <div className="dao-box">
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
            <div className="header">
                <h1>Register as Web3 company</h1>
                <p>
                    Provide the necessary details to verify you as a DAO and
                    start setting bounties and task.
                </p>
            </div>
            <form action="#" className="form">
                <div className="form-inputs">
                    <div className="box">
                        <label htmlFor="">Organisation Name</label>
                        <input type="text" />
                    </div>
                    <div className="box">
                        <label htmlFor="">Email*</label>
                        <input type="email" />
                    </div>
                    <div className="box">
                        <label htmlFor="">LinkedIn</label>
                        <input type="text" />
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

export default DAO
