package com.example.TaskManager;

import com.example.TaskManager.Entity.Task;
import com.example.TaskManager.Repository.TaskRepository;
import com.example.TaskManager.Repository.UserRepository;
import com.example.TaskManager.Service.TaskServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class TaskServiceTest {

    @InjectMocks
    TaskServiceImpl taskService;
    @Mock
    TaskRepository taskRepository;
    @Mock
    UserRepository userRepository;

    @BeforeEach
    public void setUp() {

    }

    @Test
    public void testFindById() {
        Task task = new Task().builder().id(1L).title("Test").description("Test").finished(false).important(false).date(null).user(null).build();

        when(taskRepository.findById(1L)).thenReturn(Optional.of(task));

        ResponseEntity<Task> taskResponseEntity = taskService.findById(1L);
        assertEquals(200, taskResponseEntity.getStatusCodeValue());
        assertEquals("Test", taskResponseEntity.getBody().getTitle());
        assertEquals(task, taskResponseEntity.getBody());
    }

    public void testFindByIdNotFound() {
        when(taskRepository.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<Task> taskResponseEntity = taskService.findById(1L);
        assertEquals(404, taskResponseEntity.getStatusCodeValue());
    }

}
