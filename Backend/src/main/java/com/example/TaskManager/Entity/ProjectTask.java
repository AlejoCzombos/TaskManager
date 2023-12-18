package com.example.TaskManager.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Entity
@Table(name = "project_task")
public class ProjectTask extends Task{

    @Column(name = "project_status", nullable = false)
    private String projectStatus;

    public ProjectTask() {
        this.setTypeTask("Project");
    }

}
