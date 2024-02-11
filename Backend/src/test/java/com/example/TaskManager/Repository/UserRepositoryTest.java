package com.example.TaskManager.Repository;

import com.example.TaskManager.Entity.Role;
import com.example.TaskManager.Entity.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

@DataJpaTest
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class UserRepositoryTest {

    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private UserRepository userRepository;

    @Test
    public void userRepository_save_returnSavedUser(){
        User user = new User().builder().username("example@example.com").firstname("example").lastname("example").password("example").role(Role.USER).build();

        User userSaved = userRepository.save(user);

        Assertions.assertNotNull(userSaved);
        Assertions.assertNotNull(userSaved.getId());
    }

    @Test
    public void userRepository_getAll_returnGreaterThanZero(){
        User user = new User().builder().username("example@example.com").firstname("example").lastname("example").password("example").role(Role.USER).build();

        userRepository.save(user);

        List<User> users = userRepository.findAll();

        Assertions.assertNotNull(users);
        Assertions.assertFalse(users.isEmpty());
    }

    @Test
    public void userRepository_getById_ReturnUser(){
        User user = new User().builder().username("example@example.com").firstname("example").lastname("example").password("example").role(Role.USER).build();

        User userSaved = userRepository.save(user);
        User userFound = userRepository.findById(userSaved.getId()).orElse(null);

        Assertions.assertNotNull(userFound);
        Assertions.assertNotNull(userFound.getId());
    }

    @Test
    public void userRepository_updateTask_returnUser(){
        User user = new User().builder().username("example@example.com").firstname("example").lastname("example").password("example").role(Role.USER).build();
        userRepository.save(user);

        User userSaved = userRepository.findById(user.getId()).orElse(null);

        userSaved.setFirstname("other firstname");
        userSaved.setLastname("other lastname");

        User userUpdated = userRepository.save(userSaved);

        Assertions.assertEquals(userUpdated.getFirstname(), "other firstname");
        Assertions.assertEquals(userUpdated.getLastname(), "other lastname");
        Assertions.assertTrue(userRepository.findAll().size() == 1);
    }

    @Test
    public void userRepository_deleteById_returnNull(){
        User user = new User().builder().username("example@example.com").firstname("example").lastname("example").password("example").role(Role.USER).build();

        User userSaved = userRepository.save(user);

        userRepository.deleteById(userSaved.getId());

        User userDeleted = userRepository.findById(userSaved.getId()).orElse(null);

        Assertions.assertNull(userDeleted);
        Assertions.assertTrue(userRepository.findAll().size() == 0);
    }

    @Test
    public void userRepository_findByUsername_returnUser(){
        String username = "example@example.com";

        User user = new User().builder().username(username).firstname("example").lastname("example").password("example").role(Role.USER).build();

        userRepository.save(user);

        User userFound = userRepository.findByUsername(username).orElse(null);

        Assertions.assertNotNull(userFound);
        Assertions.assertTrue(userRepository.findAll().size() > 0);
    }

}
