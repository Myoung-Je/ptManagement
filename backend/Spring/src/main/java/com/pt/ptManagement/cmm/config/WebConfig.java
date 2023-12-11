package com.pt.ptManagement.cmm.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// jwtTokenName header 추출 활성화
		registry.addMapping("/**")
				.allowedOrigins("http://localhost")
				.allowedMethods("OPTIONS", "GET", "POST")
				.allowedHeaders("*");				
	}
}

