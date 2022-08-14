package com.sanket.bookapp;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

	// @PostConstruct
	// public void initUsers() {
	// List<User> users = Stream.of(
	// new User(101, "sanket", "password", "sanket@gmail.com"),
	// new User(102, "user1", "pwd1", "user1@gmail.com"),
	// new User(103, "user2", "pwd2", "user2@gmail.com"),
	// new User(104, "user3", "pwd3",
	// "user3@gmail.com")).collect(Collectors.toList());
	// repository.saveAll(users);
	// }

	public static void main(String[] args) {

		SpringApplication.run(BookappApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}

}
