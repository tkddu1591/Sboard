package com.example.kmarket.repository.product;


import com.example.kmarket.entity.product.KmProductReviewEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KmProductReviewRepository extends JpaRepository<KmProductReviewEntity, Integer> {
    public Page<KmProductReviewEntity> findByProdNo(int prodNo, Pageable pageable);
    public int countByProdNo(int prodNo);
}

