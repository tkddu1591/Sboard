package com.example.kmarket.security;

import com.example.kmarket.jwt.JwtAccessDeniedHandler;
import com.example.kmarket.jwt.JwtAuthenticationEntryPoint;
import com.example.kmarket.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.FormLoginConfigurer;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.stereotype.Component;


@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
@Component
public class SecurityConfigration {

    private final TokenProvider tokenProvider;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {

        httpSecurity
                //위변조 방지 비활성(개발할때만 끔)
                .csrf(CsrfConfigurer::disable)
                //기본 HTTP 인증방식 비활성
                .httpBasic(HttpBasicConfigurer::disable)
                //sessionManagement = 세션 비활성(세션말고 토큰씀)
                .sessionManagement(config -> config.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                //form login 비활성(토큰방식일때는 안씀)
                .formLogin(FormLoginConfigurer::disable)

                //핸들링
                .exceptionHandling(exceptionHandling -> {
                    exceptionHandling.authenticationEntryPoint(jwtAuthenticationEntryPoint);
                    exceptionHandling.accessDeniedHandler(jwtAccessDeniedHandler);
                })
                /*
                .formLogin(config -> config.loginPage("/user/login")
                        .defaultSuccessUrl("/")
                        .failureUrl("/user/login?success=100")
                        .usernameParameter("uid")
                        .passwordParameter("pass"))

                //로그아웃 설정
                .logout(config -> config.invalidateHttpSession(true)
                        .logoutUrl("/user/logout")
                        .logoutSuccessUrl("/user/login?success=200"))*/
                //인가권한설정 (back에서는 DB에 접속하는 기능을 제한함)
                .authorizeHttpRequests(authorizeHttpRequest -> authorizeHttpRequest
                        .requestMatchers("/").permitAll()//인가설정
                        .requestMatchers("/**").permitAll())
                //tokenProvider 적용
                .apply(new JwtSecurityConfig(tokenProvider));

        // 인가 설정
/*

        httpSecurity.authorizeHttpRequests(
                authorizeRequests ->
                        authorizeRequests
                                .requestMatchers(new AntPathRequestMatcher("/")).permitAll()
                                .requestMatchers(new AntPathRequestMatcher("/admin/**")).hasRole("ADMIN")
                                .requestMatchers(new AntPathRequestMatcher("/manager/**")).hasRole("MANAGER")
                                .requestMatchers(new AntPathRequestMatcher("/user/**")).permitAll());


        //사이트 위변조 방지 설정
        httpSecurity.csrf(CsrfConfigurer::disable);

        //로그인 설정
        httpSecurity.formLogin(formLogin ->
                formLogin
                        .loginPage("/user/login")
                        .defaultSuccessUrl("/user/loginSuccess")
                        .failureUrl("/user/login?success=200")
                        .usernameParameter("uid")
                        .passwordParameter("pass")
        );

        //로그아웃 설정
        httpSecurity.logout(logout ->
                logout
                        .invalidateHttpSession(true)
                        .logoutRequestMatcher(new AntPathRequestMatcher("/user/logout"))
                        .logoutSuccessUrl("/user/login?success=200")
        );

        //사용자 인증 처리 컴포넌트 등록
        httpSecurity.userDetailsService(userService);
*/


        return httpSecurity.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

}
