package com.example.TaskManager.Controller;

import com.example.TaskManager.Entity.StudyTask;
import com.example.TaskManager.Service.StudyTaskServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
@RequiredArgsConstructor
@RequestMapping("/api/studyTasks")
public class StudyTaskController {

    private final StudyTaskServiceImpl service;

    @GetMapping("/{taskId}")
    public ResponseEntity<StudyTask> getById(@PathVariable Long taskId){
        return service.findById(taskId);
    }

    @GetMapping
    public List<StudyTask> getAll(){
        return service.findAll();
    }

    @PostMapping
    public ResponseEntity<StudyTask> create(@RequestBody @Validated StudyTask studyTask){
        return service.create(studyTask);
    }

    @PutMapping
    public ResponseEntity<StudyTask> update(@RequestBody @Validated StudyTask studyTask){
        return service.update(studyTask);
    }

    @DeleteMapping("/{taskId}")
    public ResponseEntity<StudyTask> deleteById(@PathVariable Long taskId){
        return service.deleteById(taskId);
    }

    @DeleteMapping
    public ResponseEntity<StudyTask> deleteAll(){
        return service.deleteAll();
    }

}
