package com.example.kmarket.service.product;

import com.example.kmarket.dto.product.KmProductCate1DTO;
import com.example.kmarket.dto.product.KmProductCate2DTO;
import com.example.kmarket.mapper.product.KmProductCate1Mapper;
import com.example.kmarket.mapper.product.KmProductCate2Mapper;
import com.example.kmarket.repository.product.KmProductCate1Repository;
import com.example.kmarket.repository.product.KmProductCate2Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KmProductCateService {
    @Autowired
    private KmProductCate1Repository cate1Repository;
    @Autowired
    private KmProductCate2Repository cate2Repository;

    @Autowired
    private KmProductCate1Mapper cate1Mapper;
    @Autowired
    private KmProductCate2Mapper cate2Mapper;
    public List<KmProductCate1DTO> getCate1() {
        return cate1Repository.findAll().stream().map(cate1Mapper::toDTO).toList();
    }
    public List<KmProductCate2DTO> getCate2() {
        return cate2Repository.findAll().stream().map(cate2Mapper::toDTO).toList();
    }

}
