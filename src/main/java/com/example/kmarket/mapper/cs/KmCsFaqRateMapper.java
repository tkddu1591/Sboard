package com.example.kmarket.mapper.cs;


import com.example.kmarket.dto.cs.KmCsFaqRateDTO;
import com.example.kmarket.entity.cs.KmCsFaqRateEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KmCsFaqRateMapper {
    public KmCsFaqRateDTO toDTO(KmCsFaqRateEntity articleEntity);
    public KmCsFaqRateEntity toEntity(KmCsFaqRateDTO articleDTO);
}

