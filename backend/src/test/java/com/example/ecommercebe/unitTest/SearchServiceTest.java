package com.example.ecommercebe.unitTest;

import com.example.ecommercebe.models.SearchResponse;
import com.example.ecommercebe.repository.ProductRepository;
import com.example.ecommercebe.service.ProductService;
import com.example.ecommercebe.service.Search;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;


import com.example.ecommercebe.models.Product;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;


import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.samePropertyValuesAs;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class SearchServiceTest {
    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private Search search;

    @Test
    public void searchProductsReturnsListOfProductsWhenQueryMatches() {
        String query = "iPhone 9"; //should give 1 result
        Product product1 = new Product(1, "iPhone 9", "An apple mobile which is nothing like apple", 549, 12.96, 4.69, 94, "Apple", "smartphones", "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg");

        List<Product> actualProducts = search.searchProducts(query);

        assertEquals(1, actualProducts.size());
//        assertThat(product1)
//                .usingRecursiveComparison()
//                .isEqualTo(actualProducts.get(0));
        assertTrue(actualProducts.contains(product1));
    }

    @Test
    public void searchProductsReturnsNullWhenResponseIsNull() {
        String query = "abcd"; //should give 0 results
        List<Product> actualProducts = search.searchProducts(query);

        assertEquals(actualProducts.size(),0);
    }

}
