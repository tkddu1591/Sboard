package com.example.kmarket.dto.member;

import com.example.kmarket.entity.member.AuthorityEntity;
import com.example.kmarket.entity.member.KmMemberEntity;
import lombok.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class KmMemberRequestDTO {

    private String uid;
    private String pass;
    private String name;
    private String nick;
    private int gender;
    private String hp;
    private String email;
    private int type = 1;
    private int point = 0;
    private int level = 1;
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
    private int etc1 = 0;
    private int etc2 = 0;
    private String etc3;
    private String etc4;
    private String etc5;

    public KmMemberEntity toMember(PasswordEncoder passwordEncoder) {
        KmMemberEntity kmMemberEntity = KmMemberEntity.builder()
                .uid(uid)
                .email(email)
                .pass(passwordEncoder.encode(pass))
                .nick(nick)
                .name(name)
                .gender(gender)
                .hp(hp)
                .type(type)
                .point(point)
                .level(level)
                .zip(zip)
                .addr1(addr1)
                .addr2(addr2)
                .company(company)
                .ceo(ceo)
                .bizRegNum(bizRegNum)
                .comRegNum(comRegNum)
                .tel(tel)
                .manager(manager)
                .managerHp(managerHp)
                .fax(fax)
                .regIp(regIp)
                .wdate(wdate)
                .rdate(rdate)
                .etc1(etc1)
                .etc2(etc2)
                .etc3(etc3)
                .etc4(etc4)
                .etc5(etc5)
                .build();
        if (type == 9) {
            kmMemberEntity.setAuthority(AuthorityEntity.ROLE_ADMIN);
        } else if (type == 2) {
            kmMemberEntity.setAuthority(AuthorityEntity.ROLE_SELLER);
        } else {
            kmMemberEntity.setAuthority(AuthorityEntity.ROLE_USER);
        }

        return kmMemberEntity;
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(uid, pass);
    }


}
