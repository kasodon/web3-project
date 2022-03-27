import React, { useState } from 'react'
import './Register.scss'
import { Link } from 'react-router-dom'

// interface RegisterProps {}

function Register() {
    const [url, setUrl] = useState('register/talent')

    const handleChange = (event: {
        target: { value: React.SetStateAction<string> }
    }) => {
        setUrl(event.target.value)
    }
    return (
        <div className="Register" data-testid="Register">
            <div className="register-box">
                <div className="register-header">
                    <h1>Welcome to Partnr</h1>
                    <p>
                        Hey there! welcome to Partnr. Here you can learn, earn,
                        and build your resume on-chain. Choose a path you want
                        to take on Partnr
                    </p>
                </div>
                <form action="" className="form">
                    <div className="box-select">
                        <input
                            type="radio"
                            id="talent"
                            name="join-partnr"
                            value="register/talent"
                            onChange={handleChange}
                            defaultChecked
                        />
                        <label htmlFor="talent">
                            <div className="box-select-group">
                                <div className="green-box"></div>
                                <div className="image-box"></div>
                                <h4>Join as talent</h4>
                                <p>
                                    Take courses, grow, participate in bounties
                                </p>
                            </div>
                        </label>
                        <input
                            type="radio"
                            id="company"
                            name="join-partnr"
                            value="register/dao"
                            onChange={handleChange}
                        />
                        <label htmlFor="company">
                            <div className="box-select-group">
                                <div className="green-box"></div>
                                <div className="image-box"></div>
                                <h4>Join as Web3 company</h4>
                                <p>Create bounties and tasks for talents</p>
                            </div>
                        </label>
                        <input
                            type="radio"
                            id="creator"
                            name="join-partnr"
                            value="register/creator"
                            onChange={handleChange}
                        />
                        <label htmlFor="creator">
                            <div className="box-select-group">
                                <div className="green-box"></div>
                                <div className="image-box"></div>
                                <h4>Join as creator</h4>
                                <p>Create bounties and tasks for talents</p>
                            </div>
                        </label>
                    </div>
                    <div className="actions">
                        <Link
                            to={{
                                pathname: `/${url}`,
                            }}
                        >
                            <button>Continue</button>
                        </Link>
                        <p>Already a member? Log in</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
