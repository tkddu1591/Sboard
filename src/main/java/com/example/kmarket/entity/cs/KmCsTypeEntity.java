package com.example.kmarket.entity.cs;

import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "km_cs_type")
public class KmCsTypeEntity {
    @Id
    private int type;
    private String cate;
    private String typeName;


}
