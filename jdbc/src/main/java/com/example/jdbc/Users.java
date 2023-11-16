package com.example.jdbc;

import lombok.Data;

@Data
public class Users {
    long id;
    String name;
    String address;

    public Users(long id, String name, String address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

}
