package com.example.TaskManager.DTO;


import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class TaskDTO {

    @Null(message = "Id must be null")
    private Long id;

    @NotNull(message = "Title must not be null")
    @Size(min = 1, max = 50, message = "Title must be between 1 and 50 characters")
    private String title;

    @NotNull(message = "Description must not be null")
    @Size(min = 1, max = 250, message = "Description must be between 1 and 250 characters")
    private String description;

    @NotNull
    private Boolean finished = false;

    @NotNull
    private Boolean important = false;

    @NotNull
    @Size(min = 1, max = 10, message = "Date must be in format yyyy-MM-dd")
    private Date date;
}
