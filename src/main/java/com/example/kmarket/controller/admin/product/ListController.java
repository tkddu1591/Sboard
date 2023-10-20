package com.example.kmarket.controller.admin.product;

import com.example.kmarket.dto.product.KmProductDTO;
import com.example.kmarket.service.admin.KmAdminProductService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Log4j2
@Controller
public class ListController {

    @Autowired
    private KmAdminProductService kmAdminProductService;

    @GetMapping("/admin/product/list")
    public String list(Model model, String pg) {

        int total = kmAdminProductService.selectProductCountTotal();
        int lastPageNum = kmAdminProductService.getLastPageNum(total);
        int currentPg = kmAdminProductService.getCurrentPage(pg);
        int start = kmAdminProductService.getStartNum(currentPg);


        // 상품 목록 출력
        List<KmProductDTO> products = kmAdminProductService.selectProducts(start);

        // 뷰(템플릿)에서 참조하기 위해 모델 참조
        model.addAttribute("products", products);
        model.addAttribute("lastPageNum", lastPageNum);


        return "/admin/product/list";
    }


}

