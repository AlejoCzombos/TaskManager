package com.example.TaskManager.Controller;

import com.example.TaskManager.DTO.TaskDTO;
import com.example.TaskManager.Entity.Task;
import com.example.TaskManager.Service.TaskService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@SpringBootTest( webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class TaskControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TaskService taskService;

    @Autowired
    private ObjectMapper objectMapper;

    private Task task;
    private TaskDTO taskDTO;

    @BeforeEach
    public void setUp() {
        task = new Task().builder().id(1L).title("Test").description("Test").finished(false).important(false).date(null).user(null).build();
        taskDTO = new TaskDTO().builder().title("Test").description("Test").finished(false).important(false).date(null).build();
    }

    @Test
    @WithMockUser
    public void TaskController_createTask_returnTaskDTO() throws Exception {
        when(taskService.create(ArgumentMatchers.any(), ArgumentMatchers.anyLong())).thenReturn(new ResponseEntity<TaskDTO>(taskDTO, HttpStatus.CREATED));

        ResultActions response = mockMvc.perform(post("/api/tasks")
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(objectMapper.writeValueAsString(taskDTO))
                .param("userId", "1"));

        response.andExpect(status().isCreated())
                .andExpect(jsonPath("$.title").value(taskDTO.getTitle()));
    }

    @Test
    @WithMockUser
    public void TaskController_getAllByUserId_returnListOfTaskDTO() throws Exception {
        when(taskService.findByUserId(ArgumentMatchers.anyLong())).thenReturn(Arrays.asList(taskDTO));

        ResultActions response = mockMvc.perform(get("/api/tasks")
                .param("userId", "1"));

        response.andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value(taskDTO.getTitle()))
                .andDo(print());
    }

    @Test
    @WithMockUser
    public void TaskController_getById_returnTaskDTO() throws Exception {
        when(taskService.findById(ArgumentMatchers.anyLong())).thenReturn(new ResponseEntity<TaskDTO>(taskDTO, HttpStatus.OK));

        ResultActions response = mockMvc.perform(get("/api/tasks/1"));

        response.andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value(taskDTO.getTitle()))
                .andDo(print());
    }

    @Test
    @WithMockUser
    public void TaskController_getAllByFinished_returnListOfTaskDTO() throws Exception {
        when(taskService.findByFinished(ArgumentMatchers.anyLong())).thenReturn(Arrays.asList(taskDTO));

        ResultActions response = mockMvc.perform(get("/api/tasks/finished")
                .param("userId", "1"));

        response.andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value(taskDTO.getTitle()))
                .andDo(print());
    }

    @Test
    @WithMockUser
    public void TaskController_getAllByUnfinished_returnListOfTaskDTO() throws Exception {
        when(taskService.findByUnfinished(ArgumentMatchers.anyLong())).thenReturn(Arrays.asList(taskDTO));

        ResultActions response = mockMvc.perform(get("/api/tasks/unfinished")
                .param("userId", "1"));

        response.andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value(taskDTO.getTitle()))
                .andDo(print());
    }

    @Test
    @WithMockUser
    public void TaskController_getAllByImportant_returnListOfTaskDTO() throws Exception {
        when(taskService.findByImportant(ArgumentMatchers.anyLong())).thenReturn(Arrays.asList(taskDTO));

        ResultActions response = mockMvc.perform(get("/api/tasks/important")
                .param("userId", "1"));

        response.andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value(taskDTO.getTitle()))
                .andDo(print());
    }

    @Test
    @WithMockUser
    public void TaskController_update_returnTaskDTO() throws Exception {
        when(taskService.update(ArgumentMatchers.any(), ArgumentMatchers.anyLong())).thenReturn(new ResponseEntity(taskDTO, HttpStatus.OK));

        ResultActions response = mockMvc.perform(put("/api/tasks")
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(objectMapper.writeValueAsString(task))
                .param("userId", "1"));

        response.andExpect(status().isOk());
    }

    @Test
    @WithMockUser
    public void TaskController_updateFinishedStatus() throws Exception {
        when(taskService.updateFinishedStatus(ArgumentMatchers.anyLong())).thenReturn(new ResponseEntity<TaskDTO>(taskDTO, HttpStatus.OK));

        ResultActions response = mockMvc.perform(put("/api/tasks/1"));

        response.andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value(taskDTO.getTitle()));
    }

    @Test
    @WithMockUser
    public void TaskController_deleteById_returnVoid() throws Exception {
        when(taskService.deleteById(ArgumentMatchers.anyLong())).thenReturn(ResponseEntity.status(HttpStatus.NO_CONTENT).build());

        ResultActions response = mockMvc.perform(delete("/api/tasks/1")
                .param("userId", "1"));

        response.andExpect(status().isNoContent());
    }


}
