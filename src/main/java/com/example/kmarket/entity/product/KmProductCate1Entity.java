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
@Table(name = "km_product_cate1")
public class KmProductCate1Entity {

    @Id
    private int cate1;
    private String c1Name;
    private String icon;


}
