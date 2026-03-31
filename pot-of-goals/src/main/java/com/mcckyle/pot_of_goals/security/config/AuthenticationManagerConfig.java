//***************************************************************************************
//
//     Filename: AuthenticationManagerConfig.java
//     Author: Kyle McColgan
//     Date: 7 March 2026
//     Description: This file implements a custom authentication bean.
//
//***************************************************************************************

package com.mcckyle.pot_of_goals.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;

//***************************************************************************************

@Configuration
public class AuthenticationManagerConfig
{

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception
    {
        return authConfig.getAuthenticationManager();
    }
}

//***************************************************************************************
