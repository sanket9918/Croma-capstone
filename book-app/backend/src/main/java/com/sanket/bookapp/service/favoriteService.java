package com.sanket.bookapp.service;

import java.util.List;
import java.util.Optional;

import com.sanket.bookapp.model.Favorite;
import com.sanket.bookapp.model.User;
import com.sanket.bookapp.repository.FavoriteRepository;
import com.sanket.bookapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

@Service
public class favoriteService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FavoriteRepository favoriteRepository;

    @ResponseBody
    public Favorite getFavorite(int id) {
        Favorite favorite = favoriteRepository.findById(id).orElse(null);
        return favorite;
    }

    @ResponseBody
    public Favorite addFavorite(Favorite favorite) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findByEmail(userDetails.getUsername()).orElseThrow();

        Favorite saveFav = new Favorite();
        saveFav.setUser(user);
        saveFav.setBook_name(favorite.getBook_name());

        Favorite favorite2 = favoriteRepository.save(saveFav);
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

    public ResponseEntity<List<Favorite>> getFavouriteofOneUser(int id) {
        List<Favorite> favorites = favoriteRepository.findByUserId(id);
        return new ResponseEntity<List<Favorite>>(favorites, HttpStatus.OK);
    }
}
