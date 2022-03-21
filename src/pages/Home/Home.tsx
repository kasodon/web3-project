import React, { FC } from 'react'
import './Home.scss'

interface HomeProps {}

const Home: FC<HomeProps> = () => (
    <div className="Home" data-testid="Home">
        <header className="Home-header">
            <img
                src={require('../../assets/images/logo.png')}
                className="Home-logo"
                alt="logo"
            />
        </header>
    </div>
)

export default Home
