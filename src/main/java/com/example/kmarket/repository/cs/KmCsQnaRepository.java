package com.example.kmarket.repository.cs;


import com.example.kmarket.entity.cs.KmCsQnaEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KmCsQnaRepository extends JpaRepository<KmCsQnaEntity, Integer> {
    Page<KmCsQnaEntity> findByKmCsCateEntity_Cate(String cate, Pageable pageable);
}

