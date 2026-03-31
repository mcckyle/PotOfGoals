//***************************************************************************************
//
//     Filename: GoalService.java
//     Author: Kyle McColgan
//     Date: 15 March 2026
//     Description: This file provides business logic related to Goals.
//
//***************************************************************************************

package com.mcckyle.pot_of_goals.Services;

import com.mcckyle.pot_of_goals.Data.GoalRepository;
import com.mcckyle.pot_of_goals.Data.UserRepository;
import com.mcckyle.pot_of_goals.Models.Goal;
import com.mcckyle.pot_of_goals.Models.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoalService
{
    private final GoalRepository goalRepository;
    private final UserRepository userRepository;

    public GoalService(GoalRepository goalRepository, UserRepository userRepository) {
        this.goalRepository = goalRepository;
        this.userRepository = userRepository;
    }

    public Goal createGoal(Integer userId, String title, String description)
    {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Goal goal = new Goal(title,  description, user);
        return goalRepository.save(goal);
    }

    public List<Goal> getUserGoals(Integer userId)
    {
        return goalRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    public Goal updateGoal(Integer goalId, Integer userId, String title, String description)
    {
        Goal goal = goalRepository.findById(goalId)
                .orElseThrow(() -> new RuntimeException("Goal not found"));

        if (!goal.getUser().getId().equals(userId))
        {
            throw new RuntimeException("User not found");
        }

        if ( (title != null) && (!title.isBlank()))
        {
            goal.setTitle(title);
        }

        if (description != null)
        {
            goal.setDescription(description);
        }

        return goalRepository.save(goal);
    }

    public Goal updateProgress(Integer goalId, Integer userId, Integer progress)
    {
        Goal goal = goalRepository.findById(goalId)
                .orElseThrow(() -> new RuntimeException("Goal not found"));

        if (!goal.getUser().getId().equals(userId))
        {
            throw new RuntimeException("Unauthorized!");
        }

        goal.setProgress(progress);
        return goalRepository.save(goal);
    }

    public void deleteGoal(Integer goalId)
    {
        goalRepository.deleteById(goalId);
    }
}
