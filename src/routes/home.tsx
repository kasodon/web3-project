// Main pages import
import Homepage from './../pages/Home/Home'

var BASEDIR = process.env.REACT_APP_BASEDIR

var homeRoutes = [
    { path: BASEDIR + '/', component: <Homepage />, type: 'child' },
]

export default homeRoutes
