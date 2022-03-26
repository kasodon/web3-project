// Main pages import
import Dashboard from './../components/Talent/Dashboard/dashboard'
import Update from './../components/Talent/Update/update'

var talentRoutes = [
    { path: 'dashboard', name: 'Talent Dashboard', component: <Dashboard /> },
    { path: 'update', name: 'Talent Update', component: <Update /> },
]

export default talentRoutes
