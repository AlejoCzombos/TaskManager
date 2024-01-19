package com.example.TaskManager.Service;

import com.example.TaskManager.Entity.Task;
import com.example.TaskManager.Entity.User;
import com.example.TaskManager.Repository.TaskRepository;
import com.example.TaskManager.Repository.UserRepository;
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
public class TaskServiceImpl implements TaskService {

    private final Logger log = LoggerFactory.getLogger(TaskServiceImpl.class);

    private final TaskRepository repository;
    private final UserRepository userRepository;

    @Override
    public ResponseEntity<Task> findById(Long taskId) {
        Optional<Task> optionalTask = repository.findById(taskId);

        if (optionalTask.isEmpty()){
            log.warn("Trying to get a non exist task");
            return ResponseEntity.notFound().build();
        }

        Task result = optionalTask.get();

        return ResponseEntity.ok(result);
    }

    @Override
    public List<Task> findByUserId(Long userId) {
        return repository.findAllByUserIdOrderByCreationDateDesc(userId);
    }

    @Override
    public List<Task> findByImportant() {
        return repository.findAllByImportantTrue();
    }

    @Override
    public List<Task> findByFinished() {
        return repository.findAllByFinishedTrue();
    }

    @Override
    public List<Task> findByUnfinished() {
        return repository.findAllByFinishedFalse();
    }

    @Override
    public ResponseEntity<Task> create(Task task, Long userId) {

        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isEmpty()){
            log.warn("Trying to create a task with non-existent userId");
            return ResponseEntity.notFound().build();
        }

        if (task.getId() != null){
            log.warn("Trying to create a task with id");
            return ResponseEntity.badRequest().build();
        }

        User user = optionalUser.get();
        task.setUser(user);

        Task result = repository.save(task);

        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }

    @Override
    public ResponseEntity<Task> update(Task task, Long userId) {

        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isEmpty()){
            log.warn("Trying to create a task with non-existent userId");
            return ResponseEntity.notFound().build();
        }

        if (task.getId() == null){
            log.warn("Trying to update a task without id");
            return ResponseEntity.badRequest().build();
        }

        if (!repository.existsById(task.getId())){
            log.warn("Trying to update a non exists task");
            return ResponseEntity.notFound().build();
        }

        User user = optionalUser.get();
        task.setUser(user);
        Task result = repository.save(task);

        return ResponseEntity.ok(result);
    }

    @Override
    public ResponseEntity<Task> updateCompleted(Long taskId) {
        Task task = repository.findById(taskId).orElseThrow();

        task.setFinished(!task.getFinished());

        Task result = repository.save(task);

        return ResponseEntity.ok(result);
    }

    @Override
    public ResponseEntity<Task> deleteById(Long taskId) {

        Optional<Task> optionalTask = repository.findById(taskId);

        if (optionalTask.isEmpty()){
            log.warn("Trying to delete a non exist task");
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(taskId);

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
