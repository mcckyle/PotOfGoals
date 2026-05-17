//****************************************************************************************
// Filename: Header.jsx
// Date: 16 May 2026
// Author: Kyle McColgan
// Description: This file contains the Header component for PotOfGoals.
//****************************************************************************************

import { useEffect, useState, useContext, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import "./Header.css";  // Import the CSS file here.

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const avatarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  const navItem = (path) => `nav-item ${isActive(path) ? "active" : ""}`;
  
  async function handleLogout(){
	  //Call global logout logic.
	  await logout(); //Redirect AFTER logout state is fully cleared.
	  navigate("/login", { replace: true }); 
  };
  
  //Close the dropdown menu when clicking outside the menu.
  useEffect(() => {
	  if (!menuOpen)
	  {
		  return;
	  }
	  
	  const handleClickOutside = (event) => {
		  if ((avatarRef.current) && (!avatarRef.current.contains(event.target)))
		  {
			  setMenuOpen(false);
		  }
	  };
	  
	  const handleEscape = (event) => {
		  if (event.key === "Escape")
		  {
			  setMenuOpen(false);
		  }
	  };
	  
	  document.addEventListener("mousedown", handleClickOutside);
	  document.addEventListener("keydown", handleEscape);
	  return () =>
	  {
		  document.removeEventListener("mousedown", handleClickOutside);
		  document.removeEventListener("keydown", handleEscape);
	  };
  }, [menuOpen]);
  
  return (
	  <header className="header">
		<div className="header-inner">
		
		  {/* Left Logo. */}
		  <Link to="/" className="logo" aria-label="PotOfGoals home">
		    PotOfGoals
		  </Link>
		
		  {/* Primary Navigation. */}
		  <nav className="nav" aria-label="Primary Navigation">
		    <Link
			  to="/"
			  className={navItem("/")}
			  aria-current={isActive("/") ? "page" : undefined}
			>
			  Home
			</Link>
			<Link
			  to="/dashboard"
			  className={navItem("/dashboard")}
			  aria-current={isActive("/dashboard") ? "page" : undefined}
			>
			  Dashboard
			</Link>
		  </nav>
		
		  {/* Right Side: Auth / User Avatar. */}
		  <div className="header-actions">
		   {user ? (
		    <div
			  ref={avatarRef}
			  className="avatar-wrapper"
			>
			  <button
			    type="button"
				className="avatar-button"
				aria-haspopup="menu"
				aria-expanded={menuOpen}
				aria-label="Open user menu"
				onClick={() => setMenuOpen((open) => !open)}
			  >
				  <div className="avatar">
					{user.username?.charAt(0).toUpperCase() || "?"}
				  </div>
			  </button>
			  
			  <div
			    className={`menu ${menuOpen ? "open" : ""}`}
				role="menu"
			  >
			    <Link to="/profile" className="menu-item" role="menuitem" onClick={() => setMenuOpen(false)}>
				  Profile
				</Link>
				<Link to="/settings" className="menu-item" role="menuitem" onClick={() => setMenuOpen(false)}>
				  Settings
				</Link>
				<div className="menu-divider" />
				<button className="menu-item danger" role="menuitem" onClick={handleLogout}>
				  Log out
				</button>
			  </div>
			</div>
		) : (
		  <div className="auth-links">
		    <Link to="/login" className="button secondary">Login</Link>
		    <Link to="/register" className="button">Register</Link>
		  </div>
		)}
		</div>
	  </div>
	</header>
  );
};

export default Header;