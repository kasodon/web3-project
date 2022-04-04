import './course-module.scss'

function CourseModule() {
    return (
        <div className="module">
            <div className="module-header">
                <div className="row-title">
                    <h1>Beginners Course</h1>
                </div>
                <div className="row-box">
                    <div className="course-box">
                        <div className="course-box-header">
                            <h4>Course Progress</h4>
                            <p>
                                Track your progress and know how you are doing
                            </p>
                        </div>
                        <div className="progress">
                            <p className="percent">80%</p>
                            <p className="percent-text">You’re almost there</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="module-content">
                <h2>Lessons on the course</h2>
            </div>
        </div>
    )
}

export default CourseModule
