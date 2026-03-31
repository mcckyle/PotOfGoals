//***************************************************************************************
//
//     Filename: GoalRepository.java
//     Author: Kyle McColgan
//     Date: 7 March 2026
//     Description: This file provides database functionality for the Goal entity.
//
//***************************************************************************************


package com.mcckyle.pot_of_goals.Data;

import com.mcckyle.pot_of_goals.Models.Goal;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface GoalRepository extends CrudRepository<Goal, Integer>
{
    List<Goal> findByUserIdOrderByCreatedAtDesc(Integer userId);
}
