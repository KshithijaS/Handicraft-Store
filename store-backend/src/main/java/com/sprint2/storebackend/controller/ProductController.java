package com.sprint2.storebackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sprint2.storebackend.model.Product;
import com.sprint2.storebackend.service.ProductService;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = { "", "/" })
    public @NotNull Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }
    
    @GetMapping(value="/{id}")
    public @NotNull Product getProductsByID(@PathVariable(name="id") Long id){
    	return productService.getProduct(id);
    }
}
