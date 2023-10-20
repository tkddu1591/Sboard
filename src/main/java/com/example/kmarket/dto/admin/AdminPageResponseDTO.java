package com.example.kmarket.dto.admin;

import com.example.kmarket.dto.cs.KmCsFaqDTO;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class AdminPageResponseDTO {
    // 위에는 추가해야 되는 값
    private List<KmAdminNoticeDTO> dtoList;
    private List<KmCsFaqDTO> faqList;
    
    // 아래는 기본값
    private int pg;
    private int size;
    private int total;
    private String cate;

    private int start, end;
    private boolean prev, next;

    @Builder
    public AdminPageResponseDTO(AdminPageRequestDTO adminPageRequestDTO,
                                List<KmAdminNoticeDTO> dtoList, int total,
                                List<KmCsFaqDTO> faqList) {
        this.cate = adminPageRequestDTO.getCate();
        this.pg = adminPageRequestDTO.getPg();
        this.size = adminPageRequestDTO.getSize();
        this.total = total;

        this.dtoList = dtoList;
        this.faqList = faqList;

        this.end = (int) (Math.ceil(this.pg / 10.0)) * 10;
        this.start = this.end - 9;
        int last = (int)(Math.ceil(total / (double)size));

        this.end = end > last ? last:end;
        this.prev = this.start > 1;
        this.next = total > this.end * this.size;
    }
}
