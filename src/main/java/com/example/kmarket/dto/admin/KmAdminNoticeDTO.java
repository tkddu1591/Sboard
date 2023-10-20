package com.example.kmarket.dto.admin;

import lombok.*;

import java.time.LocalDateTime;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class KmAdminNoticeDTO {
    private int noticeNo;
    private String cate;
    private int type;
    private String title;
    private String hit;
    private String content;
    private String writer;
    private String regip;
    private LocalDateTime rdate;


    //추가 필드
    private String cateName;
    private String typeName;
}
