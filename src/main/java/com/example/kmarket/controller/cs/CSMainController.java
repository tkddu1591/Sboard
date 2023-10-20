package com.example.kmarket.controller.cs;

import com.example.kmarket.service.cs.CsCateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/cs/*")
@RequiredArgsConstructor
@Log4j2
public class CSMainController {

    private final CsCateService csCateService;

    @GetMapping(value = {"/", "/index"})
    public String index() {
        return "cs/index";
    }

}
