package com.example.kmarket.controller.cs.board;

import com.example.kmarket.dto.cs.KmCsCateDTO;
import com.example.kmarket.entity.cs.KmCsCateEntity;
import com.example.kmarket.service.cs.CsCateService;
import com.example.kmarket.service.cs.KmQnaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.kmarket.dto.cs.CsPageRequestDTO;
import com.example.kmarket.dto.cs.CsPageResponseDTO;

import java.util.List;

@RequestMapping("/cs/qna/*")
@RequiredArgsConstructor
@Controller
@Log4j2
public class QnaController {

    private final KmQnaService qs;
    private final CsCateService ccs;

    @GetMapping("/list")
    public String list(Model model, CsPageRequestDTO csPageRequestDTO) {
        CsPageResponseDTO csPageResponseDTO = qs.findByCate(csPageRequestDTO);
        model.addAttribute("csPageResponseDTO", csPageResponseDTO);

        KmCsCateDTO cateDTO = ccs.findByCate(csPageResponseDTO.getCate());
        model.addAttribute("cateDto", cateDTO);
        return "cs/qna/list";
    }
    @GetMapping("/view")
    public String view() {
        return "cs/qna/view";
    }
    @GetMapping("/write")
    public String write(Model model) {
        List<KmCsCateEntity> cates = qs.findByTypeLessThan(90);
        model.addAttribute("cates", cates);

        return "cs/qna/write";
    }
}
