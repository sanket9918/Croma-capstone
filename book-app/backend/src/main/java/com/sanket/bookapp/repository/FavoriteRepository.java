package com.sanket.bookapp.repository;

import com.sanket.bookapp.model.Favorite;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoriteRepository extends JpaRepository<Favorite, Integer> {

}
