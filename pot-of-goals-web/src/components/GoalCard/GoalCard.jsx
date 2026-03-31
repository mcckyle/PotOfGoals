//****************************************************************************************
// Filename: GoalCard.jsx
// Date: 28 March 2026
// Author: Kyle McColgan
// Description: This file contains the goal card for goals in PotOfGoals.
//****************************************************************************************

import { useState } from "react";
import { updateGoalProgress } from "../../services/GoalService";
import EditGoalModal from "../EditGoalModal/EditGoalModal";
import PotOfGoldAnimation from "../PotOfGoldAnimation/PotOfGoldAnimation";
import "./GoalCard.css";

export default function GoalCard({ goal, token, onDelete })
{
	const [progress, setProgress] = useState(goal.progress);
	const [editingGoal, setEditingGoal] = useState(null);
	const [saving, setSaving] = useState(false);
	const [celebrate, setCelebrate] = useState(false);
	
	const handleProgressChange = async (value) =>
	{
		setProgress(value);
		
		if ( (value >= 100) && (progress < 100) )
		{
			setCelebrate(true);
		}
		
		try
		{
			setSaving(true);
			await updateGoalProgress(goal.id, value, token);
		}
		finally
		{
			setSaving(false);
		}
	};
	
	return (
	  <article
	    key={goal.id}
		className={`goal-card ${progress >= 100 ? "goal-card--complete" : ""}`}
	  >
	    <header className="goal-card-header">
		  <h3 className="goal-title">
		    {goal.title || "Untitled goal" }
		  </h3>
		</header>
		
		{goal.description && (
		  <p className="goal-description">{goal.description}</p>
		)}
		
		<PotOfGoldAnimation active={celebrate} />
		
		{/* Rainbow Progress. */}
		<div className="goal-progress">
		  <div className="goal-progress-track">
		    <div
			  className="goal-progress-fill"
			  style={{ width: `${progress ?? 0}%` }}
			/>
			
			<input
			  className="goal-progress-slider"
			  type="range"
			  min="0"
			  max="100"
			  value={progress}
			  onChange={(e) => handleProgressChange(Number(e.target.value))}
			/>
		  </div>
		  
		  <span className="goal-progress-value">
		    {progress ?? 0}%
		  </span>
		  
		  {progress >= 100 && (
		    <span className="goal-pot">🍀🏆</span>
		  )}
		</div>

		
		{goal.completed && (
		  <div className="goal-complete">
		    Goal completed ✨
		  </div>
		)}
		
		{saving && (
		  <div className="goal-saving">
		    Saving…
		  </div>
		)}
		{editingGoal && (
		  <EditGoalModal
		    goal={editingGoal}
			token={token}
			onClose={() => setEditingGoal(null)}
			onUpdated = {(updated) => {
				setProgress(updated.progress);
			}}
		  />
		)}
		
		<footer className="goal-actions">
		  <button
		    className="goal-action goal-action--secondary"
			onClick={() => setEditingGoal(goal)}
		  >
		    Edit
		  </button>
		  <button
		    className="goal-action goal-action--danger"
			onClick={() => onDelete(goal.id)}
		  >
		    Delete
		  </button>
		</footer>
	  </article>
	);
}