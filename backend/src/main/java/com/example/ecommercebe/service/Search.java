package com.example.ecommercebe.service;

import com.example.ecommercebe.models.Product;
import com.example.ecommercebe.models.SearchResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class Search {

    public List<Product> searchProducts(String query) {
        final String url = "https://dummyjson.com/products/search?q=" + query;
        RestTemplate restTemplate = new RestTemplate();
        SearchResponse response = restTemplate.getForObject(url,SearchResponse.class);
        if (response == null || response.getProducts() == null) {
            return null;
        } else {
            return response.getProducts();
        }

    }
}
