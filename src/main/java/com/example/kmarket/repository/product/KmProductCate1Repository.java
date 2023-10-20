package com.example.kmarket.repository.product;


import com.example.kmarket.entity.product.KmProductCate1Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KmProductCate1Repository extends JpaRepository<KmProductCate1Entity, Integer> {
}

