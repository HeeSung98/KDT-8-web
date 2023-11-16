package kdt.jpa.repository;

import kdt.jpa.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepositoryTest;

    @Test
    public void test1() {
        System.out.println(" ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 테스트1 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ ");
        User user = User.builder()
                .name("테스터1")
                .nickname("테스터닉네임1").build();

        userRepositoryTest.save(user);
    }

    @Test
    public void test2() {
        System.out.println(" ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 테스트2 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ ");
        String nickname = "피자";
        List<User> userList = userRepositoryTest.findByNickname(nickname);

        System.out.println(nickname + "(이)란 닉네임을을 가진 유저는 총 " + userList.size() + "명");
    }

    @Test
    public void test3() {
        System.out.println(" ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 테스트3 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ ");
        String word = "피자";
        List<User> userList = userRepositoryTest.findByWord(word);

        System.out.println(word + "(이)란 이름이나 닉네임을 가진 유저는 총 " + userList.size() + "명");
    }

    @Test
    public void test4() {
        System.out.println(" ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 테스트3 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ ");
        String name = "치킨";
//        User user = userRepositoryTest.findByName(name)
//                .orElseGet(() -> {
//                    System.out.println("해당 이름을 가진 유저가 존재하지 않습니다.");
//                    return new User();
//                });

        if(userRepositoryTest.existsByName(name)) {
            System.out.println("해당 이름을 가진 유저가 존재합니다.");
        } else {
            System.out.println("해당 이름을 가진 유저가 존재하지 않습니다.");
        }
    }
}
