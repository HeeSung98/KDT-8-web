package com.example.jdbc.commandlinerunner;

import com.example.jdbc.Users;
import com.example.jdbc.repository.UsersRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class UserCommandRun implements CommandLineRunner {

    @Autowired
    private UsersRepository users;

    private final Users user = new Users(1, "heesung", "SIUUUUU");

    @Override
    public void run(String... args) throws Exception {
        //log.info("야야야야: " + user.getId());
        users.insert(user);
    }
}
