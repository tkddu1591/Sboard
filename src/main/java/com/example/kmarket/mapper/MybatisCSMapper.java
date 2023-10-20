package com.example.kmarket.mapper;

import com.example.kmarket.entity.cs.KmCsCateEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface MybatisCSMapper {
    List<KmCsCateEntity> findTypeForCate(int type);

}
