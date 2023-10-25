package java231024;

public class Dog extends Animal{
    Dog(String type, String name, int age) {
        super (type, name, age);
    }

    @Override
    public String makeSound() {
        return super.makeSound() + " 댕댕댕";
    }

    public String sitdown() {
        return "댕댕이의 앉기";
    }
}
