package com.example.kmarket.controller.admin.product;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Log4j2
@Controller
public class RegisterController {

  @GetMapping ("/admin/product/register")
    public String register(){
      return "admin/product/register";

    }


}
