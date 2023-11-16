package com.practice.configuraction;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//record: getter, setter, 생성자를 자동으로 생성해줌
record Person(String name, int age) {}
record Address(String address, int postcode) {}
record Information(String name, int age, Address address) {}

@Configuration
public class HelloWorldConfiguration {
    @Bean
    public String name() {
        return "KDT-8";
    }

    @Bean
    public int age() {
        return 26;
    }

    @Bean
    public Person person() {
        return new Person("heesung", 26);
    }

    @Bean
    public Person person2() {
        return new Person(name(), age());
    }

    @Bean (name = "myAddress")
    public Address address() {
        return new Address("서울시 마포구", 31581);
    }

    @Bean
    public Information information(String name, int age, Address myAddress) {
        return new Information(name, age, myAddress);
    }
}
