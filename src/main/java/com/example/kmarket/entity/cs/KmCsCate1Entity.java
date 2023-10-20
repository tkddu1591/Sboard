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
@Table(name = "km_cs_cate1")
public class KmCsCate1Entity {
	@Id
	private int cate1;
	private String c1Name;

}
