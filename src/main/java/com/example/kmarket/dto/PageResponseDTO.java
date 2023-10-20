package com.example.kmarket.dto;

import com.example.kmarket.dto.product.KmProductCartDTO;
import com.example.kmarket.dto.product.KmProductDTO;
import com.example.kmarket.dto.product.KmProductReviewDTO;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class PageResponseDTO {

    //dto List
    private List<KmProductDTO> dtoList;
    private List<KmProductReviewDTO> reviewDtoList;
    private List<KmProductCartDTO> cartDTOS;
    //필수로 나오는 데이터
    private int cate;
    private int pg;
    private int size;
    private int total;

    private int start, end, last;
    private boolean prev, next;


    @Builder
    public PageResponseDTO(PageRequestDTO pageRequestDTO,
                           List<KmProductDTO> dtoList,
                           List<KmProductReviewDTO> reviewDtoList,
                           List<KmProductCartDTO> cartDTOS,
                           int total) {
        this.cate = pageRequestDTO.getCate();
        this.pg = pageRequestDTO.getPg();
        this.size = pageRequestDTO.getSize();
        this.total = total;
        this.dtoList = dtoList;
        this.reviewDtoList = reviewDtoList;
        this.cartDTOS = cartDTOS;

        this.end = (int) (Math.ceil(this.pg / 10.0)) * 10;
        this.start = this.end - 9;


        this.last = (int) (Math.ceil(total / (double) size));
        this.end = end > last ? last : end;
        this.prev = this.start > 1;
        this.next = total > this.end * this.size;
    }
}
