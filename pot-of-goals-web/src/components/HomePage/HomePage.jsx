//****************************************************************************************
// Filename: HomePage.jsx
// Date: 16 May 2026
// Author: Kyle McColgan
// Description: This file contains the HomePage component for PotOfGoals.
//****************************************************************************************

import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage()
{
	return (
	  <main className="home page-centered fade-in">
	    {/* Hero Section. */}
	    <section className="home-hero">
		  <span className="home-eyebrow">Simple goal tracking</span>
		  
		    <h1 className="home-title">
			  Build momentum
			  <br />
			  <span>one goal at a time.</span>
			</h1>
			
			<p className="home-subtitle">
		      A dedicated space for tracking progress
			  without distractions or unnecessary complexity.
		    </p>
			
			<div className="home-actions">
		      <Link to="/dashboard" className="button">
			    Start tracking
			  </Link>
		    </div>
		</section>
		
		{/* Feature Cards Grid. */}
		<section className="home-grid" aria-label="Key features">
		  <article className="home-card surface">
		    <h2 className="card-title">Focused by design</h2>
			<p className="card-text">
			  A calm interface centered around entirely
			  around personal progress.
			</p>
		  </article>
		  
		  <article className="home-card surface">
		    <h2 className="card-title">Track momentum</h2>
			<p className="card-text">
			  Update goals naturally with simple
			  progress tracking that stays out of
			  your way.
			</p>
		  </article>
		  
		  <article className="home-card surface">
		    <h2 className="card-title">Stay motivated</h2>
			<p className="card-text">
			  Watch progress evolve visually as you
			  move closer toward completion.
			</p>
		  </article>
		</section>
	  </main>
	);
};