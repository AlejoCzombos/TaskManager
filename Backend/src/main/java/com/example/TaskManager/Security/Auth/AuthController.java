package com.example.TaskManager.Security.Auth;

import com.example.TaskManager.Security.Payload.JwtResponse;
import com.example.TaskManager.Security.Payload.LoginRequest;
import com.example.TaskManager.Security.Payload.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest request){
        return ResponseEntity.ok(authService.login(request));
    }


    @PostMapping("/register")
    public ResponseEntity<JwtResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(authService.register(request));
    }
}
