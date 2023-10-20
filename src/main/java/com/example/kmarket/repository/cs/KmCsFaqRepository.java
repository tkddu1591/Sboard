package com.example.kmarket.repository.cs;


import com.example.kmarket.entity.cs.KmCsFaqEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KmCsFaqRepository extends JpaRepository<KmCsFaqEntity, Integer> {
}

