package com.example.kmarket.controller.admin.cs;

import com.example.kmarket.dto.admin.KmAdminQnaDTO;
import com.example.kmarket.service.admin.KmAdminQnaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class Admin_QnaController {

    @Autowired
    private KmAdminQnaService kmAdminQnaService;

    @GetMapping("/admin/qna/view")
    public String view(){
        return "admin/notice/view";
    }

    @GetMapping("/admin/qna/list")
    public String list(Model model){

        List<KmAdminQnaDTO> qnaList = kmAdminQnaService.selectCsQna();

        model.addAttribute("qnaList", qnaList);

        return "admin/qna/list";
    }

}
