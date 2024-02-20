package com.example.TaskManager.Service;

import com.example.TaskManager.DTO.TaskDTO;
import com.example.TaskManager.Entity.Task;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface TaskService {

    ResponseEntity<TaskDTO> findById(Long taskId);

    List<TaskDTO> findByUserId(Long userId);

    List<TaskDTO> findByImportant(Long userId);

    List<TaskDTO>  findByFinished(Long userId);

    List<TaskDTO>  findByUnfinished(Long userId);

    ResponseEntity<TaskDTO> create(TaskDTO task, Long userId);

    ResponseEntity<TaskDTO> update(Task task, Long userId);

    ResponseEntity<TaskDTO> updateCompleted(Long taskId);

    ResponseEntity<TaskDTO> deleteById(Long taskId);


}
