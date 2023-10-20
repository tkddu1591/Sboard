package com.example.kmarket.dto.member;

import lombok.*;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class KmMemberPointDTO {
    private int pointNo;
    private String uid;
    private int orderNo;
    private int point;
    private String pointDate;

}
