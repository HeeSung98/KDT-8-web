package kdt.jpa.repository;

import kdt.jpa.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByNickname(String name);

    User findById(long id);

    @Query("select u from User u where u.name=:word or u.nickname=:word")
    List<User> findByWord(@Param("word") String word);

    Optional<User> findByName(String name);

    boolean existsByName(String name);
}
