package com.example.kmarket.controller.product;

import com.example.kmarket.dto.product.KmProductCate1DTO;
import com.example.kmarket.dto.product.KmProductCate2DTO;
import com.example.kmarket.service.product.KmProductCateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/product")
@RestController
public class CateController {

    @Autowired
    private KmProductCateService cateService;
    @GetMapping("/cate1")
    public List<KmProductCate1DTO> getCate1() {
        return cateService.getCate1();
    }
    @GetMapping("/cate2")
    public List<KmProductCate2DTO> getCate2() {
        return cateService.getCate2();
    }
}
