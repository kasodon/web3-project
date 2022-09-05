import './welcome.scss'
import learnImg from './../../../assets/images/Learn_to_earn.svg'
import workImg from './../../../assets/images/Live_to_earn.svg'
import liveImg from './../../../assets/images/Work_to_earn.svg'

function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome-sketch"></div>
            <div className="welcome-content">
                <div className="content-header">
                    <h2>Welcome to Partnr</h2>
                    <p>
                        We are excited to have you onboard and trust us, we have
                        got something exciting for you. <br></br> Choose your
                        path and start your journey Once again, welcome on board
                    </p>
                </div>
                <div className="content-body">
                    <div className="content-body-box">
                        <img src={learnImg} alt="" />
                        <div className="box-text">
                            <h3>Learn to Earn</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Tortor dictumst tristique ut.
                            </p>
                        </div>
                        <button>Choose Path</button>
                    </div>
                    <div className="content-body-box shadow">
                        <img src={liveImg} alt="" />
                        <div className="box-text">
                            <h3>Work to Earn</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Tortor dictumst tristique ut.
                            </p>
                        </div>
                        <button>Choose Path</button>
                    </div>
                    <div className="content-body-box">
                        <img src={workImg} alt="" />
                        <div className="box-text">
                            <h3>Live to Earn</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Tortor dictumst tristique ut.
                            </p>
                        </div>
                        <button>Choose Path</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
