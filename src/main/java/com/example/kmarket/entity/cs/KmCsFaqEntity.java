package com.example.kmarket.entity.cs;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "km_cs_faq")
public class KmCsFaqEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int faqNo;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "cate")
	private KmCsCateEntity kmCsCateEntity;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "type")
	private KmCsTypeEntity kmCsTypeEntity;
	private String title;
	private String content;
	private int relatedFaq;
	private String writer;
	private String regip;
	private int hit;
	@CreationTimestamp
	private LocalDateTime rdate;


	
}
