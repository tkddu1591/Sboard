package com.example.kmarket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class KmarketApplication {

    public static void main(String[] args) {
        SpringApplication.run(KmarketApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000", "http://localhost:8080", "http://localhost:63342", "http://3.35.208.185:3000", "http://3.35.208.185:8080")
                        .allowedMethods("OPTIONS", "GET", "POST", "PUT", "DELETE");
            }
        };
    }
}
