package com.example.kmarket.repository.product;


import com.example.kmarket.entity.product.KmProductCartEntity;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KmProductCartRepository extends JpaRepository<KmProductCartEntity, Integer> {
    KmProductCartEntity findKmProductCartEntityByKmProductEntity_ProdNo(int prodNo);

    void deleteKmProductCartEntitiesByKmMemberEntity_Uid(String uid);

    @Query("SELECT pc, p.thumb1, p.prodName, p.descript " +
            "FROM KmProductCartEntity pc " +
            "JOIN pc.kmMemberEntity m " +
            "JOIN pc.kmProductEntity p " +
            "WHERE m.uid = :uid " +
            "ORDER BY pc.cartNo DESC")
    List<KmProductCartEntity> findByKmMemberEntity_UidWithKmProduct(@Param("uid") String uid);
}

