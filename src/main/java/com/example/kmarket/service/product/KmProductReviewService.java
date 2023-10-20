package com.example.kmarket.service.product;

import com.example.kmarket.dto.product.KmProductReviewDTO;
import com.example.kmarket.dto.PageRequestDTO;
import com.example.kmarket.dto.PageResponseDTO;
import com.example.kmarket.entity.product.KmProductReviewEntity;
import com.example.kmarket.mapper.product.KmProductReviewMapper;
import com.example.kmarket.repository.product.KmProductReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KmProductReviewService {
    @Autowired
    private KmProductReviewRepository kmProductReviewRepository;

    @Autowired
    private KmProductReviewMapper kmProductReviewMapper;


    public int countProdNo(int prodNo) {
        return kmProductReviewRepository.countByProdNo(prodNo);
    }
    public PageResponseDTO findByProducts(PageRequestDTO pageRequestDTO) {


        //카테고리 10~ 1000까지 cate1, 카테고리 1000~ cate2 10 이하는 존재하지 않음
        //tpye값으로 정렬 처리

        //Order By 정렬할 컬럼명 Desc
        //getPageableDesc 내림차순 getPageableAsc 오름차순 ("정렬할 컬럼명")
        //pg , size 가공해서 같이 ordet by랑 섞어줌
        Pageable pageable = pageRequestDTO.getPageableDesc("revNo");


        //Page
        Page<KmProductReviewEntity> result = null;
        //dtoList
        //findBy머시기 by뒤가 where절이라고 보면 됨니다.
        result = kmProductReviewRepository.findByProdNo(pageRequestDTO.getProdNo(), pageable);

        result.getContent(); // Entity
        result.getTotalElements(); // 숫자 형이 double -> int변경해줘야함

        // content를 dto로 변환 해주는 역할
        List<KmProductReviewDTO> dtoList = result.getContent()
                .stream()
                .map(kmProductReviewMapper::toDTO)
                .toList();


        int totalElement = (int) result.getTotalElements();

        return PageResponseDTO.builder()
                .pageRequestDTO(pageRequestDTO)
                .reviewDtoList(dtoList)
                .total(totalElement)
                .build();
    }

}
