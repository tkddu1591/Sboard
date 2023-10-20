package com.example.kmarket.dto.cs;

import lombok.*;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class KmCsFaqRateDTO {
	private int faqNo;
	private String uid;
	private int rate;

}
