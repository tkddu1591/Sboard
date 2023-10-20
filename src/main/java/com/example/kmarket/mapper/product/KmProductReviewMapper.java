package com.example.kmarket.mapper.product;


import com.example.kmarket.dto.product.KmProductReviewDTO;
import com.example.kmarket.entity.product.KmProductReviewEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KmProductReviewMapper {
    public KmProductReviewDTO toDTO(KmProductReviewEntity articleEntity);
    public KmProductReviewEntity toEntity(KmProductReviewDTO articleDTO);
}

