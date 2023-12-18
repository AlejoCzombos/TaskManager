package com.example.TaskManager.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@MappedSuperclass
@Data
public abstract class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id", nullable = false, unique = true, updatable = false)
    private Long id;

    @Column(name = "title", nullable = false, length = 50)
    private String title;

    @Column(name = "description", nullable = false, length = 250)
    private String description;

    @Column(name = "type_task", nullable = false, length = 12)
    private String typeTask;

    @Column(name = "creation_date", nullable = false)
    private LocalDate creationDate;

}
