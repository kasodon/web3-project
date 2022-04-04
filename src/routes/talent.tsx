// Main pages import
import Dashboard from './../components/Talent/Dashboard/dashboard'
import Update from './../components/Talent/Update/update'
import Welcome from './../components/Talent/Welcome/welcome'
import Learn from './../components/Talent/Learn/learn'
import CourseIntro from './../components/Talent/Course-Intro/Course-Intro'
import CourseModule from './../components/Talent/Course-Module/course-module'

var talentRoutes = [
    { path: 'dashboard', name: 'Talent Dashboard', component: <Dashboard /> },
    { path: 'profile', name: 'Profile Build', component: <Update /> },
    { path: 'welcome', name: 'Talent Update', component: <Welcome /> },
    { path: 'learn', name: 'Talent Update', component: <Learn /> },
    {
        path: 'course-intro',
        name: 'Course Introduction',
        component: <CourseIntro />,
    },
    {
        path: 'course-module',
        name: 'Course Introduction',
        component: <CourseModule />,
    },
]

export default talentRoutes
