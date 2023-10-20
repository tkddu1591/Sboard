package com.example.kmarket.repository.cs;


import com.example.kmarket.entity.cs.KmCsCateEntity;
import com.example.kmarket.entity.cs.KmCsNoticeEntity;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KmCsNoticeRepository extends JpaRepository<KmCsNoticeEntity, Integer> {
    public Page<KmCsNoticeEntity> findAll(Pageable pageable);

    public Page<KmCsNoticeEntity> findByKmCsCateEntity_Cate(Pageable pageable, String cate);
}

