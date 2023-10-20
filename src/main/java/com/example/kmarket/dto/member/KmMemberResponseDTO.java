package com.example.kmarket.dto.member;

import com.example.kmarket.entity.member.KmMemberEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class KmMemberResponseDTO {
    private String uid;
    private String name;
    private String nick;
    private int gender;
    private String hp;
    private String email;
    private int type = 1;
    private int point =0;
    private int level =1;
    private String zip;
    private String addr1;
    private String addr2;
    private String company;
    private String ceo;
    private String bizRegNum;
    private String comRegNum;
    private String tel;
    private String manager;
    private String managerHp;
    private String fax;
    private String regIp;
    private LocalDateTime wdate;
    private LocalDateTime rdate;
    private int etc1 =0;
    private int etc2 =0;
    private String etc3;
    private String etc4;
    private String etc5;

    public static KmMemberResponseDTO of(KmMemberEntity member) {
        return KmMemberResponseDTO.builder()
                .uid(member.getUid())
                .email(member.getEmail())
                .hp(member.getHp())
                .level(member.getLevel())
                .nick(member.getNick())
                .gender(member.getGender())
                .name(member.getName())
                .type(member.getType())
                .point(member.getPoint())
                .zip(member.getZip())
                .addr1(member.getAddr1())
                .addr2(member.getAddr2())
                .company(member.getCompany())
                .ceo(member.getCeo())
                .bizRegNum(member.getBizRegNum())
                .comRegNum(member.getComRegNum())
                .tel(member.getTel())
                .manager(member.getManager())
                .managerHp(member.getManagerHp())
                .fax(member.getFax())
                .regIp(member.getRegIp())
                .wdate(member.getWdate())
                .rdate(member.getRdate())
                .etc1(member.getEtc1())
                .etc2(member.getEtc2())
                .etc3(member.getEtc3())
                .etc4(member.getEtc4())
                .etc5(member.getEtc5())
                .build();
    }

}
