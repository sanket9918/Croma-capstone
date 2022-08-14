package com.sanket.bookapp;

import com.sanket.bookapp.model.Favorite;
import com.sanket.bookapp.model.User;
import com.sanket.bookapp.repository.FavoriteRepository;
import com.sanket.bookapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class BookappApplication implements CommandLineRunner {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private FavoriteRepository favoriteRepository;


	public static void main(String[] args) {

		SpringApplication.run(BookappApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		User user = new User("sanket", "sanket", "sanket@gmail.com");
		userRepository.save(user);

		Favorite favorite = new Favorite("Harry potter", user);
		favoriteRepository.save(favorite);
	}

}
