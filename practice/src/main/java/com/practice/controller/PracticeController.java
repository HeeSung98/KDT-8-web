package com.practice.controller;

import com.practice.vo.P9VO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class PracticeController {
    @GetMapping("/introduce")
    public String practice1(@RequestParam(value = "key", required = false) String key) {
        return "/practice/hello";
    }

    @GetMapping("/practice9")
    public String p9Get() {
        return "/practice/practice9";
    }

    @PostMapping("/practice9")
    @ResponseBody
    public String p9Post(@RequestBody P9VO p9VO) {
        String msg = p9VO.getName() + " 회원가입 성공";
        return msg;
    }

    @GetMapping("/practice10")
    public String p10Get() {
        return "/practice/practice10";
    }
}
