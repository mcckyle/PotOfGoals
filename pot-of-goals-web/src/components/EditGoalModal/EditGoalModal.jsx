//****************************************************************************************
// Filename: EditGoalModal.jsx
// Date: 28 March 2026
// Author: Kyle McColgan
// Description: This file contains a modal for editing goals for PotOfGoals.
//****************************************************************************************

import { useState, useEffect } from "react";
import { updateGoal } from "../../services/GoalService";
import "./EditGoalModal.css"; //Import the custom CSS file.

export default function EditGoalModal({ goal, token, onClose, onUpdated })
{
	const [title, setTitle] = useState(goal.title);
	const [description, setDescription] = useState(goal.description || "");
	const [saving, setSaving] = useState(false);
	
	//Close on Escape key press...
	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [onClose]);

    const handleSubmit = async (e) =>
	{
		e.preventDefault();
		
		try
		{
			setSaving(true);
			
			const updated = await updateGoal(
			  goal.id,
			  { title, description },
			  token
			);
			
			onUpdated(updated);
			onClose();
		}
		finally
		{
			setSaving(false);
		}
	};

    return (
	  <div
	    className="edit-goal-overlay fade-in"
		onClick={onClose}
		role="dialog"
		aria-modal="true"
	  >
		<form
		  className="edit-goal-modal"
		  onSubmit={handleSubmit}
		  onClick={(e) => e.stopPropagation()}
		>
		  <header className="edit-goal-header">
		    <h2>Edit goal</h2>
		  </header>
		  
		  <div className="edit-goal-fields">
			  <input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Goal title"
				required
				autoFocus
			  />
			  <textarea
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder="Description (optional)"
				rows="3"
			  />
		  </div>
		  
		  <footer className="edit-goal-actions">
		      <button
			    type="button"
				className="button secondary"
				onClick={onClose}
			  >
				Cancel
			  </button>
			  <button
			    type="submit"
				className="button"
				disabled={saving}
			  >
			    {saving ? "Saving…" : "Save"}
			  </button>
		  </footer>
	  </form>
	</div>
    );
};