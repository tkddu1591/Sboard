package com.example.kmarket.mapper.cs;


import com.example.kmarket.dto.cs.KmCsNoticeDTO;
import com.example.kmarket.entity.cs.KmCsNoticeEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface KmCsNoticeMapper {

    @Mapping(source = "kmCsCateEntity.cateName", target = "cateName")
    @Mapping(source = "kmCsTypeEntity.typeName", target = "typeName")
    public KmCsNoticeDTO toDTO(KmCsNoticeEntity articleEntity);

    @Mapping(source = "cateName", target = "kmCsCateEntity.cateName")
    @Mapping(source = "typeName", target = "kmCsTypeEntity.typeName")
    public KmCsNoticeEntity toEntity(KmCsNoticeDTO articleDTO);

}

