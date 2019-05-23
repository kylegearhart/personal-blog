package com.kylegearhart.personalwebsitejavaspringbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@SpringBootApplication
public class PersonalWebsiteJavaSpringBackendApplication implements ErrorController {

	public static void main(String[] args) {
		SpringApplication.run(PersonalWebsiteJavaSpringBackendApplication.class, args);
	}

	@RequestMapping("/error")
	public String forwardUserOntoAngularApp() {
		return "forward:/index.html";
	}

	@Override
	public String getErrorPath() {
		return "/error";
	}
}
