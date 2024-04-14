package com.example.ecommercebe.models;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class FilterRequest {
    public String searchQuery;
    public List<String> categories;
    public List<String> brands;
}
