//****************************************************************************************
// Filename: PotOfGoldAnimation.jsx
// Date: 28 March 2026
// Author: Kyle McColgan
// Description: This file contains a custom animation for celebrating goals for PotOfGoals.
//****************************************************************************************

import { useEffect, useState } from "react";
import "./PotOfGoldAnimation.css"; //Import the custom CSS file.

export default function PotOfGoldAnimation({ active })
{
	const [visible, setVisible] = useState(false);
	
	useEffect(() => {
		if (!active)
		{
			return;
		}
		
		setVisible(true);
			
		const timer = setTimeout(() => {
			setVisible(false);
		}, 2000);
		
		return () => clearTimeout(timer);
	}, [active]);
	
	if (!visible)
	{
		return null;
	}
	
	return (
	  <div className="pot-animation">
	    <div className="pot-animation-rainbow" />
		<div className="pot-animation-gold">🍀🏆</div>
		<div className="pot-animation-sparkles">
		  <span />
		  <span />
		  <span />
		  <span />
		</div>
	  </div>
	);
}