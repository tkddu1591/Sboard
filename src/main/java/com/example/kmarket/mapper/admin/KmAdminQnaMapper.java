package com.example.kmarket.mapper.admin;

import com.example.kmarket.dto.admin.KmAdminQnaDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface KmAdminQnaMapper {

    public List<KmAdminQnaDTO> selectCsQna();
}
