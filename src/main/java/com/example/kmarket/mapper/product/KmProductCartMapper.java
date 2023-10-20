package com.example.kmarket.mapper.product;


import com.example.kmarket.dto.product.KmProductCartDTO;
import com.example.kmarket.entity.product.KmProductCartEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface KmProductCartMapper {
    @Mapping(source = "kmMemberEntity.uid", target = "uid")
    @Mapping(source = "kmProductEntity.prodNo", target = "prodNo")
    @Mapping(source = "kmProductEntity.thumb1", target = "thumb1")
    @Mapping(source = "kmProductEntity.prodName", target = "prodName")
    @Mapping(source = "kmProductEntity.descript", target = "descript")
    KmProductCartDTO toDTO(KmProductCartEntity articleEntity);
    @Mapping(source = "uid", target = "kmMemberEntity.uid")
    @Mapping(source = "prodNo", target = "kmProductEntity.prodNo")
    @Mapping(source = "thumb1", target = "kmProductEntity.thumb1")
    @Mapping(source = "prodName", target = "kmProductEntity.prodName")
    @Mapping(source = "descript", target = "kmProductEntity.descript")
    KmProductCartEntity toEntity(KmProductCartDTO articleDTO);
}

