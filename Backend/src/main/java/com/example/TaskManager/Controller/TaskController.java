package com.example.TaskManager.Controller;

import com.example.TaskManager.DTO.TaskDTO;
import com.example.TaskManager.Entity.Task;
import com.example.TaskManager.Service.TaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tasks")
@Tag(name = "Tasks", description = "Task API")
public class TaskController {

    private final TaskService service;

    @Operation(summary = "Get a task by its ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the task"),
            @ApiResponse(responseCode = "403", description = "Unauthorized / Invalid token"),
            @ApiResponse(responseCode = "404", description = "Task not found"),
    })
    @GetMapping("/{taskId}")
    public ResponseEntity<TaskDTO> getById(@PathVariable Long taskId){
        return service.findById(taskId);
    }

    @Operation(summary = "Get all tasks for a specific user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the tasks"),
            @ApiResponse(responseCode = "403", description = "Unauthorized / Invalid token"),
            @ApiResponse(responseCode = "404", description = "Tasks not found"),
    })
    @GetMapping
    public List<TaskDTO> getAllByUserId(@RequestParam("userId") Long userId){
        return service.findByUserId(userId);
    }

    @Operation(summary = "Get all finished tasks for a specific user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the tasks"),
            @ApiResponse(responseCode = "403", description = "Unauthorized / Invalid token"),
            @ApiResponse(responseCode = "404", description = "Tasks not found"),
    })
    @GetMapping("/finished")
    public List<TaskDTO> getAllByFinished(@RequestParam("userId") Long userId){
        return service.findByFinished(userId);
    }

    @Operation(summary = "Get all unfinished tasks for a specific user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the tasks"),
            @ApiResponse(responseCode = "403", description = "Unauthorized / Invalid token"),
            @ApiResponse(responseCode = "404", description = "Tasks not found"),
    })
    @GetMapping("/unfinished")
    public List<TaskDTO> getAllByUnfinished(@RequestParam("userId") Long userId){
        return service.findByUnfinished(userId);
    }

    @Operation(summary = "Get all important tasks for a specific user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the tasks"),
            @ApiResponse(responseCode = "403", description = "Unauthorized / Invalid token"),
            @ApiResponse(responseCode = "404", description = "Tasks not found"),
    })
    @GetMapping("/important")
    public List<TaskDTO> getAllByImportant(@RequestParam("userId") Long userId){
        return service.findByImportant(userId);
    }

    @Operation(summary = "Create a new task for a specific user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Task created"),
            @ApiResponse(responseCode = "400", description = "Trying to create a task with id"),
            @ApiResponse(responseCode = "403", description = "Unauthorized / Invalid token"),
            @ApiResponse(responseCode = "404", description = "Trying to create a task with non-existent userId"),
    })
    @PostMapping
    public ResponseEntity<TaskDTO> create(@RequestBody TaskDTO task, @RequestParam("userId") Long userId){
        return service.create(task, userId);
    }

    @Operation(summary = "Update a task for a specific user")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Task updated"),
            @ApiResponse(responseCode = "400", description = "Trying to update a task without id"),
            @ApiResponse(responseCode = "403", description = "Unauthorized / Invalid token"),
            @ApiResponse(responseCode = "404", description = "Trying to update a task with non-existent userId"),
    })
    @PutMapping
    public ResponseEntity<TaskDTO> update(@RequestBody Task task, @RequestParam("userId") Long userId){
        return service.update(task, userId);
    }

    @Operation(summary = "Update the completed status of a task")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Task updated"),
            @ApiResponse(responseCode = "400", description = "Trying to update a task without id"),
            @ApiResponse(responseCode = "403", description = "Unauthorized / Invalid token"),
            @ApiResponse(responseCode = "404", description = "Trying to update a task with non-existent userId"),
    })
    @PutMapping("/{taskId}")
    public ResponseEntity<TaskDTO> updateCompleted(@PathVariable Long taskId){
        return service.updateFinishedStatus(taskId);
    }

    @Operation(summary = "Delete a task by its ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Task deleted"),
            @ApiResponse(responseCode = "403", description = "Unauthorized / Invalid token"),
            @ApiResponse(responseCode = "404", description = "Task not found"),
    })
    @DeleteMapping("/{taskId}")
    public ResponseEntity<TaskDTO> deleteById(@PathVariable Long taskId){
        return service.deleteById(taskId);
    }

}
