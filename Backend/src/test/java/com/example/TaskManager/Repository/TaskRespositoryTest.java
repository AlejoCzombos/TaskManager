package com.example.TaskManager.Repository;

import com.example.TaskManager.Entity.Task;
import com.example.TaskManager.Entity.User;
import com.example.TaskManager.Repository.TaskRepository;
import com.example.TaskManager.Repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Date;
import java.util.List;

@DataJpaTest
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class TaskRespositoryTest {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void TaskRepository_save_returnSavedTask(){
        Task task = new Task().builder().title("Test").description("Test").finished(false).important(false).date(new Date(2007,10,10)).user(null).build();

        Task taskSaved = taskRepository.save(task);

        Assertions.assertTrue(taskSaved.getId() > 0);
        Assertions.assertTrue(taskSaved != null, "Task is null");
    }

    @Test
    public void taskRepository_getAll_returnGreaterThanZero(){
        Task task = new Task().builder().title("Test").description("Test").finished(false).important(false).date(new Date(2007,10,10)).user(null).build();
        Task task2 = new Task().builder().title("Test").description("Test").finished(false).important(false).date(new Date(2007,10,10)).user(null).build();

        taskRepository.save(task);
        taskRepository.save(task2);

        List<Task> tasks = taskRepository.findAll();

        Assertions.assertTrue(tasks.size() > 1, "Size is less than 1");
        Assertions.assertTrue(tasks != null, "Tasks is null");
    }

    @Test
    public void taskRepository_getById_ReturnTask(){
        Task task = new Task().builder().title("Test").description("Test").finished(false).important(false).date(new Date(2007,10,10)).user(null).build();

        Task taskSaved = taskRepository.save(task);

        Task taskFound = taskRepository.findById(taskSaved.getId()).get();

        Assertions.assertTrue(taskFound != null, "Task is null");
        Assertions.assertTrue(taskFound.getId() > 0, "Id is less than 1");
    }

    @Test
    public void taskRepository_deleteById_returnNull(){
        Task task = new Task().builder().title("Test").description("Test").finished(false).important(false).date(new Date(2007,10,10)).user(null).build();

        Task taskSaved = taskRepository.save(task);

        taskRepository.deleteById(taskSaved.getId());

        Task taskFound = taskRepository.findById(taskSaved.getId()).orElse(null);

        Assertions.assertTrue(taskFound == null, "Task is not null");
        Assertions.assertTrue(taskRepository.findAll().size() == 0, "Size is not 0");
    }
    @Test
    public void taskRepository_updateTask_returnTask(){
        Task task = new Task().builder().title("Test").description("Test").finished(false).important(false).date(new Date(2007,10,10)).user(null).build();

        taskRepository.save(task);

        Task taskSaved = taskRepository.findById(task.getId()).orElse(null);
        taskSaved.setTitle("Other title");
        taskSaved.setDescription("Other description");

        Task taskUpdated = taskRepository.save(task);

        Assertions.assertTrue(taskUpdated.getTitle() == "Other title");
        Assertions.assertTrue(taskUpdated.getDescription() == "Other description");
        Assertions.assertTrue(taskRepository.findAll().size() == 1, "Size is not 0");
    }

    @Test
    public void taskRepository_FindAllByUserId_returnTaskOnlyFromTheLinkedUser(){
        User user1 = new User().builder().id(1L).firstname("test").lastname("test").username("test1@test.com").password("test").build();
        User user2 = new User().builder().id(2L).firstname("test").lastname("test").username("test2@test.com").password("test").build();

        userRepository.save(user1);
        userRepository.save(user2);

        //Link user1 with task1 and user2 with task2
        Task task1 = new Task().builder().title("Test").description("Test").finished(false).important(false).date(new Date(2007,10,10)).user(user1).build();
        Task task2 = new Task().builder().title("Test").description("Test").finished(false).important(false).date(new Date(2007,10,10)).user(user2).build();

        taskRepository.save(task1);
        taskRepository.save(task2);

        List<Task> tasksUser1 = taskRepository.findAllByUserIdOrderByDateAsc(user1.getId());

        Assertions.assertFalse(tasksUser1.isEmpty());
        Assertions.assertEquals(tasksUser1.size(), 1);
    }

    @Test
    public void taskRepository_FindAllByUserId_returnAllTaskOrderByAsc(){
        User user = new User().builder().id(1L).firstname("test").lastname("test").username("test@test.com").password("test").build();

        userRepository.save(user);

        Task task1 = new Task().builder().title("Test").description("Test").finished(false).important(false).date(new Date(2005,10,10)).user(user).build();
        Task task2 = new Task().builder().title("Test").description("Test").finished(false).important(false).date(new Date(2007,10,10)).user(user).build();
        Task task3 = new Task().builder().title("Test").description("Test").finished(false).important(false).date(new Date(2008,10,10)).user(user).build();

        //Insert task order descendant
        taskRepository.save(task3);
        taskRepository.save(task2);
        taskRepository.save(task1);

        List<Task> taskUser = taskRepository.findAllByUserIdOrderByDateAsc(user.getId());

        Assertions.assertFalse(taskUser.isEmpty());
        Assertions.assertTrue(taskUser.get(0) == task1, "The task no are the same");
    }


}
