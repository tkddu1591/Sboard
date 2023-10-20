package com.example.kmarket.mapper.cs;


import com.example.kmarket.dto.cs.KmCsCateDTO;
import com.example.kmarket.entity.cs.KmCsCateEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KmCsCateMapper {
    public KmCsCateDTO toDTO(KmCsCateEntity articleEntity);
    public KmCsCateEntity toEntity(KmCsCateDTO articleDTO);
}

