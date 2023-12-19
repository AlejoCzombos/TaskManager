package com.example.TaskManager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.TaskManager.Entity.ExerciseTask;
import org.springframework.stereotype.Repository;

@Repository
public interface ExcerciseTaskRepository extends JpaRepository<ExerciseTask, Long> {

}
