package com.example.TaskManager.Service;

import com.example.TaskManager.Entity.ExerciseTask;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ExcerciseTaskService {

    ResponseEntity<ExerciseTask> findById(Long taskId);

    List<ExerciseTask> findAll();

    ResponseEntity<ExerciseTask> create(ExerciseTask exerciseTask);

    ResponseEntity<ExerciseTask> update(ExerciseTask exerciseTask);

    ResponseEntity<ExerciseTask> deleteById(Long taskId);

    ResponseEntity<ExerciseTask> deleteAll();

}
