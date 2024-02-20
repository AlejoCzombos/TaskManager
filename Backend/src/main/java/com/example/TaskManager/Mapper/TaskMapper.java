package com.example.TaskManager.Mapper;

import com.example.TaskManager.DTO.TaskDTO;
import com.example.TaskManager.Entity.Task;

public class TaskMapper {

    public static TaskDTO toTaskDTO(Task task){
        return TaskDTO.builder()
                .id(task.getId())
                .title(task.getTitle())
                .description(task.getDescription())
                .finished(task.getFinished())
                .important(task.getImportant())
                .creationDate(task.getDate())
                .build();
    }
    public static Task toTask(TaskDTO taskDTO){
        return Task.builder()
                .id(taskDTO.getId())
                .title(taskDTO.getTitle())
                .description(taskDTO.getDescription())
                .finished(taskDTO.getFinished())
                .important(taskDTO.getImportant())
                .date(taskDTO.getCreationDate())
                .build();
    }
}
