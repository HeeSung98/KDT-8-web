package java231025;

public class Car extends Vehicle{

    Car(String n, int m) {
        super(n, m);
    }

    @Override
    public void move() {
        System.out.println("도로를 따라 이동중");
    }
}
