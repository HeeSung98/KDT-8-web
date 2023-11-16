package com.example.mybatis.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDTO {
    private int no;
    private Long id;
    private String name;
    private String address;
}
