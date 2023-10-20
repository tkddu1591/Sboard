package com.example.kmarket.mapper.admin;

import com.example.kmarket.dto.product.KmProductDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface KmAdminProductMapper {

    public int insertProduct(KmProductDTO dto);

    public int selectProductCountTotal();
    public KmProductDTO selectProduct(int prodNo);
    public List<KmProductDTO> selectProducts(int start);
    public int updateProduct(KmProductDTO dto);
    public int deleteProduct(int prodNo);


}
