//***************************************************************************************
//
//     Filename: UserRepository.java
//     Author: Kyle McColgan
//     Date: 7 March 2026
//     Description: This file provides database functionality for the User entity.
//
//***************************************************************************************

package com.mcckyle.pot_of_goals.Data;

import com.mcckyle.pot_of_goals.Models.User;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

//***************************************************************************************

public interface UserRepository extends CrudRepository<User, Integer>
{
    Optional<User> findByEmail(String email);
    Boolean existsByEmail(String email);
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
}

//***************************************************************************************
