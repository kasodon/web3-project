import './learn.scss'
import pointyImg from './../../../assets/images/Pointy.svg'

function Learn() {
    return (
        <div className="learn">
            <div className="learn-sketch"></div>
            <div className="learn-content">
                <div className="content-header">
                    <h2>Start your learning journey</h2>
                    <p>
                        Congratulations on getting to this point, we want you
                        earn more and grow as well,<br></br> that’s why we have
                        carefully curated these courses to help.
                    </p>
                </div>
                <div className="content-body">
                    <div className="content-body-box">
                        <div className="box-text">
                            <h3> Level 1 Course</h3>
                            <p>
                                {' '}
                                For users who knows there way around the web3
                                space.
                            </p>
                        </div>
                        <button>Enroll for $600</button>
                        <div className="list">
                            <h4>Benefits:</h4>
                            <ul>
                                <li> Everything on beginners plus</li>
                                <li> Build your resume on chain</li>
                                <li> Learn to Earn</li>
                                <li>
                                    {' '}
                                    Access to 1:1 mentorship with 10 speakers
                                </li>
                                <li>
                                    {' '}
                                    Side hustle - work on Web 3 job
                                    opportunities
                                </li>
                                <li> How to earn in Crypto?</li>
                                <li>
                                    {' '}
                                    Customised help mapping your journey from
                                    Web 2 to Web 3
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-body-box shadow">
                        <div className="box-text">
                            <h3> Beginners Course</h3>
                            <p>
                                {' '}
                                For users still getting a hand of web3 and it’s
                                benefits
                            </p>
                        </div>
                        <button> Enroll for free</button>
                        <div className="list">
                            <h4> Benefits:</h4>
                            <ul>
                                <li> Hands on learning</li>
                                <li>
                                    {' '}
                                    Access to 4 live masterclasses by Industry
                                    pioneers
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-body-box">
                        <div className="box-text">
                            <h3> Level 2 Course</h3>
                            <p>
                                {' '}
                                For users who wants extra knowledge about web3
                            </p>
                        </div>
                        <button>Enroll for $1,000</button>
                        <div className="list">
                            <h4>Benefits:</h4>
                            <ul>
                                <li> Everything on level 1 course plus</li>
                                <li>
                                    {' '}
                                    Secret Sauce - How to make it to the top 1%
                                    within the industry? Use the secret sauce to
                                    stand out
                                </li>
                                <li>
                                    {' '}
                                    Access to special privileges unlocked with
                                    partnr's network marketplace (that's
                                    designed for the top 1%)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pointy-holder">
                <img src={pointyImg} alt="" />
            </div>
        </div>
    )
}

export default Learn
