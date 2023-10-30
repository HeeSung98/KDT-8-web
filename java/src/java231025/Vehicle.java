package java231025;

public abstract class Vehicle {
    String name;
    int maxSpeed;

    Vehicle(String n, int m) {
        this.name = n;
        this.maxSpeed = m;
    }

    abstract void move();
}
