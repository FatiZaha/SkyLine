package com.airlines.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.GlobalAuthenticationConfigurerAdapter;

@Configuration
public class AuthenticationConfig extends GlobalAuthenticationConfigurerAdapter {

    @Override
    public void init(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("zaha").password("{noop}zaha").roles("USER")
                .and()
                .withUser("doha").password("{noop}doha").roles("USER")
                .and()
                .withUser("hajar").password("{noop}hajar").roles("USER");
    }
}