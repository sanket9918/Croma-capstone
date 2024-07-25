package com.sanket.bookapp.repository;

import java.util.List;

import com.sanket.bookapp.model.Favorite;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Integer> {
    List<Favorite> findByUserId(int id);
}
