package com.practice.controller;

import com.practice.dto.UserDTO;
import com.practice.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {
    @GetMapping("/")
    public String main() {
        return "/main/main";
    }

    @GetMapping("/get/response1")
    // ?key=value
    public String getResponse1(@RequestParam(value = "name", required = true) String n, Model model){
        model.addAttribute("name", n);
        return "response";
    }

    @GetMapping("/get/response2")
    public String getResponse2(@RequestParam(value = "name", required = false) String n, Model model) {
        model.addAttribute("name", n);
        return "response";
    }

    @GetMapping("/dto/response1")
    public String dtoAPI1(@ModelAttribute UserDTO userDTO) {
        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }

    @PostMapping("/dto/response2")
    @ResponseBody
    public String dtoAPI2(UserDTO userDTO) {
        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }

    @PostMapping("/dto/response3")
    public String dtoAPI3(@RequestBody UserDTO userDTO) {
        String msg = userDTO.getName() + " " + userDTO.getAge();
        return msg;
    }

    @GetMapping("/vo/response1")
    @ResponseBody
    public String voAPI1(UserVO userVO) {
        String msg = userVO.getName() + " " + userVO.getAge();
        return msg;
    }

    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosResponse1(@RequestParam(required = false) String name, @RequestParam(required = false) String age) {
        String msg = "이름: " + name + ", 나이: " + age;
        return msg;
    }

    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosResponse2(UserDTO userDTO) {
        String msg = "이름: " + userDTO.getName() + ", 나이: " + userDTO.getAge();
        return msg;
    }

    @PostMapping("/axios/response3")
    @ResponseBody
    public String axiosResponse3(@RequestParam(value = "name") String name, @RequestParam(required = false) String age) {
        String msg = "이름: " + name + ", 나이: " + age;
        return msg;
    }

    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosResponse4(UserDTO userDTO) {
        String msg = "이름: " + userDTO.getName() + ", 나이: " + userDTO.getAge();
        return msg;
    }

    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosResponse5(@RequestBody UserDTO userDTO) {
        String msg = "이름: " + userDTO.getName() + ", 나이: " + userDTO.getAge();
        return msg;
    }

    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosVoResponse1(@RequestParam String name, @RequestParam String age) {
        String msg = "이름: " + name + ", 나이: " + age;
        return msg;
    }

    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosVoResponse2(UserVO userVO) {
        String msg = "이름: " + userVO.getName() + ", 나이: " + userVO.getAge();
        return msg;
    }

    @PostMapping("/axios/vo/response3")
    @ResponseBody
    public String axiosVoResponse3(@RequestParam String name, @RequestParam String age) {
        String msg = "이름: " + name + ", 나이: " + age;
        return msg;
    }

    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosVoResponse4(UserVO userVO) {
        String msg = "이름: " + userVO.getName() + ", 나이: " + userVO.getAge();
        return msg;
    }

    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosVoResponse5(@RequestBody UserVO userVO) {
        String msg = "이름: " + userVO.getName() + ", 나이: " + userVO.getAge();
        return msg;
    }
}
