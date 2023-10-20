package com.example.kmarket.mapper.admin;

import com.example.kmarket.dto.admin.KmAdminNoticeDTO;
import org.apache.ibatis.annotations.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper
public interface KmAdminNoticeMapper {

    public List<KmAdminNoticeDTO> selectCsNotices();

    public List<KmAdminNoticeDTO> selectCsNoticesjoinCsCate();

    public KmAdminNoticeDTO selectCsNoticeBynoticeNo();

    // 페이징
    public int selectNoticeCountTotal();

    public List<KmAdminNoticeDTO> selectNotices(int start);

}
