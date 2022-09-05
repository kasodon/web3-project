// Main pages import
import Homepage from './../pages/Home/Home'
import Register from './../pages/Register/Register'
import Login from './../pages/Auth/Auth'
import RegisterTalent from './../pages/Register/Talent/Talent'
import RegisterDAO from './../pages/Register/DAO/DAO'
import RegisterCreator from './../pages/Register/Creator/Creator'

// Talent pages import

// Layouts import
// import HomeLayout from './../layouts/home';
import TalentLayout from './../layouts/talent'
import DAOLayout from './../layouts/dao'
import CreatorLayout from './../layouts/creator'

// var BASEDIR = process.env.REACT_APP_BASEDIR;

var indexRoutes = [
    { path: '/login', name: 'Login', component: <Login /> },
    { path: '/register', name: 'Register', component: <Register /> },
    {
        path: '/register/talent',
        name: 'Register',
        component: <RegisterTalent />,
    },
    { path: '/register/dao', name: 'Register', component: <RegisterDAO /> },
    {
        path: '/register/creator',
        name: 'Register',
        component: <RegisterCreator />,
    },

    {
        path: '/talent/*',
        name: 'Talent Dashboard',
        component: <TalentLayout />,
    },
    // { path: "/talent", name: "Talent View", component: <TalentLayout /> },
    { path: '/dao/*', name: 'DAO Dashboard', component: <DAOLayout /> },
    {
        path: '/creator/*',
        name: 'Creator Dashboard',
        component: <CreatorLayout />,
    },

    { path: '/', name: 'Home', component: <Homepage /> },
]

export default indexRoutes
