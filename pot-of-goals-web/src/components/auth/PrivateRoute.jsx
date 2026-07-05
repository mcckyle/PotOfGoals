//****************************************************************************************
// Filename: PrivateRoute.jsx
// Date: 4 July 2026
// Author: Kyle McColgan
// Description: This file contains the wrapper for private routes for PotOfGoals.
//****************************************************************************************

import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//PrivateRoute Component.
const PrivateRoute = ({ children }) => {
	const authorized = useAuth();
	
	if (authorized === null)
	{
		return (
		  <section className="loading-screen fade-in">
		    <div className="loading-spinner" />
			<p>Signing you in…</p>
		  </section>
		);
	}
	
	if (!authorized)
	{
		return <Navigate to="/login" replace />;
	}
	
    return children;
};

export default PrivateRoute;