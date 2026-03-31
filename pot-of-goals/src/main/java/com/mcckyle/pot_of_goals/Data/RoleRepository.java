//***************************************************************************************
//
//     Filename: RoleRepository.java
//     Author: Kyle McColgan
//     Date: 7 March 2026
//     Description: This file provides database connectivity
//                  for role based access control functionality.
//
//***************************************************************************************

package com.mcckyle.pot_of_goals.Data;

import com.mcckyle.pot_of_goals.Models.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

//***************************************************************************************

@Repository
public interface RoleRepository extends CrudRepository<Role, Integer>
{
    Role findByName(String name); //For finding a role by its name...
}

//***************************************************************************************