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
@Table(name = "km_cs_cate2")
public class KmCsCate2Entity {

	@Id
	private int cate1;
	private int cate2;
	private String c2Name;
	

}
