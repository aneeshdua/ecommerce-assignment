package com.example.ecommercebe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.example.ecommercebe.models")
@EnableJpaRepositories("com.example.ecommercebe.repository")
public class EcommerceBeApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceBeApplication.class, args);
	}

}
