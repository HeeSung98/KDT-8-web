package com.example.mybatis.controller;

import com.example.mybatis.domain.User;
import com.example.mybatis.dto.UserDTO;
import com.example.mybatis.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@Log4j2
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/user")
    public String getUser(Model model) {
        List<UserDTO> userList = userService.getUserList();
        model.addAttribute("list", userList);
        return "user";
    }

    @GetMapping("/insertUser")
    public String getInsertUser(@RequestParam String name, @RequestParam String address, Model model) {
        System.out.println(name + ", " + address);
        User user = new User();
        user.setName(name);
        user.setAddress(address);

        userService.insertUser(user);

        List<UserDTO> userList = userService.getUserList();
        model.addAttribute("list", userList);

        return "user";
    }

}
