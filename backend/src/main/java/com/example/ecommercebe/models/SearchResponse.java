package com.example.ecommercebe.models;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@JsonDeserialize(as = SearchResponse.class)
@Getter
@Setter
public class SearchResponse {
    List<Product> products;

    public List<Product> getProducts() {
        return products;
    }

    // Default constructor
    public SearchResponse() {
    }
}
