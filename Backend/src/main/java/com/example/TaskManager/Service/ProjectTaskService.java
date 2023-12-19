package com.example.TaskManager.Service;

import com.example.TaskManager.Entity.ProjectTask;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProjectTaskService {

    ResponseEntity<ProjectTask> findById(Long taskId);

    List<ProjectTask> findAll();

    ResponseEntity<ProjectTask> create(ProjectTask projectTask);

    ResponseEntity<ProjectTask> update(ProjectTask projectTask);

    ResponseEntity<ProjectTask> deleteById(Long taskId);

    ResponseEntity<ProjectTask> deleteAll();

}
