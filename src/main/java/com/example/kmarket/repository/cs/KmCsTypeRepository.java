package com.example.kmarket.repository.cs;

import com.example.kmarket.entity.cs.KmCsCateEntity;
import com.example.kmarket.entity.cs.KmCsTypeEntity;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface KmCsTypeRepository extends JpaRepository<KmCsTypeEntity, Integer> {
    KmCsTypeEntity findByTypeAndCate(int type, String cate);

    List<KmCsTypeEntity> findByCate(String cate);
}
