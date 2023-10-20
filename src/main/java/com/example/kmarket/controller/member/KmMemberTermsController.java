package com.example.kmarket.controller.member;


import com.example.kmarket.dto.member.KmMemberTermsDTO;
import com.example.kmarket.service.member.KmMemberTermsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class KmMemberTermsController {

    private final KmMemberTermsService kmMemberTermsService;
    @RequestMapping("terms")
    public KmMemberTermsDTO getTerms(){
        return kmMemberTermsService.getTerms();
    }
}
