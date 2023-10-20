package com.example.kmarket.dto.admin;

import lombok.*;

import java.time.LocalDateTime;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class KmAdminQnaDTO {

    private int qnaNo;
    private String cate;
    private int type;
    private String title;
    private String content;
    private String file1;
    private String file2;
    private String file3;
    private String file4;
    private String writer;
    private String ordNo; //null 값 넣기 위해 String으로 변경
    private String prodNo;
    private int parent;
    private int answerComplete;
    private String regip;
    private LocalDateTime rdate;

    //추가 필드
    private String writerName;
    private String cateName;
    private String typeName;
    private String writerMarking;
    private LocalDateTime rdateSub;
}
