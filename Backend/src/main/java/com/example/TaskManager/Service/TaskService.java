package com.example.TaskManager.Service;

import com.example.TaskManager.Entity.Task;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TaskService {

    ResponseEntity<Task> findById(Long taskId);

    List<Task> findAll();

    ResponseEntity<Task> create(Task task);

    ResponseEntity<Task> update(Task task);

    ResponseEntity<Task> deleteById(Long taskId);

    ResponseEntity<Task> deleteAll();

}
