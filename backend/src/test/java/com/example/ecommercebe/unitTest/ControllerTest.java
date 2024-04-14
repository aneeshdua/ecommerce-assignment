package com.example.ecommercebe.unitTest;

import com.example.ecommercebe.controller.ProductController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
public class ControllerTest {
    @Autowired
    private ProductController productController;

    @Test
    void contextLoads() throws Exception {
        System.out.println("ControllerTest: contextLoads");
        assertThat(productController).isNotNull();
    }
}
