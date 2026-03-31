//***************************************************************************************
//
//     Filename: GoalController.java
//     Author: Kyle McColgan
//     Date: 15 March 2026
//     Description: This file provides functionality for the Goal entity.
//
//***************************************************************************************

package com.mcckyle.pot_of_goals.Controllers;

import com.mcckyle.pot_of_goals.Models.Goal;
import com.mcckyle.pot_of_goals.Services.GoalService;
import com.mcckyle.pot_of_goals.payload.UpdateGoalRequest;
import com.mcckyle.pot_of_goals.security.UserDetailsImpl;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/goals")
public class GoalController
{
    private final GoalService goalService;

    public GoalController(GoalService goalService) {
        this.goalService = goalService;
    }

    @PostMapping
    public Goal createGoal(Authentication authentication, @RequestBody Map<String, String> request)
    {
        UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();

        return goalService.createGoal(
                user.getId(),
                request.get("title"),
                request.get("description")
        );
    }

    @GetMapping
    public List<Goal> getGoals(Authentication authentication)
    {
        UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();
        return goalService.getUserGoals(user.getId());
    }

    @PatchMapping("/{goalId}")
    public Goal updateGoal(
            @PathVariable Integer goalId,
            Authentication authentication,
            @RequestBody UpdateGoalRequest request
    )
    {
        UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();

        return goalService.updateGoal(
                goalId,
                user.getId(),
                request.title,
                request.description
        );
    }

    @PatchMapping("/{goalId}/progress")
    public Goal updateProgress(@PathVariable Integer goalId,
                               Authentication authentication,
                               @RequestBody Map<String, Integer> request
    )
    {
        UserDetailsImpl user = (UserDetailsImpl) authentication.getPrincipal();
        return goalService.updateProgress(goalId, user.getId(), request.get("progress"));
    }

    @DeleteMapping("/{goalId}")
    public void deleteGoal(@PathVariable Integer goalId)
    {
        goalService.deleteGoal(goalId);
    }
}
