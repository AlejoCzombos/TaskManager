package com.example.TaskManager.Repository;

import com.example.TaskManager.Entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findAllByUserIdOrderByDateDesc(Long userId);

    List<Task> findAllByFinishedTrueOrderByDateDesc();

    List<Task> findAllByFinishedFalseOrderByDateDesc();

    List<Task> findAllByImportantTrueOrderByDateDesc();

}
