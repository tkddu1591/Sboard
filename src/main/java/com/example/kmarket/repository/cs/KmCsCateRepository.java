package com.example.kmarket.repository.cs;


import com.example.kmarket.entity.cs.KmCsCateEntity;
import com.example.kmarket.entity.cs.KmCsTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KmCsCateRepository extends JpaRepository<KmCsCateEntity, Integer> {

    KmCsCateEntity findByCate(String cate);
}

