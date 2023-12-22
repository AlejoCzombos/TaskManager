package com.example.TaskManager.Security.Auth;

import com.example.TaskManager.Entity.Role;
import com.example.TaskManager.Entity.User;
import com.example.TaskManager.Repository.UserRepository;
import com.example.TaskManager.Security.Jwt.JwtService;
import com.example.TaskManager.Security.Payload.JwtResponse;
import com.example.TaskManager.Security.Payload.LoginRequest;
import com.example.TaskManager.Security.Payload.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repository;
    private final JwtService jwtService;

    public JwtResponse login(LoginRequest request){
        return null;
    }

    public JwtResponse register(RegisterRequest request){
        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(request.getPassword())
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .role(Role.USER)
                .build();

        repository.save(user);

        return JwtResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }

}
