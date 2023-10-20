package com.example.kmarket.dto.cs;

import com.example.kmarket.entity.cs.KmCsNoticeEntity;
import lombok.*;

import java.time.LocalDateTime;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class KmCsNoticeDTO {
	private int noticeNo;
	private String cate;
	private int type;
	private String title;
	private String content;
	private String writer;
	private String regip;
	private LocalDateTime rdate;


	//추가 필드
	private String cateName;
	private String typeName;
}
