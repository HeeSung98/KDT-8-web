package java231024;

public class Cat extends Animal{
    Cat (String type, String name, int age) {
        super (type, name, age);
    }

    @Override
    public String makeSound() {
        return super.makeSound() + " 먐먐먐";
    }

    public String punch() {
        return "고양이의 냥냥펀치";
    }
}
