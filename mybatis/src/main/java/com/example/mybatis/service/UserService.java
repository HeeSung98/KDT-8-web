package com.example.mybatis.service;

import com.example.mybatis.domain.User;
import com.example.mybatis.dto.UserDTO;
import com.example.mybatis.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserMapper userMapper;

    public List<UserDTO> getUserList(){
        List<User> userList = userMapper.retrieveAll();
        List<UserDTO> result = new ArrayList<>();

        for(int i = 0; i < userList.size(); i++) {
            UserDTO userDTO = UserDTO.builder()
                    .id(userList.get(i).getId())
                    .name(userList.get(i).getName())
                    .address(userList.get(i).getAddress())
                    .no((int) (userList.get(i).getId() + 100)).build();
            result.add(userDTO);
        }

        return result;
    }

    public void insertUser(User user) {
        System.out.println(user.getName());
        userMapper.create(user);
    }

}
