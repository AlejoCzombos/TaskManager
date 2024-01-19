package com.example.TaskManager.Service;

import com.example.TaskManager.Entity.Task;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TaskService {

    ResponseEntity<Task> findById(Long taskId);

    List<Task> findByUserId(Long userId);

    List<Task> findByImportant();

    List<Task>  findByFinished();

    List<Task>  findByUnfinished();

    ResponseEntity<Task> create(Task task, Long userId);

    ResponseEntity<Task> update(Task task, Long userId);

    ResponseEntity<Task> updateCompleted(Long taskId);

    ResponseEntity<Task> deleteById(Long taskId);


}
