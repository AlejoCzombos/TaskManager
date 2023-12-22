package com.example.TaskManager.Repository;

import com.example.TaskManager.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT * FROM db_user u WHERE u.username = :usernameOrEmail OR email = :usernameOrEmail", nativeQuery = true)
    Optional<User> findByUsernameOrEmail(@Param("usernameOrEmail") String usernameOrEmail);

}
