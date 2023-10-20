package com.example.kmarket.mapper.member;


import com.example.kmarket.dto.member.KmMemberTermsDTO;
import com.example.kmarket.entity.member.KmMemberTermsEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KmMemberTermsMapper {
    public KmMemberTermsDTO toDTO(KmMemberTermsEntity articleEntity);
    public KmMemberTermsEntity toEntity(KmMemberTermsDTO articleDTO);
}

