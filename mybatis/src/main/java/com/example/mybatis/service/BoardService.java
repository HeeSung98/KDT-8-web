package com.example.mybatis.service;

import com.example.mybatis.domain.Board;
import com.example.mybatis.dto.BoardDTO;
import com.example.mybatis.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardMapper boardMapper;

    public List<BoardDTO> getAll() {
        List<Board> boardList = boardMapper.getAll();
        List<BoardDTO> result = new ArrayList<>();

        for (Board board : boardList) {
            BoardDTO boardDTO = BoardDTO.builder()
                    .id(board.getId())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .writer(board.getWriter())
                    .registered(board.getRegistered()).build();
            result.add(boardDTO);
        }

        return result;
    }

    public int searchBoard(String word) {
        List<Board> boardList = boardMapper.searchBoard(word);
        int result = boardList.size();
        System.out.println(result);

        return result;
    }
}
