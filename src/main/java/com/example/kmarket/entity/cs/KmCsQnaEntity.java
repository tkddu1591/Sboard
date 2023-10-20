package com.example.kmarket.entity.cs;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@ToString(exclude = {"kmCsCateEntity", "kmCsTypeEntity", "kmCsQnaEntity"})
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "km_cs_qna")
public class KmCsQnaEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int qnaNo;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cate")
	private KmCsCateEntity kmCsCateEntity;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "type")
	private KmCsTypeEntity kmCsTypeEntity;
	private String title;
	private String content;
	private String file1;
	private String file2;
	private String file3;
	private String file4;
	private String writer;
	private String ordNo; //null 값 넣기 위해 String으로 변경 
	private int answerComplete;
	private String regip;

	@CreationTimestamp
	private LocalDateTime rdate;
}
