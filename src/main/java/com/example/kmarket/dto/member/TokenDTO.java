package com.example.kmarket.dto.member;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class TokenDTO {
    private String grantType;
    private String accessToken;
    private Long tokenExpiresIn;
}