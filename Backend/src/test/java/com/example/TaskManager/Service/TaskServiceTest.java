package com.example.TaskManager.Service;

import com.example.TaskManager.DTO.TaskDTO;
import com.example.TaskManager.Entity.Task;
import com.example.TaskManager.Entity.User;
import com.example.TaskManager.Mapper.TaskMapper;
import com.example.TaskManager.Repository.TaskRepository;
import com.example.TaskManager.Repository.UserRepository;
import com.example.TaskManager.Security.Jwt.JwtService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class TaskServiceTest {

    @InjectMocks
    private TaskServiceImpl taskService;
    @Mock
    private TaskRepository taskRepository;
    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {

    }

    @Test
    public void TaskService_createTask_returnTaskDTO(){
        User user = new User().builder().id(1L).firstname("Test").lastname("Test").username("test@test.com").password("test").build();
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        Task task = new Task().builder().id(1L).title("Test").description("Test").finished(false).important(false).date(null).user(null).build();
        TaskDTO taskDTO = new TaskDTO().builder().title("Test").description("Test").finished(false).important(false).date(null).build();

        when(taskRepository.save(Mockito.any(Task.class))).thenReturn(task);

        ResponseEntity<TaskDTO> savedTask = taskService.create(taskDTO, 1L);

        assertNotNull(savedTask.getBody());
        assertEquals(HttpStatus.CREATED, savedTask.getStatusCode());
    }

    @Test
    public void TaskService_createTaskWithId_returnBadRequest(){
        User user = new User().builder().id(1L).firstname("Test").lastname("Test").username("test@test.com").password("test").build();
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        TaskDTO taskDTO = new TaskDTO().builder().id(1L).title("Test").description("Test").finished(false).important(false).date(null).build();

        ResponseEntity<TaskDTO> savedTask = taskService.create(taskDTO, 1L);

        assertEquals(HttpStatus.BAD_REQUEST, savedTask.getStatusCode());
        assertNull(savedTask.getBody());
    }

    @Test
    public void TaskService_createTaskWithNonExistUser_returnNotFound(){
        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<TaskDTO> savedTask = taskService.create(null, 1L);

        assertEquals(HttpStatus.NOT_FOUND, savedTask.getStatusCode());
    }

    @Test
    public void TaskService_findById_returnNotNullTask() {
        Task task = new Task().builder().id(1L).title("Test").description("Test").finished(false).important(false).date(null).user(null).build();

        when(taskRepository.findById(1L)).thenReturn(Optional.of(task));

        ResponseEntity<TaskDTO> taskResponseEntity = taskService.findById(1L);
        assertEquals(HttpStatus.OK, taskResponseEntity.getStatusCode());
        assertEquals("Test", taskResponseEntity.getBody().getTitle());
        assertEquals(TaskMapper.toTaskDTO(task), taskResponseEntity.getBody());
    }

    @Test
    public void TaskService_FindById_returnNotFound() {
        Optional<Task> taskOptional = Optional.empty();
        when(taskRepository.findById(1L)).thenReturn(taskOptional);

        ResponseEntity<TaskDTO> taskResponseEntity = taskService.findById(1L);

        assertEquals(HttpStatus.NOT_FOUND , taskResponseEntity.getStatusCode());
        assertNull(taskResponseEntity.getBody());
    }

    @Test
    public void TaskService_findByUserId_returnTaskDTOList() {
        List<Task> tasks = List.of(
                new Task().builder().id(1L).title("Test").description("Test").finished(false).important(false).date(null).user(null).build(),
                new Task().builder().id(2L).title("Test").description("Test").finished(false).important(false).date(null).user(null).build()
        );

        when(taskRepository.findAllByUserIdOrderByDateAsc(1L)).thenReturn(tasks);

        List<TaskDTO> taskDTOS = taskService.findByUserId(1L);

        assertEquals(2, taskDTOS.size());
        assertEquals(taskDTOS.get(0), TaskMapper.toTaskDTO(tasks.get(0)));
    }

    @Test
    public void TaskService_updateTask_returnTaskDTO() {
        User user = new User().builder().id(1L).firstname("Test").lastname("Test").username("test@test.com").password("test").build();
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        Task task = new Task().builder().id(1L).title("Test").description("Test").finished(false).important(false).date(null).user(null).build();
        when(taskRepository.save(Mockito.any(Task.class))).thenReturn(task);
        when(taskRepository.existsById(1L)).thenReturn(true);

        ResponseEntity<TaskDTO> updatedTask = taskService.update(task, 1L);

        assertNotNull(updatedTask.getBody());
        assertEquals(HttpStatus.OK, updatedTask.getStatusCode());
    }

    @Test
    public void TaskService_update_whenUserIdIsNull_returnStatusNotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<TaskDTO> updatedTask = taskService.update(null, 1L);

        assertEquals(HttpStatus.NOT_FOUND, updatedTask.getStatusCode());
        assertNull(updatedTask.getBody());
    }

    @Test
    public void TaskService_updateTaskWithoutId_returnStatusBadRequest() {
        User user = new User().builder().id(1L).firstname("Test").lastname("Test").username("test@test.com").password("test").build();
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        Task taskWithoutId = new Task().builder().title("Test").description("Test").finished(false).important(false).date(null).user(null).build();

        ResponseEntity<TaskDTO> updatedTask = taskService.update(taskWithoutId, 1L);

        assertEquals(HttpStatus.BAD_REQUEST, updatedTask.getStatusCode());
        assertNull(updatedTask.getBody());
    }

    @Test
    public void TaskService_updateANonExistsTask_returnStatusBadRequest() {
        User user = new User().builder().id(1L).firstname("Test").lastname("Test").username("test@test.com").password("test").build();
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        Task task = new Task().builder().id(1L).title("Test").description("Test").finished(false).important(false).date(null).user(null).build();
        when(taskRepository.existsById(1L)).thenReturn(false);

        ResponseEntity<TaskDTO> updatedTask = taskService.update(task, 1L);

        assertEquals(HttpStatus.NOT_FOUND, updatedTask.getStatusCode());
        assertNull(updatedTask.getBody());
    }

    @Test
    public void TaskService_updateFinishedStatus_returnStatusOk() {
        Task taskFinishedFalse = new Task().builder().id(1L).title("Test").description("Test").finished(false).important(false).date(null).build();
        when(taskRepository.findById(1L)).thenReturn(Optional.ofNullable(taskFinishedFalse));
        when(taskRepository.save(Mockito.any(Task.class))).thenReturn(taskFinishedFalse);

        ResponseEntity<TaskDTO> taskStatusUpdated = taskService.updateFinishedStatus(1L);

        assertEquals(HttpStatus.OK, taskStatusUpdated.getStatusCode());
        assertEquals(taskStatusUpdated.getBody().getFinished(), true);
    }

    @Test
    public void TaskService_deleteTask_returnStatusNoContent() {
        Task task = new Task().builder().id(1L).title("Test").description("Test").finished(false).important(false).date(null).build();

        when(taskRepository.findById(1L)).thenReturn(Optional.of(task));

        ResponseEntity<TaskDTO> deletedTask = taskService.deleteById(1L);

        assertEquals(HttpStatus.NO_CONTENT, deletedTask.getStatusCode());
        assertNull(deletedTask.getBody());
    }

    @Test
    public void TaskService_deleteANonExistsTask_returnStatusNoContent() {

        when(taskRepository.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<TaskDTO> deletedTask = taskService.deleteById(1L);

        assertEquals(HttpStatus.NOT_FOUND, deletedTask.getStatusCode());
        assertNull(deletedTask.getBody());
    }


}
