# Ecommerce Backend

- This project was made using Java 21.0.1 and Spring Boot.
- The data is fetched from [DummyJSON](https://dummyjson.com/products) and stored in an in-memory H2 database. The data is then exposed through REST API endpoints.
- The application is configured to initialise the database at startup.


## Features
- Since there is no Brand endpoint to leverage for the filtering on the frontend, please create one. Please include how you would handle unit/integration testing, validations, and error handling for this new endpoint. You may store the source data anyway you’d like.

## API Endpoints

- Health Check
    - **Endpoint:** `/`
    - **Method:** GET
    - **Description:** Checks if the e-commerce backend is up and running.

- Get All Products
    - **Endpoint:** `/products`
    - **Method:** GET
    - **Description:** Returns a list of all products.

- Get All Brands
    - **Endpoint:** `/brands`
    - **Method:** GET
    - **Description:** Returns a list of all brands.

- Get All Categories
    - **Endpoint:** `/categories`
    - **Method:** GET
    - **Description:** Returns a list of all categories.

- Get Filtered Products
    - **Endpoint:** `/products/filter`
    - **Method:** POST
    - **Description:** Returns a list of products filtered based on the request body.
    - **Request Body:**
        - `filterRequest`: Object containing filter parameters.


### Local Development
There are several ways to run a Spring Boot application on your local machine. One way is to execute the main method in the `com.example.ecommercebe.EcommerceBeApplication` class from your IDE.


### Deployment
You can use the Dockerfile present in the project directory to create an image that can be run a VM/container.
Run the following command in the project directory to build the image:

`docker build -t "ecommerce-be" .`
