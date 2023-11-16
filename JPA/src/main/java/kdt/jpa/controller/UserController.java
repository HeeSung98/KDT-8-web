package kdt.jpa.controller;

import kdt.jpa.dto.UserDTO;
import kdt.jpa.entity.User;
import kdt.jpa.repository.UserRepository;
import kdt.jpa.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/user")
    public String getUser(Model model) {
        List<User> userList = userService.getList();

        model.addAttribute("list", userList);

        return "user";
    }
}
