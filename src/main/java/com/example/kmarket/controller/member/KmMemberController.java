package com.example.kmarket.controller.member;

import com.example.kmarket.dto.member.ChangePasswordRequestDTO;
import com.example.kmarket.dto.member.KmMemberRequestDTO;
import com.example.kmarket.dto.member.KmMemberResponseDTO;
import com.example.kmarket.service.member.KmMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class KmMemberController {

    private final KmMemberService memberService;

    @GetMapping("/me")
    public ResponseEntity<KmMemberResponseDTO> getMyMemberInfo() {
        KmMemberResponseDTO myInfoBySecurity = memberService.getMyInfoBySecurity();
        System.out.println(myInfoBySecurity.getNick());
        return ResponseEntity.ok((myInfoBySecurity));
        // return ResponseEntity.ok(memberService.getMyInfoBySecurity());
    }

    @PostMapping("/nick")
    public ResponseEntity<KmMemberResponseDTO> setMemberNickname(@RequestBody KmMemberRequestDTO request) {
        return ResponseEntity.ok(memberService.changeMemberNickname(request.getEmail(), request.getNick()));
    }

    @PostMapping("/pass")
    public ResponseEntity<KmMemberResponseDTO> setMemberPassword(@RequestBody ChangePasswordRequestDTO request) {
        return ResponseEntity.ok(memberService.changeMemberPassword(request.getExPassword(), request.getNewPassword()));
    }

}
