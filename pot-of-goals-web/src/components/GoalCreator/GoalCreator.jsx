//****************************************************************************************
// Filename: GoalCreator.jsx
// Date: 28 March 2026
// Author: Kyle McColgan
// Description: This file contains the goal creation form for PotOfGoals.
//****************************************************************************************

import { useState } from "react";
import { createGoal } from "../../services/GoalService";
import "./GoalCreator.css";

export default function GoalCreator({ token, onCreated })
{
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [saving, setSaving] = useState(false);
	
	const handleSubmit = async (e) =>
	{
		e.preventDefault();
		
		if ( (!title.trim()) || (saving))
		{
			return;
		}
		
		try
		{
			setSaving(true);
			const goal = await createGoal(
			  { title: title.trim(), description: description.trim() },
			  token
			);
			
			setTitle("");
			setDescription("");
			onCreated(goal);
		}
		finally
		{
			setSaving(false);
		}
	};
	
	return (
	  <form className="goal-create surface" onSubmit={handleSubmit}>
	    <div className="goal-create-fields">
			<input
			  type="text"
			  placeholder="What do you want to achieve?"
			  value={title}
			  onChange={(e) => setTitle(e.target.value)}
			  autoFocus
			/>
			<input
			  type="text"
			  placeholder="Add a short note (optional)"
			  value={description}
			  onChange={(e) => setDescription(e.target.value)}
			/>
		</div>
		
		<div className="goal-create-actions">
		  <button
		    type="submit"
			className="button"
			disabled={(!title.trim()) || (saving)}
		  >
		    {saving ? "Adding…" : "Add goal"}
		  </button>
		</div>
	  </form>
	);
}