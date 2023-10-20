package com.example.kmarket.service.cs;

import com.example.kmarket.dto.cs.KmCsCateDTO;
import com.example.kmarket.entity.cs.KmCsCateEntity;
import com.example.kmarket.entity.cs.KmCsTypeEntity;
import com.example.kmarket.mapper.cs.KmCsCateMapper;
import com.example.kmarket.mapper.cs.KmCsTypeMapper;
import com.example.kmarket.repository.cs.KmCsCateRepository;
import com.example.kmarket.repository.cs.KmCsTypeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
@RequiredArgsConstructor
public class CsCateService {

    private final KmCsCateRepository cateRepo;
    private final KmCsCateMapper cateMapper;

    private final KmCsTypeRepository typeRepo;
    private final KmCsTypeMapper typeMapper;

    public KmCsCateDTO findByCate(String cate){
        KmCsCateEntity entity = cateRepo.findByCate(cate);
        KmCsCateDTO dto = cateMapper.toDTO(entity);
        return dto;
    }

    public List<KmCsCateEntity> findAll(){
        List<KmCsCateEntity> cateEntityList = cateRepo.findAll();
        return cateEntityList;
    }

    public List<KmCsTypeEntity> cateForType(String cate){
        List<KmCsTypeEntity> cateEntityList = typeRepo.findByCate(cate);
        return cateEntityList;
    }
}
