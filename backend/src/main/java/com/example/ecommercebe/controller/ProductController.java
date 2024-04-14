package com.example.ecommercebe.controller;

import com.example.ecommercebe.models.FilterRequest;
import com.example.ecommercebe.models.Product;
import com.example.ecommercebe.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public String healthCheck() {
        return "E-commerce backend is up and running!";
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/brands")
    public List<String> getAllBrands() {
        return productService.getAllBrands();
    }

    @GetMapping("/categories")
    public List<String> getAllCategories() {
        return productService.getAllCategories();
    }

    @PostMapping("/products/filter")
    public List<Product> getProductsFiltered(@RequestBody FilterRequest filterRequest) {
        return productService.getFilteredProducts(filterRequest);
    }


}
