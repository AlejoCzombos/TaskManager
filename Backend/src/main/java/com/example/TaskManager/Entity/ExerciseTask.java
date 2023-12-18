package com.example.TaskManager.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Entity
@Table(name = "task_exercise")
public class ExerciseTask extends Task {

    @Column(name = "duration_estimated", nullable = false)
    private int durationEstimated; //En minutos

    public ExerciseTask() {
        this.setTypeTask("Exercise");
    }
}
