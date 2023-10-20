package com.example.kmarket.service.admin;

import com.example.kmarket.dto.admin.KmAdminQnaDTO;
import com.example.kmarket.mapper.admin.KmAdminQnaMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Log4j2
public class KmAdminQnaService {


    private final KmAdminQnaMapper kmAdminQnaMapper;

    public List<KmAdminQnaDTO> selectCsQna(){

        List<KmAdminQnaDTO> qnaList = kmAdminQnaMapper.selectCsQna();

        return qnaList;
    }
}
