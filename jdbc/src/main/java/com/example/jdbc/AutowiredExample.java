package com.example.jdbc;

import org.springframework.stereotype.Component;

@Component
public class AutowiredExample {
    public String sayHello(String name) {
        return "Hello " + name + "?";
    }
}

