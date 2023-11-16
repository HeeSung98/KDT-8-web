package com.practice;

import com.practice.configuraction.HelloWorldConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class PracticeApplication {

    public static void main(String[] args) {
        SpringApplication.run(PracticeApplication.class, args);

//        var context = new AnnotationConfigApplicationContext(HelloWorldConfiguration.class);
//
//        System.out.println(context.getBean("name"));
//        System.out.println(context.getBean("age"));
//        System.out.println(context.getBean("person"));
//        System.out.println(context.getBean("person2"));
//        System.out.println(context.getBean("myAddress"));
//        System.out.println(context.getBean("information"));
//
//        String[] beans = context.getBeanDefinitionNames(); {
//            for (String name: beans) {
//                System.out.println(name);
//            }
//        }
    }

}
