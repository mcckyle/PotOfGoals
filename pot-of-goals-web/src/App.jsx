//****************************************************************************************
// Filename: App.jsx
// Date: 16 May 2026
// Author: Kyle McColgan
// Description: This file contains the React entry point for PotOfGoals.
//****************************************************************************************

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";

import Header from "./components/Header/Header.jsx";
import HomePage from './components/HomePage/HomePage.jsx';
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Dashboard from "./pages/Dashboard";

import "./App.css";

const App = () => {
      return (	
		  <BrowserRouter>
		    <div className="app-shell">
			  <div className="app-background">
			    <div className="ambient ambient-primary" />
				<div className="ambient ambient-secondary" />
			</div>
		    <div className="app">
			  <Header />
			  <main className="main">
				 <Routes>
				  {/* Public Routes. */}
				  <Route path="/" element={<HomePage />} />
				  <Route path="/login" element={<Login />} />
				  <Route path="/register" element={<Register />} />
				  
				  {/* Protected Routes. */}
				  <Route
				    path="/dashboard"
					element={
						<PrivateRoute>
						  <Dashboard />
						</PrivateRoute>
					}
				  />
				  <Route
				    path="/profile"
					element={
						<PrivateRoute>
						  <Profile />
						</PrivateRoute>
					}
				  />
				  <Route
				    path="/settings"
					element={
						<PrivateRoute>
						  <Settings />
						</PrivateRoute>
					}
				  />

				  {/* Fallback Route. */}
				  <Route
					path="*"
					element={
						<section className="not-found fade-in">
						  <h2>Page not found</h2>
						  <p>The page you requested does not exist.</p>
						</section>
					}
				  />
				</Routes>
			  </main>
			</div>
			</div>
		  </BrowserRouter>
		);
};

export default App;
