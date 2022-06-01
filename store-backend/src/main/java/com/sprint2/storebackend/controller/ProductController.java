package com.sprint2.storebackend.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sprint2.storebackend.model.Product;
import com.sprint2.storebackend.service.ProductService;

import java.util.Map;
import java.util.Optional;

import javax.validation.constraints.NotNull;

@CrossOrigin(origins="http://localhost:3000")
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
    
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
    	return productService.save(product);
    }
    
    @PutMapping(value="/{id}")
    public @NotNull Product updateProduct(@PathVariable(name="id") Long id, @RequestBody Product productDetails){
    	Product product=productService.getProduct(id);
    	product.setId(productDetails.getId());
    	product.setName(productDetails.getName());
    	product.setPictureUrl(productDetails.getPictureUrl());
    	product.setPrice(productDetails.getPrice());
    	
    	Product updatedProduct = productService.save(product);
    	return productService.getProduct(id);
    }
    
    @DeleteMapping(value="/{id}")
	public ResponseEntity<HttpStatus> removeProduct(@PathVariable(name="id") Long id) {
		try {
			Product cus=productService.getProduct(id);
			if(cus!=null) {
				productService.delete(id);
				return new ResponseEntity<>(HttpStatus.OK);
			}
			else
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
