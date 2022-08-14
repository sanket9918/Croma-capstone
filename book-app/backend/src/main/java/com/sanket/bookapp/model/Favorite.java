package com.sanket.bookapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "FAV_TBL")
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String book_name;

    @ManyToOne
    @JoinColumn(name = "user")
    User user;

    public Favorite(String book_name, User user) {
        this.book_name = book_name;
        this.user = user;
    }

}
