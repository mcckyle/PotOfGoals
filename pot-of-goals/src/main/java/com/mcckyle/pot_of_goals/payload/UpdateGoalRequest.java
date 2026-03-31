//***************************************************************************************
//
//     Filename: UpdateGoalRequest.java
//     Author: Kyle McColgan
//     Date: 15 March 2026
//     Description: This file contains the format for goal-related requests.
//
//***************************************************************************************

package com.mcckyle.pot_of_goals.payload;

//***************************************************************************************

public class UpdateGoalRequest
{
    public String title;
    public String description;

    public UpdateGoalRequest() {}

    public UpdateGoalRequest(String title, String description)
    {
        this.title = title;
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
