import cardImg from './../../../assets/images/profile_pic.png'
import overlayImg from './../../../assets/images/video-overlay.png'
import FAQ from './../FAQ/faq'
import './Course-Intro.scss'

function CourseIntro() {
    return (
        <div className="intro">
            <div className="intro-sketch"></div>
            <div className="intro-content">
                <div className="intro-header">
                    <div className="intro-title">
                        <div className="intro-title-beginning">
                            <div className="row-one">
                                <h1>Beginner Course</h1>
                            </div>
                            <div className="row-two">
                                <p>Created by:</p>
                                <div className="author">
                                    <img src={cardImg} alt="" />{' '}
                                    <p>Johnson DAO</p>
                                </div>
                            </div>
                        </div>
                        <div className="intro-title-end">
                            <p>
                                Internet as we know it has evolved exponentially
                                in the past couple of decades. From its access
                                limited to only a select few people and cyber
                                cafes, it’s never been more accessible now. So
                                much that a common person cannot think of
                                leading their life without the World Wide Web.
                                And as we all know... Read more
                            </p>
                        </div>
                    </div>
                    <div className="intro-cta">
                        <div className="intro-cta-box">
                            <h3>Beginners Course</h3>
                            <p className="text-detail">
                                For users still getting a hand of <br />
                                web3 and it’s benefits
                            </p>
                            <p className="text-det">
                                Course duration - 1 hour <br />
                                30 minutes
                            </p>
                            <button>Enroll for free</button>
                        </div>
                    </div>
                </div>
                <video controls poster={overlayImg}>
                    <source
                        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
                        type="video/mp4"
                    />
                    Sorry, your browser doesn't support embedded videos.
                </video>
                <div className="modules">
                    <div className="module-header">
                        <div className="box-one">
                            <h2>Modules</h2>
                            <p>
                                While the evolution of each stage of the
                                internet has been a gradual transition, experts
                                have found it quite easy to divide it into 3
                                stages. Web 1.0, Web 2.0, and the latest one Web
                                3.0. Without any further ado, let’s jump in
                                deeper into what each of these terms and stages
                                mean:
                            </p>
                        </div>
                        <div className="box-two">
                            <h3>Reward</h3>
                            <p>
                                You will gain extra{' '}
                                <strong>10 Partnr tokens</strong> once the
                                course is completed
                            </p>
                        </div>
                    </div>
                    <div className="module-body">
                        <div className="body-box">
                            <div className="box-deco"></div>
                            <h3>Module 1 - Evolution of the web</h3>
                            <hr />
                            <p>
                                Usually referred to as the read-only web, this
                                was the first stage of the internet revolution.
                                The classic features were static web pages,
                                where users could only consume content and not
                                communicate with the content creator.
                            </p>
                        </div>
                        <div className="body-box">
                            <div className="box-deco"></div>
                            <h3>Module 2 - Web 2.0</h3>
                            <hr />
                            <p>
                                Called the Social web or read-write-web, this
                                was (is) the second stage of the internet. More
                                emphasis was given to user accessibility,
                                interaction, ease of use, and participatory
                                culture.
                            </p>
                        </div>
                        <div className="body-box">
                            <div className="box-deco"></div>
                            <h3>Module 3 - Web 3.0</h3>
                            <hr />
                            <p>
                                The newest evolution of WWW - Semantic Web or
                                read-write-execute is changing its focus from
                                the front-end user experience to the back-end
                                database.
                            </p>
                        </div>
                        <div className="body-box">
                            <div className="box-deco"></div>
                            <h3>Module 4 - Web 3.0</h3>
                            <hr />
                            <p>
                                The newest evolution of WWW - Semantic Web or
                                read-write-execute is changing its focus from
                                the front-end user experience to the back-end
                                database.
                            </p>
                        </div>
                        <div className="body-box">
                            <div className="box-deco"></div>
                            <h3>Module 5 - Web 3.0</h3>
                            <hr />
                            <p>
                                The newest evolution of WWW - Semantic Web or
                                read-write-execute is changing its focus from
                                the front-end user experience to the back-end
                                database.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ />
        </div>
    )
}

export default CourseIntro
