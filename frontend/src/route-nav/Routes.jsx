import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SectionList from "../sections/SectionList";
import SectionDetail from "../sections/SectionDetail";
import LoginPage from "../auth/Login";
import HomePage from "../auth/Homepage";
import PrivateRoute from "./PrivateRoute";
import Review from "../sections/Review";
import AddWords from "../sections/AddWords";
import LoginHandler from "../auth/LoginHandler";


const MyRoutes = () => {
    const { login } = LoginHandler();

    return (
        <div>
            <Routes>
                
                <Route path="/"    
                    element={<LoginPage login={login} />} />
                <Route path="/home"
                    element={<HomePage />} />

                <Route path="/sections" element={<SectionList />} />

                <Route path="/sections/:handle" element={<SectionDetail />} />

                <Route path="/review" element={<Review />} />

                <Route path="/sections/:handle/new-word" element={<AddWords />} />


                
            </Routes>
        </div>
    )
}

export default MyRoutes;