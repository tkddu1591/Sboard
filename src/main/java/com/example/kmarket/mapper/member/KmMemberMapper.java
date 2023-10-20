package com.example.kmarket.mapper.member;


import com.example.kmarket.dto.member.KmMemberRequestDTO;
import com.example.kmarket.entity.member.KmMemberEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KmMemberMapper {
    public KmMemberRequestDTO toDTO(KmMemberEntity articleEntity);
    public KmMemberEntity toEntity(KmMemberRequestDTO articleDTO);
}

