package com.example.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AutoExample {
    private final AutowiredExample autowiredExample;

    @Autowired
    public AutoExample(AutowiredExample autowiredExample) {
        this.autowiredExample = autowiredExample;
    }
}
