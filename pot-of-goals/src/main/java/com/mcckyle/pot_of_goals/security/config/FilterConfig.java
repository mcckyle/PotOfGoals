//***************************************************************************************
//
//     Filename: FilterConfig.java
//     Author: Kyle McColgan
//     Date: 7 March 2026
//     Description: This file holds the auth filter configuration.
//
//***************************************************************************************

package com.mcckyle.pot_of_goals.security.config;

import com.mcckyle.pot_of_goals.security.JwtAuthenticationFilter;
import com.mcckyle.pot_of_goals.security.UserDetailsServiceImpl;
import com.mcckyle.pot_of_goals.security.jwt.JwtUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//***************************************************************************************

@Configuration
public class FilterConfig
{
    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter(JwtUtils jwtUtils, UserDetailsServiceImpl userDetailsService)
    {
        return new JwtAuthenticationFilter(jwtUtils, userDetailsService);
    }
}

//***************************************************************************************
