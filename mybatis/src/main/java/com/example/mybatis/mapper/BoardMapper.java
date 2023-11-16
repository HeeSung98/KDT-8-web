package com.example.mybatis.mapper;

import com.example.mybatis.domain.Board;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<Board> getAll();

    void insertBoard(Board board);

    void updateBoard(Board board);

    List<Board> searchBoard(String word);
}
