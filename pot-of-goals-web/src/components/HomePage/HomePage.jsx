//****************************************************************************************
// Filename: HomePage.jsx
// Date: 4 July 2026
// Author: Kyle McColgan
// Description: This file contains the HomePage component for PotOfGoals.
//****************************************************************************************

import { Link } from "react-router-dom";
import "./HomePage.css";

const features = [
  {
	  title: "Focused by design",
	  description: "A calm interface centered entirely around personal progress."
  },
  {
	  title: "Track momentum",
	  description: "Update goals naturally with simple progress tracking that stays out of your way."
  },
  {
	  title: "Stay motivated",
	  description: "Watch progress evolve visually as you move closer toward completion."
  }
];

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
		  {features.map((feature) => (
		    <article key={feature.title} className="home-card surface">
		      <h2 className="card-title">{feature.title}</h2>
			  <p className="card-text">{feature.description}</p>
			</article>
		  ))}
		</section>
	  </main>
	);
};