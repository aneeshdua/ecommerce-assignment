package com.example.ecommercebe.service;

import com.example.ecommercebe.models.FilterRequest;
import com.example.ecommercebe.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ecommercebe.repository.ProductRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    Search search;

    public List<Product> getAllProducts() {
        List<Product> temp = productRepository.findAll();
        return productRepository.findAll();
    }

    public List<String> getAllBrands() {
        return productRepository.getAllBrands();
    }
    public List<String> getAllCategories() {
        return productRepository.getAllCategories();
    }

    public List<Product> getFilteredProducts(FilterRequest filterRequest) {
        if (filterRequest == null) {
            return productRepository.findAll();
        }
        List<Product> products = productRepository.findAll();
        if (filterRequest.searchQuery != null && !filterRequest.searchQuery.isEmpty()) {
            products = search.searchProducts(filterRequest.searchQuery);
        }

        if (filterRequest.getCategories() != null && !filterRequest.getCategories().isEmpty()){
            products = products.stream().filter(product -> filterRequest.getCategories().contains(product.getCategory())).collect(Collectors.toList());
        }
        if (filterRequest.getBrands() != null  && !filterRequest.getBrands().isEmpty()) {
            products = products.stream().filter(product -> filterRequest.getBrands().contains(product.getBrand())).collect(Collectors.toList());
        }
        return products;
    }


}
