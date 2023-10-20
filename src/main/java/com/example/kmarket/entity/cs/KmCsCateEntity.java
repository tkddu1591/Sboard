package com.example.kmarket.entity.cs;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "km_cs_cate")
public class KmCsCateEntity {
	@Id
	private String cate;
	private String cateName;

}
