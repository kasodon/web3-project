import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './../components/Talent/Header/header'
import Footer from './../components/Talent/Footer/footer'
import './talent.scss'

import talentRoutes from './../routes/talent'

function TalentLayout() {
    return (
        <div className="talent">
            <Header />
            <React.Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    {talentRoutes.map((prop, key) => {
                        return (
                            <Route
                                path={prop.path}
                                key={key}
                                element={prop.component}
                            ></Route>
                        )
                    })}
                    {/* <Route path={"/talent/dashbord"} element={<Dashboard />} />
            <Route path={"/talent/update"} element={<Update />} /> */}
                </Routes>
            </React.Suspense>
            <Footer />
        </div>
    )
}

export default TalentLayout
