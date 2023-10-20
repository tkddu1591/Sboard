package com.example.kmarket.mapper.product;


import com.example.kmarket.dto.product.KmProductOrderItemDTO;
import com.example.kmarket.entity.product.KmProductOrderItemEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface KmProdcutOrderItemMapper {
    @Mapping(source = "kmProductOrderEntity.ordNo", target = "ordNo")
    public KmProductOrderItemDTO toDTO(KmProductOrderItemEntity articleEntity);

    @Mapping(source = "ordNo", target = "kmProductOrderEntity.ordNo")
    public KmProductOrderItemEntity toEntity(KmProductOrderItemDTO articleDTO);
}

