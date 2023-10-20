package com.example.kmarket.entity.member;

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
@Table(name = "km_member_terms")
public class KmMemberTermsEntity {
    @Id
    private String terms;
    private String privacy;
    private String location;
    private String finance;
    private String tax;

}
