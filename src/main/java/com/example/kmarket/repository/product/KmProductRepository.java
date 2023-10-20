package com.example.kmarket.repository.product;


import com.example.kmarket.entity.product.KmProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KmProductRepository extends JpaRepository<KmProductEntity, Integer> {
    public Page<KmProductEntity> findByProdCate1(int i, Pageable pageable);

    public Page<KmProductEntity> findByProdCate2(int i, Pageable pageable);
    public Page<KmProductEntity> findByProdNameContaining(String prodName, Pageable pageable);

    public Page<KmProductEntity> findByProdCate2AndProdNameContaining(int prodCate2, String prodName, Pageable pageable);
    public Page<KmProductEntity> findByProdCate1AndProdNameContaining(int prodCate2, String prodName, Pageable pageable);
}

