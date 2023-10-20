package com.example.kmarket.repository.member;

import com.example.kmarket.entity.member.KmMemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface KmMemberRepository extends JpaRepository<KmMemberEntity, String> {
    KmMemberEntity findByUidAndPass(String uid, String pass);

    Optional<KmMemberEntity> findByUid(String email);
    boolean existsByUid(String email);

}

