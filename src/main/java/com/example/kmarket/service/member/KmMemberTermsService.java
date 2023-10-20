package com.example.kmarket.service.member;

import com.example.kmarket.dto.member.KmMemberTermsDTO;
import com.example.kmarket.mapper.member.KmMemberTermsMapper;
import com.example.kmarket.repository.member.KmMemberTermsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Service
@RequiredArgsConstructor
public class KmMemberTermsService {
    private final KmMemberTermsRepository kmMemberTermsRepository;
    private final KmMemberTermsMapper kmMemberTermsMapper;
    @RequestMapping("/terms")
    public KmMemberTermsDTO getTerms(){
        return kmMemberTermsMapper.toDTO(kmMemberTermsRepository.findAll().get(0));
    }
}
