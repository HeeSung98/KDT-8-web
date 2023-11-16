package com.example.mybatis.controller;

import com.example.mybatis.dto.BoardDTO;
import com.example.mybatis.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;

    @GetMapping("/board")
    public String getBoard(Model model) {
        List<BoardDTO> boardDTOList = boardService.getAll();
        model.addAttribute("list", boardDTOList);
        return "board";
    }

    @GetMapping("/board/search")
    @ResponseBody
    public int getBoardSearch(@RequestParam String word) {
        int result = boardService.searchBoard(word);
        System.out.println(result);
        return result;
    }

    @PostMapping("/board")
    @ResponseBody
    public void postBoard(@RequestBody BoardDTO boardDTO) {
    }

    @PatchMapping("/board")
    @ResponseBody
    public void patchBoard(@RequestBody BoardDTO boardDTO) {
    }

    @DeleteMapping("/board")
    @ResponseBody
    public void deleteBoard(@RequestParam int id) {
    }
}
