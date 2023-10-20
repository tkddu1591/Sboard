package com.example.kmarket.service.product;

import com.example.kmarket.dto.product.KmProductOrderItemDTO;
import com.example.kmarket.mapper.product.KmProdcutOrderItemMapper;
import com.example.kmarket.repository.product.KmProductOrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KmProductOrderItemService {
    @Autowired
    private KmProductOrderItemRepository kmProductOrderItemRepository;
    @Autowired
    private KmProdcutOrderItemMapper kmProdcutOrderItemMapper;

    public List<KmProductOrderItemDTO> saveOrderItem(int ordNo){
        return kmProductOrderItemRepository.findByKmProductOrderEntity_OrdNo(ordNo).stream().map(kmProdcutOrderItemMapper::toDTO).toList();
    }

    public void save(List<KmProductOrderItemDTO> orderEnd) {
        for(KmProductOrderItemDTO order : orderEnd){
            kmProductOrderItemRepository.save(kmProdcutOrderItemMapper.toEntity(order));
        }
    }

    public List<KmProductOrderItemDTO> findByUidByOrdNo(int ordNo, String ordUid) {
        return kmProductOrderItemRepository.findByKmProductOrderEntity_OrdNoAndKmProductOrderEntity_OrdUid(ordNo, ordUid).stream().map(kmProdcutOrderItemMapper::toDTO).toList();
    }
}
