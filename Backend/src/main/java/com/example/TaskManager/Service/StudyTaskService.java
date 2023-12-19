package com.example.TaskManager.Service;

import com.example.TaskManager.Entity.StudyTask;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface StudyTaskService {

    ResponseEntity<StudyTask> findById(Long taskId);

    List<StudyTask> findAll();

    ResponseEntity<StudyTask> create(StudyTask studyTask);

    ResponseEntity<StudyTask> update(StudyTask studyTask);

    ResponseEntity<StudyTask> deleteById(Long taskId);

    ResponseEntity<StudyTask> deleteAll();

}
