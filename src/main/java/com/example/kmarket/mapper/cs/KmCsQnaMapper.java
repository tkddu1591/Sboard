package com.example.kmarket.mapper.cs;


import com.example.kmarket.dto.cs.KmCsQnaDTO;
import com.example.kmarket.entity.cs.KmCsQnaEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface KmCsQnaMapper {
    @Mapping(source = "kmCsCateEntity.cateName", target = "cateName")
    @Mapping(source = "kmCsTypeEntity.typeName", target = "typeName")
    public KmCsQnaDTO toDTO(KmCsQnaEntity articleEntity);

    @Mapping(source = "cateName", target = "kmCsCateEntity.cateName")
    @Mapping(source = "typeName", target = "kmCsTypeEntity.typeName")
    public KmCsQnaEntity toEntity(KmCsQnaDTO articleDTO);
}

