package com.example.kmarket.service.admin;

import com.example.kmarket.dto.admin.KmAdminFaqDTO;
import com.example.kmarket.dto.admin.KmAdminNoticeDTO;
import com.example.kmarket.mapper.admin.KmAdminFaqMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class KmAdminFaqService {

    private final KmAdminFaqMapper kmAdminFaqMapper;

    // select * all
    public List<KmAdminFaqDTO> selectCsFaq(){

        List<KmAdminFaqDTO> faqList = kmAdminFaqMapper.selectCsFaq();

        return faqList;
    }

    // select * from where faqNo = ?
    public KmAdminFaqDTO selectCsFaqByfaqNo() {

        KmAdminFaqDTO selectCsFaqByfaqNo = kmAdminFaqMapper.selectCsFaqByfaqNo();

        return selectCsFaqByfaqNo;
    }

    // 중복을 제거하는 람다 함수
    public static <T> Predicate<T> distinctByKey(Function<? super T, Object> keyExtractor) {
        Map<Object, Boolean> seen = new ConcurrentHashMap<>();
        return t -> seen.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
    }

    // 유형 선택 중복 제거
    public List<KmAdminFaqDTO> distinctCate(){

        List<KmAdminFaqDTO> faqList = kmAdminFaqMapper.selectCsFaq();

        List<KmAdminFaqDTO> distinctCate = faqList.stream()
                .filter(distinctByKey(KmAdminFaqDTO::getCate))
                .collect(Collectors.toList());

        return distinctCate;
    }

    // 페이징 시작
    public int selectFaqCountTotal(){
        return kmAdminFaqMapper.selectFaqCountTotal();
    }

    public List<KmAdminFaqDTO> selectFaq(int start) {
        int pageSize = 10; // 페이지당 항목 수
        int startIdx = (start - 1) * pageSize; // 시작 위치 계산
        List<KmAdminFaqDTO> faqList = kmAdminFaqMapper.selectFaq(startIdx);
        return faqList;
    }


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
