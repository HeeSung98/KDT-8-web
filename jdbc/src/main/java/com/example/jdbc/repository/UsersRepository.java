package com.example.jdbc.repository;

import com.example.jdbc.Users;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
@Log4j2
public class UsersRepository {
    @Autowired
    private JdbcTemplate jdbc;

    private static String INSERT_USER =
            """
            insert into users(id, name, address) values(?, ?, ?);
            """;

    public void insert(Users user) {
        jdbc.update(INSERT_USER, user.getId(), user.getName(), user.getAddress());
    }
}
