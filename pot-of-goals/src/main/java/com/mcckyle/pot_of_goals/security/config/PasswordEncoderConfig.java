//***************************************************************************************
//
//     Filename: PasswordEncoderConfig.java
//     Author: Kyle McColgan
//     Date: 7 March 2026
//     Description: This file implements a custom PasswordEncoder configuration.
//
//***************************************************************************************

package com.mcckyle.pot_of_goals.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

//***************************************************************************************

@Configuration
public class PasswordEncoderConfig
{
    @Bean
    public PasswordEncoder passwordEncoder()
    {
        return new BCryptPasswordEncoder();
    }
}

//***************************************************************************************
