package com.example.TaskManager.Security.Config;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                contact = @Contact(
                        name = "Alejo Czombos",
                        email = "alejoczombos@gmail.com",
                        url = "https://github.com/AlejoCzombos"
                ),
                title = "Task Manager API",
                description = "API para la gestión de tareas de un usuario con autenticación JWT.",
                version = "1.0"
                // license = @License( name = "License")
                // url =  "url license"
        ),
        // termsOfService = "Terms of service"
        servers = {
                @Server(
                        description = "Local ENV",
                        url = "http://localhost:8081"
                )
        },
        security = {
                @SecurityRequirement(name = "bearerAuth")
        }
)
@SecurityScheme(
        name = "bearerAuth",
        description = "Registrate con el endpoint register del Authentication controller para obtener el JWT token",
        scheme = "bearer",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        in = SecuritySchemeIn.HEADER
)
public class OpenApiConfig {
}