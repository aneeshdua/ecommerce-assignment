import { CUSTOM_API_URL, DUMMY_JSON_API_URL } from "../constants/constants";

export async function fetchFullCatalog() {
    try {
        const response = await fetch(`${DUMMY_JSON_API_URL}/products`);
        const data = await response.json();
        return data['products'];
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

export async function fetchProduct(id){
    try {
        const response = await fetch(`${DUMMY_JSON_API_URL}/products/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product:', error);
    }
};

export async function searchProducts(query){
    try {
        const response = await fetch(`${DUMMY_JSON_API_URL}/products/search?q=${query}`);
        const data = await response.json();
        return data['products'];
    } catch (error) {
        console.error('Error fetching product:', error);
    }
};

export async function getFilterValues(type){
    try {
        const response = await fetch(`${CUSTOM_API_URL}/${type}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product:', error);
    }
};


export async function getFilteredProducts(body){
    try {
        const response = await fetch(`${CUSTOM_API_URL}/products/filter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            // body: JSON.stringify({"search": query,"brands": brands,"categories": categories})
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};