package com.example.TaskManager.Repository;

import com.example.TaskManager.Entity.StudyTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudyTaskRepository extends JpaRepository<StudyTask, Long> {
}
