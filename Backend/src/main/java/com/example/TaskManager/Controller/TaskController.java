package com.example.TaskManager.Controller;

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
    public ResponseEntity<Task> getById(@PathVariable Long taskId){
        return service.findById(taskId);
    }

    @GetMapping
    public List<Task> getAll(){
        return service.findAll();
    }

    @PostMapping()
    public ResponseEntity<Task> create(@RequestBody Task task, @RequestParam("userId") Long userId){
        return service.create(task, userId);
    }

    @PutMapping
    public ResponseEntity<Task> update(@RequestBody Task task, @RequestParam("userId") Long userId){
        return service.update(task, userId);
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<Task> deleteById(@PathVariable Long taskId){
        return service.deleteById(taskId);
    }

    @DeleteMapping
    public ResponseEntity<Task> deleteAll(){
        return service.deleteAll();
    }

}
