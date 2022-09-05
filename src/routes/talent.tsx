import * as React from 'react'
// Main pages import
const Dashboard = React.lazy(
    () => import('./../components/Talent/Dashboard/dashboard'),
)
const Update = React.lazy(() => import('./../components/Talent/Update/update'))
const Welcome = React.lazy(
    () => import('./../components/Talent/Welcome/welcome'),
)
const Learn = React.lazy(() => import('./../components/Talent/Learn/learn'))
const CourseIntro = React.lazy(
    () => import('./../components/Talent/Course-Intro/Course-Intro'),
)
const CourseModule = React.lazy(
    () => import('./../components/Talent/Course-Module/course-module'),
)

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
