package java231025;

public class Airplane extends Vehicle implements Flyable{
    Airplane(String n, int m) {
        super(n, m);
    }

    @Override
    public void fly() {
        System.out.println("고도 10,000피트 상공에서 비행중");
    }

    @Override
    public void move() {
        System.out.println("하늘을 날아가는 중");
    }
}
