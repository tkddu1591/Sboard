package com.example.kmarket.service.product;

import com.example.kmarket.dto.product.KmProductCartDTO;
import com.example.kmarket.entity.product.KmProductCartEntity;
import com.example.kmarket.mapper.product.KmProductCartMapper;
import com.example.kmarket.repository.product.KmProductCartRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
public class KmProductCartService {
    @Autowired
    KmProductCartRepository kmProductCartRepository;
    @Autowired
    KmProductCartMapper kmProductCartMapper;

    public void deleteProductCart(List<Integer> selectCartsNo) {
        for (int selectCartNo : selectCartsNo) {
            kmProductCartRepository.deleteById(selectCartNo);
        }
    }

    public List<KmProductCartDTO> findByUid(String uid) {
        List<KmProductCartEntity> objects = kmProductCartRepository.findByKmMemberEntity_UidWithKmProduct(uid);
        List<KmProductCartDTO> dtos = objects.stream().map(kmProductCartMapper::toDTO).toList();
        return dtos;

/*
        for (Object[] result : objects) {
            KmProductCartEntity pc = (KmProductCartEntity) result[0];
            String thumb1 = (String) result[1]; // KmProductEntity의 thumb1 값
            String prodName = (String) result[2]; // KmProductEntity의 prodName 값
            String descript = (String) result[3]; // KmProductEntity의 descript 값

            KmProductCartDTO dto = kmProductCartMapper.toDTO(pc);
            dto.setThumb1(thumb1);
            dto.setProdName(prodName);
            dto.setDescript(descript);
            dtos.add(dto);
        }*/

    /*
                .stream()
                .map(kmProductCartMapper::toDTO)
                .toList();*/


    }

    public void save(KmProductCartDTO kmProductCartDTO) {
        kmProductCartDTO.setRdate(LocalDateTime.now());
        KmProductCartEntity checkEntity = kmProductCartRepository.findKmProductCartEntityByKmProductEntity_ProdNo(kmProductCartDTO.getProdNo());
        if (checkEntity != null) {
            kmProductCartDTO.setCartNo(checkEntity.getCartNo());
            kmProductCartDTO.setCount(checkEntity.getCount() + kmProductCartDTO.getCount());
            kmProductCartDTO.setTotal(checkEntity.getTotal() + kmProductCartDTO.getTotal());
            kmProductCartRepository.save(kmProductCartMapper.toEntity(kmProductCartDTO));
        } else {
            kmProductCartRepository.save(kmProductCartMapper.toEntity(kmProductCartDTO));
        }
    }

    @Transactional
    public void deleteAll(String ordUid) {
        kmProductCartRepository.deleteKmProductCartEntitiesByKmMemberEntity_Uid(ordUid);
    }
}
