package com.example.TaskManager.Controller;

import com.example.TaskManager.Entity.ProjectTask;
import com.example.TaskManager.Service.ProjectTaskServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/projectTasks")
public class ProjectTaskController {

    private final ProjectTaskServiceImpl service;

    @GetMapping("/{taskId}")
    public ResponseEntity<ProjectTask> getById(@PathVariable Long taskId){
        return service.findById(taskId);
    }

    @GetMapping
    public List<ProjectTask> getAll(){
        return service.findAll();
    }

    @PostMapping
    public ResponseEntity<ProjectTask> create(@RequestBody @Validated ProjectTask projectTask){
        return service.create(projectTask);
    }

    @PutMapping
    public ResponseEntity<ProjectTask> update(@RequestBody @Validated ProjectTask projectTask){
        return service.update(projectTask);
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<ProjectTask> deleteById(@PathVariable Long taskId){
        return service.deleteById(taskId);
    }

    @DeleteMapping
    public ResponseEntity<ProjectTask> deleteAll(){
        return service.deleteAll();
    }

}
