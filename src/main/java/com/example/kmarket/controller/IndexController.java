package com.example.kmarket.controller;

import com.example.kmarket.service.cs.CsCateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
@Log4j2
public class IndexController  {

    private final CsCateService ccs;

    @GetMapping(value = {"/","/index"})
    public String index() {
        return "index";
    }

}