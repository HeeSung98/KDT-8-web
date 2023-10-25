package java231024;


public class Main
{
    public static void main(String[] args) {
        Person ph = new Person("heesung", 26);
        Student sh = new Student("heesung", 26, "CE");

        System.out.println(ph.toString());
        System.out.println(sh.toString());

        Cat cat = new Cat("떼껄룩", "껄룩", 3);
        Dog dog = new Dog("댕댕이", "댕댕", 3);
        System.out.println(cat.makeSound());
        System.out.println(dog.makeSound());
        System.out.println(dog.sitdown());
        System.out.println(cat.punch());

        Baek baek = new Baek("백종원", 50, "연세대", 1234);
        Kim kim = new Kim("김가네", 50, "고려대", 1234);
        System.out.println(kim.todo());
        System.out.println(baek.todo());

    }
}