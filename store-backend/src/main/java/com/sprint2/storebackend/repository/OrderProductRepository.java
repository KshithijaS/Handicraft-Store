package com.sprint2.storebackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.sprint2.storebackend.model.OrderProduct;
import com.sprint2.storebackend.model.OrderProductPK;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
	
}
