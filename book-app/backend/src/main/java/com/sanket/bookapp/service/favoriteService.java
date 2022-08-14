package com.sanket.bookapp.service;

import java.util.Optional;

import com.sanket.bookapp.model.Favorite;
import com.sanket.bookapp.repository.FavoriteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

@Service
public class favoriteService {
    @Autowired
    private FavoriteRepository favoriteRepository;

    @ResponseBody
    public Favorite getFavorite(int id) {
        Favorite favorite = favoriteRepository.findById(id).orElse(null);
        return favorite;
    }

    @ResponseBody
    public Favorite addFavorite(Favorite favorite) {
        Favorite favorite2 = favoriteRepository.save(favorite);
        return favorite2;
    }

    public ResponseEntity<String> deleteFavorite(int id) {
        Optional<Favorite> favoriteData = favoriteRepository.findById(id);
        try {
            if (favoriteData.isPresent()) {
                favoriteRepository.deleteById(id);
            }
            return new ResponseEntity<>("The favorite item has been deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Sorry, we couldn't process the request due to some error",
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
