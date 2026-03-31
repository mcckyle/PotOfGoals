//****************************************************************************************
// Filename: Dashboard.jsx
// Date: 28 March 2026
// Author: Kyle McColgan
// Description: This file contains the frontend dashboard for PotOfGoals.
//****************************************************************************************

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUserGoals, deleteGoal } from "../services/GoalService";

import GoalCard from "../components/GoalCard/GoalCard.jsx";
import GoalCreator from "../components/GoalCreator/GoalCreator.jsx";

import "./Dashboard.css";

export default function Dashboard()
{
	const { accessToken } = useContext(AuthContext);
	
	const [goals, setGoals] = useState([]);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		async function load()
		{
			try
			{
				const data = await getUserGoals(accessToken);
				setGoals(data);
			}
			finally
			{
				setLoading(false);
			}
		}
		
		load();
	}, [accessToken]);
	
	const handleCreated = (goal) =>
	{
		setGoals((prev) => [goal, ...prev]);
	};
	
	const handleDelete = async (id) =>
	{
		await deleteGoal(id, accessToken);
		setGoals((prev) => prev.filter((g) => g.id !== id));
	};
	
	return (
	  <main className="page goals-dashboard fade-in">
	    <header className="dashboard-header">
	      <h1 className="page-title">My Goals</h1>
		  <p className="dashboard-subtitle">
		    Track progress and stay consistent.
		  </p>
		</header>
		
		<section className="dashboard-create">
          <GoalCreator token={accessToken} onCreated={handleCreated} />
		</section>
		
		{loading && <p className="dashboard-loading">Loading goals…</p>}
		
		{ (!loading) && (goals.length === 0) && (
		  <section className="dashboard-empty surface">
		    <p className="dashboard-empty-title">
			  No goals yet
			</p>
			<p className="dashboard-empty-text">
		      Start by creating your first goal above.
		    </p>
		  </section>
		)}
		
		{goals.length > 0 && (
		  <section className="goals-grid">
		    {goals.map((goal) => (
		      <GoalCard
			    key={goal.id}
			    goal={goal}
			    token={accessToken}
			    onDelete={handleDelete}
			  />
		  ))}
		</section>
		)}
	</main>
	);
}