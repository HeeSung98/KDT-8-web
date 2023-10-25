package java231024;

public class Animal {
    String type;
    String name;
    int age;

    public Animal(String type, String name, int age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }

    public String makeSound() {
        return "동물은 소리를 낸다";
    }
}
