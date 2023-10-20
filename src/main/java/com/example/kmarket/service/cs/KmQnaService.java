package com.example.kmarket.service.cs;

import com.example.kmarket.dto.cs.KmCsQnaDTO;
import com.example.kmarket.dto.cs.CsPageRequestDTO;
import com.example.kmarket.dto.cs.CsPageResponseDTO;
import com.example.kmarket.entity.cs.KmCsCateEntity;
import com.example.kmarket.entity.cs.KmCsQnaEntity;
import com.example.kmarket.mapper.cs.KmCsQnaMapper;
import com.example.kmarket.mapper.MybatisCSMapper;
import com.example.kmarket.repository.cs.KmCsQnaRepository;
import com.example.kmarket.util.Util;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Log4j2
public class KmQnaService {

    private final KmCsQnaRepository kmCsQnaRepository;
    private final KmCsQnaMapper kmCsQnaMapper;
    private final Util util;
    private final MybatisCSMapper mybatisCsMapper;

    public CsPageResponseDTO findByCate(CsPageRequestDTO csPageRequestDTO) {
        Pageable pageable = csPageRequestDTO.getPageable("qnaNo");
        Page<KmCsQnaEntity> result
            = kmCsQnaRepository.findByKmCsCateEntity_Cate(csPageRequestDTO.getCate(), pageable);

        List<KmCsQnaDTO> qnaList
                = result.getContent()
                    .stream()
                    .map(kmCsQnaMapper::toDTO)
                    .toList();
        int total = (int) result.getTotalElements();

        for(KmCsQnaDTO qna : qnaList) {
            // TODO 나중에 여기서 Uid 오솔라이즈 잡아서 처리 해주는 로직 달기
            qna.setWriter(util.maskingUid(qna.getWriter()));
//            qna.setRdate(util.getRdateSub(qna.getRdate()));
        }
        log.info(qnaList.toString());

        return CsPageResponseDTO.builder()
                .qnaList(qnaList)
                .csPageRequestDTO(csPageRequestDTO)
                .total(total)
                .build();
    }

    public List<KmCsCateEntity> findByTypeLessThan(int type){
        log.info("!!!!!!!!!!!!!!!!!!!!!!" + type);
        List<KmCsCateEntity> cateList
                = mybatisCsMapper.findTypeForCate(type);
        log.info("@@@@@@@@@@@@@@@@@"+cateList.toString());

        return cateList;
    }
}
