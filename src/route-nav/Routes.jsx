import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SectionList from "../sections/SectionList";
import SectionDetail from "../sections/SectionDetail";
import LoginPage from "../auth/Login";
import HomePage from "../auth/Homepage";
import PrivateRoute from "./PrivateRoute";
import Review from "../sections/Review";


function MyRoutes({ login, signup }) {

    return (
        <div>
            <Routes>
                <Route path="/"
                    element={<HomePage />} />
                

                <Route path="/login"    
                    element={<LoginPage login={login} />} />
              

                <Route path="/sections" element={<SectionList />} />

                <Route path="/sections/:handle" element={<SectionDetail />} />

                <Route path="/review" element={<Review />} />

                
            </Routes>
        </div>
    )
}

export default MyRoutes;