package com.example.TaskManager.Controller;

import com.example.TaskManager.DTO.TaskDTO;
import com.example.TaskManager.Entity.Task;
import com.example.TaskManager.Service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService service;

    @GetMapping("/{taskId}")
    public ResponseEntity<TaskDTO> getById(@PathVariable Long taskId){
        return service.findById(taskId);
    }

    @GetMapping
    public List<TaskDTO> getAllByUserId(@RequestParam("userId") Long userId){
        return service.findByUserId(userId);
    }

    @GetMapping("/finished")
    public List<TaskDTO> getAllByFinished(@RequestParam("userId") Long userId){
        return service.findByFinished(userId);
    }

    @GetMapping("/unfinished")
    public List<TaskDTO> getAllByUnfinished(@RequestParam("userId") Long userId){
        return service.findByUnfinished(userId);
    }

    @GetMapping("/important")
    public List<TaskDTO> getAllByImportant(@RequestParam("userId") Long userId){
        return service.findByImportant(userId);
    }

    @PostMapping
    public ResponseEntity<TaskDTO> create(@RequestBody TaskDTO task, @RequestParam("userId") Long userId){
        return service.create(task, userId);
    }

    @PutMapping
    public ResponseEntity<TaskDTO> update(@RequestBody Task task, @RequestParam("userId") Long userId){
        return service.update(task, userId);
    }

    @PutMapping("/{taskId}")
    public ResponseEntity<TaskDTO> updateCompleted(@PathVariable Long taskId){
        return service.updateFinishedStatus(taskId);
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<TaskDTO> deleteById(@PathVariable Long taskId){
        return service.deleteById(taskId);
    }

}
