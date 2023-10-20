package com.example.kmarket.service.product;

import com.example.kmarket.dto.product.KmProductDTO;
import com.example.kmarket.dto.PageRequestDTO;
import com.example.kmarket.dto.PageResponseDTO;
import com.example.kmarket.entity.product.KmProductEntity;
import com.example.kmarket.mapper.product.KmProductMapper;
import com.example.kmarket.repository.product.KmProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KmProductService {
    @Autowired
    private KmProductRepository kmProductRepository;
    @Autowired
    private KmProductMapper kmProductMapper;


    public KmProductDTO findById(int prodNo) {
        return kmProductMapper.toDTO(kmProductRepository.findById(prodNo).get());
    }

    public PageResponseDTO findByProducts(PageRequestDTO pageRequestDTO) {


        //카테고리 10~ 1000까지 cate1, 카테고리 1000~ cate2 10 이하는 존재하지 않음
        //tpye값으로 정렬 처리
        Pageable pageable = null;
        if (pageRequestDTO.getType().equals("priceAsc")) {
            pageable = pageRequestDTO.getPageableAsc("price");
        } else {
            pageable = pageRequestDTO.getPageableDesc(pageRequestDTO.getType());
        }


        Page<KmProductEntity> result = null;

        //카테고리 확인 -> 서치 확인 -> 아무것도 없으면 findAll
/*        if(pageRequestDTO.getCate() != 0&& !pageRequestDTO.getSearch().isEmpty()){
            if (pageRequestDTO.getCate() >= 1000) {
                result = kmProductRepository.findByProdCate2AndProdNameContaining(pageRequestDTO.getCate(),pageRequestDTO.getSearch(), pageable);
            } else if (pageRequestDTO.getCate() >= 10) {
                result = kmProductRepository.findByProdCate1AndProdNameContaining(pageRequestDTO.getCate(),pageRequestDTO.getSearch(), pageable);
            }
        }*/
        if (!pageRequestDTO.getSearch().isEmpty()) {
            result = kmProductRepository.findByProdNameContaining(pageRequestDTO.getSearch(), pageable);
        } else if (pageRequestDTO.getCate() != 0) {
            if (pageRequestDTO.getCate() >= 1000) {
                result = kmProductRepository.findByProdCate2(pageRequestDTO.getCate(), pageable);
            } else if (pageRequestDTO.getCate() >= 10) {
                result = kmProductRepository.findByProdCate1(pageRequestDTO.getCate(), pageable);
            }
        } else {
            result = kmProductRepository.findAll(pageable);
        }
        List<KmProductDTO> dtoList = result.getContent()
                .stream()
                .map(kmProductMapper::toDTO)
                .toList();

        int totalElement = (int) result.getTotalElements();

        return PageResponseDTO.builder()
                .pageRequestDTO(pageRequestDTO)
                .dtoList(dtoList)
                .total(totalElement)
                .build();
    }

}
