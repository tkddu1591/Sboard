package com.example.kmarket.entity.member;

import jakarta.persistence.*;
import lombok.*;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "km_member_point")
public class KmMemberPointEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pointNo;
    private String uid;
    private int orderNo;
    private int point;
    private String pointDate;

}
