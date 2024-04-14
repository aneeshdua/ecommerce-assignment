package com.example.ecommercebe.unitTest;

import com.example.ecommercebe.models.FilterRequest;
import com.example.ecommercebe.models.Product;
import com.example.ecommercebe.repository.ProductRepository;
import com.example.ecommercebe.service.ProductService;
import com.example.ecommercebe.service.Search;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @Mock
    private Search search;

    @InjectMocks
    private ProductService productService;

    @BeforeEach
    public void setup() {
        reset(productRepository, search);
    }

    @Test
    public void getAllProductsWhenProductsExist() {
        Product product1 = new Product();
        Product product2 = new Product();
        when(productRepository.findAll()).thenReturn(Arrays.asList(product1, product2));

        List<Product> actualProducts = productService.getAllProducts();

        assertEquals(2, actualProducts.size());
        assertTrue(actualProducts.containsAll(Arrays.asList(product1, product2)));
    }

    @Test
    public void getAllProductsWhenNoProductsExist() {
        when(productRepository.findAll()).thenReturn(Collections.emptyList());

        List<Product> actualProducts = productService.getAllProducts();

        assertTrue(actualProducts.isEmpty());
    }

    @Test
    public void getAllBrandsWhenBrandsExist() {
        List<String> expectedBrands = Arrays.asList("Brand1", "Brand2", "Brand3");
        when(productRepository.getAllBrands()).thenReturn(expectedBrands);

        List<String> actualBrands = productService.getAllBrands();

        assertEquals(expectedBrands, actualBrands);
    }

    @Test
    public void getAllBrandsWhenNoBrandsExist() {
        when(productRepository.getAllBrands()).thenReturn(Collections.emptyList());

        List<String> actualBrands = productService.getAllBrands();

        assertTrue(actualBrands.isEmpty());
    }
    @Test
    public void getAllCategoriesWhenCategoriesExist() {
        List<String> expectedCategories = Arrays.asList("Category1", "Category2", "Category3");
        when(productRepository.getAllCategories()).thenReturn(expectedCategories);

        List<String> actualCategories = productService.getAllCategories();

        assertEquals(expectedCategories, actualCategories);
    }

    @Test
    public void getAllCategoriesWhenNoCategoriesExist() {
        when(productRepository.getAllCategories()).thenReturn(Collections.emptyList());

        List<String> actualCategories = productService.getAllCategories();

        assertTrue(actualCategories.isEmpty());
    }

    @Test
    public void getFilteredProductsWhenFilterRequestIsNull() {
        Product product1 = new Product();
        Product product2 = new Product();
        when(productRepository.findAll()).thenReturn(Arrays.asList(product1, product2));

        List<Product> actualProducts = productService.getFilteredProducts(null);

        assertEquals(2, actualProducts.size());
        assertTrue(actualProducts.containsAll(Arrays.asList(product1, product2)));
    }

    @Test
    public void getFilteredProductsWhenSearchQueryIsNotEmpty() {
        Product product1 = new Product();
        FilterRequest filterRequest = new FilterRequest();
        filterRequest.setSearchQuery("query");
        when(search.searchProducts(filterRequest.getSearchQuery())).thenReturn(Arrays.asList(product1));

        List<Product> actualProducts = productService.getFilteredProducts(filterRequest);

        assertEquals(1, actualProducts.size());
        assertTrue(actualProducts.contains(product1));
    }

    @Test
    public void getFilteredProductsWhenCategoriesAreNotEmpty() {
        Product product1 = new Product();
        product1.setCategory("Category1");
        FilterRequest filterRequest = new FilterRequest();
        filterRequest.setCategories(Arrays.asList("Category1"));
        when(productRepository.findAll()).thenReturn(Arrays.asList(product1));

        List<Product> actualProducts = productService.getFilteredProducts(filterRequest);

        assertEquals(1, actualProducts.size());
        assertTrue(actualProducts.contains(product1));
    }

    @Test
    public void getFilteredProductsWhenBrandsAreNotEmpty() {
        Product product1 = new Product();
        product1.setBrand("Brand1");
        FilterRequest filterRequest = new FilterRequest();
        filterRequest.setBrands(Arrays.asList("Brand1"));
        when(productRepository.findAll()).thenReturn(Arrays.asList(product1));

        List<Product> actualProducts = productService.getFilteredProducts(filterRequest);

        assertEquals(1, actualProducts.size());
        assertTrue(actualProducts.contains(product1));
    }
}