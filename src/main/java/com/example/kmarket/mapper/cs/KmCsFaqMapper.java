package com.example.kmarket.mapper.cs;


import com.example.kmarket.dto.cs.KmCsFaqDTO;
import com.example.kmarket.entity.cs.KmCsFaqEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KmCsFaqMapper {
    public KmCsFaqDTO toDTO(KmCsFaqEntity articleEntity);
    public KmCsFaqEntity toEntity(KmCsFaqDTO articleDTO);
}

