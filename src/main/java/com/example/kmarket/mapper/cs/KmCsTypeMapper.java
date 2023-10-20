package com.example.kmarket.mapper.cs;


import com.example.kmarket.dto.cs.KmCsTypeDTO;
import com.example.kmarket.entity.cs.KmCsCateEntity;
import com.example.kmarket.entity.cs.KmCsTypeEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KmCsTypeMapper {
    public KmCsTypeDTO toDTO(KmCsTypeEntity articleEntity);
    public KmCsCateEntity toEntity(KmCsTypeDTO articleDTO);
}

