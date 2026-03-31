//***************************************************************************************
//
//     Filename: JwtConfig.java
//     Author: Kyle McColgan
//     Date: 7 March 2026
//     Description: This file contains the token configuration.
//
//***************************************************************************************

package com.mcckyle.pot_of_goals.security.config;

import com.mcckyle.pot_of_goals.security.jwt.JwtUtils;
import com.mcckyle.pot_of_goals.Services.UserService;
import org.springframework.context.annotation.Configuration;

//***************************************************************************************

@Configuration
public class JwtConfig
{
    private final JwtUtils jwtUtils;
    private final UserService userService;

    public JwtConfig(JwtUtils jwtUtils, UserService userService)
    {
        this.jwtUtils = jwtUtils;
        this.userService = userService;
    }
}

//***************************************************************************************
