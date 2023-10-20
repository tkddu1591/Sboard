package com.example.kmarket.controller.cs.board;

import com.example.kmarket.service.cs.CsCateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.kmarket.dto.cs.CsPageRequestDTO;

@RequestMapping("/cs/faq/*")
@RequiredArgsConstructor
@Controller
@Log4j2
public class FaqController {
    private final CsCateService ccs;

    @GetMapping("/list")
    public String list(Model model, CsPageRequestDTO csPageRequestDTO) {

        /*KmCsCateDTO cateDTO = ccs.findByCate(pageResponseDTO.getCate());
        model.addAttribute("cateDto", cateDTO);*/
        return "cs/faq/list";
    }

    @GetMapping("/view")
    public String view() {
        return "cs/faq/view";
    }

}