package com.example.kmarket.mapper.member;


import com.example.kmarket.dto.member.KmMemberPointDTO;
import com.example.kmarket.entity.member.KmMemberPointEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface KmMemberPointMapper {
    public KmMemberPointDTO toDTO(KmMemberPointEntity articleEntity);
    public KmMemberPointEntity toEntity(KmMemberPointDTO articleDTO);
}

