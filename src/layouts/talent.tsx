// import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './../components/Talent/Header/header'
import Footer from './../components/Talent/Footer/footer'

import talentRoutes from './../routes/talent'

function TalentLayout() {
    return (
        <div>
            <Header />
            <Routes>
                {talentRoutes.map((prop, key) => {
                    console.log('prop:', prop.path)
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
            <Footer />
        </div>
    )
}

export default TalentLayout
