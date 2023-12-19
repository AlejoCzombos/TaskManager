package com.example.TaskManager.Service;

import com.example.TaskManager.Entity.ProjectTask;
import com.example.TaskManager.Repository.ProjectTaskRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProjectTaskServiceImpl implements ProjectTaskService{

    private final Logger log = LoggerFactory.getLogger(ExerciseTaskServiceImpl.class);

    private final ProjectTaskRepository repository;

    @Override
    public ResponseEntity<ProjectTask> findById(Long taskId) {
        Optional<ProjectTask> optionalProjectTask = repository.findById(taskId);

        if (optionalProjectTask.isEmpty()){
            log.warn("Trying to get a non exist task");
            return ResponseEntity.notFound().build();
        }

        ProjectTask result = optionalProjectTask.get();

        return ResponseEntity.ok(result);
    }

    @Override
    public List<ProjectTask> findAll() {
        return repository.findAll();
    }

    @Override
    public ResponseEntity<ProjectTask> create(ProjectTask projectTask) {
        if (projectTask.getId() != null){
            log.warn("Trying to create a ProjectTask with id");
            return ResponseEntity.badRequest().build();
        }

        ProjectTask result = repository.save(projectTask);

        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @Override
    public ResponseEntity<ProjectTask> update(ProjectTask projectTask) {

        if (projectTask.getId() == null){
            log.warn("Trying to update a ProjectTask without id");
            return ResponseEntity.badRequest().build();
        }

        if (!repository.existsById(projectTask.getId())){
            log.warn("Trying to update a non exists ProjectTask");
            return ResponseEntity.notFound().build();
        }

        ProjectTask result = repository.save(projectTask);

        return ResponseEntity.ok(result);
    }

    @Override
    public ResponseEntity<ProjectTask> deleteById(Long taskId) {
        Optional<ProjectTask> optionalProjectTask = repository.findById(taskId);

        if (optionalProjectTask.isEmpty()){
            log.warn("Trying to delete a non exist task");
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(taskId);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @Override
    public ResponseEntity<ProjectTask> deleteAll() {
        repository.deleteAll();
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
