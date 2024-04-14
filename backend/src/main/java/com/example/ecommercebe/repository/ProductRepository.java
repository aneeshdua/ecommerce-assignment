package com.example.ecommercebe.repository;

import com.example.ecommercebe.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("SELECT DISTINCT p.brand FROM Product p")
    public List<String> getAllBrands();

    @Query("SELECT DISTINCT p.category FROM Product p")
    public List<String> getAllCategories();

    public List<Product> findByCategory(String category);
    public List<Product> findByBrand(String brand);
}
