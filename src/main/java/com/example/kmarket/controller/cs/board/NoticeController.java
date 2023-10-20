package com.example.kmarket.controller.cs.board;

import com.example.kmarket.dto.cs.KmCsCateDTO;
import com.example.kmarket.dto.cs.KmCsNoticeDTO;
import com.example.kmarket.dto.cs.CsPageRequestDTO;
import com.example.kmarket.dto.cs.CsPageResponseDTO;
import com.example.kmarket.service.cs.CsCateService;
import com.example.kmarket.service.cs.KmNoticeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/cs/notice/*")
@RequiredArgsConstructor
@Log4j2
@Controller
public class NoticeController {

    private final KmNoticeService ns;
    private final CsCateService ccs;

    @GetMapping("/list")
    public String list(Model model, CsPageRequestDTO csPageRequestDTO) {
        CsPageResponseDTO csPageResponseDTO = ns.findByCate(csPageRequestDTO);
        model.addAttribute("csPageResponseDTO", csPageResponseDTO);

        KmCsCateDTO cateDTO = ccs.findByCate(csPageResponseDTO.getCate());
        model.addAttribute("cateDto", cateDTO);
        return "cs/notice/list";
    }

    @GetMapping("/view")
    public String view() {
        return "cs/notice/view";
    }

    @PostMapping("/write")
    public String write(KmCsNoticeDTO dto) {

        return "redirect:list";
    }
}
