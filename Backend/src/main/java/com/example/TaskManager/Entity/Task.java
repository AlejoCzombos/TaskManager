package com.example.TaskManager.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "task")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id", nullable = false, unique = true, updatable = false)
    private Long id;

    @Column(name = "title", nullable = false, length = 50)
    private String title;

    @Column(name = "description", nullable = false, length = 250)
    private String description;

    @Column(name = "finished")
    private Boolean finished = false;

    @Column(name = "important")
    private Boolean important = false;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "creation_date", nullable = false)
    private LocalDate creationDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", updatable = false)
    private User user;

}
