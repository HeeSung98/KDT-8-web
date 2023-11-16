package kdt.jpa.service;

import kdt.jpa.dto.UserDTO;
import kdt.jpa.entity.User;
import kdt.jpa.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<User> getList() {
        List<User> userList = userRepository.findAll();

        return userList;
    }

    public List<UserDTO> get(String name) {
        List<User> userList = userRepository.findAll();
        List<UserDTO> result = new ArrayList<>();

        return result;
    }
}
