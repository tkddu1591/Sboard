package com.example.kmarket.entity.member;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "km_member")
public class KmMemberEntity {
    @Id
    private String uid;
    private String pass;
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

    @Enumerated(EnumType.STRING)
    private AuthorityEntity authority;

    public void setUid(String uid) {
        this.uid = uid;
    }

    public void setPassword(String password) { this.pass = password; }


}
