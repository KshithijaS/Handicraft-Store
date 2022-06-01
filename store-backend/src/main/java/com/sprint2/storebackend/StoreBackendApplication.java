package com.sprint2.storebackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import com.sprint2.storebackend.model.Product;
import com.sprint2.storebackend.service.ProductService;

@SpringBootApplication
public class StoreBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(StoreBackendApplication.class, args);
	}
	
	@Bean
    CommandLineRunner runner(ProductService productService) {
        return args -> {
            productService.save(new Product(1L, "TV Set", 300.00, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdress-shirt&psig=AOvVaw0vMoTfa9-X01pq4KOcS1G7&ust=1654167420740000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIi1jdqLjPgCFQAAAAAdAAAAABAD"));
            productService.save(new Product(2L, "Game Console", 200.00, "http://placehold.it/200x100"));
            productService.save(new Product(3L, "Sofa", 100.00, "http://placehold.it/200x100"));
            productService.save(new Product(4L, "Icecream", 5.00, "http://placehold.it/200x100"));
            productService.save(new Product(5L, "Beer", 3.00, "http://placehold.it/200x100"));
            productService.save(new Product(6L, "Phone", 500.00, "http://placehold.it/200x100"));
            productService.save(new Product(7L, "Watch", 30.00, "http://placehold.it/200x100"));
        };
    }

}
