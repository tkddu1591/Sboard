package com.example.kmarket.controller.member;

import com.example.kmarket.dto.member.KmMemberRequestDTO;
import com.example.kmarket.dto.member.KmMemberResponseDTO;
import com.example.kmarket.dto.member.TokenDTO;
import com.example.kmarket.jwt.TokenProvider;
import com.example.kmarket.service.member.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenProvider tokenProvider;
    @PostMapping("/signup")
    public ResponseEntity<KmMemberResponseDTO> signup(@RequestBody KmMemberRequestDTO requestDto) {
        return ResponseEntity.ok(authService.signup(requestDto));
    }

    @PostMapping("/login")
    public ResponseEntity<TokenDTO> login(@RequestBody KmMemberRequestDTO requestDto) {
        requestDto.setRdate(LocalDateTime.now());
        return ResponseEntity.ok(authService.login(requestDto));
    }
}
