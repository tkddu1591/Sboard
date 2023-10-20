package com.example.kmarket.controller.admin.cs;

import com.example.kmarket.dto.PageRequestDTO;
import com.example.kmarket.dto.PageResponseDTO;
import com.example.kmarket.dto.admin.KmAdminFaqDTO;
import com.example.kmarket.dto.admin.KmAdminNoticeDTO;
import com.example.kmarket.mapper.admin.KmAdminFaqMapper;
import com.example.kmarket.service.admin.KmAdminFaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class Admin_FaqController {

    @Autowired
    private KmAdminFaqService kmAdminFaqService;

    @GetMapping("/admin/faq/list")
    public String list(Model model, String pg){

        List<KmAdminFaqDTO> faqList = kmAdminFaqService.selectCsFaq();
        model.addAttribute("faqList", faqList);

        List<KmAdminFaqDTO> distinctCate = kmAdminFaqService.distinctCate();
        model.addAttribute("distinctCate", distinctCate);

        // 페이징 처리
        int total = kmAdminFaqService.selectFaqCountTotal();
        int lastPageNum = kmAdminFaqService.getLastPageNum(total);
        int currentPg = kmAdminFaqService.getCurrentPage(pg);
        int start = kmAdminFaqService.getStartNum(currentPg);

        // 상품 목록 출력
        List<KmAdminFaqDTO> faq = kmAdminFaqService.selectFaq(start);

        // 뷰(템플릿)에서 참조하기 위해 모델 참조
        model.addAttribute("faq", faq);

        // 페이징 처리
        model.addAttribute("lastPageNum", lastPageNum);

        return "admin/faq/list";
    }

    @GetMapping("/admin/faq/view")
    public String view(){
        return "admin/faq/view";
    }



}
