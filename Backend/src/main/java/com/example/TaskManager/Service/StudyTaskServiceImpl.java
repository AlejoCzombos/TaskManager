package com.example.TaskManager.Service;

import com.example.TaskManager.Entity.StudyTask;
import com.example.TaskManager.Repository.StudyTaskRepository;
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
public class StudyTaskServiceImpl implements StudyTaskService{

    private final Logger log = LoggerFactory.getLogger(ExerciseTaskServiceImpl.class);

    private final StudyTaskRepository repository;

    @Override
    public ResponseEntity<StudyTask> findById(Long taskId) {

        Optional<StudyTask> optionalStudyTask = repository.findById(taskId);

        if (optionalStudyTask.isEmpty()){
            log.warn("Trying to get a non exist task");
            return ResponseEntity.notFound().build();
        }

        StudyTask result = optionalStudyTask.get();

        return ResponseEntity.ok(result);
    }

    @Override
    public List<StudyTask> findAll() {
        return repository.findAll();
    }

    @Override
    public ResponseEntity<StudyTask> create(StudyTask studyTask) {

        if (studyTask.getId() != null){
            log.warn("Trying to create a StudyTask with id");
            return ResponseEntity.badRequest().build();
        }

        StudyTask result = repository.save(studyTask);

        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @Override
    public ResponseEntity<StudyTask> update(StudyTask studyTask) {

        if (studyTask.getId() == null){
            log.warn("Trying to update a StudyTask without id");
            return ResponseEntity.badRequest().build();
        }

        if (!repository.existsById(studyTask.getId())){
            log.warn("Trying to update a non exists StudyTask");
            return ResponseEntity.notFound().build();
        }

        StudyTask result = repository.save(studyTask);

        return ResponseEntity.ok(result);
    }

    @Override
    public ResponseEntity<StudyTask> deleteById(Long taskId) {

        Optional<StudyTask> optionalStudyTask = repository.findById(taskId);

        if (optionalStudyTask.isEmpty()){
            log.warn("Trying to delete a non exist task");
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(taskId);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @Override
    public ResponseEntity<StudyTask> deleteAll() {
        repository.deleteAll();
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
