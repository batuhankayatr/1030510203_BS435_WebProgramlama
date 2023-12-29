import React, { useContext, useEffect } from "react";

import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const sessionValue = sessionStorage.getItem("auth");
    console.log(sessionValue);

    return sessionValue ? <Outlet /> : <Navigate to="/Home" />;
};

export default PrivateRoutes;