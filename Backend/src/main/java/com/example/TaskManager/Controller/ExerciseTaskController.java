package com.example.TaskManager.Controller;

import com.example.TaskManager.Entity.ExerciseTask;
import com.example.TaskManager.Service.ExerciseTaskServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/exerciseTasks")
public class ExerciseTaskController {

    private final ExerciseTaskServiceImpl service;

    @GetMapping("/{taskId}")
    public ResponseEntity<ExerciseTask> getById(@PathVariable Long taskId){
        return service.findById(taskId);
    }

    @GetMapping
    public List<ExerciseTask> getAll(){
        return service.findAll();
    }

    @PostMapping
    public ResponseEntity<ExerciseTask> create(@RequestBody @Validated ExerciseTask exerciseTask){
        return service.create(exerciseTask);
    }

    @PutMapping
    public ResponseEntity<ExerciseTask> update(@RequestBody @Validated ExerciseTask exerciseTask){
        return service.update(exerciseTask);
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<ExerciseTask> deleteById(@PathVariable Long taskId){
        return service.deleteById(taskId);
    }

    @DeleteMapping
    public ResponseEntity<ExerciseTask> deleteAll(){
        return service.deleteAll();
    }

}
