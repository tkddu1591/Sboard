package com.example.kmarket.service.admin;

import com.example.kmarket.dto.product.KmProductDTO;
import com.example.kmarket.mapper.admin.KmAdminProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KmAdminProductService {

    @Autowired
    private KmAdminProductMapper kmAdminProductMapper;

    public int insertProduct(KmProductDTO dto){
        return kmAdminProductMapper.insertProduct(dto);
    }

    public int selectProductCountTotal() {
        return kmAdminProductMapper.selectProductCountTotal();
    }
    public KmProductDTO selectProduct(int prodNo){
        return kmAdminProductMapper.selectProduct(prodNo);
    }
    public List<KmProductDTO> selectProducts(int start){

        return kmAdminProductMapper.selectProducts(start);
    }
    public int updateProduct(KmProductDTO dto){
        return kmAdminProductMapper.updateProduct(dto);
    }
    public int deleteProduct(int prodNo){
        return kmAdminProductMapper.deleteProduct(prodNo);
    }


    // 페이지 마지막 번호
    public int getLastPageNum(int total) {

        int lastPageNum = 0;

        if(total % 10 == 0){
            lastPageNum = total / 10;
        }else{
            lastPageNum = total / 10 + 1;
        }

        return lastPageNum;
    }

    // 페이지 그룹
    public int[] getPageGroupNum(int currentPage, int lastPageNum) {
        int currentPageGroup = (int)Math.ceil(currentPage / 10.0);
        int pageGroupStart = (currentPageGroup - 1) * 10 + 1;
        int pageGroupEnd = currentPageGroup * 10;

        if(pageGroupEnd > lastPageNum){
            pageGroupEnd = lastPageNum;
        }

        int[] result = {pageGroupStart, pageGroupEnd};

        return result;
    }

    // 페이지 시작번호
    public int getPageStartNum(int total, int currentPage) {
        int start = (currentPage - 1) * 10;
        return total - start;
    }

    // 현재 페이지 번호
    public int getCurrentPage(String pg) {
        int currentPage = 1;

        if(pg != null){
            currentPage = Integer.parseInt(pg);
        }

        return currentPage;
    }

    // Limit 시작번호
    public int getStartNum(int currentPage) {
        return (currentPage - 1) * 10;
    }

}
