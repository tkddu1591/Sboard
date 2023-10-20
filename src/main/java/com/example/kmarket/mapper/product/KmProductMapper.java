package com.example.kmarket.mapper.product;


import com.example.kmarket.dto.product.KmProductDTO;
import com.example.kmarket.entity.product.KmProductEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KmProductMapper {
    public KmProductDTO toDTO(KmProductEntity articleEntity);
    public KmProductEntity toEntity(KmProductDTO articleDTO);
}

