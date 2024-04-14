package com.example.ecommercebe.models;

import lombok.Getter;

import java.util.List;

@Getter
public class FilterRequest {
    public String searchQuery;
    public List<String> categories;
    public List<String> brands;
}
