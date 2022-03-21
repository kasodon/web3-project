import React, { FC } from 'react'
import './Register.scss'

interface RegisterProps {}

const Register: FC<RegisterProps> = () => (
    <div className="Register" data-testid="Register">
        <div className="register-box">
            <div className="header">
                <h1>Welcome to Partnr</h1>
                <p>
                    Hey there! welcome to Partnr. Here you can learn, earn, and
                    build your resume on-chain. Choose a path you want to take
                    on Partnr
                </p>
            </div>
            <form action="">
                <div className="box-select">
                    <div className="bob-select-talent">
                        <input
                            type="radio"
                            id="talent"
                            name="join-partnr"
                            value="TALENT"
                        />
                        <label htmlFor="talent">Talent</label>
                    </div>
                    <div className="bob-select-company">
                        <input
                            type="radio"
                            id="company"
                            name="join-partnr"
                            value="COMPANY"
                        />
                        <label htmlFor="company">Company</label>
                    </div>
                    <div className="bob-select-creator">
                        <input
                            type="radio"
                            id="creator"
                            name="join-partnr"
                            value="CREATOR"
                        />
                        <label htmlFor="creator">Creator</label>
                    </div>
                </div>
                <div className="actions">
                    <button>Continue</button>
                    <p>Already a member? Log in</p>
                </div>
            </form>
        </div>
    </div>
)

export default Register
