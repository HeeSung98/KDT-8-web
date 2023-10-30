package java231025;

import java.util.ArrayList;

public class Main
{
    public static void main(String[] args) {
        Playable playable1 = new PlayableImpl1();
        Playable playable2 = new PlayableImpl2();
        playable1.play();
        playable1.pause();
        playable1.stop();
        playable2.play();
        playable2.pause();
        playable2.stop();

        ArrayList<Vehicle> arr = new ArrayList<>();
        Car car = new Car("붕붕", 250);
        Airplane airplane = new Airplane("휭휭", 800);

        arr.add(car);
        arr.add(airplane);

        for(Vehicle v: arr) {
            v.move();
            if( v instanceof Flyable) {
                ((Flyable)v).fly();
            }
        }
    }
}