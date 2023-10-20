package com.example.kmarket.entity.product;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "km_product_cate2")
public class KmProductCate2Entity {
    @Id
    private int cate2;
    private int cate1;
    private String c2Name;


}
