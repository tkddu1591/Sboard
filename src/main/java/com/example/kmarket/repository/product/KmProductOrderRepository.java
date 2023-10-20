package com.example.kmarket.repository.product;


import com.example.kmarket.entity.product.KmProductOrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KmProductOrderRepository extends JpaRepository<KmProductOrderEntity, Integer> {
    KmProductOrderEntity findTopByOrdUidOrderByOrdNoDesc(String uid);

    KmProductOrderEntity findFirstByOrderByOrdNoDesc();

    KmProductOrderEntity findByOrdUidOrderByOrdNoDesc(String uid);
}

