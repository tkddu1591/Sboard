package com.example.kmarket.repository.member;


import com.example.kmarket.entity.member.KmMemberTermsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KmMemberTermsRepository extends JpaRepository<KmMemberTermsEntity, Integer> {
}

