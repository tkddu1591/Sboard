package com.example.kmarket.dto.admin;

import lombok.*;

import java.time.LocalDateTime;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class KmAdminFaqDTO {
    private int faqNo;
    private String cate;
    private int type;
    private String title;
    private String content;
    private int relatedFaq;
    private String writer;
    private String regip;
    private LocalDateTime rdate;
}
