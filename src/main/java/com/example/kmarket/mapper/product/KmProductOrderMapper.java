package com.example.kmarket.mapper.product;


import com.example.kmarket.dto.product.KmProductOrderDTO;
import com.example.kmarket.entity.product.KmProductOrderEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KmProductOrderMapper {
    public KmProductOrderDTO toDTO(KmProductOrderEntity articleEntity);
    public KmProductOrderEntity toEntity(KmProductOrderDTO articleDTO);
}

