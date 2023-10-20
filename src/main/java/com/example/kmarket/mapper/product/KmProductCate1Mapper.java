package com.example.kmarket.mapper.product;


import com.example.kmarket.dto.product.KmProductCate1DTO;
import com.example.kmarket.entity.product.KmProductCate1Entity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KmProductCate1Mapper {
    public KmProductCate1DTO toDTO(KmProductCate1Entity articleEntity);
    public KmProductCate1Entity toEntity(KmProductCate1DTO articleDTO);
}

