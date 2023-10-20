package com.example.kmarket.service.product;

import com.example.kmarket.dto.product.KmProductOrderDTO;
import com.example.kmarket.mapper.product.KmProductOrderMapper;
import com.example.kmarket.repository.product.KmProductOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class KmProductOrderService {
    @Autowired
    KmProductOrderRepository kmProductOrderRepository;
    @Autowired
    KmProductOrderMapper kmProductOrderMapper;

    public void save(KmProductOrderDTO kmProductOrderDTO) {
        kmProductOrderDTO.setOrdDate(LocalDateTime.now());
        kmProductOrderRepository.save(kmProductOrderMapper.toEntity(kmProductOrderDTO));
    }
    public int listOrderNo(){
        return kmProductOrderRepository.findFirstByOrderByOrdNoDesc().getOrdNo();
    }


    public KmProductOrderDTO findByLast() {
        return kmProductOrderMapper.toDTO(kmProductOrderRepository.findFirstByOrderByOrdNoDesc());
    }

    public KmProductOrderDTO findByOrdNo(String uid) {
        return kmProductOrderMapper.toDTO(kmProductOrderRepository.findTopByOrdUidOrderByOrdNoDesc(uid));
    }
}
