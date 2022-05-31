package com.sprint2.storebackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.sprint2.storebackend.model.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
	
}
