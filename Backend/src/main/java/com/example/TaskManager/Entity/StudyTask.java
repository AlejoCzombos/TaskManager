package com.example.TaskManager.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
@Entity
@Table(name = "study_task")
public class StudyTask extends Task{

    @Column(name = "subject", nullable = false, length = 20)
    private String subject;

    public StudyTask(){
        this.setTypeTask("Study");
    }

}
