package com.sanket.bookapp.controller;

import java.util.List;

import com.sanket.bookapp.model.Favorite;
import com.sanket.bookapp.service.favoriteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FavoriteController {

    @Autowired
    private favoriteService favoriteService;

    @PostMapping("/addFavorite")
    public Favorite addGaFavorite(@RequestBody Favorite favorite) {
        Favorite favorite2 = favoriteService.addFavorite(favorite);
        return favorite2;

    }

    @DeleteMapping("/deleteFavorite/{id}")
    public ResponseEntity<String> deleteFavorite(@PathVariable int id) {
        return favoriteService.deleteFavorite(id);
    }

    @GetMapping("/favorite/{id}")
    public Favorite favorite(@PathVariable int id) {
        Favorite favorite = favoriteService.getFavorite(id);
        return favorite;
    }

    @GetMapping("/favoriteByUser/{id}")
    public ResponseEntity<List<Favorite>> getFavouriteByUser(@PathVariable int id) {
        return favoriteService.getFavouriteofOneUser(id);
    }

}
