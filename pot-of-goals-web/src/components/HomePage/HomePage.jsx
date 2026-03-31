//****************************************************************************************
// Filename: HomePage.jsx
// Date: 28 March 2026
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
		  <span className="home-eyebrow">Designed for goals</span>
		  
		    <h1 className="home-title">
			  Track what matters.
			  <br />
			  <span>Finish what you start.</span>
			</h1>
			
			<p className="home-subtitle">
		      A simple, modern space to track personal goals.
		    </p>
			
			<div className="home-actions">
		      <Link to="/dashboard" className="button">
			    Create a goal
			  </Link>
		    </div>
		</section>
		
		{/* Feature Cards Grid. */}
		<section className="home-grid" aria-label="Key features">
		  <article className="home-card surface">
		    <h2 className="card-title">Intentional design</h2>
			<p className="card-text">
			  No feeds. No distractions. Just goals you care about.
			</p>
		  </article>
		  
		  <article className="home-card surface">
		    <h2 className="card-title">Track your progress</h2>
			<p className="card-text">
			  Move goals forward naturally with simple progress tracking.
			</p>
		  </article>
		  
		  <article className="home-card surface">
		    <h2 className="card-title">Celebrate progress</h2>
			<p className="card-text">
			  Watch the rainbow fill as you move closer to completion.
			</p>
		  </article>
		</section>
	  </main>
	);
};