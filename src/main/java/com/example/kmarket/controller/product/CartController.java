package com.example.kmarket.controller.product;

import com.example.kmarket.dto.product.KmProductCartDTO;
import com.example.kmarket.service.product.KmProductCartService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@Slf4j
public class CartController {
    @Autowired
    KmProductCartService kmProductCartService;
    @PostMapping("/cart")
    public void saveCart(@RequestBody KmProductCartDTO kmProductCartDTO){
        kmProductCartService.save(kmProductCartDTO);
    }
    @DeleteMapping("/cart")
    public void deleteCart(@RequestBody List<Integer> selectCartsNo){
        kmProductCartService.deleteProductCart(selectCartsNo);
    }
    @GetMapping("/cart")
    public List<KmProductCartDTO> listCart(String uid){
        return kmProductCartService.findByUid(uid);
    }
    @DeleteMapping("/cart/all")
    public void deleteAll(@RequestParam String uid){
        log.info(uid);
        kmProductCartService.deleteAll(uid);
    }

}
