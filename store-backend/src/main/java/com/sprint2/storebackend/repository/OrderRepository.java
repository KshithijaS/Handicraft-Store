package com.sprint2.storebackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.sprint2.storebackend.model.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {
	
}
