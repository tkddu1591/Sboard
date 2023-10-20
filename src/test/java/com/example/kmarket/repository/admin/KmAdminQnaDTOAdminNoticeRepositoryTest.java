package com.example.kmarket.repository.admin;

import com.example.kmarket.dto.admin.AdminPageRequestDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Pageable;

@SpringBootTest
public class KmAdminQnaDTOAdminNoticeRepositoryTest {

    @Autowired
    private KmAdminNoticeRepository kmAdminNoticeRepository;

    @Test
    @DisplayName("findByKmCsCateEntity_Cate 테스트")
    public void findByKmCsCateEntity_Cate(){

        AdminPageRequestDTO adminPageRequestDTO = AdminPageRequestDTO.builder().type(96).build();

        Pageable pageable = adminPageRequestDTO.getPageable("noticeNo");

        kmAdminNoticeRepository.findByKmCsCateEntity_Cate(pageable, "all");

    }

}
