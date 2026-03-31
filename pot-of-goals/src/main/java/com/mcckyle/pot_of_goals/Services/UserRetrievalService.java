//***************************************************************************************
//
//     Filename: UserRetrievalService.java
//     Author: Kyle McColgan
//     Date: 7 March 2026
//     Description: This file provides shared user functionality.
//
//***************************************************************************************

package com.mcckyle.pot_of_goals.Services;

import com.mcckyle.pot_of_goals.Models.User;
import java.util.Optional;

//***************************************************************************************

public interface UserRetrievalService
{
    Optional<User> findByUsername(String username);
}

//***************************************************************************************
