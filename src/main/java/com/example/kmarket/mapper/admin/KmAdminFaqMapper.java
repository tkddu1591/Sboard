package com.example.kmarket.mapper.admin;

import com.example.kmarket.dto.admin.KmAdminFaqDTO;
import com.example.kmarket.dto.admin.KmAdminNoticeDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface KmAdminFaqMapper {

   public List<KmAdminFaqDTO> selectCsFaq();

   public KmAdminFaqDTO selectCsFaqByfaqNo();

   // 페이징
   public int selectFaqCountTotal();

   public List<KmAdminFaqDTO> selectFaq(int start);
}
