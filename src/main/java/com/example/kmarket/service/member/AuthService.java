package com.example.kmarket.service.member;

import com.example.kmarket.dto.member.KmMemberRequestDTO;
import com.example.kmarket.dto.member.KmMemberResponseDTO;
import com.example.kmarket.dto.member.TokenDTO;
import com.example.kmarket.entity.member.KmMemberEntity;
import com.example.kmarket.jwt.TokenProvider;
import com.example.kmarket.repository.member.KmMemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class AuthService {
    private final AuthenticationManagerBuilder managerBuilder;
    private final KmMemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;

    public KmMemberResponseDTO signup(KmMemberRequestDTO requestDto) {
        if (memberRepository.existsByUid(requestDto.getUid())) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다");
        }

        KmMemberEntity member = requestDto.toMember(passwordEncoder);
        return KmMemberResponseDTO.of(memberRepository.save(member));
    }

    public TokenDTO login(KmMemberRequestDTO requestDto) {

        log.info("----------------"+requestDto.toString());
        UsernamePasswordAuthenticationToken authenticationToken = requestDto.toAuthentication();
        log.info("----------------"+authenticationToken.toString());
        Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);
        log.info(tokenProvider.generateTokenDto(authentication).toString());

        return tokenProvider.generateTokenDto(authentication);
    }

}