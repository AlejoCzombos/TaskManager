package com.example.TaskManager.Service;

import com.example.TaskManager.Entity.ExerciseTask;
import com.example.TaskManager.Repository.ExcerciseTaskRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ExerciseTaskServiceImpl implements ExcerciseTaskService {

    private final Logger log = LoggerFactory.getLogger(ExerciseTaskServiceImpl.class);

    private final ExcerciseTaskRepository repository;

    @Override
    public ResponseEntity<ExerciseTask> findById(Long taskId) {
        Optional<ExerciseTask> optionalExerciseTask = repository.findById(taskId);

        if (optionalExerciseTask.isEmpty()){
            log.warn("Trying to get a non exist task");
            return ResponseEntity.notFound().build();
        }

        ExerciseTask result = optionalExerciseTask.get();

        return ResponseEntity.ok(result);
    }

    @Override
    public List<ExerciseTask> findAll() {
        return repository.findAll();
    }

    @Override
    public ResponseEntity<ExerciseTask> create(ExerciseTask exerciseTask) {

        if (exerciseTask.getId() != null){
            log.warn("Trying to create a ExerciseTask with id");
            return ResponseEntity.badRequest().build();
        }

        ExerciseTask result = repository.save(exerciseTask);

        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @Override
    public ResponseEntity<ExerciseTask> update(ExerciseTask exerciseTask) {

        if (exerciseTask.getId() == null){
            log.warn("Trying to update a ExerciseTask without id");
            return ResponseEntity.badRequest().build();
        }

        if (!repository.existsById(exerciseTask.getId())){
            log.warn("Trying to update a non exists ExerciseTask");
            return ResponseEntity.notFound().build();
        }

        ExerciseTask result = repository.save(exerciseTask);

        return ResponseEntity.ok(result);
    }

    @Override
    public ResponseEntity<ExerciseTask> deleteById(Long taskId) {

        Optional<ExerciseTask> optionalExerciseTask = repository.findById(taskId);

        if (optionalExerciseTask.isEmpty()){
            log.warn("Trying to delete a non exist task");
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(taskId);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @Override
    public ResponseEntity<ExerciseTask> deleteAll() {
        repository.deleteAll();
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
