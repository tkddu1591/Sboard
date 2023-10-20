package com.example.kmarket.controller.admin.cs;

import com.example.kmarket.dto.admin.AdminPageResponseDTO;
import com.example.kmarket.dto.admin.AdminPageRequestDTO;
import com.example.kmarket.dto.admin.KmAdminNoticeDTO;
import com.example.kmarket.service.admin.KmAdminNoticeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@RequiredArgsConstructor
@Controller
@Log4j2
public class Admin_NoticeController {

    @Autowired
    private KmAdminNoticeService kmAdminNoticeService;

    @GetMapping("/admin/notice/list")
    public String list(Model model, String pg){

        List<KmAdminNoticeDTO> noticeList = kmAdminNoticeService.selectCsNotices();
        model.addAttribute("noticeList", noticeList);

        List<KmAdminNoticeDTO> selectCsNoticesjoinCsCate = kmAdminNoticeService.selectCsNoticesjoinCsCate();
        model.addAttribute("selectCsNoticesjoinCsCate", selectCsNoticesjoinCsCate);

        List<KmAdminNoticeDTO> distinctCate = kmAdminNoticeService.distinctCate();
        model.addAttribute("distinctCate", distinctCate);

        // 페이징 처리
        int total = kmAdminNoticeService.selectNoticeCountTotal();
        int lastPageNum = kmAdminNoticeService.getLastPageNum(total);
        int currentPg = kmAdminNoticeService.getCurrentPage(pg);
        int start = kmAdminNoticeService.getStartNum(currentPg);

        // 상품 목록 출력
        List<KmAdminNoticeDTO> notices = kmAdminNoticeService.selectNotices(start);

        // 뷰(템플릿)에서 참조하기 위해 모델 참조
        model.addAttribute("notices", notices);

        // 페이징 처리
        model.addAttribute("lastPageNum", lastPageNum);



        return "admin/notice/list";
    }

    @GetMapping("/view")
    public String view(Model model, @RequestParam int pg){

        KmAdminNoticeDTO selectCsNoticeBynoticeNo = kmAdminNoticeService.selectCsNoticeBynoticeNo();

        model.addAttribute("noticeBynoticeNo", selectCsNoticeBynoticeNo);

        return "admin/notice/view";
    }

    @GetMapping("/write")
    public String write(){
        return "/admin/notice/write";
    }

}
