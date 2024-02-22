package com.example.TaskManager.Controller;

import com.example.TaskManager.DTO.TaskDTO;
import com.example.TaskManager.Entity.Task;
import com.example.TaskManager.Entity.User;
import com.example.TaskManager.Security.Jwt.JwtService;
import com.example.TaskManager.Service.TaskService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureWebMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = TaskController.class)
@AutoConfigureWebMvc
@ExtendWith(MockitoExtension.class)
public class TaskControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TaskService taskService;
    @Autowired
    private JwtService jwtService;

    @Autowired
    private ObjectMapper objectMapper;

    private Task task;
    private TaskDTO taskDTO;
    private User user;
    private String token;

    @BeforeEach
    public void setUp() {
        user = new User().builder().id(1L).username("test").password("test").firstname("test").lastname("test").build();
        token = jwtService.getToken(user);
        task = new Task().builder().id(1L).title("Test").description("Test").finished(false).important(false).date(null).user(null).build();
        taskDTO = new TaskDTO().builder().title("Test").description("Test").finished(false).important(false).date(null).build();
    }

    @Test
    public void TaskController_createTask_returnTaskDTO() throws Exception {
        given(taskService.create(ArgumentMatchers.any(), ArgumentMatchers.anyLong())).willAnswer((invocation -> invocation.getArgument(0)));

        ResultActions response = mockMvc.perform(post("/api/tasks")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(taskDTO))
                .param("userId", "1"));

        response.andExpect(status().isCreated());

    }

}
